/* ==========================================================================
   DIAGRAM_FX_FA2: Agent A's round-3 extension (Exam 3 eye figures drawn to match the lecture slides)
   ==========================================================================
   Course file, loaded after diagram_fx_fa.js and before diagrams_ey_fa2.js. It does not edit
   diagram_fx.js or diagram_fx_fa.js (it uses Anat.fa from the latter). It adds:
     * CSS: the six drug-class colours (--c1..--c6, the Guides' colours, with dark variants) as chips,
       text, dots and leaders; the slide-15 lens in orange; the neutral iris; conjunctiva, pars plana,
       ciliary epithelium; the slide-16 ciliary process (pink body, red vessels, receptors, enzyme).
     * Anat.fa2.eye     the anterior segment drawn as Smith slide 15 draws it (cornea arching to the
                        top right, sclera at the left, lens at the right) with every part the slide
                        labels: cornea, trabecular meshwork, Schlemm's canal, conjunctiva, anterior
                        chamber, aqueous flow, iris, lens, sclera, pars plana, posterior chamber,
                        ciliary processes, ciliary muscle, ciliary epithelium. Label defaults are those
                        of the "name the parts" step; o.lab overrides one label.
     * Anat.fa2.key     the fixed colour key (colour chip and the slide's word).
     * Anat.fa2.dome    the eye as slide 14 draws it: a front-to-back section with the angle on each
                        side (panel A normal, B open angle with a dysfunctional meshwork, C iris bowed
                        forward over the meshwork).
     * Anat.fa2.proc    the zoom on a ciliary process of slide 16 (receptors, carbonic anhydrase,
                        ciliary blood supply).
     * Anat.fa2.cls     class-coloured chip, dot, leader and text helpers.
   Rules kept: coordinates are mapped in JS (no transform attribute), every shape has a data-k,
   colours only through classes, no gradients and no filters, motion only by the fx classes.
   ========================================================================== */
