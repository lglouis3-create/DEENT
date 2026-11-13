/* slide_check.js: the slide links, checked on the source files (no browser).
 *
 *     node slide_check.js            the gate: PASS / FAIL lines, then the counts and reports
 *     node slide_check.js --all      also every link and every citation left as text
 *     CLEAN_DIR=/path                where the clean decks are, for the fact-on-slide sample
 *                                    (default: src/decks/clean/, else the main checkout's)
 *
 * It runs slide_ui.js's own parser (the file is loaded as the page loads it; with no
 * DOM it hands back the parser alone) over every text that cites a slide: each
 * question's source line and explanations, reference.js, tell.js, guide.js, the
 * Diseases data, the Drug list, the Atlas, the walkthrough texts and the figure
 * captions, each with what its place declares, as slide_ui.js does on the page
 * (slide_test.js then reads the page itself).
 *
 * Fails when: a table of slide_data.js names a deck that does not exist; a section of
 * the three reading files has no row in SLIDES.sections; a page of a deck has no
 * image in deck/; a link's target image is missing; a cited number falls outside
 * its deck; a question's source line names no deck the parser reads; a transcript
 * reference is linked.
 * Reports (not gates): links per deck and per form, the citations left as text and
 * why, and the fact-on-slide sample: for question citations, the distinctive words
 * of the right answer and the explanation looked for in the text of the linked
 * clean pages (pdftotext); the mismatches are listed for a person to look at.
 */
const fs = require('fs'), path = require('path'), vm = require('vm'), child = require('child_process');
const SRC = __dirname, ROOT = path.join(SRC, '..');
const ALL = process.argv.includes('--all');
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
check(JSON.stringify(tables.names) === JSON.stringify(S.names) && JSON.stringify(tables.sections) === JSON.stringify(S.sections),
  'slide_data.js carries slide_tables.json as it stands (python3 slide_map.py --tables after an edit)');
