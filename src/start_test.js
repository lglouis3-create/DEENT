/* ==========================================================================
   START SCREEN AND TAB STRIP (start_ui.js): browser check
   ==========================================================================
   Chromium at 390x844 and 1100x900 (and the pinned strip at 1280x900): the Start screen sits at the top of
   Topics; one card per professor of the active exam, earlier exams as small buttons; a professor's topics listed
   from every exam with an exam tag, the active exam's first and marked; the Professor chip of the topic list
   still filters that list and does not shorten the Start list; a topic opens the core quiz, or HUB_UI.open when
   a hub exists; Next best thing to review (empty text, then the topic with missed questions); the tab strip shows
   six tabs; More opens a menu of nine tabs in two groups, each opens by click and by show(); More names the open
   view; keyboard (Enter, Escape, focus back); 44 px targets; the Back button and the Search button still work; the
   pinned strip still pins; no page error, no console error, no sideways scroll.
   Run: NODE_PATH=$(npm root -g) node src/start_test.js (after build.py). SHOTS=<dir> writes screenshots.
   ========================================================================== */
const L = require('./check_lib');
const NAME = 'start_test.js';
L.PAGE.need(NAME);
const SHOTS = process.env.SHOTS || '';
const SIZES = [['phone', 390, 844, true], ['desktop', 1100, 900, false]];
const MORE = {dz: 'Diseases', atlas: 'Atlas', diagrams: 'Diagrams', tell: 'Tell apart', ref: 'Reference', gloss: 'Glossary', gaps: 'Weak spots', ftu: 'FTU', settings: 'Settings'};

