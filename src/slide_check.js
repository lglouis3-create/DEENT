/* slide_check.js: the slide links, checked on the source files (no browser).
 *
 *     node slide_check.js            the gate: PASS / FAIL lines, then the counts and reports
 *     node slide_check.js --all      also every link and every citation left as text
 *     node slide_check.js --model F  also write to F what it expects the page to link in the places
 *                                    slide_test.js compares with the built page
 *     node slide_check.js --json F   also write to F every link and every citation left as text,
 *                                    with the text around it (to compare two runs)
 *     CLEAN_DIR=/path                where the clean decks are, for the fact-on-slide sample
 *                                    (default: src/decks/clean/, else the main checkout's)
 *
 * It runs slide_ui.js's own parser (the file is loaded as the page loads it; with no
 * DOM it hands back the parser alone) over every text that cites a slide: each
 * question's source line and explanations (the line under each pair of a matching
 * question and the notes of its structure strip among them), reference.js, tell.js,
 * guide.js, the Diseases tab (the cards' steps and the three other views from the
 * HTML dz_ui.js itself writes; the drug panels, terms, practice patients and numbers
 * from the data), the Drug list, the Atlas, the walkthrough texts and the figure
 * captions, each with what its place declares, as slide_ui.js does on the page. A
 * text of the reading files is joined from its text runs as the page joins its text
 * nodes: a run that starts after a tag starts a word, and a citation with a tag
 * inside it is not linked (slide_test.js then reads the page itself and compares).
 *
 * Fails when: a table of slide_data.js names a deck that does not exist; a section of
 * the three reading files has no row in SLIDES.sections; a page of a deck has no
 * image in deck/; a link's target image is missing; a cited number falls outside
 * its deck; a question's source line names no deck the parser reads; a transcript
 * reference is linked; one of the parser's rules no longer reads its example lines
 * (a citation before a colon, a clock time, a chart page named earlier in the
 * sentence, "SE 2 applications", "PP 2B", a professor in brackets after a number,
 * a word start at an element boundary); the assigned-pages note is not in printed
 * numbers; a guide's objective bar has no link in its slide list or a citation is
 * split by a tag; a structure-strip note links outside Dr. Sikazwe's deck; a pair
 * line of a matching question that cites a slide has no link.
 * Reports (not gates): links per deck and per form, the citations left as text and
 * why, and the fact-on-slide sample: for question citations, the distinctive words
 * of the right answer and the explanation looked for in the text of the linked
 * clean pages (pdftotext); the mismatches are listed for a person to look at.
 */
const fs = require('fs'), path = require('path'), vm = require('vm'), child = require('child_process');
const SRC = __dirname, ROOT = path.join(SRC, '..');
const ALL = process.argv.includes('--all');
const argOf = k => { const i = process.argv.indexOf(k); return i >= 0 ? process.argv[i + 1] || '' : ''; };
const JSON_OUT = argOf('--json'), MODEL_OUT = argOf('--model');
let fails = 0, passes = 0;
const check = (ok, what, detail) => { if (ok) passes++; else fails++; console.log((ok ? '  PASS  ' : '  FAIL  ') + what + (!ok && detail ? '\n          ' + String(detail).slice(0, 900) : '')); };

/* ---- the course data, as the page loads it -------------------------------- */
const sb = {console}; vm.createContext(sb);
const run = f => vm.runInContext(fs.readFileSync(path.join(SRC, f), 'utf8'), sb, {filename: f});
run('course.js');
vm.runInContext('const IMAGES = {};', sb);
const files = vm.runInContext('COURSE.files', sb);
for (const f of files.filter(f => !/_ui\.js$/.test(f))) run(f);
for (const f of ['glossary.js', 'links.js', 'reference.js', 'tell.js', 'guide.js']) run(f);
run('slide_ui.js');
const g = n => vm.runInContext(`typeof ${n} === 'undefined' ? undefined : ${n}`, sb);
const S = g('SLIDES'), UI = g('SLIDE_UI'), P = UI && UI.parser;
const D = S.decks, ids = Object.keys(D);
const QUESTIONS = g('QUESTIONS'), DZ = g('DZ'), DL = g('DRUGLIST'), ATLAS = g('ATLAS'), WALK = g('WALK_SECTIONS') || [], DIA = g('DIA') || {};

console.log('\n=== slide_data.js and the files it points to ===');
check(!!P && typeof P.scan === 'function' && Object.keys(UI).length === 1, 'slide_ui.js gives only its parser where there is no DOM');
check(files.indexOf('slide_data.js') >= 0 && files.indexOf('slide_ui.js') === files.indexOf('slide_data.js') + 1 && files.indexOf('slide_data.js') > files.indexOf('dz_ui.js'),
  'course.js `files` lists slide_data.js then slide_ui.js, after dz_ui.js');
const tables = JSON.parse(fs.readFileSync(path.join(SRC, 'slide_tables.json'), 'utf8'));
check(JSON.stringify(tables.names) === JSON.stringify(S.names) && JSON.stringify(tables.sections) === JSON.stringify(S.sections) && JSON.stringify(tables.notes || []) === JSON.stringify(S.notes || []),
  'slide_data.js carries slide_tables.json as it stands (python3 slide_map.py --tables after an edit)');
const lectures = vm.runInContext('COURSE.lectures', sb);
const noDeck = lectures.filter(l => !ids.some(id => D[id].files.includes(l.deck)));
check(!noDeck.length && ids.length === lectures.length, `every deck of course.js \`lectures\` (${lectures.length}) is a deck of slide_data.js (${ids.length})`, noDeck.map(l => l.deck).join(', '));
const profBad = lectures.filter(l => { const id = ids.find(i => D[i].files.includes(l.deck)); return id && (D[id].prof !== l.prof || D[id].exam !== l.exam); });
check(!profBad.length, 'each deck carries the professor and exam course.js gives it', profBad.map(l => l.deck).join(', '));
const badName = (S.names || []).filter(r => r[1] !== 'sun?' && !D[r[1]]);
const badSec = (S.sections || []).filter(r => (Array.isArray(r[1]) ? r[1] : r[1] === null ? [] : [r[1]]).some(d => !D[d]) || (r[3] && !D[r[3]]));
const badNote = (S.notes || []).filter(r => !D[r[0]] || !(r[1] >= 1 && r[1] <= D[r[0]].pages) || typeof r[2] !== 'string' || !r[2].trim());
check(!badName.length && !badSec.length && !badNote.length, `the names (${S.names.length}), sections (${S.sections.length}) and notes (${(S.notes || []).length}) tables name only decks and pages that exist`, badName.concat(badSec, badNote).map(r => r[0]).join(', '));
const badMap = [];
for (const id of ids) {
  const d = D[id];
  if (d.titles.length !== d.pages) badMap.push(`${id}: ${d.titles.length} titles for ${d.pages} pages`);
  for (const [n, m] of Object.entries(d.map || {})) {
    const ok = Array.isArray(m) ? D[m[0]] && m[1] >= 1 && m[1] <= D[m[0]].pages : (m === 0 || (m >= 1 && m <= d.pages));
    if (!ok || +n < 1 || +n > d.cited) badMap.push(`${id} ${n} -> ${JSON.stringify(m)}`);
  }
}
check(!badMap.length, 'every page map entry points to a page that exists', badMap.join('; '));
const noImg = [];
let bytes = 0, count = 0;
for (const id of ids) for (let p = 1; p <= D[id].pages; p++) {
  const f = path.join(ROOT, P.file(id, p));
  if (!fs.existsSync(f)) noImg.push(P.file(id, p)); else { bytes += fs.statSync(f).size; count++; }
}
check(!noImg.length, `every clean page has its image in ${S.dir}/ (${count} images, ${(bytes / 1e6).toFixed(1)} MB)`, noImg.slice(0, 12).join(', '));
const extra = [];
if (fs.existsSync(path.join(ROOT, S.dir))) for (const d of fs.readdirSync(path.join(ROOT, S.dir))) {
  if (!D[d]) { extra.push(d + '/'); continue; }
  for (const f of fs.readdirSync(path.join(ROOT, S.dir, d))) { const m = /^(\d\d)\.(\w+)$/.exec(f); if (!m || m[2] !== S.ext || +m[1] < 1 || +m[1] > D[d].pages) extra.push(d + '/' + f); }
}
check(!extra.length, `${S.dir}/ holds nothing but those images`, extra.slice(0, 12).join(', '));
const dzCards = DZ ? DZ.cards.map(c => c.id) : [];
const noCase = dzCards.filter(id => !P.sectionDeck('dzcases-' + id)), ghost = S.sections.filter(r => /^dzcases-/.test(r[0]) && !dzCards.includes(r[0].slice(8)));
check(!noCase.length && !ghost.length, `every Diseases card (${dzCards.length}) has its practice-patient row in SLIDES.sections, and no row is for a card that is gone`, noCase.concat(ghost.map(r => r[0])).join(', '));

