/* ==========================================================================
   DIAGRAM_FX_FA: Agent A's extension of diagram_fx.js (Exam 3 diagrams, round 2)
   ==========================================================================
   Course file, loaded after diagram_fx.js and before diagrams_ey_fa.js. It adds, without editing
   diagram_fx.js:
     * CSS for text at 11.5 units (fa-t, fa-tb, fa-k, fa-w, fa-ok, fa-ts), chips, cards, a dashed ring
       and the 11.5-unit step caption (fa-cap), all through the course colour tokens, so light and
       dark mode follow the page;
     * Anat.eyeA   the anterior segment of Smith slides 14 (panel A) and 15-16 redrawn on the
                   slide's own parts: cornea, sclera, anterior and posterior chamber, iris, lens,
                   ciliary body with its processes and muscle, zonule, trabecular meshwork,
                   Schlemm's canal, a vein. Panel 360 wide, drawing at x 88-348, y 34-316 at s = 1.
                   Also installed as Anat.eyeAnterior (the old builder is kept as Anat.eyeAnterior0).
     * Anat.angleA the drainage angle zoomed (slide 14 panels A-C), with the iris in the open or the
                   closed position (a different data-k per state, so the engine cross-fades it).
                   Also installed as Anat.angle (the old builder is kept as Anat.angle0).
     * Anat.fa     helpers the three figures share: text, chips, cards, flows that can be drawn dim,
                   and the step markup with an 11.5-unit caption.
   Rules kept from diagram_fx.js: coordinates are mapped in JS (no transform attribute), every shape
   has a data-k, colours only through classes, no gradients and no filters, motion by CSS classes
   only (fx-flow, fx-drift, fx-pulse, fx-breathe) and none under reduced motion.
   ========================================================================== */
const DIAGRAM_FX_FA_CSS = `
.fig .fa-t{fill:var(--text);font-size:11.5px}
.fig .fa-tb{fill:var(--text);font-size:11.5px;font-weight:700}
.fig .fa-ts{fill:var(--text-dim);font-size:11.5px}
.fig .fa-k{fill:var(--accent);font-size:11.5px;font-weight:700}
.fig .fa-w{fill:var(--bad);font-size:11.5px;font-weight:700}
.fig .fa-ok{fill:var(--ok);font-size:11.5px;font-weight:700}
.fig .fa-chem{fill:var(--text);font-size:11.5px;font-weight:600}
.fig .fa-title{font-size:12.5px}
.fig .lbl.sm.capt.fa-caph{font-size:11.5px;font-weight:700}
.fig .lbl.xs.capt.fa-cap{font-size:11.5px;fill:var(--text)}
.fig .fa-chip{fill:var(--ok-bg);stroke:var(--ok);stroke-width:1.2}
.fig .fa-card{fill:var(--surface);stroke:var(--line);stroke-width:1}
.fig .fa-ring{fill:none;stroke:var(--text-dim);stroke-width:1.1;stroke-dasharray:3 2}
.fig .fa-blk{fill:none;stroke:var(--bad);stroke-width:3;stroke-linecap:round}
.fig .fa-arr{fill:none;stroke:var(--text-dim);stroke-width:1.4}
.fig .fa-hd{fill:var(--text-dim)}
.fig .fa-tmbad{fill:var(--paper);stroke:var(--bad);stroke-width:1.6;stroke-dasharray:2 2}
.fig .fa-cell{fill:var(--surface);stroke:var(--text-dim);stroke-width:1.4}
.fig .fa-lumen{fill:var(--accent);fill-opacity:.13;stroke:var(--line);stroke-width:1}
.fig .fa-blood{fill:var(--bad-bg);stroke:var(--bad);stroke-width:1.2}
.fig .fa-mv{fill:none;stroke:var(--text-dim);stroke-width:1.4;stroke-linejoin:round}
.fig .fa-tr{fill:var(--paper);stroke:var(--accent);stroke-width:1.3}
.fig .fa-nuc{fill:var(--paper);stroke:var(--text-dim);stroke-width:1.2}
`;
if (typeof document !== 'undefined' && document.head && !document.getElementById('diagramFxFaCss')) {
  const s = document.createElement('style'); s.id = 'diagramFxFaCss'; s.textContent = DIAGRAM_FX_FA_CSS; document.head.appendChild(s);
}

