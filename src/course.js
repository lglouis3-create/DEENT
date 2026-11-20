/* ==========================================================================
   COURSE MANIFEST — everything that is specific to this course lives here.
   The engine (shell.html, views.js) reads COURSE and nothing else about the
   course. Fill this in first; the checks read it too.
   ==========================================================================
   id, title, short   names shown in the header and the page title
   output             file name of the built page (the site serves it under this name)
   atlas              true only when atlas.js carries drawn structures for an Atlas tab
   atlasTitle, atlasNoun, atlasExampleLabel
                      optional, the Atlas's own words: its heading (default
                      'Functional group atlas'); what one tile is, a word
                      ('structure', plural + "s") or [one, many] (default
                      ['group', 'groups']), used in its intro, search box and
                      count; the label before a tile's `e` line (default 'e.g.';
                      '' drops it, for `e` lines that are facts, not examples)
   ns                 storage namespace: keep it the same for the whole course so
                      progress carries from Exam 1 through the final
   oldCachePrefix     optional, only for a drill that had its own service worker
                      before it moved onto the core: that worker's cache name
                      prefix (for example 'phar4342-drill-'); the core's worker
                      deletes those caches. It must end with '-'.
   professors         names exactly as the questions' `prof` field spells them
   lectures           one entry per deck: `deck` is the file name as the citations
                      spell it (dots in the stem become underscores), `exam` the
                      exam it is tested on, `module` the block the course groups
                      it under. Questions are labelled by the deck their `cite`
                      names, so every cite must name its deck.
   exams              blueprint per exam: questions, minutes, select-all count,
                      and the pools with their marks. A pool `filter` is an object
                      of field:value that a question must match; a value may be
                      an array meaning "one of". Pools' marks add up to `questions`.
                      `date` is the string shown in the header; add `when` (ISO)
                      and the page counts the days down to it.
                      Optional `typed: true`: this exam's papers draw the
                      numeric and matching items too (typed and picked on the
                      paper); without it they stay off papers.
                      Optional `blueprint`: use it only when the professor has
                      announced counts per topic. See the commented example.
   activeExam         which exam the simulator and the weighted pass follow
   skills             this course's taxonomy of what a question asks the student
                      to do; every question carries one `skill`; Weak spots groups
                      by it. Replace the defaults with the kinds this course
                      tests (a drug course: brand, generic, category, indication,
                      essential; a calculation course: setup, unit, algebra, …).
   paceDefault        review pace for a new profile: cram | weekly | semester
   scheduler          which scheduler picks the next question (core/README.md
                      "The scheduler"). model 'concept' (the default when the
                      field is absent): concepts are scheduled by box, and an
                      exam with a `when` shortens the day-clock gap for the
                      concepts its pools cover. preset:'calc' for a
                      calculation course: no two questions of one skill in a
                      row, and due questions of earlier lectures mixed in.
                      model 'fsrs': FSRS-7 per question (ts-fsrs, from the
                      kit's core/vendor/, which the build then inlines).
                      model 'concept-fsrs' (off by default): FSRS-7 per
                      concept with question rotation; it ships with
                      compare:true, which assigns each concept at random to
                      it or to 'concept' and logs which.
   files              the data files, in the order the build puts them into the
                      page: atlas.js and diagrams.js, then every question file
                      (q<N>_<topic>.js), the first of which declares TOPICS and
                      QUESTIONS. Add each new question file here. The list
                      belongs to the course, so a core update (which replaces
                      build.py) keeps it; without the field the build uses
                      ['atlas.js', 'diagrams.js', 'q1_topics.js']. A question
                      file in src/ that is not listed stops the build.
   manifest           optional: {description, orientation} for the web
                      manifest the build writes (description: one sentence;
                      orientation: 'portrait-primary', 'any', ... as the web
                      manifest allows). Leave it out and the manifest has
                      neither.
   tools              optional: the course's own tables for three core tools.
                      They live here because a core update copies the tools
                      over the course's copies (Mode 7) and never replaces
                      course.js. Every field is optional; the build stops on a
                      field name that no tool reads.
                        citeAliases   cite_check.py: how a citation spells a
                                      deck, in lower case -> the file on disk,
                                      or null for a deck that is not a PDF on
                                      hand (its slide numbers are then
                                      reported unchecked)
                        citeLectures  cite_check.py: lecture number -> file,
                                      only for "Lecture #11" citations that
                                      number a lecture differently from the
                                      digits of its `lectures` id
                        citeBareMap   cite_check.py: a deck named in words in
                                      a citation ('Absorption I slide 24') ->
                                      its file, or null
                        explainTerms  explain_check.js: ['gloss key', 'regex
                                      source'] for each term the course leans
                                      on; one whose key is not in the glossary
                                      is reported where it is used. Appended
                                      to the kit's own list.
                        harvestMasks  harvest_mask.py: ['images.json key',
                                      ['phrase', ...]] for each question crop
                                      that prints its own answer; the phrases
                                      are whited out on the question image
   features           optional: the feature modules this course switches on,
                      {<name>: {version:'v1', ...options}}, each copied from
                      the kit's features/<name>/current/ to src/features/<name>/
                      (the kit's features/README.md). The version pins it; only
                      Mode 7 changes it. Leave it out and the page has no
                      module code at all.
   numeric            optional, for a course with typed calculations:
                      {margin: 0.02} reads a typed number with its unit after
                      it (2.6 hr, 0.17 1/hr), never joins two numbers, and
                      grades an item within max(tol, margin x |key|). Leave it
                      out and typed numbers are read and graded as before
                      (core/README.md, Typed numbers).
   kit                {core:'<kit commit>'}: the exam-drill-kit commit this
                      src/ engine was copied from (core/), written when the
                      course is set up; only Mode 7 (a drill update) changes it
   ========================================================================== */
