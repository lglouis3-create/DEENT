/* dz_test.js: browser checks of the Diseases tab (dz_ui.js) on the built page.
   NODE_PATH=$(npm root -g) node dz_test.js            (reads ../preview/index.html; DRILL_PAGE overrides)
   - every card opens at 390 px and 1280 px with no page error and no sideways scroll;
   - a drug panel opens and closes; a practice patient can be answered; search finds a drug;
   - Practise starts the card's questions and Back returns to the Diseases tab in one press;
   - "Watch how it works" puts ONE entry on the Back stack, and Back returns straight to the
     Diseases tab (Louis, 2026-11-13: it went to Guides first);
   - the tab's colours are the same in the device's dark mode (the page has no dark theme). */
const path = require('path');
const {chromium} = require('playwright');
const PAGE = 'file://' + path.resolve(__dirname, process.env.DRILL_PAGE || '../preview/index.html');
let fail = 0, n = 0;
const check = (ok, label, detail) => { n++; if (!ok) fail++; console.log((ok ? '  ok    ' : '  FAIL  ') + label + (ok || !detail ? '' : '  — ' + String(detail).slice(0, 400))); };

(async () => {
  const b = await chromium.launch();
  for (const w of [390, 1280]) {
    const errs = [];
    const p = await b.newPage({viewport: {width: w, height: 844}});
    p.on('pageerror', e => errs.push(e.message));
    await p.goto(PAGE); await p.waitForTimeout(1200);
    await p.click('#nav button[data-v="dz"]'); await p.waitForTimeout(200);
    const over = async () => p.evaluate(() => document.documentElement.scrollWidth - innerWidth);
    const openAll = async () => { if (!(await p.$eval('#v-dz [data-dz="openall"]', x => /Close all/.test(x.textContent)))) await p.click('#v-dz [data-dz="openall"]'); };
    const cards = await p.$$eval('#v-dz .dzpicker button', bs => bs.map(x => x.dataset.card));
    check(cards.length >= 20, `${w} px: the picker lists ${cards.length} conditions`);
    const wide = [];
    for (const c of cards) {
      await p.click('#v-dz .dzpicker button[data-card="' + c + '"]');
      await openAll();
      if (await over() > 0) wide.push(c);
    }
    check(!wide.length, `${w} px: no card scrolls sideways with every step open`, wide.join(', '));

    // drug panel, practice patient, search
    await p.click('#v-dz .dzpicker button[data-card="psoriasis"]'); await openAll();
    await p.locator('#v-dz .dzcard .dzdrug').first().click();
    check(await p.$eval('#v-dz .dzdlg', d => d.open), `${w} px: a drug name opens its panel`);
    await p.click('#v-dz .dzdlg .x');
    check(!(await p.$eval('#v-dz .dzdlg', d => d.open)), `${w} px: Close closes the panel`);
    await p.locator('#v-dz .dzopt').first().click();
    check(await p.$('#v-dz .dzans') !== null, `${w} px: answering a practice patient shows the reason`);
    await p.fill('#dzq', 'methotrexate'); await p.waitForTimeout(120);
    check(await p.$$eval('#v-dz .dzres button[data-hit="drug"]', x => x.length) >= 1, `${w} px: search finds a drug`);
    await p.fill('#dzq', '');

    // "Watch how it works": one Back entry, and Back returns straight to Diseases
    const figs = await p.$$('#v-dz .dzcard .dzfig');
    check(figs.length >= 1, `${w} px: the psoriasis card has a "Watch how it works" button`);
    if (figs.length) {
      await figs[0].scrollIntoViewIfNeeded(); await figs[0].click(); await p.waitForTimeout(400);
      const s1 = await p.evaluate(() => ({view: VIEW, ret: RET.length, back: !!document.getElementById('backbtn')}));
      check(s1.view !== 'dz', `${w} px: "Watch how it works" opens another tab (${s1.view})`);
      check(s1.ret === 1, `${w} px: it puts one entry on the Back stack`, 'entries: ' + s1.ret);
      check(s1.back, `${w} px: the Back button is shown`);
      if (s1.back) {
        await p.click('#backbtn'); await p.waitForTimeout(300);
        const s2 = await p.evaluate(() => ({view: VIEW, ret: RET.length, shown: !document.getElementById('v-dz').classList.contains('hide'), back: !!document.getElementById('backbtn')}));
        check(s2.view === 'dz' && s2.shown, `${w} px: one press of Back returns to the Diseases tab`, JSON.stringify(s2));
        check(s2.ret === 0 && !s2.back, `${w} px: no Back button is left over`, JSON.stringify(s2));
      }
    }
    // every such button on every card: one entry each
    const multi = [];
    for (const c of cards) {
      await p.click('#nav button[data-v="dz"]');
      await p.click('#v-dz .dzpicker button[data-card="' + c + '"]');
      await openAll();
      const count = await p.$$eval('#v-dz .dzcard .dzfig', x => x.length);
      for (let i = 0; i < count; i++) {
        await p.click('#nav button[data-v="dz"]');
        const f = p.locator('#v-dz .dzcard .dzfig').nth(i); await f.scrollIntoViewIfNeeded(); await f.click(); await p.waitForTimeout(150);
        const r = await p.evaluate(() => RET.length);
        if (r !== 1) multi.push(c + ' #' + (i + 1) + ': ' + r);
        await p.evaluate(() => { while (RET.length) RET.pop(); backBtn(); });
      }
    }
    check(!multi.length, `${w} px: every "Watch how it works" button on every card puts one entry on the Back stack`, multi.join('; '));

    // Practise: Back returns to Diseases in one press
    await p.click('#nav button[data-v="dz"]'); await p.click('#v-dz .dzpicker button[data-card="lice"]');
    const pr = await p.$('#v-dz [data-dz="practise"]');
    check(!!pr, `${w} px: the lice card has a Practise button`);
    if (pr) {
      await pr.scrollIntoViewIfNeeded(); await pr.click(); await p.waitForTimeout(300);
      const s = await p.evaluate(() => ({view: VIEW, ret: RET.length}));
      check(s.view === 'quiz' && s.ret === 1, `${w} px: Practise starts the questions with one Back entry`, JSON.stringify(s));
      await p.click('#backbtn'); await p.waitForTimeout(300);
      check(await p.evaluate(() => VIEW) === 'dz', `${w} px: Back returns from the questions to the Diseases tab`);
    }
    check(!errs.length, `${w} px: no page errors`, errs.join(' | '));
    await p.close();
  }
  // the device's dark mode does not change the tab's colours
  const col = async scheme => {
    const p = await b.newPage({viewport: {width: 390, height: 844}, colorScheme: scheme});
    await p.goto(PAGE); await p.waitForTimeout(900);
    await p.click('#nav button[data-v="dz"]'); await p.click('#v-dz .dzpicker button[data-card="psoriasis"]'); await p.click('#v-dz [data-dz="openall"]');
    await p.locator('#v-dz .dzopt').first().click();
    const r = await p.evaluate(() => { const g = s => { const e = document.querySelector(s); return e ? getComputedStyle(e).backgroundColor + '/' + getComputedStyle(e).color : 'none'; };
      return [g('#v-dz .dztag.sm'), g('#v-dz .dztag.pa'), g('#v-dz .dzopt.good'), g('#v-dz .dzwarn')].join(' | '); });
    await p.close(); return r;
  };
  const light = await col('light'), dark = await col('dark');
  check(light === dark, 'the tab has the same colours when the device is in dark mode', 'light: ' + light + '  dark: ' + dark);
  await b.close();
  console.log((fail ? 'FAIL' : 'PASS') + `: dz_test.js: ${fail ? fail + ' of ' : ''}${n} checks${fail ? ' failed' : ' passed'}`);
  process.exit(fail ? 1 : 0);
})();