/* ---- the text units, each with what its place declares --------------------- */
const units = [];       // {group, where, text, ctx: {decks, prof, sun, column}, skip: [[s, e]], q}
const add = (group, where, text, ctx, more) => {
  if (typeof text !== 'string' || !/\d/.test(text)) return;
  const c = Array.isArray(ctx) ? {decks: ctx} : Object.assign({decks: []}, ctx || {});
  units.push(Object.assign({group, where, text, ctx: c, skip: []}, more || {}));
};
const ENT = {amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: '\xa0', ndash: '–', mdash: '—', rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“',
  middot: '·', times: '×', hellip: '…', le: '≤', ge: '≥', alpha: 'α', beta: 'β', gamma: 'γ', delta: 'δ', kappa: 'κ', micro: 'µ', mu: 'μ',
  deg: '°', rarr: '→', larr: '←', uarr: '↑', darr: '↓', harr: '↔', plusmn: '±', frac12: '½', reg: '®', trade: '™', sup2: '²', sup3: '³', minus: '−', asymp: '≈', ne: '≠', check: '✓', star: '★', thinsp: ' ', ensp: ' ', emsp: ' ', shy: '', lrm: '', zwnj: ''};
const decode = s => s.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z0-9]+);/g, (m, k) => k[0] === '#' ? String.fromCodePoint(k[1] === 'x' || k[1] === 'X' ? parseInt(k.slice(2), 16) : +k.slice(1)) : (k in ENT ? ENT[k] : m));
const SLIDE_HEAD = /^\s*(?:slides?|pages?)\s*(?:;.*)?$/i;

/* reference.js, tell.js, guide.js (and figure captions): the page puts these strings into the
   DOM as they are, so a unit is a block element; its place is the nearest enclosing element with
   a row in SLIDES.sections, else the last heading (h2, h3) with one; a table cell takes the one
   deck its column heading names; a figure caption the one deck it names */
const BLOCK = new Set('p li td th dd dt figcaption h1 h2 h3 h4 h5 h6 small div section article table thead tbody tfoot tr ul ol dl figure details br hr summary nav blockquote'.split(' '));
const NOLINK = new Set('button a summary label select textarea option svg script style code nav'.split(' '));
const VOID = new Set('br hr img input meta link col wbr'.split(' '));
const noRule = [];
function htmlUnits(html, group, opts){
  opts = opts || {};
  const stack = [], tabs = [];            // open elements {tag, id, cls, col}; open tables {heads, inHead}
  let buf = '', skips = [], brks = [], headId = '', skipDepth = 0, skipStart = 0;
  const flush = () => {
    const text = buf, sk = skips, bk = brks; buf = ''; skips = []; brks = [];
    const top = stack[stack.length - 1], tab = tabs[tabs.length - 1];
    if (top && top.tag === 'th' && tab && tab.inHead) tab.heads[top.col] = text;
    if (!/\d/.test(text)) return;
    let rule;
    for (let i = stack.length - 1; i >= 0 && !rule; i--) if (stack[i].id) rule = P.sectionDeck(stack[i].id);
    if (!rule && headId) rule = P.sectionDeck(headId);
    const where = opts.where || (stack.slice().reverse().find(x => x.id) || {}).id || headId || '';
    const ctx = {decks: rule ? rule.decks : [], sun: rule ? rule.sun : null};
    if (stack.some(x => x.tag === 'figcaption') || opts.caption) { const d = P.decksNamed(opts.caption || text); if (d.length === 1) ctx.decks = d; }
    const cell = stack.slice().reverse().find(x => x.tag === 'td');
    if (cell && tab) {
      const head = tab.heads[cell.col] || '', d = head ? P.decksNamed(head) : [];
      if (d.length === 1) ctx.decks = d;
      ctx.column = SLIDE_HEAD.test(head);
    }
    // a guide's objective bar: <div class="gbar"><span>Objective (PP 3)</span><b>…</b><i>PP 4–6</i></div>, one unit
    const bar = stack.some(x => /\bgbar\b/.test(x.cls || ''));
    units.push({group, where, text, ctx, skip: sk, breaks: bk, rule: rule ? rule.rule : '', kind: bar ? 'gbar' : '', key: bar ? where : ''});
  };
  const re = /<!--[\s\S]*?-->|<(\/?)([a-zA-Z][a-zA-Z0-9]*)((?:"[^"]*"|'[^']*'|[^'">])*)>|[^<]+/g;
  let m;
  while ((m = re.exec(html))) {
    if (m[0].startsWith('<!--')) continue;
    // the page joins the text nodes of a unit with nothing between them; where a text run starts after a tag
    // (or a comment) it is another text node, and slide_ui.js reads its start as the start of a word
    if (m[2] === undefined) { if (buf.length) brks.push(buf.length); buf += decode(m[0]); continue; }
    const tag = m[2].toLowerCase(), closing = m[1] === '/', attrs = m[3] || '';
    if (BLOCK.has(tag)) flush();
    if (!closing) {
      const id = (/\bid="([^"]*)"/.exec(attrs) || [])[1] || '';
      if (tag === 'table') tabs.push({heads: [], inHead: false, col: -1});
      const tab = tabs[tabs.length - 1];
      if (tag === 'thead' && tab) tab.inHead = true;
      if (tag === 'tr' && tab) tab.col = -1;
      let c = -1;
      if ((tag === 'td' || tag === 'th') && tab) { tab.col++; c = tab.col; }
      if ((tag === 'h2' || tag === 'h3') && id) { headId = id; if (opts.sections && !P.sectionDeck(id)) noRule.push(group + ' #' + id); }
      if (tag === 'section' && id && /\bclass="[^"]*\bgobj\b/.test(attrs) && opts.sections && !P.sectionDeck(id)) noRule.push(group + ' #' + id);
      if (NOLINK.has(tag)) { if (!skipDepth) skipStart = buf.length; skipDepth++; }
      if (!VOID.has(tag) && !/\/$/.test(attrs)) stack.push({tag, id, cls: (/\bclass="([^"]*)"/.exec(attrs) || [])[1] || '', col: c});
    } else {
      const tab = tabs[tabs.length - 1];
      if (tag === 'thead' && tab) tab.inHead = false;
      if (NOLINK.has(tag) && skipDepth) { skipDepth--; if (!skipDepth) skips.push([skipStart, buf.length]); }
      for (let i = stack.length - 1; i >= 0; i--) if (stack[i].tag === tag) { stack.length = i; break; }
      if (tag === 'table') tabs.pop();
    }
  }
  flush();
}
htmlUnits(g('REFERENCE_HTML'), 'Reference', {sections: true});
htmlUnits(g('TELL_HTML'), 'Tell apart', {sections: true});
htmlUnits(g('GUIDE_HTML'), 'Guides', {sections: true});
check(!noRule.length, 'every section of reference.js, tell.js and guide.js has its row in SLIDES.sections (a deck, or null for a mixed section)', noRule.join(', '));

