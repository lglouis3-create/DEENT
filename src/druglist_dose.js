/* ==========================================================================
   DRUG LIST, DOSING (Exam 3): Dr. Lam's dose, frequency and duration lines
   --------------------------------------------------------------------------
   Course data file for the Drug list tab's single List view (druglist_ui.js),
   loaded after druglist_eye.js. Nothing here is a number the course does not
   state: every line below was read from Dr. Lam's slides (decks Lam_Glaucoma,
   Lam_OphthalmicDisorders, Lam_OralDisorders_slides, Lam_OticDisorders_slides),
   her typed glaucoma and ophthalmic handouts (where a slide shows only a
   heading such as "Dosing" and the handout holds the line) or the 11/20
   lecture where a slide leaves the frequency to speech (named in the cite).
   The oral and otic handouts carry handwriting and are not used.

   FREQ     the colour-coded frequency tags (key -> label, words, colour).
   OVERLAY  dosing lines added to a card that already exists in DRUGLIST_EYE
            (key: the card's id): {freq, dose, limit, pearl, cite, rx?, brands?,
            note?}. freq is a tag key or a list of them; dose is one short
            line; limit is the age, duration, storage or exclusion; pearl is
            the one thing to know (a key side effect or caution); cite lists
            the slides the lines come from, each as it is printed ("Lam
            Glaucoma slide 32"), which the slide linker turns into a link.
   EXTRA    drugs and products Dr. Lam teaches that are not on the ophthalmic
            drug chart (otic, oral, a few ophthalmic): one record each, with
            area (gl, ac, de, ear, mouth), sub (the group heading), name,
            brands, rx ('Rx', 'OTC' or '' where the course does not say),
            cls (one phrase), use, freq, dose, limit, pearl, more (further
            lines for the opened row) and cite.
   A field that is missing is a fact the course does not state: the list
   leaves it out. No storage of any kind is used by this file.
   ========================================================================== */
