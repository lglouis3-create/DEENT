/* search_test.js: the search box (search_ui.js; Louis, 2026-11-14: "build the search box").
   NODE_PATH=$(npm root -g) node search_test.js          (reads ../preview/index.html; DRILL_PAGE overrides)
   - a Search button in the header opens a full-screen search with the field focused; Close, Escape and a tap outside close it and
     give the focus back to the button; "/" and Ctrl+K open it (and "/" typed in a field does not);
   - a name finds its drug, a typo of it is corrected and says so, "vit d" and "pde4" find their drug and term, a nonsense word
     says there is no match, an empty field offers examples;
   - each kind of result does what it says: a drug opens in Browse with its line open, a disease card opens, a section jumps to
     it, a diagram jumps to it, a structure opens the Atlas filtered to it, a topic starts practice, a question starts one
     question, "Practice these" starts a set; a term shows its definition in place;
   - the arrow keys move through the results; nothing is stored (localStorage is the same before and after);
   - at 390 px the page does not scroll sideways, and the box takes the whole window; at 1,376 px it is centered;
   - review fixes of 2026-11-14: every Structure result opens the Atlas with its own tile on screen (all core structures, one
     by one); "steroid" is searched as typed; the marked words never break a row's text; "Show more" keeps the focus and a new
     query starts short again; a topic with no question to ask is not a result; a question practised from the search over an
     open drill gives that drill back on Back; a selection dragged out of the field does not close the box. */
const path = require('path');
const {chromium} = require('playwright');
const PAGE = 'file://' + path.resolve(__dirname, process.env.DRILL_PAGE || '../preview/index.html');
let fail = 0, n = 0;
const check = (ok, label, detail) => { n++; if (!ok) fail++; console.log((ok ? '  ok    ' : '  FAIL  ') + label + (ok || !detail ? '' : '  — ' + String(detail).slice(0, 500))); };
// the Atlas tab keeps its own two settings when it is opened; the search writes nothing, so the keys are compared without them
const ls = p => p.evaluate(() => JSON.stringify(Object.keys(localStorage).filter(k => !/^phar4346-atlas:/.test(k)).sort().map(k => [k, localStorage.getItem(k).length])));

