/* ==========================================================================
   KEEPING THE PLACE WHEN THE APP IS CLOSED AND REOPENED
   (course-level, Louis 2026-11-15: "on a reload to update it loses the user's spot if they're answering
   questions and shows a new page of questions"; temporary until the kit has it)
   ==========================================================================
   The core keeps the place (the open tab, the open sections, the question and whether it was answered, the
   line at the top of the screen) across a reload in sessionStorage, which belongs to one browser tab and is
   emptied when the tab or the Home Screen app is closed. A reload in the same tab comes back to the same
   question (the core's update_test.js). Closing the app and opening it again, which is how an installed copy on
   an iPad or iPhone is usually brought up to date, starts a new session: the place is gone and the Quiz tab opens
   on a fresh draw of questions.
   This file keeps a copy of the core's place record in localStorage, under `<NS>:place:keep`, and puts it back
   into sessionStorage while the page starts, before the core reads it, when the session has none and the copy is
   less than 12 hours old (the core's own limit). The core then restores it as after a reload, with its own checks:
   a quiz is brought back only for the profile it was saved under, and an answered question comes back answered
   with nothing recorded twice. The copy is written when the page is hidden or closed and every 2.5 seconds
   while the record changes; it holds no answers or history, only the place (the question ids of the session).
   It is not progress: it is not exported, imported or counted, and nothing reads it but this file. Where
   storage is refused nothing happens and the page starts as before. */
(function(){
  try {
    const ns = COURSE.ns + (BUILD.preview ? '-preview' : '');
    const KEY = ns + ':place', KEEP = ns + ':place:keep', MAX = 12 * 3600000;
    let here = null;
    try { here = sessionStorage.getItem(KEY); } catch (e) { return; }
    if (!here) {
      try {
        const k = localStorage.getItem(KEEP), o = k && JSON.parse(k);
        if (o && typeof o.at === 'number' && Date.now() - o.at < MAX && o.at <= Date.now() + 60000) sessionStorage.setItem(KEY, k);
      } catch (e) { /* the page starts as before */ }
    }
    let last = '';
    const copy = () => {
      // only a place with a quiz in it is kept: that is what a fresh draw of questions would lose. A place with none (Topics,
      // a reading tab) removes the copy, so a quiz left long ago is not brought back over a page the reader moved to.
      try {
        const v = sessionStorage.getItem(KEY); if (v === last) return; last = v;
        if (v && /"quiz":\{/.test(v)) localStorage.setItem(KEEP, v); else if (localStorage.getItem(KEEP) !== null) localStorage.removeItem(KEEP);
      } catch (e) { /* refused: nothing kept */ }
    };
    // the core saves its record on the same events; saving it first here puts the newest one in the copy
    const now = () => { try { if (typeof placeSave === 'function') placeSave(); } catch (e) { /* the core's own record stands */ } copy(); };
    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') now(); });
    window.addEventListener('pagehide', now);
    setInterval(copy, 2500);
    window.PLACE_KEEP = {key: KEEP, copy, now};
  } catch (e) { /* the page starts as before */ }
})();
