/* ==========================================================================
   DIAGRAMS_LG: Dr. Lam's glaucoma therapeutics (Exam 3), drawn as step-throughs
   ==========================================================================
   Loaded after figs2.js. Uses `figure` from diagrams.js and adds five figures to
   DIA, their names to DIA_NAMES and one group to DIAGRAMS (DIAGRAMS.push, as
   figs2.js and diagrams_oo.js do). Keys start `lg-`, so the Diagrams tab files the
   group under Exam 3 (examfold_ui.js).

     lg-sequence        the six classes in the order they are added      slides 18-20, 31-32, 41-42, 51, 57, 62-64; 11/19 T@47812-@85200
     lg-administration  order of drops and the waits between them        slides 74-75, 83; 11/19 T@87661-@91467
     lg-eyelid          eyelid closure, step by step, and why            slides 71-73; 11/19 T@86335-@87300
     lg-problems        her four checks and her two branches             slides 15-16, 22-25, 36-37; 11/19 T@47933-@64706
     lg-combos          the three combination products                   slide 69; 11/19 T@85943-@86200

   Sources: Lam_Glaucoma.pdf (file page numbers), her handout (Lam_Glaucoma_doc) and the
   11/19 lecture transcript (T@ = character offset in DEENT_Lecture_11.19_transcript.txt;
   her part starts at @35742). Every label, number and claim comes from those places; her
   qualifiers ("about", "if possible", "at least") are kept. Where her slides print one
   fact two ways (the carbonic anhydrase inhibitor in Simbrinza), the figure draws the class
   and does not name the drug.

   Step markup is the one `stepper` writes (groups .st, dots, controls), built here with a
   larger caption (11.5 units, wrapped at 50 characters) because the figures are drawn about
   350 px wide on a phone and text under 11 px is hard to read there. STEPPERS.md rules: the
   same thing keeps the same data-k in every step; data-k values are unique in a step; opacity
   only as an attribute; no shape has its own transform; colours are course CSS variables or
   currentColor, and every coloured mark has a text label.
   Check: node diagrams_lg_check.js (and stepper_test.js for the motion).
   ========================================================================== */
