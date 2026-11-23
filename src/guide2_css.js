/* guide2_css.js: the reading components of the Guides objective sections (course-level, Louis
   2026-11-14: Dermatitis Therapeutics objective 6 was "a little confusing to look at and
   understand"; he approved numbered blocks with tables, the step-care bands and number tiles
   whose label says what the number measures). Styles only, all under ".gobj .g2-": numbered
   blocks, tables, a formula line, worked arithmetic, severity bands, an "if not resolved" box,
   number tiles, a said-in-class line, a tap-to-check poll, a muted citation, a filled button.
   The markup is in guide.js. Nothing here reads or writes progress, history or any other
   stored data. */
(function guide2Css(){
  if (typeof document === 'undefined' || !document.createElement || !document.head) return;
  const CSS = `
.gobj .g2-block{margin:26px 0 0}
.gobj .g2-block>h5{margin:0 0 12px;padding:0 0 6px;font-size:16.5px;line-height:1.3;color:var(--text);border-bottom:2px solid var(--accent,#2F5FA8)}
.gobj .g2-num{color:var(--accent,#2F5FA8);margin-right:2px}
.gobj .g2-star{color:var(--accent,#2F5FA8);font-size:.85em;font-weight:400;margin-left:4px;white-space:nowrap}
.gobj .g2-src{font-size:12px;font-weight:400;font-style:normal;color:var(--text-dim,#5A6878);letter-spacing:0;text-transform:none}
.gobj h5 .g2-src,.gobj .g2-sub .g2-src,.gobj caption .g2-src{margin-left:5px}
.gobj .g2-sub{margin:16px 0 6px;font-size:14px;font-weight:700;line-height:1.35;color:var(--text);max-width:none}
.gobj .g2-block>h5+.g2-sub,.gobj .g2-two>div>.g2-sub:first-child{margin-top:0}
.gobj .g2-p{margin:8px 0;font-size:14.5px;line-height:1.5;color:var(--text)}
.gobj .g2-two{display:grid;grid-template-columns:minmax(0,1fr);gap:4px 18px;margin:0 0 4px}
.gobj .g2-two>*{min-width:0}

.gobj .g2-table{width:100%;border-collapse:collapse;font-size:14.5px;line-height:1.45;background:var(--paper,#fff);margin:0 0 12px}
.gobj .g2-table caption{caption-side:top;text-align:left;font-weight:700;font-size:14px;color:var(--text);padding:0 0 6px}
.gobj .g2-table th,.gobj .g2-table td{border:1px solid var(--line,#D3DAE3);padding:8px 10px;text-align:left;vertical-align:top;color:var(--text)}
.gobj .g2-table thead th{background:var(--surface,#F2F4F7);font-size:12.5px;font-weight:700}
.gobj .g2-table tbody th{background:var(--surface,#F2F4F7);font-weight:600}
.gobj .g2-table .g2-n{text-align:right;white-space:nowrap;font-variant-numeric:tabular-nums;font-weight:700}
.gobj .g2-table.g2-kv tbody th{width:32%;min-width:92px}
.gobj .g2-lab{display:none}

.gobj .g2-formula{margin:0 0 12px;padding:11px 14px;background:var(--accent-bg,#EAF0F9);border-left:4px solid var(--accent,#2F5FA8);border-radius:0 8px 8px 0;font-size:16px;font-weight:700;line-height:1.4;color:var(--text);max-width:none}
.gobj .g2-formula .g2-k{display:block;margin:0 0 2px;font-size:11.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:var(--text-dim,#5A6878)}

.gobj .g2-work td{font-variant-numeric:tabular-nums;white-space:nowrap}
.gobj .g2-work tbody th{white-space:normal}
.gobj .g2-work .g2-ans{font-weight:700}

.gobj .g2-ladder{display:grid;gap:6px;margin:0 0 8px}
.gobj .g2-rung{display:grid;grid-template-columns:150px minmax(0,1fr);border:1px solid var(--line,#D3DAE3);border-radius:10px;overflow:hidden;background:var(--paper,#fff)}
.gobj .g2-sev{display:flex;align-items:center;padding:10px 12px;color:#fff;font-size:14.5px;font-weight:700;line-height:1.25;background:#5B6B7F}
.gobj .g2-rung.g2-s1 .g2-sev{background:#416DB3}
.gobj .g2-rung.g2-s2 .g2-sev{background:#2F5FA8}
.gobj .g2-rung.g2-s3 .g2-sev{background:#1D3F75}
.gobj .g2-cells{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));min-width:0}
.gobj .g2-cell{padding:10px 14px 12px;font-size:14.5px;line-height:1.45;min-width:0;border-left:1px solid var(--line,#D3DAE3)}
.gobj .g2-cell:first-child{border-left:0}
.gobj .g2-cell p{margin:0 0 5px;max-width:none}
.gobj .g2-cell ul{margin:0;padding:0 0 0 18px}
.gobj .g2-cell li{margin:0 0 4px;font-size:14.5px;line-height:1.45;max-width:none}
.gobj .g2-k{display:block;margin:0 0 4px;font-size:11.5px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--text-dim,#5A6878)}
.gobj .g2-k.g2-acute{color:#A14A00}
.gobj .g2-k.g2-maint{color:#1E6B45}
.gobj .g2-or{font-size:12px;font-weight:700;color:var(--text-dim,#5A6878)}

.gobj .g2-note{margin:8px 0 12px;padding:10px 14px;border:1px solid var(--warn,#B26B00);border-radius:10px;background:var(--warn-bg,#FDF3E2);font-size:14.5px;line-height:1.5;color:var(--text)}
.gobj .g2-note .g2-k{color:#7A4A00}
.gobj .g2-note p{margin:0;max-width:none}

.gobj .g2-tiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin:0 0 12px}
.gobj .g2-tiles.g2-wide{grid-template-columns:repeat(auto-fit,minmax(160px,1fr))}
.gobj .g2-tile{display:flex;flex-direction:column;padding:10px 12px;border:1px solid var(--line,#D3DAE3);border-radius:10px;background:var(--paper,#fff);min-width:0}
.gobj .g2-tile-label{font-size:13.5px;font-weight:600;line-height:1.35;color:var(--text)}
.gobj .g2-tile-num{margin:auto 0 0;padding-top:6px;font-size:23px;font-weight:700;line-height:1.15;color:var(--accent,#2F5FA8);font-variant-numeric:tabular-nums}
.gobj .g2-tile .g2-src{margin-top:3px}

.gobj .g2-said{margin:6px 0;padding:6px 10px;border-left:3px solid #3b62c4;background:rgba(59,98,196,.07);border-radius:0 6px 6px 0;font-size:14.5px;line-height:1.45;max-width:none}
.gobj td>.g2-said:only-child,.gobj .g2-cell>.g2-said:last-child{margin:0}
.gobj .g2-said .g2-k{display:inline;margin:0 6px 0 0;color:#2c4a94}

.gobj .g2-self{margin:8px 0;border:1px solid #3b62c4;border-radius:9px;background:var(--paper,#fff);font-size:14.5px;line-height:1.5}
.gobj .g2-self>summary{display:flex;align-items:center;gap:8px;min-height:44px;padding:8px 12px;cursor:pointer;font-weight:600;list-style:none}
.gobj .g2-self>summary::-webkit-details-marker{display:none}
.gobj .g2-self>summary .g2-tap{margin-left:auto;flex:none;font-size:12.5px;font-weight:600;color:var(--accent,#2F5FA8);border:1px solid var(--accent,#2F5FA8);border-radius:14px;padding:2px 10px}
.gobj .g2-self[open]>summary .g2-tap{display:none}
.gobj .g2-self[open]>summary{border-bottom:1px solid var(--line,#D3DAE3)}
.gobj .g2-self>p{margin:0;padding:9px 12px 10px;max-width:none}

.gobj .g2-btns{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:10px 0 0}
.gobj .g2-btns .chip{min-height:44px;cursor:pointer}
.gobj .g2-primary{min-height:44px;padding:9px 16px;border:0;border-radius:22px;background:var(--accent,#2F5FA8);color:#fff;font-size:14px;font-weight:600;cursor:pointer}
.gobj .g2-primary:hover{filter:brightness(1.08)}

@media (min-width:820px){
.gobj .g2-two{grid-template-columns:minmax(0,1fr) minmax(0,1fr);align-items:start}
}
@media (max-width:640px){
.gobj .g2-rung{grid-template-columns:minmax(0,1fr)}
.gobj .g2-sev{padding:7px 12px}
.gobj .g2-cells{grid-template-columns:minmax(0,1fr)}
.gobj .g2-cell{border-left:0;border-top:1px solid var(--line,#D3DAE3)}
.gobj .g2-cell:first-child{border-top:0}
.gobj .g2-table.g2-stack,.gobj .g2-table.g2-stack tbody,.gobj .g2-table.g2-stack tr,.gobj .g2-table.g2-stack th,.gobj .g2-table.g2-stack td{display:block;width:auto}
.gobj .g2-table.g2-stack caption{display:block}
.gobj .g2-table.g2-stack thead{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}
.gobj .g2-table.g2-stack tr{margin:0 0 8px;border:1px solid var(--line,#D3DAE3);border-radius:8px;overflow:hidden}
.gobj .g2-table.g2-stack tbody th{border:0;border-bottom:1px solid var(--line,#D3DAE3);min-width:0}
.gobj .g2-table.g2-stack td{border:0;padding:6px 10px;text-align:left;white-space:normal}
.gobj .g2-table.g2-stack td:empty{display:none}
.gobj .g2-table.g2-work.g2-stack td{display:inline-block;padding:8px 0 9px 10px;white-space:nowrap}
.gobj .g2-table.g2-stack .g2-lab{display:inline;margin-right:6px;font-size:11.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:var(--text-dim,#5A6878)}
}

.gobj{--c1:#2f5fa8;--c2:#1f7a4d;--c3:#a85d00;--c4:#6d42b8;--c5:#b23a2e;--c6:#a02c72;--cl-ink:#fff}
.gobj .g2-c1{--cl:var(--c1);--clr:47,95,168}.gobj .g2-c2{--cl:var(--c2);--clr:31,122,77}.gobj .g2-c3{--cl:var(--c3);--clr:168,93,0}
.gobj .g2-c4{--cl:var(--c4);--clr:109,66,184}.gobj .g2-c5{--cl:var(--c5);--clr:178,58,46}.gobj .g2-c6{--cl:var(--c6);--clr:160,44,114}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]) .gobj{--c1:#8fb2f0;--c2:#6fcf9b;--c3:#f0b45e;--c4:#b99af0;--c5:#f09a8f;--c6:#f08fc4;--cl-ink:#10151c}
:root:not([data-theme="light"]) .gobj .g2-c1{--clr:143,178,240}:root:not([data-theme="light"]) .gobj .g2-c2{--clr:111,207,155}:root:not([data-theme="light"]) .gobj .g2-c3{--clr:240,180,94}
:root:not([data-theme="light"]) .gobj .g2-c4{--clr:185,154,240}:root:not([data-theme="light"]) .gobj .g2-c5{--clr:240,154,143}:root:not([data-theme="light"]) .gobj .g2-c6{--clr:240,143,196}}
:root[data-theme="dark"] .gobj{--c1:#8fb2f0;--c2:#6fcf9b;--c3:#f0b45e;--c4:#b99af0;--c5:#f09a8f;--c6:#f08fc4;--cl-ink:#10151c}
:root[data-theme="dark"] .gobj .g2-c1{--clr:143,178,240}:root[data-theme="dark"] .gobj .g2-c2{--clr:111,207,155}:root[data-theme="dark"] .gobj .g2-c3{--clr:240,180,94}
:root[data-theme="dark"] .gobj .g2-c4{--clr:185,154,240}:root[data-theme="dark"] .gobj .g2-c5{--clr:240,154,143}:root[data-theme="dark"] .gobj .g2-c6{--clr:240,143,196}
.gobj .g2-capline{margin:0 0 10px;font-size:13.5px;color:var(--text-dim,#5A6878)}
.gobj .g2-clsgrid{display:grid;grid-template-columns:minmax(0,1fr);gap:12px;margin:0 0 12px}
.gobj .g2-cls{border:1px solid var(--line,#D3DAE3);border-left:6px solid var(--cl);border-radius:10px;background:rgba(var(--clr),.08);padding:10px 12px 12px;min-width:0}
.gobj .g2-cls-h{display:flex;align-items:center;flex-wrap:wrap;gap:6px 8px;margin:0 0 8px}
.gobj .g2-cls-n{flex:none;width:26px;height:26px;border-radius:50%;background:var(--cl);color:var(--cl-ink);font-size:14px;font-weight:700;display:inline-flex;align-items:center;justify-content:center}
.gobj .g2-cls-t{font-size:15.5px;font-weight:700;line-height:1.3;color:var(--text)}
.gobj .g2-cls-sfx{font-size:12.5px;font-weight:600;color:var(--text-dim,#5A6878);border:1px solid var(--line,#D3DAE3);border-radius:10px;padding:1px 8px;background:var(--paper,#fff)}
.gobj .g2-stats{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin:0 0 10px}
.gobj .g2-stat{background:var(--paper,#fff);border:1px solid var(--line,#D3DAE3);border-radius:8px;padding:6px 9px;min-width:0}
.gobj .g2-stat-k{display:block;font-size:11px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:var(--text-dim,#5A6878)}
.gobj .g2-stat-v{display:block;font-size:14.5px;font-weight:700;line-height:1.3;color:var(--text)}
.gobj .g2-drugs{list-style:none;margin:0;padding:0;display:grid;gap:6px}
.gobj .g2-drugs li{display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 8px;padding:6px 8px;background:var(--paper,#fff);border:1px solid var(--line,#D3DAE3);border-radius:8px;font-size:14.5px;line-height:1.35}
.gobj .g2-dg{font-weight:700;color:var(--text)}
.gobj .g2-str{font-size:13px;color:var(--text-dim,#5A6878);font-variant-numeric:tabular-nums}
.gobj .g2-br{font-size:13px;font-weight:600;padding:1px 8px;border-radius:10px;background:rgba(var(--clr),.16);border:1px solid rgba(var(--clr),.5);color:var(--text)}
.gobj .g2-tag{font-size:11.5px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;padding:1px 7px;border-radius:10px;background:var(--cl);color:var(--cl-ink)}
.gobj .g2-dn{flex-basis:100%;font-size:13px;line-height:1.35;color:var(--text-dim,#5A6878)}
.gobj tr[class*="g2-c"]>th{border-left:6px solid var(--cl)}
.gobj .g2-tile[class*="g2-c"]{border-top:4px solid var(--cl)}
.gobj .g2-jump{display:flex;flex-wrap:wrap;gap:6px;margin:12px 0 2px}
.gobj .g2-jump button{min-height:44px;padding:6px 14px;border:1px solid var(--line,#D3DAE3);border-radius:22px;background:var(--paper,#fff);color:var(--accent,#2F5FA8);font:inherit;font-size:13.5px;font-weight:600;cursor:pointer}
.gobj .g2-block>h5{scroll-margin-top:130px}
.gobj .g2-fold{margin:0}
.gobj .g2-fold>summary{list-style:none;cursor:pointer;min-height:44px;display:flex;align-items:center;padding:6px 14px;border:1px dashed var(--line,#D3DAE3);border-radius:10px;font-size:13.5px;font-weight:600;color:var(--accent,#2F5FA8)}
.gobj .g2-fold>summary::-webkit-details-marker{display:none}
.gobj .g2-fold[open]>summary{margin:0 0 10px}
.gobj .g2-fold[open]>summary .g2-fold-s::before{content:"Hide this section";}
.gobj .g2-fold[open]>summary .g2-fold-s{font-size:0}
.gobj .g2-fold[open]>summary .g2-fold-s::before{font-size:13.5px}
.gobj .g2-table.g2-stack tr[class*="g2-c"]{border-left:6px solid var(--cl)}
/* One sentence per line where a paragraph was long (Louis, 2026-11-23: "I don't like for exam 3 how bunch of paragraphs are made"): the words are the paragraph's own, split at the end of each sentence. */
.gobj .g2-l{display:block;position:relative;padding-left:14px}
.gobj .g2-l+.g2-l{margin-top:4px}
.gobj .g2-l::before{content:"";position:absolute;left:3px;top:.62em;width:5px;height:5px;border-radius:50%;background:var(--accent,#2F5FA8);opacity:.55}
.gobj .g2-l.g2-lbl{padding-left:0;font-weight:600;color:var(--text)}
.gobj .g2-l.g2-lbl::before{display:none}
.gobj .g2-said .g2-l.g2-lbl{color:#2c4a94}
.gobj .g2-stat-v .g2-l{font-weight:600;line-height:1.35}
.gobj .g2-dn .g2-l{padding-left:12px}
@media (min-width:820px){.gobj .g2-clsgrid{grid-template-columns:repeat(2,minmax(0,1fr))}}
`;
  try {
    if (!document.getElementById('guide2css')) {
      const s = document.createElement('style'); s.id = 'guide2css'; s.textContent = CSS; document.head.appendChild(s);
    }
  } catch (e) {}
})();
