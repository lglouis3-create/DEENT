/* ==========================================================================
   TOPIC HUB IN A BROWSER, PHAR 4346 DEENT (hub_ui.js, hub_data.js)
   Opens the built page (root index.html, else preview/index.html) in Chromium at 390x844 and 1100x900 and checks: every hub topic
   card on Topics has "Study this topic"; the button opens the hub of a Smith, a Sikazwe and a Lam topic with the three steps and
   the Guide text in place; a slide link inside the hub opens the slide viewer; the walkthrough "Listen" button exists; the
   Check and Challenge buttons start a quiz of only that topic's questions of that level; the floating Back returns to the hub;
   "All topics" returns to the list; the Exam/professor filters do not gate the hub; no ids repeat after the hubs were opened
   and the Guides, Reference and Tell apart tabs drawn; no page errors; no sideways scroll at 390 px; show('topics') still
   draws the list; HUB_UI.level follows the tag rule.
     node hub_test.js
   ========================================================================== */
const fs = require('fs'), path = require('path');
const {check, finish} = require('./check_lib');
let chromium; try { ({chromium} = require('playwright')); } catch (e) { console.log('NOT RUN: playwright is not installed'); process.exit(0); }
const ROOT = path.join(__dirname, '..');
const page0 = fs.existsSync(path.join(ROOT, 'index.html')) ? 'index.html' : 'preview/index.html';
const TOPICS3 = [['ey-in', 'Smith'], ['oo-cai', 'Sikazwe'], ['lm-pga', 'Lam']];
(async () => {
  const br = await chromium.launch();
  for (const [w, h] of [[390, 844], [1100, 900]]) {
    console.log(`=== ${w}x${h} (${page0}) ===`);
    const p = await br.newPage({viewport: {width: w, height: h}});
    const errs = []; p.on('pageerror', e => errs.push(e.message));
    p.on('console', m => { if (m.type() === 'error') errs.push(m.text().slice(0, 160)); });
    await p.goto('file://' + path.join(ROOT, page0)); await p.waitForTimeout(1500);
    await p.evaluate(() => show('topics')); await p.waitForTimeout(300);
    const nBtn = await p.evaluate(() => document.querySelectorAll('#v-topics [data-hub-open]').length);
    const nCards = await p.evaluate(() => [...document.querySelectorAll('#v-topics details.topic')].filter(d => HUB_UI.has((d.querySelector('.subrow button[data-t]') || {dataset: {}}).dataset.t)).length);
    check(nBtn > 100 && nBtn === nCards, `every topic card with a hub has a "Study this topic" button (${nBtn})`, nBtn + ' vs ' + nCards);
    check(await p.evaluate(() => HUB_UI.level({tags: ['case']}) === 'challenge' && HUB_UI.level({tags: ['recall']}) === 'check' && HUB_UI.level({}) === 'check'), 'HUB_UI.level follows the tag rule');
    for (const [id, who] of TOPICS3) {
      await p.evaluate(() => show('topics')); await p.waitForTimeout(200);
      // open through the card's own button
      const btn = p.locator(`#v-topics [data-hub-open="${id}"]`).first();
      await btn.evaluate(b => { for (let d = b.closest('details'); d; d = d.parentElement && d.parentElement.closest('details')) d.open = true; });
      await btn.scrollIntoViewIfNeeded(); await btn.click(); await p.waitForTimeout(1200);
      const r = await p.evaluate(id => {
        const hub = document.querySelector('#v-topics .hub'); if (!hub || hub.dataset.hub !== id) return null;
        return {steps: hub.querySelectorAll('.hub-steps button').length, sections: ['learn', 'check', 'challenge'].map(s => !!hub.querySelector('#hub-' + s)),
          guide: (hub.querySelector('.hub-gobj') || {textContent: ''}).textContent.length, walk: !!hub.querySelector('.wkbar [data-wkopen]'),
          slk: hub.querySelectorAll('.slk').length, head: hub.querySelector('.hub-title').textContent, meta: hub.querySelector('.hub-meta').textContent,
          noCodes: !/\bT@\d/.test(hub.textContent), sx: document.documentElement.scrollWidth <= innerWidth};
      }, id);
      check(!!r, `${who} topic ${id}: the hub opens in Topics`);
      if (!r) continue;
      check(r.steps === 3 && r.sections.every(Boolean), `${id}: the 3-step bar and the Learn, Check and Challenge sections`);
      check(r.guide > 300, `${id}: the Guide text is in place (${r.guide} characters)`);
      check(r.walk, `${id}: the walkthrough Listen button is there`);
      check(/Exam 3/.test(r.meta) && r.head.length > 5, `${id}: header names the exam (${r.meta.slice(0, 80)})`);
      check(r.noCodes, `${id}: no transcript codes on screen`);
      if (w === 390) check(r.sx, `${id}: no sideways scroll at 390 px`);
      // a slide link inside the hub opens the slide viewer
      if (r.slk) {
        const link = p.locator('#v-topics .hub .slk').first();
        await link.scrollIntoViewIfNeeded(); await link.click(); await p.waitForTimeout(700);
        const open = await p.evaluate(() => !!document.querySelector('[role=dialog]:not(figure), dialog[open], .sv-dlg, #slideview'));
        check(open, `${id}: a slide link in the hub opens the slide viewer`);
        await p.keyboard.press('Escape'); await p.waitForTimeout(300);
      } else console.log(`  note: ${id}: no slide links in the opened guide piece`);
      // Check / Challenge start a quiz of only this topic's questions of that level
      for (const lv of ['check', 'challenge']) {
        const want = await p.evaluate(([id, lv]) => HUB_UI.questions(id, lv).length, [id, lv]);
        const has = await p.evaluate(lv => !!document.querySelector(`#v-topics .hub [data-hub-start="${lv}"]`), lv);
        check(has === (want > 0), `${id}: the ${lv} button is there exactly when the topic has ${lv} questions (${want})`);
        if (!has) continue;
        await p.locator(`#v-topics .hub [data-hub-start="${lv}"]`).scrollIntoViewIfNeeded();
        await p.locator(`#v-topics .hub [data-hub-start="${lv}"]`).click(); await p.waitForTimeout(500);
        const q = await p.evaluate(([id, lv]) => ({view: VIEW, n: Q.pool.length, only: Q.pool.every(x => x.topic === id && HUB_UI.level(x) === lv)}), [id, lv]);
        check(q.view === 'quiz' && q.n === want && q.only, `${id}: ${lv} starts a quiz of exactly its ${want} questions`, JSON.stringify(q));
        await p.locator('#backbtn').click(); await p.waitForTimeout(600);
        check(await p.evaluate(id => VIEW === 'topics' && !!document.querySelector(`#v-topics .hub[data-hub="${id}"]`), id), `${id}: Back from the ${lv} quiz returns to the hub`);
      }
      await p.locator('#v-topics [data-hub-back]').click(); await p.waitForTimeout(500);
      check(await p.evaluate(() => !document.querySelector('#v-topics .hub') && document.querySelectorAll('#v-topics details.topic').length > 20), `${id}: "All topics" returns to the list`);
    }
    // the filters do not gate the hub
    const fl = await p.evaluate(() => { FILTER.prof = 'Patel'; show('topics'); const ok = HUB_UI.open('ey-in'); const n = document.querySelector('#v-topics .hub .hub-meta').textContent;
      const all = QUESTIONS.filter(q => q.topic === 'ey-in').length; FILTER.prof = 'all'; return {ok, n, all}; });
    check(fl.ok && fl.n.includes(fl.all + ' questions'), 'with the professor filter on Patel the hub of a Smith topic still opens with all its questions', JSON.stringify(fl));
    // show('topics') draws the list; the API is there
    await p.evaluate(() => show('topics')); await p.waitForTimeout(300);
    check(await p.evaluate(() => !document.querySelector('#v-topics .hub') && !!document.querySelector('#v-topics details.topic') && typeof HUB_UI.cardFor('ey-in').querySelector('button') === 'object' && HUB_UI.has('ey-in') && !HUB_UI.has('nope')), 'show("topics") draws the list; has() and cardFor() work');
    // unique ids after the hubs were opened and the reading tabs drawn
    await p.evaluate(() => { HUB_UI.open('ey-in'); }); await p.waitForTimeout(800);
    await p.evaluate(() => { show('guide'); }); await p.waitForTimeout(1500);
    await p.evaluate(() => { show('ref'); }); await p.waitForTimeout(800);
    await p.evaluate(() => { show('tell'); }); await p.waitForTimeout(800);
    await p.evaluate(() => { HUB_UI.open('ey-in'); }); await p.waitForTimeout(800);
    const dup = await p.evaluate(() => { const seen = {}, d = []; document.querySelectorAll('[id]').forEach(e => { if (seen[e.id]) d.push(e.id); seen[e.id] = 1; }); return d; });
    check(!dup.length, 'no id is used twice with the hub open and the Guides, Reference and Tell apart tabs drawn', dup.slice(0, 8).join(', '));
    check(!errs.length, 'no page errors or console errors', errs.slice(0, 3).join(' | '));
    await p.close();
  }
  await br.close();
  finish('hub_test.js');
})();
