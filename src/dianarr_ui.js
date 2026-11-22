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
.dnsay-t .dns.dnon{color:var(--text,#16202C);font-weight:600}
figure.fig svg text.dnhl{paint-order:stroke;stroke:#ffd84d;stroke-width:6px;stroke-linejoin:round;font-weight:700}
figure.fig svg .dn-el{transition:opacity .45s ease}
figure.fig svg .dn-fut{opacity:0!important;pointer-events:none}
figure.fig svg .dn-past{opacity:.38!important}
figure.fig svg .dn-badges circle{fill:#fff;stroke:#c2410c;stroke-width:1.5}
figure.fig svg .dn-badges text{fill:#c2410c;font:700 9.5px system-ui,sans-serif;text-anchor:middle}
figure.fig svg .dn-badges .on circle{fill:#c2410c}
figure.fig svg .dn-badges .on text{fill:#fff}
.dnsay-t .dnnum{display:inline-block;min-width:1.35em;height:1.35em;line-height:1.35em;margin:0 .3em 0 .15em;border:1.5px solid #c2410c;border-radius:50%;color:#c2410c;font-size:.78em;font-weight:700;text-align:center;vertical-align:.08em}
.dnsay-t .dnon .dnnum{background:#c2410c;color:#fff}
@media (prefers-reduced-motion:reduce){figure.fig svg .dn-el{transition:none}}
@media (prefers-color-scheme:dark){figure.fig svg text.dnhl{stroke:#8a6a00}}`;
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
  /* One label at a time (Louis, 2026-11-22: the outline "is kind of helpful but distracting when everything is
     highlighted at once"). The labels of the drawing are matched to the places in the step's text where they are
     named; as the narration reaches a place, only the label named there is outlined, until the next one is named.
     A label written on two lines is two <text> elements with the same x, the second starting in lower case: they count as one label. */
  function labelsOf(fig) {
    const out = []; let last = null;
    fig.querySelectorAll('svg text').forEach(t => {
      if (!shownText(fig, t)) return;
      const x = t.getAttribute('x'), y = parseFloat(t.getAttribute('y'));
      if (last && last.parent === t.parentNode && last.x === x && x != null && isFinite(y) && isFinite(last.y) && y - last.y > 6 && y - last.y < 24 && /^[a-z(]/.test(t.textContent.trim())) {
        last.els.push(t); last.txt += ' ' + t.textContent; last.y = y;
      } else { last = {els: [t], txt: t.textContent, x, y, parent: t.parentNode}; out.push(last); }
    });
    out.forEach(l => { l.tok = [...new Set(toks(l.txt))]; });
    return out.filter(l => l.tok.length && l.tok.length <= 6);
  }
  // the places in `text` where a label is named: [{pos (character), els}], in order
  function mentions(fig, text) {
    const labels = labelsOf(fig); if (!labels.length) return [];
    const words = []; const re = /\S+/g; let m;
    while ((m = re.exec(text))) words.push({pos: m.index, tok: toks(m[0])});
    const out = [];
    for (let w = 0; w < words.length; w++) {
      if (!words[w].tok.length) continue;
      // the label's other words may stand up to four words before or after this one; the nearest wins a tie
      const near = {}; for (let k = Math.max(0, w - 4); k < Math.min(words.length, w + 5); k++) words[k].tok.forEach(x => { const d = Math.abs(k - w); if (!(x in near) || d < near[x]) near[x] = d; });
      let best = [], size = 0, dist = 1e9;
      labels.forEach(l => {
        if (!words[w].tok.some(x => l.tok.includes(x))) return;
        const got = l.tok.filter(x => x in near), hit = got.length;
        if (hit < (l.tok.length <= 2 ? l.tok.length : Math.ceil(l.tok.length * 0.6))) return;
        const d = got.reduce((a, x) => a + near[x], 0);
        if (hit > size || (hit === size && d < dist)) { best = [l]; size = hit; dist = d; } else if (hit === size && d === dist) best.push(l);
      });
      if (!best.length) continue;
      const els = best.flatMap(l => l.els), prev = out[out.length - 1];
      if (prev && prev.els.length === els.length && prev.els.every((e, k) => e === els[k])) continue;   // the same label, still being named
      if (prev && words[w].pos - prev.pos < 12 && prev.size > size) continue;                              // a part of the label just named
      out.push({pos: words[w].pos, els, size});
    }
    return out;
  }
  function markAt(fig, me, pos) {
    const M = me.men || []; let k = -1;
    for (let i = 0; i < M.length; i++) if (M[i].pos <= pos) k = i;
    if (k === me.mk) return; me.mk = k;
    fig.querySelectorAll('svg text.dnhl').forEach(t => t.classList.remove('dnhl'));
    if (k >= 0) M[k].els.forEach(t => t.classList.add('dnhl'));
  }
  /* ---------- the drawing follows the sentences (Louis, 2026-11-22: "depicted better in the diagram of the steps
     happening as they are discussed"; he chose build-up, spotlight and numbered points together) ----------
     DIA_SYNC (dianarr_sync_*.js): {'<DIA key>': [per step: null or {n, seq, at}]}. `n` is the number of direct
     children of that step's <g class="st">: when the drawing has changed since the map was written the numbers
     differ and the map is ignored. `seq` is {'<sentence number, 1-based>': [child indexes]}: those children are
     the part of the drawing the sentence is about. While the step is narrated a part is hidden until its sentence
     is read, at full strength while it is read, and faded once a later part is being read; children in no list
     stay as drawn. Each part carries a number, the same number as its sentence in the text under the drawing.
     `at` may give {'<sentence number>': [x, y]} for the number's place (drawing units); otherwise it sits at the
     upper left of the part's first child. Outside narration (Back, Next, Stop, the end) the drawing is whole. */
  const SYNC = (typeof DIA_SYNC !== 'undefined' && DIA_SYNC) || {};
  function syncFor(fig, key, i) {
    const s = SYNC[key] && SYNC[key][i], g = figSteps(fig)[i];
    if (!s || !g || !s.seq || g.children.length !== s.n) return null;
    const nums = Object.keys(s.seq).map(Number).filter(m => m >= 1 && Array.isArray(s.seq[m]) && s.seq[m].length).sort((a, b) => a - b);
    if (!nums.length) return null;
    const K = [...g.children];
    return {g, nums, at: s.at || {}, els: m => s.seq[m].map(j => K[j]).filter(Boolean)};
  }
  function syncClear(fig) {
    fig.querySelectorAll('svg .dn-el').forEach(e => e.classList.remove('dn-el', 'dn-fut', 'dn-past'));
    fig.querySelectorAll('svg .dn-badges').forEach(e => e.remove());
  }
  function syncShow(fig, sy, si) {
    const k = si + 1, svg = sy.g.ownerSVGElement; if (!svg) return;
    let cur = 0; sy.nums.forEach(m => { if (m <= k) cur = m; });      // the newest part already read
    sy.nums.forEach(m => sy.els(m).forEach(e => {
      e.classList.add('dn-el'); e.classList.toggle('dn-fut', m > k); e.classList.toggle('dn-past', m < cur);
    }));
    let layer = svg.querySelector(':scope > .dn-badges');
    if (!layer) { layer = document.createElementNS('http://www.w3.org/2000/svg', 'g'); layer.setAttribute('class', 'dn-badges'); layer.setAttribute('aria-hidden', 'true'); svg.appendChild(layer); }
    const ctm = svg.getScreenCTM(), inv = ctm && ctm.inverse();
    sy.nums.forEach((m, ord) => {
      let b = layer.querySelector(`[data-m="${m}"]`);
      if (m > k) { if (b) b.remove(); return; }
      if (!b) {
        let x, y; const at = sy.at[m];
        if (Array.isArray(at)) { x = at[0]; y = at[1]; }
        else {
          const e = sy.els(m)[0]; if (!e || !inv) return;
          const r = e.getBoundingClientRect(), pt = svg.createSVGPoint(); pt.x = r.left; pt.y = r.top;
          const q = pt.matrixTransform(inv); x = q.x; y = q.y;
        }
        b = document.createElementNS('http://www.w3.org/2000/svg', 'g'); b.setAttribute('data-m', m);
        b.innerHTML = `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="7.5"/><text x="${x.toFixed(1)}" y="${(y + 3.3).toFixed(1)}">${ord + 1}</text>`;
        layer.appendChild(b);
      }
      b.setAttribute('class', m === cur ? 'on' : '');
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
    const sy = syncFor(fig, key, i);
    if (sy) { const sp = d.querySelectorAll('.dns'); sy.nums.forEach((m, ord) => { const x = sp[m - 1]; if (x) x.insertAdjacentHTML('afterbegin', `<b class="dnnum">${ord + 1}</b>`); }); }
    d.hidden = false;
  }
  function saySent(fig, si) {
    const d = fig.querySelector(':scope > .dnsay'); if (!d) return;
    const all = [...d.querySelectorAll('.dns')]; if (!all.length) return;
    const k = Math.max(0, Math.min(all.length - 1, si));
    if (all[k].classList.contains('dnon')) return;
    all.forEach((x, j) => x.classList.toggle('dnon', j === k));
  }
  function sayOff(fig) {
    if (!fig) return;
    const d = fig.querySelector(':scope > .dnsay'); if (d) d.hidden = true;
    fig.querySelectorAll('svg text.dnhl').forEach(t => t.classList.remove('dnhl'));
    syncClear(fig);
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
    clearTimeout(p.gap); clearInterval(p.tick);
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
    const text = list[i].text, cut = cuts(text), sents = NARR.sentences(text);
    sayStep(fig, key, i, text); saySent(fig, 0);
    syncClear(fig); me.sy = syncFor(fig, key, i); me.ss = -1;
    const onS = si => { if (me.sy && si !== me.ss) { me.ss = si; syncShow(fig, me.sy, si); } };
    onS(0);
    me.men = []; me.mk = -2;   // the outline on the label being named is off (Louis, 2026-11-22: "isn't that helpful")
    // the device voice reports only the start of each sentence: within it the place is estimated at 13 characters a second
    clearInterval(me.tick);
    const voiceAt = si => {
      clearInterval(me.tick); let at = sents.slice(0, si).reduce((a, x) => a + x.length, 0); const t0 = Date.now();
      me.tick = setInterval(() => { if (P !== me || !me.h || me.h.done) { clearInterval(me.tick); return; } if (!me.h.paused) markAt(fig, me, at + (Date.now() - t0) / 1000 * 13 * (NARR.st().rate || 1)); }, 250);
    };
    me.h = NARR.say({clip: NARR.clipFor(clipKey(key, i), text), text, owner: 'dianarr',
      onSent: si => { if (P === me) { saySent(fig, si); onS(si); } },
      onFrac: f => { if (P !== me) return; let k = 0; while (k + 1 < cut.length && f >= cut[k + 1]) k++; saySent(fig, k); onS(k); },
      onEnd: () => {
        if (P !== me) return;
        syncClear(fig);
        if (!fig.isConnected || i + 1 >= Math.min(list.length, n)) { stop(); return; }
        me.gap = setTimeout(() => { if (P === me) play(fig, key, i + 1); }, 1200);   // a pause between steps (was 450 ms)
      },
      onStop: () => { if (P === me) { P = null; clearTimeout(me.gap); clearInterval(me.tick); sayOff(fig); ui(); } },
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
  return {arm, stop, syncPreview: (fig, key, i, si) => { syncClear(fig); if (si < 0) return false; const sy = syncFor(fig, key, i); if (sy) syncShow(fig, sy, si); return !!sy; }, playing: () => P && {key: P.key, step: P.i + 1, paused: !!(P.h && P.h.paused)}, keys: () => Object.keys(N)};
})();
