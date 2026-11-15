/* ftu_test.js: the FTU tab (ftu_ui.js; Louis, 2026-11-14).
   NODE_PATH=$(npm root -g) node ftu_test.js          (reads ../preview/index.html; DRILL_PAGE overrides)
   Run at 390 px (phone) and 1,376 px (iPad), each on a fresh browser context:
   - the chart numbers equal Dr. Patel's slide 11 chart, typed here independently of the page;
   - 500 generated questions: every key is recomputed here from that chart (FTU x 0.5 x applications x days; tube = smallest of
     15, 30, 45, 60, 80, 100 >= grams), and the working ends in the answer;
   - the two slide 13 examples come out as 35 g -> 45 g and 98 g -> 100 g; the one-side-of-the-trunk working cites slide 13;
   - "Add two areas" never pairs areas that overlap on the chart (table typed here);
   - typed answers: one number with a unit, a fraction, a decimal comma and the number after "=" are graded; two numbers, words and an
     empty box are not graded or recorded and a message (role="alert") asks for one number;
   - the record: key in the page's namespace and per profile, counts right and missed per skill and per area, survives a reload,
     follows a profile change, a damaged stored record is dropped, a refused write shows one line, Reset clears it; nothing is
     written before an answer;
   - "My misses": only what is still owed, an area leaves after as many right answers as misses, and the empty view offers Mixed;
   - the diagram: a shape for every area; a one-limb row outlines and colours one limb; Elbows, Knees and Both soles both; keyboard
     (tab stop, role, label with the status word, Enter and Space), a status cue that is not colour;
   - feedback region is aria-live; in dark colour scheme the feedback keeps the light colours;
   - showing the tab again keeps a half-typed answer and the scroll position; Reset keeps the cursor on Reset;
   - buttons are at least 44 px high; at 390 px the page does not scroll sideways; no page errors. */
const path = require('path');
const {chromium} = require('playwright');
const PAGE = 'file://' + path.resolve(__dirname, process.env.DRILL_PAGE || '../preview/index.html');
let fail = 0, n = 0;
const check = (ok, label, detail) => { n++; if (!ok) fail++; console.log((ok ? '  ok    ' : '  FAIL  ') + label + (ok || !detail ? '' : '  — ' + String(detail).slice(0, 500))); };
// Dermatitis slide 11 (adult chart), typed independently of the page
const CHART = {scalp: 3, face: 2.5, hand: 1, arm: 4, elbows: 1, soles: 1.5, foot: 2, leg: 8, butt: 4, knees: 1, trunk: 14, trunk1: 7};
const TUBES = [15, 30, 45, 60, 80, 100];
// pairs that overlap on the chart, typed independently of the page
const OVERLAP = [['arm', 'hand'], ['arm', 'elbows'], ['leg', 'foot'], ['leg', 'knees'], ['leg', 'soles'], ['foot', 'soles'], ['trunk', 'trunk1']];
const overlaps = (a, b) => a === b || OVERLAP.some(([x, y]) => (x === a && y === b) || (x === b && y === a));
const BLANK = JSON.stringify({v: 1, skill: {}, reg: {}});

