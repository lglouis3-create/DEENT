/* ftu_ui.js: the FTU tab (Louis, 2026-11-14: "a section where you can practice and type in the FTU ... a good visual diagram ... keeps track of what you're
   missing and getting right"). Course-level, no core edit; a tab in the same way as dz_ui.js.
   Every number is Dr. Patel's Dermatitis deck (Patel_Dermatitis-Therapeutics-Student.pdf):
   - slide 10: one adult fingertip unit (FTU) = 0.5 g; tubes 15, 30, 45, 60, 80, 100 g; prescribed amounts are rounded up to a tube size;
   - slide 11: the adult chart (Long and Finlay 1991) and the body figure, "only for adult"; slide 12: pediatrics, "just know it is smaller";
   - slide 13: face and neck 1.25 g = 2.5 FTU, twice daily for two weeks = 35 g, prescribe 45 g; one side of the trunk 3.5 g = 7 FTU,
     twice daily for two weeks = 98 g, prescribe 100 g.
   Every answer is computed from the chart below, never typed in by hand; the working is shown with the arithmetic from the same numbers.
   Storage: one key, written only when a question is answered or Reset is pressed (try/catch; the tab works without it). */
const FTU_UI = (() => {
  const ok = typeof document !== 'undefined' && typeof MutationObserver !== 'undefined' && document.getElementById &&
             document.getElementById('nav') && typeof document.getElementById('nav').insertBefore === 'function';
  if (!ok) return null;
  const ID = 'ftu', KEY = 'phar4346-ftu:v1';
  const G_PER_FTU = 0.5, TUBES = [15, 30, 45, 60, 80, 100];                     // slide 10
  // slide 10/11 chart; `name` is the slide's own wording; `z` lists the diagram shapes that show it
  const REG = [
    {id: 'scalp',  name: 'Scalp', ftu: 3},
    {id: 'face',   name: 'Face and neck', ftu: 2.5},
    {id: 'hand',   name: 'One hand (front and back) including fingers', short: 'One hand', ftu: 1},
    {id: 'arm',    name: 'One arm including entire hand', short: 'One arm incl. hand', ftu: 4},
    {id: 'elbows', name: 'Elbows', ftu: 1},
    {id: 'soles',  name: 'Both soles', ftu: 1.5},
    {id: 'foot',   name: 'One foot including toes', short: 'One foot', ftu: 2},
    {id: 'leg',    name: 'One leg including foot', short: 'One leg incl. foot', ftu: 8},
    {id: 'butt',   name: 'Buttocks', ftu: 4},
    {id: 'knees',  name: 'Knees', ftu: 1},
    {id: 'trunk',  name: 'Trunk both sides', ftu: 14, note: '7 FTU each side'},
    {id: 'trunk1', name: 'One side of the trunk (chest and abdomen, or thoracic and lumbar back)', short: 'One side of the trunk', ftu: 7}   // slide 13; 14 / 2 on the chart
  ];
  const R = id => REG.find(r => r.id === id);
  const SKILLS = {
    region: 'Fingertip units for an area',
    sum: 'Add two areas',
    grams: 'Fingertip units to grams',
    apply: 'Grams for a course of treatment',
    tube: 'Tube to prescribe'
  };
  const SKEYS = Object.keys(SKILLS);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
  const num = n => String(Math.round(n * 1000) / 1000);
  const st = {mode: 'all', q: null, done: false, last: null, stats: load(), pane: null, seq: 0};
  function load(){
    try {
      const j = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (j && j.v === 1 && j.skill && j.reg) return j;
    } catch (e) {}
    return {v: 1, skill: {}, reg: {}};
  }
  function save(){ try { localStorage.setItem(KEY, JSON.stringify(st.stats)); } catch (e) {} }
  const cnt = (o, k) => (o[k] || {r: 0, w: 0});
  function record(q, right){
    const bump = (m, k) => { const c = m[k] || (m[k] = {r: 0, w: 0}); right ? c.r++ : c.w++; };
    bump(st.stats.skill, q.skill);
    q.regs.forEach(id => bump(st.stats.reg, id));
    save();
  }
  const acc = c => { const n = c.r + c.w; return n ? c.r / n : null; };

  /* ---------- questions: each carries its answer, the working and the slide ---------- */
  const pick = a => a[Math.floor(Math.random() * a.length)];
  function scenario(){
    // a region, applications a day, days: the amount stays within the largest tube (100 g)
    for (let t = 0; t < 200; t++) {
      const r = pick(REG.filter(x => x.id !== 'trunk')), apps = pick([1, 2]), days = pick([7, 14]);
      const g = r.ftu * G_PER_FTU * apps * days;
      if (g <= TUBES[TUBES.length - 1]) return {r, apps, days, g};
    }
    return {r: R('face'), apps: 2, days: 14, g: 35};
  }
  const fixed = [
    {r: 'face', apps: 2, days: 14},         // slide 13
    {r: 'trunk1', apps: 2, days: 14}        // slide 13
  ];
  const tubeFor = g => TUBES.find(t => t >= g);
  const phr = (apps, days) => `${apps === 1 ? 'once' : 'twice'} daily for ${days === 7 ? 'one week' : 'two weeks'}`;
  function make(skill){
    const id = ++st.seq;
    if (skill === 'region') {
      const r = pick(REG);
      return {id, skill, regs: [r.id], hi: [r.id], stem: `How many adult fingertip units cover <b>${esc(r.name.toLowerCase().replace(/^./, c => c.toUpperCase()))}</b>?`,
              unit: 'FTU', ans: r.ftu, work: `Dermatitis slide 11 chart: ${esc(r.name)} = ${num(r.ftu)} FTU${r.note ? ' (' + esc(r.note) + ')' : ''}.`};
    }
    if (skill === 'sum') {
      const pool = REG.filter(x => !['trunk', 'trunk1'].includes(x.id));
      const a = pick(pool); let b = pick(pool);
      while (b.id === a.id || (a.id === 'arm' && b.id === 'hand') || (a.id === 'hand' && b.id === 'arm') || (a.id === 'leg' && b.id === 'foot') || (a.id === 'foot' && b.id === 'leg')) b = pick(pool);
      return {id, skill, regs: [a.id, b.id], hi: [a.id, b.id], stem: `An adult has the same eruption on <b>${esc(a.name.toLowerCase())}</b> and <b>${esc(b.name.toLowerCase())}</b>. How many fingertip units cover both for one application?`,
              unit: 'FTU', ans: a.ftu + b.ftu, work: `Slide 11 chart: ${esc(a.name)} ${num(a.ftu)} + ${esc(b.name)} ${num(b.ftu)} = ${num(a.ftu + b.ftu)} FTU.`};
    }
    if (skill === 'grams') {
      const r = pick(REG);
      return {id, skill, regs: [r.id], hi: [r.id], stem: `An adult needs <b>${num(r.ftu)} fingertip units</b> for one application (${esc(r.name.toLowerCase())}). How many grams is that?`,
              unit: 'g', ans: r.ftu * G_PER_FTU, work: `Slide 10: 1 FTU = 0.5 g, so ${num(r.ftu)} FTU × 0.5 g = ${num(r.ftu * G_PER_FTU)} g.`};
    }
    const f = Math.random() < 0.25 ? pick(fixed) : null;
    const s = f ? {r: R(f.r), apps: f.apps, days: f.days, g: R(f.r).ftu * G_PER_FTU * f.apps * f.days} : scenario();
    const base = `An adult is prescribed an ointment for <b>${esc(s.r.name.toLowerCase())}</b>, applied <b>${phr(s.apps, s.days)}</b>.`;
    const calc = `${num(s.r.ftu)} FTU × 0.5 g × ${s.apps} a day × ${s.days} days = ${num(s.g)} g`;
    if (skill === 'apply') {
      return {id, skill, regs: [s.r.id], hi: [s.r.id], stem: base + ' How many grams are needed in total?', unit: 'g', ans: s.g,
              work: `Slide 13 method: FTU × 0.5 g × applications a day × days. ${calc}.`};
    }
    const t = tubeFor(s.g);
    return {id, skill: 'tube', regs: [s.r.id], hi: [s.r.id], stem: base + ' Which tube size (in grams) do you prescribe?', unit: 'g tube', ans: t, tubeOnly: true,
            work: `${calc}. Slide 10: round up to a tube size (15, 30, 45, 60, 80, 100 g), so ${num(s.g)} g → ${t} g.`};
  }
  // misses first: a question for the skill or area with the lowest accuracy so far
  function next(){
    let sk = st.mode === 'all' ? pick(SKEYS) : st.mode;
    if (st.mode === 'miss') {
      const w = SKEYS.map(k => ({k, c: cnt(st.stats.skill, k)})).filter(x => x.c.w > 0);
      sk = w.length ? pick(w.map(x => x.k)) : pick(SKEYS);
      let q = make(sk);
      for (let t = 0; t < 30; t++) { const miss = q.regs.some(id => cnt(st.stats.reg, id).w > 0); if (miss) break; q = make(sk); }
      return q;
    }
    return make(sk);
  }
  const parse = s => {
    const m = String(s).replace(/,/g, '').match(/-?\d+(?:\.\d+)?|-?\.\d+/);
    return m ? parseFloat(m[0]) : null;
  };

  /* ---------- diagram ---------- */
  // front and back figure, plus the soles; each shape lists the chart rows it belongs to
  const SHAPES = [
    // [view, chart rows (the first names the colour), path, name]; back-view paths are drawn in the front figure's coordinates and shifted
    ['f', 'scalp', 'M68 30 Q68 8 90 8 Q112 8 112 30 Q90 22 68 30Z', 'Scalp'],
    ['f', 'face', 'M68 30 Q90 22 112 30 L110 52 Q90 68 70 52Z M82 62 h16 v14 h-16z', 'Face and neck'],
    ['f', 'trunk1 trunk', 'M54 84 Q54 76 66 76 L114 76 Q126 76 126 84 L122 160 L58 160Z', 'One side of the trunk'],
    ['f', 'arm', 'M126 80 L148 86 L160 146 L146 150 L130 104Z M54 80 L32 86 L20 146 L34 150 L50 104Z', 'One arm'],
    ['f', 'elbows arm', 'M134 106 h18 v16 h-18z M28 106 h18 v16 h-18z', 'Elbows'],
    ['f', 'hand arm', 'M146 150 L160 146 L168 174 L160 184 L148 176Z M34 150 L20 146 L12 174 L20 184 L32 176Z', 'One hand'],
    ['f', 'leg', 'M58 160 L88 160 L84 260 L64 260Z M92 160 L122 160 L116 260 L96 260Z', 'One leg'],
    ['f', 'knees leg', 'M65 196 h20 v16 h-20z M95 196 h20 v16 h-20z', 'Knees'],
    ['f', 'foot leg', 'M62 260 L84 260 L86 274 L52 274Z M96 260 L118 260 L128 274 L94 274Z', 'One foot'],
    ['b', 'scalp', 'M68 30 Q68 8 90 8 Q112 8 112 30 L110 52 Q90 62 70 52Z', 'Scalp'],
    ['b', 'face', 'M82 56 h16 v20 h-16z', 'Neck'],
    ['b', 'trunk1 trunk', 'M54 84 Q54 76 66 76 L114 76 Q126 76 126 84 L122 150 L58 150Z', 'One side of the trunk (back)'],
    ['b', 'arm', 'M126 80 L148 86 L160 146 L146 150 L130 104Z M54 80 L32 86 L20 146 L34 150 L50 104Z', 'One arm'],
    ['b', 'elbows arm', 'M134 106 h18 v16 h-18z M28 106 h18 v16 h-18z', 'Elbows'],
    ['b', 'hand arm', 'M146 150 L160 146 L168 174 L160 184 L148 176Z M34 150 L20 146 L12 174 L20 184 L32 176Z', 'One hand'],
    ['b', 'butt', 'M58 150 L122 150 L124 186 L56 186Z', 'Buttocks'],
    ['b', 'leg', 'M56 186 L88 186 L84 260 L64 260Z M92 186 L124 186 L116 260 L96 260Z', 'One leg'],
    ['b', 'knees leg', 'M65 208 h20 v16 h-20z M95 208 h20 v16 h-20z', 'Knees'],
    ['b', 'foot leg', 'M62 260 L84 260 L86 274 L62 274Z M96 260 L118 260 L118 274 L94 274Z', 'One foot'],
    ['s', 'soles', 'M342 200 a14 24 0 1 0 28 0 a14 24 0 1 0 -28 0z M376 200 a14 24 0 1 0 28 0 a14 24 0 1 0 -28 0z', 'Both soles']
  ];

  function diagram(hi){
    const sb = st.stats.reg;
    const cls = (ids) => {
      const list = ids.split(' ');
      const on = list.some(i => (hi || []).includes(i));
      // colour from the area that shape is named for (its first id)
      const a = acc(cnt(sb, list[0]));
      const c = a == null ? 'n' : a >= 0.75 ? 'g' : a >= 0.5 ? 'a' : 'r';
      return `ftush ${c}${on ? ' on' : ''}`;
    };
    const grp = v => SHAPES.filter(x => x[0] === v).map(x => `<path class="${cls(x[1])}" data-r="${x[1]}" d="${x[2]}"><title>${esc(x[3])}</title></path>`).join('');
    return `<svg class="ftusvg" viewBox="0 0 430 296" role="img" aria-label="Adult body, front, back and soles, with the areas of the fingertip-unit chart">
      <g>${grp('f')}</g><g transform="translate(160 0)">${grp('b')}</g><g>${grp('s')}</g>
      <text x="90" y="291" text-anchor="middle" class="ftulbl">Front</text><text x="250" y="291" text-anchor="middle" class="ftulbl">Back</text><text x="373" y="240" text-anchor="middle" class="ftulbl">Soles</text>
    </svg>`;
  }

  /* ---------- views ---------- */
  function statusTable(){
    const rows = REG.map(r => {
      const c = cnt(st.stats.reg, r.id), a = acc(c);
      return `<tr><th scope="row">${esc(r.short || r.name)}</th><td>${num(r.ftu)}</td><td>${c.r}</td><td>${c.w}</td><td class="${a == null ? '' : a >= 0.75 ? 'g' : a >= 0.5 ? 'a' : 'r'}">${a == null ? 'not tried' : a >= 0.75 ? 'solid' : a >= 0.5 ? 'shaky' : 'missing'}</td></tr>`;
    }).join('');
    const srows = SKEYS.map(k => { const c = cnt(st.stats.skill, k), a = acc(c);
      return `<tr><th scope="row">${esc(SKILLS[k])}</th><td>${c.r}</td><td>${c.w}</td><td>${a == null ? '–' : Math.round(a * 100) + '%'}</td></tr>`; }).join('');
    return `<h3>What you get right and miss</h3>
      <table class="ftutab"><caption>By skill</caption><thead><tr><th>Skill</th><th>Right</th><th>Missed</th><th>Accuracy</th></tr></thead><tbody>${srows}</tbody></table>
      <table class="ftutab"><caption>By area (a question on an area counts for each area it uses)</caption><thead><tr><th>Area</th><th>FTU</th><th>Right</th><th>Missed</th><th>Status</th></tr></thead><tbody>${rows}</tbody></table>
      <p class="ftunote">Status: solid is 75% or more right, shaky 50% to 74%, missing under 50%. The diagram colors follow the same rule.</p>`;
  }
  function render(){
    const p = st.pane; if (!p) return;
    const q = st.q || (st.q = next());
    const modes = [['all', 'Mixed'], ['miss', 'My misses'], ...SKEYS.map(k => [k, SKILLS[k]])];
    const hi = q.hi;
    const fb = st.done ? `<div class="ftufb ${st.last.right ? 'good' : 'bad'}" role="status"><b>${st.last.right ? 'Right.' : 'Not quite.'}</b> ${st.last.right ? '' : `You typed ${esc(st.last.typed)}; the answer is <b>${num(q.ans)} ${esc(q.unit)}</b>. `}<p>${q.work}</p></div>` : '';
    p.innerHTML = `
      <h2 class="ftutitle">Fingertip units: practice</h2>
      <p class="ftuintro">Dr. Patel, 11/12: the fingertip-unit calculations have come back three times, so practice them (adult chart only). One adult FTU = 0.5 g; amounts are rounded up to a tube of 15, 30, 45, 60, 80 or 100 g (Dermatitis slides 10–13). For children the slide says only that the amount is smaller.</p>
      <div class="ftumodes" role="group" aria-label="What to practice">${modes.map(m => `<button type="button" data-mode="${m[0]}" aria-pressed="${st.mode === m[0]}">${esc(m[1])}</button>`).join('')}</div>
      <div class="ftugrid">
        <div class="ftufig">${diagram(hi)}<p class="ftunote">The area in question has a thick outline. Fill: green solid, amber shaky, red missing, grey not tried. After you answer, tap any area to see its chart number.</p><div id="ftutip" class="ftutip" aria-live="polite"></div></div>
        <form class="ftuq" id="ftuf" autocomplete="off">
          <p class="ftustem">${q.stem}</p>
          <label class="ftulab"><span>Your answer (${esc(q.unit)})</span>
            <input id="ftuin" inputmode="decimal" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" ${st.done ? 'readonly' : ''} value="${st.done ? esc(st.last.typed) : ''}"></label>
          ${st.done ? '<button type="button" class="ftuprim" data-act="next">Next question</button>' : '<button type="submit" class="ftuprim">Check</button>'}
          ${fb}
        </form>
      </div>
      ${statusTable()}
      <p><button type="button" class="ftuquiet" data-act="reset">Reset my FTU record</button></p>`;
    if (!st.done) { const i = document.getElementById('ftuin'); if (i && st.focus) { try { i.focus(); } catch (e) {} } }
  }
  function onSubmit(e){
    e.preventDefault();
    if (st.done) return;
    const q = st.q, inp = document.getElementById('ftuin'); const typed = inp ? inp.value.trim() : '';
    const v = parse(typed);
    if (v == null) { inp && inp.focus(); return; }
    const right = Math.abs(v - q.ans) < 1e-9;
    st.done = true; st.last = {typed, right}; st.focus = false;
    record(q, right);
    render();
    const nb = st.pane.querySelector('[data-act="next"]'); if (nb) nb.focus();
  }
  function onClick(e){
    const m = e.target.closest('[data-mode]');
    if (m) { st.mode = m.dataset.mode; st.q = null; st.done = false; st.focus = true; render(); return; }
    const a = e.target.closest('[data-act]');
    if (a && a.dataset.act === 'next') { st.q = null; st.done = false; st.focus = true; render(); return; }
    if (a && a.dataset.act === 'reset') {
      if (typeof confirm === 'function' && !confirm('Erase your FTU record?')) return;
      st.stats = {v: 1, skill: {}, reg: {}}; save(); render(); return;
    }
    const sh = e.target.closest('.ftush');
    if (sh) {
      const ids = sh.dataset.r.split(' '), r = R(ids[0]);
      const tip = document.getElementById('ftutip');
      if (tip && !st.done) tip.textContent = 'Answer the question first; then tap an area to see its chart number.';
      else if (tip && r) tip.textContent = `${r.name}: ${num(r.ftu)} FTU${r.note ? ' (' + r.note + ')' : ''} = ${num(r.ftu * G_PER_FTU)} g for one application.`;
    }
  }
  const CSS = `
#v-ftu{--ftu-g:#1b7a3d;--ftu-gbg:#e2f4e8;--ftu-a:#a35a00;--ftu-abg:#fdf0dc;--ftu-r:#b3261e;--ftu-rbg:#fdecea}
@media (prefers-color-scheme: dark){:root:not([data-theme="light"]) #v-ftu{--ftu-g:#7bd49a;--ftu-gbg:#17331f;--ftu-a:#f0b45a;--ftu-abg:#3a2a10;--ftu-r:#ff9a92;--ftu-rbg:#3d1a18}}
:root[data-theme="dark"] #v-ftu{--ftu-g:#7bd49a;--ftu-gbg:#17331f;--ftu-a:#f0b45a;--ftu-abg:#3a2a10;--ftu-r:#ff9a92;--ftu-rbg:#3d1a18}
#v-ftu .ftutitle{margin:4px 0 2px}#v-ftu .ftuintro{color:var(--text-dim);margin:0 0 10px;font-size:14.5px}
#v-ftu .ftumodes{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0 12px}
#v-ftu .ftumodes button{font:inherit;font-size:14px;min-height:40px;border:1px solid var(--line);background:var(--paper);color:var(--text);border-radius:999px;padding:5px 13px}
#v-ftu .ftumodes button[aria-pressed=true]{background:var(--accent);color:#fff;border-color:var(--accent)}
#v-ftu .ftugrid{display:grid;gap:14px;grid-template-columns:1fr}
@media (min-width:860px){#v-ftu .ftugrid{grid-template-columns:minmax(300px,420px) 1fr;align-items:start}}
#v-ftu .ftusvg{width:100%;height:auto;display:block;border:1px solid var(--line);border-radius:10px;background:var(--paper)}
#v-ftu .ftush{stroke:var(--text-dim);stroke-width:1;cursor:pointer;fill:var(--line);fill-opacity:.55}
#v-ftu .ftush.g{fill:var(--ftu-g);fill-opacity:.55}#v-ftu .ftush.a{fill:var(--ftu-a);fill-opacity:.6}#v-ftu .ftush.r{fill:var(--ftu-r);fill-opacity:.6}
#v-ftu .ftush.on{stroke:var(--accent);stroke-width:4;paint-order:stroke}
#v-ftu .ftulbl{font-size:11px;fill:var(--text-dim)}
#v-ftu .ftunote{font-size:12.5px;color:var(--text-dim);margin:6px 0}
#v-ftu .ftutip{min-height:20px;font-size:14px;margin:4px 0}
#v-ftu .ftuq{border:1px solid var(--line);border-radius:10px;padding:12px;background:var(--paper)}
#v-ftu .ftustem{font-size:16px;margin:0 0 10px}
#v-ftu .ftulab span{display:block;font-size:12.5px;color:var(--text-dim)}
#v-ftu .ftulab input{width:100%;min-height:44px;font:inherit;font-size:18px;padding:6px 10px;border:1px solid var(--line);border-radius:8px;background:var(--paper);color:var(--text);box-sizing:border-box}
#v-ftu .ftuprim{font:inherit;min-height:44px;margin:10px 0 0;padding:6px 18px;border:0;border-radius:8px;background:var(--accent);color:#fff;font-weight:700}
#v-ftu .ftuquiet{font:inherit;font-size:13.5px;min-height:40px;border:1px solid var(--line);background:none;color:var(--text-dim);border-radius:8px;padding:4px 12px}
#v-ftu .ftufb{margin:12px 0 0;padding:8px 12px;border-radius:8px;border:1px solid var(--line)}#v-ftu .ftufb p{margin:4px 0 0}
#v-ftu .ftufb.good{border-color:var(--ftu-g);background:var(--ftu-gbg)}#v-ftu .ftufb.bad{border-color:var(--ftu-r);background:var(--ftu-rbg)}
#v-ftu .ftutab{width:100%;border-collapse:collapse;margin:8px 0;font-size:14px}
#v-ftu .ftutab caption{text-align:left;font-weight:700;font-size:13px;color:var(--text-dim);padding:4px 0}
#v-ftu .ftutab th,#v-ftu .ftutab td{border-bottom:1px solid var(--line);padding:5px 6px;text-align:left}
#v-ftu .ftutab td.g{color:var(--ftu-g);font-weight:700}#v-ftu .ftutab td.a{color:var(--ftu-a);font-weight:700}#v-ftu .ftutab td.r{color:var(--ftu-r);font-weight:700}
`;
  try {
    const nav = document.getElementById('nav'), main = document.querySelector('main');
    const style = document.createElement('style'); style.textContent = CSS; document.head.appendChild(style);
    const sec = document.createElement('section'); sec.id = 'v-' + ID; sec.className = 'hide'; st.pane = sec;
    const atSec = document.getElementById('v-drugs') || document.getElementById('v-atlas');
    if (atSec) main.insertBefore(sec, atSec); else main.appendChild(sec);
    sec.addEventListener('click', onClick);
    sec.addEventListener('submit', onSubmit);
    const btn = document.createElement('button'); btn.setAttribute('data-v', ID); btn.textContent = 'FTU';
    btn.onclick = () => show(ID);
    const atBtn = nav.querySelector('button[data-v="drugs"]') || nav.querySelector('button[data-v="atlas"]');
    if (atBtn) nav.insertBefore(btn, atBtn); else nav.appendChild(btn);
    const orig = show;
    show = function(v){
      if (v !== ID) { sec.classList.add('hide'); return orig.apply(this, arguments); }
      try {
        if (typeof figClose === 'function') figClose();
        if (typeof VIEW_NAME !== 'undefined' && !VIEW_NAME[ID]) VIEW_NAME[ID] = 'the fingertip units';
        VIEW = v;
        document.querySelectorAll('#nav button').forEach(b => b.setAttribute('aria-selected', b.dataset.v === v));
        VIEWS.forEach(k => { const x = document.getElementById('v-' + k); if (x) x.classList.add('hide'); });
        ['drugs', 'dz'].forEach(k => { const x = document.getElementById('v-' + k); if (x) x.classList.add('hide'); });
        sec.classList.remove('hide');
        window.scrollTo(0, 0);
        st.focus = false; render();
        if (typeof navReveal === 'function') navReveal(v);
      } catch (e) {
        console.error('The FTU tab could not be drawn; showing Topics.', e);
        sec.classList.add('hide');
        return orig.call(this, 'topics');
      }
    };
  } catch (e) { console.error('The FTU tab could not be added; the rest of the page is unaffected.', e); }
  return {state: st, render, regions: REG, tubes: TUBES, make, parse};
})();
