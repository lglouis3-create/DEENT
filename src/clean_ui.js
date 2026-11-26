/* ==========================================================================
   clean_ui.js: THE LEARNER SEES NO WORKING NOTES (course-level, 2026-11-23)
   ==========================================================================
   The student asked: "get rid of T@ codes, and any info that the user doesn't need to see that looks like Claude code
   or isn't needed". One sanitizer, for every view and for anything drawn later (Quiz feedback, the exam review, Topics,
   Diseases, Drug list, Atlas, Diagrams, Guides, Reference, Tell apart, Settings, search results):

   1. Transcript codes ("T@44702", "T@43883-@60121", "T 618-621", "T1103 73-98", lists of them) read "lecture 11/13"
      when a date stands beside them, otherwise they are left out of a citation or read "lecture".
   2. Deck file names ("Patel_Dermatitis-Therapeutics-Student.pdf") read as the deck's short name ("Dr. Patel: dermatitis").
   3. Working-note phrases that no regular rule can reach (file names of project notes, the student's name, a few process
      words) are removed or reworded.
   The words in reference.js, tell.js, guide.js, the question files and the figures are NOT changed: checks and the slide
   links read the codes and the file names from the source text. This file changes TEXT NODES ONLY, after slide_ui.js has made
   its links (it asks for a pass first, because a link is found by the deck's file name), and never attributes, scripts,
   styles, textareas or inputs. The audio narration is spoken from the source texts and is untouched.

   How it runs: a MutationObserver on document.body collects the text nodes that were added or changed; 250 ms after the
   last change they are checked once (a cheap test per node first) and the few that match are rewritten with the observer
   disconnected, so its own writes start nothing. A node is never read twice unless its text changes.
   window.CLEAN = { text(s), run(root), stats } is also used by tables_ui.js for the views it draws itself. */
