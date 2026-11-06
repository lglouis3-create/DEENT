# Session log

## 2026-11-05: setup and Lecture 1 preview (Mode 1)
- Kit attached with push access; core copied at `25c643d` (kit #32 merged before the pin).
- Read: syllabus, course intro deck (Drive), both Smith decks, the 10/29, 10/30, 11/03 and 11/04 transcripts and frame packs (11/04 frames extracted from the two MP4 parts), the DPAW deck, the drug charts, Katzung ch. 61, the Foye excerpt, the vitamin D reading. Outlines per lecture written by three reader agents.
- Louis approved: Exam 1 unweighted; source rules; core features only; preview on the working branch.
- Built Lecture 1: 69 questions, 2 step-throughs, tell-apart, reference and guide tabs, STYLE.md corpus for Smith 10/29.
- Checks: see the final report of this session (scheduler_test.js FAIL traced to the kit test's fixed skill ids `recall` and `calc`).
- Independent review (separate agent) of all 69 questions against the slides, transcript, frames and drug chart: 34 clean, 44 findings, no wrong key. Applied: L1-092 distractor that isotretinoin made defensible replaced; L1-062 held out of scored practice (conflict with slide 32); L1-084 product names removed from options (specific steroids excluded); 3 giveaway stems rewritten; 2 duplicates given dupOf; 7 absolute-word cues and 3 figurative wordings removed; 16 keys that were the longest option shortened or distractors lengthened; 6 citations completed; reference.js no longer attributes a name the transcript does not give. Bank now 68 questions.

## 2026-11-05: first `main` and Pages
- Before `main` existed, Pages had been set to build from `claude/jolly-bell-k7ur5m`, so the branch's full build was public for a short time. On Louis's "yes, push main", pushed `main` (`319148c`): placeholder root, Lecture 1 at `/preview/`, sources and state. Louis switched Pages to `main` / root; run "pages build and deployment" for `319148c` completed with success (2026-11-05 05:38 UTC). The site itself was not opened from this session.
- Louis did not want the placeholder ("I think it should just open to the site"); the full Lecture 1 build now serves the root of `main`.

## 2026-11-05: Lectures 2–4
- Louis: "i want all the lecture material all the way to today 11/04 on the site".
- Four writer agents drafted one file each (L2 114, L3a 108, S3 103, S4 119); four separate reviewer agents checked every item against the slides, transcripts, frames, drug chart and readings. Findings: L2 12, L3a 15, S3 17, S4 16 (one wrong key, S4-076, numbering stem; fixed). All applied; held out L2-015, L3-026, S3-081. Bank 509.
- Notes merged: tell-apart and reference tables per lecture, STYLE.md polls/room questions/exclusions, conflicts in OPEN_QUESTIONS.md. Exam 1 label changed to practice coverage of Lectures 1-4.

## 2026-11-06: sun-exposure lecture and the Atlas
- Louis sent Dr. Smith's sun-exposure slides and audio. Local transcription NOT RUN (the network refuses the speech-model hosts); transcribed with Descript in Louis's account (project 030aef20-9873-4d73-a544-7eeef2fda095). The "Slides 5-26" audio is the same lecture without the psoralen opening; only the full lecture was exported.
- q6_L03c.js: 46 questions; separate review: 24 findings (3 defensible distractors), all applied.
- Atlas: gen_atlas.py (RDKit) from atlas_data.json; two agents built the data from DPAW pp. 1-35 and 38-71, each drawing compared with its slide; tacrolimus, pimecrolimus and cyclosporine matched ChEMBL InChIKeys. 91 structures. Five questions now show a structure (fg/cmp).
- Reminder set: 2026-11-07 12:00 Central for Sikazwe's slides-to-avoid list.

## 2026-11-06: Atlas refinement (Louis's standing direction of 2026-11-06)
- Verification agent: every Atlas SMILES compared with ChEMBL by InChIKey (PubChem not reachable from this environment): 75 full match, 7 connectivity only (unspecified or differing stereo, each explained), 9 not drug records, 0 mismatches. Priority with lecture evidence: core 78, reference 11, verify 2. Pages 36-37 rendered: p.36 icotrokinra (FYI), p.37 antibody slide (skip), both excluded and recorded.
- Counts reconciled: 38 (A) + 55 (B) = 93; 4 keys in both (acitretin, tazarotene, tazarotenic acid, steroid nucleus) dropped from A = 89; 2 held (drospirenone, spironolactone) added = 91.
- Six confirmed lecture/drug differences with Compare structures: the five known ones plus erythromycin (p.54 sugar ring O). None changes a taught concept; no question keys on them.
- Study controls (atlas_ui.js, course-level, no core change): priority badges, reference-only toggle (hidden by default), reveal/hide key features, deck page and exam per tile, compare panel; hidden-names mode hides the source line and comparison.
- Sun lecture: 24 review findings confirmed resolved; 18 thin explanations rewritten; Exam 1 tag marked provisional.
- Checks: 27 PASS, 1 FAIL (scheduler_test.js; passes 109/109 with kit PR #50's version, so an upstream test issue), 1 REPORT; atlas_check.js PASS; Atlas controls tested in light/dark, desktop and iPhone 13 emulation, no page errors.
