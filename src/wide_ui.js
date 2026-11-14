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
  // The setting is read again once the core's NS exists. This file runs before the line that declares NS, so the
  // first reading looks under COURSE.ns; on the preview page NS is COURSE.ns + '-preview', the name the checkbox
  // writes under, and a choice of "off" was lost at every reload there.
  let AUTO = autoHide(), autoRead = false;
  const loadAuto = () => {
    if (autoRead) return;
    try { void NS; } catch (e) { return; }
    autoRead = true; AUTO = autoHide();
  };
  const IDLE_MS = 3000;
  let timer = null, hovering = false;

  const nav = () => document.getElementById('nav');
  const head = () => document.querySelector('header');
  const past = () => { const h = head(); return !!h && window.scrollY > (h.offsetHeight || 0) + 1; };
  const dialogOpen = () => !!(document.querySelector('[aria-modal="true"]') || (document.body && document.body.classList.contains('figbig')));
  // Keyboard focus inside the strip keeps it. The focus a tap or a click leaves on a tab button does not: in
  // Chromium the button stays the active element after a pointer press, so the strip stayed over the page, with
  // the timer set again every 3 s, until something else was tapped. :focus-visible tells the two apart (true for
  // focus reached with the keyboard); a browser that does not know the selector keeps the strip, as before.
  const keyFocus = n => {
    const a = document.activeElement;
    if (!a || !n.contains || !n.contains(a)) return false;
    try { return a.matches(':focus-visible'); } catch (e) { return true; }
  };
  const holds = n => hovering || keyFocus(n);
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
    loadAuto();
    const n = nav(); if (!n || !n.addEventListener) return;
    window.addEventListener('scroll', reveal, {passive: true});
    window.addEventListener('resize', reveal, {passive: true});
    ['resize', 'orientationchange', 'pageshow', 'focus'].forEach(ev => window.addEventListener(ev, () => setTimeout(() => fitCheck(), 350), {passive: true}));
    document.addEventListener('visibilitychange', () => { if (!document.hidden) setTimeout(() => fitCheck(), 350); });
    try { if (window.visualViewport) visualViewport.addEventListener('resize', () => setTimeout(() => fitCheck(), 350)); } catch (e) {}
    // a touch device only: the browser may not send an event for the resize, so the widths are read every 3 s (no writes unless they disagree)
    try { if ((navigator.maxTouchPoints || 0) > 1) setInterval(() => fitCheck(), 3000); } catch (e) {}
    n.addEventListener('scroll', reveal, {passive: true});          // its own row scrolled sideways (the chevrons)
    n.addEventListener('focusin', reveal);
    // a mouse resting on the strip keeps it (a touch has no hover, so it never holds it)
    n.addEventListener('pointerenter', ev => { if (ev.pointerType === 'mouse') { hovering = true; reveal(); } });
    n.addEventListener('pointerleave', ev => { if (hovering) { hovering = false; reveal(); } });
    // a touch or a pointer near the top edge brings it back
    const EDGE = 36;
    document.addEventListener('pointerdown', ev => { if (ev.clientY <= EDGE) reveal(); }, {passive: true});
    document.addEventListener('pointermove', ev => { if (ev.pointerType === 'mouse' && ev.clientY <= EDGE && n.classList.contains('xhid')) reveal(); }, {passive: true});
    document.addEventListener('touchstart', ev => { const t = ev.touches && ev.touches[0]; if (t && t.clientY <= EDGE) reveal(); }, {passive: true});
    reveal();
  }

  /* ---------- Settings > Display ---------- */
  function settingsRow(){
    const el = document.getElementById('v-settings');
    if (!el || !el.querySelector || el.querySelector('#xNavHide')) return;
    loadAuto();
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
        The page then tries to match the window by itself. This button tries once more; it may not help. If the blank area stays, reload the page.</p>
        <button type="button" class="btn sm" id="xRefit" style="min-height:44px">Refit the page to the window</button>
        <p id="xFitNow" style="font-size:13px;color:var(--text-dim);margin:8px 0 0"></p></details>`;
    const exp = [...el.querySelectorAll('h3')].find(h => /^\s*Export\s*$/.test(h.textContent));
    const frag = document.createDocumentFragment(); while (box.firstChild) frag.appendChild(box.firstChild);
    if (exp) exp.before(frag); else el.appendChild(frag);
    const cb = el.querySelector('#xNavHide');
    cb.addEventListener('change', () => {
      autoRead = true;
      AUTO = cb.checked;
      try { localStorage.setItem(KEY(), AUTO ? '1' : '0'); } catch (e) { /* kept for this visit */ }
      reveal();
    });
    const rf = el.querySelector('#xRefit'), now = el.querySelector('#xFitNow');
    const say = () => { if (now) now.textContent = fitText(); };
    if (rf) rf.addEventListener('click', () => { refit(); setTimeout(say, 300); setTimeout(say, 1400); });
    const dt = el.querySelector('details.xfit'); if (dt) dt.addEventListener('toggle', say);
    say();
  }

  /* ---------- a page the browser left at an old, narrower width ----------
     Louis's iPad (iPadOS 26, Chrome, a resizable window), 2026-11-12 and 2026-11-14: after the window was widened the
     page stayed laid out for the old width (746 px in a 1,376 px window), pinned to the left, the rest of the window
     showing the page background, until a reload. Nothing in the page sets a width. Chromium on a desktop never does
     this. What is known (read 2026-11-14; none of it names a cause, a fixed version or a page-side remedy for this
     exact case):
       - WebKit bug 170595 (open since 2017): in a WKWebView app, not in Safari, the layout viewport and innerWidth
         can be wrong after a resize, because the new size has not reached the web process.
         https://bugs.webkit.org/show_bug.cgi?id=170595
       - the same picture in other WKWebView apps on iPadOS 26: Obsidian
         https://forum.obsidian.md/t/usable-space-reduced-with-ipados-26/104120 , Firefox
         https://github.com/mozilla-mobile/firefox-ios/issues/34646 (closed without a fix), Chrome's start page
         https://support.google.com/chrome/thread/424168586 ; late re-layout during a window resize, reported to
         Apple: https://developer.apple.com/forums/thread/802660 ; Chrome on iOS giving a page a wrong innerWidth:
         https://issues.chromium.org/issues/40944868 and https://issues.chromium.org/40746784
       - WebKit source (ViewportConfiguration.cpp, WKWebViewIOS.mm, main branch): with width=device-width the layout
         width is the view size the app last sent to the web process, so writing the meta again with an equivalent
         value (the refit used until 2026-11-14, with minimum-scale=1) recomputes the same stale width.
     The bar with Reload and Dismiss that followed a failed refit is gone (Louis, 2026-11-14: "this reload pop up
     when the tab changes sizes is annoying omit it, also doesn't work"). Nothing here shows a bar, a popup or a
     dialog, and nothing reloads the page. What runs instead, silently, and only on Apple touch WebKit (an iPad or
     iPhone user agent, or a Macintosh one with more than one touch point, which is how an iPad presents itself),
     never while the page is pinch-zoomed, hidden, or a text field has the focus:
       evidence  strong: the inner width and the visible viewport agree within 2 px and are at least 60 px wider
                 than the page is laid out. Weak: only one of the two is. The outer width is shown in the Settings
                 line but is never the basis for a width (it can be the screen's).
       layer 0   the viewport meta gets ", interactive-widget=resizes-content" for 80 ms and is put back. In the
                 WebKit source a change of that value is the one thing a page can do that makes the app send the
                 view size again. It changes nothing else while no keyboard is up. At most 3 times a visit.
       layer 1   the meta's width=device-width becomes width=<window px> (with minimum-scale=1). After 300 ms it is
                 kept only if the layout width, the inner width and the visible viewport all equal that number at
                 scale 1 with no sideways overflow; otherwise the meta is put back. At most 2 failures a visit
                 (2 tries on weak evidence).
       layer 2   strong evidence only, when layer 1 did not hold: a screen-only rule html{width:<window px>} (with
                 shrink-to-fit=no in the meta, so WebKit does not scale the wider content down), kept only if the
                 root is that wide at scale 1. In-flow content, the tab strip included, then spans the window;
                 media queries, vw units and fixed elements still follow the stale width. At most 2 failures a visit.
       undoing   every resize event and the 3-second check compare again. A fix is removed when the window width no
                 longer equals the fixed width (wider or narrower), when the scale drops below 1, or, for layer 2,
                 when the browser's own layout width has caught up; the page is then judged once more.
       bounds    one attempt a second, 12 a visit, then off for the visit; timers only, no loops.
     Settings > Display keeps "Refit the page to the window" (it runs the same routine once more, with the visit's
     limits started again) and the numbers line, which is the way to learn what the device reports. Emulated in
     wide_test.js; untested on the device. */
  const laidOut = () => (document.documentElement && document.documentElement.clientWidth) || 0;
  const FIT_GAP = 60, FIT_TOL = 2, FIT_MAX = 12, FIT_WAIT = 300, FIT_EVERY = 1000;
  let fitMode = 0, fitTarget = 0, fitOrig = null, fitBusy = false, fitOff = false;
  let fitCount = 0, fitLast = 0, metaFails = 0, weakTries = 0, rootFails = 0, nudges = 0;
  const fitText = () => {
    let vv = ''; try { if (window.visualViewport) vv = '; visible ' + Math.round(visualViewport.width) + ' px at scale ' + (Math.round(visualViewport.scale * 100) / 100); } catch (e) {}
    return 'Now: page laid out for ' + laidOut() + ' px; window ' + (window.innerWidth || 0) + ' px inside, ' + (window.outerWidth || 0) + ' px outside' + vv + '; screen ' + ((window.screen && screen.width) || 0) + ' px; ' +
      (fitMode === 1 ? 'viewport width set to ' + fitTarget + ' px' : fitMode === 2 ? 'page width set to ' + fitTarget + ' px' : 'no width set') + '.';
  };
  const appleTouch = () => {
    try { return (navigator.maxTouchPoints || 0) > 1 && /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent || ''); } catch (e) { return false; }
  };
  const measure = () => {
    let vw = 0, scale = 1;
    try { if (window.visualViewport) { scale = visualViewport.scale || 1; vw = (visualViewport.width || 0) * scale; } } catch (e) {}
    return {lay: laidOut(), iw: window.innerWidth || 0, vw, scale};
  };
  // the width to trust: the inner width and the visible viewport must agree
  const trusted = m => m.vw && m.iw && Math.abs(m.iw - m.vw) <= FIT_TOL ? Math.round(Math.min(m.iw, m.vw)) : 0;
  const unzoomed = m => Math.abs(m.scale - 1) <= 0.02;
  const typing = () => {
    const a = document.activeElement; if (!a) return false;
    if (a.isContentEditable === true || /^(TEXTAREA|SELECT)$/.test(a.tagName || '')) return true;
    return a.tagName === 'INPUT' && !/^(checkbox|radio|button|submit|reset|range|file|color|image)$/i.test(a.type || '');
  };
  const vpMeta = () => document.querySelector('meta[name="viewport"]');
  const DEVW = /width\s*=\s*device-width/i;
  const metaSet = v => { const m = vpMeta(); if (m && m.getAttribute('content') !== v) m.setAttribute('content', v); };
  const metaOrig = () => {
    if (fitOrig === null) { const m = vpMeta(); if (!m) return null; fitOrig = m.getAttribute('content') || ''; }
    return fitOrig;
  };
  const metaOff = () => { if (fitOrig !== null) metaSet(fitOrig); };
  function metaOn(w){
    const o = metaOrig(); if (o === null || !DEVW.test(o)) return false;
    metaSet(o.replace(DEVW, 'width=' + w) + (/minimum-scale/i.test(o) ? '' : ', minimum-scale=1')); return true;
  }
  function rootOn(w){
    const o = metaOrig(); if (o && !/shrink-to-fit/i.test(o)) metaSet(o + ', shrink-to-fit=no');
    let s = document.getElementById('xfitcss');
    if (!s) { s = document.createElement('style'); s.id = 'xfitcss'; document.head.appendChild(s); }
    s.textContent = '@media screen{html{width:' + w + 'px!important;min-width:' + w + 'px!important;max-width:none!important}}';
  }
  function rootOff(){ const s = document.getElementById('xfitcss'); if (s && s.parentNode) s.parentNode.removeChild(s); }
  function fitUndo(){ try { metaOff(); rootOff(); } catch (e) {} fitMode = 0; fitTarget = 0; }
  const noOverflow = w => { const se = document.scrollingElement || document.documentElement; return !se || se.scrollWidth <= w + FIT_TOL; };
  const told = () => { try { window.dispatchEvent(new Event('resize')); } catch (e) {} };
  // one step later; no other check runs in between, and the flag is always cleared
  const later = (fn, ms) => { fitBusy = true; setTimeout(() => { fitBusy = false; try { fn(); } catch (e) { fitUndo(); } }, ms || FIT_WAIT); };
  // layer 0
  function nudge(then){
    const o = metaOrig();
    if (!o || /interactive-widget/i.test(o)) { then(); return; }
    nudges++;
    metaSet(o + ', interactive-widget=resizes-content');
    later(() => { metaOff(); later(then); }, 80);
  }
  // layer 2
  function rootApply(target){
    if (rootFails >= 2) return;
    rootOn(target); fitMode = 2; fitTarget = target;
    later(() => {
      const a = measure(), w = document.documentElement.getBoundingClientRect().width;
      if (Math.abs(w - target) <= FIT_TOL && trusted(a) === target && unzoomed(a) && noOverflow(target)) told();
      else { rootFails++; fitUndo(); }
    });
  }
  // layer 1, then layer 2 on strong evidence
  function fitApply(target, strong){
    const m = measure();
    if (document.hidden || typing() || !unzoomed(m) || target - m.lay < FIT_GAP) return;      // layer 0 was enough, or the moment has passed
    if (strong && trusted(m) !== target) return;
    if (!(metaFails < 2 && metaOn(target))) { if (strong) rootApply(target); return; }
    if (!strong) weakTries++;
    later(() => {
      const a = measure();
      const ok = Math.abs(a.lay - target) <= FIT_TOL && unzoomed(a) && Math.abs(a.iw - target) <= FIT_TOL &&
        (!a.vw || Math.abs(a.vw - target) <= FIT_TOL) && noOverflow(target);
      if (ok) { fitMode = 1; fitTarget = target; told(); return; }
      metaFails++; metaOff();
      if (strong) rootApply(target);
    });
  }
  function fitCheck(manual){
    try {
      if (fitBusy || (fitOff && !manual) || document.hidden || !appleTouch() || typing()) return;
      const m = measure(); if (!m.lay) return;
      if (m.scale > 1.02) return;                                   // pinched in: nothing is touched
      const real = trusted(m);
      if (fitMode) {                                                // a fix is on: is it still right?
        const moved = m.scale < 0.98 || !real || Math.abs(real - fitTarget) > FIT_TOL;
        const caught = fitMode === 2 && Math.abs(m.lay - fitTarget) <= FIT_TOL;
        if (!moved && !caught) return;
        fitUndo();
        if (moved) later(() => fitCheck());                         // judged once more with the page's own meta
        return;
      }
      if (m.scale < 0.98) return;
      const strong = real && real - m.lay >= FIT_GAP ? real : 0;
      let weak = 0;
      if (!real && weakTries < 2) { const w = Math.round(Math.max(m.iw, m.vw)); if (w - m.lay >= FIT_GAP) weak = w; }
      const target = strong || weak;
      if (!target) { if (manual) nudge(() => {}); return; }
      const now = Date.now();
      if (!manual) {
        if (now - fitLast < FIT_EVERY) return;
        if (fitCount >= FIT_MAX) { fitOff = true; return; }
      }
      fitCount++; fitLast = now;
      const go = () => fitApply(target, !!strong);
      if (manual || nudges < 3) nudge(go); else go();
    } catch (e) { /* the page is unaffected */ }
  }
  // the Settings button: one more try, with the visit's limits started again
  const refit = () => { fitOff = false; fitCount = 0; metaFails = 0; weakTries = 0; rootFails = 0; fitCheck(true); return true; };

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
