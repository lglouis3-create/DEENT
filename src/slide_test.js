/* slide_test.js: the slide links and the slide viewer in a browser, on the PREVIEW build
 * (preview/index.html, which loads the pictures from ../deck/), at 390 and 1280 px.
 *
 *     NODE_PATH=$(npm root -g) node slide_test.js        (after: python3 build.py --preview)
 *
 * What it checks at each width:
 *   - a question shows no slide button and no source line before it is answered; after the
 *     answer its source line and explanation have them; a running exam paper has none, its
 *     review has them;
 *   - a Reference table, a Tell apart table, a guide section, a Drug list card, an Atlas tile,
 *     a Diseases card and a Diseases drug panel each have a link that opens its slide;
 *   - the viewer shows the picture slide_data.js says (the <img> address, loaded), names the
 *     deck and the slide, Previous / Next move within the deck, Escape closes it and focus goes
 *     back to the citation; over the Diseases drug panel it opens on top and closes alone;
 *   - Dr. Smith's "Sun" citation and Dr. Patel's open different decks; Dr. Smith's Sun slide N
 *     opens clean page N - 4, her Sun slide 3 the same slide of her Skin Pharmacology deck; a
 *     DPAW citation opens the mapped clean page;
 *   - every slide button of every reading tab (every Diseases card with its practice patients
 *     answered, every drug panel) points to a picture that is on disk, sits outside every other
 *     control and drawing, and is not a transcript reference;
 *   - a picture that does not load gives the message and Try again; nothing is stored; the page
 *     does not scroll sideways; no page error; the linkifier is idle when nothing changes;
 *   - once: the time the page takes to start, with slide_ui.js and with it switched off.
 */
const fs = require('fs'), path = require('path'), vm = require('vm');
const L = require('./check_lib');
const NAME = 'slide_test.js';
const {check} = L;
const ROOT = L.PAGE.ROOT || path.join(__dirname, '..');
const PREVIEW = path.join(ROOT, 'preview', 'index.html');
if (!fs.existsSync(PREVIEW)) L.notRun(NAME, 'there is no preview build (python3 build.py --preview)');
if (!/const SLIDE_UI = /.test(fs.readFileSync(PREVIEW, 'utf8'))) L.notRun(NAME, 'the preview build has no slide_ui.js in it (rebuild: python3 build.py --preview)');

/* slide_data.js and the parser, as slide_check.js loads them */
const sb = {console}; vm.createContext(sb);
vm.runInContext(fs.readFileSync(path.join(__dirname, 'slide_data.js'), 'utf8') + '\n' + fs.readFileSync(path.join(__dirname, 'slide_ui.js'), 'utf8') + '\nthis.S = SLIDES; this.P = SLIDE_UI.parser;', sb);
const S = sb.S, P = sb.P, D = S.decks;
const onDisk = (deck, n, printed) => { const r = P.resolve(deck, n, printed); return r ? {r, file: P.file(r.deck, r.page), ok: fs.existsSync(path.join(ROOT, P.file(r.deck, r.page)))} : null; };

