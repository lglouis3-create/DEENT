# Waiting for Louis

## Conflicts kept out of scored practice (Louis's rule, 2026-11-05)
1. **Acne and hyperproliferation.** Pathophys slide 32 lists "alteration in the keratinization process and hyperproliferation of ductal epidermis" as an acne factor; in class (10/29, T 573-577) Dr. Smith said keratinocyte hyperproliferation "is not one of the components of acne. ... This is a feature of psoriasis." L1-042 words the option without "hyperproliferation"; no item asks whether hyperproliferation is an acne factor.
2. **Psoriasis onset.** Pathophys slide 20: "most patients have onset before 40"; she said "about age 40" (T 308-309). No item asks the onset age.
3. **IL-12 & IL-13 vs IL-12 & IL-23.** Pathophys slide 28 prints "IL-12 & IL-13 inhibitors"; slide 21 names IL-23 among the psoriasis cytokines and the drug chart lists ustekinumab as an IL-12 & IL-23 inhibitor. No item keys on it.
4. **Vitamin D receptor binding site.** PCol slide 7: VDR binds the TRE; PCol slide 21 (10/30): the VDR–RXR dimer binds vitamin D response elements. No item keys on it until 10/30 is ingested and the conflict is settled.

## Slips resolved against the slide (no action needed unless Louis disagrees)
- "RXR" for the skin-disease retinoids (T 901-903) → RAR (PCol 14 and her sentences before and after). L1-090 note.
- "it's not T cell, it's not IgE mediated" (T 179) → T-cell mediated, IgE-independent (Pathophys 13). L1-020 note.
- "glycerin" (T 448) → glyceride (Pathophys 33). L1-043 note.

## Missing material for Exam 1
- Dr. Smith's sun-exposure recording with PCol slides 77-80 (psoralens), promised 11/03.
- Dr. Sikazwe's list of slides to avoid, promised by Friday 11/06.

## Kit
- `scheduler_test.js` fails on this course because its scratch topic uses the skill ids `recall` and `calc`, which DEENT's taxonomy does not have; with those two ids added to a scratch copy of course.js, all 109 checks pass. A test-only kit fix is proposed; the DEENT taxonomy is not changed to suit the test.
- The engine maps a question to one lecture by its deck name, so a deck taught over several lectures (Smith's PCol deck, Sikazwe's DPAW deck) cannot be split by date in `lectures`; proposed as a kit improvement.
