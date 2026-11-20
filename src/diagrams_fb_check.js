#!/usr/bin/env node
/* diagrams_fb_check.js: the three figures of diagrams_fb.js (ey-dryeye, lg-eyelid, oo-eye-entry), in a real browser.
   Needs the built preview (python3 build.py --preview) and Playwright (NODE_PATH=$(npm root -g)).
   Per step: every shape has a unique data-k, no transform attribute, no colour written into the markup, opacity only as
   attribute; every text is >= 11 rendered units; no text box overlaps another text box; every text/shape lies inside the
   360 wide panel above the caption; the caption is at most three lines and ends with its source; no empty horizontal band
   taller than 40 units between the title and the caption; one Purpose line; step counts and panel heights; key facts drawn. */
const {chromium} = require('playwright'); const path = require('path');
const PLAN = {'ey-dryeye': {steps: 4, h: 376, words: ['Lifitegrast','LFA-1','ICAM-1','cyclophilin','calcineurin','IL-2','Loteprednol','Varenicline','trigeminal','Aqueous layer','Lipid layer','Mucin layer','DRY EYE']},
  'lg-eyelid': {steps: 5, h: 366, words: ['Wash your hands','touches nothing','pocket','do not squeeze or rub','1–2 minutes','nasolacrimal drainage','systemic absorption','Lacrimal sac','Nasolacrimal','Canaliculi']},
  'oo-eye-entry': {steps: 4, h: 350, words: ['under 10% of the dose','over 50% of the dose','small, lipophilic drugs','large, hydrophilic drugs','lipid / water / lipid','Ocular bioavailability','Aqueous','esterase, CYP enzymes']}};
