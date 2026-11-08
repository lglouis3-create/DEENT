# Narrated walkthroughs and spoken whys: plan and coverage inventory (PHAR 4346 DEENT, Exam 1 material)

Written 2026-11-08 for Louis's request of the same day: "first fully review everything that needs a voice narration with the walkthrough. Make sure its insight, clarification and understanding on the topic is well received to a person who knows nothing. Doesn't provide any unnecessary narration that doesn't add to the material being discussed and is a waste of narration credits. Make sure we have everything that we want narrated checked and covered."

This is a plan, not scripts. Nothing was recorded, no paid call was made, and no `src/` file was changed. Working tables (regenerable): `/tmp/claude-0/-home-user/1cfa950c-f2ed-5f8d-9b76-7d3dee509718/scratchpad/narration/` (`inventory.tsv`, `sections.tsv`, `why_tiers.tsv`, `questions.tsv`, generators in `bin/`).

## 0. Summary for Louis

- **Timing.** Exam 1 is Mon 11/09, 9:00 AM (course.js). Writing, checking, approving and recording before then is not realistic, and nothing should be rushed onto the live site the night before an exam. The same material is 30% of Exam 2 (Mon 11/16: "Lectures 1-4 (30%)") and part of the final's 50% prior material (syllabus, exam table). Recommended target: ready on the preview by Thu 11/12, live after your approval, before Exam 2.
- **Inventory.** 215 Exam 1 deck pages reviewed: Pathophys 38, PCol 80, Sun 26, DPAW 71 (42 on Dr. Sikazwe's assigned pages). Decisions: NARRATE 109, BRIEF 48, SKIP 58 (29 of the skips are DPAW pages outside his assigned pages).
- **Walkthroughs.** 37 sections in 4 decks (7 Pathophys, 16 PCol, 5 Sun, 9 DPAW), 158 spoken parts, about 12,300 words, about 75,200 characters, about 82 minutes.
- **Spoken whys.** Tier A: the 117 starred questions (`likely_data.js`). Tier B: 54 more tell-apart questions whose concept has no star. Estimated 64,200 and 26,400 characters.
- **Cost** at PH's recorded rate (805 cents per 44,297 characters, about 0.0182 cents a character; see section 5): walkthroughs about $13.66, Tier A about $11.67, Tier B about $4.79. Recommended recording: walkthroughs plus Tier A, about $25.35, one take per clip. Tier B and every question without a script stay on the device voice.
- **Not covered by any narration (no source):** the sunburn-relief anesthetics on the drug chart (no slide); the two APhA tables that Sun slides 18 and 23 link to (not in the sources); held conflicts (section 3.6). Nothing on an objective slide or in Dr. Smith's hints is left without a part (section 4).
- **Decisions needed from you** (section 7.1): where the player lives (DEENT course files now, kit port later), whether slide images from your annotated GoodNotes copies may go on the public site, the voice, which tiers to record, and the budget.

## Sources read for this plan

- PH method (read-only, `/home/user/ro/PH`): `exam1-drill/src/gen_walk.py`, `walk/guide3-8.json` and the other 76 walk files' shape, `narration.js`, `narration3_audit.js` (NARR_Q, 696 scripts: mean 755 characters, median 718, mean 124 words), `audio_index.js`, `antinarr.js`, `app.js` (NARR_Q fallback from `teach` for Exam 4, line 704; the "Hear the why" row, lines 913 and 1761); `exam1-drill/notes/WALKTHROUGH_SCRIPT_BRIEF.md`, `WALKTHROUGH_VERIFY_BRIEF.md`, `WALKTHROUGH_PORT_PROMPT.md`, `REC4.md`; `claude/drill-app-state.md` (lines 82-83, 126-178, 189, 214-215, 312); `claude/drill-notes.md` (sections 2, 4, 5).
- DEENT sources: the four decks (`pdftotext -layout`, every page of the Sun deck read in full); the per-lecture source outlines written on 2026-11-05 (session scratchpad `outlines/`: slide-to-transcript coverage maps of the 10/29, 10/30, 11/03 and 11/04 transcripts, built from the lecture-only transcripts and video frames); the full sun-lecture transcript exported from the Descript project (scratchpad `sun/full_lecture_descript.txt`); `CLAUDE.md`; `src/course.js`, `STYLE.md` (Dr. Smith's hints), `likely_data.js`, the six question files (595 questions loaded and measured), `guide.js` section list (being rewritten now; the mapping below is provisional), `reviews/OPEN_QUESTIONS.md`, `reviews/LOG.md` 2026-11-07; the syllabus text (exam table); kit `FEATURES.md` (guide-walkthroughs, recorded-narration) and `review/port-queue.md`.
- Not read in this pass: the Drive copies of the transcripts (the same files are in the session scratchpad and were used through the outlines), the slide images (the outlines record that every deck page and every lecture frame was viewed on 2026-11-05; the slide-image audit for personal notes is a build step, section 7.3).

## Lessons from Intro to Pharmacology (what made its scripts work, and what went wrong)

What worked:
1. **One source of truth per script.** Each walkthrough was written only from its guide section, which had already been checked against her slides and transcripts. "A claim the section does not carry is an error, even if true" (WALKTHROUGH_VERIFY_BRIEF.md, check 1).
2. **Reduce, then explain.** Keep the idea in plain words, the because/so chains, the comparisons that separate look-alikes, and the traps her questions use. Drop sources lines, question ids, list reading, table headers, anything about the site or studying (SCRIPT_BRIEF "Reduce").
3. **One part = one slide = one idea**, 40-130 words, 3-7 parts a section, 250-450 words (650 for the longest); the slide changes as the part changes (SCRIPT_BRIEF, PORT_PROMPT step 2).
4. **Speech-safe text written for the voice**: numbers and units in words, abbreviations spelled as letters, no symbols, parentheses, slashes or quotation marks; her words introduced as "She said, ..." with a complete clause (SCRIPT_BRIEF "Spoken form").
5. **Independent checking before money is spent**: four verifier agents (fact, distortion, slide, form), then a learning reviewer who changed or added 25 parts so a learner could follow, then a second verification of the changed parts (drill-app-state.md 10/23 entries). The learning pass mattered: it is the step that makes a script work for someone who knows nothing.
6. **Cost reported before every paid batch**, and recording only after the user's go-ahead; one take per clip, `generations_count 1` (REC4.md).

What went wrong, and the rule it gives here:
1. Quota ran out mid-run on 10/18 (62 of 181 clips) and again on 11/01 ("0 credits remaining") (drill-app-state.md line 83; REC4.md). Rule: check the remaining credits against the queue total before starting, and record a test clip first.
2. 33 recorded clips were retired because their scripts changed after recording (drill-app-state.md line 139; drill-notes.md section 2). Rule: scripts are frozen and approved before any recording; each clip stores the hash of the text it was made from, and the build ignores a clip whose hash no longer matches.
3. Long single writes by writer agents stopped partway (L21 bank, walkthroughs) (drill-notes.md section 2). Rule: one agent per deck section group, small files, appended in batches.
4. A deck page in the Drive copy carried personal text with other people's names; it had to be purged from branch history (drill-notes.md section 2, ADE p. 35). Rule: inspect every slide image before it is committed.
5. A reading talk had to be re-recorded to remove a stale "Monday" line (REC4.md). Rule: no dates, days or "next week" in any script.
6. A "Hear the why" safety timer cut off a slow device voice (drill-notes.md section 2). Rule for the player: no fixed timer on device speech.
7. The ElevenLabs connector's own guidance is to leave `generations_count` at its default of two takes for speech; two takes double the credits. PH used one take per clip; this plan does the same, and states it in the approval request.

## 1. Slide-by-slide inventory and walkthrough sections

Decisions:
- **NARRATE**: a part of 70-130 words that carries a mechanism chain, a distinction, a "why it matters" or a known confusion. The insight column says what that part must get across to a listener with no background.
- **BRIEF**: 20-50 words (a definition, a list stated as its pattern, a short lead-in). "Folded" means the slide's point is said inside the neighbouring part, with no part of its own.
- **SKIP**: titles, objectives, outlines, closing slides, material a professor excluded, DPAW pages outside Dr. Sikazwe's assigned pages ("Not on Exam 1 assigned pages: skip"), repeated slides, slides whose content is a link to a table not in our sources, and the held conflicts.

Each section belongs to one deck and follows the deck's slide order and the topic organisation in TOPICS (`q*.js`); each part names one slide. The guide is being rewritten by deck and learning objective (`gobj-*` sections); the "guide section" column says which of those sections each walkthrough bar would sit under. Because the guide's objective sections cut across slides (for example, PCol objective 2 covers every drug class), the walkthroughs are organised by slide range rather than one per guide section, and several walkthroughs sit under one objective section. Once the guide rewrite lands, the bar placement is rechecked (section 7.4, step 1).

Three sections are shorter than three parts: sun-1 (psoralens, 2 parts) and pc-16 (JAK inhibitors, 2 parts) are separate drug classes that would otherwise be merged into an unrelated section; PH allowed short sections of 120-200 words for the same reason.

### Proposed sections (37; 158 parts)

Words are targets for the script writers; characters = words x 6.1 (PH's walkthroughs: 98,025 characters for 16,087 words, drill-app-state.md 10/23 v86).

| Section | Spoken title | Parts: slide (B = brief) | Parts | Words | Characters | Guide section / topics |
|---|---|---|---|---|---|---|
| pp-1 | Skin structure and sebum | PP 2 B, 5, 6 | 3 | 235 | 1,434 | gobj-l1-1 / skin |
| pp-2 | Atopic dermatitis: who gets it and how it looks | PP 8 B, 10, 11, 12 B | 4 | 260 | 1,586 | gobj-l1-2 / ad/clin |
| pp-3 | Atopic dermatitis: barrier, genes and immune imbalance | PP 13, (+14), 15, 16, 17 B | 4 | 415 | 2,532 | gobj-l1-3 / ad/path, ad/gene, ad/drugs |
| pp-4 | Psoriasis: what goes wrong in the skin | PP 19, 20, 21, 22, 23 | 5 | 460 | 2,806 | gobj-l1-3 / pso/clin, pso/path |
| pp-5 | Psoriasis: triggers, other forms and treatment aims | PP 24, 26 B, 27 B, (+28) | 3 | 200 | 1,220 | gobj-l1-3 / pso/fact, pso/tx |
| pp-6 | Acne: how a lesion forms | PP 30 B, 31, 32, 33, 34 | 5 | 430 | 2,623 | gobj-l1-3 / acne/clin, acne/path, acne/casc |
| pp-7 | Acne: drug classes by cause, and the three diseases compared | PP 35 B, 36, 37 B, 38 | 4 | 270 | 1,647 | gobj-pp-4 / acne/drugs, cmp |
| pc-1 | Nuclear receptor binders: how they change genes | PC 5 B, 6, 7 | 3 | 240 | 1,464 | gobj-l1-4 / nrb |
| pc-2 | Corticosteroids | PC 8 B, (+9), 10, 11, 12 | 4 | 365 | 2,226 | gobj-l1-4 / cs |
| pc-3 | Retinoids: mechanism and topical products | PC 14, 15, 16, 17 B, 18 | 5 | 440 | 2,684 | gobj-l1-4 / ret, l2-tret |
| pc-4 | Oral retinoids and the vitamin D analog | PC 19, 20, 21, 22 | 4 | 390 | 2,379 | gobj-l1-4 / l2-oret, l2-vitd |
| pc-5 | Calcineurin inhibitors: the T-cell signals | PC 24 B, 25, 26 | 3 | 275 | 1,678 | gobj-l1-4 / l2-tcell |
| pc-6 | Calcineurin inhibitor products | PC 27, 28 B, 29 B, 30 | 4 | 280 | 1,708 | gobj-l1-4 / l2-cni |
| pc-7 | PDE-4 inhibitors | PC 32, 33, 34 | 3 | 220 | 1,342 | gobj-l1-4 / l2-pde |
| pc-8 | Keratolytics | PC 35 B, 36, 37 B, 38, 39 B, 40 | 6 | 350 | 2,135 | gobj-l1-4 / l2-ker |
| pc-9 | Antibiotics that act on the ribosome | PC 42, 43, 44, 45 B, 46, 47 B | 6 | 430 | 2,623 | gobj-l1-4 / l2-abx, l3-abx |
| pc-10 | Folate-pathway antibiotics, dapsone and metronidazole | PC 48 B, 49, 50 B, 51 B | 4 | 210 | 1,281 | gobj-l1-4 / l3-fol |
| pc-11 | Antipsoriatic cytotoxic agents | PC 52 B, 53, 54, 55 B, 56, 57 | 6 | 355 | 2,166 | gobj-l1-4 / l3-cyto |
| pc-12 | Methotrexate | PC 59, 60 B, 61 | 3 | 220 | 1,342 | gobj-l1-4 / l3-mtx |
| pc-13 | Abatacept and co-stimulation | PC 62 B, 63 x2 | 3 | 240 | 1,464 | gobj-l1-4 / l3-abat |
| pc-14 | Cytokine antagonists: IL-4 receptor, IL-17, IL-12 and IL-23 | PC 64, 65 B, 66, 67, 68, 69 B | 6 | 455 | 2,776 | gobj-l1-4 / l3-cytok |
| pc-15 | TNF-alpha inhibitors | PC 70, 71 B, 72, 73 B, 74 | 5 | 325 | 1,982 | gobj-l1-4 / l3-tnf |
| pc-16 | JAK inhibitors | PC 75, 76 | 2 | 170 | 1,037 | gobj-l1-4 / l3-jak |
| sun-1 | Psoralens and PUVA | Sun 3, 4 B | 2 | 155 | 946 | gobj-sun-pso / l3c-pso |
| sun-2 | Ultraviolet light, tanning and sunburn | Sun 7, 8, 9 B, 10 B, 11 | 5 | 385 | 2,348 | gobj-sun-1 / l3c-uv |
| sun-3 | Measuring protection: MED, SPF and broad spectrum | Sun 12 B, 13, 14, 15, 16 B, 17 | 6 | 425 | 2,592 | gobj-sun-4 / l3c-spf |
| sun-4 | Sunblocks versus sunscreens | Sun 20, 21 B, 22, 24 | 4 | 305 | 1,860 | gobj-sun-2 / l3c-prod |
| sun-5 | Using sun products: substantivity, photosensitizing drugs, safety | Sun 18, 19, 25 | 3 | 260 | 1,586 | gobj-sun-photo / l3c-prod |
| mc-1 | Eczema: crisaborole and the topical JAK inhibitors | DPAW p. 7 x2, 8, 9 B | 4 | 350 | 2,135 | gobj-mc-ecz / s3-cris, s3-jak |
| mc-2 | Psoriasis: UV terms and the older topical agents | DPAW p. 12, 15, 16, 17, 18, 19 B | 6 | 545 | 3,324 | gobj-mc-psotop / s3-uv, s3-emol, s3-anth, s3-psor |
| mc-3 | Glucocorticoids: structure, SAR, potency and metabolism | DPAW p. 20 x2, 21, 23 B, 25, 26 | 6 | 515 | 3,142 | gobj-mc-psotop / s3-gc, s3-hc |
| mc-4 | Psoriasis: vitamin D analogs, limus drugs, retinoids | DPAW p. 27 x2, 28, 29 | 4 | 390 | 2,379 | gobj-mc-psotop / s4-vitd, s4-limus, s4-psret |
| mc-5 | Psoriasis: systemic agents | DPAW p. 30, 31, 32 B, 33, 34 | 5 | 385 | 2,348 | gobj-mc-psosys / s4-mtx, s4-sys |
| mc-6 | Acne: keratolytics | DPAW p. 43, 44 B, 46, 47 | 4 | 310 | 1,891 | gobj-mc-acne / s4-kera |
| mc-7 | Acne: retinoids by generation | DPAW p. 48 B, 49, 50, 51 | 4 | 290 | 1,769 | gobj-mc-acne / s4-ret |
| mc-8 | Acne: hormones and antibiotics | DPAW p. 52 B, 53, 54, 55 | 4 | 310 | 1,891 | gobj-mc-acne / s4-horm, s4-abx |
| mc-9 | Sunblocks and sunscreens: the chemistry | DPAW p. 61, 62, 63, 64, 65, 66 B | 6 | 465 | 2,836 | gobj-mc-sun / s4-sun |
| **Total** | 37 sections | | **158** | **12,325** | **75,182** | |

### Slide-by-slide inventory (215 deck pages)

### 1.1 Skin-Pathophys-Students-2026.pdf (Dr. Smith, 10/29; T = 10/29 transcript line)

NARRATE 19, BRIEF 11, SKIP 8.

| Slide | Title | What the professor said (location) | Decision | Section | Insight a novice needs, or reason to skip | Words |
|---|---|---|---|---|---|---|
| 1 | Title | Not discussed | SKIP |  | Title slide |  |
| 2 | Outline | T 6-29: all three diseases are inflammatory; she will name the cytokines, and some drugs block a cytokine or its receptor | BRIEF | pp-1 | Framing sentence: inflammation, then the cytokines involved, then what the drug targets. Sets up every MOA part that follows | 35 |
| 3 | Learning objectives | T 30-31: 'make sure you're studying to those' | SKIP |  | Objectives slide; used for the coverage checklist (section 4), not spoken |  |
| 4 | Review of skin anatomy (section title) | T 31 | SKIP |  | Section title |  |
| 5 | Anatomy of the skin | T 31-59: three layers; keratinocytes start cuboidal in the stratum basale, rise, flatten, make keratin and lose the nucleus; flat stratum corneum keeps bacteria out and water in; in AD and psoriasis the cells do not lie flat | NARRATE | pp-1 | Chain: cuboidal cell in the basale, moves up, flattens, fills with keratin, loses its nucleus, becomes a corneocyte; overlapping flat cells are the barrier. Define epidermis, dermis, hypodermis, keratinocyte, corneocyte on first use. Why it matters: AD (gaps) and psoriasis (cells arrive too fast) are both failures of this journey | 110 |
| 6 | Skin structures: sebum | T 60-81: the same cuboidal keratinocytes line the hair follicle and sebaceous gland; sebum = glycerides, wax esters, cholesterol; slows water loss; most on face, scalp, back, neck; rises at puberty | NARRATE | pp-1 | Define sebaceous gland and sebum; sebum flows up the follicle onto the skin. Sets up acne: the follicle lining is the same cell type, and sebum rises with androgens at puberty | 90 |
| 7 | Atopic dermatitis (section title) | T 81-82 | SKIP |  | Section title |  |
| 8 | AD introduction | T 82-89: chronic, itchy, inflammatory; 'eczema' in her lectures means AD; the most common dermatitis | BRIEF | pp-2 | Definition only; say that eczema and atopic dermatitis name the same disease in her lectures | 35 |
| 9 | Types of dermatitis (DiPiro table) | T 98-100: 'I will not be testing you on these' | SKIP |  | Excluded by the professor |  |
| 10 | Epidemiology of AD | T 101-130: 15-30% of children, 2-10% of adults in developed countries; lower in rural areas (hygiene hypothesis); males = females; linked with asthma and rhinitis; risk 2-3 fold with one atopic parent, 3-5 fold with two | NARRATE | pp-2 | Hint item (epidemiology). Define 'atopic' and the hygiene hypothesis in one sentence each. Numbers in words. Contrast cue for later: AD is mostly a childhood disease, psoriasis peaks in adults, acne in adolescents | 110 |
| 11 | Signs and symptoms of AD | T 131-148: patches, itch worse at night, weeping vesicles that crust, thickened skin; adults hands and feet, children face and scalp; scratching opens skin so secondary bacterial infection is common | NARRATE | pp-2 | The reason chain: itch, scratching, broken barrier, bacterial infection. Location by age is a common question pair | 70 |
| 12 | Exacerbating factors of AD | T 149-162: allergens in soaps, detergents, fragrances; long hot baths; dry skin; stress; sweating; weather change, low humidity; wool and synthetic fabrics | BRIEF | pp-2 | State the pattern (things that dry or irritate an already leaky barrier) and three examples; do not read the whole list | 45 |
| 13 | Etiology and pathophysiology of AD | T 163-195: trigger unknown; keratinocytes release cytokines; gaps let allergens into the skin; allergens activate T cells, IgE-independent at first; TH2 outnumber TH1; later exposures become IgE-mediated; secondary infection | NARRATE | pp-3 | Key distinction a novice misses: first T-cell mediated and IgE-independent, IgE-mediated (allergic) only with later exposures. Define TH1/TH2 and IgE. Her spoken 'not T cell' slip is resolved to the slide (OPEN_QUESTIONS slips) | 120 |
| 14 | AD genetics: two gene groups | T 195-203: structural proteins of the epidermis; immune genes (not yet identified) | BRIEF | pp-3 | Folded into the opening of the slide 15 part | 25 (folded) |
| 15 | AD: FLG genetic variants | T 203-247: FLG gene, profilaggrin, filaggrins; filaggrins help cells flatten and form the barrier and give natural moisturizers; variants mean few filaggrins and a leaky barrier, more persistent disease; about 40% without functional FLG never get AD, so low penetrance | NARRATE | pp-3 | Chain: gene, precursor protein, cut into filaggrins, flat barrier. Define 'penetrance' in plain words; her room question (why AD without the variant) answered: other variants or other proteins | 120 |
| 16 | AD: immune system genetic variants | T 248-275: TH1 cytokines (interferon gamma, IL-12) suppress IgE; TH2 cytokines (IL-5, IL-13) raise it; more TH2 activity gives IL-3, 4, 5, 10, 13, eosinophils, IgE and mast cells; 'some of these are drug targets' | NARRATE | pp-3 | Why it matters: IL-4 and IL-13 return as the dupilumab target (PCol 64). Say interleukin names as 'I L thirteen'. State that the imbalance develops later, not at onset | 110 |
| 17 | Medications for treating AD | T 275-283: corticosteroids, calcineurin inhibitors, PDE-4 inhibitors, IL-4 receptor and IL-13 antagonists, JAK inhibitors | BRIEF | pp-3 | One sentence list; hint item 'drugs in each class' | 40 |
| 18 | Psoriasis (section title) | T 283 | SKIP |  | Section title |  |
| 19 | Psoriasis introduction | T 283-300: thick red scaly plaques; keratinocyte hyperproliferation and incomplete differentiation plus T-cell inflammation; 'that's kind of the big difference' from AD | NARRATE | pp-4 | The AD vs psoriasis distinction in one pair of sentences: AD is a structural barrier defect; psoriasis is cells dividing too fast and not maturing | 100 |
| 20 | Epidemiology of psoriasis | T 300-312: genetic basis plus a trigger; most common immune-mediated inflammatory disease; about 3% of the US; males = females; about 30% have a first-degree relative | NARRATE | pp-4 | Hint item (epidemiology). Leave out onset age: slide 'before 40' vs spoken 'about age 40' is held (OPEN_QUESTIONS 2) | 90 |
| 21 | Etiology and pathophysiology of psoriasis | T 312-336: trauma starts an abnormal immune response; APCs present to T cells; T cells, APCs and keratinocytes release TNF-alpha, interferon gamma, IL-23, IL-17; hyperproliferation; becomes systemic inflammation with comorbidities | NARRATE | pp-4 | Why it matters: each named cytokine is a later drug target (TNF-alpha, IL-17, IL-23). Define antigen-presenting cell. Systemic disease explains heart disease and arthritis links | 120 |
| 22 | Immunopathogenesis figure (Goodman and Gilman) | T 336-347: APC carries antigen to the lymph node, T cells expand, migrate back to skin, are reactivated and activate keratinocytes | NARRATE | pp-4 | Walk the loop in order with the slide shown; one idea: the T cells are trained in the lymph node and return to the skin | 80 |
| 23 | Cell cycle numbers | T 347-361: normal 13 days to divide, 26 to reach the surface; psoriatic 1.5 and 4 days; seven-fold | NARRATE | pp-4 | Numbers in words; link: cells that arrive in four days have not flattened, so they pile up as scale | 70 |
| 24 | Contributing factors | T 361-370: climate, stress, infection, trauma; Koebner response; lithium and beta blockers worsen psoriasis | NARRATE | pp-5 | Define the Koebner response; name the two drugs that worsen psoriasis (drug interactions objective) | 70 |
| 25 | Types of psoriasis (table) | T 371-376: 'I am not going to test you on this' | SKIP |  | Excluded by the professor |  |
| 26 | Nail psoriasis, psoriatic arthritis | T 376-385: pitting, ridging, discoloration, onycholysis; arthritis asymmetric, skin lesions usually first, no rheumatoid factor | BRIEF | pp-5 | The contrast with rheumatoid arthritis (asymmetric, no rheumatoid factor) is the one point worth saying | 50 |
| 27 | Psoriasis treatment rationale | T 385-397: reduce the immune response, reduce keratinocyte turnover, treat comorbidities, patient-specific therapy, quality of life and depression | BRIEF | pp-5 | Two aims (immune, turnover) map onto the drug classes; one sentence each | 50 |
| 28 | Medications for treating psoriasis | T 397-401: many immunomodulators; some normalize turnover like the nuclear receptor binders | BRIEF | pp-5 | Folded into the slide 27 part. Do not read the slide's 'IL-12 and IL-13 inhibitors' label (held, OPEN_QUESTIONS 3) | 30 (folded) |
| 29 | Acne (section title) | T 405-407 | SKIP |  | Section title |  |
| 30 | Acne vulgaris | T 407-411: disease of the pilosebaceous unit; face, upper back, chest | BRIEF | pp-6 | Define pilosebaceous unit (hair follicle plus sebaceous gland) | 30 |
| 31 | Epidemiology of acne | T 411-422: about 90% lifetime; highest in adolescents; starts with androgens at puberty; 12% of women and 3% of men aged 25 to 58; worse in boys at puberty, in women in adulthood | NARRATE | pp-6 | Hint item (epidemiology); numbers in words; the androgen link sets up the four factors | 90 |
| 32 | Etiology and pathophysiology: four factors | T 422-436: androgens drive more sebum, altered keratinization, P. acnes colonization, inflammation | NARRATE | pp-6 | Name the four factors. Say 'altered keratinization' (the cells fail to move up and shed); do not call it hyperproliferation (held, OPEN_QUESTIONS 1; her class statement T 573-577) | 100 |
| 33 | Lesion formation and P. acnes | T 436-452: cells stick in the follicle and plug it with sebum; P. acnes lipase splits glycerides into free fatty acids, which irritate the follicle wall | NARRATE | pp-6 | Chain: plug, trapped sebum, bacterial lipase, free fatty acids, inflammation. Her spoken 'glycerin' resolved to glycerides (slide) | 100 |
| 34 | Lesion cascade (DiPiro figure) | T 452-474: microcomedone, closed comedone, open comedone; or papule, pustule; or nodule or cyst | NARRATE | pp-6 | Walk the cascade with the drawn step-through 'acne-cascade' (step field), one step per sentence; define comedone literally (a plugged follicle) | 110 |
| 35 | Exacerbating factors of acne | T 474-496: humidity, occlusion, occupational oils, cosmetics, stress, hormones, drug-induced acne, genetics (both parents 81%), diet link unclear | BRIEF | pp-7 | State the categories and the 81% figure; the slide's drug list was not read aloud: name none | 50 |
| 36 | Acne pathogenesis and drug mechanisms | T 496-512: P. acnes: benzoyl peroxide, antibiotics, isotretinoin; inflammation: corticosteroids, antibiotics; keratinization: salicylic acid, benzoyl peroxide, retinoids; sebum: antiandrogens; estrogen not covered (T 535-536) | NARRATE | pp-7 | Hint item 'why this MOA helps': map each factor to the class that corrects it. She called it the slide 'to help orient you'. Omit estrogen (she excluded it) | 110 |
| 37 | Medications for treating acne | T 510-513: keratolytics, antibiotics, nuclear receptor binders, antiandrogen | BRIEF | pp-7 | One sentence; repeats slide 36's classes, so 20 words at most | 20 |
| 38 | PollEv x3 | T 513-579: sentinel pathologies AD barrier dysfunction, psoriasis hyperproliferation, acne excess sebum; hyperproliferation 'is not one of the components of acne' | NARRATE | pp-7 | Close the deck with the three-way distinction; this is her live poll (starred questions L1-060, L1-061) | 90 |

### 1.2 Skin-PCol-Students-2026.pdf (Dr. Smith; T = 10/29 line, T1030 L = 10/30 line, T1103 L = 11/03 line)

NARRATE 44, BRIEF 23, SKIP 13.

| Slide | Title | What the professor said (location) | Decision | Section | Insight a novice needs, or reason to skip | Words |
|---|---|---|---|---|---|---|
| 1 | Title | T 621-627 | SKIP |  | Title slide |  |
| 2 | Outline | T 627-637: plan for the day, taught by drug class | SKIP |  | Logistics and plan |  |
| 3 | Learning objectives | T 638: 'read through your objectives' | SKIP |  | Objectives; used for the coverage checklist |  |
| 4 | Nuclear receptor binders (section title) | T 638-639 | SKIP |  | Section title |  |
| 5 | Nuclear receptors: mechanism | T 639-649: all change transcription up or down; she skipped reading the bullets | BRIEF | pc-1 | One idea: these drugs act by changing which genes are read. Slide-only point: direct needs two drug-receptor complexes, indirect one | 40 |
| 6 | Direct and indirect action (GRE, TRE, NF-kB, AP-1) | T 650-747: direct: drug enters, binds the cytosolic receptor, moves to the nucleus, dimerizes, binds the GRE, raises anti-inflammatory and lowers inflammatory proteins; indirect: the complex binds NF-kB or AP-1 so they cannot drive inflammatory genes; onset in days, slower than a receptor blocker | NARRATE | pc-1 | Mechanism chain for both routes, paired with the drawn step-through 'nr-action'. Define response element and transcription factor. Why onset takes days: new proteins must be made | 130 |
| 7 | Nuclear receptor examples | T 748-767: glucocorticoid receptor to GRE; RAR and RXR to RARE; vitamin D receptor; transcription factors NF-kB, AP-1 | NARRATE | pc-1 | Pair each drug class with its receptor. Do not state where the vitamin D receptor binds (TRE vs VDRE held, OPEN_QUESTIONS 4) | 70 |
| 8 | Corticosteroids | T 768-778: adrenal cortex makes glucocorticoids and mineralocorticoids; dermatology uses glucocorticoids | BRIEF | pc-2 | Define both; one part with slide 9 | 35 |
| 9 | Corticosteroids: therapeutic uses | T 779-783: autoimmune disease, allergy, transplant rejection, cytokine storm in oncology | BRIEF | pc-2 | Folded into the slide 8 part | 20 (folded) |
| 10 | Corticosteroid mechanism (Katzung figure) | T 783-806: carried by corticosteroid-binding globulin; receptor held by Hsp90 until the steroid binds; complex dimerizes, enters the nucleus, binds the GRE | NARRATE | pc-2 | Why Hsp90 matters: it keeps the receptor from acting without its ligand. Expand CBG and Hsp90 on first use | 90 |
| 11 | Topical corticosteroids | T 807-834: used in psoriasis and AD because they suppress the immune system; potency classes; face low potency only; body medium; low potency for maintenance; occluded or broken skin raises systemic absorption | NARRATE | pc-2 | The rule and its reason: potency matched to site because thin facial skin absorbs more; goal is a local effect, so no occlusion or broken skin | 110 |
| 12 | Topical corticosteroid adverse effects | T 834-865: local striae, atrophy, perioral dermatitis, acne, rosacea, telangiectasia, purpura, hypertrichosis, contact dermatitis from the vehicle; systemic HPA suppression, infection, hyperglycemia, cataracts, glaucoma, growth retardation; even low potency with long use | NARRATE | pc-2 | Group local vs systemic; give the reason for infection (immunosuppression; her room question). Define HPA axis. Point: low potency is not exempt because it is used long term | 110 |
| 13 | Oral corticosteroids: adverse effects | T 865-869: 'I won't talk about these' | SKIP |  | Listed, not taught |  |
| 14 | Retinoids: mechanism of action | T 880-909: vitamin A-like; bind RAR and RXR, dimers bind the RARE; RAR effects (differentiation, proliferation) treat acne, psoriasis, photoaging; RXR effects (apoptosis) treat cancers such as Kaposi sarcoma; selectivity table not tested | NARRATE | pc-3 | The RAR vs RXR distinction is the testable split. Her 'RXR' at T 901-903 is a slip resolved to RAR (OPEN_QUESTIONS slips) | 110 |
| 15 | Retinoids in acne, psoriasis, wrinkles | T 911-928: acne: less cohesion, faster turnover, comedones open; psoriasis: anti-inflammatory and antiproliferative genes; aging: more dermal collagen, new vessels, thicker epidermis | NARRATE | pc-3 | Hint 'why this MOA helps' for each disease in one sentence each | 90 |
| 16 | Topical retinoids introduction | T1030 L17-55: acne looks worse first (uncovering comedones), best at 8-12 weeks; apply only enough for slight redness and peeling; dry skin only; avoid nose, eyes, mouth; irritation means too strong; sun protection (skin cancer risk in animals; photosensitivity) | NARRATE | pc-3 | Explain why acne looks worse first: faster turnover brings hidden comedones up. Counseling points with their reasons | 110 |
| 17 | Tretinoin | T1030 L56-68: all-trans retinoic acid; under 10% absorbed; Retin-A Micro microspheres for patients who find it irritating | BRIEF | pc-3 | Within-class difference: the microsphere form exists to reduce irritation | 40 |
| 18 | Adapalene and tazarotene | T1030 L68-81: adapalene naphthoic acid derivative, photostable, can be combined with benzoyl peroxide, less irritating; tazarotene acetylenic, psoriasis, acne and wrinkles, photosensitizing, contraception counseling | NARRATE | pc-3 | Within-class distinctions (hint): which is light-stable, which may be combined with benzoyl peroxide, which needs pregnancy counseling. Structures: she said she will not test them | 90 |
| 19 | Isotretinoin | T1030 L81-101, L130-132: severe cystic acne; may shrink sebaceous glands and sebum; dryness, lipid changes; serious rarer effects; not in children (skeletal); teratogenic; iPLEDGE for women and men | NARRATE | pc-4 | Why it is reserved for severe cystic acne; teratogenicity and iPLEDGE. Men enrol because it affects sperm (spoken only, slide silent: attribute to her) | 100 |
| 20 | Acitretin | T1030 L101-117: metabolite of etretinate; pustular psoriasis; liver toxicity; very long half-life; no pregnancy for at least 3 years (slide); no alcohol during and 2 months after; no blood donation for 3 years | NARRATE | pc-4 | Chain: long half-life, so pregnancy and blood-donation limits last years. Use the slide's 3 years (spoken 'months' resolved to slide) | 100 |
| 21 | Calcipotriene: mechanism | T1030 L132-153: resembles vitamin D, binds the vitamin D receptor, pairs with RXR-alpha, changes genes for keratinocyte differentiation and immune activity | NARRATE | pc-4 | Mechanism chain; do not name the binding element (held) | 90 |
| 22 | Calcipotriene: side effects | T1030 L153-207: burning and itching at the site; a topical steroid with it reduces irritation; hypercalcemia and hypercalciuria above 100 g a week, resolving on stopping; recap of the three nuclear receptor classes | NARRATE | pc-4 | Her reasoning chain for hypercalcemia (acts like vitamin D on calcium-handling genes; she called it theorizing). Leave out the family story | 100 |
| 23 | Calcineurin inhibitors (title) | T1030 L207-210 | SKIP |  | Section title |  |
| 24 | Calcineurin inhibitors introduction | T1030 L210-216: AD and psoriasis; reduce extent, do not cure; inhibit T cells and mast cells | BRIEF | pc-5 | One sentence of purpose before the figure | 35 |
| 25 | Talking to the CD4 T cell (signals 1, 2, 3) | T1030 L216-304: signal 1 MHC II with antigen to the T-cell receptor; signal 2 CD80/86 to CD28; cascade makes IL-2; signal 3 IL-2 on CD25 drives proliferation; calcineurin inhibitors act after signals 1 and 2 | NARRATE | pc-5 | The three-signal model a novice needs for calcineurin inhibitors and abatacept. MHC II per slide (spoken 'MHC1' on 11/03 resolved) | 130 |
| 26 | Calcineurin inhibitor mechanism (Golan figure) | T1030 L304-357: calcium and calmodulin activate calcineurin, which removes a phosphate from NFAT; NFAT enters the nucleus and switches on IL-2; cyclosporine binds cyclophilin, tacrolimus binds FKBP, each complex blocks calcineurin; not given together | NARRATE | pc-5 | Within-class difference: different binding proteins, same block. 'Phosphorylates' slip resolved to dephosphorylates | 110 |
| 27 | Topical calcineurin inhibitors | T1030 L357-378: AD; itch relief in days; pimecrolimus stays in the skin better than tacrolimus; not approved under age 2 | NARRATE | pc-6 | Within-class difference (skin retention) and the age limit she stressed. Leave out psoriasis label status (held) | 80 |
| 28 | Topical calcineurin inhibitors: adverse effects | T1030 L378-384: burning most common; possible skin cancer through immune suppression, so sun protection; infection with systemic absorption | BRIEF | pc-6 | Reason for sun protection in one clause | 45 |
| 29 | Oral calcineurin inhibitors | T1030 L385-396: oral cyclosporine for severe psoriasis; Neoral and Sandimmune are not equivalent | BRIEF | pc-6 | The non-equivalence warning | 45 |
| 30 | Oral calcineurin inhibitors: adverse effects | T1030 L396-421: boxed warning for lymphoma, other cancers, infection (immune surveillance); nephrotoxicity, hypertension, respiratory infection for both; gingival hyperplasia (cyclosporine); neuropathy (tacrolimus); CYP3A4 interactions | NARRATE | pc-6 | Hint item: boxed warning with its reason. Do not say which effect is most common (held). Leave out the patient story | 110 |
| 31 | PDE-4 inhibitors (title) | T1030 L425-426 | SKIP |  | Section title |  |
| 32 | PDE-4 mechanism (cAMP figure) | T1030 L430-448: PDE breaks cAMP; inhibition raises cAMP and quiets inflammatory cells; PDE4 is the form in mast cells, eosinophils, neutrophils, T cells, macrophages | NARRATE | pc-7 | She said the figure detail is not the point: say only cAMP up, inflammation down, and why PDE4 targets inflammatory cells | 80 |
| 33 | Crisaborole | T1030 L448-464: 2% ointment, mild to moderate AD from age 2; site pain; hypersensitivity, stop at once | NARRATE | pc-7 | The adverse effect she called more significant, and why stopping matters | 70 |
| 34 | Apremilast | T1030 L464-478: oral, psoriasis; GI upset, headache, depression, weight loss; CYP3A4 inducers lower its effect | NARRATE | pc-7 | Within-class difference: topical AD drug vs oral psoriasis drug; the interaction with its direction | 70 |
| 35 | Keratolytics (title) | T1030 L478-485: break apart the outer keratin layer; old products, mechanisms often unknown | BRIEF | pc-8 | Define keratolytic | 30 |
| 36 | Benzoyl peroxide: mechanism | T1030 L485-500: antimicrobial against P. acnes and comedolytic; loosens keratinocytes, speeds turnover; converted to benzoic acid, probably the active form | NARRATE | pc-8 | Two actions in one drug, tied to two of the four acne factors | 80 |
| 37 | Benzoyl peroxide: cautions | T1030 L500-515: irritation; potent contact sensitizer; avoid eyes and mucous membranes; bleaches hair and fabric | BRIEF | pc-8 | Facts only; leave out both stories | 40 |
| 38 | Sulfur | T1030 L515-534: mild keratolytic, bacteriostatic; reduced to hydrogen sulfide, inflammation promotes peeling; irritation, can bring up comedones, odor | NARRATE | pc-8 | Define bacteriostatic vs bactericidal (used again for antibiotics) | 70 |
| 39 | Salicylic acid: mechanism | T1030 L534-545: may dissolve the proteins that hold the stratum corneum together; mild peeling wanted, not desquamation | BRIEF | pc-8 | Define desquamation | 40 |
| 40 | Salicylic acid: concentrations and cautions | T1030 L545-570: 3-6% for acne, dandruff, psoriasis; above 6% can damage skin; up to 40% only for warts and corns; salicylism, added to by other topical salicylates; caution in peripheral vascular disease and diabetes | NARRATE | pc-8 | Reasons: salicylism defined; poor healing in the feet explains the diabetes caution | 90 |
| 41 | Antibiotics/antimicrobials (title) | T1030 L574-577; T1103 L19-20 | SKIP |  | Section title |  |
| 42 | Acne antibiotic mechanisms (ribosome figure) | T1030 L577-609, T1103 L20-26: 50S and 30S subunits; macrolides and chloramphenicol bind 50S; tetracyclines bind 30S and block the tRNA at the acceptor site | NARRATE | pc-9 | Explain the ribosome from zero (two subunits, tRNA brings amino acids). Macrolides: say 50S only, not the step (held) | 100 |
| 43 | Tetracyclines | T1103 L26-36: bind 30S, block tRNA; enter by diffusion or transport; broad-spectrum, bacteriostatic | NARRATE | pc-9 | Mechanism in one chain; bacteriostatic defined at slide 38 | 70 |
| 44 | Tetracyclines: adverse effects | T1103 L36-46: GI upset can be severe; pseudomembranous colitis, stop if blood in stool; not in young children (bone, teeth); photosensitivity; resistance and superinfection | NARRATE | pc-9 | Reasons with each effect; photosensitivity links to the sun lecture | 80 |
| 45 | Tetracyclines continued | T1103 L46-52: read on your own; analogs have better GI absorption; minocycline ototoxicity | BRIEF | pc-9 | Her two spoken points. Slide-only facts (sarecycline narrower spectrum; minocycline and sarecycline less photosensitizing) said once as slide facts | 50 |
| 46 | Clindamycin | T1103 L53-65: binds 50S, prevents translocation; bacteriostatic; oral colitis and liver; topical about 10% absorbed, so rare colitis; water-based vehicles better tolerated; resistance | NARRATE | pc-9 | Why a topical drug can still cause colitis: ten percent is absorbed | 80 |
| 47 | Macrolides | T1103 L65-73: erythromycin, azithromycin attach to 50S; bacteriostatic; GI effects, drug interactions; topical burning; resistance | BRIEF | pc-9 | Within-class contrast with clindamycin (same subunit) | 50 |
| 48 | Trimethoprim/sulfamethoxazole | T1103 L73-79: two drugs, two mechanisms | BRIEF | pc-10 | One sentence lead-in | 25 |
| 49 | TMP/SMX mechanism (folate figure) | T1103 L79-89: sulfamethoxazole competes with PABA at the first step; trimethoprim inhibits dihydrofolate reductase; no folate, no purines, no division | NARRATE | pc-10 | Two blocks in one pathway; define PABA and folate. Name the human-enzyme contrast with methotrexate only when pc-12 is reached | 90 |
| 50 | Dapsone | T1103 L89-102: topical gel for acne, oral for leprosy; leprosy mechanism like sulfonamides (PABA); acne mechanism unclear, anti-inflammatory on neutrophils | BRIEF | pc-10 | Leave out the antibacterial-in-acne statement (held) and the armadillo remark | 50 |
| 51 | Metronidazole | T1103 L102-118: rosacea; may act on the Demodex mite or on neutrophils; all forms irritate; creams and lotions better tolerated | BRIEF | pc-10 | Indication and mechanism only; vehicle base held | 45 |
| 52 | Antipsoriatic cytotoxic agents (title) | T1103 L118-127: old products, mechanisms unclear | BRIEF | pc-11 | One sentence | 25 |
| 53 | Coal tar | T1103 L127-145: lowers cell turnover, anti-inflammatory, crosslinks DNA; phenols relieve itch | NARRATE | pc-11 | Antiproliferative chain | 70 |
| 54 | Coal tar continued | T1103 L145-155: photosensitizing and carcinogenic; caution in pregnancy, breastfeeding, children; avoid on oozing skin (absorption) | NARRATE | pc-11 | The two effects she flagged, with reasons; child wording held, use slide | 60 |
| 55 | Anthralin | T1103 L155-166: synthetic chrysarobin; mechanism unknown; antiproliferative, prevents T-cell activation | BRIEF | pc-11 |  | 40 |
| 56 | Anthralin continued: SCAT | T1103 L166-183: irritation, severe conjunctivitis, staining; short-contact therapy: thick plaques only, 2 hours or less, wipe off, protect healthy skin with zinc oxide; avoid face and skin folds | NARRATE | pc-11 | She called SCAT 'really important': each step with its reason | 90 |
| 57 | Shale tar, selenium sulfide, zinc pyrithione | T1103 L183-212: shale tar not photosensitizing, relieves itch; selenium sulfide and zinc pyrithione cytostatic and antifungal (dandruff) | NARRATE | pc-11 | Within-class contrast: coal tar vs shale tar on photosensitivity | 70 |
| 58 | DHFR inhibitor (title) | T1103 L212-215 | SKIP |  | Section title |  |
| 59 | Methotrexate | T1103 L215-228: folic acid analog inhibits dihydrofolate reductase in the body; less tetrahydrofolate, fewer purines, keratinocytes cannot divide; may also reduce T cells | NARRATE | pc-12 | Contrast: trimethoprim blocks the bacterial enzyme, methotrexate the human one (her 'in the body, not a microbe') | 90 |
| 60 | Methotrexate: folate cycle (Katzung figure) | T1103 L228-237 | BRIEF | pc-12 | Point to where the block sits on the figure | 40 |
| 61 | Methotrexate: adverse effects | T1103 L237-260: cumulative liver toxicity, the most significant; rare blood disorders, so blood counts; abortifacient and teratogenic; counted on a separate tray, gloves | NARRATE | pc-12 | 'Cumulative' explained: the total dose over time matters | 90 |
| 62 | Fusion proteins, monoclonals, small molecules (title) | T1103 L260-269: all aim at immunosuppression | BRIEF | pc-13 | Lead-in sentence; define fusion protein and monoclonal antibody | 40 |
| 63 | Abatacept (Katzung figure) | T1103 L269-357: CTLA-4 fused to IgG; positive signal 2 CD80/86 with CD28, negative signal 2 CD80/86 with CTLA-4; abatacept binds CD80/86 more tightly than CD28, so no positive signal 2, no IL-2; 'inhibitor of co-stimulation' | NARRATE | pc-13 | Two parts: (a) normal positive and negative signal 2; (b) the drug, why it copies CTLA-4, why it is called an inhibitor of co-stimulation (her room question) | 200 (2 parts) |
| 64 | Dupilumab | T1103 L357-398: monoclonal against IL-4 receptor alpha, shared by IL-4 and IL-13; less IgE and inflammatory signaling; moderate to severe AD after topicals; SubQ; nasopharyngitis, headache, eye effects | NARRATE | pc-14 | Why one antibody blocks two cytokines (shared receptor subunit); link to TH2 slide. Leave out psoriasis (held) | 100 |
| 65 | IL-17 inhibitors | T1103 L398-406: IL-17 drives keratinocyte cytokines and hyperproliferation; among the most effective psoriasis drugs | BRIEF | pc-14 | Why the target matters | 45 |
| 66 | IL-17 inhibitors continued | T1103 L406-443: secukinumab human, binds IL-17A; ixekizumab humanized, binds IL-17A; brodalumab human, binds the receptor; TB check; can worsen Crohn's; chimeric more allergic | NARRATE | pc-14 | Her two distinctions: cytokine or receptor; human, humanized or chimeric (define each) | 110 |
| 67 | Ustekinumab | T1103 L443-469: binds p40 shared by IL-12 and IL-23; fewer TH1 and TH17 cells; respiratory infection, serious allergy, infection; stop 15 weeks before a live vaccine, restart 2 weeks after; leukoencephalopathy reported | NARRATE | pc-14 | p40 explained; vaccine timing with reason (vaccine would not work). Count of leukoencephalopathy cases held: say 'reported' | 100 |
| 68 | IL-23 inhibitors | T1103 L469-480: guselkumab human, tildrakizumab humanized, both bind p19 of IL-23 | NARRATE | pc-14 | The p40 vs p19 distinction; her 'that's all you need to know' | 60 |
| 69 | Risankizumab | T1103 L480-486: humanized, p19, SubQ or IV, more severe disease; severe infection, TB, skin cancer | BRIEF | pc-14 |  | 40 |
| 70 | TNF-alpha inhibitors | T1103 L486-500: TNF-alpha from macrophages in acute inflammation, needed against infection and cancer; drugs bind TNF-alpha; class boxed warning: serious infection and cancer | NARRATE | pc-15 | Hint item: boxed warning with its reason (TNF-alpha normally defends against infection and cancer) | 90 |
| 71 | Etanercept | T1103 L501-511: fusion of two p75 TNF receptors with human IgG1 Fc; SubQ | BRIEF | pc-15 | Structure distinction: a receptor fusion protein, not an antibody | 45 |
| 72 | Infliximab | T1103 L511-542: chimeric; IV; anti-drug antibodies cut efficacy; infusion reactions, premedicate; lupus-like autoantibodies | NARRATE | pc-15 | Why chimeric matters (mouse parts provoke antibodies). Use 'up to forty percent' only as slide range fourteen to forty (held) | 90 |
| 73 | Adalimumab | T1103 L542-545: human, SubQ | BRIEF | pc-15 | Contrast with infliximab | 30 |
| 74 | Golimumab, certolizumab pegol | T1103 L545-556: golimumab human; certolizumab Fab linked to PEG, much longer half-life | NARRATE | pc-15 | Why PEG lengthens half-life | 70 |
| 75 | JAK inhibitors (figure) | T1103 L556-569: JAK kinases sit on cytokine receptors; blocking them stops the signal for inflammatory genes | NARRATE | pc-16 | Define kinase; small molecules act inside the cell, antibodies cannot | 80 |
| 76 | Tofacitinib, ruxolitinib, upadacitinib | T1103 L569-581: small molecules; ruxolitinib JAK1 and 2, upadacitinib more JAKs, benefit unproven; tofacitinib boxed warning like TNF inhibitors | NARRATE | pc-16 | Within-class difference and boxed warning. Do not say all are oral (held: ruxolitinib route) | 90 |
| 77 | Psoralen chromophores (title) | Not taught 11/03 (T1103 L557-561); covered in her recording on the Sun deck | SKIP |  | Duplicate of Sun slide 2 |  |
| 78 | Psoralens: methoxsalen | Same text as Sun slide 3 | SKIP |  | Duplicate of Sun slide 3 (narrated there) |  |
| 79 | Psoralens continued | Same text as Sun slide 4 | SKIP |  | Duplicate of Sun slide 4 (narrated there) |  |
| 80 | Questions | Not shown | SKIP |  | Closing slide |  |

### 1.3 DEENT_Sun_Exposure_2026.pdf (Dr. Smith's recording; times are the Descript transcript's timecodes)

NARRATE 14, BRIEF 6, SKIP 6.

| Slide | Title | What the professor said (location) | Decision | Section | Insight a novice needs, or reason to skip | Words |
|---|---|---|---|---|---|---|
| 1 | Title | Recording 00:00:00 | SKIP |  | Title slide |  |
| 2 | Psoralen chromophores (title) | 00:00:00-00:00:29 | SKIP |  | Section title |  |
| 3 | Psoralens: methoxsalen | 00:00:29-00:02:02: UVA changes the drug's structure; it intercalates between DNA base pairs; cells cannot divide (antiproliferative); normalizes keratinocytes, blood vessels, stops T cells, raises melanin | NARRATE | sun-1 | Define PUVA, photosensitizer, intercalation literally (the drug slots between base pairs). Slide gives 320 to 340 nm; Dr. Sikazwe gives UVA 315 or 320 to 400 (DPAW 18): attribute each. Her 'melatonin' is a slip for melanin (slide) | 110 |
| 4 | Psoralens continued: side effects | 00:02:02-00:02:25: skin irritation, aging, skin cancer; cataracts (not skin) | BRIEF | sun-1 | The one non-skin effect (cataracts) is the distinguishing point | 45 |
| 5 | Sun protection (title) | 00:02:25-00:02:53 | SKIP |  | Section title |  |
| 6 | Objectives | 00:02:53: 'here are the objectives' | SKIP |  | Objectives; coverage checklist |  |
| 7 | Risk factors for sun damage | 00:02:53-00:04:13: UV index and what raises it; melanin; SPF too low; cumulative exposure; one severe sunburn doubles lifetime skin cancer risk | NARRATE | sun-2 | Define UV index; the sunburn-before-18 fact (slide) with her spoken 'doubles' | 80 |
| 8 | Types of ultraviolet light: UVB vs UVA | 00:04:13-00:06:19: UVB 290-320 nm, 90% filtered by ozone, not through glass, sunburn, vitamin D, main skin cancer concern, peak 10 am-4 pm; UVA 320-400, not filtered, through glass, deeper, most drug phototoxic reactions, photoaging, less energetic so little sunburn | NARRATE | sun-2 | Hint item 'damage UVA and UVB cause': a side-by-side contrast with reasons (energy explains sunburn; depth explains aging). Note that Dr. Sikazwe's band limits differ (280-315 or 320; 315 or 320-400) and both may be asked: state hers here, his in mc-2 | 130 |
| 9 | Factors that affect tanning | 00:06:19-00:07:30: time, clouds, reflection, location, clothing, stratum corneum thickness, pigmentation; people who tan deeply are not protected | BRIEF | sun-2 | The point she repeated: a deep tan is not protection | 40 |
| 10 | Tanning mechanism: UVA | 00:07:30-00:07:55: immediate and delayed pigmentation; neither is good for skin | BRIEF | sun-2 | Slide timings (5-10 min, lasts 24-48 h; delayed 48-72 h, peaks 7-10 days) as slide facts | 45 |
| 11 | Sunburn | 00:07:55-00:09:35: acute inflammatory reaction; capillary leakage, redness peaks 12-24 h; tan follows in 2-3 days; histamine, cytokines, prostaglandins; blistering is a second-degree burn with fever, chills, shock | NARRATE | sun-2 | Inflammation chain; when a sunburn becomes dangerous | 90 |
| 12 | Minimal erythemal dose (MED) | 00:09:35-00:10:28: the smallest UV dose that gives clearly marked redness; used to measure protection | BRIEF | sun-3 | Definition (objective 4); literal, then used in the next part | 45 |
| 13 | Sun protection factor (SPF) | 00:10:28-00:12:10: ratio of the MED with sunscreen to the MED without; a measure of UVB protection; says nothing about UVA | NARRATE | sun-3 | Hint item 'explain SPF': the ratio said in words, using her own description of the two test exposures; no invented numeric example (no source gives one). Why SPF is UVB-only: it measures burning, and UVB burns | 100 |
| 14 | Broad spectrum determination | 00:12:10-00:14:00: critical wavelength method: the wavelength below which 90% of the product's absorption happens; 370 nm or more may be labelled broad spectrum; broad spectrum with SPF 15 or more may claim lower skin cancer and aging risk | NARRATE | sun-3 | Hint item 'wide spectrum': critical wavelength explained step by step with her 380 nm example | 100 |
| 15 | SPF percentages | 00:14:25-00:15:43: SPF 15 blocks about 93% of UVB, 30 about 97%, 50 about 98%; little gain above 30 | NARRATE | sun-3 | Diminishing returns stated literally; leave out the budget aside | 60 |
| 16 | Skin types | 00:15:43-00:16:32: types I to VI; burning risk falls as the number rises; counsel every type | BRIEF | sun-3 | Pattern only, not the six rows | 40 |
| 17 | SPF selection | 00:16:32-00:17:27: start high; extra SPF after a burn does not help; apply the right amount at the right time; reapply every 90-120 minutes; slide: types I-II SPF over 30, lupus over 40, photosensitizing drugs over 45, types III-V 15-24 | NARRATE | sun-3 | Slide thresholds said once. Leave out the turkey line (figurative) | 80 |
| 18 | Drugs that cause photosensitivity | 00:17:27-00:17:48: link to the APhA table; counsel sun protection for patients on these drugs | NARRATE | sun-5 | Hint item 'know some drugs that cause photosensitivity'. The slide is a link; the APhA table is not in the sources. Name only drugs her own slides call photosensitizing: tetracyclines (PCol 44), coal tar (PCol 54; shale tar is not, PCol 57), topical retinoids (PCol 16), tazarotene (PCol 18; adapalene is light-stable), calcipotriene mild (PCol 22), psoralens (Sun 3). Phototoxic drug reactions are mostly UVA (Sun 8) | 100 |
| 19 | Substantivity | 00:17:48-00:18:55: how well a product stays on through water and sweat; oils best but unpleasant, alcohols worst; creams better than alcohol; polyacrylamide good | NARRATE | sun-5 | Definition (objective 4) and the ranking with its reason | 70 |
| 20 | Sunblocks (physical sunscreens) | 00:18:55-00:20:30: inorganic particles scatter or reflect visible, UV and infrared light; zinc oxide, titanium dioxide; UVA and UVB; nose and ears; micro and nano forms less opaque | NARRATE | sun-4 | Hint item 'sunscreens vs sunblocks by ingredients': reflect vs absorb, named ingredients. Dr. Sikazwe adds that larger particles reflect better (DPAW 61): say both, attributed | 90 |
| 21 | Sunblocks: side effects and facts | 00:20:30-00:21:10: may block pores, stain clothing; not removed by water but melt in heat; protection drops after 2 hours of direct sun | BRIEF | sun-4 |  | 45 |
| 22 | Organic sunscreens | 00:21:10-00:22:09: organic compounds absorb UVA, UVB or both and turn it into heat; many products combine them | NARRATE | sun-4 | The absorb-and-convert-to-heat mechanism (objective 3) set against the sunblock's reflection | 70 |
| 23 | Examples of organic sunscreens (APhA table link) | 00:21:40-00:22:09: link to the table; 'note whether they are protective against UVA, UVB, or both' | SKIP |  | The slide is a link to a table not in the sources. Which ingredient covers which band is narrated from Dr. Sikazwe's pages 62-66 (mc-9) |  |
| 24 | Sunscreen fun facts | 00:22:09-00:22:51: benzophenones poor substantivity and sensitizing; anthranilates only in combinations; dibenzoylmethanes lose activity after 15 minutes; aminobenzoates best UVB absorbers, stain; cinnamates depend on the vehicle; salicylates wash off | NARRATE | sun-4 | She asked students to remember these; one clause per family | 100 |
| 25 | Safety | 00:22:51-00:24:36: irritant, allergic, phototoxic, photoallergic reactions; refer for rash, vesicles, hives, exaggerated sunburn; physical blockers irritate less; PABA, avobenzone, oxybenzone highest risk; systemic levels above 0.5 ng/mL found, meaning unknown | NARRATE | sun-5 | Referral rule; which ingredients carry most risk; the systemic absorption finding stated as unknown in meaning | 90 |
| 26 | Questions | 00:24:36: close | SKIP |  | Closing slide |  |

### 1.4 f26-DEENT-DPAW-mc.pdf (Dr. Sikazwe; slide = PDF page, printed slide number in brackets; T03 L = 11/03 line, T04 @ = 11/04 byte offset)

NARRATE 32, BRIEF 8, SKIP 31 (of which 29 not on the assigned pages).

| Slide | Title | What the professor said (location) | Decision | Section | Insight a novice needs, or reason to skip | Words |
|---|---|---|---|---|---|---|
| 1 | [sl.1] Title: Dermatitis, Psoriasis, Acne, Wrinkle | T03 L588-597 | SKIP |  | Not on Exam 1 assigned pages: skip |  |
| 2 | [sl.2] Readings; skin functions | T03 L598-613 | SKIP |  | Not on Exam 1 assigned pages: skip (the vitamin D3 reading is used in the p.27 part) |  |
| 3 | [sl.3] Objectives (PPCP) | T03 L613-632 | SKIP |  | Not on Exam 1 assigned pages: skip; objectives used for the coverage checklist |  |
| 4 | [sl.4] Dermatitis: versions of eczema | T03 L632-647 | SKIP |  | Not on Exam 1 assigned pages: skip |  |
| 5 | [sl.5] Eczema risk factors | T03 L655-656: 'Is this going to be an exam? No' | SKIP |  | Not on Exam 1 assigned pages: skip; also excluded by him |  |
| 6 | [sl.6] Eczema pharmacotherapy-1 (list) | T03 L658-664 | SKIP |  | Not on Exam 1 assigned pages: skip |  |
| 7 | [sl.7] Crisaborole | T03 L664-729, L787-801: soft drug (predictable metabolism); benzoxaborole (boron); log P 3, stays in the skin; half-life 12 h; in skin, non-enzymatic hydrolytic deboronation, then 2 enzymes (alcohol and aldehyde dehydrogenase) to the acid, then phase 2; boron binds magnesium and zinc in the PDE4 active site; he will not ask the MOA | NARRATE | mc-1 | Two parts: (a) soft vs hard drug, the metabolic sequence and why it limits systemic exposure; (b) the chemical basis: boron coordinating the two metal ions. Define log P, half-life, phase 2 on first use. 'Not 3, not 4, ... 2 enzymes' is the cue | 180 (2 parts) |
| 8 | [sl.8] Ruxolitinib and upadacitinib | T03 L729-758: different chemical classes (names not required); log P about 2, formulated to stay in the skin; half-lives 3 h vs 8-16 h; both mainly CYP3A4, so watch inhibitors and inducers; ruxolitinib has active hydroxylated metabolites, upadacitinib none | NARRATE | mc-1 | His own four-point summary (T03 L755-757): local, different half-lives, both 3A4, one has active metabolites. Say CYP3A4 as 'C Y P three A four' | 110 |
| 9 | [sl.9] Polleve-1: crisaborole metabolic scheme | T03 L758-778: step 1 deboronation, step 2 to the carboxylic acid, step 3 sulfation (sulfotransferases), step 4 glucuronidation (UGT); his answer: steps 3 and 4 | BRIEF | mc-1 | Read the scheme step by step as S3-021 explains it (the '3,4' arrow combines steps 3 and 4); the transcript's 'UGT and 3F4' is read as steps 3 and 4, not CYP3A4 | 60 |
| 10 | [sl.10] Study aid: eczema | T03 L778-781 | SKIP |  | Not on Exam 1 assigned pages: skip |  |
| 11 | [sl.11] Psoriasis (title image) | T03 L802-807 | SKIP |  | Not on Exam 1 assigned pages: skip |  |
| 12 | [sl.12] Terminology: UVR, ozone, PUVA, antimetabolite | T03 L807-840: UVA 315 or 320 to 400 nm; UVB 280 to 315 or 320; UVC 100 to 280; ozone blocks UVC and about 90% of UVB; UVA penetrates deepest; PUVA is UVA only; antimetabolite = substrate mimic that blocks cell metabolism (methotrexate) | NARRATE | mc-2 | 'Know those limits': his ranges, and that Dr. Smith's slide uses 290-320 for UVB and 320-400 for UVA. Leave out the visible range (held). Define antimetabolite literally | 120 |
| 13 | [sl.13] Psoriasis-1: components and goals | T03 L840-850 | SKIP |  | Not on Exam 1 assigned pages: skip |  |
| 14 | [sl.14] Psoriasis pharmacotherapy list | T03 L850-862 | SKIP |  | Not on Exam 1 assigned pages: skip |  |
| 15 | [sl.15] Emollients | T03 L862-890: fill gaps between scales, soften, prevent water loss; palliative; petrolatum hydrocarbons over 25 carbons, linear; lanolin (sheep wool grease, odor); silicones hypoallergenic and non-comedogenic; dimethicone linear, cyclomethicone cyclic | NARRATE | mc-2 | Define palliative and non-comedogenic; the linear vs cyclic silicone distinction | 100 |
| 16 | [sl.16] Tars | T03 L890-918: mechanism unknown, may be antiproliferative; coal tar (phenols, polycyclic aromatic hydrocarbons, heterocycles) used with UVB, photosensitizing; shale tar (ichthammol) and wood tars not photosensitizing | NARRATE | mc-2 | The photosensitizing split agrees with Dr. Smith (PCol 54, 57): say so once | 80 |
| 17 | [sl.17] Anthralin (dithranol) | T03 L918-953: hydroxyanthrone; Lassar's paste; newer particle formulations; lipophilic, do not over-apply (goes systemic); spontaneous autoxidation to anthranyl radical and superoxide, which disrupt keratinocyte mitochondria; polymers (anthralin brown, then black) are the stain, not the treatment | NARRATE | mc-2 | Chain from autoxidation to the effect; separate the therapeutic radicals from the staining polymers | 110 |
| 18 | [sl.18] Psoralens (8-MOP) | T03 L954-977: furanocoumarin; with UVA (PUVA); partially inhibits CYP3A4 ('take home'); UVA activates its double bonds to bind DNA pyrimidines, inserts and crosslinks, so less DNA synthesis; 'the only molecule' with this basis | NARRATE | mc-2 | CBDA contrast with anthralin (no autoxidation here) and the CYP3A4 interaction | 100 |
| 19 | [sl.19] Polleve-2: autoxidation true or false | T03 L977-980: false; only anthralin autoxidizes | BRIEF | mc-2 | One sentence that closes the anthralin vs psoralen contrast (S3-067) | 35 |
| 20 | [sl.20] Glucocorticoids: structure, stereochemistry, SAR | T03 L984-1075, L1092-1130: four fused rings A to D (three six-membered, one five-membered); hashed bond = alpha face (away), wedge = beta face (toward); SAR: C1-C2 double bond, 6-alpha halogen, 9-alpha halogen, 11-beta hydroxyl raise anti-inflammatory activity | NARRATE | mc-3 | Two parts: (a) skeleton and alpha/beta faces, literally; (b) the four SAR features he limited to. This is a slide where the image carries the meaning: the part must say which ring and face, since a listener cannot see a wedge | 180 (2 parts) |
| 21 | [sl.21] Remember steroid carbon numbering | T03 L1003-1017, L1075-1092: carbons 1-10 around rings A and B, 11-17 across C and D, 18 and 19 the two methyls, 20 and 21 on the side chain | NARRATE | mc-3 | Literal description of the path; his labels for it are figurative and are left out. Leave out the chlorine exercise (C15 vs C16 held) | 90 |
| 22 | [sl.21, printed twice] Remember steroid carbon numbering (duplicate) | Same slide | SKIP |  | Repeated slide |  |
| 23 | [sl.22] Glucocorticoid CBDA: hydrogen bonds in the receptor | T03 L1131-1139: six hydrogen bonds; all are hydrogen bonds | BRIEF | mc-3 | The count and that there are no other bond types | 35 |
| 24 | [sl.23] Hydrocortisone and derivatives | T03 L1139-1154 | SKIP |  | Not on Exam 1 assigned pages: skip (printed 23 is not on his list) |  |
| 25 | [sl.24] Potency rankings | T03 L1154-1179: potency depends on structure, vehicle (propylene glycol raises penetration) and concentration; examples from super-potent clobetasol to low hydrocortisone; higher potency needs fewer applications; structural change, not metabolism, turns hydrocortisone into clobetasol | NARRATE | mc-3 | The three determinants. Do not state 'smaller percentage means more potent' as a rule (held, conflict 5) | 100 |
| 26 | [sl.25] Hydrocortisone ADME, 11-beta-HSD | T03 L1179-1196; T04 @722-985: log P 1.5, under 15% through skin vs high oral; short half-life due to metabolism, long action due to protein binding; 11-beta-HSD converts hydrocortisone and cortisone back and forth; the 11 is carbon 11 | NARRATE | mc-3 | Why half-life and duration differ (metabolism vs protein binding). Say what the slide arrow shows; leave out which enzyme type is one-way (held, conflict 3) | 110 |
| 27 | [sl.26] Vitamin D analogs; vitamin D3 take-home | T04 @985-4425: antiproliferative, hence psoriasis; hypercalcemia limits use; calcitriol and calcipotriene are secosteroids, both raise gut calcium absorption; take-home question: reactions, organs, enzymes from 7-dehydrocholesterol to calcitriol | NARRATE | mc-4 | Two parts: (a) why the analogs are limited by hypercalcemia; (b) the pathway from the assigned reading he made testable: UVB in skin opens the B ring (pre-D3, then D3), liver 25-hydroxylation (CYP2R1), kidney 1-alpha-hydroxylation (CYP27B1). Attribute the band and enzymes to the reading (S4-014 note) | 210 (2 parts) |
| 28 | [sl.27] Pimecrolimus and tacrolimus | T04 @4425-6344: macrolide or lactone immunosuppressants; differ by chlorine vs hydroxyl and ethyl vs allyl; both very lipophilic; pimecrolimus binds skin proteins and stays in the skin, tacrolimus can reach the blood; 'they differ in ... absorption through the skin' | NARRATE | mc-4 | His take-away sentence; agrees with Dr. Smith (PCol 27): say so once | 100 |
| 29 | [sl.28] Retinoids for psoriasis | T04 @6344-7946: bind RAR and RXR, normalize keratinization; tazarotene is an alkyne and an ester prodrug activated by carboxylesterases; retinoids share a terminal carboxylic acid; acitretin and isotretinoin oral | NARRATE | mc-4 | Define prodrug and ester hydrolysis | 80 |
| 30 | [sl.29] Methotrexate vs folic acid | T04 @7946-10096: pteridine; resembles folic acid (differs by an N-methyl and an amine) and binds DHFR more tightly; blocks tetrahydrofolate, a cofactor for DNA synthesis; also immunosuppressant and anti-inflammatory | NARRATE | mc-5 | Competitive inhibition explained literally | 100 |
| 31 | [sl.30] Methotrexate SAR | T04 @10096-11280: pteridine ring, p-aminobenzoic acid, glutamic acid; the pteridine must stay aromatic; N-alkylation of the ring amines lowers activity; the N-methyl is essential | NARRATE | mc-5 |  | 70 |
| 32 | [sl.31] Polleve-3: lactone | T04 @11280-11880: the circled cyclic ester classifies the limus drugs as lactones | BRIEF | mc-5 | Define lactone (cyclic ester) next to lactam (cyclic amide), which returns for cyclosporine | 45 |
| 33 | [sl.32] Cyclosporin | T04 @11880-13698: 11-amino-acid cyclic peptide (a cyclic lactam); activated by binding cyclophilin, not by metabolism; about 30% oral bioavailability from CYP3A4 first-pass; grapefruit juice raises blood levels | NARRATE | mc-5 | Chain: grapefruit blocks first-pass CYP3A4, so more drug reaches the blood. Define first-pass metabolism | 100 |
| 34 | [sl.33] Apremilast (Otezla) | T04 @13698-14505: isoindoline; PDE4 inhibitor; CYP3A4 O-demethylation then UGT glucuronidation; avoid 3A4 inhibitors and inducers | NARRATE | mc-5 | 'Reliance of this molecule on 3A4' is his point | 70 |
| 35 | [sl.34] Tofacitinib | T04 @14505-15341 | SKIP |  | Not on Exam 1 assigned pages: skip |  |
| 36 | [sl.35] Icotyde (icotrokinra) | T04 @17124-17278: FYI, not examined this year | SKIP |  | Not on Exam 1 assigned pages: skip; FYI only |  |
| 37 | [sl.36] Biologicals: MAb ADME | T04 @17748-17972: 'So skip this slide' | SKIP |  | Not on Exam 1 assigned pages: skip; skipped by him |  |
| 38 | [sl.37] Study aid-1 | T04 @17978 | SKIP |  | Not on Exam 1 assigned pages: skip |  |
| 39 | [sl.38] Questions | Not discussed | SKIP |  | Not on Exam 1 assigned pages: skip |  |
| 40 | [sl.39] Acne terminology | T04 @18084-18431 | SKIP |  | Not on Exam 1 assigned pages: skip |  |
| 41 | [sl.40] Acne-1: components, goals | T04 @18431-19387 | SKIP |  | Not on Exam 1 assigned pages: skip |  |
| 42 | [sl.41] Acne pharmacotherapy list | T04 @19387-20199 | SKIP |  | Not on Exam 1 assigned pages: skip |  |
| 43 | [sl.42] Keratolytics-1: glycolic and salicylic acid | T04 @20199-22858: glycolic acid alpha-hydroxy (OH on the carbon next to the acid), pKa about 3, log P about 1, acts at the surface; salicylic acid beta-hydroxy, log P 1 to 2 (aromatic ring), goes deeper; low pKa acids cause itching | NARRATE | mc-6 | Alpha vs beta carbon defined; log P predicts depth of action. Define pKa in one clause | 110 |
| 44 | [sl.43] Keratolytics-2: hydroxy acid SAR | T04 @22858-23305: carboxylic acid group(s); most have the OH on the alpha carbon; R mostly alkyl | BRIEF | mc-6 |  | 40 |
| 45 | [sl.44] Polleve-4: how many alpha-hydroxy acids | T04 @23305-23929: count not stated | SKIP |  | Held conflict (OPEN_QUESTIONS Lecture 4, 1); the definition is narrated at p.43-44 |  |
| 46 | [sl.45] Keratolytics-3: sulfur | T04 @23929-25608: elemental or mixed with sodium sulfacetamide or zinc oxide; small particles work better; allergies and smell; breaks disulfide bonds in keratin, mechanism less clear | NARRATE | mc-6 | Define disulfide bond; particle size point | 80 |
| 47 | [sl.46] Keratolytics-4: benzoyl peroxide | T04 @25608-26659: peroxide, log P 3.5, penetrates skin; the peroxide bond splits into benzoic acid (lowers pH, keratolytic) and a benzoyl radical (kills bacteria) | NARRATE | mc-6 | Two products, two actions; agrees with Dr. Smith's benzoic acid point (PCol 36) | 80 |
| 48 | [sl.47] Retinoids: properties | T04 @26659-27705: vitamin A derivatives, RAR and RXR agonists; anti-inflammatory, antiproliferative, lower sebum; teratogenic, the major limit | BRIEF | mc-7 |  | 50 |
| 49 | [sl.48] Retinoids-1: first generation | T04 @27705-28898: non-aromatic; tretinoin (all-trans, topical) and isotretinoin (13-cis, oral) are geometric isomers, both active | NARRATE | mc-7 | Define geometric (cis/trans) isomer literally; carbon 13 is the only difference | 80 |
| 50 | [sl.49] Retinoids-2: second generation | T04 @28898-30014: mono-aromatic; etretinate, an ethyl ester prodrug, half-life 120 days, off the US market 1998; acitretin is its active form, used directly, less teratogenic risk | NARRATE | mc-7 | Link to Dr. Smith's acitretin limits (PCol 20): long half-life is the reason | 80 |
| 51 | [sl.50] Retinoids-3: third generation | T04 @30014-30892: poly-aromatic; adapalene and trifarotene active as given (free acid); tazarotene a prodrug activated by carboxylesterase; retained in the skin, low systemic absorption | NARRATE | mc-7 | Prodrug vs active form across generations | 80 |
| 52 | [sl.51] Hormones: oral contraceptives | T04 @30892-31822: ethinyl estradiol with norgestimate or drospirenone; steroids; lower sebum | BRIEF | mc-8 |  | 40 |
| 53 | [sl.52] Hormones: antiandrogens | T04 @31822-33635: spironolactone (steroidal) and ketoconazole lower testosterone synthesis; ketoconazole is an azole, a strong CYP3A4 inhibitor; flutamide (non-steroidal) blocks the receptor; steroidal vs non-steroidal approach | NARRATE | mc-8 | The two approaches by mechanism, as he said them; do not state which slide heading ketoconazole sits under (held, conflict 5). The azole-3A4 rule is a drug interaction point | 100 |
| 54 | [sl.53] Antibiotics: azelaic acid, clindamycin, erythromycin | T04 @33635-35161: P. acnes is gram positive; azelaic acid a C9 dicarboxylic acid, anti-inflammatory; clindamycin (lincomycin) used topically because of GI toxicity; erythromycin macrolide, unstable in acid, salts and esters improve solubility | NARRATE | mc-8 | Linear vs cyclic antibiotic structures | 80 |
| 55 | [sl.54] Antibiotics: tetracyclines | T04 @35161-36909: four rings in a line (vs the stacked steroid rings); chelate calcium and other metal ions, staining and weakening bone and enamel; absorption reduced by these ions; cross-reactive allergy | NARRATE | mc-8 | Visual identification said in words; the chelation chain explains Dr. Smith's 'not in young children' (PCol 44) | 90 |
| 56 | [sl.55] Study aid-2 | T04 @36909 | SKIP |  | Not on Exam 1 assigned pages: skip |  |
| 57 | [sl.56] Wrinkle (title) | T04 @37001 | SKIP |  | Not on Exam 1 assigned pages: skip |  |
| 58 | [sl.57] Wrinkle-1: causes | T04 @37001-37511 | SKIP |  | Not on Exam 1 assigned pages: skip |  |
| 59 | [sl.58] Polleve-5 | T04 @37511-37660 | SKIP |  | Not on Exam 1 assigned pages: skip |  |
| 60 | [sl.59] Protection and treatments list | T04 @37660-38519 | SKIP |  | Not on Exam 1 assigned pages: skip |  |
| 61 | [sl.60] Sunblocks: zinc oxide, titanium dioxide | T04 @38519-39692: metal oxides reflect and scatter; broad spectrum; inert; larger particles more effective; nano zinc oxide is transparent and loses reflection; can be combined with organic sunscreens | NARRATE | mc-9 | Particle size: his 'size matters' vs Dr. Smith's 'nano forms are more cosmetic' (Sun 20) are two sides of one trade-off: say both, attributed | 80 |
| 62 | [sl.61] Sunscreens-1: UVA (avobenzone, meradimate) | T04 @39692-41549: chromophores absorb UV, release heat; avobenzone (dibenzoylmethane) low skin absorption, photodegrades with half-life about 2 h, reapply; meradimate (anthranilate) degrades faster | NARRATE | mc-9 | Define photodegradation (the light it absorbs breaks it down). Dr. Smith's slide: dibenzoylmethane activity falls after 15 minutes (Sun 24): attribute both | 100 |
| 63 | [sl.62] Sunscreens-2: UVB (cinnamates, PABAs) | T04 @41549-42267: octinoxate absorbed through skin, photodegrades in 1-2 h; PABA and padimate O rarely used (allergy) | NARRATE | mc-9 |  | 70 |
| 64 | [sl.63] Sunscreens-3: UVB (salicylates, ensulizole) | T04 @42280-43589: homosalate, octisalate esters hydrolyze to salicylic acid in skin (analgesia); ensulizole water soluble (sulfonic acid), half-life about 12 h, washes off when swimming | NARRATE | mc-9 |  | 80 |
| 65 | [sl.64] Sunscreens-4: UVB/UVA (benzophenones, octocrylene) | T04 @43589-45151: oxybenzone log P about 4, absorbed through skin, 'a worry'; octocrylene most photostable (about 90 h), lipophilic ester, stays on after swimming, stabilizes others | NARRATE | mc-9 | His correction: lipophilic, not hydrophilic (struck on the slide) | 90 |
| 66 | [sl.65] Sunscreens-5: bemotrizinol | T04 @45151-45749: from Europe; photostable, half-life 4-8 h; little skin absorption because of high molecular weight | BRIEF | mc-9 | Say 'low' absorption (held: 'no' vs 'low') | 45 |
| 67 | [sl.66] Hydroquinone | T04 @45749-46324 | SKIP |  | Not on Exam 1 assigned pages: skip |  |
| 68 | [sl.67] Alpha-hydroxy acids | T04 @46324-47069 | SKIP |  | Not on Exam 1 assigned pages: skip |  |
| 69 | [sl.68] Hyaluronic acid | T04 @47069-48376 | SKIP |  | Not on Exam 1 assigned pages: skip |  |
| 70 | [sl.69] Retinoids (topical, collagen) | T04 @48376-48911 | SKIP |  | Not on Exam 1 assigned pages: skip |  |
| 71 | [sl.70] Study aid (wrinkle) | T04 @48911-end | SKIP |  | Not on Exam 1 assigned pages: skip |  |

## 2. "Hear the why" on questions

### 2.1 Which questions get a spoken why

| Tier | Questions | How chosen | Estimated characters | Recommended voice |
|---|---|---|---|---|
| A | 117 (Smith 83: L1 17, L2 24, L3 27, L3C 15; Sikazwe 34: S3 14, S4 20) | Every question starred in `likely_data.js` (each star sourced to her hints, an objectives slide, a poll or a stressed point; all in an Exam 1 pool) | 117 x about 549 = 64,233 | Recorded |
| B | 54 (L3 16, L2 13, L3C 13, S4 5, L1 4, S3 3) | Unstarred `skill:'tell'` (tell-apart) questions in an Exam 1 pool whose concept has no starred question; these are the hard distinctions (within-class differences, sunblock vs sunscreen ingredients, UVA vs UVB, cytokine vs receptor) | 54 x about 488 = 26,352 | Device voice first; record later only if you want |
| none | the other 424 questions in the bank | Their written `teach` and option `why` texts stay as text; a spoken version would repeat the same words | 0 | Optional device voice reading the written `teach`, as PH did for Exam 4 (app.js line 704) |

The list is in `why_tiers.tsv` (id, tier, professor, topic, concept, skill, option count, characters of the current written explanation, stem). Three Tier A items are matching items (L3-119, L3-122, L3-123), which use the matching form in 2.2. Lowyield, unassigned and held-out questions (L1-062, L2-015, L3-026, S3-081) get no spoken why.

### 2.2 What a spoken why contains

1. **Start with the reasoning for the correct answer**, by its option text (options are shuffled on the site, so never "A" or "the second option"). One chain: what the drug or process does, and why that makes this option right.
2. **Then each tempting wrong option, one sentence each**: what it actually is, or which drug, disease or band it belongs to (for example, "Keratinocyte hyperproliferation is the major pathology of psoriasis, not of atopic dermatitis"). An option that is wrong for an obvious reason still gets its sentence only if a learner could confuse it; otherwise it is left out.
3. **Select-all**: say each correct choice with its reason, then each wrong choice with its reason. **Matching**: each pair with one reason, at most 120 words.
4. **Not in a spoken why**: the stem restated; "the answer is"; option letters; transcript line numbers, slide numbers, question ids; "she said in class" unless her exact words carry the point (at most one quote); "remember", "make sure", "this is important", or any study advice; stories; anything the question's own written explanation and its cited slide do not support.
5. **Length**: 60-110 words (about 370-670 characters); target mean 90 words.
6. **Source**: the question's `teach`, its options' `why` texts and the cited slide and transcript lines. A held conflict noted in the item's `note` is never stated as settled.

## 3. Script-writing rules for DEENT

Adapted from PH's WALKTHROUGH_SCRIPT_BRIEF.md and WALKTHROUGH_VERIFY_BRIEF.md, with Louis's 2026-11-08 instruction and the DEENT rules in CLAUDE.md and STYLE.md.

### 3.1 For a listener who knows nothing
- Define every technical term the first time it is spoken in a section, in one plain clause, then use it: keratinocyte, stratum corneum, cytokine, T cell, IgE, antigen-presenting cell, response element, transcription factor, kinase, monoclonal antibody, fusion protein, bacteriostatic, keratolytic, log P, half-life, prodrug, first-pass metabolism, lactone, lactam, chromophore, photodegradation.
- Build every mechanism as a chain in order: what the drug binds, what that blocks or starts, what changes in the cell, what changes in the skin, and so why it treats this disease. This is what her hint asks: "explain why that MOA is good for treating the skin conditions it is indicated for".
- Say the distinction explicitly when two things are easy to confuse, with both halves: AD barrier defect vs psoriasis hyperproliferation; RAR vs RXR; p40 vs p19; cytokine vs receptor; human, humanized, chimeric; sunblock (reflects) vs sunscreen (absorbs); UVA vs UVB; Dr. Smith's vs Dr. Sikazwe's band limits.
- A slide whose meaning is in a picture (ribosome, T-cell signals, folate cycle, steroid skeleton, lesion cascade) is described in words in the order the eye should follow it, so a listener who cannot see the figure still gets it. Where a drawn step-through exists (`acne-cascade`, `nr-action`), the part points at its steps.

### 3.2 Every sentence adds content
- A sentence stays only if it states a fact, a reason or a distinction that the part needs. No openers beyond a title sentence of at most six words ("Psoriasis: what goes wrong."), no summaries that repeat the part, no transitions such as "now let's look at", no "as you can see", no sentences about the audio, the slides or the site.
- A list is stated as its pattern plus the two or three items that matter, never read item by item.
- Content narrated in one section is not repeated in another; a cross-reference is one clause ("the same 30S subunit as the tetracyclines").

### 3.3 Spoken form (text-to-speech safe)
- Numbers and units in words: "two to three fold", "fifteen to thirty percent", "two hundred ninety to three hundred twenty nanometers", "zero point five nanograms per milliliter", "every ninety to one hundred twenty minutes".
- Abbreviations: expand on first use or spell as letters: "I L seventeen A", "T N F alpha", "cyclic A M P", "P D E four", "C Y P three A four", "eleven beta H S D", "N F kappa B", "A P one", "N F A T", "F K B P", "M H C class two", "C D eighty and C D eighty-six", "T H two", "I G E", "S P F", "U V A", "M E D", "P U V A", "P A B A", "eight M O P", "log P", "P K A", "carbon one to carbon two double bond", "six alpha halogen", "eleven beta hydroxyl". Propionibacterium acnes in full first, then "P acnes". Zinc oxide and titanium dioxide by name, never by formula.
- No symbols, parentheses, slashes, plus signs, arrows or quotation marks; her or his words are introduced as "Doctor Smith said," or "Doctor Sikazwe said," followed by a complete, clean clause.
- Drug names that a voice may say badly are checked in the pronunciation test (section 6, step 5): ixekizumab, tildrakizumab, risankizumab, guselkumab, certolizumab pegol, ustekinumab, secukinumab, brodalumab, dupilumab, abatacept, etanercept, crisaborole, pimecrolimus, calcipotriene, methoxsalen, isotretinoin, acitretin, etretinate, trifarotene, tazarotene, adapalene, apremilast, ruxolitinib, upadacitinib, tofacitinib, bemotrizinol, ensulizole, meradimate, octocrylene, octinoxate, avobenzone, homosalate, octisalate, padimate O, oxybenzone, dimethicone, cyclomethicone, ichthammol, anthralin, sarecycline. Tildrakizumab-asmn is said as "tildrakizumab, A S M N".

### 3.4 Literal language, no anecdotes, no advice
- No metaphors, similes or figurative labels, including the professors' own ("shingles on a roof", "filling in the wrinkles from below", "can't uncook a turkey", the loop/snake/hopscotch names for steroid numbering, "mousy"). Say the literal fact instead.
- No stories or personal anecdotes (the family story at calcipotriene, the benzoyl peroxide stories, the transplant patients, armadillos, the fish-poison origin, the milk bath, the DayQuil warm-up). CLAUDE.md: personal anecdotes stay off the public site.
- No study advice, no class logistics (exam dates, formats, "you will see this in the renal module", other faculty, other courses), no dates or days.

### 3.5 Every fact traceable
- Source order (CLAUDE.md, Louis 2026-11-05): the testing professor's slide and recording together; the drug chart as a guide; readings as support. In practice a script is written from the guide section and the questions' verified `teach`/`why` texts for its slides, checked against the slide text and the transcript lines in the inventory. A fact on the slide but not spoken is allowed and is said as the slide's fact; a spoken fact not on the slide is attributed to the professor.
- Each part's draft carries, outside the spoken text, a `src` list (slide, transcript lines, question ids) so the verifier can check each sentence. The `src` list is not spoken.
- Clear verbal slips are spoken as the slide has them (OPEN_QUESTIONS "Slips resolved"): RAR not RXR, glycerides not glycerin, dephosphorylates, MHC class two, melanin not melatonin, CYP3A4 for "3F4", three years for acitretin.
- Dr. Sikazwe's vitamin D3 pathway (DPAW 27, part b) uses the assigned reading he made testable (Bikle, Endotext); the part says so in one clause.

### 3.6 Never narrated (held conflicts and exclusions)
Held conflicts (OPEN_QUESTIONS): psoriasis onset age; "IL-12 and IL-13 inhibitors" on Pathophys 28; acne "hyperproliferation"; where the vitamin D receptor complex binds (TRE or VDRE); topical calcineurin inhibitors' psoriasis label status; the macrolide step on the ribosome; crisaborole long-term safety; which oral calcineurin inhibitor effect is most common; MHC class in the 11/03 figure (say class two, per slide 25); dupilumab in psoriasis; dapsone's antibacterial action in acne; ruxolitinib's route; metronidazole's indication table and gel base; coal tar in children (slide wording only); infliximab antibody rate (slide range only); leukoencephalopathy case count; JAK inhibitor chemical class "peptides"; visible light range; 11-beta-HSD reversibility by type; the steroid chlorine numbering exercise; "the tinier the percentage, the more potent"; Polleve-4 count; bemotrizinol "no" vs "low" absorption (say low); icotrokinra (excluded).
Excluded material: Pathophys 9 and 25; PCol 13; estrogen on Pathophys 36; the RAR/RXR selectivity table; T-cell subtypes; retinoid structures in Dr. Smith's parts; DPAW pages 5, 35-39 and every page outside the assigned list.

### 3.7 Length targets
| Unit | Words | Characters (about) |
|---|---|---|
| NARRATE part | 70-130 (one split slide up to 2 parts of 90-110) | 430-800 |
| BRIEF part | 20-50 | 120-310 |
| Section | 150-550 | 900-3,400 |
| Spoken why | 60-110 (matching up to 120) | 370-670 (730) |

## 4. Coverage checklist

Each objective and hint item maps to the parts that cover it (section id, then slide; DPAW by PDF page). Dr. Smith's hints: the format and pharmacology lines are quoted in STYLE.md and the sun lines in OPEN_QUESTIONS.md ("From Sun Exposure lecture: ..."); her pathophysiology hint lines are recorded only by category in the LOG.md 2026-11-07 coverage audit (epidemiology; etiology and pathology), so those two rows use the audit's categories.

### 4.1 Pathophysiology objectives (Pathophys slide 3)
| Objective | Parts |
|---|---|
| 1. Basic structures and functions of the skin | pp-1: 5, 6 (barrier, water retention, sebum) |
| 2. Epidemiology of the three diseases | pp-2: 10; pp-4: 20; pp-6: 31; contrast in pp-7: 38 |
| 3. Etiologies and pathologies | pp-3: 13, 15, 16; pp-4: 19, 21, 22, 23; pp-5: 24, 26; pp-6: 32, 33, 34; pp-7: 38 |
| 4. Classes of medications for each condition | pp-3: 17; pp-5: 27 (+28); pp-7: 36, 37 |
| 5. General mechanisms of the drug classes | pp-7: 36 (cause to class map); in depth in every pc section |

### 4.2 Pharmacology objectives (PCol slide 3)
| Objective | Parts |
|---|---|
| 1. Which medications treat AD, psoriasis and acne | product parts in pc-2 to pc-16; pp-3: 17; pp-7: 36 |
| 2. General mechanism of each class | pc-1: 6, 7; pc-2: 10, 11; pc-3: 14, 15; pc-4: 21; pc-5: 25, 26; pc-7: 32; pc-8: 36, 38, 39; pc-9: 42, 43; pc-10: 49; pc-11: 53, 55; pc-12: 59; pc-13: 63; pc-14: 64, 65; pc-15: 70; pc-16: 75 |
| 3. Differences between drugs in the same class | pc-3: 17, 18; pc-4: 19, 20; pc-5: 26; pc-6: 27, 29, 30; pc-7: 33, 34; pc-9: 45, 46, 47; pc-11: 57; pc-14: 66, 67, 68, 69; pc-15: 71-74; pc-16: 76 |
| 4. Drug interactions discussed in class | pp-5: 24 (lithium, beta blockers); pc-4: 20 (ethanol); pc-6: 30 (CYP3A4); pc-7: 34 (CYP3A4 inducers); pc-8: 40 (other topical salicylates); pc-9: 47; pc-14: 67 (live vaccines) |
| 5. Side effects and contraindications | pc-2: 12; pc-3: 16, 18; pc-4: 19, 20, 22; pc-6: 28, 30; pc-7: 33, 34; pc-8: 37, 40; pc-9: 44, 46; pc-11: 54, 56; pc-12: 61; pc-14: 64, 66, 67, 69; pc-15: 70, 72; pc-16: 76. Not narrated: PCol 13 oral corticosteroid effects (she excluded them) |

### 4.3 Sun exposure objectives (Sun slide 6)
| Objective | Parts |
|---|---|
| 1. Types of ultraviolet radiation | sun-2: 8; mc-2: 12 (his limits) |
| 2. Categorize sunscreens and sunblocks into classes | sun-4: 20, 22, 24; mc-9: 61-66 |
| 3. Mechanisms of the products for sunburn protection | sun-4: 20 vs 22; mc-9: 62 |
| 4. Define MED, SPF and substantivity | sun-3: 12, 13; sun-5: 19 |
| 5. Sunblocks vs sunscreens | sun-4: 20, 21, 22; mc-9: 61 |

### 4.4 Dr. Sikazwe's objectives (DPAW p.3; the page itself is not on his assigned list)
| Objective | Parts |
|---|---|
| Assess: therapeutic targets | mc-1: 7, 8; mc-2: 18; mc-3: 23; mc-4: 28; mc-5: 30, 33, 34; mc-8: 53 (he de-emphasized MOA: one clause each) |
| Assess: drug and chemical classes | mc-1: 7, 8; mc-2: 17, 18; mc-3: 20; mc-4: 27, 28; mc-5: 30, 32, 33, 34; mc-6: 43, 47; mc-7: 49-51; mc-8: 53-55; mc-9: 61-66 |
| Plan: chemical basis of drug action, indication, contraindication | mc-1: 7; mc-2: 17, 18, 19; mc-3: 23; mc-6: 46, 47; mc-7: 48 (teratogenicity) |
| Plan: ADMET and patient factors | mc-1: 7, 8, 9; mc-3: 26; mc-4: 28, 29; mc-5: 33, 34; mc-7: 50, 51; mc-9: 62-66 |
| Plan: physicochemical properties, functional groups, SAR | mc-3: 20, 21, 25; mc-5: 31; mc-6: 43, 44; mc-7: 49 |
| Plan: drug interactions | mc-1: 8; mc-2: 18; mc-5: 33, 34; mc-8: 53, 55 |
| His two-point vitamin D3 take-home | mc-4: 27 part b |

### 4.5 Dr. Smith's Exam 1 hints
| Hint item | Parts |
|---|---|
| Drugs in each class (know the drug table) | every product part; pp-3: 17; pp-5: 27; pp-7: 36, 37. Chart drugs with no target on her slides: spironolactone and ketoconazole (mc-8: 53), petrolatum (mc-2: 15), zinc oxide (sun-4: 20; mc-9: 61), bemotrizinol (mc-9: 66). **No part: the sunburn-relief anesthetics (benzocaine, dibucaine, tetracaine, lidocaine): on the chart, on no slide** |
| General MOA of each class, and why it helps the condition | as PCol objective 2; pp-7: 36 maps each acne factor to its drug class |
| Details of the MOAs that separate drugs within a class | as PCol objective 3 |
| Know what the drugs target (fill-in-the-blank) | every product part names the target. The Reference self-test list `ref-targets` is not narrated: reading it aloud would give the answers before the student writes them |
| Black box warnings | pc-6: 30 (cyclosporine); pc-15: 70 (TNF-alpha class); pc-16: 76 (tofacitinib) |
| Epidemiology of AD, psoriasis, acne (LOG audit category) | pp-2: 10; pp-4: 20; pp-6: 31 |
| Etiology and pathology of each (LOG audit category) | as Pathophys objective 3 |
| Sunscreens vs sunblocks by ingredient | sun-4: 20, 22, 24; mc-9: 61-66 |
| SPF and wide spectrum | sun-3: 13, 14, 15 |
| Some drugs that cause photosensitivity | sun-5: 18, built from her own drug slides (tetracyclines, coal tar vs shale tar, topical retinoids, tazarotene vs adapalene, calcipotriene, psoralens). **Partial: the APhA table the slide links to is not in our sources; no drug from it is named** |
| What damage UVA and UVB cause | sun-2: 8; mc-2: 12 |

Objectives or hint items with no narration: none in full. Partial, with the reason: the sunburn-relief anesthetics (no slide); the APhA tables behind Sun 18 and 23 (not in the sources); PCol 13 (excluded by her); every held conflict in 3.6.

## 5. Size and cost

### 5.1 Estimates
| Batch | Clips | Words | Characters | Minutes at 150 words a minute | Cost at PH's rate |
|---|---|---|---|---|---|
| Walkthroughs (37 sections) | 158 | about 12,325 | about 75,200 | about 82 | about $13.66 |
| Spoken whys, Tier A (starred) | 117 | about 10,500 | about 64,200 | about 70 | about $11.67 |
| Spoken whys, Tier B | 54 | about 4,300 | about 26,400 | about 29 | about $4.79 |
| Pronunciation test clip | 1 | about 50 | about 300 | under 1 | about $0.05 |
| **Recommended (walkthroughs + Tier A + test)** | 276 | | about 139,700 | about 152 | **about $25.40** |
| All of the above | 330 | | about 166,100 | about 181 | about $30.20 |

Rate: "~1 credit each, at 805¢ per 44,297 chars" (PH `claude/drill-app-state.md` line 132), that is about 0.0182 cents a character; the same rate is in the 10/23 walkthrough recording: "101,801 credits, 1,850.92 cents, 108.2 minutes" (lines 176-177). The rate depends on the ElevenLabs plan Louis holds now and may differ; the credit balance must be read before recording (PH's workspace quota ran out twice: line 83; REC4.md). The estimates are planning figures: the real count comes from the approved scripts, and the approval request states the exact character total. Leaving the connector's default of two takes per clip would double every figure; the plan records one take.

### 5.2 Device voice (free) and its limits
The browser's own speech (Web Speech API) costs nothing and needs no audio files. Limits seen in PH and in general use: the voice differs by device and browser; drug and cytokine names are often mispronounced; pacing and emphasis are flat; on iPhone, speech must start from a tap and can stop when the screen locks or the tab changes; a slow voice can be cut off by any timer in the player. The same speech-safe scripts work for both, so nothing is wasted by starting on the device voice.

### 5.3 What to record and what to leave to the device voice
- **Record**: the 37 walkthroughs (they carry the mechanism chains, where a clear voice saying drug names correctly matters most) and the Tier A whys. One take each, after the scripts are approved.
- **Device voice**: Tier B whys and every other question's written `teach` (optional); any part changed after recording until it is re-recorded.
- **Not narrated at all**: the inventory's SKIP slides, the Reference target list, Drug list cards, the Atlas, select-all and matching drills beyond the three starred matching items.

## 6. Verification before any recording

1. **Fact and slide review (independent agents, not the writers)**, one per deck, using PH's verify brief adapted: every sentence checked against its slide text and transcript lines and the questions' verified texts; findings by kind (fact, distortion, slide, form) plus two DEENT kinds: **held** (states a held conflict as settled) and **excluded** (narrates excluded or unassigned material). Output `verify/<section>.json`; fixes applied by a separate step; changed parts re-verified.
2. **Novice comprehension review**: a separate reader agent given only the spoken text (no slides, no background notes) reads each section and reports every undefined term, every step it could not follow, every pronoun with an unclear referent, and every place where it would need the picture. It then answers the section's starred questions from the script alone; a question it cannot answer is a gap in the script, unless the question tests something the slide range does not teach. PH's learning reviewer changed or added 25 of 192 parts; the same scale is expected here.
3. **No-filler pass**: a reviewer marks every sentence that states no fact, reason or distinction, every repeat within a section, and every repeat across sections (an n-gram overlap script lists cross-section repeats); the writer cuts them. The character total before and after is reported.
4. **Speech-form lint (script)**: digits, symbols, parentheses, slashes, quotation marks, unlisted abbreviations, option letters, transcript or slide numbers, the banned phrases ("as you can see", "remember", "make sure", "on this slide", dates and days), and part lengths outside 3.7.
5. **Pronunciation test**: one clip of about 300 characters with the hardest names from 3.3, recorded only after Louis approves its cost (about $0.05), to choose spellings that the voice says correctly.
6. **Louis's approval** of the scripts (all sections and whys on one page, with the slide beside each part) and of the exact character count and cost, before generation. Scripts are then frozen; each clip records the hash of its text.

## 7. What needs building and the order of work

### 7.1 Decisions for Louis
1. **Where the player lives.** The kit has no walkthrough or narration module: `FEATURES.md` lists guide-walkthroughs (v1 PH, v2 PK) and recorded-narration (v1 PH, v1-pk) as code in those course repos, and `review/port-queue.md` holds Tier 3 ("walkthroughs with audio, Hear why") until Pharmacokinetics moves. DEENT's rule is "existing kit core only". Two paths:
   - (A) Kit feature port of guide-walkthroughs and recorded-narration, owned by the porter session. A module that saves the listening position is progress storage, so its merge needs Louis's yes; the request goes to the central decision session ("Exam drill kit Phase 1 setup", session_01LVkWFC9wTqUxncwEDduxrb). Unlikely before Exam 2.
   - (B) **Recommended now**: DEENT course files listed in `course.js` `files` (`walk_data.js`, `walk_ui.js`, `why_data.js`, `why_ui.js`), temporary until a kit feature exists, the way `druglist_ui.js` and `likely_ui.js` are carried; written in the shape of PH's player (`gwBars`, `gwOpen`, `gwPlay`, `gwShow`) so the later kit port is a move, not a rewrite. Needs Louis's yes because it departs from "existing kit core only".
2. **Slide images.** The decks in `src/decks/` are your GoodNotes copies (handwriting on many pages). The repository and site are public. Choose: render from your annotated copies after a page-by-page check for personal text and names (PH's ADE p. 35 lesson), or from clean instructor copies if you can supply them. 154 slides are referenced by parts.
3. **Voice.** PH used the ElevenLabs voice `jNB0TWZK9LKlBbU54wMW` ("JK"), model eleven_v4 (REC4.md). Same voice for DEENT, or another?
4. **Scope and budget.** Record walkthroughs and Tier A (about $25.40), all tiers (about $30.20), or device voice only for now.

### 7.2 Player (path B)
- A "Listen: walkthrough" bar on each guide objective section that has walkthroughs (several bars where one objective spans several sections); the player reads part by part, highlights the line being read, shows the part's slide (or the step of `acne-cascade` / `nr-action`), changes slide with the part, lets the student browse the deck, open a slide full size, change speed, pause and resume where they stopped, continue to the next section; transcript first on phones; keyboard K/Space/arrows (PH PORT_PROMPT step 4).
- "Hear the why" button on a question after it is answered (and in exam review), recorded clip when one exists and its hash matches, else the device voice; no fixed timer on device speech.
- The resume position is a per-device convenience saved under the course's storage namespace; it is not progress data and must not touch the core's progress records (this is why path A counts as storage work in the kit).
- Audio files `audio/gw-<section>-<part>.mp3` and `audio/q-<id>.mp3` (about 1 MB a minute at 128 kbps: about 150 MB for the recommended set), loaded on demand; the service worker must not precache them.

### 7.3 Slide images
- Render only the referenced pages with `pdftoppm` or PyMuPDF to `slides/<deck>-NN.jpg` (1280 px wide, JPEG quality 70; PH's 152 slides took 14.6 MB). Inspect every image before commit. Slide numbering for DPAW uses the PDF page, as the questions' cites do.

### 7.4 Order of work
1. Wait for the guide rewrite to land (another agent is rewriting `guide.js` now); recheck the section-to-guide mapping and the source texts.
2. Louis's decisions in 7.1.
3. Scripts: one writer agent per deck group (Pathophys; PCol 1-42; PCol 43-76; Sun; DPAW), small files appended in batches; draft JSON per section `{id, title, segs:[{text, slide, step, src}]}` and per why `{id, text, src}`.
4. Verification 6.1 to 6.4; fixes applied; re-verification of changed parts.
5. Player and slide images (path B), on the device voice, in the `/preview/` build; checks: a `walk_check.js` (slide files exist, lengths, speech lint, held-conflict phrase list, clip hashes), a browser test at 390 and 1200 px (every section opens, every slide loads, parts advance and the slide follows, pause and resume hold, no horizontal scroll, no console errors), then `./run_checks.sh`.
6. Louis listens on his phone at `/preview/` and approves the scripts and the cost (6.6).
7. Pronunciation test clip (approval), then recording: queue file with ids and character counts, one take per clip, credits checked first, each clip downloaded and its length compared with its word count, a done log; stop on any quota error, never retry by regenerating silently.
8. Commit on the working branch; the live site changes only with Louis's approval of that change in the DEENT session (CLAUDE.md; kit decision 10, reading 7).

Dependencies: the guide rewrite (step 1); Louis's decisions (step 2); for path A only, the porter and central sessions; the DEENT working branch already carries unpublished work (the 2026-11-07 hint items, the Drug list tab, the likely stars) and kit pull requests waiting on Louis (#58, #59, #62, #70, #72); narration builds on that branch and is released with or after it.
