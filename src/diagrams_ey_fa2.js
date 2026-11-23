/* ==========================================================================
   DIAGRAMS_EY_FA2: Exam 3 round 3, Agent A: the glaucoma figures drawn to match Dr. Smith's slides
   (Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf)
   ==========================================================================
   Course file, loaded after diagram_fx.js, diagram_fx_fa.js, diagram_fx_fa2.js, diagrams_ey.js and
   diagrams_ey_fa.js. It re-assigns DIA[key] and DIA_NAMES[key] for ey-aqueous, ey-angle and ey-cai
   (keys, Purpose lines, figcaptions, facts and citations as in diagrams_ey.js and diagrams_ey_fa.js)
   and adds ey-targets to DIA, DIA_NAMES and to the Eye group of DIAGRAMS (after ey-aqueous).
     ey-aqueous  the eye as slide 15 draws it (new first step names every part the slide labels, with a
                 fixed colour key), then inflow, outflow, slide 16's ciliary-process zoom (receptors,
                 enzyme, M3 marks), and the three drug steps.
     ey-targets  new: where each drug class Smith teaches acts, on the slide-15 eye, class colours as in
                 the Guides (blue PG, green beta-blocker, amber alpha-2, purple CA inhibitor, red
                 cholinergic, magenta Rho kinase).
     ey-angle    the eye as slide 14 draws it (front-to-back section, an angle on each side), panels A-C.
     ey-cai      slide 16's ciliary epithelium and enzyme, then slide 27's kidney cell (unchanged).
   STEPPERS.md rules: the same thing carries the same data-k in every step it is in; data-k values are
   unique inside a step; opacity is an attribute; no shape carries a transform; colours are classes only;
   every coloured mark has a text label. At most three animated elements per step.
   Check: node diagrams_ey_check.js (and stepper_test.js for the motion).
   ========================================================================== */
