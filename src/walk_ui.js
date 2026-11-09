/* ==========================================================================
   NARRATION PLAYER: GUIDE WALKTHROUGHS, PHAR 4346 DEENT
   --------------------------------------------------------------------------
   TEMPORARY course-level presentation (Louis, 2026-11-08: path B of
   reviews/NARRATION_PLAN.md 7.1), to be moved into a kit feature module when
   the kit has one. Written in the shape of PH's player (exam1-drill/src/app.js:
   gwBars, gwOpen, gwPlay, gwShow, gwPause, gwStop, gwEnd) so that port is a
   move. The kit core (08be7a2, the pin in course.js) is not changed: this is a
   course data file (course.js `files`), so the build puts it into the page
   before views.js, in the same script. At load it wraps renderGuide() the way
   likely_ui.js wraps renderQuiz().

   Data (plain JS, every one optional; a missing one means nothing is drawn):
     WALK_SECTIONS  walk_pp.js, walk_pc.js, walk_sun.js, walk_mc.js
                    [{id, deck, guide:'gobj-…', title, topics, parts:[{text,
                    slide:'<deck>-<NN>' | null, fig:{id, step (1-based)} | null,
                    src}]}]; `src` is never spoken or shown; a part with both
                    `fig` and `slide` shows the drawn step, its slide one button away
     AUDIO_CLIPS    audio_manifest.js {'gw-<id>-<part 1-based>': {h, s}}: the
                    recorded clip audio/gw-<id>-<n>.mp3 plays only while `h`
                    equals the first 12 hex of sha256(text); otherwise the
                    device voice (speechSynthesis) reads the text
   Files beside the page: slides/<deck>-<NN>.jpg and audio/*.mp3 sit at the
   repository root; the /preview/ build reaches them one folder up (BUILD.preview).
   The service worker does not precache them (sw.js precaches only SITE.files).

   What it draws: under each guide objective section (section.gobj) that has
   walkthroughs, one "Listen: walkthrough" bar per walkthrough. The player reads
   part by part, highlights the part (and, with the device voice, the sentence)
   being read, shows the part's slide image or the step of a drawn step-through
   (diagrams.js DIA), changes the slide with the part, lets the reader browse the
   section's slides and open one full size, play and pause where it stopped,
   step a part back or on, change speed, and continue into the next walkthrough.
   Keys inside a player: Space or K play and pause, left and right arrows move a
   part. Phones get the transcript first, then the slide.

   Storage: one key per device, `<NS>:narration` ({pos, rate, cont}: the part
   each walkthrough was left on, the speed, "continue"), read and written only
   with direct localStorage calls inside try/catch. It is not progress data and
   never touches the core's progress or history keys (`<NS>:data:*`,
   `<NS>:log:*`); a preview's NS ends in -preview, so a preview keeps its own.

   It runs only in a real browser page; in the node checks' stub DOM it does
   nothing, and NARR is null. NARR_HASH is a plain function either way.
   ========================================================================== */

/* sha256 of the UTF-8 text, hex, first 12 characters: the clip hash of the SPEC
   (narration_hash.js computes the same with node's crypto; walk_check.js
   compares the two). Synchronous, so it works on file:// and http pages alike. */
const NARR_HASH = (() => {
  const K = [0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,
    0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,
    0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,
    0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,
    0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,
    0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,
    0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,
    0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];
  const utf8 = s => {
    if (typeof TextEncoder === 'function') return new TextEncoder().encode(s);
    const u = unescape(encodeURIComponent(s)), b = new Uint8Array(u.length);
    for (let i = 0; i < u.length; i++) b[i] = u.charCodeAt(i);
    return b;
  };
  const cache = new Map();
  return text => {
    text = String(text);
    if (cache.has(text)) return cache.get(text);
    const m = utf8(text), n = m.length, words = ((n + 9 + 63) >> 6) << 4, W = new Uint32Array(words);
    for (let i = 0; i < n; i++) W[i >> 2] |= m[i] << (24 - (i & 3) * 8);
    W[n >> 2] |= 0x80 << (24 - (n & 3) * 8);
    W[words - 1] = n * 8; W[words - 2] = Math.floor(n / 0x20000000);
    const H = [0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19];
    const w = new Uint32Array(64), r = (x, k) => (x >>> k) | (x << (32 - k));
    for (let o = 0; o < words; o += 16) {
      for (let t = 0; t < 64; t++) {
        if (t < 16) w[t] = W[o + t];
        else {
          const a = w[t - 15], b = w[t - 2];
          w[t] = (w[t - 16] + (r(a, 7) ^ r(a, 18) ^ (a >>> 3)) + w[t - 7] + (r(b, 17) ^ r(b, 19) ^ (b >>> 10))) | 0;
        }
      }
      let [a, b, c, d, e, f, g, h] = H;
      for (let t = 0; t < 64; t++) {
        const t1 = (h + (r(e, 6) ^ r(e, 11) ^ r(e, 25)) + ((e & f) ^ (~e & g)) + K[t] + w[t]) | 0;
        const t2 = ((r(a, 2) ^ r(a, 13) ^ r(a, 22)) + ((a & b) ^ (a & c) ^ (b & c))) | 0;
        h = g; g = f; f = e; e = (d + t1) | 0; d = c; c = b; b = a; a = (t1 + t2) | 0;
      }
      H[0] = (H[0] + a) | 0; H[1] = (H[1] + b) | 0; H[2] = (H[2] + c) | 0; H[3] = (H[3] + d) | 0;
      H[4] = (H[4] + e) | 0; H[5] = (H[5] + f) | 0; H[6] = (H[6] + g) | 0; H[7] = (H[7] + h) | 0;
    }
    const out = H.map(x => (x >>> 0).toString(16).padStart(8, '0')).join('').slice(0, 12);
    cache.set(text, out);
    return out;
  };
})();

/* The shared voice: one narration at a time (a walkthrough or a "Hear the why"),
   a recorded clip when its hash matches, else the device voice sentence by
   sentence. Used by why_ui.js too. */