/* the structure strip: which structures a question sets side by side and the note under each. These
   are the core's rules (views.js fgKey, cmpNames, fgTell: the first sentence of the Atlas note), copied
   here; slide_test.js compares what they give with the strips the page draws */
const FG = g('FG') || {}, FG_INDEX = {};
Object.keys(FG).forEach(k => { FG_INDEX[k.toLowerCase()] = k; const first = k.toLowerCase().split(' ')[0]; if (!(first in FG_INDEX)) FG_INDEX[first] = k; });
const fgKey = name => !name ? null : FG[name] ? name : FG_INDEX[String(name).toLowerCase().trim()] || null;
const cmpNames = q => {
  if (Array.isArray(q.cmp)) return q.cmp.map(fgKey).filter(Boolean);
  const opts = (q.options || []).map(o => fgKey(o.t));
  if (!opts.length || !opts.every(Boolean)) return [];
  const right = fgKey(((q.options || []).find(o => o.correct) || {}).t);
  return right ? [right].concat(opts.filter(t => t !== right)) : opts;
};
const fgTell = k => { const it = ATLAS && ATLAS.item ? ATLAS.item(k) : null; if (!it) return ''; const plain = String(it.t).replace(/<[^>]+>/g, ''), stop = plain.search(/[.!?]/); return decode(stop > 0 ? plain.slice(0, stop + 1) : plain); };
const stripOf = q => { const names = cmpNames(q); return names.length < 2 ? [] : names.map(fgTell); };
const atlasRow = P.sectionDeck('at-') || {decks: []}, atlasCtx = {decks: atlasRow.decks, sun: atlasRow.sun || null};

/* questions: the source line, then what the page shows with it after the answer; the place is
   the deck the source line names first */
const ctxOfQ = {};
for (const q of QUESTIONS) {
  const ctx = P.questionCtx(q.cite || '');
  ctxOfQ[q.id] = ctx;
  add('Question source line', q.id, q.cite, ctx, {q});
  (q.options || []).forEach((o, i) => add('Question explanation', q.id + ' option ' + (i + 1), o.why, ctx));
  for (const k of ['teach', 'note', 'why']) add('Question explanation', q.id + ' ' + k, q[k], ctx);
  (q.pairs || []).forEach((p, i) => add('Question explanation', q.id + ' pair ' + (i + 1), p.why, ctx, {kind: 'pair', key: q.id}));
  // the structure strip of an answered multiple-choice question ("The structures side by side"): its captions
  // are the Atlas notes, so their place is the Atlas's (the row "at-"), whatever deck the question is filed under
  if (!q.type && q.teach) stripOf(q).forEach((t, i) => add('Question explanation', q.id + ' structure ' + (i + 1), t, atlasCtx, {kind: 'strip', key: q.id}));
}
const qNoDeck = QUESTIONS.filter(q => !ctxOfQ[q.id].decks.length);
check(!qNoDeck.length, `every question's source line names a deck the parser reads (${QUESTIONS.length} questions)`, qNoDeck.slice(0, 10).map(q => q.id + ': ' + q.cite).join(' | '));
const lecOf = q => { const f = lectures.find(l => (q.cite || '').includes(l.deck)); return f ? ids.find(i => D[i].files.includes(f.deck)) : null; };
const qOther = QUESTIONS.filter(q => ctxOfQ[q.id].decks.length && lecOf(q) && ctxOfQ[q.id].decks[0] !== lecOf(q));
check(!qOther.length, 'the deck the parser takes for a question is the deck the engine files it under', qOther.slice(0, 8).map(q => q.id).join(', '));
const qProf = QUESTIONS.filter(q => ctxOfQ[q.id].decks.length && D[ctxOfQ[q.id].decks[0]].prof !== q.prof);
check(!qProf.length, 'that deck is a deck of the question\'s own professor', qProf.slice(0, 8).map(q => q.id + ' (' + q.prof + ', ' + ctxOfQ[q.id].decks[0] + ')').join(', '));

/* A small tree of an HTML string and slide_ui.js's linkifier applied to it as on the page: the unit of a
   text (UNIT_SEL), the controls it skips (SKIP), the text nodes joined with their element boundaries, a link
   only inside one text node and never twice. Used for the Diseases cards, whose HTML dz_ui.js writes. */
