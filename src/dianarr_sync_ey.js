/* dianarr_sync_ey.js: which parts of each Exam 3 figure belong to which sentence of its narration (read by dianarr_ui.js,
   "the drawing follows the sentences"). Per figure, one entry per step: null, or {n, seq, at}. Written 2026-11-22. */
var DIA_SYNC = (typeof DIA_SYNC !== 'undefined' && DIA_SYNC) || {};
/* dianarr_sync_ey.js (part a: ey-aqueous, ey-targets): which parts of each Exam 3 eye figure (Dr. Smith) belong to which
   sentence of its narration. Read by dianarr_ui.js (see "the drawing follows the sentences" there). Per figure, one entry
   per step: null, or {n: number of direct children of the step's <g class="st">, seq: {'<sentence number>': [child
   indexes]}, at: {'<sentence number>': [x, y] of the number badge}}. */
DIA_SYNC['ey-aqueous'] = [
  /* 1: labels by sentence (the eye itself stays whole): 2 ciliary muscle, epithelium, processes, iris, lens; 3 meshwork and canal; 4 the flow */
  {n: 80, seq: {2: [28, 29, 30, 31, 32, 33, 34, 35, 47, 48, 49], 3: [36, 37, 38, 39, 40, 41],
                4: [42, 43, 44, 45, 46, 50, 51, 52, 53, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75]},
   at: {2: [252, 296], 3: [74, 82], 4: [312, 139]}},
  /* 2: 2 the ciliary body makes it; 3 posterior chamber, pupil, anterior chamber and the flow line */
  {n: 64, seq: {2: [17, 22, 23, 43, 44, 45, 46, 47, 48],
                3: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]},
   at: {2: [30, 276], 3: [282, 154]}},
  /* 3: 2 trabecular (main) route; 3 uveoscleral route; 5 where the uveoscleral liquid goes */
  {n: 66, seq: {2: [17, 20, 21, 22, 23, 24, 25, 26, 27, 28, 32, 33, 34, 46, 47, 51, 52, 53, 54, 55, 56],
                3: [35, 36, 37, 48, 49, 50, 57, 58], 5: [59, 60, 61]},
   at: {2: [88, 236], 3: [268, 314], 5: [342, 350]}},
  /* 4 (the zoom circle and the process stay lit: every sentence is about them): 1 the process's own labels; 2 beta receptor; 4 alpha-2 receptor; 5 carbonic anhydrase; 6 M3 (and the "also marked" cards) */
  /* the alpha-1 receptor (on slide 16; no sentence names it) comes with the "also marked on slide 16" group at sentence 6
     (Louis, 2026-11-22: it sat beside badge 1 and read as part of the first sentence) */
  {n: 70, seq: {1: [37, 38, 39, 40, 41], 2: [28, 32, 33, 34],
                4: [29, 42, 43, 44], 5: [30, 45, 46, 47, 48], 6: [17, 18, 19, 20, 31, 35, 36, 57, 58, 59, 60, 61, 62, 63, 64, 65]},
   at: {1: [86, 322], 2: [12, 193], 4: [345, 118], 5: [340, 184], 6: [12, 92]}},
  /* 5: one drawing (three chips on the ciliary body), all of it in sentence 1; sentences 2-4 draw nothing */
  null,
  /* 6: 1 the meshwork route lit; 2 M3 agonists; 3 echothiophate; 4 contraction; 5 netarsudil; 6 less stiff */
  {n: 56, seq: {1: [17, 20, 21, 22, 23, 24, 25, 30, 43], 2: [44, 45], 3: [46], 4: [47], 5: [48, 49], 6: [50, 51]},
   at: {1: [74, 82], 2: [100, 350], 3: [116, 364], 4: [152, 377], 5: [264, 350], 6: [264, 371]}},
  /* 7: 1 PG agonists on the ciliary muscle; 2 uveoscleral route; 4 brimonidine */
  {n: 51, seq: {1: [18, 19, 39, 40, 41, 42, 43], 2: [25, 36, 37, 38], 4: [44, 45, 46]},
   at: {1: [90, 199], 2: [268, 314], 4: [342, 350]}}
];
DIA_SYNC['ey-targets'] = [
  /* 1: 2 ciliary body; 3 beta-blockers; 4 alpha-2 agonists; 5 CA inhibitors; 6 each lowers production */
  {n: 54, seq: {2: [17, 20, 21, 35, 36], 3: [23, 26, 27, 28, 38, 39, 40, 41], 4: [24, 29, 30, 31, 42, 43, 44, 45],
                5: [25, 32, 33, 34, 46, 47, 48, 49], 6: [37]},
   at: {2: [30, 276], 3: [52, 318], 4: [240, 298], 5: [340, 298], 6: [296, 342]}},
  /* 2: 1 the red M3 marks; 2 M3 agonists; 3 echothiophate; 4 contraction raises outflow; 5 netarsudil */
  {n: 56, seq: {1: [18, 25, 26, 27, 38, 39], 2: [31, 32, 36, 37, 44, 45], 3: [33], 4: [42, 43, 46, 47],
                5: [17, 22, 23, 24, 28, 29, 30, 34, 35, 40, 41, 48, 49, 50, 51]},
   at: {1: [336, 166], 2: [330, 128], 3: [310, 142], 4: [188, 342], 5: [332, 91]}},
  /* 3: 1 the blue mark and its chip; 2 uveoscleral outflow rises; 4 the amber brimonidine mark; 5 what it adds */
  {n: 52, seq: {1: [24, 26, 27, 28, 29, 30], 2: [21, 22, 23, 36, 37, 38, 39, 40, 41, 42, 43],
                4: [25, 31, 32, 33, 34, 35], 5: [44, 45, 46, 47]},
   at: {1: [108, 187], 2: [258, 320], 4: [104, 290], 5: [244, 390]}},
  /* 4: 1 the inflow classes; 2 the outflow classes by both routes */
  {n: 76, seq: {1: [26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 64, 65, 66],
                2: [20, 21, 22, 23, 24, 25, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 67, 68, 69, 70, 71]},
   at: {1: [52, 318], 2: [266, 372]}}
];
/* dianarr_sync_eyb.js: which parts of each Exam 3 eye figure (Dr. Smith: ey-angle, ey-cai, ey-allergy, ey-dryeye) belong
   to which sentence of its narration. Read by dianarr_ui.js (see "the drawing follows the sentences" there). Per figure,
   one entry per step: null, or {n: number of direct children of the step's <g class="st">,
   seq: {'<sentence number>': [child indexes]}, at: {'<sentence number>': [x, y] of the number badge}}. */
