/* slide_alias.js: the friendly deck names that clean_ui.js shows ("Dr. Smith: eye") are also names the slide linker knows (course-level, 2026-11-25).
   clean_ui.js turns raw file names into these names after the slide links are made; a link made later (a block drawn again, a topic hub,
   a source note opened) must still find its deck, so each name is added to SLIDES.names (a name followed by a slide number) here, before
   slide_ui.js builds its parser. The list is shared: clean_ui.js reads window.CLEAN_DECK_NAMES. */
(function slideAlias(){
  var NAMES = [
    ['Skin-Pathophys-Students-2026', 'Dr. Smith: skin pathophysiology'],
    ['Skin-PCol-Students-2026', 'Dr. Smith: skin pharmacology'],
    ['DEENT_Sun_Exposure_2026', 'Dr. Smith: sun exposure'],
    ['f26-DEENT-DPAW-mc', 'Dr. Sikazwe: skin drug chemistry'],
    ['Patel_Dermatitis-Therapeutics-Student', 'Dr. Patel: dermatitis'],
    ['Patel_Acne-Therapeutics-Student', 'Dr. Patel: acne'],
    ['Patel_Scaly-Dermatoses-Therapeutics-Student', 'Dr. Patel: scaly dermatoses'],
    ['Patel_Outdoor-Exposures-Student', 'Dr. Patel: outdoor exposures'],
    ['Patel_Sun-Exposure-Student', 'Dr. Patel: sun exposure'],
    ['Patel_Wound-Care', 'Dr. Patel: wound care'],
    ['Patel_Warts-Corns-Calluses', 'Dr. Patel: warts, corns and calluses'],
    ['PollEV_Dr_Patel_11.12', 'Dr. Patel: poll questions (11/12)'],
    ['PollEV_Dr_Patel', 'Dr. Patel: poll questions'],
    ['Sikazwe_OOO_mc', 'Dr. Sikazwe: ear, mouth and eye'],
    ['Smith_Eye_Glaucoma_AllergicConj_DryEye', 'Dr. Smith: eye'],
    ['Lam_Glaucoma_doc', 'Dr. Lam: glaucoma handout'],
    ['Lam_Glaucoma', 'Dr. Lam: glaucoma'],
    ['Lam_OphthalmicDisorders_doc', 'Dr. Lam: other eye disorders handout'],
    ['Lam_OphthalmicDisorders', 'Dr. Lam: other eye disorders'],
    ['Lam_OralDisorders_slides', 'Dr. Lam: mouth'],
    ['Lam_OralDisorders_handout', 'Dr. Lam: mouth handout'],
    ['Lam_OticDisorders_slides', 'Dr. Lam: ear'],
    ['Lam_OticDisorders_handout', 'Dr. Lam: ear handout'],
    ['DrugChart_Ophthalmics', 'the eye drug chart'],
    ['DrugChart_Dermatology', 'the skin drug chart']
  ];
  (typeof window !== 'undefined' ? window : globalThis).CLEAN_DECK_NAMES = NAMES;
  if (typeof SLIDES === 'undefined' || !SLIDES || !SLIDES.decks) return;
  if (!Array.isArray(SLIDES.names)) SLIDES.names = [];
  var byStem = {};
  Object.keys(SLIDES.decks).forEach(function (id) { (SLIDES.decks[id].files || []).forEach(function (f) { byStem[f.replace(/\.(pdf|docx)$/i, '').toLowerCase()] = id; }); });
  var have = {}; SLIDES.names.forEach(function (r) { have[r[0]] = 1; });
  NAMES.forEach(function (d) { var id = byStem[d[0].toLowerCase()]; if (id && !have[d[1]]) { SLIDES.names.push([d[1], id, true]); have[d[1]] = 1; } });
})();
