/* ==========================================================================
   Atlas study controls for PHAR 4346 DEENT (appended to atlas.js by
   gen_atlas.py). The core's Atlas view (views.js renderAtlas) draws the
   tiles; this adds, without changing the core:
     - a learning-priority badge on each tile (core / reference only /
       needs verification) and a toggle that hides reference-only
       structures (hidden by default, for focused exam review);
     - a "Key features" toggle that hides or shows the shaded features;
     - the deck page and exam on each tile;
     - "Compare structures" on tiles whose lecture drawing differs from the
       verified drug structure: both drawings side by side, the differing
       atoms shaded, and what differs.
   In "Hide names" mode the source line, the compare button and the
   discrepancy text are hidden, since they name the structure.
   ========================================================================== */
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
    verify: 'Not yet confirmed against the lecture or a chemistry database; kept out of questions.',
  };

  const css = `
.atpri{display:inline-block;font-size:10.5px;letter-spacing:.04em;text-transform:uppercase;border-radius:4px;padding:1px 6px;margin-right:6px;border:1px solid var(--line);color:var(--text-dim)}
.atpri.p-core{border-color:var(--accent);color:var(--accent)}
.atpri.p-verify{border-style:dashed}
.atsrc{font-size:11px;color:var(--text-dim);margin:0}
#v-atlas.ref-off .attile.is-ref{display:none}
#v-atlas.shade-off .atfig svg [fill="var(--wash)"],#v-atlas.shade-off .atfig svg [stroke="var(--wash)"]{display:none}
#v-atlas.namesoff .atsrc,#v-atlas.namesoff .atcmpbtn,#v-atlas.namesoff .atcmp{display:none}
#v-atlas.namesoff .attile.shown .atsrc,#v-atlas.namesoff .attile.shown .atcmpbtn{display:block}
.atcmpbtn{align-self:flex-start}
.atcmp{border:1px solid var(--line);border-radius:6px;padding:8px;background:var(--surface)}
.atcmp[hidden]{display:none}
.atcmpgrid{display:grid;grid-template-columns:1fr 1fr;gap:8px}
@media (max-width:520px){.atcmpgrid{grid-template-columns:1fr}}
.atcmp figure{margin:0;display:flex;flex-direction:column;gap:4px}
.atcmp figure svg{max-width:100%;height:auto;color:var(--text)}
.atcmp figcaption{font-size:11.5px;font-weight:600}
.atcmp dl{margin:8px 0 0;font-size:12px;line-height:1.45}
.atcmp dt{font-weight:600;margin-top:4px}
.atcmp dd{margin:0;color:var(--text-dim)}
.atexcl{font-size:12.5px;color:var(--text-dim);margin-top:18px}
`;

  function enhance(view) {
    if (view.dataset.deentAtlas === '1') return;
    const tiles = [...view.querySelectorAll('.attile')];
    const items = [];
    for (const b of ATLAS.boards) for (const s of b.sections) for (const it of s.items) items.push(it);
    if (!tiles.length || tiles.length !== items.length) return;     // not drawn yet, or drawn differently
    view.dataset.deentAtlas = '1';
    const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

    tiles.forEach((t, i) => {
      const it = items[i], m = it.meta || {};
      t.dataset.key = it.plain;
      t.classList.add('pri-' + (m.priority || 'core'));
      if (m.priority === 'reference') t.classList.add('is-ref');
      const name = t.querySelector('.atname');
      const badge = document.createElement('span');
      badge.className = 'atpri p-' + (m.priority || 'core');
      badge.textContent = LABEL[m.priority || 'core'];
      badge.title = (TITLE[m.priority || 'core']) + (m.reason ? ' ' + m.reason : '');
      t.insertBefore(badge, name);
      const src = document.createElement('p');
      src.className = 'atsrc';
      src.textContent = 'DPAW deck p. ' + it.slide + ' · ' + (m.exam || 'Exam 1') +
        (m.chembl ? ' · ChEMBL ' + m.chembl : '');
      t.appendChild(src);
      const c = ATLAS.CMP[it.plain];
      if (c && m.discrepancy) {
        const d = m.discrepancy;
        const btn = document.createElement('button');
        btn.type = 'button'; btn.className = 'chip atcmpbtn'; btn.textContent = 'Compare structures';
        btn.setAttribute('aria-expanded', 'false');
        const box = document.createElement('div');
        box.className = 'atcmp'; box.hidden = true;
        box.innerHTML = `<div class="atcmpgrid">
            <figure>${c.lecture}<figcaption>As drawn in lecture (DPAW p. ${esc(c.slide)})</figcaption></figure>
            <figure>${c.verified}<figcaption>Verified Drug Structure${m.chembl ? ' (ChEMBL ' + esc(m.chembl) + ')' : ''}</figcaption></figure>
          </div>
          <dl><dt>Lecture drawing</dt><dd>${esc(d.lecture_shows)}</dd>
          <dt>Verified structure</dt><dd>${esc(d.verified_has)}</dd>
          <dt>Where</dt><dd>${esc(d.where)}</dd>
          <dt>What he emphasized</dt><dd>${esc(d.emphasized)}</dd>
          <dt>Does it change the concept?</dt><dd>${esc(d.changes_concept)}</dd></dl>`;
        btn.onclick = () => { box.hidden = !box.hidden; btn.setAttribute('aria-expanded', String(!box.hidden)); };
        t.appendChild(btn); t.appendChild(box);
        badge.textContent += c.primary === 'lecture' ? ' · lecture drawing differs from drug' : ' · one slide draws it differently';
      }
    });

    // toolbar toggles
    const bar = view.querySelector('.atbar');
    const refBtn = document.createElement('button'), shBtn = document.createElement('button');
    refBtn.className = shBtn.className = 'chip';
    const nRef = tiles.filter(t => t.classList.contains('is-ref')).length;
    const setRef = on => { view.classList.toggle('ref-off', !on); refBtn.setAttribute('aria-pressed', String(on));
      refBtn.textContent = (on ? 'Hide' : 'Show') + ' reference-only (' + nRef + ')'; store.set('ref', on); };
    const setShade = on => { view.classList.toggle('shade-off', !on); shBtn.setAttribute('aria-pressed', String(!on));
      shBtn.textContent = on ? 'Hide key features' : 'Reveal key features'; store.set('shade', on); };
    refBtn.onclick = () => setRef(view.classList.contains('ref-off'));
    shBtn.onclick = () => setShade(view.classList.contains('shade-off'));
    if (bar) { const sp = bar.querySelector('.spacer'); bar.insertBefore(refBtn, sp); bar.insertBefore(shBtn, sp); }
    setRef(store.get('ref', false));
    setShade(store.get('shade', true));

    if (ATLAS.EXCLUDED && ATLAS.EXCLUDED.length) {
      const p = document.createElement('p');
      p.className = 'atexcl';
      p.textContent = 'Not in the Atlas, by Dr. Sikazwe\'s instruction: ' +
        ATLAS.EXCLUDED.map(x => x.item + ' (DPAW p. ' + x.page + ')').join('; ') + '.';
      view.appendChild(p);
    }
  }

  function watch() {
    const view = document.getElementById('v-atlas');
    if (!view) return;
    enhance(view);
    new MutationObserver(() => enhance(view)).observe(view, {childList: true});
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', watch); else watch();
})();
