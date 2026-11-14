/* ftu_ui.js: the FTU tab (Louis, 2026-11-14: "a section where you can practice and type in the FTU ... a good visual diagram ... keeps track of what you're
   missing and getting right"). Course-level, no core edit; a tab in the same way as dz_ui.js.
   Every number is Dr. Patel's Dermatitis deck (Patel_Dermatitis-Therapeutics-Student.pdf):
   - slide 10: one adult fingertip unit (FTU) = 0.5 g; tubes 15, 30, 45, 60, 80, 100 g; prescribed amounts are rounded up to a tube size;
   - slide 11: the adult chart (Long and Finlay 1991) and the body figure, "only for adult"; slide 12: pediatrics, "just know it is smaller";
   - slide 13: face and neck 1.25 g = 2.5 FTU, twice daily for two weeks = 35 g, prescribe 45 g; one side of the trunk 3.5 g = 7 FTU,
     twice daily for two weeks = 98 g, prescribe 100 g.
   Every answer is computed from the chart below, never typed in by hand; the working is shown with the arithmetic from the same numbers.
   Storage: one key per profile in the page's namespace (<NS>:ftu:v1:<profile>, so /preview/ and the live page keep separate records and the
   preview's first-visit copy brings the live one over); written only when a question is answered or Reset is pressed. The core's export
   and Erase do not reach a course key, so the tab keeps its own Reset. A refused write is reported in one line; the tab works without storage. */
