/* ==========================================================================
   REFERENCE AND TELL APART TABLES: LINES, NOTES AND PHONE CARDS
   (course-level presentation, 2026-11-08; Louis: "review the tables and make
   sure the information is being organized and presented properly")
   ==========================================================================
   1. Inside a cell of reference.js or tell.js, a long entry is split into
      short lines: <span class="ln">, with an optional label <b class="lb">,
      a step of a scheme <span class="ln chain"> ("→ next product"), and a
      lecturer's aside as a muted note <span class="nt">. This file gives
      those classes their look; the words are the tables' own.
   2. On a phone (up to 700 px wide) a table of four or more columns is shown
      as one card per row: the first cell is the card's title and every other
      cell is shown under its column heading (from the table's own <th>, or
      the heading's data-short when it has one). So nothing needs sideways
      scrolling. A table with a rowspan or colspan, or fewer than four
      columns, stays a table; wider screens keep every table as a table.
      A cell that holds only "—" (nothing on the slide) is left out of the
      card; the table on a wide screen still shows it.
   The tables' rows, ids and order are not changed (links.js and the guides
   link to them; druglist_data.js reads the ref-targets rows from the source
   text, not from the page). Nothing here reads or writes any storage. */
(function tablesUi(){
  if (typeof document === 'undefined' || !document.createElement || !document.head) return;

  const CSS = `
.reftab .ln{display:block}
.reftab .ln+.ln{margin-top:3px}
.reftab .ln.chain{padding-left:1.1em}
.reftab .lb{font-weight:600}
.reftab .nt{display:block;font-size:12px;color:var(--text-dim);margin-top:3px}
@media (max-width:700px){
  table.reftab.cards{border:0;background:none;font-size:14px}
  table.reftab.cards thead{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
  table.reftab.cards,table.reftab.cards tbody{display:block;width:100%}
  table.reftab.cards tr{display:block;background:var(--paper);border:1px solid var(--line);border-radius:var(--r,10px);
    padding:4px 12px 6px;margin:0 0 10px}
  table.reftab.cards td{display:block;border:0;padding:6px 0;overflow-wrap:anywhere}
  table.reftab.cards td+td{border-top:1px solid var(--line-soft,var(--line))}
  table.reftab.cards td:first-child{font-size:15px;padding-top:8px}
  table.reftab.cards td[data-label]:not(:first-child)::before{content:attr(data-label);display:block;font-size:12px;
    font-weight:600;color:var(--text-dim);margin-bottom:2px}
  table.reftab.cards td.tdash{display:none}
}
/* Cards at every width for a table whose cells hold sentences (Louis, 2026-11-22: Reference and Tell apart were "just a
   bunch of paragraphs in table format which makes it hard to really focus"; "always find a better layout"). One card per
   row: the first cell is the card's heading, every other cell is a tile under its column heading, the tiles side by side
   where the window is wide enough, each column with its own colour; the lines of a cell (.ln) are a bullet list; the
   source column is one small line at the foot. The rows, cells and words are the table's own. */
table.reftab.cardsx{border:0;background:none;font-size:14.5px;display:block;width:100%}
table.reftab.cardsx thead{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
table.reftab.cardsx tbody{display:block;width:100%}
table.reftab.cardsx tr{display:grid;grid-template-columns:repeat(var(--tcn,3),minmax(0,1fr));gap:8px;background:var(--paper);
  border:1px solid var(--line);border-radius:12px;padding:10px 12px 10px;margin:0 0 12px}
table.reftab.cardsx td{display:block;border:0;padding:8px 10px;overflow-wrap:anywhere;line-height:1.5;border-radius:8px;
  background:var(--surface,#f4f6f9);border-left:4px solid var(--tc,#8a97a8)}
table.reftab.cardsx td:first-child{grid-column:1/-1;background:none;border-left:0;padding:2px 0 4px;font-size:16px;font-weight:600;
  border-bottom:2px solid var(--accent,#2F5FA8);border-radius:0}
table.reftab.cardsx td[data-label]:not(:first-child)::before{content:attr(data-label);display:block;font-size:11.5px;font-weight:700;
  letter-spacing:.04em;text-transform:uppercase;color:var(--tc,#5A6878);margin-bottom:4px}
table.reftab.cardsx td.tc2{--tc:#2f6fb0}table.reftab.cardsx td.tc3{--tc:#b45309}table.reftab.cardsx td.tc4{--tc:#2e7d5b}
table.reftab.cardsx td.tc5{--tc:#7c4dbd}table.reftab.cardsx td.tc6{--tc:#b0344d}table.reftab.cardsx td.tc7{--tc:#0f7c8a}
table.reftab.cardsx td.ttrap{--tc:#b0344d;background:#fbeff1}
table.reftab.cardsx td.tsrc{grid-column:1/-1;background:none;border-left:0;padding:0 0 0 2px;font-size:12.5px;color:var(--text-dim)}
table.reftab.cardsx td.tsrc::before{display:inline!important;text-transform:none!important;letter-spacing:0!important;font-weight:600!important;
  content:attr(data-label) ": "!important;color:var(--text-dim)!important}
table.reftab.cardsx td.tdash{display:none}
table.reftab.cardsx td:not(:first-child) .ln{display:list-item;list-style:disc;margin-left:1.15em}
table.reftab.cardsx td:not(:first-child) .ln+.ln{margin-top:4px}
table.reftab.cardsx td:not(:first-child) .ln.chain{list-style:none;margin-left:1.15em}
@media (max-width:900px){table.reftab.cardsx tr{grid-template-columns:repeat(min(var(--tcn,3),2),minmax(0,1fr))}}
@media (max-width:600px){table.reftab.cardsx tr{grid-template-columns:minmax(0,1fr)}}
/* the page has one (light) theme whatever the device setting, so the trap tile has no dark variant (Louis, 2026-11-23: its text was unreadable on a dark-mode device) */`;
  if (!document.getElementById('tablesuicss')) {
    const s = document.createElement('style'); s.id = 'tablesuicss'; s.textContent = CSS; document.head.appendChild(s);
  }

  /* Transcript codes are not shown in Reference and Tell apart (Louis, 2026-11-22: "for the references and tell apart
     don't forget to hide the T@ code"): "T@44702, T@45812 11/13" and "10/30 T 430–450" read "lecture 11/13" and
     "lecture 10/30". The codes stay in reference.js and tell.js, where the checks read them. */
  const TC = '\\bT@?\\s?\\d{2,6}(?:\\s*[–-]\\s*@?\\d+)?', TL = TC + '(?:\\s*[,;]\\s*' + TC + ')*';
  const R1 = new RegExp('(\\d{1,2}\\/\\d{1,2}),?\\s+' + TL, 'g'), R2 = new RegExp(TL + ',?\\s+(\\d{1,2}\\/\\d{1,2})', 'g'), R3 = new RegExp(TL, 'g');
  function hideCodes(root){
    if (!root || typeof document.createTreeWalker !== 'function') return;
    // clean_ui.js (loaded after this file) is the one sanitizer; its observer also covers these views
    if (window.CLEAN && typeof window.CLEAN.run === 'function') { window.CLEAN.run(root); return; }
    const w = document.createTreeWalker(root, 4 /* text */, null); let n; const list = [];
    while ((n = w.nextNode())) if (/\bT@?\s?\d{2,6}/.test(n.nodeValue) && !(n.parentNode && /^(SCRIPT|STYLE)$/.test(n.parentNode.nodeName))) list.push(n);
    list.forEach(t => {
      let v = t.nodeValue.replace(R1, 'lecture $1').replace(R2, 'lecture $1').replace(R3, 'lecture');
      v = v.replace(/(lecture \d{1,2}\/\d{1,2})(?:\s*[;,]\s*\1)+/g, '$1').replace(/lecture(?:\s*[;,]\s*lecture)+(?!\s*\d)/g, 'lecture');
      if (v !== t.nodeValue) t.nodeValue = v;
    });
  }
  function cards(root){
    if (!root || !root.querySelectorAll) return;
    try { hideCodes(root); } catch (e) { /* the codes stay visible */ }
    root.querySelectorAll('table.reftab').forEach(t => {
      const heads = [...t.querySelectorAll('thead th')];
      if (t.querySelector('[rowspan]:not([rowspan="1"]),[colspan]:not([colspan="1"])')) return;
      // sentences in the cells: cards at every width (2 or more columns); otherwise the phone cards of a wide table
      const wordy = heads.length >= 2 && !t.classList.contains('matchtab') &&
        [...t.querySelectorAll('tbody td')].some(td => td.textContent.trim().length > 140);
      if (!wordy && heads.length < 4) return;
      const labels = heads.map(h => (h.dataset && h.dataset.short) || h.textContent.trim());
      t.querySelectorAll('tbody tr').forEach(tr => {
        [...tr.children].forEach((td, i) => {
          if (labels[i]) td.setAttribute('data-label', labels[i]);
          if (/^[—–-]$/.test(td.textContent.trim())) td.classList.add('tdash');
          if (wordy && i > 0) {
            const last = i === tr.children.length - 1;
            if (last && /^(slides?|source|sources|cite|where)\b/i.test(labels[i] || '')) td.classList.add('tsrc');
            else if (/\btrap\b|mix-?up|mistake/i.test(labels[i] || '')) td.classList.add('ttrap');
            else td.classList.add('tc' + (2 + (i - 1) % 6));
          }
        });
      });
      if (wordy) { const n = labels.length - 1 - (t.querySelector('tbody td.tsrc') ? 1 : 0); t.style.setProperty('--tcn', String(Math.max(1, Math.min(3, n)))); }
      t.classList.add(wordy ? 'cardsx' : 'cards');
    });
  }
  window.TABLES_UI = {cards};   // the hub (hub_ui.js) lays out the long-cell tables it copies in the same way
  const after = (og, id) => function () {
    const r = og.apply(this, arguments);
    try { cards(document.getElementById(id)); }
    catch (e) { console.error('Table cards could not be set up; the tables are shown as tables.', e); }
    return r;
  };
  /* Guides too (Louis, 2026-11-23: hide the T@ codes in Guides): the same text change, no cards. */
  const hideIn = (og, id) => function () { const r = og.apply(this, arguments); try { hideCodes(document.getElementById(id)); } catch (e) { /* the codes stay visible */ } return r; };
  if (typeof renderGuide === 'function') renderGuide = hideIn(renderGuide, 'v-guide');
  if (typeof renderRef === 'function') renderRef = after(renderRef, 'v-ref');
  if (typeof renderTell === 'function') renderTell = after(renderTell, 'v-tell');
})();
