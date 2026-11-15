/* glossary_test.js: the Glossary tab, "Words in this question" and My words (glossary_ui.js, glossary_data.js; Louis, 2026-11-14).
   NODE_PATH=$(npm root -g) node glossary_test.js     (reads ../preview/index.html; DRILL_PAGE overrides; SHOTS=<dir> saves screenshots)
   Run at 390 x 844 (phone) and 1180 x 820 (iPad), each on a fresh browser context:
   - the row "Words in this question (N)" is absent before the answer and present, closed, after it; it lists the expected terms
     of a known question (P6-008: Comedone; not RARE for the ordinary word "rare"); at most 14 terms;
   - detection: whole words, hyphen and dash variants and "PDE-4"/"PDE4" alike, a plain plural, Greek letters, cs terms only in
     their case, a term inside a longer term not listed again, order of first appearance;
   - a term opens its definition under the row (aria-expanded, citation text, "General definition" for src 'general');
   - marking writes the one key <NS>:words:v1:<profile> and shows in My words with count 1; again on the same question still 1;
     on another question 2; nothing is stored before a mark; a reload keeps it; a damaged record is dropped; a refused write shows
     one line and the word is kept in memory;
   - My words: sorted by times missed, Remove, Review my words (Show meaning, Got it lowers and removes, Still learning keeps,
     "N left"), Clear my words, the empty sentence;
   - an exam paper in progress shows no row; its review after submission does, closed;
   - the all-on-one-page cards get the row on an answered card only;
   - the tab: search (term, also, definition), All / Exam 2 / Exam 1 / My words; the search dialog opens the tab at a term;
   - 1,500 synthetic terms with the CPU slowed 4x: detection under 30 ms a question, first draw of the list and a typed filter
     under 150 ms, the whole list drawn within 4 s;
   - buttons at least 44 px high, no sideways page scroll, no page errors. */
const path = require('path');
const fs = require('fs');
const {chromium} = require('playwright');
const PAGE = 'file://' + path.resolve(__dirname, process.env.DRILL_PAGE || '../preview/index.html');
const SHOTS = process.env.SHOTS || '';
let fail = 0, n = 0;
const check = (ok, label, detail) => { n++; if (!ok) fail++; console.log((ok ? '  ok    ' : '  FAIL  ') + label + (ok || detail === undefined ? '' : '  — ' + String(typeof detail === 'string' ? detail : JSON.stringify(detail)).slice(0, 500))); };

