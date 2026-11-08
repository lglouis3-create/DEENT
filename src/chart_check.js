/* ==========================================================================
   CHART CELLS CHECK (chart_boxes.js; DEENT course-level, run standalone)
   ==========================================================================
   The Drug list's Chart view highlights every cell of a drug's chart line:
   its own cells in its row and each merged cell that covers its row
   (render_chart.py writes them into chart_boxes.js as `cells`). This check
   reads chart_boxes.js and the cards (druglist_data.js) in node and checks:

   - every line has exactly one cell per column of its page (Drug, Rx/OTC,
     Pharmacological Class, Chemical Class, Indication; p. 6 adds Potency
     Class), in column order, side by side;
   - each of those cells covers the line's row band (top and bottom) and lies
     inside the page image; `merged` is set exactly when a cell is taller
     than the row; the Drug cell holds the line's drug-cell text;
   - parts across the p. 4/5 page break (`cont`) appear only there, only in
     the Chemical Class and Indication columns, are merged, on the other of
     the two pages, and touch that page's table edge (p. 4's bottom, p. 5's
     top); every p. 4 line whose cell in those columns is cut by the break
     has its p. 5 part and every p. 5 line in the empty top cells its p. 4 part;
   - each cell's text agrees with the card wherever the card records the
     chart's value: Rx/OTC (rx, or the steroid line's rx), Pharmacological
     Class (chartClass), Chemical Class (chartChem, the sunscreens),
     Indication (chartUse, left null where p. 5's columns are misaligned),
     Potency Class (the steroid line's potency class). The chart's own errors
     stay as printed (p. 5), so the check compares only where the card keeps
     the chart's value.

     node chart_check.js
   ========================================================================== */
const fs = require('fs'), vm = require('vm'), path = require('path');
const {check, finish} = require('./check_lib');
const NAME = 'chart_check.js';
const here = f => fs.readFileSync(path.join(__dirname, f), 'utf8');
const sb = {console, window: {}};
vm.createContext(sb);
vm.runInContext(here('chart_boxes.js') + '\n' + here('druglist_data.js') + '\nthis.X = {CB: CHART_BOXES, DL: DRUGLIST};', sb);
const {CB, DL} = sb.X;
const rows = DL.CHART_ROWS;
const COLS = ['Drug', 'Rx/OTC', 'Pharmacological Class', 'Chemical Class', 'Indication'];
const COLS6 = ['Drug', 'Rx/OTC', 'Potency Class', 'Pharmacological Class', 'Chemical Class', 'Indication'];
const flat = Object.entries(CB.drugs).flatMap(([id, bs]) => bs.map(b => Object.assign({id}, b)))
  .concat(CB.other.map(b => Object.assign({id: null}, b))).sort((a, b) => a.line - b.line);
const E = 0.002, u = a => [...new Set(a)].slice(0, 12).join('; ');
const tag = b => `p. ${b.page} row ${b.row} ${rows[b.line][1]}`;

