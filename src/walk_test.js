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
   - the preview page loads the slides from one folder up.

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
const wav = (() => {
  const n = 2400, b = Buffer.alloc(44 + n * 2);
  b.write('RIFF', 0); b.writeUInt32LE(36 + n * 2, 4); b.write('WAVE', 8); b.write('fmt ', 12); b.writeUInt32LE(16, 16);
  b.writeUInt16LE(1, 20); b.writeUInt16LE(1, 22); b.writeUInt32LE(8000, 24); b.writeUInt32LE(16000, 28); b.writeUInt16LE(2, 32);
  b.writeUInt16LE(16, 34); b.write('data', 36); b.writeUInt32LE(n * 2, 40); return b;
})();

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