(function cleanUi(){
  const HAS_DOM = typeof document !== 'undefined' && !!document.body && !!document.head && typeof MutationObserver !== 'undefined' &&
      typeof document.createTreeWalker === 'function';

  /* ---- 1. transcript codes ------------------------------------------------------------------------------------- */
  const NUM = '\\d{2,6}';
  const RNG = '(?:\\s*[–-]\\s*@?\\d+)?';
  // one code: "T@123", "T@123–@456", "T@123–456", "T 123–456", "T123"; or a continuation "@456–@789"
  const FIRST = '(?:\\bT@\\s?' + NUM + RNG + '|\\bT\\s?\\d{3,6}' + RNG + '(?:\\s+\\d{1,4}\\s*[–-]\\s*\\d{1,4})?(?![\\d/])(?!\\s*(?:mg|mL|ml|mcg|g\\b|%|days?|hours?|h\\b|min|weeks?|mm)))';
  const MORE = '(?:' + FIRST + '|@' + NUM + RNG + ')';
  const BARE = '\\d{3,6}(?:\\s*[–-]\\s*\\d+)?(?=\\s*(?:[,;.)]|$))';                                     // "665–668" after "T 683–689,"
  const LIST = FIRST + '(?:\\s*(?:[,;]|\\band\\b|,\\s*and\\b)\\s*(?:' + MORE + '|' + BARE + '))*';
  const DATE = '(\\d{1,2}\\/\\d{1,2})';
  const R_DATE_BEFORE = new RegExp(DATE + ',?\\s+' + LIST, 'g');             // "11/13 T@123"
  const R_DATE_AFTER = new RegExp(LIST + ',?\\s+' + DATE + '(?![\\d/])', 'g');   // "T@123 11/13"
  const R_LIST = new RegExp(LIST, 'g');
  const HAS_CODE = /\bT@?\s?\d{2,6}|(?:^|[\s(,;])@\d{4,6}/;
  const MARK = '\u0001';

  function codes(v){
    v = v.replace(R_DATE_BEFORE, 'lecture $1').replace(R_DATE_AFTER, 'lecture $1').replace(R_LIST, MARK);
    // a code left alone: dropped from the end of a citation, a bracket or a quotation; else the word "lecture"
    v = v.replace(/\s*\(\s*\u0001\s*\)/g, '')                                  // "(T@1)"
         .replace(/[;,]?\s*\u0001(?=\s*\))/g, '')                               // "(..., T@1)"
         .replace(/\s*[;,]\s*\u0001(?=\s*(?:[.;:!?]|$))/g, '')                  // "...; T@1." / end of the node
         .replace(/\b(lectures?|audio|recording|transcript)\b(\s*[;,(:]?\s*)\u0001/gi, '$1')   // "lecture T@1"
         .replace(/\u0001(?=\s*\b(?:lectures?|audio|recording)\b)/gi, '')
         .replace(/\u0001/g, 'lecture');
    // tidy: repeated words from a date and a code that both named the lecture
    v = v.replace(/\b(lectures?)\s+lecture\b/gi, '$1')
         .replace(/\blecture(?:\s*[;,]\s*|\s+and\s+)lecture\b(?!\s+\d)/gi, 'lecture')
         .replace(/(\blecture \d{1,2}\/\d{1,2})(?:\s*(?:[;,]|and)\s*\1)+/g, '$1')
         .replace(/\blecture\s+lecture\b/gi, 'lecture')
         .replace(/\blecture\s*\((?:recording ends|end of recording)\)/gi, 'lecture')
         .replace(/,\s*lecture\s*(?=,)/g, '')
         .replace(/\(\s*\)/g, '')
         .replace(/\s+([;,.)])/g, '$1').replace(/\(\s+/g, '(')
         .replace(/;\s*;/g, ';');
    return v;
  }

  /* ---- 2. deck file names -------------------------------------------------------------------------------------- */
  const DECK = (typeof window !== 'undefined' && window.CLEAN_DECK_NAMES) || [];
  const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const DECK_RE = new RegExp('(^|[^\\w-])(' + DECK.map(d => esc(d[0])).join('|') + ')(?:\\.(?:pdf|docx))?(?![\\w-])', 'gi');
  const DECK_MAP = {}; DECK.forEach(d => { DECK_MAP[d[0].toLowerCase()] = d[1]; });
  // any other "Name.pdf" / "Name.docx" that reaches the screen: the name without its extension, underscores as spaces
  const ANY_FILE = /(^|[^\w-])([A-Za-z0-9][\w.-]*?)\.(?:pdf|docx)\b/g;

  function files(v){
    v = v.replace(DECK_RE, (m, pre, k) => DECK_MAP[k.toLowerCase()] ? pre + DECK_MAP[k.toLowerCase()] : m);
    v = v.replace(ANY_FILE, (m, pre, k) => pre + k.replace(/[_-]+/g, ' ').replace(/\s+(clean|slides|handout|doc|mc)$/i, '').trim());
    // "Dr. Smith's Dr. Smith: eye" -> "Dr. Smith: eye"
    v = v.replace(/\b(Dr\. \w+)[’']s\s+(?=\1: )/g, '').replace(/\b(Dr\. \w+: [^()]*?)\s+\(\s*\1\s*\)/g, '$1');
    return v;
  }

  /* ---- 3. working notes ---------------------------------------------------------------------------------------- */
  const NOTES = [
    // pointers to project files
    [/[,;]?\s*\(?\s*\b(?:held|kept|recorded|listed|noted)(?: in)?,?\s*(?:reviews\/)?(?:OPEN_QUESTIONS|STYLE)\.md\s*\)?/g, ''],
    [/\s*\((?:reviews\/)?(?:OPEN_QUESTIONS|STYLE)\.md[^)]*\)/g, ''],
    [/[,;]?\s*(?:see |in )?(?:reviews\/)?(?:OPEN_QUESTIONS|STYLE|README|NOTES|COVERAGE|LOG|CHANGELOG)\.md\b/g, ''],
    [/\b(?:reviews|src)\/[\w./-]+/g, ''],
    // internal section ids shown as a source label
    [/\bReference ref-ey-gl\b/g, 'Reference: glaucoma drugs'],
    [/\bReference ref-ey-ac\b/g, 'Reference: allergic conjunctivitis drugs'],
    [/\bReference ref-ey-de\b/g, 'Reference: dry eye drugs'],
    [/\b(?:ref-[a-z]{1,4}-[a-z0-9-]+|tell-[a-z]{2}-[a-z0-9-]+|gobj-[a-z0-9-]+|dzcases-[a-z0-9-]+)\b/g, ''],
    // the student's own name
    [/(St\. )?\bLouis[’']s\b/g, (m, st) => st ? m : 'the annotated slide’s'],
    [/(St\. )?\bLouis\b/g, (m, st) => st ? m : 'the annotated slide'],
    // the author
    [/\bClaude[’']s prediction from the professors[’'] stated emphasis, not an official list\./g, 'A prediction from the professors’ stated emphasis, not an official list.'],
    [/\bClaude[’']s\b/g, 'The site’s'],
    [/\bClaude\b/g, 'This site']
  ];
  function notes(v){
    for (let i = 0; i < NOTES.length; i++) v = v.replace(NOTES[i][0], NOTES[i][1]);
    return v.replace(/\(\s*\)/g, '').replace(/\(\s*[;,]\s*/g, '(').replace(/\s+([;,.)])/g, '$1');
  }

  const TEST = /T@?\s?\d{2,6}|(?:^|[\s(,;])@\d{4,6}|\.(?:pdf|docx)\b|\bLouis\b|\bClaude\b|OPEN_QUESTIONS|STYLE\.md|\b(?:reviews|src)\/\w|\b(?:ref-[a-z]{1,4}-|tell-[a-z]{2}-|gobj-|dzcases-)/;
  function text(s, noFiles){
    if (!TEST.test(s)) return s;
    let v = s;
    if (HAS_CODE.test(v)) v = codes(v);
    if (!noFiles && /\.(?:pdf|docx)\b/i.test(v)) v = files(v);
    v = notes(v);
    return v;
  }

  if (typeof module !== 'undefined' && module.exports) module.exports = {text, codes, files, notes};   // the unit test reads these
  if (!HAS_DOM) return;

  /* ---- the observer -------------------------------------------------------------------------------------------- */
  const SKIP_TAG = /^(SCRIPT|STYLE|TEXTAREA|INPUT|OPTION|NOSCRIPT)$/;
  const stats = {runs: 0, nodes: 0, changed: 0, ms: 0};
  const pending = new Set();
  const done = new WeakMap();          // text node -> the text it had when it was last cleaned
  let timer = 0, mo = null;

  function eligible(n){
    const p = n.parentNode;
    return !!p && !SKIP_TAG.test(p.nodeName) && !(p.isContentEditable);
  }
  function collect(node){
    if (node.nodeType === 3) { if (eligible(node)) pending.add(node); return; }
    if (node.nodeType !== 1 || SKIP_TAG.test(node.nodeName)) return;
    const w = document.createTreeWalker(node, 4, null); let n;
    while ((n = w.nextNode())) if (n.nodeValue.length > 3 && eligible(n)) pending.add(n);
  }
  function process(){
    timer = 0;
    const t0 = performance.now();
    // a slide link is found by the deck's file name: have the links made first
    try { if (typeof SLIDE_UI !== 'undefined' && SLIDE_UI && typeof SLIDE_UI.relink === 'function') SLIDE_UI.relink(); } catch (e) { /* the links are made by their own pass */ }
    if (mo) { take(mo.takeRecords()); mo.disconnect(); }     // the nodes the links just made are read too
    try {
      pending.forEach(n => {
        stats.nodes++;
        if (!n.isConnected) return;
        const v = n.nodeValue;
        if (done.get(n) === v) return;
        let r = v;
        try { r = text(v); } catch (e) { r = v; }
        if (r !== v) { n.nodeValue = r; stats.changed++; }
        done.set(n, n.nodeValue);
      });
      pending.clear();
      stats.runs++;
    } catch (e) { console.error('Clean-up of the page text was skipped.', e); pending.clear(); }
    finally {
      if (mo) { mo.takeRecords(); mo.observe(document.body, OBS); }
      stats.ms += performance.now() - t0;
    }
  }
  const OBS = {childList: true, subtree: true, characterData: true};
  function soon(){ if (!timer) timer = setTimeout(process, 250); }
  function run(root){          // codes and notes of a subtree now (used by tables_ui.js for the views it draws); file names wait for the slide links
    const list = [];
    const w = document.createTreeWalker(root || document.body, 4, null); let n;
    while ((n = w.nextNode())) if (eligible(n) && TEST.test(n.nodeValue)) list.push(n);
    list.forEach(t => { const v = text(t.nodeValue, true); if (v !== t.nodeValue) t.nodeValue = v; });
  }

  /* ---- what the learner has no use for, hidden: the build stamp and the list of changes ----------------------- */
  const css = document.createElement('style'); css.id = 'cleanuicss';
  css.textContent = 'p.stamp{display:none!important}';
  document.head.appendChild(css);
  const hideBuild = () => {
    document.querySelectorAll('p.sub').forEach(p => { if (/^\s*Build\s/.test(p.textContent) && !p.hasAttribute('data-clean')) { p.setAttribute('data-clean', '1'); p.style.display = 'none'; } });
  };

  /* "What's new" stays; the learner can switch it off (Louis, 2026-11-24: "with the user's option to hide it if needed").
     "Got it" hides it until the next update (core); this adds a permanent switch on the card and a checkbox in Settings. */
  const NEWS_OFF = () => (typeof NS === 'string' ? NS : 'drill') + ':newsOff';
  const newsOff = () => { try { return store.get(NEWS_OFF()) === '1'; } catch (e) { return false; } };
  const newsSet = off => { try { store.set(NEWS_OFF(), off ? '1' : '0'); } catch (e) { /* kept for this visit only */ } };
  function newsOption(){
    const card = document.getElementById('news');
    if (card) {
      if (newsOff()) { card.remove(); }
      else if (!document.getElementById('newsoff')) {
        const row = card.querySelector('.row:last-child') || card;
        const b = document.createElement('button'); b.className = 'btn ghost'; b.id = 'newsoff'; b.type = 'button'; b.textContent = 'Hide What\u2019s new';
        b.onclick = () => { newsSet(true); card.remove(); };
        row.appendChild(b);
      }
    }
    const h = document.getElementById('changelog');
    if (h && !document.getElementById('newson')) {
      const lab = document.createElement('label'); lab.id = 'newson'; lab.className = 'row'; lab.style.cssText = 'gap:8px;align-items:center;margin:0 0 10px;min-height:44px';
      const cb = document.createElement('input'); cb.type = 'checkbox'; cb.checked = !newsOff();
      cb.onchange = () => newsSet(!cb.checked);
      lab.appendChild(cb); lab.appendChild(document.createTextNode(' Show What\u2019s new on the Topics tab'));
      h.parentNode.insertBefore(lab, h);
    }
  }

  function take(recs){
    for (let i = 0; i < recs.length; i++) {
      const r = recs[i];
      { const el = r.target && (r.target.nodeType === 1 ? r.target : r.target.parentElement); if (el && el.closest && el.closest('.clock')) continue; }   // the practice-exam clock ticks every second and holds no code or file name
      if (r.type === 'characterData') { if (eligible(r.target)) pending.add(r.target); }
      else for (let j = 0; j < r.addedNodes.length; j++) collect(r.addedNodes[j]);
    }
  }
  mo = new MutationObserver(recs => { take(recs); if (pending.size) soon(); hideBuild(); newsOption(); });
  mo.observe(document.body, OBS);
  collect(document.body); hideBuild(); newsOption(); soon();
  window.CLEAN = {text, run, stats, codes, files, notes};
})();
