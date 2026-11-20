/* ==========================================================================
   DIAGRAM_FX_FC: Anat.ear and Anat.tooth redrawn after Dr. Sikazwe's slides
   ==========================================================================
   Course file, loaded after diagram_fx.js (it replaces Anat.ear and Anat.tooth, which diagram_fx.js
   defines) and before diagrams_oo_fc.js. Same conventions as diagram_fx.js: every builder returns
   SVG shapes with stable data-k ids (an-<part>), no transform attributes, colours only as classes
   (the course tokens, so dark mode follows the page), no gradients, no filters. Options common to
   both: x, y, s (origin and scale, applied in JS), hi (part ids that get a halo), dim (part ids drawn
   at opacity 0.4), label (part ids that get a label and a leader line), lab (per-part label override).
   `.parts` lists the part ids and `.anchor(name, opts)` returns a point mapped like the shapes.

   Anat.ear: coronal section of the ear, outside at the right, after Sikazwe_OOO_mc.pdf slide 5
   (labels the slide prints: ear drum, Eustachian tube, ear wax, ear canal). The slide also draws the
   outer ear, the middle ear and the cochlea without a label: they are drawn here in a neutral line
   and are never labelled. About 330 x 176 at s = 1.
     opts.wax: 'whole' (impacted in the canal) | 'broken' (three pieces) | 'none'
     opts.bubbles: draw O2 bubbles at the wax (class fc-bub; the figure labels them)
     Parts: bone pinna canal mid coch drum eust wax (whole) wx0-2 (broken) bub0-4
   Anat.tooth: tooth in section with the gum and an enlarged circle of the enamel lattice, after slides
   16-18 (plaque and gums, enamel, hydroxyapatite Ca10(PO4)6(OH)2, fluoride replacing OH groups to give
   fluorapatite Ca10(PO4)6F2). The slides name no other part, so none other is labelled. About 150 x 196
   at s = 1, plus the circle (opts.zoom !== false) at (zx, zy) = (236, 88), radius 76.
     opts.fluoride: false draws OH marks in the lattice, true draws F marks (different key per state,
     so the marks cross-fade)
     opts.plaque: draw the plaque layer on the crown
     Parts: gum tooth enamel plaque zoom hx0-9 mk0-9
   ========================================================================== */
const DIAGRAM_FX_FC_CSS = `
.fig .fc-mid{fill:var(--paper);stroke:var(--text-dim);stroke-width:1.2}
.fig .fc-coch{fill:none;stroke:var(--text-dim);stroke-width:1.3;stroke-linecap:round}
.fig .fc-bub{fill:none;stroke:var(--accent);stroke-width:1.5}
.fig .fc-tooth{fill:var(--surface);stroke:var(--text-dim);stroke-width:1.3}
.fig .fc-plaque{fill:var(--bad);fill-opacity:.28;stroke:var(--bad);stroke-width:1.2}
.fig .fc-gum{fill:var(--bad-bg);stroke:var(--at-o);stroke-width:1.4}
.fig .fc-zoom{fill:var(--paper);stroke:var(--text-dim);stroke-width:1.4}
.fig .fc-hex{fill:var(--accent-bg);stroke:var(--accent);stroke-width:1.2}
.fig .fc-mkoh{fill:var(--paper);stroke:var(--at-o);stroke-width:1.6}
.fig .fc-mkf{fill:var(--paper);stroke:var(--at-x);stroke-width:1.6}
.fig .fc-mt{fill:var(--text);font-size:11px;font-weight:700}
.fig .fc-ring{fill:none;stroke:var(--text-dim);stroke-width:1.1;stroke-dasharray:3 3}
`;
if (typeof document !== 'undefined' && document.head && !document.getElementById('diagramFxFcCss')) {
  const s = document.createElement('style'); s.id = 'diagramFxFcCss'; s.textContent = DIAGRAM_FX_FC_CSS; document.head.appendChild(s);
}

