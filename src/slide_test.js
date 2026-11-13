/* slide_test.js: the slide links and the slide viewer in a browser, on the PREVIEW build
 * (preview/index.html, which loads the pictures from ../deck/), at 390 and 1280 px.
 *
 *     NODE_PATH=$(npm root -g) node slide_test.js        (after: python3 build.py --preview)
 *
 * What it checks at each width:
 *   - a question shows no slide button and no source line before it is answered; after the
 *     answer its source line and explanation have them; a running exam paper has none, its
 *     review has them; a slide link's name is its own text and its slide its description; a
 *     key held down on it opens the slide once;
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
 *   - once, at 1280 px: the page against slide_check.js's model (node slide_check.js --model),
 *     place by place: the lines under the pairs of every matching question, the structure
 *     strip of every question that has one (quiz and exam review; Dr. Sikazwe's deck whatever
 *     the question's), every objective bar of the guides (and its slide list read on its own),
 *     the steps of every Diseases card (the cards with more than one professor among them),
 *     the three other Diseases views, the "Who should not get it" lists of the drug panels;
 *     and the cases of the 2026-11-13 review: a citation before a colon, the assigned-pages
 *     note in printed numbers, the chart page that stays text, a heading read as written, no
 *     pass while the practice-exam clock ticks, a citation next to a highlighted word, the
 *     missed list's source line and the review plan;
 *   - once: the time the page takes to start, with slide_ui.js and with it switched off.
 */
