/* ==========================================================================
   SEARCH, PHAR 4346 DEENT (course-level, Louis, 2026-11-14: "build the search box")
   --------------------------------------------------------------------------
   A Search button in the header (and the "/" key, or Ctrl/Cmd+K) opens a full-screen search. What is typed is looked
   for in every part of the drill and the matches come back grouped, the closest first:
     Drugs            the Drug list's 79 drugs (generic, brand, class, indication) -> opens the drug in Browse
     Diseases         the 23 disease cards (name, summary, step titles)             -> opens the card
     Sections         Reference, Guides and Tell apart sections                      -> jumps to the section
     Diagrams         the drawn figures, by name and by the Purpose sentence         -> jumps to the figure
     Structures       the Atlas                                                      -> opens the Atlas on it
     Terms            the 79 terms of the Diseases tab, with the definition          -> shows the definition here
     Topics           the Topics list and its subtopics                              -> practice that topic
     Questions        the bank: stems, concepts, answers and explanations            -> practice the questions found
   Matching: every word typed must be found (any part of a word counts); common short forms are expanded (vit D, PDE4,
   CNI, MTX, BPO, AHA, FTU ...); when nothing matches, a word that is one or two letters off a word in the drill is
   corrected and the results say so. Titles rank above text; exam-taught drugs rank a little higher.
   Nothing is stored: no storage key, no history. Reads the globals the other course files define and does nothing
   without them; the whole index is built from them on the first open. No core edit.
   ========================================================================== */
