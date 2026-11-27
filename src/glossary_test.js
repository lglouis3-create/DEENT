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
    check(nTerms >= 700, `${tag}: the glossary has its terms`, nTerms);
    // the full data's ids are not stable names: look each entry up by its term text
    const T = term => p.evaluate(x => { const a = GLOSSARY_UI.terms().filter(t => t.term === x); return a.length === 1 ? a[0].id : null; }, term);
    const MAIN = await T('closed comedone'), SECOND = await T('papule'), URU = await T('Urushiol'), SPF = await T('SPF'), RARE = await T('RARE'), MACE = await T('MACE'), TCI = await T('topical calcineurin inhibitors');
    const OPENC = await T('open comedone'), PAPULE = SECOND, PUSTULE = await T('pustule'), MICRO = await T('microcomedone'), FTU = await T('fingertip unit (FTU)'), COMEDONE = await T('comedone');
    const PDEI = await T('PDE-4 inhibitors'), PDE4 = await T('PDE4'), TNFB = await T('TNF alpha'), TNFA = await T('TNF-α');
    const ids = {MAIN, SECOND, URU, SPF, RARE, MACE, TCI, OPENC, PUSTULE, MICRO, FTU, COMEDONE, PDEI, PDE4, TNFB, TNFA};
    check(Object.values(ids).every(x => typeof x === 'string'), `${tag}: the real entries the checks use are found by term text, each once`, ids);

    // a slide named inside a definition opens the deck of that definition's own source, not the deck of the question
    // (L3C-002 is about Dr. Smith's Sun Exposure lecture; Dr. Sikazwe's UVB definition says "slide 12", his DPAW slide 12)
    await ask('L3C-002'); await p.waitForTimeout(300); await answer();
    await p.evaluate(() => { const d = document.querySelector('#v-quiz details.gw'); if (d) d.open = true; });
    await p.click('#v-quiz details.gw .gwt[data-gwt]:has-text("UVB")').catch(() => {}); await p.waitForTimeout(300);
    const inl = await p.evaluate(() => [...document.querySelectorAll('#v-quiz .gpart')].map(x => ({prof: (x.querySelector('.gpl') || {}).textContent, links: [...x.querySelectorAll('.gdd .slk')].map(a => a.getAttribute('data-deck') + ':' + a.getAttribute('data-n'))})));
    check(inl.some(x => x.prof === 'Sikazwe' && x.links.includes('mc:12')) && !inl.some(x => x.prof === 'Sikazwe' && x.links.some(l => l.startsWith('sun:'))),
      `${tag}: Dr. Sikazwe's "slide 12" in the UVB definition opens his DPAW deck, not Dr. Smith's Sun Exposure deck`, JSON.stringify(inl));

    /* ---- the full data ---- */
    const fd = await p.evaluate(() => {
      const G = GLOSSARY_TERMS, wc = t => t.def.trim().split(/\s+/).length, labels = t => (t.def.match(/(?:Dr\. )?(?:Smith|Sikazwe|Patel)\s*:/g) || []).length;
      const exam = x => x === 1 || x === 2 || x === 3 || (Array.isArray(x) && x.length === 2 && x[0] === 1 && x[1] === 2);
      const bad = [];
      G.forEach(t => { for (const k of ['id', 'term', 'def', 'cite', 'kind', 'deck', 'prof']) if (typeof t[k] !== 'string' || !t[k].trim()) bad.push(t.id + ':' + k); if (!['slide', 'lecture', 'general'].includes(t.src)) bad.push(t.id + ':src'); if (!exam(t.exam)) bad.push(t.id + ':exam'); });
      const hasE = (t, n) => Array.isArray(t.exam) ? t.exam.includes(n) : t.exam === n;
      return {n: G.length, uniq: new Set(G.map(t => t.id)).size, bad,
        long: G.filter(t => wc(t) > 35 && labels(t) < 2).map(t => t.id + ':' + wc(t)),
        merged: G.filter(t => labels(t) >= 2).length, mergedProf: G.filter(t => labels(t) >= 2 && !/\//.test(t.prof) && false).length,
        noUrl: G.filter(t => t.src === 'general' && !/https?:\/\//.test(t.cite)).map(t => t.id),
        bond: G.filter(t => /Sikazwe/.test(t.prof) && /(triple|double) bond/i.test(t.def)).map(t => t.id),
        e1: G.filter(t => hasE(t, 1)).length, e2: G.filter(t => hasE(t, 2)).length, e3: G.filter(t => hasE(t, 3)).length, both: G.filter(t => hasE(t, 1) && hasE(t, 2)).length};
    });
    check(fd.n >= 700 && fd.uniq === fd.n, `${tag}: the glossary has 700+ entries and the ids are unique (${fd.n}, ${fd.uniq} ids)`, fd);
    check(fd.bad.length === 0, `${tag}: every entry has id, term, def, cite, kind, deck, prof, a src of slide/lecture/general and an exam of 1, 2, 3 or [1, 2]`, fd.bad.slice(0, 8));
    check(fd.long.length === 0, `${tag}: every definition is 35 words or fewer unless it carries one definition per professor named (${fd.merged} merged entries)`, fd.long);
    check(fd.noUrl.length === 0, `${tag}: every general entry's cite has an http link`, fd.noUrl.slice(0, 8));
    check(fd.bond.length === 0, `${tag}: no Sikazwe entry's definition says "double bond" or "triple bond" (functional groups, not bonds)`, fd.bond);
    check(fd.e1 + fd.e2 + fd.e3 - fd.both === fd.n && fd.e1 > 0 && fd.e2 > 0 && fd.e3 > 0, `${tag}: the Exam 1, Exam 2 and Exam 3 counts add up (${fd.e1} + ${fd.e2} + ${fd.e3} - ${fd.both} both = ${fd.n})`, fd);
    const real = await p.evaluate(() => ['P5-111', 'S4-046', 'L1-032'].map(id => {
      const q = QUESTIONS.find(x => x.id === id); if (!q) return {id, missing: true};
      const parts = []; const add = s => { if (typeof s === 'string' && s) parts.push(s.replace(/<[^>]+>/g, ' ')); };
      add(q.stem); (q.options || []).forEach(o => { if (o) { add(o.t); add(o.why); } }); (q.pairs || []).forEach(x => { if (x && typeof x === 'object') Object.keys(x).forEach(k => add(x[k])); }); add(q.why); add(q.note);
      if (Array.isArray(q.teach)) q.teach.forEach(x => { if (x) { add(x.h); add(x.t); } }); else add(q.teach);
      const nrm = s => ' ' + String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\u03b1/g, ' alpha ').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim() + ' ';
      const text = nrm(parts.join(' . ')), ids = GLOSSARY_UI.termsFor(q), by = {}; GLOSSARY_UI.terms().forEach(t => by[t.id] = t);
      const absent = ids.filter(i => { const t = by[i], f = [t.term].concat(t.also || []); const m = /^(.*?)\s*\(([^()]+)\)\s*$/.exec(t.term); if (m) f.push(m[1], m[2]); return !f.some(x => text.includes(nrm(x).replace(/ $/, ''))); });
      return {id, n: ids.length, absent};
    }));
    check(real.every(r => !r.missing && r.n > 0 && r.absent.length === 0), `${tag}: three real questions (P5-111, S4-046, L1-032) each give terms, and each term's text occurs in the question (${real.map(r => r.id + ':' + r.n).join(' ')})`, real);

    /* ---- detection ---- */
    const det = t => p.evaluate(x => GLOSSARY_UI.detect(x), t);
    const same = (a, b) => JSON.stringify(a.slice().sort()) === JSON.stringify(b.slice().sort());
    const [d1, d2, d3, d4] = [await det('A PDE4 inhibitor'), await det('a PDE-4 inhibitor'), await det('a PDE\u20114 inhibitor'), await det('PDE4 and PDE-4')];
    check(d1.includes(PDEI) && same(d1, d2) && same(d1, d3) && d4.includes(PDEI) && !d4.includes(PDE4) === !(await det('PDE4')).includes(PDE4) && same(await det('PDE4'), await det('PDE-4')) && same(await det('PDE4'), await det('PDE\u20114')), `${tag}: PDE4, PDE-4 and a non-breaking hyphen are alike`, [d1, d2, d3, d4]);
    check(!(await det('a rare lesion is not a response element')).includes(RARE) && !(await det('rare')).includes(RARE), `${tag}: the ordinary word "rare" is not RARE`, await det('a rare lesion'));
    check((await det('binds the RARE on DNA')).includes(RARE) && (await det('a retinoic acid response element')).includes(RARE), `${tag}: RARE in capitals, and its long form, are found`, await det('binds the RARE on DNA'));
    const lowerCs = await det('a mace and a tci'), capsCs = await det('MACE with TCIs');
    check(!lowerCs.includes(MACE) && capsCs.includes(MACE) && capsCs.includes(TCI), `${tag}: cs terms match only in their case; a plural of one matches`, [lowerCs, capsCs]);
    check(JSON.stringify(await det('Open comedones, then papules; pustules later. Comedone again.')) === JSON.stringify([OPENC, PAPULE, PUSTULE, COMEDONE]), `${tag}: plurals, order of first appearance, each term once`, await det('Open comedones, then papules; pustules later. Comedone again.'));
    check(JSON.stringify(await det('microcomedones form first')) === JSON.stringify([MICRO]) && (await det('uncomedonelike')).length === 0, `${tag}: whole words only (microcomedone is not comedone)`, await det('microcomedones form first'));
    const g1 = await det('TNF-α and TNF–α'), g2 = await det('TNF-alpha');
    check(g1.includes(TNFB) && g1.includes(TNFA) && same(g1, g2), `${tag}: a Greek letter and a dash variant (a form shared by two entries lists both)`, [g1, g2]);
    check(JSON.stringify(await det('fingertip units (FTU)')) === JSON.stringify([FTU]), `${tag}: a term and its abbreviation are one entry`, await det('fingertip units (FTU)'));
    // a controlled fixture: Greek letters, cs, whole words and a plural, on a small term list installed the way the performance case does
    const fx = await p.evaluate(() => {
      const keep = GLOSSARY_UI.terms().slice();
      GLOSSARY_UI.setTerms([{id: 'f1', term: 'TNF-α', also: ['TNF-alpha'], def: 'x'}, {id: 'f2', term: 'RARE', cs: true, def: 'x'}, {id: 'f3', term: 'comedone', also: ['comedones'], def: 'x'}, {id: 'f4', term: 'Irritant (ICD)', def: 'x'}]);
      const r = [GLOSSARY_UI.detect('TNF-α and TNF–α and TNF‑alpha'), GLOSSARY_UI.detect('a rare mark'), GLOSSARY_UI.detect('RARE binds'), GLOSSARY_UI.detect('Comedones, a comedone, microcomedones'), GLOSSARY_UI.detect('ICD or an irritant')];
      GLOSSARY_UI.setTerms(keep); return r;
    });
    check(JSON.stringify(fx) === '[["f1"],[],["f2"],["f3"],["f4"]]', `${tag}: a fixture list: Greek letter and dash variants, a cs term, whole words and plurals, a bracketed short form`, fx);
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
    check(!!r && r.terms.includes(MAIN) && !r.terms.includes(RARE), `${tag}: P6-008 lists Closed comedone and not RARE`, r);
    await p.evaluate(() => document.querySelector('#v-quiz details.gw').scrollIntoView({block: 'center'}));
    await shot('1-row-closed');
    check((await keys()).length === 0, `${tag}: answering stores no words`);
    await p.click('#v-quiz details.gw > summary'); await p.waitForTimeout(80);
    check(await p.evaluate(() => document.querySelector('#v-quiz details.gw').open && document.querySelector('#v-quiz .gwdef').hidden), `${tag}: opened, the row shows the terms and no definition yet`);
    await p.click(`#v-quiz .gwt[data-gwt="${MAIN}"]`); await p.waitForTimeout(80);
    let d = await p.evaluate(id => { const x = document.querySelector('#v-quiz .gwdef'), bt = document.querySelector('#v-quiz .gwt[data-gwt="' + id + '"]'), mk = x.querySelector('[data-gwmark]');
      return {hidden: x.hidden, text: x.textContent, exp: bt.getAttribute('aria-expanded'), ctl: bt.getAttribute('aria-controls') === x.id, pressed: mk && mk.getAttribute('aria-pressed'), label: mk && mk.querySelector('.gsr').textContent, more: mk && getComputedStyle(mk.querySelector('.gstl')).display,
        focus: document.activeElement === bt, others: [...document.querySelectorAll('#v-quiz .gwt[aria-expanded="true"]')].length}; }, MAIN);
    const comDef = await p.evaluate(id => { const t = GLOSSARY_UI.terms().find(x => x.id === id); return {def: t.def, cite: t.cite, term: t.term}; }, MAIN);
    check(!d.hidden && d.text.includes(comDef.def) && /Slide \d+/.test(d.text), `${tag}: a term shows its definition and its slide chips under the row`, d.text);
    check(d.exp === 'true' && d.ctl && d.others === 1 && d.focus, `${tag}: aria-expanded on the term, focus stays on it`, d);
    check(d.pressed === 'false' && d.label === 'I didn’t know this: ' + comDef.term && d.more === 'none', `${tag}: the toggle is named "I didn't know this: <term>", not pressed, "My words" not shown`, d);
    await p.waitForTimeout(500);
    check(await p.evaluate(() => !!document.querySelector('#v-quiz .gwdef .gsrc .gslc') && !document.querySelector('#v-quiz .gwdef .gsrc .slk')), `${tag}: the citation is shown as slide chips`);
    await p.evaluate(() => document.querySelector('#v-quiz details.gw').scrollIntoView({block: 'center'}));
    await shot('2-row-open-definition');
    check((await small('#v-quiz details.gw button, #v-quiz details.gw > summary')).length === 0, `${tag}: the row's buttons are at least 44 px high`, await small('#v-quiz details.gw button, #v-quiz details.gw > summary'));
    check(await noScroll(), `${tag}: no sideways scroll with the row open`);
    check((await keys()).length === 0, `${tag}: opening a definition stores nothing`);

    /* ---- marking ---- */
    await p.click('#v-quiz [data-gwmark]'); await p.waitForTimeout(80);
    let s = await stored();
    check(JSON.stringify(await keys()) === JSON.stringify([await p.evaluate(() => NS + ':words:v1:' + PROFILE)]), `${tag}: a mark writes the one key <NS>:words:v1:<profile>`, await keys());
    check(JSON.stringify(s) === JSON.stringify({v: 1, w: {[MAIN]: {n: 1, q: ['P6-008']}}}), `${tag}: the record is {v:1, w:{<id>:{n:1, q:[P6-008]}}}`, s);
    d = await p.evaluate(id => { const mk = document.querySelector('#v-quiz [data-gwmark]'); return {pressed: mk.getAttribute('aria-pressed'), label: mk.querySelector('.gsr').textContent, more: getComputedStyle(mk.querySelector('.gstl')).display, focus: document.activeElement === mk, mine: document.querySelector('#v-quiz .gwt[data-gwt="' + id + '"]').classList.contains('mine'), cnt: document.querySelector('#v-quiz .gcnt').textContent}; }, MAIN);
    check(d.pressed === 'true' && /^I didn’t know this: /.test(d.label) && d.more !== 'none' && d.focus && d.mine && d.cnt === 'Missed once', `${tag}: the toggle is pressed and shows "My words"; the term carries a mark`, d);
    // the same question drawn again keeps the row open at the term; marking twice on the same question still 1
    await p.evaluate(() => renderQuiz()); await p.waitForTimeout(60);
    check(await p.evaluate(id => { const x = document.querySelector('#v-quiz details.gw'); return x.open && x.dataset.gwopen === id && document.querySelector('#v-quiz [data-gwmark]').getAttribute('aria-pressed') === 'true'; }, MAIN), `${tag}: the same answered question drawn again keeps the open row`);
    await p.evaluate(id => GLOSSARY_UI.mark(id, 'P6-008'), MAIN);
    check((await stored()).w[MAIN].n === 1, `${tag}: marked twice on the same question: still 1`);
    await p.click('#v-quiz [data-gwmark]'); await p.waitForTimeout(50);
    check(JSON.stringify(await stored()) === '{"v":1,"w":{}}', `${tag}: pressing the toggle again takes the miss back`);
    await p.click('#v-quiz [data-gwmark]'); await p.waitForTimeout(50);
    check((await stored()).w[MAIN].n === 1, `${tag}: marked again: 1`);
    // the same question answered again later: closed again, the marked term first, still 1
    await ask('P6-008'); await answer();
    r = await row();
    check(!!r && r.open === false && r.terms[0] === MAIN, `${tag}: answered again: the row is closed and the marked term comes first`, r);
    await p.click('#v-quiz details.gw > summary'); await p.click(`#v-quiz .gwt[data-gwt="${MAIN}"]`); await p.waitForTimeout(60);
    check(await p.evaluate(() => document.querySelector('#v-quiz [data-gwmark]').getAttribute('aria-pressed')) === 'true' && (await stored()).w[MAIN].n === 1, `${tag}: the same question again shows it marked; still 1`);
    // another question with the same term
    const other = await p.evaluate(id => (QUESTIONS.find(q => q.id !== 'P6-008' && (q.type || 'mc') === 'mc' && !q.options.filter(o => o.correct)[1] && GLOSSARY_UI.termsFor(q).includes(id)) || {}).id, MAIN);
    check(!!other, `${tag}: a second question with Closed comedone exists`, other);
    await ask(other); await answer();
    await p.click('#v-quiz details.gw > summary'); await p.click(`#v-quiz .gwt[data-gwt="${MAIN}"]`); await p.waitForTimeout(60);
    check(await p.evaluate(() => document.querySelector('#v-quiz [data-gwmark]').getAttribute('aria-pressed')) === 'false', `${tag}: on another question the toggle is not pressed`);
    await p.click('#v-quiz [data-gwmark]'); await p.waitForTimeout(60);
    s = await stored();
    check(s.w[MAIN].n === 2 && s.w[MAIN].q.length === 2, `${tag}: marked on another question: 2`, s);
    // a second term, marked once
    const t2 = await p.evaluate(id => [...document.querySelectorAll('#v-quiz .gwt')].map(x => x.dataset.gwt).find(x => x !== id) || null, MAIN);
    if (t2) { await p.click(`#v-quiz .gwt[data-gwt="${t2}"]`); await p.click('#v-quiz [data-gwmark]'); await p.waitForTimeout(50); }
    else await p.evaluate(id => GLOSSARY_UI.mark(id, 'X-1'), SECOND);
    const second = t2 || SECOND;

    /* ---- reload keeps ---- */
    await p.reload(); await p.waitForTimeout(900);
    check((await p.evaluate(() => GLOSSARY_UI.words())).w[MAIN].n === 2, `${tag}: a reload keeps My words`);

    /* ---- the tab ---- */
    await p.evaluate(s => document.querySelector(s).click(), '#nav button[data-v="gloss"]'); await p.waitForTimeout(300);
    check(await p.evaluate(() => VIEW === 'gloss' && !document.getElementById('v-gloss').classList.contains('hide') && document.querySelector('#nav button[data-v="gloss"]').getAttribute('aria-selected') === 'true'), `${tag}: the tab opens`);
    // a term that starts with a digit or a Greek letter is listed first, under the # heading
    const hashHead = x => { const m = /[\p{L}\p{N}]/u.exec(x.normalize('NFD')); return !(m && /^[A-Z]$/.test(m[0].toUpperCase())); };
    let tab = await p.evaluate(() => ({n: document.querySelectorAll('#v-gloss .gle').length, heads: [...document.querySelectorAll('#v-gloss .gll')].map(x => x.textContent).join(''), count: document.getElementById('glcount').textContent,
      myn: document.getElementById('glmyn').textContent, pressed: [...document.querySelectorAll('#v-gloss [data-glf][aria-pressed="true"]')].map(x => x.dataset.glf).join(),
      names: [...document.querySelectorAll('#v-gloss .gle .glt')].map(x => x.textContent), marked: [...document.querySelectorAll('#v-gloss [data-glmark][aria-pressed="true"]')].length}));
    check(tab.n === nTerms && tab.count.replace(/,/g, '') === nTerms + ' terms' && tab.pressed === 'all', `${tag}: All lists every term`, tab);
    check(tab.heads === [...tab.heads].sort().join('') && tab.heads.length > 5 && JSON.stringify(tab.names) === JSON.stringify(tab.names.slice().sort((a, c) => (hashHead(a) === hashHead(c) ? a.localeCompare(c, 'en', {sensitivity: 'base', numeric: true}) : hashHead(a) ? -1 : 1))), `${tag}: the list is A to Z under letter headings`, tab.heads);
    check(tab.myn === '2' && tab.marked === 2, `${tag}: My words (2); the two marked terms show pressed in the list`, tab);
    await shot('3-glossary-tab');
    check((await small('#v-gloss button, #v-gloss input, #v-gloss select')).length === 0, `${tag}: the tab's buttons are at least 44 px high`, await small('#v-gloss button, #v-gloss input, #v-gloss select'));
    check(await noScroll(), `${tag}: no sideways scroll on the tab`);
    const list = () => p.evaluate(() => [...document.querySelectorAll('#v-gloss .gle')].map(x => x.dataset.gle));
    await p.fill('#glq', 'pde4'); await p.waitForTimeout(80);
    check((await list()).includes(PDE4) && (await list()).includes(PDEI) && (await list()).length < 20, `${tag}: search "pde4" finds the PDE4 entries (also forms: PDE-4)`, await list());
    await p.fill('#glq', 'sun protection'); await p.waitForTimeout(80);
    check((await list()).includes(SPF), `${tag}: search matches an "also" form`, await list());
    await p.fill('#glq', 'poison ivy'); await p.waitForTimeout(80);
    check((await list()).includes(URU), `${tag}: search matches a definition`, await list());
    check(await p.evaluate(() => document.activeElement.id === 'glq'), `${tag}: the search field keeps the cursor while typing`);
    await p.fill('#glq', 'zzqx'); await p.waitForTimeout(80);
    check((await list()).length === 0 && await p.evaluate(() => document.getElementById('glcount').textContent) === '0 terms', `${tag}: a word that matches nothing gives "0 terms"`);
    await p.fill('#glq', ''); await p.waitForTimeout(80);
    const exams = await p.evaluate(() => { const t = GLOSSARY_UI.terms(), has = (x, n) => Array.isArray(x.exam) ? x.exam.includes(n) : x.exam === n; return {e1: t.filter(x => has(x, 1)).map(x => x.id).sort().join(), e2: t.filter(x => has(x, 2)).map(x => x.id).sort().join()}; });
    await p.click('#v-gloss [data-glf="e1"]'); await p.waitForTimeout(80);
    check((await list()).sort().join() === exams.e1 && exams.e1.length > 0, `${tag}: Exam 1 lists the Exam 1 terms`);
    await p.click('#v-gloss [data-glf="e2"]'); await p.waitForTimeout(80);
    check((await list()).sort().join() === exams.e2 && exams.e2.length > 0, `${tag}: Exam 2 lists the Exam 2 terms`);
    const gen = await p.evaluate(() => { const t = GLOSSARY_UI.terms().find(x => x.src === 'general' && /general:/.test(x.cite) && (Array.isArray(x.exam) ? x.exam.includes(2) : x.exam === 2)); if (!t) return null; const e = document.querySelector(`#v-gloss .gle[data-gle="${t.id}"] .gsgen`); return e ? {text: e.textContent, href: (e.querySelector('a') || {}).href || '', target: (e.querySelector('a') || {}).target || '', rel: (e.querySelector('a') || {}).rel || ''} : ''; });
    check(gen === null || (gen && /^General definition · \S/.test(gen.text) && /^https?:/.test(gen.href) && gen.target === '_blank' && /noopener/.test(gen.rel)), `${tag}: a general definition says "General definition · <source>" and links the source`, gen);
    // mark and unmark in the list
    await p.click('#v-gloss [data-glf="all"]'); await p.waitForTimeout(80);
    await p.click(`#v-gloss [data-glmark="${URU}"]`); await p.waitForTimeout(50);
    check((await stored()).w[URU].n === 1 && await p.evaluate(id => document.getElementById('glmyn').textContent === '3' && document.querySelector(`[data-glmark="${id}"]`).getAttribute('aria-pressed') === 'true', URU), `${tag}: "I didn't know this" in the list adds the term with 1`);
    await p.click(`#v-gloss [data-glmark="${URU}"]`); await p.waitForTimeout(50);
    check(!(await stored()).w[URU] && await p.evaluate(() => document.getElementById('glmyn').textContent === '2'), `${tag}: pressing it again takes the term out`);


    /* ---- the 2026-11-15 layout: quiet also-forms, one labelled paragraph per professor, slide chips ---- */
    await p.fill('#glq', ''); await p.waitForFunction(() => !GLOSSARY_UI.state.pending, null, {timeout: 20000}); await p.waitForTimeout(100);
    const GEN1 = await T('1st generation retinoids'), GEN3 = await T('3rd generation retinoids'), ACET = await T('acetylenic retinoid');
    const al = await p.evaluate(id => { const t = GLOSSARY_UI.terms().find(x => x.id === id), li = document.querySelector(`#v-gloss .gle[data-gle="${id}"]`), e = li.querySelector('.galso'), m = li.querySelector('.gmore');
      return {forms: t.also.length, shown: e.textContent, more: m ? m.textContent : '', name: m ? m.getAttribute('aria-label') : '', h: m ? Math.round(m.getBoundingClientRect().height) : 0, w: m ? Math.round(m.getBoundingClientRect().width) : 0, tag: li.querySelector('h3.glt') && li.querySelector('h3.glt').tagName, li: li.tagName}; }, GEN1);
    const al0 = await p.evaluate(id => GLOSSARY_UI.terms().find(x => x.id === id).also, GEN1);
    check(al.forms > 3 && al.shown === 'Also: ' + al0.slice(0, 3).join(', ') + ' +' + (al0.length - 3) + ' more' && al.more === '+' + (al0.length - 3) + ' more', `${tag}: the list shows the first three also-forms and "+N more"`, al);
    check(al.h >= 44 && al.w >= 44 && /Show \d+ more forms of /.test(al.name), `${tag}: "+N more" is a 44 px control with a name`, al);
    check(al.tag === 'H3' && al.li === 'LI', `${tag}: each term is an h3 inside a list item`, al);
    check(await p.evaluate(() => [...document.querySelectorAll('#v-gloss .gle .galso')].every(e => !e.querySelector('.gmore') || e.textContent.replace(/^Also: /, '').replace(/ \+\d+ more$/, '').split(', ').length === 3)), `${tag}: no entry shows more than three also-forms until it is opened`);
    await p.click(`#v-gloss .gle[data-gle="${GEN1}"] .gmore`); await p.waitForTimeout(50);
    check(await p.evaluate(([id, f]) => { const e = document.querySelector(`#v-gloss .gle[data-gle="${id}"] .galso`); return e.textContent === 'Also: ' + f.join(', ') && !e.querySelector('.gmore'); }, [GEN1, al0]), `${tag}: "+N more" opens the rest of the forms`);
    await p.fill('#glq', 'polyaromatic'); await p.waitForTimeout(150);
    check(await p.evaluate(id => { const e = document.querySelector(`#v-gloss .gle[data-gle="${id}"] .galso`); return !!e && /polyaromatic/.test(e.textContent) && !e.querySelector('.gmore'); }, GEN3), `${tag}: a search that matches a form behind "+N more" shows it`);
    await p.fill('#glq', ''); await p.waitForFunction(() => !GLOSSARY_UI.state.pending, null, {timeout: 20000});
    const data = await p.evaluate(() => { const T = GLOSSARY_UI.terms(), pr = T.filter(t => Array.isArray(t.parts)), dr = T.filter(t => /^Dr\. (Smith|Sikazwe|Patel): /.test(t.def));
      return {n: pr.length, dr: dr.length, drNoParts: dr.filter(t => !Array.isArray(t.parts) || t.parts.length < 2).map(t => t.id), bad: pr.filter(t => t.parts.length < 2 || t.parts.map(x => 'Dr. ' + x.prof + ': ' + x.def).join(' ') !== t.def || !t.parts.every(x => x.def && x.cite && ['Smith', 'Sikazwe', 'Patel'].includes(x.prof)) ||
        new Set(t.parts.flatMap(x => x.cite.split('; '))).size !== new Set(t.cite.split('; ')).size).map(t => t.id), single: T.filter(t => !t.parts && /^Dr\. (Smith|Sikazwe|Patel): /.test(t.def)).length}; });
    check(data.n >= 50 && data.bad.length === 0 && data.drNoParts.length === 0, `${tag}: every entry whose text names professors has parts: the joined text and the joined cites are unchanged`, data);
    const mg = await p.evaluate(id => { const li = document.querySelector(`#v-gloss .gle[data-gle="${id}"]`), ps = [...li.querySelectorAll('.gpart')];
      return {n: ps.length, labels: ps.map(x => x.querySelector('.gpl').textContent), w: ps.map(x => +getComputedStyle(x.querySelector('.gpl')).fontWeight), decks: ps.map(x => [...x.querySelectorAll('.gslc')].map(c => c.dataset.gsl)), defs: ps.map(x => x.querySelector('.gdd').textContent.slice(0, 20))}; }, ACET);
    check(mg.n === 2 && mg.labels.join() === 'Smith,Sikazwe' && mg.w.every(x => x >= 600) && mg.decks[0].join() === 'pc' && mg.decks[1].join() === 'mc', `${tag}: a term two professors teach has one labelled paragraph each, with its own slides`, mg);
    const open1 = async (deck) => {
      const sel = `#v-gloss .gslc[data-gsl="${deck}"]`, c = p.locator(sel).first();
      await c.scrollIntoViewIfNeeded(); const want = await c.evaluate(e => ({n: +e.dataset.n, name: e.getAttribute('aria-label'), chip: e.textContent})); await c.click(); await p.waitForTimeout(200);
      const got = await p.evaluate(([d, n]) => { const dl = document.querySelector('dialog.slv'), r = SLIDE_UI.parser.resolve(d, n), pad = r.page < 10 ? '0' + r.page : '' + r.page;
        return {open: !!dl && dl.open, deck: (document.querySelector('#slv-deck') || {}).textContent, label: SLIDES.decks[d].label, src: (dl.querySelector('.slv-img') || {}).src || '', file: 'deck/' + r.deck + '/' + pad + '.', pos: (dl.querySelector('.slv-pos') || {}).textContent}; }, [deck, want.n]);
      await p.evaluate(() => SLIDE_UI.close());
      return Object.assign(got, want);
    };
    for (const deck of ['pp', 'pc', 'mc', 'p5', 'p8w']) {
      const r = await open1(deck);
      check(r.chip === 'Slide ' + r.n && r.open && r.deck === r.label && r.src.indexOf(r.file) !== -1 && new RegExp('\\b' + r.n + '\\b').test(r.pos || ''), `${tag}: a ${deck} slide chip opens the viewer on that deck and page`, r);
    }
    const chipText = await p.evaluate(() => [...document.querySelectorAll('#v-gloss .gslc')].every(c => /^Slides? \d+(–\d+)?$/.test(c.textContent) && /^Open .*slides? \d+/.test(c.getAttribute('aria-label'))));
    check(chipText, `${tag}: every chip reads "Slide N" (or "Slides N–M") and is named "Open <deck>, slide N"`);
    check((await small('#v-gloss .gslc, #v-gloss .gstar, #v-gloss .gmore')).length === 0, `${tag}: chips, toggles and "+N more" are at least 44 px high`);
    const tg = await p.evaluate(id => { const b = document.querySelector(`#v-gloss [data-glmark="${id}"]`), t = GLOSSARY_UI.terms().find(x => x.id === id); return {name: b.querySelector('.gsr').textContent, want: 'I didn’t know this: ' + t.term, pressed: b.getAttribute('aria-pressed'), w: Math.round(b.getBoundingClientRect().width), h: Math.round(b.getBoundingClientRect().height), lab: getComputedStyle(b.querySelector('.gstl')).display}; }, URU);
    check(tg.name === tg.want && tg.pressed === 'false' && tg.lab === 'none' && tg.w >= 44 && tg.h >= 44, `${tag}: the list toggle is named "I didn't know this: <term>", 44 px, "My words" hidden while off`, tg);
    await p.click(`#v-gloss [data-glmark="${URU}"]`); await p.waitForTimeout(50);
    check(await p.evaluate(id => { const b = document.querySelector(`#v-gloss [data-glmark="${id}"]`); return b.getAttribute('aria-pressed') === 'true' && getComputedStyle(b.querySelector('.gstl')).display !== 'none' && b.textContent.indexOf('My words') !== -1; }, URU), `${tag}: the list toggle shows "My words" while on`);
    await p.click(`#v-gloss [data-glmark="${URU}"]`); await p.waitForTimeout(50);
    const kt = await p.evaluate(() => { const t = document.querySelector('#v-gloss .gtag'); return t ? getComputedStyle(t).display : null; });
    check((kt !== 'none') === (w >= 900), `${tag}: the kind tag shows on a wide screen only (${kt})`);
    check(await noScroll(), `${tag}: no sideways scroll in the full list`);
    await shot('6-list');

    /* ---- My words ---- */
    await p.click('#v-gloss [data-glf="mine"]'); await p.waitForTimeout(100);
    let mine = await p.evaluate(() => [...document.querySelectorAll('#v-gloss .gle')].map(x => x.dataset.gle + ':' + x.querySelector('.gcnt').textContent));
    check(JSON.stringify(mine) === JSON.stringify([MAIN + ':Missed 2 times', second + ':Missed once']), `${tag}: My words lists the marked terms, most missed first, with counts`, mine);
    check(await p.evaluate(() => !!document.querySelector('#v-gloss [data-glrm]') && !!document.querySelector('[data-glact="review"]') && !!document.querySelector('[data-glact="clear"]')), `${tag}: Remove, Review my words and Clear my words are there`);
    await p.click('[data-glact="review"]'); await p.waitForTimeout(80);
    let rv = await p.evaluate(() => ({left: document.getElementById('glleft').textContent, term: document.querySelector('.glrt b').textContent, def: !!document.getElementById('glrd'), got: !!document.querySelector('[data-glact="got"]'), focus: document.activeElement.dataset.glact}));
    check(rv.left === '2 left' && rv.term === comDef.term && !rv.def && !rv.got && rv.focus === 'showdef', `${tag}: the review shows one term, "2 left", the meaning hidden`, rv);
    await shot('4-review-hidden');
    await p.click('[data-glact="showdef"]'); await p.waitForTimeout(60);
    rv = await p.evaluate(() => ({def: (document.getElementById('glrd') || {}).textContent || '', got: !!document.querySelector('[data-glact="got"]'), still: !!document.querySelector('[data-glact="still"]')}));
    check(rv.def.includes(comDef.def) && rv.got && rv.still, `${tag}: "Show meaning" shows the definition with Got it and Still learning`, rv);
    await shot('5-review-meaning');
    check((await small('#v-gloss button')).length === 0, `${tag}: the review's buttons are at least 44 px high`);
    await p.click('[data-glact="got"]'); await p.waitForTimeout(60);
    check((await stored()).w[MAIN].n === 1 && await p.evaluate(() => document.getElementById('glleft').textContent) === '1 left', `${tag}: Got it lowers the count by one; "1 left"`);
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
    await p.evaluate(ids => { GLOSSARY_UI.mark(ids.a, 'X-1'); GLOSSARY_UI.mark(ids.b, 'X-1'); GLOSSARY_UI.render(); }, {a: PAPULE, b: PUSTULE});
    await p.click('[data-glact="clear"]'); await p.waitForTimeout(60);
    check(JSON.stringify(await stored()) === '{"v":1,"w":{}}' && await p.evaluate(() => !!document.getElementById('glempty') && document.getElementById('glmyn').textContent === '0'), `${tag}: Clear my words empties the list`);

    /* ---- stored record checked on load; a refused write ---- */
    for (const [bad, why] of [['{"v":1,"w":{"x":{"n":0,"q":[]}}}', 'a count of 0'], ['{"v":2,"w":{}}', 'another version'], ['{"v":1,"w":{"x":{"n":1,"q":[5]}}}', 'a question id that is not text'], ['not json', 'not JSON']]) {
      await p.evaluate(v => { localStorage.setItem(GLOSSARY_UI.key(), v); GLOSSARY_UI.state.data = null; }, bad);
      check(JSON.stringify(await p.evaluate(() => GLOSSARY_UI.words())) === '{"v":1,"w":{}}', `${tag}: a damaged record (${why}) is dropped`);
    }
    await p.evaluate(() => { localStorage.removeItem(GLOSSARY_UI.key()); GLOSSARY_UI.state.data = null; });
    await p.evaluate(() => { window.__set = Storage.prototype.setItem; Storage.prototype.setItem = function(k){ if (/:words:/.test(k)) throw new Error('refused'); return window.__set.apply(this, arguments); }; });
    await p.click('#v-gloss [data-glf="all"]'); await p.waitForTimeout(60);
    await p.click(`#v-gloss [data-glmark="${PAPULE}"]`); await p.waitForTimeout(60);
    check(await p.evaluate(() => { const q = document.getElementById('glquiet'); return !q.hidden && /could not be saved/.test(q.textContent) && document.getElementById('glmyn').textContent === '1' && localStorage.getItem(GLOSSARY_UI.key()) === null; }), `${tag}: a refused write shows one line; the word is kept in memory`);
    await p.evaluate(id => { Storage.prototype.setItem = window.__set; GLOSSARY_UI.unmark(id); GLOSSARY_UI.render(); }, PAPULE);
    check(await p.evaluate(() => document.getElementById('glquiet').hidden), `${tag}: the line goes once a write succeeds`);
    await p.evaluate(() => { localStorage.removeItem(GLOSSARY_UI.key()); GLOSSARY_UI.state.data = null; });

    /* ---- the search dialog ---- */
    const viaSearch = await p.evaluate(async () => {
      if (typeof SEARCH_UI === 'undefined' || !SEARCH_UI || !SEARCH_UI.search) return null;
      const g = SEARCH_UI.search('urushiol').groups.find(x => x.type === 'gterm'); return g ? g.items.map(x => x.id) : [];
    });
    check(viaSearch === null || viaSearch.includes(URU), `${tag}: the search index has the glossary terms`, viaSearch);
    if (viaSearch !== null) {
      await p.evaluate(() => { show('topics'); SEARCH_UI.open(); });
      await p.fill('dialog.srch input', 'urushiol'); await p.waitForTimeout(250);
      const hit = await p.evaluate(() => { const x = [...document.querySelectorAll('.srch .sh')].find(y => /Glossary/.test(y.querySelector('.k').textContent)); if (x) x.click(); return !!x; });
      await p.waitForTimeout(250);
      check(hit && await p.evaluate(id => VIEW === 'gloss' && !document.querySelector('dialog.srch').open && document.getElementById('glq').value === 'Urushiol' && [...document.querySelectorAll('#v-gloss .gle')].map(x => x.dataset.gle).includes(id), URU), `${tag}: a Glossary result in the search dialog opens the tab at that term`);
    }
    await p.evaluate(() => show('topics'));
    await p.evaluate(id => GLOSSARY_UI.open(id), URU); await p.waitForTimeout(100);
    check(await p.evaluate(id => VIEW === 'gloss' && document.getElementById('glq').value === 'Urushiol' && [...document.querySelectorAll('#v-gloss .gle')].map(x => x.dataset.gle).includes(id), URU), `${tag}: open(id) shows the tab filtered to that term`);
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
      const exg = await p.evaluate(() => { show('gloss'); const r = {chips: document.querySelectorAll('#v-gloss .gslc').length, src: document.querySelectorAll('#v-gloss .gsrc').length, running: !!(EX && EX.running)}; show('exam'); return r; });
      check(exg.running && exg.chips === 0 && exg.src > 0, `${tag}: while a paper is in progress the glossary shows no slide chips`, exg);
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
    const realPerf = await p.evaluate(() => {
      const keep = GLOSSARY_UI.terms().slice(); GLOSSARY_UI.setTerms(keep);
      const size = q => JSON.stringify(q).length, q = QUESTIONS.reduce((a, c) => size(c) > size(a) ? c : a);
      let t0 = performance.now(); GLOSSARY_UI.detect('warm'); const build = performance.now() - t0;
      let worst = 0; for (let k = 0; k < 5; k++) { GLOSSARY_UI.setTerms(keep); GLOSSARY_UI.detect('warm'); t0 = performance.now(); GLOSSARY_UI.termsFor(q); worst = Math.max(worst, performance.now() - t0); }
      return {id: q.id, chars: size(q), build, worst, n: GLOSSARY_UI.termsFor(q).length, terms: keep.length};
    });
    check(realPerf.worst < 30 && realPerf.build < 150, `${tag}: the real ${realPerf.terms} terms, 4x slower CPU: the longest question (${realPerf.id}, ${realPerf.chars} characters, ${realPerf.n} terms) detects in ${Math.round(realPerf.worst * 10) / 10} ms (under 30); the table builds in ${Math.round(realPerf.build * 10) / 10} ms`, realPerf);
    const perf = await p.evaluate(async () => {
      const keep = GLOSSARY_UI.terms().slice(), syn = [];
      const A = 'acro bili cuta derm eryth fibro gluco hemo immuno kerat lipo melano neuro onycho patho'.split(' '), B = 'blast cyte genic lytic oma osis pathy plasia static trophy'.split(' ');
      const want = Math.max(1500, keep.length + 600);
      for (let i = 0; syn.length < want - keep.length; i++) {
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
      return {want, total: keep.length + syn.length, build, worst, mean: sum / qs.length, found, rowDraw, first, all, nAll, typed, nTyped, chars: JSON.stringify(qs[0]).length};
    });
    await cdp.send('Emulation.setCPUThrottlingRate', {rate: 1});
    const f1 = x => Math.round(x * 10) / 10;
    console.log(`        ${tag} timing, 4x slower CPU, ${perf.total} terms: table built ${f1(perf.build)} ms; detection worst ${f1(perf.worst)} ms, mean ${f1(perf.mean)} ms over the 40 longest questions (longest ${perf.chars} characters); list first draw ${f1(perf.first)} ms, all ${perf.nAll} drawn after ${f1(perf.all)} ms; typed filter ${f1(perf.typed)} ms`);
    check(perf.total === perf.want && perf.found === 'syn0,syn466,syn32,syn33', `${tag}: 1,500 terms: synthetic terms are found by name, numbered name, short form and long form`, perf.found);
    check(perf.worst < 30, `${tag}: 1,500 terms: detection for a question under 30 ms (worst ${f1(perf.worst)} ms)`);
    check(perf.build < 150, `${tag}: 1,500 terms: the table is built in under 150 ms (${f1(perf.build)} ms)`);
    check(perf.first < 150 && perf.typed < 150, `${tag}: 1,500 terms: first draw of the list and a typed filter under 150 ms (${f1(perf.first)}, ${f1(perf.typed)} ms)`);
    check(perf.nAll === perf.want && perf.all < 4000 && perf.nTyped > 50, `${tag}: 1,500 terms: the whole list is drawn within 4 s (${Math.round(perf.all)} ms)`, perf);

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
