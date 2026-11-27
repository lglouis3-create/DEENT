/* prose_ui.js: a long paragraph in Guides, Reference and Tell apart is shown one sentence to a line.
   Louis (2026-11-22): "If the information results in a bunch of paragraph tables, always find a better layout";
   2026-11-26: the slide-by-slide pages of Dr. Patel and Dr. Sikazwe still held about 270 paragraphs of 300 to 650
   characters each.
   What it does: when a paragraph or list item of those three views holds more than 300 characters, has no block
   element inside it and has at least two sentences, each sentence becomes a block of its own (span.psn). The words
   are the same, in the same order, and so is the text (the space after a full stop stays at the end of its
   sentence); inline elements (bold, links, stars) move with the sentence they sit in. A full stop after an
   abbreviation (Dr., vs., e.g., i.e., a single capital letter) does not end a sentence. Nothing is stored.
   It runs on what a view adds to the page (a MutationObserver on the three views), before the slide-link pass reads
   the text nodes, and marks a paragraph it has handled with data-psn so it is handled once. */
(function proseUi(){
  'use strict';
  if (typeof document === 'undefined' || !document.createElement || typeof MutationObserver !== 'function') return;
  const VIEWS = ['v-guide', 'v-ref', 'v-tell'];
  const MIN = 300;
  const BLOCK = 'p,ul,ol,table,div,details,h1,h2,h3,h4,h5,h6,section,pre,blockquote,figure,button';

  const css = document.createElement('style'); css.id = 'proseuicss';
  css.textContent = '.psn{display:block;margin:0 0 .55em}.psn:last-child{margin-bottom:0}';
  (document.head || document.documentElement).appendChild(css);

  // a full stop, "?" or "!" (then a closing quote or bracket) and a space, before a capital letter, a number or an opening mark
  const END = /([.!?])(["”')\]]?)(\s+)(?=[A-Z0-9“"(\[])/g;
  const ABBR = /(?:^|[^A-Za-z.])(?:Dr|Mr|Ms|Mrs|vs|St|No|Fig|approx|cf)$/;
  const INITIAL = /(?:^|[^A-Za-z])[A-Za-z]$/;      // "e.g.", "i.e.", "U.S.", "B. burgdorferi"

  function cuts(text) {
    const out = [];
    END.lastIndex = 0;
    let m;
    while ((m = END.exec(text))) {
      const before = text.slice(Math.max(0, m.index - 8), m.index);
      if (m[1] === '.' && (ABBR.test(before) || INITIAL.test(before))) continue;
      out.push(m.index + m[1].length + m[2].length + m[3].length);   // the next sentence starts here
    }
    return out;
  }

  function split(el) {
    if (el.hasAttribute('data-psn')) return;
    el.setAttribute('data-psn', '1');
    const text = el.textContent || '';
    if (text.length < MIN || el.querySelector(BLOCK)) return;
    if (el.closest('table,button,summary,h1,h2,h3,h4,h5,h6,.xcard,.psn')) return;
    // at least two sentences, found inside the text nodes (a stop at the end of a node is not one)
    let n = 0;
    el.childNodes.forEach(c => { if (c.nodeType === 3) n += cuts(c.nodeValue).length; });
    if (n < 1) return;
    const groups = []; let cur = null;
    const start = () => { cur = document.createElement('span'); cur.className = 'psn'; groups.push(cur); };
    start();
    [...el.childNodes].forEach(c => {
      if (c.nodeType !== 3) { cur.appendChild(c); return; }
      const t = c.nodeValue, at = cuts(t); let from = 0;
      at.forEach(i => { cur.appendChild(document.createTextNode(t.slice(from, i))); from = i; start(); });
      cur.appendChild(document.createTextNode(t.slice(from)));
      c.remove();
    });
    groups.forEach(g => el.appendChild(g));
  }

  function scan(root) {
    if (!root || root.nodeType !== 1) return;
    if (root.matches && root.matches('p,li')) split(root);
    if (root.querySelectorAll) root.querySelectorAll('p,li').forEach(split);
  }

  let busy = false;
  function watch(view) {
    scan(view);
    new MutationObserver(recs => {
      if (busy) return;
      busy = true;
      try { recs.forEach(r => r.addedNodes.forEach(nd => { if (nd.nodeType === 1 && !(nd.classList && nd.classList.contains('psn'))) scan(nd); })); }
      catch (e) { /* the paragraphs stay as they were */ }
      finally { busy = false; }
    }).observe(view, {childList: true, subtree: true});
  }
  VIEWS.forEach(id => { const v = document.getElementById(id); if (v) watch(v); });
  // a view is split before the caller goes on (Back puts the scroll position back right after show(), and the page must
  // already have its final height then)
  if (typeof show === 'function') {
    const os = show;
    show = function () {
      const r = os.apply(this, arguments);
      try { VIEWS.forEach(id => { const v = document.getElementById(id); if (v && !v.hidden && !v.classList.contains('hide')) scan(v); }); } catch (e) { /* the observer splits it */ }
      return r;
    };
  }
  window.PROSE_UI = {scan, cuts};
})();
