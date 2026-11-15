/* ==========================================================================
   slide_ui.js: SLIDE LINKS AND THE SLIDE VIEWER (course-level; Louis,
   2026-11-13: "I added slides to exam 1, i was thinking we add them to where
   it says this slides and links them to the corresponding slide", and the
   Exam 2 decks after them).

   Wherever the page cites a slide of a deck, the citation becomes a control
   (an inline span with the role of a button, so the line wraps as it did)
   that opens that slide from the clean copy of the deck (deck/<deck>/<NN>.webp,
   render_deck.py; the page map and the tables are slide_data.js, written by
   slide_map.py from the decks and slide_tables.json). The control's name is
   its own text; what it opens ("Open Dr. Smith, Skin Pharmacology, slide 24")
   is its title and its description, so a heading that holds citations is
   read as it is written.

   1. THE PARSER (no DOM; slide_check.js runs this same code over the source
      files). In one line of text it finds, in this order of priority:
      a. a citation that names its deck: a deck file name ("... (Skin-PCol-
         Students-2026.pdf) slides 24-26") or a name from SLIDES.names
         ("PCol 55", "DPAW p. 43", "Patel Scaly slide 12", "PP 8"). "Sun" is
         the name of two decks: it goes to the deck of the professor named
         with it, else to the sun deck its place declares, else nowhere. A
         name with a number alone is not a citation when a count word follows
         the number ("SE 2 applications") or a letter does ("PP 2B");
      b. a bare "slide N", "slides N-M", "p. N" (Dr. Sikazwe's deck only: it is
         the one cited by page), or a number in a column headed Slide: it
         takes the deck its place declares (2), or the deck named earlier in
         the same sentence when the place declares none, or when the number
         is past the end of the place's deck and that deck has it ("PCol slide
         44: ...; slide 45: ..." in a place of the Sun deck). A professor's name
         before it ("Dr. Patel's slide 45") or in brackets right after it
         ("slide 12 (Dr. Patel)") must be that deck's professor. "printed
         slides 24-33" (Dr. Sikazwe's deck) are the numbers printed on the
         slides, not the pages of the file;
      c. anything else stays text: transcript lines (T 573-577, T@12345),
         recording times, dates, chart, syllabus and textbook pages (also "the
         drug chart ... on its p.5": the chart is named earlier in the
         sentence and no deck after it, with a number or without: "the chart
         agrees with DPAW; see p. 5" is his page), a number outside the deck.
         A later item of a list is left whole when a unit follows it ("slides
         3, 9-11 days": 3 alone is linked, never "9").
      A number ends a citation before a colon ("Slide 12: ...", "Slides
      24-26: ...") unless a digit follows the colon (a time 12:30, a ratio).
      The text of a line is joined from its text nodes with nothing between
      them; where the text of another element starts, a word starts ("...of
      the skin" + "PP 4-6" in a guide's objective bar).
   2. THE PLACE (declared, never read out of prose): after a question is
      answered, the deck its own source line names first (the deck the engine
      files the question under); in Reference, Tell apart and Guides, the
      section's deck from SLIDES.sections (a section that draws on several
      decks has none), or the one deck a table column's heading names; a
      figure caption, the one deck it names; an Atlas board, and the notes
      under the structures an explanation sets side by side (they are the
      Atlas notes), Dr. Sikazwe's deck; a Drug list line, the deck its source
      chip names; in Diseases, the deck(s) the nearest source line names,
      within a professor's block or group that professor's, for the practice
      patients the card's deck, and for a drug panel's "Who should not get
      it" line that starts with its conditions the one deck the panel's rows
      for those conditions name. In Weak spots a missed question's own source
      line gives the place, as after an answer; a card of "What to review
      next" takes the place of the question whose stem it shows.
   3. WHERE: only in what the page shows after an answer (the explanation and
      its source line, the line under each pair of a matching question, the
      exam review, the missed list, the review plan) and in the reading tabs
      (Reference, Tell apart, Guides, Atlas, Drug list, Diseases, figure
      captions). Never inside a button, link, summary, label or form field,
      never in an answer option, never in a drawn figure, never in the
      practice-exam clock. A citation is linked only inside one text node
      (from its slide word on, when its deck name is under a jump highlight).
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
    // a colon ends a number only when a digit follows it (a clock time 12:30, a ratio 1:1); "Slide 12: text" is a citation
    const NUM = '\\d{1,3}(?![\\d/%@]|:\\d|\\.\\d)';
    const RNG = NUM + '(?:\\s?' + DASH + '\\s?' + NUM + ')?';
    // a later number of a list is not one when a unit or a count follows it ("slide 12, 3 times daily")
    const UNIT = '(?:%|mg|mcg|g|mL|ml|kg|cm|mm|nm|hours?|hrs?|h|days?|weeks?|wks?|months?|years?|yrs?|minutes?|min|times|\\xd7|x|FTU|fingertip|others?|of|to|or more|more|grams?|drops?|doses?|tubes?|patients?|questions?|points?|marks?|items?|applications?|tablets?|capsules?|units?|puffs?|sprays?)';
    // (nor is the first number of a range whose last number has one: "slides 3, 9–11 days" stops after 3, it never links "9" alone)
    const LIST = RNG + '(?:(?:,\\s?|,?\\s(?:and|or|&)\\s)' + RNG + '(?!\\s?' + UNIT + '\\b|\\s?' + DASH + '\\s?\\d))*';
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
    // the same sources named anywhere earlier in the sentence ("The drug chart lists ... on its p.5")
    const NOT_DECK_WORD = /\b(?:[Cc]harts?|[Ss]yllabus|[Rr]eadings?|[Hh]andouts?|[Tt]extbooks?|[Bb]ooks?|[Aa]ssignments?|Foye|Katzung|Golan|DiPiro|Goodman|Endotext|Bikle|J Med Chem)\b/g;
    const RE_DECKNAME = new RegExp('(?:^|[^A-Za-z0-9’\'-])(?:' + alt(Object.keys(NAME).filter(k => NAME[k].bare)) + ')(?![A-Za-z0-9’\'-])');   // "DPAW", "PCol" without a number
    const PRINTED = /\bprinted[\s\xa0(]*$/;
    const SENT = /[.!?]["'”’)\]]?\s+(?=[A-Z(“])/g;
    const ABBR = /(?:\b(?:Dr|vs|Chapt?|No|Fig|al)|\be\.g|\bi\.e)$/;      // a period after one of these does not end a sentence
    const isWordCh = c => !!c && /[A-Za-z0-9’'-]/.test(c);
    const SUN = {Smith: 'sun', Patel: 'p8s'};
    const decksOfProf = p => IDS.filter(id => D[id].prof === p);

    /* a cited number of a deck -> what is shown: {deck, page} (the deck may be another one: Dr.
       Smith's Sun slides 1-4 are slides of her Skin Pharmacology deck); null = nothing to show */
    const OMIT = {}; (S.omit || []).forEach(o => { OMIT[o[0] + ' ' + o[1]] = 1; });   // pages the viewer does not show (course administration)
    function resolve(deck, n, printed){
      const r = resolveAny(deck, n, printed);
      return r && !OMIT[r.deck + ' ' + r.page] ? r : null;
    }
    function resolveAny(deck, n, printed){
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
            breaks  [offset, ...]: where a new element's text starts in a text joined from several
                    elements ("…of the skin" + "PP 4–6" in a guide bar); such a start is a word start
       links:   [{s, e, alt, deck, n, to, printed, form}]: text[s..e) becomes a button that opens cited
                number n of `deck` (the citation runs to `to`); alt: where its slide word or its
                number starts, after a deck name
       refused: [{s, e, raw, why}]: a citation left as text, with the reason
       decks:   the decks the line names itself, in order */
    function scan(text, ctx){
      ctx = ctx || {};
      const cand = [], links = [], refused = [], named = [], ctxDecks = ctx.decks || [], files = [];
      const brk = ctx.breaks || [], cut = i => brk.indexOf(i) >= 0;      // a new element's text starts here: a word start
      let m;
      RE_FILE.lastIndex = 0;
      while ((m = RE_FILE.exec(text))) {
        const deck = FILE[m[1]];
        if (named.indexOf(deck) < 0) named.push(deck);
        files.push(m.index);
        if (m[3] !== undefined) {
          const ls = m.index + m[0].length - m[3].length, ws = m[2] ? text.lastIndexOf(m[2], ls) : ls;
          cand.push({pri: 0, s: m.index, e: m.index + m[0].length, from: ws, alt: ws, ls, list: m[3], deck, form: 'file name'});
        }
      }
      RE_NAME.lastIndex = 0;
      while ((m = RE_NAME.exec(text))) {
        if (isWordCh(text[m.index - 1]) && !cut(m.index)) continue;
        const nm = NAME[m[1].replace(/’/g, "'")]; if (!nm) continue;
        const e = m.index + m[0].length, ls = e - m[3].length;
        if (!m[2] && !nm.bare) continue;                                  // "Wound 12" is not a citation; "Wound Care slide 12" is
        if (!m[2] && AFTER_UNIT.test(text.slice(items(m[3], ls)[0].e))) continue;   // "SD 4 weeks"
        if (!m[2] && /[A-Za-z]/.test(text[e] || '') && !cut(e)) continue;   // "PP 2B" is a name of something else
        cand.push({pri: 1, s: m.index, e, from: m.index, alt: m[2] ? text.lastIndexOf(m[2], ls) : ls, ls, list: m[3], deck: nm.deck, form: m[2] ? 'deck name + ' + (/^p/i.test(m[2]) ? 'page' : 'slide') : 'deck name + number'});
      }
      RE_BARE.lastIndex = 0;
      while ((m = RE_BARE.exec(text))) {
        if (/[A-Za-z]/.test(text[m.index - 1] || '') && !cut(m.index)) continue;   // "app. 3"
        const e = m.index + m[0].length, page = /^p/i.test(m[1]);
        cand.push({pri: 2, s: m.index, e, from: m.index, alt: m.index, ls: e - m[2].length, list: m[2], deck: null, page, form: page ? 'bare page' : 'bare slide'});
      }
      if (ctx.column && (m = RE_COL.exec(text))) {
        const ls = m[0].length - m[1].length;
        cand.push({pri: 3, s: ls, e: m[0].length, from: ls, alt: ls, ls, list: m[1], deck: null, form: 'Slide column'});
      }
      // a deck-naming citation wins over a bare one it overlaps ("PCol slide 12" holds a bare "slide 12")
      cand.sort((a, b) => a.pri - b.pri || a.s - b.s);
      const kept = [];
      cand.forEach(c => { if (!kept.some(k => c.s < k.e && k.s < c.e)) kept.push(c); });
      kept.sort((a, b) => a.s - b.s);
      const explicit = [];
      /* "The drug chart lists a different class on its p.5": a chart, the syllabus, a reading or a
         textbook is named earlier in the sentence and no deck is named after it, so the page is its page */
      const otherSource = at => {
        let from = 0, last = -1, x;
        SENT.lastIndex = 0;
        while ((x = SENT.exec(text)) && x.index + x[0].length <= at) if (!ABBR.test(text.slice(0, x.index))) from = x.index + x[0].length;
        const seg = text.slice(from, at);
        NOT_DECK_WORD.lastIndex = 0;
        while ((x = NOT_DECK_WORD.exec(seg))) last = from + x.index;
        // a deck named after it, with a number or without ("the chart agrees with DPAW; see p. 5"), takes the page back
        return last >= 0 && !files.some(i => i > last && i < at) && !kept.some(k => k.pri <= 1 && k.s > last && k.s < at) && !RE_DECKNAME.test(text.slice(last, at));
      };
      kept.forEach(c => {
        const raw = text.slice(c.s, c.e), before = text.slice(Math.max(0, c.s - 60), c.s);
        let deck = c.deck, printed = false, why = '';
        if (deck === 'sun?') {
          deck = sunDeck(text, c.s, c.e, ctx);
          if (!deck) why = 'two decks are called Sun (Dr. Smith, Dr. Patel) and nothing here says which';
        } else if (deck === null) {
          printed = PRINTED.test(before);
          // a professor named right before it, or "his" / "her" after one professor was named, or a
          // professor in brackets right after it ("slide 12 (Dr. Patel)")
          let prof = (PROF_TAIL.exec(before) || [])[1] || null;
          if (!prof && PRONOUN_TAIL.test(before)) { const ps = profsIn(text.slice(0, c.s)); prof = ps.length ? ps[ps.length - 1] : null; }
          if (!prof) prof = (PROF_AFTER.exec(text.slice(c.e)) || [])[1] || null;
          const adjacent = !!prof;
          if (c.page && !printed && (ctx.chart || NOT_DECK.test(before) || (!adjacent && otherSource(c.s)))) why = 'a page of the chart, the syllabus, a reading or a textbook, not of a slide deck';
          else {
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
            // "PCol slide 44: …; slide 45: …" in a place of the Sun deck (26 slides): a number past the end of the
            // place's deck is a number of the deck named earlier in the same sentence, when that deck has every one
            if (deck && deck === place && carry && carry !== deck && !printed && !c.page) {
              const its = items(c.list, c.ls), has = d => its.every(it => it.a >= 1 && Math.max(it.a, it.b) <= D[d].cited && resolve(d, it.a));
              if (its.length && its.every(it => Math.min(it.a, it.b) > D[deck].cited) && has(carry)) deck = carry;
            }
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
          links.push({s: i === 0 ? c.from : it.s, e: it.e, alt: i === 0 ? c.alt : it.s, deck, n, to: it.b > it.a ? it.b : 0, printed, form: c.form});
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
  const SKIP = 'button,a,summary,label,input,select,textarea,option,svg,script,style,code,.slk,.dzcz,.opt,.clock,nav,[contenteditable]';
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
    // a professor's block: .dzprof, or on a card with more than one professor the group .dzgrp.sm|sk|pa (dz_ui.js stepBody)
    const blk = el.closest('.dzprof,.dzgrp'), prof = blk ? DZPROF[['sm', 'sk', 'pa'].filter(k => blk.classList.contains(k))[0]] || null : null;
    // a drug panel's "Who should not get it" list has no source line. A line that starts with its conditions
    // ("Psoriasis / Seborrheic dermatitis: …", written by dz_build.py from the rows of the part that gave the line)
    // takes the deck the panel's own rows for exactly those conditions name, when they name one deck
    const av = el.closest('.dzavoid');
    if (av) {
      const li = el.closest('li') || el, m = /^([^:]{3,200}): /.exec(txt(li)), want = m ? m[1].split(' / ').map(x => x.trim()) : [];
      const rows = av.parentElement ? av.parentElement.querySelectorAll('.dzprof.pa .use') : [], src = [];
      let all = want.length > 0;
      want.forEach(name => {
        let hit = false;
        for (let i = 0; i < rows.length; i++) {
          const go = rows[i].querySelector('.dzgo');
          if (go && txt(go).replace(/\s*\(.*?\)/g, '').trim() === name) { hit = true; rows[i].querySelectorAll('.dzsrc').forEach(x => src.push(txt(x))); }
        }
        if (!hit) all = false;
      });
      const decks = all && src.length ? P.decksNamed(src.join('; ')) : [];
      return {decks: decks.length === 1 ? decks : [], prof: null};
    }
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
      view.querySelectorAll('.why').forEach(w => {
        const c = w.querySelector('.cite'); const x = P.questionCtx(c ? txt(c) : ''); out.push([w, () => x]);
        // a matching question: the line under each pair stands in the table before the explanation block
        if (w.parentElement) w.parentElement.querySelectorAll(':scope > table.matchtab .stepwhy').forEach(e => out.push([e, () => x]));
      });
      view.querySelectorAll('.qbody').forEach(b => {
        if (b.querySelector('.why')) return;
        const c = b.querySelector(':scope > .cite'); if (!c) return;       // a question not yet answered has no source line
        const x = P.questionCtx(txt(c));
        b.querySelectorAll(':scope > .wrow, :scope > .teach, :scope > .cite, :scope > .prose').forEach(e => out.push([e, () => x]));
      });
      // the missed list: the last line of an entry is the question's own source line, so it gives the place as it
      // does after an answer; the Answer and You picked lines declare nothing
      view.querySelectorAll('.missq').forEach(mq => {
        const ms = mq.querySelectorAll(':scope > .mmeta'), cite = ms[ms.length - 1];
        ms.forEach(e => { const x = e === cite ? P.questionCtx(txt(e)) : {decks: []}; out.push([e, () => x]); });
      });
      // Weak spots, "What to review next": a card shows one question (its stem, why the option picked is not the
      // answer, the idea). The place is that question's, when the stem shown is the stem of questions of one deck
      view.querySelectorAll('.plan .pconcept').forEach(pc => {
        const pq = pc.querySelector(':scope > .pq'), bank = typeof QUESTIONS !== 'undefined' && Array.isArray(QUESTIONS) ? QUESTIONS : [];
        if (!pq || !bank.length) return;
        const t = txt(pq), isStem = q => !!q && typeof q.stem === 'string';
        let qs = bank.filter(q => isStem(q) && q.stem === t);
        if (!qs.length && t.slice(-1) === '…') qs = bank.filter(q => isStem(q) && q.stem.length > 160 && q.stem.slice(0, 160) === t.slice(0, -1));
        const xs = qs.map(q => P.questionCtx(q.cite || ''));
        if (!xs.length || !xs[0].decks.length || xs.some(x => x.decks[0] !== xs[0].decks[0])) return;
        pc.querySelectorAll(':scope > .pw > .meta, :scope > .pi').forEach(e => out.push([e, () => xs[0]]));
      });
    }
    return out;
  }
  const headOf = cell => {
    try { const t = cell.closest('table'); return t ? txt(t.querySelectorAll('thead th')[cell.cellIndex]) : ''; } catch (e) { return ''; }
  };
  /* two text nodes one after the other that read as one run of text: side by side in one element, or parted
     only by the edge of a slide link this file made or of a jump highlight (neither changes how the text reads) */
  const SOFT = el => !!el && el.nodeType === 1 && (el.classList.contains('slk') || (el.tagName === 'MARK' && el.classList.contains('jmark')));
  function sameRun(a, b){
    let x = a, y = b;
    while (!x.nextSibling && SOFT(x.parentNode)) x = x.parentNode;
    while (!y.previousSibling && SOFT(y.parentNode)) y = y.parentNode;
    return x.nextSibling === y;
  }
  function linkUnit(unit, ctxOf){
    // the unit's text, with the place of every text node in it
    const nodes = [], breaks = [], w = document.createTreeWalker(unit, 4 /* text */);
    let text = '', n, prev = null;
    while ((n = w.nextNode())) {
      const p = n.parentElement;
      if (!p || p.closest('svg,script,style')) continue;
      // the text is joined with nothing in between, so that every offset is an offset in a text node; where the
      // next text node belongs to another element ("…of the skin" | "PP 4–6" in a guide bar) its start is
      // recorded: there a deck name starts a word although a letter stands before it in the joined text
      if (prev && !sameRun(prev, n)) breaks.push(text.length);
      nodes.push({n, at: text.length, skip: !!p.closest(SKIP)});
      text += n.data; prev = n;
    }
    nodes.forEach(x => mark(x.n));
    if (!/\d/.test(text)) return 0;
    const ctx = Object.assign({decks: []}, ctxOf(unit) || {});
    if (breaks.length) ctx.breaks = breaks;
    // a structure strip in an explanation ("The structures side by side"): its captions are the Atlas notes, which
    // cite Dr. Sikazwe's deck whatever deck the question is filed under (the row "at-", as on the Atlas tab)
    const strip = !!unit.closest('.cmpcell');
    if (strip) { const at = P.sectionDeck('at-') || {decks: []}; ctx.decks = at.decks; ctx.sun = at.sun || null; ctx.prof = null; }
    // a figure caption: the one deck it names; a table cell: the one deck its column heading names
    const cap = strip ? null : unit.closest('figcaption');
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
      let s = l.s, x = nodes.filter(k => k.at <= s && l.e <= k.at + k.n.data.length)[0];
      if (!x && l.alt > l.s) {
        // the deck name is under a highlight (jump_ui.js wraps the words it found in <mark class="jmark">, so
        // "Warts (slide 4" is two text nodes): the citation is linked from its slide word or its number on, when
        // that part is in one text node and nothing but highlights splits the citation
        const over = nodes.filter(k => k.at < l.e && l.s < k.at + k.n.data.length), last = over[over.length - 1];
        const hl = k => !!k.n.parentElement.closest('mark.jmark');
        if (last && last.at <= l.alt && over.every((k, i) => !i || hl(k) || hl(over[i - 1]))) { s = l.alt; x = last; }
      }
      if (!x || x.skip || !x.n.parentNode) return;               // split over two nodes, or inside a control: left as text
      const r = P.resolve(l.deck, l.n, l.printed); if (!r) return;
      const mid = x.n.splitText(s - x.at); mid.splitText(l.e - s);
      // a span with the role of a button: it wraps inside a line as the text did (a <button> is one
      // unbreakable box, which re-wrapped lines and changed the height of the page after it was drawn)
      const b = document.createElement('span');
      b.className = 'slk'; b.setAttribute('role', 'button'); b.setAttribute('tabindex', '0');
      b.setAttribute('data-deck', l.deck); b.setAttribute('data-n', l.n);
      if (l.to) b.setAttribute('data-to', l.to);
      if (l.printed) b.setAttribute('data-printed', '1');
      b.setAttribute('aria-haspopup', 'dialog');
      // its name is its own text (a heading that holds links is then read as it is written); where it leads is the description
      const dest = 'Open ' + D[r.deck].label + ', ' + D[r.deck].unit.toLowerCase() + ' ' + P.citedOf(r.deck, r.page);
      b.setAttribute('title', dest); b.setAttribute('aria-description', dest);
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
  const V = {dlg: null, deck: null, page: 0, cdeck: null, n: 0, from: null, opener: null, modal: false, lock: null, refocus: false,
             mode: '', win: null, rect: null, drag: null, pinch: null, away: false, whole: false};

  /* ---- the window (Louis, 2026-11-14: "move around the opening slide or make it small or bigger to be able
     to see the question"). In a browser window at least 760 px wide and 480 px high the viewer is a window
     over the page, not a modal box: the page behind is read, scrolled and pressed as before. V.mode:
       'win'    the window: moved by its title bar, resized by its corner or by two fingers on the slide,
                or set to the right half or the bottom half of the browser window (V.win.dock);
       'full'   the covering box with the dimmed page behind it (the Full button), a modal dialog;
       'phone'  the same covering box without the window buttons: narrower or shorter windows, and over
                an enlarged figure or another modal dialog (a window would lie under those).
     V.win is {dock, x, y, w, h, has}: the place and size asked for, kept in localStorage under
     <NS>:slidewin:v1 for this device (not per profile); V.rect is the rectangle on screen */
  const WIN = {wide: 760, tall: 480, minW: 280, minH: 320, step: 24, bar: 56};
  const DOCKS = ['right', 'bottom', 'full'];
  const winKey = () => { let ns; try { ns = NS; } catch (e) { try { ns = COURSE.ns; } catch (e2) { ns = 'drill'; } } return ns + ':slidewin:v1'; };
  const fin = v => typeof v === 'number' && isFinite(v);
  function loadWin(){
    const s = {dock: '', x: 0, y: 0, w: 0, h: 0, has: false};
    try {
      const o = JSON.parse(localStorage.getItem(winKey()) || 'null');
      if (o && typeof o === 'object') {
        if (DOCKS.indexOf(o.dock) >= 0) s.dock = o.dock;
        if (fin(o.x) && fin(o.y) && fin(o.w) && fin(o.h) && o.w > 0 && o.h > 0) { s.x = o.x; s.y = o.y; s.w = o.w; s.h = o.h; s.has = true; }
      }
    } catch (e) {}
    return s;
  }
  function saveWin(){
    const s = V.win; if (!s) return;
    try { localStorage.setItem(winKey(), JSON.stringify(s.has ? {dock: s.dock, x: Math.round(s.x), y: Math.round(s.y), w: Math.round(s.w), h: Math.round(s.h)} : {dock: s.dock})); } catch (e) {}
  }
  const vp = () => ({w: document.documentElement.clientWidth || window.innerWidth, h: window.innerHeight});
  const roomy = () => window.innerWidth >= WIN.wide && window.innerHeight >= WIN.tall;
  /* an enlarged figure, or a modal dialog of the page (a drug panel of the Diseases tab), is open */
  function blocked(){
    try { if (document.querySelector('.fig.big')) return true; } catch (e) {}
    try { return Array.prototype.some.call(document.querySelectorAll('dialog[open]'), x => x !== V.dlg && x.matches(':modal')); } catch (e) { return false; }
  }
  const modeWanted = () => !roomy() || blocked() ? 'phone' : V.win && V.win.dock === 'full' ? 'full' : 'win';
  /* the lower edge of the page's heading and tab strip, where they are in sight at the top of the window */
  function topEdge(){
    let t = 0;
    try {
      ['header', '#nav'].forEach(sel => {
        const el = document.querySelector(sel); if (!el) return;
        const b = el.getBoundingClientRect();
        if (b.height > 0 && b.bottom > t && b.top < window.innerHeight / 3) t = b.bottom;
      });
    } catch (e) {}
    return Math.max(0, Math.min(Math.round(t), Math.round(window.innerHeight / 3)));
  }
  /* a rectangle inside the window: not smaller than the least size, not larger than the window, not past its
     left, right or upper edge, and with its title bar (and so Close) above the lower edge. whole: all of it
     above the lower edge (when the viewer opens and after the browser window was resized or turned, until
     the window is moved by hand: a place kept from a larger browser window does not leave the slide out of sight) */
  function clampWin(r, whole){
    const v = vp(), w = Math.min(Math.max(r.w, WIN.minW), v.w), h = Math.min(Math.max(r.h, WIN.minH), v.h);
    // the title bar as high as it is now (in a narrow window its buttons stand under the heading)
    let bar = WIN.bar;
    try { const hd = V.dlg && V.mode === 'win' && V.dlg.open ? V.dlg.querySelector('.slv-head').getBoundingClientRect().height : 0; if (hd > 0) bar = Math.max(bar, Math.ceil(hd) + 8); } catch (e) {}
    return {x: Math.min(Math.max(r.x, 0), v.w - w), y: Math.min(Math.max(r.y, 0), Math.max(0, v.h - (whole ? h : bar))), w, h};
  }
  function rectNow(){
    const v = vp(), s = V.win;
    if (s.dock === 'right') { const t = topEdge(), x = Math.round(v.w / 2); return {x, y: t, w: v.w - x, h: v.h - t}; }
    if (s.dock === 'bottom') { const y = Math.round(v.h / 2); return {x: 0, y, w: v.w, h: v.h - y}; }
    if (!s.has) {
      // the first time: at the upper right, under the tab strip, as high as the slide's shape asks
      const t = topEdge(), k = D[V.deck] || {}, w = Math.min(560, Math.round(v.w * 0.46));
      s.w = w; s.h = Math.min(v.h - t - 24, Math.round(w / (k.ar || 1.3333)) + 128); s.x = v.w - w - 12; s.y = t + 12; s.has = true;
    }
    return clampWin(s, V.whole);
  }
  /* the window is put where V.win says; the buttons say which half it fills */
  function place(){
    const d = V.dlg; if (!d) return;
    if (V.mode === 'win') {
      let r = V.rect = rectNow();
      const set = () => { d.style.left = r.x + 'px'; d.style.top = r.y + 'px'; d.style.width = r.w + 'px'; d.style.height = r.h + 'px'; d.classList.toggle('slv-lab', r.w >= 620); };
      set();
      // at its new width the title bar may be higher: once more, so that all of it is above the lower edge
      if (!V.win.dock) { const r2 = clampWin(r, V.whole); if (r2.y !== r.y) { r = V.rect = r2; set(); } }
    } else {
      V.rect = null;
      ['left', 'top', 'width', 'height'].forEach(p => d.style.removeProperty(p));
      d.classList.add('slv-lab');
    }
    const dock = V.mode === 'full' ? 'full' : V.mode === 'win' ? V.win.dock : '';
    d.setAttribute('data-dock', dock);
    DOCKS.forEach(k => { const b = d.querySelector('[data-slv=' + k + ']'); if (b) b.setAttribute('aria-pressed', String(dock === k)); });
  }
  /* the viewer is put on screen as a window or as the covering box; when it is on screen already it changes
     from the one to the other where it stands (the picture stays) */
  function showAs(mode){
    const d = V.dlg, was = d.open, x = window.scrollX, y = window.scrollY;
    if (was) { if (typeof d.close === 'function') d.close(); else d.removeAttribute('open'); unlock(false); }
    V.mode = mode; V.drag = null; V.pinch = null; d.classList.remove('slv-drag');
    d.classList.toggle('slv-win', mode === 'win'); d.classList.toggle('slv-desk', mode !== 'phone'); d.classList.remove('slv-fb');
    const t = d.querySelector('.slv-t');
    if (mode === 'win') {
      V.modal = false;
      d.setAttribute('aria-modal', 'false'); t.setAttribute('tabindex', '0');
      place();
      if (typeof d.show === 'function') d.show(); else d.setAttribute('open', '');
    } else {
      d.removeAttribute('aria-modal'); t.removeAttribute('tabindex');
      place();
      V.modal = typeof d.showModal === 'function';
      if (V.modal) d.showModal(); else { d.classList.add('slv-fb'); d.setAttribute('open', ''); }   // a browser without <dialog>
      try { lock(x, y); } catch (e) {}
    }
    if (was && (window.scrollX !== x || window.scrollY !== y)) put(x, y);
  }
  /* a button of the title bar: the half (or the whole) it names; pressed again, back to the free window */
  function dock(name){
    const d = V.dlg, s = V.win; if (!d || !s || V.mode === 'phone') return;
    s.dock = s.dock === name ? '' : name; saveWin();
    const want = s.dock === 'full' ? 'full' : 'win';
    if (want !== V.mode) showAs(want); else place();
    const b = d.querySelector('[data-slv=' + name + ']'); if (b) { try { b.focus({preventScroll: true}); } catch (e) {} }
  }
  /* moved or resized by hand: the window leaves the half it filled and keeps the rectangle it has */
  function setRect(r, save){
    const s = V.win, c = clampWin(r);
    s.dock = ''; s.x = c.x; s.y = c.y; s.w = c.w; s.h = c.h; s.has = true; V.whole = false;
    place(); if (V.rect) s.y = V.rect.y;
    if (save) saveWin();
  }
  function nudge(kind, dx, dy){
    const r = V.rect || rectNow(), v = vp();
    if (kind === 'move') setRect({x: r.x + dx, y: r.y + dy, w: r.w, h: r.h}, true);
    else setRect({x: r.x, y: r.y, w: Math.min(r.w + dx, Math.max(r.w, v.w - r.x)), h: Math.min(r.h + dy, Math.max(r.h, v.h - r.y))}, true);
  }
  /* the browser window was resized or turned: the window is put inside it again; in a window now too small
     for it the viewer becomes the covering box */
  function refit(){
    const d = V.dlg; if (!d || !d.open || V.mode !== 'win') return;
    if (!roomy()) {
      const inside = d.contains(document.activeElement);
      showAs('phone');
      if (inside) { try { d.querySelector('.slv-x').focus({preventScroll: true}); } catch (e) {} }
    } else place();
  }
  /* the number printed on a clean page of a deck cited by page: the page's own place in the file, except the
     rows of SLIDES.printed (pdftotext of the clean deck) */
  const printedOn = (deck, page) => { let n = page; (SLIDES.printed || []).forEach(r => { if (r[0] === deck && r[1] === page) n = r[2]; }); return n; };
  function build(){
    const d = document.createElement('dialog');
    d.className = 'slv'; d.setAttribute('aria-labelledby', 'slv-deck');
    d.innerHTML = `<div class="slv-in">
      <div class="slv-head"><div class="slv-t"><p id="slv-deck" class="slv-deck"></p><p class="slv-pos" aria-live="polite"></p></div>
        <div class="slv-dock"><button type="button" class="slv-dk" data-slv="right" aria-pressed="false" aria-label="Right half" title="Right half"><span class="slv-ic" aria-hidden="true"></span><span class="slv-dl" aria-hidden="true">Right half</span></button><button type="button" class="slv-dk" data-slv="bottom" aria-pressed="false" aria-label="Bottom half" title="Bottom half"><span class="slv-ic" aria-hidden="true"></span><span class="slv-dl" aria-hidden="true">Bottom half</span></button><button type="button" class="slv-dk" data-slv="full" aria-pressed="false" aria-label="Full" title="Full"><span class="slv-ic" aria-hidden="true"></span><span class="slv-dl" aria-hidden="true">Full</span></button></div>
        <button type="button" class="slv-x" data-slv="close">Close</button></div>
      <p class="slv-note" hidden></p>
      <div class="slv-pic"><a class="slv-a" target="_blank" rel="noopener"><img class="slv-img" alt="" decoding="async"></a>
        <p class="slv-wait" hidden></p>
        <p class="slv-err" role="alert" hidden>The picture of this slide did not load. Check the connection, then press Try again. <button type="button" class="btn sm" data-slv="again">Try again</button></p></div>
      <div class="slv-bar"><button type="button" class="btn ghost" data-slv="prev">◂ Previous</button><button type="button" class="btn ghost" data-slv="next">Next ▸</button>
        <span class="slv-sp"></span><a class="slv-full" target="_blank" rel="noopener">Open full size</a></div></div>
      <button type="button" class="slv-rs" aria-label="Resize window. Arrow keys change the size." title="Resize window"></button>`;
    d.querySelector('.slv-t').setAttribute('aria-description', 'Drag to move the window. With focus here, the arrow keys move it.');
    document.body.appendChild(d);
    d.addEventListener('click', e => {
      const t = e.target.closest ? e.target.closest('[data-slv]') : null;
      if (t) { const a = t.getAttribute('data-slv'); if (a === 'close') close(); else if (a === 'prev') go(-1); else if (a === 'next') go(1); else if (a === 'again') draw(true); else if (DOCKS.indexOf(a) >= 0) dock(a); return; }
      if (e.target === d && V.mode !== 'win') close();                                   // a tap on the dimmed page around the box
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
      // the window: with focus on its title the arrow keys move it, with focus on its corner they resize it
      if (V.mode === 'win' && /^Arrow/.test(e.key) && !e.altKey && !e.ctrlKey && !e.metaKey) {
        const onT = e.target === d.querySelector('.slv-t'), onR = e.target === d.querySelector('.slv-rs');
        if (onT || onR) {
          e.preventDefault(); e.stopPropagation();
          const k = e.key, dx = k === 'ArrowLeft' ? -WIN.step : k === 'ArrowRight' ? WIN.step : 0, dy = k === 'ArrowUp' ? -WIN.step : k === 'ArrowDown' ? WIN.step : 0;
          nudge(onT ? 'move' : 'size', dx, dy); return;
        }
      }
      // the left and right arrows page, also when focus is on nothing in the box (after a click on its text)
      if ((e.key === 'ArrowLeft' || e.key === 'ArrowRight') && (V.modal || d.contains(e.target))) { e.preventDefault(); go(e.key === 'ArrowLeft' ? -1 : 1); return; }
      if (V.modal && SCROLLS.indexOf(e.key) >= 0 && d.scrollHeight <= d.clientHeight + 1 && !((e.key === ' ' || e.key === 'Spacebar') && e.target && e.target.tagName === 'BUTTON')) { e.preventDefault(); return; }
      if (e.key !== 'Escape' && e.key !== 'Tab') return;
      if (e.key === 'Escape') {
        // the window: Escape is the page's own while focus is in a field of the page or in another open box
        if (V.mode === 'win' && !d.contains(e.target)) {
          const t = e.target && e.target.closest ? e.target : null;
          if (blocked() || (t && (t.closest('input,textarea,select,[contenteditable]') || t.closest('dialog[open]')))) return;
        }
        e.stopPropagation(); e.preventDefault(); close(); return;
      }
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
      if (V.mode === 'win') return;                                  // the window: a finger on it scrolls the page as anywhere else
      const vv = window.visualViewport;
      if (!(e.touches && e.touches.length > 1) && !(vv && vv.scale > 1.01)) still(e);
    }, {passive: false});
    d.addEventListener('wheel', e => { if (!e.ctrlKey && V.mode !== 'win') still(e); }, {passive: false});
    /* the window is moved by its title bar and resized by its corner: one pointer (mouse, finger or pen), held
       by the bar or the corner until it is let go. A press that does not move is a press, not a move */
    const head = d.querySelector('.slv-head'), rs = d.querySelector('.slv-rs'), pic = d.querySelector('.slv-pic');
    const grab = (el, kind) => {
      el.addEventListener('pointerdown', e => {
        if (V.mode !== 'win' || V.drag || (e.pointerType === 'mouse' && e.button !== 0)) return;
        if (kind === 'move' && e.target.closest && e.target.closest('button,a')) return;
        V.drag = {id: e.pointerId, kind, x: e.clientX, y: e.clientY, r: Object.assign({}, V.rect || rectNow()), moved: false};
        try { el.setPointerCapture(e.pointerId); } catch (err) {}
        if (e.pointerType === 'mouse') e.preventDefault();          // no text is selected by the drag
      });
      el.addEventListener('pointermove', e => {
        const g = V.drag; if (!g || g.id !== e.pointerId || g.kind !== kind) return;
        const dx = e.clientX - g.x, dy = e.clientY - g.y, v = vp();
        if (!g.moved && Math.abs(dx) < 4 && Math.abs(dy) < 4) return;
        g.moved = true; d.classList.add('slv-drag');
        if (kind === 'move') setRect({x: g.r.x + dx, y: g.r.y + dy, w: g.r.w, h: g.r.h}, false);
        else setRect({x: g.r.x, y: g.r.y, w: Math.min(g.r.w + dx, Math.max(g.r.w, v.w - g.r.x)), h: Math.min(g.r.h + dy, Math.max(g.r.h, v.h - g.r.y))}, false);
      });
      const end = e => {
        const g = V.drag; if (!g || g.id !== e.pointerId || g.kind !== kind) return;
        V.drag = null; d.classList.remove('slv-drag');
        try { el.releasePointerCapture(e.pointerId); } catch (err) {}
        if (g.moved) saveWin();
      };
      el.addEventListener('pointerup', end); el.addEventListener('pointercancel', end);
    };
    grab(head, 'move'); grab(rs, 'size');
    /* two fingers on the slide resize the window about its middle (the browser's own zoom is not taken
       anywhere else on the page; one finger on the slide scrolls the page) */
    const two = e => { const t = e.touches; return t && t.length === 2 && pic.contains(t[0].target) && pic.contains(t[1].target); };
    const span = e => { const a = e.touches[0], b = e.touches[1]; return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY) || 1; };
    pic.addEventListener('touchstart', e => {
      V.pinch = V.mode === 'win' && two(e) ? {d: span(e), r: Object.assign({}, V.rect || rectNow()), moved: false} : null;
    }, {passive: true});
    pic.addEventListener('touchmove', e => {
      const p = V.pinch; if (!p || V.mode !== 'win' || !two(e)) return;
      if (e.cancelable) e.preventDefault();
      const v = vp(), lo = Math.max(WIN.minW / p.r.w, WIN.minH / p.r.h), hi = Math.min(v.w / p.r.w, v.h / p.r.h);
      const k = Math.max(Math.min(span(e) / p.d, hi), Math.min(lo, hi)), w = p.r.w * k, h = p.r.h * k;
      p.moved = true;
      setRect({x: p.r.x + (p.r.w - w) / 2, y: p.r.y + (p.r.h - h) / 2, w, h}, false);
    }, {passive: false});
    const unpinch = () => { const p = V.pinch; V.pinch = null; if (p && p.moved) saveWin(); };
    pic.addEventListener('touchend', unpinch); pic.addEventListener('touchcancel', unpinch);
    // the browser window resized or turned; the tab strip shown or hidden as the page scrolls (the right half stands under it)
    let fitT = 0, fitR = 0;
    const fit = () => { if (fitR) return; fitR = (window.requestAnimationFrame || setTimeout)(() => { fitR = 0; try { refit(); } catch (e) {} }, 16); };
    // (a change of width: turned, or the browser window resized; a browser bar that hides as the page scrolls changes the height only)
    let fitW = window.innerWidth;
    const fitAll = () => { if (window.innerWidth !== fitW) { fitW = window.innerWidth; V.whole = true; } fit(); };
    window.addEventListener('resize', fitAll); window.addEventListener('orientationchange', fitAll);
    window.addEventListener('scroll', () => {
      if (!d.open || V.mode !== 'win' || !V.win || V.win.dock !== 'right') return;
      fit(); clearTimeout(fitT); fitT = setTimeout(fit, 320);
    }, {passive: true});
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
    const pv = q('[data-slv=prev]'), nx = q('[data-slv=next]'), act = document.activeElement;
    pv.disabled = !step(-1);
    nx.disabled = !step(1);
    // Previous or Next goes off at an end of the deck while focus is on it: focus goes to the other one (to
    // Close when both are off), so that it stays in the viewer
    if (d.open && (act === pv || act === nx) && act.disabled) {
      const to = act === pv ? nx : pv;
      try { (to.disabled ? q('.slv-x') : to).focus({preventScroll: true}); } catch (e) {}
    }
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
    const r = document.documentElement, k = V.lock = {x, y, w: window.innerWidth, h: window.innerHeight, o: r.style.overflow, hid: false, snap: null, turned: false};
    if (window.innerWidth - r.clientWidth > 0) {
      k.snap = () => {
        if (V.lock !== k || !V.dlg || !V.dlg.open) { window.removeEventListener('scroll', k.snap); return; }
        if (window.innerWidth !== k.w) { k.turned = true; k.w = window.innerWidth; k.x = window.scrollX; k.y = window.scrollY; return; }   // a resized window: where the browser put the page
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
    // a slide opened while the window is on screen takes the place of the one in it; the window stays where it is.
    // (A window under a box of the page that has opened since becomes the covering box, on top of it.)
    if (!d.open) { V.win = loadWin(); V.away = false; V.whole = true; showAs(modeWanted()); }
    else if (V.mode === 'win' && modeWanted() === 'phone') showAs('phone');
    draw();                         // once the box is on screen: the picture is asked for by a box that is laid out
    const x = d.querySelector('.slv-x'); if (x) { try { x.focus({preventScroll: true}); } catch (e) {} }
    return true;
  }
  /* after the viewer closed, once: by close() at once, or by the browser's close event after Escape. The event
     of an earlier closing that arrives when the viewer is open again finds it open and does nothing */
  function closed(){
    const d = V.dlg; if (!d || d.open) return;
    const o = V.opener, away = V.away; V.opener = null; V.refocus = false; V.away = false; V.mode = ''; V.drag = null; V.pinch = null; d.classList.remove('slv-drag');
    d.querySelector('.slv-img').removeAttribute('src');
    // the citation that was tapped is still on the page: focus goes back to it and the page to its place
    const there = !!o && o.isConnected && o.getClientRects().length > 0;
    const k = V.lock, turned = !!k && (k.turned || window.innerWidth !== k.w || window.innerHeight !== k.h);
    try { if (there && !away && typeof o.focus === 'function') { try { o.focus({preventScroll: true}); } catch (e) { o.focus(); } } }
    finally { unlock(there || !o); }
    // the window was resized or turned while the viewer was open: the page is not put back at its old place
    // (unlock), so the citation is brought on screen when it is not there
    if (there && turned) {
      try {
        const b = o.getBoundingClientRect();
        if (b.top < 0 || b.left < 0 || b.bottom > window.innerHeight || b.right > window.innerWidth) {
          try { o.scrollIntoView({block: 'center', inline: 'nearest', behavior: 'instant'}); } catch (e) { o.scrollIntoView(); }
        }
      } catch (e) {}
    }
  }
  function close(){
    const d = V.dlg; if (!d) return;
    // the window closed while the reader is at work elsewhere on the page (focus on a control there): focus stays there
    const a = document.activeElement;
    V.away = d.open && V.mode === 'win' && !!a && a !== document.body && a !== document.documentElement && !d.contains(a);
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
.slv-dock,.slv-rs{display:none}
.slv-dk{font:inherit;font-size:14px;min-width:44px;min-height:44px;display:inline-flex;align-items:center;justify-content:center;gap:6px;border:1px solid var(--line,#d5dbe3);border-radius:8px;background:var(--paper,#fff);color:var(--accent,#2F5FA8);padding:0 9px;cursor:pointer;white-space:nowrap}
.slv-dk[aria-pressed=true]{background:var(--accent,#2F5FA8);border-color:var(--accent,#2F5FA8);color:#fff}
.slv-ic{position:relative;flex:none;width:22px;height:17px;border:1.5px solid currentColor;border-radius:2px;box-sizing:border-box}
.slv-ic::after{content:"";position:absolute;background:currentColor}
[data-slv=right] .slv-ic::after{top:0;bottom:0;right:0;width:50%}
[data-slv=bottom] .slv-ic::after{left:0;right:0;bottom:0;height:50%}
[data-slv=full] .slv-ic::after{inset:0}
.slv-dl{display:none}
.slv-lab .slv-dl{display:inline}
@media (min-width:760px) and (min-height:480px){
  .slv-desk .slv-dock{display:flex;gap:4px}
  .slv-desk .slv-head{align-items:center}
}
dialog.slv.slv-win{position:fixed;inset:auto;margin:0;max-width:none;max-height:none;min-width:0;overflow:hidden;overscroll-behavior:auto;z-index:55;border:1px solid var(--line,#d5dbe3);border-radius:10px;box-shadow:0 6px 28px rgba(0,0,0,.3)}
dialog.slv.slv-win[open]{display:block}
dialog.slv.slv-win[data-dock=right],dialog.slv.slv-win[data-dock=bottom]{border-radius:0}
.slv-win .slv-in{height:100%;box-sizing:border-box;display:flex;flex-direction:column;padding:6px 8px 8px 10px}
.slv-win .slv-head{flex:none;flex-wrap:wrap;gap:4px 8px;touch-action:none;cursor:move;-webkit-user-select:none;user-select:none}
.slv-win .slv-head button{cursor:pointer}
.slv-win .slv-t{flex:1 1 150px;border-radius:6px}
.slv-win .slv-t:focus-visible{outline:2px solid var(--accent,#2F5FA8);outline-offset:1px}
.slv-win .slv-dock{margin-left:auto}
.slv-win .slv-note{flex:none;max-height:4.4em;overflow:auto}
.slv-win .slv-pic{flex:1 1 0;min-height:0;margin:6px 0;touch-action:pan-x pan-y;container-type:size}
.slv-win .slv-a{width:100%;height:100%;aspect-ratio:auto}
@supports (width:1cqw){.slv-win .slv-a{width:min(100cqw,calc(100cqh*var(--slv-ar,1.3333)));height:auto;aspect-ratio:var(--slv-ar,1.3333)}}
.slv-win .slv-bar{flex:none;padding-right:40px}
.slv-win .slv-rs{display:block;position:absolute;right:0;bottom:0;width:44px;height:44px;margin:0;padding:0;border:0;border-radius:8px 0 9px 0;background:transparent;cursor:nwse-resize;touch-action:none}
.slv-win .slv-rs::before{content:"";position:absolute;right:7px;bottom:7px;width:18px;height:18px;
  background:linear-gradient(135deg,transparent 0 36%,var(--text-dim,#5b6877) 36% 44%,transparent 44% 58%,var(--text-dim,#5b6877) 58% 66%,transparent 66% 80%,var(--text-dim,#5b6877) 80% 88%,transparent 88%)}
.slv-win .slv-rs:focus-visible{outline:2px solid var(--accent,#2F5FA8);outline-offset:-3px}
.slv-win.slv-drag{-webkit-user-select:none;user-select:none}
.slv-win.slv-drag .slv-pic{pointer-events:none}
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
      // a practice exam under way (its clock is on screen): no slide stays in a window beside its questions
      if (V.dlg && V.dlg.open && V.mode === 'win') { const c = main.querySelector('.examhead .clock'); if (c && c.getClientRects().length) close(); }
    } catch (e) { console.error('Slide links: this pass was skipped; the citations stay as text.', e); }
    finally {
      if (mo) { try { mo.observe(main, OBS); } catch (e) {} }
      if (t0) stats.ms += performance.now() - t0;
    }
  }
  const soon = () => { if (!timer) timer = setTimeout(run, 80); };
  try {
    main = document.querySelector('main');
    // under a structure of an explanation the core draws every span of the caption as a block of small dim text
    // (".cmpcell figcaption span"); a citation there stays in its line and looks like the other slide links
    const STRIP_CSS = '.cmpcell figcaption span.slk{display:inline;font-size:inherit;color:var(--accent,#2F5FA8)}\n@media print{.cmpcell figcaption span.slk{color:inherit}}\n';
    const style = document.createElement('style'); style.textContent = CSS + STRIP_CSS; document.head.appendChild(style);
    let heldKey = null;                                           // the key whose press opened the viewer, until it is let go
    // first in line: a slide link does nothing but open its slide
    const act = e => {
      const b = e.target && e.target.closest ? e.target.closest('.slk') : null;
      if (!b || (e.type === 'keydown' && e.key !== 'Enter' && e.key !== ' ')) return;
      e.preventDefault(); e.stopPropagation();
      if (e.type === 'keydown' && e.repeat) return;               // a key held down opens the slide once
      // a range of printed slide numbers ("printed slides 24–33") opens without the viewer's "Cited: pages N–M" line:
      // that line counts by the pages of the file, which from printed slide 22 on run one higher
      const printed = b.hasAttribute('data-printed');
      try { if (open(b.getAttribute('data-deck'), +b.getAttribute('data-n'), printed ? 0 : +b.getAttribute('data-to') || 0, printed, b) && e.type === 'keydown') heldKey = e.key; }
      catch (err) { console.error('The slide could not be opened.', err); }
    };
    // the key press that opened the viewer is over when the key is let go: until then its repeats (Enter held down)
    // and its release (Space) do not press Close, on which the focus now stands
    const heldGuard = e => {
      if (heldKey === null || e.key !== heldKey) { if (e.type === 'keydown' && !e.repeat) heldKey = null; return; }
      const inViewer = !!V.dlg && !!e.target && V.dlg.contains(e.target);
      if (e.type === 'keyup') { heldKey = null; if (inViewer) e.preventDefault(); }
      else if (e.repeat) { if (inViewer) e.preventDefault(); }
      else heldKey = null;                                        // a new press of the same key
    };
    document.addEventListener('click', act, true);
    document.addEventListener('keydown', heldGuard, true);      // before act: a new press ends the one that opened the viewer
    document.addEventListener('keyup', heldGuard, true);
    document.addEventListener('keydown', act, true);            // Enter and Space, as on a button
    // a change inside a control, or the tick of the practice-exam clock, is never a citation (SKIP): it starts no pass
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
