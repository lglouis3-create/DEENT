// make_review_page.js OUT.html: a reading page of the draft Exam 1 style items for Louis (not part of the drill build).
const fs = require('fs'), path = require('path'), vm = require('vm');
const HERE = __dirname;
global.QUESTIONS = [];
vm.runInThisContext(fs.readFileSync(path.join(HERE, 'q19_exam1_style_DRAFT.js'), 'utf8'), {filename: 'q19'});
const IMG = JSON.parse(fs.readFileSync(path.join(HERE, 'draft_images.json'), 'utf8'));
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const FORMAT = q => {
  const k = q.options.filter(o => o.correct).length;
  const f = [];
  if (q.img) f.push('drawing');
  if (k > 1) f.push('select all, no partial credit');
  if (/conclude|assume/i.test(q.stem)) f.push('conclude / assume');
  if (q.options.every(o => o.t.split(/\s+/).length <= 3)) f.push('short options');
  return f.length ? f : ['multiple choice'];
};
const card = q => `
<article class="item" id="${q.id}">
  <header><span class="id">${q.id}</span><span class="prof">${q.prof}</span>${FORMAT(q).map(x => `<span class="tag">${esc(x)}</span>`).join('')}</header>
  <p class="stem">${esc(q.stem)}</p>
  ${q.img ? `<img class="fig" src="${IMG[q.img]}" alt="Drawing for ${q.id}">` : ''}
  <ul class="opts">${q.options.map(o => `<li class="${o.correct ? 'key' : ''}"><span class="mark">${o.correct ? '✔' : ''}</span><div><b>${esc(o.t)}</b><details><summary>why</summary><p>${esc(o.why)}</p></details></div></li>`).join('')}</ul>
  <details class="teach"><summary>What it teaches, and sources</summary><p>${esc(q.teach)}</p><p class="cite">${esc(q.cite)}</p>${q.note ? `<p class="note"><b>Open point.</b> ${esc(q.note)}</p>` : ''}</details>
</article>`;
const group = (title, intro, pred) => `<section><h2>${title}</h2><p class="intro">${intro}</p>${QUESTIONS.filter(pred).map(card).join('')}</section>`;

