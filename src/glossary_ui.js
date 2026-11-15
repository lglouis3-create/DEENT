/* glossary_ui.js: the Glossary tab, "Words in this question" and My words (Louis, 2026-11-14: "a glossary of all the terms needing
   to know ... after answering a question that the student are able to select the vocabulary words ... they might be having trouble
   bc they didn't know what it meant"; "as long as it's not too chunky (maybe have it as a closed tab and they can open it if they
   need to) and it should cover all terms"). Course-level, no core edit; the terms are glossary_data.js GLOSSARY_TERMS.
   1. Words in this question: once a question is answered (Quiz, topic drills, the all-on-one-page cards, Weak spots review) and on
      the review of a submitted exam paper, one closed <details class="gw"> under the explanation lists the course terms found in the
      question's stem, options, whys and teaching text (at most 14, in order of first appearance, the ones already in My words
      first). A term opens its definition under the row; "I didn't know this" puts it in My words and counts one miss for that
      question. Never before the answer, never on a paper in progress; nothing is added when no term is found.
   2. Detection: one table built at first use from every term and "also" form. The text is cut into words (runs of letters, runs of
      digits; accents removed, Greek letters spelled out), so a match is always whole words, a hyphen or dash is the same as a space
      and "PDE-4" is the same as "PDE4". At each word the longest form is tried first and its words are consumed, so a term inside a
      longer term is not listed again. A plain plural (s, es) of a form's last word matches. cs:true forms match only in the case
      written.
   3. The Glossary tab (#v-gloss): search, All / Exam 2 / Exam 1 / My words, the list A to Z (drawn in parts when long), and
      "Review my words".
      Each entry: the term as an h3 in a list item, a bookmark toggle named "I didn't know this: <term>" ("My words" shows beside it
      only while on), "Also:" with the first three forms and "+N more" (opened by a search that matches a hidden form), the definition,
      and its sources. A term several professors teach has glossary_data.js `parts` [{prof, def, cite, src}]: one labelled paragraph
      each with that professor's own slides. Slides are chips ("Slide 27", "Slides 10–13") made here from the cite text with the page's
      citation parser (SLIDE_UI.parser.scan) and opened with SLIDE_UI.open, in the list, the row and the review; the page's own
      linker does not read the Glossary tab. While a practice exam is in progress no chip is drawn. A cite part that is not a slide
      shows as muted text; "general: <source>, <url>" as "General definition · <source>" with the source as a link.
   4. Storage: one key per profile in the page's namespace, <NS>:words:v1:<profile> = {v:1, w:{<termId>:{n, q:[question ids]}}},
      written only when a word is marked, removed or reviewed; checked on load; a refused write is reported in one line and the
      feature goes on in memory. The core's export and Erase do not reach a course key, so the tab has "Clear my words".
   In the node checks' stub DOM it does nothing and returns null. */
