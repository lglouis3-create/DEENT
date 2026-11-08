/* ==========================================================================
   JUMPS TO A READING SECTION: LANDING AND "WHAT TO LOOK AT"
   (course-level, Louis 2026-11-08: "when a user clicks on the explain more
   areas to the reference, tell part, guide, etc. areas it should highlight
   what the user should be looking at"; temporary until the kit has it)
   ==========================================================================
   The core's jump() (views.js) opens the tab of an "Explain more" or review
   plan chip and scrolls to the section's anchor. This file adds, after it:

   1. Landing. The core's headerOffset() still counts the course title, which
      since wide_ui.js scrolls away with the page, so the section landed about
      a header's height too low. scrollToEl() is replaced here with one that
      counts only what stays pinned (whatever of the header and the tab strip
      is sticky or fixed). A section inside a closed <details> is opened first.
   2. The target. The section (a guide objective, a Tell apart or Reference
      heading with everything up to the next heading, a table row, an Atlas
      board, a figure, a Drug list card) gets an outline and a soft wash that
      stay until the reader scrolls it out of view, taps elsewhere, presses
      Escape or changes tab. The "Back to ..." button is the core's own.
   3. The lines that match the question. The question the chip was tapped
      from (the open question, a card of the one-page list, an exam review
      card, or the questions of a review plan section) gives the terms: drug
      names (the Drug list and Atlas names) in its stem, correct option, teach
      and concept; the words of the correct option; acronyms and numbered
      terms (30S, DHFR, IL-17, UVB) and the concept id's parts. Every row,
      list item, paragraph, phone card cell or Atlas tile inside the target is
      scored on the distinct terms it contains (a term that appears in most of
      the target's lines counts for little); the best lines (up to four) get a
      stronger highlight and their matching words a search-style mark. Nothing
      outside the target is ever marked. If nothing scores, only the target is
      highlighted. On a phone, where tables_ui.js shows a row as a card, the
      card and its matching labelled lines are highlighted.
   4. Screen readers: focus moves to the target (tabindex -1, no scroll) and a
      visually hidden note, "Highlighted for this question: ...", describes it
      and is announced.
   Nothing here reads or writes any storage; the marks are removed again when
   the highlight is cleared, so the tabs' text is as written. */
