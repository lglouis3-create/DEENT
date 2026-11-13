/* ==========================================================================
   slide_ui.js: SLIDE LINKS AND THE SLIDE VIEWER (course-level; Louis,
   2026-11-13: "I added slides to exam 1, i was thinking we add them to where
   it says this slides and links them to the corresponding slide", and the
   Exam 2 decks after them).

   Wherever the page cites a slide of a deck, the citation becomes a control
   (an inline span with the role of a button, so the line wraps as it did)
   that opens that slide from the clean copy of the deck (deck/<deck>/<NN>.webp,
   render_deck.py; the page map and the tables are slide_data.js, written by
   slide_map.py from the decks and slide_tables.json).

   1. THE PARSER (no DOM; slide_check.js runs this same code over the source
      files). In one line of text it finds, in this order of priority:
      a. a citation that names its deck: a deck file name ("... (Skin-PCol-
         Students-2026.pdf) slides 24-26") or a name from SLIDES.names
         ("PCol 55", "DPAW p. 43", "Patel Scaly slide 12", "PP 8"). "Sun" is
         the name of two decks: it goes to the deck of the professor named
         with it, else to the sun deck its place declares, else nowhere;
      b. a bare "slide N", "slides N-M", "p. N" (Dr. Sikazwe's deck only: it is
         the one cited by page), or a number in a column headed Slide: it
         takes the deck its place declares (2), or the deck named earlier in
         the same sentence when the place declares none. A professor's name
         before it ("Dr. Patel's slide 45") must be that deck's professor;
      c. anything else stays text: transcript lines (T 573-577, T@12345),
         recording times, dates, chart, syllabus and textbook pages, a number
         outside the deck.
   2. THE PLACE (declared, never read out of prose): after a question is
      answered, the deck its own source line names first (the deck the engine
      files the question under); in Reference, Tell apart and Guides, the
      section's deck from SLIDES.sections (a section that draws on several
      decks has none), or the one deck a table column's heading names; a
      figure caption, the one deck it names; an Atlas board, Dr. Sikazwe's
      deck; a Drug list line, the deck its source chip names; in Diseases, the
      deck(s) the nearest source line names, within a professor's block that
      professor's, and for the practice patients the card's deck.
   3. WHERE: only in what the page shows after an answer (the explanation and
      its source line, the exam review, the missed list) and in the reading
      tabs (Reference, Tell apart, Guides, Atlas, Drug list, Diseases, figure
      captions). Never inside a button, link, summary, label or form field,
      never in an answer option, never in a drawn figure.
   4. THE VIEWER: one <dialog> with the deck, "Slide N of M" (Dr. Sikazwe's
      deck: "Page N", the page of the file the citations count by), the
      picture, Previous, Next, "Open full size" and Close. A picture is
      fetched only when its slide is opened.

   Isolated: it returns early without a DOM or without SLIDES, wraps nothing
   of the core, keeps every text as written (a button holds the citation's own
   characters), catches its own errors and leaves the page working without it.
   Storage: none.
   ========================================================================== */