const DIAGRAMS_EY_FA2 = (() => {
  if (typeof stepper !== 'function' || typeof Anat === 'undefined' || !Anat.fa2 || !Anat.fa || !Anat.full) return null;
  const fa = Anat.fa, fa2 = Anat.fa2, T = fa.T, TL = fa.TL, C = fa2.cls, E0 = fa2.eye, FL = fa2.eye.flows, A = fa2.eye.A;
  const lead = (x1, y1, x2, y2, k) => Anat.lead(x1, y1, x2, y2, k);
  const pl = (cx, cy, r, k) => Anat.pulse(cx, cy, r, k);
  const HIDE = ['conj', 'pp', 'epi'];                              /* parts only the "name the parts" step shows */
  const E = (o = {}) => E0(Object.assign({}, o, {omit: HIDE.concat(o.omit || [])}));
  const EP = (o = {}) => E0(o);
  /* ey-aqueous and ey-targets: the "look here" halo and pulse ring in a neutral grey (class fa-nt), because green is the β-blocker colour there */
  const NT = s => s.replace(/class="fx-(glow|pulse)/g, 'class="fa-nt fx-$1');

  /* ---------------------------------------------------------------------
     The full, two-sided view (Anat.full, diagram_fx_full.js) carries ey-aqueous, ey-targets and
     ey-angle since 2026-11-22 (Louis: "the full image of an eye would be better than half of it";
     "we mention pupil and iris but may not have it labeled"). Round 2, the same day ("I just don't
     want learner to feel overwhelmed in seeing everything. We can always make it bigger if needed"):
       * a step shows only the labels its sentences use, plus Cornea, Iris, Pupil and Lens;
       * the colour key is gone (the structures carry their own labels);
       * the eye is drawn in one frame (LOC) in every full-eye step, labels in the gutter to its
         right (round 3: it does not change place or size between steps);
       * steps about drainage add, under it, an enlarged view of one angle (Anat.full.zoom), where the dashed and
         the dotted arrow, the drug marks, the red bar and the bowed iris are large enough to follow;
       * chips and cards have 8 units of padding and at least 10 units between blocks.
     All label and leader coordinates below are panel coordinates. ey-cai keeps slide 15's half view.
     --------------------------------------------------------------------- */
  const FU = Anat.full, FF = FU.flows, FA = FU.A, MX = FU.mx, AZ = FU.zoom, ZF = AZ.flows, ZA = AZ.A;
  const r1 = v => Math.round(v * 10) / 10;
  /* one frame for the eye in every full-eye step of the three glaucoma figures, so it never changes place or size between steps (round 3) */
  const LOC = {x: -85.8, y: -17.5, s: 0.92};
  /* label places were first set for a frame {x: -56.7, y: -18, s: 0.85}; LX and LY carry them to LOC */
  const LX = x => r1((x + 56.7) / 0.85 * LOC.s + LOC.x), LY = y => r1((y + 18) / 0.85 * LOC.s + LOC.y);
  const HID = ['conj', 'pp', 'epi', 'sph', 'dil', 'vein'];
  const EYE = (F, o = {}) => FU(Object.assign({}, o, F, {omit: HID.filter(id => !(o.show || []).includes(id)).concat(o.omit || [])}));
  const PT = (F, a) => [r1(F.x + F.s * a[0]), r1(F.y + F.s * a[1])];                 /* a point of the eye in panel coordinates */
  const PR = (F, a) => PT(F, [MX(a[0]), a[1]]);                                        /* its mirror image (right side) */
  const FLOW = (F, d, k, o = {}) => FU.flow(d, k, Object.assign({}, o, F));
  /* a label: text lines (11.5 units, 13 apart) and a leader through the given points; keys fu-<id>-t<i>, fu-<id>-l */
  const LB = (id, lines, x, y, pts, o = {}) =>
    lines.map((t, i) => T(x, y + i * 13, t, `fu-${id}-t${i}`, o.cls || 'fa-t', o.anchor || 'start')).join('') +
    (pts ? `<path class="an-lead" data-k="fu-${id}-l" d="M${pts.map(p => r1(p[0]) + ' ' + r1(p[1])).join(' L')}"/>` : '');
  /* chips and cards with 8 units of padding */
  const chip8 = (x, y, w, lines, k, c, plain) => fa.R(x, y, w, lines.length * 13 + 12, 'c' + k, c ? 'fa-chk' + c : 'fa-chip', 5) +
    lines.map((s, i) => T(x + 8, y + 17 + i * 13, s, 'c' + k + 't' + i, i === 0 && !plain ? (c ? 'fa-tk' + c : 'fa-tb') : 'fa-t')).join('');
  const chipH = n => n * 13 + 12;
  /* a chip placed on the drawing: an opaque backing first, so no line shows through it */
  const chipB = (x, y, w, lines, k, c) => fa.R(x, y, w, lines.length * 13 + 12, 'c' + k + 'bk', 'fu-back', 5) + chip8(x, y, w, lines, k, c);
  const card8 = (x, y, w, head, lines, k) => fa.R(x, y, w, 26 + lines.length * 13, 'k' + k, 'fa-card', 6) + T(x + 8, y + 17, head, 'k' + k + 'h', 'fa-k') +
    lines.map((s, i) => T(x + 8, y + 31 + i * 13, s, 'k' + k + 't' + i, 'fa-t')).join('');
  const cardH = n => 26 + n * 13;
  const dot2 = (F, a, k, c, r) => { const p = PT(F, a), q = PR(F, a); return C.dot(p[0], p[1], k + 'L', c, r || 3.4) + C.dot(q[0], q[1], k + 'R', c, r || 3.4); };
  const cld = (x1, y1, x2, y2, k, c) => C.lead(r1(x1), r1(y1), r1(x2), r1(y2), k, c);

  /* ---- the eye's constant orientation labels, per frame ---- */
  const cxL = PT(LOC, [FU.CX, 0])[0];
  const CONST_LOC = (o = {}) => LB('cornea', ['Cornea'], LX(204), LY(36), [[LX(202), LY(39)], PR(LOC, [163, 80])]) +
    LB('pupil', ['Pupil'], cxL, LY(88), [[cxL, LY(92)], [cxL, PT(LOC, [0, 172])[1]]], {anchor: 'middle'}) +
    (o.bowed ? LB('iris', ['Iris'], PT(LOC, [152, 0])[0], PT(LOC, [0, 162])[1], null)
      : LB('iris', ['Iris'], LX(95), LY(116), [[LX(104), LY(118)], [LX(104), PT(LOC, [0, 168])[1]]])) +
    LB('lens', ['Lens'], cxL, LY(178), null, {anchor: 'middle'});
  const AC_LOC = () => LB('ac', ['Anterior', 'chamber'], cxL, LY(58), null, {anchor: 'middle'});
  /* labels under the eye, at its left: the ciliary body (the steps about production) */
  const CB_LOW = () => LB('cbody', ['Ciliary body'], 8, 248, [[30, 238], PT(LOC, [136, 246])]);
  const GX = 244;                                                   /* the gutter right of the locator eye */
  const gLab = (id, lines, y0, to, o) => { const y = LY(y0); return LB(id, lines, GX, y, [[GX - 3, y - 4], to], o); };

  /* ---- the angle zoom: panel, title, the ring on the locator's left angle and its leader ---- */
  const ZX = 8, ZY = 240;
  const zp = a => [ZX + a[0], ZY + a[1]];
  const angL = PT(LOC, [124, 157.5]);
  const ZOOM = (o = {}) => AZ(Object.assign({x: ZX, y: ZY}, o)) + T(ZX + 8, ZY + 15, 'The angle, zoomed', 'az-ttl', 'fa-k');
  const ZLINK = (ring) => (ring === false ? '' : fa.ring(angL[0], angL[1], 13, 'az-ring')) + `<path class="an-lead" data-k="az-link" d="M${angL[0] - 10} ${angL[1] + 9} L${ZX + 6} ${ZY}"/>`;
  const ZFRAME = AZ.frame({x: ZX, y: ZY});
  const ZL = (id, lines, x, y, pts, o) => LB('az-' + id, lines, ZX + x, ZY + y, pts && pts.map(zp), o);
  const zflow = (d, k, o = {}) => AZ.flow(d, k, Object.assign({x: ZX, y: ZY}, o));
  const zdot = (a, k, c, r) => C.dot(ZX + a[0], ZY + a[1], k, c, r || 4.2);
  const zLab = {
    tm: () => ZL('tm', ['Trabecular', 'meshwork'], 250, 26, [[248, 30], [152, 74]]),
    tmLow: () => ZL('tm', ['Trabecular', 'meshwork'], 238, 84, [[236, 86], [155, 84]]),
    sc: () => ZL('sc', ['Schlemm’s', 'canal'], 8, 48, [[64, 56], [117.5, 81]]),
    vein: () => ZL('vein', ['into blood', 'vessels'], 8, 96, [[62, 100], [100, 124]]),
    sclera: () => ZL('sclera', ['Sclera'], 8, 130, [[48, 128], [109, 146]]),
    uv: () => ZL('uv', ['Uveoscleral', 'route'], 8, 152, [[76, 154], [124, 160]], {cls: 'fa-tb'}),
    iris: () => ZL('iris', ['Iris'], 312, 126, null),
    irisB: () => ZL('iris', ['Iris'], 172, 98, null),
    cornea: () => ZL('cornea', ['Cornea'], 136, 16, [[162, 19], [172, 32]]),
    musc: () => ZL('musc', ['Ciliary muscle'], 252, 146, [[250, 143], [164, 148]]),
  };


  /* ---------------------------------------------------------------------
     Round 4 (Louis, 2026-11-23: "i don't like that we can't see the full ciliary body like before or the receptors of what act where"):
     in the steps about drugs the whole eye keeps its ciliary bodies at full strength with every target drawn on them (both sides), each
     with a label that names the receptor or enzyme and the class; the marks of the step are at full strength and the others are faded
     but legible; and a second inset, one ciliary process enlarged (slide 16), sits under the angle zoom (dimmed in the steps about outflow).
     --------------------------------------------------------------------- */
  const PZ_ROW = 424, PZ_END = 584, PZ_ALONE = 262, BAND_ALONE = 434;                                 /* the process inset under the angle zoom (steps with the zoom) */
  const BAND = 600;                                                 /* the bottom band in the steps that have both insets */
  const fade = (str, on) => on ? str : str.replace(/<(path|text|polygon|rect)\b([^>]*)>/g, (m, t, a) => /\bopacity=/.test(a) ? m : `<${t} opacity="0.5"${a}>`);
  const fadeZ = (str, on) => on ? str : str.replace(/<(path|text|polygon|rect)\b([^>]*)>/g, (m, t, a) => /\bopacity=/.test(a) ? m : `<${t} opacity="0.4"${a}>`);
  /* the marks on the eye: group, key, colour, point on the left side (mirrored for the right) */
  const MK = [
    {g: 'b', k: 'd-b', c: 2, a: FA.p1}, {g: 'a', k: 'd-a', c: 3, a: FA.p2}, {g: 'c', k: 'd-c', c: 4, a: FA.p3},
    {g: 'm3', k: 'd-m3t', c: 5, a: FA.tm}, {g: 'm3', k: 'd-m3i', c: 5, a: FA.irisEnd}, {g: 'rk', k: 'd-rk', c: 6, a: FA.sc}, {g: 'pg', k: 'd-pg', c: 1, a: FA.musc},
  ];
  /* labels in the gutter, top to bottom in the order of the marks they name (so no leader crosses another); each: group, key, colour, lines, marks */
  const GL = [
    {g: 'm3', id: 'fu-sph', c: 0, lines: ['Sphincter muscle', '(iris)'], to: ['d-m3i']},
    {g: 'm3', id: 'fu-gm3', c: 5, lines: ['M3 receptor:', 'M3 agonists'], to: ['d-m3t']},
    {g: 'rk', id: 'fu-grk', c: 6, lines: ['Rho kinase:', 'netarsudil'], to: ['d-rk']},
    {g: 'b', id: 'fu-gb', c: 2, lines: ['β receptor:', 'β-blockers'], to: ['d-b']},
    {g: 'a', id: 'fu-ga', c: 3, lines: ['α2 receptor:', 'α2 agonists'], to: ['d-a']},
    {g: 'pg', id: 'fu-gpg', c: 1, lines: ['PGF2α receptor:', 'PG agonists'], to: ['d-pg']},
    {g: 'c', id: 'fu-gc', c: 4, lines: ['carbonic anhydrase:', 'CA inhibitors'], to: ['d-c']},
  ];
  /* on: the groups at full strength; only (optional): the groups drawn at all (the rest are left out); lines: label text overrides by id */
  const TGL = (on, only, lines) => {
    const act = g => on.indexOf(g) >= 0, shown = g => !only || only.indexOf(g) >= 0;
    let out = '';
    MK.forEach(m => { if (shown(m.g)) out += fade(dot2(LOC, m.a, m.k, m.c, 3.7), act(m.g)); });
    GL.forEach((l, i) => {
      if (!shown(l.g)) return;
      const t = 30 + i * 29, mk = MK.find(m => m.k === l.to[0]), q = PR(LOC, mk.a), ln = (lines && lines[l.id]) || l.lines;
      let s = T(GX, t + 11, ln[0], l.id + '-t0', 'fa-t') + T(GX, t + 24, ln[1], l.id + '-t1', l.c && !(lines && lines[l.id]) ? 'fa-tk' + l.c : 'fa-t');
      s += l.c ? cld(GX - 3, t + 8, q[0] + 4, q[1], l.id + '-l', l.c) : `<path class="an-lead" data-k="${l.id}-l" d="M${GX - 3} ${t + 8} L${r1(q[0] + 4)} ${r1(q[1])}"/>`;
      out += fade(s, act(l.g));
    });
    return out;
  };
  /* the ciliary process inset: one process enlarged (slide 16): β receptor, α2 receptor, carbonic anhydrase, α1 receptor (not a target of these classes) */
  const PZ = (top, on, extra) => {
    const cx = 186, R = 68, cy = top + 92;
    const Zc = fa2.proc(cx, cy, R, {cls: {b: 2, a2: 3, ca: 4}});
    const P = Zc.pts, pr = PR(LOC, FA.p2);
    const zl = (k, c, x1, y1, x2, y2) => C.lead(r1(x1), r1(y1), r1(x2), r1(y2), k, c);
    const s = T(8, top + 14, 'One ciliary process, enlarged (slide 16)', 'pzT', 'fa-k') + Zc.svg +
      T(8, cy - 42, 'β receptor', 'pzb', 'fa-t') + T(8, cy - 29, 'β-blockers', 'pzbc', 'fa-tk2') + zl('pzbl', 2, 74, cy - 36, P.beta[0] - 7, P.beta[1] + 1) +
      T(8, cy + 8, 'α1 receptor', 'pza1', 'fa-ts') + Anat.lead(80, cy + 5, P.a1[0] - 6, P.a1[1] + 1, 'pza1l') +
      T(262, cy - 52, 'α2 receptor', 'pza2', 'fa-t') + T(262, cy - 39, 'α2 agonists', 'pza2c', 'fa-tk3') + zl('pza2l', 3, 258, cy - 47, P.a2[0] + 7, P.a2[1]) +
      T(262, cy - 14, 'carbonic', 'pzca0', 'fa-t') + T(262, cy - 1, 'anhydrase (CA)', 'pzca1', 'fa-t') + T(262, cy + 12, 'CA inhibitors', 'pzcac', 'fa-tk4') + zl('pzcal', 4, 258, cy - 8, P.ca[0] + 8, P.ca[1] + 3) +
      (extra ? TL(8, cy + 34, ['ciliary', 'blood supply'], 'pzv', 'fa-t') + Anat.lead(80, cy + 38, P.ves[0] - 5, P.ves[1], 'pzvl') +
        T(8, cy + 66, 'ciliary body', 'pzcb', 'fa-t') + Anat.lead(80, cy + 63, P.body[0] - 4, P.body[1] + 2, 'pzcbl') : '');
    return fadeZ(s + fa.ring(r1(pr[0] + 2), r1(pr[1]), 17, 'pz-ring'), on);
  };

  /* ---------------------------------------------------------------------
     1. ey-aqueous. Slides 14-16 (flow, the two routes, receptors and enzymes), 18, 22, 26 (inflow
     drugs), 32, 34, 37, 41 (outflow drugs); 11/13 T@25530-@33000, T@39934-@40600, T@43883-@53260;
     11/17 T@24556-@36600. Parts and labels are slide 15's (and slide 14's pupil-to-angle flow);
     step 4 is slide 16's zoom.
     --------------------------------------------------------------------- */
  const AQUEOUS = (() => {
    const BY = 430;
    const PC_LAB = () => gLab('pc', ['Posterior', 'chamber'], 78, PR(LOC, [176, 198]));
    /* step 1: name the parts, a group per sentence: ciliary body and what lies with it (2), the angle (3, in the zoom), the flow (4) */
    const s1 = EYE(LOC, {show: ['epi']}) + CONST_LOC() +
      gLab('proc', ['Ciliary processes'], 140, PR(LOC, [147, 189])) + gLab('musc', ['Ciliary muscle'], 160, PR(LOC, [128, 214])) +
      gLab('cbody', ['Ciliary body'], 180, PR(LOC, [141, 232])) + gLab('epi', ['Ciliary epithelium'], 200, PR(LOC, [142, 250])) +
      FLOW(LOC, FF.inflow, 'f-in', {dim: true}) + AC_LOC() + PC_LAB() +
      ZOOM() + ZLINK() + zLab.tm() + zLab.sc() + zLab.cornea() + zLab.sclera() + zLab.iris() + ZFRAME +
      T(8, BY, 'The flow, in the slide’s words:', 'ptT', 'fa-k') +
      chip8(8, BY + 8, 100, ['Posterior', 'chamber'], 'p1') + fa.arrow(`M110 ${BY + 27} L128 ${BY + 27}`, 'par1') +
      chip8(130, BY + 8, 100, ['Anterior', 'chamber'], 'p2') + fa.arrow(`M232 ${BY + 27} L250 ${BY + 27}`, 'par2') +
      chip8(252, BY + 8, 100, ['Trabecular', 'meshwork'], 'p3');

    /* step 2: inflow; the eye stays where it is in every step */
    const chain = (() => {
      const y = 280, cy = y + 25.5;
      return T(8, 272, 'INFLOW:', 'inT', 'fa-k') + T(64, 272, 'made all the time', 'alw', 'fa-t') +
        chip8(8, y, 116, ['Ciliary body', 'epithelium makes', 'aqueous humor'], 'i1') +
        chip8(144, y + 6.5, 90, ['Posterior', 'chamber'], 'i2') + chip8(254, y, 98, ['Pupil, then', 'anterior', 'chamber'], 'i3') +
        fa.arrow(`M125 ${cy} L143 ${cy}`, 'ar1') + fa.arrow(`M235 ${cy} L253 ${cy}`, 'ar2');
    })();
    const s2 = EYE(LOC, {hi: ['cbody'], dim: ['sclera', 'tm', 'sc', 'musc', 'muscl']}) + CONST_LOC() + AC_LOC() + CB_LOW() + PC_LAB() + FLOW(LOC, FF.inflow, 'f-in') + chain;

    /* step 3: outflow: the locator eye with both routes pale on both sides; the arrows move in the zoom */
    const uvea = T(GX, LY(124), 'Uvea:', 'uvaH', 'fa-tb') + TL(GX, LY(124) + 13, ['ciliary body,', 'its attachments', 'to the lens,', 'iris'], 'uvaB');
    const outCards = T(8, BY, 'OUTFLOW:', 'outT', 'fa-k') +
      card8(8, BY + 8, 167, 'MAIN route', ['Trabecular meshwork,', 'then Schlemm’s canal,', 'blood vessels'], 'oc1') +
      card8(185, BY + 8, 167, 'smaller route', ['Uveoscleral: between the', 'uvea and the sclera,', 'spreads into the tissues'], 'oc2');
    const s3 = EYE(LOC, {dim: ['lens', 'proc1', 'proc2', 'proc3', 'zon']}) + CONST_LOC() +
      FLOW(LOC, FF.tmOut, 'f-out', {dim: true}) + FLOW(LOC, FF.uv, 'f-uv', {dim: true}) + uvea +
      ZOOM() + ZLINK() + zflow(ZF.tm, 'z-tm') + zflow(ZF.uv, 'z-uv', {drift: true}) +
      zLab.tm() + zLab.sc() + zLab.vein() + zLab.sclera() + zLab.uv() + zLab.iris() + T(ZX + 262, ZY + 58, 'MAIN route', 'mainT', 'fa-k') + ZFRAME + outCards;

    /* step 4: slide 16's zoom on a ciliary process, in the same place as the process inset of the later steps, under the same whole eye
       (round 4: the eye is no longer a small copy; the receptors are marked on both of its ciliary bodies) */
    const B4 = BAND_ALONE + 14;
    const zrow = (i, head, txt, k) => T(16, B4 + 19 + i * 15, head, k + 'h', 'fa-k') + T(88, B4 + 19 + i * 15, txt, k + 't', 'fa-t');
    const zband = T(8, B4 - 8, 'Also marked on slide 16:', 'zbT', 'fa-k') + fa.R(8, B4, 344, 60, 'zm', 'fa-card') +
      zrow(0, 'M3', 'on the iris and the meshwork (step 6)', 'zm3') +
      zrow(1, 'β2', 'written beside the β receptor label', 'zq') +
      zrow(2, 'α1 receptor', 'not a target of these three classes', 'za1n');
    const s4 = EYE(LOC, {hi: ['cbody'], dim: ['sclera']}) + CONST_LOC() + CB_LOW() + TGL(['b', 'a', 'c', 'm3'], ['b', 'a', 'c', 'm3'], {'fu-gm3': ['M3 receptor', '(step 6)']}) + PZ(PZ_ALONE, true, true) + zband;

    /* steps 5-7: the drug classes */
    const inDrugs = T(8, BAND_ALONE - 8, '↓ INFLOW:', 'inD', 'fa-w') +
      chip8(8, BAND_ALONE, 108, ['β-blockers', 'block β', 'receptors'], 'bb', 2) + chip8(126, BAND_ALONE, 108, ['α2 agonists', 'act on α2', 'receptors'], 'a2', 3) +
      chip8(244, BAND_ALONE, 108, ['CA inhibitors', 'block carbonic', 'anhydrase'], 'ca', 4);
    const prB = PT(LOC, FA.proc);
    const s5 = EYE(LOC, {hi: ['cbody'], dim: ['sclera']}) + CONST_LOC() + CB_LOW() +
      FLOW(LOC, FF.inflow, 'f-in', {slow: true}) + pl(prB[0], prB[1], 18, 'pl1') + TGL(['b', 'a', 'c']) + PZ(PZ_ALONE, true) + inDrugs;

    const tmDrugs = T(8, BAND, '↑ OUTFLOW:', 'tmD', 'fa-w') +
      chip8(8, BAND + 8, 222, ['M3 agonists', 'echothiophate:', 'contract the sphincter muscle', 'and the meshwork'], 'm3', 5) + T(89, BAND + 25, '(carbachol, pilocarpine),', 'cm3n', 'fa-t') +
      chip8(240, BAND + 8, 112, ['netarsudil:', 'less stiff', 'meshwork'], 'rk', 6);
        const ztm = zp(ZA.tm);
    const s6 = EYE(LOC, {show: ['sph'], dim: ['lens', 'zon']}) + CONST_LOC() +
      FLOW(LOC, FF.tmOut, 'f-out', {dim: true}) + TGL(['m3', 'rk']) +
      ZOOM({dim: ['cbody', 'musc', 'muscl', 'proc']}) + ZLINK() + zflow(ZF.tm, 'z-tm') + pl(ztm[0], ztm[1], 22, 'pl2') + zLab.tm() + zLab.sc() + zLab.iris() + ZFRAME + PZ(PZ_ROW, false) + tmDrugs;

    const uvDrugs = T(8, BAND, '↑ OUTFLOW:', 'uvD', 'fa-w') +
      chip8(8, BAND + 8, 192, ['Prostaglandin (PG) agonists:', 'relax the ciliary muscle', '(PGF2α receptor)'], 'pg', 1) +
      chip8(210, BAND + 8, 142, ['brimonidine:', 'adds some', 'uveoscleral outflow'], 'br', 3);
    /* step 7, sentences 5-7: the three groups in one place (as ey-targets step 4) */
    const SY = BAND + 8 + chipH(3) + 12;
    const sumAll = fa.R(8, SY, 344, 68, 'smc', 'fa-card') +
      T(16, SY + 17, '↓ INFLOW:', 'sm1h', 'fa-w') + T(96, SY + 17, 'β-blockers, α2 agonists, CA inhibitors', 'sm1', 'fa-t') +
      T(16, SY + 32, '↑ OUTFLOW:', 'sm2h', 'fa-w') + T(96, SY + 32, 'trabecular: M3 agonists, echothiophate,', 'sm2a', 'fa-t') + T(96, SY + 45, 'netarsudil', 'sm2b', 'fa-t') +
      T(96, SY + 60, 'uveoscleral: PG agonists', 'sm3', 'fa-t');
    const zmu = zp(ZA.musc);
    const s7 = EYE(LOC, {dim: ['lens', 'zon']}) + CONST_LOC() + FLOW(LOC, FF.uv, 'f-uv', {dim: true}) + TGL(['pg']) +
      ZOOM({hi: ['musc'], dim: ['tm', 'sc', 'vein']}) + ZLINK() + zflow(ZF.uv, 'z-uv', {drift: true}) + pl(zmu[0], zmu[1], 15, 'pl3') +
      zLab.musc() + zLab.sclera() + zLab.uv() + zLab.iris() + ZFRAME + PZ(PZ_ROW, false) + uvDrugs + sumAll;
    return fa.stepper('ey-aqueous', 'Aqueous humor: inflow and outflow', [
      ['The parts of the flow pathway, labelled as on slide 15, a group at a time; the angle is shown enlarged (slides 14–15).', NT(s1)],
      ['Inflow: the ciliary body makes aqueous humor all the time; it flows through the pupil into the anterior chamber (slides 14–15; 11/13 T@25530).', NT(s2)],
      ['Outflow: most drains through the trabecular meshwork and Schlemm’s canal; some by the uveoscleral route (slides 14–16; 11/13 T@32688).', NT(s3)],
      ['Slide 16 zooms on a ciliary process: β-blockers act on the β receptor, α2 agonists on the α2 receptor, CA inhibitors on the enzyme (slides 16, 18, 22, 26).', NT(s4)],
      ['Drugs that decrease inflow act on the ciliary body: β-blockers, α2 agonists and carbonic anhydrase inhibitors (slides 16, 18, 22, 26; 11/13 T@39934).', NT(s5)],
      ['Trabecular outflow up: M3 agonists and echothiophate contract the sphincter and meshwork; netarsudil makes it less stiff (slides 32, 34, 41; 11/17 T@24556).', NT(s6)],
      ['Uveoscleral outflow rises: PG agonists relax the ciliary muscle (also some trabecular); brimonidine adds some (slides 22, 37; 11/17 T@31096).', NT(s7)],
    ], 812, 'Drawn after Dr. Smith’s Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf slides 14–16, 18, 22, 26, 32, 34, 37 and 41; lectures 11/13, ' +
      'T@19333 and T@28180 (inflow is production, outflow is drainage), T@43883–@60121, and 11/17, T@23400–@36600. The eye is an original schematic of the whole front of the eye, both sides ' +
      '(slide 14 shows both sides, slide 15 one), and the enlarged angle is drawn the same way; the parts labelled are those of slide 15 that the narration names (cornea, ' +
      'trabecular meshwork, Schlemm’s canal, anterior chamber, iris, lens, sclera, posterior chamber, ciliary processes, ciliary muscle, ' +
      'ciliary epithelium), with the pupil named as in the lecture; slide 15’s conjunctiva and pars plana are not drawn. Step 4 is from slide 16 (β receptor with a β2 mark, α2 receptor, α1 receptor, carbonic anhydrase, ciliary blood supply, M3 marks). β-blockers: “not much effect on ' +
      'outflow; MOA not fully understood” (slide 18). PG agonists “do not affect aqueous humor production” (slide 37). Netarsudil inhibits Rho kinase: less ' +
      'contractile tone and fewer fibrosis-related protein deposits in the meshwork, and a change in the permeability of the cells lining Schlemm’s canal (slide 41).');
  })();

  /* ---------------------------------------------------------------------
     2. ey-targets: where each drug class acts. Slide 18 (β-blockers: the β receptor on the ciliary
     body, circled), 22 (α2 agonists: the α2 receptor on the ciliary body, and the uvea and sclera;
     brimonidine: some increase in uveoscleral outflow), 26 (CA inhibitors: carbonic anhydrase,
     circled), 32 and 34 (M3 agonists and AChE inhibitors: the sphincter muscle and the trabecular
     meshwork, both circled as M3), 37 (PG agonists: the PGF2α receptor on the ciliary muscle),
     41 (Rho kinase inhibitor: the meshwork and the lining of Schlemm's canal);
     11/13 T@39934; 11/17 T@24556, T@31096. Inflow marks are on the ciliary processes of the eye
     (both sides); the marks at the angle are in the zoom.
     --------------------------------------------------------------------- */
  const TARGETS = (() => {
    const BY = 430;
    const pD = [FA.p1, FA.p2, FA.p3];
    const inDots = F => dot2(F, pD[0], 'd-b', 2, 3.4) + dot2(F, pD[1], 'd-a', 3, 3.4) + dot2(F, pD[2], 'd-c', 4, 3.4);
    /* a class chip in the gutter with a leader to its mark on a ciliary process of the right side (steps 1 and 4: the same chips in the same place) */
    const r1p = PR(LOC, pD[0]), r2p = PR(LOC, pD[1]), r3p = PR(LOC, pD[2]);
    const gChip = (y0, name, k, c, p) => { const y = LY(y0); return chip8(GX - 2, y, 96, [name], k, c) + cld(GX - 2, y + 12.5, p[0] + 3.6, p[1] + 0.4, 'l' + k, c); };
    const inChips = gChip(124, 'β-blockers', 'xb', 2, r1p) + gChip(159, 'α2 agonists', 'xa', 3, r2p) + gChip(194, 'CA inhibitors', 'xc', 4, r3p);
    /* step 1: three marks on the ciliary processes, a chip for each; what each does is written under the eye */
    const s1 = EYE(LOC, {hi: ['cbody'], dim: ['sclera']}) + CONST_LOC() + CB_LOW() + TGL(['b', 'a', 'c']) +
      pl(PT(LOC, FA.proc)[0], PT(LOC, FA.proc)[1], 18, 'pl1') + PZ(PZ_ALONE, true) + T(8, BAND_ALONE - 8, '↓ INFLOW:', 'ibT', 'fa-w') +
      chip8(8, BAND_ALONE, 108, ['β-blockers', 'block β', 'receptors'], 'bb', 2) + chip8(126, BAND_ALONE, 108, ['α2 agonists', 'act on α2', 'receptors'], 'a2', 3) +
      chip8(244, BAND_ALONE, 108, ['CA inhibitors', 'block carbonic', 'anhydrase (CA)'], 'ca', 4) +
      T(8, BAND_ALONE + chipH(3) + 20, 'Each lowers aqueous humor production', 'ibU', 'fa-t');
    /* the marks in the zoom */
    const zm3 = zdot(ZA.tmU, 'z-m3', 5), zrkT = zdot(ZA.tmL, 'z-rkt', 6), zrkS = zdot(ZA.sc, 'z-rks', 6, 3.8), zpg = zdot(ZA.musc, 'z-pg', 1), zuv = zdot(ZA.uv, 'z-uv-d', 3);
    const m3Chip = chipB(ZX + 240, ZY + 22, 98, ['M3 agonists,', 'echothiophate'], 'm3', 5) + cld(ZX + 240, ZY + 52, ZX + ZA.tmU[0] + 3.6, ZY + ZA.tmU[1] - 1.6, 'lm3t', 5);
    const rkChip = chipB(ZX + 8, ZY + 92, 86, ['Rho kinase', 'inhibitor'], 'rk', 6) +
      cld(ZX + 94, ZY + 100, ZX + ZA.sc[0] - 2.6, ZY + ZA.sc[1] + 2.8, 'lrks', 6) + cld(ZX + 94, ZY + 118, ZX + ZA.tmL[0] - 3.6, ZY + ZA.tmL[1] + 2.2, 'lrkt', 6);
    const sphDots = dot2(LOC, FA.irisEnd, 'd-m3i', 5, 3.2);
    const sphR = PR(LOC, FA.irisEnd);
    const sphLab = y0 => { const y = LY(y0); return LB('sph', ['Sphincter muscle', '(iris)'], GX, y, [[GX - 3, y + 4], [sphR[0] + 4, sphR[1] - 0.5]]); };
    const trBand = T(8, BAND, '↑ OUTFLOW, trabecular route:', 'trT', 'fa-w') +
      chip8(8, BAND + 8, 167, ['M3 agonists,', 'echothiophate:', 'contract the sphincter', 'muscle and the meshwork'], 'xm3', 5) +
      chip8(185, BAND + 8, 167, ['netarsudil: less stiff', 'meshwork; changes the', 'canal lining’s permeability'], 'xrk', 6);
    const ztm = zp(ZA.tm), zmu = zp(ZA.musc);
    const s2 = EYE(LOC, {dim: ['lens', 'zon']}) + CONST_LOC() + TGL(['m3', 'rk']) +
      ZOOM({dim: ['cbody', 'musc', 'muscl', 'proc']}) + ZLINK() + zLab.tmLow() + zLab.sc() + zLab.iris() + zm3 + zrkT + zrkS + m3Chip + rkChip + pl(ztm[0], ztm[1], 24, 'pl2') + ZFRAME + PZ(PZ_ROW, false) + trBand;
    /* the PG chip sits in the anterior chamber of the zoom (fluid only under it); its leader crosses the iris to the mark on the ciliary muscle */
    const pgChip = chipB(ZX + 228, ZY + 24, 110, ['PG agonists', 'PGF2α receptor,', 'ciliary muscle'], 'pg', 1) + cld(ZX + 228, ZY + 66, ZX + ZA.musc[0] + 3.4, ZY + ZA.musc[1] - 2.6, 'lpg', 1);
    const brChip = chipB(ZX + 8, ZY + 30, 86, ['α2 agonists', 'brimonidine:', 'some', 'uveoscleral'], 'br', 3) + cld(ZX + 94, ZY + 92, ZX + ZA.uv[0] - 2.4, ZY + ZA.uv[1] - 3.6, 'lbr', 3);
    const uvBand = T(8, BAND, '↑ OUTFLOW, uveoscleral route:', 'uvT2', 'fa-w') +
      chip8(8, BAND + 8, 167, ['Prostaglandin (PG)', 'agonists: relax the ciliary', 'muscle (PGF2α receptor)'], 'xpg', 1) +
      chip8(185, BAND + 8, 167, ['brimonidine (α2 agonist):', 'some increase in', 'uveoscleral outflow'], 'xbr', 3);
    const s3 = EYE(LOC, {dim: ['lens', 'zon']}) + CONST_LOC() + FLOW(LOC, FF.uv, 'f-uv', {dim: true}) + TGL(['pg']) +
      ZOOM({hi: ['musc'], dim: ['tm', 'sc', 'vein']}) + ZLINK() + zflow(ZF.uvShort, 'z-uv', {drift: true}) + zLab.uv() + zLab.iris() + zpg + zuv + pgChip + brChip + pl(zmu[0], zmu[1], 15, 'pl3') + ZFRAME + PZ(PZ_ROW, false) + uvBand;
    /* step 4: every class: inflow on the eye (chips in the gutter), outflow in the zoom */
    const allBand = T(8, BAND, '↓ INFLOW:', 'ab1h', 'fa-w') + T(76, BAND, 'β-blockers, α2 agonists,', 'ab1a', 'fa-t') + T(76, BAND + 13, 'CA inhibitors (ciliary body)', 'ab1b', 'fa-t') +
      T(8, BAND + 34, '↑ OUTFLOW:', 'ab2h', 'fa-w') + T(92, BAND + 34, 'trabecular route: M3 agonists,', 'ab2a', 'fa-t') + T(92, BAND + 47, 'echothiophate, netarsudil', 'ab2b', 'fa-t') +
      T(92, BAND + 68, 'uveoscleral route: PG agonists,', 'ab3a', 'fa-t') + T(92, BAND + 81, 'brimonidine', 'ab3b', 'fa-t');
    const s4 = EYE(LOC) + CONST_LOC() + TGL(['b', 'a', 'c', 'm3', 'rk', 'pg']) +
      ZOOM() + ZLINK() + zm3 + zrkT + zrkS + zpg + zuv + m3Chip + rkChip + zLab.iris() +
      chipB(ZX + 240, ZY + 142, 98, ['PG agonists'], 'pg4', 1) + cld(ZX + 240, ZY + 155, ZX + ZA.musc[0] + 4.2, ZY + ZA.musc[1] + 0.4, 'lpg4', 1) +
      chipB(ZX + 8, ZY + 142, 86, ['brimonidine'], 'br4', 3) + cld(ZX + 94, ZY + 155, ZX + ZA.uv[0] - 4.2, ZY + ZA.uv[1] + 0.2, 'lbr4', 3) + ZFRAME + PZ(PZ_ROW, false) + allBand;
    return fa.stepper('ey-targets', 'Where each glaucoma drug class acts', [
      ['Inflow reducers act on the ciliary body: β-blockers on the β receptor, α2 agonists on the α2 receptor, CA inhibitors on the enzyme (slides 18, 22, 26).', NT(s1)],
      ['Trabecular route: M3 agonists and echothiophate act on the sphincter muscle and the meshwork; netarsudil on the meshwork and the canal (slides 32, 34, 41).', NT(s2)],
      ['Uveoscleral route: PG agonists act at the PGF2α receptor on the ciliary muscle; brimonidine adds some uveoscleral outflow (slides 22, 37; 11/17 T@31096).', NT(s3)],
      ['All the classes on one eye, one colour each: three lower inflow, three raise outflow by the routes shown (slides 18, 22, 26, 32, 34, 37, 41).', NT(s4)],
    ], 756, 'Drawn after Dr. Smith’s Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf slides 15, 18, 22, 26, 32, 34, 37 and 41: an original schematic of the whole front of the eye (both sides) with slide 15’s parts, and one angle enlarged; ' +
      'sites as the drug slides mark them (slide 18 β receptor on the ciliary body; ' +
      'slide 22 α2 receptors on the ciliary body, “binds to the uveoscleral” and some uveoscleral increase with brimonidine; slide 26 carbonic anhydrase; slides 32 and 34 M3 on the ' +
      'sphincter muscle and the trabecular meshwork; slide 37 PGF2α receptor and the ciliary muscle; slide 41 Rho kinase: meshwork stiffness and the endothelial lining of Schlemm’s canal). ' +
      'Lectures 11/13, T@39934–@40600 (inflow and outflow drugs), and 11/17, T@24556 (meshwork) and T@31096 (PGF2α receptor, ciliary muscle, uveoscleral outflow). ' +
      'No site is drawn that the slides or lectures do not state; classes with no slide-marked site on the eye are not placed.');
  })();

  /* ---------------------------------------------------------------------
     3. ey-angle: open-angle vs angle-closure glaucoma. Slides 13-14 (panels A-C); 11/13 T@19603-@20900,
     T@23500-@26600, T@28606-@29351. The whole front of the eye as the locator, both angles circled,
     and one angle enlarged: panel A (normal), panel B (the meshwork resists) and panel C (the iris
     bowed forward onto the meshwork).
     --------------------------------------------------------------------- */
  const ANGLE = (() => {
    const H0 = 430, angR = PR(LOC, [124, 157.5]);
    const ringR = fa.ring(angR[0], angR[1], 13, 'ringR');
    const acL = AC_LOC();
    const blk2 = (x1, y1, x2, y2, k) => { const a = PT(LOC, [x1, y1]), b = PT(LOC, [x2, y2]), c = PR(LOC, [x1, y1]), d = PR(LOC, [x2, y2]);
      return fa.blk(a[0], a[1], b[0], b[1], k + 'L') + fa.blk(c[0], c[1], d[0], d[1], k + 'R'); };
    const zblk = (x1, y1, x2, y2, k) => fa.blk(ZX + x1, ZY + y1, ZX + x2, ZY + y2, k);
    const s1 = EYE(LOC) + CONST_LOC() + acL + ringR + FLOW(LOC, FF.inflow, 'f-in') + gLab('cbody', ['Ciliary body'], 184, PR(LOC, [141, 232])) +
      ZOOM() + ZLINK() + zflow(ZF.tm, 'z-tm') + zflow(ZF.uv, 'z-uv', {drift: true}) + zLab.tm() + zLab.sc() + zLab.cornea() + zLab.sclera() + zLab.uv() + zLab.iris() + ZFRAME +
      T(8, H0, 'Normal drainage', 'nh', 'fa-tb') +
      card8(8, H0 + 8, 167, 'Made', ['by the ciliary body'], 'n0') + card8(185, H0 + 8, 167, 'Flows', ['through the pupil into', 'the anterior chamber'], 'n1') +
      card8(8, H0 + 70, 167, 'Drains', ['at the angle (circle),', 'through the meshwork'], 'n2') + card8(185, H0 + 70, 167, 'Goal in glaucoma', ['lower the pressure', '(IOP) to protect the', 'optic nerve'], 'n3');
    const s2 = EYE(LOC, {tm: 'bad'}) + CONST_LOC() + acL + ringR + FLOW(LOC, FF.inflow, 'f-in', {slow: true}) + blk2(121, 148, 131, 167, 'blkP') +
      ZOOM({tm: 'bad'}) + ZLINK() + zflow(ZF.tmIn, 'z-tm', {slow: true}) + zflow(ZF.tmOut, 'z-out', {dim: true}) + zblk(136, 64, 152, 100, 'zblkP') +
      ZL('bad', ['Trabecular', 'meshwork', 'dysfunction', 'with open', 'angle'], 8, 44, [[86, 70], [138, 80]], {cls: 'fa-w'}) + zLab.iris() + ZFRAME +
      T(8, H0, 'Primary open-angle glaucoma (POAG)', 'oh', 'fa-tb') +
      card8(8, H0 + 8, 167, 'Angle', ['open'], 'o0') + card8(185, H0 + 8, 167, 'What fails', ['meshwork dysfunction:', 'drainage not effective'], 'o1') +
      card8(8, H0 + 70, 167, 'Onset', ['gradual; no symptoms until', 'the visual field is lost'], 'o2') + card8(185, H0 + 70, 167, 'How common', ['common in the', 'United States'], 'o3');
    const s3 = EYE(LOC, {iris: 'bowed'}) + CONST_LOC({bowed: true}) + acL + ringR + FLOW(LOC, FF.stop, 'f-stop') + blk2(142, 114, 147, 130, 'blkC') +
      ZOOM({iris: 'bowed'}) + ZLINK() + zflow(ZF.stop, 'z-stop') + zblk(184, 40, 191, 64, 'zblkC') +
      ZL('blk', ['Forward', 'bowing of', 'iris blocks', 'trabecular', 'meshwork', 'drainage'], 8, 40, [[72, 70], [140, 80]], {cls: 'fa-w'}) + zLab.irisB() + ZFRAME +
      T(8, H0, 'Primary angle-closure glaucoma (PACG)', 'ch', 'fa-tb') +
      card8(8, H0 + 8, 167, 'Angle', ['closed: the iris bows', 'forward over the', 'meshwork'], 'c0') +
      card8(185, H0 + 8, 167, 'Linked to', ['the shape of the eye and', 'how it sits in the socket', 'also: swelling after', 'a blow or chemical', 'exposure'], 'c1') +
      card8(185, H0 + 8 + cardH(5) + 10, 167, 'Onset, pain', ['pressure rises very', 'quickly; significant pain'], 'c2') +
      card8(8, H0 + 8 + cardH(3) + 10, 167, 'Urgency', ['medical emergency: lower', 'the IOP quickly; a laser', 'opens the closed angle'], 'c3');
    return fa.stepper('ey-angle', 'Open-angle vs angle-closure glaucoma', [
      ['Normal: aqueous humor drains at the angle (circle), where the iris meets the cornea and sclera (slide 14 panel A; 11/13 T@26451).', s1],
      ['Open angle: the angle stays open but the trabecular meshwork drains poorly; gradual and silent (slides 13, 14 panel B; 11/13 T@29351).', s2],
      ['Angle closure: the iris bows forward and blocks the meshwork; the pressure rises fast and hurts (slides 13, 14 panel C; 11/13 T@28606).', s3],
    ], 652, 'Drawn after Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf slides 13 and 14 (DiPiro’s Pharmacotherapy 13e, panels A–C; Dr. Smith): an original schematic of the whole front of the eye cut front to back, with one angle enlarged: ' +
      'cornea, anterior chamber, iris, lens, ciliary body, sclera, trabecular meshwork, Schlemm’s canal and the uveoscleral route, as in panel A, with the pupil named as in the lecture; lecture 11/13, ' +
      'T@19603–@20900 and T@23500–@29400. Panels B and C each show half an eye on the slide; here each condition is drawn at both angles of one eye and in the enlarged angle. Both types: the goal of treatment is to decrease the IOP, delaying or preventing disease progression (slide 13). ' +
      'On 11/13 (T@23500, T@28606) she gave a blow to the eye or swelling as a cause of a closed angle and a laser opening as the treatment.');
  })();

  /* ---------------------------------------------------------------------
     4. ey-cai: carbonic anhydrase in the ciliary epithelium (slide 16's ciliary process, slide 15's
     eye), and why oral CAIs cause metabolic acidosis (slide 27's proximal tubule cell). Slides 26-29;
     11/13 T@53959-@60121; 11/17 T@4800-@22700 (kidney: T@7921-@20200).
     --------------------------------------------------------------------- */
  const CAI = (() => {
    const EO = {x: 6 - 0.55 * 88, y: 26 - 0.55 * 34, s: 0.55};
    const pr = E0.anchor('proc', EO);
    const zoomL = `<path class="an-lead" data-k="zl1" d="M${pr[0]} ${pr[1]} L6 196"/><path class="an-lead" data-k="zl2" d="M${pr[0]} ${pr[1]} L244 196"/>`;
    const mini = E(Object.assign({hiS: ['cbody'], omit: ['sc', 'tm', 'vein', 'sclera']}, EO));
    const cbL = TL(6, 36, ['Ciliary', 'body'], 'cbL', 'fa-t') + lead(40, 50, 58, 98, 'cbLl');
    const cell = fa.R(6, 196, 232, 130, 'ecell', 'fa-cellp', 10) + T(122, 212, 'Ciliary epithelium', 'ecT', 'fa-tb', 'middle');
    const cham = fa.R(246, 196, 108, 130, 'echam', 'fa-lumen', 10) + TL(300, 212, ['Posterior', 'chamber'], 'echT', 'fa-tb', 'middle');
    const enz = `<path class="fa-enz" data-k="enzy" d="${Anat.ell(70, 254, 7.5, 7.5)}"/>`;
    const chem = op => T(70, 240, 'CO₂ + H₂O', 'e1', 'fa-chem', 'middle') + enz + fa.arrow('M70 246 L70 262', 'ea1') +
      T(82, 264, 'carbonic anhydrase', 'eCA', 'fa-k', 'start') +
      T(70, 281, 'H₂CO₃', 'e2', 'fa-chem', 'middle', op) + fa.arrow('M70 287 L70 300', 'ea2', {op}) +
      T(70, 315, 'H⁺ + HCO₃⁻', 'e3', 'fa-chem', 'middle', op);
    const dimOp = dim => dim ? 0.35 : null;
    const flows = dim => fa.flow('M106 304 C170 296 214 280 262 270', 'es1', {dim}) + T(190, 281, 'HCO₃⁻', 'esT1', 'fa-chem', 'middle', dimOp(dim)) +
      fa.flow('M130 320 L262 320', 'es2', {dim}) + T(190, 313, 'Na⁺', 'esT2', 'fa-chem', 'middle', dimOp(dim)) +
      fa.flow('M196 238 L262 238', 'es3', {dim, drift: true}) + T(222, 231, 'water', 'esT3', 'fa-t', 'middle', dimOp(dim));
    const pcT = op => TL(300, 252, ['solutes out,', 'water follows'], 'esT4', 'fa-t', 'middle', 13).replace(/<text /g, op != null ? `<text opacity="${op}" ` : '<text ');
    const aqT = TL(300, 286, ['= aqueous', 'humor', '(INFLOW)'], 'esT5', 'fa-tb', 'middle', 13);
    const inCard = fa.R(156, 26, 200, 60, 'ink', 'fa-card') + T(164, 42, 'INFLOW', 'inkT', 'fa-k') +
      TL(164, 56, ['the ciliary epithelium makes', 'aqueous humor all the time'], 'inkL', 'fa-t');
    /* each formula's name in words, once (the narration's words) */
    const names = [['CO₂', 'carbon dioxide'], ['H₂CO₃', 'carbonic acid'], ['H⁺', 'hydrogen ion'], ['HCO₃⁻', 'bicarbonate'], ['Na⁺', 'sodium']]
      .map(([f, w], i) => T(226, 106 + i * 14, f, 'nmF' + i, 'fa-chem') + T(268, 106 + i * 14, w, 'nmW' + i, 'fa-t')).join('');
    const e1 = mini + cbL + zoomL + cell + cham + chem() + flows(false) + pcT() + aqT + inCard + names;
    const drugs = fa.R(156, 26, 200, 92, 'drg', 'fa-card') + T(164, 42, 'CA inhibitors', 'drgT', 'fa-k') +
      T(164, 58, 'eye drops', 'drgE', 'fa-ts') + fa.chip(160, 63, 96, ['dorzolamide'], 'dz', 22, true) + fa.chip(160, 89, 96, ['brinzolamide'], 'bz', 22, true) +
      T(262, 58, 'oral', 'drgO', 'fa-ts') + fa.chip(258, 63, 96, ['acetazolamide'], 'az', 22, true) + fa.chip(258, 89, 96, ['methazolamide'], 'mz', 22, true);
    const e2 = mini + cbL + zoomL + cell + cham + chem(0.35) + flows(true) + pcT(0.35) + fa.blk(64, 253, 80, 253, 'eblk') +
      T(10, 259, 'blocked', 'eBl', 'fa-w') + T(300, 296, '↓ INFLOW', 'eDown', 'fa-w', 'middle') + drugs;

    /* the kidney steps: a heading on top, so the boxes sit D lower than before; "lumen side" and "blood side" are written inside the cell */
    const KH = 210, D = 14;
    const kBase = T(6, 34, 'Why oral CA inhibitors can cause acidosis: the kidney', 'kwhy', 'fa-tb') +
      fa.R(6, 26 + D, 78, KH, 'lum', 'fa-lumen', 8) + fa.R(92, 26 + D, 172, KH, 'kcell', 'fa-cell', 8) + fa.R(272, 26 + D, 82, KH, 'bld', 'fa-blood', 8) +
      TL(45, 42 + D, ['Lumen', '(urine)'], 'lumT', 'fa-tb', 'middle') + T(178, 42 + D, 'Proximal tubule cell', 'kcT', 'fa-tb', 'middle') + T(313, 42 + D, 'Blood', 'bldT', 'fa-tb', 'middle') +
      T(96, 56 + D, '← lumen side', 'sideL', 'fa-ts') + T(260, 56 + D, 'blood side →', 'sideR', 'fa-ts', 'end');
    const kChem = op =>
      T(45, 152 + D, 'H⁺+HCO₃⁻', 'k1', 'fa-chem', 'middle') + fa.arrow(`M45 ${158 + D} L45 ${172 + D}`, 'ka1') + T(45, 186 + D, 'H₂CO₃', 'k2', 'fa-chem', 'middle') +
      fa.arrow(`M30 ${192 + D} L30 ${210 + D}`, 'ka2') + T(46, 206 + D, 'CA IV', 'kIV', 'fa-k', 'start') + T(45, 228 + D, 'CO₂+H₂O', 'k3', 'fa-chem', 'middle') +
      fa.arrow(`M80 ${224 + D} L128 ${224 + D}`, 'ka3') + TL(96, 200 + D, ['enter', 'the cell'], 'kpas', 'fa-ts', 'start', 12) +
      T(166, 226 + D, 'CO₂ + H₂O', 'k4', 'fa-chem', 'middle') + fa.arrow(`M166 ${214 + D} L166 ${194 + D}`, 'ka4') + T(182, 208 + D, 'CA II', 'kII', 'fa-k', 'start') +
      T(166, 186 + D, 'H₂CO₃', 'k5', 'fa-chem', 'middle', op) + fa.arrow(`M166 ${174 + D} L166 ${158 + D}`, 'ka5', {op}) +
      T(166, 150 + D, 'H⁺ + HCO₃⁻', 'k6', 'fa-chem', 'middle', op);
    const kTrans = dim => {
      const op = dim ? 0.35 : null, oa = op != null ? ` opacity="${op}"` : '';
      return `<path class="fa-tr" data-k="nhe" d="${Anat.ell(92, 104 + D, 15, 21)}"${oa}/>` + T(92, 74 + D, 'NHE3', 'nheT', 'fa-tb', 'middle', op) +
        fa.flow(`M20 ${94 + D} L150 ${94 + D}`, 'kna', {dim}) + T(36, 88 + D, 'Na⁺', 'knaT', 'fa-chem', 'middle', op) +
        fa.flow(`M136 ${140 + D} C112 ${128 + D} 80 ${118 + D} 28 ${114 + D}`, 'kh', {dim}) + T(56, 132 + D, 'H⁺', 'khT', 'fa-chem', 'middle', op) +
        `<path class="fa-tr" data-k="nbc" d="${Anat.ell(264, 146 + D, 15, 17)}"${oa}/>` + T(264, 124 + D, 'NBC1', 'nbcT', 'fa-tb', 'middle', op) +
        fa.flow(`M210 ${146 + D} L306 ${146 + D}`, 'kb', {dim}) + T(234, 178 + D, 'HCO₃⁻, Na⁺', 'kbT', 'fa-chem', 'middle', op);
    };
    const buf = op => TL(313, 176 + D, ['HCO₃⁻', 'buffers', 'blood pH'], 'buf', 'fa-t', 'middle', 13).replace(/<text /g, op != null ? `<text opacity="${op}" ` : '<text ');
    const t3 = T(6, 276, 'Normal: HCO₃⁻ returns to the blood', 'nrm', 'fa-tb') +
      TL(6, 290, ['Lumen: CA IV makes CO₂ + H₂O, which enters the cell', 'Cell: CA II makes H₂CO₃, then H⁺ + HCO₃⁻', 'NHE3: H⁺ leaves in exchange for Na⁺', 'NBC1: HCO₃⁻ goes to the blood (with Na⁺)'], 'nrl', 'fa-t');
    const k3 = kBase + kChem() + kTrans(false) + buf() + t3;
    const blocks = fa.blk(18, 200 + D, 42, 200 + D, 'kb4') + fa.blk(154, 202 + D, 178, 202 + D, 'kb2');
    /* the consequence is written in the drawing in red: Na⁺ stays in the lumen (step 4), no HCO₃⁻ returns to the blood (step 5) */
    const stay = T(49, 88 + D, 'stays', 'kstay', 'fa-w');
    const t4 = T(6, 276, 'Acetazolamide (oral) blocks CA IV and CA II (bars)', 'drg4', 'fa-w') +
      T(6, 290, 'Cell: no H₂CO₃, so no H⁺ to exchange for Na⁺', 'diu0', 'fa-t') +
      T(6, 304, 'Lumen: Na⁺ and water stay: more urine', 'diu1', 'fa-w') + T(6, 318, '(diuresis)', 'diu2', 'fa-w');
    const k4 = kBase + kChem(0.35) + kTrans(true) + buf(0.35) + blocks + stay + t4;
    const k5 = kBase + kChem(0.35) + kTrans(true) + buf(0.35) + blocks + stay +
      TL(313, 92, ['no HCO₃⁻', 'returns'], 'bno', 'fa-w', 'middle') + T(313, 118, 'pH falls', 'bph', 'fa-w', 'middle') +
      T(6, 276, 'Blood: no HCO₃⁻ goes back, so the pH falls:', 'aci', 'fa-t') +
      T(6, 290, 'METABOLIC ACIDOSIS', 'acw', 'fa-w') +
      T(6, 304, 'mainly with oral CA inhibitors; much less with eye drops', 'acq', 'fa-t');
    return fa.stepper('ey-cai', 'Carbonic anhydrase inhibitors: eye and kidney', [
      ['In the ciliary epithelium, carbonic anhydrase makes H₂CO₃; its HCO₃⁻ leaves with Na⁺ and water follows: aqueous humor (slide 26; 11/17 T@5420).', e1],
      ['A CA inhibitor stops the enzyme: less HCO₃⁻ and Na⁺ leave, less water follows, so inflow falls (slides 26, 28; 11/13 T@54881).', e2],
      ['Kidney: CA IV splits H₂CO₃ in the lumen; CA II makes H⁺ and HCO₃⁻ in the cell; HCO₃⁻ returns to the blood and buffers its pH (slide 27; 11/17 T@8731).', k3],
      ['Oral acetazolamide blocks CA IV and CA II: no H⁺ for NHE3, so Na⁺ and water stay in the lumen (diuresis) (slides 27, 29; 11/17 T@14835).', k4],
      ['No HCO₃⁻ returns to the blood, so the pH falls: metabolic acidosis, the side effect to watch with oral CA inhibitors (slide 29; 11/17 T@17682).', k5],
    ], 392, 'Drawn after Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf slides 26–29 (slide 27: Golan, Principles of Pharmacology, Fig 20-6; Dr. Smith); ' +
      'the eye is slide 15’s and the ciliary epithelium with its carbonic anhydrase is slide 16’s zoom; ' +
      'lectures 11/13, T@53959–@60121, and 11/17, T@4800–@22700. The Na⁺/K⁺ ATPase and vH⁺ ATPase on slide 27 are left out; she said the transporter names ' +
      'are not needed for this lecture (11/17 T@9398). Acidosis mainly with oral use, “to a much lesser extent” with drops (11/17 T@6785). In the eye, she said, ' +
      'the movement of solutes “is not quite the same” as in the kidney (11/17 T@20105). ' +
      'The figure follows slide 27 and 11/17 (T@5420): carbonic acid separates into H⁺ + HCO₃⁻.');
  })();

  /* ---------------------------------------------------------------------
     5. ey-autonomic: adrenergic vs cholinergic stimulation in the eye. Slide 7 ("Basic pharmacology
     for the eye", Lange Smart Charts: Pharmacology 2e) and nothing else: dilator muscle (adrenergic
     stimulation of alpha-1 receptors: the pupil dilates), pupillary sphincter muscles (cholinergic
     stimulation of muscarinic receptors: the pupils constrict), ciliary body (cholinergic stimulation
     of muscarinic receptors: contraction of the ciliary body, increased accommodation; adrenergic
     stimulation: the ciliary muscle relaxes, allowing far vision; produces aqueous humor).
     Adrenergic is amber and cholinergic red, the colours the alpha-2 agonists and the M3 agonists
     have in ey-targets. No narration is recorded for it (no DIA_NARR entry, no sentence map).
     --------------------------------------------------------------------- */
  const AUTONOMIC = (() => {
    const AUT = {x: -91.2, y: -8, s: 1.2}, cx = 180, CY = 378;
    const eye = (o = {}) => EYE(AUT, Object.assign({show: ['sph', 'dil']}, o));
    const base = (word, c) => LB('cornea', ['Cornea'], 286, 40, [[284, 43], PR(AUT, [150, 90])]) +
      LB('pupil', ['Pupil'], cx, 140, [[cx, word ? 157 : 144], [cx, PT(AUT, [0, 172])[1]]], {anchor: 'middle'}) +
      (word ? T(cx, 153, word, 'pupw' + c, 'fa-tk' + c, 'middle') : '') +
      LB('iris', ['Iris'], 96, 180, [[104, 182], [104, PT(AUT, [0, 167])[1]]]) + LB('lens', ['Lens'], cx, 262, null, {anchor: 'middle'});
    const dilR = t => PR(AUT, [(140 + t - 10) / 2, 171.7]), sphL = t => PT(AUT, [t - 3, 173]), muL = PT(AUT, [129, 214]);
    const dilLab = (t, extra) => LB('dil', ['Dilator muscle'].concat(extra ? [] : []), 208, 162, [[246, extra ? 179 : 166], [dilR(t)[0], dilR(t)[1] - (extra ? 4.4 : 1.6)]]) + (extra || '');
    const sphLab = (t, extra) => LB('sph', ['Pupillary sphincter', 'muscle'], 8, 36, [[70, extra ? 66 : 53], [sphL(t)[0] - (extra ? 2.4 : 1), sphL(t)[1] - (extra ? 3.6 : 3.4)]]) + (extra || '');
    const cbLab = (lines, to, extra) => LB('cbody', lines, 8, 338, [[30, 328], to]) + (extra || '');
    /* the two-column card: rows filled only from slide 7 */
    const X0 = 8, X1 = 74, X2 = 208, X3 = 352;
    const rows = [
      ['Pupil', ['α1 receptors on the', 'dilator muscle:', 'the pupil dilates'], ['muscarinic receptors', 'on the sphincter', 'muscles: constricts']],
      ['Ciliary muscle', ['relaxes, allowing', 'far vision'], ['muscarinic receptors:', 'the ciliary body', 'contracts; increased', 'accommodation (focus', 'for near vision)']],
      ['Aqueous humor', ['produces aqueous', 'humor'], ['not on slide 7']],
    ];
    const card = (() => {
      let y = CY + 22, s = fa.R(X0, CY, X3 - X0, 22 + rows.reduce((a, r) => a + Math.max(r[1].length, r[2].length) * 13 + 12, 0), 'atc', 'fa-card') +
        T(X1 + 8, CY + 15, 'Adrenergic', 'atAh', 'fa-tk3') + T(X2 + 8, CY + 15, 'Cholinergic', 'atCh', 'fa-tk5') +
        `<path class="fu-rule" data-k="atv1" d="M${X1} ${CY + 4} L${X1} ${CY + 22 + rows.reduce((a, r) => a + Math.max(r[1].length, r[2].length) * 13 + 12, 0) - 4}"/>` +
        `<path class="fu-rule" data-k="atv2" d="M${X2} ${CY + 4} L${X2} ${CY + 22 + rows.reduce((a, r) => a + Math.max(r[1].length, r[2].length) * 13 + 12, 0) - 4}"/>`;
      rows.forEach((r, i) => {
        const n = Math.max(r[1].length, r[2].length);
        s += `<path class="fu-rule" data-k="ath${i}" d="M${X0 + 4} ${y} L${X3 - 4} ${y}"/>`;
        s += r[0].split(' ').map((w, j) => T(X0 + 8, y + 15 + j * 13, w, `atr${i}n${j}`, 'fa-k')).join('');
        s += r[1].map((t, j) => T(X1 + 8, y + 15 + j * 13, t, `atr${i}a${j}`, 'fa-t')).join('');
        s += r[2].map((t, j) => T(X2 + 8, y + 15 + j * 13, t, `atr${i}c${j}`, r[2][0] === 'not on slide 7' ? 'fa-ts' : 'fa-t')).join('');
        y += n * 13 + 12;
      });
      return s;
    })();
    const s1 = eye() + base() + dilLab(198) + sphLab(198) + cbLab(['Ciliary body'], PT(AUT, [138, 244])) +
      TL(8, CY + 15, ['Slide 7 names three structures: the dilator muscle', 'and the pupillary sphincter muscles, both in the iris,', 'and the ciliary body. The next two steps show what', 'each kind of stimulation does to them.'], 'atI', 'fa-t');
    const a1 = dilR(184), a1L = PT(AUT, [(140 + 174) / 2, 171.7]);
    const s2 = eye({pupil: 'wide', hi: ['musc']}) + base('dilates', 3) +
      C.dot(a1L[0], a1L[1], 'd-a1L', 3, 4) + C.dot(a1[0], a1[1], 'd-a1R', 3, 4) +
      dilLab(184, T(208, 175, 'α1 receptors', 'dilA', 'fa-tk3')) +
      cbLab(['Ciliary muscle'], muL, T(8, 351, 'relaxes: far vision', 'cbA', 'fa-tk3')) +
      FLOW(AUT, 'M166 205 C172 198 178 193 188 190', 'f-aq', {hs: 0.8}) +
      T(352, 338, 'produces aqueous humor', 'aqA', 'fa-tk3', 'end') + `<path class="an-lead" data-k="aqAl" d="M300 328 L${PR(AUT, [157, 215.5])[0]} ${PR(AUT, [157, 215.5])[1]}"/>` + card;
    const sL = sphL(212), sR = PR(AUT, [209, 173]), mR = PR(AUT, [129, 214]);
    const s3 = eye({pupil: 'narrow'}) + base('constricts', 5) +
      C.dot(sL[0], sL[1], 'd-mL', 5, 4) + C.dot(sR[0], sR[1], 'd-mR', 5, 4) + C.dot(muL[0], muL[1], 'd-mcL', 5, 4) + C.dot(mR[0], mR[1], 'd-mcR', 5, 4) +
      sphLab(212, T(8, 62, 'muscarinic receptors', 'sphC', 'fa-tk5')) +
      cbLab(['Ciliary body'], [muL[0] - 3, muL[1] + 3], T(8, 351, 'muscarinic receptors: contracts', 'cbC', 'fa-tk5')) + card;
    return fa.stepper('ey-autonomic', 'Adrenergic vs cholinergic stimulation in the eye', [
      ['The three structures of slide 7: the dilator muscle and the pupillary sphincter muscles in the iris, and the ciliary body (slide 7).', NT(s1)],
      ['Adrenergic stimulation: α1 receptors on the dilator muscle dilate the pupil; the ciliary muscle relaxes (far vision); produces aqueous humor (slide 7).', NT(s2)],
      ['Cholinergic stimulation: muscarinic receptors constrict the pupil (sphincter) and contract the ciliary body: increased accommodation (slide 7).', NT(s3)],
    ], 632, 'Drawn after Dr. Smith’s Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf slide 7 (“Basic pharmacology for the eye”; Lange Smart Charts: Pharmacology, 2e), on an original schematic of the front of the eye. ' +
      'Every statement is slide 7’s: adrenergic stimulation of α1-receptors on the dilator muscle causes the pupil to dilate; cholinergic stimulation of muscarinic receptors on the pupillary sphincter muscles ' +
      'causes the pupils to constrict; cholinergic stimulation of muscarinic receptors causes a contraction of the ciliary body leading to increased accommodation; adrenergic stimulation causes the ciliary muscle ' +
      'to relax, allowing for far vision, and produces aqueous humor. The slide says nothing about aqueous humor under cholinergic stimulation. Accommodation means focusing for near vision (word meaning). ' +
      'Where the two muscles lie in the iris (sphincter at the pupil edge, dilator along the iris) is the drawing’s; the slide lists them without a picture. The lens and the ciliary muscle are drawn the same in every step.');
  })();

  const PURPOSE = {
    'ey-aqueous': 'Shows where aqueous humor is made (inflow) and the two routes it drains by (outflow), on the eye as slide 15 draws it, with each glaucoma drug class placed on the part it changes, so you can sort a drug as an inflow reducer or an outflow enhancer and name its route.',
    'ey-targets': 'Shows the site on the eye where each glaucoma drug class acts, one colour for each class, so you can name the site of a class and sort it as an inflow reducer or an outflow enhancer.',
    'ey-angle': 'Compares open-angle and angle-closure glaucoma with normal drainage, on the eye as slide 14 draws it, so you can say what blocks the drainage in each, how each starts and why angle closure is an emergency.',
    'ey-autonomic': 'Shows what adrenergic and cholinergic stimulation each do to the pupil, the ciliary muscle and aqueous humor, so you can tell the two apart.',
    'ey-cai': 'Shows what carbonic anhydrase does in the ciliary epithelium and in the kidney, so you can explain how a CA inhibitor lowers inflow and why an oral one can cause metabolic acidosis.',
  };
  return {
    figs: {'ey-autonomic': AUTONOMIC, 'ey-aqueous': AQUEOUS, 'ey-targets': TARGETS, 'ey-angle': ANGLE, 'ey-cai': CAI},
    names: {'ey-autonomic': 'Adrenergic vs cholinergic stimulation in the eye',
      'ey-aqueous': 'Glaucoma: inflow, outflow and where each drug acts',
      'ey-targets': 'Glaucoma drugs: where each class acts on the eye',
      'ey-angle': 'Open-angle vs angle-closure glaucoma',
      'ey-cai': 'Carbonic anhydrase inhibitors: eye and kidney (acidosis)'},
    purpose: PURPOSE,
  };
})();

if (DIAGRAMS_EY_FA2) {
  const OPEN_RX = /^<figure class="fig[^"]*">/;
  const pesc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  Object.keys(DIAGRAMS_EY_FA2.figs).forEach(k => {
    const h = DIAGRAMS_EY_FA2.figs[k], m = typeof h === 'string' && h.match(OPEN_RX);
    DIA[k] = (m && h.indexOf('dnpurpose') < 0)
      ? m[0] + '<p class="dnpurpose"><b>Purpose.</b> ' + pesc(DIAGRAMS_EY_FA2.purpose[k]) + '</p>' + h.slice(m[0].length) : h;
  });
  if (typeof DIA_NAMES !== 'undefined') Object.assign(DIA_NAMES, DIAGRAMS_EY_FA2.names);
  /* ey-targets joins the Eye group, after ey-aqueous */
  if (typeof DIAGRAMS !== 'undefined') {
    const g = DIAGRAMS.find(x => x[0] === 'Eye: glaucoma, allergy and dry eye (Dr. Smith, Exam 3)');
    if (g && g[1].indexOf('ey-targets') < 0) g[1].splice(g[1].indexOf('ey-aqueous') + 1, 0, 'ey-targets');
    /* ey-autonomic (slide 7) opens the group: it comes before the glaucoma slides */
    if (g && g[1].indexOf('ey-autonomic') < 0) g[1].unshift('ey-autonomic');
  }
}
