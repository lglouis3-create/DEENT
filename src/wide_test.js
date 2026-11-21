/* wide_test.js: the page fills and uses a wide window (wide_ui.js; Louis, 2026-11-12: a widened window
   "leads to white screen area").
   NODE_PATH=$(npm root -g) node wide_test.js          (reads ../preview/index.html; DRILL_PAGE overrides)
   - at iPad and Mac window sizes, on every tab: no sideways scroll, the header and the tab strip span the window,
     and the content column takes at least 90% of the window up to 1,728 px (at least 60% at 2,560 px);
   - a window widened after the page has loaded is filled the same way; a phone-width window is unchanged;
   - Settings has "Refit the page to the window": on a desktop browser it leaves the viewport meta as it was and
     causes no error, and by itself nothing rewrites the meta there;
   - the silent fit for a page the browser left at an old, narrower width (iPad, Chrome; emulated in Chromium by
     overriding the widths the page reads): no bar or popup ever exists; the numeric viewport width is written and
     put back when the layout does not follow, and kept when it does; the root width is set and later removed;
     nothing happens on a desktop, on a touch device that is not Apple's, when zoomed, hidden, typing, or when the
     widths agree; the limits per visit hold;
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
      await p.click('#nav button[data-v="dz"]'); await p.click('#v-dz .dzexam [data-exam="0"]'); await p.click('#v-dz .dzpicker button[data-card="psoriasis"]');
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
  /* The silent fit (wide_ui.js, "a page the browser left at an old, narrower width"). Louis, 2026-11-14: on the
     iPad the blank area is still there when the window changes size, and the Reload bar "is annoying omit it, also
     doesn't work". Chromium does not have the fault, so the stale state is emulated: an iPad's user agent and touch
     points, and the widths the page reads (innerWidth, visualViewport.width and scale, the root's clientWidth)
     overridden through window.__emu. A desktop Chromium ignores the viewport meta, so a numeric width written there
     does not change the layout: that is the "layer 1 did not help" case; `follow` makes clientWidth report the
     meta's number, the "layer 1 helped" case. None of this shows what the device does. */
  {
    const IPAD_UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/142.0.0.0 Mobile/15E148 Safari/604.1';
    const EMU = touch => {
      window.__emu = {touch, w: 0, vvw: 0, scale: 0, follow: false};
      window.__notice = false;
      new MutationObserver(() => { if (document.getElementById('xFitNotice')) window.__notice = true; }).observe(document, {childList: true, subtree: true});
      Object.defineProperty(navigator, 'maxTouchPoints', {get: () => window.__emu.touch});
      const own = (o, k) => { while (o) { const d = Object.getOwnPropertyDescriptor(o, k); if (d) return d; o = Object.getPrototypeOf(o); } };
      const iw = own(window, 'innerWidth');
      Object.defineProperty(window, 'innerWidth', {get(){ return window.__emu.w || iw.get.call(window); }, configurable: true});
      const VP = VisualViewport.prototype, vw = own(VP, 'width'), vs = own(VP, 'scale');
      Object.defineProperty(VP, 'width', {get(){ const e = window.__emu; return e.vvw || (e.w ? e.w / (e.scale || 1) : vw.get.call(this)); }, configurable: true});
      Object.defineProperty(VP, 'scale', {get(){ return window.__emu.scale || vs.get.call(this); }, configurable: true});
      const cw = own(Element.prototype, 'clientWidth');
      Object.defineProperty(Element.prototype, 'clientWidth', {get(){
        if (this === document.documentElement && window.__emu.follow) {
          const m = document.querySelector('meta[name="viewport"]'), x = m && /(?:^|[\s,])width=(\d+)/.exec(m.getAttribute('content') || '');
          if (x) return +x[1];
        }
        return cw.get.call(this);
      }, configurable: true});
    };
    const open = async (touch, ua, vp) => {
      const ctx = await b.newContext({viewport: vp || {width: 746, height: 1000}, hasTouch: touch > 0, userAgent: ua});
      await ctx.addInitScript(EMU, touch);
      const p = await ctx.newPage(); const errs = [];
      p.on('pageerror', e => errs.push(e.message));
      await p.goto(PAGE); await p.waitForTimeout(900);
      // every value the viewport meta is given from here on
      const orig = await p.evaluate(() => { window.__log = []; const m = document.querySelector('meta[name="viewport"]');
        new MutationObserver(() => window.__log.push(m.getAttribute('content'))).observe(m, {attributes: true}); return m.getAttribute('content'); });
      return {ctx, p, errs, orig};
    };
    const state = p => p.evaluate(() => { const c = document.getElementById('xfitcss'), m = document.querySelector('meta[name="viewport"]'), r = e => e ? Math.round(e.getBoundingClientRect().width) : 0;
      return {css: c ? c.textContent : null, meta: m.getAttribute('content'), log: window.__log.slice(), notice: window.__notice || !!document.getElementById('xFitNotice'),
        html: r(document.documentElement), header: r(document.querySelector('header')), nav: r(document.getElementById('nav'))}; });
    const set = (p, o, resize) => p.evaluate(([o, resize]) => { Object.assign(window.__emu, o); if (resize) window.dispatchEvent(new Event('resize')); }, [o, resize !== false]);
    const rootIs = (p, w, ms) => p.waitForFunction(w => { const c = document.getElementById('xfitcss'); return w ? !!c && c.textContent.includes('width:' + w + 'px') : !c; }, w, {timeout: ms || 5000}).then(() => true, () => false);
    const NUM = /(?:^|[\s,])width=\d/;
    const numeric = log => log.filter(v => NUM.test(v));

    // 1. the stale state, and the numeric viewport width does not change the layout
    {
      const {ctx, p, errs, orig} = await open(5, IPAD_UA);
      let s = await state(p);
      check(!s.log.length && s.css === null, 'emulated iPad, widths agree after loading: nothing is written', JSON.stringify(s));
      await set(p, {w: 984});
      const on = await rootIs(p, 984); await p.waitForTimeout(500); s = await state(p);
      check(s.log.some(v => /interactive-widget=resizes-content/.test(v)), 'stale by 238 px: the interactive-widget value is written first (layer 0)', s.log.join(' | '));
      check(s.log.some(v => /(?:^|[\s,])width=984(?:,|$)/.test(v) && /initial-scale=1(?:,|$)/.test(v) && /viewport-fit=cover/.test(v)), 'then the numeric width of the window with initial-scale=1, the other values kept (layer 1)', s.log.join(' | '));
      check(!NUM.test(s.meta) && /width=device-width/.test(s.meta) && !/interactive-widget/.test(s.meta), 'the layout did not follow: the numeric width is taken back', s.meta);
      check(on && s.html === 984 && s.header === 984 && s.nav === 984, 'and the root is given the window width: the header and the tab strip span 984 px (layer 2)', JSON.stringify({on, html: s.html, header: s.header, nav: s.nav, css: s.css}));
      check(/^@media screen\{/.test(s.css || ''), 'the root width is a screen-only rule', s.css);
      await p.click('#nav button[data-v="settings"]'); await p.click('details.xfit summary');
      const line = await p.$eval('#xFitNow', e => e.textContent);
      check(/page width set to 984 px/.test(line), 'the Settings line says the page width is set', line);
      await p.click('#nav button[data-v="topics"]');
      // the widths agree again: everything is removed
      await set(p, {w: 0});
      const off = await rootIs(p, 0); s = await state(p);
      check(off && s.meta === orig && s.html === 746, 'when the widths agree again the root width is removed and the meta is as it was', JSON.stringify({off, meta: s.meta, html: s.html}));
      // no event at all: the 3-second check finds it
      await set(p, {w: 1100}, false);
      check(await rootIs(p, 1100), 'with no resize event, the 3-second check finds the stale width'); await p.waitForTimeout(500);
      // the window narrows while the width is set: it follows
      await set(p, {w: 900});
      const narrowed = await rootIs(p, 900); await p.waitForTimeout(500); s = await state(p);
      check(narrowed && s.html === 900, 'the window narrows while the root width is set: the width follows it', JSON.stringify({narrowed, html: s.html, css: s.css}));
      check(numeric(s.log).length === 2 && !s.log.some(v => /width=900/.test(v)), 'the numeric viewport width is tried twice a visit, not a third time', numeric(s.log).join(' | '));
      check(s.log.filter(v => /interactive-widget/.test(v)).length === 3, 'the interactive-widget value is written three times a visit at most', s.log.filter(v => /interactive-widget/.test(v)).length + ' writes');
      // a focused text field: nothing changes until it loses the focus
      await p.evaluate(() => { const i = document.createElement('input'); i.type = 'text'; i.id = 'xEmuField'; document.body.appendChild(i); i.focus({preventScroll: true}); });
      await set(p, {w: 1000}); await p.waitForTimeout(3600); s = await state(p);
      check(/width:900px/.test(s.css || ''), 'while a text field has the focus nothing is changed', s.css);
      await p.evaluate(() => { const i = document.getElementById('xEmuField'); i.blur(); i.remove(); window.dispatchEvent(new Event('resize')); });
      check(await rootIs(p, 1000), 'after the field loses the focus the width follows'); await p.waitForTimeout(500);
      // a hidden page: the same
      await p.evaluate(() => Object.defineProperty(document, 'hidden', {get: () => true, configurable: true}));
      await set(p, {w: 1050}); await p.waitForTimeout(3600); s = await state(p);
      check(/width:1000px/.test(s.css || ''), 'while the page is hidden nothing is changed', s.css);
      await p.evaluate(() => { delete document.hidden; window.dispatchEvent(new Event('resize')); });
      check(await rootIs(p, 1050), 'shown again, the width follows'); await p.waitForTimeout(500);
      // 12 attempts a visit (984, 1100, 900, 1000, 1050 so far), then nothing more
      let ok = true;
      for (const w of [1060, 1070, 1080, 1090, 1110, 1120, 1130]) { await set(p, {w}); ok = (await rootIs(p, w)) && ok; await p.waitForTimeout(500); }
      check(ok, 'attempts 6 to 12 of the visit are made');
      const before = (await state(p)).log.length;
      await set(p, {w: 1200}); await p.waitForTimeout(4500); s = await state(p);
      check(s.css === null && s.meta === orig && s.html === 746, 'after 12 attempts the old width is removed and no 13th is made', JSON.stringify({css: s.css, meta: s.meta, html: s.html}));
      await set(p, {w: 1300}); await p.waitForTimeout(4500); s = await state(p);
      check(s.css === null && s.meta === orig && s.log.length <= before + 1, 'and nothing more is written for the rest of the visit', JSON.stringify({css: s.css, meta: s.meta, writes: s.log.length - before}));
      // the Settings button starts the limits again
      await p.click('#nav button[data-v="settings"]'); await p.evaluate(() => { document.querySelector('details.xfit').open = true; }); await p.click('#xRefit');
      check(await rootIs(p, 1300), 'the Settings button tries once more');
      s = await state(p);
      check(!s.notice, 'no bar #xFitNotice ever existed (stale layout, 13 width changes)');
      check(!errs.length, 'no page errors in the emulated stale layout', errs.join(' | '));
      await ctx.close();
    }
    // 2. the layout follows the numeric viewport width: it is kept, and no root width is set
    {
      const {ctx, p, errs, orig} = await open(5, IPAD_UA);
      await set(p, {w: 984, follow: true}); await p.waitForTimeout(1800);
      let s = await state(p);
      check(/(?:^|[\s,])width=984(?:,|$)/.test(s.meta) && /initial-scale=1(?:,|$)/.test(s.meta) && s.css === null, 'the layout follows the numeric viewport width: it is kept and the root is left alone', JSON.stringify({meta: s.meta, css: s.css}));
      await p.waitForTimeout(3600); s = await state(p);
      check(numeric(s.log).length === 1 && /width=984/.test(s.meta), 'kept, it is not written again while the window stays', s.log.join(' | '));
      await set(p, {w: 0}); await p.waitForTimeout(1500); s = await state(p);
      check(s.meta === orig && s.css === null, 'the window changes: the meta is as it was again', s.meta);
      check(!s.notice && !errs.length, 'no bar and no page errors in that case', errs.join(' | '));
      await ctx.close();
    }
    // 3. weak evidence (the inner width and the visible viewport disagree): the numeric width twice, never the root
    {
      const {ctx, p, errs, orig} = await open(5, IPAD_UA);
      await set(p, {w: 984, vvw: 746}); await p.waitForTimeout(10500);
      const s = await state(p);
      check(numeric(s.log).length === 2 && s.css === null && s.meta === orig && !s.notice, 'only the inner width is larger: the numeric width is tried twice and taken back, the root is never touched', JSON.stringify({numeric: numeric(s.log).length, css: s.css, meta: s.meta}));
      check(!errs.length, 'no page errors on weak evidence', errs.join(' | '));
      await ctx.close();
    }
    // 4. nothing happens: zoomed, widths agreeing, a desktop, a touch device that is not Apple's
    {
      const {ctx, p, errs, orig} = await open(5, IPAD_UA, {width: 1376, height: 1032});
      await set(p, {w: 1700, scale: 2}); await p.waitForTimeout(3800);
      let s = await state(p);
      check(!s.log.length && s.css === null, 'pinch-zoomed (scale 2): nothing is written', JSON.stringify(s.log));
      await set(p, {w: 0, scale: 0});
      await p.setViewportSize({width: 1100, height: 900}); await p.waitForTimeout(3800); s = await state(p);
      check(!s.log.length && s.css === null && !s.notice, 'a touch window whose widths agree is left alone', JSON.stringify(s.log));
      await set(p, {w: 1400}); const live = await rootIs(p, 1400);
      check(live, '(the same page does act once the widths disagree, so the two cases above were live)');
      check(!errs.length, 'no page errors in the zoomed and agreeing cases', errs.join(' | '));
      await ctx.close();
      for (const [label, touch, ua] of [['a desktop Mac (no touch points)', 0, IPAD_UA.replace(/CriOS\S+ Mobile\S+ /, 'Chrome/142.0.0.0 ')], ['a touch device that is not Apple\'s', 5, undefined]]) {
        const d = await open(touch, ua);
        await set(d.p, {w: 984}); await d.p.waitForTimeout(3800);
        await d.p.click('#nav button[data-v="settings"]'); await d.p.click('details.xfit summary'); await d.p.click('#xRefit'); await d.p.waitForTimeout(1500);
        s = await state(d.p);
        check(!s.log.length && s.css === null && s.meta === d.orig && !s.notice && !d.errs.length, label + ' with the same widths: nothing is written, by itself or from the Settings button', JSON.stringify({log: s.log, css: s.css, errs: d.errs}));
        await d.ctx.close();
      }
    }
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
      await p.click('#nav button[data-v="ref"]'); await p.waitForTimeout(300);
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