const DIAGRAMS_LG = (() => {
  if (typeof DIA === 'undefined' || typeof figure !== 'function') return null;
  const W = 360;
  const r1 = v => Math.round(v * 10) / 10;
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  /* text: x, y, words, key, class, anchor */
  const T = (x, y, s, k, c = 'lg-t', a = 'start') =>
    `<text class="${c}" data-k="${k}" x="${r1(x)}" y="${r1(y)}" text-anchor="${a}">${esc(s)}</text>`;
  const L = (p, q, k, c = 'lg-bd') =>
    `<line class="${c}" data-k="${k}" x1="${r1(p[0])}" y1="${r1(p[1])}" x2="${r1(q[0])}" y2="${r1(q[1])}"/>`;
  const A = (d, k, c = 'arrow') => `<path class="${c}" data-k="${k}" d="${d}"/>`;
  const R = (x, y, w, h, k, c = 'box', rx = 6) =>
    `<rect class="${c}" data-k="${k}" x="${r1(x)}" y="${r1(y)}" width="${r1(w)}" height="${r1(h)}" rx="${rx}"/>`;
  const C = (x, y, r, k, c = 'lg-bub') => `<circle class="${c}" data-k="${k}" cx="${r1(x)}" cy="${r1(y)}" r="${r}"/>`;
  const E = (x, y, rx, ry, k, c = 'lg-eye') => `<ellipse class="${c}" data-k="${k}" cx="${r1(x)}" cy="${r1(y)}" rx="${rx}" ry="${ry}"/>`;
  const P = (d, k, c = 'lg-bd') => `<path class="${c}" data-k="${k}" d="${d}"/>`;
  /* several lines of text, 14 units apart */
  const Ls = (x, y, arr, k, c = 'lg-t', a = 'start', dy = 14) => arr.map((s, i) => T(x, y + i * dy, s, k + i, c, a)).join('');

  /* ---- step markup: the structure stepper() writes, with an 11.5-unit caption ---- */
  const CAP_W = 50, CAP_DY = 13;
  const wrap = t => {
    const out = []; let cur = '';
    String(t).split(' ').forEach(w => {
      if ((cur + ' ' + w).trim().length > CAP_W) { out.push(cur.trim()); cur = w; } else cur += ' ' + w;
    });
    out.push(cur.trim());
    return out.filter(Boolean);
  };
  function lgStepper(key, title, steps, h, cap) {
    let g = `<text class="title lg-title" x="${W / 2}" y="13" text-anchor="middle">${esc(title)}</text>`;
    steps.forEach((st, i) => {
      const lines = wrap(st[0]);
      if (lines.length > 3) lines.length = 3;          // diagrams_lg_check.js fails a caption over three lines
      g += `<g class="st${i === 0 ? ' on' : ''}" data-step="${i + 1}">${st[1]}` +
        `<text class="lbl sm capt lg-caph" x="6" y="${h - 5 - lines.length * CAP_DY}" text-anchor="start">Step ${i + 1} of ${steps.length}</text>` +
        lines.map((l, k) => `<text class="lbl xs capt lg-cap" x="6" y="${h - 5 - (lines.length - 1 - k) * CAP_DY}" text-anchor="start">${esc(l)}</text>`).join('') +
        `</g>`;
    });
    const dots = steps.map((st, i) =>
      `<button class="sdot${i === 0 ? ' on' : ''}" data-go="dot" data-i="${i}" aria-label="Go to step ${i + 1}"></button>`).join('');
    const controls = `<div class="anim" data-anim="${key}">` +
      `<button class="btn ghost" data-go="-1">◀ Back</button>` +
      `<button class="btn ghost" data-go="1">Next ▶</button>` +
      `<button class="btn ghost" data-go="replay">↻ Replay step</button>` +
      `<button class="btn ghost" data-go="play">▶ Play all</button>` +
      `<span class="sdots">${dots}</span></div>`;
    return figure(g, cap, h).replace('</svg>', '</svg>' + controls);
  }

  /* ---------------------------------------------------------------------
     lg-sequence: the six classes, in the order they are added
     Slide 18 (the six classes), slides 19-20 (prostaglandin analogs: first
     line, once daily, up to 33%), 31-32 (beta blockers 20-30%, BID, Timoptic
     XE gel daily), 41-42 (alpha-2 18-27%, BID), 51 (topical CAI 15-26%, TID),
     57 (pilocarpine QID), 62 (Rho kinase 20-30%, QHS), 63-64 (the order; the
     "next agent" case); 11/19 T@47812 (order = most to least prescribed),
     T@50184-@52000, @58386-@59300, @68644-@68900, @75315-@75700,
     @80688-@81300, @82873-@84138 (last line, 51%), @84138-@85200.
     --------------------------------------------------------------------- */
  const SEQUENCE = (() => {
    const h = 372;
    const rows = [
      ['Prostaglandin analog', 'once daily', 'IOP ↓ up to 33% · first line'],
      ['Beta blocker', 'twice daily', 'IOP ↓ 20–30% · timolol gel once daily'],
      ['Alpha-2 agonist', 'twice daily', 'IOP ↓ 18–27%'],
      ['Topical CAI', 'three times daily', 'carbonic anhydrase inhibitor · IOP ↓ 15–26%'],
      ['Cholinergic', 'four times daily', 'pilocarpine · rarely used'],
      ['Rho-kinase inhibitor', 'once daily, evening', 'IOP ↓ 20–30% · conjunctival hemorrhage'],
    ];
    const row = (i, isNew) => {
      const y = 24 + i * 38;
      return R(6, y, 348, 34, 'r' + i, isNew ? 'lg-act' : 'box') +
        T(14, y + 15, String(i + 1), 'n' + i, 'lg-num') +
        T(30, y + 15, rows[i][0], 'nm' + i, 'lg-tb') +
        T(346, y + 15, rows[i][1], 'fq' + i, 'lg-tb', 'end') +
        T(30, y + 29, rows[i][2], 'd' + i, 'lg-ts') +
        (isNew ? T(346, y + 29, 'just added', 'new', 'lg-k', 'end') : '');
    };
    const build = n => { let s = ''; for (let i = 0; i <= n; i++) s += row(i, i === n); return s; };
    const look = R(6, 256, 348, 54, 'lookb', 'lg-act') +
      Ls(14, 272, ['Lookup: she is on a prostaglandin analog, a beta blocker', 'and an alpha-2 agonist (rows 1–3), so the next agent', 'is row 4, a topical CAI such as brinzolamide.'], 'lk', 'lg-t');
    const steps = [
      ['Start with the prostaglandin analog: once daily, since more doses lower efficacy; IOP down up to 33% (slides 19–20; T@50184).', build(0)],
      ['Add a beta blocker: 20–30%, twice daily; timolol gel is once daily, so it saves a dose (slides 31–32; T@58386).', build(1)],
      ['Add an alpha-2 agonist: 18–27%, twice daily; the third drop, so adherence falls and combinations follow (slides 41–42; T@68644).', build(2)],
      ['Add a topical CAI: 15–26%, three times daily; each step adds doses, so compliance falls (slide 51; T@75315).', build(3)],
      ['Pilocarpine, four times daily, is the fifth class and is rarely used because of IOP efficacy and dosing (slide 57; T@80688).', build(4)],
      ['Rho-kinase inhibitor is last: hemorrhage (up to 51%) and cost. In order, “next agent” is a lookup (slides 62–64; T@82873).', build(5) + look],
    ];
    return lgStepper('lg-sequence', 'Glaucoma drug classes in the order added', steps, h,
      'Drawn after Lam_Glaucoma.pdf slides 18–20 (the six classes; prostaglandin analogs first line, once daily, up to 33%), 31–32 (beta blockers ' +
      '20–30%, BID; Timoptic XE gel daily), 41–42 (alpha-2 agonists 18–27%, BID), 51 (topical CAI 15–26%, TID), 57 (pilocarpine QID), 62 (Rho-kinase ' +
      'inhibitor 20–30%, QHS) and 63–64 (the order; the “next agent” case, answer brinzolamide); Dr. Lam, lecture 11/19, T@47812 (her order is most ' +
      'to least commonly prescribed), T@50184–@52000 (once daily; more doses lower efficacy), T@58386–@59300, T@68644–@68900, T@75315–@75700 ' +
      '(frequency rises, compliance falls), T@80688, T@82873–@84138 (51% conjunctival hemorrhage; cost; salvage), T@84138–@85200 (one exam question: ' +
      'recognize the sequence). The Rho-kinase inhibitor is once daily: it is last for its side effect and cost, not its frequency.');
  })();

  /* ---------------------------------------------------------------------
     lg-administration: order of drops and the waits between them
     Slide 74 (solution, solution: 5 min; solution, suspension: 5 min;
     solution, ointment/gel-forming: 10 min), slide 75 (order of application),
     slide 83 (contact lenses: remove, wait 15 minutes, BAK); handout
     (shake suspensions; suspension last for its prolonged retention in the
     tear film); 11/19 T@87661-@88200 (two solutions), @88186 (solution then
     suspension), @88233-@88564 (10 minutes), @88564-@89000 (order; timolol
     gel-forming solution; example), @91057-@91700 (contact lenses).
     --------------------------------------------------------------------- */
  const ADMIN = (() => {
    const h = 300;
    const rowAt = i => 26 + i * 66;
    const rw = (i, left, right, wait, note1, note2, kk) => {
      const y = rowAt(i);
      return R(8, y, 112, 30, 'ra' + i) + T(64, y + 19, left, 'la' + kk, 'lg-tb', 'middle') +
        A(`M124 ${y + 15} L200 ${y + 15}`, 'ar' + i) + T(162, y + 11, wait, 'w' + kk, 'lg-k', 'middle') +
        R(204, y, 148, 30, 'rb' + i, 'lg-act') + T(278, y + 19, right, 'rt' + kk, 'lg-tb', 'middle') +
        T(8, y + 46, note1, 'na' + kk, 'lg-t') + T(8, y + 59, note2, 'nb' + kk, 'lg-t');
    };
    const r0 = rw(0, 'Solution 1', 'Solution 2', '5 min', 'Either solution can go first. The wait stops the', 'second drop flushing out or diluting the first.', 'x');
    const r1_ = rw(1, 'Solution', 'Suspension', '5 min', 'Shake the suspension. It goes last: it stays longer', 'in the tear film.', 'y');
    const r2 = rw(2, 'Solution', 'Ointment / gel', '10 min', 'The drop gets into the eye first, then the ointment', 'or gel-forming solution.', 'z');
    const lad = (i, n, txt, k) => R(8, 26 + i * 44, 344, 30, 'ld' + k, i === 2 ? 'lg-act' : 'box') + T(18, 45 + i * 44, n, 'ln' + k, 'lg-num') + T(34, 45 + i * 44, txt, 'lt' + k, 'lg-tb');
    const ladder = lad(0, '1', 'Solutions', 'a') + lad(1, '2', 'Suspensions', 'b') + lad(2, '3', 'Ointments and gel-forming solutions', 'c') +
      A('M24 56 L24 70', 'lga') + A('M24 100 L24 114', 'lgb') +
      Ls(8, 160, ['Timolol gel-forming solution is in the third group.', 'Example: latanoprost solution first, then the timolol', 'gel 10 minutes later.'], 'ex', 'lg-t');
    const cl = (i, n, txt, k) => R(8, 26 + i * 44, 344, 28, 'cb' + k, i === 2 ? 'lg-act' : 'box') + T(18, 44 + i * 44, n, 'cn' + k, 'lg-num') + T(34, 44 + i * 44, txt, 'ct' + k, 'lg-tb');
    const lens = cl(0, '1', 'Take the contact lenses out', 'a') + cl(1, '2', 'Instill the drops', 'b') + cl(2, '3', 'Wait at least 15 minutes', 'c') + cl(3, '4', 'Put the lenses back in', 'd') +
      A('M24 54 L24 70', 'cga') + A('M24 98 L24 114', 'cgb') + A('M24 142 L24 158', 'cgc') +
      Ls(8, 204, ['Lenses trap the drug and the preservative against the', 'eye, which matters most with BAK. Lens wearers can', 'still use drops: lenses out, drops in, then wait.'], 'cn', 'lg-t');
    const steps = [
      ['Two solutions: wait 5 minutes between them so the first drop is not flushed away or diluted (slide 74; T@87661).', r0],
      ['Solution, then suspension 5 minutes later; shake the suspension, which goes last (slides 74–75; T@88186).', r0 + r1_],
      ['Solution, then an ointment or gel-forming solution 10 minutes later, so the drop gets in first (slide 74; T@88233).', r0 + r1_ + r2],
      ['Order of application: solution, suspension, then ointment or gel-forming solution; timolol gel is in the last group (slide 75; T@88564).', ladder],
      ['Contact lenses: remove them, instill the drops, wait 15 minutes, then reinsert them (slide 83; T@91057).', lens],
    ];
    return lgStepper('lg-administration', 'Order of eye drops and the waits between them', steps, h,
      'Drawn after Lam_Glaucoma.pdf slide 74 (solution to solution 5 min; solution to suspension 5 min; solution to ointment/gel-forming 10 min), ' +
      'slide 75 (order of application: solution, suspension, ointment/gel-forming solution) and slide 83 (contact lenses: remove, wait 15 minutes, ' +
      'especially with BAK); her handout (shake suspensions; suspension last because of its prolonged retention in the tear film; drops at least 10 ' +
      'minutes before the ointment); Dr. Lam, lecture 11/19, T@87661–@88200 (wash-out), T@88186–@88564 (suspension; 10 minutes), T@88564–@89000 ' +
      '(timolol gel-forming solution falls under the ointments; latanoprost then timolol gel, 10 minutes), T@91057–@91700 (contact lenses).');
  })();

  /* ---------------------------------------------------------------------
     lg-eyelid: eyelid closure, and why
     Slide 71 (do not touch the dropper bottle tip), slide 72 (eyelid closure:
     decreases nasolacrimal drainage, systemic absorption, severity of
     systemic side effects), slide 73 (wash hands and remove contacts; tilt
     the head back, grasp the lower outer lid, pull out a pouch; position
     the dropper, look directly at it, release the lid slowly after the
     drop; gently close the eyes, lightly press the inside corners, blot
     excess); handout (the lids closed, do not squeeze or rub, 2 minutes;
     recap and store); 11/19 T@86335 (tip; bacteria), T@86951-@87300 (hands,
     pocket, drop, press the corner 1 or 2 minutes, not hard enough to hurt).
     --------------------------------------------------------------------- */
  const LID = (() => {
    const h = 292;
    const open = E(170, 96, 86, 30, 'eye') + C(170, 96, 14, 'iris', 'lg-iris');
    const inner = C(84, 98, 4, 'ic', 'lg-mk') + T(8, 102, 'inner corner', 'icl', 'lg-ts');
    const bottleAway = R(268, 30, 34, 28, 'bt', 'lg-bot') + P('M278 58 L292 58 L288 72 L282 72 Z', 'tip', 'lg-bot') + T(285, 90, 'dropper', 'btl', 'lg-ts', 'middle');
    const bottleOver = R(153, 22, 34, 28, 'bt', 'lg-bot') + P('M163 50 L177 50 L173 62 L167 62 Z', 'tip', 'lg-bot') + T(212, 40, 'look at the tip', 'lk', 'lg-t');
    const s1 = open + inner + bottleAway +
      Ls(8, 176, ['Wash your hands (and take contacts out).', 'The bottle tip touches nothing: not the eye,', 'the hands or any surface.'], 'a', 'lg-t');
    const pocketLid = P('M92 118 Q170 178 248 118', 'pk', 'lg-pk');
    const s2 = open + inner + bottleAway + pocketLid + A('M244 122 L244 156', 'pa') + T(252, 150, 'pull down', 'pd', 'lg-k') + T(170, 164, 'pocket', 'pkl', 'lg-tb', 'middle') +
      Ls(8, 188, ['Tilt the head back. Pull the lower lid out', 'and down to form a pocket.'], 'b', 'lg-t');
    const s3 = open + inner + bottleOver + pocketLid + C(170, 136, 5, 'drop', 'lg-drop') + T(170, 164, 'one drop', 'dpl', 'lg-tb', 'middle') +
      Ls(8, 188, ['Look at the dropper and place one drop in the', 'pocket. Release the lid slowly.'], 'c', 'lg-t');
    const closed = P('M62 98 Q170 124 278 98', 'lidc', 'lg-bd');
    const press = C(84, 100, 9, 'prs', 'lg-bub') + T(84, 126, 'press gently', 'pr1', 'lg-k', 'middle');
    const s4 = closed + press + T(84, 140, '1–2 minutes', 'pr2', 'lg-k', 'middle') +
      T(260, 130, 'do not squeeze or rub', 'nq', 'lg-w', 'middle') +
      Ls(8, 176, ['Close the eyes and lightly press the inner corner', 'for 1 to 2 minutes. Blot excess solution.'], 'd', 'lg-t');
    const s5 = closed + press + A('M84 148 L84 168', 'dr') + T(96, 162, 'nasolacrimal drainage', 'drl', 'lg-t') +
      R(8, 176, 344, 56, 'chn', 'lg-act') +
      Ls(16, 192, ['pressed corner → ↓ nasolacrimal drainage', '→ ↓ systemic absorption', '→ ↓ severity of systemic side effects'], 'e', 'lg-tb');
    const steps = [
      ['Wash your hands first; the bottle tip must touch no eye, hand or surface, so the solution stays clean (slides 71, 73; T@86335).', s1],
      ['Tilt the head back and pull the lower lid down and out to form a pocket (slide 73; T@86951).', s2],
      ['Look at the dropper, place one drop in the pocket, then release the lid slowly (slide 73; T@86951).', s3],
      ['Close the eyes, do not squeeze or rub, and press the inner corner gently for 1–2 minutes (slides 72–73; T@87190).', s4],
      ['Why: closing the lid lowers nasolacrimal drainage, so less drug is absorbed and systemic side effects are milder (slide 72).', s5],
    ];
    return lgStepper('lg-eyelid', 'Eyelid closure: steps and purpose', steps, h,
      'Schematic of the front of one eye, drawn after Lam_Glaucoma.pdf slide 71 (do not touch the dropper bottle tip), slide 72 (eyelid closure lowers ' +
      'nasolacrimal drainage, systemic absorption and the severity of systemic side effects) and slide 73 (wash hands and remove contacts; tilt back, ' +
      'pull out a pouch of the lower lid; place the drop looking at the dropper, release the lid slowly; close the eyes and lightly press the inside ' +
      'corners; blot). The handout says the lids stay closed for 2 minutes without squeezing or rubbing; Dr. Lam, lecture 11/19, T@86335 (the tip: ' +
      'bacteria), T@86951–@87300 (clean hands, pouch, press the corner for 1 or 2 minutes, not hard enough to cause pain).');
  })();

  /* ---------------------------------------------------------------------
     lg-problems: how she solves a medication-related problem
     Slides 15-16 and 78-79 (indication, effectiveness, safety, adherence),
     slide 22 (intolerance: change formulation, switch class, preservative),
     slide 23 and 36 (inadequate response: compliance, technique, increase
     concentration if possible, switch agent), slides 24-25 (bimatoprost BID),
     slide 37 and 32 (Timoptic BID, Timoptic XE gel daily); handout
     (BAK; preservative-free; bimatoprost slightly more effective than
     latanoprost); 11/19 T@47933 (how she organizes it), @53873-@55531,
     @55683-@56621, @57116-@58000 (the essay-style case), @63619-@64706.
     --------------------------------------------------------------------- */
  const PROB = (() => {
    const h = 304;
    const g = (hl) => {
      const b = (i, title, sub) => {
        const x = i % 2 ? 184 : 8, y = i > 1 ? 72 : 24;
        return R(x, y, i % 2 ? 168 : 172, 44, 'g' + i, hl === i ? 'lg-act' : 'box') + T(x + 8, y + 17, title, 'gt' + i, 'lg-tb') + T(x + 8, y + 34, sub, 'gs' + i, 'lg-ts');
      };
      return b(0, 'Indication', 'needed or unnecessary?') + b(1, 'Effectiveness', 'dose, frequency') + b(2, 'Safety', 'side effect, dose too high') + b(3, 'Adherence', 'forgets, cost, understanding');
    };
    const grid = g(-1);
    const s2 = g(-1) + R(8, 130, 344, 82, 'bx', 'lg-act') + T(16, 147, 'Intolerance (side effects): three moves', 'bh', 'lg-tb') +
      T(16, 166, '1  Change the formulation (solution to gel)', 'b1', 'lg-t') +
      T(16, 183, '2  Switch to another drug class', 'b2', 'lg-t') +
      T(16, 200, '3  Reaction to the preservative (BAK): preservative-free', 'b3', 'lg-t');
    const s3 = g(-1) + R(8, 126, 344, 108, 'bx2', 'lg-act') + T(16, 143, 'Inadequate response (IOP not at goal)', 'ch', 'lg-tb') +
      T(16, 162, '1  Check compliance', 'c1', 'lg-t') + T(16, 179, '2  Check administration technique', 'c2', 'lg-t') +
      T(16, 196, '3  Increase the concentration, if possible', 'c3', 'lg-t') +
      T(16, 213, '4  Same class: latanoprost to bimatoprost', 'c4', 'lg-t') + T(16, 230, '5  Or add the next class in the order', 'c5', 'lg-t');
    const stack = (a, b, c, k) => R(8, 124, 344, 28, 'sa' + k, 'box') + T(18, 142, a, 'ta' + k, 'lg-t') + A('M180 154 L180 166', 'ua' + k) +
      R(8, 168, 344, 28, 'sb' + k, 'lg-act') + T(18, 186, b, 'tb' + k, 'lg-tb') + A('M180 198 L180 210', 'ub' + k) +
      R(8, 212, 344, 28, 'sc' + k, 'box') + T(18, 230, c, 'tc' + k, 'lg-t');
    const s4 = g(1) + stack('Bimatoprost 0.01%: 1 drop OU twice daily', 'Effectiveness: frequency too high', 'Contact the provider: once daily', 'p');
    const s5 = g(3) + stack('Timoptic solution twice daily: forgets evening', 'Adherence: twice-daily dosing', 'Change to Timoptic XE gel: once daily', 'q');
    const steps = [
      ['Each medication is checked for indication, effectiveness, safety and adherence (slides 15–16, 78–79; T@47933).', g(-1)],
      ['Intolerance: change the formulation, switch class, or use a preservative-free product if BAK is the cause (slide 22; T@53873).', s2],
      ['Inadequate response: check compliance and technique, raise the concentration, switch within the class or add one (slides 23, 36; T@55683).', s3],
      ['A new patient on bimatoprost twice daily: more than once daily lowers efficacy, so contact the provider (slides 24–25; T@57116).', s4],
      ['A patient who forgets the evening Timoptic dose: switch to the once-daily gel (slides 37, 32; T@63619).', s5],
    ];
    void grid;
    return lgStepper('lg-problems', 'Solving a medication-related problem', steps, h,
      'Drawn after Lam_Glaucoma.pdf slides 15–16 and 78–79 (the four headings of medication-related problems), 22 (intolerance: change formulation, ' +
      'switch to another drug class, reaction to the preservative), 23 and 36 (inadequate response: compliance, eye administration technique, ' +
      'increase concentration if possible, switch to another agent), 24–25 (bimatoprost twice daily), 37 and 32 (Timoptic twice daily; Timoptic XE gel ' +
      'once daily); her handout (BAK; preservative-free products; bimatoprost slightly more effective than latanoprost); Dr. Lam, lecture 11/19, ' +
      'T@47933 (how she organizes problems), T@53873–@55531 (intolerance), T@55683–@56621 and T@71594–@71782 (inadequate response; bimatoprost), ' +
      'T@57116–@58000 (the open-ended case: name the problem and justify it), T@63619–@64706 (the Timoptic case). “If possible” is hers: the handout ' +
      'lists a higher concentration for the beta blocker, alpha-2 and cholinergic classes, not for every class.');
  })();

  /* ---------------------------------------------------------------------
     lg-combos: the three combination products as pairs of classes
     Slide 69 (Combigan: alpha-2 agonist/beta blocker BID; Cosopt, Cosopt PF:
     CAI/beta blocker BID; Simbrinza: CAI/alpha-2 agonist TID); handout (the
     same table; "multiple eye drops: use combination products"); 11/19
     T@62830 (PF is preservative-free), @85943-@86200 (recognize the classes
     and the dosing; never once a day), @89624-@90138 (combination products
     to cut the number of drops). Slide 69 and slides 42 and 51 print the
     carbonic anhydrase inhibitor in Simbrinza two ways, so the figure draws
     the class and does not name the drug.
     --------------------------------------------------------------------- */
  const COMBO = (() => {
    const h = 346;
    const nodes = R(122, 26, 116, 44, 'nbb', 'lg-act') + Ls(180, 44, ['Beta blocker'], 'tb', 'lg-tb', 'middle') +
      R(8, 184, 116, 44, 'na2', 'lg-act') + T(66, 202, 'Alpha-2', 'ta2', 'lg-tb', 'middle') + T(66, 217, 'agonist', 'ta2b', 'lg-tb', 'middle') +
      R(226, 184, 128, 44, 'nci', 'lg-act') + T(290, 202, 'Carbonic anhydrase', 'tci', 'lg-tb', 'middle') + T(290, 217, 'inhibitor (CAI)', 'tcib', 'lg-tb', 'middle');
    const eCombi = L([140, 70], [66, 184], 'e1', 'lg-edge') + T(94, 112, 'Combigan', 'e1a', 'lg-k', 'end') + T(94, 126, 'twice daily', 'e1b', 'lg-tb', 'end');
    const eCosopt = L([220, 70], [290, 184], 'e2', 'lg-edge') + T(268, 106, 'Cosopt,', 'e2a', 'lg-k') + T(268, 120, 'Cosopt PF', 'e2b', 'lg-k') + T(268, 134, 'twice daily', 'e2c', 'lg-tb');
    const eSimb = L([124, 206], [226, 206], 'e3', 'lg-edge') + T(175, 197, 'Simbrinza', 'e3a', 'lg-k', 'middle') + T(175, 224, 'three times daily', 'e3b', 'lg-tb', 'middle');
    const s1 = nodes + Ls(8, 256, ['Each product pairs two of these three classes in', 'one bottle (slide 69).'], 'n1', 'lg-t');
    const s2 = nodes + eCombi + Ls(8, 256, ['Combigan: alpha-2 agonist + beta blocker.', '1 drop in the affected eye(s) BID.'], 'n2', 'lg-t');
    const s3 = nodes + eCombi + eCosopt + Ls(8, 256, ['Cosopt, Cosopt PF: CAI + beta blocker.', 'PF means preservative-free.'], 'n3', 'lg-t');
    const s4 = nodes + eCombi + eCosopt + eSimb + Ls(8, 256, ['Simbrinza: CAI + alpha-2 agonist, TID.', 'Never once daily: twice or three times daily.'], 'n4', 'lg-t');
    const steps = [
      ['Combination products join two of three classes: beta blocker, alpha-2 agonist, CAI; fewer bottles help adherence (slide 69; T@89624).', s1],
      ['Combigan: alpha-2 agonist + beta blocker, 1 drop twice daily, BID (slide 69; T@85943).', s2],
      ['Cosopt and Cosopt PF (preservative-free): CAI + beta blocker, 1 drop twice daily, BID (slide 69; T@62830, T@85943).', s3],
      ['Simbrinza: CAI + alpha-2 agonist, 1 drop three times daily, TID; combinations are never once daily (slide 69; T@86115).', s4],
    ];
    return lgStepper('lg-combos', 'Combination eye products: class pairs', steps, h,
      'Drawn after Lam_Glaucoma.pdf slide 69 (generic and brand name, pharmacologic class, dosing regimen of the three combination products) and her ' +
      'handout (the same table; “multiple eye drops: use combination products”); Dr. Lam, lecture 11/19, T@62830 (PF refers to the preservative-free ' +
      'product), T@85943–@86200 (recognize the classes of each product and the dosing; never once daily), T@89624–@90138 (combination products to ' +
      'cut the number of drops). Slide 51 prints dorzolamide for the carbonic anhydrase inhibitor in Simbrinza; her practice-question email of 11/20 corrects it ' +
      'to brinzolamide (slides 42 and 69), and the figure draws the class.');
  })();

  return {
    figs: {'lg-sequence': SEQUENCE, 'lg-administration': ADMIN, 'lg-eyelid': LID, 'lg-problems': PROB, 'lg-combos': COMBO},
    names: {'lg-sequence': 'Glaucoma drugs: the sequence of classes',
      'lg-administration': 'Eye drops: order of application and waits',
      'lg-eyelid': 'Eyelid closure: steps and why',
      'lg-problems': 'Glaucoma: solving a medication-related problem',
      'lg-combos': 'Combination eye products: class pairs'},
    css: '.fig .lg-title{font-size:12.5px}' +
      '.fig .lbl.sm.capt.lg-caph{font-size:11.5px;font-weight:700}.fig .lbl.xs.capt.lg-cap{font-size:11.5px;fill:var(--text)}' +
      '.fig .lg-t{fill:var(--text);font-size:11.5px}.fig .lg-tb{fill:var(--text);font-size:11.5px;font-weight:700}' +
      '.fig .lg-ts{fill:var(--text-dim);font-size:11.5px}.fig .lg-k{fill:var(--accent);font-size:11.5px;font-weight:700}' +
      '.fig .lg-w{fill:var(--bad);font-size:11.5px;font-weight:700}.fig .lg-ok{fill:var(--ok);font-size:11.5px;font-weight:700}' +
      '.fig .lg-num{fill:var(--accent);font-size:11.5px;font-weight:700}' +
      '.fig .lg-bd{stroke:currentColor;stroke-width:1.5;fill:none;stroke-linecap:round}' +
      '.fig .lg-edge{stroke:var(--accent);stroke-width:2.2;fill:none;stroke-linecap:round}' +
      '.fig .lg-act{fill:var(--accent-bg);stroke:var(--accent);stroke-width:1.3}' +
      '.fig .lg-bub{fill:none;stroke:var(--accent);stroke-width:1.6}' +
      '.fig .lg-eye{fill:var(--surface);stroke:currentColor;stroke-width:1.5}' +
      '.fig .lg-iris{fill:var(--accent-bg);stroke:var(--accent);stroke-width:1.3}' +
      '.fig .lg-mk{fill:var(--accent)}' +
      '.fig .lg-pk{fill:var(--warn-bg);stroke:var(--warn);stroke-width:1.4}' +
      '.fig .lg-drop{fill:var(--accent);stroke:var(--accent);stroke-width:1}' +
      '.fig .lg-bot{fill:var(--surface);stroke:currentColor;stroke-width:1.4}',
  };
})();

