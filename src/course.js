/* ==========================================================================
   COURSE MANIFEST — everything that is specific to this course lives here.
   The engine (shell.html, views.js) reads COURSE and nothing else about the
   course. Fill this in first; the checks read it too.
   ==========================================================================
   id, title, short   names shown in the header and the page title
   output             file name of the built page (the site serves it under this name)
   atlas              true only when atlas.js carries drawn structures for an Atlas tab
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
  atlas: false,                          // switched on when Dr. Sikazwe's L03b is ingested (Louis, 2026-11-05)
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
  ],

  exams: [
    {id:'exam1', name:'Exam 1', date:'Mon 11/09, 9:00–10:30 AM', when:'2026-11-09T09:00',
     questions:50, minutes:90, sata:null,
     blurb:'Lecture 1 only (10/29, Dr. Smith) in this preview. Exam 1 covers Lectures 1–4 (syllabus p. 6); the faculty have not announced a split by professor, so practice papers are unweighted.',
     pools:[
       {key:'smith',   name:'Dr. Smith (pharmacology)',      marks:null, filter:{exam:1, prof:'Smith'}},
       {key:'sikazwe', name:'Dr. Sikazwe (medicinal chemistry)', marks:null, filter:{exam:1, prof:'Sikazwe'}},
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
          'q1_topics.js'],

  tools: {citeAliases:{'skin-pathophys-students-2026.pdf':'Skin-Pathophys-Students-2026.pdf',
                       'skin-pcol-students-2026.pdf':'Skin-PCol-Students-2026.pdf'},
          citeLectures:{}, citeBareMap:{},
          explainTerms:[], harvestMasks:[]},

  kit: {core: '25c643d'},
};
