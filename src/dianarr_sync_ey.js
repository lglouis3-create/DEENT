/* dianarr_sync_ey.js: which parts of each Exam 3 eye figure (Dr. Smith) belong to which sentence of its narration.
   Read by dianarr_ui.js (see "the drawing follows the sentences" there). Per figure, one entry per step: null, or
   {n: number of direct children of the step's <g class="st">, seq: {'<sentence number>': [child indexes]}, at: {...}}. */
var DIA_SYNC = (typeof DIA_SYNC !== 'undefined' && DIA_SYNC) || {};
DIA_SYNC['ey-aqueous'] = [
  null,
  {n: 64, seq: {2: [17, 45, 46, 47, 48], 3: [32, 33, 34, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]}}
];
