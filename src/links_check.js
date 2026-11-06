/* ==========================================================================
   READING LINKS CHECK (links.js)
   ==========================================================================
   Runs the built page's engine in node (no browser) and checks that every
   reading link in links.js lands on a section that exists:

   - its view is a tab the page has, and its anchor is an id written into that
     tab's source (the hand-written ids in guide.js, tell.js and reference.js;
     dg-<key> for a drawn figure; at-<board> for an Atlas board), so the jump
     scrolls to it rather than to the top of the tab;
   - every concept named in links.js belongs to at least one question (a
     misspelt concept links nothing, so it is listed, not failed).

   It then reports, per lecture (by the deck the cite names), how many
   questions resolve to a reading section, and lists the concepts that do not.
   Exit 1 only on a link whose target does not exist.
   ========================================================================== */
const {PAGE, check, notRun, finish, engine} = require('./check_lib');
if(!PAGE.exists()) notRun('links_check.js', `no built page at ${PAGE.PAGE} (run python3 build.py first)`);

let X;
try {
  X = engine(`{QUESTIONS, COURSE, lecOf, linksFor, VIEWS,
    READ_LINKS: typeof READ_LINKS !== 'undefined' ? READ_LINKS : {},
    GUIDE: typeof GUIDE_HTML !== 'undefined' ? GUIDE_HTML : '',
    TELL: typeof TELL_HTML !== 'undefined' ? TELL_HTML : '',
    REF: typeof REFERENCE_HTML !== 'undefined' ? REFERENCE_HTML : '',
    DIAGRAMS: typeof DIAGRAMS !== 'undefined' ? DIAGRAMS : [],
    DIA: typeof DIA !== 'undefined' ? DIA : {},
    ATLAS: typeof ATLAS !== 'undefined' ? ATLAS : null}`);
} catch (e) {
  console.log(`FAIL: links_check.js: the page script threw at load: ${e.message}`);
  process.exit(1);
}
const {QUESTIONS, READ_LINKS: L} = X;

/* the anchors each reading tab carries */
const ids = html => new Set([...String(html).matchAll(/\bid="([^"]+)"/g)].map(m => m[1]));
const anchors = {
  guide: ids(X.GUIDE),
  tell:  ids(X.TELL),
  ref:   ids(X.REF),
  diagrams: new Set(X.DIAGRAMS.flatMap(([, keys]) => keys.filter(k => X.DIA[k]).map(k => 'dg-' + k))),
  atlas: new Set(X.ATLAS && X.ATLAS.boards ? X.ATLAS.boards.map(b => 'at-' + b.id) : []),
};
console.log('=== Sections the reading tabs carry ===');
for(const [v, s] of Object.entries(anchors)) console.log(`  ${v.padEnd(9)} ${s.size} anchor(s)`);

/* every link in the table */
const all = [].concat(
  (L.byKey || []).flatMap(([re, ls]) => ls.map(l => [l, 'byKey ' + re.source.slice(0, 60)])),
  Object.entries(L.bySub || {}).map(([k, l]) => [l, 'bySub ' + k]),
  Object.entries(L.byLecture || {}).map(([k, l]) => [l, 'byLecture ' + k]));
console.log(`\n=== ${all.length} link(s) in links.js ===`);
const broken = all.filter(([l]) => !Array.isArray(l) || l.length < 3 || !X.VIEWS.includes(l[0]) ||
                                    !anchors[l[0]] || !anchors[l[0]].has(l[1]));
check(all.length > 0, `links.js holds ${all.length} link(s)`);
check(!broken.length, `every link names an existing tab and an anchor in it`,
      broken.slice(0, 8).map(([l, where]) => `${JSON.stringify(l)} (${where})`).join('; '));
const targets = new Set(all.map(([l]) => l[0] + ':' + l[1]));
const labelsPerTarget = {};
all.forEach(([l]) => (labelsPerTarget[l[0] + ':' + l[1]] = labelsPerTarget[l[0] + ':' + l[1]] || new Set()).add(l[2]));
const twoLabels = Object.entries(labelsPerTarget).filter(([, s]) => s.size > 1);
check(!twoLabels.length, `each target has one label (the review plan groups by label)`,
      twoLabels.map(([t, s]) => `${t}: ${[...s].join(' | ')}`).join('; '));
console.log(`  ${targets.size} distinct section(s) linked`);

/* concepts named in links.js that no question carries */
const concepts = new Set(QUESTIONS.map(q => q.concept));
const named = (L.byKey || []).flatMap(([re]) =>
  re.source.split('(?: |$)').join('').replace(/^\^\(\?:/, '').replace(/\)$/, '').split('|')
    .map(p => p.replace(/ \\S\* \?.*$/, '').replace(/\\(.)/g, '$1')));
const unknown = named.filter(c => !concepts.has(c));
console.log(`  ${named.length} concept name(s) listed; ${unknown.length ? 'not carried by any question: ' + unknown.join(', ') : 'each carried by a question'}`);

/* coverage per lecture */
console.log('\n=== Questions that resolve to a reading section, by lecture ===');
const byLec = {};
for(const q of QUESTIONS){
  const lec = X.lecOf(q), id = lec ? lec.id : '(none)';
  const B = byLec[id] = byLec[id] || {n: 0, linked: 0, unlinked: {}};
  B.n++;
  if(X.linksFor(q).length) B.linked++;
  else (B.unlinked[q.topic + '/' + q.sub] = B.unlinked[q.topic + '/' + q.sub] || []).push(q.concept);
}
let tl = 0;
for(const [id, B] of Object.entries(byLec)){
  tl += B.linked;
  console.log(`  ${id.padEnd(6)} ${String(B.linked).padStart(3)} of ${String(B.n).padStart(3)} linked`);
}
console.log(`  total  ${tl} of ${QUESTIONS.length} linked`);
console.log('\n=== Unlinked concepts (no tell/ref/guide section states the keyed fact) ===');
for(const [id, B] of Object.entries(byLec)){
  for(const [sub, cs] of Object.entries(B.unlinked)) console.log(`  ${id.padEnd(6)} ${sub.padEnd(16)} ${[...new Set(cs)].join(', ')}`);
}
console.log('');
finish('links_check.js');
