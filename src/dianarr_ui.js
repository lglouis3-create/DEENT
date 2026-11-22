/* ==========================================================================
   DRAWN STEP-THROUGH NARRATION: "Listen" on each figure, PHAR 4346 DEENT
   --------------------------------------------------------------------------
   Louis, 2026-11-09: "Also can the diagram have narration explaining the steps
   of each as a walk through?" TEMPORARY course-level presentation (course.js
   `files`), like walk_ui.js, until the kit has a narration module. The kit core
   (64302e2) is not changed: this file is put into the page before views.js, in
   the same script, and works on the figures the core draws.

   Data: DIA_NARR (dianarr_smith.js, dianarr_sik.js): {'<DIA key>': {steps:
   [{text, src}]}}, one entry per drawn step (a static figure has one). The
   recorded clip audio/dn-<key>-<n>.mp3 plays only while AUDIO_CLIPS['dn-<key>-<n>']
   carries the hash of the current text (walk_ui.js NARR.clipFor); otherwise the
   device voice reads the text. Playback, the device voice and the speed are
   walk_ui.js's NARR.say and its one stored key (`<NS>:narration`, the speed);
   this file stores nothing.

   What it draws: on every step-through (diagrams.js `stepper`, its controls
   `[data-anim="<key>"]`) that has a DIA_NARR entry, wherever the figure shows
   (Guide, Diagrams tab, Enlarge view, the figures of "Hear the why" and of the
   explanations), a "Listen" button after Next; on a static figure with an entry,
   the same button under the drawing. Not inside the walkthrough player
   (.wkpanel), whose parts have their own narration.
   - Listen plays the current step; at the end of a clip it moves to the next
     step and plays it, through to the last step. While it plays the button is
     Pause (then Resume), and Stop appears beside it.
   - Back, Next, a step dot, Replay step or Play all, another figure's Listen, a
     walkthrough or a "Hear the why" stops it, and the figure stays on the step
     chosen. Enlarge does not stop it.
   - The step change is the engine's own stepTo, so prefers-reduced-motion turns
     its motion off as everywhere else; this file adds no motion of its own.
   In the node checks' stub DOM (no NARR) it does nothing.
   ========================================================================== */