const DRUGLIST_DOSE = (() => {
  const FREQ = {
    qd: {label: 'Daily', words: 'once a day', c: '#1f7a4d'},
    qpm: {label: 'Daily PM', words: 'once a day, in the evening (QPM, QHS)', c: '#4b2e83'},
    bid: {label: 'BID', words: 'twice a day', c: '#1d5fa8'},
    tid: {label: 'TID', words: 'three times a day', c: '#9a5b00'},
    qid: {label: 'QID', words: 'four times a day', c: '#b4410f'},
    bidtid: {label: 'BID–TID', words: 'two or three times a day', c: '#6d3a9c'},
    x12: {label: '1–2x/day', words: 'once or twice a day', c: '#2a7ca0'},
    x34: {label: '3–4x/day', words: 'three or four times a day', c: '#a3500a'},
    x5: {label: '5x/day', words: 'up to five times a day', c: '#b0245c'},
    prn: {label: 'PRN', words: 'as needed', c: '#5b6270'},
    any: {label: 'Anytime', words: 'any time; at least after meals and at bedtime', c: '#5b6270'},
    short: {label: 'Short term', words: 'short course only', c: '#a11d33'}
  };
  const FREQ_KEY = ['qd', 'qpm', 'bid', 'tid', 'qid', 'prn', 'short'];

  const G = 'Lam Glaucoma slide ', O = 'Lam Ophthalmic slide ', R = 'Lam Oral slide ', T = 'Lam Otic slide ';
  const BB_PREC = 'Precaution: asthma/COPD, bradycardia or 2nd/3rd degree heart block, uncompensated heart failure';
  const PG = {freq: 'qpm', dose: '1 gtt once daily, in the evening; do not exceed once daily (can lower efficacy)',
    pearl: 'Iris/eyelash pigmentation, eyelash growth, stinging; blurred vision is why it is dosed at night. Contraindicated: macular edema, herpetic keratitis',
    cite: [G + 20, G + 21]};
  const FRIDGE = 'Refrigerate until opened, then room temperature';
  const AC = (o) => Object.assign({cite: [O + 37]}, o);
  const OVERLAY = {
    /* glaucoma: Lam Glaucoma slides 19-21, 31-34, 41-45, 51-62, 69, 85; her handout */
    'ey-timolol': {freq: 'bid', dose: 'Timolol 0.25%, 0.5% (Timoptic, Istalol): 1 gtt BID; Timoptic-XE gel: 1 gtt daily', pearl: BB_PREC, cite: [G + 32, G + 34]},
    'ey-betaxolol': {freq: 'bid', dose: 'Betoptic 0.5%, Betoptic-S 0.25%: 1 gtt BID', pearl: 'Less precaution risk than other beta-blockers (with carteolol). ' + BB_PREC, cite: [G + 32, G + 34]},
    'ey-carteolol': {freq: 'bid', dose: 'Carteolol 1% (Ocupress): 1 gtt BID', pearl: 'Less precaution risk than other beta-blockers (with betaxolol). ' + BB_PREC, cite: [G + 32, G + 34]},
    'ey-levobunolol': {freq: 'bid', dose: 'Levobunolol 0.25%, 0.5% (Betagan): 1 gtt BID', pearl: BB_PREC, cite: [G + 32, G + 34]},
    'ey-brimonidine': {freq: 'bid', dose: 'Alphagan P (various concentrations): 1 gtt BID', pearl: 'Somnolence, dizziness, fatigue, dry mouth; caution in cardiovascular or kidney disease, history of stroke', cite: [G + 42, G + 43, G + 44]},
    'ey-apraclonidine': {freq: 'bidtid', dose: 'Iopidine 0.5%, 1%: 1 gtt BID or TID', pearl: 'If not tolerated, lower the frequency (only apraclonidine can do this) or switch class', cite: [G + 42, G + 45]},
    'ey-pilocarpine': {freq: 'qid', dose: 'Isopto Carpine 1%, 2%, 4%: 1 gtt QID', brands: ['Isopto Carpine'], pearl: 'Poor night vision, brow ache; caution in asthma, retinal detachment, corneal abrasion', cite: [G + 57, G + 58, G + 59]},
    'ey-acetazolamide': {freq: 'short', dose: 'Oral: short-term use only (systemic side effects)', pearl: 'Last line: systemic acidosis (malaise, fatigue, anorexia, nausea, weight loss, altered taste); sulfa allergy caution', cite: [G + 53, G + 54]},
    'ey-methazolamide': {freq: 'short', dose: 'Oral: short-term use only (systemic side effects)', pearl: 'Last line: systemic acidosis (malaise, fatigue, anorexia, nausea, weight loss, altered taste); sulfa allergy caution', cite: [G + 53, G + 54]},
    'ey-dorzolamide': {freq: 'tid', dose: 'Trusopt 2%: 1 gtt TID', pearl: 'Stinging/burning, blurred vision; caution in sulfa allergy (cross-sensitivity very low), sickle cell disease, pulmonary disorders', limit: 'Trusopt comes preservative-free', cite: [G + 51, G + 52, G + 54, G + 55]},
    'ey-brinzolamide': {freq: 'tid', dose: 'Azopt 1% suspension: 1 gtt TID', pearl: 'Stinging/burning, blurred vision; caution in sulfa allergy, sickle cell disease, pulmonary disorders', limit: 'Suspension: shake well; put it on after solutions', cite: [G + 51, G + 52, G + 54, G + 75]},
    'ey-bimatoprost': Object.assign({}, PG, {dose: 'Lumigan 0.01%, 0.03%: 1 gtt once daily, in the evening; do not exceed once daily', cite: [G + 20, G + 21, G + 47]}),
    'ey-latanoprost': Object.assign({}, PG, {dose: 'Xalatan, Xelpros: 1 gtt once daily, in the evening; do not exceed once daily', limit: FRIDGE, cite: [G + 20, G + 21, G + 85]}),
    'ey-lbunod': Object.assign({}, PG, {dose: 'Vyzulta (prodrug of latanoprost): 1 gtt once daily, in the evening', limit: FRIDGE, cite: [G + 19, G + 20, G + 21, G + 85]}),
    'ey-travoprost': Object.assign({}, PG, {dose: 'Travatan Z: 1 gtt once daily, in the evening; do not exceed once daily', cite: [G + 20, G + 21, G + 37]}),
    'ey-tafluprost': Object.assign({}, PG, {dose: 'Zioptan: 1 gtt once daily, in the evening; do not exceed once daily', limit: FRIDGE, cite: [G + 20, G + 21, G + 85]}),
    'ey-netarsudil': {freq: 'qpm', dose: 'Rhopressa 0.02%: 1 gtt QHS (evening)', limit: 'Refrigerate until opened, then room temperature for under 6 weeks', pearl: 'Burning/eye pain, conjunctival hemorrhage or hyperemia, corneal disease', cite: [G + 62, G + 85]},
    'ey-timolol-dorz': {freq: 'bid', dose: 'Cosopt, Cosopt PF: 1 gtt BID', limit: 'Cosopt PF is the preservative-free form', pearl: BB_PREC, cite: [G + 51, G + 35, G + 69]},
    'ey-timolol-brim': {freq: 'bid', dose: 'Combigan: 1 gtt BID', pearl: BB_PREC, cite: [G + 42, G + 69]},
    'ey-brinz-brim': {freq: 'tid', dose: 'Simbrinza: 1 gtt TID', pearl: 'Of Combigan, Cosopt and Simbrinza, the only one given TID', cite: [G + 42, G + 69]},
    'ey-lat-netars': {freq: 'qpm', dose: 'Rocklatan: 1 gtt QHS (evening)', cite: [G + 62]},
    /* allergic conjunctivitis: Lam Ophthalmic slides 37-40, handout; the chart prints some of these Rx, her slide 37 lists them OTC */
    'ey-olopatadine': AC({freq: ['bid', 'qd'], rx: 'OTC', dose: '0.1% (Pataday Twice Daily Relief, Patanol): 1 gtt BID, 6–8 h apart; 0.2%, 0.7% (Pataday, Pataday Extra Strength): 1 gtt once daily', limit: 'Age 2 and older', pearl: 'Dual-acting: first line with artificial tears; relief in minutes up to 30 minutes', note: 'The chart prints Rx; Dr. Lam\'s slide 37 lists olopatadine as OTC.'}),
    'ey-alcaftadine': AC({freq: 'qd', rx: 'OTC', dose: '0.25%: 1 gtt once daily', limit: 'Age 2 and older', pearl: 'Dual-acting: relief within 3 minutes', note: 'The chart prints Rx; Dr. Lam\'s slide 37 lists alcaftadine as OTC.'}),
    'ey-ketotifen': AC({freq: 'bid', dose: '0.025%: 1 gtt BID, about 8–12 h apart', limit: 'Age 3 and older', pearl: 'Dual-acting: relief in minutes (often within 30), one dose can last up to 12 hours'}),
    'ey-azelastine': AC({freq: 'bid', dose: '1 gtt in the affected eye(s) BID', pearl: 'Dual-acting (antihistamine and mast cell stabilizer)'}),
    'ey-bepotastine': AC({freq: 'bid', dose: '1 gtt in the affected eye(s) BID', pearl: 'Dual-acting (antihistamine and mast cell stabilizer)'}),
    'ey-epinastine': AC({freq: 'bid', dose: '1 gtt in the affected eye(s) BID', pearl: 'Dual-acting (antihistamine and mast cell stabilizer)'}),
    'ey-naph-pheniramine': AC({freq: 'qid', dose: 'Naphcon-A: 1–2 gtts 4x a day', pearl: 'Pupil dilation (anticholinergic), burning, stinging'}),
    'ey-naphazoline': {freq: 'qid', dose: 'Decongestant: generally 4x a day', limit: 'Up to 72 hours; beyond that, rebound redness (conjunctival hyperemia)', pearl: 'Can raise blood pressure: caution in hypertension, cardiovascular disease, diabetes', cite: [O + 39]},
    'ey-tetrahydrozoline': {freq: 'qid', dose: 'Visine: decongestant, generally 4x a day', limit: 'Up to 72 hours; beyond that, rebound redness (conjunctival hyperemia)', pearl: 'Can raise blood pressure: caution in hypertension, cardiovascular disease, diabetes', cite: [O + 39]},
    'ey-brimonidine-otc': {freq: 'qid', dose: 'Lumify 0.025%: QID for 4 weeks', limit: '4 weeks', pearl: 'For redness; the 0.1–0.2% Rx strength is the glaucoma drug; do not use it for allergic conjunctivitis', cite: [O + 39]},
    /* dry eye: Lam Ophthalmic slides 14-21, handout */
    'ey-tears': {freq: 'x12', dose: '1–2 gtts, 1–2x a day (on waking and at bedtime); severe: 3–4x a day up to hourly', limit: 'May continue indefinitely, depending on response', pearl: 'Preservative-free preferred for moderate to severe dry eye or preservative sensitivity', cite: [O + 14]},
    'ey-cyclosporine': {freq: 'bid', dose: 'Restasis, Cequa: 1 gtt in the affected eye(s) BID, about 12 h apart', limit: 'Expected length of therapy: 6 months', pearl: 'Burning, stinging, itching, foreign body sensation', cite: [O + 18]},
    'ey-lifitegrast': {freq: 'bid', dose: 'Xiidra: 1 gtt in the affected eye(s) BID', limit: 'Expected length of therapy: 12 weeks', pearl: 'Dysgeusia (altered taste), application-site irritation, decreased visual acuity', cite: [O + 19]},
    'ey-varenicline': {freq: 'bid', dose: 'Tyrvaya: 1 spray in each nostril BID, about 12 h apart', limit: 'Expected length of therapy: 4 weeks', pearl: 'Prime the pump (7 sprays), do not shake, do not spray in the eye or mouth; cough, sneezing, throat irritation. TEAR: tilt the tip, elevate the tongue, administer, resist inhaling', cite: [O + 21, O + 22]},
    'ey-loteprednol': {freq: 'short', dose: 'Topical corticosteroids (loteprednol, fluorometholone, dexamethasone, prednisolone): short term', limit: 'Usually up to two weeks', pearl: 'Contraindicated: ocular hypertension, cataracts, active infection', cite: [O + 20]}
  };

  const EXTRA = [
    /* ophthalmic drugs of Dr. Lam that are not on the chart */
    {id: 'lx-bland', area: 'de', sub: 'Ocular lubricants', name: 'Bland ointments and gels', brands: [], alias: ['petrolatum', 'mineral oil', 'lanolin'], rx: 'OTC', cls: 'Ocular lubricant: petrolatum, mineral oil, lanolin', use: 'Dry eye',
      freq: 'prn', dose: 'As needed, twice a day, or every few hours; usually at bedtime', pearl: 'Blurry vision (a gel blurs less); can be combined with artificial tears', more: ['Ointment stays in the eye longer than drops (longer retention time).', 'Hypersensitivity: change to a single-use or preservative-free product.'], cite: [O + 15]},
    {id: 'lx-cetirizine', area: 'ac', sub: 'Antihistamines', name: 'Cetirizine ophthalmic 0.24%', brands: [], alias: [], rx: '', cls: 'Ophthalmic antihistamine (mild allergic conjunctivitis)', use: 'Allergic conjunctivitis',
      freq: 'bid', dose: '1 gtt in the affected eye(s) BID, about 8 h apart', pearl: 'Blocks only histamine receptors: itching and redness relief is short, so frequent dosing', cite: [O + 38]},
    {id: 'lx-oral-ah', area: 'ac', sub: 'Antihistamines', name: 'Second-generation oral antihistamines', brands: ['Claritin', 'Allegra', 'Zyrtec'], alias: ['loratadine', 'fexofenadine', 'cetirizine'], rx: '', cls: 'Oral H1 antihistamine', use: 'Allergic conjunctivitis',
      freq: null, dose: '', pearl: 'Use when systemic symptoms accompany the eye symptoms or eye symptoms persist on a topical agent; can dry the eyes', cite: [O + 40]},
    /* otic: Lam Otic slides 10, 14-16, 29-31, 33 */
    {id: 'lx-cp65', area: 'ear', sub: 'Earwax (impacted cerumen)', name: 'Carbamide peroxide 6.5% in anhydrous glycerin', brands: [], alias: ['carbamide peroxide', 'earwax'], rx: 'OTC', cls: 'Cerumenolytic, FDA-approved nonprescription', use: 'Impacted cerumen',
      freq: 'bid', dose: '5–10 drops in the affected ear(s), leave in the canal for several minutes, twice daily for up to four days', limit: 'Not for under 12 years old (self-care exclusion)',
      pearl: 'Remaining wax: gentle warm-water irrigation with a rubber otic bulb syringe. See a PCP if symptoms persist after four days',
      more: ['Ear candles and other cerumenolytics are not recommended.', 'Ear drops in children under 3: pull the ear back and down.'], cite: [T + 14, T + 15, T + 16, T + 10, T + 33]},
    {id: 'lx-ipa', area: 'ear', sub: 'Water-clogged ears', name: 'Isopropyl alcohol 95% in anhydrous glycerin 5%', brands: [], alias: ['isopropyl alcohol', 'swimmer'], rx: '', cls: 'Ear drops for water-clogged ears', use: 'Water-clogged ear',
      freq: null, dose: '4–5 drops in the affected ear', limit: 'No minimum age', pearl: 'See a doctor if there is pain, burning or irritation with use, ear discharge or dizziness',
      more: ['Prevent: wipe well with a towel after bathing, earplugs or a bathing cap when swimming, cotton balls coated with petroleum jelly.'], cite: [T + 31, T + 34, T + 29]},
    {id: 'lx-plugs', area: 'ear', sub: 'Water-clogged ears', name: 'Water-absorbing earplugs', brands: [], alias: ['earplug'], rx: '', cls: 'Device: dispels excessive moisture from the ear canal', use: 'Water-clogged ear',
      freq: null, dose: '', limit: 'Listed for children older than 11', pearl: 'Non-drug option for prevention (with a towel, earplugs or a bathing cap when swimming)', cite: [T + 29, T + 30]},
    /* oral, tooth sensitivity: Lam Oral slides 15, 17, 18 */
    {id: 'lx-kno3', area: 'mouth', sub: 'Tooth sensitivity', name: 'Potassium nitrate 5% toothpaste', brands: [], alias: ['desensitizing toothpaste'], rx: 'OTC', cls: 'Desensitizing: depolarizes the excited nerves in the tubules', use: 'Tooth hypersensitivity',
      freq: 'bid', dose: '1-inch strip, brush at least twice daily; continuous, long-term use', limit: 'Not for children under 12', pearl: 'Try a soft-bristle brush with standard fluoride toothpaste for 7 days first; refer to a dentist if pain persists or worsens or new symptoms appear after 4–6 weeks', cite: [R + 15, R + 17, R + 18]},
    {id: 'lx-naf', area: 'mouth', sub: 'Tooth sensitivity', name: 'Sodium fluoride and stannous fluoride', brands: [], alias: ['fluoride'], rx: 'OTC', cls: 'Desensitizing toothpaste: depolarizes the excited nerves (listed with potassium nitrate)', use: 'Tooth hypersensitivity',
      freq: 'bid', dose: '1-inch strip, brush at least twice daily; continuous, long-term use', pearl: 'Same counseling as any desensitizing toothpaste: continuous use, refer to a dentist if no better after 4–6 weeks', cite: [R + 15, R + 17, R + 18]},
    {id: 'lx-arg', area: 'mouth', sub: 'Tooth sensitivity', name: 'Arginine 8% toothpaste', brands: [], alias: ['desensitizing toothpaste'], rx: 'OTC', cls: 'Desensitizing: seals the exposed dentin to minimize fluid flow', use: 'Tooth hypersensitivity',
      freq: 'bid', dose: '1-inch strip, brush at least twice daily; continuous, long-term use', pearl: 'Same counseling as any desensitizing toothpaste', cite: [R + 15, R + 17, R + 18]},
    /* canker sores (RAS): Lam Oral slides 33-40 */
    {id: 'lx-benzocaine', area: 'mouth', sub: 'Canker sores (RAS)', name: 'Benzocaine 10–20%', brands: [], alias: ['topical anesthetic', 'topical analgesic'], rx: 'OTC', cls: 'Topical oral anesthetic', use: 'Canker sore pain; cold sore pain',
      freq: 'qid', dose: 'Apply to the lesion, up to 4 times a day as needed', limit: 'No eating or drinking for at least 30 minutes after; use after meals',
      pearl: 'Do not combine with menthol, phenol or camphor (tissue irritation)', more: ['Cold sore pain relievers (benzocaine, dibucaine, dyclonine HCl, benzyl alcohol, camphor, menthol): contraindicated if camphor is over 3% or menthol over 1%.'], cite: [R + 34, R + 54]},
    {id: 'lx-benzyl', area: 'mouth', sub: 'Canker sores (RAS)', name: 'Benzyl alcohol 0.05–0.1%', brands: [], alias: ['topical anesthetic'], rx: 'OTC', cls: 'Topical oral anesthetic', use: 'Canker sore pain',
      freq: 'qid', dose: 'Apply to the lesion, up to 4 times a day as needed', pearl: 'Do not combine with menthol, phenol or camphor (tissue irritation)', cite: [R + 34]},
    {id: 'lx-cp1015', area: 'mouth', sub: 'Canker sores (RAS)', name: 'Carbamide peroxide 10–15%', brands: [], alias: ['debriding agent'], rx: 'OTC', cls: 'Oral debriding and wound-cleansing agent', use: 'Canker sores',
      freq: null, dose: 'Apply to the area for 1 minute and spit; or a few drops on the tongue, mixed with saliva, swish 1 minute', limit: 'Up to 7 days; no eating or drinking for at least 30 minutes after',
      pearl: 'Prolonged use: tooth sensitivity, soft-tissue irritation, black hairy tongue. PCP if no better after 7 days', cite: [R + 35, R + 36, R + 40]},
    {id: 'lx-h2o2', area: 'mouth', sub: 'Canker sores (RAS)', name: 'Hydrogen peroxide 1.5% and 3%', brands: [], alias: ['debriding agent'], rx: 'OTC', cls: 'Oral debriding and wound-cleansing agent', use: 'Canker sores',
      freq: null, dose: '1.5%: apply to the affected area for 1 minute and spit; 3%: swish for one minute', limit: 'Up to 7 days; no eating or drinking for at least 30 minutes after',
      pearl: 'Prolonged use: tooth sensitivity, soft-tissue irritation, black hairy tongue', cite: [R + 35, R + 36]},
    {id: 'lx-protect', area: 'mouth', sub: 'Canker sores (RAS)', name: 'Topical oral protectants (paste, patch, disc)', brands: [], alias: ['protectant'], rx: 'OTC', cls: 'Protectant: covers the lesion', use: 'Canker sores',
      freq: 'x34', dose: 'Up to 3–4 times a day, after meals; disc placement 10–20 seconds', limit: 'Dissolves in 8–12 hours; avoid drinking for up to 30 minutes', pearl: 'Used to prevent complications while the sore heals', cite: [R + 33, R + 37]},
    {id: 'lx-saline', area: 'mouth', sub: 'Canker sores (RAS)', name: 'Saline rinse', brands: [], alias: ['salt water', 'oral rinse'], rx: '', cls: 'Oral rinse', use: 'Canker sores',
      freq: null, dose: 'Mix 1–3 teaspoons of salt in 4–8 ounces of warm water', cite: [R + 38]},
    {id: 'lx-soda', area: 'mouth', sub: 'Canker sores (RAS)', name: 'Baking soda paste', brands: [], alias: ['sodium bicarbonate', 'oral rinse'], rx: '', cls: 'Oral rinse', use: 'Canker sores',
      freq: 'qid', dose: 'Apply to the lesion for a few minutes, up to 4 times a day', cite: [R + 38, R + 39]},
    /* cold sores (HSL): Lam Oral slides 51-58 */
    {id: 'lx-docosanol', area: 'mouth', sub: 'Cold sores (HSL)', name: 'Docosanol 10%', brands: ['Abreva'], alias: ['cold sore', 'topical antiviral'], rx: 'OTC', cls: 'Topical antiviral: prevents viral replication', use: 'Cold sores (herpes simplex labialis)',
      freq: 'x5', dose: 'Apply at the first sign of infection, up to 5 times a day until the lesion heals', limit: 'Use for 10 days', pearl: 'First line; shortens the active infection. Refer if the lesion lasts over 14 days or recurs despite self-care', more: ['A topical anesthetic can be added for pain.', 'Do not recommend a topical steroid or a highly astringent product.'], cite: [R + 51, R + 53, R + 58, R + 60]},
    {id: 'lx-triple', area: 'mouth', sub: 'Cold sores (HSL)', name: 'Triple antibiotic ointment', brands: [], alias: ['antibiotic ointment'], rx: 'OTC', cls: 'Topical antibiotic for secondary bacterial infection', use: 'Cold sores, if a secondary bacterial infection is suspected',
      freq: 'x34', dose: '3–4 times a day, if a secondary bacterial infection is suspected', pearl: 'Also follow up with the PCP', cite: [R + 51, R + 56]},
    /* dry mouth: Lam Oral slides 81-84 */
    {id: 'lx-saliva', area: 'mouth', sub: 'Dry mouth (xerostomia)', name: 'Artificial saliva products', brands: [], alias: ['sprays', 'gels', 'gums', 'toothpaste', 'xerostomia'], rx: 'OTC', cls: 'Saliva replacement: relieves the discomfort of dry mouth (not a cure)', use: 'Dry mouth',
      freq: 'any', dose: 'Use any time, at least after meals and before bed; place a ½-inch length of the product on the tongue and spread it thoroughly in the mouth', limit: 'Evaluate after 5–7 days of self-treatment',
      pearl: 'Avoid products that contain sodium (starred on the slide) if the patient is on a sodium-restricted diet', more: ['Continue artificial saliva, fluoride products and non-drug measures if dryness lessens; refer to the PCP if it worsens or new symptoms appear.'], cite: [R + 82, R + 83, R + 84]}
  ];
  return {FREQ, FREQ_KEY, OVERLAY, EXTRA};
})();
