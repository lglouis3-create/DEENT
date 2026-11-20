/* The starred-questions card on Topics (option C, Louis 2026-11-18): exam chips, professor chips, one Start.
   Checks the counts against the stars, that Exam 2 also takes the Exam 1 stars and that a started set opens.
   the chosen stars, and that choices are not stored. NODE_PATH=$(npm root -g) node likely_card_test.js */
const {chromium} = require('playwright');
const PAGE = 'file://' + require('path').resolve(__dirname, '../preview/index.html');
let fails = 0; const check = (ok, name, extra) => { console.log((ok ? '  ok    ' : '  FAIL  ') + name + (ok ? '' : ' — ' + (extra || ''))); if (!ok) fails++; };
(async () => {
  const b = await chromium.launch();
  for (const [w, h] of [[390, 844], [1180, 820]]) {
    const p = await b.newPage({viewport: {width: w, height: h}}); const errs = []; p.on('pageerror', e => errs.push(e.message));
    await p.goto(PAGE); await p.waitForTimeout(1000);
    await p.click('#nav button[data-v="topics"]'); await p.waitForTimeout(400);
    const t = `${w}px`;
    const exp = await p.evaluate(() => {
      const ex = {}; COURSE.lectures.forEach(l => { ex[l.id] = l.exam; });
      const st = QUESTIONS.filter(q => LIKELY_UI.byId[q.id]).map(q => ({e: ex[q._lec.id], p: q.prof.toLowerCase()}));
      return {all: st.length, e1: st.filter(x => x.e === 1).length, e2: st.filter(x => x.e === 2).length, e3: st.filter(x => x.e === 3).length,
              e1s: st.filter(x => x.e === 1 && x.p === 'smith').length, e3k: st.filter(x => x.e === 3 && x.p === 'sikazwe').length, e3l: st.filter(x => x.e === 3 && x.p === 'lam').length};
    });
    const chips = await p.evaluate(() => [...document.querySelectorAll('.lkcard .lkchip')].map(c => c.textContent.trim()));
    check(chips.includes('All · ' + exp.all) && chips.includes('Exam 3 · ' + exp.e3) && chips.includes('Exam 2 · ' + (exp.e2 + exp.e1)) && chips.includes('Exam 1 · ' + exp.e1), `${t}: exam chips count the stars (Exam 2 takes the Exam 1 stars)`, chips.join(' | '));
    check(await p.evaluate(() => document.querySelector('.lkchip.on[data-grp=exam]').dataset.val) === '3', `${t}: opens on the active exam`);
    await p.click('.lkchip[data-grp=exam][data-val="2"]'); await p.click('.lkchip[data-grp=prof][data-val="smith"]');
    const go = await p.evaluate(() => document.querySelector('.lkcard button[data-lk=go]').textContent);
    check(go === `Start (${exp.e1s})`, `${t}: Exam 2 + Smith starts only Smith's Exam 1 stars`, go);
    await p.click('.lkcard button[data-lk=go]'); await p.waitForTimeout(500);
    const set = await p.evaluate(() => ({n: Q.list ? Q.list.length : null, label: Q.label, cur: !!Q.current}));
    check(set.cur && /Likely/.test(set.label), `${t}: Start opens the set`, JSON.stringify(set));
    await p.click('#nav button[data-v="topics"]'); await p.waitForTimeout(300);
    await p.click('.lkchip[data-grp=exam][data-val="3"]'); await p.click('.lkchip[data-grp=prof][data-val="sikazwe"]');
    const go3 = await p.evaluate(() => document.querySelector('.lkcard button[data-lk=go]').textContent);
    check(exp.e3k > 0 && go3 === `Start (${exp.e3k})`, `${t}: Exam 3 + Sikazwe starts his Exam 3 stars (2026-11-19)`, go3);
    await p.click('.lkchip[data-grp=prof][data-val="lam"]');
    const goL = await p.evaluate(() => document.querySelector('.lkcard button[data-lk=go]').textContent);
    check(exp.e3l > 0 && goL === `Start (${exp.e3l})`, `${t}: Exam 3 + Lam starts her Exam 3 stars (2026-11-20)`, goL);
    await p.click('.lkchip[data-grp=prof][data-val="patel"]');   // Dr. Patel has no Exam 3 lectures
    check(await p.evaluate(() => document.querySelector('.lkcard button[data-lk=go]').disabled), `${t}: a choice with no stars cannot start (Exam 3 + Patel)`);
    check(!errs.length, `${t}: no page errors`, errs.join(' | '));
    await p.close();
  }
  await b.close();
  console.log(fails ? `FAIL: likely_card_test.js: ${fails} failed` : 'PASS: likely_card_test.js: all checks passed');
  process.exit(fails ? 1 : 0);
})();