const html = `<title>Exam 1 Style Drafts</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Source+Serif+4:wght@400;600&display=swap">
<style>
/* plan: reading page for 22 draft practice items. Palette: paper, ink, one blue for structure labels, a green for the keyed option. Type: Source Serif 4 for stems, Inter for labels. Layout: one column, cards per item. */
:root{--bg:#F6F5F1;--panel:#FFFFFF;--ink:#1D2330;--dim:#5B6577;--line:#D9DCE3;--accent:#2F5FA8;--ok:#1E7B4B;--ok-bg:#E6F3EC;--warn:#8A5A00;--warn-bg:#FFF3D6}
@media (prefers-color-scheme: dark){:root:not([data-theme="light"]){--bg:#14171D;--panel:#1D222B;--ink:#E7E9EE;--dim:#9AA3B2;--line:#343B48;--accent:#8CB4F0;--ok:#7DD3A5;--ok-bg:#1B3327;--warn:#F0C56A;--warn-bg:#3A2F14;color-scheme:dark}}
:root[data-theme="dark"]{--bg:#14171D;--panel:#1D222B;--ink:#E7E9EE;--dim:#9AA3B2;--line:#343B48;--accent:#8CB4F0;--ok:#7DD3A5;--ok-bg:#1B3327;--warn:#F0C56A;--warn-bg:#3A2F14;color-scheme:dark}
body{background:var(--bg);color:var(--ink);font:15px/1.5 Inter,system-ui,sans-serif;padding-block:20px;padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px))}
main{max-width:760px;margin:0 auto}
h1{font:600 26px/1.2 'Source Serif 4',Georgia,serif;margin:0 0 6px;text-wrap:balance}
h2{font:600 20px/1.25 'Source Serif 4',Georgia,serif;margin:34px 0 4px}
h3{font-size:15px;margin:20px 0 6px}
.lede{color:var(--dim);margin:0 0 18px}
.intro{color:var(--dim);margin:0 0 14px}
.panel{background:var(--panel);border:1px solid var(--line);border-radius:8px;padding:14px 16px;margin:14px 0}
table{border-collapse:collapse;width:100%;font-size:13.5px}
th,td{border-bottom:1px solid var(--line);padding:6px 8px;text-align:left;vertical-align:top}
th{font-weight:600;color:var(--dim);font-size:12px;letter-spacing:.04em;text-transform:uppercase}
.scroll{overflow-x:auto}
.item{background:var(--panel);border:1px solid var(--line);border-radius:8px;padding:14px 16px;margin:14px 0}
.item header{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-bottom:8px}
.id{font-weight:600;font-variant-numeric:tabular-nums}
.prof{color:var(--dim)}
.tag{font-size:11.5px;border:1px solid var(--line);border-radius:999px;padding:1px 8px;color:var(--dim)}
.stem{font:400 17px/1.45 'Source Serif 4',Georgia,serif;margin:0 0 10px}
.fig{display:block;max-width:100%;background:#fff;border:1px solid var(--line);border-radius:6px;margin:0 0 12px}
.opts{list-style:none;margin:0;padding:0;display:grid;gap:6px}
.opts li{display:flex;gap:8px;align-items:flex-start;padding:6px 8px;border:1px solid var(--line);border-radius:6px;min-width:0}
.opts li.key{border-color:var(--ok);background:var(--ok-bg)}
.opts .mark{flex:0 0 1.2em;color:var(--ok);font-weight:600}
.opts div{min-width:0}
details summary{cursor:pointer;color:var(--accent);font-size:12.5px;margin-top:2px}
details p{margin:4px 0 6px;font-size:13.5px}
.teach{margin-top:10px}
.cite{color:var(--dim);font-size:12.5px}
.note{background:var(--warn-bg);border-radius:6px;padding:6px 8px;color:var(--ink)}
.note b{color:var(--warn)}
ul.plain{margin:6px 0 0;padding-left:20px}
ul.plain li{margin:3px 0}
code{font-size:12.5px}
</style>
<main>
<h1>Exam 1 style drafts</h1>
<p class="lede">22 practice items written from your 25 recalled Exam 1 questions and Dr. Sikazwe's stated cues: 12 for Dr. Sikazwe, 10 for Dr. Smith. Nothing here is in the drill yet. An independent check against the slides and the 11/04 transcript found citation and wording problems (wrong slide number for apremilast, two attributions that came from the lecture and not the slide, one distractor that could be defended, a stem that gave away its key); they are fixed in this version. Tap "why" under an option for the reason it is right or wrong, and "What it teaches" for the sources.</p>

<div class="panel">
<h3>What these add to the bank</h3>
<ul class="plain">
<li>Six items show unnamed drawings (Atlas core structures, numbered 1 to 5): the only alkyne retinoid, the 13-cis isomer of tretinoin, which molecules are alpha-hydroxy acids, which drug shares tetracycline's structure, which molecules are steroids, and which apremilast group is lost in an O-deethylation. The bank has 41 items with a drawing, all Dr. Sikazwe's, and none of these.</li>
<li>Five items give a premise and ask what follows ("It is correct to conclude…", "Assume…"). The bank has none worded that way.</li>
<li>Eight items are select-all with no partial credit: from drawings, drug lists (nuclear receptor binders, calcineurin inhibitors), from the class lists for psoriasis, acne and atopic dermatitis, and from statements whose wrong options swap an organ.</li>
<li>Options are short and from one category (receptor, DNA site, drug names), so the difficulty is in telling them apart.</li>
</ul>
</div>

<div class="panel">
<h3>Already on the branch (not published)</h3>
<ul class="plain">
<li>Blank <code>BL2-007</code> (crisaborole's enzyme) also accepts "PDE 4" and a bare "PDE", as the exam key did; <code>BL2-001</code> (calcipotriene's receptor) also accepts "nuclear".</li>
<li>Two new blanks: <code>BSX-003</code> (salicylic acid up to ___% for acne; accepts 6, 3-6, 3) and <code>BL1-003</code> (tretinoin binds the ___ receptors). Truncations such as "FKB" stay wrong, as on the exam.</li>
<li>A note in Reference under the drug classes by disease: keratolytics are listed under acne (slide 37), not psoriasis (slide 28); PDE-4 inhibitors are listed under atopic dermatitis (slide 17), not psoriasis.</li>
</ul>
</div>

<div class="panel">
<h3>Two points that need your answer</h3>
<ul class="plain">
<li><b>Apremilast (Exam 1 item 23).</b> Slide 33 draws "O-demethylation → –OH metabolite → O-Gluc", and in the 11/04 lecture he said "O-demethylation, so the methyl group is here". The exam keyed "O-deethylated" for the metabolite indicated. Our items <code>S4-046</code> and <code>S4H-014</code> say O-demethylation, as the slide does. Which alkyl group did the exam picture show removed? Draft <code>XS-006</code> teaches both by structure until then.</li>
<li><b>Psoriasis classes (Exam 1 item 45).</b> The key had retinoids, calcineurin inhibitors and PDE-4 inhibitors right, and keratolytics and antibiotics wrong. Slide 28 lists neither keratolytics nor PDE-4 inhibitors, PCol slide 40 gives salicylic acid for psoriasis, and Dr. Sikazwe's slide 33 gives apremilast for psoriasis. Draft <code>XM-003</code> uses slide 28 only (calcineurin inhibitors, nuclear receptor binders and TNF-α inhibitors right). Do you want PDE-4 inhibitors counted as right in a psoriasis list?</li>
</ul>
</div>

<h2>Dr. Sikazwe: slides and cues checked again</h2>
<p class="intro">Each cue he gave for the exam (11/03 and 11/04 transcripts, and the lists in STYLE.md), against the bank. Item counts are from the bank's 299 Sikazwe items, by the DPAW slide each cites.</p>
<div class="panel scroll"><table>
<thead><tr><th>What he said to focus on</th><th>In the bank</th><th>Drafted</th></tr></thead>
<tbody>
<tr><td>Read a metabolic scheme: "what steps involve glucuronidation" (11/03)</td><td>S3-021 (his poll, verbatim), S3-022, S3-023, S4-046</td><td>XS-006</td></tr>
<tr><td>"Are these chemicals the same class?" and a circled group to classify (lactone, lactam)</td><td>S3-024, his Polleve-3 item, S4-039</td><td>none needed</td></tr>
<tr><td>Vitamin D take-home: the reaction, the organs and the enzymes; "2 points"</td><td>S4-001 to S4-014, in text</td><td>XS-009 (organs swapped in the wrong options)</td></tr>
<tr><td>"Visually, can you identify tetracyclines and distinguish them from steroids?"</td><td>S4-094 (cross-allergy, text only)</td><td>XS-004, XS-005 (drawings)</td></tr>
<tr><td>"How many alpha-hydroxy acids?" (his Polleve-4)</td><td>S4-120, S4-055</td><td>XS-003 (select-all version)</td></tr>
<tr><td>Tazarotene is the acetylenic retinoid; 13-cis versus all-trans</td><td>S4-022, S4-076 (text)</td><td>XS-001, XS-002 (drawings)</td></tr>
<tr><td>Pimecrolimus versus tacrolimus: "the biggest thing", skin permeation</td><td>S4-016, S4-017</td><td>XS-007 (conclude)</td></tr>
<tr><td>Cyclosporine: first-pass effect; grapefruit juice</td><td>S4-042, S4-043</td><td>XS-008 (adds an azole)</td></tr>
<tr><td>Azoles: "have that enzyme inhibition at the front of your mind"; avoid 3A4 inhibitors with apremilast</td><td>S4-088, S4-047</td><td>XS-012</td></tr>
<tr><td>Antiandrogens: steroidal versus non-steroidal, by how they work</td><td>S4-085, S4-088</td><td>XS-011</td></tr>
<tr><td>Sunscreen photodegradation and reapplying</td><td>the sun-protection items S4-098 to S4-111</td><td>XS-010 (conclude)</td></tr>
</tbody></table></div>
<p class="intro">Coverage of his assigned pages (the list of 11/06): every assigned slide is cited by at least 3 items except slide 22 (the repeated steroid-numbering slide, 0 items; slide 21 has 4) and slide 45 (his Polleve-4, 1 item). He excluded the mechanisms of crisaborole and the JAK inhibitors, functional-group identification, hydrocortisone derivative structures, 11β-HSD types and antibiotic detail (11/03, 11/04); none of the drafts asks about them. Nothing he named as a focus was missing from the bank as a topic. What was missing is the format: a drawing, a premise, or a select-all.</p>

${group('Dr. Sikazwe: drawings, schemes and conclusions', 'Drawings are numbered, unnamed Atlas core structures.', q => q.id.startsWith('XS-'))}
${group('Dr. Smith: what each drug binds, and which class', 'Her hint: "know what the drugs target". Select-all lists come from the slides that name the classes.', q => q.id.startsWith('XM-'))}

<p class="intro" style="margin-top:28px">Sources: f26-DEENT-DPAW-mc.pdf (PDF page numbers), the 11/04 lecture transcript, Skin-PCol-Students-2026.pdf, Skin-Pathophys-Students-2026.pdf. Structures: Atlas core entries with verified SMILES. Draft file: src/drafts/q19_exam1_style_DRAFT.js on branch claude/jolly-bell-k7ur5m.</p>
</main>`;
fs.writeFileSync(process.argv[2], html);
console.log('wrote', process.argv[2], html.length);