(function jumpUi(){
  if (typeof document === 'undefined' || !document.createElement || !document.head || !document.addEventListener) return;
  if (typeof jump !== 'function' || typeof show !== 'function') return;

  const CSS = `
:root{--jmp-line:var(--accent,#2F5FA8);--jmp-wash:rgba(47,95,168,.08);--jmp-strong:rgba(255,196,0,.22);
  --jmp-mark:rgba(255,196,0,.62);--jmp-mark-edge:rgba(178,107,0,.55)}
@media (prefers-color-scheme:dark){
  :root{--jmp-wash:rgba(120,160,230,.14);--jmp-strong:rgba(255,200,60,.24);--jmp-mark:rgba(255,200,60,.55)}
}
.jhit{outline:3px solid var(--jmp-line);outline-offset:3px;background-color:var(--jmp-wash);border-radius:6px}
.jreg{background-color:var(--jmp-wash);box-shadow:inset 4px 0 0 var(--jmp-line);padding-left:10px}
.jreg.jtop{outline:3px solid var(--jmp-line);outline-offset:2px;border-radius:4px}
.jline{background-color:var(--jmp-strong)!important;outline:2px solid var(--jmp-line);outline-offset:1px;border-radius:4px}
tr.jline{outline:none}
tr.jline>td{background-color:var(--jmp-strong)!important;box-shadow:inset 0 2px 0 var(--jmp-line),inset 0 -2px 0 var(--jmp-line)}
tr.jline>td:first-child{box-shadow:inset 0 2px 0 var(--jmp-line),inset 0 -2px 0 var(--jmp-line),inset 3px 0 0 var(--jmp-line)}
@media (max-width:700px){
  table.reftab.cards tr.jline{outline:3px solid var(--jmp-line);outline-offset:0;background-color:var(--jmp-strong)!important}
  table.reftab.cards tr.jline>td{box-shadow:none;background-color:transparent!important}
  table.reftab.cards tr.jline>td.jcell{background-color:var(--jmp-strong)!important;box-shadow:inset 3px 0 0 var(--jmp-line);padding-left:8px}
}
mark.jmark{background-color:var(--jmp-mark);color:inherit;border-radius:2px;padding:0 1px;box-shadow:0 0 0 1px var(--jmp-mark-edge)}
.jsr{position:absolute!important;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}
.jhit:focus,.jreg:focus,.jline:focus{outline-color:var(--jmp-line)}
@media (prefers-reduced-motion:no-preference){
  .jhit,.jreg.jtop{animation:jmppulse 1.1s ease-out 2}
  @keyframes jmppulse{0%{outline-offset:9px;outline-color:rgba(47,95,168,0)}100%{outline-offset:3px}}
}
@media (forced-colors:active){
  .jhit,.jreg.jtop,.jline,table.reftab.cards tr.jline{outline:3px solid Highlight}
  mark.jmark{background-color:Mark;color:MarkText}
}`;
  if (!document.getElementById('jumpuicss')) {
    const s = document.createElement('style'); s.id = 'jumpuicss'; s.textContent = CSS; document.head.appendChild(s);
  }

  /* ---------- 1. landing below what stays pinned ---------- */
  const pinnedOffset = () => {
    let off = 0;
    [document.querySelector('header'), document.getElementById('nav')].forEach(el => {
      if (!el || !el.getBoundingClientRect) return;
      const cs = getComputedStyle(el);
      if (cs.position !== 'sticky' && cs.position !== 'fixed') return;
      if (cs.display === 'none' || cs.visibility === 'hidden') return;
      off = Math.max(off, (parseFloat(cs.top) || 0) + el.getBoundingClientRect().height);
    });
    return off + 8;
  };
  const smooth = () => !(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
  function landAt(el){
    if (!el || !el.getBoundingClientRect) return;
    const y = el.getBoundingClientRect().top + window.scrollY - pinnedOffset();
    window.scrollTo({top: Math.max(0, y), behavior: smooth() ? 'smooth' : 'auto'});
  }
  try { scrollToEl = landAt; } catch (e) { /* an older core without scrollToEl: the jump below lands it */ }

  /* ---------- the question a chip was tapped from ---------- */
  const QS = typeof QUESTIONS !== 'undefined' ? QUESTIONS : [];
  const qById = id => (typeof byId === 'function' ? byId(id) : QS.find(q => q.id === id)) || null;
  const norm = s => String(s || '').replace(/\s+/g, ' ').trim();
  function questionsFrom(el){
    if (!el || !el.closest) return {qs: [], drug: null};
    const card = el.closest('.tlcard[data-tlq]');
    if (card) return {qs: [qById(card.dataset.tlq)].filter(Boolean), drug: null};
    const dl = el.closest('.dlcard');
    if (dl) { const h = dl.querySelector('h3'); return {qs: [], drug: h ? norm(h.textContent) : null}; }
    const plan = el.closest('.panel.plan');
    if (plan) {
      const qs = [...plan.querySelectorAll('.pq')].map(p => {
        const t = norm(p.textContent).replace(/…$/, '');
        return QS.find(q => norm(q.stem) === t) || (t.length >= 40 ? QS.find(q => norm(q.stem).startsWith(t)) : null);
      }).filter(Boolean);
      return {qs, drug: null};
    }
    const qc = el.closest('.qcard, .exrev, .qbody, article, section');
    const st = qc && qc.querySelector('.stem');
    if (st) {
      const t = norm(st.textContent);
      if (typeof Q !== 'undefined' && Q && Q.current && norm(Q.current.stem) === t) return {qs: [Q.current], drug: null};
      const q = QS.find(x => norm(x.stem) === t);
      if (q) return {qs: [q], drug: null};
    }
    return {qs: [], drug: null};
  }
  // the last element clicked, so a jump started from code (druglist_ui.js) still knows its card
  let LAST = {el: null, t: 0};
  document.addEventListener('click', e => { LAST = {el: e.target, t: Date.now()}; }, true);

  /* ---------- terms ---------- */
  const STOP = new Set(('a an and are as at be been both but by can cause causes caused could does did do during each either ' +
    'for from has have having how if in into is it its may more most much must no none not of on one only or other over per ' +
    'same should so such than that the their them then there these they this those through to two under up use used uses using ' +
    'very was were what when where which while who why will with within without would also all any because between after before ' +
    'drug drugs agent agents skin topical oral patient patients dose doses therapy treatment treat treats treated cream form ' +
    'effect effects given give take taken first second third answer option slide slides lecture dr smith sikazwe correct true false ' +
    'about above below higher lower increase increased decrease decreased reduce reduces reduced well like make makes made ' +
    'class classes type types group groups mainly main often less least many some three four five six'
  ).split(' '));
  const DRUGS = (() => {
    const out = new Set();
    const add = s => { s = norm(String(s || '').replace(/<[^>]+>/g, '')).toLowerCase(); if (s.length >= 4 && !STOP.has(s)) out.add(s); };
    // the drug-chart names: the Reference targets rows (one per chart drug, tgt-*), with a name in brackets as a second name
    try { [...String(REFERENCE_HTML).matchAll(/<tr id="tgt-[^"]+"><td><details><summary><b>([\s\S]*?)<\/b>/g)].forEach(m => {
      const t = m[1].replace(/<[^>]+>/g, ''); add(t.replace(/\s*\(.*$/, '')); const br = t.match(/\(([^)]+)\)/); if (br) br[1].split(/[,;]/).forEach(add); }); } catch (e) {}
    try { (ATLAS.boards || []).forEach(b => (b.sections || []).forEach(s => (s.items || []).forEach(it => add(it.n)))); } catch (e) {}
    return [...out].sort((a, b) => b.length - a.length);
  })();
  const reEsc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const plain = s => String(s || '').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ');
  const drugsIn = text => { const t = ' ' + plain(text).toLowerCase() + ' ';
    return DRUGS.filter(d => new RegExp('[^a-z0-9]' + reEsc(d) + '(?:s|es)?[^a-z0-9]').test(t)); };
  // acronyms and numbered terms keep their case in the source: 30S, DHFR, IL-17, UVB, p40, JAK1/2
  const codesIn = text => (plain(text).match(/\b(?:[A-Z][A-Za-z]*\d+[A-Za-z]*(?:-\d+)?|\d+[A-Z][A-Za-z]*|[A-Z]{2,}[a-z]?(?:-\d+[A-Za-z]?)?|[a-z]\d{2,})\b/g) || [])
    .filter(w => !/^(?:EXCEPT|NOT|TRUE|FALSE|ALL|NONE|AND|OR|THE)$/.test(w));
  const wordsIn = text => (plain(text).toLowerCase().match(/[a-z][a-z0-9-]{3,}/g) || [])
    .map(w => w.replace(/-+$/, '')).filter(w => w.length >= 4 && !STOP.has(w));
  function termsFor(ctx){
    const T = new Map();
    const put = (t, w) => { t = norm(t).toLowerCase(); if (!t || t.length < 2 || STOP.has(t)) return; if ((T.get(t) || 0) < w) T.set(t, w); };
    if (ctx.drug) { put(ctx.drug, 4); drugsIn(ctx.drug).forEach(d => put(d, 4)); }
    ctx.qs.forEach(q => {
      const right = (q.options || []).filter(o => o.correct).map(o => o.t).join(' ') +
        (q.type === 'match' ? ' ' + (q.pairs || []).map(p => p.l + ' ' + p.r).join(' ') : '');
      const stem = q.stem || '', teach = q.teach || '';
      drugsIn(right).forEach(d => put(d, 4));
      // drug-like names the lists above miss (stem endings of drug classes)
      wordsIn(right + ' ' + stem).filter(w => /(?:mab|cept|limus|tinib|cycline|mycin|azole|asone|olone|sone|otene|arotene|retin|retinoin|alen|ast|orole|amide|osporine|trexate)$/.test(w)).forEach(w => put(w, 3));
      drugsIn(stem).forEach(d => put(d, 3.5));
      drugsIn(teach + ' ' + (q.concept || '').replace(/-/g, ' ')).forEach(d => put(d, 2.5));
      codesIn(right).forEach(c => put(c, 3));
      (plain(right).match(/\b\d+(?:[.:]\d+)?(?:\s?(?:am|pm|%|nm|mg|g|h|hours?|days?|weeks?|months?|years?))?/gi) || [])
        .filter(x => x.length >= 2).forEach(x => put(x, 2.5));
      codesIn(stem).forEach(c => put(c, 2));
      codesIn(teach).forEach(c => put(c, 1.5));
      wordsIn(right).forEach(w => put(w, 2));
      String(q.concept || '').split(/[-@]/).filter(w => w.length >= 4).forEach(w => put(w, 1.5));
      wordsIn(stem).forEach(w => put(w, 0.75));
    });
    return T;
  }

  /* ---------- the target and its lines ---------- */
  const HEAD = /^H[1-4]$/;
  function regionOf(t){
    if (!t) return [];
    if (HEAD.test(t.tagName)) {
      const rank = +t.tagName[1], out = [t];
      for (let n = t.nextElementSibling; n; n = n.nextElementSibling) {
        if (HEAD.test(n.tagName) && +n.tagName[1] <= rank) break;
        if (n.matches && n.matches('details.refnav-wrap, script, style')) continue;
        out.push(n);
      }
      return out;
    }
    return [t];
  }
  const UNIT = 'tr, .attile, .dlcard';
  const LINE = 'tr, .attile, .dlcard, li, p, dt, dd, figcaption, h4, summary, .ln';
  function linesIn(region){
    const one = region.length === 1 ? region[0] : null;
    // a single row or tile: its cells (or short lines) are the lines
    if (one && one.matches && one.matches(UNIT)) {
      const cells = [...one.querySelectorAll(':scope > td, :scope > th')];
      return cells.length > 1 ? cells : [one];
    }
    const all = [];
    region.forEach(r => { if (r.matches && r.matches(LINE)) all.push(r); r.querySelectorAll && r.querySelectorAll(LINE).forEach(x => all.push(x)); });
    const keep = all.filter(x => {
      if (x.closest('svg')) return false;
      const u = x.parentElement && x.parentElement.closest(UNIT);
      if (u && all.includes(u) && !x.matches(UNIT)) return false;        // a row or tile counts as one line
      if (!x.matches(UNIT) && all.some(y => y !== x && x.contains(y) && !y.matches('.ln'))) return false; // innermost text block
      return !!norm(textOf(x));
    });
    return [...new Set(keep)];
  }
  const visible = el => !!(el.getClientRects && el.getClientRects().length) || !!el.closest('details:not([open])');
  // the text of an element with a space between its pieces (cells, lines, labels run together in textContent)
  const textOf = el => { const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT), out = [];
    for (let n = w.nextNode(); n; n = w.nextNode()) if (!(n.parentElement && n.parentElement.closest('svg, script, style'))) out.push(n.nodeValue);
    return out.join(' '); };
  const hayOf = el => el.matches && el.matches('.attile') ? (el.dataset.find || '') + ' ' + textOf(el) : textOf(el);
  function termRe(terms){
    if (!terms.length) return null;
    const alt = terms.slice().sort((a, b) => b.length - a.length).map(reEsc).join('|');
    return new RegExp('(^|[^A-Za-z0-9])(' + alt + ')(?:e?s)?(?=[^A-Za-z0-9]|$)', 'gi');
  }
  function scoreLines(lines, T){
    const terms = [...T.keys()];
    if (!terms.length || !lines.length) return [];
    const hits = lines.map(l => {
      const h = ' ' + norm(hayOf(l)).toLowerCase() + ' ';
      return terms.filter(t => new RegExp('[^a-z0-9]' + reEsc(t) + '(?:e?s)?[^a-z0-9]').test(h));
    });
    // a term in most of the target's lines tells them apart poorly
    const df = new Map(); hits.forEach(hs => hs.forEach(t => df.set(t, (df.get(t) || 0) + 1)));
    const n = lines.length;
    const wt = t => T.get(t) * (n >= 4 && df.get(t) / n > 0.5 ? 0.25 : n >= 4 && df.get(t) / n > 0.3 ? 0.6 : 1);
    const strong = new Set(terms.filter(t => T.get(t) >= 2));
    return lines.map((l, i) => ({el: l, terms: hits[i], strong, score: hits[i].reduce((s, t) => s + wt(t), 0)}));
  }
  function pick(scored){
    const best = Math.max(0, ...scored.map(s => s.score));
    if (best < 2) return [];
    return scored.filter(s => s.score >= 2 && s.score >= best * 0.6 && s.terms.some(t => s.strong.has(t)))
      .sort((a, b) => b.score - a.score).slice(0, 4)
      .sort((a, b) => (a.el.compareDocumentPosition(b.el) & 4) ? -1 : 1);
  }

  /* ---------- marking and clearing ---------- */
  let ACT = null;    // {els, lines, marks, focus, user: the reader has scrolled since}
  function markWords(root, re){
    if (!re || !root) return [];
    const marks = [], walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: n => (n.parentElement && n.parentElement.closest('svg, script, style, mark.jmark, .atname, .athead-anon'))
        ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT});
    const nodes = []; for (let n = walker.nextNode(); n; n = walker.nextNode()) nodes.push(n);
    nodes.forEach(node => {
      const s = node.nodeValue; re.lastIndex = 0;
      let m, last = 0, frag = null;
      while ((m = re.exec(s))) {
        const start = m.index + m[1].length, word = m[0].slice(m[1].length);
        if (!word) { re.lastIndex++; continue; }
        frag = frag || document.createDocumentFragment();
        frag.appendChild(document.createTextNode(s.slice(last, start)));
        const mk = document.createElement('mark'); mk.className = 'jmark'; mk.textContent = word;
        frag.appendChild(mk); marks.push(mk); last = start + word.length;
      }
      if (frag) { frag.appendChild(document.createTextNode(s.slice(last))); node.parentNode.replaceChild(frag, node); }
    });
    return marks;
  }
  function clear(){
    const a = ACT; ACT = null;
    if (!a) return;
    a.els.forEach(e => e.classList.remove('jhit', 'jreg', 'jtop'));
    a.lines.forEach(e => { e.classList.remove('jline'); e.querySelectorAll && e.querySelectorAll('.jcell').forEach(c => c.classList.remove('jcell')); });
    const parents = new Set();
    a.marks.forEach(m => { const p = m.parentNode; if (!p) return; p.replaceChild(document.createTextNode(m.textContent), m); parents.add(p); });
    parents.forEach(p => p.normalize && p.normalize());
    if (a.focus) {
      if (a.focus.dataset.jtab) { a.focus.removeAttribute('tabindex'); delete a.focus.dataset.jtab; }
      if (a.focus.getAttribute('aria-describedby') === 'jumpnote') a.focus.removeAttribute('aria-describedby');
    }
    const note = document.getElementById('jumpnote'); if (note) note.textContent = '';
  }
  function noteEl(){
    let n = document.getElementById('jumpnote');
    if (!n) { n = document.createElement('div'); n.id = 'jumpnote'; n.className = 'jsr'; n.setAttribute('role', 'status'); n.setAttribute('aria-live', 'polite'); document.body.appendChild(n); }
    return n;
  }
  const inAct = node => !!(ACT && node && (ACT.els.some(e => e.contains(node)) || ACT.lines.some(e => e.contains(node))));
  document.addEventListener('pointerdown', e => {
    if (!ACT) return;
    const t = e.target;
    if (inAct(t) || (t.closest && t.closest('#backbtn, #nav'))) return;
    clear();
  }, true);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && ACT) clear(); });
  // scrolling away: only a scroll the reader makes (wheel, touch, keys), not the jump's own
  const moved = () => { if (ACT) ACT.user = true; };
  ['wheel', 'touchmove'].forEach(ev => window.addEventListener(ev, moved, {passive: true}));
  document.addEventListener('keydown', e => { if (/^(?:Arrow|Page|Home|End| $)/.test(e.key) || e.key === ' ') moved(); });
  window.addEventListener('scroll', () => {
    if (!ACT || !ACT.user) return;
    const vh = window.innerHeight || 0;
    const on = ACT.els.concat(ACT.lines).some(e => { const r = e.getBoundingClientRect(); return r.height && r.bottom > 0 && r.top < vh; });
    if (!on) clear();
  }, {passive: true});
  // a tab that lays itself out after it is drawn (the Atlas keys its tiles, figures load) moves
  // the target after the jump: land it again while the reader has not scrolled
  // (only once the page has stopped moving: an instant scroll during the smooth one misses)
  function reland(act, el, n){
    const live = () => ACT === act && !act.user && el.isConnected;
    const check = tries => {
      if (!live()) return;
      const y0 = window.scrollY;
      setTimeout(() => {
        if (!live()) return;
        if (window.scrollY !== y0 && tries < 20) return check(tries + 1);
        const top = el.getBoundingClientRect().top, want = pinnedOffset();
        const atEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
        if (Math.abs(top - want) > 24 && !(atEnd && top > want) && !(window.scrollY <= 0 && top > want))
          window.scrollTo({top: Math.max(0, top + window.scrollY - want), behavior: 'auto'});
        if (n < 2) reland(act, el, n + 1);
      }, 160);
    };
    setTimeout(() => check(0), [500, 1200, 2400][n]);
  }

  /* ---------- after the core's jump ---------- */
  function openUp(el){
    for (let d = el && el.parentElement && el.parentElement.closest('details'); d; d = d.parentElement && d.parentElement.closest('details')) d.open = true;
  }
  function highlight(view, anchor, ctx){
    clear();
    const pane = document.getElementById('v-' + view);
    let t = anchor ? document.getElementById(anchor) : null;
    if (t && pane && !pane.contains(t)) t = null;
    const T = termsFor(ctx);
    // a jump with no anchor (the Drug list chip in a guide): the card of the question's drug
    if (!t && pane && view === 'drugs' && T.size) {
      const cards = [...pane.querySelectorAll('.dlcard')].filter(visible);
      const sc = pick(scoreLines(cards, new Map([...T].filter(([k, w]) => w >= 2.5 && DRUGS.includes(k)))));
      if (sc.length) t = sc[0].el;
    }
    if (!t) return null;
    openUp(t);
    const region = regionOf(t);
    let scored = pick(scoreLines(linesIn(region).filter(visible), T));
    // a matched line inside a closed fold is opened, so the reader sees it
    scored.forEach(s => { openUp(s.el); if (s.el.matches && s.el.matches('summary') && s.el.parentElement) s.el.parentElement.open = true; });
    if (region.length === 1 && t.matches && t.matches('tr') && t.querySelector('details:not([open])')) t.querySelectorAll('details').forEach(d => { d.open = true; });
    const re = termRe([...new Set(scored.flatMap(s => s.terms))]);
    const marks = [], lines = [];
    const single = region.length === 1;
    if (single) t.classList.add('jhit');
    else region.forEach((e, i) => { e.classList.add('jreg'); if (!i) e.classList.add('jtop'); });
    scored.forEach(s => {
      const el = s.el;
      if (single && el === t) return;
      if (el.matches('td, th') && single) {           // the cells of one target row
        el.classList.add('jline'); lines.push(el);
      } else {
        el.classList.add('jline'); lines.push(el);
        if (el.matches('tr')) [...el.children].forEach(td => {
          const h = ' ' + norm(textOf(td)).toLowerCase() + ' ';
          if (s.terms.some(x => new RegExp('[^a-z0-9]' + reEsc(x) + '(?:e?s)?[^a-z0-9]').test(h))) td.classList.add('jcell');
        });
      }
      if (!el.matches('.attile')) marks.push(...markWords(el, re));
    });
    if (single && !scored.length && !t.matches('.attile, svg, figure')) { /* the whole target only */ }
    // focus and the note for screen readers
    const label = norm((HEAD.test(t.tagName) ? t : (t.querySelector('h2, h3, h4, summary, b, td') || t)).textContent).slice(0, 90);
    const words = [...new Set(scored.flatMap(s => s.terms))].slice(0, 4);
    const note = noteEl();
    note.textContent = scored.length
      ? `Highlighted for this question: ${scored.length} line${scored.length === 1 ? '' : 's'} in "${label}" with ${words.join(', ')}.`
      : `Highlighted for this question: the section "${label}".`;
    if (!t.hasAttribute('tabindex')) { t.setAttribute('tabindex', '-1'); t.dataset.jtab = '1'; }
    t.setAttribute('aria-describedby', 'jumpnote');
    try { t.focus({preventScroll: true}); } catch (e) {}
    ACT = {els: single ? [t] : region, lines, marks, focus: t, user: false};
    // land: the target's top below the pinned strip, or the first matching line when
    // landing at the top would leave it below the fold
    const first = lines[0] && (lines[0].closest('tr') || lines[0]);
    let land = t;
    if (first && first !== t) {
      const vh = window.innerHeight || 800, gap = first.getBoundingClientRect().top - t.getBoundingClientRect().top;
      if (gap + first.getBoundingClientRect().height > vh - pinnedOffset() - 40) land = first;
    }
    landAt(land);
    reland(ACT, land, 0);
    return {target: t, lines: lines.length, land};
  }

  const coreJump = jump;
  jump = function(view, anchor){
    const from = LAST.el && Date.now() - LAST.t < 1500 ? LAST.el : null;
    let ctx = {qs: [], drug: null};
    try { ctx = questionsFrom(from); } catch (e) {}
    const r = coreJump.apply(this, arguments);
    try { JUMP_UI.last = highlight(view, anchor, ctx); }
    catch (e) { console.error('The jump highlight could not be drawn; the section is shown without it.', e); }
    return r;
  };
  const coreShow = show;
  show = function(){ clear(); return coreShow.apply(this, arguments); };

  // for the checks (jump_test.js) and nothing else
  window.JUMP_UI = {termsFor: ctx => [...termsFor(ctx)], clear, pinnedOffset, last: null,
    lines: (anchor, ctx) => { const t = document.getElementById(anchor); const ls = linesIn(regionOf(t));
      return {n: ls.length, vis: ls.filter(visible).length, scored: scoreLines(ls.filter(visible), termsFor(ctx)).filter(s => s.score).map(s => [s.score, s.terms.join('/'), norm(s.el.textContent).slice(0, 60)])}; }};
})();
