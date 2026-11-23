/* eye_flow_ui.js: "Watch aqueous humor flow", a living picture of the front of the eye (course-level, Exam 3,
   Dr. Smith's glaucoma lectures; Louis's student asked for a more realistic drawing as well as the flat schematics).

   One figure, key `ey-flow`, first in the Eye group of the Diagrams tab. It is registered in DIA like every other drawn
   figure (a static picture of the normal eye is in the markup, with the buttons and text), and this file then animates it
   when it is on the page:
     * droplets of aqueous humor are made at the ciliary processes, pass through the pupil into the anterior chamber and
       leave by the trabecular meshwork into Schlemm's canal (the main drain here) and by the smaller uveoscleral route
       (slide 14 panel A; slide 15 for the parts);
     * Normal / Open-angle glaucoma / Angle-closure glaucoma (slide 14 panels A, B, C): in the open-angle eye the meshwork
       drains poorly and droplets pile up in the anterior chamber; in angle closure the iris bows forward over the
       meshwork and no droplet reaches it;
     * drug buttons, one class at a time (slides 18, 22, 26, 32, 34, 37, 41): beta blockers, alpha-2 agonists and carbonic
       anhydrase inhibitors make fewer droplets; M3 agonists with echothiophate, and netarsudil, speed the drainage through
       the meshwork; prostaglandin agonists speed the uveoscleral drainage (and the meshwork a little); brimonidine
       adds a little uveoscleral flow. The effects are qualitative; no number is shown (the slides give none for this picture);
     * a level bar "Pressure in the eye: lower / normal / higher" follows how crowded the anterior chamber is.
   The model is a drawing aid, not a measurement: rates are chosen to make each change visible within seconds.

   Technical notes. SVG, drawn in vector units, so it is as sharp as the screen allows at any device pixel ratio; at most 118
   droplets; requestAnimationFrame only while the figure is on screen, the tab is visible and the animation is not paused;
   with prefers-reduced-motion the animation starts paused and the buttons show the settled picture, "Step" advances it.
   Buttons are at least 44 px high; one aria-live line states the condition, the drug and the pressure level.
   Storage: none. Does nothing without a page (the node checks load it for DIA only). */