const SKIP_TAG = new Set('button a summary label input select textarea option svg script style code nav'.split(' ')), SKIP_CLS = ['slk', 'dzcz', 'opt', 'clock'];
const UNIT_TAG = new Set('p li td th dd dt figcaption h2 h3 h4 h5 h6 small div section article'.split(' ')), UNIT_SPAN = ['ln', 'dlsrc', 'dzsrc', 'wtxt', 'atpg', 'stepwhy'];
function tree(html){
  const root = {tag: '#root', cls: [], kids: [], parent: null}, re = /<!--[\s\S]*?-->|<(\/?)([a-zA-Z][a-zA-Z0-9]*)((?:"[^"]*"|'[^']*'|[^'">])*)>|[^<]+/g;
  let cur = root, m;
  while ((m = re.exec(html))) {
    if (m[0].startsWith('<!--')) { cur.kids.push({comment: true, parent: cur}); continue; }
    if (m[2] === undefined) { cur.kids.push({text: decode(m[0]), parent: cur, done: []}); continue; }
    const tag = m[2].toLowerCase(), attrs = m[3] || '';
    if (m[1] === '/') { for (let a = cur; a && a !== root; a = a.parent) if (a.tag === tag) { cur = a.parent; break; } continue; }
    const el = {tag, cls: ((/\bclass="([^"]*)"/.exec(attrs) || [])[1] || '').split(/\s+/).filter(Boolean), attr: k => (new RegExp('\\b' + k + '="([^"]*)"').exec(attrs) || [])[1], edit: /\bcontenteditable\b/.test(attrs), kids: [], parent: cur};
    cur.kids.push(el);
    if (!VOID.has(tag) && !/\/$/.test(attrs)) cur = el;
  }
  return root;
}
const has = (el, c) => !!el && !!el.cls && el.cls.includes(c);
const up = (n, f) => { for (let a = n; a; a = a.parent) if (a.tag && f(a)) return a; return null; };
const texts = (el, out) => { out = out || []; (el.kids || []).forEach(k => { if (k.text !== undefined) out.push(k); else if (k.tag) texts(k, out); }); return out; };
const textOf = el => texts(el).map(t => t.text).join('');
const all = (el, f, out) => { out = out || []; (el.kids || []).forEach(k => { if (k.tag) { if (f(k)) out.push(k); all(k, f, out); } }); return out; };
const isSkip = el => SKIP_TAG.has(el.tag) || SKIP_CLS.some(c => has(el, c)) || el.edit;
const isUnit = el => UNIT_TAG.has(el.tag) || (el.tag === 'span' && UNIT_SPAN.some(c => has(el, c)));
/* linkView + linkUnit of slide_ui.js over the tree under `root`; ctxOf(unit) is what the unit's place declares */
function linkTree(root, ctxOf, group, where, more){
  const todo = [], hidden = [];
  texts(root).forEach(t => { if (!/\d/.test(t.text)) return; const u = up(t.parent, isUnit); if (!u) return; if (up(t.parent, isSkip)) hidden.push([t, u]); else if (todo.indexOf(u) < 0) todo.push(u); });
  // a citation inside a control or a covered fact, in a unit the page never reads (its other text has no number): reported
  hidden.filter(([t, u]) => todo.indexOf(u) < 0).forEach(([t, u]) => {
    const r = P.scan(t.text, Object.assign({decks: []}, ctxOf(u) || {}));
    if (r.links.length) units.push(Object.assign({group, where: typeof where === 'function' ? where(u) : where, text: t.text, ctx: {}, skip: [], pre: {links: [], refused: r.links.map(l => ({s: l.s, e: l.e, raw: t.text.slice(l.s, l.e), why: 'inside a link, a button or a covered fact'}))}}, more || {}));
  });
  todo.forEach(unit => {
    const nodes = [], breaks = [];
    let text = '', prev = null;
    texts(unit).forEach(t => {
      if (up(t.parent, a => a.tag === 'svg' || a.tag === 'script' || a.tag === 'style')) return;
      if (prev && !(prev.parent === t.parent && t.parent.kids[t.parent.kids.indexOf(prev) + 1] === t)) breaks.push(text.length);
      nodes.push({t, at: text.length, skip: !!up(t.parent, isSkip)}); text += t.text; prev = t;
    });
    if (!/\d/.test(text)) return;
    const ctx = Object.assign({decks: []}, ctxOf(unit) || {});
    if (breaks.length) ctx.breaks = breaks;
    const cap = up(unit, a => a.tag === 'figcaption');
    if (cap) { const d = P.decksNamed(textOf(cap)); if (d.length === 1) ctx.decks = d; }
    const r = P.scan(text, ctx), pre = {links: [], refused: r.refused.slice()};
    r.links.forEach(l => {
      const x = nodes.filter(k => k.at <= l.s && l.e <= k.at + k.t.text.length)[0];
      if (!x) { pre.refused.push({s: l.s, e: l.e, raw: text.slice(l.s, l.e), why: 'split over two elements of the page (a tag stands inside the citation)'}); return; }
      if (x.skip) { pre.refused.push({s: l.s, e: l.e, raw: text.slice(l.s, l.e), why: 'inside a link, a button or a covered fact'}); return; }
      if (x.t.done.some(([a, b]) => l.s - x.at < b && a < l.e - x.at)) return;       // linked already, as part of a unit around this one
      x.t.done.push([l.s - x.at, l.e - x.at]); pre.links.push(l);
    });
    units.push(Object.assign({group, where: typeof where === 'function' ? where(unit) : where, text, ctx, skip: [], pre}, more || {}));
  });
}
/* dz_ui.js's own HTML for a view of the Diseases tab: the file is run with a stand-in for the page that only
   keeps what render() writes (its tab is not added: there is no page) */
const dzPage = (() => {
  if (!DZ) return null;
  try {
    const quiet = {log(){}, error(){}, warn(){}}, nav = {insertBefore(){}, appendChild(){}, querySelector(){ return null; }};
    const box = {console: quiet, MutationObserver: function(){}, document: {getElementById: id => id === 'nav' ? nav : null, createElement(){ throw new Error('no page here'); }, querySelector(){ return null; }, querySelectorAll(){ return []; }}};
    vm.createContext(box);
    vm.runInContext(fs.readFileSync(path.join(SRC, 'dz_data.js'), 'utf8') + '\n' + fs.readFileSync(path.join(SRC, 'dz_ui.js'), 'utf8') + '\nthis.UI = DZ_UI; this.DATA = DZ;', box, {filename: 'dz_ui.js'});
    const st = box.UI.state;
    return set => { set(st, box.DATA); st.q = ''; st.filter = ''; st.recall = false; const pane = {innerHTML: ''}; box.UI.render(pane); return tree(pane.innerHTML); };
  } catch (e) { return null; }
})();
/* dzCtx of slide_ui.js on the tree: the deck(s) the nearest source line(s) name; inside a professor's block
   (.dzprof, or the group .dzgrp of a card with more than one professor) that professor */
const DZP = {sm: 'Smith', sk: 'Sikazwe', pa: 'Patel'}, dzProfs = {};
function dzCtxOf(el){
  const blk = up(el, a => has(a, 'dzprof') || has(a, 'dzgrp')), prof = blk ? DZP[['sm', 'sk', 'pa'].filter(k => has(blk, k))[0]] || null : null;
  for (let a = el; a && a.tag !== '#root'; a = a.parent) {
    const src = a.kids.filter(c => c.tag && has(c, 'dzsrc')).map(textOf);
    if (has(a, 'dzsrc')) src.push(textOf(a));
    const decks = src.length ? P.decksNamed(src.join('; ')) : [];
    if (decks.length) return {decks, prof};
    if (has(a, 'dzcases')) { const card = up(a, x => x.attr('data-card') !== undefined), r = card ? P.sectionDeck('dzcases-' + card.attr('data-card')) : undefined; return {decks: r ? r.decks : [], prof}; }
  }
  return {decks: [], prof};
}
check(!DZ || !!dzPage, 'dz_ui.js runs without a page and hands over the HTML of a Diseases card (the card steps are read from it)');

/* Diseases: the place is the nearest source line, as dz_ui.js lays the card out; inside a
   professor's block that professor; the practice patients take the card's row. The steps of each
   card are read from the HTML dz_ui.js writes (above); the rest from the data. */
if (DZ) {
  const named = t => P.decksNamed(t || '');
  const PROFS = {sm: 'Smith', sk: 'Sikazwe', pa: 'Patel'};
  const strings = v => typeof v === 'string' ? [v] : Array.isArray(v) ? v.flatMap(strings) : v && typeof v === 'object' ? Object.values(v).flatMap(strings) : [];
  for (const c of DZ.cards) {
    const w = 'card ' + c.id;
    add('Diseases', w + ' lectures', c.lectures, []);
    (c.short || []).forEach(t => add('Diseases', w + ' short', t, []));
    if (dzPage) {
      const page = dzPage(st => { st.view = 'cards'; st.card = c.id; (c.steps || []).forEach((s, i) => { st.open[c.id + ':' + i] = true; }); });
      const lis = all(page, a => a.tag === 'li' && a.parent && a.parent.tag === 'ol' && has(a.parent, 'dzsteps'));
      const profs = new Set(all(page, a => has(a, 'dztag')).map(a => ['sm', 'sk', 'pa'].filter(k => has(a, k))[0]));
      dzProfs[c.id] = profs.size;
      lis.forEach((li, i) => linkTree(li, dzCtxOf, 'Diseases', u => w + ' step ' + (i + 1) + (has(u, 'dzsrc') ? ' source' : ''), {kind: 'dzstep', key: c.id}));
    }
    const pr = P.sectionDeck('dzcases-' + c.id), pd = pr ? pr.decks : [];
    (c.patients || []).forEach(p => [p.t, p.q, p.w].concat(Object.values(p.x || {})).forEach(t => add('Diseases', w + ' patient', t, pd)));
    (c.numbers || []).forEach(r => { const d = named(r[2]); add('Diseases', w + ' number', r[0], d); add('Diseases', w + ' number', r[1], d); add('Diseases', w + ' number source', r[2], d); });
  }
  for (const [k, d] of Object.entries(DZ.drugs)) {
    const w = 'drug ' + k;
    for (const p of ['sm', 'sk']) if (d[p]) { const ctx = {decks: named(d[p].src), prof: PROFS[p]}; add('Diseases', w + ' ' + p, d[p].text, ctx); add('Diseases', w + ' ' + p + ' source', d[p].src, ctx); }
    (d.pa || []).forEach(r => { const ctx = {decks: named(r.src), prof: 'Patel'}; add('Diseases', w + ' use', r.role, ctx); add('Diseases', w + ' use', r.how, ctx); add('Diseases', w + ' use source', r.src, ctx); });
    const cd = named(d.counselSrc); (d.counsel || []).forEach(t => add('Diseases', w + ' counsel', t, cd)); add('Diseases', w + ' counsel source', d.counselSrc, cd);
    // "Who should not get it": no source line; a line labelled with its conditions takes the one deck the panel's
    // rows for exactly those conditions name (dzCtx in slide_ui.js)
    (d.avoid || []).forEach(t => {
      const m = /^([^:]{3,200}): /.exec(t), want = m ? m[1].split(' / ').map(x => x.trim()) : [];
      const rowsOf = n => (d.pa || []).filter(r => String((DZ.cards.find(c => c.id === r.dz) || {}).name || r.dz).replace(/\s*\(.*?\)/g, '').trim() === n);
      const src = want.flatMap(n => rowsOf(n).map(r => r.src || ''));
      const decks = want.length && want.every(n => rowsOf(n).length) && src.length ? named(src.join('; ')) : [];
      add('Diseases', w + ' avoid', t, decks.length === 1 ? decks : [], {kind: 'dzavoid', key: k});
    });
  }
  for (const [k, t] of Object.entries(DZ.terms)) { const d = named(t[2]); add('Diseases', 'term ' + k, t[1], d); add('Diseases', 'term ' + k + ' source', 'Source: ' + (t[2] || ''), d); }
  // Tell apart, Drugs that get confused, Rules that repeat: from the HTML dz_ui.js writes for each view
  if (dzPage) for (const v of ['tell', 'pairs', 'rules']) {
    const page = dzPage(st => { st.view = v; }), body = all(page, a => has(a, 'dzbody'))[0];
    const where = u => { const sec = up(u, a => a.tag === 'section'), src = has(u, 'dzsrc') ? ' source' : ''; return v === 'tell' ? 'tell ' + String((sec && sec.attr('id')) || '').replace(/^dz-tell-/, '') + src : v === 'pairs' ? 'pair' : 'rule' + src; };
    if (body) linkTree(body, dzCtxOf, 'Diseases', where, {kind: 'dz' + v, key: ''});
  }
}
/* Drug list: a source chip reads "<who> · <cite>"; a line's place is the one deck its chip names */
if (DL) {
  const who = {smith: 'Dr. Smith', sikazwe: 'Dr. Sikazwe', chart: 'Drug chart'};
  const chip = v => (who[v.by] || v.by) + ' · ' + v.cite;
  const walk = (v, w) => {
    if (Array.isArray(v)) v.forEach(x => walk(x, w));
    else if (v && typeof v === 'object') {
      const has = typeof v.by === 'string' && typeof v.cite === 'string';
      const d = has ? P.decksNamed(chip(v)) : [];
      if (has) add('Drug list', w + ' source chip', chip(v), {decks: [], chart: true});
      for (const [k, x] of Object.entries(v)) if (k !== 'cite' && typeof x !== 'function') (typeof x === 'string' ? add('Drug list', w, x, {decks: has && k === 't' && d.length === 1 ? d : [], chart: true}) : walk(x, w));
    }
  };
  (DL.D || []).forEach(d => walk(d, d.id));
  walk(DL.CHART_NOTES, 'notes');
  // the targets it reads from Reference "Drug targets": their chips carry the row's cite
  try { const T = DL.parseTargets(g('REFERENCE_HTML')); Object.entries(T).forEach(([id, t]) => (t.parts || []).forEach(p => add('Drug list', id + ' source chip', chip(p), {decks: [], chart: true}))); } catch (e) {}
}
/* Atlas: every board is Dr. Sikazwe's deck (the row "at-"); the page builds the tile lines from
   these fields, so this pass reads the fields and slide_test.js reads the tiles themselves */
if (ATLAS) {
  const at = P.sectionDeck('at-x') || {decks: []}, ctx = {decks: at.decks, sun: at.sun};
  const skipKey = /^(svg|smiles|mol|path|d|img|key|id|k)$/i;
  const walk = (v, w) => {
    if (typeof v === 'string') { if (!/<svg|<path|^M[\d .,-]+/.test(v)) add('Atlas', w, v, ctx); }
    else if (Array.isArray(v)) v.forEach(x => walk(x, w));
    else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) if (!skipKey.test(k) && typeof x !== 'function') walk(x, w);
  };
  (ATLAS.boards || []).forEach(b => walk(b, 'board ' + (b.id || b.title || '')));
}
/* walkthroughs: the player's text is spoken and shown as it is; it is not one of the linked
   places, so this only reports whether any of it cites a slide */
const walkCites = WALK.flatMap(w => (w.parts || []).filter(p => P.scan(p.text || '', {decks: D[w.deck] ? [w.deck] : []}).links.length).map(() => w.id));
/* drawn figures: the captions (the drawing itself is never linked) */
for (const [k, h] of Object.entries(DIA)) {
  const cap = /<figcaption[^>]*>([\s\S]*?)<\/figcaption>/.exec(String(h));
  if (cap) htmlUnits('<figcaption>' + cap[1] + '</figcaption>', 'Figure caption', {where: k, caption: decode(cap[1].replace(/<[^>]+>/g, ''))});
}

/* ---- run the parser over every unit ---------------------------------------- */
const links = [], refused = [];
for (const u of units) {
  if (u.pre) { u.pre.links.forEach(l => links.push(Object.assign({u}, l))); u.pre.refused.forEach(x => refused.push(Object.assign({u}, x))); continue; }
  const bk = u.breaks || [];
  const r = P.scan(u.text, bk.length ? Object.assign({}, u.ctx, {breaks: bk}) : u.ctx);
  const inSkip = l => u.skip.some(([s, e]) => l.s < e && s < l.e);
  const split = l => bk.some(b => l.s < b && b < l.e);          // the page links a citation only inside one text node
  for (const l of r.links) {
    if (inSkip(l)) refused.push({u, raw: u.text.slice(l.s, l.e), why: 'inside a link, a button or a folder heading', s: l.s, e: l.e});
    else if (split(l)) refused.push({u, raw: u.text.slice(l.s, l.e), why: 'split over two elements of the page (a tag stands inside the citation)', s: l.s, e: l.e});
    else links.push(Object.assign({u}, l));
  }
  for (const x of r.refused) refused.push(Object.assign({u}, x));
}
console.log('\n=== The links the parser makes ===');
const missing = [], bad = [];
for (const l of links) {
  const r = P.resolve(l.deck, l.n, l.printed);
  if (!r) { bad.push(l); continue; }
  if (!fs.existsSync(path.join(ROOT, P.file(r.deck, r.page)))) missing.push(P.file(r.deck, r.page));
}
check(links.length > 0 && !bad.length, `every link resolves to a clean page (${links.length} links from ${units.length} texts)`, bad.slice(0, 6).map(l => l.u.where + ' ' + l.deck + ' ' + l.n).join(', '));
check(!missing.length, 'every link\'s image is on disk', [...new Set(missing)].slice(0, 10).join(', '));
const outside = refused.filter(x => x.outside);
check(!outside.length, 'no cited number falls outside its deck', outside.slice(0, 10).map(x => `${x.u.group} ${x.u.where}: "${x.raw}" ${x.why}`).join(' | '));
// the two sun decks never cross: a question of one professor never links to the other's sun deck
const cross = links.filter(l => l.u.q && (l.deck === 'sun' || l.deck === 'p8s') && D[l.deck].prof !== l.u.q.prof);
check(!cross.length, 'a Sun citation in a question\'s source line goes to that question\'s own professor\'s deck', cross.slice(0, 6).map(l => l.u.where).join(', '));
const sunQ = p => links.filter(l => l.u.q && l.u.q.prof === p && l.deck === (p === 'Smith' ? 'sun' : 'p8s')).length;
check(sunQ('Smith') > 0 && sunQ('Patel') > 0, `both sun decks are linked from their own questions (Dr. Smith's ${sunQ('Smith')}, Dr. Patel's ${sunQ('Patel')})`);
const before = l => l.u.text.slice(0, l.s);
const tLink = links.filter(l => /(?:^|[^A-Za-z])T[\s\xa0]?(?:\d+[–-]?\d*,\s?)*$/.test(before(l)) || /@[\d–-]*$/.test(before(l)) || /(?:audio|recording)[\s\xa0][\d:–-]*$/.test(before(l)) || /\d\/$/.test(before(l)));
check(!tLink.length, 'no transcript line, transcript offset, recording time or date is linked', tLink.slice(0, 6).map(l => l.u.where + ': ' + l.u.text.slice(Math.max(0, l.s - 12), l.e)).join(' | '));
const mcShift = links.filter(l => l.deck === 'mc' && !l.printed && l.n >= 23).every(l => P.resolve('mc', l.n).page === l.n - 1);
check(mcShift && P.resolve('mc', 22).page === 21 && P.resolve('mc', 21).page === 21, 'a DPAW citation from page 23 on opens the clean page one lower; pages 21 and 22 both open clean page 21');
check(P.resolve('sun', 5).page === 1 && P.resolve('sun', 26).page === 22 && P.resolve('sun', 3).deck === 'pc' && P.resolve('sun', 3).page === 78,
  'Dr. Smith\'s Sun slide N opens clean page N - 4; slides 2-4 open her Skin Pharmacology slides 77-79');

/* ---- the parser's rules, one line each (the text a link holds > what it opens) ---- */
const read = (t, ctx) => P.scan(t, Array.isArray(ctx) ? {decks: ctx} : ctx).links.map(l => t.slice(l.s, l.e) + '>' + l.deck + ' ' + l.n + (l.to ? '-' + l.to : '') + (l.printed ? ' printed' : '')).join('|');
check(read('Slide 6: sebum', ['pp']) === 'Slide 6>pp 6' && read('Slides 32–33: x', ['pc']) === 'Slides 32–33>pc 32-33' && read('Slides 20, 40: x', ['pc']) === 'Slides 20>pc 20|40>pc 40' &&
  read('PCol 55: coal tar', ['pp']) === 'PCol 55>pc 55' && read('p. 43: x', ['mc']) === 'p. 43>mc 43' && read('Lecture 2 (Skin-PCol-Students-2026.pdf) slide 18: tazarotene', []) === 'slide 18>pc 18',
  'a citation that ends at a colon is linked whole ("Slide 6: …", "Slides 32–33: …", "Slides 20, 40: …", "PCol 55: …")');
check(['slide 12:34', 'Sun 17:27', 'PCol 12:30', 'page 7:30', 'slide 5:1 ratio', 'audio 00:30–00:45, 17:27–17:48', 'PCol 11/03: x', 'slide 5%: x', '10/30 T 430–450: x', 'T 409–419: x', 'T@12345: x'].every(t => read(t, ['sun']) === '') && read('slide 5, 1:1 ratio', ['pc']) === 'slide 5>pc 5',
  'a clock time, a ratio, a date, a percentage and a transcript line stay text when a colon follows');
const NOTE = 'Outside Dr. Sikazwe\'s assigned pages for Exam 1 (list of 11/06: printed slides 7–9, 12, 15–22, 24–33, 42–54, 60–65). The list uses the numbers printed on the slides; from printed slide 22 on, the slide numbers cited here run one higher.';
const noteQs = QUESTIONS.filter(q => /list of 11\/06: /.test(q.note || '')), noteBad = noteQs.filter(q => q.note.indexOf(NOTE) < 0);
const noteOpens = P.scan(NOTE, {decks: ['mc']}).links.map(l => (l.printed ? 'printed ' : '') + l.n + '>' + P.resolve(l.deck, l.n, l.printed).page).join(' ');
check(noteQs.length === 23 && !noteBad.length && noteOpens === 'printed 7>7 printed 12>12 printed 15>15 printed 24>24 printed 42>42 printed 60>60 printed 22>22',
  `the assigned-pages note (${noteQs.length} questions) gives printed slide numbers, and each opens the clean page of that number (7, 12, 15, 24, 42, 60; printed slide 22)`, noteBad.map(q => q.id).join(', ') + ' | ' + noteOpens);
check(read('The Dermatology drug chart lists a different class beside methoxsalen on its p.5 because that page is shifted', ['mc']) === '' &&
  read('The syllabus gives the date on p. 9.', ['mc']) === '' && read('Foye covers it; see p. 1112.', ['mc']) === '' &&
  read('The drug chart says X, but DPAW p. 43 draws it and p. 44 too', ['mc']) === 'DPAW p. 43>mc 43|p. 44>mc 44' && read('The drug chart says X; Dr. Sikazwe\'s p. 43 draws it', ['mc']) === 'p. 43>mc 43' &&
  read('The chart is on another page. See p. 43 for the ring.', ['mc']) === 'p. 43>mc 43',
  'a bare page is not linked when a chart, the syllabus, a reading or a textbook is named earlier in its sentence and no deck after it');
check(read('SE 2 applications', []) === '' && read('AT 2 tablets; DT 3 puffs; OE 4 sprays; WC 2 units; SD 2 capsules; PC 4 doses; PP 3 times; OE 2 drops', []) === '' && read('PP 2B is calcineurin', []) === '' && read('PP 2, 3B', []) === '' &&
  read('PP 2 is the title slide', []) === 'PP 2>pp 2' && read('PCol slide 2B', []) === 'PCol slide 2>pc 2',
  'a deck name and a number are not a citation when a count word or a letter follows the number ("SE 2 applications", "PP 2B")');
check(read('see slide 12 (Dr. Patel)', {decks: ['sun']}) === '' && read('see slide 12 (Dr. Smith)', {decks: ['sun']}) === 'slide 12>sun 12' && read('see slide 12 (Patel)', {decks: ['sun', 'p8s']}) === 'slide 12>p8s 12' && read('see slide 62 (Dr. Sikazwe)', {decks: ['sun']}) === 'slide 62>mc 62',
  'a professor named in brackets right after a bare number decides its deck, and another professor\'s number is not linked into the place\'s deck');
const BAR = ['Objective (PP 3)', 'Describe the basic structures and functions of the skin', 'PP 4–6'];
check(read(BAR.join(''), ['pp']) === 'PP 3>pp 3' && read(BAR.join(''), {decks: ['pp'], breaks: [BAR[0].length, BAR[0].length + BAR[1].length]}) === 'PP 3>pp 3|PP 4–6>pp 4-6' &&
  read('applications. 3', {decks: ['pc'], breaks: [3]}) === '' && read('the skinslide 4', ['pp']) === '' && read('the skinslide 4', {decks: ['pp'], breaks: [8]}) === 'slide 4>pp 4',
  'where a new element\'s text starts, a deck name or "slide" starts a word although a letter stands before it in the joined text (a guide\'s objective bar)');
const gbars = units.filter(u => u.kind === 'gbar'), barIn = gbars.filter(u => links.some(l => l.u === u && u.breaks.length && l.s >= u.breaks[u.breaks.length - 1]));
const barSplit = refused.filter(x => /^split over/.test(x.why));
check(gbars.length === 69 && barIn.length === gbars.length && !barSplit.length, `every objective bar of the guides (${gbars.length}) has links in its slide list, and no citation of the reading files is split by a tag`, gbars.filter(u => barIn.indexOf(u) < 0).map(u => u.where).concat(barSplit.map(x => x.u.where + ': ' + x.raw)).join(', '));
const strips = links.filter(l => l.u.kind === 'strip'), stripQ = [...new Set(units.filter(u => u.kind === 'strip').map(u => u.key))], stripOther = stripQ.filter(id => { const q = QUESTIONS.find(x => x.id === id); return q && q.prof !== 'Sikazwe'; });
check(strips.length > 0 && strips.every(l => l.deck === 'mc') && stripOther.length >= 5, `the notes under the structures of an answered question (${stripQ.length} questions, ${stripOther.length} of another professor) are linked to Dr. Sikazwe's deck only (${strips.length} links)`, strips.filter(l => l.deck !== 'mc').slice(0, 6).map(l => l.u.where + ' ' + l.deck + ' ' + l.n).join(', '));
const pairU = units.filter(u => u.kind === 'pair'), pairL = links.filter(l => l.u.kind === 'pair');
check(pairU.length > 0 && pairU.every(u => pairL.some(l => l.u === u)), `every pair line of a matching question that cites a slide is linked (${pairL.length} links in ${new Set(pairU.map(u => u.key)).size} questions)`, pairU.filter(u => !pairL.some(l => l.u === u)).map(u => u.where).join(', '));

const tab = (rows, heads) => { const w = heads.map((h, i) => Math.max(h.length, ...rows.map(r => String(r[i]).length))); const line = r => '  ' + r.map((c, i) => String(c).padEnd(w[i])).join('  '); console.log(line(heads)); rows.forEach(r => console.log(line(r))); };
const tally = (list, key) => { const m = {}; list.forEach(x => { const k = key(x); m[k] = (m[k] || 0) + 1; }); return m; };
console.log('\n  Links by deck:');
const byDeck = tally(links, l => l.deck);
tab(ids.map(id => [id, D[id].label, byDeck[id] || 0, new Set(links.filter(l => l.deck === id).map(l => l.n)).size + ' of ' + D[id].cited]), ['deck', 'label', 'links', 'distinct numbers cited']);
console.log('\n  Links by where they are and by form:');
const forms = [...new Set(links.map(l => l.form))].sort(), groups = [...new Set(units.map(u => u.group))];
tab(groups.map(gr => [gr].concat(forms.map(f => links.filter(l => l.u.group === gr && l.form === f).length), [links.filter(l => l.u.group === gr).length])).concat([['all'].concat(forms.map(f => links.filter(l => l.form === f).length), [links.length])]), ['where'].concat(forms, ['all']));
console.log(`\n  Walkthrough texts that cite a slide: ${walkCites.length}${walkCites.length ? ' (' + [...new Set(walkCites)].join(', ') + '); the player shows its own slide beside the text and its text is not linked' : ''}`);
console.log('\n  Citations left as text, by reason:');
const key = x => x.why.replace(/\(.*$/, '').trim();
Object.entries(tally(refused, key)).sort((a, b) => b[1] - a[1]).forEach(([k, n]) => {
  console.log(`  ${String(n).padStart(5)}  ${k}`);
  const ex = refused.filter(x => key(x) === k);
  (ALL ? ex : ex.slice(0, 6)).forEach(x => console.log(`           ${x.u.group} ${x.u.where}: …${x.u.text.slice(Math.max(0, (x.s || 0) - 46), (x.s || 0)).replace(/\s+/g, ' ')}[${x.raw}]${x.u.text.slice(x.e || 0, (x.e || 0) + 30).replace(/\s+/g, ' ')}…`));
});
if (ALL) { console.log('\n  Every link:'); links.forEach(l => { const r = P.resolve(l.deck, l.n, l.printed); console.log(`  ${l.u.group} | ${l.u.where} | ${JSON.stringify(l.u.text.slice(l.s, l.e))} | ${l.form} | ${l.deck} ${l.n}${l.to ? '-' + l.to : ''} -> ${P.file(r.deck, r.page)}`); }); }
// --model FILE: what this file expects the page to link in the places slide_test.js compares with the built page
// (a matching question's pair lines, a guide's objective bar, the steps of a Diseases card, a structure strip,
// a drug panel's "Who should not get it" list): per place, the links as "deck number[-to][ printed]"
if (MODEL_OUT) {
  const sig = l => l.deck + ' ' + l.n + (l.to ? '-' + l.to : '') + (l.printed ? ' printed' : '');
  const by = kind => { const m = {}; units.forEach(u => { if (u.kind === kind && !m[u.key]) m[u.key] = []; }); links.forEach(l => { if (l.u.kind === kind) m[l.u.key].push(sig(l)); }); return m; };
  fs.writeFileSync(MODEL_OUT, JSON.stringify({pair: by('pair'), gbar: by('gbar'), dzstep: by('dzstep'), strip: by('strip'), dzavoid: by('dzavoid'), dzProfs,
    dzview: {tell: (by('dztell')[''] || []), pairs: (by('dzpairs')[''] || []), rules: (by('dzrules')[''] || [])}}));
}
// --json FILE: every link and every citation left as text, with the text around it (for a comparison of two runs)
if (JSON_OUT) {
  const row = x => ({group: x.u.group, where: x.u.where, kind: x.u.kind || '', key: x.u.key || '', s: x.s || 0, e: x.e || 0, raw: x.raw !== undefined ? x.raw : x.u.text.slice(x.s, x.e), before: x.u.text.slice(Math.max(0, (x.s || 0) - 80), x.s || 0), after: x.u.text.slice(x.e || 0, (x.e || 0) + 60)});
  fs.writeFileSync(JSON_OUT, JSON.stringify({
    links: links.map(l => { const r = P.resolve(l.deck, l.n, l.printed); return Object.assign(row(l), {deck: l.deck, n: l.n, to: l.to || 0, printed: !!l.printed, form: l.form, opens: r ? r.deck + ' ' + r.page : ''}); }),
    refused: refused.map(x => Object.assign(row(x), {why: x.why}))}));
}
// the bare numbers, by the place that gave them a deck, for a person to read once
console.log('\n  Bare numbers linked through their place, per section of the reading files:');
Object.entries(tally(links.filter(l => /^(bare|Slide column)/.test(l.form) && ['Reference', 'Tell apart', 'Guides'].includes(l.u.group)), l => `${l.u.group} #${l.u.where} -> ${l.deck}`))
  .forEach(([k, n]) => console.log(`  ${String(n).padStart(5)}  ${k}`));

/* ---- fact on the slide: a sample for a person to look at (a report, not a gate) ---- */
console.log('\n=== Fact on the slide (report) ===');
const cleanDir = process.env.CLEAN_DIR || [path.join(SRC, 'decks', 'clean'), '/home/user/DEENT/src/decks/clean'].find(d => fs.existsSync(d));
const have = cleanDir && ids.every(id => fs.existsSync(path.join(cleanDir, D[id].clean)));
if (!have) console.log('  NOT RUN: the clean decks are not on this machine (set CLEAN_DIR). The gate above does not need them.');
else {
  const pageText = {};
  for (const id of ids) {
    const out = child.spawnSync('pdftotext', ['-enc', 'UTF-8', path.join(cleanDir, D[id].clean), '-'], {encoding: 'utf8', maxBuffer: 1 << 26});
    pageText[id] = (out.stdout || '').split('\f');
  }
  const STOP = new Set(('the and for with that this from are was were has have had not but its their they them than then also only into onto over under more most less least each both which while where when what does did can may will would should could about after before during between within without because there here these those such other another same very much many some any all one two three four five first second third used use uses using slide slides lecture said says named name names called gives given give keyed key right wrong answer option question correct incorrect drug drugs class classes agent agents effect effects patient patients treatment treat treats skin being been made make makes take takes taken').split(' '));
  const words = s => (String(s || '').toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').match(/[a-z][a-z0-9-]{3,}|\d+(?:\.\d+)?/g) || []).map(w => w.replace(/(?:es|s)$/, '')).filter(w => !STOP.has(w) && w.length > 1);
  const sampleQ = QUESTIONS.filter(q => links.some(l => l.u.q === q) && q.options && q.options.some(o => o.correct));
  let ok = 0, thin = 0;
  const miss = [], perDeck = {};
  for (const q of sampleQ) {
    const ls = links.filter(l => l.u.q === q);
    const pages = [];
    for (const l of ls) for (let n = l.n; n <= (l.to || l.n); n++) { const r = P.resolve(l.deck, n, l.printed); if (r) pages.push(r); }
    const text = pages.map(r => pageText[r.deck][r.page - 1] || '').join('\n');
    const pw = new Set(words(text));
    const keyW = [...new Set(words(q.options.filter(o => o.correct).map(o => o.t).join(' ')))];
    const expl = [...new Set(words(q.options.filter(o => o.correct).map(o => o.why).join(' ') + ' ' + (q.teach || '')))];
    const kh = keyW.filter(w => pw.has(w)), eh = expl.filter(w => pw.has(w));
    const dk = ls[0].deck; perDeck[dk] = perDeck[dk] || {n: 0, ok: 0, thin: 0};
    perDeck[dk].n++;
    if (pw.size < 12) { thin++; perDeck[dk].thin++; continue; }                     // a picture slide: nothing to compare
    const good = (keyW.length && kh.length / keyW.length >= 0.5) || eh.length >= 5 || (expl.length && eh.length / expl.length >= 0.3);
    if (good) { ok++; perDeck[dk].ok++; }
    else miss.push({q, pages, keyW, kh, eh, expl});
  }
  // the page maps, tried one page off: the map in use should carry the answers' words more often than its neighbours
  const rate = shift => { const out = {}; for (const q of sampleQ) { const ls = links.filter(l => l.u.q === q); const dk = ls[0].deck; let t = '';
      for (const l of ls) for (let n = l.n; n <= (l.to || l.n); n++) { const r = P.resolve(l.deck, n, l.printed); if (r) t += '\n' + (pageText[r.deck][r.page - 1 + shift] || ''); }
      const pw = new Set(words(t)), keyW = [...new Set(words(q.options.filter(o => o.correct).map(o => o.t).join(' ')))], expl = [...new Set(words(q.options.filter(o => o.correct).map(o => o.why).join(' ') + ' ' + (q.teach || '')))];
      const kh = keyW.filter(w => pw.has(w)).length, eh = expl.filter(w => pw.has(w)).length;
      out[dk] = out[dk] || [0, 0]; out[dk][1]++; if ((keyW.length && kh / keyW.length >= 0.5) || eh >= 5 || (expl.length && eh / expl.length >= 0.3)) out[dk][0]++; }
    return out; };
  const r0 = rate(0), rm = rate(-1), rp = rate(1);
  const compared = sampleQ.length - thin;
  console.log(`  ${sampleQ.length} question source lines sampled (every multiple-choice question whose source line gets a link); ${thin} point to slides with almost no text (pictures, structures) and cannot be compared`);
  console.log(`  ${ok} of ${compared} (${(100 * ok / compared).toFixed(1)}%): the linked slide(s) carry at least half of the right answer's distinctive words, or five (or 30%) of the explanation's`);
  tab(ids.filter(k => perDeck[k]).map(k => [k, perDeck[k].n, perDeck[k].thin, perDeck[k].ok, perDeck[k].n - perDeck[k].thin - perDeck[k].ok]), ['deck', 'questions', 'picture slides', 'match', 'to look at']);
  console.log('\n  The same count with every linked page moved by one (the map in use should be the highest in each row):');
  tab(ids.filter(k => r0[k]).map(k => [k, r0[k][1], rm[k][0], r0[k][0], rp[k][0], r0[k][0] > rm[k][0] && r0[k][0] > rp[k][0] ? 'yes' : 'NO: look at this deck\'s map']), ['deck', 'questions', 'one page lower', 'the map in use', 'one page higher', 'map in use is best']);
  console.log(`\n  To look at (${miss.length}): the words of the answer and explanation are not on the linked slide. The usual reasons: the fact was said in lecture (the source line also gives a transcript place), the slide shows it as a picture or a structure, or the question combines slides.`);
  (ALL ? miss : miss.slice(0, 40)).forEach(x => console.log(`    ${x.q.id}  ${[...new Set(x.pages.map(r => r.deck + ' ' + r.page))].join(', ')}  answer words on the slide ${x.kh.length}/${x.keyW.length}, explanation words ${x.eh.length}/${x.expl.length}  | ${x.q.cite}`));
  if (!ALL && miss.length > 40) console.log(`    … ${miss.length - 40} more with --all`);

  /* the bare numbers in explanations and reading sections took their deck from their place. Is
     another deck of the same professor, at the same number, a better fit for the line's words? */
  const bare = links.filter(l => /^(bare|Slide column)/.test(l.form) && !l.printed);
  let same = 0, better = 0, blank = 0;
  const odd = [];
  for (const l of bare) {
    const lw = [...new Set(words(l.u.text))];
    const hits = d => { let t = ''; for (let n = l.n; n <= (l.to || l.n); n++) { const r = P.resolve(d, n); if (r) t += '\n' + (pageText[r.deck][r.page - 1] || ''); } const pw = new Set(words(t)); return {h: lw.filter(w => pw.has(w)).length, size: pw.size}; };
    const own = hits(l.deck);
    if (own.size < 12) { blank++; continue; }
    const alts = ids.filter(d => d !== l.deck && D[d].prof === D[l.deck].prof && (l.to || l.n) <= D[d].cited).map(d => [d, hits(d).h]).sort((x, y) => y[1] - x[1]);
    if (alts.length && alts[0][1] >= own.h + 3 && own.h <= 1) { better++; odd.push({l, own: own.h, alt: alts[0]}); } else same++;
  }
  console.log(`\n  Bare numbers (${bare.length}: explanations, reading sections, Diseases): the line's own words against the linked slide and against the same number in the professor's other decks`);
  console.log(`  ${same} fit the linked deck as well as or better than any other; ${blank} point to picture slides; ${better} have at most one word on the linked slide and at least three more on another deck's slide of that number:`);
  (ALL ? odd : odd.slice(0, 30)).forEach(x => console.log(`    ${x.l.u.group} ${x.l.u.where}: ${JSON.stringify(x.l.u.text.slice(Math.max(0, x.l.s - 70), x.l.e + 10))} -> ${x.l.deck} ${x.l.n} (${x.own} words); ${x.alt[0]} ${x.l.n} has ${x.alt[1]}`));
}

console.log(`\n${fails ? 'FAIL' : 'PASS'}: ${passes} checks passed, ${fails} failed; ${links.length} links, ${refused.length} citations left as text`);
process.exit(fails ? 1 : 0);