(async () => {
  const {browser} = await L.launch(NAME);
  await L.pageUrl(path.join(ROOT, 'index.html'));          // the site root is served, so ../deck/ resolves
  try {
    for (const width of [390, 1280]) {
      console.log(`\n=== ${width} px ===`);
      const {ctx, page, errors} = await L.openPage(browser, PREVIEW, {viewport: {width, height: width < 500 ? 844 : 900}});
      page.on('console', m => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) errors.push('console: ' + m.text()); });
      const settle = ms => page.waitForTimeout(ms || 350);
      const sideways = () => page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      await settle(500);
      if (!check(await page.evaluate(() => typeof SLIDE_UI === 'object' && !!SLIDE_UI && typeof SLIDE_UI.open === 'function' && BUILD.preview === true), 'slide_ui.js is running in the preview build')) { await ctx.close(); continue; }
      const keys0 = await page.evaluate(() => Object.keys(localStorage).concat(Object.keys(sessionStorage)).sort());

      /* the viewer, read from the page */
      const viewer = () => page.evaluate(() => {
        const d = document.querySelector('dialog.slv'); if (!d) return null;
        const i = d.querySelector('.slv-img'), b = d.getBoundingClientRect();
        return {open: d.open, modal: d.open && d.matches(':modal'), deck: d.querySelector('.slv-deck').textContent, pos: d.querySelector('.slv-pos').textContent,
                note: d.querySelector('.slv-note').hidden ? '' : d.querySelector('.slv-note').textContent, src: i.getAttribute('src') || '', alt: i.alt, loaded: i.complete && i.naturalWidth > 0,
                full: d.querySelector('.slv-full').getAttribute('href'), left: b.left, right: b.right, top: b.top, bottom: b.bottom, vw: innerWidth, vh: innerHeight,
                prev: d.querySelector('[data-slv=prev]').disabled, next: d.querySelector('[data-slv=next]').disabled, err: !d.querySelector('.slv-err').hidden,
                onTop: (() => { const e = document.elementFromPoint(innerWidth / 2, Math.min(innerHeight - 5, b.top + 20)); return !!e && d.contains(e); })()};
      });
      const loaded = async () => { for (let t = 0; t < 60; t++) { const v = await viewer(); if (v && (v.loaded || v.err)) return v; await settle(100); } return viewer(); };
      /* mark one button, activate it, and compare the viewer with slide_data.js */
      const opens = async (label, pick, how) => {
        const b = await page.evaluate(pick);
        if (!check(!!b, `${label}: there is a slide button (${b ? JSON.stringify(b.text) + ' -> ' + b.deck + ' ' + b.n : 'none'})`)) return null;
        const want = onDisk(b.deck, +b.n, b.printed);
        if (how === 'key') { await page.evaluate(() => document.querySelector('[data-slt]').focus()); await page.keyboard.press('Enter'); }
        else await page.evaluate(() => document.querySelector('[data-slt]').click());
        const v = await loaded();
        const k = D[want.r.deck];
        check(!!v && v.open && v.loaded && v.src === '../' + want.file && v.full === v.src, `${label}: the viewer shows ${want.file}`, v && {open: v.open, loaded: v.loaded, src: v.src});
        check(!!v && v.deck === k.label && v.pos.indexOf(k.unit + ' ' + P.citedOf(want.r.deck, want.r.page) + ' of ' + k.cited) === 0 && v.alt.indexOf(k.label) === 0,
          `${label}: it names the deck and the ${k.unit.toLowerCase()} (${v ? v.deck + '; ' + v.pos : ''})`);
        return {b, v, want};
      };
      const escape = async (label, staysOpen) => {
        await page.keyboard.press('Escape'); await settle(200);
        const r = await page.evaluate(() => ({open: document.querySelector('dialog.slv').open, back: !!document.activeElement && document.activeElement.hasAttribute('data-slt'), view: VIEW,
          dz: !!document.querySelector('#v-dz .dzdlg[open]')}));
        check(!r.open && r.back, `${label}: Escape closes the viewer and focus is back on the citation`, r);
        if (staysOpen !== undefined) check(r.dz === staysOpen, `${label}: the drug panel under it is still open`);
        await page.evaluate(() => document.querySelectorAll('[data-slt]').forEach(x => x.removeAttribute('data-slt')));
        return r;
      };
      const mark = `b => { document.querySelectorAll('[data-slt]').forEach(x => x.removeAttribute('data-slt')); if (!b) return null; b.setAttribute('data-slt', '1'); b.scrollIntoView({block: 'center'});
        return {text: b.textContent, deck: b.getAttribute('data-deck'), n: b.getAttribute('data-n'), to: b.getAttribute('data-to'), printed: b.hasAttribute('data-printed')}; }`;
      const pickIn = sel => new Function(`return (${mark})(document.querySelector(${JSON.stringify(sel)}));`);

      /* ---- a question: nothing before the answer, links after ---- */
      const ids = await page.evaluate(() => {
        const mc = q => !q.type && !q.multi && q.options && q.options.length > 1;
        const f = (re, test) => (QUESTIONS.find(q => mc(q) && re.test(q.cite) && (!test || test(q))) || {}).id;
        const first = q => +(/slides? (\d+)/.exec(q.cite) || [])[1];
        return {pc: f(/Skin-PCol[^)]*\) slide \d+; T \d/, q => q.options.some(o => /slide \d/.test(o.why))), sun: f(/DEENT_Sun_Exposure_2026\.pdf\) slides? \d/, q => first(q) >= 6),
                pso: f(/DEENT_Sun_Exposure_2026\.pdf\) slides? [234]\b/), patel: f(/Patel_Sun-Exposure-Student\.pdf\) slides? \d/), mc: f(/f26-DEENT-DPAW-mc\.pdf\) slide \d/, q => first(q) >= 30)};
      });
      check(ids.pc && ids.sun && ids.pso && ids.patel && ids.mc, 'the bank has a question for each case (Skin Pharmacology, Dr. Smith\'s Sun, her psoralen slides, Dr. Patel\'s Sun, DPAW)', ids);
      const ask = async id => { await L.quizOn(page, id); await settle(300); };
      const answer = async () => { await page.evaluate(() => document.querySelector('#v-quiz button.opt[data-o]').click()); await settle(450); };
      await ask(ids.pc);
      const pre = await page.evaluate(() => ({slk: document.querySelectorAll('#v-quiz .slk').length, cite: !!document.querySelector('#v-quiz .cite'), opts: document.querySelectorAll('#v-quiz button.opt').length}));
      check(pre.opts > 1 && !pre.slk && !pre.cite, `before the answer: ${pre.opts} options, no source line and no slide button`, pre);
      await answer();
      const post = await page.evaluate(() => {
        const c = document.querySelector('#v-quiz .cite'), bs = [...document.querySelectorAll('#v-quiz .why .slk')];
        return {cite: c ? c.textContent : '', inCite: c ? c.querySelectorAll('.slk').length : 0, inWhy: bs.length, inOpt: document.querySelectorAll('#v-quiz button.opt .slk').length,
                texts: bs.map(b => b.textContent), tr: bs.filter(b => /[@:]/.test(b.textContent) || /(?:^|[^A-Za-z])T[\s\xa0]?$/.test(b.previousSibling ? b.previousSibling.textContent : '')).length};
      });
      check(post.inCite >= 1 && post.inWhy > post.inCite && !post.inOpt, `after the answer: the source line has ${post.inCite} slide button(s), the explanation ${post.inWhy - post.inCite} more, the options none`, post);
      check(/; T \d/.test(post.cite) && !post.tr && !post.texts.some(t => /^T\b/.test(t)), 'the transcript lines in that source line stay text', post.cite);
      const one = await opens('question source line', pickIn('#v-quiz .cite .slk'), 'key');
      if (one) {
        const p0 = one.want.r.page, d0 = one.want.r.deck, at = async () => { const v = await loaded(); return v.src; };
        await page.keyboard.press('ArrowRight'); const a = await at();
        await page.evaluate(() => document.querySelector('dialog.slv [data-slv=prev]').click()); const b = await at();
        await page.evaluate(() => document.querySelector('dialog.slv [data-slv=prev]').click()); const c = await at();
        check(a === '../' + P.file(d0, p0 + 1) && b === '../' + P.file(d0, p0) && c === '../' + P.file(d0, p0 - 1), `Next and Previous move one slide within the deck (${[a, b, c].join(', ')})`);
        const v = await viewer();
        check(v.left >= 0 && v.right <= v.vw + 0.5 && v.bottom <= v.vh + 0.5 && (await sideways()) <= 1, `the viewer fits the ${width} px window (${Math.round(v.right - v.left)} px wide)`);
        const r = await escape('question source line');
        check(r.view === 'quiz' && (await page.evaluate(() => Q.revealed === true)), 'the question is still on screen, answered');
      }

      /* ---- the two sun decks, the psoralen slides, DPAW ---- */
      await ask(ids.sun); await answer();
      const s1 = await opens('Dr. Smith, Sun', pickIn('#v-quiz .cite .slk'));
      if (s1) { check(s1.b.deck === 'sun' && s1.want.r.deck === 'sun' && s1.want.r.page === +s1.b.n - 4, `Dr. Smith's Sun slide ${s1.b.n} opens clean page ${s1.want.r.page} of her deck`); await escape('Dr. Smith, Sun'); }
      await ask(ids.patel); await answer();
      const s2 = await opens('Dr. Patel, Sun', pickIn('#v-quiz .cite .slk'));
      if (s2) { check(s2.b.deck === 'p8s' && s2.want.r.deck === 'p8s' && s2.want.r.page === +s2.b.n, `Dr. Patel's Sun slide ${s2.b.n} opens page ${s2.want.r.page} of her deck`); await escape('Dr. Patel, Sun'); }
      check(!!s1 && !!s2 && s1.v.deck !== s2.v.deck && s1.v.src.split('/')[2] !== s2.v.src.split('/')[2], 'the two sun citations open two different decks', s1 && s2 && [s1.v.deck, s2.v.deck]);
      await ask(ids.pso); await answer();
      const s3 = await opens('Dr. Smith, Sun (psoralen slides)', pickIn('#v-quiz .cite .slk'));
      if (s3) { check(s3.b.deck === 'sun' && s3.want.r.deck === 'pc' && s3.want.r.page === +s3.b.n + 75 && /^Cited as Dr\. Smith, Sun Exposure, slide/.test(s3.v.note), `her Sun slide ${s3.b.n} opens Skin Pharmacology slide ${s3.want.r.page}, and the viewer says so`, s3.v.note); await escape('psoralen slides'); }
      await ask(ids.mc); await answer();
      const s4 = await opens('DPAW', pickIn('#v-quiz .cite .slk'));
      if (s4) { check(s4.want.r.deck === 'mc' && s4.want.r.page === +s4.b.n - 1 && s4.v.pos === `Page ${s4.b.n} of 71 · slide number printed on it: ${s4.want.r.page}`, `DPAW page ${s4.b.n} opens clean page ${s4.want.r.page} (${s4.v.pos})`); await escape('DPAW'); }

      /* ---- a running paper has none; its review has them ---- */
      const ex = await page.evaluate(async () => {
        show('exam'); beginExam(); await new Promise(r => setTimeout(r, 400));
        const run = {slk: document.querySelectorAll('#v-exam .slk').length, cite: document.querySelectorAll('#v-exam .cite').length, opts: document.querySelectorAll('#v-exam button.opt').length};
        document.querySelector('#v-exam button.opt').click(); finishExam(true); await new Promise(r => setTimeout(r, 900));
        return {run, review: {cards: document.querySelectorAll('#v-exam .qcard').length, cites: document.querySelectorAll('#v-exam .cite').length, linked: [...document.querySelectorAll('#v-exam .cite')].filter(c => c.querySelector('.slk')).length,
                stems: document.querySelectorAll('#v-exam .stem .slk').length}};
      });
      check(ex.run.opts > 1 && !ex.run.slk && !ex.run.cite, 'a running exam paper shows no source line and no slide button', ex.run);
      check(ex.review.cites > 10 && ex.review.linked === ex.review.cites && !ex.review.stems, `the exam review links every source line (${ex.review.linked} of ${ex.review.cites}) and no question stem`, ex.review);
      await page.evaluate(() => { EX = null; });

      /* ---- the reading tabs ---- */
      const tabs = [
        ['Reference table', 'ref', '#v-ref table.reftab td .slk'], ['Tell apart table', 'tell', '#v-tell table.reftab td .slk'], ['guide section', 'guide', '#v-guide section.gobj .gpt .slk, #v-guide section.gobj li .slk'],
        ['Drug list card', 'drugs', '#v-drugs .dlcard .dlsrc .slk'], ['Atlas tile', 'atlas', '#v-atlas .attile .slk'], ['figure caption', 'diagrams', '#v-diagrams figcaption .slk']];
      for (const [label, v, sel] of tabs) {
        await page.evaluate(v => show(v), v); await settle(900);
        await page.evaluate(() => document.querySelectorAll('details').forEach(d => { if (d.querySelector('.slk')) d.open = true; }));
        const o = await opens(label, pickIn(sel), width === 390 ? 'click' : 'key');
        if (o) await escape(label);
        check((await sideways()) <= 1, `${label}: the tab does not scroll sideways`);
      }
      const bold = await page.evaluate(() => { show('ref'); const b = document.querySelector('#v-ref h3 .slk'); return b ? getComputedStyle(b).fontWeight === getComputedStyle(b.parentElement).fontWeight : null; });
      check(bold !== false, 'a slide button in a heading keeps the heading\'s weight');

      /* ---- Diseases: a card, a practice patient, a drug panel (a dialog over a dialog) ---- */
      await page.evaluate(() => { show('dz'); const c = DZ.cards.find(x => x.id === 'acne'); DZ_UI.state.view = 'cards'; DZ_UI.state.card = c.id; c.steps.forEach((s, i) => { DZ_UI.state.open[c.id + ':' + i] = true; }); DZ_UI.render(); });
      await settle(700);
      const dc = await opens('Diseases card', pickIn('#v-dz .dzcard .stepbody .dzsrc .slk'));
      if (dc) await escape('Diseases card');
      const pt0 = await page.evaluate(() => document.querySelectorAll('#v-dz .dzcases .slk').length);
      await page.evaluate(() => document.querySelector('#v-dz .dzcases .dzopt').click()); await settle(500);
      const pt1 = await page.evaluate(() => ({n: document.querySelectorAll('#v-dz .dzcases .dzans .slk').length, inOpt: document.querySelectorAll('#v-dz .dzcases .dzopt .slk').length,
        decks: [...new Set([...document.querySelectorAll('#v-dz .dzcases .dzans .slk')].map(b => b.getAttribute('data-deck')))]}));
      check(!pt0 && pt1.n >= 1 && !pt1.inOpt && pt1.decks.join() === 'p6', `a practice patient has no slide button before the answer and ${pt1.n} after it, to Dr. Patel's Acne deck`, {pt0, pt1});
      await page.evaluate(() => document.querySelector('#v-dz .dzdrug[data-drug]').click()); await settle(600);
      const panel = await page.evaluate(() => { const d = document.querySelector('#v-dz .dzdlg'); return {open: d.open, slk: d.querySelectorAll('.slk').length}; });
      check(panel.open && panel.slk >= 1, `a drug panel has slide buttons (${panel.slk})`);
      const dp = await opens('Diseases drug panel', pickIn('#v-dz .dzdlg .slk'), 'key');
      if (dp) {
        check(dp.v.modal && dp.v.onTop, 'the viewer opens on top of the drug panel');
        await escape('Diseases drug panel', true);
        await page.keyboard.press('Escape'); await settle(200);
        check(await page.evaluate(() => !document.querySelector('#v-dz .dzdlg').open), 'a second Escape closes the drug panel');
      }
      check((await sideways()) <= 1, 'Diseases does not scroll sideways');

      /* ---- every slide button of every reading tab ---- */
      const sweep = async sel => page.evaluate(sel => [...document.querySelectorAll(sel)].filter(b => !b.hasAttribute('data-sw')).map(b => {
        b.setAttribute('data-sw', '1');
        const prev = b.previousSibling ? b.previousSibling.textContent : '';
        return {t: b.textContent, d: b.getAttribute('data-deck'), n: +b.getAttribute('data-n'), to: +b.getAttribute('data-to') || 0, p: b.hasAttribute('data-printed'),
                bad: (b.parentElement.closest('button,a,summary,label,svg,select,nav') ? 'inside a control' : '') + (/(?:^|[^A-Za-z])T[\s\xa0]?$|@$|(?:audio|recording)[\s\xa0]$|\d\/$/.test(prev) || /[@:\/]/.test(b.textContent) ? ' transcript or date' : '') +
                     (b.firstElementChild ? ' has markup inside' : '')};
      }), sel);
      let all = [];
      for (const v of ['ref', 'tell', 'guide', 'atlas', 'drugs', 'diagrams']) { await page.evaluate(v => show(v), v); await settle(800); const r = await sweep('#v-' + v + ' .slk'); r.forEach(x => { x.v = v; }); all = all.concat(r); }
      const per = v => all.filter(x => x.v === v).length;
      await page.evaluate(() => show('dz'));
      const dz = await page.evaluate(() => ({cards: DZ.cards.map(c => [c.id, (c.patients || []).length]), drugs: Object.keys(DZ.drugs), terms: Object.keys(DZ.terms)}));
      for (const [id, pts] of dz.cards) {
        await page.evaluate(id => { const c = DZ.cards.find(x => x.id === id); DZ_UI.state.view = 'cards'; DZ_UI.state.card = id; c.steps.forEach((s, i) => { DZ_UI.state.open[id + ':' + i] = true; }); DZ_UI.render(); }, id);
        await settle(220);
        for (let k = 0; k < pts; k++) {
          await page.evaluate(() => { const b = document.querySelector('#v-dz .dzcases .dzopt:not([disabled])'); if (b) b.click(); }); await settle(180);
          (await sweep('#v-dz .slk')).forEach(x => { x.v = 'dz'; all.push(x); });
          await page.evaluate(() => { const b = document.querySelector('#v-dz [data-dz="nextpt"]'); if (b) b.click(); }); await settle(60);
        }
        (await sweep('#v-dz .slk')).forEach(x => { x.v = 'dz'; all.push(x); });
      }
      const openDz = (attr, k) => page.evaluate(([attr, k]) => { const b = document.createElement('button'); b.setAttribute('data-' + attr, k); b.style.display = 'none'; document.querySelector('#v-dz .dzbody').appendChild(b); b.click(); b.remove(); }, [attr, k]);
      for (const k of dz.drugs) { await openDz('drug', k); await settle(150); (await sweep('#v-dz .dzdlg .slk')).forEach(x => { x.v = 'dz'; all.push(x); }); }
      for (const k of dz.terms) { await openDz('term', k); await settle(120); (await sweep('#v-dz .dzdlg .slk')).forEach(x => { x.v = 'dz'; all.push(x); }); }
      await page.evaluate(() => { const d = document.querySelector('#v-dz .dzdlg'); if (d && d.open) d.close(); });
      for (const v of ['tell', 'pairs', 'rules']) { await page.evaluate(v => { DZ_UI.state.view = v; DZ_UI.render(); }, v); await settle(450); (await sweep('#v-dz .slk')).forEach(x => { x.v = 'dz'; all.push(x); }); }
      const noFile = all.filter(x => { const o = onDisk(x.d, x.n, x.p); return !o || !o.ok; }), wrong = all.filter(x => x.bad);
      console.log(`  slide buttons: Reference ${per('ref')}, Tell apart ${per('tell')}, Guides ${per('guide')}, Atlas ${per('atlas')}, Drug list ${per('drugs')}, figure captions ${per('diagrams')}, Diseases ${per('dz')}`);
      check(all.length > 3000 && ['ref', 'tell', 'guide', 'atlas', 'drugs', 'diagrams', 'dz'].every(v => per(v) > 30), `the reading tabs have ${all.length} slide buttons, each tab its share`);
      check(!noFile.length, 'every one of them points to a picture that is on disk', noFile.slice(0, 6).map(x => x.v + ' ' + x.t + ' ' + x.d + ' ' + x.n).join('; '));
      check(!wrong.length, 'none is inside another control or a drawing, none is a transcript reference, a time or a date', wrong.slice(0, 6).map(x => x.v + ' ' + JSON.stringify(x.t) + x.bad).join('; '));
      const sunBy = d => all.filter(x => x.d === d).length;
      check(sunBy('sun') > 20 && sunBy('p8s') > 20, `both sun decks are linked in the reading tabs (Dr. Smith's ${sunBy('sun')}, Dr. Patel's ${sunBy('p8s')})`);
      const other = await page.evaluate(() => { const out = {}; for (const v of ['topics', 'gaps', 'settings']) { show(v); out[v] = document.querySelectorAll('#v-' + v + ' .slk').length; } return out; });
      check(!other.topics && !other.settings, 'Topics and Settings have no slide buttons', other);

      /* ---- a picture that does not load ---- */
      await page.evaluate(() => show('ref')); await settle(500);
      await page.route('**/deck/**', r => r.abort());
      const bad = await page.evaluate(new Function(`return (${mark})(document.querySelector('#v-ref td .slk'));`));
      await page.evaluate(() => document.querySelector('[data-slt]').click());
      const e1 = await loaded();
      check(!!e1 && e1.open && e1.err && !e1.loaded, 'a picture that does not load: the viewer says so and offers Try again', e1 && {err: e1.err, loaded: e1.loaded});
      await page.unroute('**/deck/**');
      await page.evaluate(() => document.querySelector('dialog.slv [data-slv=again]').click());
      const e2 = await loaded();
      check(!!e2 && e2.loaded && !e2.err, 'Try again loads it once the connection is back');
      await page.evaluate(() => document.querySelector('dialog.slv [data-slv=close]').click()); await settle(150);
      check(await page.evaluate(() => !document.querySelector('dialog.slv').open && document.activeElement.hasAttribute('data-slt')), 'Close closes it and focus is back on the citation');

      /* ---- quiet when nothing changes; nothing stored ---- */
      await page.evaluate(() => show('guide')); await settle(1200);
      const idle = await page.evaluate(() => new Promise(r => { const a = SLIDE_UI.stats.runs; setTimeout(() => r(SLIDE_UI.stats.runs - a), 1200); }));
      check(idle === 0, 'with Guides open and nothing changing, the linkifier does not run', idle + ' runs in 1.2 s');
      const st = await page.evaluate(() => ({ms: Math.round(SLIDE_UI.stats.ms), runs: SLIDE_UI.stats.runs, links: SLIDE_UI.stats.links}));
      console.log(`  linkifier: ${st.runs} passes, ${st.links} buttons made, ${st.ms} ms in all`);
      const keys1 = await page.evaluate(() => Object.keys(localStorage).concat(Object.keys(sessionStorage)).sort());
      const added = keys1.filter(k => !keys0.includes(k));
      check(!keys1.some(k => /slide|slv|slk|deck:/i.test(k)) && !/localStorage|sessionStorage|indexedDB|document\.cookie|caches\./.test(fs.readFileSync(path.join(__dirname, 'slide_ui.js'), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '')),
        'slide_ui.js stores nothing (no storage call in the file; no key of its own)', added.join(', '));
      check(!errors.length, 'no page error', errors.slice(0, 4).join(' | '));
      await ctx.close();
    }

    /* ---- start-up time, with slide_ui.js and with it switched off ---- */
    console.log('\n=== Start-up time ===');
    const html = fs.readFileSync(PREVIEW, 'utf8'), MARK = 'const SLIDE_UI = (() => {';
    if (!check(html.split(MARK).length === 2, 'the page holds slide_ui.js once')) return;
    const off = html.replace(MARK, MARK + ' return null;');
    const times = {on: [], off: []};
    for (let k = 0; k < 7; k++) for (const mode of ['on', 'off']) {
      const ctx = await browser.newContext({viewport: {width: 1280, height: 900}, serviceWorkers: 'block'});
      await ctx.addInitScript(() => { window.prompt = () => 'TestUser'; });
      const page = await ctx.newPage();
      await page.route('**/preview/index.html', r => r.fulfill({status: 200, contentType: 'text/html; charset=utf-8', body: mode === 'on' ? html : off}));
      await page.goto(await L.pageUrl(PREVIEW));
      await page.waitForFunction(() => document.querySelectorAll('#nav button').length > 3 && document.querySelector('#v-topics') && document.querySelector('#v-topics').children.length > 0, null, {timeout: 20000});
      const t = await page.evaluate(() => { const n = performance.getEntriesByType('navigation')[0]; return {dcl: n.domContentLoadedEventEnd, on: typeof SLIDE_UI === 'object' && !!SLIDE_UI}; });
      if (k) times[mode].push(t.dcl);                       // the first pair warms the cache
      if (mode === 'off' && t.on) check(false, 'the switched-off copy runs without slide_ui.js');
      await ctx.close();
    }
    const med = a => a.slice().sort((x, y) => x - y)[Math.floor(a.length / 2)];
    const on = med(times.on), offT = med(times.off);
    console.log(`  page ready (DOMContentLoaded end), median of ${times.on.length}: with slide_ui.js ${on.toFixed(0)} ms, without ${offT.toFixed(0)} ms (difference ${(on - offT).toFixed(0)} ms)`);
    check(on - offT < Math.max(60, 0.1 * offT), 'the page starts no more than 60 ms (or 10%) later with slide_ui.js than without it', `${on.toFixed(0)} against ${offT.toFixed(0)} ms`);
  } finally { await browser.close(); }
  L.finish(NAME);
})().catch(e => { console.error(e); console.log(`FAIL: ${NAME}: stopped: ${e && e.message}`); process.exit(1); });