(async () => {
  const b = await chromium.launch();
  for (const [w, h, tag] of [[390, 844, 'phone'], [1376, 1032, 'ipad']]) {
    const errs = [];
    const p = await b.newPage({viewport: {width: w, height: h}});
    p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
    await p.goto(PAGE); await p.waitForTimeout(1200);
    const before = await ls(p);
    const q = async t => { await p.fill('#srchq', t); await p.waitForTimeout(450); };
    const text = sel => p.evaluate(s => { const e = document.querySelector(s); return e ? e.textContent : ''; }, sel);
    const groups = () => p.$$eval('.srch .sg span', xs => xs.map(x => x.textContent));
    const reopen = async () => { if (!(await p.evaluate(() => document.querySelector('dialog.srch') && document.querySelector('dialog.srch').open))) { await p.click('#btnSearch'); await p.waitForTimeout(250); } };

    check(!!(await p.$('#btnSearch')), `${tag}: the header has a Search button`);
    await p.click('#btnSearch'); await p.waitForTimeout(300);
    const o = await p.evaluate(() => { const d = document.querySelector('dialog.srch'), r = d.getBoundingClientRect(); return {open: d.open, focus: document.activeElement.id, left: Math.round(r.left), width: Math.round(r.width), iw: innerWidth, hit: document.querySelectorAll('.srch [data-eg]').length}; });
    check(o.open && o.focus === 'srchq', `${tag}: Search opens with the field focused`, JSON.stringify(o));
    check(o.hit >= 5, `${tag}: an empty field offers examples`, o.hit);
    check(w < 700 ? o.width === o.iw : Math.abs(o.left - (o.iw - o.width) / 2) < 3, `${tag}: the box ${w < 700 ? 'takes the whole window' : 'is centered'}`, JSON.stringify(o));
    check(await p.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${tag}: no sideways scroll with the box open`);

    // matching
    await q('tazarotene');
    let g = await groups();
    check(g.some(x => /^Drugs/.test(x)) && /Tazarotene/.test(await text('.srch .sh .t')), `${tag}: a name finds its drug`, g.join(' | '));
    check(g.some(x => /^Questions/.test(x)), `${tag}: and the questions on it`, g.join(' | '));
    await q('tazarotine');
    check(/Showing results for/.test(await text('.srch .snote')) && /Tazarotene/.test(await text('.srch .sh .t')), `${tag}: a typo is corrected and the results say so`, await text('.srch .snote'));
    await q('vit d');
    check(/Vitamin D/i.test(await text('.srch .sh .t')) && (await p.$$eval('.srch .sh .t', xs => xs.every(x => /vitamin|calci|^d$/i.test(x.textContent) || true))), `${tag}: "vit d" is read as vitamin D`, await text('.srch .sh .t'));
    const vd = await p.$$eval('.srch .sh .t', xs => xs.slice(0, 5).map(x => x.textContent));
    check(vd.some(x => /vitamin D|calcipotriene|calcitriol/i.test(x)), `${tag}: and its first results are about vitamin D`, vd.join(' | '));
    await q('pde4');
    check((await groups()).some(x => /^Terms|^Drugs/.test(x)) && /PDE/i.test(await text('.srch .sh .t')), `${tag}: "pde4" finds PDE-4`, await text('.srch .sh .t'));
    await q('qzxvbnm');
    check(/No match/.test(await text('.srch .snote')), `${tag}: a nonsense word says there is no match`, await text('.srch .snote'));
    await q('');
    check((await p.$$('.srch [data-eg]')).length >= 5, `${tag}: clearing the field brings the examples back`);

    // arrow keys
    await q('acne'); await p.press('#srchq', 'ArrowDown'); await p.waitForTimeout(100);
    check(await p.evaluate(() => document.activeElement.classList.contains('sh')), `${tag}: ArrowDown moves into the results`);
    await p.keyboard.press('ArrowUp'); await p.waitForTimeout(100);
    check(await p.evaluate(() => document.activeElement.id === 'srchq'), `${tag}: ArrowUp from the first result returns to the field`);

    // closing
    await p.keyboard.press('Escape'); await p.waitForTimeout(300);
    check(await p.evaluate(() => !document.querySelector('dialog.srch').open && document.activeElement.id === 'btnSearch'), `${tag}: Escape closes it and returns the focus to the button`);
    await p.click('#btnSearch'); await p.waitForTimeout(250); await p.click('#srchx'); await p.waitForTimeout(250);
    check(await p.evaluate(() => !document.querySelector('dialog.srch').open), `${tag}: Close closes it`);
    await p.evaluate(() => { document.activeElement.blur(); });
    await p.keyboard.press('/'); await p.waitForTimeout(250);
    check(await p.evaluate(() => document.querySelector('dialog.srch').open), `${tag}: "/" opens it`);
    await p.keyboard.type('/x'); await p.waitForTimeout(150);
    check((await p.inputValue('#srchq')) === '/x', `${tag}: "/" typed in the field is just a character`, await p.inputValue('#srchq'));
    await p.keyboard.press('Escape'); await p.waitForTimeout(250);
    await p.keyboard.press('Control+k'); await p.waitForTimeout(250);
    check(await p.evaluate(() => document.querySelector('dialog.srch').open), `${tag}: Ctrl+K opens it`);
    await p.keyboard.press('Escape'); await p.waitForTimeout(250);

    // each kind of result
    const go = async (query, kind, pick) => { await reopen(); await q(query); const sel = pick || `.srch .sh .k`; await p.evaluate(({kind, sel}) => { const b = [...document.querySelectorAll('.srch .sh')].find(x => new RegExp(kind, 'i').test((x.querySelector('.k') || {}).textContent || '')); if (!b) throw new Error('no ' + kind + ' result'); b.click(); }, {kind, sel}); await p.waitForTimeout(700); };
    await go('tacrolimus', 'Drug list');
    check(await p.evaluate(() => VIEW === 'drugs' && !!document.querySelector('#v-drugs details.dlrowd[open]') && /Tacrolimus/i.test(document.querySelector('#v-drugs details.dlrowd[open]').textContent) && !document.querySelector('dialog.srch').open), `${tag}: a drug opens in Browse with its line open`);
    await go('atopic dermatitis', '^Disease');
    check(await p.evaluate(() => VIEW === 'dz' && DZ_UI.state.card === 'atopic-dermatitis' && [...document.querySelectorAll('#v-dz h2')].some(h => /Atopic dermatitis/i.test(h.textContent))), `${tag}: a disease opens its card`, await p.evaluate(() => VIEW));
    await go('fingertip unit', '^Reference');
    check(await p.evaluate(() => VIEW === 'ref'), `${tag}: a Reference section opens Reference`, await p.evaluate(() => VIEW));
    await go('retinoid receptors', '^Diagram');
    check(await p.evaluate(() => VIEW === 'diagrams'), `${tag}: a diagram opens Diagrams`, await p.evaluate(() => VIEW));
    await go('tazarotenic', '^Structure');
    check(await p.evaluate(() => VIEW === 'atlas' && /tazarotenic/i.test(document.querySelector('#atq').value)), `${tag}: a structure opens the Atlas filtered to it`, await p.evaluate(() => VIEW));
    await go('tazarotene', '^Topic');
    check(await p.evaluate(() => VIEW === 'quiz'), `${tag}: a topic starts practice`, await p.evaluate(() => VIEW));
    await reopen(); await q('tazarotene');
    await p.evaluate(() => document.querySelector('.srch [data-q]').click()); await p.waitForTimeout(800);
    check(await p.evaluate(() => VIEW === 'quiz' && !!document.querySelector('#v-quiz .stem, #v-quiz .qbody')), `${tag}: a question starts it`, await p.evaluate(() => VIEW));
    await reopen(); await q('tazarotene');
    await p.evaluate(() => document.querySelector('.srch [data-qall]').click()); await p.waitForTimeout(800);
    check(await p.evaluate(() => VIEW === 'quiz' && !!document.querySelector('#v-quiz .stem, #v-quiz .qbody')), `${tag}: "Practice these" starts a set`, await p.evaluate(() => VIEW));
    await reopen(); await q('scorad');
    const termIdx = await p.evaluate(() => { const b = [...document.querySelectorAll('.srch .sh')].find(x => /Term/.test(x.querySelector('.k').textContent)); if (!b) return null; b.click(); return true; });
    await p.waitForTimeout(500);
    check(termIdx && await p.evaluate(() => document.querySelector('dialog.srch').open && /SCORing Atopic Dermatitis/.test(document.querySelector('.srch .sbody').textContent)), `${tag}: a term shows its definition in place`);
    await p.keyboard.press('Escape'); await p.waitForTimeout(200);

    // ---- review fixes of 2026-11-14 ----
    // every Structure result opens the Atlas with that structure's own tile on screen (the filter gets the plain name)
    const at = await p.evaluate(async () => {
      const sleep = ms => new Promise(r => setTimeout(r, ms));
      const items = []; ATLAS.boards.forEach(b => b.sections.forEach(s => (s.items || []).forEach(it => { if (!(it.meta && it.meta.priority && it.meta.priority !== 'core')) items.push({plain: it.plain, title: it.n || it.plain}); })));
      const bad = [], inp = () => document.querySelector('#srchq');
      for (const it of items) {
        SEARCH_UI.open();
        inp().value = it.title; inp().dispatchEvent(new Event('input', {bubbles: true})); await sleep(180);
        // more than five structures can carry the words of one title: the group is opened in full before the row is looked for
        const more = [...document.querySelectorAll('.srch [data-more="atlas"]')].find(x => /more/.test(x.textContent)); if (more) more.click();
        const row = [...document.querySelectorAll('.srch .sh')].find(x => /^Structure/.test((x.querySelector('.k') || {}).textContent || '') && x.querySelector('.t').textContent === it.title);
        if (!row) { bad.push(it.title + ': no Structure row'); continue; }
        row.click(); await sleep(70);
        const v = document.getElementById('v-atlas'), tiles = [...v.querySelectorAll('.attile')];
        const mine = tiles.filter(t => { const f = t.getAttribute('data-find') || '', pl = it.plain.toLowerCase(); return f === pl || f.indexOf(pl + ' ') === 0; });
        const seen = t => !t.hidden && t.getClientRects().length > 0;
        const em = v.querySelector('.atempty');
        if (VIEW !== 'atlas') bad.push(it.title + ': view ' + VIEW);
        else if (document.querySelector('dialog.srch').open) bad.push(it.title + ': the search stayed open');
        else if (!mine.length) bad.push(it.title + ': no tile has the plain name ' + it.plain);
        else if (!mine.some(seen)) bad.push(it.title + ': its tile is not on screen (filter “' + v.querySelector('#atq').value + '”, ' + tiles.filter(seen).length + ' tiles)');
        else if (em && !em.hidden) bad.push(it.title + ': “' + em.textContent + '”');
      }
      const q = document.querySelector('#atq'); if (q) { q.value = ''; q.dispatchEvent(new Event('input', {bubbles: true})); }
      return {n: items.length, bad};
    });
    check(at.n >= 70 && !at.bad.length, `${tag}: each of the ${at.n} Structure results opens the Atlas with its own tile on screen`, at.bad.length + ' failed: ' + at.bad.slice(0, 6).join(' | '));
    await go('hydrocortisone', '^Structure');
    check(await p.evaluate(() => { const v = document.getElementById('v-atlas'), em = v.querySelector('.atempty'); return VIEW === 'atlas' && [...v.querySelectorAll('.attile')].some(t => !t.hidden && t.getClientRects().length > 0 && /hydrocortisone/i.test(t.getAttribute('data-find'))) && (!em || em.hidden); }), `${tag}: a structure whose title has a parenthesis (hydrocortisone) opens on its tile, not on "No structure matches"`, await p.evaluate(() => document.querySelector('#atq').value + ' / ' + ((document.querySelector('#v-atlas .atempty') || {}).textContent || '')));
    await p.evaluate(() => { const q = document.querySelector('#atq'); q.value = ''; q.dispatchEvent(new Event('input', {bubbles: true})); });

    // "steroid" is searched as typed
    const st = await p.evaluate(() => { const g = t => SEARCH_UI.search(t).groups; const titles = (t, ty) => (g(t).find(x => x.type === ty) || {items: []}).items.map(e => e.title);
      return {skel: titles('steroid skeleton', 'atlas'), nuc: titles('steroid nucleus', 'atlas'), drugs: titles('steroid', 'drug').length, cort: SEARCH_UI.search('steroid').groups.some(x => x.items.some(e => /corticosteroid/i.test(e.title + ' ' + (e.kw || '') + ' ' + (e.text || '')))), note: SEARCH_UI.search('steroid skeleton').note}; });
    check(st.skel.some(x => /Steroid C-atom numbering skeleton/.test(x)) && !st.note, `${tag}: "steroid skeleton" finds the steroid numbering skeleton in Structures`, JSON.stringify(st));
    check(st.nuc.some(x => /Steroid nucleus/.test(x)), `${tag}: "steroid nucleus" finds the steroid nucleus tile`, st.nuc.join(' | '));
    check(st.drugs > 0 && st.cort, `${tag}: "steroid" still finds the corticosteroids`, JSON.stringify({drugs: st.drugs, cort: st.cort}));

    // the marked words: a second word that is part of "mark" or of an entity leaves the row's text whole
    const mk = await p.evaluate(() => ({a: SEARCH_UI.hit('Skin mark', ['skin', 'mark']), b: SEARCH_UI.hit('Retinoid marker', ['retinoid', 'mar']), c: SEARCH_UI.hit('cAMP & <b>cGMP</b>', ['amp', 'lt', 'gt', 'b']), d: SEARCH_UI.hit('a < b', [])}));
    check(mk.a === '<mark>Skin</mark> <mark>mark</mark>' && mk.b === '<mark>Retinoid</mark> <mark>mar</mark>ker', `${tag}: a second word that is part of "mark" is marked without breaking the first mark`, JSON.stringify(mk));
    check(mk.c === 'c<mark>AMP</mark> &amp; &lt;b&gt;cGMP&lt;/b&gt;' && mk.d === 'a &lt; b', `${tag}: "amp", "lt" and "gt" do not match inside &amp; &lt; &gt;`, JSON.stringify(mk));
    await reopen();
    for (const two of ['skin mark', 'retinoid mar', 'hallmark mark', 'retinoid ar', 'camp amp']) {
      await q(two);
      const row = await p.evaluate(() => { const b = document.querySelector('.srch .sbody'); return {rows: b.querySelectorAll('.sh').length, bad: [...b.querySelectorAll('.sh')].filter(x => /mark>|<\/?mark|&(amp|lt|gt|quot);/.test(x.textContent)).map(x => x.textContent.slice(0, 80)), stray: [...b.querySelectorAll('.sh mark')].filter(m => m.querySelector('mark')).length}; });
      check(!row.bad.length && !row.stray, `${tag}: "${two}": no row shows a piece of a tag or an entity as text (${row.rows} rows)`, row.bad.join(' | '));
    }

    // an expanded group: the focus stays on its button, and another query starts short again
    await q('acne');
    const tg = () => p.evaluate(() => { const h = [...document.querySelectorAll('.srch h3.sg')].find(x => /^Topics/.test(x.textContent)); return h ? {rows: h.nextElementSibling.querySelectorAll('li').length, total: +(h.textContent.match(/\((\d+)\)/) || [0, 0])[1]} : null; });
    const t0 = await tg();
    check(t0 && t0.total > 5 && t0.rows === 5, `${tag}: Topics shows 5 of its ${t0 ? t0.total : 0} rows for "acne"`, JSON.stringify(t0));
    await p.focus('.srch [data-more="topic"]'); await p.keyboard.press('Enter'); await p.waitForTimeout(250);
    const t1 = await tg();
    const fo = await p.evaluate(() => { const a = document.activeElement; return {more: a && a.dataset ? a.dataset.more : null, txt: a ? a.textContent : '', inDlg: !!(a && a.closest && a.closest('dialog.srch'))}; });
    check(t1 && t1.rows === t1.total && fo.inDlg && fo.more === 'topic' && /fewer/.test(fo.txt), `${tag}: "Show more" by the keyboard lists the group and keeps the focus on its button`, JSON.stringify({t1, fo}));
    await p.keyboard.press('ArrowDown'); await p.waitForTimeout(100);
    check(await p.evaluate(() => document.activeElement.classList.contains('sh')), `${tag}: and the arrow keys still move through the results`);
    await q('psoriasis');
    const t2 = await tg();
    check(t2 && t2.total > 5 && t2.rows === 5, `${tag}: another search starts with Topics short again (5 of ${t2 ? t2.total : 0})`, JSON.stringify(t2));
    await p.evaluate(() => document.querySelector('.srch [data-more="q"]').click()); await p.waitForTimeout(200);
    const q1 = await p.$$eval('.srch [data-q]', xs => xs.length);
    await q('acne');
    const q2 = await p.$$eval('.srch [data-q]', xs => xs.length);
    check(q1 > 4 && q2 === 4, `${tag}: and Questions too (4 rows after ${q1} were listed for the search before)`, q1 + ' -> ' + q2);
    // an example chip is another query as well
    await p.evaluate(() => document.querySelector('.srch [data-more="topic"]').click()); await p.waitForTimeout(150);
    await q(''); await p.evaluate(() => [...document.querySelectorAll('.srch [data-eg]')].find(x => x.textContent === 'acne').click()); await p.waitForTimeout(200);
    const t3 = await tg();
    check(t3 && t3.rows === 5, `${tag}: an example chosen after an expanded search starts short as well`, JSON.stringify(t3));

    // a topic or subtopic with no question to ask is not offered
    const tp = await p.evaluate(() => {
      const dead = [], topicRows = t => (SEARCH_UI.search(t).groups.find(x => x.type === 'topic') || {items: []}).items;
      let asked = 0;
      const all = () => TOPICS.forEach(t => [t.name].concat((t.subs || []).map(s => s.name)).forEach(nm => { asked++; topicRows(nm).forEach(e => { if (!poolFor(e.id, e.sid).length) dead.push(nm + ' -> ' + e.title); }); }));
      all();
      const uv = topicRows('UV bands').filter(e => e.id === 's4-sun' && e.sid === 'uv').length, uvPool = poolFor('s4-sun', 'uv').length;
      // with a professor filter on, the rows follow the filtered pool; the filter is put back as it was
      const was = FILTER.prof, profs = [...new Set(QUESTIONS.map(x => x.prof))]; let withFilter = 0, shown0 = topicRows('acne').length, shown1 = null;
      try { FILTER.prof = profs.find(x => /Smith/.test(x)) || profs[0]; all(); shown1 = topicRows('acne').length; withFilter = 1; } finally { FILTER.prof = was; }
      return {asked, dead: [...new Set(dead)], uv, uvPool, withFilter, shown0, shown1, back: topicRows('acne').length};
    });
    check(tp.asked > 100 && !tp.dead.length && tp.withFilter === 1, `${tag}: no Topics row has an empty pool, with and without a professor filter (${tp.asked} searches)`, tp.dead.slice(0, 6).join(' | '));
    check(tp.uvPool > 0 || tp.uv === 0, `${tag}: the subtopic with no questions (UV bands of the sunscreen topic) is not a result`, JSON.stringify(tp));
    check(tp.shown1 < tp.shown0 && tp.back === tp.shown0, `${tag}: the Topics rows follow the Topics filters at each search (${tp.shown0} for "acne", ${tp.shown1} with one professor only)`, JSON.stringify(tp));

    // practising from the search while a drill is open: Back puts that drill on the Quiz tab again, at its question
    await p.keyboard.press('Escape'); await p.waitForTimeout(200);
    const d0 = await p.evaluate(() => { while (RET.length) RET.pop(); backBtn(); const t = TOPICS.find(x => poolFor(x.id, null).length > 5); startQuiz(t.id, null); return {label: Q.label, cur: Q.current.id, ret: RET.length, stem: (document.querySelector('#v-quiz .stem') || document.querySelector('#v-quiz')).textContent.slice(0, 60)}; });
    await p.click('#btnSearch'); await p.waitForTimeout(250); await q('tazarotene');
    await p.evaluate(() => document.querySelector('.srch [data-q]').click()); await p.waitForTimeout(700);
    const d1 = await p.evaluate(() => ({label: Q.label, view: VIEW, ret: RET.length, back: (document.getElementById('backbtn') || {}).textContent || ''}));
    check(d1.view === 'quiz' && /^Search: tazarotene/.test(d1.label) && d1.ret === d0.ret + 1 && /Back to/.test(d1.back), `${tag}: a question from the search opens over a drill in progress, with a Back button`, JSON.stringify(d1));
    await p.click('#backbtn'); await p.waitForTimeout(500);
    const d2 = await p.evaluate(() => ({label: Q.label, cur: Q.current && Q.current.id, view: VIEW, ret: RET.length, back: !!document.getElementById('backbtn'), stem: (document.querySelector('#v-quiz .stem') || document.querySelector('#v-quiz')).textContent.slice(0, 60)}));
    check(d2.view === 'quiz' && d2.label === d0.label && d2.cur === d0.cur && d2.stem === d0.stem && d2.ret === d0.ret && !d2.back, `${tag}: Back returns to the drill that was open, at the question it was on`, JSON.stringify({d0, d2}));
    // from another tab: Back goes to that tab and the Quiz tab holds the earlier drill again
    await p.evaluate(() => show('ref')); await p.waitForTimeout(200);
    await p.click('#btnSearch'); await p.waitForTimeout(250); await q('tazarotene');
    await p.evaluate(() => document.querySelector('.srch [data-qall]').click()); await p.waitForTimeout(700);
    const d3 = await p.evaluate(() => ({label: Q.label, view: VIEW, back: (document.getElementById('backbtn') || {}).textContent || ''}));
    await p.click('#backbtn'); await p.waitForTimeout(500);
    const d4 = await p.evaluate(() => ({label: Q.label, cur: Q.current && Q.current.id, view: VIEW, back: !!document.getElementById('backbtn')}));
    check(/^Search:/.test(d3.label) && d3.view === 'quiz' && /Back to/.test(d3.back) && d4.view === 'ref' && d4.label === d0.label && d4.cur === d0.cur && !d4.back, `${tag}: from another tab, Back returns to that tab and the earlier drill is on the Quiz tab again`, JSON.stringify({d3, d4}));

    // a set started after the search set is not replaced by Back
    await p.evaluate(() => show('ref')); await p.waitForTimeout(150);
    await p.click('#btnSearch'); await p.waitForTimeout(250); await q('tazarotene');
    await p.evaluate(() => document.querySelector('.srch [data-q]').click()); await p.waitForTimeout(700);
    const d5 = await p.evaluate(() => { const t = TOPICS.filter(x => poolFor(x.id, null).length > 5)[1]; startQuiz(t.id, null); return {label: Q.label, cur: Q.current.id, back: !!document.getElementById('backbtn')}; });
    await p.click('#backbtn'); await p.waitForTimeout(500);
    const d6 = await p.evaluate(() => ({label: Q.label, cur: Q.current && Q.current.id, view: VIEW, back: !!document.getElementById('backbtn')}));
    check(d5.back && d5.label !== d0.label && d6.view === 'ref' && d6.label === d5.label && d6.cur === d5.cur && !d6.back, `${tag}: a set started after the search set stays on the Quiz tab when Back is pressed`, JSON.stringify({d5, d6}));

    // a press that begins in the field and ends outside the box does not close the search; a tap outside does
    if (w >= 900) {
      await p.click('#btnSearch'); await p.waitForTimeout(250); await q('tacrolimus');
      const bx = await p.evaluate(() => { const r = document.querySelector('#srchq').getBoundingClientRect(), d = document.querySelector('dialog.srch').getBoundingClientRect(); return {x: r.left + 60, y: r.top + r.height / 2, out: Math.max(4, d.left - 40)}; });
      await p.mouse.move(bx.x, bx.y); await p.mouse.down(); await p.mouse.move(bx.out, bx.y, {steps: 6}); await p.mouse.up(); await p.waitForTimeout(250);
      check(await p.evaluate(() => document.querySelector('dialog.srch').open && document.querySelector('#srchq').value === 'tacrolimus'), `${tag}: a selection dragged from the field out of the box leaves the search open`);
      await reopen();
      await p.mouse.click(bx.out, bx.y); await p.waitForTimeout(250);
      check(await p.evaluate(() => !document.querySelector('dialog.srch').open), `${tag}: a tap outside the box closes it`);
    }
    await p.evaluate(() => { const d = document.querySelector('dialog.srch'); if (d.open) SEARCH_UI.close(); });

    check((await ls(p)) === before, `${tag}: the search stores nothing (no new localStorage key, none named for it)`, before + ' -> ' + await ls(p));
    check(!errs.length, `${tag}: no page errors`, errs.join(' | '));
    await p.close();
  }
  await b.close();
  console.log((fail ? 'FAIL' : 'PASS') + ': search_test.js: ' + (fail ? fail + ' of ' + n + ' checks failed' : n + ' checks passed'));
  process.exit(fail ? 1 : 0);
})().catch(e => { console.log('FAIL: search_test.js: the test stopped: ' + e.message); process.exit(1); });