(() => {
  if (typeof Anat === 'undefined') return;
  const {frame, ell} = Anat;
  const r1 = v => Math.round(v * 10) / 10;
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const has = (arr, id) => !!arr && arr.indexOf(id) >= 0;
  const opa = (o, id) => has(o.dim, id) ? ' opacity="0.4"' : '';
  const label = (f, id, l) => {
    const [lx, ly] = l.at, an = l.anchor || 'start';
    let s = l.lines.map((t, i) => `<text class="${l.bold ? 'an-tb' : 'an-t'}" data-k="an-${id}-t${i}" x="${f.X(lx)}" y="${f.Y(ly + i * 12.5)}" text-anchor="${an}">${esc(t)}</text>`).join('');
    if (l.to) {
      const [fx, fy] = l.from || [lx, ly + 3];
      s += `<path class="an-lead" data-k="an-${id}-l" d="${f.d(`M${fx} ${fy} L${l.to[0]} ${l.to[1]}`)}"/>`;
    }
    return s;
  };
  /* one builder from parts (a table or a function of the options) */
  const build = (parts, order, anchors) => {
    const fn = (o = {}) => {
      const f = frame(o), P = parts(o);
      let out = '', halos = '', labs = '';
      order.forEach(id => {
        const p = P[id]; if (!p) return;
        if (p.lines) out += p.lines.map((ln, i) => `<path class="${p.cls}" data-k="an-${id}${i}" d="${f.d(ln)}"${opa(o, id)}/>`).join('');
        else out += `<path class="${p.cls}" data-k="an-${id}" d="${f.d(p.d)}"${opa(o, id)}/>`;
        if (has(o.hi, id) && p.d) halos += `<path class="fx-glow fx-breathe" data-k="an-${id}-hl" d="${f.d(p.halo || p.d)}"/>`;
        if (has(o.label, id) && p.lbl) labs += label(f, id, Object.assign({}, p.lbl, (o.lab || {})[id]));
      });
      return out + halos + labs;
    };
    fn.anchor = (name, o = {}) => { const f = frame(o), a = anchors[name]; return a ? f.at(a[0], a[1]) : null; };
    return fn;
  };

  /* ---------------------------------------------------------------- ear */
  const EAR_ORDER = ['bone', 'pinna', 'concha', 'fold', 'mid', 'coch', 'canal', 'wax', 'wx0', 'wx1', 'wx2', 'drum', 'eust', 'eust2', 'bub0', 'bub1', 'bub2', 'bub3', 'bub4'];
  const EAR_ANCH = {drum: [133, 86], canal: [190, 88], wax: [180, 88], waxEnd: [218, 88], open: [244, 88], eust: [126, 148], mid: [98, 88],
    bub: [180, 70]};
  const earParts = o => {
    const w = o.wax || 'whole';
    const P = {
      bone: {cls: 'an-bone', d: 'M10 40 C44 14 150 6 236 34 L236 150 C180 170 92 172 34 152 C4 122 0 74 10 40 Z'},
      pinna: {cls: 'an-tissue', d: 'M236 30 C286 -6 338 18 334 68 C332 98 320 112 308 134 C298 158 268 166 242 154 Z'},
      concha: {cls: 'fc-mid', d: 'M236 60 C262 52 288 66 286 92 C284 116 262 126 236 118 Z'},
      fold: {cls: 'fc-coch', d: 'M256 38 C296 26 318 62 312 104'},
      mid: {cls: 'fc-mid', d: 'M128 60 C108 48 80 52 68 72 C58 92 72 118 100 121 C116 123 130 116 138 110 Z'},
      coch: {cls: 'fc-coch', lines: ['M40 98 C40 93 47 93 47 98 C47 105 37 105 36 97 C35 88 46 86 52 92 C58 100 52 114 38 114 C24 114 17 100 23 88']},
      canal: {cls: 'an-cavity', d: 'M240 68 C206 68 164 68 128 60 L138 110 C172 102 208 104 240 110 Z',
        lbl: {lines: ['Ear canal'], at: [190, 194], anchor: 'middle', from: [190, 181], to: [190, 106]}},
      drum: {cls: 'an-drum', d: 'M128 58 C134 78 136 96 138 112',
        lbl: {lines: ['Ear drum'], at: [100, -8], anchor: 'middle', from: [104, -5], to: [130, 66]}},
      eust2: {cls: 'an-tube2', d: 'M106 120 C110 138 122 154 142 168'},
      eust: {cls: 'an-tube', d: 'M106 120 C110 138 122 154 142 168',
        lbl: {lines: ['Eustachian tube'], at: [6, 190], from: [86, 186], to: [122, 152]}}
    };
    if (w === 'whole') P.wax = {cls: 'an-wax', d: 'M150 66 C142 76 142 96 150 106 L210 106 C204 96 204 76 210 68 Z',
      lbl: {lines: ['Ear wax'], at: [172, -8], anchor: 'middle', from: [174, -5], to: [178, 74]}};
    if (w === 'broken') {
      P.wx0 = {cls: 'an-wax', d: 'M146 74 C142 82 144 92 150 98 L166 100 C170 90 168 78 162 72 Z'};
      P.wx1 = {cls: 'an-wax', d: 'M178 80 L194 76 C200 84 198 94 192 100 L180 98 Z'};
      P.wx2 = {cls: 'an-wax', d: 'M208 74 L222 78 C226 88 222 98 214 100 L206 96 Z'};
    }
    if (o.bubbles) [[160, 70, 4], [172, 96, 3.5], [188, 70, 4.5], [200, 92, 4], [214, 72, 3.5]].forEach(([x, y, r], i) => { P['bub' + i] = {cls: 'fc-bub', d: ell(x, y, r, r)}; });
    return P;
  };
  const ear = (o = {}) => {
    const out = build(earParts, EAR_ORDER, EAR_ANCH)(o);
    return out;
  };
  ear.parts = EAR_ORDER.slice();
  ear.anchor = (name, o = {}) => build(earParts, EAR_ORDER, EAR_ANCH).anchor(name, o);
  Anat.ear = ear;

  /* -------------------------------------------------------------- tooth */
  const TOOTH_ORDER = ['gum', 'tooth', 'enamel', 'plaque'];
  const TOOTH = {
    gum: 'M0 94 C18 90 28 100 44 100 L106 100 C122 100 132 90 150 94 L150 196 L0 196 Z',
    tooth: 'M22 68 C20 40 32 22 54 24 C64 26 70 34 75 34 C80 34 86 26 96 24 C118 22 130 40 128 68 C128 84 124 96 120 104 C118 140 112 172 104 186 C98 194 90 188 88 174 C84 152 80 134 75 124 C70 134 66 152 62 174 C60 188 52 194 46 186 C38 172 32 140 30 104 C26 96 22 84 22 68 Z',
    enamel: 'M22 84 C20 44 32 22 54 24 C64 26 70 34 75 34 C80 34 86 26 96 24 C118 22 130 44 128 84 L118 84 C119 52 112 34 96 34 C86 36 80 44 75 44 C70 44 64 36 54 34 C38 34 31 52 32 84 Z',
    plaque: 'M12 90 C6 42 28 12 54 14 C64 16 70 24 75 24 C80 24 86 16 96 14 C122 12 144 42 138 90 L128 88 C130 44 118 22 96 24 C86 26 80 34 75 34 C70 34 64 26 54 24 C32 22 20 44 22 88 Z'
  };
  /* ten hexagonal crystals of the lattice inside the circle; a mark on each (OH or F) */
  const HEX = [[-34, -34], [0, -34], [34, -34], [-51, -4], [-17, -4], [17, -4], [51, -4], [-34, 26], [0, 26], [34, 26]];
  const hexPath = (cx, cy, r) => {
    const p = []; for (let i = 0; i < 6; i++) { const a = Math.PI / 6 + i * Math.PI / 3; p.push(r1(cx + r * Math.cos(a)) + ' ' + r1(cy + r * Math.sin(a))); }
    return 'M' + p.join(' L') + ' Z';
  };
  const ZX = 236, ZY = 88, ZR = 76;
  const tooth = (o = {}) => {
    const f = frame(o), F = !!o.fluoride;
    let s = '', halos = '', labs = '';
    const add = (cls, id, d) => { s += `<path class="${cls}" data-k="an-${id}" d="${f.d(d)}"${opa(o, id)}/>`; };
    add('fc-gum', 'gum', TOOTH.gum);
    add('fc-tooth', 'tooth', TOOTH.tooth);
    add('an-enamel', 'enamel', TOOTH.enamel);
    if (o.plaque) add('fc-plaque', 'plaque', TOOTH.plaque);
    if (has(o.hi, 'enamel')) halos += `<path class="fx-glow fx-breathe" data-k="an-enamel-hl" d="${f.d(TOOTH.enamel)}"/>`;
    if (has(o.hi, 'plaque') && o.plaque) halos += `<path class="fx-glow fx-breathe" data-k="an-plaque-hl" d="${f.d(TOOTH.plaque)}"/>`;
    if (has(o.label, 'enamel')) labs += label(f, 'enamel', {lines: ['Enamel'], at: [132, 4], from: [136, 7], to: [120, 34]});
    if (has(o.label, 'gum')) labs += label(f, 'gum', {lines: ['Gum'], at: [4, 150], to: [20, 130], from: [14, 138]});
    if (has(o.label, 'plaque') && o.plaque) labs += label(f, 'plaque', {lines: ['Plaque'], at: [142, 28], from: [146, 31], to: [134, 58], anchor: 'start'});
    if (o.zoom !== false) {
      add('fc-zoom', 'zoom', ell(ZX, ZY, ZR, ZR));
      /* the place on the enamel that the circle enlarges, and its two sight lines */
      s += `<path class="fc-ring" data-k="an-spot" d="${f.d(ell(112, 52, 9, 9))}"/>`;
      s += `<path class="an-lead" data-k="an-zl0" d="${f.d('M119 46 L' + r1(ZX - 54) + ' ' + r1(ZY - 53))}"/>`;
      s += `<path class="an-lead" data-k="an-zl1" d="${f.d('M117 59 L' + r1(ZX - 72) + ' ' + r1(ZY - 22))}"/>`;
      HEX.forEach(([dx, dy], i) => {
        const cx = ZX + dx, cy = ZY + dy;
        s += `<path class="fc-hex" data-k="an-hx${i}" d="${f.d(hexPath(cx, cy, 15.5))}"/>`;
      });
      HEX.forEach(([dx, dy], i) => {
        const cx = ZX + dx, cy = ZY + dy;
        s += `<path class="${F ? 'fc-mkf' : 'fc-mkoh'}" data-k="an-mk${i}${F ? 'F' : 'OH'}" d="${f.d(ell(cx, cy, 10, 10))}"/>` +
          `<text class="fc-mt" data-k="an-mt${i}${F ? 'F' : 'OH'}" x="${f.X(cx)}" y="${f.Y(cy + 4)}" text-anchor="middle">${F ? 'F' : 'OH'}</text>`;
      });
      if (has(o.hi, 'zoom')) halos += `<path class="fx-glow fx-breathe" data-k="an-zoom-hl" d="${f.d(ell(ZX, ZY, ZR, ZR))}"/>`;
    }
    return s + halos + labs;
  };
  tooth.parts = ['gum', 'tooth', 'enamel', 'plaque', 'zoom', 'hx0-9', 'mk0-9'];
  tooth.anchor = (name, o = {}) => {
    const f = frame(o), a = {enamel: [112, 52], crown: [75, 60], gum: [75, 100], zoom: [ZX, ZY], zoomBottom: [ZX, ZY + ZR], crownTop: [75, 24],
      left: [22, 60], right: [128, 60]}[name];
    return a ? f.at(a[0], a[1]) : null;
  };
  tooth.zoomR = ZR;
  Anat.tooth = tooth;
})();