const DIAGRAM_FX_FA2_CSS = `
.fig{--c1:#2f5fa8;--c2:#1f7a4d;--c3:#a85d00;--c4:#6d42b8;--c5:#b23a2e;--c6:#a02c72}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]) .fig{--c1:#8fb2f0;--c2:#6fcf9b;--c3:#f0b45e;--c4:#b99af0;--c5:#f09a8f;--c6:#f08fc4}}
:root[data-theme="dark"] .fig{--c1:#8fb2f0;--c2:#6fcf9b;--c3:#f0b45e;--c4:#b99af0;--c5:#f09a8f;--c6:#f08fc4}
.fig .fa-lens{fill:var(--warn);fill-opacity:.4;stroke:var(--warn);stroke-width:1.5}
.fig .fa-iris{fill:var(--surface);stroke:var(--text-dim);stroke-width:1.6}
.fig .fa-conj{fill:var(--accent);fill-opacity:.25;stroke:var(--accent);stroke-width:1}
.fig .fa-pp{fill:var(--at-o);fill-opacity:.45;stroke:var(--at-o);stroke-width:1}
.fig .fa-epi{fill:none;stroke:var(--at-o);stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}
.fig .fa-vit{fill:var(--surface);stroke:none}
.fig .fa-key{stroke-width:1.2}
.fig .fa-halo{paint-order:stroke;stroke:var(--paper);stroke-width:3.5px;stroke-linejoin:round}
.fig .fa-zoomc{fill:var(--surface);stroke:var(--text-dim);stroke-width:1.4}
.fig .fa-pink{fill:var(--bad-bg);stroke:var(--at-o);stroke-width:1.6}
.fig .fa-stroma{fill:var(--paper);stroke:var(--at-o);stroke-width:.8;stroke-opacity:.5}
.fig .fa-vesl{fill:none;stroke:var(--bad);stroke-width:8;stroke-linecap:round}
.fig .fa-rec{fill:var(--paper);stroke:var(--text-dim);stroke-width:1.5}
.fig .fa-enz{fill:var(--accent);fill-opacity:.35;stroke:var(--accent);stroke-width:1.5}
.fig .fa-prok{fill:none;stroke:var(--text-dim);stroke-width:1.2}
.fig .fa-dim-line{fill:none;stroke:var(--text-dim);stroke-width:1;stroke-dasharray:3 3}
.fig .fa-m3{fill:var(--text);font-size:11.5px;font-weight:700}
.fig .fa-flowd{fill:none;stroke:var(--accent);stroke-width:2.2;stroke-linecap:round}
.fig .fa-cellp{fill:var(--bad-bg);stroke:var(--at-o);stroke-width:1.6}
.fig .fa-chk1{fill:var(--c1);fill-opacity:.13;stroke:var(--c1);stroke-width:1.4}
.fig .fa-chk2{fill:var(--c2);fill-opacity:.13;stroke:var(--c2);stroke-width:1.4}
.fig .fa-chk3{fill:var(--c3);fill-opacity:.13;stroke:var(--c3);stroke-width:1.4}
.fig .fa-chk4{fill:var(--c4);fill-opacity:.13;stroke:var(--c4);stroke-width:1.4}
.fig .fa-chk5{fill:var(--c5);fill-opacity:.13;stroke:var(--c5);stroke-width:1.4}
.fig .fa-chk6{fill:var(--c6);fill-opacity:.13;stroke:var(--c6);stroke-width:1.4}
.fig .fa-tk1{fill:var(--c1);font-size:11.5px;font-weight:700}
.fig .fa-tk2{fill:var(--c2);font-size:11.5px;font-weight:700}
.fig .fa-tk3{fill:var(--c3);font-size:11.5px;font-weight:700}
.fig .fa-tk4{fill:var(--c4);font-size:11.5px;font-weight:700}
.fig .fa-tk5{fill:var(--c5);font-size:11.5px;font-weight:700}
.fig .fa-tk6{fill:var(--c6);font-size:11.5px;font-weight:700}
.fig .fa-dk1{fill:var(--c1);stroke:var(--paper);stroke-width:1.2}
.fig .fa-dk2{fill:var(--c2);stroke:var(--paper);stroke-width:1.2}
.fig .fa-dk3{fill:var(--c3);stroke:var(--paper);stroke-width:1.2}
.fig .fa-dk4{fill:var(--c4);stroke:var(--paper);stroke-width:1.2}
.fig .fa-dk5{fill:var(--c5);stroke:var(--paper);stroke-width:1.2}
.fig .fa-dk6{fill:var(--c6);stroke:var(--paper);stroke-width:1.2}
.fig .fa-ld1{fill:none;stroke:var(--c1);stroke-width:1.3}
.fig .fa-ld2{fill:none;stroke:var(--c2);stroke-width:1.3}
.fig .fa-ld3{fill:none;stroke:var(--c3);stroke-width:1.3}
.fig .fa-ld4{fill:none;stroke:var(--c4);stroke-width:1.3}
.fig .fa-ld5{fill:none;stroke:var(--c5);stroke-width:1.3}
.fig .fa-ld6{fill:none;stroke:var(--c6);stroke-width:1.3}
.fig .fa-rc1{fill:var(--c1);fill-opacity:.25;stroke:var(--c1);stroke-width:1.6}
.fig .fa-rc2{fill:var(--c2);fill-opacity:.25;stroke:var(--c2);stroke-width:1.6}
.fig .fa-rc3{fill:var(--c3);fill-opacity:.25;stroke:var(--c3);stroke-width:1.6}
.fig .fa-rc4{fill:var(--c4);fill-opacity:.25;stroke:var(--c4);stroke-width:1.6}
`;
if (typeof document !== 'undefined' && document.head && !document.getElementById('diagramFxFa2Css')) {
  const s = document.createElement('style'); s.id = 'diagramFxFa2Css'; s.textContent = DIAGRAM_FX_FA2_CSS; document.head.appendChild(s);
}

