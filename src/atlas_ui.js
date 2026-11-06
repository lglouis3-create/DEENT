/* ==========================================================================
   Atlas study controls for PHAR 4346 DEENT (appended to atlas.js by
   gen_atlas.py). The core's Atlas view (views.js renderAtlas) draws the
   tiles; this rearranges each tile, without changing the core, into:
     1. the priority badge (core / reference only / needs verification),
        the deck page and exam, and "Not on the assigned pages" where the
        item is outside Dr. Sikazwe's assigned pages (11/06), as one short line;
     2. "Core learning": the tile's main text (what is shaded and why), with
        its inline citations moved to part 5;
     3. "Also in the lecture": the other taught facts, as a short list;
     4. "Compare structures" where a lecture drawing differs from the drug;
     5. "Deeper understanding" (collapsed, only where a published source is
        cited; beyond the lecture, not tested);
     6. "Sources and verification" (collapsed): slide and transcript
        citations, priority reason, PubChem and ChEMBL records, verification.
   It also adds the reference-only filter (hidden by default), the key-feature
   toggle, a one-line legend, counts that follow search and filter, an empty
   search message, and, in "Hide names" mode, keyboard reveal and neutral
   labels so that no heading, label or hidden text names a structure.
   ========================================================================== */
/* Citation parser, kept outside the page code so atlas_check.js can test it.
   A parenthesis is a citation when every ";"-separated part is a slide
   reference ("slide 7", "slides 48-49") or a transcript reference
   ("T 683–689, 665–668", "T@20426, T@20690", "11/04 T@2989–@3430, @4330–@4410").
   A leading "Slide 54: " is a citation too. Any other parenthesis stays. */
