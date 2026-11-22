/* ==========================================================================
   DIAGRAM_FX_FULL: the front of the eye as a full, two-sided section (Exam 3 glaucoma figures)
   ==========================================================================
   Course file, loaded after diagram_fx_fa2.js and before diagrams_ey.js (course.js `files`). It edits
   no other helper. Louis, 2026-11-22: "the full image of an eye would be better than half of it".
   It adds Anat.full, an original flat schematic (no slide or reference pixels, nothing traced):
   the cornea as a dome, the iris on both sides with the pupil as the gap between them, the lens
   behind the pupil, the ciliary body (processes, muscle, epithelium, pars plana) behind each iris
   root, the posterior chamber between iris and lens, the anterior chamber between cornea and iris,
   the angle on each side with the trabecular meshwork and Schlemm's canal, the sclera, the
   conjunctiva and the vitreous humor. Every part named is one Dr. Smith's slides 14-16 label.
     Anat.full(o)            the shapes. o: x, y, s (frame); omit, dim, hi (breathing halo), hiS (static
                             halo), label: lists of part ids; lab: {id: label override};
                             iris: 'flat' | 'bowed' (slide 14 panel C); tm: 'ok' | 'bad' (panel B);
                             pupil: 'wide' | 'narrow' (the flat iris drawn shorter or longer: slide 7).
                             Parts sph (pupillary sphincter, at the pupil edge of the iris) and dil
                             (dilator muscle, along the iris) follow the iris; figures omit them unless needed.
                             A part id names both sides (tm = left and right meshwork).
     Anat.full.flow(d, k, o) a flow drawn on BOTH sides from the left-hand path d (the right side is
                             its mirror image): one lane, one marching path (two subpaths, so one
                             animated element) and a head per side. o: drift (dots), dim (static,
                             pale), slow (marches at a third of the speed: resisted flow), side 'L'.
     Anat.full.flows         the left-hand paths: inflow, tm, uv, stop (ends at the bowed iris).
     Anat.full.anchor(n, o)  a named point, mapped like the shapes; .mx(x) mirrors an x.
   Labels sit on the left side and in the middle; the right side mirrors the shapes.
   Rules kept from diagram_fx.js: coordinates mapped in JS (no transform attribute), every shape has
   a data-k (fu-...), colours through classes only, no gradients, no filters, motion by fx classes
   only and none under prefers-reduced-motion (the fx rules of diagram_fx.js).
   ========================================================================== */
const DIAGRAM_FX_FULL_CSS = `
.fig .fx-flow.fu-slow{animation-duration:3.6s}
.fig .st .fadein.fx-flow.fu-slow{animation-duration:.5s,3.6s}
.fig .fu-back{fill:var(--paper);stroke:none}
.fig .fu-sph{fill:var(--text-dim);fill-opacity:.55;stroke:none}
.fig .fx-drift.fu-slow{animation-duration:4.8s}
.fig .st .fadein.fx-drift.fu-slow{animation-duration:.5s,4.8s}
.fig .fu-dil{fill:none;stroke:var(--text-dim);stroke-width:2.6;stroke-dasharray:1.6 2.4}
.fig .fu-rule{fill:none;stroke:var(--text-dim);stroke-opacity:.5;stroke-width:1}
.fig .fu-zpan{fill:var(--paper);stroke:none}
.fig .fu-zfrm{fill:none;stroke:var(--text-dim);stroke-width:1.4}
`;
if (typeof document !== 'undefined' && document.head && !document.getElementById('diagramFxFullCss')) {
  const s = document.createElement('style'); s.id = 'diagramFxFullCss'; s.textContent = DIAGRAM_FX_FULL_CSS; document.head.appendChild(s);
}

