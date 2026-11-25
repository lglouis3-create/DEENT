/* Checks the foundation items FB-* (q46_lam_found_b.js): one keyed option of four, the 'foundation' tag, a cite naming a slide, option lengths within 2:1, no banned tags, unique ids. */
const fs=require('fs');
global.QUESTIONS={a:[],push(...x){this.a.push(...x)}};
eval(fs.readFileSync(__dirname+'/q46_lam_found_b.js','utf8'));
const Q=QUESTIONS.a; let fail=0;
const bad=(q,m)=>{fail++;console.log('FAIL '+q.id+': '+m)};
const FORBID=['hard','case','two-facts','reasoning','reverse','exam-style','numbers'];
const KIND=['brand','directions','counsel','fact','dose','adverse','class'];
const SKILL=['counsel','class','adverse','dose','tell','patho'];
const TOP={'lr-tooth':0,'lr-ras':0,'lr-hsl':0,'lr-diff':0,'lr-dry':0};
const ids=new Set();
for(const q of Q){
  if(ids.has(q.id)) bad(q,'duplicate id'); ids.add(q.id);
  if(!/^FB-\d{3}$/.test(q.id)) bad(q,'id format');
  if(!q.options||q.options.length!==4) bad(q,'not 4 options');
  else{
    const k=q.options.filter(o=>o.correct).length; if(k!==1) bad(q,k+' keyed options');
    const L=q.options.map(o=>o.t.length); if(Math.max(...L)/Math.min(...L)>2) bad(q,'option lengths '+L.join('/'));
    for(const o of q.options){ if(!o.why||o.why.length<10) bad(q,'missing why'); if(/\b(all|none) of the above\b/i.test(o.t)) bad(q,'all/none of the above'); }
    if(new Set(q.options.map(o=>o.t)).size!==4) bad(q,'duplicate option text');
  }
  if(!(q.tags||[]).includes('foundation')) bad(q,"no 'foundation' tag");
  if(!(q.tags||[]).includes('recall')) bad(q,"no 'recall' tag");
  if(!(q.tags||[]).some(t=>KIND.includes(t))) bad(q,'no kind tag');
  for(const t of q.tags||[]) if(FORBID.includes(t)) bad(q,'forbidden tag '+t);
  if(!SKILL.includes(q.skill)) bad(q,'skill '+q.skill);
  if(!/slides?\s+\d/.test(q.cite||'')||!/\.pdf/.test(q.cite)) bad(q,'cite has no slide');
  if(!q.teach||/\n/.test(q.teach)||(q.teach.match(/\. /g)||[]).length>2) bad(q,'teach is not one fact');
  if(q.stem.length>130) bad(q,'stem long '+q.stem.length);
  if(q.prof!=='Lam'||q.tier!=='new') bad(q,'prof/tier');
  if(q.topic in TOP) TOP[q.topic]++; else bad(q,'topic '+q.topic);
}
console.log('items',Q.length,JSON.stringify(TOP));
console.log(fail?'FAIL '+fail:'PASS found_b_check');
process.exit(fail?1:0);
