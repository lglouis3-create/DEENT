/* ==========================================================================
   DRAWN STEP-THROUGH NARRATION: "Listen" on each figure, PHAR 4346 DEENT
   --------------------------------------------------------------------------
   Louis, 2026-11-09: "Also can the diagram have narration explaining the steps
   of each as a walk through?" TEMPORARY course-level presentation (course.js
   `files`), like walk_ui.js, until the kit has a narration module. The kit core
   (6c877b6) is not changed: this file is put into the page before views.js, in
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
.dnstop[hidden]{display:none}`;
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
  function ui() {
    document.querySelectorAll('[data-dnplay]').forEach(b => {
      const fig = b.closest('figure'), on = !!(P && P.fig === fig);
      const paused = on && P.h && P.h.paused;
      b.textContent = !on ? '♪ Listen' : paused ? '▶ Resume' : '❚❚ Pause';
      b.setAttribute('aria-pressed', on && !paused ? 'true' : 'false');
      const s = fig && fig.querySelector('[data-dnstop]'); if (s) s.hidden = !on;
    });
  }
  function stop() {
    const p = P; if (!p) return; P = null;
    clearTimeout(p.gap);
    if (p.h && !p.h.done) p.h.stop(true);
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
    const text = list[i].text;
    me.h = NARR.say({clip: NARR.clipFor(clipKey(key, i), text), text, owner: 'dianarr',
      onEnd: () => {
        if (P !== me) return;
        if (!fig.isConnected || i + 1 >= Math.min(list.length, n)) { stop(); return; }
        me.gap = setTimeout(() => { if (P === me) play(fig, key, i + 1); }, 450);
      },
      onStop: () => { if (P === me) { P = null; clearTimeout(me.gap); ui(); } },
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
