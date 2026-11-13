/* ==========================================================================
   WIDE SCREENS AND THE PINNED TAB STRIP
   (course-level, Louis 2026-11-08; temporary until the kit has these)
   ==========================================================================
   1. Wide screens (Louis: "make sure the view layout is good for an iPad Pro 13
      inch and MacBook ... so the space is utilized"). The core keeps the page in
      one 860 px column at every width. From 1024 px (a 12.9/13-inch iPad in
      either orientation, every MacBook) the column grows with the window, up
      to 1680 px, with side padding of 14 to 44 px (Louis, 2026-11-12: a
      widened window "leads to white screen area"; until then the column
      stopped at 1260 px, which left 234 px of empty background on each side
      of a 1728 px window). From 1500 px a question may be 1040 px wide and an
      open deck folder shows three topic cards to a row.
      What uses the width: Topics puts the exam card beside "Start here" and the
      topic cards of an open deck folder in two columns (an opened card takes
      the full row); the grids the core already fills by width (Drug list,
      Atlas, Diagrams) get more columns; the walkthrough player gives the slide
      the larger share beside the transcript; Reference and guide tables use the
      full width. What keeps a reading width: a question (Quiz, Exam sim) stays
      at most 940 px, Settings 860 px, and running text in the guides and Tell
      apart at most 88 characters a line. Below 1024 px nothing
      here applies, so phones and small tablets look as before.
   2. Only the tab strip is pinned (Louis: "Pin only the tabs: the course title
      scrolls away and only the tab strip stays at the top ... have the option
      of them disappear after a while and then reappear when scrolling"). The
      header scrolls away with the page; the tab strip sticks at the top of the
      window (the core's ux_test.js check "scrolled down under a wrapped title,
      the tab bar shows below the header" still holds: the strip starts at or
      below the header's bottom). Once the page is scrolled past the header, the
      strip slides up out of view after 3 seconds without scrolling, and comes
      back on any scroll, a touch or a pointer near the top edge, or keyboard
      focus in it. It is never hidden at the top of the page, while it holds
      focus or a resting mouse pointer, while its own row is being scrolled sideways, or
      while a dialog (an enlarged figure, the stop notice) is open. It moves
      with a transform, so the content under it never jumps; with reduced
      motion the core's rule turns the slide into a plain show/hide.
      Settings > Display, "Hide the tab bar while reading" (on by default),
      turns the hiding off; the choice is kept on this device only, under
      `<NS>:navAutoHide` ("0" off, "1" on), with direct localStorage calls
      inside try/catch. Nothing here reads or writes progress, history or any
      other stored data. */