/* One sentence per figure, written into the figure's markup as purpose_ui.js does it, so each figure
   opens with its Purpose line wherever it is drawn. */
const DIAGRAMS_LG_PURPOSE = {
  'lg-sequence': 'Builds the order in which the six glaucoma drug classes are added, with each class’s IOP reduction and dosing frequency, so you can name the next agent for a patient’s current regimen.',
  'lg-administration': 'Shows the order in which solutions, suspensions and ointments are instilled, the wait after each, and the contact-lens rule, so you can give a patient the sequence for several eye products.',
  'lg-eyelid': 'Shows the steps of eyelid closure and what the closure does, so you can counsel a patient on technique and say why it lowers systemic side effects.',
  'lg-problems': 'Shows how Dr. Lam sorts a medication-related problem and the two branches she repeats for every class, so you can name the problem in a case and give the next step.',
  'lg-combos': 'Compares the three combination eye products as pairs of classes with their dosing, so you can name the classes in each product and its frequency.'
};

if (DIAGRAMS_LG) {
  const esc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  Object.keys(DIAGRAMS_LG.figs).forEach(k => {
    const h = DIAGRAMS_LG.figs[k], m = h.match(/^<figure class="fig[^"]*">/);
    DIA[k] = (m && DIAGRAMS_LG_PURPOSE[k] && h.indexOf('dnpurpose') < 0)
      ? m[0] + '<p class="dnpurpose"><b>Purpose.</b> ' + esc(DIAGRAMS_LG_PURPOSE[k]) + '</p>' + h.slice(m[0].length) : h;
  });
  if (typeof DIA_NAMES !== 'undefined') Object.assign(DIA_NAMES, DIAGRAMS_LG.names);
  if (typeof DIAGRAMS !== 'undefined') DIAGRAMS.push(['Glaucoma drugs and counseling (Dr. Lam)', Object.keys(DIAGRAMS_LG.figs)]);
  if (typeof document !== 'undefined' && document.head && !document.getElementById('diagramslgcss')) {
    const s = document.createElement('style'); s.id = 'diagramslgcss';
    s.textContent = DIAGRAMS_LG.css + '.dnpurpose{margin:2px 0 8px;font-size:13.5px;line-height:1.45}';
    document.head.appendChild(s);
  }
}