const SEARCH_UI = (() => {
  if (typeof document === 'undefined' || !document.createElement || !document.body) return null;

  const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const GREEK = {'α': 'alpha', 'β': 'beta', 'γ': 'gamma', 'κ': 'kappa', 'δ': 'delta', 'μ': 'mu'};
  const norm = s => String(s == null ? '' : s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[αβγκδμ]/g, c => GREEK[c]).replace(/[^a-z0-9]+/g, ' ').trim();
  const strip = h => String(h || '').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, m => ({'&amp;': '&', '&nbsp;': ' ', '&mdash;': '—', '&ndash;': '–', '&middot;': '·', '&alpha;': 'α', '&beta;': 'β'}[m] || ' ')).replace(/\s+/g, ' ').trim();

  /* short forms a student types, in the words the drill uses (each side is already normalized) */
  const ALIAS = {'vit d': 'vitamin d', 'vitd': 'vitamin d', 'pde4': 'pde 4', 'cni': 'calcineurin inhibitor', 'cnis': 'calcineurin inhibitors',
    'mtx': 'methotrexate', 'tcs': 'topical corticosteroid', 'sa': 'salicylic acid', 'ga': 'glycolic acid', 'bpo': 'benzoyl peroxide',
    'aha': 'alpha hydroxy acid', 'bha': 'beta hydroxy acid', 'ftu': 'fingertip unit', 'ra': 'retinoic acid', 'gc': 'glucocorticoid',
    'sunblock': 'sunblock', 'rx': 'rx', 'acitretin': 'acitretin'};
  /* "steroid" has no short form here: the typed word already finds corticosteroid (any part of a word counts), and a
     replacement would hide the entries that say only steroid (the steroid nucleus and its carbon numbering) */
  const expand = q => { let t = norm(q); if (ALIAS[t]) return ALIAS[t]; return t.split(' ').map(w => ALIAS[w] || w).join(' '); };

  /* ---------- the index ---------- */
  let IDX = null, VOCAB = null;
  /* a word of one or two letters (the d of vitamin D) must be a whole word; longer words match any part of a word */
  const has = (e, t) => t.length <= 2 ? (' ' + e.n + ' ').indexOf(' ' + t + ' ') !== -1 : e.n.indexOf(t) !== -1;
  const add = (list, e) => { e.n = norm(e.title + ' ' + (e.kw || '') + ' ' + (e.text || '')); e.nt = norm(e.title); list.push(e); };

  const sectionEntries = (html, view, label, prefix, list) => {
    if (!html) return;
    let doc; try { doc = new DOMParser().parseFromString('<body>' + html + '</body>', 'text/html'); } catch (e) { return; }
    let k = 0;
    doc.body.querySelectorAll('h3').forEach(h => {
      const own = h.getAttribute('id'), id = own || (prefix + '-' + (k++));
      // the text of the section: what follows the heading up to the next h3
      let t = '', n = h.nextElementSibling;
      const sec = h.closest('section');
      if (sec) t = strip(sec.innerHTML); else { while (n && n.tagName !== 'H3') { t += ' ' + strip(n.outerHTML); n = n.nextElementSibling; } }
      add(list, {type: 'sec', label, view, anchor: id, title: strip(h.innerHTML), text: t.slice(0, 7000), boost: 2});
      if (view === 'guide' && sec) sec.querySelectorAll('.gpt').forEach(g => {
        const h5 = g.querySelector('h5'); if (!h5) return;
        add(list, {type: 'sec', label, view, anchor: id, title: strip(h5.innerHTML), text: strip(g.innerHTML).slice(0, 2500), boost: 1, parent: strip(h.innerHTML)});
      });
    });
  };

  function build(){
    const list = [];
    // drugs
    try {
      DRUGLIST.D.forEach(d => {
        const cls = (DRUGLIST.CLASSES && DRUGLIST.CLASSES[d.cls]) || '', use = [d.chartUse].concat((d.use || []).map(u => u.t)).filter(Boolean).join('; ');
        add(list, {type: 'drug', label: 'Drug list', id: d.id, title: d.name + ((d.brands || []).length ? ' (' + d.brands.join(', ') + ')' : ''),
          kw: (d.alt || []).join(' ') + ' ' + cls + ' ' + (d.chartClass || '') + ' ' + (d.sub || ''), text: use, sub: [d.chartClass || cls, use].filter(Boolean).join(' · '),
          boost: (DRUGLIST.scopeOf && DRUGLIST.scopeOf(d) === 'taught') ? 6 : 3});
      });
    } catch (e) { /* no drug list */ }
    // disease cards and terms
    try {
      DZ.cards.forEach(c => add(list, {type: 'dz', label: 'Diseases', id: c.id, title: c.name, text: (c.short || []).join(' ') + ' ' + (c.steps || []).map(s => (s.title || '') + ' ' + (s.q || '')).join(' '),
        sub: (c.short || [])[0] || '', boost: 4}));
      Object.keys(DZ.terms || {}).forEach(k => { const t = DZ.terms[k]; add(list, {type: 'term', label: 'Terms', id: k, title: t[0], text: t[1], sub: t[1], boost: 2}); });
    } catch (e) { /* no Diseases tab */ }
    // the glossary (glossary_data.js): a result opens the Glossary tab at that term
    try { GLOSSARY_UI.terms().forEach(t => add(list, {type: 'gterm', label: 'Glossary', id: t.id, title: t.term, kw: (t.also || []).join(' '), text: t.def, sub: t.def, boost: 1})); } catch (e) { /* no glossary */ }
    // Reference, Guides, Tell apart
    try { sectionEntries(typeof REFERENCE_HTML !== 'undefined' ? REFERENCE_HTML : '', 'ref', 'Reference', 'ref', list); } catch (e) {}
    try { sectionEntries(typeof GUIDE_HTML !== 'undefined' ? GUIDE_HTML : '', 'guide', 'Guides', 'guide', list); } catch (e) {}
    try { sectionEntries(typeof TELL_HTML !== 'undefined' ? TELL_HTML : '', 'tell', 'Tell apart', 'tell', list); } catch (e) {}
    // diagrams
    try {
      const keys = Object.keys(typeof DIA === 'undefined' ? {} : DIA);
      keys.forEach(k => {
        // the name the Diagrams tab gives it, else the title drawn in the figure, else its caption
        const html = String(DIA[k] || ''), tt = html.match(/<text class="title"[^>]*>([^<]+)<\/text>/), al = html.match(/aria-label="([^"]{3,90})/);
        const nm = (typeof DIA_NAMES !== 'undefined' && DIA_NAMES[k]) || (tt && strip(tt[1])) || (al && strip(al[1])) || k.replace(/^(fig|rx|cb)-/, '').replace(/-/g, ' ');
        const pu = (typeof PURPOSE_UI !== 'undefined' && PURPOSE_UI && PURPOSE_UI.text(k)) || '';
        add(list, {type: 'dia', label: 'Diagrams', id: k, title: nm, text: pu, sub: pu, boost: 1});
      });
    } catch (e) {}
    // atlas
    try {
      ATLAS.boards.forEach(b => b.sections.forEach(s => (s.items || []).forEach(it => {
        if (it.meta && it.meta.priority && it.meta.priority !== 'core') return;
        add(list, {type: 'atlas', label: 'Structures', id: it.plain, title: it.n || it.plain, text: it.t || '', sub: (it.t || '').slice(0, 400), boost: 1});
      })));
    } catch (e) {}
    // topics
    try {
      TOPICS.forEach(t => {
        add(list, {type: 'topic', label: 'Topics', id: t.id, sid: null, title: t.name, text: (t.subs || []).map(s => s.name).join(' '), sub: 'Practice this topic', boost: 1});
        (t.subs || []).forEach(s => add(list, {type: 'topic', label: 'Topics', id: t.id, sid: s.id, title: s.name, kw: t.name, text: '', sub: 'in ' + t.name + ' · practice', boost: 0}));
      });
    } catch (e) {}
    IDX = list;
    // vocabulary for the typo correction: the words of every title
    VOCAB = new Set();
    list.forEach(e => e.nt.split(' ').forEach(w => { if (w.length >= 4) VOCAB.add(w); }));
  }

  /* questions are matched at search time (about 1,400): the words must all be in the stem, concept, key answer or explanation */
  const qtext = q => norm([q.stem, q.concept, (q.options || []).filter(o => o.correct).map(o => o.t).join(' '), (typeof q.teach === 'string' ? q.teach : ''), (q.pairs || []).map(p => p.l).join(' ')].join(' '));
  let QN = null;
  const questionsFor = toks => {
    if (!QN) { try { QN = QUESTIONS.map(q => ({q, n: qtext(q)})); } catch (e) { QN = []; } }
    return QN.filter(x => toks.every(t => (t.length <= 2 ? (' ' + x.n + ' ').indexOf(' ' + t + ' ') !== -1 : x.n.indexOf(t) !== -1))).map(x => x.q);
  };

  const lev = (a, b) => {
    if (a === b) return 0; if (Math.abs(a.length - b.length) > 2) return 3;
    const m = []; for (let i = 0; i <= a.length; i++) { m[i] = [i]; }
    for (let j = 1; j <= b.length; j++) m[0][j] = j;
    for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++)
      m[i][j] = Math.min(m[i - 1][j] + 1, m[i][j - 1] + 1, m[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return m[a.length][b.length];
  };
  /* a word that is in no entry is replaced by the closest word of the drill when it is one letter off (two for long words) */
  function correct(toks){
    let changed = false;
    const out = toks.map(t => {
      if (t.length < 5 || IDX.some(e => has(e, t))) return t;
      let best = null, bd = t.length > 8 ? 3 : 2;
      VOCAB.forEach(w => { if (w[0] !== t[0]) return; const d = lev(t, w); if (d < bd) { bd = d; best = w; } });
      if (best) { changed = true; return best; }
      return t;
    });
    return {toks: out, changed};
  }

  function search(raw){
    if (!IDX) build();
    let toks = expand(raw).split(' ').filter(Boolean), note = '';
    if (!toks.length) return {toks, groups: [], qs: [], note};
    const run = tk => {
      const q = tk.join(' '), res = [];
      IDX.forEach(e => {
        if (!tk.every(t => has(e, t))) return;
        // a topic or subtopic with no question to ask is left out, as on the Topics list; read at each search because the
        // Topics filters (professor, tier, tag) change the pool
        if (e.type === 'topic' && typeof poolFor === 'function') { try { if (!poolFor(e.id, e.sid).length) return; } catch (err) {} }
        let s = e.boost || 0;
        if (e.nt === q) s += 100;
        else if (e.nt.indexOf(q) === 0) s += 70;
        else if (e.nt.indexOf(q) !== -1) s += 50;
        tk.forEach(t => { if (e.nt.split(' ').some(w => w.indexOf(t) === 0)) s += 20; else if (e.nt.indexOf(t) !== -1) s += 10; else s += 2; });
        res.push({e, s});
      });
      return res.sort((a, b) => b.s - a.s);
    };
    let res = run(toks), qs = questionsFor(toks);
    if (!res.length && !qs.length) {
      const c = correct(toks);
      if (c.changed) { const r2 = run(c.toks), q2 = questionsFor(c.toks); if (r2.length || q2.length) { res = r2; qs = q2; toks = c.toks; note = 'Showing results for “' + c.toks.join(' ') + '”.'; } }
    }
    const ORDER = ['drug', 'dz', 'sec', 'dia', 'atlas', 'term', 'gterm', 'topic'], NAMES = {drug: 'Drugs', dz: 'Diseases', sec: 'Sections', dia: 'Diagrams', atlas: 'Structures', term: 'Terms', gterm: 'Glossary', topic: 'Topics'};
    const groups = ORDER.map((t, i) => { const rs = res.filter(r => r.e.type === t); return {type: t, name: NAMES[t], items: rs.map(r => r.e), best: rs.length ? rs[0].s : -1, i}; })
      .filter(g => g.items.length).sort((a, b) => b.best - a.best || a.i - b.i);
    return {toks, groups, qs, note};
  }

  /* ---------- the screen ---------- */
  const CSS = `
dialog.srch{border:0;padding:0;margin:6vh auto;width:min(760px,100vw);max-width:100vw;height:min(88vh,860px);max-height:100vh;border-radius:12px;background:var(--paper,#fff);color:var(--text,#1d2330);box-shadow:0 12px 40px rgba(0,0,0,.35);overflow:hidden}
dialog.srch[open]{display:flex;flex-direction:column}
dialog.srch::backdrop{background:rgba(10,14,22,.55)}
@media (max-width:700px){dialog.srch{margin:0;width:100vw;height:100dvh;max-height:100dvh;border-radius:0;top:0;left:0}}
.srch .sbar{display:flex;gap:8px;align-items:center;padding:10px 12px;border-bottom:1px solid var(--line,#d3dae3);padding-top:max(10px,env(safe-area-inset-top,0px))}
.srch .sbar input{flex:1 1 auto;min-width:0;min-height:46px;font:inherit;font-size:17px;padding:8px 12px;border:1px solid var(--line,#d3dae3);border-radius:8px;background:var(--bg,#fff);color:inherit}
.srch .sbar button{min-height:46px;min-width:46px}
.srch .sbody{flex:1 1 auto;overflow-y:auto;padding:6px 12px 18px;-webkit-overflow-scrolling:touch}
.srch .snote{font-size:13.5px;color:var(--text-dim,#5b6577);margin:8px 2px}
.srch h3.sg{font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:var(--text-dim,#5b6577);margin:16px 2px 4px;display:flex;justify-content:space-between;align-items:center}
.srch ul.sl{list-style:none;margin:0;padding:0;display:grid;gap:5px}
.srch .sh{display:block;width:100%;text-align:left;font:inherit;color:inherit;background:var(--bg,#fff);border:1px solid var(--line,#d3dae3);border-radius:8px;padding:8px 11px;min-height:46px;cursor:pointer}
.srch .sh:hover,.srch .sh:focus-visible{border-color:var(--accent,#2f5fa8);outline:2px solid transparent;box-shadow:0 0 0 2px var(--accent,#2f5fa8)}
.srch .sh .t{font-weight:600;font-size:15.5px}
.srch .sh .k{font-size:11.5px;letter-spacing:.04em;text-transform:uppercase;color:var(--accent,#2f5fa8);margin-left:8px;white-space:nowrap}
.srch .sh .s{display:block;font-size:13.5px;color:var(--text-dim,#5b6577);margin-top:2px;overflow-wrap:anywhere}
.srch mark{background:var(--accent-bg,rgba(47,95,168,.18));color:inherit;border-radius:2px;padding:0 1px}
.srch .smore{font-size:13px;margin:6px 0 0}
.srch .schips{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}
.srch .qrow{display:flex;gap:8px;align-items:flex-start}
.srch .qrow .sh{flex:1 1 auto}
.srch .sp{display:flex;gap:6px;flex-wrap:wrap;margin:6px 0}
#btnSearch{display:inline-flex;align-items:center;gap:6px;margin-right:8px;min-height:44px;min-width:44px;padding:0 12px}
#srchfab{position:fixed;right:max(16px,env(safe-area-inset-right,0px));bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:40;display:inline-flex;align-items:center;gap:8px;min-height:52px;padding:0 18px;border-radius:999px;border:0;font:inherit;font-weight:600;font-size:15px;background:var(--accent,#2f5fa8);color:#fff;box-shadow:0 4px 14px rgba(0,0,0,.28);cursor:pointer}
#srchfab svg{width:18px;height:18px}
#srchfab[hidden]{display:none}
#srchfab:focus-visible{outline:3px solid var(--text,#1d2330);outline-offset:2px}
body.figbig #srchfab,body:has(#backbtn) #srchfab,body:has(#xback) #srchfab{display:none}
@media (max-width:700px){#srchfab{width:56px;height:56px;min-height:56px;padding:0;justify-content:center}#srchfab span{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}}
body.srchfab-on main{padding-bottom:88px}
#btnSearch svg{width:16px;height:16px}
@media print{dialog.srch,#btnSearch,#srchfab{display:none}}`;

  let dlg = null, input = null, body = null, opener = null, last = null;
  const open = {};   // group name -> expanded (memory only)
  let drawnFor = null;   // the query text the expanded groups belong to: another query starts with every group short again
  /* the typed words marked in a title or line: one pass over the plain text, each piece escaped by itself, so a word can
     never match inside a <mark> tag or inside &amp; */
  const hit = (txt, toks) => {
    const ts = (toks || []).filter(t => t.length >= 2).sort((a, b) => b.length - a.length).map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    if (!ts.length) return esc(txt);
    let re; try { re = new RegExp('(' + ts.join('|') + ')', 'ig'); } catch (e) { return esc(txt); }
    return String(txt == null ? '' : txt).split(re).map((p, i) => i % 2 ? '<mark>' + esc(p) + '</mark>' : esc(p)).join('');
  };
  const snip = (e, toks) => {
    const s = e.sub || e.text || ''; if (!s) return '';
    const n = s.toLowerCase(); let at = -1;
    for (const t of toks) { const i = n.indexOf(t); if (i !== -1) { at = i; break; } }
    const from = at > 60 ? at - 40 : 0, cut = s.slice(from, from + 170);
    return (from ? '… ' : '') + cut + (s.length > from + 170 ? ' …' : '');
  };
  const KIND = {drug: e => 'Drug list', dz: e => 'Disease', sec: e => e.label, dia: e => 'Diagram', atlas: e => 'Structure', term: e => 'Term', gterm: e => 'Glossary', topic: e => 'Topic'};

  function draw(){
    const raw = input.value; last = null;
    if (raw !== drawnFor) { for (const k in open) delete open[k]; drawnFor = raw; }
    if (!raw.trim()) {
      const eg = ['tacrolimus', 'vitamin D', 'atopic dermatitis', 'sunscreen', 'fingertip unit', 'PDE4', 'acne', 'warts'];
      body.innerHTML = `<p class="snote">Type a drug, a disease, a term or a question topic. The closest matches come first.</p><div class="schips">${eg.map(x => `<button type="button" class="btn sm ghost" data-eg="${esc(x)}">${esc(x)}</button>`).join('')}</div>`;
      return;
    }
    const r = last = search(raw);
    let h = '';
    const total = r.groups.reduce((n, g) => n + g.items.length, 0);
    h += `<p class="snote" role="status">${total ? total + ' match' + (total === 1 ? '' : 'es') : 'No match'} in the drill` + (r.qs.length ? `; ${r.qs.length} question${r.qs.length === 1 ? '' : 's'}` : '') + `. ${esc(r.note)}</p>`;
    if (!total && !r.qs.length) h += '<p class="snote">Try the generic name, a brand, a class or a shorter word.</p>';
    r.groups.forEach((g, gi) => {
      const ex = open[g.type], shown = ex ? g.items : g.items.slice(0, 5);
      h += `<h3 class="sg"><span>${esc(g.name)} (${g.items.length})</span></h3><ul class="sl">` + shown.map(e => {
        const idx = IDX.indexOf(e);
        return `<li><button type="button" class="sh" data-i="${idx}"><span class="t">${hit(e.title, r.toks)}</span><span class="k">${esc(KIND[e.type](e))}${e.parent ? ' · ' + esc(e.parent.slice(0, 40)) : ''}</span>` +
          (snip(e, r.toks) ? `<span class="s">${hit(snip(e, r.toks), r.toks)}</span>` : '') + `</button></li>`;
      }).join('') + `</ul>` + (g.items.length > 5 ? `<p class="smore"><button type="button" class="btn sm ghost" data-more="${g.type}">${ex ? 'Show fewer' : 'Show ' + (g.items.length - 5) + ' more'}</button></p>` : '');
    });
    if (r.qs.length) {
      const qshown = open.q ? r.qs.slice(0, 40) : r.qs.slice(0, 4);
      h += `<h3 class="sg"><span>Questions (${r.qs.length})</span></h3><div class="sp"><button type="button" class="btn sm" data-qall="1">Practice these ${Math.min(r.qs.length, 60)}</button></div><ul class="sl">` +
        qshown.map(q => `<li><button type="button" class="sh" data-q="${esc(q.id)}"><span class="t">${hit(q.stem.length > 150 ? q.stem.slice(0, 150) + ' …' : q.stem, r.toks)}</span><span class="k">${esc(q.id)} · ${esc(q.prof)}</span></button></li>`).join('') + `</ul>` +
        (r.qs.length > 4 ? `<p class="smore"><button type="button" class="btn sm ghost" data-more="q">${open.q ? 'Show fewer' : 'Show more'}</button></p>` : '');
    }
    body.innerHTML = h;
  }

  function close(){
    if (!dlg) return;
    setTimeout(fab, 0);
    try { if (dlg.open) dlg.close(); } catch (e) { dlg.removeAttribute('open'); }
    const o = opener; opener = null; if (o && o.focus && document.contains(o)) { try { o.focus({preventScroll: true}); } catch (e) {} }
  }
  function openDialog(from){
    ensure();
    opener = from || document.activeElement;
    if (!dlg.open) { try { dlg.showModal(); } catch (e) { dlg.setAttribute('open', ''); } }
    draw(); body.scrollTop = 0; input.focus(); try { input.setSelectionRange(0, input.value.length); } catch (e) { input.select(); }
    fab();
  }

  /* what a result does */
  function go(e){
    close();
    setTimeout(() => {
      try {
        if (e.type === 'drug') { show('drugs'); if (DRUGLIST_UI && DRUGLIST_UI.openDrug) DRUGLIST_UI.openDrug(e.id); }
        else if (e.type === 'dz') { show('dz'); DZ_UI.state.view = 'cards'; DZ_UI.state.card = e.id; DZ_UI.state.filter = ''; DZ_UI.render(); window.scrollTo(0, 0); }
        else if (e.type === 'sec') jump(e.view, e.anchor);
        else if (e.type === 'dia') jump('diagrams', 'dg-' + e.id);
        // the Atlas filter reads each tile's plain name and text, not its display title: the plain name always finds the tile
        else if (e.type === 'atlas') { show('atlas'); const q = document.querySelector('#atq'); if (q) { q.value = e.id; q.dispatchEvent(new Event('input', {bubbles: true})); } window.scrollTo(0, 0);
          // the Atlas opens the folder and board that hold the tile (atlas_ui.js); when the tile still sits below the window, bring it in
          setTimeout(() => { try { if (typeof VIEW !== 'undefined' && VIEW !== 'atlas') return; const t = [...document.querySelectorAll('#v-atlas .attile')].find(x => !x.hidden && x.getClientRects().length && (!x.checkVisibility || x.checkVisibility()));
            if (t && t.getBoundingClientRect().bottom > window.innerHeight) t.scrollIntoView({block: 'center'}); } catch (err) {} }, 80); }
        else if (e.type === 'topic') startQuiz(e.id, e.sid);
        else if (e.type === 'gterm') GLOSSARY_UI.open(e.id);
        else if (e.type === 'term') { openDialog(opener); const row = body.querySelector('[data-i="' + IDX.indexOf(e) + '"] .s'); if (row) row.textContent = e.text; }
      } catch (err) { console.error('The search could not open that result.', err); }
    }, 0);
  }
  /* The questions found start as a set, with the page's Back button, as the practice buttons of the Diseases tab and the
     Drug list do. drillList() replaces the set that was open on the Quiz tab, so the Back entry also carries that set
     (srq) and Back puts it on the Quiz tab again, at the question it was on: a drill in progress is not lost. */
  function practise(qs, label){
    close();
    setTimeout(() => { try { if (typeof drillList === 'function') {
      let was = null; try { was = Q || null; } catch (e) {}
      const r = {view: VIEW, y: window.scrollY, srq: was}; RET.push(r); drillList(qs, label); r.mine = Q; backBtn();
    } } catch (err) { console.error(err); } }, 0);
  }
  /* before the core's own Back handler (on the button) draws the tab it returns to. Only while the set on the Quiz tab is
     still the one the search started (or its "not yet shown" continuation): a set begun since then, or another profile's,
     is left as it is */
  document.addEventListener('click', ev => {
    try {
      const t = ev.target; if (!t || !t.closest || !t.closest('#backbtn')) return;
      const r = RET[RET.length - 1]; if (r && r.srq && r.mine && Q && (Q === r.mine || (Q.label && r.mine.label && String(Q.label).indexOf(r.mine.label) === 0))) Q = r.srq;
    } catch (e) { /* an older core without RET or Q */ }
  }, true);

  function ensure(){
    if (dlg) return;
    dlg = document.createElement('dialog'); dlg.className = 'srch'; dlg.setAttribute('aria-label', 'Search the drill');
    dlg.innerHTML = `<div class="sbar"><input type="search" id="srchq" placeholder="Search drugs, diseases, terms, questions" aria-label="Search the drill" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="search"><button type="button" class="btn ghost" id="srchclr" aria-label="Clear the search text">Clear</button><button type="button" class="btn ghost" id="srchx" aria-label="Close search">Close</button></div><div class="sbody" id="srchbody" aria-live="polite"></div>`;
    document.body.appendChild(dlg);
    input = dlg.querySelector('#srchq'); body = dlg.querySelector('#srchbody');
    let tm = null;
    input.addEventListener('input', () => { clearTimeout(tm); tm = setTimeout(draw, 120); });
    dlg.querySelector('#srchx').addEventListener('click', close);
    // a tablet keyboard cannot select the old words for you: one tap empties the field and keeps the keyboard up
    dlg.querySelector('#srchclr').addEventListener('click', () => { input.value = ''; draw(); input.focus(); });
    dlg.addEventListener('close', () => { const o = opener; opener = null; if (o && o.focus && document.contains(o)) { try { o.focus({preventScroll: true}); } catch (e) {} } });
    // a tap outside the box closes it; a press that began inside (a selection dragged out of the field) does not
    let downOnDlg = false;
    dlg.addEventListener('mousedown', ev => { downOnDlg = ev.target === dlg; });
    dlg.addEventListener('click', ev => { if (ev.target === dlg && downOnDlg) close(); downOnDlg = false; });
    body.addEventListener('click', ev => {
      const b = ev.target.closest('button'); if (!b) return;
      if (b.dataset.eg) { input.value = b.dataset.eg; draw(); input.focus(); return; }
      if (b.dataset.more) {
        // the redraw removes the button that was pressed: the new one takes the focus, so the arrow keys keep working
        const k = b.dataset.more; open[k] = !open[k]; const y = body.scrollTop; draw();
        const nb = body.querySelector('button[data-more="' + k + '"]'); if (nb) { try { nb.focus({preventScroll: true}); } catch (e) {} }
        body.scrollTop = y; return;
      }
      if (b.dataset.i != null) { const e = IDX[+b.dataset.i]; if (e) go(e); return; }
      if (b.dataset.q) { const q = QUESTIONS.find(x => x.id === b.dataset.q); if (q) practise([q], 'Search: ' + input.value.trim()); return; }
      if (b.dataset.qall && last) practise(last.qs.slice(0, 60), 'Search: ' + input.value.trim());
    });
    // arrow keys move through the results
    dlg.addEventListener('keydown', ev => {
      if (ev.key === 'Escape') { ev.preventDefault(); close(); return; }   // in a search field the browser would only clear the text
      if (ev.key !== 'ArrowDown' && ev.key !== 'ArrowUp') return;
      const bs = [...body.querySelectorAll('.sh')]; if (!bs.length) return;
      const i = bs.indexOf(document.activeElement);
      const j = ev.key === 'ArrowDown' ? Math.min(bs.length - 1, i + 1) : (i <= 0 ? -1 : i - 1);
      ev.preventDefault();
      if (j < 0) input.focus(); else bs[j].focus();
    });
  }

  /* the button in the header, and the keys */
  function wire(){
    const who = document.querySelector('header .who');
    if (who && !document.getElementById('btnSearch')) {
      const b = document.createElement('button'); b.type = 'button'; b.id = 'btnSearch'; b.className = 'btn sm ghost'; b.setAttribute('aria-keyshortcuts', '/ Control+K Meta+K');
      b.innerHTML = '<svg viewBox="0 0 20 20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="8.5" cy="8.5" r="5.5"/><path d="M13 13l5 5"/></svg><span>Search</span>';
      b.addEventListener('click', () => openDialog(b));
      who.insertBefore(b, who.firstChild);
    }
    document.addEventListener('keydown', ev => {
      const t = ev.target, typing = t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable);
      if ((ev.key === 'k' || ev.key === 'K') && (ev.ctrlKey || ev.metaKey)) { ev.preventDefault(); openDialog(document.activeElement); }
      else if (ev.key === '/' && !typing && !ev.ctrlKey && !ev.metaKey && !ev.altKey && !(dlg && dlg.open)) { ev.preventDefault(); openDialog(document.activeElement); }
    });
  }
  /* A second Search button that floats at the bottom right once the header's button has scrolled out of view (Louis,
     2026-11-20: after one search "it becomes difficult to use again": a result jumps into a tab, the header with its
     button is then above the screen, and the keys "/" and Ctrl+K do not exist on a tablet). Hidden while the search is
     open, while a figure is enlarged and on an exam paper. */
  let fabBtn = null, headerSeen = true;
  function fab(){
    if (!fabBtn) return;
    let exam = false; try { exam = !!(typeof Q !== 'undefined' && Q && Q.examMode && VIEW === 'exam'); } catch (e) {}
    fabBtn.hidden = headerSeen || !!(dlg && dlg.open) || exam;
    document.body.classList.toggle('srchfab-on', !fabBtn.hidden);   // the page's end can scroll out from under the button
  }
  function wireFab(){
    if (document.getElementById('srchfab')) return;
    fabBtn = document.createElement('button'); fabBtn.type = 'button'; fabBtn.id = 'srchfab'; fabBtn.hidden = true;
    fabBtn.innerHTML = '<svg viewBox="0 0 20 20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="8.5" cy="8.5" r="5.5"/><path d="M13 13l5 5"/></svg><span>Search</span>';
    fabBtn.setAttribute('aria-label', 'Search the drill');
    fabBtn.addEventListener('click', () => openDialog(fabBtn));
    document.body.appendChild(fabBtn);
    const hb = document.getElementById('btnSearch');
    if (hb && typeof IntersectionObserver === 'function') {
      new IntersectionObserver(es => { headerSeen = es.some(e => e.isIntersecting); fab(); }).observe(hb);
    } else {
      const on = () => { const r = hb ? hb.getBoundingClientRect() : null; headerSeen = !!r && r.bottom > 0 && r.top < innerHeight; fab(); };
      window.addEventListener('scroll', on, {passive: true}); on();
    }
    document.addEventListener('click', () => setTimeout(fab, 0), true);
  }
  const addCss = () => { if (document.getElementById('srchcss')) return; const st = document.createElement('style'); st.id = 'srchcss'; st.textContent = CSS; document.head.appendChild(st); };
  addCss();
  try { wire(); } catch (e) { console.error('The search button could not be added.', e); }
  try { wireFab(); } catch (e) { console.error('The floating search button could not be added.', e); }

  return {open: openDialog, close, search: q => { try { return search(q); } catch (e) { return null; } }, size: () => { if (!IDX) build(); return IDX.length; }, expand, hit};
})();