const fs = require('fs'), path = require('path'), vm = require('vm'), os = require('os'), child = require('child_process');
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
      const role = await page.evaluate(() => { const b = document.querySelector('#v-quiz .cite .slk'); return {role: b.getAttribute('role'), tab: b.tabIndex, label: b.getAttribute('aria-label'), title: b.getAttribute('title'), desc: b.getAttribute('aria-description'), text: b.textContent,
        labelled: document.querySelectorAll('.slk[aria-label], .slk[aria-labelledby]').length}; });
      check(role.role === 'button' && role.tab === 0 && role.label === null && !role.labelled && /^Open Dr\. Smith, Skin Pharmacology, slide \d+$/.test(role.title || '') && role.desc === role.title,
        'a slide link is a button to the keyboard and a screen reader: its name is its own text (no aria-label), its slide is its description and its title', role);
      const one = await opens('question source line', pickIn('#v-quiz .cite .slk'), 'key');
      if (one) {
        await page.keyboard.press('Escape'); await settle(150);
        await page.keyboard.press(' '); const sp = await loaded();
        check(!!sp && sp.open && sp.src === '../' + one.want.file, 'Space opens it too');
        const p0 = one.want.r.page, d0 = one.want.r.deck, at = async () => { const v = await loaded(); return v.src; };
        await page.keyboard.press('ArrowRight'); const a = await at();
        await page.evaluate(() => document.querySelector('dialog.slv [data-slv=prev]').click()); const b = await at();
        await page.evaluate(() => document.querySelector('dialog.slv [data-slv=prev]').click()); const c = await at();
        check(a === '../' + P.file(d0, p0 + 1) && b === '../' + P.file(d0, p0) && c === '../' + P.file(d0, p0 - 1), `Next and Previous move one slide within the deck (${[a, b, c].join(', ')})`);
        const v = await viewer();
        check(v.left >= 0 && v.right <= v.vw + 0.5 && v.bottom <= v.vh + 0.5 && (await sideways()) <= 1, `the viewer fits the ${width} px window (${Math.round(v.right - v.left)} px wide)`);
        const r = await escape('question source line');
        check(r.view === 'quiz' && (await page.evaluate(() => Q.revealed === true)), 'the question is still on screen, answered');
        // a key held down opens the slide once: its repeats are not new presses (and a repeated Space does not scroll the page)
        await page.evaluate(() => {
          window.__opens = 0;
          const d = HTMLDialogElement.prototype, o = d.showModal;
          if (!d.__counted) { d.__counted = true; d.showModal = function(){ if (this.classList.contains('slv')) window.__opens++; return o.apply(this, arguments); }; }
          document.querySelector('#v-quiz .cite .slk').focus();
        });
        for (let k = 0; k < 7; k++) await page.keyboard.down('Enter');
        await page.keyboard.up('Enter'); await settle(250);
        const held = await page.evaluate(() => {
          SLIDE_UI.close();
          const b = document.querySelector('#v-quiz .cite .slk'), ev = new KeyboardEvent('keydown', {key: ' ', repeat: true, bubbles: true, cancelable: true});
          const went = b.dispatchEvent(ev), d = document.querySelector('dialog.slv');
          return {opens: window.__opens, repeatPrevented: !went, openAfterRepeat: !!d && d.open};
        });
        check(held.opens === 1 && held.repeatPrevented && !held.openAfterRepeat, `Enter held down on a slide link (7 key-down events) opens the slide once (${held.opens}); a repeated Space on it does nothing`, held);
        await page.evaluate(() => SLIDE_UI.close());
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
      // the links change no line: with them taken out again, each tab is exactly as tall
      const tall = await page.evaluate(async () => {
        const out = {};
        for (const v of ['ref', 'tell', 'guide', 'atlas', 'drugs', 'diagrams']) {
          show(v); await new Promise(r => setTimeout(r, 700));
          const el = document.getElementById('v-' + v), h1 = el.getBoundingClientRect().height, n = el.querySelectorAll('.slk').length;
          el.querySelectorAll('.slk').forEach(b => { const p = b.parentNode; p.replaceChild(document.createTextNode(b.textContent), b); p.normalize(); });
          const h0 = el.getBoundingClientRect().height;
          SLIDE_UI.relink();
          out[v] = {n, back: el.querySelectorAll('.slk').length, d: Math.abs(h1 - h0)};
        }
        return out;
      });
      check(Object.values(tall).every(x => x.n > 0 && x.back === x.n && x.d < 0.5), 'with the links taken out, every reading tab is exactly as tall (no line re-wraps), and they come back', tall);

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

      /* ---- a slide with a note; a browser without <dialog> ---- */
      await page.evaluate(() => { show('topics'); SLIDE_UI.open('pp', 38, 0, false, null); });
      const n38 = await loaded();
      check(!!n38 && n38.open && /PollEv questions/.test(n38.note) && n38.src === '../' + P.file('pp', 38), 'Skin Pathophysiology slide 38 opens with its note about the PollEv questions', n38 && n38.note);
      await page.evaluate(() => { SLIDE_UI.open('pp', 37, 0, false, null); }); await settle(200);
      check(!(await viewer()).note, 'the slide before it has no note');
      await page.evaluate(() => SLIDE_UI.close());
      await page.evaluate(() => { show('ref'); HTMLDialogElement.prototype.showModal = undefined; });
      await settle(800);
      const fbOk = await page.evaluate(async () => {
        try { const b = document.querySelector('#v-ref td .slk'); b.scrollIntoView({block: 'center'}); b.focus(); b.click(); await new Promise(r => setTimeout(r, 500));
          const all = document.querySelectorAll('dialog.slv'), d = all[all.length - 1], r = d.getBoundingClientRect(), cs = getComputedStyle(d);
          const shown = d.hasAttribute('open') && cs.display !== 'none' && cs.position === 'fixed' && r.width > 200 && r.left >= 0 && r.right <= innerWidth + 0.5 && !!d.querySelector('.slv-img').getAttribute('src');
          d.dispatchEvent(new KeyboardEvent('keydown', {key: 'Escape', bubbles: true})); await new Promise(r => setTimeout(r, 200));
          return {shown, closed: !d.hasAttribute('open'), back: document.activeElement === b, n: all.length};
        } catch (e) { return {error: String(e)}; }
      });
      check(fbOk.shown && fbOk.closed && fbOk.back, 'in a browser without <dialog> the viewer still opens over the page, Escape closes it and focus goes back', fbOk);

      /* ---- quiet when nothing changes; nothing stored ---- */
      for (const v of ['guide', 'atlas', 'drugs', 'dz']) {
        await page.evaluate(v => show(v), v); await settle(1200);
        const idle = await page.evaluate(() => new Promise(r => { const a = SLIDE_UI.stats.runs; setTimeout(() => r(SLIDE_UI.stats.runs - a), 1200); }));
        check(idle === 0, `with ${v} open and nothing changing, the linkifier does not run`, idle + ' runs in 1.2 s');
      }
      const st = await page.evaluate(() => ({ms: Math.round(SLIDE_UI.stats.ms), runs: SLIDE_UI.stats.runs, links: SLIDE_UI.stats.links}));
      console.log(`  linkifier: ${st.runs} passes, ${st.links} buttons made, ${st.ms} ms in all`);
      const keys1 = await page.evaluate(() => Object.keys(localStorage).concat(Object.keys(sessionStorage)).sort());
      const added = keys1.filter(k => !keys0.includes(k));
      check(!keys1.some(k => /slide|slv|slk|deck:/i.test(k)) && !/localStorage|sessionStorage|indexedDB|document\.cookie|caches\./.test(fs.readFileSync(path.join(__dirname, 'slide_ui.js'), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '')),
        'slide_ui.js stores nothing (no storage call in the file; no key of its own)', added.join(', '));
      check(!errors.length, 'no page error', errors.slice(0, 4).join(' | '));
      await ctx.close();
    }

    /* ---- the page against slide_check.js's model, place by place, and the cases of the 2026-11-13 review ---- */
    console.log('\n=== The page against slide_check.js\'s model (1280 px) ===');
    {
      const tmp = path.join(os.tmpdir(), `slide-model-${process.pid}.json`);
      const run = child.spawnSync(process.execPath, [path.join(__dirname, 'slide_check.js'), '--model', tmp], {encoding: 'utf8', maxBuffer: 1 << 27});
      let model = null;
      try { model = JSON.parse(fs.readFileSync(tmp, 'utf8')); fs.unlinkSync(tmp); } catch (e) {}
      const {ctx, page, errors} = await L.openPage(browser, PREVIEW, {viewport: {width: 1280, height: 900}});
      page.on('console', m => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) errors.push('console: ' + m.text()); });
      const settle = ms => page.waitForTimeout(ms || 350);
      await settle(600);
      const same = (a, b) => JSON.stringify((a || []).slice().sort()) === JSON.stringify((b || []).slice().sort());
      const sum = m => Object.values(m).reduce((n, a) => n + a.length, 0);
      const diff = (rows, m) => rows.filter(x => !same(x.got, m[x.id])).slice(0, 4).map(x => `${x.id}: page [${x.got.join(', ')}] model [${(m[x.id] || []).join(', ')}]`).join(' | ');
      await page.evaluate(() => {
        // a link as slide_check.js writes it: "deck number[-to][ printed]"
        window.__sig = b => b.getAttribute('data-deck') + ' ' + b.getAttribute('data-n') + (b.getAttribute('data-to') ? '-' + b.getAttribute('data-to') : '') + (b.hasAttribute('data-printed') ? ' printed' : '');
        window.__sigs = sel => [...document.querySelectorAll(sel)].map(window.__sig);
        // a question on screen, answered right (the state the core's own answer handlers leave), and linked
        window.__answered = id => {
          const q = QUESTIONS.find(x => x.id === id), kind = q.type || 'mc';
          const st = {pool: [q], label: 'test', sweep: [q.id], i: 1, current: q, answered: 0, lastId: null, examMode: false, revealed: true, guessedLogged: true, lastRight: true};
          if (kind === 'mc') { st.order = q.options.map((o, k) => k); st.picked = isMulti(q) ? correctSet(q) : q.options.findIndex(o => o.correct); }
          else if (kind === 'match') { st.picked = q.pairs.map((x, k) => k); st.rights = q.pairs.map((x, k) => k); }
          else if (kind === 'blank') st.picked = (q.accept || [''])[0];
          else st.picked = String(q.answer);
          if (VIEW !== 'quiz') show('quiz');
          Q = st; renderQuiz(); SLIDE_UI.relink();
        };
        // every place where a "slide N:" stands outside a link in the answered card
        window.__colonLeft = () => { const out = [], w = document.createTreeWalker(document.querySelector('#v-quiz .qbody'), 4); let n;
          while ((n = w.nextNode())) if (!n.parentElement.closest('.slk, button, select') && /\b(?:[Ss]lides?|PCol|PP|DPAW)\s\d+(?:\s?[–-]\s?\d+)?(?:,\s?\d+)*:(?!\d)/.test(n.data)) out.push(n.data.slice(0, 60));
          return out; };
      });
      if (check(!!model && !!model.pair && !!model.gbar && !!model.dzstep && !!model.strip, 'slide_check.js --model writes what it expects the page to link, place by place', (run.stderr || run.stdout || '').slice(-300))) {
        /* matching questions: the line under each pair */
        const pairIds = Object.keys(model.pair);
        await L.quizOn(page, pairIds[0]); await settle(300);
        const pre = await page.evaluate(() => ({rows: document.querySelectorAll('#v-quiz .matchtab tr').length, slk: document.querySelectorAll('#v-quiz .slk').length}));
        const pairs = await page.evaluate(ids => ids.map(id => { __answered(id); return {id, lines: document.querySelectorAll('#v-quiz .matchtab .stepwhy').length, got: __sigs('#v-quiz .matchtab .stepwhy .slk'), left: __colonLeft().length}; }), pairIds);
        check(pre.rows > 1 && !pre.slk && pairs.length >= 12 && pairs.every(x => x.lines > 0 && x.got.length > 0 && same(x.got, model.pair[x.id]) && !x.left),
          `matching questions (${pairs.length}): no link before the answer; after it the lines under the pairs hold the ${sum(model.pair)} links the model expects`, diff(pairs, model.pair) || pairs.filter(x => x.left).map(x => x.id + ' left').join(', '));

        /* the structure strip of an answered question, in the quiz and on the exam review page */
        const stripIds = Object.keys(model.strip);
        const strips = await page.evaluate(ids => ids.map(id => { __answered(id); const bs = [...document.querySelectorAll('#v-quiz .cmpcell figcaption .slk')]; return {id, prof: QUESTIONS.find(q => q.id === id).prof, cells: document.querySelectorAll('#v-quiz .cmpcell').length, got: bs.map(__sig)}; }), stripIds);
        const stripN = strips.reduce((n, x) => n + x.got.length, 0), other = strips.filter(x => x.prof !== 'Sikazwe');
        check(strips.length > 20 && strips.every(x => x.cells > 1 && same(x.got, model.strip[x.id])) && stripN === sum(model.strip),
          `structure strips (${strips.length} questions): the notes under the structures hold the ${sum(model.strip)} links the model expects`, diff(strips, model.strip));
        check(other.length >= 5 && strips.every(x => x.got.every(g => /^mc /.test(g))) && other.reduce((n, x) => n + x.got.length, 0) >= 20,
          `every strip link opens Dr. Sikazwe's deck, also in the ${other.length} questions of another professor (${other.map(x => x.id).join(', ')})`, strips.filter(x => x.got.some(g => !/^mc /.test(g))).map(x => x.id + ': ' + x.got.join(', ')).join(' | '));
        const l3c = strips.find(x => x.id === 'L3C-062'), l3cPages = l3c ? l3c.got.map(g => +g.split(' ')[1]).sort((a, b) => a - b).map(n => { const r = P.resolve('mc', n); return n + '>' + r.page + ' ' + D.mc.titles[r.page - 1]; }) : [];
        check(!!l3c && l3c.got.length === 5 && l3cPages.every(t => /^(61>60 Sunblocks|62>61 Sunscreens-1|63>62 Sunscreens-2|65>64 Sunscreens-4)/.test(t)),
          'L3C-062 (Dr. Smith, Sun): the notes under zinc oxide, titanium dioxide, avobenzone, PABA and oxybenzone open DPAW pages 61, 61, 62, 63, 65 (Sunblocks, Sunscreens-1, -2, -4)', l3cPages.join(' | '));
        await page.evaluate(() => { __answered('L2-017'); const c = [...document.querySelectorAll('#v-quiz .cmpcell')].filter(c => /Adapalene/.test(c.textContent))[0], b = c && c.querySelector('figcaption .slk'); if (b) { b.scrollIntoView({block: 'center'}); b.click(); } });
        let v = null;
        for (let t = 0; t < 60; t++) { v = await page.evaluate(() => { const d = document.querySelector('dialog.slv'), i = d && d.querySelector('.slv-img'); return d && d.open ? {open: true, deck: d.querySelector('.slv-deck').textContent, src: i.getAttribute('src'), ok: i.complete && i.naturalWidth > 0} : null; }); if ((v && v.ok) || (!v && t > 5)) break; await settle(100); }
        check(!!v && v.open && v.ok && v.src === '../' + P.file('mc', 50) && v.deck === D.mc.label, 'L2-017 (Dr. Smith): "slide 51" under Adapalene opens Dr. Sikazwe\'s page 51 (clean page 50, Retinoids-3), not her Skin Pharmacology slide 51', v);
        await page.evaluate(() => SLIDE_UI.close());
        const review = await page.evaluate(async ids => {
          const qs = ids.map(id => QUESTIONS.find(q => q.id === id)).filter(Boolean);
          show('exam');
          EX = {qs, i: 0, picks: qs.map(q => isMulti(q) ? [] : null), running: true, done: false, ends: Date.now() + 60 * 60000, orders: qs.map(q => shuffle(q.options.map((o, k) => k)))};
          renderExamQ(); await new Promise(r => setTimeout(r, 200));
          finishExam(true); await new Promise(r => setTimeout(r, 900));
          const out = {cards: document.querySelectorAll('#v-exam .qcard').length, got: __sigs('#v-exam .cmpcell figcaption .slk')};
          EX = null; show('topics');
          return out;
        }, ['L2-017', 'P7-052', 'L3C-062', 'S4-081']);
        const want = ['L2-017', 'P7-052', 'L3C-062', 'S4-081'].reduce((a, id) => a.concat(model.strip[id] || []), []);
        check(review.cards === 4 && review.got.length > 10 && same(review.got, want) && review.got.every(g => /^mc /.test(g)), `the exam review page ("Every question, with the reasoning") draws the same strips with the same ${want.length} links to Dr. Sikazwe's deck`, review.got.join(', '));

        /* a citation that ends at a colon */
        const colon = await page.evaluate(() => ['L1-045', 'L2-115', 'P6H-002', 'P7-063', 'L3C-044'].map(id => { __answered(id);
          return {id, left: __colonLeft(), slk: [...document.querySelectorAll('#v-quiz .why .wrow .slk, #v-quiz .why .teach .slk')].map(b => b.textContent + '>' + __sig(b))}; }));
        const cOf = id => (colon.find(x => x.id === id) || {slk: [], left: ['?']});
        check(cOf('L1-045').slk.filter(t => t === 'Slide 34>pp 34').length === 5 && !cOf('L1-045').left.length, 'L1-045: the five explanations that open "Slide 34: …" are links to Skin Pathophysiology slide 34', cOf('L1-045'));
        check(cOf('L2-115').slk.includes('Slides 32–33>pc 32-33') && cOf('P6H-002').slk.includes('Slides 20>p6 20') && cOf('P6H-002').slk.includes('40>p6 40') && cOf('P7-063').slk.includes('42–43>p7 42-43') &&
          !cOf('L2-115').left.length && !cOf('P6H-002').left.length && !cOf('P7-063').left.length,
          'a range or a list before a colon is linked whole ("Slides 32–33: …" as one link to 32–33; "Slides 20, 40: …" as two links)', colon.filter(x => x.id !== 'L1-045').map(x => x.id + ': ' + x.left.join(' / ')).join(' | '));

        /* the assigned-pages note of the 23 questions outside Dr. Sikazwe's list; the chart page of S3-061 */
        const notes = await page.evaluate(() => QUESTIONS.filter(q => /list of 11\/06: /.test(q.note || '')).map(q => { __answered(q.id);
          const p = [...document.querySelectorAll('#v-quiz .why p.prose')].filter(x => /assigned pages for Exam 1 \(list of 11\/06/.test(x.textContent))[0];
          return {id: q.id, got: p ? [...p.querySelectorAll('.slk')].filter(b => !/^Slide 14$/.test(b.textContent)).map(b => b.textContent + '>' + __sig(b)) : null}; }));
        const NOTE_LINKS = ['slides 7–9>mc 7-9 printed', '12>mc 12 printed', '15–22>mc 15-22 printed', '24–33>mc 24-33 printed', '42–54>mc 42-54 printed', '60–65>mc 60-65 printed', 'slide 22>mc 22 printed'];
        const noteBad = notes.filter(x => JSON.stringify(x.got) !== JSON.stringify(NOTE_LINKS));
        const notePages = [7, 12, 15, 24, 42, 60, 22].map(n => P.resolve('mc', n, true).page);
        check(notes.length === 23 && !noteBad.length && notePages.join() === '7,12,15,24,42,60,22',
          'the assigned-pages note (23 questions): each of its six list links carries the printed flag and opens clean page 7, 12, 15, 24, 42, 60; "printed slide 22" opens clean page 22', noteBad.slice(0, 3).map(x => x.id + ': ' + JSON.stringify(x.got)).join(' | '));
        await page.evaluate(() => { __answered('S4-112'); const b = [...document.querySelectorAll('#v-quiz .why p.prose .slk')].filter(x => x.textContent === '24–33')[0]; if (b) { b.scrollIntoView({block: 'center'}); b.click(); } });
        for (let t = 0; t < 60; t++) { v = await page.evaluate(() => { const d = document.querySelector('dialog.slv'), i = d && d.querySelector('.slv-img'); return d && d.open ? {open: true, src: i.getAttribute('src'), pos: d.querySelector('.slv-pos').textContent, ok: i.complete && i.naturalWidth > 0} : {open: false, pos: ''}; }); if (v.ok || (!v.open && t > 5)) break; await settle(100); }
        check(v.open && v.ok && v.src === '../' + P.file('mc', 24), 'S4-112: "24–33" in the note opens the slide that prints 24 (clean page 24), the first slide of that range of his list', v);
        await page.evaluate(() => SLIDE_UI.close());
        const chart = await page.evaluate(() => { __answered('S3-061'); const p = [...document.querySelectorAll('#v-quiz .why p.prose')].filter(x => /drug chart lists a different class/.test(x.textContent))[0];
          return p ? {text: /on its p\.5 because/.test(p.textContent), links: [...p.querySelectorAll('.slk')].map(b => b.textContent)} : null; });
        check(!!chart && chart.text && !chart.links.some(t => /^p\.?\s?5$/.test(t)), 'S3-061: "p.5" of the drug chart in the note stays text', chart);

        /* the guides' objective bars */
        await page.evaluate(() => show('guide')); await settle(1300);
        const bars = await page.evaluate(() => [...document.querySelectorAll('#v-guide .gbar')].map(g => { const sec = g.closest('section.gobj'), i = g.querySelector('i');
          return {id: sec ? sec.id : '', list: i ? i.textContent : '', inList: i ? [...i.querySelectorAll('.slk')].map(__sig) : [], got: [...g.querySelectorAll('.slk')].map(__sig)}; }));
        check(bars.length === 69 && Object.keys(model.gbar).length === 69 && bars.every(x => same(x.got, model.gbar[x.id])), `guide objective bars (${bars.length}): each holds the links the model expects (${sum(model.gbar)} in all)`, diff(bars, model.gbar));
        // the slide list on the right of a bar, read here on its own: "PCol 8–76; Sun 3; PP 17, 28, 37" (a part that is not a deck's list has no link)
        const ABB = {PP: 'pp', PCol: 'pc', Sun: 'sun', DPAW: 'mc', DT: 'p5', AT: 'p6', SD: 'p7', OE: 'p8o', SE: 'p8s', WC: 'p8w', WCC: 'p8c'};
        const listOf = t => t.split(';').reduce((out, part) => { const m = /^(PP|PCol|Sun|DPAW|DT|AT|SD|OE|SE|WCC|WC)(?: slides?)? (\d[\d, –-]*)$/.exec(part.trim());
          return m ? out.concat(m[2].split(',').map(x => { const r = /^(\d+)(?:[–-](\d+))?$/.exec(x.trim()); return ABB[m[1]] + ' ' + r[1] + (r[2] ? '-' + r[2] : ''); })) : out; }, []);
        const barBad = bars.filter(x => !x.inList.length || !same(x.inList, listOf(x.list)));
        check(!barBad.length, 'every one of the 69 bars has its whole slide list linked, each number to the deck its abbreviation names', barBad.slice(0, 4).map(x => `${x.id}: "${x.list}" has [${x.inList.join(', ')}]`).join(' | '));

        /* Diseases: the steps of every card (the cards with more than one professor among them), the three other views, the drug panels */
        await page.evaluate(() => show('dz')); await settle(500);
        const cardIds = Object.keys(model.dzProfs), multi = cardIds.filter(id => model.dzProfs[id] > 1);
        const cards = [];
        for (const id of cardIds) {
          await page.evaluate(id => { const c = DZ.cards.find(x => x.id === id); DZ_UI.state.view = 'cards'; DZ_UI.state.card = id; DZ_UI.state.filter = ''; c.steps.forEach((s, i) => { DZ_UI.state.open[id + ':' + i] = true; }); DZ_UI.render(); SLIDE_UI.relink(); }, id);
          cards.push({id, got: await page.evaluate(() => __sigs('#v-dz ol.dzsteps .slk')), grp: await page.evaluate(() => document.querySelectorAll('#v-dz ol.dzsteps .dzgrp').length)});
        }
        const multiCards = cards.filter(x => multi.includes(x.id));
        check(multi.length >= 2 && multiCards.every(x => x.grp > 0 && same(x.got, model.dzstep[x.id])), `Diseases cards with more than one professor (${multi.length}: ${multi.join(', ')}): the steps hold the links the model expects (${multiCards.reduce((n, x) => n + x.got.length, 0)})`, diff(multiCards, model.dzstep));
        check(cards.length === 23 && cards.every(x => same(x.got, model.dzstep[x.id])), `Diseases, all ${cards.length} cards: the steps hold the links the model expects (${sum(model.dzstep)})`, diff(cards, model.dzstep));
        const sunp = await page.evaluate(() => { const c = DZ.cards.find(x => x.id === 'sun-protection'); DZ_UI.state.card = c.id; c.steps.forEach((s, i) => { DZ_UI.state.open[c.id + ':' + i] = true; }); DZ_UI.render(); SLIDE_UI.relink();
          const inGrp = k => [...document.querySelectorAll('#v-dz ol.dzsteps .dzgrp.' + k + ' .slk')].map(b => b.textContent + '>' + __sig(b));
          return {sm: inGrp('sm'), pa: inGrp('pa'), sk: inGrp('sk')}; });
        check(sunp.sm.includes('Sun slide 8>sun 8') && sunp.sm.length >= 9 && sunp.sm.every(t => /> ?(sun|pc) /.test(t)) && sunp.pa.every(t => />p8s /.test(t)) && sunp.pa.some(t => /^slides? \d+>p8s /.test(t)) && sunp.sk.every(t => />mc /.test(t)),
          'Sun protection card: in Dr. Smith\'s groups "Sun slide N" opens her Sun deck, in Dr. Patel\'s groups a bare "slide N" opens hers, in Dr. Sikazwe\'s his', sunp);
        const views = {};
        for (const k of ['tell', 'pairs', 'rules']) views[k] = await page.evaluate(k => { DZ_UI.state.view = k; DZ_UI.render(); SLIDE_UI.relink(); return __sigs('#v-dz .dzbody .slk'); }, k);
        check(['tell', 'pairs', 'rules'].every(k => same(views[k], model.dzview[k])), `Diseases, Tell apart, Drugs that get confused and Rules that repeat: the links the model expects (${views.tell.length}, ${views.pairs.length}, ${views.rules.length})`,
          ['tell', 'pairs', 'rules'].filter(k => !same(views[k], model.dzview[k])).map(k => `${k}: page ${views[k].length}, model ${model.dzview[k].length}`).join('; '));
        await page.evaluate(() => { DZ_UI.state.view = 'cards'; DZ_UI.render(); });
        const avoid = [];
        for (const k of Object.keys(model.dzavoid)) {
          await page.evaluate(k => { const b = document.createElement('button'); b.setAttribute('data-drug', k); b.style.display = 'none'; document.querySelector('#v-dz .dzbody').appendChild(b); b.click(); b.remove(); SLIDE_UI.relink(); }, k);
          avoid.push({id: k, got: await page.evaluate(() => __sigs('#v-dz .dzdlg .dzavoid .slk')), text: await page.evaluate(() => [...document.querySelectorAll('#v-dz .dzdlg .dzavoid li')].map(li => li.textContent + ' => ' + [...li.querySelectorAll('.slk')].map(b => b.textContent + '>' + __sig(b)).join(','))) });
        }
        await page.evaluate(() => { const d = document.querySelector('#v-dz .dzdlg'); if (d && d.open) d.close(); });
        const ster = (avoid.find(x => x.id === 'steroid') || {text: []}).text;
        check(avoid.length > 5 && avoid.every(x => same(x.got, model.dzavoid[x.id])), `drug panels, "Who should not get it" (${avoid.length} panels with such a list): the links the model expects (${sum(model.dzavoid)})`, diff(avoid, model.dzavoid));
        check(ster.some(t => /not for longer than 4 weeks in psoriasis \(slide 36\) => slide 36>p7 36$/.test(t)) && ster.some(t => /Infants with cradle cap: .*\(slide 18\) => $/.test(t)),
          'topical corticosteroids panel: a line labelled with its conditions ("Psoriasis / Seborrheic dermatitis: … (slide 36)") opens the deck the panel\'s rows for them name; a line with no such label ("Infants with cradle cap: … (slide 18)") stays text', ster);
      }

      /* ---- headings read as they are written ---- */
      await page.evaluate(() => show('ref')); await settle(1000);
      const heads = await page.evaluate(() => [...document.querySelectorAll('#v-ref h3, #v-tell h3, #v-guide h3, #v-guide h5')].filter(h => h.querySelector('.slk')).length);
      const h3 = page.locator('#v-ref h3:has(.slk):visible').first();          // a heading of the open exam folder
      const snap = await h3.ariaSnapshot(), h3text = (await h3.textContent()).replace(/\s+/g, ' ').trim();
      check(heads > 20 && snap.indexOf(h3text) >= 0 && !/open dr\./i.test(snap) && /- button "(?:[Ss]lides? )?\d+(?:[–-]\d+)?"/.test(snap), `a heading that holds slide links is named by its own text (${heads} such headings in the reading tabs); each link in it is a button named by its text`, snap.slice(0, 400));

      /* ---- the practice-exam clock starts no pass ---- */
      const tick = await page.evaluate(async () => {
        for (const v of ['ref', 'tell', 'guide', 'atlas', 'drugs', 'diagrams', 'dz', 'gaps', 'settings', 'topics']) { show(v); await new Promise(r => setTimeout(r, 250)); }
        show('exam'); beginExam(); await new Promise(r => setTimeout(r, 1200));
        const c = document.getElementById('exClock'), t0 = c ? c.textContent : '', a = SLIDE_UI.stats.runs;
        await new Promise(r => setTimeout(r, 6000));
        const out = {runs: SLIDE_UI.stats.runs - a, clock: !!c, moved: !!c && c.textContent !== t0, drawn: document.querySelectorAll('main > section').length, inSkip: !!c && !!c.closest('.clock')};
        show('ref'); await new Promise(r => setTimeout(r, 400)); const b = SLIDE_UI.stats.runs;
        await new Promise(r => setTimeout(r, 3000));
        out.away = SLIDE_UI.stats.runs - b;
        EX = null; show('topics');
        return out;
      });
      check(tick.clock && tick.moved && tick.runs === 0 && tick.away === 0, `with every tab drawn and a practice paper running, the clock ticks and the linkifier does not run (${tick.runs} passes in 6 s on the paper, ${tick.away} in 3 s on another tab)`, tick);

      /* ---- a citation next to a highlighted word, after "Explain more" ---- */
      const hl = await page.evaluate(async () => {
        const count = () => [...document.querySelectorAll('#v-ref .slk')].length;
        show('ref'); await new Promise(r => setTimeout(r, 900)); const plain = count();
        RET.length = 0; show('topics');
        const c = document.createElement('div'); c.className = 'tlcard'; c.dataset.tlq = 'P8C-008'; c.innerHTML = '<button type="button" data-jump="ref:ref-p8-wcc">x</button>'; document.body.appendChild(c); c.querySelector('button').click(); c.remove();
        await new Promise(r => setTimeout(r, 700));
        const marks = [...document.querySelectorAll('#v-ref mark.jmark')];
        const wart = marks.filter(m => m.textContent === 'Warts' && m.nextSibling && /^\s*\($/.test(m.nextSibling.textContent || ''))[0];
        const next = wart && wart.nextSibling && wart.nextSibling.nextSibling;
        const out = {plain, during: count(), marks: marks.length, after: wart ? {tag: next && next.className, text: next && next.textContent, deck: next && next.getAttribute && next.getAttribute('data-deck'), n: next && next.getAttribute && next.getAttribute('data-n')} : null};
        if (window.JUMP_UI && JUMP_UI.clear) JUMP_UI.clear();
        await new Promise(r => setTimeout(r, 400));
        out.cleared = count(); out.marksLeft = document.querySelectorAll('#v-ref mark.jmark').length;
        return out;
      });
      check(hl.marks > 0 && !!hl.after && hl.after.tag === 'slk' && hl.after.text === 'slide 4' && hl.after.deck === 'p8c' && hl.after.n === '4' && hl.during === hl.plain && hl.cleared === hl.plain && !hl.marksLeft,
        `after "Explain more" from P8C-008, "Warts (slide 4)" with Warts highlighted has its link (slide 4, Dr. Patel's Warts deck); Reference has ${hl.plain} links with the highlight on and after it is cleared`, hl);

      /* ---- Weak spots: the missed list's source line and the review plan take the question's own deck ---- */
      const gaps = await page.evaluate(async () => {
        const keep = DB.answers.slice();
        const mc = q => !q.type && !q.multi && q.options && q.options.length > 1;
        // a question whose wrong option cites a bare "slide N" in its explanation, and one whose source line says "Sun N–M"
        const q1 = QUESTIONS.find(q => mc(q) && /Patel_Acne/.test(q.cite) && q.options.some(o => !o.correct && /\(slide \d+\)/.test(o.why || '')) && QUESTIONS.filter(x => x.stem === q.stem).length === 1 && q.stem.length <= 160);
        const q2 = QUESTIONS.find(q => q.id === 'L3C-067');
        const wrong = q1.options.findIndex(o => !o.correct && /\(slide \d+\)/.test(o.why || ''));
        DB.answers.push({qid: q1.id, result: 'wrong', picked: wrong, t: Date.now(), at: Date.now(), concept: q1.concept});
        DB.answers.push({qid: q2.id, result: 'wrong', picked: q2.pairs.map((x, k) => (k + 1) % q2.pairs.length), t: Date.now(), at: Date.now(), concept: q2.concept});
        show('gaps'); renderGaps(); SLIDE_UI.relink();
        const miss = [...document.querySelectorAll('#v-gaps .missq')].map(m => { const ms = m.querySelectorAll('.mmeta'), c = ms[ms.length - 1]; return {cite: c.textContent, links: [...c.querySelectorAll('.slk')].map(b => b.textContent + '>' + __sig(b)), other: [...m.querySelectorAll('.mmeta')].slice(0, -1).reduce((n, e) => n + e.querySelectorAll('.slk').length, 0)}; });
        const pc = [...document.querySelectorAll('#v-gaps .plan .pconcept')].filter(p => (p.querySelector('.pq') || {}).textContent === q1.stem)[0];
        const plan = pc ? {why: [...pc.querySelectorAll('.pw .meta .slk')].map(b => b.textContent + '>' + __sig(b)), whyText: (pc.querySelector('.pw .meta') || {}).textContent || '', idea: [...pc.querySelectorAll('.pi .slk')].map(__sig), chose: [...pc.querySelectorAll('.pw > b ~ .slk')].length} : null;
        DB.answers.length = 0; keep.forEach(a => DB.answers.push(a)); renderGaps(); show('topics');
        return {q1: q1.id, miss, plan};
      });
      const sunLine = gaps.miss.filter(m => /Sun 20–24/.test(m.cite))[0];
      check(!!sunLine && sunLine.links.includes('Sun 20–24>sun 20-24') && gaps.miss.every(m => m.links.length > 0),
        'the missed list: the source line of L3C-067 has "Sun 20–24" linked to Dr. Smith\'s Sun deck, as after the answer; every entry\'s source line has its links', gaps.miss.map(m => m.cite.slice(0, 60) + ' => ' + m.links.join(',')).join(' | '));
      check(!!gaps.plan && gaps.plan.why.length > 0 && gaps.plan.why.every(t => />p6 \d/.test(t)), `Weak spots, "What to review next" (${gaps.q1}): the bare "slide N" in "Why it is not the answer" opens the question's own deck (Dr. Patel, Acne)`, gaps.plan);
      check(!errors.length, 'no page error in these checks', errors.slice(0, 4).join(' | '));
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
