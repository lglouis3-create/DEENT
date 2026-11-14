/* wide_test.js: the page fills and uses a wide window (wide_ui.js; Louis, 2026-11-12: a widened window
   "leads to white screen area").
   NODE_PATH=$(npm root -g) node wide_test.js          (reads ../preview/index.html; DRILL_PAGE overrides)
   - at iPad and Mac window sizes, on every tab: no sideways scroll, the header and the tab strip span the window,
     and the content column takes at least 90% of the window up to 1,728 px (at least 60% at 2,560 px);
   - a window widened after the page has loaded is filled the same way; a phone-width window is unchanged;
   - Settings has "Refit the page to the window": it leaves the viewport meta as it was, causes no error, and by
     itself the refit never runs on a desktop browser;
   - the pinned tab strip hides while reading after a real tap (390x844) or click (1366x1024) on a tab, and stays
     for a mouse resting on it and for focus reached with the Tab key (review finding E-F2, 2026-11-13);
   - "Hide the tab bar while reading" turned off in Settings is still off after a reload (the preview page keeps
     its settings under its own name). */
const path = require('path');
const {chromium} = require('playwright');
const PAGE = 'file://' + path.resolve(__dirname, process.env.DRILL_PAGE || '../preview/index.html');
let fail = 0, n = 0;
const check = (ok, label, detail) => { n++; if (!ok) fail++; console.log((ok ? '  ok    ' : '  FAIL  ') + label + (ok || !detail ? '' : '  — ' + String(detail).slice(0, 500))); };
const measure = p => p.evaluate(() => { const r = e => e ? e.getBoundingClientRect() : {left: 0, right: 0, width: 0};
  const h = r(document.querySelector('header')), nv = r(document.getElementById('nav')), m = r(document.querySelector('main'));
  return {iw: innerWidth, sw: document.documentElement.scrollWidth, header: Math.round(h.right - h.left), nav: Math.round(nv.right - nv.left), main: Math.round(m.width), mainLeft: Math.round(m.left)}; });