const COURSE = {
  id: 'phar4346',
  title: 'PHAR 4346 — Pharmacotherapeutics III: DEENT (P2 Fall 2026)',
  short: 'PHAR 4346 DEENT',
  ns: 'phar4346-deent-drill',
  output: 'PHAR4346_DEENT_Drill.html',
  atlas: true,                           // Dr. Sikazwe's structures (gen_atlas.py from atlas_data.json; Louis, 2026-11-06)
  atlasTitle: 'Structure atlas', atlasNoun: 'structure',   // the tiles are drug structures, not functional groups (core 9711ce2 names them)
  professors: ['Smith', 'Sikazwe', 'Patel', 'Lam'],

  // Lecture numbers follow the syllabus schedule (SyllabusF26-PHAR4346, pp. 9-15).
  // The engine assigns a question to a lecture entry by the deck its cite names, so
  // there is one entry per deck. Dr. Smith's pharmacology deck was taught across
  // Lectures 1-3 (10/29 slides 1-15, 10/30 slides 16-42, 11/03 slides 41-76); the
  // TOPICS entries carry the split by date.
  lectures: [
    {id:'L01', deck:'Skin-Pathophys-Students-2026.pdf',
     label:'Lecture 1: Dermatitis, psoriasis and acne pathophysiology (Smith, 10/29)',
     prof:'Smith', exam:1, module:'Exam 1: Lectures 1–4'},
    {id:'L01b', deck:'Skin-PCol-Students-2026.pdf',
     label:'Lectures 1–3: Dermatitis, psoriasis and acne pharmacology (Smith, from 10/29)',
     prof:'Smith', exam:1, module:'Exam 1: Lectures 1–4'},
    // Exam 1: the syllabus puts sun exposure in Lecture 3, and Dr. Smith's Exam 1 study
    // hints (pasted by Louis 2026-11-07) list "From Sun Exposure lecture" among the Exam 1
    // material. This settles the 10/29 remark (T 583); see reviews/OPEN_QUESTIONS.md.
    {id:'L03c', deck:'DEENT_Sun_Exposure_2026.pdf',
     label:'Lecture 3: Psoralens and sun protection (Smith, recorded after 11/03)',
     prof:'Smith', exam:1, module:'Exam 1: Lectures 1–4'},
    {id:'L03b', deck:'f26-DEENT-DPAW-mc.pdf',
     label:'Lectures 3–4: Dermatitis, psoriasis and acne medicinal chemistry (Sikazwe, 11/03–11/04)',
     prof:'Sikazwe', exam:1, module:'Exam 1: Lectures 1–4'},
    // Exam 2 (syllabus p. 6: Lectures 1-4 30%, Lectures 5-8 70%). Lectures 5-8 are Dr. Patel's
    // therapeutics lectures: 5 Dermatitis 11/06; 6 Acne and 7 Scaly Dermatoses/Psoriasis 11/10-11/11;
    // 8 Outdoor Exposure, Sun Exposure, Wound Care, WCC 11/12. Each new deck gets its own entry here
    // with exam:2 and this module. (Her slide 5 numbers them "Lectures 5-9"; the syllabus numbering is used.)
    {id:'L05', deck:'Patel_Dermatitis-Therapeutics-Student.pdf',
     label:'Lecture 5: Atopic and diaper dermatitis therapeutics (Patel, 11/06)',
     prof:'Patel', exam:2, module:'Exam 2: Lectures 5–8'},
    {id:'L06', deck:'Patel_Acne-Therapeutics-Student.pdf',
     label:'Lecture 6: Acne therapeutics (Patel, 11/10)',
     prof:'Patel', exam:2, module:'Exam 2: Lectures 5–8'},
    {id:'L07', deck:'Patel_Scaly-Dermatoses-Therapeutics-Student.pdf',
     label:'Lecture 7: Scaly dermatoses: dandruff, seborrheic dermatitis, psoriasis (Patel, 11/10–11/11)',
     prof:'Patel', exam:2, module:'Exam 2: Lectures 5–8'},
    // Lecture 8 (11/12) was taught from four decks; one entry per deck (the engine assigns by the deck a cite names).
    {id:'L08', deck:'Patel_Outdoor-Exposures-Student.pdf',
     label:'Lecture 8: Outdoor exposures: plant dermatitis, bites, stings, lice, scabies, snake bites, rabies (Patel, 11/12)',
     prof:'Patel', exam:2, module:'Exam 2: Lectures 5–8'},
    {id:'L08b', deck:'Patel_Sun-Exposure-Student.pdf',
     label:'Lecture 8: Sun exposure therapeutics (Patel, 11/12)',
     prof:'Patel', exam:2, module:'Exam 2: Lectures 5–8'},
    {id:'L08c', deck:'Patel_Wound-Care.pdf',
     label:'Lecture 8: Wound care (Patel, 11/12)',
     prof:'Patel', exam:2, module:'Exam 2: Lectures 5–8'},
    {id:'L08d', deck:'Patel_Warts-Corns-Calluses.pdf',
     label:'Lecture 8: Warts, corns and calluses (Patel, 11/12)',
     prof:'Patel', exam:2, module:'Exam 2: Lectures 5–8'},
    // Exam 3 (syllabus p. 6: Lectures 9-13, Mon 11/23). Lectures 9-10 are Dr. Smith's eye lectures, 11/13 (ophthalmic
    // physiology, 1.5 h) and 11/17 (ophthalmic and glaucoma pharmacology, 3 h), both taught from one deck. Dr. Sikazwe's
    // medicinal chemistry (11/18-11/19) and Dr. Lam's therapeutics join as their own entries with exam:3.
    {id:'L09', deck:'Smith_Eye_Glaucoma_AllergicConj_DryEye.pdf',
     label:'Lectures 9–10: Eye anatomy, glaucoma, allergic conjunctivitis and dry eye (Smith, 11/13 and 11/17)',
     prof:'Smith', exam:3, module:'Exam 3: Lectures 9–13'},
    // Dr. Sikazwe's medicinal chemistry of the ear, mouth and eye: 11/18 (slides 1-32) and 11/19 (the rest), one deck.
    {id:'L11', deck:'Sikazwe_OOO_mc.pdf',
     label:'Lectures 11–12: Otic, oral and ophthalmic medicinal chemistry (Sikazwe, 11/18 and 11/19)',
     prof:'Sikazwe', exam:3, module:'Exam 3: Lectures 9–13'},
    // Dr. Lam's glaucoma therapeutics (11/19, about two hours); her ophthalmic disorders lecture (11/20) joins as its own entry.
    {id:'L12', deck:'Lam_Glaucoma.pdf',
     label:'Lecture 12: Glaucoma therapeutics (Lam, 11/19)',
     prof:'Lam', exam:3, module:'Exam 3: Lectures 9–13'},
  ],

  exams: [
    {id:'exam1', name:'Exam 1', date:'Mon 11/09, 9:00–10:30 AM', when:'2026-11-09T09:00',
     questions:50, minutes:90, sata:null,
     // sata:null draws no select-all item onto a practice paper (views.js EXAM_SATA = sata || 0).
     // No professor has given a select-all count for Exam 1; the syllabus (p. 6) lists
     // "multiple-choice, select-all, short-answer, true/false, or matching" as possible
     // formats with no split (Louis, 2026-11-06: no official count is invented). The blurb
     // says what the practice paper draws and that the format split is not announced.
     // Dr. Smith's own format (her Exam 1 hints, pasted by Louis 2026-11-07): "mostly
     // multiple choice questions, but a few fill in the blanks. The fill in the blanks
     // focus on drug mechanisms. ... There are no short essay questions." Dr. Sikazwe has
     // given no format statement, so the blurb makes none for him.
     blurb:'Practice coverage of Lectures 1–4 (Smith 10/29, 10/30, 11/03 and her recorded sun-exposure and psoralen lecture; Sikazwe 11/03, 11/04). The faculty have not announced a split by professor, so this paper is unweighted. Dr. Smith says her questions are mostly multiple choice with a few fill-in-the-blanks on drug mechanisms, and no short essays. The syllabus lists multiple-choice, select-all, short-answer, true/false and matching as possible formats and gives no count of each. These practice papers draw single-answer questions only; the select-all and drug-target matching questions are in the topic drills, and Reference has a drug-target list to write out before revealing',
     // The Topics card (topics_ui.js) shows the blurb as these label / value rows, the way
     // the Intro to Pharmacology drill does (Louis, 2026-11-08). Each sentence is the blurb's
     // own, in order; topics_ui.js uses them only while they join (with spaces) to exactly the
     // blurb plus its full stop, so edit the blurb and these together. factsMain rows show
     // first; the rest fold under "More about this exam" (one short card on a phone).
     facts:[['Covers', 'Practice coverage of Lectures 1–4 (Smith 10/29, 10/30, 11/03 and her recorded sun-exposure and psoralen lecture; Sikazwe 11/03, 11/04).'],
            ['Weighting', 'The faculty have not announced a split by professor, so this paper is unweighted.'],
            ['Dr. Smith\'s format', 'Dr. Smith says her questions are mostly multiple choice with a few fill-in-the-blanks on drug mechanisms, and no short essays.'],
            ['Syllabus formats', 'The syllabus lists multiple-choice, select-all, short-answer, true/false and matching as possible formats and gives no count of each.'],
            ['Practice papers', 'These practice papers draw single-answer questions only; the select-all and drug-target matching questions are in the topic drills, and Reference has a drug-target list to write out before revealing.']],
     factsMain:['Covers'],
     // `unassigned: undefined` keeps a question marked unassigned:true out of both pools:
     // the 24 on pages outside Dr. Sikazwe's assigned pages for Exam 1 (his list of
     // 11/06; topic 'sk-beyond' in q5_L04.js). A pool filter is what the paper, the pool
     // cards on Weak spots and the exam-date scheduling read (shell.html poolFilter).
     pools:[
       {key:'smith',   name:'Dr. Smith (pharmacology)',      marks:null, filter:{exam:1, prof:'Smith', unassigned:undefined}},
       {key:'sikazwe', name:'Dr. Sikazwe (medicinal chemistry)', marks:null, filter:{exam:1, prof:'Sikazwe', unassigned:undefined}},
     ]},
    // Exam 2 (syllabus p. 6): 50 questions, Mon 11/16 9:00-10:30, Lectures 1-4 30% and Lectures 5-8 70%.
    // The core weights pools by marks (views.js drawPaper: each pool supplies its marks' worth of
    // questions), so 30% of 50 = 15 and 70% of 50 = 35. Lectures 6-8 are not taught yet (11/09): the
    // 5-8 pool now holds Lecture 5 only, and the blurb says so (Louis's Exam 1 rule: label coverage
    // honestly). The 1-4 pool keeps Exam 1's exclusions (Dr. Sikazwe's pages outside his assigned list,
    // unassigned:true) and has no split by professor, none being announced. Dr. Patel's format: her
    // PollEv questions of 11/06 (case-based; tube-size calculation; four options, once five with "None
    // of the above") and "there will be a calculation on the exam" (11/06 transcript, T@11799).
    {id:'exam2', name:'Exam 2', date:'Mon 11/16, 9:00–10:30 AM', when:'2026-11-16T09:00',
     questions:50, minutes:90, sata:null,
     blurb:'Covers Lectures 1–8, the full Exam 2 material. Lectures 1–4: 10 questions, 5 Dr. Smith and 5 Dr. Sikazwe (Dr. Patel, 11/12); Lectures 5–8 (Dr. Patel): the other 40 of the 50. Dr. Patel (11/12): multiple choice, select-all, and fill-in-the-blank calculations; "Focus on treatment algorithms, understand patient specifics matter." The syllabus lists multiple-choice, select-all, short-answer, true/false and matching as possible formats and gives no count of each. These practice papers draw single-answer questions only; the select-all and matching questions are in the topic drills',
     facts:[['Covers', 'Covers Lectures 1–8, the full Exam 2 material.'],
            ['Weighting', 'Lectures 1–4: 10 questions, 5 Dr. Smith and 5 Dr. Sikazwe (Dr. Patel, 11/12); Lectures 5–8 (Dr. Patel): the other 40 of the 50.'],
            ['Dr. Patel\'s format', 'Dr. Patel (11/12): multiple choice, select-all, and fill-in-the-blank calculations; "Focus on treatment algorithms, understand patient specifics matter."'],
            ['Syllabus formats', 'The syllabus lists multiple-choice, select-all, short-answer, true/false and matching as possible formats and gives no count of each.'],
            ['Practice papers', 'These practice papers draw single-answer questions only; the select-all and matching questions are in the topic drills.']],
     factsMain:['Covers', 'Weighting'],
     pools:[
       // Dr. Patel, 11/12 (transcript, end of the lecture): "Exam one material, derm related. 10 questions. 5 Sikazwe, 5 Smith."
       // Louis, 2026-11-15: 5 Smith, 5 Sikazwe, the rest Dr. Patel's. The exam total is not announced (the syllabus lists 50),
       // so the paper keeps 50: 5 + 5 + 40.
       {key:'smith',   name:'Lectures 1–4, Dr. Smith: 5 questions', marks:5, filter:{exam:1, prof:'Smith', unassigned:undefined}},
       {key:'sikazwe', name:'Lectures 1–4, Dr. Sikazwe: 5 questions', marks:5, filter:{exam:1, prof:'Sikazwe', unassigned:undefined}},
       {key:'l58', name:'Lectures 5–8 (Dr. Patel): the other 40', marks:40, filter:{exam:2}},
     ]},
    {id:'exam3', name:'Exam 3', date:'Mon 11/23, 9:00–10:30 AM', when:'2026-11-23T09:00',
     questions:50, minutes:90, sata:null, typed:true, blanks:3,
     blurb:'Covers Lectures 9–13 (syllabus). Dr. Sikazwe 14 questions (28%), Dr. Smith 18 (36%, five of them cumulative with Exam 1, three of them fill-in-the-blank on mechanism of action) and Dr. Lam 18 (36%), as Dr. Sikazwe announced on 11/19. Practice coverage so far: Dr. Smith\'s eye lectures, Dr. Sikazwe\'s otic, oral and ophthalmic chemistry and Dr. Lam\'s glaucoma therapeutics; her ophthalmic disorders lecture (11/20) joins when taught.',
     facts:[['Covers', 'Covers Lectures 9–13 (syllabus).'],
            ['The split (11/19)', 'Dr. Sikazwe, 11/19: "Exam 3 questions. 50 total. 28% from me ... 36 from Doctor Smith. And 36 from Doctor Lam." That is 14, 18 and 18 questions.'],
            ['Dr. Lam (11/19)', 'She writes each question from a learning objective of her handout (the Word file); "cover the information up that is listed under each learning objective and try to write down as much as you remember", then practice the patient cases. One open-ended question, at least one on the sequence of drug classes, and application cases like Ms. Lopez. Not tested: risk factors to collect, the day supply calculation, prostaglandin contraindications, closed-angle glaucoma (except the drugs that raise its risk).'],
            ['Dr. Smith (11/13)', '"I\'ve got 5 questions and they\'re cumulative, so everything that was on the first exam is fair game. So focus on pathophys and then focus on mechanisms." She likes scary side effects such as black box warnings.'],
            ['Dr. Smith (study hints, 11/20)', 'Answer the objectives in the slide deck; know the parts of the eye for glaucoma and for tear production; no need to memorize slides 8 or 9; understand open-angle glaucoma, histamine in allergic conjunctivitis and the pathology of dry eye; memorize the drugs in the drug table; know every mechanism of action and the small details that tell drugs in one class apart; list significant side effects and explain how metabolic acidosis occurs with carbonic anhydrase inhibitors. Three fill-in-the-blank questions, all on mechanism of action: "study to the details presented in class."'],
            ['Dr. Sikazwe (11/19)', 'Focus on two diseases, glaucoma and dry eye. Allergic conjunctivitis is read only to slide 51 (the antihistamine slides 52-53 are in a later lecture); the steroid slides and self-assessment questions 1 and 2 are skipped; questions 3, 4 and 5 are in.'],
            ['Syllabus formats', 'The syllabus lists multiple-choice, select-all, short-answer, true/false and matching as possible formats and gives no count of each.']],
     factsMain:['Covers', 'The split (11/19)', 'Dr. Smith (study hints, 11/20)', 'Dr. Lam (11/19)'],
     pools:[
       // Dr. Sikazwe, 11/19: 28% / 36% / 36% of 50 questions = 14, 18 and 18 (14 + 18 + 18 = 50). Dr. Smith's 18 include her
       // five cumulative questions (11/13 T@61120): 13 from the eye lectures and 5 from her Exam 1 material.
       {key:'eye', name:'Dr. Smith: eye lectures', marks:13, filter:{exam:3, prof:'Smith'}},
       {key:'cum', name:'Dr. Smith: cumulative Exam 1 material', marks:5, filter:{exam:1, prof:'Smith', unassigned:undefined}},
       {key:'sik', name:'Dr. Sikazwe: otic, oral, ophthalmic chemistry', marks:14, filter:{exam:3, prof:'Sikazwe'}},
       {key:'lam', name:'Dr. Lam: glaucoma therapeutics', marks:18, filter:{exam:3, prof:'Lam'}},
     ]},
  ],
  // Exam 1 was on Mon 11/09; the Exam view, the weighted pass and Weak spots follow Exam 2 from
  // 11/09 (the core draws papers for one exam, the active one). Exam 1's own entry above is kept.
  activeExam: 'exam3',

  // What a question asks the student to do. The first four follow Dr. Smith, 11/03:
  // "what are these drugs targeting, why are they targeting it, and what makes them
  // different from each other, and then significant side effects that I point out to you."
  skills: [
    {id:'mech',    label:'Mechanism and target',              short:'Mechanism'},
    {id:'tell',    label:'What separates drugs or diseases',  short:'Tell apart'},
    {id:'adverse', label:'Adverse effect and why it happens', short:'Adverse'},
    {id:'counsel', label:'Use and counseling',                short:'Counsel'},
    {id:'patho',   label:'Pathophysiology',                   short:'Patho'},
    {id:'epi',     label:'Epidemiology and risk',             short:'Epi'},
    {id:'class',   label:'Drug class and indication',         short:'Class'},
    {id:'chem',    label:'Structure, functional group, SAR',  short:'Chem'},
    {id:'pk',      label:'PK, metabolism, interactions',      short:'PK'},
    // Dr. Patel's therapeutics (Lecture 5 on): quantity and dose calculations, and reading a case
    // (severity, status, line of therapy, referral), the two kinds her 11/06 polls asked
    {id:'dose',    label:'Dose, quantity and tube size',      short:'Dose'},
    {id:'case',    label:'Case assessment and treatment choice', short:'Case'},
  ],

  paceDefault: 'cram',

  scheduler: {model:'concept'},

  files: ['atlas.js', 'diagrams.js',
          // Reaction schemes from Dr. Sikazwe's slides (generated by gen_reactions.py; adds to DIA)
          'reactions.js',
          // Chemical basis of drug action figures (generated by gen_cbda.py; adds to DIA)
          'cbda.js',
          // Figures for the narrated walkthrough of Dr. Sikazwe's assigned vitamin D reading (adds to DIA)
          'diagrams_rd.js',
          // Drawn step-throughs from the visuals evaluation, items 3-7 (fig-steroid, fig-il-axis,
          // fig-cni-nfat, fig-spf, fig-block-vs-screen; adds to DIA, DIA_NAMES and DIAGRAMS)
          'figs2.js',
          // Exam 3 diagrams (Louis, 2026-11-19): Dr. Smith's eye figures, then Dr. Sikazwe's otic, oral and ophthalmic chemistry (each adds to DIA, DIA_NAMES, DIAGRAMS)
          'diagram_fx.js',
          'diagram_fx_fa.js',
          'diagram_fx_fa2.js',
          'diagram_fx_fb.js',
          'diagram_fx_fc.js',
          'diagrams_ey.js',
          'diagrams_lg.js',
          'diagrams_oo.js',
          'diagrams_ey_fa.js',
          'diagrams_ey_fa2.js',
          'diagrams_fb.js',
          'diagrams_oo_fc.js',
          // Mechanism step-throughs from Dr. Smith's PCol slides (Louis, 2026-11-09): adds to DIA
          'moa_figs.js',
          'q1_topics.js', 'q2_L02.js', 'q3_L03a.js', 'q4_L03b.js', 'q5_L04.js', 'q6_L03c.js',
          // harder practice for Exam 2 (Louis, 11/09: finer details, two facts combined, closer choices)
          'q8_hard_smith.js', 'q9_hard_sik.js',
          // Dr. Patel, Lecture 5 (Exam 2): pushes its deck folder into TOPIC_DECKS, its TOPICS and questions
          'q7_L05.js',
          // harder Lecture 5 items and new-patient case versions of her polls (Louis, 2026-11-12)
          'q14_L05_harder.js',
          // Dr. Patel, Lectures 6 (acne, 11/10) and 7 (scaly dermatoses and psoriasis, 11/10-11/11)
          'q12_L06.js', 'q13_L07.js',
          // Dr. Patel, Lecture 8 (11/12): outdoor exposures, sun exposure, wound care, warts/corns/calluses
          'q15_L08_outdoor.js', 'q16_L08_sun.js', 'q17_L08_wound.js', 'q18_L08_warts.js',
          // fill-in-the-blank items (kit type 'blank', 2026-11-09): Quiz, topic drills and the missed list
          'q10_blank.js',
          // exam-style items, Dr. Smith and Dr. Sikazwe (2026-11-12: one detail swapped per wrong option)
          'q11_new_smith_sik.js',
          // Exam 1 style items from the recalled exam questions: drawings, conclude/assume stems, select-all (Louis, 2026-11-14)
          'q19_exam1_style.js',
          // the two ABCDE mnemonics asked as cases (Louis, 2026-11-14)
          'q20_abcde.js',
          // Lecture 8 points she stressed that had no question: Lyme neurologic/cardiac, scorpion stings, sunscreen expiration, snow and sand, stopping a reacting product, Fitzpatrick type, silicone for scars
          'q21_L08_gaps.js',
          // Dr. Smith, Lectures 9-10 (Exam 3): the eye (topics first, then the question files)
          'q27_ooo_topics.js', 'q22_eye_topics.js', 'q32_lam_topics.js', 'q23_eye_anat_patho.js', 'q24_eye_inflow.js', 'q25_eye_outflow.js', 'q26_eye_allergy_dry.js',
          // Dr. Sikazwe, Lectures 11-12 (Exam 3): otic, oral, ophthalmic medicinal chemistry
          'q28_ooo_otic_oral.js', 'q29_ooo_oph_a.js', 'q30_ooo_oph_b.js', 'q31_ooo_oph_c.js',
          // Dr. Sikazwe, 11/19 (Exam 3): the questions on what he emphasized, written after the lecture (video and transcript)
          'q36_ooo_1119.js',
          'q37_sik_practice.js',
          // Dr. Lam, Lecture 12 (Exam 3): glaucoma therapeutics, by her learning objectives (topics first, in q32_lam_topics.js above)
          'q33_lam_a.js', 'q34_lam_b.js', 'q35_lam_c.js',
          // the step-throughs of moa_figs.js in the explanations of the matching Smith questions
          'moa_links.js',
          // Drug list tab (temporary course-level presentation, to be replaced by the kit's
          // Drug List feature): its data, then the tab itself (Louis, 2026-11-08)
          // (chart_boxes.js: the rows of the original chart pages in chart/, from render_chart.py;
          // drugfacts.js: bank questions mapped to Drug list facts, read-only, Phase 1 of the plan)
          'chart_boxes.js', 'chart_boxes_eye.js', 'druglist_data.js', 'druglist_eye.js', 'drugfacts.js', 'druglist_ui.js',
          // the Diseases tab (Louis, 2026-11-13): cards per condition, drug panels, tell-apart sets (dz_build.py, dz_check.js)
          'dz_data.js', 'dz_ui.js',
          // the FTU tab (Louis, 2026-11-14): typed fingertip-unit practice with a body diagram and a record (ftu_test.js)
          'ftu_ui.js',
          // Slide links (Louis, 2026-11-13): a slide citation opens that slide from the clean decks in deck/
          // (slide_data.js: the page map and tables, written by slide_map.py; slide_check.js, slide_test.js)
          'slide_data.js', 'slide_ui.js',
          // "Likely on the exam" stars (course-level, Louis 2026-11-08): data, then presentation
          'likely_data.js', 'likely_ui.js',
          // Narration player (course-level, Louis 2026-11-08, path B of reviews/NARRATION_PLAN.md
          // 7.1; temporary until a kit module): walkthrough scripts, spoken whys and the recorded-
          // clip manifest, then the player (walk_ui.js) and "Hear the why" (why_ui.js). When node
          // evaluates this file (build.py, the checks) a data file not yet written is left out, so
          // the build does not stop on it; the players draw nothing for data that is not there.
          // dianarr_smith.js, dianarr_sik.js: spoken text for each step of the drawn step-throughs (Louis,
          // 2026-11-09: "can the diagram have narration explaining the steps of each as a walk through?")
          ...['walk_pp.js', 'walk_pc.js', 'walk_sun.js', 'walk_mc.js', 'walk_rd.js', 'why_data.js',
              'dianarr_smith.js', 'dianarr_sik.js', 'audio_manifest.js']
            .filter(f => { try { return typeof require !== 'function' || require('fs').existsSync(f); } catch (e) { return true; } }),
          // reaction figures for the why of mapped questions (why_figs.js, read by why_ui.js)
          'why_figs.js',
          'walk_ui.js', 'why_ui.js',
          // "Listen" on each drawn step-through with narration (uses walk_ui.js's player)
          'dianarr_ui.js',
          // A "Purpose" sentence at the top of each drawn figure (Louis 2026-11-13); after the files that add to DIA
          'purpose_ui.js',
          // one arrowhead definition per drawn figure, so an arrow keeps its head when another figure is in a closed folder
          'svgid_ui.js',
          // Topics: the exam facts card (course-level, Louis 2026-11-08; the deck folders are in
          // guide.js with the deck grouping)
          'topics_ui.js',
          // Wide screens (iPad Pro 13, MacBook) and the pinned tab strip that hides while reading
          // (course-level, Louis 2026-11-08; temporary until the kit has these)
          'place_keep.js',
          'exam_all_ui.js',
          'wide_ui.js',
          // Reference and Tell apart tables: short lines inside cells and one card per row on
          // phones (course-level presentation, 2026-11-08)
          'tables_ui.js',
          // Quiz: "One at a time | All on one page" (course-level, Louis 2026-11-08, after his
          // Intro to Pharmacology drill's layout toggle; temporary until the kit has it)
          'topic_list_ui.js',
          'gloss_ui.js',   // glossary.js entries marked cs:true (RARE) are glossed in their own case only (wraps the core's glossify)
          // "See it on the structure": annotated structure figures in the explanations of
          // Dr. Sikazwe's structure/SAR questions, shown after an answer (course-level, Louis
          // 2026-11-08; generated by gen_exfig.py from exfig_data.json and the Atlas SMILES)
          'exfig.js', 'exfig_ui.js',
          // Jumps to a reading section: land below the pinned tab strip, highlight the section
          // and the lines that match the question (course-level, Louis 2026-11-08)
          'jump_ui.js',
          // Guides, Tell apart and Reference in one folder per exam, like the Topics exam folders
          // (course-level, Louis 2026-11-13). After jump_ui.js: it wraps that file's scrollToEl and
          // jump, and its wrappers of renderGuide/renderTell/renderRef run after every other file's.
          'examfold_ui.js',
          // Space and a rule between the sections of Reference, Guides and Tell apart (Louis 2026-11-13)
          'refsep_ui.js',
          // Guides: the reading components of the objective sections (numbered blocks, tables, formula
          // line, step-care bands, number tiles with a label that says what the number measures,
          // tap-to-check polls). Styles only, under ".gobj .g2-" (Louis 2026-11-14)
          'guide2_css.js',
          'g2nav_ui.js', 'guide_pl_css.js', 'guide_drill_ui.js',
          // Glossary tab, "Words in this question" under an answered question, My words (Louis, 2026-11-14)
          'glossary_data.js', 'glossary_ui.js',
          // Stars on the reading tabs: guide sections and blocks, reference sections, tell-apart rows, disease cards, drugs,
          // glossary terms (Louis, 2026-11-15; likely_map.js is written by likely_map.py from likely_map_source.json), and "Starred only"
          'likely_map.js', 'likely_marks_ui.js',
          // Search box in the header (Louis, 2026-11-14): last of the content files, it reads their globals
          'search_ui.js',
          // Browser-tab icon on the live page (brand.py wrote it into the <head> until 2026-11-09)
          'icon_ui.js'],
  // (figph_ui.js, the course-level Enlarge placeholder fix, left the list on 2026-11-09: kit
  // #90 put the same fix into the core's figBig.)

  tools: {citeAliases:{'skin-pathophys-students-2026.pdf':'Skin-Pathophys-Students-2026.pdf',
                       'skin-pcol-students-2026.pdf':'Skin-PCol-Students-2026.pdf',
                       'f26-deent-dpaw-mc.pdf':'f26-DEENT-DPAW-mc.pdf',
                       'deent_sun_exposure_2026.pdf':'DEENT_Sun_Exposure_2026.pdf',
                       'patel_dermatitis-therapeutics-student.pdf':'Patel_Dermatitis-Therapeutics-Student.pdf',
                       'patel_acne-therapeutics-student.pdf':'Patel_Acne-Therapeutics-Student.pdf',
                       'patel_scaly-dermatoses-therapeutics-student.pdf':'Patel_Scaly-Dermatoses-Therapeutics-Student.pdf'},
          citeLectures:{}, citeBareMap:{},
          explainTerms:[], harvestMasks:[]},

  // Link preview of a shared address and the Home Screen name (kit #88; these replace
  // release step 1b, src/brand.py, from 2026-11-09). Values as brand.py wrote them.
  share: {title: 'DEENT Study Guide / Review',
          description: 'PHAR 4346 study guide and review: practice questions, guides, structures, diseases and drug targets.',
          url: 'https://lglouis3-create.github.io/DEENT/',
          image: 'og-image.png'},
  manifest: {short_name: 'DEENT Review'},

  kit: {core: '64302e2'},
};