const EYE_FLOW = (() => {
  const KEY = 'ey-flow';
  const GROUP = 'Eye: glaucoma, allergy and dry eye (Dr. Smith, Exam 3)';
  const NAME = 'Watch aqueous humor flow';
  const PURPOSE = 'Shows aqueous humor flowing from the ciliary body to its two drains, what changes in open-angle and angle-closure glaucoma, and where each drug class acts, so you can predict which step a drug changes and why the pressure rises when drainage fails.';
  const r1 = v => Math.round(v * 10) / 10;
  const esc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  /* ------------------------------------------------------------------ geometry (left side; the right side is its mirror) */
  const CX = 400;
  const mirrorPath = d => d.replace(/([MLCZ])([^MLCZ]*)/g, (m, c, nums) => {
    if (c === 'Z') return 'Z';
    const v = nums.trim().split(/[\s,]+/).map(Number), o = [];
    for (let i = 0; i < v.length; i += 2) o.push(r1(2 * CX - v[i]) + ' ' + v[i + 1]);
    return c + o.join(' ');
  });
  const bez = (p, t) => { const u = 1 - t; return [u*u*u*p[0][0] + 3*u*u*t*p[1][0] + 3*u*t*t*p[2][0] + t*t*t*p[3][0], u*u*u*p[0][1] + 3*u*u*t*p[1][1] + 3*u*t*t*p[2][1] + t*t*t*p[3][1]]; };
  const CORN_O = [[112, 232], [150, 82], [280, 42], [400, 42]], CORN_I = [[142, 246], [178, 118], [290, 66], [400, 66]];
  const SCL_O = [[112, 232], [84, 300], [74, 380], [94, 440]], SCL_I = [[142, 246], [124, 310], [116, 380], [130, 440]];
  const mid = (a, b, t) => { const p = bez(a, t), q = bez(b, t); return [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2]; };
  /* the inner surface of the cornea, as a polyline from the angle to the centre: [x, y] with x rising */
  const INNER = []; for (let i = 0; i <= 40; i++) INNER.push(bez(CORN_I, i / 40));
  const innerY = x => { for (let i = 1; i < INNER.length; i++) if (INNER[i][0] >= x) { const a = INNER[i - 1], b = INNER[i], f = (x - a[0]) / ((b[0] - a[0]) || 1); return a[1] + f * (b[1] - a[1]); } return INNER[INNER.length - 1][1]; };

  /* the iris: b = 0 (open angle) .. 1 (bowed forward over the meshwork) */
  const irisPts = b => ({
    up: [[148, 262 - 34 * b], [210, 258 - 30 * b], [300, 256 - 16 * b], [352, 262 - 12 * b]],
    lo: [[352, 278 - 12 * b], [300, 276 - 14 * b], [230, 284 - 24 * b], [160, 296 - 30 * b]],
  });
  const irisD = b => { const p = irisPts(b), f = v => r1(v);
    return `M${f(p.up[0][0])} ${f(p.up[0][1])} C${f(p.up[1][0])} ${f(p.up[1][1])} ${f(p.up[2][0])} ${f(p.up[2][1])} ${f(p.up[3][0])} ${f(p.up[3][1])} ` +
      `C359 ${f(p.up[3][1] + 4)} 359 ${f(p.lo[0][1] - 4)} ${f(p.lo[0][0])} ${f(p.lo[0][1])} ` +
      `C${f(p.lo[1][0])} ${f(p.lo[1][1])} ${f(p.lo[2][0])} ${f(p.lo[2][1])} ${f(p.lo[3][0])} ${f(p.lo[3][1])} Z`; };
  /* the upper surface of the iris as a polyline (x rising), for placing droplets on it */
  let IRIS_UP = [], IRIS_B = -1;
  const irisUpdate = b => { if (Math.abs(b - IRIS_B) < 0.0005) return; IRIS_B = b; const p = irisPts(b).up; IRIS_UP = []; for (let i = 0; i <= 30; i++) IRIS_UP.push(bez(p, i / 30)); };
  const irisY = x => { if (x >= 352) return IRIS_UP[IRIS_UP.length - 1][1]; if (x <= IRIS_UP[0][0]) return IRIS_UP[0][1];
    for (let i = 1; i < IRIS_UP.length; i++) if (IRIS_UP[i][0] >= x) { const a = IRIS_UP[i - 1], c = IRIS_UP[i], f = (x - a[0]) / ((c[0] - a[0]) || 1); return a[1] + f * (c[1] - a[1]); }
    return IRIS_UP[IRIS_UP.length - 1][1]; };
  irisUpdate(0);

  const PROCS = [[206, 284], [224, 300], [242, 318], [257, 334]];          /* the four ciliary processes drawn on each side */

  /* ------------------------------------------------------------------ the drawing */
  const L = id => 'efl-' + id;
  const defs = () => `<defs>
<linearGradient id="${L('vit')}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dfe9f1"/><stop offset="1" stop-color="#c4d3df"/></linearGradient>
<linearGradient id="${L('aq')}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eaf5fc"/><stop offset="1" stop-color="#cfe5f4"/></linearGradient>
<linearGradient id="${L('cor')}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4f9fc"/><stop offset="1" stop-color="#cfdee9"/></linearGradient>
<linearGradient id="${L('scl')}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f7f3ea"/><stop offset="1" stop-color="#e2d9c8"/></linearGradient>
<linearGradient id="${L('cb')}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e3b3a0"/><stop offset="1" stop-color="#b9786b"/></linearGradient>
<linearGradient id="${L('iris')}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b98a58"/><stop offset=".55" stop-color="#8f6740"/><stop offset="1" stop-color="#6d4b2d"/></linearGradient>
<radialGradient id="${L('lens')}" cx=".45" cy=".35" r=".75"><stop offset="0" stop-color="#fdf8e6"/><stop offset=".7" stop-color="#efe2b4"/><stop offset="1" stop-color="#d9c27f"/></radialGradient>
<radialGradient id="${L('drop')}" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#ffffff"/><stop offset=".35" stop-color="#7cc3ee"/><stop offset="1" stop-color="#2573b3"/></radialGradient>
<linearGradient id="${L('fade')}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--paper);stop-opacity:0"/><stop offset="1" style="stop-color:var(--paper);stop-opacity:1"/></linearGradient>
<pattern id="${L('mesh')}" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(40)"><rect width="5" height="5" fill="#d7a5ba"/><line x1="0" y1="0" x2="0" y2="5" stroke="#9b5a77" stroke-width="1.5"/></pattern>
<filter id="${L('shadow')}" x="-10%" y="-20%" width="120%" height="150%"><feDropShadow dx="0" dy="2.5" stdDeviation="2.6" flood-color="#3b2a1c" flood-opacity=".28"/></filter>
</defs>`;

  const sideTwice = d => `<path d="${d}"/><path d="${mirrorPath(d)}"/>`;
  const both = (fn) => fn(false) + fn(true);

  /* the numbered/lettered labels: id, number, lines, text-mode place (margin, with a leader to the target), num-mode place */
  const LABELS = [
    {id: 'cornea', n: 1, t: ['Cornea'], txt: [-84, 96, 'start'], tgt: () => mid(CORN_O, CORN_I, 0.14), tgtN: () => mid(CORN_O, CORN_I, 0.14)},
    {id: 'sclera', n: 2, t: ['Sclera'], txt: [-84, 372, 'start'], tgt: () => mid(SCL_O, SCL_I, 0.62), tgtN: () => mid(SCL_O, SCL_I, 0.62)},
    {id: 'tm', n: 3, t: ['Trabecular', 'meshwork'], txt: [-84, 186, 'start'], tgt: () => [146, 238], tgtN: () => [147, 238]},
    {id: 'sc', n: 4, t: ['Schlemm’s', 'canal'], txt: [-84, 268, 'start'], tgt: () => [124, 250], tgtN: () => [121, 251]},
    {id: 'uv', n: 5, t: ['Uveoscleral', 'route'], txt: [-84, 322, 'start'], tgt: () => [150, 372], tgtN: () => [152, 366]},
    {id: 'ac', n: 6, t: ['Anterior chamber'], txt: [400, 132, 'middle'], tgt: null, tgtN: () => [330, 150]},
    {id: 'pupil', n: 7, t: ['Pupil'], txt: [400, 228, 'middle'], tgt: null, tgtN: () => [400, 262]},
    {id: 'iris', n: 8, t: ['Iris'], txt: [884, 232, 'end'], tgt: () => [566, 264], tgtN: () => [256, 262]},
    {id: 'pc', n: 9, t: ['Posterior', 'chamber'], txt: [884, 296, 'end'], tgt: () => [500, 296], tgtN: () => [300, 298]},
    {id: 'lens', n: 10, t: ['Lens'], txt: [400, 344, 'middle'], tgt: null, tgtN: () => [400, 344]},
    {id: 'cb', n: 11, t: ['Ciliary body'], txt: [884, 356, 'end'], tgt: () => [638, 340], tgtN: () => [168, 338]},
    {id: 'cp', n: 12, t: ['Ciliary', 'processes'], txt: [884, 410, 'end'], tgt: () => [2 * CX - 240, 318], tgtN: () => [234, 312]},
    {id: 'vit', n: 13, t: ['Vitreous humor'], txt: [400, 412, 'middle'], tgt: null, tgtN: () => [330, 408]},
  ];
  const labelsSvg = () => {
    let s = '<g class="efl-lt" font-size="17">', n = '<g class="efl-ln">';
    LABELS.forEach(l => {
      const [x, y, a] = l.txt;
      s += '<g>';
      if (l.tgt) { const p = l.tgt(), ax = a === 'start' ? x + 6 + 8 * (Math.max(...l.t.map(q => q.length)) * 0.5) : x - 6 - 8 * (Math.max(...l.t.map(q => q.length)) * 0.5);
        const ly = y - 5 + (l.t.length - 1) * 8; s += `<path class="efl-lead" d="M${r1(a === 'start' ? Math.min(x + 8.6 * Math.max(...l.t.map(q => q.length)) + 4, p[0] - 6) : Math.max(x - 8.6 * Math.max(...l.t.map(q => q.length)) - 4, p[0] + 6))} ${ly} L${r1(p[0])} ${r1(p[1])}"/><circle class="efl-leadd" cx="${r1(p[0])}" cy="${r1(p[1])}" r="2.6"/>`; }
      s += `<text class="efl-tx" x="${x}" y="${y}" text-anchor="${a}">` + l.t.map((q, i) => `<tspan x="${x}" dy="${i ? 18 : 0}">${esc(q)}</tspan>`).join('') + '</text></g>';
      const p = l.tgtN();
      n += `<g class="efl-bd"><circle cx="${r1(p[0])}" cy="${r1(p[1])}" r="12.5"/><text x="${r1(p[0])}" y="${r1(p[1] + 5)}" text-anchor="middle">${l.n}</text></g>`;
    });
    return s + '</g>' + n + '</g>';
  };

  /* the dynamic, hydrated scene is in one function so the static markup (bow 0, no droplets) and the page use the same drawing */
  const sceneSvg = () => {
    const cornea = 'M112 232 C150 82 280 42 400 42 C520 42 650 82 688 232 L658 246 C622 118 510 66 400 66 C290 66 178 118 142 246 Z';
    const aq = 'M142 246 C178 118 290 66 400 66 C510 66 622 118 658 246 Z';
    const sclL = 'M112 232 C84 300 74 380 94 440 L130 440 C116 380 124 310 142 246 Z';
    const cbL = 'M128 250 L186 262 C214 290 252 322 262 336 C264 352 248 366 228 366 L134 366 C122 330 120 290 128 250 Z';
    const tmL = 'M139 224 L153 231 L157 253 L139 260 Z';
    const collL = 'M122 254 C110 270 96 288 82 322';
    let s = defs();
    s += `<g transform="translate(0,14)">`;
    /* back: vitreous, aqueous (anterior and posterior chamber) */
    s += `<path d="M130 440 C116 380 124 310 142 246 L658 246 C676 310 684 380 670 440 Z" fill="url(#${L('vit')})"/>`;
    s += `<path d="${aq}" fill="url(#${L('aq')})"/><rect x="190" y="244" width="420" height="104" fill="url(#${L('aq')})"/>`;
    /* ciliary bodies with muscle fibres, processes and zonules */
    s += both(m => { const d = m ? mirrorPath(cbL) : cbL; let o = `<path d="${d}" fill="url(#${L('cb')})" stroke="#a5685c" stroke-width="1.4"/>`;
      [[150, 290, 186, 340], [158, 276, 214, 346], [166, 268, 236, 350]].forEach(f => { const a = [f[0], f[1]], b = [f[2], f[3]]; const q = m ? [[2 * CX - a[0], a[1]], [2 * CX - b[0], b[1]]] : [a, b];
        o += `<path d="M${q[0][0]} ${q[0][1]} Q${(q[0][0] + q[1][0]) / 2 + (m ? 10 : -10)} ${(q[0][1] + q[1][1]) / 2 - 6} ${q[1][0]} ${q[1][1]}" fill="none" stroke="#a5685c" stroke-opacity=".45" stroke-width="1.6"/>`; });
      PROCS.forEach((p, i) => { const x = m ? 2 * CX - p[0] : p[0], rot = m ? -42 : 42;
        o += `<ellipse cx="${x}" cy="${p[1]}" rx="12" ry="5.2" transform="rotate(${rot} ${x} ${p[1]})" fill="#c98075" stroke="#a5584f" stroke-width="1"/>`;
        const lx = m ? 2 * CX - (p[0] + 14) : p[0] + 14, lx2 = m ? 2 * CX - (288 + i * 4) : 288 + i * 4;
        o += `<path d="M${lx} ${p[1] + 6} L${lx2} ${p[1] + 2 - i * 3 + 6}" stroke="#8c8c84" stroke-opacity=".55" stroke-width="1"/>`; });
      return o; });
    /* lens */
    s += `<ellipse cx="400" cy="336" rx="118" ry="56" fill="url(#${L('lens')})" stroke="#c9b273" stroke-width="1.4" filter="url(#${L('shadow')})"/>`;
    s += `<ellipse cx="372" cy="318" rx="50" ry="17" fill="#fff" fill-opacity=".32" transform="rotate(-6 372 318)"/>`;
    /* sclera */
    s += both(m => `<path d="${m ? mirrorPath(sclL) : sclL}" fill="url(#${L('scl')})" stroke="#c9bda8" stroke-width="1.4"/>`);
    /* cornea */
    s += `<path d="${cornea}" fill="url(#${L('cor')})" stroke="#9bb3c5" stroke-width="1.6"/>`;
    s += `<path d="M150 150 C190 92 290 56 400 53" fill="none" stroke="#fff" stroke-opacity=".8" stroke-width="3" stroke-linecap="round"/>`;
    /* trabecular meshwork, Schlemm's canal and its outflow channel */
    s += both(m => { const t = m ? mirrorPath(tmL) : tmL, c = m ? mirrorPath(collL) : collL, cx = m ? 2 * CX - 128 : 128;
      return `<path d="${c}" fill="none" stroke="#8fbfe3" stroke-width="6" stroke-linecap="round"/><path d="${c}" fill="none" stroke="#4d8fc4" stroke-width="1.2" stroke-opacity=".7" stroke-linecap="round"/>` +
        `<ellipse cx="${cx}" cy="246" rx="6.6" ry="11" fill="#8fc2e6" stroke="#3f7fb0" stroke-width="1.4"/>` +
        `<path d="${t}" fill="url(#${L('mesh')})" stroke="#8a4f6a" stroke-width="1.2"/>`; });
    /* iris (moves with the angle-closure mode) */
    s += both(m => `<path class="efl-iris${m ? 'R' : 'L'}" d="${m ? mirrorPath(irisD(0)) : irisD(0)}" fill="url(#${L('iris')})" stroke="#5e4026" stroke-width="1.3" filter="url(#${L('shadow')})"/>`);
    /* the two routes, as faint guides under the droplets */
    s += both(m => { const t = 'M168 242 C156 240 144 242 128 246 C112 258 92 284 82 324', u = 'M178 262 C176 292 164 332 150 372 C142 400 138 420 136 436';
      return `<path class="efl-route efl-route-tm" d="${m ? mirrorPath(t) : t}"/><path class="efl-route efl-route-uv" d="${m ? mirrorPath(u) : u}"/>`; });
    /* where the chosen drug acts: soft rings, shown by the drug button */
    s += both(m => { const o = (x, y, rx, ry, c, rot) => `<ellipse class="efl-h ${c}" cx="${m ? 2 * CX - x : x}" cy="${y}" rx="${rx}" ry="${ry}"${rot ? ` transform="rotate(${m ? -rot : rot} ${m ? 2 * CX - x : x} ${y})"` : ''}/>`;
      return o(232, 312, 42, 30, 'efl-h-cp', 42) + o(146, 242, 22, 26, 'efl-h-tm') + o(128, 246, 15, 19, 'efl-h-sc') + o(170, 322, 40, 52, 'efl-h-cm', 20); });
    /* droplets: the group is filled by the script */
    s += '<g class="efl-parts"></g>';
    s += `<rect x="60" y="360" width="680" height="86" fill="url(#${L('fade')})" pointer-events="none"/>`;
    s += labelsSvg();
    s += '</g>';
    return s;
  };

  const SVG_OPEN = '<svg class="efl-svg" viewBox="-90 0 980 456" role="img" aria-label="Cross-section of the front of the eye: cornea, sclera, iris, pupil, lens, ciliary body, anterior and posterior chambers, trabecular meshwork and Schlemm’s canal, with droplets of aqueous humor flowing to the drains." preserveAspectRatio="xMidYMid meet">';

  /* ------------------------------------------------------------------ text */
  const MODES = {
    normal: {b: 'Normal', status: 'Normal drainage', txt: 'The ciliary body makes aqueous humor. It flows through the pupil into the anterior chamber and drains through the trabecular meshwork into Schlemm’s canal, and by the smaller uveoscleral route (slide 14, panel A).'},
    poag: {b: 'Open-angle glaucoma', status: 'Open-angle glaucoma', txt: 'The angle is open, but the trabecular meshwork does not drain well, so the liquid keeps being made and builds up in the anterior chamber (slide 14, panel B; slide 13: POAG is related to the drainage system not working effectively).'},
    pacg: {b: 'Angle-closure glaucoma', status: 'Angle-closure glaucoma', txt: 'Forward bowing of the iris blocks trabecular meshwork drainage, so the liquid cannot reach the drain (slide 14, panel C). Slide 13: a medical emergency, and the pressure must be lowered quickly.'},
  };
  const DRUGS = {
    none: {b: 'No drug', status: 'No drug', txt: 'Pick a drug class to see which step of the flow it changes.', f: {in: 1, tm: 1, uv: 1}, hl: ''},
    beta: {b: 'Beta blockers', status: 'Beta blockers', txt: 'Beta blockers (slide 18): block the beta-adrenergic receptor on the ciliary body. Less aqueous humor is made; not much effect on outflow.', f: {in: 0.6, tm: 1, uv: 1}, hl: 'cp'},
    alpha2: {b: 'Alpha-2 agonists', status: 'Alpha-2 agonists', txt: 'Alpha-2 agonists (slide 22): bind alpha-2 receptors on the ciliary body. They decrease the rate of aqueous humor production; brimonidine also gives some increase in uveoscleral outflow.', f: {in: 0.65, tm: 1, uv: 1.7}, hl: 'cp'},
    cai: {b: 'Carbonic anhydrase inhibitors', status: 'Carbonic anhydrase inhibitors', txt: 'Carbonic anhydrase inhibitors (slide 26): block carbonic anhydrase, so less sodium and bicarbonate are available for secretion and the ciliary body secretes less aqueous humor.', f: {in: 0.6, tm: 1, uv: 1}, hl: 'cp'},
    m3: {b: 'M3 agonists, echothiophate', status: 'M3 agonists and echothiophate', txt: 'M3 agonists (slide 32) and echothiophate, an irreversible acetylcholinesterase inhibitor that raises acetylcholine (slide 34): they contract the sphincter muscle and the trabecular meshwork, which increases outflow.', f: {in: 1, tm: 1.9, uv: 1}, hl: 'tm'},
    rho: {b: 'Netarsudil', status: 'Netarsudil', txt: 'Netarsudil, a Rho kinase inhibitor (slide 41): may lower the resistance to outflow through the trabecular meshwork by relaxing its tone, with fewer fibrosis-related protein deposits, and by changing the permeability of the cells lining Schlemm’s canal.', f: {in: 1, tm: 1.9, uv: 1}, hl: 'tm sc'},
    pg: {b: 'Prostaglandin agonists', status: 'Prostaglandin agonists', txt: 'Prostaglandin agonists (slide 37): agonist at the PGF2α receptor, relaxing the ciliary muscle. They increase uveoscleral and, to a lesser extent, trabecular outflow, and do not affect aqueous humor production.', f: {in: 1, tm: 1.25, uv: 3.4}, hl: 'cm'},
  };
  const DRUG_ORDER = ['none', 'beta', 'alpha2', 'cai', 'm3', 'rho', 'pg'];
  const WHAT = 'What this shows. Each droplet stands for aqueous humor. The ciliary body makes it (slides 15 and 16); it passes through the pupil into the anterior chamber and drains by the trabecular meshwork and Schlemm’s canal, and by the smaller uveoscleral route (slide 14, panel A). In open-angle glaucoma the meshwork drains poorly (panel B); in angle closure the iris bows forward and blocks it (panel C). The drug buttons change one step each. The droplet count shows how crowded the chamber is, not a measured pressure.';
  const FIGCAP = 'Drawn after Dr. Smith’s Eye slides 14–16, 18, 22, 26, 32, 34, 37 and 41. The drawing is a teaching picture, not an anatomical measurement: the speeds and the number of droplets are chosen to make each change visible.';

  const buttons = (attr, ord, map, first) => ord.map(k => `<button type="button" class="chip efl-b" data-efl-${attr}="${k}" aria-pressed="${k === first ? 'true' : 'false'}">${esc(map[k].b)}</button>`).join('');
  const markup = () => `<figure class="fig efl" data-efl="1" data-eflmode="normal" data-efldrug="none">` +
    `<p class="dnpurpose"><b>Purpose.</b> ${esc(PURPOSE)}</p>` +
    `<div class="efl-stage">${SVG_OPEN}${sceneSvg()}</svg></div>` +
    `<div class="efl-gauge"><div class="efl-gl"><b>Pressure in the eye</b></div><div class="efl-bar" aria-hidden="true"><div class="efl-fill"></div><div class="efl-tick" style="left:33.3%"></div><div class="efl-tick" style="left:66.6%"></div></div>` +
    `<div class="efl-gs" aria-hidden="true"><span>lower</span><span>normal</span><span>higher</span></div></div>` +
    `<p class="efl-status" role="status" aria-live="polite">Normal drainage, no drug. Pressure in the eye: normal.</p>` +
    `<div class="efl-ctl"><div class="efl-grp" role="group" aria-label="Condition"><span class="efl-gt">Condition</span>${buttons('mode', ['normal', 'poag', 'pacg'], MODES, 'normal')}</div>` +
    `<div class="efl-grp" role="group" aria-label="Drug class acting (one at a time)"><span class="efl-gt">Drug acting</span>${buttons('drug', DRUG_ORDER, DRUGS, 'none')}</div>` +
    `<div class="efl-grp efl-play"><button type="button" class="chip efl-b" data-efl-pause="1" aria-pressed="false">Pause</button><button type="button" class="chip efl-b efl-step" data-efl-step="1">Step</button></div></div>` +
    `<div class="efl-info"><p class="efl-mt">${esc(MODES.normal.txt)}</p><p class="efl-dt">${esc(DRUGS.none.txt)}</p></div>` +
    `<ol class="efl-legend" aria-label="Parts of the eye">${LABELS.map(l => `<li value="${l.n}">${esc(l.t.join(' '))}</li>`).join('')}</ol>` +
    `<p class="efl-what">${esc(WHAT)}</p>` +
    `<figcaption>${esc(FIGCAP)}</figcaption></figure>`;

  const CSS = `
.fig.efl{max-width:1000px;padding:10px 12px 8px}
.efl .dnpurpose{margin:2px 0 8px;font-size:13.5px;line-height:1.45}
.efl .efl-stage{position:relative;line-height:0;margin:0 -4px}
.efl .efl-svg{width:100%;height:auto;display:block}
.efl .efl-tx{fill:var(--text);font-size:17px;paint-order:stroke;stroke:#fff;stroke-width:4px;stroke-linejoin:round;font-weight:600}
.efl .efl-lead{fill:none;stroke:var(--text-dim);stroke-width:1.1}.efl .efl-leadd{fill:var(--text-dim)}
.efl .efl-bd circle{fill:var(--ink);stroke:#fff;stroke-width:2}.efl .efl-bd text{fill:#fff;font-size:15px;font-weight:700}
.efl .efl-ln{display:none}.efl.efl-num .efl-ln{display:inline}.efl.efl-num .efl-lt{display:none}
.efl .efl-legend{display:none;margin:8px 0 2px;padding:0;list-style:none;columns:2;column-gap:14px;font-size:13px;line-height:1.7;color:var(--text)}
.efl.efl-num .efl-legend{display:block}
.efl .efl-legend li{break-inside:avoid;list-style:none}
.efl .efl-legend li::before{content:attr(value) ".";display:inline-block;min-width:1.7em;font-weight:700;color:var(--accent)}
.efl .efl-route{fill:none;stroke:var(--accent);stroke-opacity:.38;stroke-width:2;stroke-dasharray:5 6;stroke-linecap:round}
.efl .efl-route-uv{stroke-width:1.4;stroke-opacity:.32}
.efl .efl-h{fill:#fff3b0;fill-opacity:.42;stroke:#c98a00;stroke-width:2;stroke-dasharray:4 3;opacity:0;transition:opacity .25s;pointer-events:none}
.efl[data-efldrug="beta"] .efl-h-cp,.efl[data-efldrug="alpha2"] .efl-h-cp,.efl[data-efldrug="cai"] .efl-h-cp,.efl[data-efldrug="m3"] .efl-h-tm,.efl[data-efldrug="rho"] .efl-h-tm,.efl[data-efldrug="rho"] .efl-h-sc,.efl[data-efldrug="pg"] .efl-h-cm{opacity:1}
.efl .efl-parts circle{fill:url(#efl-drop);stroke:#1f6aa5;stroke-width:.7}
.efl .efl-gauge{display:grid;grid-template-columns:auto 1fr;column-gap:12px;row-gap:2px;align-items:center;margin:10px 0 2px}
.efl .efl-gl{font-size:14px;grid-row:1;grid-column:1}
.efl .efl-bar{grid-row:1;grid-column:2;position:relative;height:14px;border:1px solid var(--line);border-radius:7px;background:var(--surface);overflow:hidden}
.efl .efl-fill{position:absolute;left:0;top:0;bottom:0;width:50%;background:var(--accent);border-radius:6px;transition:background-color .3s}
.efl[data-eflhi="1"] .efl-fill{background:var(--bad)}.efl[data-eflhi="0"] .efl-fill{background:var(--ok)}
.efl .efl-tick{position:absolute;top:0;bottom:0;width:1px;background:var(--line)}
.efl .efl-gs{grid-row:2;grid-column:2;display:flex;justify-content:space-between;font-size:12px;color:var(--text-dim)}
.efl .efl-gs span:nth-child(2){position:absolute;left:50%;transform:translateX(-50%)}.efl .efl-gs{position:relative;height:16px}
.efl .efl-status{margin:6px 0 8px;font-size:14px;font-weight:600;color:var(--text)}
.efl .efl-ctl{display:flex;flex-direction:column;gap:8px}
.efl .efl-grp{display:flex;flex-wrap:wrap;gap:6px;align-items:center}
.efl .efl-gt{flex:1 0 100%;font-size:12.5px;font-weight:600;color:var(--text-dim)}
.efl .efl-b{min-height:44px;font-size:14px;padding:6px 14px}
.efl .efl-b:focus-visible{outline:3px solid var(--accent);outline-offset:2px}
.efl .efl-step{display:none}.efl.efl-rm .efl-step{display:inline-flex}
.efl .efl-info{margin:10px 0 4px;padding:8px 10px;border:1px solid var(--line);border-left:4px solid var(--accent);border-radius:6px;background:var(--accent-bg)}
.efl .efl-info p{margin:0 0 4px;font-size:14px;line-height:1.5}.efl .efl-info p:last-child{margin:0}
.efl .efl-what{font-size:13.5px;line-height:1.5;color:var(--text);margin:8px 2px 2px}
@media (min-width:760px){.efl .efl-ctl{flex-direction:row;flex-wrap:wrap;gap:8px 22px}.efl .efl-gt{flex:0 0 auto;margin-right:4px}}
#v-diagrams .diagrid>div:has(figure.efl){grid-column:1/-1}`;

  /* ------------------------------------------------------------------ registration (DIA, the name, the Eye group first) */
  const reg = () => {
    if (typeof DIA === 'undefined' || !DIA) return;
    DIA[KEY] = markup();
    if (typeof DIA_NAMES !== 'undefined' && DIA_NAMES) DIA_NAMES[KEY] = NAME;
    if (typeof DIAGRAMS !== 'undefined' && Array.isArray(DIAGRAMS)) {
      let g = DIAGRAMS.find(x => x[0] === GROUP);
      if (!g) { g = [GROUP, []]; DIAGRAMS.push(g); }
      if (g[1].indexOf(KEY) < 0) g[1].unshift(KEY);
    }
  };
  reg();

  /* ------------------------------------------------------------------ the simulation (no DOM) */
  const CAP = 118, I0 = 5.0, UV0 = 0.9, TMB = 4.1, Q0 = 16;
  const MODE_TM = {normal: 1, poag: 0.3, pacg: 0};
  const V_IN = 150, V_AC = 120, V_OUT = 95;
  const polyLen = pts => { const c = [0]; for (let i = 1; i < pts.length; i++) c.push(c[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1])); return c; };
  const alongP = (pts, cum, s) => { if (s <= 0) return pts[0]; const n = pts.length - 1; if (s >= cum[n]) return pts[n];
    let i = 1; while (cum[i] < s) i++; const f = (s - cum[i - 1]) / ((cum[i] - cum[i - 1]) || 1); return [pts[i - 1][0] + f * (pts[i][0] - pts[i - 1][0]), pts[i - 1][1] + f * (pts[i][1] - pts[i - 1][1])]; };
  const smooth = pts => { /* Catmull-Rom through the points, so a droplet follows a curve, not corners */
    const o = []; for (let i = 0; i < pts.length - 1; i++) { const p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(pts.length - 1, i + 2)];
      for (let t = 0; t < 1; t += 0.2) { const t2 = t * t, t3 = t2 * t;
        o.push([0.5 * ((2 * p1[0]) + (-p0[0] + p2[0]) * t + (2 * p0[0] - 5 * p1[0] + 4 * p2[0] - p3[0]) * t2 + (-p0[0] + 3 * p1[0] - 3 * p2[0] + p3[0]) * t3),
                0.5 * ((2 * p1[1]) + (-p0[1] + p2[1]) * t + (2 * p0[1] - 5 * p1[1] + 4 * p2[1] - p3[1]) * t2 + (-p0[1] + 3 * p1[1] - 3 * p2[1] + p3[1]) * t3)]); } }
    o.push(pts[pts.length - 1]); return o; };
  /* the paths of a droplet (left side) */
  const PIN = PROCS.map(p => { const s0 = [p[0] + 10, p[1] - 4]; return smooth([s0, [p[0] + 26, p[1] - 6], [292, 302], [318, 293], [342, 284], [362, 278], [374, 264]]); });
  const PIN_C = PIN.map(polyLen);
  const OUT_TM = smooth([[156, 240], [146, 241], [130, 245], [121, 256], [103, 276], [88, 300], [80, 324]]);
  const OUT_UV = smooth([[178, 262], [175, 292], [165, 330], [150, 372], [141, 412], [137, 438]]);
  const GATE_X = 164;

  const newSim = () => ({mode: 'normal', drug: 'none', bow: 0, t: 0, parts: [], waitL: [], waitR: [], spawn: 0, tmAcc: 0, uvAcc: 0, slotsL: [], slotsB: -1, seed: 7, level: 0.5, count: 0});
  const rnd = s => { s.seed = (s.seed * 1664525 + 1013904223) % 4294967296; return s.seed / 4294967296; };
  const slotsFor = bow => { /* resting places inside the left half of the anterior chamber, nearest the drain first */
    irisUpdate(bow); const pts = [], gy = irisY(GATE_X) - 12;
    for (let row = 0, y = 0; ; row++) { y = 232 - row * 9.4; if (y < 70) break;
      for (let x = 158 + (row % 2 ? 5.5 : 0); x < 396; x += 11) { const top = innerY(x) + 8, bot = irisY(x) - 7; if (y > top && y < bot) pts.push([x, y, Math.hypot(x - 160, (y - gy) * 1.15)]); } }
    pts.sort((a, b) => a[2] - b[2]); return pts; };
  const rates = s => { const d = DRUGS[s.drug].f, w = s.waitL.length + s.waitR.length;
    return {inflow: I0 * d.in, tm: TMB * MODE_TM[s.mode] * d.tm * (0.4 + 0.6 * w / Q0), uv: UV0 * d.uv}; };

  const step = (s, dt, pool) => {
    s.t += dt;
    const tb = s.mode === 'pacg' ? 1 : 0, nb = s.bow + (tb - s.bow) * Math.min(1, dt * 1.1);
    s.bow = Math.abs(tb - nb) < 0.002 ? tb : nb;
    irisUpdate(s.bow);
    if (Math.abs(s.slotsB - s.bow) > 0.01) { s.slotsL = slotsFor(s.bow); s.slotsB = s.bow; irisUpdate(s.bow); }
    const R = rates(s);
    /* spawn at the ciliary processes */
    s.spawn += R.inflow * dt;
    while (s.spawn >= 1) { s.spawn -= 1; if (s.parts.length >= CAP) continue;
      const side = rnd(s) < 0.5 ? 0 : 1, k = Math.floor(rnd(s) * PROCS.length), p = {side, ph: 'in', k, s: 0, off: 12 + rnd(s) * 20, jp: rnd(s) * 6.28, x: PIN[k][0][0], y: PIN[k][0][1], el: null, r: 3.7 + rnd(s) * 0.9};
      s.parts.push(p); }
    s.tmAcc = Math.min(1, s.tmAcc + R.tm * dt); s.uvAcc = Math.min(1, s.uvAcc + R.uv * dt);
    /* queue exits */
    const takeWait = () => { const a = s.waitL[0], b = s.waitR[0]; if (!a && !b) return null; if (a && b) return a.wt <= b.wt ? s.waitL.shift() : s.waitR.shift(); return a ? s.waitL.shift() : s.waitR.shift(); };
    let guard = 4;
    while (s.tmAcc >= 1 && guard-- > 0 && (s.waitL.length || s.waitR.length)) { const p = takeWait(); s.tmAcc -= 1;
      const pts = smooth([[p.x, p.y]].concat(OUT_TM)); p.ph = 'tm'; p.pts = pts; p.cum = polyLen(pts); p.s = 0; p.sp = Math.min(2, DRUGS[s.drug].f.tm) * V_OUT; }
    guard = 4;
    while (s.uvAcc >= 1 && guard-- > 0 && (s.waitL.length || s.waitR.length)) { const p = takeWait(); s.uvAcc -= 1;
      const pts = smooth([[p.x, p.y]].concat(OUT_UV)); p.ph = 'uv'; p.pts = pts; p.cum = polyLen(pts); p.s = 0; p.sp = V_OUT * 0.9; }
    /* move */
    for (let i = s.parts.length - 1; i >= 0; i--) { const p = s.parts[i];
      if (p.ph === 'in') { p.s += V_IN * dt; const pos = alongP(PIN[p.k], PIN_C[p.k], p.s);
        p.x = pos[0]; p.y = pos[1];
        if (p.s >= PIN_C[p.k][PIN_C[p.k].length - 1]) { p.ph = 'ac'; p.ax = 376; p.y = irisY(376) - p.off; } }
      else if (p.ph === 'ac') { p.ax -= V_AC * dt * (0.8 + 0.4 * Math.sin(p.jp + s.t)); const ty = irisY(p.ax) - p.off - 4 * Math.sin(p.jp + s.t * 1.7);
        p.x = p.ax; p.y += (ty - p.y) * Math.min(1, dt * 6);
        if (p.ax <= GATE_X + 4 + rnd(s) * 6) { p.ph = 'wait'; p.wt = s.t; (p.side ? s.waitR : s.waitL).push(p); } }
      else if (p.ph === 'wait') { const q = (p.side ? s.waitR : s.waitL), k = q.indexOf(p), sl = s.slotsL[Math.min(k, s.slotsL.length - 1)];
        if (sl) { const f = Math.min(1, dt * 5); p.x += (sl[0] - p.x) * f; p.y += (sl[1] - p.y) * f; } }
      else { p.s += p.sp * dt; const pos = alongP(p.pts, p.cum, p.s); p.x = p.side ? 2 * CX - pos[0] : pos[0]; p.y = pos[1];
        if (p.s >= p.cum[p.cum.length - 1]) { s.parts.splice(i, 1); if (p.el) pool.push(p.el), p.el.setAttribute('r', 0); } }
    }
    /* the in-flight/ac droplets of the left half are x-mirrored for side 1 when drawn; waiting droplets already carry left-half x */
    const w = s.waitL.length + s.waitR.length;
    const target = Math.max(0.03, Math.min(1, 0.5 + 0.2 * Math.log2(Math.max(0.06, w / 21))));
    s.level += (target - s.level) * Math.min(1, dt * 1.4);
    s.count = w;
  };
  /* where a droplet is drawn (right-hand droplets in the 'in', 'ac' and 'wait' phases are mirrored) */
  const drawPos = p => (p.ph === 'tm' || p.ph === 'uv') ? [p.x, p.y] : [p.side ? 2 * CX - p.x : p.x, p.y];
  const levelWord = lv => lv < 0.36 ? 'lower' : lv > 0.64 ? 'higher' : 'normal';

  /* ------------------------------------------------------------------ the page: one instance per figure on the page */
  const reduced = () => { try { return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches); } catch (e) { return false; } };
  const statsAll = {n: 0, ms: 0, win: []};
  const inst = new WeakMap();
  const live = new Set();

  function build(fig){
    if (inst.has(fig)) return inst.get(fig);
    const svg = fig.querySelector('.efl-svg'), g = fig.querySelector('.efl-parts'); if (!svg || !g) return null;
    const I = {fig, svg, g, sim: newSim(), pool: [], vis: true, paused: false, raf: 0, last: 0, rm: reduced(), els: {
      iL: fig.querySelector('.efl-irisL'), iR: fig.querySelector('.efl-irisR'),
      fill: fig.querySelector('.efl-fill'), status: fig.querySelector('.efl-status'), mt: fig.querySelector('.efl-mt'), dt: fig.querySelector('.efl-dt'), pause: fig.querySelector('[data-efl-pause]')},
      lastWord: '', lastSay: 0, io: null, ro: null};
    for (let i = 0; i < CAP; i++) { const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle'); c.setAttribute('r', 0); c.setAttribute('cx', 0); c.setAttribute('cy', 0); g.appendChild(c); I.pool.push(c); }
    inst.set(fig, I);
    /* a settled picture to start from */
    warm(I, 7); render(I, true);
    if (I.rm) { I.paused = true; fig.classList.add('efl-rm'); if (I.els.pause) { I.els.pause.setAttribute('aria-pressed', 'true'); I.els.pause.textContent = 'Play'; } }
    fitMode(I);
    try { if (typeof ResizeObserver !== 'undefined') { I.ro = new ResizeObserver(() => fitMode(I)); I.ro.observe(fig); } } catch (e) { /* the labels stay as set */ }
    try { if (typeof IntersectionObserver !== 'undefined') { I.io = new IntersectionObserver(es => { I.vis = es.some(e => e.isIntersecting); kick(I); }, {rootMargin: '80px'}); I.io.observe(fig); } } catch (e) { I.vis = true; }
    live.add(I); kick(I);
    return I;
  }
  function fitMode(I){
    const w = I.fig.getBoundingClientRect().width || 0; if (!w) return;
    const num = w < 720, half = w < 560;
    I.fig.classList.toggle('efl-num', num);
    const vb = num ? '60 0 440 456' : '-90 0 980 456';
    if (I.svg.getAttribute('viewBox') !== vb) I.svg.setAttribute('viewBox', vb);
    I.svg.style.maxWidth = num ? '640px' : '';
    if (half) I.svg.style.margin = '0 auto'; else I.svg.style.margin = '';
  }
  function warm(I, sec){ const dt = 0.05; for (let t = 0; t < sec; t += dt) step(I.sim, dt, I.pool); }
  function assign(I){ I.sim.parts.forEach(p => { if (!p.el) { p.el = I.pool.pop() || null; } }); }
  function render(I, force){
    assign(I); const s = I.sim;
    s.parts.forEach(p => { if (!p.el) return; const q = drawPos(p), jx = p.ph === 'wait' ? Math.sin(s.t * 2.2 + p.jp) * 1.1 : 0, jy = p.ph === 'wait' ? Math.cos(s.t * 1.9 + p.jp) * 1.1 : 0;
      p.el.setAttribute('cx', r1(q[0] + jx)); p.el.setAttribute('cy', r1(q[1] + jy)); p.el.setAttribute('r', p.ph === 'uv' ? p.r * 0.82 : p.r);
      let op = 0.92; if ((p.ph === 'tm' || p.ph === 'uv') && p.s > p.cum[p.cum.length - 1] * 0.72) op = Math.max(0, 0.92 * (1 - (p.s / p.cum[p.cum.length - 1] - 0.72) / 0.28));
      if (p.ph === 'in' && p.s < 14) op = 0.92 * p.s / 14;
      const o = String(r1(op)); if (p.o !== o) { p.o = o; p.el.setAttribute('opacity', o); } });
    if (I.iBow !== s.bow || force) { I.iBow = s.bow; const d = irisD(s.bow), m = mirrorPath(d); if (I.els.iL) I.els.iL.setAttribute('d', d); if (I.els.iR) I.els.iR.setAttribute('d', m); }
    const lv = s.level; if (I.els.fill) I.els.fill.style.width = (lv * 100).toFixed(1) + '%';
    const word = levelWord(lv); I.fig.setAttribute('data-eflhi', word === 'higher' ? '1' : word === 'lower' ? '0' : '');
    if (word !== I.lastWord) { I.lastWord = word; say(I, force); }
  }
  function sayText(I){ const s = I.sim; return `${MODES[s.mode].status}, ${s.drug === 'none' ? 'no drug' : DRUGS[s.drug].status}. Pressure in the eye: ${levelWord(s.level)}.`; }
  function say(I, force){ const now = (typeof performance !== 'undefined' ? performance.now() : 0); if (!force && now - I.lastSay < 2500) { I.pendingSay = true; return; } I.lastSay = now; I.pendingSay = false; if (I.els.status) I.els.status.textContent = sayText(I); }
  function frame(I, ts){
    I.raf = 0; if (!I.fig.isConnected) { stop(I); live.delete(I); return; }
    if (!(I.vis && !document.hidden && !I.paused)) { I.last = 0; return; }
    const t0 = performance.now(); const dt = I.last ? Math.min(0.05, (ts - I.last) / 1000) : 0.016; I.last = ts;
    step(I.sim, dt, I.pool); render(I);
    if (I.pendingSay && t0 - I.lastSay >= 2500) say(I, true);
    const ms = performance.now() - t0; statsAll.n++; statsAll.ms += ms; statsAll.win.push(ms); if (statsAll.win.length > 240) statsAll.win.shift();
    I.raf = requestAnimationFrame(ts2 => frame(I, ts2));
  }
  function kick(I){ if (!I.raf && I.vis && !document.hidden && !I.paused) { I.last = 0; I.raf = requestAnimationFrame(ts => frame(I, ts)); } }
  function stop(I){ if (I.raf) { cancelAnimationFrame(I.raf); I.raf = 0; } }
  function settle(I){ /* when not animating, show the settled picture of the new setting */ if (I.paused || I.rm) { warm(I, 14); render(I, true); } }

  function setMode(I, m){ if (!MODES[m]) return; const f = I.fig; I.sim.mode = m; f.setAttribute('data-eflmode', m);
    f.querySelectorAll('[data-efl-mode]').forEach(b => b.setAttribute('aria-pressed', b.getAttribute('data-efl-mode') === m ? 'true' : 'false'));
    const el = I.els.mt; if (el) el.textContent = MODES[m].txt; I.lastWord = levelWord(I.sim.level); say(I, true); settle(I); }
  function setDrug(I, d){ if (!DRUGS[d]) return; const f = I.fig; I.sim.drug = d; f.setAttribute('data-efldrug', d);
    f.querySelectorAll('[data-efl-drug]').forEach(b => b.setAttribute('aria-pressed', b.getAttribute('data-efl-drug') === d ? 'true' : 'false'));
    const el = I.els.dt; if (el) el.textContent = DRUGS[d].txt; I.lastWord = levelWord(I.sim.level); say(I, true); settle(I); }

  if (typeof document !== 'undefined' && document.body && document.head) {
    if (!document.getElementById('eflcss')) { const st = document.createElement('style'); st.id = 'eflcss'; st.textContent = CSS; document.head.appendChild(st); }
    const scan = root => { if (!root || !root.querySelectorAll) return; if (root.matches && root.matches('figure.efl[data-efl]')) build(root); root.querySelectorAll('figure.efl[data-efl]').forEach(build); };
    document.addEventListener('click', e => {
      const t = e.target && e.target.closest ? e.target.closest('.efl [data-efl-mode], .efl [data-efl-drug], .efl [data-efl-pause], .efl [data-efl-step]') : null; if (!t) return;
      const fig = t.closest('figure.efl'), I = fig && build(fig); if (!I) return;
      if (t.hasAttribute('data-efl-mode')) setMode(I, t.getAttribute('data-efl-mode'));
      else if (t.hasAttribute('data-efl-drug')) setDrug(I, t.getAttribute('data-efl-drug'));
      else if (t.hasAttribute('data-efl-pause')) { I.paused = !I.paused; t.setAttribute('aria-pressed', I.paused ? 'true' : 'false'); t.textContent = I.paused ? 'Play' : 'Pause'; if (I.paused) stop(I); else kick(I); }
      else { warm(I, 1.5); render(I, true); I.lastSay = 0; say(I, true); }
    });
    document.addEventListener('visibilitychange', () => { live.forEach(I => { if (document.hidden) stop(I); else kick(I); }); });
    try { scan(document.body); new MutationObserver(recs => recs.forEach(r => r.addedNodes.forEach(scan))).observe(document.body, {childList: true, subtree: true}); } catch (e) { /* the static picture stays */ }
  }

  const stats = () => ({frames: statsAll.n, avgMs: statsAll.win.length ? statsAll.win.reduce((a, b) => a + b, 0) / statsAll.win.length : 0, maxMs: statsAll.win.length ? Math.max.apply(null, statsAll.win) : 0});
  return {KEY, MODES, DRUGS, LABELS, CAP, newSim, step, rates, levelWord, stats, markup, irisD, mirrorPath, instance: fig => inst.get(fig), setMode, setDrug};
})();
