#!/usr/bin/env python3
"""Merge the reviewed Disease-map part files into dz_data.js and copy the cropped
slide photos to ../dz/. Usage: python3 dz_build.py <parts dir> (part_*.json, img/).
The parts are kept in dz_parts/ so the data file can be rebuilt."""
import json, sys, os, glob, shutil
src = sys.argv[1] if len(sys.argv) > 1 else 'dz_parts'
ORDER = ['atopic-dermatitis', 'acne', 'psoriasis', 'diaper-dermatitis', 'dandruff', 'seborrheic-dermatitis', 'cradle-cap',
         'plant-dermatitis', 'insect-bites', 'vector-borne', 'insect-stings', 'lice', 'scabies', 'spider-bites', 'snake-bites', 'rabies',
         'sun-protection', 'sunburn', 'photoaging', 'wounds', 'burns', 'warts', 'corns-calluses',
         'glaucoma', 'allergic-conjunctivitis', 'dry-eye', 'bacterial-viral-conjunctivitis', 'cerumen', 'water-clogged-ear',
         'tooth-sensitivity', 'canker-sore', 'cold-sore', 'dry-mouth']
out = {'cards': [], 'drugs': {}, 'terms': {}, 'tell': [], 'pairs': [], 'photos': [], 'rules': []}
def uniq(a):
    seen, r = set(), []
    for x in a:
        if x not in seen: seen.add(x); r.append(x)
    return r
import re
parts = [json.load(open(f, encoding='utf-8')) for f in sorted(glob.glob(os.path.join(src, 'part_*.json')))]
names = {c['id']: re.sub(r'\s*\(.*?\)', '', c['name']) for p in parts for c in p.get('cards', [])}
count = {}
KEYW = ['atopic', 'acne', 'psoriasis', 'dandruff', 'seborrheic', 'cradle', 'infant', 'wart', 'corn', 'callus', 'sunburn', 'wound', 'burn', 'poison', 'plant', 'insect', 'lice', 'scabies', 'bite', 'sting', 'photoaging', 'sun protection', 'diaper', 'lyme', 'tick']
for p in parts:
    for k in p.get('drugs', {}): count[k] = count.get(k, 0) + 1
def label(d, lines):
    # a drug written by more than one part: say which condition each unlabelled counseling line is for
    tag = ' / '.join(uniq(names.get(r.get('dz'), r.get('dz', '')) for r in (d.get('pa') or [])))
    def has(x):
        m = re.match(r'^([A-Z][^:.]{2,60}): ', x)
        return bool(m) and any(w in m.group(1).lower() for w in KEYW)
    return [x if (not tag or has(x)) else tag + ': ' + x[0].lower() + x[1:] if not re.match(r'^[A-Z]{2}|^[A-Z][a-z]*[A-Z]', x) else tag + ': ' + x for x in (lines or [])]
for p in parts:
    for k, d in p.get('drugs', {}).items():
        if count[k] > 1: d['counsel'] = label(d, d.get('counsel')); d['avoid'] = label(d, d.get('avoid'))
for p in parts:
    out['cards'] += p.get('cards', [])
    out['tell'] += p.get('tell', []); out['pairs'] += p.get('pairs', []); out['photos'] += p.get('photos', [])
    for k, t in p.get('terms', {}).items(): out['terms'].setdefault(k, t)
    for k, d in p.get('drugs', {}).items():
        o = out['drugs'].get(k)
        if not o: out['drugs'][k] = d; continue
        for key in ('sm', 'sk', 'brand'):
            if not o.get(key) and d.get(key): o[key] = d[key]
        # "How it works": the first part's text stands (the parts carry the same text for a shared drug);
        # a part that has a mechanism replaces an explicit none; figures are the union, by jump target
        if d.get('how') and (not o.get('how') or (o['how'].get('none') and not d['how'].get('none'))): o['how'] = d['how']
        seen = {f.get('jump') for f in (o.get('figs') or [])}
        o['figs'] = (o.get('figs') or []) + [f for f in (d.get('figs') or []) if f.get('jump') not in seen]
        o['pa'] = (o.get('pa') or []) + [r for r in (d.get('pa') or []) if r.get('dz') not in {x.get('dz') for x in (o.get('pa') or [])}]
        o['counsel'] = uniq((o.get('counsel') or []) + (d.get('counsel') or []))
        o['avoid'] = uniq((o.get('avoid') or []) + (d.get('avoid') or []))
        if d.get('counselSrc') and d['counselSrc'] not in (o.get('counselSrc') or ''): o['counselSrc'] = '; '.join(x for x in [o.get('counselSrc'), d['counselSrc']] if x)