console.log('=== Cells per line ===');
check(flat.length === rows.length, `every chart line has its box (${flat.length} of ${rows.length})`);
const noCells = flat.filter(b => !Array.isArray(b.cells) || !b.cells.length);
check(!noCells.length, 'every box lists its cells', u(noCells.map(tag)));
const colBad = [], coverBad = [], mergeBad = [], sideBad = [], drugBad = [];
for (const b of flat) {
  const own = (b.cells || []).filter(c => !c.cont), want = b.page === 6 ? COLS6 : COLS;
  if (own.map(c => c.col).join('|') !== want.join('|') || own.some(c => c.page !== b.page)) colBad.push(tag(b));
  for (const c of own) {
    if (!(c.y0 <= b.y0 + E && c.y1 >= b.y1 - E && c.x0 >= 0 && c.y0 >= 0 && c.x1 <= 1 && c.y1 <= 1 && c.x1 > c.x0)) coverBad.push(`${tag(b)} ${c.col}`);
    const taller = (c.y1 - c.y0) > (b.y1 - b.y0) + E;
    const contToo = (b.cells || []).some(x => x.cont && x.col === c.col);
    if (c.merged !== (taller || contToo)) mergeBad.push(`${tag(b)} ${c.col}`);
  }
  for (let i = 1; i < own.length; i++) if (Math.abs(own[i].x0 - own[i - 1].x1) > E) sideBad.push(`${tag(b)} ${own[i].col}`);
  if (own[0] && (Math.abs(own[0].x0 - b.x0) > E || Math.abs(own[0].x1 - b.x1) < E || !own[0].text.replace(/\s+/g, ' ').includes(b.text.split(' ')[0]))) drugBad.push(tag(b));
  if (own.length && Math.abs(own[own.length - 1].x1 - b.x1) > E) sideBad.push(`${tag(b)} right edge`);
}
check(!colBad.length, 'each line has one cell per column of its page, in order (p. 6 with its Potency Class)', u(colBad));
check(!coverBad.length, 'each cell covers its line\'s row band and lies inside the page image', u(coverBad));
check(!sideBad.length, 'the cells sit side by side across the table, row band edge to edge', u(sideBad));
check(!mergeBad.length, '`merged` is set exactly on cells taller than the row (or cut by the page break)', u(mergeBad));
check(!drugBad.length, 'each Drug cell is the left cell of the row band and holds its drug\'s name', u(drugBad));
const nMerged = flat.filter(b => b.cells.some(c => c.merged && c.col !== 'Drug')).length;
console.log(`  ${flat.length} lines; ${nMerged} with at least one merged cell; ${flat.reduce((n, b) => n + b.cells.length, 0)} cells in all`);

console.log('=== The p. 4/5 page break ===');
const conts = flat.flatMap(b => b.cells.filter(c => c.cont).map(c => [b, c]));
const contBad = conts.filter(([b, c]) => !({4: 5, 5: 4}[b.page] === c.page && ['Chemical Class', 'Indication'].includes(c.col) && c.merged &&
  (c.page === 4 ? c.y1 >= Math.max(...flat.filter(x => x.page === 4).map(x => x.y1)) - E : c.y0 <= Math.min(...flat.filter(x => x.page === 5).map(x => x.y0)) + E)));
check(conts.length && !contBad.length, `every part across the break (${conts.length}) is a merged Chemical Class or Indication cell on the other page, at its table edge`, u(contBad.map(([b, c]) => `${tag(b)} ${c.col}`)));
const p4bottom = Math.max(...flat.filter(x => x.page === 4).map(x => x.y1)), p5top = Math.min(...flat.filter(x => x.page === 5).map(x => x.y0));
const needP5 = flat.filter(b => b.page === 4).flatMap(b => b.cells.filter(c => !c.cont && ['Chemical Class', 'Indication'].includes(c.col) && c.y1 >= p4bottom - E).map(c => [b, c]));
const missP5 = needP5.filter(([b, c]) => !b.cells.some(x => x.cont && x.col === c.col && x.page === 5));
check(needP5.length && !missP5.length, `p. 4 lines whose merged cell runs to the page's foot have its p. 5 part (${needP5.length})`, u(missP5.map(([b, c]) => `${tag(b)} ${c.col}`)));
const needP4 = flat.filter(b => b.page === 5).flatMap(b => b.cells.filter(c => !c.cont && c.text === '' && c.y0 <= p5top + E && c.col !== 'Drug').map(c => [b, c]));
const missP4 = needP4.filter(([b, c]) => !b.cells.some(x => x.cont && x.col === c.col && x.page === 4));
check(needP4.length && !missP4.length, `p. 5 lines in the empty cells at the page's top have the p. 4 part (${needP4.length})`, u(missP4.map(([b, c]) => `${tag(b)} ${c.col}`)));
const gus = (CB.drugs.guselkumab || [])[0];
check(gus && gus.cells.some(c => c.cont && c.page === 4 && c.col === 'Indication' && c.text === 'Psoriasis') &&
  gus.cells.some(c => c.cont && c.page === 4 && c.col === 'Chemical Class' && c.text === 'Peptides (Proteins)'),
  'guselkumab (p. 5): its Chemical Class and Indication are the p. 4 cells "Peptides (Proteins)" and "Psoriasis"');

