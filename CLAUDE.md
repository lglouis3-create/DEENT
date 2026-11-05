# PHAR 4346 DEENT drill: state for Claude

State as of 2026-11-05, after Lecture 1 (Dr. Smith, 10/29) built at `/preview/` on branch `claude/jolly-bell-k7ur5m`.

Built with the exam-drill-builder skill from `lglouis3-create/exam-drill-kit`, core pinned at `25c643d` (`src/course.js` `kit.core`). No feature modules are on.

## Counts
- Questions: 68, all Lecture 1 (Dr. Smith), ids `L1-*` in `src/q1_topics.js` (L1-062 held out; see `reviews/OPEN_QUESTIONS.md`).
- Slide images: 0. Drawn step-through figures: 2 (`acne-cascade`, `nr-action`).
- Site: GitHub Pages serves `main` from the root (Louis switched it on 2026-11-05; deploy run for `319148c` completed with success at 05:38 UTC). Louis asked for the site to open straight to the drill (2026-11-05), so `main` carries the full Lecture 1 build at the root, with `/preview/` beside it.

## Rules from Louis (2026-11-05)
- Exam 1: `marks: null` (unweighted). As the bank grows, check that both professors and every verified Exam 1 lecture are represented. The first preview is labelled "Lecture 1 only"; once the bank supports a full paper, label it practice coverage with no official per-professor split.
- Sources: the testing professor's slides and recording together are primary for that professor's material. The drug chart is a guide; assigned reading is support. Clear verbal slips are resolved against the slide and her surrounding explanation. If a conflict still affects the correct answer, the item stays out of scored practice and is flagged in `reviews/OPEN_QUESTIONS.md`.
- Material a professor explicitly excluded stays out of the exam pools. Personal anecdotes stay off the public site.
- Features: existing kit core only. Atlas on when L03b (Sikazwe) is ready. Calculation modules off. The two ports (`most-likely-stars`, `structure-compare`) deferred. `core/profile.py` and feature trials are kit backlog.
- Dr. Smith is the same professor as in Intro to Pharmacology; that drill's format notes apply (four options, no absolute words, no length cue); question formats otherwise from the DEENT materials.

## Lecture map (syllabus pp. 9-15)
| Entry in course.js | Deck | Taught | Status |
|---|---|---|---|
| L01 | Skin-Pathophys-Students-2026.pdf | 10/29 slides 2-38 | in bank |
| L01b | Skin-PCol-Students-2026.pdf | 10/29 slides 1-15 (in bank); 10/30 slides 16-42; 11/03 slides 41-76; 77-80 deferred to Smith's recording | slides 1-15 in bank |
| (L03b, to add) | f26-DEENT-DPAW-mc.pdf | Sikazwe 11/03 p. 1-26, 11/04 p. 27-71 | not yet |
The engine assigns a question to a lecture by the deck its cite names, so there is one entry per deck; TOPICS carry the split by date.

## Exam 1 coverage checklist
- [x] Lecture 1, Smith 10/29 (Pathophys 2-38, PCol 1-15)
- [ ] Lecture 2, Smith 10/30 (PCol 16-42)
- [ ] Lecture 3a, Smith 11/03 (PCol 41-76)
- [ ] Smith's sun-exposure recording and PCol 77-80 (psoralens): promised on 11/03, not in Drive or uploads
- [ ] Lecture 3b, Sikazwe 11/03 (DPAW p. 1-26)
- [ ] Lecture 4, Sikazwe 11/04 (DPAW p. 27-71)
- [ ] Sikazwe's list of slides to avoid, promised "by Friday" (11/06)
- [ ] Both professors represented in the Exam 1 pools

## Release steps
1. `cd src && python3 build.py --preview` (writes `preview/`), then `./run_checks.sh` (writes the root `index.html`).
2. Commit sources, `preview/` and the root build on the working branch; push the branch.
3. Pushing a changed build to `main` changes the live site; it needs Louis's approval of that change in the session.

## Restore after a container restart
- Decks (gitignored, put under `src/decks/`): Drive file ids `1jBHgmqOgtILeB4ctKKz2TlPculiPxpvD` (Skin-Pathophys-Students-2026.pdf) and `1tEtUtqk9_fM7LG0lfEgK6jO6n5dsqdHH` (Skin-PCol-Students-2026.pdf, Louis's annotated copy), both (Goodnotes folder Fall 2026/DEENT/Slides/Exam 1).
- Drive folders: Transcripts/DEENT `1NudDxnK8I12X956pODkHZDSyc8lFR0cz` (Readings, Transcript, Sikazwe, Slides, Drug List); Fall 2026/DEENT `1TpJ49ClgCLGoO9tLELiU5uIzIrFM9rQB` (Goodnotes: Slides/Exam 1, Drug List).
- Lecture-only transcripts and frame packs: Drive folder Transcript/Lecture Only `1il41KjHexk8Bd2-STPH6LBjLreN4-WTL` (`DEENT_Lecture_Only_Claude_Code_Pack.zip`, `1eRJkXpJn2G6kY6F2hTY160ItwOxButsf`). 11/04 transcript: `1twKCc0dxcqPJIs-m7pphfV0lzSGEGcW5`.
- Drug charts: Transcripts/DEENT/Drug List `1S9SCh_nvLSww0gpLJaoXvqZVFA_ImBKA`.
- The per-lecture source outlines written on 2026-11-05 were working files in the session scratchpad and are not kept in this public repo (they quote the transcripts at length and carry Louis's GoodNotes notes).
