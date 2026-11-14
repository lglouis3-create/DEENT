/* ftu_test.js: the FTU tab (ftu_ui.js; Louis, 2026-11-14).
   NODE_PATH=$(npm root -g) node ftu_test.js          (reads ../preview/index.html; DRILL_PAGE overrides)
   - the chart numbers equal Dr. Patel's slide 11 chart, typed here independently of the page;
   - 400 generated questions: every key is recomputed here from that chart (FTU x 0.5 x applications x days; tube = smallest of 15, 30, 45, 60, 80, 100 >= grams);
   - the two slide 13 examples come out as 35 g -> 45 g and 98 g -> 100 g;
   - typing a right answer, a wrong one and text with units ("35 g") is graded as it should be; an empty answer is not graded;
   - the record counts right and missed per skill and per area, survives a reload, and Reset clears it; nothing is written before an answer;
   - the diagram has a shape for every area, the asked area is outlined, and a missed area turns red;
   - at 390 px the page does not scroll sideways; no page errors. */
const path = require('path');
const {chromium} = require('playwright');
const PAGE = 'file://' + path.resolve(__dirname, process.env.DRILL_PAGE || '../preview/index.html');
let fail = 0, n = 0;
const check = (ok, label, detail) => { n++; if (!ok) fail++; console.log((ok ? '  ok    ' : '  FAIL  ') + label + (ok || !detail ? '' : '  — ' + String(detail).slice(0, 500))); };
// Dermatitis slide 11 (adult chart), typed independently of the page
const CHART = {scalp: 3, face: 2.5, hand: 1, arm: 4, elbows: 1, soles: 1.5, foot: 2, leg: 8, butt: 4, knees: 1, trunk: 14, trunk1: 7};
const TUBES = [15, 30, 45, 60, 80, 100];

