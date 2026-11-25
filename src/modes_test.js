/* modes_test.js: Learn and Exam mode (modes_ui.js), in a browser at 390 and 1,100 px.
   NODE_PATH=$(npm root -g) node modes_test.js          (reads ../preview/index.html; DRILL_PAGE overrides)
   - the switch is on Topics and in the Quiz header, two buttons with aria-pressed; a first visit is Learn; the choice is
     kept under <NS>:mode and survives a reload; the tab and heading of Weak spots say "Review next" / "Next best things
     to review" in Learn and "Weak spots" in Exam;
   - Learn, quiz from a topic: Q.pool holds only foundation questions and the first ten questions shown are foundation;
     "Add harder questions" widens the pool to the whole set;
   - Hint: first hint disables exactly one wrong option, the second a second one, never the key, never more than two
     (30 questions); a wrong answer shows "Not quite", the "You may be mixing this up with" prompt and the picked row marked;
     after two misses on one concept "A way in" appears (mechanism wording for mech/class skills, the generic line otherwise);
     the end of the foundation set shows the score and "Next best thing to review" and a button to add the harder ones;
   - Exam: the pool is the whole set, no hint, no prompt, no summary, the verdict reads as the core's; the Topics list
     (without the switch) is identical in both modes and the filter chips are the same;
   - Quiz started from "Everything" in Learn is the core's (no pool change);
   - no page errors; no sideways scroll at 390. */
const path = require('path');
const {chromium} = require('playwright');
const PAGE = 'file://' + path.resolve(__dirname, process.env.DRILL_PAGE || '../preview/index.html');
let fail = 0, n = 0;
const check = (ok, label, detail) => { n++; if (!ok) fail++; console.log((ok ? '  ok    ' : '  FAIL  ') + label + (ok || detail == null ? '' : '  — ' + String(detail).slice(0, 400))); };