DIA_SYNC['ey-angle'] = [
  {n: 75, seq: {1: [20, 21, 22, 23, 42, 43, 48, 49, 50, 56, 57, 58, 59, 60, 61, 62],
                2: [14, 15, 16, 17, 18, 19, 24, 25, 26, 27, 28, 29, 34, 35, 36, 37, 38, 39, 40, 41, 44, 45, 51, 52, 63, 64, 65, 66],
                3: [30, 31, 32, 33, 53, 54],
                5: [67, 68, 69, 70]},
   at: {1: [346, 166], 2: [12, 70], 3: [114, 254], 5: [346, 352]}},
  {n: 59, seq: {1: [16, 18, 32, 33, 34, 35, 36, 37, 38, 40, 41, 42, 43, 44, 45, 46],
                2: [19, 20, 21, 24, 25],
                3: [47, 48, 49, 50],
                4: [51, 52, 53, 54]},
   at: {1: [12, 50], 2: [132, 110], 3: [168, 352], 4: [346, 352]}},
  {n: 61, seq: {1: [13, 18, 21, 22, 23, 32, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44],
                2: [45, 46, 47, 48],
                4: [49, 50, 51, 52],
                5: [53, 54, 55, 56]},
   at: {1: [306, 44], 2: [346, 300], 4: [168, 352], 5: [346, 352]}}
];
DIA_SYNC['ey-cai'] = [
  {n: 59, seq: {1: [14, 18, 19, 20, 21, 25, 26, 27, 28, 29, 30, 31, 32, 33],
                2: [22, 23, 24, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
                3: [48, 49, 50, 51, 52, 53, 54]},
   at: {1: [16, 207], 2: [256, 207], 3: [344, 282]}},
  {n: 64, seq: {1: [45, 46],
                2: [47],
                3: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]},
   at: {1: [18, 236], 2: [342, 292], 3: [240, 54]}},
  {n: 55, seq: {2: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 48],
                3: [21, 22, 23, 24, 25, 26, 27, 49],
                4: [28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 50]},
   at: {2: [74, 180], 3: [128, 182], 4: [122, 72]}},
  {n: 53, seq: {1: [44, 45, 46], 2: [47], 3: [48]},
   at: {1: [298, 272], 2: [282, 288], 3: [205, 300]}},
  {n: 53, seq: {1: [46], 3: [47], 4: [48]},
   at: {1: [255, 272], 3: [144, 286], 4: [276, 300]}}
];
DIA_SYNC['ey-allergy'] = [
  {n: 31, seq: {1: [0, 1, 2, 3, 4, 5, 10, 11, 20, 21, 22, 23, 24, 25],
                2: [6, 7, 8, 9],
                3: [12, 13, 14, 15, 16, 17, 18, 19]},
   at: {1: [120, 162], 2: [112, 36], 3: [256, 45]}},
  {n: 36, seq: {1: [20, 21, 22, 23, 24, 25, 26, 27, 28, 31, 32],
                2: [29, 30]},
   at: {1: [156, 72], 2: [138, 190]}},
  {n: 44, seq: {1: [28, 29, 30, 31, 32, 34, 35],
                2: [33, 36, 37],
                3: [38],
                6: [39, 40]},
   at: {1: [145, 160], 2: [112, 82], 3: [234, 288], 6: [234, 306]}},
  {n: 45, seq: {1: [26, 27, 34, 35],
                3: [36, 37, 38, 39],
                6: [40, 41]},
   at: {1: [140, 202], 3: [274, 249], 6: [221, 292]}}
];
DIA_SYNC['ey-dryeye'] = [
  {n: 48, seq: {1: [16, 17, 18, 20, 21],
                2: [19, 22, 23, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43],
                3: [24, 25],
                4: [26, 27, 28, 29, 30, 31, 32, 33]},
   at: {1: [152, 22], 2: [296, 272], 3: [292, 56], 4: [351, 84]}},
  {n: 43, seq: {1: [19, 20, 21, 22, 23],
                2: [24, 25, 26, 27, 31, 32],
                3: [28, 29, 30, 33, 34, 35, 36, 37, 38]},
   at: {1: [346, 62], 2: [262, 134], 3: [346, 262]}},
  {n: 56, seq: {1: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 41, 42, 43, 44, 45],
                2: [33, 34, 35, 36, 37, 38, 39, 40],
                3: [46],
                6: [47, 48, 49, 50, 51]},
   at: {1: [248, 64], 2: [248, 158], 3: [121, 302], 6: [342, 264]}},
  {n: 46, seq: {1: [16, 37, 38, 39, 40, 41],
                2: [19, 20, 21, 24, 25, 26, 27, 28],
                3: [22, 23, 29, 30, 31, 32, 33, 34, 35, 36]},
   at: {1: [344, 264], 2: [246, 36], 3: [14, 236]}}
];
