#!/usr/bin/env node
/* ==========================================================================
   NARRATION HASHES, PHAR 4346 DEENT
   --------------------------------------------------------------------------
   The clip hash (SPEC, 2026-11-08): sha256 of the UTF-8 text exactly as stored
   in `text`, hex, first 12 characters. The player plays a recorded clip only
   while audio_manifest.js lists that hash for the clip's key.

     node narration_hash.js            id, hash, chars for every walkthrough part
                                       (gw-<section>-<part 1-based>), every
                                       spoken why (q-<question id>) and every step
                                       of a narrated drawn figure (dn-<DIA key>-
                                       <step 1-based>, DIA_NARR), tab-separated
     node narration_hash.js --json     the same as JSON [{id, hash, chars, file}]
     node narration_hash.js --check    each AUDIO_CLIPS entry against the current
                                       text (stale, unknown key) and its file
                                       (audio/<key>.mp3 at the repository root);
                                       also lists texts with no clip yet.
                                       Exits 1 on a stale or unknown entry or a
                                       missing file.

   Reads walk_*.js, why_data.js, dianarr_*.js (not dianarr_ui/check/test) and
   audio_manifest.js from src/ (each optional).
   ========================================================================== */
const fs = require('fs'), path = require('path'), vm = require('vm'), crypto = require('crypto');
const SRC = __dirname, ROOT = path.join(SRC, '..');
const hash = t => crypto.createHash('sha256').update(String(t), 'utf8').digest('hex').slice(0, 12);

function load() {
  const sb = {console}; vm.createContext(sb);
  const files = fs.readdirSync(SRC).filter(f => /^walk_[a-z0-9]+\.js$/.test(f) && !/^walk_(ui|check|test)\.js$/.test(f)).sort()
    .concat(['why_data.js'].filter(f => fs.existsSync(path.join(SRC, f))))
    .concat(fs.readdirSync(SRC).filter(f => /^dianarr_[a-z0-9]+\.js$/.test(f) && !/^dianarr_(ui|check|test)\.js$/.test(f)).sort())
    .concat(['audio_manifest.js'].filter(f => fs.existsSync(path.join(SRC, f))));
  for (const f of files) vm.runInContext(fs.readFileSync(path.join(SRC, f), 'utf8'), sb, {filename: f});
  const X = vm.runInContext(`({W: typeof WALK_SECTIONS !== 'undefined' ? WALK_SECTIONS : [],
    Y: typeof WHY_AUDIO !== 'undefined' ? WHY_AUDIO : {}, C: typeof AUDIO_CLIPS !== 'undefined' ? AUDIO_CLIPS : {},
    D: typeof DIA_NARR !== 'undefined' ? DIA_NARR : {}})`, sb);
  return {files, W: X.W || [], Y: X.Y || {}, C: X.C || {}, D: X.D || {}};
}
function texts(W, Y, D) {
  const out = [];
  Object.keys(D || {}).forEach(k => ((D[k] || {}).steps || []).forEach((s, i) => out.push({id: `dn-${k}-${i + 1}`, text: (s || {}).text})));
  (W || []).forEach(w => (w.parts || []).forEach((p, i) => out.push({id: `gw-${w.id}-${i + 1}`, text: p.text})));
  Object.keys(Y || {}).forEach(id => out.push({id: `q-${id}`, text: (Y[id] || {}).text}));
  return out.map(x => ({id: x.id, hash: hash(x.text), chars: String(x.text == null ? '' : x.text).length,
                        file: `audio/${x.id}.mp3`, text: x.text}));
}

if (require.main === module) {
  const {W, Y, C, D} = load(), T = texts(W, Y, D);
  const arg = process.argv[2] || '';
  if (arg === '--json') { process.stdout.write(JSON.stringify(T.map(({text, ...r}) => r), null, 1) + '\n'); process.exit(0); }
  if (arg === '--check') {
    const by = Object.fromEntries(T.map(x => [x.id, x])), bad = [];
    let ok = 0;
    for (const [k, c] of Object.entries(C || {})) {
      const t = by[k], f = path.join(ROOT, 'audio', k + '.mp3');
      if (!t) { bad.push(`${k}: listed in audio_manifest.js, but no walkthrough part, spoken why or figure step has this key`); continue; }
      if (!c || c.h !== t.hash) { bad.push(`${k}: stale, recorded from other words (manifest ${c && c.h}, text now ${t.hash}); the device voice reads it`); continue; }
      if (!fs.existsSync(f)) { bad.push(`${k}: hash matches, but audio/${k}.mp3 is not there`); continue; }
      ok++;
    }
    const none = T.filter(x => !(x.id in (C || {})));
    console.log(`${T.length} texts (${T.filter(x => x.id.startsWith('gw-')).length} walkthrough parts, ${T.filter(x => x.id.startsWith('q-')).length} whys, ` +
      `${T.filter(x => x.id.startsWith('dn-')).length} figure steps); ` +
      `${Object.keys(C || {}).length} manifest entries: ${ok} current with their file, ${bad.length} with a problem; ${none.length} texts not recorded (device voice)`);
    bad.forEach(b => console.log('  ' + b));
    process.exit(bad.length ? 1 : 0);
  }
  for (const x of T) console.log(`${x.id}\t${x.hash}\t${x.chars}`);
}
module.exports = {hash, load, texts};
