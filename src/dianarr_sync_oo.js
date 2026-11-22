/* dianarr_sync_oo.js: which parts of each Exam 3 figure belong to which sentence of its narration (read by dianarr_ui.js,
   "the drawing follows the sentences"). Per figure, one entry per step: null, or {n, seq, at}. Written 2026-11-22. */
var DIA_SYNC = (typeof DIA_SYNC !== 'undefined' && DIA_SYNC) || {};
/* dianarr_sync_ooa.js: which parts of three Exam 3 figures of Dr. Sikazwe (oo-cerumen, oo-fluoride, oo-eye-entry)
   belong to which sentence of their narration. Read by dianarr_ui.js (see "the drawing follows the sentences" there).
   Per figure, one entry per step: null, or {n: number of direct children of the step's <g class="st">,
   seq: {'<sentence number>': [child indexes]}, at: {'<sentence number>': [x, y] of the number badge}}. */
DIA_SYNC['oo-cerumen'] = [
  // 1: s3 the carbamide peroxide box; s4 "urea stabilizes the H2O2"
  {n: 29, seq: {3: [19, 20, 21, 22], 4: [23, 24]}, at: {3: [12, 224], 4: [334, 240]}},
  // 2: s1 the drop into the canal and the dissociation scheme; s2 "the active ingredient"
  {n: 38, seq: {1: [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], 2: [33]}, at: {1: [12, 224], 2: [222, 274]}},
  // 3: one sentence describes the whole reaction; sentence 2 adds nothing drawn
  null,
  // 4: one sentence describes bubbles and broken wax together; sentences 2 and 3 add nothing drawn
  null
];
DIA_SYNC['oo-fluoride'] = [
  // 1: s2 the enamel close-up (hydroxyapatite, OH groups, formula); s3 "vulnerable to acid erosion"
  {n: 49, seq: {2: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                    31, 32, 33, 34, 35, 36, 37, 42, 43, 44], 3: [45]}, at: {2: [332, 50], 3: [165, 270]}},
  // 2: s1 plaque, the acids arrow and the bacteria box; s2 "acid drinks"; s3 pH falls, erosion, cavities
  {n: 60, seq: {1: [3, 38, 41, 42, 44, 45, 46, 47, 48, 49, 50, 51], 2: [52], 3: [53, 54]},
   at: {1: [60, 38], 2: [90, 268], 3: [260, 226]}},
  // 3: s1 the fluoride arrow and its sources; s2 F in place of OH, fluorapatite and its formula; s3 "more resistant"
  {n: 57, seq: {1: [41, 42, 43, 44, 45, 46, 47, 48],
                2: [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 40, 49, 50, 51],
                3: [52]}, at: {1: [36, 64], 2: [332, 50], 3: [348, 278]}},
  // 4: s2 calcium and phosphate onto the enamel (mineralization); s3 the fluorosis line
  {n: 53, seq: {2: [37, 41, 42, 43, 44, 45, 46, 47], 3: [48]}, at: {2: [18, 24], 3: [244, 264]}}
];
DIA_SYNC['oo-eye-entry'] = [
  // 1: s2 the drop in the tear film, under 10% into the eye; s3 over 50% systemic
  {n: 32, seq: {2: [14, 15, 16, 17, 18, 19, 20, 21], 3: [22, 23, 24, 25, 26, 27]}, at: {2: [220, 70], 3: [346, 138]}},
  // 2: s1 the cornea close-up (lipid, water, lipid); s2 the path through it; s3 "less drug entry"; s4 "small, lipophilic drugs"
  {n: 39, seq: {1: [11, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 32], 2: [18, 19, 20, 27], 3: [33], 4: [34]},
   at: {1: [312, 104], 2: [56, 226], 3: [308, 207], 4: [343, 220]}},
  // 3: s1 the conjunctival route and its close-up; s2 "more drug entry"; s3 transporters and enzymes; s4 "large, hydrophilic drugs"
  {n: 46, seq: {1: [17, 18, 19, 20, 21, 22, 23, 24, 25, 26], 2: [40], 3: [27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39], 4: [41]},
   at: {1: [326, 100], 2: [206, 231], 3: [313, 192], 4: [234, 262]}},
  // 4: s1 the corneal arrow rejoining and the two route summaries; s2 the prodrug lines
  {n: 38, seq: {1: [17, 18, 19, 26, 27, 28, 29, 30, 31], 2: [32, 33]}, at: {1: [204, 110], 2: [348, 225]}}
];
/* dianarr_sync_oob.js: which parts of three Exam 3 figures (Dr. Sikazwe: oo-imidazoline, oo-ache, oo-pg-prodrug) belong
   to which sentence of their narration. Read by dianarr_ui.js (see "the drawing follows the sentences" there). Per
   figure, one entry per step: null, or {n: number of direct children of the step's <g class="st">,
   seq: {'<sentence number>': [child indexes]}, at: {'<sentence number>': [x, y] of the number badge}}. */
