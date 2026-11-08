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
}`;
  if (!document.getElementById('tablesuicss')) {
    const s = document.createElement('style'); s.id = 'tablesuicss'; s.textContent = CSS; document.head.appendChild(s);
  }

  function cards(root){
    if (!root || !root.querySelectorAll) return;
    root.querySelectorAll('table.reftab').forEach(t => {
      const heads = [...t.querySelectorAll('thead th')];
      if (heads.length < 4 || t.querySelector('[rowspan]:not([rowspan="1"]),[colspan]:not([colspan="1"])')) return;
      const labels = heads.map(h => (h.dataset && h.dataset.short) || h.textContent.trim());
      t.querySelectorAll('tbody tr').forEach(tr => {
        [...tr.children].forEach((td, i) => {
          if (labels[i]) td.setAttribute('data-label', labels[i]);
          if (/^[—–-]$/.test(td.textContent.trim())) td.classList.add('tdash');
        });
      });
      t.classList.add('cards');
    });
  }
  const after = (og, id) => function () {
    const r = og.apply(this, arguments);
    try { cards(document.getElementById(id)); }
    catch (e) { console.error('Table cards could not be set up; the tables are shown as tables.', e); }
    return r;
  };
  if (typeof renderRef === 'function') renderRef = after(renderRef, 'v-ref');
  if (typeof renderTell === 'function') renderTell = after(renderTell, 'v-tell');
})();
