/* ==========================================================================
   DIAGRAM_FX: one visual system for the anatomical step-through figures
   ==========================================================================
   Course file, loaded after diagrams.js and BEFORE diagrams_ey.js / diagrams_oo.js /
   diagrams_lg.js (course.js `files`). It holds two things.

   1. Motion INSIDE a step (CSS only). Class names for SVG shapes:
        fx-flow     dashes that march along a path, in the path's direction (fluid flow)
        fx-drift    small dots that march along a path, slower (diffuse flow)
        fx-pulse    a ring that grows and fades (where a drug acts); put it on a circle/ellipse/path
                    that has fill none; its base state is a static ring
        fx-breathe  a soft opacity change on a halo (stroke-only copy of a structure)
        fx-lane     static, wide, translucent stroke under a flow (the channel the fluid runs in)
        fx-glow     static halo (stroke-only, wide, translucent); add fx-breathe to make it breathe
        fx-head     the arrowhead polygon of a flow
      The engine (views.js stepTo) gives a shape that is new in a step the class `fadein`, whose rule
      `.fig .st .fadein{animation:stIn ...}` would replace a single `animation:` of ours, so each fx rule
      below is repeated with `.fadein` in the selector and lists BOTH animations. Nothing here animates
      a filter, a gradient or a layout property: only stroke-dashoffset, opacity and transform, on the few
      shapes that carry an fx class. Steps that are not shown are display:none, so they cost nothing.
      prefers-reduced-motion stops every fx animation (the shell already stops all animation).
      An element with an fx class must not carry its own `opacity` attribute (the test compares the
      attribute with the computed opacity, which an animation changes): put the opacity on a plain shape.

   2. Anatomy builders, `Anat.*`. Each returns a string of SVG shapes (no <svg>, no <defs>, no
      transform attributes, no colours: classes only, so light and dark mode follow the page) with
      stable data-k ids (`an-<part>`), to be placed inside a step. Common options:
        x, y, s     where the drawing's origin goes and its scale (default 0, 0, 1); coordinates are
                    mapped in JS, never with a transform, so shapes still glide
        hi          [part ids]: add a halo (class fx-glow fx-breathe) behind each
        dim         [part ids]: draw them at opacity 0.4 (an attribute)
        label       [part ids]: add the label and its leader line for each (text sizes 11)
      `Anat.<builder>.anchor(name, opts)` returns [x, y] of a named point (mapped like the shapes) so a
      figure can aim its own flows, arrows and leaders at the same places. `Anat.flow(d, k, o)` writes a
      flow: lane, marching dashes and a head. Every builder also has `.parts` (the part ids).

   What the engine can and cannot do: it translates a shape that has the same data-k in two steps and
   fades the rest; it does not morph a path. A part that changes SHAPE between steps (the iris bowed
   forward in angle closure) therefore has a different data-k per state, so the two states cross-fade.

   Sources of every shape: the lecture slides named at each builder; the drawing is vector and redrawn,
   no slide pixels are used. Labels are the lecturers' words only. No gradients and no filters are used:
   a gradient defined inside a step group is not drawn while that step is hidden (the problem
   svgid_ui.js fixes for markers), and filters are the main cause of slow SVG animation in Safari.
   ========================================================================== */