(async () => {
  const b = await chromium.launch();
  for (const [w, h, tag] of [[390, 844, 'phone'], [1376, 1032, 'ipad']]) {
    const errs = [];
    const ctx = await b.newContext({viewport: {width: w, height: h}});
    const p = await ctx.newPage();
    p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
    await p.goto(PAGE); await p.waitForTimeout(1000);
    const keyCount = () => p.evaluate(() => Object.keys(localStorage).filter(k => /ftu/i.test(k)).length);
    // put one chosen question on the page, and answer it by typing
    const ask = (skill, rid) => p.evaluate(([s, r]) => { const q = FTU_UI.make(s, r); FTU_UI.state.q = q; FTU_UI.state.done = false; FTU_UI.render(); return {ans: q.ans, regs: q.regs, skill: q.skill}; }, [skill, rid || null]);
    const type = async t => { await p.fill('#ftuin', t); await p.click('#ftuf button.ftuprim'); await p.waitForTimeout(80); };
    const state = () => p.evaluate(() => ({done: FTU_UI.state.done, right: FTU_UI.state.last && FTU_UI.state.last.right, stats: JSON.stringify(FTU_UI.state.stats),
      msg: (document.getElementById('ftumsg') || {}).textContent || '', fb: (document.getElementById('ftufb') || {}).textContent || ''}));
    const stored = () => p.evaluate(() => localStorage.getItem(FTU_UI.key()));

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
    const qs = await p.evaluate(() => { const o = []; for (let i = 0; i < 100; i++) for (const k of ['region', 'sum', 'grams', 'apply', 'tube']) { const q = FTU_UI.make(k); o.push({skill: q.skill, regs: q.regs, ans: q.ans, html: q.stem, stem: q.stem.replace(/<[^>]+>/g, ''), work: q.work.replace(/<[^>]+>/g, '')}); } return o; });
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
      // the working must END in the answer ("= X FTU", "= X g", "→ X g"); "slide 11" or "1 FTU = 0.5 g" earlier in it does not count
      const a = String(q.ans).replace('.', '\\.');
      if (!new RegExp('(?:= |→ )' + a + ' (?:FTU|g)[^=→]*$').test(q.work)) bad.push('working does not end in the answer ' + q.ans + ': ' + q.work);
    }
    check(!bad.length, `${tag}: ${qs.length} generated keys equal the recomputed value and the working ends in it`, bad.slice(0, 3).join(' | '));
    const sk = new Set(qs.map(q => q.skill));
    check(sk.size === 5, `${tag}: all five skills generate`, [...sk].join());
    const ex = await p.evaluate(() => { const o = {}; for (let i = 0; i < 600 && Object.keys(o).length < 2; i++) { const q = FTU_UI.make('tube'); const m = q.stem.replace(/<[^>]+>/g, ''); if (/face and neck.*twice daily for two weeks/.test(m)) o.face = [q.ans, q.work]; if (/one side of the trunk.*twice daily for two weeks/.test(m)) o.trunk = [q.ans, q.work]; } return o; });
    check(ex.face && ex.face[0] === 45 && /= 35 g\./.test(ex.face[1]), `${tag}: slide 13 face and neck: 35 g, prescribe 45 g`, JSON.stringify(ex.face));
    check(ex.trunk && ex.trunk[0] === 100 && /= 98 g\./.test(ex.trunk[1]), `${tag}: slide 13 one side of the trunk: 98 g, prescribe 100 g`, JSON.stringify(ex.trunk));

    // overlapping areas are never added; wording
    const sums = await p.evaluate(() => { const o = []; for (let i = 0; i < 2000; i++) o.push(FTU_UI.make('sum').regs); return o; });
    const over = sums.filter(([x, y]) => overlaps(x, y));
    check(!over.length, `${tag}: 2,000 "Add two areas" questions pair no overlapping areas`, JSON.stringify(over.slice(0, 4)));
    const seen = new Set(sums.map(r => r.slice().sort().join('+')));
    const want = []; const pool = Object.keys(CHART).filter(k => !/^trunk/.test(k));
    for (let i = 0; i < pool.length; i++) for (let j = i + 1; j < pool.length; j++) if (!overlaps(pool[i], pool[j])) want.push([pool[i], pool[j]].sort().join('+'));
    check(want.every(k => seen.has(k)) && seen.size === want.length, `${tag}: every pair that does not overlap is still asked (${want.length})`, `${seen.size} seen; missing ${want.filter(k => !seen.has(k)).join()}`);
    const t1 = await p.evaluate(() => [FTU_UI.make('region', 'trunk1').work, FTU_UI.make('region', 'scalp').work, FTU_UI.make('region', 'trunk').work]);
    check(/^Patel Dermatitis slide 13: one side of the trunk = 7 FTU \(slide 11 chart: trunk both sides 14, 7 FTU each side\)\.$/.test(t1[0]) && /^Patel Dermatitis slide 11 chart: Scalp = 3 FTU\.$/.test(t1[1]) && /Trunk both sides = 14 FTU \(7 FTU each side\)\.$/.test(t1[2]),
      `${tag}: one side of the trunk cites slide 13; the chart rows cite slide 11`, JSON.stringify(t1));
    const words = qs.filter(q => /\(one hand \(|cover [A-Z]|for (scalp|elbows|buttocks|knees)\b|\bon (scalp|elbows|buttocks|knees)\b/.test(q.stem));
    check(!words.length, `${tag}: stems name each area in sentence form (no nested brackets, no missing article, no capital mid-sentence)`, words.slice(0, 2).map(q => q.stem).join(' | '));

    // the parser: one number only
    const PARSE = [['0.5', 0.5], ['.5', 0.5], ['3', 3], ['1.25 g', 1.25], ['35 g', 35], ['45 g tube', 45], ['45-g tube', 45], ['14 FTU', 14], ['2.5 fingertip units', 2.5], ['0.5 grams', 0.5],
      ['1/2', 0.5], ['5/2', 2.5], ['1 1/2', 1.5], ['½', 0.5], ['1½', 1.5], ['1,25', 1.25], ['0,5', 0.5], ['2 FTU = 1 g', 1], ['7 x 0.5 = 3.5', 3.5], ['2.5 × 0.5 × 2 × 14 = 35 g', 35], [' 8 ', 8],
      ['', null], ['abc', null], ['half', null], ['35 g -> 45 g', null], ['3.5 or 7', null], ['1,250', null], ['-3', null], ['1/0', null], ['3 4', null], ['7 = ', null], ['1.2.3', null]];
    const got = await p.evaluate(xs => xs.map(x => FTU_UI.parse(x[0])), PARSE);
    const pbad = PARSE.filter((x, i) => x[1] === null ? got[i] !== null : got[i] === null || Math.abs(got[i] - x[1]) > 1e-9).map(x => JSON.stringify(x[0]) + ' gave ' + got[PARSE.indexOf(x)]);
    check(!pbad.length, `${tag}: ${PARSE.length} typed forms are read as one number or refused`, pbad.join(' | '));

    // grading, typed answers
    await p.click('.ftumodes [data-mode="region"]'); await p.waitForTimeout(150);
    const diag = await p.$$eval('.ftusvg .ftush', xs => xs.map(x => x.dataset.r.split(' ')).flat());
    check(Object.keys(CHART).every(k => diag.includes(k)), `${tag}: the diagram has a shape for every area`, JSON.stringify(Object.keys(CHART).filter(k => !diag.includes(k))));
    const live = await p.evaluate(() => [document.getElementById('ftufb').getAttribute('aria-live'), document.getElementById('ftufb').textContent, document.getElementById('ftumsg').getAttribute('role'),
      document.getElementById('ftuin').getAttribute('aria-describedby'), getComputedStyle(document.getElementById('ftufb')).display]);
    check(live[0] === 'polite' && live[1] === '' && live[2] === 'alert' && live[3] === 'ftumsg' && live[4] === 'none', `${tag}: an empty aria-live feedback region and an alert line by the field are in the form before an answer`, JSON.stringify(live));
    // refused typings: no grade, no record, a message
    let refused = [];
    for (const t of ['', 'half', '35 g -> 45 g', '3.5 or 7']) {
      await ask('region', 'face'); await type(t);
      const s = await state();
      if (s.done || !/one number|Type a number/.test(s.msg) || s.stats !== BLANK || (await keyCount()) !== 0) refused.push(JSON.stringify(t) + ' ' + JSON.stringify(s));
      if (!(await p.evaluate(() => document.getElementById('ftuin').getAttribute('aria-invalid') === 'true' && document.activeElement.id === 'ftuin'))) refused.push(JSON.stringify(t) + ': field not marked or not focused');
    }
    check(!refused.length, `${tag}: an empty box, words and two numbers are not graded or recorded; a message asks for one number`, refused.join(' | '));
    // accepted typings, each on a question whose key it equals
    let acc = [];
    for (const [sk2, rid, t] of [['grams', 'hand', '1/2'], ['region', 'soles', '1 1/2'], ['grams', 'face', '1,25'], ['region', 'face', '5/2'], ['grams', 'trunk1', '7 x 0.5 = 3.5'], ['region', 'scalp', '3 FTU'], ['grams', 'hand', '.5 g']]) {
      await ask(sk2, rid); await type(t);
      const s = await state();
      if (!s.done || !s.right || !/^Right\./.test(s.fb)) acc.push(JSON.stringify(t) + ' ' + JSON.stringify(s));
    }
    check(!acc.length, `${tag}: a fraction, a mixed number, a decimal comma, working with "=" and a number with a unit are graded right`, acc.join(' | '));
    const key = await p.evaluate(() => [FTU_UI.key(), NS, PROFILE, BUILD.preview, COURSE.ns]);
    check(key[0] === key[1] + ':ftu:v1:' + key[2] && key[1] === key[4] + (key[3] ? '-preview' : '') && (await keyCount()) === 1 && !!(await stored()),
      `${tag}: the record is one key in the page's namespace, for the profile in use`, JSON.stringify(key));
    const fbbox = await p.evaluate(() => { const f = document.getElementById('ftufb'), nx = document.querySelector('[data-act="next"]'); return [f.className, getComputedStyle(f).backgroundColor, nx.getAttribute('aria-describedby'), document.activeElement === nx]; });
    check(/good/.test(fbbox[0]) && fbbox[1] === 'rgb(226, 244, 232)' && fbbox[2] === 'ftufb' && fbbox[3], `${tag}: after grading the cursor is on Next, which is described by the feedback`, JSON.stringify(fbbox));
    // a wrong tube answer
    const tq = await ask('tube', 'face'); await type(String(tq.ans + 1));
    let s = await state();
    check(s.done && !s.right && new RegExp('^Not quite\\. You typed ' + (tq.ans + 1) + '; the answer is a ' + tq.ans + ' g tube\\.').test(s.fb), `${tag}: a wrong tube answer is marked wrong and reads "a ${tq.ans} g tube"`, s.fb);
    // keyboard: Enter checks
    const kq = await ask('region', 'butt'); await p.focus('#ftuin'); await p.keyboard.type(String(kq.ans)); await p.keyboard.press('Enter'); await p.waitForTimeout(80);
    s = await state(); check(s.done && s.right, `${tag}: Enter in the field checks the answer`);

    // the record
    p.once('dialog', d => d.accept());
    await p.click('[data-act="reset"]'); await p.waitForTimeout(150);
    check((await state()).stats === BLANK && (await stored()) === BLANK, `${tag}: Reset clears the record`, await stored());
    check(await p.evaluate(() => document.activeElement && document.activeElement.dataset.act === 'reset'), `${tag}: after Reset the cursor is still on Reset`);
    check(await p.evaluate(() => /kept on this device, separately from quiz progress/.test(document.getElementById('ftukept').textContent)), `${tag}: a line under Reset says where the record is kept`);
    const q1 = await ask('region', 'scalp'); await type(q1.ans + ' FTU');
    const q2 = await ask('region', 'arm'); await type(String(q2.ans + 1));
    let q3; do { q3 = await ask('sum', 'knees'); } while (!q3.regs.includes('soles'));   // knees + soles, so the areas counted below are known
    await type(String(q3.ans));
    let rec = JSON.parse(await stored());
    check(rec.skill.region.r === 1 && rec.skill.region.w === 1 && rec.skill.region.d === 1 && rec.skill.sum.r === 1 && rec.skill.sum.w === 0, `${tag}: the record counts right and missed for each skill`, JSON.stringify(rec.skill));
    check(rec.reg.scalp.r === 1 && rec.reg.scalp.w === 0 && rec.reg.arm.w === 1 && rec.reg.arm.r === 0 && rec.reg.arm.d === 1 && q3.regs.every(id => rec.reg[id].r === 1) && Object.keys(rec.reg).length === 4, `${tag}: and for each area, both areas of a sum`, JSON.stringify(rec.reg));
    const tbl = await p.evaluate(() => [...document.querySelectorAll('.ftutab')[1].querySelectorAll('tbody tr')].map(r => [...r.children].map(c => c.textContent).join('|')));
    check(tbl.includes('Scalp|3|1|0|solid') && tbl.includes('One arm incl. hand|4|0|1|missing') && tbl.includes('Buttocks|4|0|0|not tried'), `${tag}: the By area table gives number, counts and the status in words`, tbl.join(' ; '));

    // the diagram: one limb for a one-limb row
    const on = async () => p.evaluate(() => [...document.querySelectorAll('.ftusvg > g')].map(g => [...g.querySelectorAll('.ftush.on')].map(x => x.dataset.r.split(' ')[0] + x.dataset.k).sort().join(',')));
    await ask('region', 'arm');
    check(JSON.stringify(await on()) === JSON.stringify(['arm0,elbows0,hand0', 'arm1,elbows1,hand1', '']), `${tag}: "One arm" outlines one arm with its elbow and hand, the same arm in the back view`, JSON.stringify(await on()));
    const side = await p.evaluate(() => { const g = [...document.querySelectorAll('.ftusvg > g')], cx = el => { const r = el.getBoundingClientRect(); return r.left + r.width / 2; };
      const mid = i => cx(g[i].querySelector('[data-r="scalp"]')); return [0, 1].map(i => [...g[i].querySelectorAll('.ftush.on')].map(x => cx(x) > mid(i))); });
    check(side[0].every(x => x === side[0][0]) && side[1].every(x => x === side[1][0]) && side[0][0] !== side[1][0], `${tag}: the outlined arm is on one side of each figure, mirrored in the back view`, JSON.stringify(side));
    const col = await p.evaluate(() => { const c = sel => [...document.querySelectorAll('.ftusvg ' + sel)].map(x => x.getAttribute('class').replace(/ftush | on/g, '')).join(',');
      return [c('.ftush[data-r="arm"][data-k="0"]'), c('.ftush[data-r="arm"][data-k="1"]'), c('.ftush[data-r="scalp"]'), c('.ftush[data-r="knees leg"]')]; });
    check(col[0] === 'r,n other' && col[1] === 'n other,r' && col[2] === 'g,g' && col[3] === 'g,n other,n other,g', `${tag}: the missed arm is red on one limb only, the other limb neutral; the scalp is green and one knee is green with the other neutral`, JSON.stringify(col));
    const dash = await p.evaluate(() => [getComputedStyle(document.querySelector('.ftush.r')).strokeDasharray, getComputedStyle(document.querySelector('.ftush.g')).strokeDasharray, getComputedStyle(document.querySelector('.ftush.n')).strokeDasharray]);
    check(dash[0] !== 'none' && dash[1] === 'none' && dash[2] === 'none', `${tag}: a missing area also has a dotted edge (a cue that is not colour)`, JSON.stringify(dash));
    const outl = {};
    for (const id of ['leg', 'hand', 'foot', 'elbows', 'knees', 'soles', 'trunk1', 'trunk', 'face']) { await ask('region', id); outl[id] = await on(); }
    check(JSON.stringify(outl.leg) === JSON.stringify(['foot0,knees0,leg0', 'foot1,knees1,leg1', '']) && JSON.stringify(outl.hand) === JSON.stringify(['hand0', 'hand1', '']) && JSON.stringify(outl.foot) === JSON.stringify(['foot0', 'foot1', '']),
      `${tag}: "One leg", "One hand" and "One foot" outline one limb`, JSON.stringify([outl.leg, outl.hand, outl.foot]));
    check(JSON.stringify(outl.elbows) === JSON.stringify(['elbows0', 'elbows1', '']) && JSON.stringify(outl.knees) === JSON.stringify(['knees0', 'knees1', '']) && JSON.stringify(outl.soles) === JSON.stringify(['', '', 'soles0,soles1']),
      `${tag}: "One elbow" and "One knee" (1 FTU each, Louis 2026-11-15) outline one; Both soles outline both`, JSON.stringify([outl.elbows, outl.knees, outl.soles]));
    check(JSON.stringify(outl.trunk1) === JSON.stringify(['trunk10', '', '']) && JSON.stringify(outl.trunk) === JSON.stringify(['trunk10', 'trunk10', '']) && JSON.stringify(outl.face) === JSON.stringify(['face0,face1', 'face0', '']),
      `${tag}: one side of the trunk outlines the front only, the trunk both sides, face and neck both shapes`, JSON.stringify([outl.trunk1, outl.trunk, outl.face]));

    // the diagram by keyboard
    const kb = await p.evaluate(() => { const all = [...document.querySelectorAll('.ftusvg .ftush')], stops = all.filter(x => x.getAttribute('tabindex') === '0');
      return {role: document.querySelector('.ftusvg').getAttribute('role'), stops: stops.length, shapes: all.length,
        bad: stops.filter(x => x.getAttribute('role') !== 'button' || !/^[A-Z][^:]+: (not tried|solid|shaky|missing)(, the area in question)?$/.test(x.getAttribute('aria-label'))).map(x => x.getAttribute('aria-label')),
        hidden: all.filter(x => x.getAttribute('tabindex') !== '0' && x.getAttribute('aria-hidden') !== 'true').length,
        rows: [...new Set(stops.map(x => x.dataset.r.split(' ')[0]))].length,
        labels: stops.map(x => x.getAttribute('aria-label')).filter(l => /^(Scalp: solid|One arm: missing|Buttocks \(back view\): not tried)/.test(l)).length}; });
    check(kb.role === 'group' && kb.stops === 20 && !kb.bad.length && kb.hidden === 0 && kb.rows === 11 && kb.labels === 3, `${tag}: each of the 20 shapes is one tab stop, a button labelled with its name and status word`, JSON.stringify(kb));
    await p.evaluate(() => { const q = FTU_UI.make('region', 'scalp'); Object.assign(FTU_UI.state, {q, done: true, last: {typed: '3', right: true}}); FTU_UI.render(); });
    await p.focus('.ftusvg [data-r="arm"][data-k="0"]'); await p.keyboard.press('Enter');
    const tipA = await p.evaluate(() => document.getElementById('ftutip').textContent);
    await p.focus('.ftusvg [data-r="butt"]'); const y0 = await p.evaluate(() => scrollY); await p.keyboard.press('Space');
    const tipB = await p.evaluate(y => [document.getElementById('ftutip').textContent, scrollY - y], y0);
    check(tipA === 'One arm including entire hand: 4 FTU = 2 g for one application. Your record: missing (0 right, 1 missed).' && tipB[0] === 'Buttocks: 4 FTU = 2 g for one application. Your record: not tried (0 right, 0 missed).' && tipB[1] === 0,
      `${tag}: Enter and Space on a shape show its chart number and its status in words`, JSON.stringify([tipA, tipB]));
    const kn = await p.evaluate(() => { const k = document.querySelector('.ftusvg .ftush[data-r="knees leg"][data-k="0"]'); k.scrollIntoView({block: 'center'}); const r = k.getBoundingClientRect();
      const x = r.left - 3, y = r.top + r.height / 2, e = document.elementFromPoint(x, y); return {x, y, cls: e && e.getAttribute('class'), under: document.elementsFromPoint(x, y).map(z => z.dataset && z.dataset.r).filter(Boolean)}; });
    await p.mouse.click(kn.x, kn.y);
    check(kn.cls === 'ftuhit' && kn.under.includes('leg') && await p.evaluate(() => /^One knee: 1 FTU = 0\.5 g/.test(document.getElementById('ftutip').textContent)), `${tag}: a tap 3 px outside a knee, on the leg, still reads One knee`, JSON.stringify(kn) + ' ' + await p.evaluate(() => document.getElementById('ftutip').textContent));
    await ask('region', 'scalp'); await p.focus('.ftusvg [data-r="arm"][data-k="0"]'); await p.keyboard.press('Enter');
    check(await p.evaluate(() => /^Answer the question first/.test(document.getElementById('ftutip').textContent)), `${tag}: before the answer a shape does not give its number away`);

    // reload keeps the record; a profile change gets its own
    await p.reload(); await p.waitForTimeout(900); await p.click('#nav button[data-v="ftu"]'); await p.waitForTimeout(250);
    const kept = await p.evaluate(() => FTU_UI.state.stats);
    check(kept.skill.region && kept.skill.region.r === 1 && kept.skill.region.w === 1 && kept.reg.arm.d === 1, `${tag}: the record survives a reload`, JSON.stringify(kept));
    const prof = await p.evaluate(() => { const was = PROFILE, a = JSON.stringify(FTU_UI.state.stats); PROFILE = was + '-other'; show('ftu'); const k = FTU_UI.key(), bl = JSON.stringify(FTU_UI.state.stats); PROFILE = was; show('ftu'); return [a, bl, k, JSON.stringify(FTU_UI.state.stats), was]; });
    check(prof[1] === BLANK && prof[3] === prof[0] && prof[0] !== BLANK && prof[2].endsWith(':ftu:v1:' + prof[4] + '-other'), `${tag}: another profile has its own empty record and the first profile's comes back`, JSON.stringify(prof));

    // My misses: what is owed (region skill and the arm, one each)
    await p.click('.ftumodes [data-mode="miss"]'); await p.waitForTimeout(100);
    const draws = await p.evaluate(() => { const o = []; for (let i = 0; i < 60; i++) { FTU_UI.state.q = null; FTU_UI.render(); o.push(FTU_UI.state.q.skill + ':' + FTU_UI.state.q.regs.join('+')); } return [...new Set(o)]; });
    check(draws.length === 1 && draws[0] === 'region:arm', `${tag}: "My misses" asks the missed skill on the missed area (60 draws)`, draws.join());
    // miss it again, then two right answers clear it
    await type('99'); await p.click('[data-act="next"]'); await p.waitForTimeout(60);
    await type('4'); await p.click('[data-act="next"]'); await p.waitForTimeout(60);
    const mid = await p.evaluate(() => [FTU_UI.state.q && FTU_UI.state.q.skill + ':' + FTU_UI.state.q.regs.join('+'), FTU_UI.state.stats.reg.arm.d, FTU_UI.state.stats.skill.region.d]);
    check(mid[0] === 'region:arm' && mid[1] === 1 && mid[2] === 1, `${tag}: missed twice, right once: still listed`, JSON.stringify(mid));
    await type('4'); await p.click('[data-act="next"]'); await p.waitForTimeout(60);
    const none = await p.evaluate(() => { const e = document.getElementById('ftunone'), b = e && e.querySelector('button'); return {q: FTU_UI.state.q, text: e && e.querySelector('p').textContent, btn: b && b.textContent, mode: b && b.dataset.mode, form: !!document.getElementById('ftuf'),
      on: document.querySelectorAll('.ftush.on').length, focus: document.activeElement === b, pressed: document.querySelector('.ftumodes [aria-pressed="true"]').dataset.mode}; });
    check(none.q === null && /^No misses to review/.test(none.text) && none.btn === 'Practice Mixed' && none.mode === 'all' && !none.form && none.on === 0 && none.focus && none.pressed === 'miss',
      `${tag}: right as many times as missed: nothing is owed, the view says so and offers Mixed`, JSON.stringify(none));
    await p.reload(); await p.waitForTimeout(900); await p.click('#nav button[data-v="ftu"]'); await p.waitForTimeout(200); await p.click('.ftumodes [data-mode="miss"]'); await p.waitForTimeout(80);
    check(await p.evaluate(() => !!document.getElementById('ftunone') && FTU_UI.state.stats.reg.arm.w === 2), `${tag}: after a reload nothing is owed still (the counts stay: 2 missed)`);
    await p.click('#ftunone button'); await p.waitForTimeout(80);
    check(await p.evaluate(() => FTU_UI.state.mode === 'all' && !!FTU_UI.state.q && !!document.getElementById('ftuin') && document.activeElement.id === 'ftuin'), `${tag}: its Mixed button gives a question`);
    // an owed area under a skill never missed: a sum missed owes both of its areas
    p.once('dialog', d => d.accept()); await p.click('[data-act="reset"]'); await p.waitForTimeout(100);
    const sq = await ask('sum', 'butt'); await type('99');
    await p.click('.ftumodes [data-mode="miss"]'); await p.waitForTimeout(80);
    const d2 = await p.evaluate(() => { const o = new Set(); for (let i = 0; i < 80; i++) { FTU_UI.state.q = null; FTU_UI.render(); o.add(FTU_UI.state.q.skill + ':' + FTU_UI.state.q.regs.join('+')); } return [...o]; });
    check(d2.length > 0 && d2.every(x => x.startsWith('sum:') && x.slice(4).split('+').some(id => sq.regs.includes(id))), `${tag}: after one missed sum, "My misses" asks sums on its two areas only (80 draws)`, d2.join());

    // a damaged stored record is dropped; the checker itself
    const cl = await p.evaluate(() => { const c = FTU_UI.clean, ok = {v: 1, skill: {region: {r: 2, w: 1, d: 1}}, reg: {arm: {r: 0, w: 3}}};
      return [JSON.stringify(c(ok)), ...[null, 5, [], {v: 2, skill: {}, reg: {}}, {v: 1, skill: [], reg: {}}, {v: 1, skill: {}}, {v: 1, skill: {region: {r: '1', w: 0}}, reg: {}}, {v: 1, skill: {region: null}, reg: {}},
        {v: 1, skill: {}, reg: {arm: {r: 1.5, w: 0}}}, {v: 1, skill: {}, reg: {arm: {r: 1, w: -1}}}, {v: 1, skill: {}, reg: {arm: {r: 1, w: 1, d: 'x'}}}].map(x => c(x)), JSON.stringify(c({v: 1, skill: {nosuch: {r: 1, w: 1}}, reg: {arm: {r: 1, w: 1, d: 9}}}))]; });
    check(cl[0] === '{"v":1,"skill":{"region":{"r":2,"w":1,"d":1}},"reg":{"arm":{"r":0,"w":3,"d":0}}}' && cl.slice(1, 12).every(x => x === null) && cl[12] === '{"v":1,"skill":{},"reg":{"arm":{"r":1,"w":1,"d":1}}}',
      `${tag}: a stored record is accepted only with whole-number counts in the right shape (11 damaged forms refused)`, JSON.stringify(cl));
    let dm = [];
    for (const junk of ['not json', '{"v":1,"skill":{"region":{"r":"1","w":0}},"reg":{}}', '[1,2]', '{"v":1,"skill":{"region":{"r":1,"w":0,"d":0}},"reg":{"arm":7}}']) {
      await p.evaluate(j => localStorage.setItem(FTU_UI.key(), j), junk);
      await p.reload(); await p.waitForTimeout(700); await p.click('#nav button[data-v="ftu"]'); await p.waitForTimeout(150);
      const r = await p.evaluate(() => [JSON.stringify(FTU_UI.state.stats), !!document.getElementById('ftuin'), /NaN|undefined/.test(document.getElementById('v-ftu').textContent)]);
      if (r[0] !== BLANK || !r[1] || r[2]) dm.push(junk + ' -> ' + JSON.stringify(r));
    }
    check(!dm.length, `${tag}: with a damaged record in storage the tab opens with an empty one`, dm.join(' | '));

    // storage refuses the write
    await p.evaluate(() => { window.__set = Storage.prototype.setItem; Storage.prototype.setItem = function(k){ if (/:ftu:/.test(k)) throw new Error('refused'); return window.__set.apply(this, arguments); }; });
    const u1 = await ask('region', 'scalp'); await type(String(u1.ans));
    const un = await p.evaluate(() => { const e = document.getElementById('ftuunsaved'); return [FTU_UI.state.done, e && e.textContent, FTU_UI.state.stats.reg.scalp.r]; });
    check(un[0] && un[1] === 'This record cannot be saved on this device; it lasts until the page is closed or reloaded.' && un[2] === 1, `${tag}: when storage refuses the write the answer is still graded and counted, and one line says the record cannot be saved`, JSON.stringify(un));
    await p.evaluate(() => { Storage.prototype.setItem = window.__set; });
    const u2 = await ask('region', 'scalp'); await type(String(u2.ans));
    check(await p.evaluate(() => !document.getElementById('ftuunsaved') && JSON.parse(localStorage.getItem(FTU_UI.key())).reg.scalp.r === 2), `${tag}: the line goes once a write succeeds`);

    // showing the tab again: the half-typed answer and the place on the page stay
    await ask('region', 'leg'); await p.focus('#ftuin'); await p.keyboard.type('7.');
    await p.evaluate(() => { document.body.style.minHeight = '3000px'; window.scrollTo(0, 240); });
    const again = await p.evaluate(() => { const before = scrollY; show(VIEW); const i = document.getElementById('ftuin'); return [before, scrollY, i.value, document.activeElement === i, FTU_UI.state.q.regs[0]]; });
    check(again[0] === 240 && again[1] === 240 && again[2] === '7.' && again[3] && again[4] === 'leg', `${tag}: showing the tab again keeps the half-typed answer, the cursor and the scroll position`, JSON.stringify(again));
    await p.click('#nav button[data-v="topics"]'); await p.waitForTimeout(150); await p.click('#nav button[data-v="ftu"]'); await p.waitForTimeout(150);
    const back = await p.evaluate(() => [document.getElementById('ftuin').value, FTU_UI.state.q.regs[0], scrollY]);
    check(back[0] === '7.' && back[1] === 'leg' && back[2] === 0, `${tag}: leaving for another tab and coming back keeps the half-typed answer (the page starts at the top, as every tab does)`, JSON.stringify(back));
    await p.click('.ftumodes [data-mode="region"]'); await p.waitForTimeout(80);
    check(await p.evaluate(() => document.getElementById('ftuin').value === ''), `${tag}: a new question starts with an empty box`);
    await p.evaluate(() => { document.body.style.minHeight = ''; window.scrollTo(0, 0); });

    // sizes
    const hts = await p.evaluate(() => [...document.querySelectorAll('#v-ftu .ftumodes button, #v-ftu .ftuprim, #v-ftu .ftuquiet, #ftuin')].map(x => Math.round(x.getBoundingClientRect().height)));
    check(hts.length === 10 && hts.every(x => x >= 44), `${tag}: the mode buttons, the field, Check and Reset are at least 44 px high`, hts.join());
    check(await p.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${tag}: no sideways scroll`);
    check(!errs.length, `${tag}: no page errors`, errs.join(' | '));
    await ctx.close();
  }

  // a device in dark mode: the page has no dark theme, so the feedback keeps its light colours
  {
    const errs = [];
    const ctx = await b.newContext({viewport: {width: 390, height: 844}, colorScheme: 'dark'});
    const p = await ctx.newPage();
    p.on('pageerror', e => errs.push(e.message));
    await p.goto(PAGE); await p.waitForTimeout(900); await p.click('#nav button[data-v="ftu"]'); await p.waitForTimeout(250);
    const lum = c => { const [r, g, bl] = c.match(/[\d.]+/g).slice(0, 3).map(v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }); return 0.2126 * r + 0.7152 * g + 0.0722 * bl; };
    const ratio = (a, c) => { const [x, y] = [lum(a), lum(c)].sort((m, k) => k - m); return (x + 0.05) / (y + 0.05); };
    const run = async wrong => {
      const ans = await p.evaluate(id => { const q = FTU_UI.make('region', id); Object.assign(FTU_UI.state, {q, done: false}); FTU_UI.render(); return q.ans; }, wrong ? 'leg' : 'arm');
      await p.fill('#ftuin', String(ans + (wrong ? 1 : 0))); await p.click('#ftuf button.ftuprim'); await p.waitForTimeout(80);
      return p.evaluate(() => { const f = document.getElementById('ftufb'), s = getComputedStyle(f), t = document.querySelector(FTU_UI.state.last.right ? '.ftutab td.g' : '.ftutab td.r'); return [matchMedia('(prefers-color-scheme: dark)').matches, s.backgroundColor, s.color, getComputedStyle(t).color, getComputedStyle(document.body).backgroundColor]; });
    };
    const g = await run(false), r = await run(true);
    check(g[0] && g[1] === 'rgb(226, 244, 232)' && ratio(g[1], g[2]) >= 7, `dark mode: a right answer's feedback is the light green box with readable text (${ratio(g[1], g[2]).toFixed(1)}:1)`, JSON.stringify(g));
    check(r[1] === 'rgb(253, 236, 234)' && ratio(r[1], r[2]) >= 7, `dark mode: a wrong answer's feedback is the light red box with readable text (${ratio(r[1], r[2]).toFixed(1)}:1)`, JSON.stringify(r));
    check(ratio(r[3], 'rgb(255, 255, 255)') >= 4.5 && ratio(g[3], 'rgb(255, 255, 255)') >= 4.5, `dark mode: the status words in the table keep their contrast on the white page`, JSON.stringify([g[3], r[3], r[4]]));
    check(!errs.length, 'dark mode: no page errors', errs.join(' | '));
    await ctx.close();
  }

  // the whole of storage refused from the start (private mode): the tab opens, grades and says the record is not saved
  {
    const errs = [];
    const ctx = await b.newContext({viewport: {width: 390, height: 844}});
    const p = await ctx.newPage();
    p.on('pageerror', e => errs.push(e.message));
    await p.addInitScript(() => { Storage.prototype.getItem = Storage.prototype.setItem = function(){ throw new Error('blocked'); }; });
    await p.goto(PAGE); await p.waitForTimeout(900);
    await p.evaluate(() => show('ftu')); await p.waitForTimeout(250);
    const ans = await p.evaluate(() => { const q = FTU_UI.make('region', 'leg'); Object.assign(FTU_UI.state, {q, done: false}); FTU_UI.render(); return q.ans; });
    await p.fill('#ftuin', String(ans)); await p.click('#ftuf button.ftuprim'); await p.waitForTimeout(80);
    const r = await p.evaluate(() => [VIEW, FTU_UI.state.done && FTU_UI.state.last.right, !!document.getElementById('ftuunsaved'), FTU_UI.state.stats.reg.leg.r]);
    check(r[0] === 'ftu' && r[1] && r[2] && r[3] === 1 && !errs.length, 'storage blocked: the tab opens, grades the answer, counts it for the visit and shows the not-saved line; no page errors', JSON.stringify(r) + ' ' + errs.join(' | '));
    await ctx.close();
  }
  await b.close();
  console.log((fail ? 'FAIL' : 'PASS') + ': ftu_test.js: ' + (fail ? fail + ' of ' + n + ' checks failed' : n + ' checks passed'));
  process.exit(fail ? 1 : 0);
})().catch(e => { console.log('FAIL: ftu_test.js: the test stopped: ' + e.message); process.exit(1); });