(() => {
  const r1 = v => Math.round(v * 10) / 10;
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const has = (arr, id) => !!arr && arr.indexOf(id) >= 0;
  const opa = (o, id) => (o.dim && o.dim.indexOf(id) >= 0) ? ' opacity="0.4"' : '';
  const frame = o => Anat.frame(o || {});
  const ell = Anat.ell;
  const W = 360;

  /* ---- one label: text lines (11.5 units, 12.5 apart) and an optional leader ---- */
  const label = (f, id, l) => {
    const [lx, ly] = l.at, an = l.anchor || 'start', cls = l.bold ? 'fa-tb' : 'fa-t';
    let s = l.lines.map((t, i) => `<text class="${cls}" data-k="an-${id}-t${i}" x="${f.X(lx)}" y="${f.Y(ly + i * 12.5)}" text-anchor="${an}">${esc(t)}</text>`).join('');
    if (l.to) {
      const [fx, fy] = l.from || [lx, ly + (l.lines.length - 1) * 12.5 + 3];
      s += `<path class="an-lead" data-k="an-${id}-l" d="${f.d(`M${fx} ${fy} L${l.to[0]} ${l.to[1]}`)}"/>`;
    }
    return s;
  };

  /* One builder from a table of parts: part {cls, d | lines, halo, lbl}. A part without d and lines
     only carries a label (the chambers are one fluid shape and two labels). */
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
     eyeA: Smith slide 14 panel A and slides 15-16. The visual axis is the right edge (x 348), the
     angle is at the left (x 180, y 146). Fluid is one shape (chambers and the strip the iris covers);
     the iris, the lens, the ciliary body and the processes lie on it.
     Parts: sclera cornea fl ac pc cbody musc muscl proc1-4 zon iris lens tm sc vein
     ======================================================================= */
  const EYE = {
    sclera: {cls: 'an-sclera', d: 'M166 128 C146 160 134 200 130 260 L128 306 L152 306 L152 262 C154 208 164 170 180 138 Z',
      lbl: {lines: ['Sclera'], at: [4, 198], to: [133, 201], from: [40, 195]}},
    cornea: {cls: 'an-cornea', d: 'M348 34 C280 34 205 66 166 128 L180 138 C216 80 285 46 348 46 Z',
      lbl: {lines: ['Cornea'], at: [172, 44], to: [246, 58], from: [206, 42]}},
    fl: {cls: 'an-fluid', d: 'M348 46 C285 46 216 80 180 138 L184 150 L196 170 C208 188 222 204 236 218 L250 226 C258 206 300 194 348 192 Z'},
    ac: {lbl: {lines: ['Anterior', 'chamber'], at: [290, 80]}},
    pc: {lbl: {lines: ['Posterior chamber'], at: [236, 306], to: [247, 226], from: [262, 295]}},
    cbody: {cls: 'an-cbody', d: 'M180 138 L184 150 L196 170 C208 188 222 204 236 218 L232 246 C208 266 180 288 154 306 L152 262 C154 208 164 170 180 138 Z',
      halo: 'M184 150 L196 170 C208 188 222 204 236 218 L232 246 C208 266 180 288 154 306',
      lbl: {lines: ['Ciliary body'], at: [4, 290], to: [186, 274], from: [70, 288]}},
    musc: {cls: 'an-musc', d: 'M170 172 C180 170 192 186 200 212 C206 232 202 250 192 266 C178 256 166 236 162 214 C160 196 164 180 170 172 Z',
      lbl: {lines: ['Ciliary muscle'], at: [4, 250], to: [166, 232], from: [82, 247]}},
    muscl: {cls: 'an-zon', lines: ['M176 190 C186 208 190 232 184 252']},
    proc1: {cls: 'an-proc', d: ell(205, 183, 5.5, 5.5)}, proc2: {cls: 'an-proc', d: ell(215, 195, 5.5, 5.5)},
    proc3: {cls: 'an-proc', d: ell(225, 207, 5.5, 5.5)}, proc4: {cls: 'an-proc', d: ell(234, 217, 5.5, 5.5)},
    zon: {cls: 'an-zon', lines: ['M238 212 L252 222', 'M241 221 L252 227', 'M238 230 L252 232']},
    iris: {cls: 'an-iris', d: 'M184 150 L322 176 Q329 181 322 186 L198 170 Q184 162 184 150 Z',
      lbl: {lines: ['Iris'], at: [262, 150], to: [274, 164], from: [270, 153]}},
    lens: {cls: 'an-lens', d: 'M348 192 C300 194 258 206 250 226 C258 248 300 262 348 264 Z',
      lbl: {lines: ['Lens'], at: [308, 234], anchor: 'middle'}},
    tm: {cls: 'an-tm', d: 'M174 136 L194 152 L176 168 Z',
      lbl: {lines: ['Trabecular', 'meshwork'], at: [4, 92], to: [180, 148], from: [66, 104]}},
    sc: {cls: 'an-sc', d: ell(164, 152, 7, 11),
      lbl: {lines: ['Schlemm’s', 'canal'], at: [4, 130], to: [157, 152], from: [62, 140]}},
    vein: {cls: 'an-vein', d: 'M118 238 C123 252 121 268 112 285 L108 282 C116 267 118 252 114 239 Z',
      lbl: {lines: ['into blood', 'vessels'], at: [4, 252], to: [108, 262], from: [58, 256]}},
  };
  const EYE_ORDER = ['sclera', 'cornea', 'fl', 'ac', 'pc', 'cbody', 'musc', 'muscl', 'iris', 'lens', 'proc1', 'proc2', 'proc3', 'proc4', 'zon', 'sc', 'tm', 'vein'];
  const EYE_ANCH = {axis: [348, 190], pupil: [338, 184], ac: [290, 100], pc: [270, 200], angle: [184, 147], tm: [182, 148], sc: [167, 149],
    vein: [114, 258], proc: [220, 200], musc: [182, 220], cbody: [190, 240], iris: [260, 168], lens: [308, 234]};
  const eyeA = (o = {}) => build(EYE, EYE_ORDER, o);
  eyeA.parts = EYE_ORDER.slice();
  eyeA.table = EYE;
  eyeA.anchor = (name, o = {}) => { const a = EYE_ANCH[name]; return a ? frame(o).at(a[0], a[1]) : null; };
  eyeA.frame = Anat.frame;
  eyeA.flows = {
    /* ciliary processes, through the posterior chamber, the pupil, across the anterior chamber, through the meshwork into the canal */
    inflow: 'M238 210 C256 198 292 194 330 190 C346 184 348 140 316 118 C286 100 250 112 226 124 C206 134 194 142 184 148 L166 152',
    out: 'M163 164 C150 192 132 224 118 250',
    uv: 'M190 158 C182 192 180 232 164 258 L142 292',
  };
  eyeA.eyeOnly = Object.keys(EYE).filter(k => EYE[k].d);
  Anat.eyeAnterior0 = Anat.eyeAnterior;
  Anat.eyeA = eyeA;
  Anat.eyeAnterior = eyeA;

  /* =======================================================================
     angleA: the drainage angle zoomed, Smith slide 14 panels A-C. Panel 360 wide; the picture spans
     x 4-356, y 24-268. o.state: 'open' (iris flat: panels A and B) or 'closed' (iris bowed forward
     over the meshwork: panel C). o.bad: draw the meshwork as dysfunctional (panel B).
     ======================================================================= */
  const IRIS_OPEN = 'M118 144 L312 166 Q320 172 312 178 L134 168 Q118 160 118 144 Z';
  const IRIS_CLOSED = 'M104 120 C104 104 120 100 130 108 C170 130 220 150 312 166 Q320 172 312 178 C240 174 180 166 140 158 C112 152 104 138 104 120 Z';
  const IRIS_CLOSED_HALO = 'M104 120 C104 104 120 100 130 108 C170 130 220 150 312 166';
  const ANG = o => ({
    sclera: {cls: 'an-sclera', d: 'M100 116 C74 148 62 196 58 262 L84 262 C86 204 98 164 112 128 Z',
      lbl: {lines: ['Sclera'], at: [4, 190], to: [66, 196], from: [40, 187]}},
    cornea: {cls: 'an-cornea', d: 'M350 26 C262 28 168 58 100 116 L112 128 C176 74 266 44 350 42 Z',
      lbl: {lines: ['Cornea'], at: [150, 36], to: [217, 50], from: [184, 38]}},
    fl: {cls: 'an-fluid', d: 'M350 42 C266 44 176 74 112 128 L118 144 L132 168 C150 186 190 204 216 214 L246 224 C262 202 300 190 350 188 Z'},
    ac: {lbl: {lines: ['Anterior', 'chamber'], at: [236, 78]}},
    cbody: {cls: 'an-cbody', d: 'M112 128 L118 144 L132 168 C150 186 190 204 216 214 L220 238 C200 256 160 268 84 268 L84 262 C86 204 98 164 112 128 Z',
      lbl: {lines: ['Ciliary', 'body'], at: [4, 232], to: [118, 242], from: [46, 238]}},
    musc: {cls: 'an-musc', d: 'M100 178 C112 170 126 182 134 202 C140 222 136 242 126 256 C112 250 98 230 94 210 C92 196 94 184 100 178 Z'},
    proc1: {cls: 'an-proc', d: ell(150, 186, 6, 6)}, proc2: {cls: 'an-proc', d: ell(167, 197, 6, 6)},
    proc3: {cls: 'an-proc', d: ell(184, 206, 6, 6)}, proc4: {cls: 'an-proc', d: ell(200, 213, 6, 6)},
    zon: {cls: 'an-zon', lines: ['M204 208 L248 218', 'M206 218 L248 224', 'M202 228 L246 230']},
    lens: {cls: 'an-lens', d: 'M350 190 C304 192 262 200 246 224 C262 246 304 256 350 258 Z',
      lbl: {lines: ['Lens'], at: [316, 226], anchor: 'middle'}},
    irisO: {cls: 'an-iris', d: IRIS_OPEN, halo: 'M118 144 L312 166', skip: o.state === 'closed',
      lbl: {lines: ['Iris'], at: [250, 140], to: [262, 163], from: [258, 143]}},
    irisC: {cls: 'an-iris', d: IRIS_CLOSED, halo: IRIS_CLOSED_HALO, skip: o.state !== 'closed',
      lbl: {lines: ['Iris'], at: [250, 140], to: [262, 163], from: [258, 143]}},
    tmO: {cls: 'an-tm', d: 'M106 126 L124 146 L108 154 Z', skip: !!o.bad || o.state === 'closed',
      lbl: {lines: ['Trabecular', 'meshwork'], at: [4, 66], to: [108, 140], from: [66, 78]}},
    tmB: {cls: 'fa-tmbad', d: 'M106 126 L124 146 L108 154 Z', skip: !(o.bad && o.state !== 'closed'),
      lbl: {lines: ['Trabecular', 'meshwork'], at: [4, 66], to: [108, 140], from: [66, 78]}},
    tmC: {cls: 'an-tm', d: 'M106 126 L124 146 L108 154 Z', skip: o.state !== 'closed',
      lbl: {lines: ['Trabecular', 'meshwork'], at: [4, 66], to: [108, 140], from: [66, 78]}},
    sc: {cls: 'an-sc', d: ell(94, 142, 8, 12),
      lbl: {lines: ['Schlemm’s', 'canal'], at: [4, 126], to: [86, 142], from: [62, 136]}},
  });
  const ANG_ORDER = ['sclera', 'cornea', 'fl', 'ac', 'cbody', 'musc', 'proc1', 'proc2', 'proc3', 'proc4', 'zon', 'lens', 'sc', 'tmO', 'tmB', 'tmC', 'irisO', 'irisC'];
  const angleA = (o = {}) => {
    const T = ANG(o);
    Object.keys(T).forEach(k => { if (T[k].skip) delete T[k].d; });   /* a part not drawn in this state keeps its label only if asked */
    const keep = {};
    ANG_ORDER.forEach(k => { if (!(T[k].skip)) keep[k] = T[k]; });
    /* the tm labels: one of the three tm parts is drawn; only that one writes the label */
    const o2 = Object.assign({}, o);
    if (has(o.label, 'tm')) o2.label = o.label.map(l => l === 'tm' ? (o.state === 'closed' ? 'tmC' : o.bad ? 'tmB' : 'tmO') : l);
    if (has(o.label, 'iris')) o2.label = (o2.label || o.label).map(l => l === 'iris' ? (o.state === 'closed' ? 'irisC' : 'irisO') : l);
    if (has(o.hi, 'tm')) o2.hi = o.hi.map(l => l === 'tm' ? (o.state === 'closed' ? 'tmC' : o.bad ? 'tmB' : 'tmO') : l);
    if (has(o.hiS, 'tm')) o2.hiS = o.hiS.map(l => l === 'tm' ? (o.state === 'closed' ? 'tmC' : o.bad ? 'tmB' : 'tmO') : l);
    if (has(o.hi, 'iris')) o2.hi = (o2.hi || o.hi).map(l => l === 'iris' ? (o.state === 'closed' ? 'irisC' : 'irisO') : l);
    return build(keep, ANG_ORDER, o2);
  };
  angleA.parts = ANG_ORDER.slice();
  angleA.anchor = (name, o = {}) => {
    const a = {tm: [114, 142], sc: [94, 142], angle: [112, 140], iris: [262, 163], lens: [316, 226], cbody: [150, 236]}[name];
    return a ? frame(o).at(a[0], a[1]) : null;
  };
  angleA.flows = {
    /* from the processes under the iris, through the pupil, across the anterior chamber to the angle */
    open: 'M176 200 C220 204 290 192 330 184 C348 172 346 124 306 108 C250 90 196 110 150 128 L124 141',
    /* panel C: the flow reaches the bowed iris and stops */
    closed: 'M176 200 C220 204 290 192 330 184 C348 172 346 124 306 108 C250 94 200 112 150 124',
  };
  angleA.irisOpen = IRIS_OPEN; angleA.irisClosed = IRIS_CLOSED;
  Anat.angle0 = Anat.angle;
  Anat.angleA = angleA;
  Anat.angle = angleA;

  /* =======================================================================
     Anat.fa: helpers the figures share
     ======================================================================= */
  const fa = {};
  fa.W = W;
  fa.esc = esc;
  /* text: x, y, words, key, class, anchor, opacity */
  fa.T = (x, y, s, k, c = 'fa-t', a = 'start', op) =>
    `<text class="${c}" data-k="${k}" x="${r1(x)}" y="${r1(y)}" text-anchor="${a}"${op != null ? ` opacity="${op}"` : ''}>${esc(s)}</text>`;
  fa.TL = (x, y, arr, k, c = 'fa-t', a = 'start', dy = 13) => arr.map((s, i) => fa.T(x, y + i * dy, s, k + i, c, a)).join('');
  fa.R = (x, y, w, h, k, c = 'fa-card', rx = 6) => `<rect class="${c}" data-k="${k}" x="${r1(x)}" y="${r1(y)}" width="${r1(w)}" height="${r1(h)}" rx="${rx}"/>`;
  /* a chip: rectangle and its lines, the first bold (drug names, steps); height from the number of lines */
  fa.chipH = n => n * 13 + 9;
  fa.chip = (x, y, w, lines, k, h, plain) => {
    const hh = h || fa.chipH(lines.length), ty = h ? y + hh / 2 + 4 - (lines.length - 1) * 6.5 : y + 15;
    return fa.R(x, y, w, hh, 'c' + k, 'fa-chip', 5) +
      lines.map((s, i) => fa.T(x + 6, ty + i * 13, s, 'c' + k + 't' + i, i || plain ? 'fa-t' : 'fa-tb')).join('');
  };
  fa.card = (x, y, w, head, lines, k, hcls = 'fa-k') => {
    const hh = 14 + lines.length * 13 + 8;
    return fa.R(x, y, w, hh, 'k' + k, 'fa-card', 6) + fa.T(x + 7, y + 15, head, 'k' + k + 'h', hcls) +
      lines.map((s, i) => fa.T(x + 7, y + 29 + i * 13, s, 'k' + k + 't' + i, 'fa-t')).join('');
  };
  /* a small arrow: a line and a head polygon (not an SVG marker: a marker inside a hidden copy is not drawn) */
  fa.arrow = (d, k, o = {}) => {
    const n = d.match(/-?[\d.]+/g).map(Number), ex = n[n.length - 2], ey = n[n.length - 1], px = n[n.length - 4], py = n[n.length - 3];
    const L = Math.hypot(ex - px, ey - py) || 1, ux = (ex - px) / L, uy = (ey - py) / L, s = 7, w = 3.6;
    const bx = ex - ux * s, by = ey - uy * s, op = o.op != null ? ` opacity="${o.op}"` : '';
    return `<path class="fa-arr" data-k="${k}" d="${d}"${op}/>` +
      `<polygon class="fa-hd" data-k="${k}^" points="${r1(ex)},${r1(ey)} ${r1(bx - uy * w)},${r1(by + ux * w)} ${r1(bx + uy * w)},${r1(by - ux * w)}"${op}/>`;
  };
  /* a flow: animated when live; with o.dim it is the lane and head only, drawn at 0.4 and not animated */
  fa.flow = (d, k, o = {}) => {
    if (!o.dim) return Anat.flow(d, k, o);
    const f = frame(o), dd = f.d(d), n = dd.match(/-?[\d.]+/g).map(Number);
    const ex = n[n.length - 2], ey = n[n.length - 1], px = n[n.length - 4], py = n[n.length - 3];
    const L = Math.hypot(ex - px, ey - py) || 1, ux = (ex - px) / L, uy = (ey - py) / L, sz = 8, w = 4, bx = ex - ux * sz, by = ey - uy * sz;
    return `<path class="fx-lane" data-k="${k}~" d="${dd}" opacity="0.4"/>` +
      `<polygon class="fx-head" data-k="${k}^" points="${r1(ex)},${r1(ey)} ${r1(bx - uy * w)},${r1(by + ux * w)} ${r1(bx + uy * w)},${r1(by - ux * w)}" opacity="0.4"/>`;
  };
  fa.blk = (x1, y1, x2, y2, k) => `<path class="fa-blk" data-k="${k}" d="M${x1} ${y1} L${x2} ${y2}"/>`;
  fa.ring = (cx, cy, r, k) => `<path class="fa-ring" data-k="${k}" d="${ell(cx, cy, r, r)}"/>`;
  /* the step markup stepper() writes, with a caption of 11.5 units wrapped at 54 characters (three lines at most) */
  const CAP_W = 54, CAP_DY = 13;
  fa.capLines = t => {
    const out = []; let cur = '';
    String(t).split(' ').forEach(w => { if ((cur + ' ' + w).trim().length > CAP_W) { out.push(cur.trim()); cur = w; } else cur += ' ' + w; });
    out.push(cur.trim());
    return out.filter(Boolean);
  };
  fa.stepper = (key, title, steps, h, cap) => {
    let g = `<text class="title fa-title" x="${W / 2}" y="13" text-anchor="middle">${esc(title)}</text>`;
    steps.forEach((st, i) => {
      const lines = fa.capLines(st[0]);
      if (lines.length > 3) lines.length = 3;
      g += `<g class="st${i === 0 ? ' on' : ''}" data-step="${i + 1}">${st[1]}` +
        `<text class="lbl sm capt fa-caph" x="6" y="${h - 5 - lines.length * CAP_DY}" text-anchor="start">Step ${i + 1} of ${steps.length}</text>` +
        lines.map((l, k) => `<text class="lbl xs capt fa-cap" x="6" y="${h - 5 - (lines.length - 1 - k) * CAP_DY}" text-anchor="start">${esc(l)}</text>`).join('') +
        `</g>`;
    });
    const dots = steps.map((st, i) => `<button class="sdot${i === 0 ? ' on' : ''}" data-go="dot" data-i="${i}" aria-label="Go to step ${i + 1}"></button>`).join('');
    const controls = `<div class="anim" data-anim="${key}">` +
      `<button class="btn ghost" data-go="-1">◀ Back</button><button class="btn ghost" data-go="1">Next ▶</button>` +
      `<button class="btn ghost" data-go="replay">↻ Replay step</button><button class="btn ghost" data-go="play">▶ Play all</button>` +
      `<span class="sdots">${dots}</span></div>`;
    return figure(g, cap, h).replace('</svg>', '</svg>' + controls);
  };
  fa.CAP_W = CAP_W;
  Anat.fa = fa;
})();