const DIAGRAM_FX_CSS = `
.fig .an-t{fill:var(--text);font-size:11px}
.fig .an-tb{fill:var(--text);font-size:11px;font-weight:700}
.fig .an-tag{fill:var(--accent);font-size:11px;font-weight:700}
.fig .an-lead{stroke:var(--text-dim);stroke-width:.8;fill:none}
.fig .an-sclera{fill:var(--surface);stroke:var(--text-dim);stroke-width:1.2}
.fig .an-conj{fill:none;stroke:var(--at-o);stroke-width:2;stroke-linecap:round}
.fig .an-cornea{fill:var(--paper);stroke:var(--accent);stroke-width:1.6}
.fig .an-fluid{fill:var(--accent);fill-opacity:.13;stroke:none}
.fig .an-lens{fill:var(--surface);stroke:var(--text-dim);stroke-width:1.5}
.fig .an-shine{fill:none;stroke:var(--text-dim);stroke-width:.9;stroke-linecap:round;stroke-opacity:.55}
.fig .an-iris{fill:var(--warn-bg);stroke:var(--warn);stroke-width:1.5}
.fig .an-cbody{fill:var(--bad-bg);stroke:var(--at-o);stroke-width:1.2}
.fig .an-musc{fill:var(--at-o);fill-opacity:.2;stroke:var(--at-o);stroke-width:.9}
.fig .an-proc{fill:var(--bad-bg);stroke:var(--at-o);stroke-width:1.5}
.fig .an-zon{fill:none;stroke:var(--text-dim);stroke-width:.8}
.fig .an-tm{fill:var(--at-p);fill-opacity:.38;stroke:var(--at-p);stroke-width:1.5}
.fig .an-sc{fill:var(--paper);stroke:var(--at-p);stroke-width:1.8}
.fig .an-vein{fill:var(--bad-bg);stroke:var(--bad);stroke-width:1.5}
.fig .an-gland{fill:var(--warn-bg);stroke:var(--warn);stroke-width:1.4}
.fig .an-lid{fill:none;stroke:var(--text-dim);stroke-width:1.8;stroke-linecap:round}
.fig .an-duct{fill:var(--bad-bg);stroke:var(--at-o);stroke-width:1.4}
.fig .an-tube{fill:none;stroke:var(--at-o);stroke-width:4;stroke-linecap:round;stroke-linejoin:round}
.fig .an-tube2{fill:none;stroke:var(--bad-bg);stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.fig .an-bone{fill:var(--surface);stroke:var(--text-dim);stroke-width:1.2}
.fig .an-cavity{fill:var(--bad-bg);stroke:var(--at-o);stroke-width:1.2}
.fig .an-lipid{fill:var(--warn);fill-opacity:.35;stroke:var(--warn);stroke-width:1.2}
.fig .an-water{fill:var(--accent);fill-opacity:.2;stroke:var(--accent);stroke-width:1.2}
.fig .an-mucin{fill:var(--at-x);fill-opacity:.28;stroke:var(--at-x);stroke-width:1.2}
.fig .an-tissue{fill:var(--surface);stroke:var(--text-dim);stroke-width:1.2}
.fig .an-skin{fill:var(--bad-bg);stroke:var(--at-o);stroke-width:1.4}
.fig .an-wax{fill:var(--warn);fill-opacity:.55;stroke:var(--warn);stroke-width:1.2}
.fig .an-drum{fill:none;stroke:var(--text);stroke-width:2.4;stroke-linecap:round}
.fig .an-enamel{fill:var(--paper);stroke:var(--text);stroke-width:1.8}
.fig .an-dentin{fill:var(--warn-bg);stroke:var(--warn);stroke-width:1.2}
.fig .an-pulp{fill:var(--bad-bg);stroke:var(--at-o);stroke-width:1.2}
.fig .an-gum{fill:var(--bad-bg);stroke:var(--at-o);stroke-width:1.6}
.fig .an-xtal{fill:var(--accent-bg);stroke:var(--accent);stroke-width:1.2}
.fig .an-ion{fill:var(--at-x);stroke:var(--at-x);stroke-width:1}
.fig .an-oh{fill:var(--at-o);stroke:var(--at-o);stroke-width:1}
.fig .fx-lane{fill:none;stroke:var(--accent);stroke-opacity:.2;stroke-width:9;stroke-linecap:round;stroke-linejoin:round}
.fig .fx-flow{fill:none;stroke:var(--accent);stroke-width:2.3;stroke-dasharray:7 5;stroke-linecap:round;animation:fxMarch 1.1s linear infinite}
.fig .fx-drift{fill:none;stroke:var(--accent);stroke-width:3.2;stroke-dasharray:.1 7;stroke-linecap:round;animation:fxMarch2 1.6s linear infinite}
.fig .fx-head{fill:var(--accent)}
.fig .fx-glow{fill:none;stroke:var(--ok);stroke-opacity:.42;stroke-width:8;stroke-linejoin:round;stroke-linecap:round}
.fig .fx-breathe{animation:fxBreathe 2.4s ease-in-out infinite}
.fig .fx-pulse{fill:none;stroke:var(--ok);stroke-width:1.8;opacity:.8;transform-box:fill-box;transform-origin:center;animation:fxPulse 2s ease-out infinite}
.fig .st .fadein.fx-flow{animation:stIn .5s ease backwards,fxMarch 1.1s linear infinite}
.fig .st .fadein.fx-drift{animation:stIn .5s ease backwards,fxMarch2 1.6s linear infinite}
.fig .st .fadein.fx-breathe{animation:stIn .5s ease backwards,fxBreathe 2.4s ease-in-out infinite}
.fig .st .fadein.fx-pulse{animation:stIn .5s ease backwards,fxPulse 2s ease-out infinite}
@keyframes fxMarch{to{stroke-dashoffset:-12}}
@keyframes fxMarch2{to{stroke-dashoffset:-7.1}}
@keyframes fxBreathe{0%,100%{stroke-opacity:.22}50%{stroke-opacity:.55}}
@keyframes fxPulse{from{transform:scale(.7);opacity:.85}to{transform:scale(1.5);opacity:0}}
@media (prefers-reduced-motion:reduce){
.fig .fx-flow,.fig .fx-drift,.fig .fx-breathe,.fig .fx-pulse,.fig .st .fadein.fx-flow,.fig .st .fadein.fx-drift,.fig .st .fadein.fx-breathe,.fig .st .fadein.fx-pulse{animation:none}}
`;
if (typeof document !== 'undefined' && document.head && !document.getElementById('diagramFxCss')) {
  const s = document.createElement('style'); s.id = 'diagramFxCss'; s.textContent = DIAGRAM_FX_CSS; document.head.appendChild(s);
}

