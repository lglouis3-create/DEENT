/* ==========================================================================
   slide_ui.js: SLIDE LINKS AND THE SLIDE VIEWER (course-level; Louis,
   2026-11-13: "I added slides to exam 1, i was thinking we add them to where
   it says this slides and links them to the corresponding slide", and the
   Exam 2 decks after them).

   Wherever the page cites a slide of a deck, the citation becomes a button
   that opens that slide from the clean copy of the deck (deck/<deck>/<NN>.webp,
   render_deck.py; the page map and the tables are slide_data.js, written by
   slide_map.py).

   1. THE PARSER (no DOM; slide_check.js runs this same code over the source
      files). In one line of text it finds, in this order of priority:
      a. a citation that names its deck: a deck file name ("... (Skin-PCol-
         Students-2026.pdf) slides 24-26") or a name from SLIDES.names
         ("PCol 55", "DPAW p. 43", "Patel Scaly slide 12", "PP 8");
      b. a bare "slide N", "slides N-M", "p. N", or a number in a column
         headed Slide: it takes the deck named earlier in the same sentence,
         else the deck its place declares (below). A professor's name before
         it ("Dr. Patel's slide 45") must agree with that deck;
      c. anything else stays text: transcript lines (T 573-577, T@12345),
         recording times, dates, chart and syllabus pages, textbook pages, a
         number outside the deck, a "Sun" citation that nothing assigns to
         Dr. Smith's or Dr. Patel's deck.
   2. THE PLACE (declared, never read out of prose): after a question is
      answered, the deck its own source line names; in Reference, Tell apart
      and Guides, the section's deck from SLIDES.sections (a section that
      draws on several decks has none); an Atlas board, Dr. Sikazwe's deck; in
      Diseases, the deck(s) the nearest source line names.
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
    const D = S.decks;
    const rx = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const FILE = {}, NAME = {};
    Object.keys(D).forEach(id => (D[id].files || []).forEach(f => { FILE[f] = id; }));
    (S.names || []).forEach(r => { NAME[r[0]] = {deck: r[1], bare: !!r[2]}; });
    const alt = keys => keys.slice().sort((a, b) => b.length - a.length).map(k => rx(k).replace(/'/g, "['’]")).join('|');
    const SP = '[\\s\\u00a0]';
    const NUM = '\\d{1,3}(?![\\d/:%@]|\\.\\d)';
    const RNG = NUM + '(?:\\s?[\\u2013\\u2014\\u2011-]\\s?' + NUM + ')?';
    // a later number of a list is not one when a unit or a count follows it ("slide 12, 3 times daily")
    const UNIT = '(?:%|mg|mcg|g|mL|ml|kg|cm|mm|nm|hours?|hrs?|h|days?|weeks?|wks?|months?|years?|yrs?|minutes?|min|times|\\u00d7|x|FTU|fingertip|others?|of|to|or more|more|grams?|drops?|doses?|tubes?|patients?|questions?|points?|marks?|items?)';
    const LIST = RNG + '(?:(?:,\\s?|,?\\s(?:and|or|&)\\s)' + RNG + '(?!\\s?' + UNIT + '\\b))*';
    const WORD = '(?:[Ss]lides?|SLIDES?|pp?\\.|[Pp]ages?)';
    const RE_FILE = new RegExp('(' + alt(Object.keys(FILE)) + ')(?:\\)?[,:;]?' + SP + '+(?:(' + WORD + ')' + SP + '*)?(' + LIST + '))?', 'g');
    const RE_NAME = new RegExp('(' + alt(Object.keys(NAME)) + ')(?:' + SP + '+deck)?(?:' + SP + '+|' + SP + '*\\(' + SP + '*)(?:(' + WORD + ')' + SP + '*)?(' + LIST + ')', 'g');
    const RE_BARE = new RegExp('(' + WORD + ')' + SP + '*(' + LIST + ')', 'g');
    const RE_COL = new RegExp('^' + SP + '*(' + LIST + ')');
    const RE_ITEM = /(\d{1,3})(?:\s?[–—‑-]\s?(\d{1,3}))?/g;
    const AFTER_UNIT = new RegExp('^\\s?' + UNIT + '\\b');
    const PROF = /(?:Dr\.\s*)?\b(Smith|Patel|Sikazwe)\b(?:['’]s)?/g;
    const PROF_TAIL = /(?:Dr\.\s*)?\b(Smith|Patel|Sikazwe)(?:['’]s)?[\s ,(:·]*$/;
    const PROF_AFTER = /^[\s ]*\((?:Dr\.\s*)?(Smith|Patel|Sikazwe)\)/;
    const NOT_DECK = /(?:\b[Cc]hart|\b[Ss]yllabus|\bPDF|\b[Rr]eading|\b[Hh]andout|\b[Tt]extbook|\b[Bb]ook|\b[Aa]ssignment|\b(?:Foye|Katzung|Golan|DiPiro|Goodman|Endotext|Bikle)\b[^;]*|Chapt?\.\s?\d+,?|\bJ Med Chem[^;]*)[\s ,(]*$/;
    const PRINTED = /\bprinted[\s (]*$/;
    const SENTENCE = /[.!?]["'”’)\]]?\s+[A-Z(“]/;
    const isWordCh = c => !!c && /[A-Za-z0-9’'-]/.test(c);

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
    const lastProf = s => { let m, p = null; PROF.lastIndex = 0; while ((m = PROF.exec(s))) p = m[1]; return p; };
    /* which of the two decks called "Sun": the professor named in brackets right after, else the
       last professor named before it in the line, else the one sun deck the place declares */
    function sunDeck(text, s, e, ctx){
      const a = PROF_AFTER.exec(text.slice(e)), prof = a ? a[1] : lastProf(text.slice(0, s));
      if (prof === 'Smith') return 'sun';
      if (prof === 'Patel') return 'p8s';
      if (prof) return null;
      const c = ((ctx && ctx.decks) || []).filter(x => x === 'sun' || x === 'p8s');
      return c.length === 1 ? c[0] : null;
    }
    /* the list "12, 15-18 and 20" starting at offset `at` -> its items with their offsets */
    function items(list, at){
      const out = []; let m; RE_ITEM.lastIndex = 0;
      while ((m = RE_ITEM.exec(list))) out.push({s: at + m.index, e: at + m.index + m[0].length, a: +m[1], b: m[2] === undefined ? +m[1] : +m[2]});
      return out;
    }

    /* scan(text, ctx) -> {links, refused, decks}
       ctx: {decks: [deck id, ...] (what the place declares; one deck = a bare number is linked),
             column: true (the text is a cell of a column headed Slide or Page)}
       links:   [{s, e, deck, n, to, printed, form}]: text[s..e) becomes a button that opens cited
                number n of `deck` (and cites up to `to`)
       refused: [{s, e, raw, why}]: a citation left as text, with the reason
       decks:   the decks the line names itself, in order */
    function scan(text, ctx){
      const cand = [], links = [], refused = [], named = [];
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
        cand.push({pri: 1, s: m.index, e, from: m.index, ls, list: m[3], deck: nm.deck, form: m[2] ? 'deck name + ' + (/^p/i.test(m[2]) ? 'page' : 'slide') : 'deck name + number', name: m[1]});
      }
      RE_BARE.lastIndex = 0;
      while ((m = RE_BARE.exec(text))) {
        if (/[A-Za-z]/.test(text[m.index - 1] || '')) continue;           // "upslides 4", "app. 3"
        const e = m.index + m[0].length;
        cand.push({pri: 2, s: m.index, e, from: m.index, ls: e - m[2].length, list: m[2], deck: null, form: /^p/i.test(m[1]) ? 'bare page' : 'bare slide'});
      }
      if (ctx && ctx.column && (m = RE_COL.exec(text))) {
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
          const prof = (PROF_TAIL.exec(before) || [])[1] || null;
          if (PRINTED.test(before)) printed = true;
          if (!printed && NOT_DECK.test(before)) why = 'a page of the chart, syllabus, a reading or a textbook, not of a slide deck';
          else {
            // the deck named earlier in the same sentence, else the deck the place declares
            const last = explicit.length ? explicit[explicit.length - 1] : null;
            const carry = last && !SENTENCE.test(text.slice(last.e, c.s)) ? last.deck : null;
            const fits = d => !prof || (D[d] && D[d].prof === prof);
            if (carry && fits(carry)) deck = carry;
            else {
              const c2 = ((ctx && ctx.decks) || []).filter(fits);
              if (c2.length === 1) deck = c2[0];
              else why = !((ctx && ctx.decks) || []).length ? 'a bare number where no deck is declared'
                : c2.length ? 'a bare number where more than one deck is declared (' + c2.join(', ') + ')'
                : 'the professor named before it (' + prof + ') has no deck declared here';
            }
            if (printed && deck !== 'mc') { why = why || 'a printed slide number outside Dr. Sikazwe’s deck'; deck = null; }
          }
        }
        if (!deck) { refused.push({s: c.s, e: c.e, raw, why}); return; }
        if (c.pri <= 1) { explicit.push({e: c.e, deck}); if (named.indexOf(deck) < 0) named.push(deck); }
        items(c.list, c.ls).forEach((it, i) => {
          let n = 0;
          if (it.b >= it.a) { for (let k = it.a; k <= it.b && k - it.a < 200; k++) if (resolve(deck, k, printed)) { n = k; break; } }
          else if (resolve(deck, it.a, printed)) n = it.a;
          const out = it.a < 1 || Math.max(it.a, it.b) > (printed ? D[deck].pages : D[deck].cited);
          if (!n || out) { refused.push({s: it.s, e: it.e, raw: text.slice(it.s, it.e), deck, outside: out, why: out ? 'outside the deck (' + D[deck].label + ' has ' + (printed ? D[deck].pages : D[deck].cited) + ')' : 'no clean page for this number'}); return; }
          links.push({s: i === 0 ? c.from : it.s, e: it.e, deck, n, to: it.b > it.a ? it.b : 0, printed, form: c.form});
        });
      });
      return {links, refused, decks: named};
    }
    /* the deck a section id declares: an exact id, else the longest prefix; undefined = no rule */
    function sectionDeck(id){
      let best, len = -1;
      (S.sections || []).forEach(r => {
        const k = r[0];
        if (k === id) { best = r; len = 1e9; }
        else if (k.slice(-1) === '-' && id.indexOf(k) === 0 && k.length > len) { best = r; len = k.length; }
      });
      return best ? {deck: best[1], rule: best[0]} : undefined;
    }
    const file = (deck, page) => S.dir + '/' + deck + '/' + (page < 10 ? '0' : '') + page + '.' + S.ext;
    return {scan, resolve, citedOf, sectionDeck, file, decksNamed: t => scan(t, null).decks};
  })(SLIDES);

  const ok = typeof document !== 'undefined' && typeof MutationObserver !== 'undefined' && typeof document.createTreeWalker === 'function' &&
             typeof document.querySelector === 'function' && document.querySelector('main') && document.body && document.head;
  if (!ok) return {parser: P};

  /* ------------------------------------------------------------- linkifier */
  const D = SLIDES.decks;
  const SKIP = 'button,a,summary,label,input,select,textarea,option,svg,script,style,code,.slk,.dzcz,.opt,nav,[contenteditable]';
  const UNIT_SEL = 'p,li,td,th,dd,dt,figcaption,h2,h3,h4,h5,h6,small,div,section,article,span.ln,span.dlsrc,span.dzsrc,span.wtxt,span.atpg,span.stepwhy';
  const seen = new WeakSet();          // text nodes already read
  const stats = {runs: 0, links: 0, ms: 0};
  const txt = el => (el && el.textContent) || '';

  /* the decks a place declares for a bare number; [] = none */
  function sectionCtx(el, view){
    // an enclosing element with a rule (a guide section, an Atlas board), else the heading above
    for (let a = el; a && a !== view; a = a.parentElement) {
      if (a.id) { const r = P.sectionDeck(a.id); if (r) return r.deck ? [r.deck] : []; }
    }
    const heads = view.querySelectorAll('h2[id],h3[id]');
    let best = null;
    for (let i = 0; i < heads.length; i++) {
      if (heads[i].compareDocumentPosition(el) & 4 /* el follows the heading */ || heads[i].contains(el)) best = heads[i]; else break;
    }
    const r = best ? P.sectionDeck(best.id) : undefined;
    return r && r.deck ? [r.deck] : [];
  }
  function dzCtx(el, view){
    // Diseases: the deck(s) named by the source line(s) of the nearest block that has one
    for (let a = el; a && a !== view; a = a.parentElement) {
      const src = [];
      for (let c = a.firstElementChild; c; c = c.nextElementSibling) if (c.classList && c.classList.contains('dzsrc')) src.push(txt(c));
      if (a.classList && a.classList.contains('dzsrc')) src.push(txt(a));
      const decks = src.length ? P.decksNamed(src.join('; ')) : [];
      if (decks.length) return decks;
    }
    return [];
  }
  /* the places of a view: [root element, ctx(unit) -> deck list] */
  function places(view){
    const out = [];
    const id = view.id;
    if (id === 'v-ref' || id === 'v-tell' || id === 'v-guide' || id === 'v-atlas') out.push([view, u => sectionCtx(u, view)]);
    else if (id === 'v-drugs') out.push([view, () => []]);
    else if (id === 'v-dz') out.push([view, u => dzCtx(u, view)]);
    else if (id === 'v-diagrams') view.querySelectorAll('figcaption').forEach(f => out.push([f, () => []]));
    else {
      // after an answer: the explanation block and its source line; the exam review; the missed list
      view.querySelectorAll('.why').forEach(w => { const c = w.querySelector('.cite'); const d = c ? P.decksNamed(txt(c)) : []; out.push([w, () => d]); });
      view.querySelectorAll('.qbody').forEach(b => {
        if (b.querySelector('.why')) return;
        const c = b.querySelector(':scope > .cite'); if (!c) return;       // a question not yet answered has no source line
        const d = P.decksNamed(txt(c));
        b.querySelectorAll(':scope > .wrow, :scope > .teach, :scope > .cite, :scope > .prose').forEach(x => out.push([x, () => d]));
      });
      view.querySelectorAll('.missq .mmeta').forEach(x => out.push([x, () => []]));
    }
    return out;
  }
  const inSlideColumn = cell => {
    try {
      if (!cell || cell.tagName !== 'TD') return false;
      const table = cell.closest('table'), th = table && table.querySelectorAll('thead th')[cell.cellIndex];
      return !!th && /^\s*(?:slides?|pages?)\s*(?:;.*)?$/i.test(txt(th));
    } catch (e) { return false; }
  };
  function linkUnit(unit, ctxOf){
    // the unit's text with the place of every text node in it
    const nodes = [], w = document.createTreeWalker(unit, 4 /* text */);
    let text = '', n;
    while ((n = w.nextNode())) {
      const p = n.parentElement;
      if (!p || p.closest('svg,script,style')) continue;
      nodes.push({n, at: text.length, skip: !!p.closest(SKIP)});
      text += n.data;
    }
    nodes.forEach(x => seen.add(x.n));
    if (!/\d/.test(text)) return 0;
    const cell = unit.tagName === 'TD' ? unit : unit.closest('td');
    const column = !!cell && inSlideColumn(cell) && (cell === unit || txt(cell).trim() === text.trim());
    const res = P.scan(text, {decks: ctxOf(unit) || [], column});
    let made = 0;
    // from the end, so the offsets of earlier links stay true
    res.links.slice().sort((a, b) => b.s - a.s).forEach(l => {
      const x = nodes.filter(k => k.at <= l.s && l.e <= k.at + k.n.data.length)[0];
      if (!x || x.skip || !x.n.parentNode) return;               // split over two nodes, or inside a control: left as text
      const r = P.resolve(l.deck, l.n, l.printed); if (!r) return;
      const mid = x.n.splitText(l.s - x.at); mid.splitText(l.e - l.s);
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'slk';
      b.setAttribute('data-deck', l.deck); b.setAttribute('data-n', l.n);
      if (l.to) b.setAttribute('data-to', l.to);
      if (l.printed) b.setAttribute('data-printed', '1');
      b.setAttribute('aria-haspopup', 'dialog');
      b.setAttribute('aria-label', mid.data + ': open ' + D[r.deck].label + ', ' + D[r.deck].unit.toLowerCase() + ' ' + P.citedOf(r.deck, r.page));
      mid.parentNode.insertBefore(b, mid); b.appendChild(mid);
      seen.add(mid); if (b.previousSibling) seen.add(b.previousSibling); if (b.nextSibling) seen.add(b.nextSibling);
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
        if (seen.has(n)) continue;
        seen.add(n);
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
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
  const V = {dlg: null, deck: null, page: 0, from: null, opener: null, modal: false};
  function build(){
    const d = document.createElement('dialog');
    d.className = 'slv'; d.setAttribute('aria-labelledby', 'slv-deck');
    d.innerHTML = `<div class="slv-in">
      <div class="slv-head"><div class="slv-t"><p id="slv-deck" class="slv-deck"></p><p class="slv-pos" aria-live="polite"></p></div>
        <button type="button" class="slv-x" data-slv="close">Close</button></div>
      <p class="slv-note" hidden></p>
      <div class="slv-pic"><a class="slv-a" target="_blank" rel="noopener"><img class="slv-img" alt="" decoding="async" loading="lazy"></a>
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
      else if (e.key === 'Escape' && !V.modal) { e.preventDefault(); close(); }
    });
    d.addEventListener('close', () => {
      const o = V.opener; V.opener = null;
      d.querySelector('.slv-img').removeAttribute('src');
      if (o && o.isConnected && typeof o.focus === 'function') { try { o.focus({preventScroll: true}); } catch (e) { o.focus(); } }
    });
    const img = d.querySelector('.slv-img');
    img.addEventListener('error', () => { if (img.getAttribute('src')) { d.querySelector('.slv-err').hidden = false; img.classList.add('bad'); } });
    img.addEventListener('load', () => { d.querySelector('.slv-err').hidden = true; img.classList.remove('bad'); });
    return d;
  }
  function draw(again){
    const d = V.dlg, k = D[V.deck], q = sel => d.querySelector(sel);
    const cited = P.citedOf(V.deck, V.page), unit = k.unit, title = (k.titles || [])[V.page - 1] || '';
    const src = base() + P.file(V.deck, V.page) + (again ? '?r=' + Date.now() : '');
    q('.slv-deck').textContent = k.label;
    q('.slv-pos').textContent = unit + ' ' + cited + ' of ' + k.cited + (unit === 'Page' && cited !== V.page ? ' · slide number printed on it: ' + V.page : '');
    const note = q('.slv-note'), f = V.from;
    let msg = '';
    if (f && f.deck !== V.deck) msg = 'Cited as ' + D[f.deck].label + ', ' + D[f.deck].unit.toLowerCase() + ' ' + f.n + '. That slide is ' + unit.toLowerCase() + ' ' + P.citedOf(V.deck, f.page) + ' of this deck.';
    else if (f && f.to) msg = 'Cited: ' + unit.toLowerCase() + 's ' + f.n + '–' + f.to + '.';
    note.textContent = msg; note.hidden = !msg;
    const img = q('.slv-img');
    q('.slv-err').hidden = true; img.classList.remove('bad');
    img.style.aspectRatio = String(k.ar || 1.3333);
    img.alt = k.label + ', ' + unit.toLowerCase() + ' ' + cited + (title ? ': ' + title : '');
    img.src = src;
    q('.slv-a').href = src; q('.slv-full').href = src;
    q('[data-slv=prev]').disabled = V.page <= 1;
    q('[data-slv=next]').disabled = V.page >= k.pages;
  }
  function go(step){
    const k = D[V.deck], p = V.page + step;
    if (!k || p < 1 || p > k.pages) return;
    if (V.from && V.from.deck !== V.deck) V.from = null;      // the "cited as" line belongs to the slide that was opened
    V.page = p; draw();
  }
  function open(deck, n, to, printed, opener){
    const r = P.resolve(deck, n, printed); if (!r) return false;
    if (!V.dlg) V.dlg = build();
    V.deck = r.deck; V.page = r.page; V.from = {deck, n, to: to || 0, page: r.page};
    V.opener = opener || document.activeElement;
    draw();
    const d = V.dlg;
    if (!d.open) {
      V.modal = typeof d.showModal === 'function';
      if (V.modal) d.showModal(); else d.setAttribute('open', '');
    }
    const x = d.querySelector('.slv-x'); if (x) { try { x.focus({preventScroll: true}); } catch (e) {} }
    return true;
  }
  function close(){
    const d = V.dlg; if (!d) return;
    if (d.open && typeof d.close === 'function') d.close();
    else { d.removeAttribute('open'); d.dispatchEvent(new Event('close')); }
  }

  const CSS = `
.slk{font:inherit;line-height:inherit;letter-spacing:inherit;color:var(--accent,#2F5FA8);background:none;border:0;border-radius:4px;margin:0;padding:1px 2px;
  min-height:0;display:inline;text-align:inherit;white-space:normal;cursor:pointer;text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:2px;
  -webkit-appearance:none;appearance:none;-webkit-tap-highlight-color:rgba(47,95,168,.18)}
.slk:hover{background:var(--accent-bg,rgba(47,95,168,.1))}
.slk:focus-visible{outline:2px solid var(--accent,#2F5FA8);outline-offset:1px}
h3 .slk,h4 .slk,h5 .slk{font-weight:inherit}
dialog.slv{border:0;border-radius:14px;padding:0;width:min(1120px,calc(100vw - 16px));max-width:none;max-height:calc(100vh - 16px);max-height:calc(100dvh - 16px);
  background:var(--paper,#fff);color:var(--text,#1d2733);overflow:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;box-sizing:border-box}
dialog.slv:not([open]){display:none}
dialog.slv[open]:not(:modal){position:fixed;inset:8px;margin:auto;z-index:2147483000;box-shadow:0 0 0 100vmax rgba(0,0,0,.45)}
dialog.slv::backdrop{background:rgba(0,0,0,.55)}
.slv-in{padding:10px 12px 12px}
.slv-head{display:flex;align-items:flex-start;gap:10px}
.slv-t{flex:1;min-width:0}
.slv-deck{margin:0;font-weight:700;font-size:16px;overflow-wrap:anywhere}
.slv-pos{margin:1px 0 0;font-size:14px;color:var(--text-dim,#5b6877)}
.slv-note{margin:6px 0 0;font-size:13.5px;color:var(--text-dim,#5b6877)}
.slv-x{font:inherit;font-size:15px;min-height:44px;min-width:60px;border:1px solid var(--line,#d5dbe3);border-radius:8px;background:var(--paper,#fff);color:var(--accent,#2F5FA8);padding:0 12px;cursor:pointer}
.slv-pic{margin:8px 0;background:var(--surface,#f2f4f7);border:1px solid var(--line,#d5dbe3);border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden}
.slv-a{display:block;width:100%;line-height:0;text-align:center}
.slv-img{display:block;margin:0 auto;width:auto;height:auto;max-width:100%;max-height:calc(100vh - 190px);max-height:calc(100dvh - 190px);background:#fff}
.slv-img.bad{visibility:hidden;max-height:60px}
.slv-err{margin:0;padding:14px;font-size:15px;text-align:center}
.slv-bar{display:flex;flex-wrap:wrap;align-items:center;gap:8px}
.slv-bar .btn{min-height:44px}
.slv-bar .btn[disabled]{opacity:.45;cursor:default}
.slv-sp{flex:1}
.slv-full{display:inline-flex;align-items:center;min-height:44px;padding:0 4px;color:var(--accent,#2F5FA8);font-size:15px}
@media (max-width:480px){.slv-in{padding:8px}.slv-bar .btn{flex:1}.slv-full{flex-basis:100%;justify-content:center}}
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
    // one listener, first in line: a slide button does nothing but open its slide
    document.addEventListener('click', e => {
      const b = e.target && e.target.closest ? e.target.closest('button.slk') : null;
      if (!b) return;
      e.preventDefault(); e.stopPropagation();
      try { open(b.getAttribute('data-deck'), +b.getAttribute('data-n'), +b.getAttribute('data-to') || 0, b.hasAttribute('data-printed'), b); }
      catch (err) { console.error('The slide could not be opened.', err); }
    }, true);
    mo = new MutationObserver(soon);
    mo.observe(main, OBS);
    soon();
  } catch (e) { console.error('Slide links could not be added; the citations stay as text.', e); }
  return {parser: P, open, close, stats, relink: run};
})();
