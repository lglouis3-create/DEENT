#!/usr/bin/env python3
"""American spelling in the text students read (Louis, 2026-11-13: "It should say practice, this is America").
Usage: python3 us_spelling.py <src dir> [--write]
Content files: only text is changed, never ids, concept names, keys, jump targets, file names or code.
"grey" is left as it is: it quotes Dr. Patel's slides. aria-labelledby is an HTML attribute and is left."""
import re, sys, json, os, glob, collections

MAP = {
 'practise': 'practice', 'practised': 'practiced', 'practises': 'practices', 'practising': 'practicing',
 'recognise': 'recognize', 'recognised': 'recognized', 'recognises': 'recognizes', 'recognising': 'recognizing',
 'labelled': 'labeled', 'labelling': 'labeling',
 'colour': 'color', 'colours': 'colors', 'coloured': 'colored', 'colouring': 'coloring',
 'centre': 'center', 'centres': 'centers', 'centred': 'centered',
 'neighbouring': 'neighboring', 'neighbour': 'neighbor', 'neighbours': 'neighbors',
 'ageing': 'aging',
 'hydrolyse': 'hydrolyze', 'hydrolysed': 'hydrolyzed', 'hydrolyses': 'hydrolyzes', 'hydrolysing': 'hydrolyzing',
 'favour': 'favor', 'favours': 'favors', 'favoured': 'favored',
 'enrol': 'enroll', 'defence': 'defense', 'travellers': 'travelers', 'traveller': 'traveler',
 'behaviour': 'behavior', 'behaviours': 'behaviors',
 'signalling': 'signaling', 'signalled': 'signaled',
}
PAT = re.compile(r'(?<![A-Za-z-])(' + '|'.join(sorted(MAP, key=len, reverse=True)) + r')(?![A-Za-z])', re.I)
count = collections.Counter()

def case(src, dst):
    if src.isupper(): return dst.upper()
    if src[0].isupper(): return dst[0].upper() + dst[1:]
    return dst

def fix_text(t, where):
    def r(m):
        w = m.group(1)
        # attribute names and compound identifiers are not prose
        tail = t[m.end():m.end() + 2]
        if w.lower() == 'labelled' and t[m.end():m.end() + 2].lower() == 'by': return w
        count[(where, w.lower())] += 1
        return case(w, MAP[w.lower()])
    return PAT.sub(r, t)

def fix_marks(t, where):
    # keep the key of [[key|text]] and <<key|text>> as it is; fix only the shown text
    parts = re.split(r'(\[\[[a-z0-9-]+\||<<[a-z0-9-]+\|)', t)
    return ''.join(p if i % 2 else fix_text(p, where) for i, p in enumerate(parts))

SKIP_KEYS = {'id', 'jump', 'file', 'dz', 'k', 'p', 'group', 'key'}
def walk(o, where, parent=None):
    if isinstance(o, dict):
        out = {}
        for k, v in o.items():
            nk = fix_marks(k, where) if parent == 'x' else k            # practice-patient why-not lines are keyed by the option text
            out[nk] = v if k in SKIP_KEYS or k in ('topics', 'drugs', 'profs') and isinstance(v, list) and parent != '__root__' else walk(v, where, k)
        return out
    if isinstance(o, list): return [walk(x, where, parent) for x in o]
    if isinstance(o, str): return fix_marks(o, where)
    return o

def main():
    src = sys.argv[1]; write = '--write' in sys.argv
    # 1. Diseases part files (JSON): every text value; drug and term KEYS stay
    for f in sorted(glob.glob(os.path.join(src, 'dz_parts', 'part_*.json'))) + [os.path.join(src, 'dz_parts', 'rules.json')]:
        d = json.load(open(f, encoding='utf-8')); name = os.path.basename(f)
        if isinstance(d, list): new = walk(d, name)
        else:
            new = dict(d)
            for sec in ('cards', 'tell', 'pairs', 'photos'): new[sec] = walk(d.get(sec, []), name)
            new['drugs'] = {k: walk(v, name) for k, v in d.get('drugs', {}).items()}
            new['terms'] = {k: walk(v, name) for k, v in d.get('terms', {}).items()}
        if write: json.dump(new, open(f, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    # 2. question files: text lines only (never the id / concept line)
    for f in sorted(glob.glob(os.path.join(src, 'q*.js'))):
        name = os.path.basename(f); lines = open(f, encoding='utf-8').read().split('\n'); out = []
        for ln in lines:
            s = ln.lstrip()
            if s.startswith('{id:') or 'concept:' in ln or s.startswith('tags:') or s.startswith('//') and False: out.append(ln)
            elif re.match(r"(stem|teach|why|quote|note|cite|accept)\s*:", s) or s.startswith('{t:') or s.startswith("why:"): out.append(fix_text(ln, name))
            else: out.append(ln)
        if write: open(f, 'w', encoding='utf-8').write('\n'.join(out))
    # 3. prose files: whole file
    for name in ('CHANGELOG.md', 'reference.js', 'tell.js', 'why_data.js', 'walk_pp.js', 'walk_pc.js', 'walk_sun.js', 'walk_mc.js', 'walk_rd.js', 'likely_data.js', 'drugfacts.js', 'druglist_data.js', 'glossary.js'):
        f = os.path.join(src, name)
        if not os.path.exists(f): continue
        t = open(f, encoding='utf-8').read(); new = fix_text(t, name)
        if write and new != t: open(f, 'w', encoding='utf-8').write(new)
    for (w, k), n in sorted(count.items()): print(f'{w:28s} {k:14s} {n}')
    print('total', sum(count.values()), '(written)' if write else '(dry run)')

main()