const NARR = (() => {
  const ok = typeof document !== 'undefined' && typeof MutationObserver !== 'undefined' &&
             typeof document.getElementById === 'function' && document.getElementById('nav') &&
             typeof document.getElementById('nav').insertBefore === 'function';
  if (!ok) return null;
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
  const RATES = [0.8, 1, 1.25, 1.5, 1.75, 2];

  /* ---------- the one stored key (per device; never the core's progress) ---------- */
  const KEY = () => { let ns; try { ns = NS; } catch (e) { ns = COURSE.ns + (BUILD.preview ? '-preview' : ''); } return ns + ':narration'; };
  let ST = null;
  const st = () => {
    if (ST) return ST;
    let o = null;
    try { o = JSON.parse(localStorage.getItem(KEY()) || 'null'); } catch (e) { o = null; }
    o = o && typeof o === 'object' ? o : {};
    ST = {pos: o.pos && typeof o.pos === 'object' && !Array.isArray(o.pos) ? o.pos : {},
          rate: RATES.includes(+o.rate) ? +o.rate : 1, cont: o.cont !== false};
    return ST;
  };
  const save = () => { try { localStorage.setItem(KEY(), JSON.stringify(st())); } catch (e) { /* storage full or blocked: kept for this visit */ } };

  /* ---------- where the slide and audio files are ---------- */
  const base = () => { try { return BUILD.preview ? '../' : ''; } catch (e) { return ''; } };
  const clips = () => (typeof AUDIO_CLIPS !== 'undefined' && AUDIO_CLIPS) || {};
  // the recorded clip for this key and text, or '' when there is none or it was recorded from other words
  const clipFor = (key, text) => { const c = clips()[key]; return c && c.h && c.h === NARR_HASH(text) ? base() + 'audio/' + key + '.mp3' : ''; };

  /* ---------- the device voice ---------- */
  const can = () => typeof speechSynthesis !== 'undefined' && typeof SpeechSynthesisUtterance === 'function';
  let VOICES = [];
  const loadVoices = () => { try { VOICES = can() ? speechSynthesis.getVoices().filter(v => /^en/i.test(v.lang)) : []; } catch (e) { VOICES = []; } };
  if (can()) { loadVoices(); try { speechSynthesis.addEventListener('voiceschanged', loadVoices); } catch (e) {} }
  const voice = () => VOICES.find(v => /^en-US/i.test(v.lang) && v.default) || VOICES.find(v => v.default) ||
                      VOICES.find(v => /^en-US/i.test(v.lang)) || VOICES[0] || null;
  // what the device voice says for written forms (the stored text, and so its hash, is unchanged)
  const SPEAK = [[/→/g, ' leads to '], [/↑/g, ' increased '], [/↓/g, ' decreased '], [/\bα/g, 'alpha '], [/\bβ/g, 'beta '],
    [/α/g, ' alpha '], [/β/g, ' beta '], [/γ/g, ' gamma '], [/κ/g, ' kappa '], [/±/g, ' plus or minus '], [/≥/g, ' at least '],
    [/≤/g, ' at most '], [/×/g, ' times '], [/~/g, ' about ']];
  const speakable = t => SPEAK.reduce((x, [re, r]) => x.replace(re, r), String(t)).replace(/\s+/g, ' ').trim();
  // sentences: a stop, ! or ? followed by a space ends one, except after a short abbreviation or an initial
  const ABBR = /(?:^|\s)(?:Dr|Mr|Mrs|Ms|vs|e\.g|i\.e|etc|approx|St|No|Fig|[A-Z])\.$/;
  function sentences(t) {
    const out = []; let cur = '';
    String(t).split(/(\s+)/).forEach(tok => {
      cur += tok;
      if (/[.!?]["”’)]*$/.test(tok) && !ABBR.test(cur.trim())) { out.push(cur); cur = ''; }
    });
    if (cur.trim()) out.push(cur);
    return out.filter(x => x.trim());
  }

  /* ---------- one narration: say(o) -> handle {pause, resume, stop, rate} ----------
     o: {clip (url or ''), text, onSent(i), onEnd(), onFrac(f), onState()}. With
     the device voice there is no fixed timer: a part ends when the voice says
     its last sentence (onend), or, when a browser drops that event, when the
     voice has been idle for three checks in a row. */
  let A = null, CUR = null;
  const audio = () => A || (A = new Audio());
  function say(o) {
    if (CUR) CUR.stop(true);
    const ss = sentences(o.text);
    let gen = 0, watch = null, idle = 0;
    const h = {paused: false, done: false, si: 0, mode: o.clip ? 'clip' : 'voice', novoice: false, sents: ss, owner: o.owner || null};
    CUR = h;
    const unwatch = () => { clearInterval(watch); watch = null; };
    const end = () => { if (h.done) return; h.done = true; unwatch(); if (CUR === h) CUR = null; if (o.onEnd) o.onEnd(); };
    const fromVoice = i => {
      unwatch();
      if (!can()) { h.novoice = true; h.paused = true; if (o.onState) o.onState(); return; }
      const my = ++gen;
      try { speechSynthesis.cancel(); } catch (e) {}
      idle = 0;
      const v = voice(); let last = null, any = false;
      ss.slice(i).forEach((s, k) => {
        const words = speakable(s); if (!words) return;
        const u = new SpeechSynthesisUtterance(words);
        u.rate = st().rate; u.lang = 'en-US'; if (v) u.voice = v;
        u.onstart = () => { if (my === gen && !h.paused) { h.si = i + k; if (o.onSent) o.onSent(i + k); } };
        last = u; any = true;
        try { speechSynthesis.speak(u); } catch (e) {}
      });
      if (!any) return end();
      last.onend = () => { if (my === gen && !h.paused) end(); };
      last.onerror = e => {
        if (my !== gen || h.paused) return;
        if (e && e.error === 'not-allowed') { h.paused = true; if (o.onState) o.onState(); } else end();
      };
      watch = setInterval(() => {
        if (my !== gen || h.paused || h.done) return;
        let busy = true;
        try { busy = speechSynthesis.speaking || speechSynthesis.pending; } catch (e) { busy = false; }
        if (busy) idle = 0; else if (++idle >= 3) end();
      }, 700);
    };
    const fromClip = () => {
      const a = audio();
      a.onended = a.onerror = a.ontimeupdate = null;
      a.preload = 'auto'; a.src = o.clip; a.playbackRate = st().rate;
      const fall = () => { if (CUR !== h || h.done || h.mode !== 'clip') return; h.mode = 'voice'; fromVoice(0); };
      a.onended = () => { if (CUR === h && !h.done) end(); };
      a.onerror = fall;
      a.ontimeupdate = () => { if (CUR === h && o.onFrac && isFinite(a.duration) && a.duration) o.onFrac(a.currentTime / a.duration); };
      const p = a.play();
      if (p && p.catch) p.catch(err => {
        if (err && err.name === 'NotAllowedError') { h.paused = true; if (o.onState) o.onState(); }
        else if (!(err && err.name === 'AbortError')) fall();
      });
    };
    h.pause = () => {
      if (h.done || h.paused) return; h.paused = true; unwatch();
      if (h.mode === 'clip') { if (A) A.pause(); }
      else { gen++; try { speechSynthesis.cancel(); } catch (e) {} }
      if (o.onState) o.onState();
    };
    h.resume = () => {
      if (h.done) return; h.paused = false;
      if (h.mode === 'clip') { const p = audio().play(); if (p && p.catch) p.catch(() => { h.paused = true; if (o.onState) o.onState(); }); }
      else fromVoice(h.si);
      if (o.onState) o.onState();
    };
    h.stop = quiet => {
      if (h.done) return; h.done = true; unwatch(); gen++;
      if (h.mode === 'clip' && A) { A.onended = A.onerror = A.ontimeupdate = null; A.pause(); }
      else { try { speechSynthesis.cancel(); } catch (e) {} }
      if (CUR === h) CUR = null;
      if (o.onStop) o.onStop(quiet);
    };
    h.rate = r => {
      if (h.done) return;
      if (h.mode === 'clip') { if (A) A.playbackRate = r; }
      else if (!h.paused) fromVoice(h.si);
    };
    if (h.mode === 'clip') fromClip(); else fromVoice(0);
    return h;
  }
  const setRate = r => {
    if (!RATES.includes(+r)) return;
    st().rate = +r; save();
    document.querySelectorAll('select[data-nrate]').forEach(s => { s.value = String(st().rate); });
    if (CUR) CUR.rate(st().rate);
  };
  const rateSelect = () => `<label class="meta nrate">Speed <select data-nrate aria-label="Speed">${
    RATES.map(r => `<option value="${r}"${r === st().rate ? ' selected' : ''}>${r}×</option>`).join('')}</select></label>`;
  document.addEventListener('change', e => { if (e.target && e.target.matches && e.target.matches('select[data-nrate]')) setRate(e.target.value); });
  // the text of one narration, sentence by sentence, so the sentence being read can be marked
  const sentHTML = (text, cls) => sentences(text).map((s, i) => `<span class="${cls}" data-si="${i}">${esc(s)}</span>`).join('');
  return {esc, st, save, base, clipFor, can, say, sentences, sentHTML, rateSelect, speakable, current: () => CUR, RATES};
})();

const WALK_UI = (() => {
  if (!NARR || typeof renderGuide !== 'function') return null;
  const SECS = (typeof WALK_SECTIONS !== 'undefined' && Array.isArray(WALK_SECTIONS) ? WALK_SECTIONS : [])
    .filter(w => w && typeof w.id === 'string' && Array.isArray(w.parts) && w.parts.length &&
                 w.parts.every(p => p && typeof p.text === 'string'));
  if (!SECS.length) return null;
  const {esc, st, save} = NARR;
  const BY = {}; SECS.forEach(w => { BY[w.id] = w; });
  const DECKS = {pp: 'Skin Pathophysiology (Dr. Smith)', pc: 'Skin Pharmacology (Dr. Smith)',
                 sun: 'Sun exposure (Dr. Smith)', mc: 'Dermatologic medicinal chemistry (Dr. Sikazwe)'};
  // the slides each deck's walkthroughs show, in page order: what "browse the slides" steps through
  const DECK_SLIDES = {};
  SECS.forEach(w => w.parts.forEach(p => {
    if (!p.slide) return; const d = String(p.slide).split('-')[0];
    (DECK_SLIDES[d] = DECK_SLIDES[d] || new Set()).add(p.slide);
  }));
  Object.keys(DECK_SLIDES).forEach(d => { DECK_SLIDES[d] = [...DECK_SLIDES[d]].sort((a, b) => +a.split('-')[1] - +b.split('-')[1]); });
  const slideSrc = s => NARR.base() + 'slides/' + s + '.jpg';
  const clipKey = (id, i) => 'gw-' + id + '-' + (i + 1);
  const words = w => w.parts.reduce((n, p) => n + p.text.split(/\s+/).filter(Boolean).length, 0);
  const recorded = w => w.parts.every((p, i) => !!NARR.clipFor(clipKey(w.id, i), p.text));
  const posOf = id => { const v = st().pos[id]; return Number.isInteger(v) && v > 0 && v < BY[id].parts.length ? v : 0; };
  const posSet = (id, i) => { if (i > 0) st().pos[id] = i; else delete st().pos[id]; save(); };
  let ORDER = SECS.map(w => w.id);   // guide order once the guide is drawn
  let GW = null;                     // {id, i, playing, h}

  const css = `
.wkbars{display:flex;flex-direction:column;gap:6px;margin:4px 0 14px}
.wkbar{display:flex;flex-wrap:wrap;align-items:center;gap:6px 10px;min-width:0}
.wkbar .btn{padding:7px 13px;font-size:14px}
.wkbar .wkmeta{font-size:13px;color:var(--text-dim);min-width:0;overflow-wrap:anywhere}
.wkbar .wkmeta b{color:var(--text);font-weight:600}
.wkpanel{border:1px solid var(--line);border-radius:10px;padding:8px 10px;margin:2px 0 8px;background:var(--surface);min-width:0}
.wkctl{display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px}
.wkctl .btn{padding:6px 12px;font-size:14px}
.wkctl .chip{min-width:36px}
.wkctl .meta,.wkctl label{margin:0;font-size:13px}
.wkctl select{font:inherit;font-size:13px;padding:2px 4px;border:1px solid var(--line);border-radius:6px;background:var(--paper);color:var(--text)}
.wkfill{height:4px;background:var(--line);border-radius:2px;margin:8px 0;overflow:hidden}
.wkfill>div{height:100%;width:0;background:var(--accent);transition:width .3s}
.wkbody{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);gap:10px;align-items:start}
.wkvis{margin:0;min-width:0}
.wkvis img{display:block;width:100%;height:auto;border:1px solid var(--line);border-radius:6px;background:#fff}
.wkvis .fig{margin:0}
.wkvis figcaption.wkcap{display:flex;flex-wrap:wrap;align-items:center;gap:4px 8px;margin-top:4px;font-size:12.5px;color:var(--text-dim)}
.wkvis .wkcap .sp{flex:1 1 auto}
.wkvis .wkcap a{color:var(--accent)}
.wkvis .wknoimg{display:none;font-size:13px;color:var(--text-dim);margin:4px 0}
.wkvis.noimg img{display:none} .wkvis.noimg .wknoimg{display:block}
.wktx{margin:0;padding-left:22px;max-height:440px;overflow:auto;font-size:14.5px;line-height:1.5}
.wktx li{padding:4px 6px;border-radius:6px;cursor:pointer;margin:0 0 4px}
.wktx li:hover{background:var(--paper)}
.wktx li.on{background:var(--paper);outline:2px solid var(--accent)}
.wktx .wks.say{background:var(--accent-bg);border-radius:3px}
.wknote{font-size:13px;color:var(--text-dim);margin:6px 0 0}
@media (pointer:coarse){.wkctl .chip,.wkctl .btn,.wkctl select,.wkvis .chip{min-height:44px;min-width:44px}}
@media (max-width:700px){.wkbody{grid-template-columns:minmax(0,1fr)}.wktx{order:-1;max-height:30vh}.wkvis img{max-height:40vh;object-fit:contain}}
`;
  const addCss = () => {
    if (document.getElementById('wkcss')) return;
    const s = document.createElement('style'); s.id = 'wkcss'; s.textContent = css; document.head.appendChild(s);
  };

  /* ---------- the bars, under each guide objective section with walkthroughs ---------- */
  function barLabel(id) { const at = posOf(id); return at ? `Resume walkthrough at part ${at + 1}` : 'Listen: walkthrough'; }
  function gwBars(root) {
    const order = [];
    root.querySelectorAll('section.gobj[id]').forEach(s => {
      const ws = SECS.filter(w => w.guide === s.id);
      if (!ws.length) return;
      ws.forEach(w => order.push(w.id));
      if (s.querySelector(':scope > .wkbars')) return;
      const box = document.createElement('div'); box.className = 'wkbars';
      box.innerHTML = ws.map(w => {
        const min = Math.max(1, Math.round(words(w) / 150));
        return `<div class="wkbar" data-wk="${esc(w.id)}"><button type="button" class="btn ghost" data-wkopen="${esc(w.id)}" aria-expanded="false">${esc(barLabel(w.id))}</button>` +
          `<span class="wkmeta"><b>${esc(w.title || '')}</b> · ${w.parts.length} parts · about ${min} min · ${recorded(w) ? 'read by the narrator' : 'device voice'}</span></div>`;
      }).join('');
      // under the objective banner when the section has one, else under its heading
      const g = s.querySelector(':scope > .gbar'), h = s.querySelector(':scope > h3');
      if (g) g.insertAdjacentElement('afterend', box); else if (h) h.insertAdjacentElement('afterend', box); else s.prepend(box);
    });
    if (order.length) ORDER = order.concat(SECS.map(w => w.id).filter(id => !order.includes(id)));
  }
  const panel = id => document.querySelector(`.wkpanel[data-wkp="${id}"]`);
  function gwPanelHTML(id) {
    const w = BY[id];
    return `<div class="wkpanel" data-wkp="${esc(id)}" role="region" aria-label="${esc('Walkthrough: ' + (w.title || id))}">
      <div class="wkctl"><button type="button" class="chip" data-wkstep="-1" aria-label="Previous part">◂</button><button type="button" class="btn" data-wkplay>▶ Play</button><button type="button" class="chip" data-wkstep="1" aria-label="Next part">▸</button>
        <span class="meta wkpos" aria-live="polite">Part 1 of ${w.parts.length}</span>${NARR.rateSelect()}
        <label class="meta"><input type="checkbox" data-wkcont${st().cont ? ' checked' : ''}> Continue to the next walkthrough</label>
        <button type="button" class="chip" data-wkclose aria-label="Close the player">Close</button></div>
      <div class="wkfill"><div></div></div>
      <div class="wkbody"><figure class="wkvis"></figure><ol class="wktx">${w.parts.map((p, i) =>
        `<li data-wki="${i}" tabindex="0">${NARR.sentHTML(p.text, 'wks')}</li>`).join('')}</ol></div>
      <p class="wknote" data-wknote hidden></p></div>`;
  }
  // the visual for part i: its drawn step or slide, else the last one an earlier part named, else the first one.
  // A part that names both shows the drawn step, with its slide one button away (the caption's "Slide" chip),
  // so the slide stays in the deck's slide browser.
  const own = p => p.fig && p.fig.id ? {fig: p.fig, slide: p.slide || ''} : p.slide ? {slide: p.slide} : null;
  function visFor(w, i) {
    for (let k = i; k >= 0; k--) { const v = own(w.parts[k]); if (v) return v; }
    const f = w.parts.find(p => own(p));
    return f ? own(f) : null;
  }
  // the caption under a drawn step: which step, and the part's slide when it names one
  function figCap(vis) {
    const n = typeof DIA !== 'undefined' && DIA && typeof DIA[vis.fig.id] === 'string' ? (DIA[vis.fig.id].match(/class="st[ "]/g) || []).length : 0;
    const nn = vis.slide ? +vis.slide.split('-')[1] : 0;
    return `<span>${n ? `Drawn figure, step ${+vis.fig.step || 1} of ${n}` : 'Drawn figure'}</span><span class="sp"></span>` +
      (vis.slide ? `<button type="button" class="chip" data-wkslide="0" aria-label="${esc('Show the slide, page ' + nn)}">Slide p. ${nn}</button>` : '');
  }
  function figHTML(fig) {
    const html = typeof DIA !== 'undefined' && DIA && DIA[fig.id];
    return typeof html === 'string' ? html : '';
  }
  function setStep(box, step) {
    const f = box.querySelector('figure.fig') || box; const steps = [...f.querySelectorAll('.st')]; if (!steps.length) return;
    const to = Math.max(0, Math.min(steps.length - 1, (+step || 1) - 1)), cur = steps.findIndex(s => s.classList.contains('on'));
    if (cur === to) return;
    if (typeof stepTo === 'function' && cur >= 0) { try { stepTo(f, cur, to); return; } catch (e) { /* fall back to a plain switch */ } }
    steps.forEach((s, j) => s.classList.toggle('on', j === to));
    f.querySelectorAll('.sdot').forEach((d, j) => d.classList.toggle('on', j === to));
  }
  function gwShow(id, i, sel) {
    const p = panel(id); if (!p) return;
    const w = BY[id]; if (!w.parts[i]) return;
    const changed = +p.dataset.at !== i; p.dataset.at = i;
    p.querySelectorAll('.wktx li').forEach(li => {
      const on = +li.dataset.wki === i; li.classList.toggle('on', on);
      if (on) li.setAttribute('aria-current', 'true'); else li.removeAttribute('aria-current');
      if (!on) li.querySelectorAll('.wks.say').forEach(x => x.classList.remove('say'));
    });
    const li = p.querySelector(`.wktx li[data-wki="${i}"]`), ol = p.querySelector('.wktx');
    if (li && changed && ol.scrollHeight > ol.clientHeight) ol.scrollTop = li.offsetTop - ol.offsetTop - 8;
    p.querySelector('.wkpos').textContent = `Part ${i + 1} of ${w.parts.length}`;
    const fill = p.querySelector('.wkfill > div'); if (fill && changed) fill.style.width = Math.round(100 * i / w.parts.length) + '%';
    const vis = sel ? {slide: sel} : visFor(w, i), f = p.querySelector('.wkvis'), drawn = sel && visFor(w, i);
    if (!vis) { f.innerHTML = ''; f.hidden = true; f.dataset.k = ''; return; }
    f.hidden = false;
    if (!vis.fig) {                     // a slide (a drawn step, below, may also name its slide)
      const k = 'slide:' + vis.slide + (drawn && drawn.fig ? '+fig' : ''); if (f.dataset.k === k) return;
      const [d, nn] = vis.slide.split('-'), list = DECK_SLIDES[d] || [vis.slide], at = list.indexOf(vis.slide), src = slideSrc(vis.slide);
      f.classList.remove('noimg'); f.dataset.k = k; f.dataset.slide = vis.slide;
      f.innerHTML = `<a href="${esc(src)}" target="_blank" rel="noopener" title="Open the slide full size"><img src="${esc(src)}" alt="${esc((DECKS[d] || d) + ', page ' + (+nn))}" decoding="async"></a>
        <p class="wknoimg">The slide image did not load.</p>
        <figcaption class="wkcap"><span>${esc(DECKS[d] || d)} · page ${+nn}</span><span class="sp"></span>
          <button type="button" class="chip" data-wkslide="-1" ${at > 0 ? '' : 'disabled'} aria-label="Previous slide">‹ Slide</button><button type="button" class="chip" data-wkslide="1" ${at >= 0 && at < list.length - 1 ? '' : 'disabled'} aria-label="Next slide">Slide ›</button>
          <a href="${esc(src)}" target="_blank" rel="noopener">Full size</a>${drawn && drawn.fig ? '<button type="button" class="chip" data-wkfig aria-label="Back to the drawn figure">Drawn figure</button>' : ''}</figcaption>`;
      const img = f.querySelector('img'); img.onerror = () => f.classList.add('noimg');
    } else {
      const k = 'fig:' + vis.fig.id;
      if (f.dataset.k !== k) {
        const h = figHTML(vis.fig);
        f.dataset.k = k; f.classList.remove('noimg');
        f.innerHTML = h ? h + `<figcaption class="wkcap">${figCap(vis)}</figcaption>` : '<p class="wknoimg" style="display:block">The figure is not in this build.</p>';
        const fig = f.querySelector('figure.fig');
        if (fig) { fig.querySelectorAll('.st').forEach((s, j) => s.classList.toggle('on', j === 0)); fig.querySelectorAll('.sdot').forEach((d, j) => d.classList.toggle('on', j === 0)); }
        if (fig && typeof armFigs === 'function') armFigs(f);   // the step in words and Enlarge, as in the Guide (views.js)
      } else { const c = f.querySelector('figcaption.wkcap'); if (c) c.innerHTML = figCap(vis); }
      f.dataset.slide = vis.slide || '';
      setStep(f, vis.fig.step);
    }
  }
  function mark(id, i, si) {
    const p = panel(id); if (!p) return;
    p.querySelectorAll('.wks.say').forEach(x => x.classList.remove('say'));
    const s = p.querySelector(`.wktx li[data-wki="${i}"] .wks[data-si="${si}"]`); if (s) s.classList.add('say');
  }
  function note(id, msg) { const p = panel(id), n = p && p.querySelector('[data-wknote]'); if (n) { n.textContent = msg || ''; n.hidden = !msg; } }
  function gwUI() {
    document.querySelectorAll('.wkpanel').forEach(p => {
      const on = !!(GW && GW.id === p.dataset.wkp && GW.playing);
      p.querySelector('[data-wkplay]').textContent = on ? '❚❚ Pause' : '▶ Play';
      p.classList.toggle('playing', on);
    });
    document.querySelectorAll('[data-wkopen]').forEach(b => {
      const open = !!panel(b.dataset.wkopen);
      b.setAttribute('aria-expanded', String(open));
      b.textContent = open ? 'Close walkthrough' : barLabel(b.dataset.wkopen);
    });
  }
  function gwOpen(id, play) {
    const bar = document.querySelector(`.wkbar[data-wk="${id}"]`); if (!bar) return null;
    if (!panel(id)) bar.insertAdjacentHTML('afterend', gwPanelHTML(id));
    const at = GW && GW.id === id ? GW.i : posOf(id);
    gwShow(id, at); gwUI();
    if (GW && GW.id === id && GW.h && GW.h.novoice) note(id, 'This device has no voice for reading aloud: read along and use ▸ for the next part.');
    if (play) gwPlay(id, at);
    return panel(id);
  }
  function gwClose(id) {
    if (GW && GW.id === id) gwStop();
    const p = panel(id); if (p) p.remove();
    gwUI();
  }
  function gwStop() { const g = GW; if (!g) return; GW = null; if (g.h) g.h.stop(true); gwUI(); }
  function gwPause() { if (!GW || !GW.playing) return; GW.playing = false; if (GW.h) GW.h.pause(); gwUI(); }
  function gwResume() { if (!GW || GW.playing || !GW.h || GW.h.done) return; GW.playing = true; GW.h.resume(); gwUI(); }
  function gwPlay(id, i) {
    const w = BY[id]; if (!w || !w.parts[i]) return;
    if (GW && GW.h) GW.h.stop(true);
    if (typeof WHY_UI !== 'undefined' && WHY_UI) WHY_UI.stop();   // one voice at a time
    const cur = GW = {id, i, playing: true, h: null};
    posSet(id, i);
    gwShow(id, i); note(id, ''); gwUI(); gwMedia(id, i);
    const part = w.parts[i];
    cur.h = NARR.say({
      owner: 'walk', clip: NARR.clipFor(clipKey(id, i), part.text), text: part.text,
      onSent: si => { if (GW === cur) mark(id, i, si); },
      onFrac: f => { const el = panel(id) && panel(id).querySelector('.wkfill > div'); if (el && GW === cur) el.style.width = Math.round(100 * Math.min(1, (i + f) / w.parts.length)) + '%'; },
      onEnd: () => { if (GW !== cur) return; if (i + 1 < w.parts.length) gwPlay(id, i + 1); else gwEnd(id); },
      onState: () => {
        if (GW !== cur) return;
        cur.playing = !cur.h.paused; gwUI();
        if (cur.h.novoice) note(id, 'This device has no voice for reading aloud: read along and use ▸ for the next part.');
      },
      onStop: quiet => { if (GW === cur && !quiet) { GW = null; gwUI(); } },
    });
    if (cur.h.novoice) { cur.playing = false; gwUI(); }
  }
  // the last part ended: with "continue" ticked, the next walkthrough in guide order opens and plays
  function gwEnd(id) {
    gwStop(); posSet(id, 0);
    const el = panel(id) && panel(id).querySelector('.wkfill > div'); if (el) el.style.width = '100%';
    gwUI();
    if (!st().cont) return;
    const nx = ORDER[ORDER.indexOf(id) + 1]; if (!nx) return;
    if (panel(id)) gwClose(id);
    const p = gwOpen(nx, false);
    if (p && typeof scrollToEl === 'function') scrollToEl(p.previousElementSibling || p);
    gwPlay(nx, 0);
  }
  // lock-screen and headset controls on phones
  function gwMedia(id, i) {
    if (typeof navigator === 'undefined' || !('mediaSession' in navigator) || typeof MediaMetadata !== 'function') return;
    try {
      const w = BY[id];
      navigator.mediaSession.metadata = new MediaMetadata({title: w.title || id, artist: COURSE.short + ' walkthrough', album: 'Part ' + (i + 1) + ' of ' + w.parts.length});
      navigator.mediaSession.setActionHandler('play', () => { if (GW) { if (GW.h && !GW.h.done) gwResume(); else gwPlay(GW.id, GW.i); } });
      navigator.mediaSession.setActionHandler('pause', () => gwPause());
      navigator.mediaSession.setActionHandler('nexttrack', () => { if (GW && GW.i + 1 < BY[GW.id].parts.length) gwPlay(GW.id, GW.i + 1); });
      navigator.mediaSession.setActionHandler('previoustrack', () => { if (GW) gwPlay(GW.id, Math.max(0, GW.i - 1)); });
    } catch (e) { /* not offered by this browser */ }
  }
  const atOf = (p, id) => GW && GW.id === id ? GW.i : +(p.dataset.at || 0);
  function toggle(id, at) {
    if (GW && GW.id === id && GW.playing) return gwPause();
    if (GW && GW.id === id && GW.i === at && GW.h && !GW.h.done && !GW.h.novoice) return gwResume();
    gwPlay(id, at);
  }
  function move(id, to) {
    const n = BY[id].parts.length; to = Math.max(0, Math.min(n - 1, to));
    if (GW && GW.id === id && GW.playing) return gwPlay(id, to);
    if (GW && GW.h) GW.h.stop(true);
    GW = {id, i: to, playing: false, h: null}; posSet(id, to); gwShow(id, to); gwUI();
  }

  document.addEventListener('click', e => {
    const t = e.target && e.target.closest ? e.target : null; if (!t) return;
    const o = t.closest('[data-wkopen]');
    if (o) { const id = o.dataset.wkopen; if (panel(id)) gwClose(id); else gwOpen(id, true); return; }
    const p = t.closest('.wkpanel'); if (!p) return;
    if (t.closest('[data-anim]')) return;             // a drawn step-through's own buttons
    const id = p.dataset.wkp, at = atOf(p, id);
    if (t.closest('[data-wkplay]')) { toggle(id, at); return; }
    if (t.closest('[data-wkclose]')) { gwClose(id); return; }
    const sp = t.closest('[data-wkstep]'); if (sp) { move(id, at + +sp.dataset.wkstep); return; }
    if (t.closest('[data-wkfig]')) { gwShow(id, at); return; }
    const sl = t.closest('[data-wkslide]');
    if (sl) {
      const f = p.querySelector('.wkvis'), cur = f.dataset.slide; if (!cur) return;
      const list = DECK_SLIDES[cur.split('-')[0]] || [], k = list.indexOf(cur) + +sl.dataset.wkslide;
      if (k >= 0 && k < list.length) gwShow(id, at, list[k]);
      return;
    }
    const li = t.closest('.wktx li'); if (li) { gwPlay(id, +li.dataset.wki); return; }
  });
  document.addEventListener('change', e => {
    if (e.target && e.target.matches && e.target.matches('[data-wkcont]')) {
      st().cont = !!e.target.checked; save();
      document.querySelectorAll('[data-wkcont]').forEach(c => { c.checked = st().cont; });
    }
  });
  // inside a player: K or Space plays and pauses, the left and right arrows move a part
  document.addEventListener('keydown', e => {
    const t = e.target; if (!t || !t.closest) return;
    const li = t.closest('.wktx li');
    if (li && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); li.click(); return; }
    const p = t.closest('.wkpanel'); if (!p || e.metaKey || e.ctrlKey || e.altKey || /^(INPUT|SELECT|TEXTAREA)$/.test(t.tagName)) return;
    const id = p.dataset.wkp;
    if (e.key === 'k' || e.key === 'K' || (e.key === ' ' && !/^(BUTTON|A)$/.test(t.tagName))) { e.preventDefault(); e.stopPropagation(); toggle(id, atOf(p, id)); }
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); e.stopPropagation(); move(id, atOf(p, id) + (e.key === 'ArrowLeft' ? -1 : 1)); }
  }, true);

  try {
    addCss();
    const og = renderGuide;
    renderGuide = function () {
      const r = og.apply(this, arguments);
      try {
        const v = document.getElementById('v-guide');
        if (v) {
          gwBars(v);
          if (GW && document.querySelector(`.wkbar[data-wk="${GW.id}"]`)) { gwOpen(GW.id, false); gwShow(GW.id, GW.i); }
          gwUI();
        }
      } catch (e) { console.error('The walkthrough bars could not be drawn; the guide is unaffected.', e); }
      return r;
    };
  } catch (e) { console.error('The walkthrough player could not be added; the rest of the page is unaffected.', e); }
  return {SECS, BY, DECK_SLIDES, DECKS, order: () => ORDER.slice(), state: () => GW && {id: GW.id, i: GW.i, playing: GW.playing, mode: GW.h && GW.h.mode},
          open: gwOpen, close: gwClose, play: gwPlay, pause: gwPause, stop: gwStop, show: gwShow, clipKey, pos: posOf, panel};
})();

