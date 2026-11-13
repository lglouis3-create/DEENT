/* ==========================================================================
   NARRATION PLAYER IN A BROWSER, PHAR 4346 DEENT (walk_ui.js, why_ui.js)
   --------------------------------------------------------------------------
   Opens the built page (the repository root's index.html, and preview/ when
   it is there) over HTTP at 390 px and 1280 px, with a stand-in for the
   device voice (speechSynthesis) that says each sentence in a few
   milliseconds, and checks:
   - one bar per walkthrough under its guide section; every walkthrough opens;
     every part's slide image loads (or its drawn step shows) as the parts are
     stepped through, and the slide follows the part;
   - playing advances part by part and the slide changes with it; pause holds
     the part, play resumes it; K and the arrow keys work inside the player;
   - "continue" opens and plays the next walkthrough; the resume position
     survives a reload and is the only thing stored, under <NS>:narration;
   - a recorded clip plays when its hash matches and the device voice reads
     when it does not;
   - "Hear the why" shows only after the question is answered, and on a
     finished paper's review; it stops a playing walkthrough;
   - no horizontal scroll, no script or console error;
   - the preview page loads the slides from one folder up;
   and, from the review of 2026-11-13 (course files this test owns the check for):
   - A-F5: each "Jump to a section" entry of Guides, Tell apart and Reference
     reads as its heading does (the Guides entries showed "&middot;");
   - B-F10: a glossary entry marked cs:true (RARE) is glossed only where the
     explanation has it in capitals, over the whole bank and in a drawn answer;
     every other gloss is as the core alone gives it (glossary.js, gloss_ui.js);
   - A-F1: every Topics "Listen" button (each one, where a walkthrough is
     listed under two or three topic cards), 3.5 s after a tap at 390x844 and a
     click at 1376x1032 with the page left alone, has the walkthrough's bar and
     Play button inside the window; "Read guide" and "Explain more" still end
     with the section heading at the top (walk_ui.js go(), jump_ui.js).

     node walk_test.js        (after build.py; preview/ after build.py --preview)
   ========================================================================== */
const fs = require('fs'), path = require('path'), crypto = require('crypto');
const L = require('./check_lib');
const NAME = 'walk_test.js';
const ROOT = path.join(__dirname, '..');
const sha12 = t => crypto.createHash('sha256').update(String(t), 'utf8').digest('hex').slice(0, 12);

if (!fs.existsSync(path.join(ROOT, 'index.html'))) L.notRun(NAME, 'no built index.html at the repository root (run build.py first)');
const page0 = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
if (!/const WALK_UI = /.test(page0)) L.notRun(NAME, 'the built page has no walk_ui.js (rebuild after adding it to course.js `files`)');

/* a short silent WAV, served for any audio/*.mp3 the test asks for */
const silence = n => {   // n samples at 8,000 a second
  const b = Buffer.alloc(44 + n * 2);
  b.write('RIFF', 0); b.writeUInt32LE(36 + n * 2, 4); b.write('WAVE', 8); b.write('fmt ', 12); b.writeUInt32LE(16, 16);
  b.writeUInt16LE(1, 20); b.writeUInt16LE(1, 22); b.writeUInt32LE(8000, 24); b.writeUInt32LE(16000, 28); b.writeUInt16LE(2, 32);
  b.writeUInt16LE(16, 34); b.write('data', 36); b.writeUInt32LE(n * 2, 40); return b;
};
const wav = silence(2400);         // 0.3 s
const wavLong = silence(160000);   // 20 s: the first part of a walkthrough is still playing while a landing is measured

/* the device voice, standing in: each utterance starts, then ends after a few ms */
function fakeVoice() {
  const q = []; let busy = false, timer = null;
  const S = {
    get speaking() { return busy; }, get pending() { return q.length > 0; }, paused: false,
    getVoices: () => [], addEventListener() {}, removeEventListener() {},
    speak(u) { q.push(u); window.__said = (window.__said || 0) + 1; if (!busy) next(); },
    cancel() { clearTimeout(timer); const all = q.splice(0); busy = false; all.forEach(u => u.onerror && u.onerror({error: 'canceled'})); },
    pause() {}, resume() {},
  };
  function next() {
    const u = q.shift(); if (!u) { busy = false; return; }
    busy = true; if (u.onstart) u.onstart({});
    timer = setTimeout(() => { busy = false; if (u.onend) u.onend({}); next(); }, window.__sayMs || 15);
  }
  Object.defineProperty(window, 'speechSynthesis', {value: S, configurable: true});
}

