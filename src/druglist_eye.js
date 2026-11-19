/* ==========================================================================
   DRUG LIST, EYE (Exam 3): the ophthalmic drug chart as a second list
   --------------------------------------------------------------------------
   Course data file for the Drug list tab (druglist_ui.js), loaded after
   druglist_data.js. DRUGLIST_EYE has the same shape as DRUGLIST (cards D,
   CLASSES, DISEASES, PAGES, CHART_ROWS, KINDS, makeQuestion, parseTargets and
   the rest the tab reads), so the tab's Browse, Quiz me, Recall and Chart views
   run on it unchanged; druglist_ui.js swaps DL between the two lists (the
   switch at the top of the tab). Dermatology's data and logic are not touched.

   Source: the course ophthalmic drug chart ("PHAR 4346 - Ophthalmic Drug
   List", DrugChart_Ophthalmics.pdf, 4 pages, MD5
   fb54bd652217143c3453a9cbb7c30c70, "Last update: 2026"): p. 1-2 Glaucoma
   Treatment, p. 3 Allergic Conjunctivitis Treatment, p. 4 Dry Eye Treatment.
   One card per chart line (42). Every field below is copied from the chart as
   printed: the line's text (CHART_ROWS, `brands`), Rx/OTC, pharmacological
   class (chartClass), chemical class (CHEM) and indication (chartUse); a chart
   spelling that differs from the deck is kept as the card's name and the
   deck's spelling is said on the card (a note). Dr. Smith teaches the eye
   (Lectures 9-10); the chart is a guide, her slides and recording decide.

   Targets and mechanisms are NOT written here: parseTargets reads them at run
   time from the Reference tab's tables ref-ey-gl, ref-ey-ac and ref-ey-de
   (reference.js), the single source. TARGET_SPEC says, per target key, which
   section, table and row to read and which cell is the mechanism; `tg` is the
   short target shown and asked. Where `verbatim` is true `tg` is a quotation
   of that cell; otherwise `must` is a pattern the row must match (checked by
   druglist_check.js), so a Reference row that changes cannot leave a stale
   target. Each part carries the lecturer (Dr. Smith) and the citation:
   the Reference section and the row's own Slide cell.

   statuses: 'taught' the drug is in the Reference eye tables (her slides);
             'chart'  chart only: on the chart, in no eye slide (the three
                      OTC lubricants).
   Not on the chart, in the deck: cetirizine (slide 53) and tacrolimus
   (slide 66); listed in NOT_ON_CHART, shown in About this list.
   No storage of any kind is used by this file.
   ========================================================================== */