(() => {
  if (typeof Anat === 'undefined' || !Anat.fa || !Anat.fa2) return;
  const r1 = v => Math.round(v * 10) / 10;
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const has = (arr, id) => !!arr && arr.indexOf(id) >= 0;
  const ell = Anat.ell, frame = o => Anat.frame(o || {});
  const CX = 226;                                                   /* the visual axis */
  const mx = x => r1(2 * CX - x);
  /* mirror a path of absolute M L C Q Z commands about the axis */
  const mir = str => { let i = 0; return str.replace(/-?\d*\.?\d+/g, n => (i++ % 2 === 0 ? mx(+n) : n)); };

  /* ---- the parts, authored for the LEFT side; `both` parts are mirrored, `one` parts span the axis ---- */
  const IRIS_FLAT = 'M127 160 L198 168 Q204 173 198 178 L137 174 Q126 168 127 160 Z';
  const IRIS_BOWED = 'M133 173 C124 162 127 142 132 134 C140 124 158 136 172 148 C182 156 190 162 198 166 Q204 171 198 176 C182 172 166 167 152 170 Q140 176 133 173 Z';
  const CB = 'M124 157 L136 174 C150 182 160 194 162 208 C158 226 142 250 115 270 C116 228 118 190 124 157 Z';
  const CB_IN = 'M136 174 C150 182 160 194 162 208 C158 226 142 250 115 270';
  const TMD = 'M119 145 L136 158 L121 170 Z';
  const P = {
    vit: {one: 1, cls: 'fa-vit', d: 'M115 270 C142 250 158 226 162 208 L290 208 C294 226 310 250 337 270 Z'},
    sclera: {cls: 'an-sclera', d: 'M112 152 C106 186 103 226 102 270 L115 270 C116 228 118 190 124 157 Z',
      lbl: {lines: ['Sclera'], at: [4, 190], to: [105, 196], from: [40, 187]}},
    conj: {cls: 'fa-conj', d: 'M110 146 C103 164 99.5 180 98 197 L103 197 C104.5 181 107 166 112.5 152 Z',
      lbl: {lines: ['Conjunctiva'], at: [4, 170], to: [101, 176], from: [68, 167]}},
    cornea: {one: 1, cls: 'an-cornea', d: 'M112 152 C119 98 166 56 226 56 C286 56 333 98 340 152 L328 157 C321 108 280 69 226 69 C172 69 131 108 124 157 Z',
      lbl: {lines: ['Cornea'], at: [136, 46], to: [176, 66], from: [164, 49]}},
    fl: {one: 1, cls: 'an-fluid', d: 'M124 157 C131 108 172 69 226 69 C280 69 321 108 328 157 L316 174 L290 210 L162 210 L136 174 Z'},
    cbody: {cls: 'an-cbody', d: CB, halo: CB_IN,
      lbl: {lines: ['Ciliary body'], at: [4, 240], to: [137, 232], from: [70, 237]}},
    pp: {cls: 'fa-pp', d: 'M116.5 250 L115 270 C124 263.5 132 256.5 139 249 C131 249 123 249 116.5 250 Z',
      lbl: {lines: ['Pars plana'], at: [4, 256], to: [118, 257], from: [58, 253]}},
    musc: {cls: 'an-musc', d: 'M123 175 C133 179 140 194 139 212 C137 230 128 242 118 248 C117 224 119 196 123 175 Z',
      lbl: {lines: ['Ciliary muscle'], at: [4, 224], to: [126, 214], from: [82, 221]}},
    muscl: {cls: 'an-zon', lines: ['M125 190 C131 204 131 222 123 238']},
    epi: {cls: 'fa-epi', lines: [CB_IN],
      lbl: {lines: ['Ciliary', 'epithelium'], at: [56, 288], to: [141, 250], from: [92, 278]}},
    iris: {cls: 'fa-iris', d: IRIS_FLAT, bowed: IRIS_BOWED,
      lbl: {lines: ['Iris'], at: [178, 160], to: [189, 171], from: [189, 162]}},
    dil: {cls: 'fu-dil', lines: ['M140 170.7 L188 172.7']},
    sph: {cls: 'fu-sph', d: ell(195, 173, 5, 3.4)},
    lensbk: {one: 1, cls: 'fu-back', d: ell(CX, 222, 60, 31)},
    lens: {one: 1, cls: 'fa-lens', d: ell(CX, 222, 60, 31),
      lbl: {lines: ['Lens'], at: [CX, 226], anchor: 'middle'}},
    proc1: {cls: 'an-proc', d: ell(151, 187, 5, 5)}, proc2: {cls: 'an-proc', d: ell(158, 198, 5, 5)}, proc3: {cls: 'an-proc', d: ell(161, 210, 5, 5)},
    zon: {cls: 'an-zon', lines: ['M164 202 L174 211', 'M166 212 L170 218', 'M164 219 L170 226']},
    sc: {cls: 'an-sc', d: ell(114.8, 157.5, 4.6, 7.6),
      lbl: {lines: ['Schlemm’s', 'canal'], at: [4, 132], to: [110.4, 157], from: [60, 138]}},
    tm: {cls: 'an-tm', bad: 'fa-tmbad', d: TMD,
      lbl: {lines: ['Trabecular', 'meshwork'], at: [4, 96], to: [124, 154], from: [62, 102]}},
    vein: {cls: 'an-vein', d: ell(103.5, 192, 3.2, 6),
      lbl: {lines: ['into blood', 'vessels'], at: [4, 186], to: [100.5, 192], from: [58, 190]}},
    /* label-only parts */
    ac: {one: 1, lbl: {lines: ['Anterior', 'chamber'], at: [CX, 90], anchor: 'middle'}},
    pupil: {one: 1, lbl: {lines: ['Pupil'], at: [CX, 124], anchor: 'middle', to: [CX, 173], from: [CX, 128]}},
    pc: {one: 1, lbl: {lines: ['Posterior', 'chamber'], at: [130, 288], to: [172, 200], from: [150, 278]}},
    proc: {one: 1, lbl: {lines: ['Ciliary processes'], at: [4, 208], to: [146.5, 189], from: [98, 205]}},
    vitl: {one: 1, lbl: {lines: ['Vitreous humor'], at: [CX, 266], anchor: 'middle'}},
    flowl: {one: 1, lbl: {lines: ['Aqueous', 'flow'], at: [356, 30], anchor: 'end', to: [282, 137], from: [330, 46]}},
  };
  const ORDER = ['vit', 'sclera', 'conj', 'cornea', 'fl', 'cbody', 'pp', 'musc', 'muscl', 'epi', 'iris', 'dil', 'sph', 'lensbk', 'lens', 'proc1', 'proc2', 'proc3', 'zon', 'sc', 'tm', 'vein',
    'ac', 'pupil', 'pc', 'proc', 'vitl', 'flowl'];

  const label = (f, id, l) => {
    const [lx, ly] = l.at, an = l.anchor || 'start', cls = l.bold ? 'fa-tb' : 'fa-t';
    let s = l.lines.map((t, i) => `<text class="${cls}" data-k="fu-${id}-t${i}" x="${f.X(lx)}" y="${f.Y(ly + i * 12.5)}" text-anchor="${an}">${esc(t)}</text>`).join('');
    if (l.to) {
      const [fx, fy] = l.from || [lx, ly + (l.lines.length - 1) * 12.5 + 3];
      s += `<path class="an-lead" data-k="fu-${id}-l" d="${f.d(`M${fx} ${fy} L${l.to[0]} ${l.to[1]}`)}"/>`;
    }
    return s;
  };

  const full = (o = {}) => {
    const f = frame(o);
    const dimmed = (id, side) => has(o.dim, id) || has(o.dim, id + side);
    const op = (id, side) => dimmed(id, side) ? ' opacity="0.4"' : '';
    let out = '', halos = '', labs = '';
    const tip = o.pupil === 'wide' ? 184 : o.pupil === 'narrow' ? 212 : 198;
    /* the bowed iris (angle closure) lies on the meshwork, so it is drawn after it */
    const order = o.iris === 'bowed' ? ORDER.filter(id => id !== 'iris').concat(['iris']) : ORDER;
    order.forEach(id => {
      const p = P[id]; if (!p || has(o.omit, id)) return;
      let d = p.d, cls = p.cls, st = '', lines = p.lines;
      if (id === 'iris' && o.iris === 'bowed') { d = p.bowed; st = '-b'; }
      if (id === 'tm' && o.tm === 'bad') { cls = p.bad; st = '-b'; }
      /* slide 7: the pupil wider or narrower; the iris, its sphincter and its dilator follow (a key per state: they cross-fade) */
      if (tip !== 198 && o.iris !== 'bowed' && (id === 'iris' || id === 'sph' || id === 'dil')) {
        st = o.pupil === 'wide' ? '-w' : '-n';
        if (id === 'iris') d = `M127 160 L${tip} 168 Q${tip + 6} 173 ${tip} 178 L137 174 Q126 168 127 160 Z`;
        if (id === 'sph') d = ell(tip - 3, 173, 5, 3.4);
        if (id === 'dil') lines = [`M140 170.7 L${tip - 10} 172.7`];
      }
      if (lines) {
        lines.forEach((ln, i) => {
          out += `<path class="${cls}" data-k="fu-${id}${st}${i}L" d="${f.d(ln)}"${op(id, 'L')}/>`;
          if (!p.one) out += `<path class="${cls}" data-k="fu-${id}${st}${i}R" d="${f.d(mir(ln))}"${op(id, 'R')}/>`;
        });
      } else if (d) {
        if (p.one) out += `<path class="${cls}" data-k="fu-${id}" d="${f.d(d)}"${op(id, '')}/>`;
        else out += `<path class="${cls}" data-k="fu-${id}${st}L" d="${f.d(d)}"${op(id, 'L')}/>` +
          `<path class="${cls}" data-k="fu-${id}${st}R" d="${f.d(mir(d))}"${op(id, 'R')}/>`;
      }
      /* a halo names both sides in ONE path (two subpaths), so it is one animated element */
      const hd = id === 'iris' && o.iris === 'bowed' ? p.bowed : (p.halo || d || (p.lines && p.lines[0]));
      if (hd && (has(o.hi, id) || has(o.hiS, id))) {
        const dd = p.one ? f.d(hd) : f.d(hd) + ' ' + f.d(mir(hd));
        halos += `<path class="fx-glow${has(o.hi, id) ? ' fx-breathe' : ''}" data-k="fu-${id}${st}-${has(o.hi, id) ? 'hl' : 'hs'}" d="${dd}"/>`;
      }
      if (has(o.label, id) && p.lbl) labs += label(f, id, Object.assign({}, p.lbl, (o.lab || {})[id]));
    });
    return out + halos + labs;
  };

  /* named points (left side unless the name ends in R) */
  const A = {axis: [CX, 150], pupil: [CX, 173], ac: [CX, 100], pc: [180, 190], angle: [129, 159], tm: [126, 157.5], sc: [114.8, 157.5], vein: [103.5, 192],
    proc: [158, 198], p1: [151, 187], p2: [158, 198], p3: [161, 210], musc: [129, 212], cbody: [140, 226], uv: [119, 246], iris: [170, 169],
    irisEnd: [196, 173], lens: [CX, 224]};
  Object.keys(A).slice().forEach(k => { A[k + 'R'] = [mx(A[k][0]), A[k][1]]; });
  full.A = A; full.mx = mx; full.mir = mir; full.table = P; full.CX = CX;
  full.anchor = (name, o = {}) => { const a = A[name]; return a ? frame(o).at(a[0], a[1]) : null; };
  full.irisFlat = IRIS_FLAT; full.irisBowed = IRIS_BOWED;

  /* the left-hand flow paths */
  full.flows = {
    /* made at the ciliary processes, into the posterior chamber, forward through the pupil, across the anterior chamber to the meshwork */
    inflow: 'M168 200 C178 190 192 184.5 205 184 C219 183.5 217 166 214 152 C210 132 178 128 137 154',
    /* through the meshwork into Schlemm's canal and on to a vein */
    tm: 'M160 140 C148 148 130 157 116 157.5 C108 160 105 172 104 187',
    /* the same, from the meshwork on (after an inflow arrow that ends at the meshwork) */
    tmOut: 'M135 157.5 C128 158 122 158 116 157.5 C108 160 105 172 104 187',
    /* the uveoscleral route: in at the root of the iris, through the ciliary body, along the inside of the sclera */
    uv: 'M137 166 C130 186 124 214 120 240 L117 264',
    /* angle closure (slide 14 panel C): the flow reaches the bowed iris and stops before the meshwork */
    stop: 'M168 200 C178 190 192 184.5 205 184 C219 183.5 217 166 214 152 C211 134 188 122 155 122',
  };
  const head = (dd, k, sz, w, opAttr) => {
    const n = dd.match(/-?[\d.]+/g).map(Number);
    const ex = n[n.length - 2], ey = n[n.length - 1], px = n[n.length - 4], py = n[n.length - 3];
    const L = Math.hypot(ex - px, ey - py) || 1, ux = (ex - px) / L, uy = (ey - py) / L, bx = ex - ux * sz, by = ey - uy * sz;
    return `<polygon class="fx-head" data-k="${k}" points="${r1(ex)},${r1(ey)} ${r1(bx - uy * w)},${r1(by + ux * w)} ${r1(bx + uy * w)},${r1(by - ux * w)}"${opAttr}/>`;
  };
  full.flow = (d, k, o = {}) => {
    const f = frame(o), dl = f.d(d), dr = f.d(mir(d));
    const dd = o.side === 'L' ? dl : dl + ' ' + dr;
    const opA = o.dim ? ' opacity="0.4"' : '';
    const hs = (o.hs || 1) * (f.s < 1 ? Math.max(f.s, 0.6) : 1);
    let s = `<path class="fx-lane" data-k="${k}~" d="${dd}"${opA}/>`;
    if (!o.dim) s += `<path class="${o.drift ? 'fx-drift' : 'fx-flow'}${o.slow ? ' fu-slow' : ''}" data-k="${k}" d="${dd}"/>`;
    if (o.head !== false) {
      s += head(dl, k + '^L', 8 * hs, 4 * hs, opA);
      if (o.side !== 'L') s += head(dr, k + '^R', 8 * hs, 4 * hs, opA);
    }
    return s;
  };

  /* =======================================================================
     zoom: one angle enlarged (the LEFT angle of the full view, same way up): the cornea coming down
     from the upper right to its junction with the sclera, the trabecular meshwork on the inside of
     that junction, Schlemm's canal in the wall beside it, a vein on the outside of the sclera, the
     root of the iris, and the ciliary body with its muscle against the sclera (slide 14 panels A-C,
     slides 15-16). A panel 344 x 172; the strip left of the wall (x 0-100) is outside the eye and
     holds labels. o: x, y (where the panel's corner goes); iris 'flat' | 'bowed'; tm 'ok' | 'bad';
     hi: ['musc'] (breathing halo); dim: [ids].
     Keys az-*. Anat.full.zoom.flows: the two routes; .A: named points (panel coordinates).
     ======================================================================= */
  const ZW = 344, ZH = 172;
  const Z = {
    cornea: {cls: 'an-cornea', d: 'M256 0 C200 12 150 34 120 62 L134 72 C170 42 236 14 320 0 Z'},
    sclera: {cls: 'an-sclera', d: 'M120 62 C110 94 104 132 102 172 L120 172 C122 138 126 102 134 72 Z'},
    ac: {cls: 'an-fluid', d: 'M134 72 C170 42 236 14 320 0 L344 0 L344 172 L120 172 C122 138 126 102 134 72 Z'},
    cbody: {cls: 'an-cbody', d: 'M132 104 L160 120 C212 126 246 146 256 172 L120 172 C122 146 126 120 132 104 Z'},
    musc: {cls: 'an-musc', d: 'M134 112 C160 118 176 140 178 172 L120.5 172 C122 148 127 126 134 112 Z', halo: 'M131 124 C132 119 133 115 134 112 C160 118 175 138 177.5 166'},
    muscl: {cls: 'an-zon', lines: ['M142 126 C154 140 157 156 157 170', 'M132 134 C139 148 141 160 140 170']},
    proc: {cls: 'an-proc', d: ell(214, 131, 7, 7)},
    sc: {cls: 'an-sc', d: ell(122.5, 84, 5.5, 10)},
    tm: {cls: 'an-tm', bad: 'fa-tmbad', d: 'M136 60 L158 82 L129 104 Z'},
    vein: {cls: 'an-vein', d: ell(104.5, 128, 5, 9)},
    iris: {cls: 'fa-iris', d: 'M144 100 L344 112 L344 132 L160 120 Q142 114 144 100 Z',
      bowed: 'M148 118 C134 104 136 74 148 60 C164 44 200 70 260 92 C300 104 330 110 344 112 L344 132 C320 128 262 112 210 108 C180 106 166 112 158 120 Q152 122 148 118 Z'},
  };
  const ZORD = ['ac', 'cornea', 'sclera', 'cbody', 'musc', 'muscl', 'proc', 'sc', 'tm', 'vein', 'iris'];
  const zoom = (o = {}) => {
    const f = frame({x: o.x || 0, y: o.y || 0});
    const op = id => has(o.dim, id) ? ' opacity="0.4"' : '';
    let out = `<rect class="fu-zpan" data-k="az-bg" x="${f.X(0)}" y="${f.Y(0)}" width="${ZW}" height="${ZH}"/>`, halo = '';
    ZORD.forEach(id => {
      const p = Z[id]; if (has(o.omit, id)) return;
      let d = p.d, cls = p.cls, st = '';
      if (id === 'iris' && o.iris === 'bowed') { d = p.bowed; st = '-b'; }
      if (id === 'tm' && o.tm === 'bad') { cls = p.bad; st = '-b'; }
      if (p.lines) p.lines.forEach((ln, i) => { out += `<path class="${cls}" data-k="az-${id}${i}" d="${f.d(ln)}"${op(id)}/>`; });
      else out += `<path class="${cls}" data-k="az-${id}${st}" d="${f.d(d)}"${op(id)}/>`;
      if (has(o.hi, id)) halo += `<path class="fx-glow fx-breathe" data-k="az-${id}-hl" d="${f.d(p.halo || d)}"/>`;
    });
    return out + halo;
  };
  /* the frame is drawn last, over everything placed in the panel */
  zoom.frame = (o = {}) => `<rect class="fu-zfrm" data-k="az-frm" x="${r1(o.x || 0)}" y="${r1(o.y || 0)}" width="${ZW}" height="${ZH}" rx="3"/>`;
  zoom.W = ZW; zoom.H = ZH; zoom.table = Z;
  zoom.A = {tm: [141, 82], tmU: [143, 75], tmL: [140, 90], sc: [122.5, 84], vein: [104.5, 128], musc: [148, 148], uv: [130, 152], iris: [300, 122],
    sclera: [111, 148], cornea: [190, 26]};
  zoom.flows = {
    /* the trabecular route: across the anterior chamber, through the meshwork, into the canal, out to the vein */
    tm: 'M326 66 C270 72 210 80 160 82 L124 84 C112 92 107 104 105 117',
    tmIn: 'M326 66 C280 70 220 78 166 81',                      /* as far as a resisting meshwork */
    tmOut: 'M160 82 L124 84 C112 92 107 104 105 117',            /* from the meshwork on */
    /* the uveoscleral route: along the iris to its root, into the ciliary body, down between the ciliary muscle and the sclera */
    uv: 'M300 101 C250 98 190 95 150 100 C140 120 132 146 128 166',
    uvShort: 'M178 96.5 C168 96 158 97 150 100 C140 120 132 146 128 166',
    /* angle closure: the flow stops where the bowed iris meets the cornea */
    stop: 'M330 44 C290 48 250 50 204 52',
  };
  zoom.flow = (d, k, o = {}) => {
    const f = frame({x: o.x || 0, y: o.y || 0}), dd = f.d(d), opA = o.dim ? ' opacity="0.4"' : '';
    let s = `<path class="fx-lane" data-k="${k}~" d="${dd}"${opA}/>`;
    if (!o.dim) s += `<path class="${o.drift ? 'fx-drift' : 'fx-flow'}${o.slow ? ' fu-slow' : ''}" data-k="${k}" d="${dd}"/>`;
    if (o.head !== false) s += head(dd, k + '^', 9, 4.5, opA);
    return s;
  };
  full.zoom = zoom;

  Anat.full = full;
})();
