/* ==========================================================================
   "LIKELY ON THE EXAM" STARS IN THE READING TABS, PHAR 4346 DEENT
   (course-level, 2026-11-15; temporary until the kit's most-likely-stars module covers reading tabs)
   --------------------------------------------------------------------------
   likely_ui.js stars questions. This file stars what the professors stressed in
   the reading tabs, from LIKELY_MAP (likely_map.js, written by likely_map.py
   from likely_map_source.json, the analysis of the lectures' transcripts):
     Guides        a section (its h3) and a numbered block of a section (its h5)
     Reference     a section (h3)
     Tell apart    a row (its first cell) and, in the Exam 2 folder, nothing more
     Diseases      a condition card, a tell-apart set, a pair, a drug panel
     Drug list     a drug's row in Browse
     Glossary      a term
   Each star is a button before the heading text. Tapping it shows one line under
   the heading: the level (likely, solid, strong) and the evidence, a sentence the
   professor said (with the date) or the practice questions that rest on it.
   Each tab also gets one line that says what the stars are, and a "Starred only"
   button that hides everything else and counts what is left (Guides: sections
   and blocks). In a tab with exam folders (examfold_ui.js) the folders that hold
   a star are opened and the others are hidden while the button is on.
   Stars are drawn after the tab is drawn: a MutationObserver on each tab's pane
   (the tabs redraw themselves on a filter, a search or a jump) puts them back,
   once per change, and never changes what it has already set. The button's state
   is page memory only; nothing is stored. In the node checks' stub DOM this file
   does nothing and returns null.
   ========================================================================== */