const Anat = (() => {
  const r1 = v => Math.round(v * 10) / 10;
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  /* coordinate frame: x, y, s of the options; every number written is mapped here, no transform attribute */
  const frame = o => {
    const s = o.s || 1, ox = o.x || 0, oy = o.y || 0;
    const X = v => r1(ox + v * s), Y = v => r1(oy + v * s);
    /* a path or points string of absolute commands (M L C Q Z) or bare pairs: numbers alternate x, y */
    const d = str => { let i = 0; return str.replace(/-?\d*\.?\d+/g, n => r1((i++ % 2 === 0 ? ox : oy) + (+n) * s)); };
    return {s, X, Y, d, at: (x, y) => [X(x), Y(y)]};
  };
  /* an ellipse as a path of four cubics, so every shape is a path and mapping stays pair-wise */
  const ell = (cx, cy, rx, ry) => {
    const k = 0.5523, a = rx * k, b = ry * k;
    return `M${cx - rx} ${cy} C${cx - rx} ${cy - b} ${cx - a} ${cy - ry} ${cx} ${cy - ry} C${cx + a} ${cy - ry} ${cx + rx} ${cy - b} ${cx + rx} ${cy} ` +
      `C${cx + rx} ${cy + b} ${cx + a} ${cy + ry} ${cx} ${cy + ry} C${cx - a} ${cy + ry} ${cx - rx} ${cy + b} ${cx - rx} ${cy} Z`;
  };
  const opa = (o, id) => (o.dim && o.dim.indexOf(id) >= 0) ? ' opacity="0.4"' : '';
  const has = (arr, id) => !!arr && arr.indexOf(id) >= 0;

  /* One builder from a table of parts. part: {cls, d, halo:false|true, lbl:{lines, at:[x,y], anchor, to:[x,y], bold}} */
  const make = (parts, order, extra) => {
    const fn = (o = {}) => {
      if (extra.dx && o.x == null) o = Object.assign({}, o, {x: extra.dx});
      const f = frame(o);
      let out = '', halos = '', labs = '';
      const P = typeof parts === 'function' ? parts(o) : parts;
      order.forEach(id => {
        const p = P[id]; if (!p || p.skip) return;
        if (p.lines) {
          out += p.lines.map((ln, i) => `<path class="${p.cls}" data-k="an-${id}${i}" d="${f.d(ln)}"${opa(o, id)}/>`).join('');
        } else {
          out += `<path class="${p.cls}" data-k="an-${id}" d="${f.d(p.d)}"${opa(o, id)}/>`;
        }
        if (has(o.hi, id) && (p.d || p.halo)) halos += `<path class="fx-glow fx-breathe" data-k="an-${id}-hl" d="${f.d(p.halo || p.d)}"/>`;
        if (has(o.label, id) && p.lbl) labs += label(f, id, Object.assign({}, p.lbl, (o.lab || {})[id]));
      });
      /* halos sit under the labels but over the shapes' fills: drawn after the shapes, before the labels */
      return out + halos + labs;
    };
    fn.parts = order.slice();
    fn.anchor = (name, o = {}) => { if (extra.dx && o.x == null) o = Object.assign({}, o, {x: extra.dx}); const f = frame(o); const a = extra.anchors[name]; return a ? f.at(a[0], a[1]) : null; };
    fn.frame = frame;
    fn.table = parts;
    return fn;
  };
  const label = (f, id, l) => {
    const [lx, ly] = l.at, an = l.anchor || 'start', cls = l.bold ? 'an-tb' : 'an-t';
    let s = l.lines.map((t, i) => `<text class="${cls}" data-k="an-${id}-t${i}" x="${f.X(lx)}" y="${f.Y(ly + i * 12.5)}" text-anchor="${an}">${esc(t)}</text>`).join('');
    if (l.to) {
      const [fx, fy] = l.from || [lx, ly + (l.lines.length - 1) * 12.5 + 3];
      s += `<path class="an-lead" data-k="an-${id}-l" d="${f.d(`M${fx} ${fy} L${l.to[0]} ${l.to[1]}`)}"/>`;
    }
    return s;
  };

  /* ---- a flow: translucent lane, marching dashes (or dots), arrowhead polygon at the end ---- */
  const flow = (d, k, o = {}) => {
    const f = frame(o), dd = f.d(d), n = dd.match(/-?[\d.]+/g).map(Number);
    let out = '';
    if (o.lane !== false) out += `<path class="fx-lane" data-k="${k}~" d="${dd}"/>`;
    out += `<path class="${o.drift ? 'fx-drift' : 'fx-flow'}" data-k="${k}" d="${dd}"/>`;
    if (o.head !== false) {
      const ex = n[n.length - 2], ey = n[n.length - 1], px = n[n.length - 4], py = n[n.length - 3];
      const L = Math.hypot(ex - px, ey - py) || 1, ux = (ex - px) / L, uy = (ey - py) / L, sz = 8 * (o.hs || 1), w = 4 * (o.hs || 1);
      const bx = ex - ux * sz, by = ey - uy * sz;
      out += `<polygon class="fx-head" data-k="${k}^" points="${r1(ex)},${r1(ey)} ${r1(bx - uy * w)},${r1(by + ux * w)} ${r1(bx + uy * w)},${r1(by - ux * w)}"/>`;
    }
    return out;
  };
  /* a pulsing ring at a point: where a drug acts */
  const pulse = (cx, cy, r, k, o = {}) => {
    const f = frame(o);
    return `<path class="fx-pulse" data-k="${k}" d="${f.d(ell(cx, cy, r, o.ry || r))}"/>`;
  };
  /* a plain leader line with a short text, for figures that need their own */
  const lead = (x1, y1, x2, y2, k, o = {}) => { const f = frame(o); return `<path class="an-lead" data-k="${k}" d="${f.d(`M${x1} ${y1} L${x2} ${y2}`)}"/>`; };
  const text = (x, y, t, k, o = {}) => { const f = frame(o);
    return `<text class="${o.cls || 'an-t'}" data-k="${k}" x="${f.X(x)}" y="${f.Y(y)}" text-anchor="${o.anchor || 'start'}"${o.op != null ? ` opacity="${o.op}"` : ''}>${esc(t)}</text>`; };

  /* =======================================================================
     eyeAnterior: the anterior segment, one half of a horizontal section (visual axis at the right
     edge, angle at the left), the way Smith slides 14 (panels A-C) and 15-16 draw it. Panel 360 wide:
     the drawing spans x 90-334, y 34-298 at s = 1.
     Parts (data-k an-<id>): sclera conj cornea ac pc lens shine iris cbody musc proc1-4 zon tm sc vein
     Anchors: axis, pupil, ac, pc, prodStart, angle, tm, sc, vein, uvEnd, cornea, iris, lens, cbody, musc
     Flows (Anat.eyeAnterior.flows): prod (ciliary processes to the pupil, under the iris), pupil
     (through the pupil), ac (across the anterior chamber to the angle), tm (through the meshwork into
     Schlemm's canal), out (Schlemm's canal to the blood vessels), uv (the uveoscleral route).
     ======================================================================= */
  const EYE = {
    sclera: {cls: 'an-sclera', d: 'M138 128 C118 154 104 194 100 250 L98 298 L118 298 L118 250 C122 198 134 164 150 138 Z',
      lbl: {lines: ['Sclera'], at: [-20, 250], to: [102, 248], from: [18, 247]}},
    conj: {cls: 'an-conj', d: 'M146 112 C122 138 104 186 92 298', halo: 'M146 112 C122 138 104 186 92 298',
      lbl: {lines: ['Conjunctiva'], at: [-20, 100], to: [127, 133], from: [42, 98]}},
    cornea: {cls: 'an-cornea', d: 'M334 34 C262 34 176 68 138 128 L150 138 C186 78 266 45 334 44 Z',
      lbl: {lines: ['Cornea'], at: [158, 44], to: [222, 58], from: [190, 44]}},
    ac: {cls: 'an-fluid', d: 'M334 44 C266 45 186 78 150 138 L158 158 L306 171 L312 177 L306 183 C316 182 326 181 334 181 Z',
      lbl: {lines: ['Anterior', 'chamber'], at: [236, 92]}},
    pc: {cls: 'an-fluid', d: 'M165 179 L306 185 C292 183 240 194 226 212 L214 220 C200 208 184 196 168 183 Z',
      lbl: {lines: ['Posterior chamber'], at: [222, 284], to: [219, 216], from: [231, 272]}},
    lens: {cls: 'an-lens', d: 'M334 181 C290 181 236 194 222 222 C236 250 290 263 334 263 Z',
      lbl: {lines: ['Lens'], at: [296, 226], anchor: 'middle'}},
    shine: {cls: 'an-shine', d: 'M310 200 C282 204 258 214 248 228'},
    iris: {cls: 'an-iris', d: 'M158 154 L306 172 Q312 177.5 306 183 L166 180 Q152 168 158 154 Z',
      lbl: {lines: ['Iris'], at: [236, 146], to: [226, 173], from: [236, 149]}},
    cbody: {cls: 'an-cbody', d: 'M152 160 L168 181 C184 197 204 209 214 220 L208 248 C176 252 146 250 120 248 L118 214 C122 188 138 172 152 160 Z',
      lbl: {lines: ['Ciliary body'], at: [-20, 230], to: [124, 228], from: [46, 227]}},
    musc: {cls: 'an-musc', d: 'M128 206 C138 186 152 182 158 190 C172 208 188 228 196 244 C170 247 142 246 126 243 C124 228 125 214 128 206 Z',
      lbl: {lines: ['Ciliary muscle'], at: [-20, 230], to: [130, 226], from: [44, 227]}},
    proc1: {cls: 'an-proc', d: ell(178, 189, 5, 5)}, proc2: {cls: 'an-proc', d: ell(190, 199, 5, 5)},
    proc3: {cls: 'an-proc', d: ell(202, 209, 5, 5)}, proc4: {cls: 'an-proc', d: ell(211, 218, 4.5, 4.5)},
    zon: {cls: 'an-zon', lines: ['M183 191 L227 211', 'M195 201 L224 220', 'M206 211 L226 232']},
    tm: {cls: 'an-tm', d: 'M146 142 L168 150 L150 164 Z',
      lbl: {lines: ['Trabecular', 'meshwork'], at: [-20, 118], to: [149, 148], from: [40, 131]}},
    sc: {cls: 'an-sc', d: ell(137, 151, 6, 9),
      lbl: {lines: ['Schlemm’s', 'canal'], at: [-20, 168], to: [132, 153], from: [36, 166]}},
    vein: {cls: 'an-vein', d: ell(72, 268, 6, 6),
      lbl: {lines: ['into blood', 'vessels'], at: [-20, 256], to: [67, 266], from: [34, 262]}},
  };
  const EYE_ORDER = ['sclera', 'conj', 'cornea', 'ac', 'pc', 'lens', 'shine', 'iris', 'cbody', 'musc', 'proc1', 'proc2', 'proc3', 'proc4', 'zon', 'sc', 'tm', 'vein'];
  const EYE_ANCH = {axis: [334, 181], pupil: [320, 176], ac: [250, 100], pc: [236, 192], prodStart: [196, 204], angle: [152, 146],
    tm: [158, 152], sc: [137, 151], vein: [72, 268], uvEnd: [112, 262], cornea: [250, 52], iris: [230, 174], lens: [280, 222],
    cbody: [150, 236], musc: [150, 226]};
  const eyeAnterior = make(EYE, EYE_ORDER, {anchors: EYE_ANCH, dx: 26});
  eyeAnterior.flows = {
    prod: 'M198 204 C220 194 256 188 298 186',
    pupil: 'M294 187 C312 189 325 178 325 152',
    ac: 'M325 152 C322 104 232 84 172 140',
    tm: 'M168 148 L145 151',
    out: 'M131 160 C122 190 100 230 78 262',
    uv: 'M172 156 C180 190 176 222 148 238 L116 262',
  };

  /* =======================================================================
     angle: the drainage angle zoomed (about 200 x 150 at s = 1), after Smith slide 14 panels A-C
     and slide 15. opts.state: 'open' (iris flat, angle open), 'closed' (iris bowed forward over the
     meshwork). The cornea, sclera, ciliary body, meshwork and canal keep one key; the iris and its
     flow carry the state in their key so the two states cross-fade.
     ======================================================================= */
  const angle = (o = {}) => {
    const f = frame(o), st = o.state === 'closed' ? 'closed' : 'open';
    let s = '';
    const add = (cls, k, d, extra = '') => { s += `<path class="${cls}" data-k="an-${k}" d="${f.d(d)}"${extra}/>`; };
    add('an-sclera', 'ang-sclera', 'M10 110 C30 100 60 100 84 104 L96 124 C70 126 40 130 10 148 Z');
    add('an-cornea', 'ang-cornea', 'M10 34 C50 36 84 62 100 100 L84 104 C70 74 44 56 10 52 Z');
    add('an-fluid', 'ang-ac', 'M10 52 C44 56 70 74 84 104 L96 124 L120 132 L10 126 Z');
    add('an-cbody', 'ang-cbody', 'M96 124 L120 140 C150 150 170 160 190 170 L186 196 L76 196 C70 170 80 140 96 124 Z');
    add('an-musc', 'ang-musc', 'M96 160 C110 150 128 152 140 164 C150 174 160 186 164 194 L90 194 C88 180 90 170 96 160 Z');
    add('an-sc', 'ang-sc', ell(82, 116, 8, 11));
    add('an-tm', 'ang-tm', 'M84 104 L106 112 L92 130 L84 124 Z');
    if (st === 'open') add('an-iris', 'ang-iris-open', 'M100 126 L190 150 L190 164 L96 140 Z');
    else add('an-iris', 'ang-iris-closed', 'M100 126 C100 100 102 80 112 74 C130 96 160 120 190 140 L190 156 C150 140 120 142 96 140 Z');
    if (has(o.hi, 'tm')) s += `<path class="fx-glow fx-breathe" data-k="an-ang-tm-hl" d="${f.d('M84 104 L106 112 L92 130 L84 124 Z')}"/>`;
    if (has(o.hi, 'sc')) s += `<path class="fx-glow fx-breathe" data-k="an-ang-sc-hl" d="${f.d(ell(82, 116, 8, 11))}"/>`;
    if (has(o.hi, 'iris')) s += `<path class="fx-glow fx-breathe" data-k="an-ang-iris-hl-${st}" d="${f.d(st === 'open' ? 'M100 126 L190 150 L190 164 L96 140 Z' : 'M100 126 C100 100 102 80 112 74 C130 96 160 120 190 140 L190 156 C150 140 120 142 96 140 Z')}"/>`;
    if (has(o.label, 'tm')) s += label(f, 'ang-tm', {lines: ['Trabecular', 'meshwork'], at: [6, 84], to: [88, 112], from: [56, 98]});
    if (has(o.label, 'sc')) s += label(f, 'ang-sc', {lines: ['Schlemm’s canal'], at: [6, 168], to: [76, 124], from: [40, 156]});
    if (has(o.label, 'iris')) s += label(f, 'ang-iris', {lines: ['Iris'], at: [160, 130], to: [150, 146], from: [166, 134]});
    if (has(o.label, 'cornea')) s += label(f, 'ang-cornea', {lines: ['Cornea'], at: [14, 24]});
    return s;
  };
  angle.parts = ['ang-sclera', 'ang-cornea', 'ang-ac', 'ang-cbody', 'ang-musc', 'ang-sc', 'ang-tm', 'ang-iris-open', 'ang-iris-closed'];
  angle.anchor = (name, o = {}) => { const f = frame(o), a = {tm: [92, 118], sc: [82, 116], recess: [90, 112], iris: [150, 146]}[name]; return a ? f.at(a[0], a[1]) : null; };

  /* =======================================================================
     lacrimal: frontal view of the lacrimal system, after Smith slide 5 (Goodman & Gilman 14e) and
     Lam slides 72-73 (eyelid closure). About 250 x 240 at s = 1: eye at the left, nose at the right.
     Parts: lid iris gland ducts pup1 pup2 can1 can2 sac nld nose pocket
     opts.pocket: draw the lower lid pulled out into a pouch (Lam slide 73).
     ======================================================================= */
  const LAC = o => ({
    gland: {cls: 'an-gland', d: 'M24 34 C40 22 64 22 74 34 C84 44 78 58 62 62 C44 66 26 60 22 48 C20 42 20 38 24 34 Z',
      lbl: {lines: ['Lacrimal gland'], at: [6, 18], to: [44, 38], from: [50, 22]}},
    ducts: {cls: 'an-lid', lines: ['M44 62 L58 82', 'M56 62 L66 80', 'M68 60 L74 80']},
    lid: {cls: 'an-lid', lines: ['M28 108 C50 76 110 70 150 98 C112 90 68 92 28 108', 'M28 108 C54 140 112 144 150 98'], halo: null},
    iris: {cls: 'an-lens', d: ell(86, 108, 17, 17)},
    pup: {cls: 'an-iris', d: ell(86, 108, 7, 7)},
    pup1: {cls: 'an-proc', d: ell(150, 96, 3.5, 3.5),
      lbl: {lines: ['Puncta'], at: [168, 78], to: [153, 94], from: [176, 80]}},
    pup2: {cls: 'an-proc', d: ell(148, 104, 3.5, 3.5)},
    can1: {cls: 'an-tube', d: 'M150 96 C158 94 166 94 172 100'},
    can2: {cls: 'an-tube', d: 'M148 104 C156 112 166 112 172 108',
      lbl: {lines: ['Canaliculi'], at: [190, 140], to: [162, 112], from: [194, 132]}},
    sac: {cls: 'an-duct', d: 'M172 92 C176 84 190 84 194 92 L194 122 C190 130 176 130 172 122 Z',
      lbl: {lines: ['Lacrimal sac'], at: [204, 100], to: [196, 104], from: [203, 99]}},
    nld: {cls: 'an-tube', d: 'M183 128 L183 196',
      lbl: {lines: ['Nasolacrimal duct'], at: [204, 168], to: [186, 164], from: [203, 166]}},
    nose: {cls: 'an-bone', d: 'M214 70 C238 70 248 110 244 170 C240 212 226 226 204 226 L204 204 C214 190 220 150 214 70 Z',
      lbl: {lines: ['Nasal cavity'], at: [226, 238], anchor: 'middle'}},
    pocket: {cls: 'an-lid', d: 'M30 112 C50 150 100 164 130 130', skip: !o.pocket},
  });
  const LAC_ORDER = ['nose', 'gland', 'ducts', 'lid', 'iris', 'pup', 'pocket', 'can1', 'can2', 'pup1', 'pup2', 'sac', 'nld'];
  const lacrimal = make(LAC, LAC_ORDER, {anchors: {gland: [48, 44], pup1: [150, 96], pup2: [148, 104], sac: [183, 106], nld: [183, 196], nose: [226, 150], pouch: [80, 150], eye: [86, 108]}});

  /* =======================================================================
     tearFilm: the three layers on the cornea, front to back, after Smith slide 6 (anterior layer
     lipids, meibomian glands; middle layer aqueous, main and accessory lacrimal glands, about 98 %;
     posterior layer mucins, goblet cells in the conjunctiva) and Sikazwe slide 29. About 150 x 130 at
     s = 1; the air side is at the top.
     ======================================================================= */
  const TEAR = {
    lipid: {cls: 'an-lipid', d: 'M10 20 L150 20 L150 38 L10 38 Z', lbl: {lines: ['Lipid layer'], at: [160, 33]}},
    water: {cls: 'an-water', d: 'M10 38 L150 38 L150 82 L10 82 Z', lbl: {lines: ['Aqueous layer'], at: [160, 64]}},
    mucin: {cls: 'an-mucin', d: 'M10 82 L150 82 L150 96 L10 96 Z', lbl: {lines: ['Mucin layer'], at: [160, 93]}},
    cornea: {cls: 'an-cornea', d: 'M10 96 L150 96 L150 130 L10 130 Z', lbl: {lines: ['Cornea'], at: [160, 118]}},
  };
  const tearFilm = make(TEAR, ['cornea', 'mucin', 'water', 'lipid'], {anchors: {lipid: [80, 29], water: [80, 60], mucin: [80, 89], cornea: [80, 113]}});

  /* =======================================================================
     cornea: the layered cornea for drug entry, after Sikazwe slide 29-30 ("lipid / water / lipid
     sandwich": less drug entry; lipophilic drugs enter by the cornea, hydrophilic by the conjunctiva).
     About 150 x 110 at s = 1. Part names follow the slide (lipid, water, lipid); opts.names =
     'anatomic' writes epithelium / stroma / endothelium instead, only for a figure whose source uses them.
     ======================================================================= */
  const cornea = o => {
    const an = o.names === 'anatomic';
    return make({
      l1: {cls: 'an-lipid', d: 'M10 10 L150 10 L150 36 L10 36 Z', lbl: {lines: [an ? 'Epithelium' : 'Lipid'], at: [160, 27]}},
      w: {cls: 'an-water', d: 'M10 36 L150 36 L150 82 L10 82 Z', lbl: {lines: [an ? 'Stroma' : 'Water'], at: [160, 62]}},
      l2: {cls: 'an-lipid', d: 'M10 82 L150 82 L150 100 L10 100 Z', lbl: {lines: [an ? 'Endothelium' : 'Lipid'], at: [160, 94]}},
    }, ['l1', 'w', 'l2'], {anchors: {l1: [80, 23], w: [80, 59], l2: [80, 91]}})(o);
  };
  cornea.parts = ['l1', 'w', 'l2'];

  /* =======================================================================
     ear: the outer ear canal, ear drum and the way to the Eustachian tube, schematic, after
     Sikazwe slide 5 (labels: ear drum, Eustachian tube, ear wax, ear canal). About 250 x 150 at s = 1;
     the outside is at the right. opts.wax: 0 to 1, how much of the canal the cerumen fills.
     Parts: pinna canal wax drum cavity eust
     ======================================================================= */
  const EAR = o => {
    const w = o.wax == null ? 0.6 : o.wax, wx = 150 - 70 * w;
    return {
      pinna: {cls: 'an-skin', d: 'M184 40 C230 20 250 60 242 96 C236 130 208 140 184 124 L184 108 C200 106 210 90 206 76 C202 62 192 58 184 60 Z'},
      cavity: {cls: 'an-cavity', d: 'M40 40 C70 24 96 30 104 52 L104 100 C96 120 64 128 44 112 C26 96 24 56 40 40 Z'},
      canal: {cls: 'an-tissue', d: 'M104 56 L190 62 L190 104 L104 98 Z',
        lbl: {lines: ['Ear canal'], at: [140, 142], anchor: 'middle', to: [140, 106], from: [140, 130]}},
      wax: {cls: 'an-wax', d: `M${wx} 60 L184 63 L184 101 L${wx} 97 Q${wx - 6} 79 ${wx} 60 Z`,
        lbl: {lines: ['Ear wax'], at: [180, 28], to: [168, 68], from: [172, 32]}},
      drum: {cls: 'an-drum', d: 'M104 52 L110 100',
        lbl: {lines: ['Ear drum'], at: [6, 30], to: [104, 66], from: [48, 34]}},
      eust: {cls: 'an-tube', d: 'M60 112 C66 130 80 140 96 146',
        lbl: {lines: ['Eustachian tube'], at: [6, 146], to: [64, 124], from: [40, 138], anchor: 'start'}},
    };
  };
  const ear = (o = {}) => make(EAR(o), ['pinna', 'cavity', 'canal', 'wax', 'drum', 'eust'], {anchors: {canal: [140, 80], wax: [165, 80], drum: [107, 76], eust: [78, 136], cavity: [70, 76]}})(o);
  ear.parts = ['pinna', 'cavity', 'canal', 'wax', 'drum', 'eust'];

  /* =======================================================================
     tooth: enamel crown, dentin, pulp, root and the gum line, with a zoom of the crystal lattice,
     after Sikazwe slides 15-18 (enamel's hydroxyapatite, Ca10(PO4)6(OH)2, converted by fluoride ions to
     fluorapatite, Ca10(PO4)6F2). About 150 x 200 at s = 1 plus the zoom circle at (230, 80).
     opts.fluoride: false draws OH at the lattice, true draws F (the same shapes, the ion mark has a
     different key so the two cross-fade).
     Parts: gum root dentin pulp enamel zoom xt1-xt6 ion1-ion6. Dentin and pulp are not words of the slides
     listed above: label them only after checking the transcript.
     ======================================================================= */
  const tooth = (o = {}) => {
    const f = frame(o), F = !!o.fluoride;
    let s = '';
    const add = (cls, k, d, extra = '') => { s += `<path class="${cls}" data-k="an-${k}" d="${f.d(d)}"${opa(o, k)}${extra}/>`; };
    add('an-gum', 'gum', 'M14 96 C40 84 60 98 78 96 C96 98 112 84 138 96 L138 150 L14 150 Z');
    add('an-dentin', 'root', 'M40 96 L110 96 C110 140 100 180 92 196 C84 200 80 180 76 150 C72 180 68 200 60 196 C50 180 40 140 40 96 Z');
    add('an-enamel', 'enamel', 'M34 98 C28 60 40 24 76 22 C112 24 122 60 116 98 C100 90 88 96 76 90 C62 96 48 90 34 98 Z');
    add('an-dentin', 'dentin', 'M44 94 C40 62 50 38 76 36 C102 38 110 62 106 94 C94 88 86 92 76 86 C66 92 56 88 44 94 Z');
    add('an-pulp', 'pulp', 'M64 80 C62 62 68 52 76 52 C84 52 90 62 88 80 C90 120 82 170 76 184 C70 170 62 120 64 80 Z');
    if (has(o.hi, 'enamel')) s += `<path class="fx-glow fx-breathe" data-k="an-enamel-hl" d="${f.d('M34 98 C28 60 40 24 76 22 C112 24 122 60 116 98')}"/>`;
    if (has(o.label, 'enamel')) s += label(f, 'enamel', {lines: ['Enamel'], at: [6, 30], to: [40, 50], from: [30, 34]});
    if (has(o.label, 'gum')) s += label(f, 'gum', {lines: ['Gum line'], at: [6, 130], to: [34, 98], from: [28, 120]});
    if (has(o.label, 'dentin')) s += label(f, 'dentin', {lines: ['Dentin'], at: [150, 70], to: [104, 66], from: [148, 66]});
    if (has(o.label, 'pulp')) s += label(f, 'pulp', {lines: ['Pulp'], at: [150, 130], to: [86, 120], from: [148, 126]});
    if (o.zoom !== false) {
      const zx = 232, zy = 84;
      add('an-tissue', 'zoom', ell(zx, zy, 64, 64));
      s += `<path class="an-lead" data-k="an-zoomL" d="${f.d(`M114 48 L${zx - 52} ${zy - 38}`)}"/>`;
      const xt = [[-30, -22], [4, -26], [34, -14], [-34, 14], [0, 10], [32, 22]];
      xt.forEach(([dx, dy], i) => {
        const cx = zx + dx, cy = zy + dy;
        s += `<path class="an-xtal" data-k="an-xt${i}" d="${f.d(`M${cx - 12} ${cy} L${cx - 6} ${cy - 10} L${cx + 6} ${cy - 10} L${cx + 12} ${cy} L${cx + 6} ${cy + 10} L${cx - 6} ${cy + 10} Z`)}"/>`;
        s += `<path class="${F ? 'an-ion' : 'an-oh'}" data-k="an-ion${i}-${F ? 'F' : 'OH'}" d="${f.d(ell(cx, cy, 3.4, 3.4))}"/>`;
      });
    }
    return s;
  };
  tooth.parts = ['gum', 'root', 'enamel', 'dentin', 'pulp', 'zoom', 'xt0-5', 'ion0-5'];
  tooth.anchor = (name, o = {}) => { const f = frame(o), a = {enamel: [76, 24], crown: [76, 60], gum: [76, 96], zoom: [232, 84], pulp: [76, 120]}[name]; return a ? f.at(a[0], a[1]) : null; };

  return {eyeAnterior, angle, lacrimal, tearFilm, cornea, ear, tooth, flow, pulse, lead, text, frame, ell, css: DIAGRAM_FX_CSS};
})();