console.log('=== Cell text against the cards ===');
const STOP = new Set(['and', 'of', 'the', 'to', 'or', 'a', 'class', 'potency', 'topical', 'labeled', 'unlabeled']);
const toks = t => DL.norm(t).split(' ').filter(w => w.length > 1 && !STOP.has(w)).map(w => w.replace(/(es|s)$/, ''));
// the cell's words are (mostly) in the card's value, or the card's in the cell's
const agree = (cell, val) => { const a = toks(cell), b = new Set(toks(val)), c = toks(val), d = new Set(a);
  return a.length && c.length && (a.filter(w => b.has(w)).length / a.length >= 0.5 || c.filter(w => d.has(w)).length / c.length >= 0.5); };
const cards = Object.fromEntries(DL.D.map(d => [d.id, d]));
// a steroid listed twice: the line whose brand the row prints (the longest match: "Diprolene Cream AF" over "Diprolene")
const lineOf = (d, b) => { let best = null, n = -1;
  for (const l of d.lines || []) for (const x of l.brands) if (b.text.includes(x) && x.length > n) { best = l; n = x.length; }
  return best || (d.lines || [])[0]; };
const textBad = [], compared = {}, blank = [];
const cmp = (b, col, val, ok) => {
  const own = b.cells.find(x => x.col === col && !x.cont), part = b.cells.find(x => x.col === col && x.cont);
  // an empty cell cut by the page break reads as its printed part on the other page
  const c = own && own.text === '' && part ? part : own;
  if (c && c.text === '') { blank.push(`${tag(b)} ${col} (card: "${val}")`); return; }
  compared[col] = (compared[col] || 0) + 1;
  if (!c || !(ok || agree)(c.text, val)) textBad.push(`${tag(b)} ${col}: chart "${c && c.text}" vs card "${val}"`);
};
const rxN = t => DL.norm(t).replace(/ /g, '/');
for (const b of flat.filter(x => x.id)) {
  const d = cards[b.id], ln = d && lineOf(d, b);
  if (!d) { textBad.push(`${tag(b)}: no card ${b.id}`); continue; }
  const rx = ln ? ln.rx : d.rx;
  cmp(b, 'Rx/OTC', rx, (c, v) => rxN(c) === rxN(v));
  if (d.chartClass) cmp(b, 'Pharmacological Class', d.chartClass.split(';')[0]);
  // chartChem is the sunscreen family of the card's own page (zinc oxide: p. 1, not its p. 5 line in the shifted column)
  if (d.chartChem && b.page === d.page) cmp(b, 'Chemical Class', d.chartChem);
  if (d.chartUse) cmp(b, 'Indication', d.chartUse);
  if (ln && ln.pot) cmp(b, 'Potency Class', 'class ' + ln.pot, (c, v) => new RegExp('^CLASS ' + ln.pot + '\\b').test(c));
}
// cells the chart leaves blank (p. 3: no class printed beside the tetracyclines and the
// unbracketed antibiotics) cannot be compared; the cards take those values from the slides
console.log(`  ${blank.length} blank cells not compared:\n    ` + blank.join('\n    '));
check(blank.every(t => /^p\. 3 .* Pharmacological Class/.test(t)), 'the only blank cells where a card keeps a value are p. 3\'s unlabelled antibiotic class cells');
check(!textBad.length, `each cell's text agrees with the card's chart value (${Object.entries(compared).map(([k, v]) => k + ' ' + v).join(', ')})`, u(textBad));
const octi = (CB.drugs.octinoxate || [])[0];
check(octi && octi.cells.some(c => c.col === 'Pharmacological Class' && c.merged && c.text === 'Chemical Sunscreens') &&
  octi.cells.some(c => c.col === 'Indication' && c.merged && c.text === 'Sun protection'),
  'octyl methoxycinnamate (Louis\'s example): its merged "Chemical Sunscreens" and "Sun protection" cells are among its cells');
const ery = (CB.drugs.erythromycin || [])[0], clin = (CB.drugs.clindamycin || [])[0];
check(ery && clin && [ery, clin].every(b => b.cells.some(c => c.col === 'Pharmacological Class' && c.text === 'Antibiotics' && c.merged)),
  'p. 3: the Antibiotics cell (border drawn in the cell colour) covers clindamycin, erythromycin and azithromycin');
finish(NAME);