const ATLAS_UI = (() => {
  const RNG = '@?\\d+(?:[–-]@?\\d+)?';
  const PART = new RegExp('^(?:slides? \\d+(?:[–-]\\d+)?|(?:\\d{2}/\\d{2} )?T ?' + RNG +
    '(?:, ?(?:T ?)?' + RNG + ')*)$');
  const isCite = inner => inner.split(';').every(p => PART.test(p.trim()));
  function strip(text) {
    const cites = [];
    let out = String(text || '').replace(/\s*\(([^()]*)\)/g, (m, inner) => {
      if (isCite(inner)) { cites.push(inner.trim()); return ''; }
      return m;
    });
    // a leading "Slide 55: " starts its own list item (marked \u0002)
    out = out.replace(/(^|[.;]\s+)Slide (\d+): (.)/g, (m, pre, n, ch) => { cites.push('slide ' + n); return pre + '\u0002' + ch.toUpperCase(); });
    out = out.replace(/\s+([.,;:])/g, '$1').replace(/\s{2,}/g, ' ').trim();
    const marked = out; out = out.replace(/\u0002/g, '');
    // a citation left in the text means the parser did not understand it
    const clean = !/\((?:[^()]*?)\b(?:slides? \d|T ?@?\d)/.test(out) && !/\bT ?@\d/.test(out) && !/\bT \d+[–-]\d+/.test(out);
    return {text: out, marked, cites, clean};
  }
  // sentences, without regex lookbehind (older Safari)
  const sentences = text => String(text).replace(/\.\s+(?=[A-Z0-9"“\u0002])/g, '.\u0001').replace(/\u0002/g, '\u0001')
    .split('\u0001').map(s => s.trim()).filter(Boolean);
  return {strip, sentences, isCite};
})();

(() => {
  if (typeof document === 'undefined') return;
  const store = {
    get(k, d) { try { const v = localStorage.getItem('phar4346-atlas:' + k); return v === null ? d : v === '1'; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('phar4346-atlas:' + k, v ? '1' : '0'); } catch (e) {} },
  };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c]));
  const LABEL = {core: 'Core', reference: 'Reference only', verify: 'Needs verification'};
  const TITLE = {
    core: 'Taught or emphasized in lecture: study this structure.',
    reference: 'Shown in lecture to illustrate a concept; the whole structure need not be memorized. The concept stays examinable.',
    verify: 'On a slide but not confirmed as taught in the recordings; kept out of questions.',
  };
  const STATUS = {'exact': 'PubChem and ChEMBL agree', 'exact-pubchem': 'PubChem match (no ChEMBL record)',
    'stereo-unspecified': 'same molecule; stereo left open in one source', 'tautomer': 'same molecule; PubChem stores another tautomer',
    'teaching-structure': 'teaching structure'};
  const ANON = 'Chemical structure to identify';

  const css = `
.attile{min-width:0}
.atname{overflow-wrap:anywhere}
.atmeta{display:flex;flex-wrap:wrap;align-items:center;gap:4px 6px;margin:0}
.atpri{display:inline-block;font-size:10.5px;letter-spacing:.04em;text-transform:uppercase;border-radius:4px;padding:1px 6px;border:1px solid var(--line);color:var(--text-dim)}
.atpri.p-core{border-color:var(--accent);color:var(--accent)}
.atpri.p-verify{border-style:dashed}
.atpg{font-size:11px;color:var(--text-dim)}
.atunassigned{font-size:10.5px;color:var(--text-dim);border:1px dashed var(--line);border-radius:4px;padding:1px 6px}
.atlbl{font-size:10.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--text-dim);margin:0 0 -4px}
.atalso ul{margin:0;padding-left:16px;font-size:12px;line-height:1.45;color:var(--text-dim)}
.atalso li{margin:0 0 2px}
.atdeep,.atsrcs{font-size:12px;line-height:1.45;color:var(--text-dim);border-top:1px solid var(--line);padding-top:5px}
.atdeep summary,.atsrcs summary{cursor:pointer;font-size:11.5px;color:var(--text)}
.atdeep summary small{color:var(--text-dim);font-size:10.5px;letter-spacing:.04em;text-transform:uppercase}
.atdeep p,.atsrcs p{margin:5px 0 0}
.atsrcs dl{margin:5px 0 0}
.atsrcs dt{font-weight:600;color:var(--text);margin-top:4px}
.atsrcs dd{margin:0;overflow-wrap:anywhere}
.atsrcs ul{margin:0;padding-left:16px}
.atdeep a,.atsrcs a{color:var(--accent);overflow-wrap:anywhere}
.atlegend{font-size:12px;color:var(--text-dim);margin:-8px 0 14px;line-height:1.5}
.atlegend b{font-weight:600;color:var(--text)}
.atempty{font-size:13.5px;color:var(--text);margin:8px 0 18px}
.atempty[hidden]{display:none}
#v-atlas .at-none{display:none!important}
.athead-anon{display:none}
#v-atlas.ref-off .attile.is-ref{display:none}
#v-atlas.shade-off .atfig svg [fill="var(--wash)"],#v-atlas.shade-off .atfig svg [stroke="var(--wash)"]{display:none}
#v-atlas.namesoff .atpg,#v-atlas.namesoff .atlbl,#v-atlas.namesoff .atalso,#v-atlas.namesoff .atdeep,#v-atlas.namesoff .atsrcs,
#v-atlas.namesoff .atcmpbtn,#v-atlas.namesoff .atcmp,#v-atlas.namesoff .bintro,#v-atlas.namesoff .atsub,#v-atlas.namesoff .atnote,
#v-atlas.namesoff .athead-name,#v-atlas.namesoff .atexcl{display:none}
#v-atlas.namesoff .athead-anon{display:inline}
#v-atlas.namesoff .attile.shown .atpg{display:inline}
#v-atlas.namesoff .attile.shown .atlbl,#v-atlas.namesoff .attile.shown .atalso,#v-atlas.namesoff .attile.shown .atdeep,
#v-atlas.namesoff .attile.shown .atsrcs,#v-atlas.namesoff .attile.shown .atcmpbtn{display:block}
#v-atlas.namesoff .atfig:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
.atcmpbtn{align-self:flex-start}
.attile.cmp-open{grid-column:1/-1}
.attile:has(details[open]){grid-column:1/-1}
.atdeep,.atsrcs{overflow-wrap:anywhere}
.attile.cmp-open .atfig svg{max-height:220px;width:auto}
.atcmp{border:1px solid var(--line);border-radius:6px;padding:8px;background:var(--surface)}
.atcmp[hidden]{display:none}
.atcmpgrid{display:grid;grid-template-columns:1fr 1fr;gap:8px}
@media (max-width:520px){.atcmpgrid{grid-template-columns:1fr}}
.atcmp figure{margin:0;display:flex;flex-direction:column;gap:4px;min-width:0}
.atcmp figure svg{max-width:100%;height:auto;color:var(--text)}
.atcmp figcaption{font-size:11.5px;font-weight:600}
.atcmp dl{margin:8px 0 0;font-size:12px;line-height:1.45}
.atcmp dt{font-weight:600;margin-top:4px}
.atcmp dd{margin:0;color:var(--text-dim)}
.atexcl{font-size:12.5px;color:var(--text-dim);margin-top:18px}
`;

  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html !== undefined) e.innerHTML = html; return e; };
  const unparsed = [];

  function enhance(view) {
    if (view.dataset.deentAtlas === '1') return;
    const tiles = [...view.querySelectorAll('.attile')];
    const items = [];
    for (const b of ATLAS.boards) for (const s of b.sections) for (const it of s.items) items.push(it);
    if (!tiles.length || tiles.length !== items.length) return;     // not drawn yet, or drawn differently
    view.dataset.deentAtlas = '1';
    const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

    tiles.forEach((t, i) => {
      const it = items[i], m = it.meta || {}, pr = m.priority || 'core';
      t.dataset.key = it.plain;
      t.classList.add('pri-' + pr);
      if (pr === 'reference') t.classList.add('is-ref');
      const name = t.querySelector('.atname'), tell = t.querySelector('.attell'), eg = t.querySelector('.ateg');
      const svg = t.querySelector('.atfig svg');
      if (svg) svg.dataset.label = svg.getAttribute('aria-label') || '';

      // 1. badge and page
      const row = el('p', 'atmeta');
      const badge = el('span', 'atpri p-' + pr);
      badge.textContent = LABEL[pr];
      badge.title = TITLE[pr];
      const pg = el('span', 'atpg');
      pg.textContent = 'DPAW p. ' + it.slide + ' · ' + (m.exam || 'Exam 1');
      row.append(badge, pg);
      if (m.assigned === false) {               // not on Dr. Sikazwe's assigned pages (11/06); names nothing, so it stays in Hide names
        const na = el('span', 'atunassigned');
        na.textContent = 'Not on the assigned pages';
        na.title = 'Outside Dr. Sikazwe\'s assigned pages for Exam 1 (list of 11/06: slides 7-9, 12, 15-22, 24-33, 42-54, 60-65, as numbered on the slides)';
        row.append(na);
      }
      t.insertBefore(row, name);

      // 2. core learning
      const cites = [];
      const pt = ATLAS_UI.strip(it.t);
      if (tell) {
        if (pt.clean) { tell.textContent = pt.text; pt.cites.forEach(c => cites.push(['Core learning', c])); }
        else unparsed.push(it.plain + ' (main text)');
        const lbl = el('p', 'atlbl'); lbl.textContent = 'Core learning';
        t.insertBefore(lbl, tell);
      }

      // 3. also in the lecture
      let anchor = tell || name;
      if (it.e) {
        const pe = ATLAS_UI.strip(it.e);
        let lines;
        if (pe.clean) { lines = ATLAS_UI.sentences(pe.marked); pe.cites.forEach(c => cites.push(['Also in the lecture', c])); }
        else { lines = [it.e]; unparsed.push(it.plain + ' (also in the lecture)'); }
        const box = el('div', 'atalso');
        box.innerHTML = '<p class="atlbl">Also in the lecture</p><ul>' + lines.map(l => '<li>' + esc(l) + '</li>').join('') + '</ul>';
        if (eg) eg.replaceWith(box); else anchor.after(box);
        anchor = box;
      } else if (eg) eg.remove();

      // 4. compare structures
      const c = ATLAS.CMP[it.plain];
      let after = anchor;
      if (c && m.discrepancy) {
        const d = m.discrepancy;
        const btn = el('button', 'chip atcmpbtn');
        btn.type = 'button'; btn.textContent = 'Compare structures';
        btn.setAttribute('aria-expanded', 'false');
        const box = el('div', 'atcmp'); box.hidden = true;
        box.innerHTML = `<div class="atcmpgrid">
            <figure>${c.lecture}<figcaption>As drawn in lecture (DPAW p. ${esc(c.slide)})${c.lecture_cid ? ': this drawing is PubChem CID ' + esc(c.lecture_cid) : ''}</figcaption></figure>
            <figure>${c.verified}<figcaption>Verified Drug Structure${m.pubchem ? ' (PubChem CID ' + esc(m.pubchem) + (m.chembl ? '; ChEMBL ' + esc(m.chembl) : '') + ')' : (m.chembl ? ' (ChEMBL ' + esc(m.chembl) + ')' : '')}</figcaption></figure>
          </div>
          <dl><dt>Lecture drawing</dt><dd>${esc(d.lecture_shows)}</dd>
          <dt>Verified structure</dt><dd>${esc(d.verified_has)}</dd>
          <dt>Where</dt><dd>${esc(d.where)}</dd>
          <dt>What he emphasized</dt><dd>${esc(d.emphasized)}</dd>
          <dt>Does it change the concept?</dt><dd>${esc(d.changes_concept)}</dd></dl>`;
        btn.onclick = () => { box.hidden = !box.hidden; btn.setAttribute('aria-expanded', String(!box.hidden)); t.classList.toggle('cmp-open', !box.hidden); };
        t.append(btn, box);
        after = box;
        badge.textContent += c.primary === 'lecture' ? ' · lecture drawing differs from drug' : ' · one slide draws it differently';
      }

      // 5. deeper understanding (optional, sourced, not tested)
      if (m.deeper) {
        const dp = el('details', 'atdeep');
        dp.innerHTML = '<summary>Deeper understanding <small>· beyond the lecture, not tested</small></summary>' +
          '<p>' + esc(m.deeper.text) + '</p>' +
          m.deeper.sources.map(s => '<p>Source: ' + esc(s.cite) + '. <a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.url) + '</a></p>').join('');
        t.appendChild(dp);
      }

      // 6. sources and verification
      const rows = [];
      rows.push(['Lecture', 'DPAW deck p. ' + esc(it.slide) + ' · ' + esc(m.exam || 'Exam 1')]);
      if (cites.length) rows.push(['Cited in this tile', '<ul>' + cites.map(([part, x]) => '<li>' + esc(part) + ': ' + esc(x) + '</li>').join('') + '</ul>']);
      rows.push(['Priority', esc(LABEL[pr]) + (m.reason ? ': ' + esc(m.reason) : '') + (m.psrc ? ' (' + esc(m.psrc) + ')' : '')]);
      const recs = [];
      if (m.pubchem) recs.push('PubChem CID <a href="https://pubchem.ncbi.nlm.nih.gov/compound/' + esc(m.pubchem) + '" target="_blank" rel="noopener">' + esc(m.pubchem) + '</a>');
      if (m.chembl) recs.push('ChEMBL <a href="https://www.ebi.ac.uk/chembl/explore/compound/' + esc(m.chembl) + '" target="_blank" rel="noopener">' + esc(m.chembl) + '</a>');
      if (recs.length) rows.push(['Records', recs.join(' · ')]);
      if (m.verification) rows.push(['Verification', esc(STATUS[m.verification] || m.verification) +
        (m.checked ? ', checked ' + esc(m.checked) : '') + (m.vnote ? '. ' + esc(m.vnote) : '')]);
      if (m.note) rows.push(['Drawing note', esc(m.note)]);
      const sd = el('details', 'atsrcs');
      sd.innerHTML = '<summary>Sources and verification</summary><dl>' +
        rows.map(([k, v]) => '<dt>' + k + '</dt><dd>' + v + '</dd>').join('') + '</dl>';
      t.appendChild(sd);
    });
    if (unparsed.length) console.warn('Atlas: citations left in place on', unparsed.join('; '));

    // board headings: a neutral label replaces the name in Hide names mode
    view.querySelectorAll('.atboard').forEach((b, n, all) => {
      const h = b.querySelector('h3'); if (!h) return;
      const nm = el('span', 'athead-name'); while (h.firstChild) nm.appendChild(h.firstChild);
      const an = el('span', 'athead-anon'); an.textContent = 'Board ' + (n + 1) + ' of ' + all.length;
      h.append(nm, an);
    });

    // toolbar toggles, legend, empty message
    const bar = view.querySelector('.atbar');
    const refBtn = el('button', 'chip'), shBtn = el('button', 'chip');
    refBtn.type = shBtn.type = 'button';
    const nRef = tiles.filter(t => t.classList.contains('is-ref')).length;
    const legend = el('p', 'atlegend', '<b>Core</b>: taught or emphasized; study the structure. ' +
      '<b>Reference only</b>: shown to illustrate a concept; hidden by default, the concept stays examinable. ' +
      '<b>Needs verification</b>: on a slide but not confirmed as taught; kept out of questions.');
    const empty = el('p', 'atempty'); empty.hidden = true; empty.setAttribute('role', 'status');
    if (bar) { bar.after(legend); legend.after(empty); }
    const q = view.querySelector('#atq'), count$ = view.querySelector('#atCount');
    if (count$) count$.setAttribute('aria-live', 'polite');

    const update = () => {
      const refOff = view.classList.contains('ref-off'), namesOff = view.classList.contains('namesoff');
      const vis = t => !t.hidden && !(refOff && t.classList.contains('is-ref'));
      view.querySelectorAll('.atgrid').forEach(g => {
        const any = [...g.querySelectorAll('.attile')].some(vis);
        g.classList.toggle('at-none', !any);
        const lab = g.previousElementSibling;
        if (lab && lab.classList.contains('atsub')) lab.classList.toggle('at-none', !any);
      });
      view.querySelectorAll('.atboard').forEach(b => b.classList.toggle('at-none', ![...b.querySelectorAll('.attile')].some(vis)));
      const shown = tiles.filter(vis).length, refHid = refOff ? tiles.filter(t => !t.hidden && t.classList.contains('is-ref')).length : 0;
      const revealed = tiles.filter(t => vis(t) && t.classList.contains('shown')).length;
      if (count$) count$.textContent = (shown === tiles.length ? tiles.length + ' structures' : shown + ' of ' + tiles.length + ' structures') +
        (refHid ? ' · ' + refHid + ' reference-only hidden' : '') + (namesOff ? ' · ' + revealed + ' revealed' : '');
      const term = q ? q.value.trim() : '';
      empty.hidden = shown > 0;
      if (!shown) empty.textContent = (term ? 'No structure matches “' + term + '”.' : 'No structure is shown.') +
        (refHid ? ' ' + refHid + ' reference-only ' + (refHid === 1 ? 'structure matches' : 'structures match') + '; use “Show reference-only” to see ' + (refHid === 1 ? 'it' : 'them') + '.' : ' Clear the search to see all structures.');
    };

    const setRef = on => { view.classList.toggle('ref-off', !on); refBtn.setAttribute('aria-pressed', String(on));
      refBtn.textContent = (on ? 'Hide' : 'Show') + ' reference-only (' + nRef + ')'; store.set('ref', on); update(); };
    const setShade = on => { view.classList.toggle('shade-off', !on); shBtn.setAttribute('aria-pressed', String(!on));
      shBtn.textContent = on ? 'Hide key features' : 'Reveal key features'; store.set('shade', on); };
    refBtn.onclick = () => setRef(view.classList.contains('ref-off'));
    shBtn.onclick = () => setShade(view.classList.contains('shade-off'));
    if (bar) { const sp = bar.querySelector('.spacer'); bar.insertBefore(refBtn, sp); bar.insertBefore(shBtn, sp); }
    if (q) q.addEventListener('input', update);   // runs after the core's own oninput
    setRef(store.get('ref', false));
    setShade(store.get('shade', true));

    // Hide names: keyboard reveal, neutral accessible names
    const sync = () => {
      const off = view.classList.contains('namesoff');
      tiles.forEach(t => {
        const fig = t.querySelector('.atfig'), svg = fig && fig.querySelector('svg'), shown = t.classList.contains('shown');
        if (svg) svg.setAttribute('aria-label', off && !shown ? ANON : (svg.dataset.label || ''));
        if (!fig) return;
        if (off) {
          fig.tabIndex = 0; fig.setAttribute('role', 'button');
          fig.setAttribute('aria-expanded', String(shown));
          fig.setAttribute('aria-label', shown ? 'Hide this name' : 'Reveal this name');
        } else {
          fig.removeAttribute('tabindex'); fig.removeAttribute('role');
          fig.removeAttribute('aria-expanded'); fig.removeAttribute('aria-label');
        }
      });
      update();
    };
    tiles.forEach(t => {
      const fig = t.querySelector('.atfig');
      if (fig) fig.addEventListener('keydown', e => {
        if (!view.classList.contains('namesoff')) return;
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); fig.click(); }
      });
    });
    let pending = false;
    new MutationObserver(() => { if (pending) return; pending = true;
      Promise.resolve().then(() => { pending = false; sync(); }); })
      .observe(view, {attributes: true, attributeFilter: ['class'], subtree: true});
    sync();

    if (ATLAS.EXCLUDED && ATLAS.EXCLUDED.length) {
      const p = el('p', 'atexcl');
      p.textContent = 'Not in the Atlas, by Dr. Sikazwe\'s instruction: ' +
        ATLAS.EXCLUDED.map(x => x.item + ' (DPAW p. ' + x.page + ')').join('; ') + '.';
      view.appendChild(p);
    }
  }

  function watch() {
    try {
      const view = document.getElementById && document.getElementById('v-atlas');
      if (!view || typeof MutationObserver === 'undefined') return;   // not a real browser page
      enhance(view);
      new MutationObserver(() => { try { enhance(view); } catch (e) { console.error('Atlas controls:', e); } })
        .observe(view, {childList: true});
    } catch (e) { console.error('Atlas controls could not start; the Atlas itself is unaffected.', e); }
  }
  if (typeof document.addEventListener !== 'function') return;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', watch); else watch();
})();