const DRUGLIST_EYE = (() => {
  const SMITH = DRUGLIST.BRAND_QUOTE;
  const C = (t, page) => ({t, by: 'chart', cite: 'Chart p. ' + page});
  const S = (t, cite) => ({t, by: 'smith', cite});
  const norm = DRUGLIST.norm;

  const CLASSES = {
    beta:   'Beta-receptor antagonists',
    a2:     'α2 agonist',
    chol:   'Cholinergic agonist',
    ache:   'Cholinesterase Inhibitor',
    ca:     'Carbonic Anhydrase (CA) Inhibitors',
    pg:     'Prostaglandin Agonists',
    rho:    'Rho kinase Inhibitor',
    comb:   'Combination Products',
    h1:     'H1 inverse agonists, some with Mast Cell Stabilizing properties',
    a2h1:   'α2 agonist/ H1 inverse agonist',
    calc:   'Calcineurin Inhibitor',
    lube:   'Ocular lubricant',
    steroid: 'Steroid',
    lfa:    'Lymphocyte Function-Associated Antigen 1 (LFA-1) Antagonist',
    nach:   'Nicotinic acetylcholine receptor agonist',
  };
  // questions on a class as a whole (shown beside a drug's own questions)
  const CLASS_Q = {beta: 'beta.?blocker|β.?blocker|beta.?receptor antagonist|β.?(receptor )?antagonist', a2: 'α2|alpha.?2', chol: 'cholinergic|muscarinic|M3',
    ache: 'cholinesterase', ca: 'carbonic anhydrase', pg: 'prostaglandin|PGF2', rho: 'rho kinase|RhoA', h1: 'H1|antihistamine|mast cell',
    calc: 'calcineurin', lfa: 'LFA-1', nach: 'nicotinic'};
  const DISEASES = {gl: 'Glaucoma / elevated IOP / ocular hypertension', ac: 'Allergic conjunctivitis', de: 'Dry eye (keratoconjunctivitis sicca)'};
  const PAGES = {1: 'Glaucoma treatment', 2: 'Glaucoma treatment, continued', 3: 'Allergic conjunctivitis treatment', 4: 'Dry eye treatment'};

  const CHEMS = {
    aryl: 'Aryloxypropanolamines', imid: 'Imidazoline', carb: 'Carbamate, Ester', phos: 'Phosphoryl', sulf: 'Sulfonamides', prost: 'Prostaglandins',
    iso: 'Isoquinoline', multi: 'Multi-cyclics', pept: 'Cyclic peptide', ster: 'Steroid', benz: 'Benzazepine'};
  const blank = (page, how) => ({no: 'blank', why: how === 'dash' ? 'the chart\'s cell is "–", no chemical class' : 'cell blank on the chart',
    shown: [C(how === 'dash' ? 'Chemical class column: "–"' : 'Chemical class column: blank', page)]});
  const chemDef = {};
  const D = [];
  /* a card: id, name, brands (as printed), page, cls, dz, rx, chartUse, chem key | 'blank' | 'dash' | 'group', line (the chart's own text) */
  function add(o){
    const d = {id: 'ey-' + o.id, name: o.name, alt: o.alt || [], brands: o.brands || [], page: o.page, cls: o.cls, dz: [o.dz], rx: o.rx,
      status: o.status || 'taught', chartClass: CLASSES[o.cls], chartUse: o.use, tgt: o.tgt || null, tgt2: o.tgt2 || null,
      notes: o.notes || [], q: o.q, sub: o.sub || '', line: o.line, group: o.group};
    if (o.chem) {
      if (o.chem === 'blank' || o.chem === 'dash') chemDef[d.id] = blank(o.page, o.chem);
      else if (o.chem === 'group') chemDef[d.id] = {no: 'group', why: 'the chart\'s one cell names several chemical classes, one per component',
        shown: [C('Chemical class column (one cell for the four combination products): Aryloxypropanolamines, Imidazolines, Prostaglandins', 2)]};
      else chemDef[d.id] = {t: CHEMS[o.chem], src: [C('Chemical class column: ' + CHEMS[o.chem], o.page)]};
    }
    D.push(d);
  }
  const SPELL = {
    trav: S('The slides and the Reference table spell it "Travaprost" (slide 38); the chart prints "Travoprost". The chart\'s spelling is the card\'s name.', 'Eye 38; ref-ey-gl'),
    slide57: S('Slide 57 prints phenylephrine under α2 agonists, while the chart on slide 8 lists phenylephrine as the α1 agonist; the lecture reads the slide 57 list as α2 agonists. The drug chart prints it under α2 agonist.', 'Eye 57, 8; ref-ey-ac'),
  };
  const ROUTE = r => ({t: `The chart prints the line as "… – ${r}".`, by: 'remark'});

  /* ---------- p. 1: glaucoma ---------- */
  const BETA = {cls: 'beta', dz: 'gl', rx: 'Rx', use: 'Elevated IOP', chem: 'aryl', tgt: 'ey-beta', page: 1};
  add(Object.assign({id: 'timolol', name: 'Timolol', brands: ['Timoptic', 'Isatolol', 'Timoptic XE'], line: 'Timolol (Timoptic, Isatolol, Timoptic XE)', q: 'timolol|timoptic',
    notes: [{t: 'The chart prints the second brand as "Isatolol".', by: 'remark'}]}, BETA));
  add(Object.assign({id: 'carteolol', name: 'Carteolol', brands: ['Ocupress'], line: 'Carteolol (Ocupress)', q: 'carteolol|ocupress'}, BETA));
  add(Object.assign({id: 'levobunolol', name: 'Levobunolol', brands: ['Betagan'], line: 'Levobunolol (Betagan)', q: 'levobunolol|betagan'}, BETA));
  add(Object.assign({id: 'betaxolol', name: 'Betaxolol', brands: ['Betoptic-S'], line: 'Betaxolol (Betoptic-S)', q: 'betaxolol|betoptic'}, BETA));
  add({id: 'brimonidine', name: 'Brimonidine (glaucoma, p. 1)', alt: ['Brimonidine'], brands: ['Alphagan P'], page: 1, cls: 'a2', dz: 'gl', rx: 'Rx', use: 'Elevated IOP', chem: 'imid',
    tgt: 'ey-brim', line: 'Brimonidine (Alphagan P)', q: 'brimonidine|alphagan', sub: 'glaucoma line, p. 1',
    notes: [{t: 'Brimonidine is on the chart twice: this p. 1 line (Rx, glaucoma) and the p. 3 line (Lumify, OTC, allergic conjunctivitis). Each is its own card.', by: 'remark'}]});
  add({id: 'apraclonidine', name: 'Apraclonidine', brands: ['Iopidine'], page: 1, cls: 'a2', dz: 'gl', rx: 'Rx', use: 'Elevated IOP', chem: 'imid', tgt: 'ey-apra',
    line: 'Apraclonidine (Iopidine)', q: 'apraclonidine|iopidine'});
  add({id: 'carbachol', name: 'Carbachol', brands: ['Miostat'], page: 1, cls: 'chol', dz: 'gl', rx: 'Rx', use: 'Glaucoma', chem: 'carb', tgt: 'ey-m3',
    line: 'Carbachol (Miostat)', q: 'carbachol|miostat'});
  add({id: 'pilocarpine', name: 'Pilocarpine', brands: ['Vuity'], page: 1, cls: 'chol', dz: 'gl', rx: 'Rx', use: 'Glaucoma', chem: 'carb', tgt: 'ey-m3',
    line: 'Pilocarpine (Vuity)', q: 'pilocarpine|vuity'});
  add({id: 'echothiophate', name: 'Echothiophate', brands: ['Phospholine Iodine'], page: 1, cls: 'ache', dz: 'gl', rx: 'Rx', chem: 'phos', tgt: 'ey-ache',
    use: 'Chronic open-angle glaucoma; subacute or chronic angle-closure glaucoma after iridectomy or where surgery is refused or contraindicated',
    line: 'Echothiophate (Phospholine Iodine)', q: 'echothiophate|phospholine'});

  /* ---------- p. 2: glaucoma, continued ---------- */
  const CA = {cls: 'ca', dz: 'gl', rx: 'Rx', chem: 'sulf', page: 2};
  add(Object.assign({id: 'acetazolamide', name: 'Acetazolamide', brands: ['Diamox sequels'], use: 'Glaucoma', tgt: 'ey-ca-oral', sub: 'oral',
    line: 'Acetazolamide (Diamox sequels) – oral', q: 'acetazolamide|diamox', notes: [ROUTE('oral')]}, CA));
  add(Object.assign({id: 'methazolamide', name: 'Methazolamide', brands: ['Nepatazane'], use: 'Glaucoma', tgt: 'ey-ca-oral', sub: 'oral',
    line: 'Methazolamide (Nepatazane) – oral', q: 'methazolamide|nepatazane|neptazane', notes: [ROUTE('oral'), {t: 'The chart prints the brand as "Nepatazane".', by: 'remark'}]}, CA));
  add(Object.assign({id: 'dorzolamide', name: 'Dorzolamide', brands: ['Trusopt'], use: 'Elevated IOP', tgt: 'ey-ca-oph', sub: 'ophthalmic',
    line: 'Dorzolamide (Trusopt) – ophthalmic', q: 'dorzolamide|trusopt', notes: [ROUTE('ophthalmic')]}, CA));
  add(Object.assign({id: 'brinzolamide', name: 'Brinzolamide', brands: ['Azopt'], use: 'Elevated IOP', tgt: 'ey-ca-oph', sub: 'ophthalmic',
    line: 'Brinzolamide (Azopt) – ophthalmic', q: 'brinzolamide|azopt', notes: [ROUTE('ophthalmic')]}, CA));
  const PG = {cls: 'pg', dz: 'gl', rx: 'Rx', chem: 'prost', use: 'Open-Angle Glaucoma or Ocular HTN', tgt: 'ey-pg', page: 2};
  add(Object.assign({id: 'bimatoprost', name: 'Bimatoprost', brands: ['Lumigan'], line: 'Bimatoprost (Lumigan)', q: 'bimatoprost|lumigan|latisse'}, PG));
  add(Object.assign({id: 'latanoprost', name: 'Latanoprost', brands: ['Xalatan', 'Xelpros', 'Iyuzeh'], line: 'Latanoprost (Xalatan, Xelpros, Iyuzeh)', q: 'latanoprost(?!ene)|xalatan'}, PG));
  add(Object.assign({id: 'lbunod', name: 'Latanoprostene bunod', brands: ['Vyzulta'], line: 'Vyzulta (Latanoprostene bunod)', q: 'latanoprostene|vyzulta',
    notes: [{t: 'The chart prints this line brand first: "Vyzulta (Latanoprostene bunod)".', by: 'remark'}]}, PG));
  add(Object.assign({id: 'travoprost', name: 'Travoprost', alt: ['Travaprost'], brands: ['Travatan Z'], line: 'Travoprost (Travatan Z)', q: 'travoprost|travaprost|travatan',
    notes: [SPELL.trav]}, PG));
  add(Object.assign({id: 'tafluprost', name: 'Tafluprost', brands: ['Zioptan'], line: 'Tafluprost (Zioptan)', q: 'tafluprost|zioptan'}, PG));
  add({id: 'netarsudil', name: 'Netarsudil', brands: ['Rhopressa'], page: 2, cls: 'rho', dz: 'gl', rx: 'Rx', use: 'Open-Angle Glaucoma or Ocular HTN', chem: 'iso',
    tgt: 'ey-rho', line: 'Netarsudil (Rhopressa)', q: 'netarsudil|rhopressa'});
  const COMB = {cls: 'comb', dz: 'gl', rx: 'Rx', chem: 'group', use: 'Open-Angle Glaucoma or Ocular HTN', page: 2};
  add(Object.assign({id: 'timolol-dorz', name: 'Timolol and dorzolamide', brands: ['Cosopt', 'Cosopt PF'], tgt: 'ey-beta', tgt2: 'ey-ca-oph',
    line: 'Timolol and dorzolamide (Cosopt & Cosopt PF)', q: 'cosopt|timolol (and|\\+|/) ?dorzolamide'}, COMB));
  add(Object.assign({id: 'timolol-brim', name: 'Timolol and brimonidine', brands: ['Combigan'], tgt: 'ey-beta', tgt2: 'ey-brim',
    line: 'Timolol and brimonidine (Combigan)', q: 'combigan|timolol (and|\\+|/) ?brimonidine'}, COMB));
  add(Object.assign({id: 'brinz-brim', name: 'Brinzolamide and brimonidine', brands: ['Simbrinza'], tgt: 'ey-ca-oph', tgt2: 'ey-brim',
    line: 'Brinzolamide and brimonidine (Simbrinza)', q: 'simbrinza|brinzolamide (and|\\+|/) ?brimonidine'}, COMB));
  add(Object.assign({id: 'lat-netars', name: 'Latanoprost and netarsudil', brands: ['Rocklatan'], tgt: 'ey-pg', tgt2: 'ey-rho',
    line: 'Latanoprost and netarsudil (Rocklatan)', q: 'rocklatan|latanoprost (and|\\+|/) ?netarsudil'}, COMB));

  /* ---------- p. 3: allergic conjunctivitis ---------- */
  const H1 = {cls: 'h1', dz: 'ac', use: 'Allergic Conjunctivitis', chem: 'multi', tgt: 'ey-h1', tgt2: 'ey-mcs', page: 3};
  add(Object.assign({id: 'alcaftadine', name: 'Alcaftadine', brands: ['Lastacaft'], rx: 'Rx', line: 'Alcaftadine (Lastacaft)', q: 'alcaftadine|lastacaft'}, H1));
  add(Object.assign({id: 'epinastine', name: 'Epinastine', brands: ['Elestat'], rx: 'Rx', line: 'Epinastine (Elestat)', q: 'epinastine|elestat'}, H1));
  add(Object.assign({id: 'olopatadine', name: 'Olopatadine', brands: ['Pataday'], rx: 'Rx', line: 'Olopatadine (Pataday)', q: 'olopatadine|pataday'}, H1));
  add(Object.assign({id: 'azelastine', name: 'Azelastine', brands: ['Optivar'], rx: 'Rx', line: 'Azelastine (Optivar)', q: 'azelastine|optivar'}, H1));
  add(Object.assign({id: 'bepotastine', name: 'Bepotastine', brands: ['Bepreve'], rx: 'Rx', line: 'Bepotastine (Bepreve)', q: 'bepotastine|bepreve'}, H1));
  add(Object.assign({id: 'ketotifen', name: 'Ketotifen', brands: ['Alaway', 'Zaditor'], rx: 'OTC', line: 'Ketotifen (Alaway & Zaditor)', q: 'ketotifen|alaway|zaditor'}, H1));
  const A2 = {cls: 'a2', dz: 'ac', rx: 'OTC', use: 'Allergic Conjunctivitis', chem: 'blank', tgt: 'ey-a2-otc', page: 3};
  add(Object.assign({id: 'brimonidine-otc', name: 'Brimonidine (allergic conjunctivitis, p. 3)', alt: ['Brimonidine'], brands: ['Lumify'], line: 'Brimonidine (Lumify)', q: 'brimonidine|lumify', sub: 'allergic conjunctivitis line, p. 3',
    notes: [{t: 'Brimonidine is on the chart twice: this p. 3 line (Lumify, OTC, allergic conjunctivitis) and the p. 1 line (Alphagan P, Rx, glaucoma). Each is its own card.', by: 'remark'}]}, A2));
  add(Object.assign({id: 'naphazoline', name: 'Naphazoline', brands: ['Clear Eyes'], line: 'Naphazoline (Clear Eyes)', q: 'naphazoline(?!.{0,3}pheniramine)|clear eyes'}, A2));
  add(Object.assign({id: 'oxymetazoline', name: 'Oxymetazoline', brands: ['Ocuclear'], line: 'Oxymetazoline (Ocuclear)', q: 'oxymetazoline|ocuclear'}, A2));
  add(Object.assign({id: 'phenylephrine', name: 'Phenylephrine', brands: ['Altafrin'], line: 'Phenylephrine (Altafrin)', q: 'phenylephrine|altafrin', notes: [SPELL.slide57]}, A2));
  add(Object.assign({id: 'tetrahydrozoline', name: 'Tetrahydrozoline', brands: ['Visine'], line: 'Tetrahydrozoline (Visine)', q: 'tetrahydrozoline|visine'}, A2));
  add({id: 'naph-pheniramine', name: 'Naphazoline/Pheniramine', brands: ['Opcon-A', 'Naphcon-A'], page: 3, cls: 'a2h1', dz: 'ac', rx: 'OTC', use: 'Allergic Conjunctivitis', chem: 'imid',
    tgt: 'ey-a2-otc', tgt2: 'ey-h1', line: 'Naphazoline/Pheniramine (Opcon-A & Naphcon-A)', q: 'pheniramine|opcon|naphcon'});

  /* ---------- p. 4: dry eye ---------- */
  add({id: 'cyclosporine', name: 'Ophthalmic Cyclosporine', alt: ['Cyclosporine'], brands: ['Restasis'], page: 4, cls: 'calc', dz: 'de', rx: 'Rx', chem: 'pept', tgt: 'ey-cyclo',
    use: 'Keratoconjunctivitis sicca (Dry Eye Syndrome)', line: 'Ophthalmic Cyclosporine (Restasis)', q: 'cyclosporine|restasis'});
  const LUBE = {cls: 'lube', dz: 'de', rx: 'OTC', use: 'Dry Eye Syndrome', status: 'chart', page: 4};
  add(Object.assign({id: 'cmc', name: 'Carboxymethylcellulose', brands: ['Refresh', 'GenTeal'], chem: 'dash', line: 'Carboxymethylcellulose (Refresh, GenTeal)', q: 'carboxymethylcellulose|refresh|genteal'}, LUBE));
  add(Object.assign({id: 'hpc', name: 'Hydroxypropyl cellulose', alt: ['Hydroxypropyl celluose'], brands: ['Lacrisert'], chem: 'dash', line: 'Hydroxypropyl celluose (Lacrisert)', q: 'hydroxypropyl|lacrisert',
    notes: [{t: 'The chart prints the generic name as "Hydroxypropyl celluose"; the card uses the usual spelling.', by: 'remark'}]}, LUBE));
  add(Object.assign({id: 'tears', name: 'Artificial Tears', brands: ['Systane', 'GenTeal Tears'], chem: 'blank', line: 'Artificial Tears (Systane, GenTeal Tears)', q: 'artificial tears|systane'}, LUBE));
  add({id: 'loteprednol', name: 'Loteprednol', brands: ['Eysuvis'], page: 4, cls: 'steroid', dz: 'de', rx: 'Rx', chem: 'ster', tgt: 'ey-lote', use: 'Dry Eye Syndrome',
    line: 'Loteprednol (Eysuvis)', q: 'loteprednol|eysuvis'});
  add({id: 'lifitegrast', name: 'Lifitegrast', brands: ['Xiidra'], page: 4, cls: 'lfa', dz: 'de', rx: 'Rx', chem: 'dash', tgt: 'ey-lifi', use: 'Dry Eye Syndrome',
    line: 'Lifitegrast (Xiidra)', q: 'lifitegrast|xiidra'});
  add({id: 'varenicline', name: 'Intranasal varenicline', alt: ['Varenicline'], brands: ['Tyrvaya'], page: 4, cls: 'nach', dz: 'de', rx: 'Rx', chem: 'benz', tgt: 'ey-vareni',
    use: 'Dry Eye Syndrome', line: 'Intranasal varenicline (Tyrvaya)', q: 'varenicline|tyrvaya'});

  const CHART_ROWS = D.map(d => [d.page, d.line, d.id]);
  const CHEM = chemDef;
  const NOT_ON_CHART = {cetirizine: 'Cetirizine (ophthalmic H1 inverse agonist, no mast cell stabilization): slide 53 and the Reference allergic conjunctivitis table; not on the drug chart.',
    tacrolimus: 'Tacrolimus (binds FKBP; the complex inhibits calcineurin): slide 66 and the Reference calcineurin table; not on the drug chart (dry eye uses cyclosporine).'};
  const CHART_NOTES = [
    'Chart p. 1: the one pharmacological-class, chemical-class and indication cell of the first four drugs (timolol, carteolol, levobunolol, betaxolol) is shared; likewise brimonidine and apraclonidine, and carbachol and pilocarpine (the indication cell is one each).',
    'Chart p. 3: the chemical-class cell of the α2 agonists (brimonidine, naphazoline, oxymetazoline, phenylephrine, tetrahydrozoline) is blank; naphazoline/pheniramine\'s is "Imidazoline".',
    'Chart p. 4: the chemical-class cells of carboxymethylcellulose, hydroxypropyl cellulose and lifitegrast print "–" and the artificial tears cell is blank; those drugs get no chemical-class question.',
    'The chart marks some Rx cells yellow ("Yellow box indicates a Top 300 (BDK) drug", p. 1); that marking is not asked.',
    'Eye drugs in the deck and the Reference tables that are not on the chart: ' + Object.values(NOT_ON_CHART).join(' '),
  ];

  /* ---------- the Reference eye tables: target and mechanism, read at run time ---------- */
  const ENT = {beta: 'β', alpha: 'α', rsquo: '’', lsquo: '‘', ndash: '–', mdash: '—', amp: '&', lt: '<', gt: '>', nbsp: ' ', quot: '"'};
  const strip = s => String(s).replace(/<[^>]+>/g, ' ').replace(/&#(\d+);/g, (m, n) => String.fromCharCode(+n)).replace(/&([a-z]+);/g, (m, n) => ENT[n] != null ? ENT[n] : m).replace(/\s+/g, ' ').trim();
  /* per target key: sec (h3 id), table (0-based in the section), row (pattern on the first cell), mech (cell index), flow (cell index of
     "inflow or outflow"), tg (the short target), verbatim (tg is a quotation of the mech cell) or must (pattern the row must match). */
  const TARGET_SPEC = {
    'ey-beta':    {sec: 'ref-ey-gl', table: 0, row: /^β receptor antagonists/, mech: 2, flow: 3, tg: 'β-adrenergic receptor on the ciliary body', verbatim: true},
    'ey-apra':    {sec: 'ref-ey-gl', table: 0, row: /^α2 agonists: apraclonidine/, mech: 2, flow: 3, tg: 'α2 receptors on the ciliary body', verbatim: true},
    'ey-brim':    {sec: 'ref-ey-gl', table: 0, row: /^α2 agonists: brimonidine/, mech: 2, flow: 3, tg: 'α2 receptors on the ciliary body', verbatim: true},
    'ey-ca-oral': {sec: 'ref-ey-gl', table: 0, row: /^Carbonic anhydrase inhibitors, oral/, mech: 2, flow: 3, tg: 'Carbonic anhydrase (CA)', verbatim: true},
    'ey-ca-oph':  {sec: 'ref-ey-gl', table: 0, row: /^Carbonic anhydrase inhibitors, ophthalmic/, mech: 2, flow: 3, tg: 'Carbonic anhydrase (CA)', same: 'ey-ca-oral'},
    'ey-m3':      {sec: 'ref-ey-gl', table: 0, row: /^M3 agonists/, mech: 2, flow: 3, tg: 'M3 receptor on the sphincter muscle and the trabecular meshwork', verbatim: true},
    'ey-ache':    {sec: 'ref-ey-gl', table: 0, row: /^Acetylcholinesterase/, mech: 2, flow: 3, tg: 'Acetylcholinesterase', verbatim: true},
    'ey-pg':      {sec: 'ref-ey-gl', table: 0, row: /^Prostaglandin agonists/, mech: 2, flow: 3, tg: 'PGF2α receptor', verbatim: true},
    'ey-rho':     {sec: 'ref-ey-gl', table: 0, row: /^Rho kinase inhibitor/, mech: 2, flow: 3, tg: 'RhoA kinase', verbatim: true},
    // allergic conjunctivitis: the topic rows of the second and third tables
    'ey-h1':      {sec: 'ref-ey-ac', table: 1, row: /^H1 inverse agonism/, mech: 1, tg: 'H1 receptor (histamine)', must: /^H1 inverse agonism.*competes with histamine/},
    'ey-mcs':     {sec: 'ref-ey-ac', table: 1, row: /^Mast cell stabilization/, mech: 1, tg: null},
    'ey-a2-otc':  {sec: 'ref-ey-ac', table: 2, row: /^Naphazoline Oxymetazoline/, mech: 1, tg: 'α2 adrenergic receptors', must: /α2 agonists \(as printed\).*Adrenergic receptor agonists/},
    // dry eye
    'ey-cyclo':   {sec: 'ref-ey-de', table: 0, row: /^Cyclosporine/, mech: 2, tg: 'Calcineurin', must: /Calcineurin inhibitor.*IL-2/},
    'ey-lote':    {sec: 'ref-ey-de', table: 0, row: /^Loteprednol/, mech: 2, tg: null},
    'ey-lifi':    {sec: 'ref-ey-de', table: 0, row: /^Lifitegrast/, mech: 2, tg: 'LFA-1 (lymphocyte function-associated antigen 1)', must: /Lymphocyte function-associated antigen 1 \(LFA-1\)/},
    'ey-vareni':  {sec: 'ref-ey-de', table: 0, row: /^Varenicline/, mech: 2, tg: 'Heteromeric nicotinic acetylcholine (nACh) receptor subtypes', verbatim: true},
  };
  const NO_TARGET_ID = new Set(['ey-cmc', 'ey-hpc', 'ey-tears', 'ey-loteprednol']);

  /* {key: {cite, parts: [{kind: 'tg'|'mo', t, by, cite}], label, anchor, cells}} from the Reference HTML. */
  function parseTargets(html){
    html = String(html);
    const out = {}, secs = {};
    const tables = id => {
      if (secs[id]) return secs[id];
      const i = html.indexOf('<h3 id="' + id + '"');
      if (i < 0) return (secs[id] = []);
      const j = html.indexOf('<h3', i + 10);
      const body = html.slice(i, j < 0 ? html.length : j);
      return (secs[id] = [...body.matchAll(/<table[^>]*>([\s\S]*?)<\/table>/g)].map(m => {
        const rows = [...m[1].matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map(r => [...r[1].matchAll(/<t([dh])[^>]*>([\s\S]*?)<\/t\1>/g)].map(c => ({h: c[1] === 'h', t: strip(c[2])})));
        return {head: (rows.find(r => r.length && r[0].h) || []).map(c => c.t), rows: rows.filter(r => r.length && !r[0].h).map(r => r.map(c => c.t))};
      }));
    };
    const mine = {};
    for (const [key, sp] of Object.entries(TARGET_SPEC)) {
      const tb = tables(sp.sec)[sp.table];
      const row = tb && tb.rows.find(r => sp.row.test(r[0]));
      if (!row) continue;
      const slide = row[row.length - 1];
      const cite = 'Reference ' + sp.sec + (/^[—–-]$/.test(slide) ? '' : '; ' + slide);
      const mech = sp.same && mine[sp.same] ? mine[sp.same].mech : row[sp.mech];
      mine[key] = {mech};
      const parts = [];
      if (sp.tg) parts.push({kind: 'tg', t: sp.tg, by: 'smith', cite});
      if (mech) parts.push({kind: 'mo', t: mech.replace(/[.;:,]\s*$/, ''), by: 'smith', cite: sp.same ? cite + ' (the row says "' + row[sp.mech] + '": the oral row\'s mechanism)' : cite});
      if (sp.flow != null && row[sp.flow] && !/^[—–-]$/.test(row[sp.flow])) parts.push({kind: 'mo', t: row[sp.flow].replace(/[.;:,]\s*$/, ''), by: 'smith', cite});
      out[key] = {cite, parts, label: row[0], anchor: sp.sec, cells: row, head: tb.head};
    }
    return out;
  }

  /* ---------- questions ---------- */
  const hasTarget = d => !!d.tgt && !NO_TARGET_ID.has(d.id);
  const NO_TARGET_WHY = 'No single receptor or enzyme target named in the lecture or on the Reference line.';
  const FAMILY = [[/adrenergic receptor on the ciliary|β/, 'beta'], [/α2/, 'a2'], [/carbonic anhydrase/, 'ca'], [/\bm3\b/, 'm3'], [/cholinesterase/, 'ache'], [/pgf2/, 'pg'],
    [/rhoa/, 'rho'], [/\bh1\b/, 'h1'], [/calcineurin|cyclophilin|fkbp/, 'calc'], [/lfa/, 'lfa'], [/nicotinic/, 'nach']];
  const family = t => { const n = norm(t); for (const [re, f] of FAMILY) if (re.test(t.toLowerCase()) || re.test(n)) return f; return n; };
  const chemFam = t => norm(t).replace(/s$/, '');
  // classes that overlap or contain each other are never offered for each other
  const CLASS_CONFLICT = [['a2', 'a2h1'], ['h1', 'a2h1']];
  const conflicts = (a, b) => a === 'comb' || b === 'comb' || CLASS_CONFLICT.some(([x, y]) => (x === a && y === b) || (x === b && y === a));
  const PARTS = {'ey-timolol-dorz': ['ey-timolol', 'ey-dorzolamide'], 'ey-timolol-brim': ['ey-timolol', 'ey-brimonidine'], 'ey-brinz-brim': ['ey-brinzolamide', 'ey-brimonidine', 'ey-brimonidine-otc'],
    'ey-lat-netars': ['ey-latanoprost', 'ey-netarsudil'], 'ey-naph-pheniramine': ['ey-naphazoline']};
  const related = (a, b) => a === b || (PARTS[a] || []).includes(b) || (PARTS[b] || []).includes(a) ||
    (a.startsWith('ey-brimonidine') && b.startsWith('ey-brimonidine')) || [a, b].every(x => x === 'ey-timolol-dorz' || x === 'ey-timolol-brim' || x === 'ey-brinz-brim');
  const byId = id => D.find(d => d.id === id);
  const shuffled = (a, rng) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pickOne = (a, rng) => a[Math.floor(rng() * a.length)];
  const onePer = (items, grp, n, rng) => { const out = [], seen = new Set(); for (const it of shuffled(items, rng)) { const g = grp(it); if (seen.has(g)) continue; seen.add(g); out.push(it); if (out.length === n) break; } return out; };
  const mix = (wrong, key, rng) => shuffled(wrong.map(t => ({t, correct: false})).concat([{t: key, correct: true}]), rng);
  const Q = (d, kind, stem, options, src, also) => ({id: d.id + ':' + kind, drug: d.id, name: d.name, kind, stem, options, src, also: also || [], offChart: []});

  const KINDS = {target: 'Target', cls: 'Class', use: 'Indication', clsRev: 'Class → drug', useRev: 'Indication → drug', chem: 'Chemical class', rx: 'Rx/OTC',
    brand: 'Brand names (practice; Dr. Smith\'s exam questions use generic names)'};
  const KIND_HEAD = Object.assign({}, KINDS, {clsRev: 'Which drug: class', useRev: 'Which drug: indication', brand: 'Brand name (practice)'});

  const clsSrc = d => ({t: d.chartClass, by: 'chart', cite: 'Chart p. ' + d.page});
  /* the keyed values of one field of one drug: [{t, src: [{t, by, cite}]}] */
  function quizFacts(d, T, kind){
    if (kind === 'target') {
      if (!hasTarget(d)) return [];
      return [d.tgt, d.tgt2].filter(Boolean).flatMap(id => (T[id] || {parts: []}).parts).filter(p => p.kind === 'tg').map(p => ({t: p.t, src: [p]}));
    }
    if (kind === 'cls') return [{t: CLASSES[d.cls], src: [clsSrc(d)]}];
    if (kind === 'use') return [{t: DISEASES[d.dz[0]], z: d.dz[0], src: [C(d.chartUse, d.page)]}];
    return [];
  }
  const trueTargets = (d, T) => [d.tgt, d.tgt2].filter(Boolean).flatMap(id => (T[id] || {parts: []}).parts).filter(p => p.kind === 'tg').map(p => p.t);
  function fieldQuestion(d, T, kind, rng){
    const keys = quizFacts(d, T, kind);
    if (!keys.length) return null;
    const truth = (kind === 'target' ? trueTargets(d, T) : kind === 'cls' ? [CLASSES[d.cls]] : [DISEASES[d.dz[0]]]).concat(keys.map(k => k.t));
    const bad = new Set(truth.map(norm)), badFam = new Set(truth.map(family));
    const pool = [];
    for (const o of D) {
      if (related(o.id, d.id) || (kind === 'cls' && (o.cls === d.cls || conflicts(o.cls, d.cls)))) continue;
      for (const v of quizFacts(o, T, kind)) { const n = norm(v.t); if (!n || bad.has(n) || (kind === 'target' && badFam.has(family(v.t)))) continue; pool.push({t: v.t, f: kind === 'target' ? family(v.t) : n}); }
    }
    const wrong = [], seen = new Set();
    for (const p of shuffled(pool, rng)) { if (seen.has(p.f)) continue; seen.add(p.f); wrong.push(p.t); if (wrong.length === 3) break; }
    // an indication has three possible values (glaucoma, allergic conjunctivitis, dry eye): two wrong options
    if (wrong.length < (kind === 'use' ? 2 : 3)) return null;
    const key = pickOne(keys, rng);
    const stem = kind === 'target' ? `What is the target of ${d.name}?` : kind === 'cls' ? `Which class is ${d.name} in?` : `Which condition is ${d.name} used for?`;
    const q = Q(d, kind, stem, mix(wrong, key.t, rng), key.src, keys.filter(k => k !== key).map(k => k.t));
    q.wrongWhy = [];
    return q;
  }
  const brandNorm = b => norm(b).split(' ')[0];
  const brandBlocked = (a, b) => related(a, b);
  const brandSrc = d => [C('Brand column (Drug cell): ' + d.line, d.page)];
  const RX_OPTS = ['Rx', 'OTC'];
  const EXTRA = {
    brand(d, T, rng){
      if (!d.brands.length) return null;
      const key = pickOne(d.brands, rng), src = brandSrc(d).concat([SMITH]);
      const others = D.filter(o => !brandBlocked(o.id, d.id) && o.brands.length);
      const order = shuffled(others.filter(o => o.page === d.page), rng).concat(shuffled(others.filter(o => o.page !== d.page), rng));
      if (rng() < 0.5) {                     // generic -> brand
        const own = new Set(d.brands.map(norm)), wrong = [];
        for (const o of order) { const b = pickOne(o.brands, rng); if (own.has(norm(b)) || wrong.some(w => brandNorm(w) === brandNorm(b))) continue; wrong.push(b); if (wrong.length === 3) break; }
        if (wrong.length < 3) return null;
        return Object.assign(Q(d, 'brand', `Which is a brand name of ${d.name} on the chart?`, mix(wrong, key, rng), src, d.brands.filter(b => b !== key)), {dir: 'fwd'});
      }
      const wrong = order.filter(o => !o.brands.some(b => norm(b) === norm(key))).slice(0, 3).map(o => o.name);   // brand -> generic
      if (wrong.length < 3) return null;
      return Object.assign(Q(d, 'brand', `Which drug does the chart list under the brand name ${key}?`, mix(wrong, d.name, rng), src), {dir: 'rev', brand: key});
    },
    rx(d, T, rng){
      return Q(d, 'rx', `How does the chart list ${d.name}: Rx or OTC?`, RX_OPTS.map(t => ({t, correct: t === d.rx})), [C('Rx/OTC column: ' + d.rx, d.page)]);
    },
    chem(d, T, rng){
      const c = CHEM[d.id];
      if (!c || c.no) return null;
      const f = chemFam(c.t), pool = [];
      for (const o of D) { const oc = CHEM[o.id]; if (oc && !oc.no && chemFam(oc.t) !== f && !pool.some(p => norm(p) === norm(oc.t))) pool.push(oc.t); }
      const wrong = onePer(pool, chemFam, 3, rng);
      if (wrong.length < 3) return null;
      return Q(d, 'chem', `Which chemical class does the chart give ${d.name}?`, mix(wrong, c.t, rng), c.src);
    },
    useRev(d, T, rng){
      const z = d.dz[0];
      const wrong = onePer(D.filter(o => o.dz[0] !== z), o => o.cls, 3, rng).map(o => o.name);
      if (wrong.length < 3) return null;
      return Object.assign(Q(d, 'useRev', `Which drug is used for ${DISEASES[z].toLowerCase()}?`, mix(wrong, d.name, rng), [C(d.chartUse, d.page)]), {z});
    },
    clsRev(d, T, rng){
      const wrong = onePer(D.filter(o => o.cls !== d.cls && !conflicts(o.cls, d.cls) && !related(o.id, d.id)), o => o.cls, 3, rng).map(o => o.name);
      if (wrong.length < 3) return null;
      return Q(d, 'clsRev', `Which drug is in this class: ${CLASSES[d.cls]}?`, mix(wrong, d.name, rng), [clsSrc(d)]);
    },
  };
  function makeQuestion(d, T, kind, rng){
    rng = rng || Math.random;
    if (!KINDS[kind]) return null;
    if (EXTRA[kind]) return EXTRA[kind](d, T, rng);
    return fieldQuestion(d, T, kind, rng);
  }
  const rxSrc = d => [C('Rx/OTC column: ' + d.rx, d.page)];
  const potSrc = () => [];
  const OFF_CHART = {};
  const SCOPES = {taught: 'Exam 3 · taught', chartonly: 'Exam 3 · chart only'};
  const SCOPE_WHY = {
    taught: 'Named in Dr. Smith\'s eye slides (Lectures 9–10) and the Reference eye tables.',
    chartonly: 'On the ophthalmic drug chart, which is a guide, but in none of the eye slides or the Reference eye tables (the OTC lubricants).'};
  const scopeOf = d => d.status === 'taught' ? 'taught' : 'chartonly';
  const inExam = () => true;
  function whyNone(d, T, kind){
    if (kind === 'target') return hasTarget(d) ? 'fewer than three safe wrong options' : 'the Reference line names no molecular target (a lubricant, or a corticosteroid that changes gene expression)';
    if (kind === 'chem') { const c = CHEM[d.id]; return c && c.no ? c.why : 'fewer than three safe wrong options'; }
    if (kind === 'cls' || kind === 'clsRev') return d.cls === 'comb' ? 'a combination product shares its components\' classes, so no other class is safely false' : 'fewer than three safe wrong options';
    return 'fewer than three safe wrong options';
  }
  function coverage(T){
    const out = {};
    for (const k of Object.keys(KINDS)) {
      const o = {n: 0, none: {}};
      for (const d of D) {
        let s = 7; const rng = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
        if (makeQuestion(d, T, k, rng)) o.n++; else (o.none[whyNone(d, T, k)] = o.none[whyNone(d, T, k)] || []).push(d.name);
      }
      out[k] = o;
    }
    return out;
  }
  const qText = q => [q.stem, q.concept, (q.options || []).filter(o => o.correct).map(o => o.t).join(' '), (q.pairs || []).map(p => p.l).join(' ')].join(' • ');
  const questionsFor = (d, qs) => { const re = new RegExp(d.q, 'i'); return qs.filter(q => re.test(qText(q))); };
  const classQuestions = (cls, qs) => { if (!CLASS_Q[cls]) return []; const re = new RegExp(CLASS_Q[cls], 'i'); return qs.filter(q => re.test(qText(q))); };

  return {parseTargets, D, CLASS_Q, CLASSES, DISEASES, PAGES, CHART_ROWS, CHART_NOTES, NOT_ON_CHART, TARGET_SPEC, questionsFor, classQuestions, KINDS, KIND_HEAD,
          quizFacts, makeQuestion, norm, family, CHEM, CHEMS, rxSrc, potSrc, brandSrc, BRAND_QUOTE: SMITH, OFF_CHART, POTENCY: {}, SCOPES, SCOPE_WHY, scopeOf, inExam,
          hasTarget, NO_TARGET_WHY, whyNone, coverage, PARTS, strip};
})();