const FTU_UI = (() => {
  const ok = typeof document !== 'undefined' && typeof MutationObserver !== 'undefined' && document.getElementById &&
             document.getElementById('nav') && typeof document.getElementById('nav').insertBefore === 'function';
  if (!ok) return null;
  const ID = 'ftu';
  // the core's own naming: NS is COURSE.ns, plus '-preview' on the preview page; records are per profile. NS and PROFILE are declared
  // after this file runs, so the key is formed at first use.
  const KEY = () => {
    let ns, p = '';
    try { ns = NS; } catch (e) { ns = ((typeof COURSE !== 'undefined' && COURSE.ns) || 'drill') + ((typeof BUILD !== 'undefined' && BUILD.preview) ? '-preview' : ''); }
    try { p = PROFILE || ''; } catch (e) {}
    return ns + ':ftu:v1:' + p;
  };
  const G_PER_FTU = 0.5, TUBES = [15, 30, 45, 60, 80, 100];                     // slide 10
  // slide 11 chart; `name` is the slide's own wording (tables, workings), `s` the same row inside a sentence (stems)
  const REG = [
    {id: 'scalp',  name: 'Scalp', s: 'the scalp', ftu: 3},
    {id: 'face',   name: 'Face and neck', s: 'the face and neck', ftu: 2.5},
    {id: 'hand',   name: 'One hand (front and back) including fingers', short: 'One hand', s: 'one hand, front and back, including the fingers', ftu: 1},
    {id: 'arm',    name: 'One arm including entire hand', short: 'One arm incl. hand', s: 'one arm including the entire hand', ftu: 4},
    {id: 'elbows', name: 'Elbows', s: 'the elbows (the chart row "Elbows")', ftu: 1},
    {id: 'soles',  name: 'Both soles', s: 'both soles', ftu: 1.5},
    {id: 'foot',   name: 'One foot including toes', short: 'One foot', s: 'one foot including the toes', ftu: 2},
    {id: 'leg',    name: 'One leg including foot', short: 'One leg incl. foot', s: 'one leg including the foot', ftu: 8},
    {id: 'butt',   name: 'Buttocks', s: 'the buttocks', ftu: 4},
    {id: 'knees',  name: 'Knees', s: 'the knees (the chart row "Knees")', ftu: 1},
    {id: 'trunk',  name: 'Trunk both sides', s: 'both sides of the trunk', ftu: 14, note: '7 FTU each side'},
    // slide 13's wording; on the slide 11 chart it is half of "Trunk both sides 14 (7 FTU each side)"
    {id: 'trunk1', name: 'One side of the trunk (chest and abdomen, or thoracic and lumbar back)', short: 'One side of the trunk',
     s: 'one side of the trunk (chest and abdomen, or thoracic and lumbar back)', ftu: 7}
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
  const blank = () => ({v: 1, skill: {}, reg: {}});
  const st = {mode: 'all', q: null, done: false, last: null, stats: null, key: null, unsaved: false, pane: null, open: null};
  // a stored record is used only when its whole shape is right: counts are whole numbers, 0 or more; `d` is what is still owed (below)
  function clean(j){
    const obj = x => !!x && typeof x === 'object' && !Array.isArray(x);
    const n = x => Number.isInteger(x) && x >= 0;
    if (!obj(j) || j.v !== 1 || !obj(j.skill) || !obj(j.reg)) return null;
    const out = blank();
    for (const [part, ids] of [['skill', SKEYS], ['reg', REG.map(r => r.id)]]) {
      for (const id of ids) {
        const c = j[part][id];
        if (c === undefined) continue;
        if (!obj(c) || !n(c.r) || !n(c.w) || !(c.d === undefined || n(c.d))) return null;
        out[part][id] = {r: c.r, w: c.w, d: Math.min(c.d || 0, c.w)};
      }
    }
    return out;
  }
  function load(){
    try { return clean(JSON.parse(localStorage.getItem(KEY()) || 'null')) || blank(); } catch (e) {}
    return blank();
  }
  // the record follows the page's namespace and the profile in use: read again whenever the key changes
  function sync(){ const k = KEY(); if (st.key !== k || !st.stats) { st.key = k; st.stats = load(); st.unsaved = false; } }
  function save(){ try { localStorage.setItem(KEY(), JSON.stringify(st.stats)); st.unsaved = false; } catch (e) { st.unsaved = true; } }
  const cnt = (o, k) => (o[k] || {r: 0, w: 0, d: 0});
  // r right, w missed, d owed: a miss adds one to d, a right answer takes one off; "My misses" lists what has d above 0
  function record(q, right){
    sync();
    const bump = (m, k) => { const c = m[k] || (m[k] = {r: 0, w: 0, d: 0}); if (right) { c.r++; c.d = Math.max(0, (c.d || 0) - 1); } else { c.w++; c.d = (c.d || 0) + 1; } };
    bump(st.stats.skill, q.skill);
    q.regs.forEach(id => bump(st.stats.reg, id));
    save();
  }
  const acc = c => { const n = c.r + c.w; return n ? c.r / n : null; };
  const word = a => a == null ? 'not tried' : a >= 0.75 ? 'solid' : a >= 0.5 ? 'shaky' : 'missing';
  const tone = a => a == null ? 'n' : a >= 0.75 ? 'g' : a >= 0.5 ? 'a' : 'r';

  /* ---------- questions: each carries its answer, the working and the slide ---------- */
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const fits = (r, apps, days) => r.ftu * G_PER_FTU * apps * days <= TUBES[TUBES.length - 1];   // within the largest tube (100 g)
  const COURSEABLE = REG.filter(x => x.id !== 'trunk');
  function scenario(rid){
    // a region, applications a day, days: the amount stays within the largest tube
    const opts = [];
    for (const r of (rid ? COURSEABLE.filter(x => x.id === rid) : COURSEABLE)) for (const apps of [1, 2]) for (const days of [7, 14]) if (fits(r, apps, days)) opts.push({r, apps, days});
    if (!opts.length) return null;
    const r = rid ? opts[0].r : pick(COURSEABLE.filter(x => opts.some(o => o.r === x)));
    const o = pick(opts.filter(x => x.r === r));
    return {r, apps: o.apps, days: o.days, g: r.ftu * G_PER_FTU * o.apps * o.days};
  }
  const fixed = [
    {r: 'face', apps: 2, days: 14},         // slide 13
    {r: 'trunk1', apps: 2, days: 14}        // slide 13
  ];
  const tubeFor = g => TUBES.find(t => t >= g);
  const phr = (apps, days) => `${apps === 1 ? 'once' : 'twice'} daily for ${days === 7 ? 'one week' : 'two weeks'}`;
  // chart rows that lie on another row: such a pair is never added (one arm includes the hand and an elbow; one leg the foot, a knee
  // and a sole; a foot its sole; the trunk row is twice the one-side row)
  const OVER = {arm: ['hand', 'elbows'], leg: ['foot', 'knees', 'soles'], foot: ['soles'], trunk: ['trunk1']};
  const clash = (x, y) => x === y || (OVER[x] || []).includes(y) || (OVER[y] || []).includes(x);
  const SUMPOOL = REG.filter(x => !['trunk', 'trunk1'].includes(x.id));
  // make(skill): a random question of that skill; make(skill, rid): one that uses area rid, or null when that skill has none for it
  function make(skill, rid){
    if (skill === 'region') {
      const r = rid ? R(rid) : pick(REG);
      const work = r.id === 'trunk1'
        ? `Patel Dermatitis slide 13: one side of the trunk = ${num(r.ftu)} FTU (slide 11 chart: trunk both sides 14, 7 FTU each side).`
        : `Patel Dermatitis slide 11 chart: ${esc(r.name)} = ${num(r.ftu)} FTU${r.note ? ' (' + esc(r.note) + ')' : ''}.`;
      return {skill, regs: [r.id], hi: [r.id], stem: `How many adult fingertip units cover <b>${esc(r.s)}</b>?`, unit: 'FTU', ans: r.ftu, work};
    }
    if (skill === 'sum') {
      const a = rid ? SUMPOOL.find(x => x.id === rid) : pick(SUMPOOL);
      if (!a) return null;
      const b = pick(SUMPOOL.filter(x => !clash(a.id, x.id)));
      const [x, y] = Math.random() < 0.5 ? [a, b] : [b, a];
      return {skill, regs: [x.id, y.id], hi: [x.id, y.id], stem: `An adult has the same eruption on <b>${esc(x.s)}</b> and <b>${esc(y.s)}</b>. How many fingertip units cover both for one application?`,
              unit: 'FTU', ans: x.ftu + y.ftu, work: `Slide 11 chart: ${esc(x.name)} ${num(x.ftu)} + ${esc(y.name)} ${num(y.ftu)} = ${num(x.ftu + y.ftu)} FTU.`};
    }
    if (skill === 'grams') {
      const r = rid ? R(rid) : pick(REG);
      return {skill, regs: [r.id], hi: [r.id], stem: `An adult needs <b>${num(r.ftu)} fingertip units</b> for one application to ${esc(r.s)}. How many grams is that?`,
              unit: 'g', ans: r.ftu * G_PER_FTU, work: `Slide 10: 1 FTU = 0.5 g, so ${num(r.ftu)} FTU × 0.5 g = ${num(r.ftu * G_PER_FTU)} g.`};
    }
    const f = !rid && Math.random() < 0.25 ? pick(fixed) : null;
    const s = f ? {r: R(f.r), apps: f.apps, days: f.days, g: R(f.r).ftu * G_PER_FTU * f.apps * f.days} : scenario(rid);
    if (!s) return null;
    const base = `An adult is prescribed an ointment for <b>${esc(s.r.s)}</b>, applied <b>${phr(s.apps, s.days)}</b>.`;
    const calc = `${num(s.r.ftu)} FTU × 0.5 g × ${s.apps} a day × ${s.days} days = ${num(s.g)} g`;
    if (skill === 'apply') {
      return {skill, regs: [s.r.id], hi: [s.r.id], stem: base + ' How many grams are needed in total?', unit: 'g', ans: s.g,
              work: `Slide 13 method: FTU × 0.5 g × applications a day × days. ${calc}.`};
    }
    const t = tubeFor(s.g);
    return {skill: 'tube', regs: [s.r.id], hi: [s.r.id], stem: base + ' Which tube size (in grams) do you prescribe?', unit: 'g', ans: t,
            work: `${calc}. Slide 10: round up to a tube size (15, 30, 45, 60, 80, 100 g), so ${num(s.g)} g → ${t} g.`};
  }
  // what is still owed: skills and areas missed more times than they have been answered right since
  const owed = () => ({skills: SKEYS.filter(k => cnt(st.stats.skill, k).d > 0), regs: REG.map(r => r.id).filter(id => cnt(st.stats.reg, id).d > 0)});
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  // My misses: a question on an owed skill and an owed area together when there is one, else on either; null when nothing is owed
  function next(){
    if (st.mode !== 'miss') return make(st.mode === 'all' ? pick(SKEYS) : st.mode);
    sync();
    const o = owed();
    if (!o.skills.length && !o.regs.length) return null;
    const tries = [];
    for (const k of shuffle(o.skills)) for (const id of shuffle(o.regs)) tries.push([k, id]);
    for (const id of shuffle(o.regs)) for (const k of shuffle(SKEYS)) tries.push([k, id]);
    for (const [k, id] of tries) { const q = make(k, id); if (q) return q; }
    return make(pick(o.skills));
  }
  /* A typed answer is graded only when it holds one number: digits with an optional unit (3.5, .5, 45 g tube, 14 FTU), a decimal comma
     (1,25), a simple fraction (5/2, 1 1/2, ½). With an equals sign the number after the last one is read ("7 x 0.5 = 3.5").
     Anything else (two numbers, words, nothing) gives null and is not graded. */
  const one = s => {
    let t = String(s).trim().toLowerCase().replace(/½/g, ' 1/2')
      .replace(/[\s-]*(?:ftus?|fingertip[\s-]units?|(?:g|grams?)(?:[\s-]*tubes?)?)\.?$/, '').trim();
    t = t.replace(/^(\d+),(\d{1,2})$/, '$1.$2');            // decimal comma; no answer reaches 1,000
    if (/^(?:\d+(?:\.\d+)?|\.\d+)$/.test(t)) return parseFloat(t);
    const m = t.match(/^(?:(\d+)\s+)?(\d+)\s*\/\s*(\d+)$/);  // a/b and n a/b
    return m && +m[3] ? +(m[1] || 0) + m[2] / m[3] : null;
  };
  const parse = s => { s = String(s == null ? '' : s); const i = s.lastIndexOf('='); return one(i >= 0 ? s.slice(i + 1) : s); };

  /* ---------- diagram ---------- */
  // front and back figure, plus the soles; each shape lists the chart rows it belongs to. A limb shape holds two subpaths:
  // the first is the limb that stands for a "One ..." row in the front view, the second the same limb seen from behind.
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
  const ONE = ['hand', 'arm', 'foot', 'leg'];            // chart rows that name one limb

  function diagram(hi){
    const sb = st.stats.reg;
    hi = hi || [];
    const shape = (x, v) => {
      const ids = x[1].split(' '), lead = ids[0], mine = v === 'b' ? 1 : 0;   // mine: the one limb, the same limb in both views
      return x[2].split(/\s+(?=M)/).map((d, k) => {
        // a "One ..." row is one limb: the other limb is drawn neutral, with no outline and no colour
        const own = !ONE.includes(lead) || k === mine;
        const on = ids.some(i => hi.includes(i) && (i === 'trunk1' ? v === 'f' : ONE.includes(i) ? k === mine : true));
        const a = own ? acc(cnt(sb, lead)) : null;
        const name = x[3] + (v === 'b' && !/back/.test(x[3]) ? ' (back view)' : '');
        // one keyboard stop per shape; its other subpath (second elbow, the neck, the other limb) is the same row for a pointer
        const key = k === (ONE.includes(lead) ? mine : 0);
        const a11y = key ? `tabindex="0" role="button" aria-label="${esc(name)}: ${word(a)}${on ? ', the area in question' : ''}"` : 'aria-hidden="true"';
        return `<path class="ftush ${tone(a)}${on ? ' on' : ''}${own ? '' : ' other'}" data-r="${x[1]}" data-k="${k}" ${a11y} d="${d}"><title>${esc(x[3])}</title></path>`;
      }).join('');
    };
    const grp = v => SHAPES.filter(x => x[0] === v).map(x => shape(x, v)).join('');
    // elbows and knees are small: a wider unseen band around each takes the tap
    const hit = v => SHAPES.filter(x => x[0] === v && /^(elbows|knees)/.test(x[1])).map(x => `<path class="ftuhit" data-r="${x[1]}" aria-hidden="true" d="${x[2]}"></path>`).join('');
    return `<svg class="ftusvg" viewBox="0 0 430 296" role="group" aria-label="Adult body, front, back and soles, with the areas of the fingertip-unit chart">
      <g>${grp('f')}${hit('f')}</g><g transform="translate(160 0)">${grp('b')}${hit('b')}</g><g>${grp('s')}</g>
      <text x="90" y="291" text-anchor="middle" class="ftulbl">Front</text><text x="250" y="291" text-anchor="middle" class="ftulbl">Back</text><text x="373" y="240" text-anchor="middle" class="ftulbl">Soles</text>
    </svg>`;
  }

  /* ---------- views ---------- */
  function statusTable(){
    const rows = REG.map(r => {
      const c = cnt(st.stats.reg, r.id), a = acc(c);
      return `<tr><th scope="row">${esc(r.short || r.name)}</th><td>${num(r.ftu)}</td><td>${c.r}</td><td>${c.w}</td><td class="${a == null ? '' : tone(a)}">${word(a)}</td></tr>`;
    }).join('');
    const srows = SKEYS.map(k => { const c = cnt(st.stats.skill, k), a = acc(c);
      return `<tr><th scope="row">${esc(SKILLS[k])}</th><td>${c.r}</td><td>${c.w}</td><td>${a == null ? '–' : Math.round(a * 100) + '%'}</td></tr>`; }).join('');
    return `<h3>What you get right and miss</h3>
      <table class="ftutab"><caption>By skill</caption><thead><tr><th>Skill</th><th>Right</th><th>Missed</th><th>Accuracy</th></tr></thead><tbody>${srows}</tbody></table>
      <table class="ftutab"><caption>By area (a question on an area counts for each area it uses)</caption><thead><tr><th>Area</th><th>FTU</th><th>Right</th><th>Missed</th><th>Status</th></tr></thead><tbody>${rows}</tbody></table>
      <p class="ftunote">Status: solid is 75% or more right, shaky 50% to 74%, missing under 50%. The diagram follows the same rule.</p>
      ${st.unsaved ? '<p class="ftunote" id="ftuunsaved" role="status">This record cannot be saved on this device; it lasts until the page is closed or reloaded.</p>' : ''}`;
  }
  const fbHtml = q => `<b>${st.last.right ? 'Right.' : 'Not quite.'}</b> ${st.last.right ? '' : `You typed ${esc(st.last.typed)}; the answer is ${q.skill === 'tube' ? `a <b>${num(q.ans)} g tube</b>` : `<b>${num(q.ans)} ${esc(q.unit)}</b>`}. `}<p>${q.work}</p>`;
  function render(){
    const p = st.pane; if (!p) return;
    sync();
    // the same open question drawn again (the tab shown again, Reset): what is typed in the box, and the cursor, stay
    const old = document.getElementById('ftuin');
    const keep = (st.q && st.q === st.open && !st.done && old) ? {v: old.value, f: document.activeElement === old} : null;
    const q = st.q || (st.q = next());
    st.open = q && !st.done ? q : null;                    // the question whose empty box is on the page
    const modes = [['all', 'Mixed'], ['miss', 'My misses'], ...SKEYS.map(k => [k, SKILLS[k]])];
    const form = q ? `<form class="ftuq" id="ftuf" autocomplete="off" novalidate>
          <p class="ftustem">${q.stem}</p>
          <label class="ftulab"><span>Your answer (${esc(q.unit)})</span>
            <input id="ftuin" inputmode="decimal" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-describedby="ftumsg" ${st.done ? 'readonly' : ''} value="${st.done ? esc(st.last.typed) : ''}"></label>
          <p id="ftumsg" class="ftumsg" role="alert"></p>
          ${st.done ? '<button type="button" class="ftuprim" data-act="next" aria-describedby="ftufb">Next question</button>' : '<button type="submit" class="ftuprim">Check</button>'}
          <div id="ftufb" class="ftufb" aria-live="polite"></div>
        </form>`
      : `<div class="ftuq" id="ftunone"><p class="ftustem">No misses to review: nothing you missed is still waiting for a right answer.</p>
          <button type="button" class="ftuprim" data-mode="all">Practice Mixed</button></div>`;
    p.innerHTML = `
      <h2 class="ftutitle">Fingertip units: practice</h2>
      <p class="ftuintro">Dr. Patel, 11/12: the fingertip-unit calculations have come back three times, so practice them (adult chart only). One adult FTU = 0.5 g; amounts are rounded up to a tube of 15, 30, 45, 60, 80 or 100 g (Patel Dermatitis slides 10–13). Slide 12 gives the pediatric amounts for reference only; Dr. Patel, 11/06: the amount for a child is smaller, and the pediatric numbers are not to be memorized (T).</p>
      <div class="ftumodes" role="group" aria-label="What to practice">${modes.map(m => `<button type="button" data-mode="${m[0]}" aria-pressed="${st.mode === m[0]}">${esc(m[1])}</button>`).join('')}</div>
      <div class="ftugrid">
        <div class="ftufig">${diagram(q ? q.hi : [])}<p class="ftunote">The area in question has a thick outline; for a row that names one limb, one limb is outlined. Fill and edge: green with a plain edge is solid, amber with a dashed edge shaky, red with a dotted edge missing, grey not tried. After you answer, tap any area to see its chart number.</p><div id="ftutip" class="ftutip" aria-live="polite"></div></div>
        ${form}
      </div>
      ${statusTable()}
      <p class="ftureset"><button type="button" class="ftuquiet" data-act="reset">Reset my FTU record</button></p>
      <p class="ftunote" id="ftukept">This record is kept on this device, separately from quiz progress.</p>`;
    // the feedback goes into its live region after the region is in the page, so that it is announced
    if (q && st.done) { const f = document.getElementById('ftufb'); if (f) { f.classList.add(st.last.right ? 'good' : 'bad'); f.innerHTML = fbHtml(q); } }
    if (q && !st.done) { const i = document.getElementById('ftuin'); if (i) { if (keep) i.value = keep.v; if (st.focus || (keep && keep.f)) { try { i.focus({preventScroll: !!keep}); } catch (e) {} } } }
  }
  function onSubmit(e){
    e.preventDefault();
    if (st.done || !st.q) return;
    const q = st.q, inp = document.getElementById('ftuin'); const typed = inp ? inp.value.trim() : '';
    const v = parse(typed);
    if (v == null) {
      // not one number: nothing is graded or recorded
      const m = document.getElementById('ftumsg');
      if (m) m.textContent = typed ? 'Type one number, for example 3.5 or 5/2.' : 'Type a number.';
      if (inp) { inp.setAttribute('aria-invalid', 'true'); inp.focus(); }
      return;
    }
    const right = Math.abs(v - q.ans) < 1e-9;
    st.done = true; st.last = {typed, right}; st.focus = false;
    record(q, right);
    render();
    const nb = st.pane.querySelector('[data-act="next"]'); if (nb) nb.focus();
  }
  function tip(sh){
    const ids = sh.dataset.r.split(' '), r = R(ids[0]);
    const t = document.getElementById('ftutip');
    if (!t || !r) return;
    if (st.q && !st.done) { t.textContent = 'Answer the question first; then tap an area to see its chart number.'; return; }
    const c = cnt(st.stats.reg, r.id);
    t.textContent = `${r.name}: ${num(r.ftu)} FTU${r.note ? ' (' + r.note + ')' : ''} = ${num(r.ftu * G_PER_FTU)} g for one application. Your record: ${word(acc(c))} (${c.r} right, ${c.w} missed).`;
  }
  // a new question (Next, a mode button); with nothing owed in "My misses" the cursor goes to the Mixed button
  function fresh(){
    st.q = null; st.done = false; st.focus = true; render();
    if (!st.q) { const g = st.pane.querySelector('#ftunone [data-mode]'); if (g) { try { g.focus(); } catch (x) {} } }
  }
  function onClick(e){
    const m = e.target.closest('[data-mode]');
    if (m) { st.mode = m.dataset.mode; fresh(); return; }
    const a = e.target.closest('[data-act]');
    if (a && a.dataset.act === 'next') { fresh(); return; }
    if (a && a.dataset.act === 'reset') {
      if (typeof confirm === 'function' && !confirm('Erase your FTU record?')) return;
      sync(); st.stats = blank(); save(); st.focus = false; render();
      const rb = st.pane.querySelector('[data-act="reset"]'); if (rb) { try { rb.focus(); } catch (x) {} }
      return;
    }
    const sh = e.target.closest('[data-r]');
    if (sh) tip(sh);
  }
  function onKey(e){
    if (e.key !== 'Enter' && e.key !== ' ' && e.key !== 'Spacebar') return;
    const sh = e.target && e.target.closest && e.target.closest('.ftush');
    if (sh) { e.preventDefault(); tip(sh); }
  }
  const CSS = `
#v-ftu{--ftu-g:#1b7a3d;--ftu-gbg:#e2f4e8;--ftu-a:#a35a00;--ftu-abg:#fdf0dc;--ftu-r:#b3261e;--ftu-rbg:#fdecea}
#v-ftu .ftutitle{margin:4px 0 2px}#v-ftu .ftuintro{color:var(--text-dim);margin:0 0 10px;font-size:14.5px}
#v-ftu .ftumodes{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0 12px}
#v-ftu .ftumodes button{font:inherit;font-size:14px;min-height:44px;border:1px solid var(--line);background:var(--paper);color:var(--text);border-radius:999px;padding:5px 13px}
#v-ftu .ftumodes button[aria-pressed=true]{background:var(--accent);color:#fff;border-color:var(--accent)}
#v-ftu .ftugrid{display:grid;gap:14px;grid-template-columns:1fr}
@media (min-width:860px){#v-ftu .ftugrid{grid-template-columns:minmax(300px,420px) 1fr;align-items:start}}
#v-ftu .ftusvg{width:100%;height:auto;display:block;border:1px solid var(--line);border-radius:10px;background:var(--paper)}
#v-ftu .ftush{stroke:var(--text-dim);stroke-width:1;cursor:pointer;fill:var(--line);fill-opacity:.55}
#v-ftu .ftush.g{fill:var(--ftu-g);fill-opacity:.55}#v-ftu .ftush.a{fill:var(--ftu-a);fill-opacity:.6}#v-ftu .ftush.r{fill:var(--ftu-r);fill-opacity:.6}
#v-ftu .ftush.a{stroke-dasharray:5 3}#v-ftu .ftush.r{stroke-dasharray:1.5 2.5}
#v-ftu .ftush.on{stroke:var(--accent);stroke-width:4;paint-order:stroke}
#v-ftu .ftush:focus{outline:none}#v-ftu .ftush:focus-visible{outline:3px solid var(--accent);outline-offset:2px}
#v-ftu .ftuhit{fill:none;stroke:transparent;stroke-width:16;pointer-events:stroke;cursor:pointer}
#v-ftu .ftulbl{font-size:11px;fill:var(--text-dim)}
#v-ftu .ftunote{font-size:12.5px;color:var(--text-dim);margin:6px 0}
#v-ftu .ftutip{min-height:20px;font-size:14px;margin:4px 0}
#v-ftu .ftuq{border:1px solid var(--line);border-radius:10px;padding:12px;background:var(--paper)}
#v-ftu .ftustem{font-size:16px;margin:0 0 10px}
#v-ftu .ftulab span{display:block;font-size:12.5px;color:var(--text-dim)}
#v-ftu .ftulab input{width:100%;min-height:44px;font:inherit;font-size:18px;padding:6px 10px;border:1px solid var(--line);border-radius:8px;background:var(--paper);color:var(--text);box-sizing:border-box}
#v-ftu .ftuprim{font:inherit;min-height:44px;margin:10px 0 0;padding:6px 18px;border:0;border-radius:8px;background:var(--accent);color:#fff;font-weight:700}
#v-ftu .ftuquiet{font:inherit;font-size:13.5px;min-height:44px;border:1px solid var(--line);background:none;color:var(--text-dim);border-radius:8px;padding:4px 12px}
#v-ftu .ftumsg{font-size:13.5px;color:var(--ftu-r);font-weight:700;margin:6px 0 0}#v-ftu .ftumsg:empty{display:none}
#v-ftu .ftulab input[aria-invalid=true]{border-color:var(--ftu-r)}
#v-ftu .ftureset{margin:10px 0 0}
#v-ftu .ftufb:empty{display:none}
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
    sec.addEventListener('keydown', onKey);
    const btn = document.createElement('button'); btn.setAttribute('data-v', ID); btn.textContent = 'FTU';
    btn.onclick = () => show(ID);
    const atBtn = nav.querySelector('button[data-v="drugs"]') || nav.querySelector('button[data-v="atlas"]');
    if (atBtn) nav.insertBefore(btn, atBtn); else nav.appendChild(btn);
    const orig = show;
    show = function(v){
      if (v !== ID) { sec.classList.add('hide'); return orig.apply(this, arguments); }
      let again = false;
      try { again = VIEW === ID && !sec.classList.contains('hide') && !!st.q && !st.done && !!document.getElementById('ftuin'); } catch (e) {}
      try {
        if (typeof figClose === 'function') figClose();
        if (typeof VIEW_NAME !== 'undefined' && !VIEW_NAME[ID]) VIEW_NAME[ID] = 'the fingertip units';
        VIEW = v;
        document.querySelectorAll('#nav button').forEach(b => b.setAttribute('aria-selected', b.dataset.v === v));
        VIEWS.forEach(k => { const x = document.getElementById('v-' + k); if (x) x.classList.add('hide'); });
        ['drugs', 'dz'].forEach(k => { const x = document.getElementById('v-' + k); if (x) x.classList.add('hide'); });
        sec.classList.remove('hide');
        // shown again while it is already on screen with an open question (the core does this on a profile change and on a storage
        // change from another tab): the page stays where it is, and render() keeps what is typed
        if (!again) window.scrollTo(0, 0);
        st.focus = false; render();
        if (typeof navReveal === 'function') navReveal(v);
      } catch (e) {
        console.error('The FTU tab could not be drawn; showing Topics.', e);
        sec.classList.add('hide');
        return orig.call(this, 'topics');
      }
    };
  } catch (e) { console.error('The FTU tab could not be added; the rest of the page is unaffected.', e); }
  return {state: st, render, regions: REG, tubes: TUBES, make, parse, clash, key: KEY, clean};
})();
