/* gen_sync.js: writes the DIA_SYNC entries of ey-aqueous, ey-targets and ey-angle into dianarr_sync_ey.js from data-k names
   (child indexes are counted from the figure markup, so `n` and the indexes cannot drift from the drawing).
   node gen_sync.js <src dir> */
const fs = require('fs'), path = require('path'), vm = require('vm');
const S = process.argv[2], rd = f => fs.readFileSync(path.join(S, f), 'utf8');
const sb = {console}; vm.createContext(sb);
vm.runInContext(['diagrams.js', 'diagram_fx.js', 'diagram_fx_fa.js', 'diagram_fx_fa2.js', 'diagram_fx_full.js', 'diagrams_ey.js', 'diagrams_ey_fa.js', 'diagrams_ey_fa2.js'].map(rd).join('\n') + '\nthis.D = DIA;', sb);
const lab = id => new RegExp('^fu-' + id + '-(t\\d|l)$');           // a label's text lines and leader
const fl = k => new RegExp('^' + k + '(~|\\^|\\^L|\\^R)?$');             // a flow: lane, marching path, heads
const chip = k => new RegExp('^c' + k + '(t\\d|bk)?$');                 // a chip: rect and lines
const card = k => new RegExp('^k' + k + '(h|t\\d)?$');
const pre = p => new RegExp('^' + p);
const zl = (...ids) => new RegExp('^fu-az-(' + ids.join('|') + ')-(t\\d|l)$');   // labels inside the angle zoom
const ZALL = /^az-/;                                                              // the zoom panel: shapes, title, ring, link, frame
const SPEC = {
  'ey-aqueous': [
    {seq: {2: [lab('cbody'), lab('proc'), lab('musc'), lab('epi'), lab('iris'), lab('lens'), lab('pupil')], 3: [ZALL, zl('tm', 'sc', 'cornea', 'sclera', 'iris')],
      4: [fl('f-in'), lab('pc'), lab('ac'), 'ptT', chip('p1'), chip('p2'), chip('p3'), pre('par')]},
      at: {2: [338, 218], 3: [338, 244], 4: [216, 414]}},
    {raw: true, seq: {2: ['fu-cbody-hl', lab('cbody'), chip('i1'), 'alw'], 3: [fl('f-in'), lab('pc'), lab('ac'), chip('i2'), chip('i3'), pre('ar')]},
      at: {2: [182, 268], 3: [168, 62]}},
    {seq: {2: [fl('z-tm'), fl('f-out'), zl('tm', 'sc', 'vein'), 'mainT', card('oc1')], 3: [fl('z-uv'), fl('f-uv'), zl('uv'), 'koc2', 'koc2h'],
      4: ['uvaH', pre('uvaB')], 5: [/^koc2t\d$/, zl('sclera')]},
      at: {2: [338, 244], 3: [70, 394], 4: [330, 120], 5: [340, 438]}},
    {seq: {1: ['zl1', 'zl2'], 2: ['pz-beta', /^zb(0|c|l)$/], 4: ['pz-a2', pre('za2')], 5: ['pz-ca', pre('zca')], 6: [pre('m3'), 'zbT', 'zm', pre('zm3'), /^zq[ht]$/, /^za1n[ht]$/]},
      at: {1: [178, 84], 2: [18, 162], 4: [344, 68], 5: [344, 150], 6: [14, 54]}, raw: true},
    null,
    {seq: {1: [fl('z-tm'), fl('f-out'), zl('tm', 'sc'), 'pl2', 'tmD'], 2: ['cm3', 'cm3t0', 'cm3n'], 3: ['cm3t1'], 4: ['cm3t2', 'cm3t3', /^fu-sph[LR]$/, lab('sph')], 5: ['crk', 'crkt0'], 6: ['crkt1', 'crkt2']},
      at: {1: [338, 244], 2: [150, 414], 3: [126, 452], 4: [202, 476], 5: [322, 439], 6: [322, 463]}},
    {seq: {1: ['az-musc-hl', zl('musc'), 'pl3', chip('pg'), 'uvD'], 2: [fl('z-uv'), fl('f-uv'), zl('uv', 'sclera')], 4: [chip('br')], 5: ['smc', 'sm1h', 'sm1'], 6: ['sm2h', 'sm2a', 'sm2b'], 7: ['sm3']},
      at: {1: [300, 390], 2: [70, 394], 4: [338, 440], 5: [340, 502], 6: [340, 523], 7: [246, 545]}},
  ],
  'ey-targets': [
    {raw: true, seq: {2: ['fu-cbody-hl', lab('cbody'), 'pl1', 'ibT'], 3: [pre('d-b'), chip('xb'), 'lxb', chip('bb')], 4: [pre('d-a'), chip('xa'), 'lxa', chip('a2')], 5: [pre('d-c'), chip('xc'), 'lxc', chip('ca')], 6: ['ibU']},
      at: {2: [86, 244], 3: [346, 140], 4: [346, 178], 5: [346, 216], 6: [244, 347]}},
    {seq: {1: [pre('d-m3i'), lab('sph'), 'z-m3', zl('tm'), 'pl2', 'trT'], 2: ['cm3', 'cm3bk', 'cm3t0', 'lm3t'], 3: ['cm3t1', 'cxm3', 'cxm3t0', 'cxm3t1'], 4: ['cxm3t2', 'cxm3t3'],
      5: ['z-rkt', 'z-rks', chip('rk'), 'lrks', 'lrkt', zl('sc'), chip('xrk')]},
      at: {1: [338, 100], 2: [330, 298], 3: [206, 414], 4: [166, 467], 5: [24, 312]}},
    {seq: {1: ['z-pg', chip('pg'), 'lpg', 'az-musc-hl', 'pl3'], 2: [fl('z-uv'), fl('f-uv'), zl('uv'), chip('xpg'), 'uvT2'], 4: ['z-uv-d', chip('br'), 'lbr'], 5: [chip('xbr')]},
      at: {1: [228, 262], 2: [210, 414], 4: [110, 268], 5: [338, 468]}},
    {seq: {1: [/^d-[bac][LR]$/, chip('xb'), chip('xa'), chip('xc'), 'lxb', 'lxa', 'lxc', pre('ab1')],
      2: [pre('d-m3i'), lab('sph'), 'z-m3', 'z-rkt', 'z-rks', 'z-pg', 'z-uv-d', chip('m3'), 'lm3t', chip('rk'), 'lrks', 'lrkt', chip('pg4'), 'lpg4', chip('br4'), 'lbr4', pre('ab2'), pre('ab3')]},
      at: {1: [246, 420], 2: [290, 448]}},
  ],
  'ey-angle': [
    {seq: {1: [fl('f-in'), lab('cbody'), lab('ac'), card('n0'), card('n1')], 2: ['ringR', ZALL, fl('z-tm'), zl('tm', 'sc', 'cornea', 'iris'), card('n2')],
      3: [fl('z-uv'), zl('uv', 'sclera')], 5: [card('n3')]},
      at: {1: [176, 58], 2: [338, 244], 3: [70, 394], 5: [340, 500]}},
    {seq: {1: [pre('blkP'), 'zblkP', zl('bad'), card('o0'), card('o1')], 2: [fl('f-in'), fl('z-tm'), fl('z-out')], 3: [card('o2')], 4: [card('o3')]},
      at: {1: [100, 274], 2: [338, 244], 3: [164, 500], 4: [340, 500]}},
    {seq: {1: [pre('blkC'), 'zblkC', zl('blk'), fl('f-stop'), fl('z-stop'), card('c0')], 2: ['kc1', 'kc1h', 'kc1t0', 'kc1t1'], 3: ['kc1t2', 'kc1t3', 'kc1t4'], 4: [card('c2')], 5: [card('c3')]},
      at: {1: [100, 270], 2: [340, 438], 3: [338, 507], 4: [340, 539], 5: [160, 513]}},
  ],
};
/* badge places below were first set for the round-2 layout; MAP carries them to the round-3 layout (eye frame scaled and moved,
   zoom and bottom band 12 lower). An entry with raw: true is already in round-3 coordinates. */