(async () => {
  const {browser} = await L.launch(NAME, {});
  for (const [label, width, height, touch] of SIZES) {
    const {ctx, page, errors} = await L.openFile(browser, {viewport: {width, height}, hasTouch: touch, isMobile: touch});
    const cerr = [];
    page.on('console', m => { if (m.type() === 'error') cerr.push(m.text()); });
    const tag = s => `${label}: ${s}`;
    const shot = async n => { if (SHOTS) await page.screenshot({path: `${SHOTS}/start_${n}_${width}.png`}); };
    await page.waitForFunction(() => document.querySelector('#startflow'), null, {timeout: 15000});

    /* ---- the Start screen ---- */
    const s0 = await page.evaluate(() => {
      const f = document.getElementById('startflow'), h2 = document.querySelector('#v-topics > h2');
      const cards = [...f.querySelectorAll('.sf-profs [data-sf-prof]')].map(b => b.dataset.sfProf);
      const earlier = [...f.querySelectorAll('.sf-earlier [data-sf-prof]')].map(b => b.dataset.sfProf);
      const act = parseInt(String(EXAM.id).replace(/\D/g, ''), 10);
      const profsWith = [...new Set(TOPICS.filter(t => QUESTIONS.some(q => q.topic === t.id)).map(t => t.prof))];
      const onExam = [...new Set(TOPICS.filter(t => !t.optional && (TOPIC_DECKS.find(d => d.id === t.deck) || {}).exam === act).map(t => t.prof))];
      return {act, head: (f.querySelector('h3') || {}).textContent, cards, earlier, profsWith, onExam,
        above: !!(h2 && h2.nextElementSibling === f), listStays: document.querySelectorAll('#v-topics details.topic').length > 5,
        steps: /learn/i.test(f.querySelector('.sf-steps').textContent) && /check yourself/i.test(f.querySelector('.sf-steps').textContent) && /challenge/i.test(f.querySelector('.sf-steps').textContent),
        next: (f.querySelector('#sfnext') || {}).textContent};
    });
    L.check(s0.head === 'Where do you want to start?' && s0.above, tag('the Start screen heads the Topics tab'), s0);
    L.check(JSON.stringify(s0.cards.slice().sort()) === JSON.stringify(s0.onExam.slice().sort()) && s0.cards.length >= 1, tag('one card per professor of the active exam'), s0);
    const ex0 = await page.evaluate(() => ({chips: [...document.querySelectorAll('#startflow [data-sf-exam]')].map(b => b.dataset.sfExam + ':' + b.getAttribute('aria-pressed')),
      want: [...new Set(TOPICS.filter(t => !t.optional && QUESTIONS.some(q => q.topic === t.id)).map(t => (TOPIC_DECKS.find(d => d.id === t.deck) || {}).exam).filter(n => n != null))].sort((a, b) => b - a)}));
    L.check(ex0.chips.length === ex0.want.length + 1 && ex0.want.every((n, i) => ex0.chips[i] === n + ':' + (n === s0.act ? 'true' : 'false')) && ex0.chips[ex0.chips.length - 1] === '0:false', tag('a "Study for" chip per exam and one for all exams, the active exam pressed'), ex0);
    await page.click('#startflow [data-sf-exam="0"]');
    const allP = await page.evaluate(() => [...document.querySelectorAll('#startflow .sf-prof')].map(b => b.dataset.sfProf));
    L.check(allP.length === s0.profsWith.length, tag('"All exams" lists every professor, those of the earlier exams included'), {allP, profsWith: s0.profsWith});
    await page.click(`#startflow [data-sf-exam="${s0.act}"]`);
    L.check(s0.listStays, tag('the topic list is still below'));
    L.check(s0.steps, tag('the three steps are explained under the cards'));
    L.check(!s0.next, tag('Next best thing to review is not shown when nothing is answered'), s0.next);
    await shot('a');

    /* ---- a professor's topics, every exam ---- */
    const target = await page.evaluate(() => { const act = parseInt(String(EXAM.id).replace(/\D/g, ''), 10);
      const ex = t => (TOPIC_DECKS.find(d => d.id === t.deck) || {}).exam;
      const p = [...new Set(TOPICS.filter(t => ex(t) === act).map(t => t.prof))].find(p => TOPICS.some(t => t.prof === p && !t.optional && ex(t) !== act && ex(t) != null)) || TOPICS[0].prof;
      return p; });
    await page.click('#startflow [data-sf-exam="0"]');
    await page.click(`#startflow .sf-prof[data-sf-prof="${target}"]`);
    const l1 = await page.evaluate(p => {
      const rows = [...document.querySelectorAll('#sflist .sf-topic')];
      const want = TOPICS.filter(t => t.prof === p && QUESTIONS.some(q => q.topic === t.id)).map(t => t.id);
      const act = parseInt(String(EXAM.id).replace(/\D/g, ''), 10);
      const exOf = id => (TOPIC_DECKS.find(d => d.id === (TOPICS.find(t => t.id === id) || {}).deck) || {}).exam;
      const ids = rows.map(r => r.dataset.sfTopic);
      const firstOther = ids.findIndex(id => exOf(id) !== act && !(TOPICS.find(t => t.id === id) || {}).optional);
      const lastAct = ids.map(id => exOf(id) === act).lastIndexOf(true);
      return {n: rows.length, want: want.length, same: JSON.stringify(ids.slice().sort()) === JSON.stringify(want.slice().sort()),
        tags: rows.every(r => /^(Exam \d|Optional)$/.test((r.querySelector('.sf-tag') || {}).textContent || '')),
        exams: [...new Set(rows.map(r => (r.querySelector('.sf-tag') || {}).textContent))],
        actFirst: firstOther === -1 || lastAct < firstOther, marked: rows.filter(r => r.classList.contains('sf-act')).length,
        counts: rows.every(r => /\d+ questions/.test(r.textContent)), pressed: document.querySelector(`#startflow [data-sf-prof="${p}"]`).getAttribute('aria-pressed')};
    }, target);
    L.check(l1.same && l1.n === l1.want, tag(`${target}: every topic of the professor is listed`), l1);
    L.check(l1.tags && l1.exams.length >= 2, tag('each topic has an exam tag, and more than one exam is listed'), l1);
    L.check(l1.actFirst && l1.marked >= 1, tag('the active exam\'s topics come first and are marked'), l1);
    L.check(l1.counts && l1.pressed === 'true', tag('each row shows its question count; the card is pressed'), l1);
    await shot('b');

    /* ---- the Professor chip of the topic list does not shorten the Start list ---- */
    const other = await page.evaluate(t => COURSE.professors.find(p => p !== t && TOPICS.some(x => x.prof === p)), target);
    const before = await page.evaluate(() => document.querySelectorAll('#sflist .sf-topic').length);
    await page.evaluate(p => { const b = document.querySelector(`#v-topics .chip[data-f="prof"][data-v="${p}"]`); b.click(); }, other);
    const chip = await page.evaluate(() => ({pressed: (document.querySelector('#v-topics .chip[data-f="prof"][aria-pressed="true"]') || {}).dataset.v,
      folders: [...document.querySelectorAll('#v-topics details.topic .tag')].map(t => t.textContent),
      sf: document.querySelectorAll('#startflow').length, rows: document.querySelectorAll('#sflist .sf-topic').length,
      cards: document.querySelectorAll('#startflow .sf-prof').length}));
    L.check(chip.pressed === other && chip.folders.length && chip.folders.every(t => t === other), tag('the Professor chip still filters the topic list'), chip);
    L.check(chip.sf === 1 && chip.rows === before && chip.cards >= 1, tag('with a Professor chip on, the Start screen lists the same topics'), {before, chip});
    // open a topic of a different professor than the chip: the quiz opens, the chip stays
    const tid = await page.evaluate(p => (TOPICS.find(t => t.prof === p && QUESTIONS.some(q => q.topic === t.id)) || {}).id, target);
    await page.evaluate(() => { window.__realHub = window.HUB_UI; window.HUB_UI = null; if (window.MODES_UI) MODES_UI.setMode('exam'); });  // the core quiz path: no topic hub, every question
    await page.click(`#sflist .sf-topic[data-sf-topic="${tid}"]`);
    const q1 = await page.evaluate(tid => ({view: VIEW, pool: Q && Q.pool.length, all: QUESTIONS.filter(q => q.topic === tid).length, chip: FILTER.prof}), tid);
    L.check(q1.view === 'quiz' && q1.pool === q1.all && q1.chip === other, tag('a topic opens its quiz with every question, and the chip is put back'), q1);
    await page.evaluate(() => { FILTER.prof = FILTER.tier = FILTER.tag = 'all'; show('topics'); });

    /* ---- HUB_UI when it exists ---- */
    await page.evaluate(() => { window.__hub = []; window.HUB_UI = {open: id => window.__hub.push(id)}; show('topics'); });
    L.check(await page.evaluate(() => !!document.getElementById('sflist')), tag('the professor chosen stays chosen when Topics is drawn again'));
    await page.click(`#sflist .sf-topic[data-sf-topic="${tid}"]`);
    const hub = await page.evaluate(() => ({hub: window.__hub.slice(), view: VIEW}));
    L.check(hub.hub.length === 1 && hub.hub[0] === tid && hub.view === 'topics', tag('with HUB_UI present a topic calls HUB_UI.open(topicId)'), hub);
    await page.evaluate(() => { window.HUB_UI = window.__realHub; });

    /* ---- Next best thing to review ---- */
    const miss = await page.evaluate(() => { const t = TOPICS.find(x => !x.optional && QUESTIONS.filter(q => q.topic === x.id).length > 3);
      const qs = QUESTIONS.filter(q => q.topic === t.id).slice(0, 3);
      qs.forEach(q => DB.answers.push({qid: q.id, result: 'wrong', at: Date.now()})); show('quiz'); show('topics');
      return {id: t.id, name: t.name, n: qs.length}; });
    const nb = await page.evaluate(() => (document.getElementById('sfnext') || {}).textContent);
    L.check(nb && nb.includes(miss.name) && /3 questions/.test(nb) && !/Nothing to review/.test(nb), tag('Next best thing to review names the topic with missed questions'), nb);
    await page.click('#sfnext [data-sf-review]');
    L.check(await page.evaluate(() => VIEW === 'quiz' && Q && Q.pool.length === 3), tag('"Review these" drills those questions'));
    await page.evaluate(() => show('topics'));
    L.check(await page.evaluate(() => { const r = document.querySelector('#startflow .sf-prof'); return !!r && document.documentElement.scrollWidth <= document.documentElement.clientWidth; }), tag('no sideways scroll on the Start screen'));

    /* ---- the tab strip ---- */
    const strip = await page.evaluate(() => [...document.querySelectorAll('#nav > button')].filter(b => b.offsetParent !== null).map(b => ({v: b.dataset.v || 'more', t: b.textContent.replace(/\s+/g, ' ').trim(), h: Math.round(b.getBoundingClientRect().height)})));
    L.check(strip.length === 6 && strip.map(s => s.v).join() === 'topics,quiz,exam,drugs,guide,more', tag('the strip shows six tabs'), strip);
    L.check(strip[0].t === 'Start', tag('the Topics tab reads Start'), strip[0]);
    L.check(strip.every(s => s.h >= 44), tag('strip targets are at least 44 px tall'), strip);
    L.check(await page.evaluate(() => document.querySelectorAll('#nav button[data-v]').length) === 14, tag('all 14 tabs are still in the page'));
    await page.click('#xmore'); await page.waitForTimeout(150);
    const m = await page.evaluate(() => { const mn = document.getElementById('xmenu'), r = mn.getBoundingClientRect();
      return {open: mn.classList.contains('open'), exp: document.getElementById('xmore').getAttribute('aria-expanded'),
        groups: [...mn.querySelectorAll('.xm-h')].map(h => h.textContent), items: [...mn.querySelectorAll('button[data-v]')].map(b => b.dataset.v),
        descs: [...mn.querySelectorAll('button[data-v]')].every(b => (b.querySelector('.xm-d') || {}).textContent.length > 10),
        small: [...mn.querySelectorAll('button[data-v]')].filter(b => b.getBoundingClientRect().height < 44).length,
        inside: r.left >= 0 && r.right <= innerWidth + 0.5 && r.bottom <= innerHeight + 0.5,
        tell: (mn.querySelector('button[data-v="tell"] .xm-d') || {}).textContent}; });
    L.check(m.open && m.exp === 'true', tag('More opens the menu'), m);
    L.check(m.groups.join() === 'Study material,Tools' && m.items.length === 9 && Object.keys(MORE).every(v => m.items.includes(v)), tag('nine tabs in two groups'), m);
    L.check(m.descs && m.tell === 'Pairs of drugs or diseases that get mixed up', tag('each item has a one-line description'), m.tell);
    L.check(m.small === 0 && m.inside, tag('menu items are at least 44 px tall and the menu is on screen'), m);
    await shot('menu');
    await page.keyboard.press('Escape');
    L.check(await page.evaluate(() => !document.getElementById('xmenu').classList.contains('open') && document.activeElement.id === 'xmore'), tag('Escape closes the menu and returns to More'));

    for (const v of Object.keys(MORE)) {
      await page.evaluate(() => show('topics'));
      await page.click('#xmore'); await page.waitForTimeout(60);
      await page.click(`#xmenu button[data-v="${v}"]`); await page.waitForTimeout(250);
      const r = await page.evaluate(v => ({view: VIEW, shown: !document.getElementById('v-' + v).classList.contains('hide'), closed: !document.getElementById('xmenu').classList.contains('open'),
        sel: document.getElementById('xmore').getAttribute('aria-selected'), cur: document.querySelector('#xmore .xm-cur').textContent,
        item: (document.querySelector(`#xmenu button[data-v="${v}"]`).getAttribute('aria-selected')), start: document.querySelector('#nav button[data-v="topics"]').getAttribute('aria-selected'),
        wide: document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1}), v);
      L.check(r.view === v && r.shown && r.closed, tag(`${MORE[v]}: opens by a click on its menu item`), r);
      L.check(r.sel === 'true' && r.cur === MORE[v] && r.item === 'true' && r.start === 'false', tag(`${MORE[v]}: More is highlighted and names it`), r);
      L.check(r.wide, tag(`${MORE[v]}: no sideways scroll`), r);
      await page.evaluate(() => show('quiz'));
      const q = await page.evaluate(() => ({sel: document.getElementById('xmore').getAttribute('aria-selected'), cur: document.querySelector('#xmore .xm-cur').hidden}));
      await page.evaluate(v => show(v), v); await page.waitForTimeout(120);
      const s = await page.evaluate(v => ({view: VIEW, shown: !document.getElementById('v-' + v).classList.contains('hide'), sel: document.getElementById('xmore').getAttribute('aria-selected'), cur: document.querySelector('#xmore .xm-cur').textContent}), v);
      L.check(q.sel === 'false' && q.cur === true && s.view === v && s.shown && s.sel === 'true' && s.cur === MORE[v], tag(`${MORE[v]}: show('${v}') opens it and the strip follows`), {q, s});
      if (v === 'tell') await shot('tell');
    }
    for (const v of ['topics', 'quiz', 'exam', 'drugs', 'guide']) {
      await page.evaluate(v => show(v), v);
      L.check(await page.evaluate(v => document.getElementById('xmore').getAttribute('aria-selected') === 'false' && document.querySelector(`#nav button[data-v="${v}"]`).getAttribute('aria-selected') === 'true', v), tag(`${v}: its own tab is selected and More is not`));
    }

    /* ---- keyboard ---- */
    await page.evaluate(() => { show('topics'); document.getElementById('xmore').focus(); });
    await page.keyboard.press('Enter'); await page.waitForTimeout(120);
    const kb = await page.evaluate(() => ({open: document.getElementById('xmenu').classList.contains('open'), inMenu: document.getElementById('xmenu').contains(document.activeElement)}));
    L.check(kb.open && kb.inMenu, tag('Enter on More opens the menu and moves focus into it'), kb);
    await page.keyboard.press('ArrowDown'); await page.keyboard.press('Enter'); await page.waitForTimeout(250);
    L.check(await page.evaluate(() => VIEW === 'atlas'), tag('arrow keys and Enter choose an item'));
    await page.keyboard.press('Tab');
    await page.evaluate(() => show('topics'));

    /* ---- Back and Search ---- */
    await page.evaluate(() => { const t = TOPICS.find(x => QUESTIONS.some(q => q.topic === x.id)); startQuiz(t.id, null); });
    await page.evaluate(() => jump('guide', null)); await page.waitForTimeout(100);
    const back = await page.evaluate(() => (document.getElementById('backbtn') || {}).textContent);
    L.check(/Back to the question/.test(back || ''), tag('"Back to the question" still appears after a jump'), back);
    await page.click('#backbtn'); await page.waitForTimeout(100);
    L.check(await page.evaluate(() => VIEW === 'quiz'), tag('and it returns to the quiz'));
    await page.evaluate(() => show('topics'));
    const sb = await page.$('#btnSearch');
    if (sb) { await sb.click(); await page.waitForTimeout(250);
      L.check(await page.evaluate(() => !!document.querySelector('dialog[open], #srchq') && document.activeElement && document.activeElement.id === 'srchq'), tag('the Search button still opens the search'));
      await page.keyboard.press('Escape'); await page.waitForTimeout(150); }
    else L.skip(tag('the Search button'), 'not on this build');

    L.check(!errors.length, tag('no page error'), errors);
    L.check(!cerr.length, tag('no console error'), cerr);
    await ctx.close();
  }

  /* ---- the pinned strip (wide window) keeps pinning, and the menu goes with it ---- */
  {
    const {ctx, page, errors} = await L.openFile(browser, {viewport: {width: 1280, height: 900}});
    await page.waitForFunction(() => document.querySelector('#startflow'), null, {timeout: 15000});
    await page.evaluate(() => { document.querySelector('#v-topics').insertAdjacentHTML('beforeend', '<div style="height:3000px"></div>'); window.scrollTo(0, 700); });
    await page.waitForTimeout(400);
    const pin = await page.evaluate(() => { const n = document.getElementById('nav'), r = n.getBoundingClientRect(); return {top: Math.round(r.top), pinned: n.classList.contains('xpinned'), pos: getComputedStyle(n).position}; });
    L.check(pin.pos === 'sticky' && pin.top === 0 && pin.pinned, 'wide: the strip is pinned at the top after scrolling', pin);
    await page.click('#xmore'); await page.waitForTimeout(120);
    const mt = await page.evaluate(() => { const n = document.getElementById('nav').getBoundingClientRect(), m = document.getElementById('xmenu').getBoundingClientRect(); return {gap: Math.round(m.top - n.bottom), open: document.getElementById('xmenu').classList.contains('open')}; });
    L.check(mt.open && mt.gap >= 0 && mt.gap <= 6, 'wide: the menu opens just under the pinned strip', mt);
    await page.waitForTimeout(500);
    await page.evaluate(() => window.scrollBy(0, 200)); await page.waitForTimeout(200);
    L.check(await page.evaluate(() => !document.getElementById('xmenu').classList.contains('open')), 'wide: scrolling closes the menu');
    L.check(!errors.length, 'wide: no page error', errors);
    await ctx.close();
  }
  await browser.close();
  L.finish(NAME);
})().catch(e => { console.log(`FAIL: ${NAME}: ${e && e.stack || e}`); process.exit(1); });