(async () => {
  const b = await chromium.launch();
  for (const [w, h, tag] of [[390, 844, 'phone'], [1180, 820, 'ipad']]) {
    const errs = [];
    const ctx = await b.newContext({viewport: {width: w, height: h}});
    const p = await ctx.newPage();
    p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
    p.on('dialog', d => d.accept());
    await p.goto(PAGE); await p.waitForTimeout(1000);
    const shot = async name => { if (SHOTS) { fs.mkdirSync(SHOTS, {recursive: true}); await p.screenshot({path: path.join(SHOTS, `${name}-${w}x${h}.png`)}); } };
    const keys = () => p.evaluate(() => Object.keys(localStorage).filter(k => /:words:/.test(k)));
    const stored = () => p.evaluate(() => JSON.parse(localStorage.getItem(GLOSSARY_UI.key()) || 'null'));
    const ask = id => p.evaluate(i => { drillList([QUESTIONS.find(q => q.id === i)], 'glossary test'); if (typeof TOPIC_LIST_UI !== 'undefined' && TOPIC_LIST_UI && TOPIC_LIST_UI.setLayout) TOPIC_LIST_UI.setLayout('one'); }, id);
    const answer = async () => { await p.click('#v-quiz .qcard button.opt[data-o]'); await p.waitForTimeout(120); const c = await p.$('#btnCheck'); if (c) { await c.click(); await p.waitForTimeout(120); } };
    const row = () => p.evaluate(() => { const d = document.querySelector('#v-quiz details.gw'); return d ? {open: d.open, sum: d.querySelector('summary').textContent, terms: [...d.querySelectorAll('.gwt')].map(x => x.dataset.gwt),
      inWhy: !!d.closest('.why'), n: document.querySelectorAll('#v-quiz details.gw').length} : null; });
    const noScroll = () => p.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1);
    const small = sel => p.evaluate(s => [...document.querySelectorAll(s)].filter(x => x.offsetParent !== null && x.getBoundingClientRect().height < 43.5).map(x => x.textContent.trim().slice(0, 30) + ' ' + Math.round(x.getBoundingClientRect().height)), sel);

    check(!!(await p.$('#nav button[data-v="gloss"]')), `${tag}: the nav has a Glossary tab`);
    check((await keys()).length === 0, `${tag}: nothing is stored at load`);
    const nTerms = await p.evaluate(() => GLOSSARY_UI.terms().length);
    check(nTerms >= 30, `${tag}: the glossary has its terms`, nTerms);

    /* ---- detection ---- */
    const det = t => p.evaluate(x => GLOSSARY_UI.detect(x), t);
    check(JSON.stringify(await det('A PDE4 inhibitor, a PDE-4 inhibitor and a PDE‑4 inhibitor')) === '["pde4"]', `${tag}: PDE4, PDE-4 and a non-breaking hyphen are one term`, await det('A PDE4 inhibitor, a PDE-4 inhibitor and a PDE‑4 inhibitor'));
    check((await det('a rare lesion is not a response element')).length === 0, `${tag}: the ordinary word "rare" is not RARE`, await det('a rare lesion'));
    check(JSON.stringify(await det('binds the RARE on DNA')) === '["rare"]', `${tag}: RARE in capitals is found`);
    check((await det('a mace and a tci')).length === 0 && JSON.stringify(await det('MACE with TCIs')) === '["mace","tci"]', `${tag}: cs terms match only in their case; a plural of one matches`, await det('MACE with TCIs'));
    check(JSON.stringify(await det('Open comedones, then papules; pustules later. Comedone again.')) === '["comedone","papule","pustule"]', `${tag}: plurals, order of first appearance, each term once`, await det('Open comedones, then papules; pustules later. Comedone again.'));
    check((await det('microcomedones form first')).join() === 'microcomedone' && (await det('uncomedonelike')).length === 0, `${tag}: whole words only (microcomedone is not comedone)`, await det('microcomedones form first'));
    check((await det('TNF-α and TNF–α')).join() === 'tnf', `${tag}: a Greek letter and a dash variant`, await det('TNF-α and TNF–α'));
    check((await det('fingertip units (FTU)')).join() === 'ftu', `${tag}: a term and its abbreviation are one entry`);
    const inside = await p.evaluate(() => {
      const keep = GLOSSARY_UI.terms().slice();
      GLOSSARY_UI.setTerms([{id: 'a', term: 'contact dermatitis', def: 'x'}, {id: 'b', term: 'dermatitis', def: 'x'}, {id: 'c', term: 'allergic contact dermatitis', def: 'x'}, {id: 'd', term: 'Irritant (ICD)', def: 'x'}]);
      const r = [GLOSSARY_UI.detect('contact dermatitis'), GLOSSARY_UI.detect('allergic contact dermatitis, then dermatitis'), GLOSSARY_UI.detect(['allergic contact', 'dermatitis']), GLOSSARY_UI.detect('ICD or an irritant')];
      GLOSSARY_UI.setTerms(keep); return r;
    });
    check(JSON.stringify(inside[0]) === '["a"]' && JSON.stringify(inside[1]) === '["c","b"]', `${tag}: a term inside a longer term is not listed again`, inside);
    check(JSON.stringify(inside[2]) === '["b"]' && JSON.stringify(inside[3]) === '["d"]', `${tag}: no term across two texts; a bracketed short form in the name matches`, inside);

    /* ---- the row on a question ---- */
    await ask('P6-008');
    check((await row()) === null, `${tag}: no row before the answer`);
    await answer();
    let r = await row();
    check(!!r && r.n === 1 && r.open === false && r.inWhy, `${tag}: one row after the answer, closed, in the explanation`, r);
    check(!!r && /^Words in this question \(\d+\)$/.test(r.sum) && +/\((\d+)\)/.exec(r.sum)[1] === r.terms.length && r.terms.length <= 14, `${tag}: the summary counts the terms shown`, r);
    check(!!r && r.terms.includes('comedone') && !r.terms.includes('rare'), `${tag}: P6-008 lists Comedone and not RARE`, r);
    await p.evaluate(() => document.querySelector('#v-quiz details.gw').scrollIntoView({block: 'center'}));
    await shot('1-row-closed');
    check((await keys()).length === 0, `${tag}: answering stores no words`);
    await p.click('#v-quiz details.gw > summary'); await p.waitForTimeout(80);
    check(await p.evaluate(() => document.querySelector('#v-quiz details.gw').open && document.querySelector('#v-quiz .gwdef').hidden), `${tag}: opened, the row shows the terms and no definition yet`);
    await p.click('#v-quiz .gwt[data-gwt="comedone"]'); await p.waitForTimeout(80);
    let d = await p.evaluate(() => { const x = document.querySelector('#v-quiz .gwdef'), bt = document.querySelector('#v-quiz .gwt[data-gwt="comedone"]'), mk = x.querySelector('[data-gwmark]');
      return {hidden: x.hidden, text: x.textContent, exp: bt.getAttribute('aria-expanded'), ctl: bt.getAttribute('aria-controls') === x.id, pressed: mk && mk.getAttribute('aria-pressed'), label: mk && mk.textContent,
        focus: document.activeElement === bt, others: [...document.querySelectorAll('#v-quiz .gwt[aria-expanded="true"]')].length}; });
    const comDef = await p.evaluate(() => { const t = GLOSSARY_UI.terms().find(x => x.id === 'comedone'); return {def: t.def, cite: t.cite}; });
    check(!d.hidden && d.text.includes(comDef.def) && /Patel Acne slides? 5/.test(d.text), `${tag}: a term shows its definition and citation under the row`, d.text);
    check(d.exp === 'true' && d.ctl && d.others === 1 && d.focus, `${tag}: aria-expanded on the term, focus stays on it`, d);
    check(d.pressed === 'false' && /didn.t know this/.test(d.label), `${tag}: the toggle reads "I didn't know this", not pressed`, d);
    await p.waitForTimeout(500);
    check(await p.evaluate(() => !!document.querySelector('#v-quiz .gwdef .gcite .slk')), `${tag}: the citation becomes a slide link`);
    await p.evaluate(() => document.querySelector('#v-quiz details.gw').scrollIntoView({block: 'center'}));
    await shot('2-row-open-definition');
    check((await small('#v-quiz details.gw button, #v-quiz details.gw > summary')).length === 0, `${tag}: the row's buttons are at least 44 px high`, await small('#v-quiz details.gw button, #v-quiz details.gw > summary'));
    check(await noScroll(), `${tag}: no sideways scroll with the row open`);
    check((await keys()).length === 0, `${tag}: opening a definition stores nothing`);

    /* ---- marking ---- */
    await p.click('#v-quiz [data-gwmark]'); await p.waitForTimeout(80);
    let s = await stored();
    check(JSON.stringify(await keys()) === JSON.stringify([await p.evaluate(() => NS + ':words:v1:' + PROFILE)]), `${tag}: a mark writes the one key <NS>:words:v1:<profile>`, await keys());
    check(JSON.stringify(s) === '{"v":1,"w":{"comedone":{"n":1,"q":["P6-008"]}}}', `${tag}: the record is {v:1, w:{comedone:{n:1, q:[P6-008]}}}`, s);
    d = await p.evaluate(() => { const mk = document.querySelector('#v-quiz [data-gwmark]'); return {pressed: mk.getAttribute('aria-pressed'), label: mk.textContent, focus: document.activeElement === mk, mine: document.querySelector('#v-quiz .gwt[data-gwt="comedone"]').classList.contains('mine'), cnt: document.querySelector('#v-quiz .gcnt').textContent}; });
    check(d.pressed === 'true' && d.label === 'Marked: in My words' && d.focus && d.mine && d.cnt === 'Missed once', `${tag}: the toggle reads "Marked: in My words", pressed; the term carries a mark`, d);
    // the same question drawn again keeps the row open at the term; marking twice on the same question still 1
    await p.evaluate(() => renderQuiz()); await p.waitForTimeout(60);
    check(await p.evaluate(() => { const x = document.querySelector('#v-quiz details.gw'); return x.open && x.dataset.gwopen === 'comedone' && document.querySelector('#v-quiz [data-gwmark]').getAttribute('aria-pressed') === 'true'; }), `${tag}: the same answered question drawn again keeps the open row`);
    await p.evaluate(() => GLOSSARY_UI.mark('comedone', 'P6-008'));
    check((await stored()).w.comedone.n === 1, `${tag}: marked twice on the same question: still 1`);
    await p.click('#v-quiz [data-gwmark]'); await p.waitForTimeout(50);
    check(JSON.stringify(await stored()) === '{"v":1,"w":{}}', `${tag}: pressing the toggle again takes the miss back`);
    await p.click('#v-quiz [data-gwmark]'); await p.waitForTimeout(50);
    check((await stored()).w.comedone.n === 1, `${tag}: marked again: 1`);
    // the same question answered again later: closed again, the marked term first, still 1
    await ask('P6-008'); await answer();
    r = await row();
    check(!!r && r.open === false && r.terms[0] === 'comedone', `${tag}: answered again: the row is closed and the marked term comes first`, r);
    await p.click('#v-quiz details.gw > summary'); await p.click('#v-quiz .gwt[data-gwt="comedone"]'); await p.waitForTimeout(60);
    check(await p.evaluate(() => document.querySelector('#v-quiz [data-gwmark]').getAttribute('aria-pressed')) === 'true' && (await stored()).w.comedone.n === 1, `${tag}: the same question again shows it marked; still 1`);
    // another question with the same term
    const other = await p.evaluate(() => (QUESTIONS.find(q => q.id !== 'P6-008' && (q.type || 'mc') === 'mc' && !q.options.filter(o => o.correct)[1] && GLOSSARY_UI.termsFor(q).includes('comedone')) || {}).id);
    check(!!other, `${tag}: a second question with Comedone exists`, other);
    await ask(other); await answer();
    await p.click('#v-quiz details.gw > summary'); await p.click('#v-quiz .gwt[data-gwt="comedone"]'); await p.waitForTimeout(60);
    check(await p.evaluate(() => document.querySelector('#v-quiz [data-gwmark]').getAttribute('aria-pressed')) === 'false', `${tag}: on another question the toggle is not pressed`);
    await p.click('#v-quiz [data-gwmark]'); await p.waitForTimeout(60);
    s = await stored();
    check(s.w.comedone.n === 2 && s.w.comedone.q.length === 2, `${tag}: marked on another question: 2`, s);
    // a second term, marked once
    const t2 = await p.evaluate(() => [...document.querySelectorAll('#v-quiz .gwt')].map(x => x.dataset.gwt).find(x => x !== 'comedone') || null);
    if (t2) { await p.click(`#v-quiz .gwt[data-gwt="${t2}"]`); await p.click('#v-quiz [data-gwmark]'); await p.waitForTimeout(50); }
    else await p.evaluate(() => GLOSSARY_UI.mark('papule', 'X-1'));
    const second = t2 || 'papule';

    /* ---- reload keeps ---- */
    await p.reload(); await p.waitForTimeout(900);
    check((await p.evaluate(() => GLOSSARY_UI.words())).w.comedone.n === 2, `${tag}: a reload keeps My words`);

    /* ---- the tab ---- */
    await p.click('#nav button[data-v="gloss"]'); await p.waitForTimeout(300);
    check(await p.evaluate(() => VIEW === 'gloss' && !document.getElementById('v-gloss').classList.contains('hide') && document.querySelector('#nav button[data-v="gloss"]').getAttribute('aria-selected') === 'true'), `${tag}: the tab opens`);
    let tab = await p.evaluate(() => ({n: document.querySelectorAll('#v-gloss .gle').length, heads: [...document.querySelectorAll('#v-gloss .gll')].map(x => x.textContent).join(''), count: document.getElementById('glcount').textContent,
      myn: document.getElementById('glmyn').textContent, pressed: [...document.querySelectorAll('#v-gloss [data-glf][aria-pressed="true"]')].map(x => x.dataset.glf).join(),
      names: [...document.querySelectorAll('#v-gloss .gle .gdt b')].map(x => x.textContent), marked: [...document.querySelectorAll('#v-gloss [data-glmark][aria-pressed="true"]')].length}));
    check(tab.n === nTerms && tab.count === nTerms + ' terms' && tab.pressed === 'all', `${tag}: All lists every term`, tab);
    check(tab.heads === [...tab.heads].sort().join('') && tab.heads.length > 5 && JSON.stringify(tab.names) === JSON.stringify(tab.names.slice().sort((a, c) => a.localeCompare(c, 'en', {sensitivity: 'base', numeric: true}))), `${tag}: the list is A to Z under letter headings`, tab.heads);
    check(tab.myn === '2' && tab.marked === 2, `${tag}: My words (2); the two marked terms show pressed in the list`, tab);
    await shot('3-glossary-tab');
    check((await small('#v-gloss button, #v-gloss input, #v-gloss select')).length === 0, `${tag}: the tab's buttons are at least 44 px high`, await small('#v-gloss button, #v-gloss input, #v-gloss select'));
    check(await noScroll(), `${tag}: no sideways scroll on the tab`);
    const list = () => p.evaluate(() => [...document.querySelectorAll('#v-gloss .gle')].map(x => x.dataset.gle));
    await p.fill('#glq', 'pde4'); await p.waitForTimeout(80);
    check((await list()).join() === 'pde4', `${tag}: search "pde4" finds PDE-4`, await list());
    await p.fill('#glq', 'sun protection'); await p.waitForTimeout(80);
    check((await list()).includes('spf'), `${tag}: search matches an "also" form`, await list());
    await p.fill('#glq', 'poison ivy'); await p.waitForTimeout(80);
    check((await list()).includes('urushiol'), `${tag}: search matches a definition`, await list());
    check(await p.evaluate(() => document.activeElement.id === 'glq'), `${tag}: the search field keeps the cursor while typing`);
    await p.fill('#glq', 'zzqx'); await p.waitForTimeout(80);
    check((await list()).length === 0 && await p.evaluate(() => document.getElementById('glcount').textContent) === '0 terms', `${tag}: a word that matches nothing gives "0 terms"`);
    await p.fill('#glq', ''); await p.waitForTimeout(80);
    const exams = await p.evaluate(() => { const t = GLOSSARY_UI.terms(); return {e1: t.filter(x => x.exam === 1).map(x => x.id).sort().join(), e2: t.filter(x => x.exam === 2).map(x => x.id).sort().join()}; });
    await p.click('#v-gloss [data-glf="e1"]'); await p.waitForTimeout(80);
    check((await list()).sort().join() === exams.e1 && exams.e1.length > 0, `${tag}: Exam 1 lists the Exam 1 terms`);
    await p.click('#v-gloss [data-glf="e2"]'); await p.waitForTimeout(80);
    check((await list()).sort().join() === exams.e2 && exams.e2.length > 0, `${tag}: Exam 2 lists the Exam 2 terms`);
    const gen = await p.evaluate(() => { const t = GLOSSARY_UI.terms().find(x => x.src === 'general'); if (!t) return null; const e = document.querySelector(`#v-gloss .gle[data-gle="${t.id}"] .gcite`); return e ? e.textContent : ''; });
    check(gen === null || /^General definition/.test(gen), `${tag}: a general definition says "General definition"`, gen);
    // mark and unmark in the list
    await p.click('#v-gloss [data-glf="all"]'); await p.waitForTimeout(80);
    await p.click('#v-gloss [data-glmark="urushiol"]'); await p.waitForTimeout(50);
    check((await stored()).w.urushiol.n === 1 && await p.evaluate(() => document.getElementById('glmyn').textContent === '3' && document.querySelector('[data-glmark="urushiol"]').getAttribute('aria-pressed') === 'true'), `${tag}: "I didn't know this" in the list adds the term with 1`);
    await p.click('#v-gloss [data-glmark="urushiol"]'); await p.waitForTimeout(50);
    check(!(await stored()).w.urushiol && await p.evaluate(() => document.getElementById('glmyn').textContent === '2'), `${tag}: pressing it again takes the term out`);

    /* ---- My words ---- */
    await p.click('#v-gloss [data-glf="mine"]'); await p.waitForTimeout(100);
    let mine = await p.evaluate(() => [...document.querySelectorAll('#v-gloss .gle')].map(x => x.dataset.gle + ':' + x.querySelector('.gcnt').textContent));
    check(JSON.stringify(mine) === JSON.stringify(['comedone:Missed 2 times', second + ':Missed once']), `${tag}: My words lists the marked terms, most missed first, with counts`, mine);
    check(await p.evaluate(() => !!document.querySelector('#v-gloss [data-glrm]') && !!document.querySelector('[data-glact="review"]') && !!document.querySelector('[data-glact="clear"]')), `${tag}: Remove, Review my words and Clear my words are there`);
    await p.click('[data-glact="review"]'); await p.waitForTimeout(80);
    let rv = await p.evaluate(() => ({left: document.getElementById('glleft').textContent, term: document.querySelector('.glrt b').textContent, def: !!document.getElementById('glrd'), got: !!document.querySelector('[data-glact="got"]'), focus: document.activeElement.dataset.glact}));
    check(rv.left === '2 left' && rv.term === 'Comedone' && !rv.def && !rv.got && rv.focus === 'showdef', `${tag}: the review shows one term, "2 left", the meaning hidden`, rv);
    await shot('4-review-hidden');
    await p.click('[data-glact="showdef"]'); await p.waitForTimeout(60);
    rv = await p.evaluate(() => ({def: (document.getElementById('glrd') || {}).textContent || '', got: !!document.querySelector('[data-glact="got"]'), still: !!document.querySelector('[data-glact="still"]')}));
    check(rv.def.includes(comDef.def) && rv.got && rv.still, `${tag}: "Show meaning" shows the definition with Got it and Still learning`, rv);
    await shot('5-review-meaning');
    check((await small('#v-gloss button')).length === 0, `${tag}: the review's buttons are at least 44 px high`);
    await p.click('[data-glact="got"]'); await p.waitForTimeout(60);
    check((await stored()).w.comedone.n === 1 && await p.evaluate(() => document.getElementById('glleft').textContent) === '1 left', `${tag}: Got it lowers the count by one; "1 left"`);
    await p.click('[data-glact="showdef"]'); await p.click('[data-glact="still"]'); await p.waitForTimeout(60);
    check((await stored()).w[second].n === 1 && await p.evaluate(() => document.getElementById('glleft').textContent === '0 left' && /finished/.test(document.querySelector('.glrev').textContent)), `${tag}: Still learning keeps the count; the review ends at "0 left"`);
    await p.click('[data-glact="endreview"]'); await p.waitForTimeout(60);
    await p.click('[data-glact="review"]'); await p.click('[data-glact="showdef"]'); await p.click('[data-glact="got"]'); await p.waitForTimeout(60);
    s = await stored();
    check(Object.keys(s.w).length === 1 && await p.evaluate(() => document.getElementById('glmyn').textContent) === '1', `${tag}: Got it at one miss takes the term out of My words`, s);
    await p.click('[data-glact="endreview"]'); await p.waitForTimeout(60);
    await p.click('#v-gloss [data-glrm]'); await p.waitForTimeout(60);
    s = await stored();
    check(Object.keys(s.w).length === 0, `${tag}: Remove takes a term out`, s);
    const empty = await p.evaluate(() => (document.getElementById('glempty') || {}).textContent || '');
    check(/^A term is added here when you press .I didn.t know this. on it, under an answered question or in this list\.$/.test(empty), `${tag}: an empty My words says how words get there, in one sentence`, empty);
    // Clear
    await p.evaluate(() => { GLOSSARY_UI.mark('papule', 'X-1'); GLOSSARY_UI.mark('pustule', 'X-1'); GLOSSARY_UI.render(); });
    await p.click('[data-glact="clear"]'); await p.waitForTimeout(60);
    check(JSON.stringify(await stored()) === '{"v":1,"w":{}}' && await p.evaluate(() => !!document.getElementById('glempty') && document.getElementById('glmyn').textContent === '0'), `${tag}: Clear my words empties the list`);

    /* ---- stored record checked on load; a refused write ---- */
    for (const [bad, why] of [['{"v":1,"w":{"comedone":{"n":0,"q":[]}}}', 'a count of 0'], ['{"v":2,"w":{}}', 'another version'], ['{"v":1,"w":{"comedone":{"n":1,"q":[5]}}}', 'a question id that is not text'], ['not json', 'not JSON']]) {
      await p.evaluate(v => { localStorage.setItem(GLOSSARY_UI.key(), v); GLOSSARY_UI.state.data = null; }, bad);
      check(JSON.stringify(await p.evaluate(() => GLOSSARY_UI.words())) === '{"v":1,"w":{}}', `${tag}: a damaged record (${why}) is dropped`);
    }
    await p.evaluate(() => { localStorage.removeItem(GLOSSARY_UI.key()); GLOSSARY_UI.state.data = null; });
    await p.evaluate(() => { window.__set = Storage.prototype.setItem; Storage.prototype.setItem = function(k){ if (/:words:/.test(k)) throw new Error('refused'); return window.__set.apply(this, arguments); }; });
    await p.click('#v-gloss [data-glf="all"]'); await p.waitForTimeout(60);
    await p.click('#v-gloss [data-glmark="papule"]'); await p.waitForTimeout(60);
    check(await p.evaluate(() => { const q = document.getElementById('glquiet'); return !q.hidden && /could not be saved/.test(q.textContent) && document.getElementById('glmyn').textContent === '1' && localStorage.getItem(GLOSSARY_UI.key()) === null; }), `${tag}: a refused write shows one line; the word is kept in memory`);
    await p.evaluate(() => { Storage.prototype.setItem = window.__set; GLOSSARY_UI.unmark('papule'); GLOSSARY_UI.render(); });
    check(await p.evaluate(() => document.getElementById('glquiet').hidden), `${tag}: the line goes once a write succeeds`);
    await p.evaluate(() => { localStorage.removeItem(GLOSSARY_UI.key()); GLOSSARY_UI.state.data = null; });

    /* ---- the search dialog ---- */
    const viaSearch = await p.evaluate(async () => {
      if (typeof SEARCH_UI === 'undefined' || !SEARCH_UI || !SEARCH_UI.search) return null;
      const g = SEARCH_UI.search('urushiol').groups.find(x => x.type === 'gterm'); return g ? g.items.map(x => x.id) : [];
    });
    check(viaSearch === null || viaSearch.includes('urushiol'), `${tag}: the search index has the glossary terms`, viaSearch);
    if (viaSearch !== null) {
      await p.evaluate(() => { show('topics'); SEARCH_UI.open(); });
      await p.fill('dialog.srch input', 'urushiol'); await p.waitForTimeout(250);
      const hit = await p.evaluate(() => { const x = [...document.querySelectorAll('.srch .sh')].find(y => /Glossary/.test(y.querySelector('.k').textContent)); if (x) x.click(); return !!x; });
      await p.waitForTimeout(250);
      check(hit && await p.evaluate(() => VIEW === 'gloss' && !document.querySelector('dialog.srch').open && [...document.querySelectorAll('#v-gloss .gle')].map(x => x.dataset.gle).join() === 'urushiol'), `${tag}: a Glossary result in the search dialog opens the tab at that term`);
    }
    await p.evaluate(() => show('topics'));
    await p.evaluate(() => GLOSSARY_UI.open('urushiol')); await p.waitForTimeout(100);
    check(await p.evaluate(() => VIEW === 'gloss' && document.getElementById('glq').value === 'Urushiol' && [...document.querySelectorAll('#v-gloss .gle')].map(x => x.dataset.gle).join() === 'urushiol'), `${tag}: open(id) shows the tab filtered to that term`);
    await p.fill('#glq', ''); await p.waitForTimeout(50);

    /* ---- the all-on-one-page cards ---- */
    const tl = await p.evaluate(async o => {
      if (typeof TOPIC_LIST_UI === 'undefined' || !TOPIC_LIST_UI || !TOPIC_LIST_UI.setLayout) return null;
      drillList(['P6-008', o].map(id => QUESTIONS.find(q => q.id === id)), 'glossary list'); TOPIC_LIST_UI.setLayout('all');
      await new Promise(r => setTimeout(r, 150));
      const before = document.querySelectorAll('#v-quiz details.gw').length;
      const c = document.querySelector('#v-quiz .tlcard'); c.querySelector('button.opt[data-o]').click();
      await new Promise(r => setTimeout(r, 200));
      const chk = document.querySelector('#v-quiz .tlcard [data-tlcheck]'); if (chk && !document.querySelector('#v-quiz .tlcard .why')) { chk.click(); await new Promise(r => setTimeout(r, 200)); }
      const cards = [...document.querySelectorAll('#v-quiz .tlcard')];
      const res = {before, first: cards[0].querySelectorAll('details.gw').length, firstOpen: !!(cards[0].querySelector('details.gw') || {}).open, second: cards[1] ? cards[1].querySelectorAll('details.gw').length : -1};
      TOPIC_LIST_UI.setLayout('one');
      return res;
    }, other);
    check(tl === null || (tl.before === 0 && tl.first === 1 && !tl.firstOpen && tl.second === 0), `${tag}: all on one page: the row is on the answered card only, closed`, tl);

    /* ---- an exam paper ---- */
    await p.evaluate(() => { if (EX) { clearInterval(EX.timer); EX = null; } if (typeof clearExam === 'function') clearExam(); show('exam'); });
    const sb = await p.$('#startExam');
    if (sb) {
      await sb.click(); await p.waitForTimeout(200);
      const picked = await p.evaluate(() => { const o = document.querySelector('#v-exam button.opt, #v-exam .opt'); if (o) o.click(); return !!o; });
      await p.waitForTimeout(100);
      check(await p.evaluate(() => !!(EX && EX.running) && document.querySelectorAll('details.gw').length === 0), `${tag}: an exam paper in progress shows no row (an option picked: ${picked})`);
      await p.evaluate(() => finishExam(true)); await p.waitForTimeout(400);
      const ex = await p.evaluate(() => ({done: !!(EX && EX.done), cards: document.querySelectorAll('#v-exam > .qcard').length, rows: document.querySelectorAll('#v-exam > .qcard details.gw').length, open: document.querySelectorAll('#v-exam details.gw[open]').length,
        want: EX.qs.filter(q => GLOSSARY_UI.termsFor(q).length).length, two: [...document.querySelectorAll('#v-exam > .qcard')].filter(c => c.querySelectorAll('details.gw').length > 1).length}));
      check(ex.done && ex.rows === ex.want && ex.rows > 0 && ex.open === 0 && ex.two === 0, `${tag}: the review of the submitted paper has one closed row on each question with a term`, ex);
      await p.click('#v-exam details.gw > summary'); await p.click('#v-exam details.gw .gwt'); await p.click('#v-exam details.gw [data-gwmark]'); await p.waitForTimeout(60);
      s = await stored();
      check(!!s && Object.keys(s.w).length === 1 && Object.values(s.w)[0].n === 1, `${tag}: a term can be marked from the paper's review`, s);
      check(await noScroll(), `${tag}: no sideways scroll on the review`);
      await p.evaluate(() => { if (EX) { clearInterval(EX.timer); EX = null; } if (typeof clearExam === 'function') clearExam(); localStorage.removeItem(GLOSSARY_UI.key()); GLOSSARY_UI.state.data = null; });
    } else check(false, `${tag}: the exam start button was found`);

    /* ---- a question with no term gets nothing ---- */
    const none = await p.evaluate(() => (QUESTIONS.find(q => (q.type || 'mc') === 'mc' && !GLOSSARY_UI.termsFor(q).length) || {}).id);
    if (none) { await ask(none); await answer(); check((await row()) === null && await p.evaluate(() => !!document.querySelector('#v-quiz .why')), `${tag}: a question with no term gets no row (${none})`); }

    /* ---- 1,500 terms, CPU slowed 4x ---- */
    const cdp = await ctx.newCDPSession(p);
    await cdp.send('Emulation.setCPUThrottlingRate', {rate: 4});
    const perf = await p.evaluate(async () => {
      const keep = GLOSSARY_UI.terms().slice(), syn = [];
      const A = 'acro bili cuta derm eryth fibro gluco hemo immuno kerat lipo melano neuro onycho patho'.split(' '), B = 'blast cyte genic lytic oma osis pathy plasia static trophy'.split(' ');
      for (let i = 0; syn.length < 1500 - keep.length; i++) {
        const a = A[i % A.length], c = B[(i / A.length | 0) % B.length], k = (i / 150 | 0);
        syn.push({id: 'syn' + i, term: a + c + (k ? ' type ' + k : ''), also: [a.slice(0, 2).toUpperCase() + c.slice(0, 1).toUpperCase() + i, a + ' ' + c + ' factor ' + i], def: 'Synthetic entry ' + i + ' for the timing test; ' + a + ' ' + c + '.', cite: 'Patel Acne slide ' + (1 + i % 40), src: 'slide', exam: 1 + i % 2, kind: 'term'});
      }
      GLOSSARY_UI.setTerms(keep.concat(syn));
      const qs = QUESTIONS.slice().sort((x, y) => JSON.stringify(y).length - JSON.stringify(x).length).slice(0, 40);
      let t0 = performance.now(); GLOSSARY_UI.detect('warm'); const build = performance.now() - t0;
      let worst = 0, sum = 0;
      for (const q of qs) { GLOSSARY_UI.setTerms(GLOSSARY_UI.terms()); GLOSSARY_UI.detect('warm'); t0 = performance.now(); GLOSSARY_UI.termsFor(q); const d = performance.now() - t0; sum += d; if (d > worst) worst = d; }
      const found = GLOSSARY_UI.detect('acroblast and bilicyte type 3, CUG32; derm genic factor 33').join();
      // the row on a question
      t0 = performance.now(); drillList([qs[0]], 'timing'); const rowDraw = performance.now() - t0;
      // the list
      GLOSSARY_UI.state.filter = 'all'; GLOSSARY_UI.state.q = '';
      t0 = performance.now(); show('gloss'); const first = performance.now() - t0;
      const t1 = performance.now();
      while (GLOSSARY_UI.state.pending && performance.now() - t1 < 8000) await new Promise(r => setTimeout(r, 20));
      const all = performance.now() - t1, nAll = document.querySelectorAll('#v-gloss .gle').length;
      const inp = document.getElementById('glq'); inp.value = 'kerat';
      t0 = performance.now(); inp.dispatchEvent(new Event('input', {bubbles: true})); const typed = performance.now() - t0;
      const nTyped = +document.getElementById('glcount').textContent.replace(/\D+/g, '');
      inp.value = ''; inp.dispatchEvent(new Event('input', {bubbles: true}));
      GLOSSARY_UI.setTerms(keep); GLOSSARY_UI.state.q = ''; GLOSSARY_UI.render();
      return {total: keep.length + syn.length, build, worst, mean: sum / qs.length, found, rowDraw, first, all, nAll, typed, nTyped, chars: JSON.stringify(qs[0]).length};
    });
    await cdp.send('Emulation.setCPUThrottlingRate', {rate: 1});
    const f1 = x => Math.round(x * 10) / 10;
    console.log(`        ${tag} timing, 4x slower CPU, ${perf.total} terms: table built ${f1(perf.build)} ms; detection worst ${f1(perf.worst)} ms, mean ${f1(perf.mean)} ms over the 40 longest questions (longest ${perf.chars} characters); list first draw ${f1(perf.first)} ms, all ${perf.nAll} drawn after ${f1(perf.all)} ms; typed filter ${f1(perf.typed)} ms`);
    check(perf.total === 1500 && perf.found === 'syn0,syn466,syn32,syn33', `${tag}: 1,500 terms: synthetic terms are found by name, numbered name, short form and long form`, perf.found);
    check(perf.worst < 30, `${tag}: 1,500 terms: detection for a question under 30 ms (worst ${f1(perf.worst)} ms)`);
    check(perf.build < 150, `${tag}: 1,500 terms: the table is built in under 150 ms (${f1(perf.build)} ms)`);
    check(perf.first < 150 && perf.typed < 150, `${tag}: 1,500 terms: first draw of the list and a typed filter under 150 ms (${f1(perf.first)}, ${f1(perf.typed)} ms)`);
    check(perf.nAll === 1500 && perf.all < 4000 && perf.nTyped > 50, `${tag}: 1,500 terms: the whole list is drawn within 4 s (${Math.round(perf.all)} ms)`, perf);

    // another profile opened while the tab is showing: the list is drawn again from that profile's words
    const sw = await p.evaluate(() => { const me = PROFILE; GLOSSARY_UI.setTerms(GLOSSARY_UI.terms().length > 49 ? GLOSSARY_UI.terms().slice(0, 49) : GLOSSARY_UI.terms()); const id = GLOSSARY_UI.terms()[0].id;
      GLOSSARY_UI.mark(id); show('gloss'); const a = document.getElementById('glmyn').textContent; useProfile('Skeptic B'); const b = document.getElementById('glmyn').textContent; useProfile(me); const c = document.getElementById('glmyn').textContent; GLOSSARY_UI.unmark(id); localStorage.removeItem(GLOSSARY_UI.key()); return [a, b, c]; });
    check(sw[1] === '0' && sw[0] === sw[2] && sw[0] !== '0', `${tag}: opening another profile redraws My words from that profile (${sw.join('/')})`, sw);
    check((await keys()).length === 0, `${tag}: the test leaves nothing stored`, await keys());
    check(errs.length === 0, `${tag}: no page errors`, errs.join(' | '));
    await ctx.close();
  }
  await b.close();
  console.log(`\nglossary_test: ${n - fail} of ${n} checks passed` + (fail ? `, ${fail} FAILED` : ''));
  process.exit(fail ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