(async () => {
  const site = await L.serve(ROOT);
  const {browser} = await L.launch(NAME, {args: ['--autoplay-policy=no-user-gesture-required']});
  try {
    for (const width of [390, 1280]) {
      console.log(`\n=== ${width} px ===`);
      const ctx = await browser.newContext({viewport: {width, height: width < 500 ? 844 : 900}, serviceWorkers: 'block'});
      await ctx.addInitScript(fakeVoice);
      await ctx.addInitScript(() => { window.prompt = () => 'TestUser'; });
      const page = await ctx.newPage();
      const errors = [];
      page.on('pageerror', e => errors.push('pageerror: ' + e.message));
      page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
      page.on('dialog', d => d.accept());
      const audioHits = [];
      await page.route('**/audio/*.mp3', r => { audioHits.push(r.request().url()); r.fulfill({status: 200, contentType: 'audio/wav', body: wav}); });
      await page.goto(site.url + 'index.html');
      await page.waitForFunction(() => typeof NS === 'string' && document.querySelectorAll('#nav button').length > 3, null, {timeout: 20000});
      const info = await page.evaluate(() => ({walk: !!(typeof WALK_UI !== 'undefined' && WALK_UI), n: WALK_UI ? WALK_UI.SECS.length : 0,
        why: typeof WHY_AUDIO !== 'undefined' ? Object.keys(WHY_AUDIO).length : 0}));
      if (!L.check(info.walk && info.n > 0, `the player is in the page with ${info.n} walkthroughs`)) break;
      const keys0 = await page.evaluate(() => Object.keys(localStorage).sort());

      await page.evaluate(() => show('guide'));
      const bars = await page.evaluate(() => WALK_UI.SECS.map(w => !!document.querySelector(`#v-guide section.gobj#${w.guide} .wkbar[data-wk="${w.id}"]`)));
      L.check(bars.every(Boolean), `every walkthrough has its bar under its guide section (${bars.filter(Boolean).length} of ${bars.length})`);

      // every walkthrough opens; step through every part: its slide loads, or its drawn step shows
      const visits = await page.evaluate(async () => {
        const out = {opened: 0, parts: 0, bad: [], follow: 0, wide: 0};
        const settle = () => new Promise(r => setTimeout(r, 0));
        const loaded = img => img.complete && img.naturalWidth > 0 ? Promise.resolve(true) :
          new Promise(r => { img.addEventListener('load', () => r(img.naturalWidth > 0), {once: true}); img.addEventListener('error', () => r(false), {once: true}); setTimeout(() => r(false), 8000); });
        for (const w of WALK_UI.SECS) {
          const b = document.querySelector(`[data-wkopen="${w.id}"]`); b.click(); await settle();
          WALK_UI.pause();
          const p = document.querySelector(`.wkpanel[data-wkp="${w.id}"]`);
          if (!p) { out.bad.push(w.id + ': no panel'); continue; }
          out.opened++;
          let last = null;
          for (let i = 0; i < w.parts.length; i++) {
            if (i) p.querySelector('[data-wkstep="1"]').click();
            await settle();
            out.parts++;
            const f = p.querySelector('.wkvis'), part = w.parts[i];
            if (+p.dataset.at !== i || !p.querySelector(`.wktx li[data-wki="${i}"].on`)) out.bad.push(`${w.id} part ${i + 1}: not shown`);
            if (part.fig && part.fig.id) {             // a drawn step is shown before the part's slide (walk_ui.js visFor)
              const n = f.querySelectorAll('figure.fig .st').length, on = f.querySelector('figure.fig .st.on');
              if (n ? (!on || +on.dataset.step !== part.fig.step) : !f.querySelector('figure.fig svg')) out.bad.push(`${w.id} part ${i + 1}: figure ${part.fig.id} step ${part.fig.step} not shown`);
              if (part.slide && !f.querySelector(`[data-wkslide="0"]`)) out.bad.push(`${w.id} part ${i + 1}: no button to its slide ${part.slide}`);
              last = 'fig';
            } else if (part.slide) {
              const img = f.querySelector('img');
              if (!img || !img.src.endsWith('slides/' + part.slide + '.jpg')) out.bad.push(`${w.id} part ${i + 1}: slide ${part.slide} not shown`);
              else if (!(await loaded(img))) out.bad.push(`${w.id} part ${i + 1}: ${part.slide} did not load`);
              if (last && last !== part.slide) out.follow++;
              last = part.slide;
            }
            if (document.documentElement.scrollWidth > innerWidth + 1) out.wide++;
          }
          WALK_UI.close(w.id);
        }
        return out;
      });
      L.check(visits.opened === info.n, `every walkthrough opens (${visits.opened} of ${info.n})`);
      L.check(!visits.bad.length, `every part (${visits.parts}) shows its own slide, loaded, or its drawn step`, visits.bad.slice(0, 5).join('; '));
      L.check(visits.follow > 0, `the slide changes with the part (${visits.follow} slide changes while stepping)`);
      L.check(!visits.wide, 'no horizontal scroll with a player open', `${visits.wide} parts wider than the screen`);

      // playing: parts advance on their own and the slide follows; pause holds; play resumes
      const multi = await page.evaluate(() => {
        const w = WALK_UI.SECS.find(w => w.parts.length >= 3 && w.parts[0].slide && w.parts[1].slide && w.parts[0].slide !== w.parts[1].slide) || WALK_UI.SECS.find(w => w.parts.length >= 3);
        return w && w.id;
      });
      await page.evaluate(() => { window.__sayMs = 40; });
      await page.evaluate(id => { const s = NARR.st(); s.cont = false; NARR.save(); document.querySelector(`[data-wkopen="${id}"]`).click(); }, multi);
      const adv = await page.waitForFunction(() => WALK_UI.state() && WALK_UI.state().i >= 1, null, {timeout: 15000}).then(() => true, () => false);
      L.check(adv, `playing moves on to the next part by itself (${multi})`);
      const slideNow = await page.evaluate(id => { const p = document.querySelector(`.wkpanel[data-wkp="${id}"]`); return {at: +p.dataset.at, k: p.querySelector('.wkvis').dataset.k}; }, multi);
      const want = await page.evaluate(([id, i]) => { const p = WALK_UI.BY[id].parts; for (let k = i; k >= 0; k--) { if (p[k].fig && p[k].fig.id) return 'fig:' + p[k].fig.id; if (p[k].slide) return 'slide:' + p[k].slide; } return ''; }, [multi, slideNow.at]);
      L.check(slideNow.k === want, `while playing, the visual is the current part's (${slideNow.k})`);
      await page.click(`.wkpanel[data-wkp="${multi}"] [data-wkplay]`);
      const held = await page.evaluate(() => WALK_UI.state());
      await page.waitForTimeout(600);
      const held2 = await page.evaluate(() => WALK_UI.state());
      L.check(held && !held.playing && held2 && held2.i === held.i && !held2.playing, `pause holds the part (part ${held && held.i + 1})`);
      L.check(await page.evaluate(id => /Play/.test(document.querySelector(`.wkpanel[data-wkp="${id}"] [data-wkplay]`).textContent), multi), 'the button says Play while paused');
      await page.click(`.wkpanel[data-wkp="${multi}"] [data-wkplay]`);
      const resumed = await page.waitForFunction(i => WALK_UI.state() === null || WALK_UI.state().i > i, held2.i, {timeout: 15000}).then(() => true, () => false);
      L.check(resumed, 'play resumes and moves on from the paused part');

      // keys inside the player
      await page.evaluate(id => WALK_UI.close(id), multi);
      await page.evaluate(id => { document.querySelector(`[data-wkopen="${id}"]`).click(); WALK_UI.pause(); }, multi);
      await page.focus(`.wkpanel[data-wkp="${multi}"] [data-wkplay]`);
      const k0 = await page.evaluate(() => WALK_UI.state().i);
      await page.keyboard.press('ArrowRight');
      const k1 = await page.evaluate(() => WALK_UI.state().i);
      await page.keyboard.press('k');
      const k2 = await page.evaluate(() => WALK_UI.state().playing);
      await page.keyboard.press('k');
      const k3 = await page.evaluate(() => WALK_UI.state() && WALK_UI.state().playing);
      L.check(k1 === k0 + 1 && k2 === true && k3 === false, 'the right arrow moves a part, K plays and K pauses', {k0, k1, k2, k3});
      await page.keyboard.press('ArrowLeft');
      L.check(await page.evaluate(i => WALK_UI.state().i === i, k0), 'the left arrow moves a part back');

      // continue into the next walkthrough
      const order = await page.evaluate(() => WALK_UI.order());
      const [a, b] = [order[0], order[1]];
      await page.evaluate(([a]) => { WALK_UI.stop(); document.querySelectorAll('.wkpanel').forEach(p => WALK_UI.close(p.dataset.wkp));
        const s = NARR.st(); s.cont = true; NARR.save(); WALK_UI.open(a, false); WALK_UI.play(a, WALK_UI.BY[a].parts.length - 1); }, [a]);
      const cont = await page.waitForFunction(b => WALK_UI.state() && WALK_UI.state().id === b && !!document.querySelector(`.wkpanel[data-wkp="${b}"]`), b, {timeout: 15000}).then(() => true, () => false);
      L.check(cont, `with "continue" ticked, the next walkthrough opens and plays (${a} -> ${b})`);
      await page.evaluate(() => { WALK_UI.stop(); const s = NARR.st(); s.cont = false; NARR.save(); });

      // the resume position, and the only key written
      await page.evaluate(id => { document.querySelectorAll('.wkpanel').forEach(p => WALK_UI.close(p.dataset.wkp)); WALK_UI.open(id, false); }, multi);
      await page.evaluate(id => { const p = document.querySelector(`.wkpanel[data-wkp="${id}"]`); p.querySelector('[data-wkstep="1"]').click(); p.querySelector('[data-wkstep="1"]').click(); }, multi);
      await page.reload();
      await page.waitForFunction(() => typeof WALK_UI !== 'undefined' && WALK_UI, null, {timeout: 20000});
      await page.evaluate(() => show('guide'));
      const label = await page.evaluate(id => document.querySelector(`[data-wkopen="${id}"]`).textContent, multi);
      L.check(/Resume walkthrough at part 3/.test(label), 'after a reload the bar offers to resume at the part left on', label);
      const keys1 = await page.evaluate(() => Object.keys(localStorage).sort());
      const added = keys1.filter(k => !keys0.includes(k));
      const nk = await page.evaluate(() => NS + ':narration');
      L.check(added.length === 1 && added[0] === nk, `the player stores one key, ${nk}`, added.join(', '));
      L.check(await page.evaluate(k => { try { const o = JSON.parse(localStorage.getItem(k)); return o && typeof o.pos === 'object' && 'rate' in o && 'cont' in o; } catch (e) { return false; } }, nk), 'it holds the positions, the speed and "continue"');

      // a recorded clip plays when its hash matches; the device voice reads when it does not
      const first = await page.evaluate(() => WALK_UI.SECS[0].id);
      const texts = await page.evaluate(id => WALK_UI.BY[id].parts.slice(0, 2).map(p => p.text), first);
      // the course's own recorded clips for this walkthrough are set aside for the check and put back after it
      audioHits.length = 0;
      await page.evaluate(([id, h1]) => {
        window.AUDIO_CLIPS = window.AUDIO_CLIPS || {};
        window.__clipsKept = {};
        for (const k of Object.keys(AUDIO_CLIPS)) if (k.startsWith('gw-' + id + '-')) { __clipsKept[k] = AUDIO_CLIPS[k]; delete AUDIO_CLIPS[k]; }
        AUDIO_CLIPS['gw-' + id + '-1'] = {h: h1, s: 1}; AUDIO_CLIPS['gw-' + id + '-2'] = {h: '000000000000', s: 1};
      }, [first, sha12(texts[0])]);
      await page.evaluate(id => { WALK_UI.open(id, false); WALK_UI.play(id, 0); }, first);
      const m1 = await page.evaluate(() => WALK_UI.state() && WALK_UI.state().mode);
      L.check(m1 === 'clip', 'a part whose clip hash matches its text plays the recorded clip', m1);
      const reached = await page.waitForFunction(() => WALK_UI.state() && WALK_UI.state().i === 1, null, {timeout: 15000}).then(() => true, () => false);
      const m2 = await page.evaluate(() => WALK_UI.state() && WALK_UI.state().mode);
      L.check(reached && m2 === 'voice', 'the next part, whose clip was recorded from other words, is read by the device voice', m2);
      L.check(audioHits.some(u => u.endsWith('audio/gw-' + first + '-1.mp3')) && !audioHits.some(u => u.endsWith('-2.mp3')), 'only the matching clip was fetched', audioHits.join(', '));
      await page.evaluate(() => { WALK_UI.stop(); delete AUDIO_CLIPS['gw-' + WALK_UI.SECS[0].id + '-1']; delete AUDIO_CLIPS['gw-' + WALK_UI.SECS[0].id + '-2']; Object.assign(AUDIO_CLIPS, window.__clipsKept || {}); });

      // "Hear the why": only after answering, then in a finished paper's review
      if (!info.why) L.skip('"Hear the why"', 'why_data.js has no spoken whys yet');
      else {
        // a question whose why has no recorded clip (audio_manifest.js), so the device voice reads it
        // (when every why is recorded, set one clip aside for this part of the test and restore it after)
        const qid = await page.evaluate(() => {
          const ok = q => WHY_UI.has(q.id) && !q.type && q.options && !(q.options.filter(o => o.correct).length > 1);
          let q = QUESTIONS.find(q => ok(q) && !AUDIO_CLIPS['q-' + q.id]);
          if (!q) { q = QUESTIONS.find(ok); window.__whyKept = {['q-' + q.id]: AUDIO_CLIPS['q-' + q.id]}; delete AUDIO_CLIPS['q-' + q.id]; }
          return q && q.id; });
        await page.evaluate(id => { WALK_UI.open(WALK_UI.SECS[0].id, false); WALK_UI.play(WALK_UI.SECS[0].id, 0); drillList([QUESTIONS.find(q => q.id === id)], 'why test'); }, qid);
        await page.waitForSelector('#v-quiz .opt');
        L.check(await page.evaluate(() => !document.querySelector('.wyrow') && !/Hear the why/.test(document.getElementById('v-quiz').textContent)), `before answering ${qid}, no "Hear the why"`);
        await page.click('#v-quiz .opt');
        L.check(await page.evaluate(() => !!document.querySelector('#v-quiz .why .wyrow [data-wyplay]')), 'after answering, "Hear the why" is under the explanation');
        await page.click('#v-quiz [data-wyplay]');
        const st = await page.evaluate(() => ({why: WHY_UI.state(), walk: WALK_UI.state(), box: !document.querySelector('#v-quiz .wybox').hidden}));
        L.check(st.why && st.why.id === qid && st.why.mode === 'voice' && st.box, 'it plays (device voice, nothing recorded) and shows the spoken text');
        L.check(!st.walk, 'it stops the walkthrough that was playing');
        const done = await page.waitForFunction(() => !WHY_UI.state(), null, {timeout: 20000}).then(() => true, () => false);
        L.check(done, 'it ends by itself when the voice finishes (no fixed timer)');
        // a finished paper's review
        const rev = await page.evaluate(id => {
          const q = QUESTIONS.find(q => q.id === id);
          EX = {qs: [q], i: 0, picks: [0], orders: [q.options.map((o, i) => i)], running: false, done: true};
          show('exam'); renderExamResult();
          return !!document.querySelector('#v-exam .qcard .wyrow [data-wyplay]');
        }, qid);
        L.check(rev, 'a finished paper\'s review has "Hear the why" on the question');
        await page.evaluate(() => { EX = null; Object.assign(AUDIO_CLIPS, window.__whyKept || {}); });
        // a why with a recorded clip whose hash matches plays the clip
        const rq = await page.evaluate(() => { const q = QUESTIONS.find(q => WHY_UI.has(q.id) && AUDIO_CLIPS['q-' + q.id] && !q.type && q.options && !(q.options.filter(o => o.correct).length > 1)); return q && q.id; });
        if (!rq) L.skip('a recorded why plays its clip', 'audio_manifest.js has no recorded why for a single-answer question');
        else {
          audioHits.length = 0;
          await page.evaluate(id => drillList([QUESTIONS.find(q => q.id === id)], 'why clip test'), rq);
          await page.waitForSelector('#v-quiz .opt');
          await page.click('#v-quiz .opt');
          await page.click('#v-quiz [data-wyplay]');
          const rs = await page.evaluate(() => WHY_UI.state());
          for (let t = 0; t < 50 && !audioHits.some(u => u.endsWith('audio/q-' + rq + '.mp3')); t++) await page.waitForTimeout(100);
          L.check(rs && rs.id === rq && rs.mode === 'clip' && audioHits.some(u => u.endsWith('audio/q-' + rq + '.mp3')), `${rq}'s recorded why plays its clip`, JSON.stringify({rs, audioHits}));
          await page.evaluate(() => WHY_UI.stop());
        }
      }
      const wide = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1);
      L.check(!wide, 'no horizontal scroll at the end');
      L.check(!errors.length, 'no script or console error', errors.slice(0, 3).join(' | '));
      await ctx.close();
    }

    // a page on a fresh profile; `sayMs`: how long the stand-in voice takes over one sentence; `audio`: the clip served
    const fresh = async (viewport, extra, sayMs, audio) => {
      const ctx = await browser.newContext(Object.assign({viewport, serviceWorkers: 'block'}, extra || {}));
      await ctx.addInitScript(fakeVoice);
      await ctx.addInitScript(ms => { window.prompt = () => 'TestUser'; if (ms) window.__sayMs = ms; }, sayMs || 0);
      const page = await ctx.newPage();
      const errors = [];
      page.on('pageerror', e => errors.push('pageerror: ' + e.message));
      page.on('dialog', d => d.accept());
      await page.route('**/audio/*.mp3', r => r.fulfill({status: 200, contentType: 'audio/wav', body: audio || wav}));
      await page.goto(site.url + 'index.html');
      await page.waitForFunction(() => typeof NS === 'string' && document.querySelectorAll('#nav button').length > 3, null, {timeout: 20000});
      return {ctx, page, errors};
    };

    /* ---------- A-F5 / D-F15: a "Jump to a section" entry reads as its heading does ----------
       The core builds the entries from the headings as written and decodes a fixed list of entities, which has no
       &middot;, so the 69 Guides entries read "Skin Pathophysiology &middot; Objective 1: ...". guide.js now
       writes the character itself. */
    {
      console.log('\n=== "Jump to a section": Guides, Tell apart, Reference (390 px) ===');
      const {ctx, page, errors} = await fresh({width: 390, height: 844});
      for (const [v, name] of [['guide', 'Guides'], ['tell', 'Tell apart'], ['ref', 'Reference']]) {
        await page.evaluate(v => show(v), v);
        await page.waitForTimeout(300);
        const r = await page.evaluate(v => {
          const pane = document.getElementById('v-' + v), norm = s => String(s || '').replace(/\s+/g, ' ').trim();
          const rows = [...pane.querySelectorAll('.refnav a')].map(a => { const t = pane.querySelector(a.getAttribute('href'));
            return {label: norm(a.textContent), head: t ? norm(t.textContent) : null}; });
          return {n: rows.length, entity: rows.filter(x => /&#?[a-z0-9]+;/i.test(x.label)).map(x => x.label),
            differ: rows.filter(x => x.label !== x.head).map(x => `"${x.label}" for "${x.head}"`),
            dot: rows.filter(x => x.label.includes('·')).length, headDot: rows.filter(x => x.head && x.head.includes('·')).length};
        }, v);
        L.check(r.n > 0 && !r.entity.length, `${name}: none of the ${r.n} entries shows an entity as text (such as "&middot;")`, `${r.entity.length}: ${r.entity.slice(0, 2).join(' | ')}`);
        L.check(r.n > 0 && !r.differ.length, `${name}: each of the ${r.n} entries reads as its section heading does`, `${r.differ.length}: ${r.differ.slice(0, 2).join(' | ')}`);
        if (v === 'guide') L.check(r.headDot > 0 && r.dot === r.headDot, `Guides: the ${r.headDot} headings written "deck · objective" show the dot in their entries (${r.dot})`);
      }
      L.check(!errors.length, 'no script error while the three tabs were drawn', errors.slice(0, 3).join(' | '));
      await ctx.close();
    }

    /* ---------- B-F10: a glossary term that is its capitals only ----------
       The core's glossify() looks for every term without regard to case, so the gloss of RARE (retinoic acid
       response element) was added to the ordinary word "rare" in 16 questions. glossary.js marks RARE cs:true and
       gloss_ui.js holds such an entry back in a text whose first match is in another case. Each question is put
       through the core's own function and through the page's, the way the core draws an answered question (each
       option's explanation, then the concept block, one shared record of the terms already defined). */
    {
      console.log('\n=== glossary: a term marked cs:true is glossed in its own case only (390 px) ===');
      const FOUND = ['L2-001', 'L2-008', 'L2-013', 'L3-012', 'L3-013', 'L3-051', 'L3-052', 'L3-083', 'L3-092', 'L3H-005', 'L3H-012', 'L3H-021',
        'P5-072', 'P6-004', 'P6-008', 'P6-009'];   // the finding's list
      const {ctx, page, errors} = await fresh({width: 390, height: 844});
      const has = await page.evaluate(() => typeof GLOSS_UI !== 'undefined' && !!GLOSS_UI && typeof GLOSS_UI.core === 'function');
      L.check(has, 'gloss_ui.js is in the page and has wrapped the core\'s glossify()');
      const g = await page.evaluate(() => {
        const core = typeof GLOSS_UI !== 'undefined' && GLOSS_UI && GLOSS_UI.core ? GLOSS_UI.core : glossify;
        const cs = GLOSS.filter(x => x.cs), span = x => ' <span class="gloss">(' + x.d + ')</span>';
        const own = x => new RegExp('(?:' + x.p + ')$'), ownAny = x => new RegExp('\\b(' + x.p + ')'), anyCase = x => new RegExp('\\b(' + x.p + ')', 'i');
        const draw = (q, fn) => { const seen = new Set(), self = [teachText(q.teach), ...q.options.map(o => o.why || '')].join(' ');
          return q.options.map(o => fn(esc(o.why), seen, self)).concat(teachParts(q.teach).map(p => fn(esc(p.t), seen, self))); };
        const without = html => cs.reduce((h, x) => h.split(span(x)).join(''), html.join('\n'));
        // where an entry's gloss sits: [text number, in the entry's own case?]
        const places = (html, x) => { const out = []; html.forEach((h, ti) => { let at = -1; while ((at = h.indexOf(span(x), at + 1)) >= 0) out.push([ti, own(x).test(h.slice(0, at))]); }); return out; };
        const out = {cs: cs.map(x => x.k), n: 0, glosses: 0, othersDiffer: [], changed: [], coreWrong: [], nowWrong: [], twice: [], kept: [], lost: [], mixedText: [], single: {}};
        for (const q of QUESTIONS) {
          if (!Array.isArray(q.options) || !q.options.length) continue;
          out.n++;
          const a = draw(q, core), b = draw(q, glossify);
          out.glosses += (b.join('\n').match(/<span class="gloss">/g) || []).length;
          if (without(a) !== without(b)) out.othersDiffer.push(q.id);
          if (a.join('\n') !== b.join('\n')) out.changed.push(q.id);
          const texts = q.options.map(o => String(o.why || '')).concat(teachParts(q.teach).map(p => p.t));
          out.single[q.id] = q.options.filter(o => o.correct).length === 1;
          for (const x of cs) {
            const pa = places(a, x), pb = places(b, x);
            if (pa.some(p => !p[1])) out.coreWrong.push(q.id);
            if (pb.some(p => !p[1])) out.nowWrong.push(q.id);
            if (pb.length > 1) out.twice.push(q.id);
            const capitals = texts.some(t => ownAny(x).test(t));
            if (pa.length && capitals) (pb.length === 1 && pb[0][1] ? out.kept : out.lost).push(q.id);
            if (texts.some(t => { const m = t.match(anyCase(x)), o = t.match(ownAny(x)); return m && o && o.index !== m.index; })) out.mixedText.push(q.id);
          }
        }
        ['coreWrong', 'nowWrong', 'twice', 'kept', 'lost', 'mixedText'].forEach(k => { out[k] = [...new Set(out[k])]; });
        return out;
      });
      L.check(g.cs.includes('rare'), `glossary.js marks RARE as a term kept in its case (cs:true: ${g.cs.join(', ')})`);
      L.check(g.n > 1000 && !g.nowWrong.length, `over the ${g.n} questions with options, no gloss of such a term follows a word in another case ("rare", "Rare")`, `${g.nowWrong.length}: ${g.nowWrong.join(', ')}`);
      const gone = FOUND.filter(id => g.coreWrong.includes(id));
      L.check(gone.length > 0 && gone.every(id => !g.nowWrong.includes(id)) && g.coreWrong.every(id => g.changed.includes(id)),
        `the ${gone.length} questions of the finding still in the bank with the word (${gone.join(', ')}) no longer show the gloss on it`, g.nowWrong.join(', '));
      L.check(JSON.stringify(g.changed) === JSON.stringify(g.coreWrong), `only those questions are drawn differently from the core alone (${g.changed.length})`, `changed: ${g.changed.join(', ')}; the core glossed the other case in: ${g.coreWrong.join(', ')}`);
      L.check(!g.othersDiffer.length, `every other gloss is where the core alone puts it (${g.glosses} glosses in all)`, g.othersDiffer.join(', '));
      L.check(g.kept.length > 0 && !g.lost.length && !g.twice.length, `each question with the capitals in an explanation that had the gloss still has it once, after the capitals (${g.kept.join(', ')})`, `lost: ${g.lost.join(', ')}; twice: ${g.twice.join(', ')}`);
      L.check(!g.mixedText.length, 'no explanation has the word in another case before the capitals (that text would go without the gloss)', g.mixedText.join(', '));
      // drawn answers: one question of the finding, and one with the capitals
      const answer = async id => {
        await page.evaluate(id => drillList([QUESTIONS.find(q => q.id === id)], 'gloss test'), id);
        await page.waitForSelector('#v-quiz .opt');
        await page.click('#v-quiz .opt');
        await page.waitForSelector('#v-quiz .why');
        return page.evaluate(() => { const d = GLOSS.find(x => x.k === 'rare').d;
          const why = document.querySelector('#v-quiz .why');
          return {text: why.textContent.replace(/\s+/g, ' '), gl: [...why.querySelectorAll('.gloss')].filter(s => s.textContent.includes(d.slice(0, 30))).map(s => {
            const r = document.createRange(); r.setStart(s.parentNode, 0); r.setEndBefore(s); return r.toString().trimEnd().slice(-12); })}; });
      };
      const a1 = gone.find(id => g.single[id]), a2 = g.kept.find(id => g.single[id]);
      if (!a1) L.skip('a drawn answer of the finding', 'none of its questions has a single answer');
      else { const r = await answer(a1); L.check(/\brare\b/i.test(r.text) && !r.gl.length, `${a1} answered: its explanation has the word "rare" and no gloss of RARE`, JSON.stringify(r.gl)); }
      if (!a2) L.skip('a drawn answer with the capitals', 'no single-answer question has them');
      else { const r = await answer(a2); L.check(r.gl.length === 1 && /RARE$/.test(r.gl[0]), `${a2} answered: RARE in capitals is glossed once, straight after the capitals`, JSON.stringify(r.gl)); }
      // "All on one page" (topic_list_ui.js) draws its cards with the same function
      const a3 = gone.filter(id => g.single[id] && id !== a1)[0];
      if (!a3 || !(await page.evaluate(() => typeof TOPIC_LIST_UI !== 'undefined' || !!document.querySelector('#v-quiz [data-layout="all"]')))) L.skip('the one-page list', 'no second single-answer question of the finding, or no layout row');
      else {
        await page.evaluate(id => drillList([QUESTIONS.find(q => q.id === id)], 'gloss test, one page'), a3);
        await page.waitForSelector('#v-quiz [data-layout="all"]');
        await page.click('#v-quiz [data-layout="all"]');
        const card = `#v-quiz .tlcard[data-tlq="${a3}"]`;
        await page.waitForSelector(card + ' .opt');
        await page.click(card + ' .opt');
        await page.waitForSelector(card + ' .why');
        const r = await page.evaluate(card => { const why = document.querySelector(card + ' .why'), d = GLOSS.find(x => x.k === 'rare').d;
          return {rare: /\brare\b/i.test(why.textContent), gl: [...why.querySelectorAll('.gloss')].filter(s => s.textContent.includes(d.slice(0, 30))).length}; }, card);
        L.check(r.rare && r.gl === 0, `${a3} answered in "All on one page": the word "rare" and no gloss of RARE`, JSON.stringify(r));
        await page.click('#v-quiz [data-layout="one"]').catch(() => {});
      }
      L.check(!errors.length, 'no script error', errors.slice(0, 3).join(' | '));
      await ctx.close();
    }

    /* ---------- A-F1: a Topics "Listen" ends on the walkthrough's player ----------
       go() opens the guide section through jump() and then puts the walkthrough's bar at the top when the bar is
       far below the section heading. jump_ui.js lands its own target (the section heading) again at about 0.7, 2
       and 4.6 s after a jump, so on a phone the playing walkthrough's bar and Play button ended one to two
       screens below the window for 17 of the 50 walkthroughs (the ones far down a long guide section). Each case
       is a fresh profile and a real tap or click; nothing else touches the page before the two readings, at
       3.5 s and at 6 s (after jump_ui.js's last pass). The clip served lasts 20 s, so part 1 is still playing. */
    {
      const pool = async (items, n, fn) => { const out = new Array(items.length); let k = 0;
        await Promise.all(Array.from({length: n}, async () => { while (k < items.length) { const i = k++; out[i] = await fn(items[i]); } }));
        return out; };
      const reading = id => {
        const box = e => { if (!e) return null; const r = e.getBoundingClientRect(); return [Math.round(r.top), Math.round(r.bottom)]; };
        const w = WALK_UI.BY[id], sec = document.getElementById(w.guide), st = WALK_UI.state();
        const land = typeof JUMP_UI !== 'undefined' && JUMP_UI && JUMP_UI.last && JUMP_UI.last.land;
        return {view: VIEW, vh: innerHeight, pin: Math.round(JUMP_UI.pinnedOffset()), y: Math.round(scrollY),
          bar: box(document.querySelector(`.wkbar[data-wk="${id}"]`)), play: box(document.querySelector(`.wkpanel[data-wkp="${id}"] [data-wkplay]`)),
          sec: box(sec), land: box(land), playing: !!(st && st.id === id && st.playing), hit: !!(sec && sec.classList.contains('jhit')),
          focusPlay: !!(document.activeElement && document.activeElement.matches('[data-wkplay]'))};
      };
      // inside the window: below the pinned tab strip (pin is its bottom edge plus 8 px) and above the window's bottom edge
      const inside = (m, b) => !!b && b[0] >= m.pin - 9 && b[1] <= m.vh;
      const playerIn = m => !!m && m.view === 'guide' && inside(m, m.bar) && inside(m, m.play);
      const headTop = m => !!m && m.view === 'guide' && !!m.sec && Math.abs(m.sec[0] - m.pin) <= 30;
      const SIZES = [{name: '390x844, a tap', viewport: {width: 390, height: 844}, extra: {hasTouch: true, isMobile: true}, tap: true},
                     {name: '1376x1032, a click', viewport: {width: 1376, height: 1032}, extra: {}, tap: false}];
      // one case: a fresh page, the folds around the button opened as a reader would, one real tap or click
      // k: which of the walkthrough's buttons (a walkthrough listed under two or three topic cards has one on each)
      const visit = async (size, id, how, k = 0) => {
        const {ctx, page, errors} = await fresh(size.viewport, size.extra, 60000, wavLong);
        try {
          const sel = how === 'open' ? `#v-guide [data-lrn="open"][data-wid="${id}"]` : `#v-topics [data-lrn="${how}"][data-wid="${id}"]`;
          if (how === 'open') { await page.evaluate(() => show('guide')); await page.waitForTimeout(400); }
          const press = async (s, nth = 0) => { const l = page.locator(s).nth(nth); await l.scrollIntoViewIfNeeded(); if (size.tap) await l.tap(); else await l.click(); };
          // the folders around the button, outermost first: the Topics exam and deck folders (a header button), a topic card or the list (a summary)
          const folds = await page.evaluate(([sel, k]) => { const b = document.querySelectorAll(sel)[k], out = [];
            for (let e = b && b.parentElement; e; e = e.parentElement) {
              if (e.hidden && e.id) out.unshift(`button[aria-controls="${e.id}"][aria-expanded="false"]`);
              else if (e.tagName === 'DETAILS' && !e.open) { e.dataset.wtfold = String(out.length); out.unshift(`details[data-wtfold="${out.length}"] > summary`); }
            }
            return b ? out : null; }, [sel, k]);
          if (!folds) return {id, k, err: 'no such button: ' + sel + ' #' + k, errors};
          for (const f of folds) await press(f);
          await press(sel, k);
          await page.waitForTimeout(3500);
          const at35 = await page.evaluate(reading, id);
          await page.waitForTimeout(2500);
          const at6 = await page.evaluate(reading, id);
          return {id, k, at35, at6, errors};
        } catch (e) { return {id, k, err: String(e.message).split('\n')[0], errors}; }
        finally { await ctx.close(); }
      };
      const show1 = r => r.err ? `${r.id}#${r.k}: ${r.err}` : `${r.id}#${r.k}: bar ${r.at35.bar} Play ${r.at35.play} at 3.5 s, bar ${r.at6.bar} Play ${r.at6.play} at 6 s (window ${r.at35.vh})`;
      const {ctx: c0, page: p0} = await fresh({width: 390, height: 844});
      // every button, in page order: {id, k} is the k-th Listen button of walkthrough id (12 walkthroughs sit under a
      // second topic card and two of those under a third, each with its own starting scroll position and folders)
      const lst = await p0.evaluate(() => { const seen = {}, each = [...document.querySelectorAll('#v-topics [data-lrn="listen"]')].map(b => { const id = b.dataset.wid; seen[id] = (seen[id] || 0) + 1; return {id, k: seen[id] - 1}; });
        return {each, btn: Object.keys(seen),
        all: WALK_UI.SECS.filter(w => w.guide && Array.isArray(w.topics) && w.topics.length).map(w => w.id)}; });
      await c0.close();
      console.log('\n=== Topics "Listen": the page ends on the walkthrough\'s player ===');
      L.check(lst.btn.length >= 40 && lst.btn.length === lst.all.length, `Topics has a Listen button for each walkthrough that names a topic (${lst.btn.length} of ${lst.all.length})`);
      L.check(lst.each.length >= lst.btn.length && lst.each.filter(e => e.k === 0).length === lst.btn.length, `each of the ${lst.each.length} Listen buttons is pressed, the second and third buttons of a walkthrough included (${lst.each.length - lst.btn.length} of them)`);
      for (const size of SIZES) {
        const res = await pool(lst.each, 5, e => visit(size, e.id, 'listen', e.k));
        const ok = r => !r.err && r.at35.playing && playerIn(r.at35) && playerIn(r.at6);
        const bad = res.filter(r => !ok(r));
        L.check(!bad.length, `${size.name} on Listen: 3.5 s and 6 s later the playing walkthrough's bar and Play button are inside the window (${res.length - bad.length} of ${res.length})`,
          `${bad.length} not: ${bad.slice(0, 4).map(show1).join(' | ')}`);
        const hl = res.filter(r => !r.err && !(r.at6.hit && r.at6.focusPlay));
        L.check(!hl.length, `${size.name}: the guide section keeps its highlight and keyboard focus is on Play (${res.length - hl.length} of ${res.length})`, hl.slice(0, 4).map(r => r.id + '#' + r.k).join(', '));
        const errs = res.flatMap(r => r.errors || []);
        L.check(!errs.length, `${size.name}: no script error in the ${res.length} visits`, errs.slice(0, 3).join(' | '));
      }
      // the other ways in, on a phone: three walkthroughs, the first and two far down a long section
      const far = ['rd-10', 'pc-8'].filter(id => lst.btn.includes(id));
      const three = [lst.btn[0]].concat(far.length === 2 ? far : lst.btn.slice(-2));
      const opens = await pool(three, 3, id => visit(SIZES[0], id, 'open'));
      L.check(opens.every(r => !r.err && playerIn(r.at35) && playerIn(r.at6) && !r.at6.playing), `390x844, the Guides list of walkthroughs (${three.join(', ')}): the opened player is inside the window, not playing`, opens.map(show1).join(' | '));
      const reads = await pool(three, 3, id => visit(SIZES[0], id, 'read'));
      L.check(reads.every(r => !r.err && headTop(r.at35) && headTop(r.at6)), `390x844, "Read guide" (${three.join(', ')}): the section heading is at the top, below the pinned strip`,
        reads.map(r => r.err ? `${r.id}: ${r.err}` : `${r.id}: section top ${r.at35.sec[0]} then ${r.at6.sec[0]}, pinned ${r.at35.pin}`).join(' | '));
      // "Explain more" on an answered question: jump_ui.js's own landing is as before
      {
        const {ctx, page, errors} = await fresh(SIZES[0].viewport, SIZES[0].extra);
        const qid = await page.evaluate(() => { const q = QUESTIONS.find(q => !q.type && Array.isArray(q.options) && q.options.filter(o => o.correct).length === 1 &&
          /data-jump="(?:guide|ref|tell):[^"]+"/.test(explainRow(q))); return q && q.id; });
        if (!qid) L.skip('"Explain more"', 'no single-answer question has a chip to a reading section');
        else {
          await page.evaluate(id => drillList([QUESTIONS.find(q => q.id === id)], 'landing test'), qid);
          await page.waitForSelector('#v-quiz .opt');
          await page.tap('#v-quiz .opt');
          const chip = page.locator('#v-quiz [data-jump^="guide:"], #v-quiz [data-jump^="ref:"], #v-quiz [data-jump^="tell:"]').first();
          const to = await chip.getAttribute('data-jump');
          await chip.scrollIntoViewIfNeeded();
          await chip.tap();
          await page.waitForTimeout(3500);
          const m = await page.evaluate(() => { const l = JUMP_UI.last, e = l && l.land, r = e && e.getBoundingClientRect();
            return {view: VIEW, top: r ? Math.round(r.top) : null, pin: Math.round(JUMP_UI.pinnedOffset()), hit: !!(l && l.target && document.querySelector('.jhit, .jreg')),
              atEnd: scrollY + innerHeight >= document.documentElement.scrollHeight - 2}; });
          L.check(m.view === to.split(':')[0] && m.top !== null && (Math.abs(m.top - m.pin) <= 30 || (m.atEnd && m.top > m.pin)) && m.hit,
            `390x844, "Explain more" on ${qid} (${to}): 3.5 s later its target is at the top, below the pinned strip, highlighted`, JSON.stringify(m));
        }
        L.check(!errors.length, 'no script error on the way', errors.slice(0, 3).join(' | '));
        await ctx.close();
      }
    }

    // the preview build loads the slides from one folder up
    if (!fs.existsSync(path.join(ROOT, 'preview', 'index.html'))) L.skip('the preview page', 'no preview/index.html (run build.py --preview)');
    else {
      console.log('\n=== /preview/ ===');
      const ctx = await browser.newContext({viewport: {width: 1280, height: 900}, serviceWorkers: 'block'});
      await ctx.addInitScript(fakeVoice);
      await ctx.addInitScript(() => { window.prompt = () => 'TestUser'; });
      const page = await ctx.newPage();
      const errors = [];
      page.on('pageerror', e => errors.push(e.message));
      page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
      await page.goto(site.url + 'preview/index.html');
      await page.waitForFunction(() => typeof NS === 'string' && document.querySelectorAll('#nav button').length > 3, null, {timeout: 20000});
      const has = await page.evaluate(() => typeof WALK_UI !== 'undefined' && !!WALK_UI);
      if (!has) L.skip('the preview page', 'the preview build has no walk_ui.js (run build.py --preview)');
      else {
        const r = await page.evaluate(async () => {
          show('guide');
          const w = WALK_UI.SECS.find(w => w.parts[0].slide); WALK_UI.open(w.id, false);
          const img = document.querySelector(`.wkpanel[data-wkp="${w.id}"] .wkvis img`);
          const ok = await new Promise(res => { if (img.complete) return res(img.naturalWidth > 0); img.onload = () => res(img.naturalWidth > 0); img.onerror = () => res(false); });
          return {ok, src: img.getAttribute('src'), ns: NS};
        });
        L.check(r.ok && r.src.startsWith('../slides/'), `the preview loads its slide from ../slides/ (${r.src})`);
        L.check(!errors.length, 'no script or console error on the preview', errors.slice(0, 3).join(' | '));
      }
      await ctx.close();
    }
  } finally {
    await browser.close();
    await site.close();
  }
  L.finish(NAME);
})().catch(e => { console.error(e); L.notRun(NAME, 'the test could not finish: ' + e.message); });