(async () => {
  const b = await chromium.launch();
  const SIZES = [[1024, 768], [1180, 820], [1376, 1032], [1440, 900], [1728, 1117], [1920, 1080], [2560, 1440]];
  for (const [w, h] of SIZES) {
    const errs = [];
    const p = await b.newPage({viewport: {width: w, height: h}});
    p.on('pageerror', e => errs.push(e.message));
    await p.goto(PAGE); await p.waitForTimeout(1000);
    const tabs = await p.$$eval('#nav button[data-v]', bs => bs.map(x => x.dataset.v));
    const over = [], narrow = [], bar = [];
    const need = w <= 1728 ? 0.9 : w <= 1920 ? 0.85 : 0.6;
    for (const t of tabs) {
      await p.click('#nav button[data-v="' + t + '"]'); await p.waitForTimeout(120);
      const m = await measure(p);
      if (m.sw > m.iw) over.push(t + ' +' + (m.sw - m.iw));
      if (m.header !== m.iw || m.nav !== m.iw) bar.push(t + ' header ' + m.header + ' nav ' + m.nav);
      if (m.main / m.iw < need) narrow.push(t + ' ' + Math.round(100 * m.main / m.iw) + '%');
    }
    check(tabs.length >= 10 && !over.length, `${w}x${h}: no tab scrolls sideways (${tabs.length} tabs)`, over.join(', '));
    check(!bar.length, `${w}x${h}: the header and the tab strip span the window on every tab`, bar.join('; '));
    check(!narrow.length, `${w}x${h}: the content column takes at least ${Math.round(need * 100)}% of the window on every tab`, narrow.join(', '));
    // inside the tabs: an open deck folder, an open Diseases card, the Diseases comparisons
    await p.click('#nav button[data-v="topics"]');
    const fold = await p.$('#v-topics .examfold .deckbtn, #v-topics .deckbtn'); if (fold) { await fold.click().catch(() => {}); }
    let m = await measure(p); check(m.sw <= m.iw, `${w}x${h}: Topics with a folder opened does not scroll sideways`, 'by ' + (m.sw - m.iw));
    if (tabs.includes('dz')) {
      await p.click('#nav button[data-v="dz"]'); await p.click('#v-dz .dzpicker button[data-card="psoriasis"]');
      const oa = await p.$('#v-dz [data-dz="openall"]'); if (oa) await oa.click();
      m = await measure(p); check(m.sw <= m.iw, `${w}x${h}: an open Diseases card does not scroll sideways`, 'by ' + (m.sw - m.iw));
      if (w >= 1300) {
        const side = await p.evaluate(() => { const a = document.querySelector('#v-dz .dzmain'), s = document.querySelector('#v-dz .dzside'); if (!a || !s) return null; const ra = a.getBoundingClientRect(), rs = s.getBoundingClientRect(); return {beside: rs.left >= ra.right - 1, sideW: Math.round(rs.width)}; });
        check(!!side && side.beside && side.sideW >= 300, `${w}x${h}: the practice patients sit beside the steps`, JSON.stringify(side));
      }
      for (const v of ['tell', 'pairs', 'rules']) { await p.click('#v-dz [data-view="' + v + '"]'); m = await measure(p); if (m.sw > m.iw) over.push('dz ' + v); }
      check(!over.length, `${w}x${h}: the Diseases comparisons do not scroll sideways`, over.join(', '));
    }
    check(!errs.length, `${w}x${h}: no page errors`, errs.join(' | '));
    await p.close();
  }
  // widened after load, and narrowed again
  {
    const p = await b.newPage({viewport: {width: 746, height: 1000}});
    await p.goto(PAGE); await p.waitForTimeout(900);
    await p.click('#nav button[data-v="tell"]');
    await p.setViewportSize({width: 1376, height: 1032}); await p.waitForTimeout(500);
    let m = await measure(p);
    check(m.header === 1376 && m.nav === 1376 && m.main / m.iw >= 0.9 && m.sw === m.iw, 'a window widened from 746 to 1,376 px after loading is filled', JSON.stringify(m));
    await p.setViewportSize({width: 1728, height: 1117}); await p.waitForTimeout(400); m = await measure(p);
    check(m.main / m.iw >= 0.9 && m.sw === m.iw, 'and again at 1,728 px', JSON.stringify(m));
    await p.setViewportSize({width: 390, height: 844}); await p.waitForTimeout(400); m = await measure(p);
    check(m.sw === m.iw && m.main === 390, 'narrowed to a phone width, the page fits it', JSON.stringify(m));
    await p.close();
  }
  // phone: nothing of the wide layout applies
  {
    const p = await b.newPage({viewport: {width: 390, height: 844}});
    await p.goto(PAGE); await p.waitForTimeout(900);
    const pad = await p.evaluate(() => { const c = getComputedStyle(document.querySelector('main')); return c.maxWidth + ' ' + c.paddingLeft; });
    check(/^860px /.test(pad), 'at 390 px the column keeps the core\'s own width rule and padding', pad);
    await p.close();
  }
  // Settings: Refit
  {
    const errs = [];
    const p = await b.newPage({viewport: {width: 1376, height: 1032}});
    p.on('pageerror', e => errs.push(e.message));
    await p.goto(PAGE); await p.waitForTimeout(900);
    const before = await p.$eval('meta[name="viewport"]', m => m.getAttribute('content'));
    await p.click('#nav button[data-v="settings"]');
    const btn = await p.$('#xRefit');
    check(!!btn, 'Settings has "Refit the page to the window"');
    if (btn) {
      await p.click('details.xfit summary'); await p.click('#xRefit'); await p.waitForTimeout(500);
      const after = await p.$eval('meta[name="viewport"]', m => m.getAttribute('content'));
      check(after === before, 'Refit leaves the viewport meta as it was', before + ' -> ' + after);
      const txt = await p.$eval('#xFitNow', e => e.textContent);
      check(/laid out for 1376 px/.test(txt), 'the line under it reports the width the page is laid out for', txt);
      const m = await measure(p); check(m.sw === m.iw && m.header === 1376, 'after Refit the page still fills the window', JSON.stringify(m));
    }
    // by itself the refit does not run on a desktop browser (no touch), however the window is resized
    let writes = 0;
    await p.exposeFunction('__vpWrite', () => { writes++; });
    await p.evaluate(() => { const m = document.querySelector('meta[name="viewport"]'); new MutationObserver(() => window.__vpWrite()).observe(m, {attributes: true}); });
    await p.setViewportSize({width: 900, height: 800}); await p.waitForTimeout(500); await p.setViewportSize({width: 1500, height: 900}); await p.waitForTimeout(800);
    check(writes === 0, 'resizing a desktop window never rewrites the viewport meta by itself', writes + ' writes');
    check(!errs.length, 'no page errors around Refit', errs.join(' | '));
    await p.close();
  }
  /* Louis, 2026-11-14: on the iPad the blank area is still there when the window changes size. A touch device whose
     window is reported wider than the page is laid out now gets a refit after every resize (two tries each), and, when
     that does not bring the layout back, a bar with Reload. Emulated here: touch, with the outer width reported as
     1,376 px while the page is laid out for 746 px. */
  {
    const errs = [];
    const ctx = await b.newContext({viewport: {width: 746, height: 1000}, hasTouch: true});
    await ctx.addInitScript(() => {
      Object.defineProperty(navigator, 'maxTouchPoints', {get: () => 5});
      window.__outer = 1376;
      Object.defineProperty(window, 'outerWidth', {get: () => window.__outer, configurable: true});
    });
    const p = await ctx.newPage();
    p.on('pageerror', e => errs.push(e.message));
    let writes = 0;
    await p.exposeFunction('__vpWrite', () => { writes++; });
    await p.goto(PAGE); await p.waitForTimeout(900);
    await p.evaluate(() => { const m = document.querySelector('meta[name="viewport"]'); new MutationObserver(() => window.__vpWrite()).observe(m, {attributes: true}); });
    await p.setViewportSize({width: 748, height: 1000}); await p.waitForTimeout(3200);       // a resize event, then the refit
    check(writes >= 2, 'a touch window reported wider than the page is refitted after a resize', writes + ' writes');
    check(!!(await p.$('#xFitNotice')), 'and a bar with Reload follows when the layout does not come back');
    const meta = await p.$eval('meta[name="viewport"]', m => m.getAttribute('content'));
    check(!/minimum-scale/.test(meta), 'the viewport meta is back as it was', meta);
    await p.click('#xFitNotice button:nth-of-type(2)'); await p.waitForTimeout(200);
    check(!(await p.$('#xFitNotice')), 'Dismiss closes the bar');
    await p.evaluate(() => { window.__outer = 748; }); await p.waitForTimeout(3500);
    check(!(await p.$('#xFitNotice')), 'when the widths agree again there is no bar');
    // another resize that is wrong again starts a new episode: the bar can come back
    await p.evaluate(() => { window.__outer = 1500; }); await p.setViewportSize({width: 750, height: 1000}); await p.waitForTimeout(3600);
    check(!!(await p.$('#xFitNotice')), 'a later resize that leaves the page behind brings the bar again');
    check(!errs.length, 'no page errors in the emulated iPad case', errs.join(' | '));
    await ctx.close();
    // a touch window whose widths agree is left alone
    const ctx2 = await b.newContext({viewport: {width: 1376, height: 1032}, hasTouch: true});
    await ctx2.addInitScript(() => { Object.defineProperty(navigator, 'maxTouchPoints', {get: () => 5}); });
    const q = await ctx2.newPage(); let w2 = 0;
    await q.exposeFunction('__vpWrite', () => { w2++; });
    await q.goto(PAGE); await q.waitForTimeout(900);
    await q.evaluate(() => { const m = document.querySelector('meta[name="viewport"]'); new MutationObserver(() => window.__vpWrite()).observe(m, {attributes: true}); });
    await q.setViewportSize({width: 1100, height: 900}); await q.waitForTimeout(3800);
    check(w2 === 0 && !(await q.$('#xFitNotice')), 'a touch window whose widths agree is left alone', w2 + ' writes');
    await ctx2.close();
  }
  /* The pinned tab strip hides while reading (review finding E-F2, 2026-11-13). In Chromium a tap or a click leaves
     the tab button as the active element; wide_ui.js counted any focus inside the strip as a reason to keep it, so
     after a real press on a tab the strip stayed over the page (and its timer was set again every 3 s). Focus now
     keeps the strip only when it was reached with the keyboard (:focus-visible). The strip hides 3 s after the
     last scroll; each case waits up to 4.5 s. */
  {
    const strip = p => p.evaluate(() => { const nv = document.getElementById('nav'), a = document.activeElement; let fv = null;
      try { fv = !!a && a.matches(':focus-visible'); } catch (e) {}
      return {hidden: nv.classList.contains('xhid'), pinned: nv.classList.contains('xpinned'), focusIn: nv.contains(a), focusVisible: fv, y: Math.round(scrollY)}; });
    const hides = p => p.waitForFunction(() => document.getElementById('nav').classList.contains('xhid'), null, {timeout: 4500}).then(() => true, () => false);
    // a real tap on a phone
    {
      const errs = [];
      const p = await b.newPage({viewport: {width: 390, height: 844}, hasTouch: true, isMobile: true});
      p.on('pageerror', e => errs.push(e.message));
      await p.goto(PAGE); await p.waitForTimeout(900);
      await p.tap('#nav button[data-v="guide"]'); await p.waitForTimeout(300);
      const s0 = await strip(p);
      // The desktop Chromium this test runs in has a mouse besides the emulated finger: after a tap it reports that
      // mouse at the window's corner (0,0), which is on the pinned strip, and a resting mouse keeps the strip by
      // design. A phone has no mouse, so the test's mouse is put on the text first.
      await p.mouse.move(195, 620);
      await p.evaluate(() => window.scrollTo(0, 600));
      const gone = await hides(p), s1 = await strip(p);
      if (!s0.focusIn) console.log('  (this browser does not leave focus on a tapped tab; the case then holds without the fix too)');
      check(gone && s1.y > 300, '390x844, a real tap on a tab, then a scroll down: the pinned strip hides within 4.5 s', JSON.stringify({afterTap: s0, later: s1}));
      // the next scroll brings it back, as before
      await p.evaluate(() => window.scrollBy(0, 80)); await p.waitForTimeout(250);
      const s2 = await strip(p);
      check(gone && !s2.hidden && s2.pinned, '390x844: the next scroll brings the strip back', JSON.stringify(s2));
      check(!errs.length, '390x844: no page errors around the strip', errs.join(' | '));
      await p.close();
    }
    // a real mouse click, the mouse then moved onto the text
    {
      const p = await b.newPage({viewport: {width: 1366, height: 1024}});
      await p.goto(PAGE); await p.waitForTimeout(900);
      await p.click('#nav button[data-v="guide"]'); await p.waitForTimeout(300);
      const s0 = await strip(p);
      await p.mouse.move(683, 620);
      await p.mouse.wheel(0, 700);
      const gone = await hides(p), s1 = await strip(p);
      check(gone && s1.y > 300, '1366x1024, a real click on a tab, the mouse moved onto the text, then the wheel: the strip hides within 4.5 s', JSON.stringify({afterClick: s0, later: s1}));
      // a mouse resting on the strip still keeps it
      await p.mouse.move(683, 10); await p.waitForTimeout(300);
      await p.mouse.move(683, 24);
      await p.evaluate(() => window.scrollBy(0, 40));
      await p.waitForTimeout(4500);
      const s2 = await strip(p);
      check(!s2.hidden, '1366x1024: with the mouse resting on the strip it stays', JSON.stringify(s2));
      await p.close();
    }
    // keyboard focus on the strip keeps it
    {
      const p = await b.newPage({viewport: {width: 1366, height: 1024}});
      await p.goto(PAGE); await p.waitForTimeout(900);
      let inNav = false;
      for (let k = 0; k < 40 && !inNav; k++) { await p.keyboard.press('Tab'); inNav = await p.evaluate(() => document.getElementById('nav').contains(document.activeElement)); }
      await p.evaluate(() => window.scrollTo(0, 600));
      await p.waitForTimeout(4500);
      const s = await strip(p);
      check(inNav && s.focusIn && s.focusVisible === true && !s.hidden && s.pinned && s.y > 300, '1366x1024, focus moved onto the strip with the Tab key, then a scroll down: the strip is still shown 4.5 s later', JSON.stringify(s));
      await p.close();
    }
  }
  /* "Hide the tab bar while reading" turned off stays off after a reload (skeptic's finding, 2026-11-13). wide_ui.js
     read the setting once, while its file ran, before the core's NS exists, so it looked under COURSE.ns; the
     checkbox writes under NS, which on the preview page is COURSE.ns + '-preview'. There the choice was lost at
     every reload. The key is taken from the page (NS), so the case is the same on the root page. */
  {
    const errs = [];
    const ctx = await b.newContext({viewport: {width: 390, height: 844}, hasTouch: true, isMobile: true});
    const p = await ctx.newPage();
    p.on('pageerror', e => errs.push(e.message));
    await p.goto(PAGE); await p.waitForTimeout(900);
    await p.tap('#nav button[data-v="settings"]'); await p.waitForTimeout(300);
    const on0 = await p.evaluate(() => document.getElementById('xNavHide').checked);
    await p.locator('#xNavHide').scrollIntoViewIfNeeded();
    await p.tap('#xNavHide'); await p.waitForTimeout(200);
    const st = await p.evaluate(() => ({key: NS + ':navAutoHide', v: localStorage.getItem(NS + ':navAutoHide'), checked: document.getElementById('xNavHide').checked}));
    check(on0 && !st.checked && st.v === '0', 'Settings: the tab bar setting starts on, and a tap turns it off and stores "0"', JSON.stringify(st));
    await p.reload(); await p.waitForTimeout(900);
    await p.tap('#nav button[data-v="settings"]'); await p.waitForTimeout(300);
    const after = await p.evaluate(() => ({v: localStorage.getItem(NS + ':navAutoHide'), checked: document.getElementById('xNavHide').checked}));
    check(after.v === '0' && !after.checked, 'after a reload the checkbox is still off', JSON.stringify(after));
    await p.tap('#nav button[data-v="guide"]'); await p.waitForTimeout(300);
    await p.mouse.move(195, 620);
    await p.evaluate(() => window.scrollTo(0, 600));
    await p.waitForTimeout(4500);
    const s = await p.evaluate(() => { const nv = document.getElementById('nav'); return {hidden: nv.classList.contains('xhid'), pinned: nv.classList.contains('xpinned'), y: Math.round(scrollY)}; });
    check(!s.hidden && s.pinned && s.y > 300, 'after a reload with the setting off, a tap on a tab and a scroll down: the strip is still shown 4.5 s later', JSON.stringify(s));
    // turned on again, it is kept on and the strip hides
    await p.tap('#nav button[data-v="settings"]'); await p.waitForTimeout(300);
    await p.locator('#xNavHide').scrollIntoViewIfNeeded();
    await p.tap('#xNavHide'); await p.waitForTimeout(200);
    await p.reload(); await p.waitForTimeout(900);
    await p.tap('#nav button[data-v="guide"]'); await p.waitForTimeout(300);
    await p.mouse.move(195, 620);
    await p.evaluate(() => window.scrollTo(0, 600));
    const gone = await p.waitForFunction(() => document.getElementById('nav').classList.contains('xhid'), null, {timeout: 4500}).then(() => true, () => false);
    const v2 = await p.evaluate(() => localStorage.getItem(NS + ':navAutoHide'));
    check(gone && v2 === '1', 'turned on again and reloaded: "1" is stored and the strip hides within 4.5 s', JSON.stringify({gone, v2}));
    check(!errs.length, 'no page errors around the tab bar setting', errs.join(' | '));
    await ctx.close();
  }
  await b.close();
  console.log((fail ? 'FAIL' : 'PASS') + `: wide_test.js: ${fail ? fail + ' of ' : ''}${n} checks${fail ? ' failed' : ' passed'}`);
  process.exit(fail ? 1 : 0);
})();
