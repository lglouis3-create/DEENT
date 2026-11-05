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