const LIKELY_MARKS_UI = (() => {
  if (typeof document === 'undefined' || typeof MutationObserver === 'undefined' || typeof LIKELY_MAP === 'undefined' ||
      !document.createElement || !document.head || typeof document.getElementById !== 'function' ||
      !document.getElementById('nav') || typeof document.getElementById('nav').insertBefore !== 'function') return null;
  const MAP = LIKELY_MAP;
  const LEVEL = {1: 'Likely', 2: 'Solid', 3: 'Strong'};
  const LABEL = {1: 'likely', 2: 'solid', 3: 'strong'};
  const LEGEND = 'Stars mark what the professor stressed in lecture; tap a star for the reason.';
  const SPACE = {n: 0};
  const only = {guide: false, ref: false, tell: false, dz: false, drugs: false, gloss: false};   // page memory only

  const CSS = `
.lkstar{position:relative;z-index:0;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;width:44px;height:44px;min-width:44px;margin:-9px -1px -9px -9px;padding:0;vertical-align:middle;
  font-family:inherit;font-size:14px;line-height:1;font-weight:600;color:var(--accent);background:none;border:0;cursor:pointer;-webkit-appearance:none;appearance:none;-webkit-tap-highlight-color:transparent}
.lkstar::before{content:'';position:absolute;z-index:-1;top:9px;right:9px;bottom:9px;left:9px;box-sizing:border-box;border:1px solid var(--accent);border-radius:999px;background:var(--accent-bg)}
.lkstar[aria-expanded=true]{color:#fff}
.lkstar[aria-expanded=true]::before{background:var(--accent)}
.lkstar:focus-visible{outline:3px solid var(--accent);outline-offset:-5px;border-radius:999px}
.lkwhy{display:block;box-sizing:border-box;max-width:46rem;margin:6px 0 12px;padding:8px 12px;border-left:4px solid var(--accent);border-radius:0 8px 8px 0;background:var(--accent-bg);
  color:var(--text);font-size:14px;font-weight:400;line-height:1.45;text-transform:none;letter-spacing:0;font-style:normal;overflow-wrap:anywhere}
.lkwhy[hidden]{display:none}
.lkwhy b{font-weight:700}
.lkbar{display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px;margin:8px 0 12px}
.lkbar .lkleg{flex:1 1 100%;margin:0;color:var(--text-dim);font-size:13.5px;line-height:1.4}
.lkpill{display:inline-block;margin-right:6px;font-size:12px;font-weight:600;line-height:1.3;color:var(--accent);border:1px solid var(--accent);border-radius:999px;padding:1px 8px;white-space:nowrap;background:var(--accent-bg)}
.lkonly{box-sizing:border-box;min-height:44px;padding:6px 14px;font:inherit;font-size:14px;color:var(--text);background:var(--paper);border:1px solid var(--line);border-radius:999px;cursor:pointer}
.lkonly[aria-pressed=true]{background:var(--accent);color:#fff;border-color:var(--accent)}
.lkonly:focus-visible{outline:3px solid var(--accent);outline-offset:2px}
.lkcount{flex:1 1 12rem;margin:0;color:var(--text-dim);font-size:13px}
#v-gloss .lkbar{margin:6px 0}
#v-gloss .glf .lkonly{font-size:14px}
.lkgrp{display:flex;align-items:center;margin:0 0 2px}
.lkgrp .lklab{color:var(--text-dim);font-size:13px}
.lkpick{color:var(--accent);margin-right:4px}
#v-dz .dzpicker button[aria-pressed=true] .lkpick{color:#fff}
.lkgsr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
[data-lkh]{display:none!important}
.dlrowd[data-lkh]+.lkwhy{display:none!important}
@media print{.lkstar,.lkbar{display:none}.lkwhy{display:none}}`;
  const addCss = () => {
    if (document.getElementById('lkmarkscss')) return;
    const s = document.createElement('style'); s.id = 'lkmarkscss'; s.textContent = CSS; document.head.appendChild(s);
  };

  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'})[c]);
  const pane = id => document.getElementById(id);
  const hide = (el, on) => {
    if (!el) return;
    const was = el.hasAttribute('data-lkh');
    if (on && !was) { el.setAttribute('data-lkh', ''); el.hidden = true; }
    else if (!on && was) { el.removeAttribute('data-lkh'); el.hidden = false; }
  };
  const isHidden = el => !!(el && el.closest && el.closest('[data-lkh]'));

  /* ---------- the star and its line ---------- */
  function addMark(head, info, opts){
    opts = opts || {};
    if (!head || !info || head.querySelector(':scope > .lkstar, :scope > .lkgrp > .lkstar')) return null;
    const id = 'lkw-' + (++SPACE.n);
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'lkstar';
    b.setAttribute('aria-label', 'Likely on the exam: ' + LABEL[info.lv] + ' (tap for why)');
    b.setAttribute('aria-expanded', 'false'); b.setAttribute('aria-controls', id);
    b.textContent = '★';
    const w = document.createElement(opts.inline ? 'span' : 'p');
    w.className = 'lkwhy'; w.id = id; w.hidden = true; w.setAttribute('role', 'note');
    w.innerHTML = '<b>' + LEVEL[info.lv] + '.</b> ' + esc(info.why);
    b.addEventListener('click', ev => {
      ev.stopPropagation();
      const on = w.hidden; w.hidden = !on; b.setAttribute('aria-expanded', String(on));
    });
    b.addEventListener('keydown', ev => { ev.stopPropagation(); });
    head.insertBefore(b, head.firstChild);
    if (opts.place) opts.place(w, b);
    else if (/^H[1-6]$/.test(head.tagName)) head.insertAdjacentElement('afterend', w);
    else b.insertAdjacentElement('afterend', w);
    return b;
  }
  const starred = el => !!(el && el.querySelector && el.querySelector(':scope > .lkstar'));

  /* ---------- the legend, the button and the count ---------- */
  function bar(tab, host, where){
    let b = host.querySelector(':scope > .lkbar[data-lktab="' + tab + '"]');
    if (b) return b;
    b = document.createElement('div'); b.className = 'lkbar'; b.dataset.lktab = tab;
    b.innerHTML = '<p class="lkleg"><span class="lkpill">★ Likely on the exam</span>' + esc(LEGEND) + '</p>' +
      '<button type="button" class="lkonly" aria-pressed="' + only[tab] + '">Starred only</button>' +
      '<p class="lkcount" role="status"></p>';
    b.querySelector('.lkonly').addEventListener('click', () => toggle(tab));
    if (where) where(b); else host.appendChild(b);
    return b;
  }
  const barOf = tab => document.querySelector('.lkbar[data-lktab="' + tab + '"]');
  const setCount = (tab, text) => { const b = barOf(tab); if (!b) return; const c = b.querySelector('.lkcount'); if (c && c.textContent !== text) c.textContent = text; };
  const plural = (n, w) => n + ' ' + w + (n === 1 ? '' : 's');
  function toggle(tab){
    only[tab] = !only[tab];
    const p = tabPane(tab);
    if (p) p.querySelectorAll('.lkonly').forEach(x => x.setAttribute('aria-pressed', String(only[tab])));
    if (p) p.classList.toggle('lk-only', only[tab]);
    if (only[tab]) openFolders(tab, true);
    refresh(tab);
  }
  const tabPane = tab => pane({guide: 'v-guide', ref: 'v-ref', tell: 'v-tell', dz: 'v-dz', drugs: 'v-drugs', gloss: 'v-gloss'}[tab]);

  /* ---------- exam folders: those with something starred are opened, the others hidden ---------- */
  function folders(tab){ const p = tabPane(tab); return p ? [...p.querySelectorAll(':scope > .rfold')] : []; }
  function openFolders(tab, force){
    folders(tab).forEach(f => {
      if (!force && f.dataset.lkseen) return;
      f.dataset.lkseen = '1';
      if (only[tab] && f.querySelector('.lkstar') && !f.open) f.open = true;
    });
  }
  function foldVisibility(tab){
    folders(tab).forEach(f => {
      if (!only[tab]) { hide(f, false); return; }
      const body = f.querySelector(':scope > .rfbody');
      const any = body && [...body.querySelectorAll('.lkstar')].some(s => !isHidden(s));
      const list = body && body.querySelector('.rfdz li:not([data-lkh]) [data-rfdz]');
      hide(f, !(any || list));
      if (any && !f.open && !f.dataset.lkseen) f.open = true;
      f.dataset.lkseen = '1';
    });
  }

  /* ---------- Guides ---------- */
  function guide(){
    const p = pane('v-guide'); if (!p) return;
    const sub = p.querySelector(':scope > p.sub') || p.querySelector(':scope > h2');
    if (sub) bar('guide', p, b => sub.insertAdjacentElement('afterend', b));
    let secs = 0, secStar = 0, blk = 0, blkStar = 0;
    p.querySelectorAll('section.gobj').forEach(sec => {
      secs++;
      const m = MAP.guide[sec.id], h = sec.querySelector(':scope > h3');
      if (m && h) addMark(h, m);
      const blocks = [...sec.querySelectorAll('.gpt')];
      let anyBlock = false;
      blocks.forEach((g, i) => {
        blk++;
        const bm = MAP.guideBlock[sec.id + '#' + (i + 1)];
        if (bm) {
          const h5 = g.querySelector(':scope > h5');
          if (h5) addMark(h5, bm);
          else if (!g.querySelector(':scope > .lkgrp')) {
            // a block with no heading: the star gets a short label of its own so it does not stand alone
            const grp = document.createElement('div'); grp.className = 'lkgrp';
            g.insertBefore(grp, g.firstChild);
            addMark(grp, bm, {place: w => grp.insertAdjacentElement('afterend', w)});
            const lab = document.createElement('span'); lab.className = 'lklab'; lab.textContent = 'Likely on the exam'; grp.appendChild(lab);
          }
          g.dataset.lkstar = '1'; anyBlock = true; blkStar++;
        } else delete g.dataset.lkstar;
      });
      const own = !!m;
      if (own) secStar++;
      sec.dataset.lkself = own ? '1' : '';
      sec.dataset.lkblocks = anyBlock ? '1' : '';
      // visibility
      const show = !only.guide || own || anyBlock;
      hide(sec, !show);
      blocks.forEach(g => hide(g, only.guide && anyBlock && !g.dataset.lkstar));
    });
    if (!only.guide) {
      blkStar = 0; secStar = 0;
      p.querySelectorAll('section.gobj').forEach(s => { if (s.dataset.lkself) secStar++; });
      p.querySelectorAll('.gpt[data-lkstar]').forEach(() => blkStar++);
    }
    // sections the reader can still see: starred ones, and ones that hold a starred block
    const shownSecs = [...p.querySelectorAll('section.gobj')].filter(s => !s.hasAttribute('data-lkh')).length;
    const shownBlks = [...p.querySelectorAll('.gpt[data-lkstar]')].filter(g => !isHidden(g)).length;
    // deck headings and the notes after them go when no section of the deck is left
    (p.querySelectorAll('.rfbody').length ? [...p.querySelectorAll('.rfbody')] : [p]).forEach(body => {
      let group = null; const groups = [];
      [...body.children].forEach(k => { if (k.matches('h2.gdeck')) { group = {h: k, els: []}; groups.push(group); } else if (group) group.els.push(k); });
      groups.forEach(g => {
        const left = g.els.some(k => k.matches('section.gobj') && !k.hasAttribute('data-lkh'));
        hide(g.h, only.guide && !left);
        g.els.filter(k => !k.matches('section.gobj')).forEach(k => hide(k, only.guide && !left));
      });
    });
    nav(p);
    foldVisibility('guide'); openFolders('guide', false);
    setCount('guide', only.guide
      ? 'Showing ' + shownSecs + ' of ' + secs + ' sections and ' + shownBlks + ' of ' + blk + ' blocks.'
      : plural(secStar, 'starred section') + ' and ' + plural(blkStar, 'starred block') + ' in this tab.');
  }
  // the "Jump to a section" list: a link to a section that is hidden goes too
  function nav(p){
    p.querySelectorAll('.refnav a[href^="#"]').forEach(a => {
      const t = document.getElementById(a.getAttribute('href').slice(1));
      hide(a, !!(only[p.id === 'v-guide' ? 'guide' : p.id === 'v-ref' ? 'ref' : 'tell'] && t && isHidden(t)));
    });
  }

  /* ---------- Reference and Tell apart: sections that start at an h3 ---------- */
  function groupsOf(p){
    const out = [];
    const bodies = p.querySelectorAll('.rfbody').length ? [...p.querySelectorAll('.rfbody')] : [p];
    bodies.forEach(body => {
      let g = null;
      [...body.children].forEach(k => {
        if (k.matches('h3[id]')) { g = {h: k, els: [k]}; out.push(g); }
        else if (g && !k.matches('.rfdz')) g.els.push(k);
      });
    });
    return out;
  }
  function reference(){
    const p = pane('v-ref'); if (!p) return;
    const sub = p.querySelector(':scope > p.sub') || p.querySelector(':scope > h2');
    if (sub) bar('ref', p, b => sub.insertAdjacentElement('afterend', b));
    let n = 0, star = 0;
    groupsOf(p).forEach(g => {
      n++;
      const m = MAP.reference[g.h.id];
      if (m) { addMark(g.h, m); star++; }
      g.els.forEach(k => hide(k, only.ref && !m));
    });
    nav(p);
    foldVisibility('ref'); openFolders('ref', false);
    setCount('ref', only.ref ? 'Showing ' + star + ' of ' + n + ' sections.' : plural(star, 'starred section') + ' in this tab.');
  }
  function tell(){
    const p = pane('v-tell'); if (!p) return;
    const sub = p.querySelector(':scope > p.sub') || p.querySelector(':scope > h2');
    if (sub) bar('tell', p, b => sub.insertAdjacentElement('afterend', b));
    let rows = 0, star = 0, shown = 0;
    groupsOf(p).forEach(g => {
      const trs = [];
      g.els.forEach(k => k.querySelectorAll && k.querySelectorAll('tbody tr').forEach(tr => { if (tr.firstElementChild && tr.firstElementChild.tagName !== 'TH') trs.push(tr); }));
      let any = false;
      trs.forEach((tr, i) => {
        rows++;
        const m = MAP.tell[g.h.id + '#r' + (i + 1)];
        if (m) {
          const cell = tr.firstElementChild;
          cell.classList.add('lkcell');
          addMark(cell, m, {inline: true, place: w => cell.appendChild(w)});
          tr.dataset.lkstar = '1'; any = true; star++;
        } else delete tr.dataset.lkstar;
        hide(tr, only.tell && !m);
        if (!only.tell || m) shown++;
      });
      g.els.forEach(k => hide(k, only.tell && !any));
    });
    // Exam 2 folder: the list of Diseases comparisons shows only the starred ones
    p.querySelectorAll('.rfdz [data-rfdz]').forEach(btn => {
      const to = btn.getAttribute('data-jump') || '', m = /^dz:dz-tell-(.+)$/.exec(to);
      if (m) hide(btn.closest('li'), only.tell && !MAP.dzTell[m[1]]);
      else if (to === 'dz:') hide(btn.closest('li'), only.tell && !Object.keys(MAP.dzPair).length);
    });
    foldVisibility('tell'); openFolders('tell', false);
    setCount('tell', only.tell ? 'Showing ' + shown + ' of ' + rows + ' rows.' : plural(star, 'starred row') + ' in this tab.');
  }

  /* ---------- Diseases ---------- */
  function dz(){
    const p = pane('v-dz'); if (!p) return;
    const intro = p.querySelector(':scope > p.dzintro');
    if (intro) bar('dz', p, b => intro.insertAdjacentElement('afterend', b));
    const body = p.querySelector(':scope > .dzbody');
    const view = body ? (/v-(\w+)/.exec(body.className) || [])[1] : '';
    const on = only.dz;
    let shown = 0, total = 0, word = 'conditions';
    if (view === 'cards') {
      body.querySelectorAll('.dzpicker button[data-card]').forEach(btn => {
        total++;
        const m = MAP.dzCard[btn.dataset.card];
        if (m) {
          shown++;
          if (!btn.querySelector('.lkpick')) { const s = document.createElement('span'); s.className = 'lkpick'; s.setAttribute('aria-hidden', 'true'); s.textContent = '★'; btn.insertBefore(s, btn.firstChild);
            const r = document.createElement('span'); r.className = 'lkgsr'; r.textContent = ' (likely on the exam)'; btn.appendChild(r); }
        }
        hide(btn, on && !m);
      });
      body.querySelectorAll('.dzpicker').forEach(row => {
        const label = row.previousElementSibling && row.previousElementSibling.matches('p.dzsub') ? row.previousElementSibling : null;
        const left = [...row.querySelectorAll('button')].some(b => !b.hasAttribute('data-lkh'));
        hide(row, on && !left); hide(label, on && !left);
      });
      const card = body.querySelector('.dzcard');
      if (card) {
        const m = MAP.dzCard[card.dataset.card];
        const head = card.querySelector('.dzhead h2');
        if (m && head) addMark(head, m, {place: w => head.parentNode.insertAdjacentElement('afterend', w)});
        if (on && !m) {
          // the open card is not starred: open the first starred one, once per drawing
          const first = body.querySelector('.dzpicker button[data-card]:not([data-lkh])');
          if (first && !p.dataset.lkswitch) { p.dataset.lkswitch = '1'; first.click(); setTimeout(() => { delete p.dataset.lkswitch; refresh('dz'); }, 0); }
        }
      }
    } else if (view === 'tell') {
      word = 'comparisons';
      body.querySelectorAll('section.dztell').forEach(sec => {
        total++;
        const key = sec.id.replace(/^dz-tell-/, ''), m = MAP.dzTell[key], h = sec.querySelector(':scope > h2');
        if (m) { shown++; if (h) addMark(h, m); }
        hide(sec, on && !m);
      });
    } else if (view === 'pairs') {
      word = 'pairs';
      body.querySelectorAll('section.dzpair').forEach((sec, i) => {
        total++;
        const m = MAP.dzPair['pair-' + i], h = sec.querySelector(':scope > h3');
        if (m) { shown++; if (h) addMark(h, m); }
        hide(sec, on && !m);
      });
    }
    // a drug panel: the heading's text is the drug's name (and brand)
    const dh = p.querySelector('.dzdlg .body > h3:first-child');
    if (dh && !dh.querySelector(':scope > .lkstar') && typeof DZ !== 'undefined') {
      const txt = dh.textContent.trim();
      const key = Object.keys(DZ.drugs).find(k => { const d = DZ.drugs[k]; return txt === d.name + (d.brand ? ' (' + d.brand + ')' : ''); });
      // the panel's "How it works" block must stay the heading's next sibling (dz_test.js), so the line goes inside the heading
      if (key && MAP.dzDrug[key]) addMark(dh, MAP.dzDrug[key], {inline: true, place: w => dh.appendChild(w)});
    }
    const lv = view === 'cards' ? 'conditions' : word;
    setCount('dz', view === 'rules' ? 'No stars in this view.' :
      on ? 'Showing ' + shown + ' of ' + total + ' ' + lv + '.' : plural(shown, 'starred ' + lv.replace(/s$/, '')) + ' in this view.');
    const bt = barOf('dz'); if (bt) hide(bt.querySelector('.lkonly'), view === 'rules');
  }

  /* ---------- Drug list ---------- */
  function drugs(){
    const p = pane('v-drugs'); if (!p) return;
    const sub = p.querySelector(':scope > p.sub') || p.querySelector(':scope > h2');
    const b = sub ? bar('drugs', p, x => sub.insertAdjacentElement('afterend', x)) : null;
    const browse = p.querySelector('.dlbrowse');
    if (b) hide(b, !browse);
    if (!browse) return;
    let total = 0, star = 0;
    p.querySelectorAll('details.dlrowd[data-id]').forEach(row => {
      total++;
      const m = MAP.drug[row.dataset.id];
      if (m) {
        star++;
        const name = row.querySelector(':scope > summary .dln');
        // the line goes under the whole row, not inside the summary's grid
        if (name && !name.querySelector(':scope > .lkstar')) addMark(name, m, {place: w => row.insertAdjacentElement('afterend', w)});
      }
      hide(row, only.drugs && !m);
    });
    p.querySelectorAll('.dlgbody').forEach(gb => {
      let sub = null; const subs = [];
      [...gb.children].forEach(k => { if (k.matches('h4.dlsub')) { sub = {h: k, rows: []}; subs.push(sub); } else if (sub && k.matches('details.dlrowd')) sub.rows.push(k); });
      subs.forEach(s => hide(s.h, only.drugs && !s.rows.some(r => !r.hasAttribute('data-lkh'))));
    });
    p.querySelectorAll('details.dlgrp').forEach(g => {
      const left = [...g.querySelectorAll('details.dlrowd')].some(r => !r.hasAttribute('data-lkh'));
      hide(g, only.drugs && !left);
      if (only.drugs && left && !g.dataset.lkseen && !g.open) g.open = true;
      g.dataset.lkseen = '1';
    });
    setCount('drugs', only.drugs ? 'Showing ' + star + ' of ' + total + ' drugs.' : plural(star, 'starred drug') + ' in this list.');
  }

  /* ---------- Glossary ---------- */
  function gloss(){
    const p = pane('v-gloss'); if (!p) return;
    const head = p.querySelector('#glhead'); if (!head) return;
    if (!head.querySelector('.lkbar')) {
      const b = document.createElement('div'); b.className = 'lkbar'; b.dataset.lktab = 'gloss';
      b.innerHTML = '<p class="lkleg"><span class="lkpill">★ Likely on the exam</span>' + esc(LEGEND) + '</p><p class="lkcount" role="status"></p>';
      head.appendChild(b);
    }
    const glf = head.querySelector('.glf');
    if (glf && !glf.querySelector('.lkonly')) {
      const t = document.createElement('button'); t.type = 'button'; t.className = 'lkonly'; t.textContent = 'Starred only';
      t.setAttribute('aria-pressed', String(only.gloss));
      t.addEventListener('click', () => toggle('gloss'));
      const kind = glf.querySelector('.glkind');
      if (kind) glf.insertBefore(t, kind); else glf.appendChild(t);
    }
    let total = 0, star = 0;
    hide(p.querySelector('#glcount'), only.gloss && !!p.querySelector('#glcount'));
    p.querySelectorAll('li.gle[data-gle]').forEach(li => {
      total++;
      const m = MAP.gloss[li.dataset.gle];
      if (m) {
        star++;
        const h = li.querySelector(':scope > .glh');
        if (h && !h.querySelector(':scope > .lkstar')) {
          addMark(h, m, {place: w => h.insertAdjacentElement('afterend', w)});
        }
      }
      hide(li, only.gloss && !m);
    });
    // a letter heading goes when no entry under it is left
    let last = null, left = false;
    const flush = () => { if (last) hide(last, only.gloss && !left); };
    p.querySelectorAll('#gllist > li').forEach(li => {
      if (li.classList.contains('gll')) { flush(); last = li; left = false; }
      else if (!li.hasAttribute('data-lkh')) left = true;
    });
    flush();
    setCount('gloss', !total ? '' : only.gloss ? 'Showing ' + star + ' of ' + total + ' terms.' : plural(star, 'starred term') + ' in this list.');
  }

  const REFRESH = {guide, ref: reference, tell, dz, drugs, gloss};
  function refresh(tab){
    const p = tabPane(tab); if (!p) return;
    p.classList.toggle('lk-only', !!only[tab]);
    try { REFRESH[tab](); } catch (e) { console.error('The stars of ' + tab + ' could not be drawn; the tab is unaffected.', e); }
  }

  /* ---------- watch each tab ---------- */
  const WATCH = {};
  function watch(tab){
    const p = tabPane(tab); if (!p || WATCH[tab]) return;
    let busy = false;
    const mo = new MutationObserver(() => {
      if (busy) return;
      busy = true;
      try { refresh(tab); } finally { busy = false; mo.takeRecords(); }
    });
    mo.observe(p, {childList: true, subtree: true});
    WATCH[tab] = mo;
    if (p.children.length) refresh(tab);
  }
  /* The three reading tabs are also drawn in step with the core: the legend line above the sections must be there when
     the core puts the reader back at a scroll position or lands a jump, or the page moves under them a moment later
     (examfold_test.js: Back and jump landings). These wrappers run after examfold_ui.js's, which is earlier in the list. */
  const after = (og, tab) => function(){
    const r = og.apply(this, arguments);
    try { refresh(tab); if (WATCH[tab]) WATCH[tab].takeRecords(); } catch (e) { console.error('The stars of ' + tab + ' could not be drawn; the tab is unaffected.', e); }
    return r;
  };
  try {
    addCss();
    ['guide', 'ref', 'tell', 'dz', 'drugs', 'gloss'].forEach(watch);
    if (typeof renderGuide === 'function') renderGuide = after(renderGuide, 'guide');
    if (typeof renderRef === 'function') renderRef = after(renderRef, 'ref');
    if (typeof renderTell === 'function') renderTell = after(renderTell, 'tell');
  } catch (e) { console.error('The stars of the reading tabs could not be added; the rest of the page is unaffected.', e); }
  return {only, refresh, toggle, MAP};
})();
