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
  ],
  activeExam: 'exam1',

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
  ],

  paceDefault: 'cram',

  scheduler: {model:'concept'},

  files: ['atlas.js', 'diagrams.js',
          // Reaction schemes from Dr. Sikazwe's slides (generated by gen_reactions.py; adds to DIA)
          'reactions.js',
          'q1_topics.js', 'q2_L02.js', 'q3_L03a.js', 'q4_L03b.js', 'q5_L04.js', 'q6_L03c.js',
          // Drug list tab (temporary course-level presentation, to be replaced by the kit's
          // Drug List feature): its data, then the tab itself (Louis, 2026-11-08)
          // (chart_boxes.js: the rows of the original chart pages in chart/, from render_chart.py;
          // drugfacts.js: bank questions mapped to Drug list facts, read-only, Phase 1 of the plan)
          'chart_boxes.js', 'druglist_data.js', 'drugfacts.js', 'druglist_ui.js',
          // "Likely on the exam" stars (course-level, Louis 2026-11-08): data, then presentation
          'likely_data.js', 'likely_ui.js',
          // Narration player (course-level, Louis 2026-11-08, path B of reviews/NARRATION_PLAN.md
          // 7.1; temporary until a kit module): walkthrough scripts, spoken whys and the recorded-
          // clip manifest, then the player (walk_ui.js) and "Hear the why" (why_ui.js). When node
          // evaluates this file (build.py, the checks) a data file not yet written is left out, so
          // the build does not stop on it; the players draw nothing for data that is not there.
          ...['walk_pp.js', 'walk_pc.js', 'walk_sun.js', 'walk_mc.js', 'why_data.js', 'audio_manifest.js']
            .filter(f => { try { return typeof require !== 'function' || require('fs').existsSync(f); } catch (e) { return true; } }),
          'walk_ui.js', 'why_ui.js',
          // Topics: the exam facts card (course-level, Louis 2026-11-08; the deck folders are in
          // guide.js with the deck grouping)
          'topics_ui.js',
          // Wide screens (iPad Pro 13, MacBook) and the pinned tab strip that hides while reading
          // (course-level, Louis 2026-11-08; temporary until the kit has these)
          'wide_ui.js',
          // Reference and Tell apart tables: short lines inside cells and one card per row on
          // phones (course-level presentation, 2026-11-08)
          'tables_ui.js',
          // Quiz: "One at a time | All on one page" (course-level, Louis 2026-11-08, after his
          // Intro to Pharmacology drill's layout toggle; temporary until the kit has it)
          'topic_list_ui.js'],

  tools: {citeAliases:{'skin-pathophys-students-2026.pdf':'Skin-Pathophys-Students-2026.pdf',
                       'skin-pcol-students-2026.pdf':'Skin-PCol-Students-2026.pdf',
                       'f26-deent-dpaw-mc.pdf':'f26-DEENT-DPAW-mc.pdf',
                       'deent_sun_exposure_2026.pdf':'DEENT_Sun_Exposure_2026.pdf'},
          citeLectures:{}, citeBareMap:{},
          explainTerms:[], harvestMasks:[]},

  kit: {core: '08be7a2'},
};