const SLIDE_UI = (() => {
  if (typeof SLIDES === 'undefined' || !SLIDES || !SLIDES.decks) return null;

  /* ---------------------------------------------------------------- parser */
  const P = (S => {
    const D = S.decks, IDS = Object.keys(D);
    const rx = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const FILE = {}, NAME = {};
    IDS.forEach(id => (D[id].files || []).forEach(f => { FILE[f] = id; }));
    (S.names || []).forEach(r => { NAME[r[0]] = {deck: r[1], bare: !!r[2]}; });
    const alt = keys => keys.slice().sort((a, b) => b.length - a.length).map(k => rx(k).replace(/'/g, "['’]")).join('|');
    const SP = '[\\s\\xa0]';
    const DASH = '[\\u2013\\u2014\\u2011-]';
    const NUM = '\\d{1,3}(?![\\d/:%@]|\\.\\d)';
    const RNG = NUM + '(?:\\s?' + DASH + '\\s?' + NUM + ')?';
    // a later number of a list is not one when a unit or a count follows it ("slide 12, 3 times daily")
    const UNIT = '(?:%|mg|mcg|g|mL|ml|kg|cm|mm|nm|hours?|hrs?|h|days?|weeks?|wks?|months?|years?|yrs?|minutes?|min|times|\\xd7|x|FTU|fingertip|others?|of|to|or more|more|grams?|drops?|doses?|tubes?|patients?|questions?|points?|marks?|items?)';
    const LIST = RNG + '(?:(?:,\\s?|,?\\s(?:and|or|&)\\s)' + RNG + '(?!\\s?' + UNIT + '\\b))*';
    const WORD = '(?:[Ss]lides?|SLIDES?|pp?\\.|[Pp]ages?)';
    const RE_FILE = new RegExp('(' + alt(Object.keys(FILE)) + ')(?:\\)?[,:;]?' + SP + '+(?:(' + WORD + ')' + SP + '*)?(' + LIST + '))?', 'g');
    const RE_NAME = new RegExp('(' + alt(Object.keys(NAME)) + ')(?:' + SP + '+deck)?(?:' + SP + '+|' + SP + '*\\(' + SP + '*)(?:(' + WORD + ')' + SP + '*)?(' + LIST + ')', 'g');
    const RE_BARE = new RegExp('(' + WORD + ')' + SP + '*(' + LIST + ')', 'g');
    const RE_COL = new RegExp('^' + SP + '*(' + LIST + ')');
    const RE_ITEM = new RegExp('(\\d{1,3})(?:\\s?' + DASH + '\\s?(\\d{1,3}))?', 'g');
    const AFTER_UNIT = new RegExp('^\\s?' + UNIT + '\\b');
    const PROF = /(?:Dr\.\s*)?\b(Smith|Patel|Sikazwe)\b(?:['’]s)?/g;
    const PROF_TAIL = /(?:Dr\.\s*)?\b(Smith|Patel|Sikazwe)(?:['’]s)?(?:\s+(?:deck|lecture))?[\s\xa0,(:·]*$/;
    const PRONOUN_TAIL = /\b(?:his|her)(?:\s+(?:deck|lecture))?[\s\xa0,(]*$/;
    const PROF_AFTER = /^[\s\xa0]*\((?:Dr\.\s*)?(Smith|Patel|Sikazwe)\)/;
    // before "p. N" / "page N": a page of something that is not a slide deck
    const NOT_DECK = /(?:\b[Cc]hart|\b[Ss]yllabus|\b[Rr]eading|\b[Hh]andout|\b[Tt]extbook|\b[Bb]ook|\b[Aa]ssignment|\b(?:Foye|Katzung|Golan|DiPiro|Goodman|Endotext|Bikle)\b[^;]*|Chapt?\.\s?\d+,?|\bJ Med Chem[^;]*)[\s\xa0,(]*$/;
    const PRINTED = /\bprinted[\s\xa0(]*$/;
    const SENT = /[.!?]["'”’)\]]?\s+(?=[A-Z(“])/g;
    const isWordCh = c => !!c && /[A-Za-z0-9’'-]/.test(c);
    const SUN = {Smith: 'sun', Patel: 'p8s'};
    const decksOfProf = p => IDS.filter(id => D[id].prof === p);

    /* a cited number of a deck -> what is shown: {deck, page} (the deck may be another one: Dr.
       Smith's Sun slides 1-4 are slides of her Skin Pharmacology deck); null = nothing to show */
    function resolve(deck, n, printed){
      const d = D[deck]; if (!d || !(n >= 1)) return null;
      if (printed) return n <= d.pages ? {deck, page: n} : null;
      if (n > d.cited) return null;
      const m = d.map ? d.map[n] : undefined;
      if (m === undefined) return n <= d.pages ? {deck, page: n} : null;
      if (Array.isArray(m)) return D[m[0]] && m[1] >= 1 && m[1] <= D[m[0]].pages ? {deck: m[0], page: m[1]} : null;
      return m >= 1 && m <= d.pages ? {deck, page: m} : null;
    }
    /* the cited number a clean page of a deck goes by (the lowest, where two share a page) */
    function citedOf(deck, page){
      const d = D[deck]; if (!d) return page;
      if (!d.map) return page;
      if (!d.inv) { d.inv = {}; for (let n = d.cited; n >= 1; n--) { const r = resolve(deck, n); if (r && r.deck === deck) d.inv[r.page] = n; } }
      return d.inv[page] || page;
    }
    const profsIn = s => { const out = []; let m; PROF.lastIndex = 0; while ((m = PROF.exec(s))) out.push(m[1]); return out; };
    const sentenceStart = (text, at) => { let s = 0, m; SENT.lastIndex = 0; while ((m = SENT.exec(text)) && m.index + m[0].length <= at) s = m.index + m[0].length; return s; };
    /* which of the two decks called "Sun": the professor named in brackets right after, else the
       last of Dr. Smith / Dr. Patel named before it in the line, else what the place declares */
    function sunDeck(text, s, e, ctx){
      const a = PROF_AFTER.exec(text.slice(e));
      const before = profsIn(text.slice(0, s)).filter(p => SUN[p]);
      const prof = a && SUN[a[1]] ? a[1] : before.length ? before[before.length - 1] : null;
      if (prof) return SUN[prof];
      const decks = (ctx && ctx.decks) || [];
      const c = decks.filter(x => x === 'sun' || x === 'p8s');
      if (c.length === 1) return c[0];
      if (ctx && ctx.prof && SUN[ctx.prof]) return SUN[ctx.prof];
      if (ctx && ctx.sun && D[ctx.sun]) return ctx.sun;
      const ps = decks.map(d => D[d].prof).filter((p, i, all) => all.indexOf(p) === i);
      return decks.length && ps.length === 1 && SUN[ps[0]] ? SUN[ps[0]] : null;
    }
    /* the list "12, 15-18 and 20" starting at offset `at` -> its items with their offsets */
    function items(list, at){
      const out = []; let m; RE_ITEM.lastIndex = 0;
      while ((m = RE_ITEM.exec(list))) out.push({s: at + m.index, e: at + m.index + m[0].length, a: +m[1], b: m[2] === undefined ? +m[1] : +m[2]});
      return out;
    }

    /* scan(text, ctx) -> {links, refused, decks}
       ctx: what the place declares:
            decks   [deck id, ...]: one deck = a bare number is that deck's
            prof    'Smith' | 'Patel' | 'Sikazwe': the professor whose block this is
            sun     'sun' | 'p8s': the deck "Sun" means here
            column  true: the text is a cell of a column headed Slide or Page
            chart   true: "p. N" here is a page of the drug chart (the Drug list)
       links:   [{s, e, deck, n, to, printed, form}]: text[s..e) becomes a button that opens cited
                number n of `deck` (the citation runs to `to`)
       refused: [{s, e, raw, why}]: a citation left as text, with the reason
       decks:   the decks the line names itself, in order */
    function scan(text, ctx){
      ctx = ctx || {};
      const cand = [], links = [], refused = [], named = [], ctxDecks = ctx.decks || [];
      let m;
      RE_FILE.lastIndex = 0;
      while ((m = RE_FILE.exec(text))) {
        const deck = FILE[m[1]];
        if (named.indexOf(deck) < 0) named.push(deck);
        if (m[3] !== undefined) {
          const ls = m.index + m[0].length - m[3].length, ws = m[2] ? text.lastIndexOf(m[2], ls) : ls;
          cand.push({pri: 0, s: m.index, e: m.index + m[0].length, from: ws, ls, list: m[3], deck, form: 'file name'});
        }
      }
      RE_NAME.lastIndex = 0;
      while ((m = RE_NAME.exec(text))) {
        if (isWordCh(text[m.index - 1])) continue;
        const nm = NAME[m[1].replace(/’/g, "'")]; if (!nm) continue;
        const e = m.index + m[0].length, ls = e - m[3].length;
        if (!m[2] && !nm.bare) continue;                                  // "Wound 12" is not a citation; "Wound Care slide 12" is
        if (!m[2] && AFTER_UNIT.test(text.slice(items(m[3], ls)[0].e))) continue;   // "SD 4 weeks"
        cand.push({pri: 1, s: m.index, e, from: m.index, ls, list: m[3], deck: nm.deck, form: m[2] ? 'deck name + ' + (/^p/i.test(m[2]) ? 'page' : 'slide') : 'deck name + number'});
      }
      RE_BARE.lastIndex = 0;
      while ((m = RE_BARE.exec(text))) {
        if (/[A-Za-z]/.test(text[m.index - 1] || '')) continue;           // "app. 3"
        const e = m.index + m[0].length, page = /^p/i.test(m[1]);
        cand.push({pri: 2, s: m.index, e, from: m.index, ls: e - m[2].length, list: m[2], deck: null, page, form: page ? 'bare page' : 'bare slide'});
      }
      if (ctx.column && (m = RE_COL.exec(text))) {
        const ls = m[0].length - m[1].length;
        cand.push({pri: 3, s: ls, e: m[0].length, from: ls, ls, list: m[1], deck: null, form: 'Slide column'});
      }
      // a deck-naming citation wins over a bare one it overlaps ("PCol slide 12" holds a bare "slide 12")
      cand.sort((a, b) => a.pri - b.pri || a.s - b.s);
      const kept = [];
      cand.forEach(c => { if (!kept.some(k => c.s < k.e && k.s < c.e)) kept.push(c); });
      kept.sort((a, b) => a.s - b.s);
      const explicit = [];
      kept.forEach(c => {
        const raw = text.slice(c.s, c.e), before = text.slice(Math.max(0, c.s - 60), c.s);
        let deck = c.deck, printed = false, why = '';
        if (deck === 'sun?') {
          deck = sunDeck(text, c.s, c.e, ctx);
          if (!deck) why = 'two decks are called Sun (Dr. Smith, Dr. Patel) and nothing here says which';
        } else if (deck === null) {
          printed = PRINTED.test(before);
          if (c.page && !printed && (ctx.chart || NOT_DECK.test(before))) why = 'a page of the chart, the syllabus, a reading or a textbook, not of a slide deck';
          else {
            // a professor named right before it, or "his" / "her" after one professor was named
            let prof = (PROF_TAIL.exec(before) || [])[1] || null;
            if (!prof && PRONOUN_TAIL.test(before)) { const ps = profsIn(text.slice(0, c.s)); prof = ps.length ? ps[ps.length - 1] : null; }
            const adjacent = !!prof;
            // where the place declares several decks: the one professor named in this sentence, else the block's own
            if (!prof && ctxDecks.length > 1) {
              const ps = profsIn(text.slice(sentenceStart(text, c.s), c.s)).filter((p, i, all) => all.indexOf(p) === i);
              prof = ps.length === 1 ? ps[0] : (!ps.length && ctx.prof) || null;
            }
            const fits = d => !prof || (D[d] && D[d].prof === prof);
            const here = ctxDecks.filter(fits), place = here.length === 1 ? here[0] : null;
            const last = explicit.length ? explicit[explicit.length - 1] : null;
            const carry = last && sentenceStart(text, c.s) <= last.s && fits(last.deck) ? last.deck : null;
            // the place decides; the deck named earlier in the sentence only where the place does not
            deck = place || (carry && (!here.length || here.indexOf(carry) >= 0) ? carry : null);
            if (!deck && !why && adjacent && decksOfProf(prof).length === 1) deck = decksOfProf(prof)[0];   // "Dr. Sikazwe's slide 62": he has one deck
            if (!deck && !why) why = !ctxDecks.length ? 'a bare number where no deck is declared'
              : here.length > 1 ? 'a bare number where more than one deck is declared (' + here.join(', ') + ')'
              : 'the professor named with it (' + prof + ') has no deck declared here';
            if (deck && c.page && !printed && D[deck].unit !== 'Page') { why = 'a page number, where the deck (' + deck + ') is cited by slide'; deck = null; }
            if (deck && printed && D[deck].unit !== 'Page') { why = 'a printed slide number outside Dr. Sikazwe’s deck'; deck = null; }
          }
        }
        if (!deck) { refused.push({s: c.s, e: c.e, raw, why}); return; }
        if (c.pri <= 1) { explicit.push({s: c.s, e: c.e, deck}); if (named.indexOf(deck) < 0) named.push(deck); }
        items(c.list, c.ls).forEach((it, i) => {
          let n = 0;
          if (it.b >= it.a) { for (let k = it.a; k <= it.b && k - it.a < 200; k++) if (resolve(deck, k, printed)) { n = k; break; } }
          else if (resolve(deck, it.a, printed)) n = it.a;
          const top = printed ? D[deck].pages : D[deck].cited;
          const out = it.a < 1 || Math.max(it.a, it.b) > top;
          if (!n || out) { refused.push({s: it.s, e: it.e, raw: text.slice(it.s, it.e), deck, outside: out, why: out ? 'outside the deck (' + D[deck].label + ' has ' + top + ')' : 'no clean page for this number'}); return; }
          links.push({s: i === 0 ? c.from : it.s, e: it.e, deck, n, to: it.b > it.a ? it.b : 0, printed, form: c.form});
        });
      });
      return {links, refused, decks: named};
    }
    /* what a section id declares: an exact id, else the longest prefix; undefined = no row */
    function sectionDeck(id){
      let best, len = -1;
      (S.sections || []).forEach(r => {
        const k = r[0];
        if (k === id) { best = r; len = 1e9; }
        else if (k.slice(-1) === '-' && id.indexOf(k) === 0 && k.length > len) { best = r; len = k.length; }
      });
      return best ? {decks: Array.isArray(best[1]) ? best[1] : best[1] ? [best[1]] : [], rule: best[0], sun: best[3] || null} : undefined;
    }
    /* the place of a question: the deck its source line names first, and its professor's sun deck */
    function questionCtx(cite){
      const d = scan(cite || '', null).decks;
      return d.length ? {decks: [d[0]], sun: SUN[D[d[0]].prof] || null} : {decks: []};
    }
    const file = (deck, page) => S.dir + '/' + deck + '/' + (page < 10 ? '0' : '') + page + '.' + S.ext;
    return {scan, resolve, citedOf, sectionDeck, questionCtx, file, decksNamed: t => scan(t, null).decks};
  })(SLIDES);

  const ok = typeof document !== 'undefined' && typeof MutationObserver !== 'undefined' && typeof document.createTreeWalker === 'function' &&
             typeof document.querySelector === 'function' && document.querySelector('main') && document.body && document.head;
  if (!ok) return {parser: P};

  /* ------------------------------------------------------------- linkifier */
  const D = SLIDES.decks;
  const SKIP = 'button,a,summary,label,input,select,textarea,option,svg,script,style,code,.slk,.dzcz,.opt,nav,[contenteditable]';
  const UNIT_SEL = 'p,li,td,th,dd,dt,figcaption,h2,h3,h4,h5,h6,small,div,section,article,span.ln,span.dlsrc,span.dzsrc,span.wtxt,span.atpg,span.stepwhy';
  const DZPROF = {sm: 'Smith', sk: 'Sikazwe', pa: 'Patel'};
  const SLIDE_HEAD = /^\s*(?:slides?|pages?)\s*(?:;.*)?$/i;
  const seen = new WeakMap();          // text node -> its text when it was read (a node whose text changed is read again)
  const mark = n => seen.set(n, n.data);
  const stats = {runs: 0, links: 0, ms: 0};
  const txt = el => (el && el.textContent) || '';

  /* Reference, Tell apart, Guides, Atlas: an enclosing element with a row in SLIDES.sections (a
     guide section, an Atlas board), else the heading above */
  function sectionCtx(el, view){
    let r;
    for (let a = el; a && a !== view && !r; a = a.parentElement) if (a.id) r = P.sectionDeck(a.id);
    if (!r) {
      const heads = view.querySelectorAll('h2[id],h3[id]');
      let best = null;
      for (let i = 0; i < heads.length; i++) {
        if ((heads[i].compareDocumentPosition(el) & 4) /* el comes after the heading */ || heads[i].contains(el)) best = heads[i]; else break;
      }
      r = best ? P.sectionDeck(best.id) : undefined;
    }
    return r ? {decks: r.decks, sun: r.sun} : {decks: []};
  }
  /* Diseases: the deck(s) the source line(s) of the nearest block name; inside a professor's
     block, that professor; for the practice patients, the card's deck (SLIDES.sections "dzcases-") */
  function dzCtx(el, view){
    const blk = el.closest('.dzprof'), prof = blk ? DZPROF[['sm', 'sk', 'pa'].filter(k => blk.classList.contains(k))[0]] || null : null;
    for (let a = el; a && a !== view; a = a.parentElement) {
      const src = [];
      for (let c = a.firstElementChild; c; c = c.nextElementSibling) if (c.classList && c.classList.contains('dzsrc')) src.push(txt(c));
      if (a.classList && a.classList.contains('dzsrc')) src.push(txt(a));
      const decks = src.length ? P.decksNamed(src.join('; ')) : [];
      if (decks.length) return {decks, prof};
      if (a.classList && a.classList.contains('dzcases')) {
        const card = a.closest('[data-card]'), r = card ? P.sectionDeck('dzcases-' + card.getAttribute('data-card')) : undefined;
        return {decks: r ? r.decks : [], prof};
      }
    }
    return {decks: [], prof};
  }
  /* Drug list: the deck the line's own source chip names */
  function drugCtx(el){
    const li = el.closest('li'), chips = li ? li.querySelectorAll('.dlsrc') : [];
    const decks = chips.length ? P.decksNamed(Array.prototype.map.call(chips, txt).join('; ')) : [];
    return {decks: decks.length === 1 ? decks : [], chart: true};
  }
  /* the places of a view: [root element, unit -> what its place declares] */
  function places(view){
    const out = [], id = view.id;
    if (id === 'v-ref' || id === 'v-tell' || id === 'v-guide' || id === 'v-atlas') out.push([view, u => sectionCtx(u, view)]);
    else if (id === 'v-drugs') out.push([view, drugCtx]);
    else if (id === 'v-dz') out.push([view, u => dzCtx(u, view)]);
    else if (id === 'v-diagrams') view.querySelectorAll('figcaption').forEach(f => out.push([f, () => ({decks: []})]));
    else {
      // after an answer: the explanation block and its source line; the exam review; the missed list
      view.querySelectorAll('.why').forEach(w => { const c = w.querySelector('.cite'); const x = P.questionCtx(c ? txt(c) : ''); out.push([w, () => x]); });
      view.querySelectorAll('.qbody').forEach(b => {
        if (b.querySelector('.why')) return;
        const c = b.querySelector(':scope > .cite'); if (!c) return;       // a question not yet answered has no source line
        const x = P.questionCtx(txt(c));
        b.querySelectorAll(':scope > .wrow, :scope > .teach, :scope > .cite, :scope > .prose').forEach(e => out.push([e, () => x]));
      });
      view.querySelectorAll('.missq .mmeta').forEach(e => out.push([e, () => ({decks: []})]));
    }
    return out;
  }
  const headOf = cell => {
    try { const t = cell.closest('table'); return t ? txt(t.querySelectorAll('thead th')[cell.cellIndex]) : ''; } catch (e) { return ''; }
  };
  function linkUnit(unit, ctxOf){
    // the unit's text, with the place of every text node in it
    const nodes = [], w = document.createTreeWalker(unit, 4 /* text */);
    let text = '', n;
    while ((n = w.nextNode())) {
      const p = n.parentElement;
      if (!p || p.closest('svg,script,style')) continue;
      nodes.push({n, at: text.length, skip: !!p.closest(SKIP)});
      text += n.data;
    }
    nodes.forEach(x => mark(x.n));
    if (!/\d/.test(text)) return 0;
    const ctx = Object.assign({decks: []}, ctxOf(unit) || {});
    // a figure caption: the one deck it names; a table cell: the one deck its column heading names
    const cap = unit.closest('figcaption');
    if (cap) { const d = P.decksNamed(txt(cap)); if (d.length === 1) ctx.decks = d; }
    const cell = unit.tagName === 'TD' ? unit : unit.closest('td');
    if (cell) {
      const head = headOf(cell), d = head ? P.decksNamed(head) : [];
      if (d.length === 1) ctx.decks = d;
      ctx.column = SLIDE_HEAD.test(head) && (cell === unit || txt(cell).trim() === text.trim());
    }
    const res = P.scan(text, ctx);
    let made = 0;
    // from the end, so the offsets of earlier links stay true
    res.links.slice().sort((a, b) => b.s - a.s).forEach(l => {
      const x = nodes.filter(k => k.at <= l.s && l.e <= k.at + k.n.data.length)[0];
      if (!x || x.skip || !x.n.parentNode) return;               // split over two nodes, or inside a control: left as text
      const r = P.resolve(l.deck, l.n, l.printed); if (!r) return;
      const mid = x.n.splitText(l.s - x.at); mid.splitText(l.e - l.s);
      // a span with the role of a button: it wraps inside a line as the text did (a <button> is one
      // unbreakable box, which re-wrapped lines and changed the height of the page after it was drawn)
      const b = document.createElement('span');
      b.className = 'slk'; b.setAttribute('role', 'button'); b.setAttribute('tabindex', '0');
      b.setAttribute('data-deck', l.deck); b.setAttribute('data-n', l.n);
      if (l.to) b.setAttribute('data-to', l.to);
      if (l.printed) b.setAttribute('data-printed', '1');
      b.setAttribute('aria-haspopup', 'dialog');
      b.setAttribute('aria-label', mid.data + ': open ' + D[r.deck].label + ', ' + D[r.deck].unit.toLowerCase() + ' ' + P.citedOf(r.deck, r.page));
      mid.parentNode.insertBefore(b, mid); b.appendChild(mid);
      mark(mid); if (b.previousSibling && b.previousSibling.nodeType === 3) mark(b.previousSibling); if (b.nextSibling && b.nextSibling.nodeType === 3) mark(b.nextSibling);
      made++;
    });
    return made;
  }
  function linkView(view){
    let made = 0;
    places(view).forEach(([root, ctxOf]) => {
      const units = new Set(), w = document.createTreeWalker(root, 4);
      let n;
      while ((n = w.nextNode())) {
        if (seen.get(n) === n.data) continue;
        mark(n);
        const p = n.parentElement;
        if (!p || !/\d/.test(n.data) || p.closest(SKIP)) continue;
        const u = p.closest(UNIT_SEL);
        if (u && root.contains(u)) units.add(u); else if (u && u.contains(root)) units.add(root);
      }
      units.forEach(u => { try { made += linkUnit(u, ctxOf); } catch (e) { console.error('Slide links: one line was left as text.', e); } });
    });
    return made;
  }

  /* ---------------------------------------------------------------- viewer */
  const base = () => { try { return BUILD.preview ? '../' : ''; } catch (e) { return ''; } };
  /* deck, page: the picture on screen. cdeck, n: the cited number it stands for, in the deck the citation
     named; Previous and Next follow that deck's numbering (Dr. Smith's Sun slides 1-4 are pictures of her Skin
     Pharmacology deck, and Next from Sun 4 is Sun 5). from: the citation that opened the viewer */
  const V = {dlg: null, deck: null, page: 0, cdeck: null, n: 0, from: null, opener: null, modal: false, lock: null, refocus: false};
  /* the number printed on a clean page of a deck cited by page: the page's own place in the file, except the
     rows of SLIDES.printed (pdftotext of the clean deck) */
  const printedOn = (deck, page) => { let n = page; (SLIDES.printed || []).forEach(r => { if (r[0] === deck && r[1] === page) n = r[2]; }); return n; };
  function build(){
    const d = document.createElement('dialog');
    d.className = 'slv'; d.setAttribute('aria-labelledby', 'slv-deck');
    d.innerHTML = `<div class="slv-in">
      <div class="slv-head"><div class="slv-t"><p id="slv-deck" class="slv-deck"></p><p class="slv-pos" aria-live="polite"></p></div>
        <button type="button" class="slv-x" data-slv="close">Close</button></div>
      <p class="slv-note" hidden></p>
      <div class="slv-pic"><a class="slv-a" target="_blank" rel="noopener"><img class="slv-img" alt="" decoding="async"></a>
        <p class="slv-wait" hidden></p>
        <p class="slv-err" role="alert" hidden>The picture of this slide did not load. Check the connection, then press Try again. <button type="button" class="btn sm" data-slv="again">Try again</button></p></div>
      <div class="slv-bar"><button type="button" class="btn ghost" data-slv="prev">◂ Previous</button><button type="button" class="btn ghost" data-slv="next">Next ▸</button>
        <span class="slv-sp"></span><a class="slv-full" target="_blank" rel="noopener">Open full size</a></div></div>`;
    document.body.appendChild(d);
    d.addEventListener('click', e => {
      const t = e.target.closest ? e.target.closest('[data-slv]') : null;
      if (t) { const a = t.getAttribute('data-slv'); if (a === 'close') close(); else if (a === 'prev') go(-1); else if (a === 'next') go(1); else if (a === 'again') draw(true); return; }
      if (e.target === d) close();                                   // a tap on the dimmed page around the box
    });
    d.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
    });
    // Escape and Tab are the viewer's while it is open, wherever focus is, and the page's own key handlers never
    // see them (an enlarged figure behind the viewer took Tab for its own buttons and closed on the first
    // Escape): Escape closes the viewer, Tab goes round inside it. The keys that scroll move nothing when the
    // box has nothing to scroll (they would scroll the page behind); Space still presses a button
    const SCROLLS = ['PageUp', 'PageDown', 'Home', 'End', 'ArrowUp', 'ArrowDown', ' ', 'Spacebar'];
    const sane = () => { if (V.lock && !(d.open && d.isConnected)) unlock(false); };     // a lock never outlives the viewer
    window.addEventListener('pointerdown', sane, true);
    window.addEventListener('keydown', e => {
      sane();
      if (!d.open) return;
      if (V.modal && SCROLLS.indexOf(e.key) >= 0 && d.scrollHeight <= d.clientHeight + 1 && !((e.key === ' ' || e.key === 'Spacebar') && e.target && e.target.tagName === 'BUTTON')) { e.preventDefault(); return; }
      if (e.key !== 'Escape' && e.key !== 'Tab') return;
      if (e.key === 'Escape') { e.stopPropagation(); e.preventDefault(); close(); return; }
      if (!V.modal) return;                                          // without <dialog> the page around the box is still in use
      e.stopPropagation();
      const f = Array.prototype.filter.call(d.querySelectorAll('button,a[href]'), x => !x.disabled && x.getClientRects().length && getComputedStyle(x).visibility !== 'hidden');
      const i = f.indexOf(document.activeElement), to = e.shiftKey ? (i <= 0 ? f[f.length - 1] : null) : (i < 0 || i === f.length - 1 ? f[0] : null);
      if (to) { e.preventDefault(); try { to.focus({preventScroll: true}); } catch (err) {} }
    }, true);
    // a finger dragged, or a wheel turned, on the dimmed page around the box or on a box with nothing to scroll
    // moves nothing; two fingers, a zoomed page and Ctrl with the wheel (zoom) are left to the browser
    const still = e => { if (e.cancelable && (e.target === d || d.scrollHeight <= d.clientHeight + 1)) e.preventDefault(); };
    d.addEventListener('touchmove', e => {
      const vv = window.visualViewport;
      if (!(e.touches && e.touches.length > 1) && !(vv && vv.scale > 1.01)) still(e);
    }, {passive: false});
    d.addEventListener('wheel', e => { if (!e.ctrlKey) still(e); }, {passive: false});
    d.addEventListener('close', closed);                             // Escape; and close(), which has done it already
    const img = d.querySelector('.slv-img');
    // an answer for a picture that is no longer the one asked for (Next pressed again, the viewer closed) is ignored
    const mine = () => !!img.getAttribute('src') && img.complete;
    img.addEventListener('error', () => { if (mine()) state('bad'); });
    img.addEventListener('load', () => { if (mine() && img.naturalWidth > 0) state(''); });
    return d;
  }
  /* the picture box: 'wait' from the moment a picture is asked for until it arrives (the picture before it is
     taken off at once, the box keeps its size and a line says which slide is loading), 'bad' when it did not
     load (the message and Try again), '' when it is shown. Focus is never left on something that was hidden
     (Try again; the picture's link when there is no picture): it goes to Close, and back to Try again when
     the picture fails once more */
  function state(s, line){
    const d = V.dlg, q = sel => d.querySelector(sel), err = q('.slv-err'), x = q('.slv-x');
    const act = document.activeElement, onErr = !!act && err.contains(act), onPic = act === q('.slv-a');
    const focus = el => { try { el.focus({preventScroll: true}); } catch (e) {} };
    q('.slv-pic').className = 'slv-pic' + (s ? ' ' + s : '');
    if (line !== undefined) q('.slv-wait').textContent = line;
    q('.slv-wait').hidden = s !== 'wait';
    err.hidden = s !== 'bad';
    if (s === 'bad') {
      if (V.refocus && act === x) focus(q('[data-slv=again]'));     // Try again was pressed and the picture failed once more
      else if (onPic) focus(x);
      V.refocus = false;
    } else if (onErr) { focus(x); V.refocus = s === 'wait'; }
    else if (s === '') V.refocus = false;
  }
  /* the next cited number of the cited deck, one way, whose slide is another picture than the one on screen
     (two numbers can share a slide, a number can have none): {n, r}, or null at the end of that deck */
  function step(dir){
    const c = D[V.cdeck]; if (!c) return null;
    for (let n = V.n + dir; n >= 1 && n <= c.cited; n += dir) {
      const r = P.resolve(V.cdeck, n);
      if (r && !(r.deck === V.deck && r.page === V.page)) return {n, r};
    }
    return null;
  }
  function draw(again){
    const d = V.dlg, k = D[V.deck], q = sel => d.querySelector(sel);
    const cited = P.citedOf(V.deck, V.page), unit = k.unit, low = unit.toLowerCase(), title = (k.titles || [])[V.page - 1] || '';
    const src = base() + P.file(V.deck, V.page) + (again ? '?r=' + Date.now() : '');
    const pr = printedOn(V.deck, V.page);
    q('.slv-deck').textContent = k.label;
    q('.slv-pos').textContent = unit + ' ' + cited + ' of ' + k.cited + (unit === 'Page' && pr !== cited ? ' · slide number printed on it: ' + pr : '');
    const f = V.from, at = !!f && f.rdeck === V.deck && f.page === V.page;      // the slide the citation opened is on screen
    const msg = [];
    if (V.cdeck !== V.deck) {
      // a slide of another deck than the one cited
      const what = D[V.cdeck].label + ', ' + D[V.cdeck].unit.toLowerCase() + ' ' + V.n;
      msg.push(at && f.deck === V.cdeck && f.n === V.n ? 'Cited as ' + what + '. That slide is ' + low + ' ' + cited + ' of this deck.' : what + ' is ' + low + ' ' + cited + ' of this deck.');
    } else {
      // a number of the lecture copy that has no page of its own in the clean copy (DPAW page 22 repeats page 21)
      if (at && !f.printed && f.deck === V.deck && f.n !== cited)
        msg.push('Cited as ' + low + ' ' + f.n + '. ' + unit + ' ' + f.n + ' of the lecture copy is the same slide as ' + low + ' ' + cited + '.');
      // a cited range, only while the slide on screen is inside it
      if (f && f.to && f.deck === V.deck && (f.printed ? V.page >= f.n && V.page <= f.to : V.n >= f.n && V.n <= f.to))
        msg.push('Cited: ' + (f.printed ? 'printed slide numbers ' : low + 's ') + f.n + '–' + f.to + '.');
    }
    (SLIDES.notes || []).forEach(r => { if (r[0] === V.deck && r[1] === V.page) msg.push(r[2]); });
    const note = q('.slv-note');
    note.textContent = msg.join(' '); note.hidden = !msg.length;
    const img = q('.slv-img');
    d.style.setProperty('--slv-ar', String(k.ar || 1.3333));     // the box takes the slide's shape before the picture has data
    img.alt = k.label + ', ' + low + ' ' + cited + (title ? ': ' + title : '');
    q('.slv-a').href = src; q('.slv-full').href = src;
    if (img.getAttribute('src') === src && img.complete && img.naturalWidth > 0) state('');
    else { state('wait', 'Loading ' + low + ' ' + cited + '…'); img.src = src; }
    q('[data-slv=prev]').disabled = !step(-1);
    q('[data-slv=next]').disabled = !step(1);
  }
  function go(dir){
    const s = step(dir); if (!s) return;
    V.n = s.n; V.deck = s.r.deck; V.page = s.r.page; V.refocus = false; draw();
  }
  /* the page behind does not scroll while the viewer is open and is at the same place when it closes, and
     nothing on it moves sideways. Where the page's scrollbar takes no room (phones, tablets, a Mac's own
     setting) the root stops scrolling (overflow hidden). Where the scrollbar takes room it stays as it is,
     since taking it away would make the page wider: there the wheel and the keys are stopped at the viewer
     (build), and whatever else scrolls the page (a drag on the scrollbar) is put back at once */
  const put = (x, y) => { try { window.scrollTo({left: x, top: y, behavior: 'instant'}); } catch (e) { window.scrollTo(x, y); } };
  function lock(x, y){
    if (V.lock) unlock(false);
    const r = document.documentElement, k = V.lock = {x, y, w: window.innerWidth, o: r.style.overflow, hid: false, snap: null};
    if (window.innerWidth - r.clientWidth > 0) {
      k.snap = () => {
        if (V.lock !== k || !V.dlg || !V.dlg.open) { window.removeEventListener('scroll', k.snap); return; }
        if (window.innerWidth !== k.w) { k.w = window.innerWidth; k.x = window.scrollX; k.y = window.scrollY; return; }   // a resized window: where the browser put the page
        if (window.scrollX !== k.x || window.scrollY !== k.y) put(k.x, k.y);
      };
      window.addEventListener('scroll', k.snap);
    } else { r.style.overflow = 'hidden'; k.hid = true; }
  }
  function unlock(back){
    const k = V.lock; if (!k) return;
    V.lock = null;
    if (k.snap) window.removeEventListener('scroll', k.snap);
    if (k.hid) document.documentElement.style.overflow = k.o;
    // back to the same place; not when the page behind was drawn anew meanwhile (the citation is gone), and a
    // window that was resized or turned is left where the browser put the page
    if (back && window.innerWidth === k.w && (window.scrollX !== k.x || window.scrollY !== k.y)) put(k.x, k.y);
  }
  function open(deck, n, to, printed, opener){
    const r = P.resolve(deck, n, printed); if (!r) return false;
    if (!V.dlg) V.dlg = build();
    const d = V.dlg;
    V.deck = r.deck; V.page = r.page; V.cdeck = deck; V.n = printed ? P.citedOf(r.deck, r.page) : n;
    V.from = {deck, n, to: to || 0, printed: !!printed, rdeck: r.deck, page: r.page};
    if (opener || !d.open) V.opener = opener || document.activeElement;
    if (!d.open) {
      const x = window.scrollX, y = window.scrollY;
      V.modal = typeof d.showModal === 'function';
      if (V.modal) d.showModal(); else { d.classList.add('slv-fb'); d.setAttribute('open', ''); }   // a browser without <dialog>
      try { lock(x, y); } catch (e) {}
    }
    draw();                         // once the box is on screen: the picture is asked for by a box that is laid out
    const x = d.querySelector('.slv-x'); if (x) { try { x.focus({preventScroll: true}); } catch (e) {} }
    return true;
  }
  /* after the viewer closed, once: by close() at once, or by the browser's close event after Escape. The event
     of an earlier closing that arrives when the viewer is open again finds it open and does nothing */
  function closed(){
    const d = V.dlg; if (!d || d.open) return;
    const o = V.opener; V.opener = null; V.refocus = false;
    d.querySelector('.slv-img').removeAttribute('src');
    // the citation that was tapped is still on the page: focus goes back to it and the page to its place
    const there = !!o && o.isConnected && o.getClientRects().length > 0;
    try { if (there && typeof o.focus === 'function') { try { o.focus({preventScroll: true}); } catch (e) { o.focus(); } } }
    finally { unlock(there || !o); }
  }
  function close(){
    const d = V.dlg; if (!d) return;
    if (d.open && typeof d.close === 'function') d.close(); else d.removeAttribute('open');
    closed();
  }
  /* A slide link's touch area reaches 6 px past its text (the style sheet below), also into the lines above and
     below it. Where that margin lies over another control (a button, a link, a cover on the line above), a tap
     there is that control's; where it lies over the text of another slide link, that link's. Only for a tap
     or click at a point (a key press and a click made by a script carry none) */
  const CTL = 'button,a[href],summary,input,select,textarea,label,[role=button],[role=checkbox],[tabindex]:not([tabindex="-1"])';
  const within = (rects, x, y) => Array.prototype.some.call(rects, r => x >= r.left && x <= r.right && y >= r.top && y <= r.bottom);
  const textOf = l => { const r = document.createRange(); r.selectNodeContents(l); return r.getClientRects(); };
  try {
    document.addEventListener('click', e => {
      try {
        const l = e.target && e.target.closest ? e.target.closest('.slk') : null, x = e.clientX, y = e.clientY;
        if (!l || !e.detail || !within(l.getClientRects(), x, y) || within(textOf(l), x, y)) return;
        const was = l.style.pointerEvents;
        l.style.pointerEvents = 'none';
        const under = document.elementFromPoint(x, y);
        l.style.pointerEvents = was;
        const c = under && under.closest ? under.closest(CTL) : null;
        if (!c || c.contains(l) || (c.classList.contains('slk') && !within(textOf(c), x, y))) return;
        e.preventDefault(); e.stopImmediatePropagation();
        c.click();
      } catch (err) {}
    }, true);
  } catch (e) {}

  const CSS = `
.slk{color:var(--accent,#2F5FA8);border-radius:3px;cursor:pointer;text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:2px;
  padding:6px;margin:0 -6px;background-clip:content-box;-webkit-tap-highlight-color:rgba(47,95,168,.18)}
.slk:hover{background-color:var(--accent-bg,rgba(47,95,168,.1))}
.slk:focus-visible{outline:2px solid var(--accent,#2F5FA8);outline-offset:-5px}
.gbar .slk{color:inherit;font-size:inherit;letter-spacing:inherit;text-transform:inherit;opacity:1}
.gbar .slk:hover{background-color:rgba(0,0,0,.22)}
.gbar .slk:focus-visible{outline-color:#fff}
dialog.slv{--slv-r:190px;border:0;border-radius:14px;padding:0;width:min(1120px,calc(100vw - 16px));max-width:none;max-height:calc(100vh - 16px);max-height:calc(100dvh - 16px);
  background:var(--paper,#fff);color:var(--text,#1d2733);overflow:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;box-sizing:border-box}
dialog.slv:not([open]){display:none}
dialog.slv.slv-fb[open]{display:block;position:fixed;top:8px;left:8px;right:8px;margin:0 auto;z-index:2147483000;box-shadow:0 0 0 100vmax rgba(0,0,0,.45)}
dialog.slv::backdrop{background:rgba(0,0,0,.55)}
.slv-in{padding:10px 12px 12px}
.slv-head{display:flex;align-items:flex-start;gap:10px}
.slv-t{flex:1;min-width:0}
.slv-deck{margin:0;font-weight:700;font-size:16px;overflow-wrap:anywhere}
.slv-pos{margin:1px 0 0;font-size:14px;color:var(--text-dim,#5b6877)}
.slv-note{margin:6px 0 0;font-size:13.5px;color:var(--text-dim,#5b6877)}
.slv-x{font:inherit;font-size:15px;min-height:44px;min-width:60px;border:1px solid var(--line,#d5dbe3);border-radius:8px;background:var(--paper,#fff);color:var(--accent,#2F5FA8);padding:0 12px;cursor:pointer}
.slv-pic{margin:8px 0;background:var(--surface,#f2f4f7);border:1px solid var(--line,#d5dbe3);border-radius:8px;display:grid;grid-template-columns:minmax(0,1fr);justify-items:center;align-items:center;overflow:hidden}
.slv-pic>*{grid-area:1/1}
.slv-a{display:block;line-height:0;background:#fff;width:100%;width:min(100%,calc((100vh - var(--slv-r))*var(--slv-ar,1.3333)));width:min(100%,calc((100dvh - var(--slv-r))*var(--slv-ar,1.3333)));aspect-ratio:var(--slv-ar,1.3333)}
.slv-img{display:block;width:100%;height:auto}
@supports (aspect-ratio:1){.slv-img{height:100%;object-fit:contain}}
.slv-pic.wait .slv-img,.slv-pic.bad .slv-a{visibility:hidden}
.slv-wait{margin:0;padding:0 14px;font-size:15px;text-align:center;color:var(--text-dim,#5b6877);animation:slv-wait .01s linear .3s both}
@keyframes slv-wait{from{opacity:0}to{opacity:1}}
.slv-err{margin:0;padding:14px;font-size:15px;text-align:center}
.slv-bar{display:flex;flex-wrap:wrap;align-items:center;gap:8px}
.slv-bar .btn{min-height:44px;white-space:nowrap}
.slv-bar .btn[disabled]{opacity:.45;cursor:default}
.slv-sp{flex:1}
.slv-full{display:inline-flex;align-items:center;min-height:44px;padding:0 4px;color:var(--accent,#2F5FA8);font-size:15px}
@media (max-width:480px){.slv-in{padding:8px}.slv-bar .btn{flex:1}.slv-full{flex-basis:100%;justify-content:center}}
@media (max-height:480px) and (min-width:560px) and (min-aspect-ratio:5/3){
  dialog.slv{--slv-r:36px}
  .slv-in{display:grid;grid-template-columns:minmax(0,1fr) 232px;grid-template-rows:auto auto 1fr;gap:6px 10px;padding:8px}
  .slv-pic{grid-column:1;grid-row:1/4;margin:0;align-self:start}
  .slv-head{grid-column:2;grid-row:1}
  .slv-note{grid-column:2;grid-row:2;margin:0}
  .slv-bar{grid-column:2;grid-row:3;align-content:flex-end}
  .slv-bar .btn{flex:1 1 auto;padding-left:10px;padding-right:10px}
  .slv-sp{display:none}
  .slv-full{flex-basis:100%;justify-content:center}
}
@media print{.slk{color:inherit;text-decoration:none}dialog.slv{display:none}}
`;

  /* ------------------------------------------------------------------ wiring */
  let mo = null, timer = 0, main = null;
  const OBS = {childList: true, subtree: true, characterData: true};   // a view is read when it is drawn, shown or not
  function run(){
    timer = 0;
    const t0 = (typeof performance !== 'undefined' && performance.now) ? performance.now() : 0;
    if (mo) mo.disconnect();                    // its own changes are never observed
    try {
      let made = 0;
      for (let v = main.firstElementChild; v; v = v.nextElementSibling)
        if (v.tagName === 'SECTION') made += linkView(v);
      stats.runs++; stats.links += made;
    } catch (e) { console.error('Slide links: this pass was skipped; the citations stay as text.', e); }
    finally {
      if (mo) { try { mo.observe(main, OBS); } catch (e) {} }
      if (t0) stats.ms += performance.now() - t0;
    }
  }
  const soon = () => { if (!timer) timer = setTimeout(run, 80); };
  try {
    main = document.querySelector('main');
    const style = document.createElement('style'); style.textContent = CSS; document.head.appendChild(style);
    // first in line: a slide link does nothing but open its slide
    const act = e => {
      const b = e.target && e.target.closest ? e.target.closest('.slk') : null;
      if (!b || (e.type === 'keydown' && e.key !== 'Enter' && e.key !== ' ')) return;
      e.preventDefault(); e.stopPropagation();
      try { open(b.getAttribute('data-deck'), +b.getAttribute('data-n'), +b.getAttribute('data-to') || 0, b.hasAttribute('data-printed'), b); }
      catch (err) { console.error('The slide could not be opened.', err); }
    };
    document.addEventListener('click', act, true);
    document.addEventListener('keydown', act, true);            // Enter and Space, as on a button
    // a change inside a control is never a citation (dianarr_ui.js rewrites its Listen buttons every frame)
    mo = new MutationObserver(recs => {
      for (let i = 0; i < recs.length; i++) {
        const t = recs[i].target, el = t && (t.nodeType === 1 ? t : t.parentElement);
        if (el && !el.closest(SKIP) && (recs[i].type !== 'childList' || recs[i].addedNodes.length)) { soon(); return; }
      }
    });
    mo.observe(main, OBS);
    soon();
  } catch (e) { console.error('Slide links could not be added; the citations stay as text.', e); }
  return {parser: P, open, close, stats, relink: run};
})();