const DIA_NARR_UI = (() => {
  if (typeof NARR === 'undefined' || !NARR || typeof DIA_NARR === 'undefined' || !DIA_NARR ||
      typeof document === 'undefined' || typeof MutationObserver === 'undefined') return null;
  const N = DIA_NARR, esc = NARR.esc;
  const steps = k => (N[k] && Array.isArray(N[k].steps) ? N[k].steps : []).filter(s => s && typeof s.text === 'string' && s.text.trim());
  const clipKey = (k, i) => `dn-${k}-${i + 1}`;
  const recorded = k => steps(k).length > 0 && steps(k).every((s, i) => !!NARR.clipFor(clipKey(k, i), s.text));

  /* static figures (no step controls) are found by their drawing's aria-label */
  const unq = s => String(s).replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
  const STATIC = new Map();
  if (typeof DIA !== 'undefined' && DIA) Object.keys(N).forEach(k => {
    const h = DIA[k]; if (typeof h !== 'string' || /data-anim=/.test(h)) return;
    const m = h.match(/<svg[^>]*\saria-label="([^"]*)"/); if (m) STATIC.set(unq(m[1]), k);
  });

  const css = `
.dnbtn[aria-pressed="true"]{border-color:var(--accent,#2b6cb0);font-weight:600}
.dnbar{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:6px 0 2px}
.dnbar .btn{padding:5px 12px;font-size:13px;min-height:44px;min-width:44px}
.dnstop[hidden]{display:none}
.dnsay{margin:8px 0 4px;padding:10px 12px;border:1px solid var(--line,#D3DAE3);border-left:4px solid var(--accent,#2b6cb0);border-radius:8px;background:var(--paper,#fff);text-align:left}
.dnsay[hidden]{display:none}
.dnsay-h{display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:space-between;margin:0 0 6px;font-size:12.5px;font-weight:600;color:var(--text-dim,#5A6878)}
.dnsay-t{margin:0;font-size:16px;line-height:1.6;max-width:none}
.dnsay-t .dns{color:var(--text-dim,#5A6878)}
.dnsay-t .dns.dnon{color:var(--text,#16202C);background:#ffe9a8;border-radius:4px;box-shadow:0 0 0 2px #ffe9a8;font-weight:600}
figure.fig svg text.dnhl{paint-order:stroke;stroke:#ffd84d;stroke-width:6px;stroke-linejoin:round;font-weight:700}
@media (prefers-color-scheme:dark){.dnsay-t .dns.dnon{background:#6b5200;box-shadow:0 0 0 2px #6b5200;color:#fff}figure.fig svg text.dnhl{stroke:#8a6a00}}`;
  const addCss = () => {
    if (document.getElementById('dncss')) return;
    const s = document.createElement('style'); s.id = 'dncss'; s.textContent = css; document.head.appendChild(s);
  };

  const keyOf = fig => {
    const ctl = fig.querySelector(':scope > [data-anim]');
    if (ctl) return N[ctl.dataset.anim] ? ctl.dataset.anim : null;
    const svg = fig.querySelector('svg');
    return svg ? STATIC.get(svg.getAttribute('aria-label') || '') || null : null;
  };
  const buttons = k => {
    const lbl = recorded(k) ? 'read by the narrator' : 'read by the device voice';
    return `<button type="button" class="btn ghost dnbtn" data-dnplay="${esc(k)}" aria-pressed="false" ` +
      `aria-label="${esc('Listen: narrate each step, ' + lbl)}" title="${esc('Narrates each step (' + lbl + ')')}">♪ Listen</button>` +
      `<button type="button" class="btn ghost dnbtn dnstop" data-dnstop="${esc(k)}" aria-label="Stop the narration" hidden>■ Stop</button>`;
  };
  function arm(root) {
    (root || document).querySelectorAll('figure.fig:not([data-dnarm])').forEach(fig => {
      if (fig.closest('.wkpanel')) { fig.dataset.dnarm = '0'; return; }
      const k = keyOf(fig); fig.dataset.dnarm = k ? '1' : '0';
      if (!k || !steps(k).length) return;
      const ctl = fig.querySelector(':scope > [data-anim]');
      if (ctl) {
        const next = ctl.querySelector('button[data-go="1"]');
        const t = document.createElement('template'); t.innerHTML = buttons(k);
        const nodes = [...t.content.childNodes];
        if (next) next.after(...nodes); else ctl.append(...nodes);
      } else {
        const bar = document.createElement('div'); bar.className = 'dnbar'; bar.innerHTML = buttons(k);
        const svg = fig.querySelector('svg'), box = svg && (svg.closest('.rxscroll') || svg);
        if (box && box.parentNode === fig) box.after(bar); else fig.prepend(bar);
      }
    });
  }

  /* ---------- following along (Louis, 2026-11-22: "what's being said gets emphasized and highlighted in the
     diagram to follow along better ... felt it went really fast") ----------
     While a figure is narrated a panel under its controls shows the words of the current step; the sentence
     being spoken is marked, and the labels of the drawing that the sentence names get a yellow outline. A
     recorded clip has no word timings, so the sentence is placed by how far the clip has played against the
     sentences' share of the text; the device voice reports each sentence as it starts. The panel carries the
     speed control (walk_ui.js's stored speed). */
  const STOPW = new Set('the and for with from that this into onto than then are was were has have its their there which when what where while also each more less most both does not but only over under after before between through they them these those can may will per via out off about more'.split(' '));
  const NUMW = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const ALIAS = [[/α/g, ' alpha '], [/β/g, ' beta '], [/γ/g, ' gamma '], [/\bIOP\b/g, ' intraocular pressure '], [/\bCAIs?\b/g, ' carbonic anhydrase inhibitor '],
    [/\bAChE\b/g, ' acetylcholinesterase '], [/\bACh\b/g, ' acetylcholine '], [/\bCO2\b/gi, ' carbon dioxide '], [/\bHCO3\b/gi, ' bicarbonate '],
    [/\bH2CO3\b/gi, ' carbonic acid '], [/\bH2O\b/gi, ' water '], [/\bNa\+?(?=\s|$)/g, ' sodium '], [/\bBAK\b/g, ' benzalkonium chloride '], [/\bPGs?\b/g, ' prostaglandin ']];
  const toks = t => {
    let x = String(t); ALIAS.forEach(([re, r]) => { x = x.replace(re, r); });
    x = x.replace(/\d/g, d => ' ' + NUMW[+d] + ' ').toLowerCase();
    return (x.match(/[a-z]+/g) || []).filter(w => (w.length >= 3 && !STOPW.has(w))).map(w => w.length >= 7 ? w.slice(0, 6) : w.replace(/s$/, ''));
  };
  const shownText = (fig, el) => { const st = el.closest('.st'); return !st || st.closest('figure') !== fig || st.classList.contains('on'); };
  function markLabels(fig, sentence) {
    fig.querySelectorAll('svg text.dnhl').forEach(t => t.classList.remove('dnhl'));
    if (!sentence) return;
    const S = new Set(toks(sentence)); if (!S.size) return;
    fig.querySelectorAll('svg text').forEach(t => {
      if (!shownText(fig, t)) return;
      const L = [...new Set(toks(t.textContent))]; if (!L.length) return;
      const hit = L.filter(w => S.has(w)).length;
      if (hit >= (L.length <= 2 ? L.length : Math.ceil(L.length * 0.6))) t.classList.add('dnhl');
    });
  }
  function panel(fig) {
    let d = fig.querySelector(':scope > .dnsay');
    if (!d) {
      d = document.createElement('div'); d.className = 'dnsay'; d.hidden = true;
      d.innerHTML = `<div class="dnsay-h"><span class="dnsay-n" aria-live="polite"></span>${NARR.rateSelect ? NARR.rateSelect() : ''}</div><p class="dnsay-t"></p>`;
      // under the drawing: above the step controls of a step-through, below the Listen bar of a static figure
      const ctl = fig.querySelector(':scope > [data-anim]'), bar = fig.querySelector(':scope > .dnbar');
      if (ctl) ctl.before(d); else if (bar) bar.after(d); else fig.append(d);
    }
    return d;
  }
  function sayStep(fig, key, i, text) {
    const d = panel(fig), n = Math.min(steps(key).length, figSteps(fig).length || 1);
    d.querySelector('.dnsay-n').textContent = n > 1 ? `Being read: step ${i + 1} of ${n}` : 'Being read';
    d.querySelector('.dnsay-t').innerHTML = NARR.sentHTML(text, 'dns');
    d.hidden = false;
  }
  function saySent(fig, si) {
    const d = fig.querySelector(':scope > .dnsay'); if (!d) return;
    const all = [...d.querySelectorAll('.dns')]; if (!all.length) return;
    const k = Math.max(0, Math.min(all.length - 1, si));
    if (all[k].classList.contains('dnon')) return;
    all.forEach((x, j) => x.classList.toggle('dnon', j === k));
    markLabels(fig, all[k].textContent);
  }
  function sayOff(fig) {
    if (!fig) return;
    const d = fig.querySelector(':scope > .dnsay'); if (d) d.hidden = true;
    fig.querySelectorAll('svg text.dnhl').forEach(t => t.classList.remove('dnhl'));
  }
  // where each sentence starts, as a share of the step's text (a recorded clip is placed by this)
  const cuts = text => { const ss = NARR.sentences(text), tot = ss.reduce((a, x) => a + x.length, 0) || 1; let a = 0; return ss.map(x => { const c = a / tot; a += x.length; return c; }); };

  /* ---------- playing ---------- */
  let P = null;          // {fig, key, i, h, gap}
  const figSteps = fig => [...fig.querySelectorAll('svg .st')].filter(s => s.closest('figure') === fig);
  const curStep = fig => Math.max(0, figSteps(fig).findIndex(s => s.classList.contains('on')));
  function show(fig, to) {
    const st = figSteps(fig); if (!st.length) return;
    const cur = curStep(fig); if (cur === to) return;
    try { stepTo(fig, cur, to); }
    catch (e) { st.forEach((s, j) => s.classList.toggle('on', j === to)); }
  }
  function stopPlayAll() {   // the engine's own "Play all", if it is running
    try { if (typeof ANIM !== 'undefined' && ANIM) { clearInterval(ANIM.t); ANIM.b.textContent = '▶ Play all'; ANIM = null; } } catch (e) {}
  }
  // Writes only what changed. Setting textContent replaces the button's text node also when
  // the text is the same; the observer at the end of this file sees that as a change to the
  // page and draws again on the next frame, so an unconditional write here never stops.
  function ui() {
    document.querySelectorAll('[data-dnplay]').forEach(b => {
      const fig = b.closest('figure'), on = !!(P && P.fig === fig);
      const paused = on && P.h && P.h.paused;
      const label = !on ? '♪ Listen' : paused ? '▶ Resume' : '❚❚ Pause';
      if (b.textContent !== label) b.textContent = label;
      const pressed = on && !paused ? 'true' : 'false';
      if (b.getAttribute('aria-pressed') !== pressed) b.setAttribute('aria-pressed', pressed);
      const s = fig && fig.querySelector('[data-dnstop]'); if (s && s.hidden !== !on) s.hidden = !on;
    });
  }
  function stop() {
    const p = P; if (!p) return; P = null;
    clearTimeout(p.gap);
    if (p.h && !p.h.done) p.h.stop(true);
    sayOff(p.fig);
    ui();
  }
  function play(fig, key, i) {
    const list = steps(key), n = figSteps(fig).length || 1;
    if (i >= list.length || i >= n) { stop(); return; }
    if (P && P.fig !== fig) stop();
    stopPlayAll();
    if (n > 1) show(fig, i);
    const me = P = P && P.fig === fig ? P : {fig, key};
    me.i = i; clearTimeout(me.gap);
    const text = list[i].text, cut = cuts(text);
    sayStep(fig, key, i, text); saySent(fig, 0);
    me.h = NARR.say({clip: NARR.clipFor(clipKey(key, i), text), text, owner: 'dianarr',
      onSent: si => { if (P === me) saySent(fig, si); },
      onFrac: f => { if (P !== me) return; let k = 0; while (k + 1 < cut.length && f >= cut[k + 1]) k++; saySent(fig, k); },
      onEnd: () => {
        if (P !== me) return;
        if (!fig.isConnected || i + 1 >= Math.min(list.length, n)) { stop(); return; }
        me.gap = setTimeout(() => { if (P === me) play(fig, key, i + 1); }, 1200);   // a pause between steps (was 450 ms)
      },
      onStop: () => { if (P === me) { P = null; clearTimeout(me.gap); sayOff(fig); ui(); } },
      onState: ui});
    ui();
  }
  function toggle(fig, key) {
    if (P && P.fig === fig && P.h && !P.h.done) {
      if (P.h.paused) P.h.resume(); else P.h.pause();
      ui(); return;
    }
    if (P && P.fig === fig) { clearTimeout(P.gap); play(fig, key, Math.min(P.i + 1, steps(key).length - 1)); return; }
    play(fig, key, figSteps(fig).length > 1 ? curStep(fig) : 0);
  }

  // capture phase: the engine's click handler (views.js) treats every button in
  // [data-anim] as a step control, so Listen and Stop are handled here and go no further
  document.addEventListener('click', e => {
    const t = e.target && e.target.closest ? e.target : null; if (!t) return;
    const pb = t.closest('[data-dnplay]'), sb = t.closest('[data-dnstop]');
    if (pb || sb) {
      e.stopPropagation(); e.preventDefault();
      const fig = (pb || sb).closest('figure'); if (!fig) return;
      if (sb) { stop(); return; }
      toggle(fig, pb.dataset.dnplay);
      return;
    }
    if (!P) return;
    const b = t.closest('[data-anim] button');
    if (b && b.dataset.go !== 'big') { stop(); return; }                         // Back, Next, a dot, Replay, Play all
    if (t.closest('[data-wkplay],[data-wkstep],.wktx li,[data-wyplay]')) stop();  // a walkthrough or a why takes over
  }, true);
  document.addEventListener('keydown', e => {
    if (!P || (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight')) return;
    if (e.target && e.target.closest && e.target.closest('[data-anim]')) stop();   // the arrow keys step the figure
  }, true);

  addCss();
  let queued = false;
  new MutationObserver(() => {
    if (queued) return; queued = true;
    (window.requestAnimationFrame || setTimeout)(() => {
      queued = false;
      if (P && !P.fig.isConnected) stop();
      arm(document); ui();
    });
  }).observe(document.body, {childList: true, subtree: true});
  arm(document);
  return {arm, stop, playing: () => P && {key: P.key, step: P.i + 1, paused: !!(P.h && P.h.paused)}, keys: () => Object.keys(N)};
})();
