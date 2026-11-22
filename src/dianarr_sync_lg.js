/* dianarr_sync_lg.js: which parts of each Exam 3 figure belong to which sentence of its narration (read by dianarr_ui.js,
   "the drawing follows the sentences"). Per figure, one entry per step: null, or {n, seq, at}. Written 2026-11-22. */
var DIA_SYNC = (typeof DIA_SYNC !== 'undefined' && DIA_SYNC) || {};
/* dianarr_sync_lga.js: which parts of two of Dr. Lam's Exam 3 figures (lg-sequence, lg-administration) belong to which
   sentence of their narration. Read by dianarr_ui.js (see "the drawing follows the sentences" there). Per figure, one
   entry per step: null, or {n: number of direct children of the step's <g class="st">,
   seq: {'<sentence number>': [child indexes]}, at: {'<sentence number>': [x, y] of the number badge}}. */
DIA_SYNC['lg-sequence'] = [
  {n: 10, seq: {3: [0, 1, 2, 3, 4, 5]}, at: {3: [215, 35]}},
  {n: 15, seq: {1: [5, 6, 7, 9, 10], 2: [8]}, at: {1: [215, 73], 2: [273, 73]}},
  {n: 20, seq: {1: [10, 11, 12, 13, 14, 15]}, at: {1: [215, 111]}},
  {n: 25, seq: {1: [15, 16, 17, 18, 19, 20]}, at: {1: [215, 149]}},
  {n: 30, seq: {1: [20, 21, 22, 23, 24, 25]}, at: {1: [215, 187]}},
  {n: 39, seq: {1: [25, 26, 27, 28, 29, 30], 5: [31, 32, 33, 34]}, at: {1: [205, 225], 5: [336, 294]}}
];
DIA_SYNC['lg-administration'] = [
  {n: 12, seq: {2: [0, 1, 2, 3, 4, 5], 3: [6, 7]}, at: {2: [21, 41], 3: [271, 75]}},
  {n: 20, seq: {1: [8, 9, 10, 11, 12, 13], 2: [14, 15]}, at: {1: [21, 107], 2: [291, 134]}},
  {n: 28, seq: {1: [16, 17, 18, 19, 20, 21], 2: [22, 23]}, at: {1: [21, 173], 2: [292, 200]}},
  {n: 18, seq: {1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2: [11], 3: [12, 13]}, at: {1: [336, 41], 2: [286, 156], 3: [131, 184]}},
  {n: 22, seq: {1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 2: [15, 16, 17]}, at: {1: [336, 40], 2: [314, 200]}}
];
/* dianarr_sync_lgb.js (loaded as dianarr_sync_lg.js): which parts of three of Dr. Lam's Exam 3 figures (lg-problems,
   lg-combos, lg-eyelid) belong to which sentence of their narration. Read by dianarr_ui.js (see "the drawing follows
   the sentences" there). Per figure, one entry per step: null, or {n: number of direct children of the step's
   <g class="st">, seq: {'<sentence number>': [child indexes]}, at: {'<sentence number>': [x, y] of the number}}. */
DIA_SYNC['lg-problems'] = [
  // 1: the four boxes, one per sentence
  {n: 16, seq: {2: [0, 1, 2], 3: [3, 4, 5], 4: [6, 7, 8], 5: [9, 10, 11]},
   at: {2: [168, 37], 3: [340, 37], 4: [168, 85], 5: [340, 83]}},
  // 2: the three moves; the panel and its title belong to sentence 1 (read at once), so the numbers match the rows' own 1-3
  {n: 21, seq: {2: [14], 3: [15], 4: [16]}, at: {2: [251, 162], 3: [193, 179], 4: [328, 196]}},
  // 3: the checks; rows 4 and 5 are one sentence
  {n: 23, seq: {2: [14], 3: [15], 4: [16], 5: [17, 18]}, at: {2: [137, 158], 3: [210, 175], 4: [246, 192], 5: [250, 209]}},
  // 4: prescription, problem, action
  {n: 24, seq: {1: [12, 13], 2: [14, 15, 16], 4: [17, 18, 19]}, at: {1: [338, 138], 2: [338, 182], 4: [338, 226]}},
  // 5: the same three boxes for the second case
  {n: 24, seq: {1: [12, 13], 2: [14, 15, 16], 3: [17, 18, 19]}, at: {1: [338, 138], 2: [338, 182], 3: [338, 226]}}
];
DIA_SYNC['lg-combos'] = [
  null,   // sentence 1 names all three classes and the pairing; nothing is left for the other sentences
  {n: 17, seq: {1: [8, 9, 11], 2: [10, 12]}, at: {1: [25, 103], 2: [22, 124]}},
  {n: 21, seq: {1: [11, 12, 14, 15], 2: [13, 16]}, at: {1: [323, 101], 2: [337, 116]}},
  {n: 24, seq: {1: [15, 16, 17, 18], 3: [19]}, at: {1: [175, 174], 3: [257, 266]}}
];
DIA_SYNC['lg-eyelid'] = [
  {n: 28, seq: {3: [21], 4: [16, 17, 18, 19, 20, 22, 23]}, at: {3: [285, 266], 4: [250, 42]}},
  {n: 30, seq: {1: [10, 17, 25, 26], 2: [22, 23, 24]}, at: {1: [146, 194], 2: [85, 186]}},
  null,   // one sentence
  null,   // sentence 1 covers every drawn part (closed lid, press, 1-2 minutes, do not squeeze or rub)
  {n: 45, seq: {1: [32, 33, 34, 35, 36, 37, 38], 2: [39, 40], 3: [19, 20, 21, 28, 29, 30]},
   at: {1: [10, 210], 2: [266, 288], 3: [324, 166]}}
];
