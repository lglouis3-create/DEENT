/* Checks src/q50_found_sikazwe.js: one keyed option, four options, 'foundation' tag, no hard-level tag, an assigned-slide cite,
   option lengths within 2:1, a why on every option, ids FK-001 on, no absolute words in wrong options. */
const fs=require('fs'), path=require('path');
const QS=[]; new Function('QUESTIONS', fs.readFileSync(path.join(__dirname,'q50_found_sikazwe.js'),'utf8'))(QS);
// assigned slides (his emailed lists): Exam 3 deck pages, Exam 1 deck pages
const OOO=new Set([5,6,7,8,15,16,17,18,19,20,21,27,28,29,30,31,...Array.from({length:16},(_,i)=>33+i),65,66,67,68]);
const DPAW=new Set([7,8,9,12,15,16,17,18,19,20,21,22,23,25,26,27,28,29,30,31,32,33,34,43,44,45,46,47,48,49,50,51,52,53,54,55,61,62,63,64,65,66]);
const BAD=['hard','case','two-facts','reasoning','reverse','exam-style','numbers'];
const KIND=['class','chem','fact','mechanism','metabolism'];
const ABS=/\b(all|none|always|never|only|every|any)\b/i;
let pass=0, fail=0; const bad=[];
const ok=(c,m)=>{ if(c) pass++; else { fail++; bad.push(m); } };
const ids=new Set();
function pages(cite){ // "slide 5", "slides 33–34", "slides 49–51"
  const m=cite.match(/slides? ([0-9–, ]+?)(?:;|$)/); if(!m) return [];
  const out=[]; for(const part of m[1].split(',')){ const r=part.trim().split('–').map(Number);
    if(r.length===2) for(let p=r[0];p<=r[1];p++) out.push(p); else if(!isNaN(r[0])) out.push(r[0]); } return out; }
QS.forEach((q,i)=>{
  const w=q.id;
  ok(/^FK-\d{3}$/.test(q.id) && !ids.has(q.id), w+' id');
  ids.add(q.id);
  ok(q.prof==='Sikazwe' && q.tier==='new', w+' prof/tier');
  ok((q.options||[]).length===4, w+' four options');
  ok((q.options||[]).filter(o=>o.correct).length===1, w+' one keyed option');
  ok((q.options||[]).every(o=>o.why&&o.why.length>10), w+' every option has a why');
  ok(q.teach&&q.teach.length>20, w+' teach');
  ok(q.tags.includes('foundation')&&q.tags.includes('recall'), w+' foundation+recall tags');
  ok(!q.tags.some(t=>BAD.includes(t)), w+' no hard-level tag');
  ok(q.tags.filter(t=>KIND.includes(t)).length===1, w+' one kind tag');
  ok(q.stem.length<=125 && !/\n/.test(q.stem), w+' stem one sentence, <=125 chars ('+q.stem.length+')');
  const L=q.options.map(o=>o.t.length); ok(Math.max(...L)<=2*Math.min(...L), w+' option lengths within 2:1 ('+L.join('/')+')');
  ok(q.options.every(o=>!/none of the above|all of the above/i.test(o.t)), w+' no all/none of the above');
  ok(q.options.filter(o=>!o.correct).every(o=>!ABS.test(o.t)), w+' no absolute word in wrong options');
  const sorted=[...L].sort((a,b)=>b-a); const kl=L[q.options.findIndex(o=>o.correct)];
  ok(!(kl===sorted[0] && kl>sorted[1]*1.3), w+' key is not the longest by more than 30% ('+L.join('/')+')');
  const set=/Sikazwe_OOO_mc\.pdf/.test(q.cite)?OOO:/f26-DEENT-DPAW-mc\.pdf/.test(q.cite)?DPAW:null;
  const pg=pages(q.cite);
  ok(set&&pg.length&&pg.every(p=>set.has(p)), w+' cite on assigned slides only ('+q.cite+')');
  ok(!q.image&&!q.fg&&!q.cmp, w+' no image');
});
console.log(bad.join('\n'));
console.log(`found_sikazwe_check: ${QS.length} items, ${pass} checks passed, ${fail} failed`);
process.exit(fail?1:0);