(async () => {
  const b = await chromium.launch();
  for (const [w, h, tag] of [[390, 844, 'phone'], [1376, 1032, 'ipad']]) {
    const errs = [];
    const p = await b.newPage({viewport: {width: w, height: h}});
    p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
    await p.goto(PAGE); await p.waitForTimeout(1000);
    const keyCount = () => p.evaluate(() => Object.keys(localStorage).filter(k => /^phar4346-ftu/.test(k)).length);
    check(!!(await p.$('#nav button[data-v="ftu"]')), `${tag}: the nav has an FTU tab`);
    check((await keyCount()) === 0, `${tag}: nothing is stored before an answer`);
    await p.click('#nav button[data-v="ftu"]'); await p.waitForTimeout(300);
    check(await p.evaluate(() => VIEW === 'ftu' && !document.getElementById('v-ftu').classList.contains('hide')), `${tag}: the tab opens`);
    check((await keyCount()) === 0, `${tag}: opening the tab stores nothing`);

    // chart numbers
    const chart = await p.evaluate(() => Object.fromEntries(FTU_UI.regions.map(r => [r.id, r.ftu])));
    check(JSON.stringify(chart) === JSON.stringify(CHART), `${tag}: the chart equals slide 11`, JSON.stringify(chart));
    check(JSON.stringify(await p.evaluate(() => FTU_UI.tubes)) === JSON.stringify(TUBES), `${tag}: tubes are 15, 30, 45, 60, 80, 100 g`);

    // keys recomputed from the chart
    const qs = await p.evaluate(() => { const o = []; for (let i = 0; i < 100; i++) for (const k of ['region', 'sum', 'grams', 'apply', 'tube']) { const q = FTU_UI.make(k); o.push({skill: q.skill, regs: q.regs, ans: q.ans, stem: q.stem.replace(/<[^>]+>/g, ''), work: q.work.replace(/<[^>]+>/g, '')}); } return o; });
    let bad = [];
    for (const q of qs) {
      let exp;
      const ids = q.regs;
      if (q.skill === 'region') exp = CHART[ids[0]];
      else if (q.skill === 'sum') exp = CHART[ids[0]] + CHART[ids[1]];
      else if (q.skill === 'grams') exp = CHART[ids[0]] * 0.5;
      else {
        const m = q.stem.match(/applied (once|twice) daily for (one|two) weeks?/);
        const g = CHART[ids[0]] * 0.5 * (m[1] === 'once' ? 1 : 2) * (m[2] === 'one' ? 7 : 14);
        exp = q.skill === 'apply' ? g : TUBES.find(t => t >= g);
        if (g > 100) bad.push('over 100 g: ' + q.stem);
      }
      if (Math.abs(exp - q.ans) > 1e-9) bad.push(`${q.skill} ${q.stem} key ${q.ans} expected ${exp}`);
      if (!q.work.includes(String(q.ans).replace(/\.0+$/, ''))) bad.push('working lacks the answer: ' + q.work);
    }
    check(!bad.length, `${tag}: ${qs.length} generated keys equal the recomputed value and the working shows it`, bad.slice(0, 3).join(' | '));
    const sk = new Set(qs.map(q => q.skill));
    check(sk.size === 5, `${tag}: all five skills generate`, [...sk].join());
    const ex = await p.evaluate(() => { const o = {}; for (let i = 0; i < 400 && Object.keys(o).length < 2; i++) { const q = FTU_UI.make('tube'); const m = q.stem.replace(/<[^>]+>/g, ''); if (/face and neck.*twice daily for two weeks/.test(m)) o.face = [q.ans, q.work]; if (/one side of the trunk.*twice daily for two weeks/.test(m)) o.trunk = [q.ans, q.work]; } return o; });
    check(ex.face && ex.face[0] === 45 && /35 g/.test(ex.face[1]), `${tag}: slide 13 face and neck: 35 g, prescribe 45 g`, JSON.stringify(ex.face));
    check(ex.trunk && ex.trunk[0] === 100 && /98 g/.test(ex.trunk[1]), `${tag}: slide 13 one side of the trunk: 98 g, prescribe 100 g`, JSON.stringify(ex.trunk));

    // grading, typed answers
    await p.click('[data-mode="region"]'); await p.waitForTimeout(150);
    const area = async () => p.evaluate(() => FTU_UI.state.q.regs[0]);
    const diag = await p.$$eval('.ftusvg .ftush', xs => xs.map(x => x.dataset.r.split(' ')).flat());
    check(Object.keys(CHART).every(k => diag.includes(k)), `${tag}: the diagram has a shape for every area`, JSON.stringify(Object.keys(CHART).filter(k => !diag.includes(k))));
    await p.click('button.ftuprim'); await p.waitForTimeout(100);
    check(await p.evaluate(() => !FTU_UI.state.done), `${tag}: an empty answer is not graded`);
    const a1 = await area();
    check(await p.evaluate(() => document.querySelectorAll('.ftusvg .ftush.on').length > 0), `${tag}: the asked area is outlined`);
    await p.fill('#ftuin', CHART[a1] + ' FTU'); await p.click('button.ftuprim'); await p.waitForTimeout(150);
    check(await p.evaluate(() => FTU_UI.state.done && FTU_UI.state.last.right && /Right\./.test(document.querySelector('.ftufb').textContent)), `${tag}: a right answer with a unit is accepted`);
    check((await keyCount()) === 1, `${tag}: the first answer writes the one key`);
    await p.click('[data-act="next"]'); await p.waitForTimeout(150);
    const a2 = await area();
    await p.fill('#ftuin', String(CHART[a2] + 1)); await p.click('button.ftuprim'); await p.waitForTimeout(150);
    check(await p.evaluate(() => FTU_UI.state.done && !FTU_UI.state.last.right && /Not quite/.test(document.querySelector('.ftufb').textContent)), `${tag}: a wrong answer is marked wrong and the working is shown`);
    const rec = await p.evaluate(() => JSON.parse(localStorage.getItem('phar4346-ftu:v1')));
    check(rec.skill.region && rec.skill.region.r === 1 && rec.skill.region.w === 1, `${tag}: the record counts one right and one missed for the skill`, JSON.stringify(rec.skill));
    check(rec.reg[a2] && rec.reg[a2].w >= 1 && rec.reg[a1] && rec.reg[a1].r >= 1, `${tag}: and for each area`, JSON.stringify(rec.reg));
    await p.click('[data-act="next"]'); await p.waitForTimeout(100);
    check(await p.evaluate(() => document.querySelectorAll('.ftusvg .ftush.r, .ftusvg .ftush.g, .ftusvg .ftush.a').length > 0 && /By area/.test(document.querySelector('#v-ftu').textContent)), `${tag}: the diagram colors and the table show the record`);
    // reload keeps it
    await p.reload(); await p.waitForTimeout(900); await p.click('#nav button[data-v="ftu"]'); await p.waitForTimeout(250);
    const kept = await p.evaluate(() => FTU_UI.state.stats.skill.region);
    check(kept && kept.r === 1 && kept.w === 1, `${tag}: the record survives a reload`, JSON.stringify(kept));
    // decimals and misses mode
    await p.click('[data-mode="miss"]'); await p.waitForTimeout(150);
    check(await p.evaluate(() => !!FTU_UI.state.q), `${tag}: "My misses" gives a question`);
    check(await p.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${tag}: no sideways scroll`);
    p.once('dialog', d => d.accept());
    await p.click('[data-act="reset"]'); await p.waitForTimeout(200);
    check(await p.evaluate(() => JSON.stringify(FTU_UI.state.stats) === JSON.stringify({v: 1, skill: {}, reg: {}})), `${tag}: Reset clears the record`);
    check(!errs.length, `${tag}: no page errors`, errs.join(' | '));
    await p.close();
  }
  await b.close();
  console.log((fail ? 'FAIL' : 'PASS') + ': ftu_test.js: ' + (fail ? fail + ' of ' + n + ' checks failed' : n + ' checks passed'));
  process.exit(fail ? 1 : 0);
})().catch(e => { console.log('FAIL: ftu_test.js: the test stopped: ' + e.message); process.exit(1); });