DIA_SYNC['oo-imidazoline'] = [
  // 1: the core (aryl, linker X, imidazoline, their labels and the line of text) is drawn when sentence 3 describes it
  {n: 30, seq: {3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]},
   at: {3: [50, 80]}},
  // 2: CH2 line, NH line, the note on the slide's NH2
  {n: 32, seq: {2: [25], 3: [26], 4: [27]}, at: {2: [240, 186], 3: [238, 206], 4: [150, 224]}},
  // 3: the two Cl and the ClogP scale with clonidine's mark; then the brain/CNS lines; then "unwanted in glaucoma"
  {n: 42, seq: {1: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], 2: [35, 36], 3: [37]},
   at: {1: [316, 73], 2: [230, 186], 3: [220, 214]}},
  // 4: the added H2N; its mark on the scale and the two lines on lipophilicity; the half-life
  {n: 46, seq: {1: [26, 27], 2: [37, 38, 39, 40], 3: [41]}, at: {1: [40, 80], 2: [350, 144], 3: [122, 214]}},
  // 5: the fused pyrazine ring and brimonidine's mark; the potency lines; the half-life
  {n: 54, seq: {1: [24, 25, 26, 27, 28, 29, 30, 31, 32, 44, 45], 2: [46, 47, 48], 3: [49]},
   at: {1: [20, 48], 2: [254, 200], 3: [101, 228]}}
];
DIA_SYNC['oo-ache'] = [
  // 1: the whole reaction (ACh, AChE arrow, products, "inactivated") belongs to sentence 2
  {n: 13, seq: {2: [0, 1, 2, 3, 4, 5, 6, 7, 8]}, at: {2: [10, 26]}},
  // 2: one sentence only
  null,
  // 3: the ranked rows with sentence 1; the grading words (most, intermediate, least) with sentence 3
  {n: 31, seq: {1: [12, 13, 14, 15, 17, 18, 19, 20, 22, 23, 24, 25], 3: [16, 21, 26]}, at: {1: [36, 124], 3: [262, 205]}},
  // 4: the heading; the phosphorylated enzyme; water, aging and the aged enzyme
  {n: 34, seq: {1: [17], 2: [18, 19, 20, 21], 3: [22, 23, 24, 25, 26, 27, 28, 29]},
   at: {1: [282, 186], 2: [14, 262], 3: [350, 198]}}
];
DIA_SYNC['oo-pg-prodrug'] = [
  // 1: the FP-receptor lines; then the structure with C-1, C-15 and the "Key places" line
  {n: 38, seq: {2: [31, 32], 3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
                                 26, 27, 28, 29, 30, 33]},
   at: {2: [276, 168], 3: [40, 54]}},
  // 2: the isopropyl ester at C-1 and its line; the other esters
  {n: 37, seq: {1: [29, 30, 31], 2: [32, 33]}, at: {1: [246, 54], 2: [224, 197]}},
  // 3: the acid at C-1 and the hydrolysis line; the conjunctiva's esterase
  {n: 38, seq: {1: [29, 30, 31], 2: [32, 33]}, at: {1: [233, 54], 2: [200, 183]}},
  // 4: acid/amide at C-1 and its lines; C-15; the other ester prodrugs
  {n: 41, seq: {1: [29, 30, 31, 32], 2: [33, 34], 3: [35, 36]}, at: {1: [286, 54], 2: [156, 211], 3: [274, 239]}}
];