let fails = 0, passes = 0; const check = (ok, w, d) => { if (ok) passes++; else { fails++; console.log('FAIL: ' + w + (d ? ' (' + d + ')' : '')); } };
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({viewport: {width: 390, height: 900}});
  await p.goto('file://' + path.join(__dirname, '..', 'preview', 'index.html')); await p.waitForTimeout(400);
  for (const [k, plan] of Object.entries(PLAN)) {
    const html = await p.evaluate(k => DIA[k], k);
    check(typeof html === 'string', k + ' in DIA');
    check(/^<figure class="fig[^"]*"><p class="dnpurpose"><b>Purpose\.<\/b> (Shows|Compares|Builds) [^<]*, so you can [^<]*\.<\/p>/.test(html) && (html.match(/dnpurpose/g) || []).length === 1, k + ': one Purpose line');
    check(new RegExp('viewBox="0 0 360 ' + plan.h + '"').test(html), k + ': panel 360 x ' + plan.h);
    check(!/(fill|stroke)="#|(fill|stroke)="(rgb|hsl)|style="[^"]*(#[0-9a-f]{3}|rgb\()/i.test(html.replace(/<figcaption>[\s\S]*?<\/figcaption>/, '')), k + ': no colour in markup');
    check(!/<(linearGradient|radialGradient|filter)/.test(html), k + ': no gradient or filter');
    check(!/\btransform=/.test(html), k + ': no transform attribute');
    check(/<figcaption>[\s\S]*slides? \d[\s\S]*<\/figcaption>/.test(html) && /T@\d/.test(html.match(/<figcaption>([\s\S]*?)<\/figcaption>/)[1]), k + ': figcaption names slides and a transcript place');
    await p.evaluate(k => { const v = document.getElementById('v-topics'); v.innerHTML = DIA[k]; v.classList.remove('hide'); document.querySelectorAll('section.view,main>section').forEach(s => { if (s.id !== 'v-topics') s.classList.add('hide'); }); }, k);
    const r = await p.evaluate(() => {
      const out = []; const svg = document.querySelector('#v-topics .fig svg'); const vb = svg.viewBox.baseVal; const scale = svg.getBoundingClientRect().width / vb.width;
      document.querySelectorAll('#v-topics .fig .st').forEach((g, i) => {
        g.style.display = 'block'; const rec = {i, keys: [], dup: [], op: [], small: [], out: [], ov: [], cap: 0, capEnd: '', gap: 0, drawn: ''};
        const seen = new Set(); const texts = [];
        g.querySelectorAll('*').forEach(el => {
          const dk = el.getAttribute('data-k'); const capt = el.classList.contains('capt');
          if (!capt) { if (dk == null) rec.keys.push(el.tagName); else if (seen.has(dk)) rec.dup.push(dk); else seen.add(dk); }
          if (el.getAttribute('style') && /opacity/.test(el.getAttribute('style'))) rec.op.push(dk);
          if (el.tagName === 'text' && !capt) {
            const fs = parseFloat(getComputedStyle(el).fontSize) / scale; if (fs < 10.99) rec.small.push(el.textContent + ' ' + fs.toFixed(1));
            const bb = el.getBBox(); texts.push([bb.x, bb.y, bb.x + bb.width, bb.y + bb.height, el.textContent]); rec.drawn += el.textContent + ' | ';
          }
        });
        const capEls = [...g.querySelectorAll('text.capt')]; const lines = capEls.filter(e => e.classList.contains('fb-cap'));
        rec.cap = lines.length; rec.capEnd = lines.length ? lines[lines.length - 1].textContent : ''; const capTop = Math.min(...capEls.map(e => e.getBBox().y));
        capEls.forEach(e => { const bb = e.getBBox(); if (bb.x + bb.width > vb.width - 2) rec.out.push('cap:' + e.textContent.slice(0, 20)); });
        for (let a = 0; a < texts.length; a++) { const A = texts[a]; if (A[0] < 1 || A[2] > vb.width - 1 || A[3] > capTop) rec.out.push(A[4]);
          for (let c = a + 1; c < texts.length; c++) { const B = texts[c]; if (Math.min(A[2], B[2]) - Math.max(A[0], B[0]) > 1 && Math.min(A[3], B[3]) - Math.max(A[1], B[1]) > 4) rec.ov.push(A[4] + ' / ' + B[4]); } }
        /* empty band: rows of 4 units between y 20 and the caption with no painted element */
        const els = [...g.querySelectorAll('[data-k]')].filter(e => !e.classList.contains('capt') && e.tagName !== 'g').map(e => { const bb = e.getBBox(); return [bb.y, bb.y + bb.height]; });
        let y = 20, worst = 0, run = 0; for (; y < capTop; y += 2) { const hit = els.some(([a, c]) => a <= y + 2 && c >= y); if (hit) run = 0; else { run += 2; worst = Math.max(worst, run); } } rec.gap = worst;
        g.style.display = ''; out.push(rec);
      });
      return out;
    });
    check(r.length === plan.steps, k + ': ' + plan.steps + ' steps', r.length);
    const sdots = await p.evaluate(() => document.querySelectorAll('#v-topics .fig .sdot').length); check(sdots === plan.steps, k + ': one dot per step');
    let all = '';
    for (const s of r) {
      const n = k + ' step ' + (s.i + 1); all += s.drawn;
      check(!s.keys.length, n + ': every shape has a data-k', s.keys.slice(0, 3).join()); check(!s.dup.length, n + ': data-k unique', s.dup.join());
      check(!s.op.length, n + ': opacity as attribute'); check(!s.small.length, n + ': text >= 11 units', s.small.join('; '));
      check(!s.out.length, n + ': inside the panel above the caption', s.out.join('; ')); check(!s.ov.length, n + ': no two texts overlap', s.ov.join('; '));
      check(s.cap >= 1 && s.cap <= 3 && /\)\.?$/.test(s.capEnd), n + ': caption in three lines or fewer and ends with its source', s.cap + ' ' + s.capEnd);
      check(s.gap <= 40, n + ': no empty band over 40 units', s.gap);
    }
    for (const w of plan.words) check(all.includes(w), k + ': "' + w + '" drawn');
  }
  await b.close();
  console.log((fails ? 'FAIL' : 'PASS') + ': diagrams_fb_check.js: ' + passes + ' passed, ' + fails + ' failed'); process.exit(fails ? 1 : 0);
})();