const r0 = v => Math.round(v);
const MAP = ([x, y]) => y < 228 ? [r0((x + 56.7) / 0.85 * 0.92 - 85.8), r0((y + 18) / 0.85 * 0.92 - 17.5)] : [x, y + 12];
let out = '', bad = 0;
for (const [key, steps] of Object.entries(SPEC)) {
  const html = sb.D[key];
  const gs = html.split(/<g class="st[ "]/).slice(1).map(s => s.slice(0, s.lastIndexOf('</g>')));
  if (gs.length !== steps.length) { console.log('FAIL', key, 'steps', gs.length, steps.length); bad++; }
  const rows = gs.map((g, i) => {
    const kids = [...g.matchAll(/<(path|text|rect|polygon|circle|ellipse|line)\b([^>]*)>/g)].map(m => (m[2].match(/data-k="([^"]*)"/) || [, null])[1]);
    const sp = steps[i]; if (!sp) return 'null';
    const used = {}, seq = {};
    for (const [sn, ms] of Object.entries(sp.seq)) {
      seq[sn] = [];
      ms.forEach(m => {
        const hit = kids.map((k, j) => (k != null && (typeof m === 'string' ? k === m : m.test(k))) ? j : -1).filter(j => j >= 0);
        if (!hit.length) { console.log('FAIL', key, 'step', i + 1, 'sentence', sn, 'matches nothing:', String(m)); bad++; }
        hit.forEach(j => { if (used[j] != null) { if (used[j] !== sn) { console.log('FAIL', key, 'step', i + 1, kids[j], 'in sentences', used[j], 'and', sn); bad++; } } else { used[j] = sn; seq[sn].push(j); } });
      });
      seq[sn].sort((a, b) => a - b);
    }
    const f = o => '{' + Object.entries(o).map(([k, v]) => k + ': [' + v.join(',') + ']').join(',') + '}';
    const at = {}; Object.entries(sp.at).forEach(([k, v]) => { at[k] = sp.raw ? v : MAP(v); });
    return `{n: ${kids.length},seq: ${f(seq)},at: ${f(at)}}`;
  });
  out += `DIA_SYNC['${key}'] = [\n  ${rows.join(',\n  ')}\n];\n`;
}
if (bad) process.exit(1);
const p = path.join(S, 'dianarr_sync_ey.js');
let s = fs.readFileSync(p, 'utf8');
for (const key of Object.keys(SPEC)) s = s.replace(new RegExp("DIA_SYNC\\['" + key + "'\\] = \\[[\\s\\S]*?\\n\\];\\n"), '@@' + key + '@@');
s = s.replace('@@ey-aqueous@@', out).replace('@@ey-targets@@', '').replace('@@ey-angle@@', '');
fs.writeFileSync(p, s);
console.log('wrote', p);