/* ==========================================================================
   THE WALKTHROUGH AS THE OBVIOUS START (Louis, 2026-11-08: Phase 1 of the
   DEENT plan, its section 8). Course-level, temporary like the player above.
     - Topics: each topic card that has a walkthrough (WALK_SECTIONS `topics`)
       gets one row per walkthrough at the top of its list: the walkthrough's
       title, "Listen" (opens its guide section with the player open and
       playing) and "Read guide" (opens its guide section, `guide`, at the top).
     - Start here, "Learn a topic": opens the Guides at a walkthrough, its player
       open (not playing), focus on Play: the one the reader left part-way,
       else the first walkthrough of the first topic not yet mastered, else the
       first walkthrough. Its small text names that walkthrough.
     - Guides: a short index at the top (collapsed, "Narrated walkthroughs
       (40)"), by deck, each entry opening that walkthrough's player.
   Every target is a real button (44 px on touch screens), keyboard focus
   moves to the player's Play button or the section heading it opens, and the
   core's Back button returns to the Topics. Reads progress only through the
   core's poolFor / masteryOf (mastery, never written); stores nothing.
   ========================================================================== */
(function learnLinks() {
  if (typeof WALK_UI === 'undefined' || !WALK_UI || typeof renderTopics !== 'function') return;
  const {SECS, DECKS} = WALK_UI;
  const esc = NARR.esc;
  const byTopic = id => SECS.filter(w => Array.isArray(w.topics) && w.topics.includes(id) && w.guide);
  const css = `
#v-topics .lrnrow{display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px;padding:8px 8px 10px;border-bottom:1px solid var(--line-soft,var(--line))}
#v-topics .lrnrow .lrnt{flex:1 1 12em;min-width:0;font-size:14.5px;overflow-wrap:anywhere}
#v-topics .lrnrow .lrnt b{font-weight:600}
#v-topics .lrnrow .lrnt small{display:block;color:var(--text-dim);font-size:12.5px}
#v-topics .lrnrow .lrnb{display:flex;gap:6px;flex-wrap:wrap}
#v-topics .lrnrow button,.wkindex button{min-height:44px;min-width:44px}
.wkindex{margin:6px 0 16px;border:1px solid var(--line);border-radius:var(--r,10px);background:var(--paper);padding:0 14px}
.wkindex>summary{cursor:pointer;min-height:44px;display:flex;align-items:center;font-weight:600;color:var(--accent);list-style:none}
.wkindex>summary::-webkit-details-marker{display:none}
.wkindex>summary::after{content:' \\25B8';display:inline-block;margin-left:6px;transition:transform .15s}
.wkindex[open]>summary::after{transform:rotate(90deg)}
.wkindex h3{font-size:14px;margin:10px 0 2px}
.wkindex ol{margin:0 0 8px;padding:0;list-style:none}
.wkindex li{margin:0}
.wkindex li button{display:block;background:none;border:0;border-top:1px solid var(--line-soft,var(--line));padding:10px 0;color:var(--accent);text-align:left;font:inherit;font-size:14px;cursor:pointer;width:100%}
.wkindex li button:hover{text-decoration:underline}
.wkindex li button:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
@media (prefers-reduced-motion: reduce){.wkindex>summary::after{transition:none}}`;
  const addCss = () => {
    if (document.getElementById('lrncss')) return;
    const st = document.createElement('style'); st.id = 'lrncss'; st.textContent = css; document.head.appendChild(st);
  };
  const focusEl = el => { if (!el) return; try { el.focus({preventScroll: true}); } catch (e) { el.focus(); } };
  // the Guides at one walkthrough: its section in view, the player open (playing when asked)
  function go(id, how) {
    const w = WALK_UI.BY[id]; if (!w) return;
    if (typeof jump === 'function') jump('guide', w.guide); else show('guide');
    const sec = document.getElementById(w.guide);
    if (how === 'read') {
      const h = sec && sec.querySelector('h3');
      if (sec) settle(sec, h || sec);
      if (h) { if (!h.hasAttribute('tabindex')) h.setAttribute('tabindex', '-1'); focusEl(h); }
      return;
    }
    const p = WALK_UI.panel(id) || WALK_UI.open(id, false);
    if (how === 'listen') WALK_UI.play(id, WALK_UI.state() && WALK_UI.state().id === id ? WALK_UI.state().i : WALK_UI.pos(id));
    const bar = document.querySelector(`.wkbar[data-wk="${id}"]`);
    // the section heading stays in view when the bar is near it, else the bar is the top
    const target = sec && bar && bar.getBoundingClientRect().top - sec.getBoundingClientRect().top < window.innerHeight * 0.45 ? sec : bar;
    if (target) settle(target, bar);
    focusEl(p && p.querySelector('[data-wkplay]'));
  }
  // images above the target can still be loading and push it down: the page is
  // put back on it a few times in the first two seconds, unless the reader
  // scrolls, taps or presses a key first
  function settle(target, bar) {
    const off = () => (typeof headerOffset === 'function' ? headerOffset() : 0);
    const put = () => window.scrollTo({top: target.getBoundingClientRect().top + window.scrollY - off(), behavior: 'auto'});
    put();
    let moved = false;
    const stop = () => { moved = true; };
    const evs = ['wheel', 'touchstart', 'keydown', 'mousedown'];
    evs.forEach(ev => window.addEventListener(ev, stop, {once: true, passive: true}));
    [250, 700, 1300, 2000].forEach((ms, k, all) => setTimeout(() => {
      if (!moved && bar && document.contains(bar)) {
        const r = bar.getBoundingClientRect();
        if (r.top < off() - 1 || r.bottom > window.innerHeight) put();
      }
      if (k === all.length - 1) evs.forEach(ev => window.removeEventListener(ev, stop));
    }, ms));
  }
  // "Learn a topic": the walkthrough left part-way, else the first one of the first topic not mastered
  function firstWalk() {
    const left = SECS.find(w => WALK_UI.pos(w.id) > 0);
    if (left) return {w: left, why: 'resume'};
    for (const t of TOPICS) {
      if (t.optional) continue;
      const ws = byTopic(t.id); if (!ws.length) continue;
      const pool = poolFor(t.id, null); if (!pool.length) continue;
      const m = masteryOf(pool);
      if (!m.total || m.mastered < m.total) return {w: ws[0], t};
    }
    return {w: SECS.find(w => w.guide)};
  }

  const base = renderTopics;
  renderTopics = function () {
    const r = base.apply(this, arguments);
    try {
      const el = document.getElementById('v-topics'); if (!el || !el.querySelectorAll) return r;
      addCss();
      el.querySelectorAll('details.topic').forEach(card => {
        const b = card.querySelector('button[data-t]:not([data-t=""])'), subs = card.querySelector('.subs');
        if (!b || !subs || subs.querySelector('.lrnrow')) return;
        const ws = byTopic(b.dataset.t); if (!ws.length) return;
        subs.insertAdjacentHTML('afterbegin', ws.map(w => {
          const at = WALK_UI.pos(w.id);
          return `<div class="lrnrow"><span class="lrnt"><b>${esc(w.title || '')}</b><small>Narrated walkthrough · ${w.parts.length} parts${at ? ' · left at part ' + (at + 1) : ''}</small></span>` +
            `<span class="lrnb"><button type="button" class="btn small" data-lrn="listen" data-wid="${esc(w.id)}" aria-label="${esc('Listen to the walkthrough: ' + (w.title || ''))}">${at ? 'Resume' : 'Listen'}</button>` +
            `<button type="button" class="btn small ghost" data-lrn="read" data-wid="${esc(w.id)}" aria-label="${esc('Read the guide: ' + (w.title || ''))}">Read guide</button></span></div>`;
        }).join(''));
      });
      const lb = el.querySelector('#startHere button[data-start="learn"]');
      const f = lb && firstWalk();
      if (f && f.w) {
        const sm = lb.querySelector('small');
        if (sm) sm.textContent = (f.why === 'resume' ? 'Resume the walkthrough: ' : 'Listen to or read the walkthrough: ') + (f.w.title || '');
        lb.onclick = ev => { ev.preventDefault(); go(f.w.id, 'open'); };
      }
    } catch (e) { console.error('The walkthrough links could not be added to the Topics; the topics are unaffected.', e); }
    return r;
  };
  document.addEventListener('click', e => {
    const b = e.target && e.target.closest ? e.target.closest('[data-lrn]') : null;
    if (b) go(b.dataset.wid, b.dataset.lrn);
  });

  const og = renderGuide;
  renderGuide = function () {
    const r = og.apply(this, arguments);
    try {
      const v = document.getElementById('v-guide'); if (!v || v.querySelector('.wkindex')) return r;
      const bars = [...v.querySelectorAll('.wkbar[data-wk]')].map(b => WALK_UI.BY[b.dataset.wk]).filter(Boolean);
      if (!bars.length) return r;
      addCss();
      const groups = [];
      bars.forEach(w => { let g = groups[groups.length - 1]; if (!g || g.deck !== w.deck) groups.push(g = {deck: w.deck, ws: []}); g.ws.push(w); });
      const d = document.createElement('details');
      d.className = 'wkindex'; d.id = 'wkindex';
      d.innerHTML = `<summary>Narrated walkthroughs (${bars.length}): pick one to open its player</summary>` + groups.map(g =>
        `<h3>${esc(DECKS[g.deck] || g.deck)}</h3><ol role="list">${g.ws.map(w =>
          `<li><button type="button" data-lrn="open" data-wid="${esc(w.id)}">${esc(w.title || w.id)}</button></li>`).join('')}</ol>`).join('');
      const intro = v.querySelector('h2 + p.sub') || v.querySelector('h2');
      if (intro) intro.after(d); else v.prepend(d);
    } catch (e) { console.error('The walkthrough index could not be drawn; the guide is unaffected.', e); }
    return r;
  };
})();