(function wideUi(){
  if (typeof document === 'undefined' || !document.createElement || !document.head) return;

  const CSS = `
/* ---- pinned tab strip ---- */
header{position:relative}
nav#nav{top:0;transition:transform .22s ease,box-shadow .22s ease}
nav#nav.xpinned{box-shadow:0 2px 8px rgba(0,0,0,.18)}
nav#nav.xhid{transform:translateY(-100%);box-shadow:none}
.atbar{top:var(--nav-h,44px);transition:top .22s ease}
body.xnavhid .atbar{top:0}
/* ---- wide screens ---- */
@media (min-width:1024px){
  main{max-width:1680px;padding-left:clamp(14px,2.4vw,44px);padding-right:clamp(14px,2.4vw,44px)}
  #v-quiz,#v-exam{max-width:940px;margin:0 auto}
  #v-settings{max-width:860px;margin:0 auto}
  #v-guide p,#v-guide li,#v-tell p,#v-tell li{max-width:88ch}
  #v-guide td p,#v-guide td li,#v-tell td p,#v-tell td li{max-width:none}
  /* Topics: the exam card beside Start here (only when topics_ui.js drew the card) */
  #v-topics.xtwo{display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,1fr);column-gap:16px;align-content:start}
  #v-topics.xtwo>*{grid-column:1/-1;min-width:0}
  #v-topics.xtwo>#examFacts{grid-column:1;grid-row:2;align-self:start}
  #v-topics.xtwo>details.xmore{grid-column:1;grid-row:3}
  #v-topics.xtwo>#startHere{grid-column:2;grid-row:2/4;align-self:start;margin-top:6px}
  #v-topics.xtwo>#startHere .startgrid{grid-template-columns:1fr 1fr}
  /* an open deck folder: topic cards two to a row; an opened card takes the row */
  #v-topics .deckbody{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);column-gap:10px;align-items:start}
  #v-topics .deckbody[hidden]{display:none}
  #v-topics .deckbody>*{min-width:0}
  #v-topics .deckbody>details.topic[open]{grid-column:1/-1}
  /* the walkthrough player: the slide large, the transcript beside it */
  .wkbody{grid-template-columns:minmax(0,1.75fr) minmax(0,1fr);gap:14px}
  .wktx{max-height:min(68vh,620px)}
}
@media (min-width:1500px){
  #v-quiz,#v-exam{max-width:1040px}
  #v-topics .deckbody{grid-template-columns:repeat(3,minmax(0,1fr))}
}`;

  const addCss = () => {
    if (document.getElementById('wideuicss')) return;
    const s = document.createElement('style'); s.id = 'wideuicss'; s.textContent = CSS; document.head.appendChild(s);
  };

  /* ---------- Topics: mark the page for the two-column top ---------- */
  function topicsTwo(){
    const el = document.getElementById('v-topics');
    if (!el || !el.querySelector || !el.classList) return;
    const card = document.getElementById('examFacts'), start = document.getElementById('startHere');
    const h2 = el.querySelector('h2');
    // only the order topics_ui.js leaves: h2, the card, (More about this exam), Start here
    let ok = !!(card && start && h2 && card.parentNode === el && start.parentNode === el && h2.nextElementSibling === card);
    if (ok) { const n = card.nextElementSibling; ok = n === start || (n && n.matches && n.matches('details.xmore') && n.nextElementSibling === start); }
    el.classList.toggle('xtwo', ok);
  }

  /* ---------- the tab strip ---------- */
  const KEY = () => { let ns; try { ns = NS; } catch (e) { ns = (typeof COURSE !== 'undefined' && COURSE.ns) || 'drill'; } return ns + ':navAutoHide'; };
  const autoHide = () => { try { return localStorage.getItem(KEY()) !== '0'; } catch (e) { return true; } };
  let AUTO = autoHide();
  const IDLE_MS = 3000;
  let timer = null, hovering = false;

  const nav = () => document.getElementById('nav');
  const head = () => document.querySelector('header');
  const past = () => { const h = head(); return !!h && window.scrollY > (h.offsetHeight || 0) + 1; };
  const dialogOpen = () => !!(document.querySelector('[aria-modal="true"]') || (document.body && document.body.classList.contains('figbig')));
  const holds = n => hovering || (n.contains && n.contains(document.activeElement));
  function setHidden(h){
    const n = nav(); if (!n || !n.classList) return;
    n.classList.toggle('xhid', h);
    if (document.body) document.body.classList.toggle('xnavhid', h);
  }
  function reveal(){
    const n = nav(); if (!n || !n.classList) return;
    setHidden(false);
    n.classList.toggle('xpinned', past());
    clearTimeout(timer); timer = null;
    if (AUTO && past()) timer = setTimeout(tryHide, IDLE_MS);
  }
  function tryHide(){
    timer = null;
    const n = nav(); if (!n || !AUTO || !past()) return;
    if (holds(n) || dialogOpen()) { timer = setTimeout(tryHide, IDLE_MS); return; }
    setHidden(true);
  }

  function wireNav(){
    const n = nav(); if (!n || !n.addEventListener) return;
    window.addEventListener('scroll', reveal, {passive: true});
    window.addEventListener('resize', reveal, {passive: true});
    ['resize', 'orientationchange', 'pageshow', 'focus'].forEach(ev => window.addEventListener(ev, () => setTimeout(maybeRefit, 350), {passive: true}));
    document.addEventListener('visibilitychange', () => { if (!document.hidden) setTimeout(maybeRefit, 350); });
    try { if (window.visualViewport) visualViewport.addEventListener('resize', () => setTimeout(maybeRefit, 350)); } catch (e) {}
    n.addEventListener('scroll', reveal, {passive: true});          // its own row scrolled sideways (the chevrons)
    n.addEventListener('focusin', reveal);
    // a mouse resting on the strip keeps it (a touch has no hover, so it never holds it)
    n.addEventListener('pointerenter', ev => { if (ev.pointerType === 'mouse') { hovering = true; reveal(); } });
    n.addEventListener('pointerleave', ev => { if (hovering) { hovering = false; reveal(); } });
    // a touch or a pointer near the top edge brings it back
    const EDGE = 36;
    document.addEventListener('pointerdown', ev => { if (ev.clientY <= EDGE) reveal(); maybeRefit(); }, {passive: true});
    document.addEventListener('pointermove', ev => { if (ev.pointerType === 'mouse' && ev.clientY <= EDGE && n.classList.contains('xhid')) reveal(); }, {passive: true});
    document.addEventListener('touchstart', ev => { const t = ev.touches && ev.touches[0]; if (t && t.clientY <= EDGE) reveal(); }, {passive: true});
    reveal();
  }

  /* ---------- Settings > Display ---------- */
  function settingsRow(){
    const el = document.getElementById('v-settings');
    if (!el || !el.querySelector || el.querySelector('#xNavHide')) return;
    const box = document.createElement('div');
    box.innerHTML = `<h3>Display</h3><div class="filters"><div class="frow">
      <label style="display:flex;align-items:center;gap:8px;min-height:44px;font-size:14px;cursor:pointer">
        <input type="checkbox" id="xNavHide"${AUTO ? ' checked' : ''} style="width:20px;height:20px">
        Hide the tab bar while reading</label></div>
      <p style="font-size:13.5px;color:var(--text-dim);margin:4px 0 0">The course title scrolls away and the tab bar stays at the top of the screen.
      With this on, the tab bar slides away after 3 seconds without scrolling and comes back when you scroll, touch the top edge or tab to it.
      Kept on this device only.</p></div>
      <details class="xfit" style="margin:10px 0 0"><summary style="cursor:pointer;min-height:44px;display:flex;align-items:center;font-size:14px">If the page does not fill the window</summary>
        <p style="font-size:13.5px;color:var(--text-dim);margin:4px 0 8px">On an iPad, after a window is made wider, the browser can keep the page at its old width and leave the rest of the window blank.
        Refit asks the browser to measure the window again. If the blank area stays, reload the page.</p>
        <button type="button" class="btn sm" id="xRefit" style="min-height:44px">Refit the page to the window</button>
        <p id="xFitNow" style="font-size:13px;color:var(--text-dim);margin:8px 0 0"></p></details>`;
    const exp = [...el.querySelectorAll('h3')].find(h => /^\s*Export\s*$/.test(h.textContent));
    const frag = document.createDocumentFragment(); while (box.firstChild) frag.appendChild(box.firstChild);
    if (exp) exp.before(frag); else el.appendChild(frag);
    const cb = el.querySelector('#xNavHide');
    cb.addEventListener('change', () => {
      AUTO = cb.checked;
      try { localStorage.setItem(KEY(), AUTO ? '1' : '0'); } catch (e) { /* kept for this visit */ }
      reveal();
    });
    const rf = el.querySelector('#xRefit'), now = el.querySelector('#xFitNow');
    const say = () => { if (now) now.textContent = fitText(); };
    if (rf) rf.addEventListener('click', () => { refit(); setTimeout(say, 300); });
    const dt = el.querySelector('details.xfit'); if (dt) dt.addEventListener('toggle', say);
    say();
  }

  /* ---------- a page the browser left at an old, narrower width ----------
     Louis's iPad (iPadOS 26, Chrome, a resizable window), 2026-11-12: after the window was widened the page stayed
     laid out for the old width (746 px in a 1,376 px window), pinned to the left, the rest of the window showing the
     page background. Nothing in the page sets a width: the header and the tab strip are plain blocks, so they are as
     wide as the layout width the browser reports. Chromium never does this. What the page can do is ask the browser
     to work the viewport out again, by writing the viewport meta once with an equivalent value and putting it back.
     That is done from the Settings button, and by itself only on a touch device whose window is reported wider than
     the page is laid out (at most 3 times per visit, 2 seconds apart). On a desktop browser it never runs by itself:
     there a docked side panel legitimately makes the window wider than the page. Untested on the device. */
  const laidOut = () => (document.documentElement && document.documentElement.clientWidth) || 0;
  const fitText = () => {
    let vv = ''; try { if (window.visualViewport) vv = '; visible ' + Math.round(visualViewport.width) + ' px at scale ' + (Math.round(visualViewport.scale * 100) / 100); } catch (e) {}
    return 'Now: page laid out for ' + laidOut() + ' px; window ' + (window.innerWidth || 0) + ' px inside, ' + (window.outerWidth || 0) + ' px outside' + vv + '; screen ' + ((window.screen && screen.width) || 0) + ' px.';
  };
  let fits = 0, lastFit = 0;
  function refit(){
    try {
      const m = document.querySelector('meta[name="viewport"]'); if (!m) return false;
      const orig = m.getAttribute('content') || 'width=device-width, initial-scale=1';
      m.setAttribute('content', orig + ', minimum-scale=1');
      const back = () => { try { m.setAttribute('content', orig); window.dispatchEvent(new Event('resize')); } catch (e) {} };
      if (typeof requestAnimationFrame === 'function') requestAnimationFrame(() => requestAnimationFrame(back)); else setTimeout(back, 50);
      return true;
    } catch (e) { return false; }
  }
  function maybeRefit(){
    try {
      const touch = (navigator.maxTouchPoints || 0) > 1, t = Date.now();
      if (!touch || fits >= 3 || t - lastFit < 2000) return;
      const out = window.outerWidth || 0, lay = laidOut();
      let scale = 1; try { if (window.visualViewport) scale = visualViewport.scale; } catch (e) {}
      if (!out || !lay || Math.abs(scale - 1) > 0.02 || out - lay < 60) return;
      fits++; lastFit = t; refit();
    } catch (e) { /* the page is unaffected */ }
  }

  const wrap = (name, after) => {
    try {
      // the core's render functions are global function declarations; wrap only those that exist
      const base = typeof window !== 'undefined' && typeof window[name] === 'function' ? window[name] : null;
      if (!base) return;
      window[name] = function(){
        const r = base.apply(this, arguments);
        try { after(); } catch (err) { console.error('The wide-screen layout could not finish ' + name + '; the page is unaffected.', err); }
        return r;
      };
    } catch (err) { console.error('The wide-screen layout could not wrap ' + name + '.', err); }
  };

  try {
    addCss();
    wrap('renderTopics', topicsTwo);
    wrap('renderSettings', settingsRow);
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', wireNav, {once: true});
    else wireNav();
  } catch (err) { console.error('The wide-screen layout could not be added; the rest of the page is unaffected.', err); }
})();
