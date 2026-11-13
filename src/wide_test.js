/* wide_test.js: the page fills and uses a wide window (wide_ui.js; Louis, 2026-11-12: a widened window
   "leads to white screen area").
   NODE_PATH=$(npm root -g) node wide_test.js          (reads ../preview/index.html; DRILL_PAGE overrides)
   - at iPad and Mac window sizes, on every tab: no sideways scroll, the header and the tab strip span the window,
     and the content column takes at least 90% of the window up to 1,728 px (at least 60% at 2,560 px);
   - a window widened after the page has loaded is filled the same way; a phone-width window is unchanged;
   - Settings has "Refit the page to the window": it leaves the viewport meta as it was, causes no error, and by
     itself the refit never runs on a desktop browser. */
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
  await b.close();
  console.log((fail ? 'FAIL' : 'PASS') + `: wide_test.js: ${fail ? fail + ' of ' : ''}${n} checks${fail ? ' failed' : ' passed'}`);
  process.exit(fail ? 1 : 0);
})();