(() => {
  if (typeof Anat === 'undefined' || !Anat.fa || !Anat.eyeA) return;
  const r1 = v => Math.round(v * 10) / 10;
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const has = (arr, id) => !!arr && arr.indexOf(id) >= 0;
  const opa = (o, id) => (o.dim && o.dim.indexOf(id) >= 0) ? ' opacity="0.4"' : '';
  const ell = Anat.ell, frame = o => Anat.frame(o || {}), fa = Anat.fa;
  const fa2 = {};

  const label = (f, id, l) => {
    const [lx, ly] = l.at, an = l.anchor || 'start', cls = l.bold ? 'fa-tb' : 'fa-t';
    let s = l.lines.map((t, i) => `<text class="${cls}" data-k="an-${id}-t${i}" x="${f.X(lx)}" y="${f.Y(ly + i * 12.5)}" text-anchor="${an}">${esc(t)}</text>`).join('');
    if (l.to) {
      const [fx, fy] = l.from || [lx, ly + (l.lines.length - 1) * 12.5 + 3];
      s += `<path class="an-lead" data-k="an-${id}-l" d="${f.d(`M${fx} ${fy} L${l.to[0]} ${l.to[1]}`)}"/>`;
    }
    return s;
  };
  const build = (table, order, o) => {
    const f = frame(o);
    let out = '', halos = '', labs = '';
    order.forEach(id => {
      const p = table[id]; if (!p || has(o.omit, id)) return;
      if (p.lines) out += p.lines.map((ln, i) => `<path class="${p.cls}" data-k="an-${id}${i}" d="${f.d(ln)}"${opa(o, id)}/>`).join('');
      else if (p.d) out += `<path class="${p.cls}" data-k="an-${id}" d="${f.d(p.d)}"${opa(o, id)}/>`;
      if (has(o.hi, id) && (p.d || p.halo)) halos += `<path class="fx-glow fx-breathe" data-k="an-${id}-hl" d="${f.d(p.halo || p.d)}"/>`;
      if (has(o.hiS, id) && (p.d || p.halo)) halos += `<path class="fx-glow" data-k="an-${id}-hs" d="${f.d(p.halo || p.d)}"/>`;
      if (has(o.label, id) && p.lbl) labs += label(f, id, Object.assign({}, p.lbl, (o.lab || {})[id]));
    });
    return out + halos + labs;
  };

  /* =======================================================================
     eye: slide 15 (and the half-section of slides 14 panel A and 16). Visual axis at the right edge
     (x 348), the angle at the left (x 180, y 146). Panel 360 wide, drawing at x 88-348, y 34-316.
     ======================================================================= */
  const E0 = Anat.eyeA.table;
  const EYE = {};
  ['sclera', 'cornea', 'fl', 'ac', 'pc', 'cbody', 'musc', 'muscl', 'proc1', 'proc2', 'proc3', 'proc4', 'zon', 'iris', 'lens', 'tm', 'sc', 'vein'].forEach(k => { EYE[k] = Object.assign({}, E0[k]); });
  EYE.lens = Object.assign({}, E0.lens, {cls: 'fa-lens'});
  EYE.iris = Object.assign({}, E0.iris, {cls: 'fa-iris'});
  /* conjunctiva: a thin layer over the outside of the sclera near the limbus (slide 15) */
  EYE.conj = {cls: 'fa-conj', d: 'M168 121 C148 152 140 178 136 204 L142 204 C144 180 154 158 173 131 Z',
    lbl: {lines: ['Conjunctiva'], at: [4, 168], to: [145, 170], from: [68, 165]}};
  /* pars plana: the flat back part of the ciliary body along the sclera (slide 15) */
  EYE.pp = {cls: 'fa-pp', d: 'M153 282 L154 306 C164 298 172 292 178 286 C168 284 160 282 153 282 Z',
    lbl: {lines: ['Pars plana'], at: [4, 268], to: [158, 290], from: [58, 265]}};
  /* ciliary epithelium: the lining of the ciliary body on the side facing the posterior chamber and the vitreous */
  EYE.epi = {cls: 'fa-epi', lines: ['M236 220 L232 246 C208 266 180 288 154 306'],
    lbl: {lines: ['Ciliary', 'epithelium'], at: [4, 296], to: [176, 292], from: [62, 303]}};
  EYE.cbody = Object.assign({}, E0.cbody, {lbl: {lines: ['Ciliary body'], at: [4, 296], to: [186, 274], from: [70, 293]}});
  EYE.musc = Object.assign({}, E0.musc, {lbl: {lines: ['Ciliary muscle'], at: [4, 236], to: [168, 233], from: [84, 233]}});
  EYE.sclera = Object.assign({}, E0.sclera, {lbl: {lines: ['Sclera'], at: [4, 200], to: [134, 202], from: [40, 197]}});
  EYE.tm = Object.assign({}, E0.tm, {lbl: {lines: ['Trabecular', 'meshwork'], at: [4, 86], to: [180, 148], from: [68, 98]}});
  EYE.sc = Object.assign({}, E0.sc, {lbl: {lines: ['Schlemm’s', 'canal'], at: [4, 124], to: [158, 152], from: [62, 134]}});
  EYE.vein = Object.assign({}, E0.vein, {lbl: {lines: ['into blood', 'vessels'], at: [4, 252], to: [110, 262], from: [58, 256]}});
  EYE.cornea = Object.assign({}, E0.cornea, {lbl: {lines: ['Cornea'], at: [172, 44], to: [246, 58], from: [206, 42]}});
  EYE.ac = {lbl: {lines: ['Anterior', 'chamber'], at: [290, 80]}};
  EYE.pc = {lbl: {lines: ['Posterior', 'chamber'], at: [288, 286], to: [243, 227], from: [292, 282]}};
  EYE.lens = Object.assign({}, EYE.lens, {lbl: {lines: ['Lens'], at: [308, 234], anchor: 'middle'}});
  EYE.iris = Object.assign({}, EYE.iris, {lbl: {lines: ['Iris'], at: [306, 162], to: [312, 178], from: [312, 165]}});
  EYE.proc = {lbl: {lines: ['Ciliary', 'processes'], at: [186, 294], to: [222, 208], from: [204, 289]}};
  EYE.flow = {lbl: {lines: ['Aqueous flow'], at: [228, 144], to: [262, 114], from: [262, 131]}};
  EYE.pupil = {lbl: {lines: ['pupil'], at: [292, 158], to: [330, 178], from: [318, 160]}};
  const ORDER = ['sclera', 'conj', 'cornea', 'fl', 'cbody', 'pp', 'musc', 'muscl', 'epi', 'iris', 'lens', 'proc1', 'proc2', 'proc3', 'proc4', 'zon', 'sc', 'tm', 'vein', 'ac', 'pc', 'proc', 'flow', 'pupil'];
  const ANCH = Object.assign({}, Anat.eyeA.anchor ? {} : {});
  const A = {axis: [348, 190], pupil: [338, 184], ac: [290, 100], pc: [270, 200], angle: [184, 147], tm: [182, 148], sc: [165, 150],
    vein: [114, 258], proc: [220, 200], musc: [182, 220], cbody: [190, 240], iris: [260, 168], lens: [308, 234], irisEnd: [314, 178],
    uv: [166, 262], p1: [210, 190], p2: [220, 201], p3: [229, 212]};
  const eye = (o = {}) => build(EYE, ORDER, o);
  eye.table = EYE; eye.anchor = (name, o = {}) => { const a = A[name]; return a ? frame(o).at(a[0], a[1]) : null; };
  eye.A = A;
  eye.flows = Anat.eyeA.flows;
  fa2.eye = eye;

  /* the fixed key: a colour chip and the slide's word, top left, the same in every step */
  fa2.key = (o = {}) => {
    const rows = [['fa-lens', 'Lens', 'rect'], ['an-cbody', 'Ciliary body', 'rect'], ['an-tm', 'Trabecular meshwork', 'rect'], ['an-sc', 'Schlemm’s canal', 'ring']];
    return rows.map(([c, t, kind], i) => {
      const y = 23 + i * 13;
      const sh = kind === 'ring' ? `<path class="${c}" data-k="key-s${i}" d="${ell(9.5, y + 4.5, 5, 4)}"/>` : `<rect class="${c} fa-key" data-k="key-s${i}" x="4" y="${y}" width="11" height="9" rx="2"/>`;
      return sh + `<text class="fa-t" data-k="key-t${i}" x="20" y="${y + 8.5}">${esc(t)}</text>`;
    }).join('');
  };

  /* =======================================================================
     class-coloured marks: chip (name bold, then lines), dot, leader, text
     ======================================================================= */
  fa2.cls = {
    chip: (x, y, w, lines, k, c, plain) => {
      const h = lines.length * 13 + 8;
      return fa.R(x, y, w, h, 'c' + k, 'fa-chk' + c, 5) + lines.map((s, i) => fa.T(x + 6, y + 14.5 + i * 13, s, 'c' + k + 't' + i, i === 0 && !plain ? 'fa-tk' + c : 'fa-t')).join('');
    },
    chipH: n => n * 13 + 8,
    dot: (x, y, k, c, r = 4) => `<path class="fa-dk${c}" data-k="${k}" d="${ell(x, y, r, r)}"/>`,
    lead: (x1, y1, x2, y2, k, c) => `<path class="fa-ld${c}" data-k="${k}" d="M${x1} ${y1} L${x2} ${y2}"/>`,
    ring: (x, y, r, k, c) => `<path class="fa-ld${c}" data-k="${k}" d="${ell(x, y, r, r)}" stroke-width="1.8"/>`,
  };

  /* =======================================================================
     dome: Smith slide 14, the eye cut front to back, angle on each side (panels A-C).
     Authored at half-width 108 around x 180 and mapped to 0.9 (half-width 97).
     o.irisR: 'flat' | 'bowed' (the right iris; its own data-k per state); o.tmL: 'ok' | 'bad' (left meshwork).
     Parts: sclL sclR cornea ac vit lens cbL cbR irisL irisR tmL tmR scL scR procs
     ======================================================================= */
  const DF = {x: 18, y: 3.4, s: 0.9};
  const dF = frame(DF);
  const mir = str => { let i = 0; return str.replace(/-?\d*\.?\d+/g, n => (i++ % 2 === 0 ? r1(360 - n) : n)); };
  const DOME = (o) => {
    const T = {};
    T.vit = {cls: 'fa-vit', d: 'M72 232 L96 226 C112 218 122 208 122 198 C130 232 230 232 238 198 C238 208 248 218 264 226 L288 232 L290 266 L70 266 Z'};
    T.sclL = {cls: 'an-sclera', d: 'M64 154 C58 190 54 230 52 266 L70 266 C70 230 72 192 78 158 Z'};
    T.sclR = {cls: 'an-sclera', d: mir('M64 154 C58 190 54 230 52 266 L70 266 C70 230 72 192 78 158 Z')};
    T.cornea = {cls: 'an-cornea', d: 'M64 154 C70 84 124 36 180 34 C236 36 290 84 296 154 L284 158 C278 94 232 50 180 48 C128 50 82 94 76 158 Z'};
    T.ac = {cls: 'an-fluid', d: 'M76 158 C82 94 128 50 180 48 C232 50 278 94 284 158 L214 162 L214 170 L146 170 L146 162 Z'};
    T.lens = {cls: 'fa-lens', d: ell(180, 198, 62, 34)};
    T.cbL = {cls: 'an-cbody', d: 'M80 160 C100 166 112 176 120 192 C122 206 112 218 96 226 L72 232 C72 200 74 176 80 160 Z'};
    T.cbR = {cls: 'an-cbody', d: mir('M80 160 C100 166 112 176 120 192 C122 206 112 218 96 226 L72 232 C72 200 74 176 80 160 Z')};
    T.procL = {cls: 'an-proc', d: ell(110, 186, 5, 5)}; T.procL2 = {cls: 'an-proc', d: ell(115, 199, 5, 5)};
    T.procR = {cls: 'an-proc', d: ell(250, 186, 5, 5)}; T.procR2 = {cls: 'an-proc', d: ell(245, 199, 5, 5)};
    T.irisL = {cls: 'fa-iris', d: 'M80 148 L146 160 L146 170 L84 166 Q74 158 80 148 Z'};
    T.irisR = o.irisR === 'bowed'
      ? {cls: 'fa-iris', d: 'M288 168 C290 142 282 122 268 126 C252 132 232 152 214 160 L214 170 C232 168 252 168 268 170 Q282 172 288 168 Z'}
      : {cls: 'fa-iris', d: mir('M80 148 L146 160 L146 170 L84 166 Q74 158 80 148 Z')};
    T.scL = {cls: 'an-sc', d: ell(68, 156, 4.5, 7)}; T.scR = {cls: 'an-sc', d: ell(292, 156, 4.5, 7)};
    T.tmL = {cls: o.tmL === 'bad' ? 'fa-tmbad' : 'an-tm', d: 'M72 146 L87 156 L74 167 Z'};
    T.tmR = {cls: 'an-tm', d: mir('M72 146 L87 156 L74 167 Z')};
    return T;
  };
  const DORD = ['vit', 'sclL', 'sclR', 'cornea', 'ac', 'lens', 'cbL', 'cbR', 'procL', 'procL2', 'procR', 'procR2', 'irisL', 'irisR', 'scL', 'scR', 'tmL', 'tmR'];
  fa2.dome = (o = {}) => {
    const T = DOME(o), f = dF;
    let out = '', halos = '';
    DORD.forEach(id => {
      const p = T[id]; if (!p) return;
      const k = id === 'irisR' ? 'dm-irisR-' + (o.irisR === 'bowed' ? 'b' : 'f') : id === 'tmL' ? 'dm-tmL-' + (o.tmL === 'bad' ? 'b' : 'n') : 'dm-' + id;
      out += `<path class="${p.cls}" data-k="${k}" d="${f.d(p.d)}"${opa(o, id)}/>`;
      if (has(o.hi, id)) halos += `<path class="fx-glow fx-breathe" data-k="${k}-hl" d="${f.d(p.d)}"/>`;
    });
    return out + halos;
  };
  /* a point in the dome's own coordinates mapped to the panel */
  fa2.dp = (x, y) => dF.at(x, y);
  fa2.dpath = str => dF.d(str);
  fa2.domeFlows = {
    /* made at the processes, behind the iris, through the pupil, over the front of the iris to the angle */
    inL: 'M112 190 C128 178 142 170 160 162 C176 152 166 136 148 136 C122 134 100 142 86 152',
    inR: mir('M112 190 C128 178 142 170 160 162 C176 152 166 136 148 136 C122 134 100 142 86 152'),
    tmL: 'M150 136 C122 134 100 142 86 152',
    tmR: mir('M150 136 C122 134 100 142 86 152'),
    uvL: 'M86 164 C84 186 80 208 76 230',
    uvR: mir('M86 164 C84 186 80 208 76 230'),
  };
  fa2.dflow = (d, k, o = {}) => fa.flow(d, k, Object.assign({}, DF, o));

  /* =======================================================================
     proc: Smith slide 16's zoom on a ciliary process. Circle centre (cx, cy), radius R. The process
     is a pink finger with a light core and four red vessels (ciliary blood supply); receptors sit on
     its crown and carbonic anhydrase on the surface; the alpha-1 receptor sits at the inner edge by
     the vessels. o.cls: {b: class number for the beta icon, a2: ..., ca: ...} (drug-class colours);
     returns {svg, pts} where pts are the icon positions for leaders.
     ======================================================================= */
  fa2.proc = (cx, cy, R, o = {}) => {
    const u = (a, b) => [r1(cx + a * R), r1(cy + b * R)];
    const P = (arr) => arr.map(([a, b]) => u(a, b).join(' ')).join(' ');
    const hw = 0.30, hw2 = 0.19;
    const body = `M${u(-hw, 0.95)} L${u(-hw, -0.1)} C${u(-hw, -0.5)} ${u(-0.14, -0.68)} ${u(0, -0.68)} C${u(0.14, -0.68)} ${u(hw, -0.5)} ${u(hw, -0.1)} L${u(hw, 0.95)} Z`.replace(/,/g, ' ');
    const core = `M${u(-hw2, 0.95)} L${u(-hw2, -0.08)} C${u(-hw2, -0.4)} ${u(-0.08, -0.54)} ${u(0, -0.54)} C${u(0.08, -0.54)} ${u(hw2, -0.4)} ${u(hw2, -0.08)} L${u(hw2, 0.95)} Z`.replace(/,/g, ' ');
    let s = `<path class="fa-zoomc" data-k="pz-c" d="${ell(cx, cy, R, R)}"/>`;
    s += `<path class="fa-pink" data-k="pz-body" d="${body}"/><path class="fa-stroma" data-k="pz-core" d="${core}"/>`;
    const ves = [-0.2, 0.02, 0.24, 0.46];
    ves.forEach((v, i) => { const a = u(-0.08, v + 0.03), b = u(0.08, v - 0.03); s += `<path class="fa-vesl" data-k="pz-v${i}" d="M${a[0]} ${a[1]} L${b[0]} ${b[1]}" stroke-width="${r1(R * 0.07)}"/>`; });
    const pts = {
      beta: u(-0.31, -0.5), a2: u(0.1, -0.76), ca: u(0.33, -0.48), a1: u(-0.3, 0.0), ves: u(0.04, 0.36), body: u(-0.2, 0.62),
    };
    const icon = (id, p, cls, rr = 6) => `<path class="${cls}" data-k="pz-${id}" d="${ell(p[0], p[1], rr, rr)}"/>`;
    const cc = o.cls || {};
    s += icon('beta', pts.beta, cc.b ? 'fa-rc' + cc.b : 'fa-rec') + icon('a2', pts.a2, cc.a2 ? 'fa-rc' + cc.a2 : 'fa-rec') +
      icon('ca', pts.ca, cc.ca ? 'fa-rc' + cc.ca : 'fa-enz', 6.5) + icon('a1', pts.a1, 'fa-rec', 5.5);
    return {svg: s, pts};
  };

  Anat.fa2 = fa2;
})();