# Which exam each card is studied for, and its body area (Louis, 2026-11-21: choose what to study for Exam 1, 2 or 3).
# Exam 1 = Smith and Sikazwe, 10/29 to 11/04; Exam 2 = Patel, 11/06 to 11/12; Exam 3 = eye, ear and mouth, 11/13 to 11/20.
EXAMS = {'atopic-dermatitis': [1, 2], 'acne': [1, 2], 'psoriasis': [1, 2], 'diaper-dermatitis': [2], 'dandruff': [1, 2],
         'seborrheic-dermatitis': [1, 2], 'cradle-cap': [2], 'plant-dermatitis': [2], 'insect-bites': [2], 'vector-borne': [2],
         'insect-stings': [2], 'lice': [2], 'scabies': [2], 'spider-bites': [2], 'snake-bites': [2], 'rabies': [2],
         'sun-protection': [1, 2], 'sunburn': [1, 2], 'photoaging': [1, 2], 'wounds': [2], 'burns': [2], 'warts': [1, 2],
         'corns-calluses': [1, 2],
         'glaucoma': [3], 'allergic-conjunctivitis': [3], 'dry-eye': [3], 'bacterial-viral-conjunctivitis': [3],
         'cerumen': [3], 'water-clogged-ear': [3],
         'tooth-sensitivity': [3], 'canker-sore': [3], 'cold-sore': [3], 'dry-mouth': [3]}
AREA = {3: {}}
EYE = {'glaucoma', 'allergic-conjunctivitis', 'dry-eye', 'bacterial-viral-conjunctivitis'}
EAR = {'cerumen', 'water-clogged-ear'}
MOUTH = {'tooth-sensitivity', 'canker-sore', 'cold-sore', 'dry-mouth'}
for c in out['cards']:
    c['exams'] = EXAMS.get(c['id'], [])
    c['area'] = 'eye' if c['id'] in EYE else 'ear' if c['id'] in EAR else 'mouth' if c['id'] in MOUTH else 'skin'
def exams_of(x, origin):
    if origin in ('E', 'F', 'G'): return [3]
    t = (x.get('src') or '') + ' ' + json.dumps(x.get('profs') or [])
    e = set()
    if 'Patel' in t or '"pa"' in t: e.add(2)
    if 'Smith' in t or 'Sikazwe' in t or '"sm"' in t or '"sk"' in t: e.add(1)
    return sorted(e) or [1, 2]
for p, f in zip(parts, sorted(glob.glob(os.path.join(src, 'part_*.json')))):
    o = os.path.basename(f)[5]
    for x in p.get('tell', []) + p.get('pairs', []): x['exams'] = exams_of(x, o)
out['cards'].sort(key=lambda c: ORDER.index(c['id']) if c['id'] in ORDER else 99)
rules = os.path.join(src, 'rules.json')
if os.path.exists(rules): out['rules'] = json.load(open(rules, encoding='utf-8'))
dst = os.path.join('..', 'dz'); os.makedirs(dst, exist_ok=True)
keep = []
for ph in out['photos']:
    a = os.path.join(src, 'img', ph['file'])
    if os.path.exists(a): shutil.copyfile(a, os.path.join(dst, ph['file'])); keep.append(ph)
    else: print('photo file missing, dropped:', ph['id'])
out['photos'] = keep
js = '/* Generated by dz_build.py from dz_parts/ (the Diseases tab; see dz_ui.js). Do not edit by hand. */\nconst DZ = ' + json.dumps(out, ensure_ascii=False, indent=1) + ';\n'
open('dz_data.js', 'w', encoding='utf-8').write(js)
print('cards', len(out['cards']), 'drugs', len(out['drugs']), 'terms', len(out['terms']), 'tell', len(out['tell']), 'pairs', len(out['pairs']), 'photos', len(out['photos']), 'rules', len(out['rules']))