const lectures = vm.runInContext('COURSE.lectures', sb);
const noDeck = lectures.filter(l => !ids.some(id => D[id].files.includes(l.deck)));
check(!noDeck.length && ids.length === lectures.length, `every deck of course.js \`lectures\` (${lectures.length}) is a deck of slide_data.js (${ids.length})`, noDeck.map(l => l.deck).join(', '));
const profBad = lectures.filter(l => { const id = ids.find(i => D[i].files.includes(l.deck)); return id && (D[id].prof !== l.prof || D[id].exam !== l.exam); });
check(!profBad.length, 'each deck carries the professor and exam course.js gives it', profBad.map(l => l.deck).join(', '));
const badName = (S.names || []).filter(r => r[1] !== 'sun?' && !D[r[1]]);
const badSec = (S.sections || []).filter(r => (Array.isArray(r[1]) ? r[1] : r[1] === null ? [] : [r[1]]).some(d => !D[d]) || (r[3] && !D[r[3]]));
check(!badName.length && !badSec.length, `the names (${S.names.length}) and sections (${S.sections.length}) tables name only decks that exist`, badName.concat(badSec).map(r => r[0]).join(', '));
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
  const stack = [], tabs = [];            // open elements {tag, id, col}; open tables {heads, inHead}
  let buf = '', skips = [], headId = '', skipDepth = 0, skipStart = 0;
  const flush = () => {
    const text = buf, sk = skips; buf = ''; skips = [];
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
    units.push({group, where, text, ctx, skip: sk, rule: rule ? rule.rule : ''});
  };
  const re = /<!--[\s\S]*?-->|<(\/?)([a-zA-Z][a-zA-Z0-9]*)((?:"[^"]*"|'[^']*'|[^'">])*)>|[^<]+/g;
  let m;
  while ((m = re.exec(html))) {
    if (m[0].startsWith('<!--')) continue;
    if (m[2] === undefined) { buf += decode(m[0]); continue; }
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
      if (!VOID.has(tag) && !/\/$/.test(attrs)) stack.push({tag, id, col: c});
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

/* questions: the source line, then what the page shows with it after the answer; the place is
   the deck the source line names first */
const ctxOfQ = {};
for (const q of QUESTIONS) {
  const ctx = P.questionCtx(q.cite || '');
  ctxOfQ[q.id] = ctx;
  add('Question source line', q.id, q.cite, ctx, {q});
  (q.options || []).forEach((o, i) => add('Question explanation', q.id + ' option ' + (i + 1), o.why, ctx));
  for (const k of ['teach', 'note', 'why']) add('Question explanation', q.id + ' ' + k, q[k], ctx);
  (q.pairs || []).forEach((p, i) => add('Question explanation', q.id + ' pair ' + (i + 1), p.why, ctx));
}
const qNoDeck = QUESTIONS.filter(q => !ctxOfQ[q.id].decks.length);
check(!qNoDeck.length, `every question's source line names a deck the parser reads (${QUESTIONS.length} questions)`, qNoDeck.slice(0, 10).map(q => q.id + ': ' + q.cite).join(' | '));
const lecOf = q => { const f = lectures.find(l => (q.cite || '').includes(l.deck)); return f ? ids.find(i => D[i].files.includes(f.deck)) : null; };
const qOther = QUESTIONS.filter(q => ctxOfQ[q.id].decks.length && lecOf(q) && ctxOfQ[q.id].decks[0] !== lecOf(q));
check(!qOther.length, 'the deck the parser takes for a question is the deck the engine files it under', qOther.slice(0, 8).map(q => q.id).join(', '));
const qProf = QUESTIONS.filter(q => ctxOfQ[q.id].decks.length && D[ctxOfQ[q.id].decks[0]].prof !== q.prof);
check(!qProf.length, 'that deck is a deck of the question\'s own professor', qProf.slice(0, 8).map(q => q.id + ' (' + q.prof + ', ' + ctxOfQ[q.id].decks[0] + ')').join(', '));

/* Diseases: the place is the nearest source line, as dz_ui.js lays the card out; inside a
   professor's block that professor; the practice patients take the card's row */
if (DZ) {
  const named = t => P.decksNamed(t || '');
  const PROFS = {sm: 'Smith', sk: 'Sikazwe', pa: 'Patel'};
  const strings = v => typeof v === 'string' ? [v] : Array.isArray(v) ? v.flatMap(strings) : v && typeof v === 'object' ? Object.values(v).flatMap(strings) : [];
  for (const c of DZ.cards) {
    const w = 'card ' + c.id;
    add('Diseases', w + ' lectures', c.lectures, []);
    (c.short || []).forEach(t => add('Diseases', w + ' short', t, []));
    (c.steps || []).forEach((s, i) => {
      const stepSrc = [s.src].concat((s.blocks || []).filter(b => b.k === 'map').map(b => b.src)).filter(Boolean);
      const sd = named(stepSrc.join('; '));
      stepSrc.forEach(t => add('Diseases', w + ' step ' + (i + 1) + ' source', t, sd));
      add('Diseases', w + ' step ' + (i + 1), s.title, sd); add('Diseases', w + ' step ' + (i + 1), s.q, sd);
      (s.blocks || []).forEach(b => {
        const own = b.k === 'prof' && b.src ? named(b.src) : [];
        const ctx = {decks: own.length ? own : sd, prof: b.k === 'prof' ? PROFS[b.p] || null : null};
        if (b.k === 'prof' && b.src) add('Diseases', w + ' step ' + (i + 1) + ' source', b.src, ctx);
        if (b.k === 'grades') (b.rows || []).forEach(r => { const rd = named(r[2]); add('Diseases', w + ' step ' + (i + 1), r[0], sd); add('Diseases', w + ' step ' + (i + 1), r[1], sd); add('Diseases', w + ' step ' + (i + 1) + ' source', r[2], rd.length ? rd : sd); });
        else strings(Object.assign({}, b, {src: undefined, k: undefined, p: undefined, id: undefined, jump: undefined, drugs: undefined})).forEach(t => add('Diseases', w + ' step ' + (i + 1), t, ctx));
      });
    });
    const pr = P.sectionDeck('dzcases-' + c.id), pd = pr ? pr.decks : [];
    (c.patients || []).forEach(p => [p.t, p.q, p.w].concat(Object.values(p.x || {})).forEach(t => add('Diseases', w + ' patient', t, pd)));
    (c.numbers || []).forEach(r => { const d = named(r[2]); add('Diseases', w + ' number', r[0], d); add('Diseases', w + ' number', r[1], d); add('Diseases', w + ' number source', r[2], d); });
  }
  for (const [k, d] of Object.entries(DZ.drugs)) {
    const w = 'drug ' + k;
    for (const p of ['sm', 'sk']) if (d[p]) { const ctx = {decks: named(d[p].src), prof: PROFS[p]}; add('Diseases', w + ' ' + p, d[p].text, ctx); add('Diseases', w + ' ' + p + ' source', d[p].src, ctx); }
    (d.pa || []).forEach(r => { const ctx = {decks: named(r.src), prof: 'Patel'}; add('Diseases', w + ' use', r.role, ctx); add('Diseases', w + ' use', r.how, ctx); add('Diseases', w + ' use source', r.src, ctx); });
    const cd = named(d.counselSrc); (d.counsel || []).forEach(t => add('Diseases', w + ' counsel', t, cd)); add('Diseases', w + ' counsel source', d.counselSrc, cd);
    (d.avoid || []).forEach(t => add('Diseases', w + ' avoid', t, []));
  }
  for (const [k, t] of Object.entries(DZ.terms)) { const d = named(t[2]); add('Diseases', 'term ' + k, t[1], d); add('Diseases', 'term ' + k + ' source', 'Source: ' + (t[2] || ''), d); }
  for (const t of DZ.tell || []) { const d = named(t.src); strings([t.title, t.path, t.rows]).forEach(x => add('Diseases', 'tell ' + t.id, x, d)); add('Diseases', 'tell ' + t.id + ' source', t.src, d); }
  for (const p of DZ.pairs || []) { strings([p.title, p.a, p.b, p.same]).forEach(x => add('Diseases', 'pair', x, [])); (p.profs || []).forEach(x => add('Diseases', 'pair', x[1], {decks: [], prof: PROFS[x[0]] || null})); }
  for (const r of DZ.rules || []) { const d = named(r.src); strings([r.title, r.rows, r.items]).forEach(x => add('Diseases', 'rule', x, d)); add('Diseases', 'rule source', r.src, d); }
  for (const p of DZ.photos || []) add('Diseases', 'photo ' + p.id + ' source', p.src, named(p.src));
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
  const r = P.scan(u.text, u.ctx);
  const inSkip = l => u.skip.some(([s, e]) => l.s < e && s < l.e);
  for (const l of r.links) { if (inSkip(l)) refused.push({u, raw: u.text.slice(l.s, l.e), why: 'inside a link, a button or a folder heading', s: l.s, e: l.e}); else links.push(Object.assign({u}, l)); }
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
}

console.log(`\n${fails ? 'FAIL' : 'PASS'}: ${passes} checks passed, ${fails} failed; ${links.length} links, ${refused.length} citations left as text`);
process.exit(fails ? 1 : 0);