(async () => {
  const b = await chromium.launch();
  for (const [w, h, tag] of [[390, 844, 'phone'], [1100, 900, 'wide']]) {
    const errs = [];
    const ctx = await b.newContext({viewport: {width: w, height: h}});
    const p = await ctx.newPage();
    p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
    await p.goto(PAGE); await p.waitForTimeout(1200);
    const noScroll = () => p.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1);
    const go = async v => { await p.evaluate(v => document.querySelector('#nav button[data-v="' + v + '"]').click(), v); await p.waitForTimeout(300); };
    const pressed = () => p.evaluate(() => [...document.querySelectorAll('.mdbar:not([hidden]) .mdbtn')].filter(b => b.offsetParent).map(b => b.dataset.md + '=' + b.getAttribute('aria-pressed')).join());

    // ---------- the switch on Topics, first visit ----------
    check(await p.evaluate(() => MODES_UI.mode === 'learn'), `${tag}: first visit is Learn`);
    check(await p.evaluate(() => document.querySelectorAll('#v-topics .mdbar .mdbtn').length === 2), `${tag}: Topics has the two-button switch`);
    check(await p.evaluate(() => { const bar = document.querySelector('#v-topics .mdbar'), t = document.querySelector('#v-topics details.topic'); return !!bar && !!t && !!(bar.compareDocumentPosition(t) & 4); }), `${tag}: the switch is above the topic list`);
    check(await p.evaluate(() => /quiz started from a topic or section/i.test(document.querySelector('#v-topics .mdbar .mdnote').textContent)), `${tag}: one line says what Learn affects`);
    check(await p.evaluate(() => document.querySelector('#nav button[data-v="gaps"]').textContent === 'Review next'), `${tag}: the tab says Review next in Learn`);
    check(await noScroll(), `${tag}: no sideways scroll on Topics`);

    // the level function and the topic's pools
    const topic = await p.evaluate(() => {
      const t = TOPICS.find(t => t.id === 'ey-in'); const full = poolFor('ey-in', null);
      return {full: full.length, f: full.filter(q => MODES_UI.level(q) === 'foundation').length};
    });
    check(topic.f >= 4 && topic.f < topic.full, `${tag}: topic ey-in has foundation (${topic.f}) and harder (${topic.full - topic.f}) questions`);

    // ---------- Learn: start from the topic ----------
    const filterBefore = await p.evaluate(() => JSON.stringify(FILTER));
    await p.evaluate(() => startQuiz('ey-in', null)); await p.waitForTimeout(200);
    check(await p.evaluate(() => Q.pool.length > 0 && Q.pool.every(q => MODES_UI.level(q) === 'foundation') && Q.lm.full.length > Q.pool.length), `${tag}: Learn narrows the pool to foundation questions`);
    check(await p.evaluate(() => document.querySelectorAll('#v-quiz .mdbar .mdbtn').length === 2 && /Foundation questions first/.test(document.querySelector('#v-quiz .mdstate').textContent)), `${tag}: the Quiz header has the switch and the foundation line`);
    check(await p.evaluate(() => !!document.querySelector('#v-quiz .mdadd')), `${tag}: Add harder questions is offered`);
    check(await noScroll(), `${tag}: no sideways scroll in the Quiz`);

    // hints on 30 different questions, and the first ten questions are foundation
    let hintOk = 0, hintBad = [], levels = [];
    for (let i = 0; i < 30; i++) {
      const r = await p.evaluate(() => {
        const q = Q.current; if (!q) return null;
        const out = {lvl: MODES_UI.level(q), mc: (q.type || 'mc') === 'mc', multi: !!q.multi, id: q.id};
        if (!out.mc) return out;
        const dis = () => [...document.querySelectorAll('#v-quiz button.opt[data-o]')].filter(b => b.disabled).map(b => +b.dataset.o);
        const before = dis().length;
        const hb = () => document.querySelector('#v-quiz .mdhint');
        out.hasHint = !!hb();
        const seq = [];
        for (let k = 0; k < 3 && hb(); k++) { hb().click(); seq.push(dis().length); }
        out.seq = seq; out.before = before; out.dis = dis();
        out.keyDisabled = out.dis.some(oi => Q.current.options[oi].correct);
        out.wrongOnly = out.dis.every(oi => !Q.current.options[oi].correct);
        return out;
      });
      if (!r) break;
      if (levels.length < 10) levels.push(r.lvl);
      if (r.mc) {
        const good = r.hasHint === false ? (r.seq && r.seq.length === 0) : (r.seq.length <= 2 && r.seq[0] === 1 && (r.seq.length < 2 || r.seq[1] === 2) && !r.keyDisabled && r.wrongOnly);
        if (good) hintOk++; else hintBad.push(JSON.stringify(r));
      }
      // answer: pick a wrong option on every third question, otherwise the key
      await p.evaluate(i => {
        const q = Q.current; const wantWrong = i % 3 === 0;
        if ((q.type || 'mc') !== 'mc') { Q.revealed = true; Q.lastRight = true; renderQuiz(); }
        else if (q.multi) { const want = q.options.map((o, k) => o.correct ? k : -1).filter(k => k >= 0); Q.picked = wantWrong ? [q.options.findIndex(o => !o.correct)] : want; submitMulti(); }
        else { const ok = q.options.findIndex(o => o.correct), bad = q.options.map((o, k) => k).filter(k => !q.options[k].correct && !document.querySelector('#v-quiz button.opt[data-o="' + k + '"]').disabled); answer(wantWrong ? bad[0] : ok); }
        if (!Q.revealed) return;
      }, i);
      const wrongShown = await p.evaluate(() => ({mix: !!document.querySelector('#v-quiz .mdmix'), quite: /Not quite/.test((document.querySelector('#v-quiz .verdict.bad') || {textContent: ''}).textContent), picked: !!document.querySelector('#v-quiz .youpicked'), bad: !!document.querySelector('#v-quiz .verdict.bad'), mc: (Q.current.type || 'mc') === 'mc', lm: !!Q.lm}));
      if (wrongShown.bad && wrongShown.mc && wrongShown.lm) {
        if (!(wrongShown.mix && wrongShown.quite && wrongShown.picked)) hintBad.push('wrong-answer extras missing ' + JSON.stringify(wrongShown));
      }
      await p.evaluate(() => { const nb = document.getElementById('btnNext'); if (nb) nb.click(); });
    }
    check(hintBad.length === 0 && hintOk >= 20, `${tag}: hints cross out one, then a second wrong option, never the key (${hintOk} questions)`, hintBad[0]);
    check(levels.length >= 8 && levels.every(l => l === 'foundation'), `${tag}: the first ${levels.length} questions are foundation`, levels.join());
    check(await p.evaluate(() => !!document.querySelector('#v-quiz .mdbar')), `${tag}: the switch is still in the Quiz header`);

    // add harder questions
    const widened = await p.evaluate(() => { const full = Q.lm.full.length; const b = document.querySelector('#v-quiz .mdadd'); if (b) b.click(); return {full, pool: Q.pool.length, all: Q.lm.all, hasBtn: !!b}; });
    check(widened.hasBtn && widened.pool === widened.full && widened.all, `${tag}: Add harder questions widens the pool to the whole set`, JSON.stringify(widened));

    // ---------- a way in, after two misses on one concept ----------
    const way = await p.evaluate(() => {
      // a concept with two questions of a mech or class skill, and one of another skill
      const find = (pred) => { const by = {}; QUESTIONS.filter(q => (q.type || 'mc') === 'mc' && !q.multi).forEach(q => { (by[q.concept] = by[q.concept] || []).push(q); });
        return Object.values(by).find(l => l.length >= 2 && pred(l[0]) && pred(l[1])); };
      const res = {};
      for (const [name, pred] of [['mech', q => ['mech', 'class'].includes(skillOf(q))], ['other', q => !['mech', 'class'].includes(skillOf(q))]]) {
        const l = find(pred); if (!l) { res[name] = null; continue; }
        const pool = poolFor(l[0].topic, null); startQuiz(l[0].topic, null); Q.pool = pool; Q.lm && (Q.lm.all = true);
        const force = q => { Q.current = q; Q.picked = null; Q.revealed = false; Q.startedAt = Date.now() + Math.random(); Q.order = shuffle(q.options.map((o, i) => i)); renderQuiz(); };
        const wrong = q => { const bad = q.options.findIndex(o => !o.correct); answer(bad); };
        force(l[0]); wrong(l[0]);
        const first = !!document.querySelector('#v-quiz .mdway');
        force(l[1]); wrong(l[1]);
        const second = document.querySelector('#v-quiz .mdway');
        res[name] = {first, second: !!second, text: second ? second.textContent : ''};
      }
      return res;
    });
    check(way.mech && !way.mech.first && way.mech.second && /what does it act on/.test(way.mech.text), `${tag}: after two misses on a mechanism concept: the two questions to ask`, JSON.stringify(way.mech));
    check(way.other && !way.other.first && way.other.second && /Read the explanation, then try the next one/.test(way.other.text) && !/what does it act on/.test(way.other.text), `${tag}: after two misses on another skill: the generic line`, JSON.stringify(way.other));

    // ---------- the end of the foundation set: score and next best things to review ----------
    await p.evaluate(() => startQuiz('oo-a2', null)); await p.waitForTimeout(100);
    let endFound = false;
    for (let i = 0; i < 80 && !endFound; i++) {
      endFound = await p.evaluate(i => {
        if (document.querySelector('#v-quiz .mdadd2')) return true;
        if (!Q.current) return false;
        const q = Q.current, bad = i % 2 === 0;
        if ((q.type || 'mc') === 'mc' && !q.multi) answer(bad ? q.options.findIndex(o => !o.correct) : q.options.findIndex(o => o.correct));
        else { Q.revealed = true; Q.lastRight = true; renderQuiz(); }
        const nb = document.getElementById('btnNext'); if (nb) nb.click();
        return !!document.querySelector('#v-quiz .mdadd2');
      }, i);
    }
    check(endFound, `${tag}: the foundation set ends with a button to add the harder questions`);
    const sum = await p.evaluate(() => { const s = document.querySelector('#v-quiz .mdsum'); return s ? s.textContent.replace(/\s+/g, ' ') : ''; });
    check(/Your score on this set: \d+ of \d+ right/.test(sum) && /Next best things? to review/.test(sum) && !/wrong|fail/i.test(sum), `${tag}: the summary shows the score and "Next best thing to review"`, sum);
    const lis = await p.evaluate(() => document.querySelectorAll('#v-quiz .mdsum li').length);
    check(lis >= 1 && lis <= 3, `${tag}: up to three things to review (${lis})`);
    check(await noScroll(), `${tag}: no sideways scroll at the end of the set`);
    await p.evaluate(() => document.querySelector('#v-quiz .mdadd2').click()); await p.waitForTimeout(100);
    check(await p.evaluate(() => Q.lm.all && Q.pool.length === Q.lm.full.length && !!Q.current), `${tag}: adding the harder questions continues the set`);

    // ---------- Weak spots wording (Learn), then the switch to Exam ----------
    await go('gaps');
    check(await p.evaluate(() => document.querySelector('#v-gaps h2').textContent.trim() === 'Next best things to review'), `${tag}: Weak spots heading in Learn`);
    check(await p.evaluate(() => /\d+\s*answered/.test(document.querySelector('#v-gaps .stat').textContent) && !!document.querySelector('#v-gaps .stat [data-stat], #v-gaps [data-stat="accuracy"]')), `${tag}: the counts are still there`);
    await go('topics');
    const learnTopics = await p.evaluate(() => { const c = document.getElementById('v-topics').cloneNode(true); c.querySelectorAll('.mdbar').forEach(e => e.remove()); return c.innerHTML; });
    await p.evaluate(() => document.querySelector('#v-topics .mdbtn[data-md="exam"]').click());
    check(await pressed() === 'learn=false,exam=true', `${tag}: the Exam button is pressed`, await pressed());
    check(await p.evaluate(() => localStorage.getItem(NS + ':mode') === 'exam'), `${tag}: the choice is stored under <NS>:mode`);
    const examTopics = await p.evaluate(() => { const c = document.getElementById('v-topics').cloneNode(true); c.querySelectorAll('.mdbar').forEach(e => e.remove()); return c.innerHTML; });
    check(learnTopics === examTopics, `${tag}: the Topics list and the filter chips are the same in both modes`);
    check(await p.evaluate(f => JSON.stringify(FILTER) === f, filterBefore), `${tag}: the filter is untouched by the mode`);
    check(await p.evaluate(() => document.querySelector('#nav button[data-v="gaps"]').textContent === 'Weak spots'), `${tag}: the tab says Weak spots in Exam`);
    await go('gaps');
    check(await p.evaluate(() => document.querySelector('#v-gaps h2').textContent.trim() === 'Weak spots'), `${tag}: Weak spots heading in Exam`);

    // ---------- Exam: today's behaviour ----------
    await p.evaluate(() => startQuiz('ey-in', null)); await p.waitForTimeout(150);
    check(await p.evaluate(() => !Q.lm && Q.pool.length === poolFor('ey-in', null).length), `${tag}: Exam keeps the whole pool`);
    let examBad = [];
    for (let i = 0; i < 12; i++) {
      const r = await p.evaluate(i => {
        const q = Q.current; if (!q) return null;
        const extra = ['.mdhint', '.mdmix', '.mdway', '.mdsum', '.mdx', '.mdadd'].filter(s => document.querySelector('#v-quiz ' + s));
        if ((q.type || 'mc') === 'mc' && !q.multi) answer(q.options.findIndex(o => !o.correct));
        else { Q.revealed = true; Q.lastRight = false; renderQuiz(); }
        const after = ['.mdhint', '.mdmix', '.mdway', '.mdsum', '.youpicked'].filter(s => document.querySelector('#v-quiz ' + s));
        const v = document.querySelector('#v-quiz .verdict.bad');
        const nb = document.getElementById('btnNext'); if (nb) nb.click();
        return {extra, after, verdict: v ? v.textContent.trim().slice(0, 14) : ''};
      }, i);
      if (!r) break;
      if (r.extra.length || r.after.length || (r.verdict && !/Not correct/.test(r.verdict))) examBad.push(JSON.stringify(r));
    }
    check(examBad.length === 0, `${tag}: Exam adds only the switch: no hint, prompt, way in or summary; the verdict is the core's`, examBad[0]);
    check(await noScroll(), `${tag}: no sideways scroll in Exam`);
    // reload: the choice is kept
    await p.reload(); await p.waitForTimeout(1200);
    check(await p.evaluate(() => MODES_UI.mode === 'exam'), `${tag}: the choice survives a reload`);
    await go('topics');
    await p.evaluate(() => document.querySelector('#v-topics .mdbtn[data-md="learn"]').click());
    // Learn: a quiz from Everything is the core's
    await p.evaluate(() => startQuiz(null, null)); await p.waitForTimeout(150);
    check(await p.evaluate(() => !Q.lm && !document.querySelector('#v-quiz .mdhint') && !!document.querySelector('#v-quiz .mdbar')), `${tag}: a quiz from Everything is not changed by Learn`);
    check(errs.length === 0, `${tag}: no page errors`, errs.join(' | '));
    await ctx.close();
  }
  await b.close();
  console.log(`${n - fail} passed, ${fail} failed`);
  process.exit(fail ? 1 : 0);
})();