const GLOSSARY_UI = (() => {
  const ok = typeof document !== 'undefined' && typeof MutationObserver !== 'undefined' && document.getElementById &&
             document.getElementById('nav') && typeof document.getElementById('nav').insertBefore === 'function' &&
             typeof document.querySelector === 'function' && typeof show === 'function';
  if (!ok) return null;
  const ID = 'gloss', MAXROW = 14, QMAX = 20;
  const KEY = () => {
    let ns, p = '';
    try { ns = NS; } catch (e) { ns = ((typeof COURSE !== 'undefined' && COURSE.ns) || 'drill') + ((typeof BUILD !== 'undefined' && BUILD.preview) ? '-preview' : ''); }
    try { p = PROFILE || ''; } catch (e) {}
    return ns + ':words:v1:' + p;
  };
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));

  /* ---------- the terms ---------- */
  let TERMS = [], BY = {};
  function setTerms(list){
    TERMS = (Array.isArray(list) ? list : []).filter(t => t && typeof t.id === 'string' && t.id && typeof t.term === 'string' && t.term.trim() && typeof t.def === 'string');
    BY = {}; TERMS.forEach(t => { if (!BY[t.id]) BY[t.id] = t; });
    TERMS = TERMS.filter(t => BY[t.id] === t);
    MATCH = null; QCACHE = new Map(); SORTED = null;
  }

  /* ---------- detection ---------- */
  const GREEK = {'α': 'alpha', 'β': 'beta', 'γ': 'gamma', 'δ': 'delta', 'κ': 'kappa', 'μ': 'mu', 'Δ': 'delta'};
  const WORD = /\p{L}+|\p{N}+/gu;
  // the words of a text: raw (case kept) and low (for the table)
  function words(s){
    const t = String(s == null ? '' : s).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[αβγδκμΔ]/g, c => ' ' + GREEK[c] + ' ');
    const raw = t.match(WORD) || [], low = new Array(raw.length);
    for (let i = 0; i < raw.length; i++) low[i] = raw[i].toLowerCase();
    return {raw, low};
  }
  let MATCH = null, QCACHE = new Map();
  const formsOf = t => {
    const f = [t.term].concat(Array.isArray(t.also) ? t.also.filter(a => typeof a === 'string') : []);
    // "Fingertip unit (FTU)": the name outside the brackets and the one inside are forms too
    const m = /^(.*?)\s*\(([^()]+)\)\s*$/.exec(t.term);
    if (m && m[1].trim()) f.push(m[1], m[2]);
    return f;
  };
  function matcher(){
    if (MATCH) return MATCH;
    const map = new Map(), first = new Set(); let maxN = 1;
    TERMS.forEach(t => formsOf(t).forEach(f => {
      const w = words(f); if (!w.low.length || w.low.length > 8) return;
      const k = w.low.join(' ');
      let a = map.get(k); if (!a) map.set(k, a = []);
      if (!a.some(x => x.id === t.id && x.raw.join(' ') === w.raw.join(' '))) a.push({id: t.id, cs: t.cs === true, raw: w.raw});
      first.add(w.low[0]); if (w.low.length > maxN) maxN = w.low.length;
    }));
    return (MATCH = {map, first, maxN});
  }
  const sameRaw = (a, raw, i, lastCut) => {
    for (let j = 0; j < a.length; j++) { const r = raw[i + j]; if ((j === a.length - 1 && lastCut ? r.slice(0, r.length - lastCut) : r) !== a[j]) return false; }
    return true;
  };
  // the ids of the forms that start at word i and are n words long ("cut": letters taken off the last word, for a plural)
  function at(M, w, i, n, cut){
    let k = '';
    for (let j = 0; j < n; j++) { const x = w.low[i + j]; k += (j ? ' ' : '') + (cut && j === n - 1 ? x.slice(0, x.length - cut) : x); }
    const a = M.map.get(k); if (!a) return null;
    let ids = null;
    for (let j = 0; j < a.length; j++) if (!a[j].cs || sameRaw(a[j].raw, w.raw, i, cut)) (ids || (ids = [])).push(a[j].id);
    return ids;
  }
  const plural = x => x.length > 3 && x.charCodeAt(x.length - 1) === 115 ? (x.length > 4 && x.charCodeAt(x.length - 2) === 101 ? 2 : 1) : 0;
  // detect(texts): term ids in order of first appearance; each text is read by itself, so no term is made from the end of one
  // and the start of the next
  function detect(texts){
    const M = matcher(), out = [], seen = new Set();
    (Array.isArray(texts) ? texts : [texts]).forEach(text => {
      if (!text) return;
      const w = words(text), n = w.low.length;
      for (let i = 0; i < n;) {
        const x = w.low[i]; let hit = 0, ids = null;
        const p = plural(x);
        if (M.first.has(x) || (p && (M.first.has(x.slice(0, -1)) || (p === 2 && M.first.has(x.slice(0, -2)))))) {
          for (let len = Math.min(M.maxN, n - i); len >= 1 && !ids; len--) {
            ids = at(M, w, i, len, 0);
            if (!ids) { const q = plural(w.low[i + len - 1]); if (q) ids = at(M, w, i, len, 1) || (q === 2 ? at(M, w, i, len, 2) : null); }
            if (ids) hit = len;
          }
        }
        if (ids) { ids.forEach(id => { if (!seen.has(id)) { seen.add(id); out.push(id); } }); i += hit; } else i++;
      }
    });
    return out;
  }
  const plain = h => String(h).indexOf('<') === -1 ? String(h) : String(h).replace(/<[^>]+>/g, ' ');
  function qTexts(q){
    const t = [];
    const add = s => { if (typeof s === 'string' && s) t.push(plain(s)); };
    add(q.stem);
    (q.options || []).forEach(o => { if (o) { add(o.t); add(o.why); } });
    (q.pairs || []).forEach(p => { if (p && typeof p === 'object') Object.keys(p).forEach(k => add(p[k])); });
    add(q.why); add(q.note);
    if (Array.isArray(q.teach)) q.teach.forEach(p => { if (p) { add(p.h); add(p.t); } }); else add(q.teach);
    return t;
  }
  function termsFor(q){
    if (!q || !q.id) return [];
    let ids = QCACHE.get(q.id);
    if (!ids) { ids = detect(qTexts(q)); QCACHE.set(q.id, ids); }
    return ids;
  }

  /* ---------- My words ---------- */
  const blank = () => ({v: 1, w: {}});
  const st = {filter: 'all', q: '', kind: '', review: null, data: null, key: null, unsaved: false, pane: null, job: 0, pending: false, open: null};
  function clean(j){
    const obj = x => !!x && typeof x === 'object' && !Array.isArray(x);
    if (!obj(j) || j.v !== 1 || !obj(j.w)) return null;
    const out = blank();
    const ids = Object.keys(j.w);
    if (ids.length > 5000) return null;
    for (const id of ids) {
      if (id === '__proto__') continue;
      const c = j.w[id];
      if (!obj(c) || !Number.isInteger(c.n) || c.n < 1 || c.n > 9999 || !Array.isArray(c.q) || c.q.length > QMAX || c.q.some(x => typeof x !== 'string')) return null;
      out.w[id] = {n: c.n, q: c.q.slice()};
    }
    return out;
  }
  function load(){
    try { return clean(JSON.parse(localStorage.getItem(KEY()) || 'null')) || blank(); } catch (e) {}
    return blank();
  }
  function sync(){ const k = KEY(); if (st.key !== k || !st.data) { st.key = k; st.data = load(); st.unsaved = false; } return st.data; }
  function save(){ try { localStorage.setItem(KEY(), JSON.stringify(st.data)); st.unsaved = false; } catch (e) { st.unsaved = true; } }
  const rec = id => sync().w[id] || null;
  const myIds = () => Object.keys(sync().w).filter(id => BY[id]);
  // mark(id, qid): from a question, one miss for that question (once); from the list (no qid), the word is added with one miss
  function mark(id, qid){
    if (!BY[id]) return false;
    const w = sync().w; let c = w[id];
    if (qid) {
      if (c && c.q.includes(qid)) return false;
      if (!c) c = w[id] = {n: 0, q: []};
      c.q.push(String(qid)); if (c.q.length > QMAX) c.q.shift();
      c.n++;
    } else {
      if (c) return false;
      w[id] = {n: 1, q: []};
    }
    save(); return true;
  }
  // unmark(id, qid): takes back this question's miss; with no qid the word leaves My words
  function unmark(id, qid){
    const w = sync().w, c = w[id]; if (!c) return false;
    if (qid) {
      const i = c.q.indexOf(qid); if (i === -1) return false;
      c.q.splice(i, 1); c.n--;
      if (c.n < 1) delete w[id];
    } else delete w[id];
    save(); return true;
  }
  function gotIt(id){ const w = sync().w, c = w[id]; if (!c) return; c.n--; if (c.n < 1) delete w[id]; save(); }
  function clearAll(){ sync(); st.data = blank(); save(); }
  const times = n => n === 1 ? 'Missed once' : 'Missed ' + n + ' times';

  /* ---------- one term's definition (the question row, the list and the review use the same lines) ---------- */
  const alsoOf = t => (Array.isArray(t.also) ? t.also : []).filter(a => typeof a === 'string' && a);
  const ALSO_N = 3;
  // "Also: a, b, c": the first three forms; in the list the rest sit behind "+N more" (opened by the search when it matches one of them)
  const alsoLine = (t, mode) => {   // mode 'cap': the first three; 'list': the first three and "+N more"; 'all': every form
    const al = alsoOf(t); if (!al.length) return '';
    const shown = mode === 'all' ? al : al.slice(0, ALSO_N), more = al.length - shown.length;
    return `<p class="galso">Also: ${esc(shown.join(', '))}${more > 0 && mode === 'list' ? ` <button type="button" class="gmore" data-glmore="${esc(t.id)}" aria-expanded="false" aria-label="Show ${more} more forms of ${esc(t.term)}">+${more} more</button>` : ''}</p>`;
  };
  // the deck names as the citations write them
  const SHORT = {pp: 'Smith Pathophys', pc: 'Smith PCol', sun: 'Smith Sun Exposure', mc: 'DPAW', p5: 'Patel Dermatitis', p6: 'Patel Acne', p7: 'Patel Scaly',
                 p8o: 'Patel Outdoor', p8s: 'Patel Sun Exposure', p8w: 'Patel Wound', p8c: 'Patel Warts'};
  const slideApi = () => { try { return typeof SLIDE_UI !== 'undefined' && SLIDE_UI && SLIDE_UI.parser && typeof SLIDE_UI.open === 'function' ? SLIDE_UI : null; } catch (e) { return null; } };
  const deckInfo = id => { try { return SLIDES.decks[id] || null; } catch (e) { return null; } };
  // a citation string -> {chips: [{deck, n, to}], plain: [text], gen: {name, url} | null}; the slides are read by the page's own
  // citation parser (slide_ui.js), the same one that links the other tabs, so a name such as "Patel Outdoor" or "DPAW" finds its deck
  const CITES = new Map();
  function parseCite(cite){
    cite = typeof cite === 'string' ? cite : '';
    let r = CITES.get(cite); if (r) return r;
    r = {chips: [], plain: [], gen: null};
    const g = cite.search(/(?:^|; )general:/);
    let head = cite, gen = '';
    if (g !== -1) { head = cite.slice(0, g); gen = cite.slice(cite.indexOf('general:', g) + 8).trim(); }
    if (gen) {
      const u = /,?\s*(https?:\/\/\S+)\s*$/.exec(gen);
      r.gen = {name: (u ? gen.slice(0, u.index) : gen).trim(), url: u ? u[1] : ''};
    }
    const api = slideApi(), segs = head.split('; ').filter(Boolean);
    if (api && segs.length) {
      let at = 0;
      const text = segs.join('; '), links = api.parser.scan(text, {decks: []}).links || [];
      segs.forEach((sg, i) => {
        const s0 = at, s1 = at + sg.length; at = s1 + 2;
        const hit = links.filter(l => l.s >= s0 && l.s < s1 + 1);
        if (!hit.length) { r.plain.push(sg); return; }
        hit.forEach(l => { if (!r.chips.some(c => c.deck === l.deck && c.n === l.n && c.to === (l.to || 0))) r.chips.push({deck: l.deck, n: l.n, to: l.to || 0}); });
      });
    } else if (head.trim()) r.plain.push(head.trim());
    CITES.set(cite, r); return r;
  }
  // the source line under a definition: slide chips grouped by deck, other sources as muted text
  function srcLine(cite){
    const c = parseCite(cite), api = slideApi(), parts = [];
    if (api && !examRunning() && c.chips.length) {
      let last = null, grp = '';
      const flush = () => { if (grp) parts.push(`<span class="gsg"><span class="gsd">${esc(SHORT[last] || last)} ·</span>${grp}</span>`); grp = ''; };
      c.chips.forEach(k => {
        if (k.deck !== last) { flush(); last = k.deck; }
        const d = deckInfo(k.deck), many = k.to > k.n, lab = (many ? 'Slides ' + k.n + '–' + k.to : 'Slide ' + k.n);
        const name = 'Open ' + (d ? d.label + ', ' : '') + (many ? 'slides ' + k.n + ' to ' + k.to : 'slide ' + k.n);
        grp += `<button type="button" class="gslc" data-gsl="${esc(k.deck)}" data-n="${k.n}" data-to="${k.to}" aria-haspopup="dialog" aria-label="${esc(name)}" title="${esc(name)}"><span class="gslp">${esc(lab)}</span></button>`;
      });
      flush();
    } else if (c.chips.length) parts.push(`<span class="gsp">${esc(cite.replace(/;?\s*general:.*$/, ''))}</span>`);
    c.plain.forEach(x => { if (!c.chips.length || api) parts.push(`<span class="gsp">${esc(x)}</span>`); });
    if (c.gen) parts.push(`<span class="gsp gsgen">General definition · ${c.gen.url ? `<a href="${esc(c.gen.url)}" target="_blank" rel="noopener">${esc(c.gen.name)}</a>` : esc(c.gen.name)}</span>`);
    return parts.length ? `<p class="gsrc">${parts.join('')}</p>` : '';
  };
  // one paragraph for a single source; for a term several professors teach, one labelled paragraph each with its own slides
  const defBody = t => {
    const ps = Array.isArray(t.parts) && t.parts.length > 1 ? t.parts : null;
    if (ps) return `<div class="gparts">${ps.map(p => `<div class="gpart"><p class="gpl">${esc(p.prof)}</p><p class="gdd">${esc(p.def)}</p>${srcLine(p.cite)}</div>`).join('')}</div>`;
    return `<div class="gpart"><p class="gdd">${esc(t.def)}</p>${srcLine(t.cite)}</div>`;
  };
  const BOOK = '<svg class="gbk" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6.5 3.5h11v17L12 16.6l-5.5 3.9z"/></svg>';
  // the toggle: a bookmark; "My words" shows next to it only while it is on
  const markBtn = (id, on, attr, term) => `<button type="button" class="gstar" ${attr}="${esc(id)}" aria-pressed="${on ? 'true' : 'false'}">${BOOK}<span class="gsr">I didn’t know this: ${esc(term)}</span><span class="gstl" aria-hidden="true">My words</span></button>`;

  /* ---------- 1. words in this question ---------- */
  let QBY = null;
  const qOf = id => { if (!QBY) { QBY = new Map(); try { QUESTIONS.forEach(q => QBY.set(q.id, q)); } catch (e) {} } return QBY.get(id); };
  let uid = 0;
  function rowFor(q){
    let ids = termsFor(q); if (!ids.length) return null;
    const mine = sync().w;
    const com = id => { const t = BY[id]; return !!(t && t.common); };
    // the words the reader has marked first, then the other words, and the very frequent course words (topical, inflammation, receptor ...) last
    ids = ids.filter(id => mine[id]).concat(ids.filter(id => !mine[id] && !com(id)), ids.filter(id => !mine[id] && com(id))).slice(0, MAXROW);
    const d = document.createElement('details'); d.className = 'gw'; d.dataset.gwq = q.id;
    const did = 'gwdef' + (++uid);
    d.innerHTML = `<summary>Words in this question (${ids.length})</summary>` +
      `<div class="gwrow">${ids.map(id => `<button type="button" class="gwt${mine[id] ? ' mine' : ''}" data-gwt="${esc(id)}" aria-expanded="false" aria-controls="${did}">${
        mine[id] ? '<span class="gwdot" aria-hidden="true">●</span>' : ''}${esc(BY[id].term)}${mine[id] ? '<span class="gsr"> (in My words)</span>' : ''}</button>`).join('')}</div>` +
      `<div class="gwdef" id="${did}" hidden></div>`;
    return d;
  }
  function drawDef(d, id){
    const box = d.querySelector('.gwdef'), t = BY[id], qid = d.dataset.gwq;
    d.querySelectorAll('.gwt').forEach(b => b.setAttribute('aria-expanded', String(!!id && b.dataset.gwt === id)));
    if (!id || !t) { box.hidden = true; box.innerHTML = ''; delete d.dataset.gwopen; return; }
    const c = rec(id), on = !!(c && c.q.includes(qid));
    box.innerHTML = `<div class="glh"><p class="gdt">${esc(t.term)}</p>${markBtn(id, on, 'data-gwmark', t.term)}<span class="gcnt">${c ? esc(times(c.n)) : ''}</span></div>${alsoLine(t, 'cap')}${defBody(t)}`;
    box.hidden = false; d.dataset.gwopen = id;
  }
  // where the row goes: the end of the explanation
  function attach(box, q, keep){
    if (!box || !q || box.querySelector(':scope > details.gw')) return;
    const d = rowFor(q); if (!d) return;
    box.appendChild(d);
    if (keep && st.open && st.open.qid === q.id) {      // the same answered question drawn again: as the reader left it
      if (st.open.open) d.open = true;
      if (st.open.term && d.querySelector(`[data-gwt="${CSS.escape(st.open.term)}"]`)) drawDef(d, st.open.term);
    }
  }
  const examRunning = () => { try { return !!(EX && EX.running); } catch (e) { return false; } };
  function decorateQuiz(){
    let q;
    try { q = Q; } catch (e) { return; }
    if (!q || q.examMode) { st.open = null; return; }
    const pane = document.getElementById('v-quiz'); if (!pane) return;
    if (q.current && q.revealed) {
      if (!st.open || st.open.qid !== q.current.id) st.open = {qid: q.current.id, open: false, term: null};
      attach(pane.querySelector('.qcard:not(.tlcard) .why'), q.current, true);
    } else if (!q.tlSt) st.open = null;
    if (q.tlSt) pane.querySelectorAll('.tlcard').forEach(c => {
      const s = q.tlSt[c.dataset.tlq]; if (!s || !s.revealed) return;
      attach(c.querySelector('.why'), qOf(c.dataset.tlq), false);
    });
  }
  function decorateExam(){
    let ex;
    try { ex = EX; } catch (e) { return; }
    if (!ex || ex.done !== true || ex.running || !Array.isArray(ex.qs)) return;
    const cards = [...document.querySelectorAll('#v-exam > .qcard')];
    if (cards.length !== ex.qs.length) return;
    cards.forEach((c, i) => attach(c.querySelector('.qbody'), ex.qs[i], false));
  }
  function onDocClick(e){
    const el = e.target && e.target.closest ? e.target : null; if (!el) return;
    const sc = el.closest('[data-gsl]');
    if (sc) {
      const api = slideApi();
      if (api) { try { api.open(sc.dataset.gsl, +sc.dataset.n, +sc.dataset.to || 0, false, sc); } catch (x) { console.error('The slide could not be opened.', x); } }
      return;
    }
    const tb = el.closest('[data-gwt]');
    if (tb) {
      const d = tb.closest('details.gw'); if (!d) return;
      const id = tb.dataset.gwt, now = d.dataset.gwopen === id ? null : id;
      drawDef(d, now);
      if (st.open && st.open.qid === d.dataset.gwq) st.open.term = now;
      return;
    }
    const mb = el.closest('[data-gwmark]');
    if (mb) {
      const d = mb.closest('details.gw'); if (!d) return;
      const id = mb.dataset.gwmark, qid = d.dataset.gwq;
      if (mb.getAttribute('aria-pressed') === 'true') unmark(id, qid); else mark(id, qid);
      drawDef(d, id);
      const chip = d.querySelector(`[data-gwt="${CSS.escape(id)}"]`), inMine = !!rec(id);
      if (chip) {
        chip.classList.toggle('mine', inMine);
        chip.innerHTML = (inMine ? '<span class="gwdot" aria-hidden="true">●</span>' : '') + esc(BY[id].term) + (inMine ? '<span class="gsr"> (in My words)</span>' : '');
      }
      const nb = d.querySelector('[data-gwmark]'); if (nb) { try { nb.focus({preventScroll: true}); } catch (x) {} }
      return;
    }
  }
  function onToggle(e){
    const d = e.target; if (!d || !d.classList || !d.classList.contains('gw')) return;
    if (st.open && st.open.qid === d.dataset.gwq && d.closest('.qcard:not(.tlcard)') && d.closest('#v-quiz')) st.open.open = d.open;
  }

  /* ---------- 3. the tab ---------- */
  let SORTED = null;
  const norm = s => words(s).low.join(' ');
  const letterOf = t => { const m = /[\p{L}\p{N}]/u.exec(t.term.normalize('NFD')); const c = m ? m[0].toUpperCase() : '#'; return /^[A-Z]$/.test(c) ? c : '#'; };
  function sorted(){
    if (SORTED) return SORTED;
    let cmp; try { const co = new Intl.Collator('en', {sensitivity: 'base', numeric: true}); cmp = (a, b) => co.compare(a.term, b.term); } catch (e) { cmp = (a, b) => a.term < b.term ? -1 : a.term > b.term ? 1 : 0; }
    const byHead = (a, b) => { const x = letterOf(a) === '#', y = letterOf(b) === '#'; return x === y ? cmp(a, b) : x ? -1 : 1; };   // terms that start with a digit or a Greek letter come first, under one # heading
    SORTED = TERMS.slice().sort(byHead);
    SORTED.forEach(t => { t._n = norm(t.term + ' ' + alsoOf(t).join(' ') + ' ' + t.def); t._L = letterOf(t); });
    return SORTED;
  }
  const hasExam = (t, n) => Array.isArray(t.exam) ? t.exam.indexOf(n) !== -1 : t.exam === n;
  const kinds = () => { const k = []; TERMS.forEach(t => { if (typeof t.kind === 'string' && t.kind && !k.includes(t.kind)) k.push(t.kind); }); return k.length > 1 && k.length <= 12 ? k.sort() : []; };
  function filtered(){
    const toks = norm(st.q).split(' ').filter(Boolean), mine = sync().w;
    return sorted().filter(t =>
      (st.filter === 'all' || (st.filter === 'e1' && hasExam(t, 1)) || (st.filter === 'e2' && hasExam(t, 2)) || (st.filter === 'mine' && mine[t.id])) &&
      (!st.kind || t.kind === st.kind) && toks.every(k => t._n.indexOf(k) !== -1));
  }
  // the search opens the forms behind "+N more" when it matches one of them and nothing shown
  const openAlso = t => {
    const toks = norm(st.q).split(' ').filter(Boolean), al = alsoOf(t);
    if (!toks.length || al.length <= ALSO_N) return false;
    const seen = norm(t.term + ' ' + al.slice(0, ALSO_N).join(' ')), hid = norm(al.slice(ALSO_N).join(' '));
    return toks.some(k => seen.indexOf(k) === -1 && hid.indexOf(k) !== -1);
  };
  const tagOf = t => typeof t.kind === 'string' && t.kind ? `<span class="gtag">${esc(t.kind)}</span>` : '';
  const entry = (t, mine) => {
    const c = mine[t.id];
    return `<li class="gle" data-gle="${esc(t.id)}"><div class="glh"><h3 class="glt">${esc(t.term)}</h3>${tagOf(t)}${markBtn(t.id, !!c, 'data-glmark', t.term)}</div>${alsoLine(t, openAlso(t) ? 'all' : 'list')}${defBody(t)}</li>`;
  };
  const mineEntry = (t, c) =>
    `<li class="gle" data-gle="${esc(t.id)}"><div class="glh"><h3 class="glt">${esc(t.term)}</h3>${tagOf(t)}<span class="gcnt">${esc(times(c.n))}</span><button type="button" class="gmk glrm" data-glrm="${esc(t.id)}" aria-label="Remove from My words: ${esc(t.term)}">Remove</button></div>${alsoLine(t, openAlso(t) ? 'all' : 'list')}${defBody(t)}</li>`;
  const FIRST = 80, CHUNK = 300;
  function fillList(box, list){
    const job = ++st.job, mine = sync().w, byMiss = st.filter === 'mine';
    if (byMiss) list = list.slice().sort((a, b) => mine[b.id].n - mine[a.id].n);
    let i = 0, L = null;
    const part = n => {
      let h = '';
      for (const end = Math.min(list.length, i + n); i < end; i++) {
        const t = list[i];
        if (byMiss) h += mineEntry(t, mine[t.id]);
        else { if (t._L !== L) { L = t._L; h += `<li class="gll" aria-hidden="true">${L}</li>`; } h += entry(t, mine); }
      }
      return h;
    };
    box.innerHTML = part(FIRST);
    st.pending = i < list.length;
    const more = () => {
      if (job !== st.job) return;
      box.insertAdjacentHTML('beforeend', part(CHUNK));
      st.pending = i < list.length;
      if (st.pending) setTimeout(more, 0);
    };
    if (st.pending) setTimeout(more, 0);
  }
  function drawHead(){
    const n = myIds().length, k = kinds();
    const fb = (id, label) => `<button type="button" data-glf="${id}" aria-pressed="${st.filter === id}">${label}</button>`;
    return `<h2 class="gltitle">Glossary</h2>
<p class="glquiet" id="glquiet"${st.unsaved ? '' : ' hidden'}>My words could not be saved on this device. They are kept until this page is closed.</p>
<div class="gltop"><input type="search" id="glq" value="${esc(st.q)}" placeholder="Search terms and definitions" aria-label="Search the glossary" autocomplete="off" autocapitalize="off" spellcheck="false">
<div class="glf" role="group" aria-label="Show">${fb('all', 'All')}${fb('e2', 'Exam 2')}${fb('e1', 'Exam 1')}${fb('mine', `My words (<span id="glmyn">${n}</span>)`)}${
  k.length ? `<label class="glkind"><span class="gsr">Kind</span><select id="glkind" aria-label="Kind of term"><option value="">Every kind</option>${k.map(x => `<option value="${esc(x)}"${st.kind === x ? ' selected' : ''}>${esc(x.charAt(0).toUpperCase() + x.slice(1))}</option>`).join('')}</select></label>` : ''}</div></div>`;
  }
  function drawBody(){
    const body = st.pane.querySelector('#glbody'); if (!body) return;
    const list = filtered(), n = myIds().length;
    const cnt = st.pane.querySelector('#glmyn'); if (cnt) cnt.textContent = n;
    const quiet = st.pane.querySelector('#glquiet'); if (quiet) quiet.hidden = !st.unsaved;
    let h = '';
    if (st.filter === 'mine') {
      if (!n) { st.job++; st.pending = false; body.innerHTML = '<p class="glempty" id="glempty">A term is added here when you press “I didn’t know this” on it, under an answered question or in this list.</p>'; return; }
      h += `<p class="glmine"><button type="button" class="glprim" data-glact="review">Review my words</button><button type="button" class="gmk" data-glact="clear">Clear my words</button></p>`;
    }
    h += `<p class="glcount" id="glcount" role="status">${list.length === 1 ? '1 term' : list.length + ' terms'}${st.filter === 'mine' ? ', most missed first' : ''}</p><ul class="gllist${st.kind ? ' bykind' : ''}" id="gllist"></ul>`;
    body.innerHTML = h;
    fillList(body.querySelector('#gllist'), list);
  }
  function drawReview(){
    const r = st.review, body = st.pane.querySelector('#glbody'); if (!r || !body) return;
    const cnt = st.pane.querySelector('#glmyn'); if (cnt) cnt.textContent = myIds().length;
    const quiet = st.pane.querySelector('#glquiet'); if (quiet) quiet.hidden = !st.unsaved;
    st.job++; st.pending = false;
    while (r.queue.length && !(BY[r.queue[0]] && rec(r.queue[0]))) r.queue.shift();
    if (!r.queue.length) {
      body.innerHTML = `<div class="glrev"><p class="glleft" id="glleft" role="status">0 left</p><p>The review is finished.</p><p><button type="button" class="glprim" data-glact="endreview">Back to My words</button></p></div>`;
      return;
    }
    const t = BY[r.queue[0]], c = rec(t.id);
    body.innerHTML = `<div class="glrev"><p class="glleft" id="glleft" role="status">${r.queue.length} left</p>
<p class="glrt"><b>${esc(t.term)}</b> <span class="gcnt">${esc(times(c.n))}</span></p>
${r.shown ? `<div class="glrd" id="glrd">${alsoLine(t, 'cap')}${defBody(t)}</div><p class="glract"><button type="button" class="glprim" data-glact="got">Got it</button><button type="button" class="glsec" data-glact="still">Still learning</button></p>`
          : `<p class="glract"><button type="button" class="glprim" data-glact="showdef" aria-expanded="false">Show meaning</button></p>`}
<p class="glract"><button type="button" class="gmk" data-glact="endreview">Stop the review</button></p></div>`;
  }
  function render(){
    if (!st.pane) return;
    sync();
    if (st.review && st.filter !== 'mine') st.review = null;
    const hadFocus = document.activeElement && document.activeElement.id === 'glq';
    if (!st.pane.querySelector('#glbody')) st.pane.innerHTML = '<div id="glhead"></div><div id="glbody"></div>';
    const head = st.pane.querySelector('#glhead'), inp = head.querySelector('#glq');
    if (!inp) head.innerHTML = drawHead();
    else {     // the search field is kept (what is typed, the cursor); only the buttons change
      head.querySelectorAll('[data-glf]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.glf === st.filter)));
      if (inp.value !== st.q && !hadFocus) inp.value = st.q;
    }
    if (st.review) drawReview(); else drawBody();
  }
  const focusAct = a => { const b = st.pane.querySelector(`[data-glact="${a}"]`); if (b) { try { b.focus(); } catch (x) {} } return !!b; };
  function onPaneClick(e){
    const el = e.target && e.target.closest ? e.target : null; if (!el) return;
    const f = el.closest('[data-glf]');
    if (f) { st.filter = f.dataset.glf; st.review = null; render(); return; }
    const mo = el.closest('[data-glmore]');
    if (mo) {
      const t = BY[mo.dataset.glmore], line = mo.closest('.galso');
      if (t && line) { line.outerHTML = alsoLine(t, 'all'); }
      return;
    }
    const m = el.closest('[data-glmark]');
    if (m) {
      const id = m.dataset.glmark, on = m.getAttribute('aria-pressed') === 'true';
      if (on) unmark(id); else mark(id);
      const now = !!rec(id);
      m.setAttribute('aria-pressed', String(now));
      const cnt = st.pane.querySelector('#glmyn'); if (cnt) cnt.textContent = myIds().length;
      const quiet = st.pane.querySelector('#glquiet'); if (quiet) quiet.hidden = !st.unsaved;
      return;
    }
    const rm = el.closest('[data-glrm]');
    if (rm) {
      const row = rm.closest('.gle'), next = row && (row.nextElementSibling || row.previousElementSibling);
      unmark(rm.dataset.glrm); render();
      const nb = next && next.dataset && st.pane.querySelector(`[data-glrm="${CSS.escape(next.dataset.gle || '')}"]`);
      if (nb) { try { nb.focus(); } catch (x) {} } else { const fb = st.pane.querySelector('[data-glf="mine"]'); if (fb) { try { fb.focus(); } catch (x) {} } }
      return;
    }
    const a = el.closest('[data-glact]'); if (!a) return;
    const act = a.dataset.glact, r = st.review;
    if (act === 'review') {
      const mine = sync().w;
      st.review = {queue: myIds().sort((x, y) => mine[y].n - mine[x].n), shown: false};
      render(); focusAct('showdef');
    } else if (act === 'showdef' && r) { r.shown = true; render(); focusAct('got'); }
    else if ((act === 'got' || act === 'still') && r) {
      const id = r.queue.shift();
      if (act === 'got') gotIt(id);
      r.shown = false; render();
      if (!focusAct('showdef')) focusAct('endreview');
    } else if (act === 'endreview') { st.review = null; render(); if (!focusAct('review')) { const fb = st.pane.querySelector('[data-glf="mine"]'); if (fb) { try { fb.focus(); } catch (x) {} } } }
    else if (act === 'clear') {
      if (typeof confirm === 'function' && !confirm('Remove every word from My words?')) return;
      clearAll(); st.review = null; render();
      const fb = st.pane.querySelector('[data-glf="mine"]'); if (fb) { try { fb.focus(); } catch (x) {} }
    }
  }
  function onPaneInput(e){
    const t = e.target; if (!t) return;
    if (t.id === 'glq') { st.q = t.value; st.review = null; if (st.review === null) drawBody(); }
    else if (t.id === 'glkind') { st.kind = t.value; st.review = null; drawBody(); }
  }
  // open(id): the tab, filtered to that term (used by the search dialog)
  function open(id){
    const t = BY[id];
    st.filter = 'all'; st.kind = ''; st.review = null; st.q = t ? t.term : '';
    show(ID);
    const inp = st.pane.querySelector('#glq'); if (inp) inp.value = st.q;
    drawBody();
  }

  const CSS_TEXT = `
.gsr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
details.gw{margin:12px 0 0;min-width:0}
details.gw > summary{cursor:pointer;color:var(--accent);font-size:14.5px;min-height:44px;display:flex;align-items:center;gap:6px;list-style:none;width:fit-content;max-width:100%}
details.gw > summary::-webkit-details-marker{display:none}
details.gw > summary::before{content:"";width:7px;height:7px;border-right:2px solid currentColor;border-bottom:2px solid currentColor;transform:rotate(-45deg);margin:0 4px 0 2px;flex:none}
details.gw[open] > summary::before{transform:rotate(45deg)}
.gwrow{display:flex;flex-wrap:wrap;gap:6px;margin:2px 0 0}
.gwt{font:inherit;font-size:14px;min-height:44px;padding:4px 13px;border:1px solid var(--line);border-radius:999px;background:var(--paper);color:var(--text);cursor:pointer;max-width:100%;overflow-wrap:anywhere;text-align:left}
.gwt.mine{border-color:var(--accent)}
.gwt[aria-expanded=true]{background:var(--accent-bg);border-color:var(--accent);font-weight:600}
.gwdot{color:var(--accent);font-size:9px;margin-right:6px;vertical-align:middle}
.gwdef{margin:10px 0 0;padding:2px 0 2px 14px;border-left:3px solid var(--accent);font-size:15.5px;line-height:1.55;min-width:0;overflow-wrap:anywhere;max-width:70ch}
.gwdef p,.gle p,.glrev p{margin:0}
.glh{display:flex;flex-wrap:wrap;align-items:center;gap:0 10px}
.gdt,.glt{font-size:17px;font-weight:700;line-height:1.3;margin:0;letter-spacing:0;text-transform:none}
.glt{flex:0 1 auto;min-width:0;overflow-wrap:anywhere}
.galso{color:var(--text-dim);font-size:13.5px;line-height:1.4;margin-top:1px !important}
.gdd{margin-top:6px !important;font-size:16px;line-height:1.55;max-width:70ch}
.gparts{display:grid;gap:16px;margin-top:12px}
.gparts .gdd{margin-top:2px !important}
.gpl{font-size:12.5px;font-weight:700;letter-spacing:.03em;color:var(--text-dim)}
.gsrc{margin-top:2px !important;display:flex;flex-wrap:wrap;align-items:center;gap:0 14px;font-size:12.5px;color:var(--text-dim);line-height:1.4}
.gsg{display:inline-flex;flex-wrap:wrap;align-items:center;gap:0 2px}
.gsd{margin-right:4px}
.gsp{padding:6px 0}
.gsp a{color:inherit}
.gslc{font:inherit;min-height:44px;min-width:44px;padding:0 2px;border:0;background:none;color:var(--accent);cursor:pointer;display:inline-flex;align-items:center;justify-content:center}
.gslp{display:inline-block;padding:3px 10px;border:1px solid var(--line);border-radius:999px;font-size:13px;line-height:1.3;background:var(--paper)}
.gslc:hover .gslp{background:var(--accent-bg);border-color:var(--accent)}
.gcnt{font-size:12.5px;color:var(--text-dim);white-space:nowrap}
.gstar{font:inherit;font-size:13px;min-height:44px;min-width:44px;padding:0 10px;border:0;border-radius:8px;background:none;color:var(--text-dim);cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:6px}
.gbk{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linejoin:round;flex:none}
.gstar:hover{color:var(--accent)}
.gstar[aria-pressed=true]{color:var(--accent);font-weight:600}
.gstar[aria-pressed=true] .gbk{fill:currentColor}
.gstl{display:none}
.gstar[aria-pressed=true] .gstl{display:inline}
.gmore{font:inherit;font-size:inherit;color:var(--accent);background:none;border:0;padding:0 8px;margin:-12px 0 -12px 2px;cursor:pointer;min-height:44px;min-width:44px;display:inline-flex;align-items:center;vertical-align:middle}
.gtag{font-size:11.5px;color:var(--text-dim);text-transform:uppercase;letter-spacing:.05em;display:none}
@media (min-width:900px){.gtag{display:inline}}
.bykind .gtag{display:inline}
.gmk{font:inherit;font-size:13.5px;min-height:44px;padding:4px 14px;border:1px solid var(--line);border-radius:8px;background:var(--paper);color:var(--text);cursor:pointer}
.gwt:focus-visible,.gmk:focus-visible,.gstar:focus-visible,.gslc:focus-visible,.gmore:focus-visible,details.gw > summary:focus-visible,#v-gloss button:focus-visible{outline:3px solid var(--accent);outline-offset:2px}
#v-gloss .gltitle{margin:4px 0 8px}
#v-gloss .glquiet{font-size:13px;color:var(--text-dim);margin:0 0 8px}
#v-gloss .gltop{display:grid;gap:8px;margin:0 0 6px}
#v-gloss #glq{width:100%;min-height:44px;font:inherit;font-size:16px;padding:6px 12px;border:1px solid var(--line);border-radius:8px;background:var(--paper);color:var(--text);box-sizing:border-box}
#v-gloss .glf{display:flex;flex-wrap:wrap;gap:6px;align-items:center}
#v-gloss .glf button{font:inherit;font-size:14px;min-height:44px;border:1px solid var(--line);background:var(--paper);color:var(--text);border-radius:999px;padding:5px 14px;cursor:pointer}
#v-gloss .glf button[aria-pressed=true]{background:var(--accent);color:#fff;border-color:var(--accent)}
#v-gloss .glkind select{font:inherit;font-size:14px;min-height:44px;border:1px solid var(--line);border-radius:8px;background:var(--paper);color:var(--text);padding:4px 8px;max-width:100%}
#v-gloss .glcount{font-size:13px;color:var(--text-dim);margin:8px 0 0}
#v-gloss .gllist{list-style:none;margin:6px 0 0;padding:0;max-width:760px}
#v-gloss .gll{font-size:13px;letter-spacing:.06em;color:var(--text-dim);margin:26px 0 0;padding:0 0 4px;border-bottom:2px solid var(--line)}
#v-gloss .gle{padding:18px 0 16px;border-bottom:1px solid var(--line-soft,var(--line));content-visibility:auto;contain-intrinsic-size:auto 150px;min-width:0;overflow-wrap:anywhere}
#v-gloss .gle .glrm{margin-left:auto}
#v-gloss .gle .gmk{border-color:transparent;background:none;color:var(--accent);padding:4px 8px}
#v-gloss .glmine{display:flex;flex-wrap:wrap;gap:8px;margin:10px 0 0 !important}
#v-gloss .glprim{font:inherit;min-height:44px;padding:6px 18px;border:0;border-radius:8px;background:var(--accent);color:#fff;font-weight:700;cursor:pointer}
#v-gloss .glsec{font:inherit;min-height:44px;padding:6px 18px;border:1px solid var(--accent);border-radius:8px;background:var(--paper);color:var(--accent);font-weight:600;cursor:pointer}
#v-gloss .glempty{margin:14px 0;color:var(--text-dim)}
#v-gloss .glrev{border-left:3px solid var(--accent);padding:2px 0 2px 16px;margin:14px 0 0;max-width:70ch}
#v-gloss .glleft{font-size:13px;color:var(--text-dim)}
#v-gloss .glrt{font-size:20px;margin:6px 0 0 !important}
#v-gloss .glrd{margin:8px 0 0;overflow-wrap:anywhere}
#v-gloss .glract{display:flex;flex-wrap:wrap;gap:8px;margin:12px 0 0 !important}
@media print{details.gw{display:none}}
`;
  try {
    setTerms(typeof GLOSSARY_TERMS !== 'undefined' ? GLOSSARY_TERMS : []);
    const nav = document.getElementById('nav'), main = document.querySelector('main');
    const style = document.createElement('style'); style.id = 'glosscss'; style.textContent = CSS_TEXT; document.head.appendChild(style);
    const sec = document.createElement('section'); sec.id = 'v-' + ID; sec.className = 'hide'; st.pane = sec;
    const atSec = document.getElementById('v-settings');
    if (atSec && atSec.parentNode === main) main.insertBefore(sec, atSec); else main.appendChild(sec);
    sec.addEventListener('click', onPaneClick);
    sec.addEventListener('input', onPaneInput);
    sec.addEventListener('change', e => { if (e.target && e.target.id === 'glkind') onPaneInput(e); });
    document.addEventListener('click', onDocClick);
    document.addEventListener('toggle', onToggle, true);
    const btn = document.createElement('button'); btn.setAttribute('data-v', ID); btn.textContent = 'Glossary';
    btn.onclick = () => show(ID);
    const atBtn = nav.querySelector('button[data-v="settings"]');
    if (atBtn) nav.insertBefore(btn, atBtn); else nav.appendChild(btn);

    const orig = show;
    show = function(v){
      if (v !== ID) { sec.classList.add('hide'); return orig.apply(this, arguments); }
      try {
        if (typeof figClose === 'function') figClose();
        if (typeof VIEW_NAME !== 'undefined' && !VIEW_NAME[ID]) VIEW_NAME[ID] = 'the glossary';
        const again = VIEW === ID && !sec.classList.contains('hide');
        VIEW = v;
        document.querySelectorAll('#nav button').forEach(b => b.setAttribute('aria-selected', b.dataset.v === v));
        VIEWS.forEach(k => { const x = document.getElementById('v-' + k); if (x) x.classList.add('hide'); });
        ['drugs', 'dz', 'ftu'].forEach(k => { const x = document.getElementById('v-' + k); if (x) x.classList.add('hide'); });
        sec.classList.remove('hide');
        if (!again) window.scrollTo(0, 0);
        render();
        if (typeof navReveal === 'function') navReveal(v);
      } catch (e) {
        console.error('The Glossary tab could not be drawn; showing Topics.', e);
        sec.classList.add('hide');
        return orig.call(this, 'topics');
      }
    };
    // another profile opened (Switch, Import): the list and the rows on screen are drawn again from that profile's words
    if (typeof useProfile === 'function') {
      const ou = useProfile;
      useProfile = function(){
        const r = ou.apply(this, arguments);
        try {
          st.review = null; st.open = null;
          document.querySelectorAll('details.gw').forEach(d => d.remove());
          if (!sec.classList.contains('hide')) render();
          decorateQuiz(); decorateExam();
        } catch (e) { console.error('The glossary could not follow the profile change.', e); }
        return r;
      };
    }
    // the answered-question row: after the engine draws the question, the paper's review, and the all-on-one-page cards
    if (typeof renderQuiz === 'function') {
      const oq = renderQuiz;
      renderQuiz = function(){
        const r = oq.apply(this, arguments);
        try { decorateQuiz(); } catch (e) { console.error('"Words in this question" could not be drawn; the question is unaffected.', e); }
        return r;
      };
    }
    if (typeof renderExamResult === 'function') {
      const oe = renderExamResult;
      renderExamResult = function(){
        const r = oe.apply(this, arguments);
        try { decorateExam(); } catch (e) { console.error('"Words in this question" could not be drawn on the review; the review is unaffected.', e); }
        return r;
      };
    }
    if (typeof armFigs === 'function') {
      const oa = armFigs;
      armFigs = function(root){
        const r = oa.apply(this, arguments);
        try { if (root && (root.id === 'v-quiz' || (root.closest && root.closest('#v-quiz')))) decorateQuiz(); }
        catch (e) { console.error('"Words in this question" could not be drawn; the question is unaffected.', e); }
        return r;
      };
    }
  } catch (e) { console.error('The glossary could not be added; the rest of the page is unaffected.', e); }
  return {state: st, render, open, detect, termsFor, setTerms, terms: () => TERMS, mark, unmark, key: KEY, clean, words: () => JSON.parse(JSON.stringify(sync())), decorate: () => { decorateQuiz(); decorateExam(); }};
})();
