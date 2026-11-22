#!/usr/bin/env python3
"""likely_map.py: writes likely_map.js (LIKELY_MAP) from likely_map_source.json.

The source file holds, for each starred target of the reading tabs, the level
(1 likely, 2 solid, 3 strong), the combined score and the evidence quotes found
by the 2026-11-15 analysis (the lecture transcripts themselves are not in the
repository). The "why" line shown when a reader taps a star is one verbatim
sentence of one of those quotes, with the professor and the date in front. A
target with no transcript quote (guide blocks, a few rows and terms) says which
practice questions rest on it instead; nothing is invented.

    python3 likely_map.py            (writes likely_map.js)
    python3 likely_map.py --report   (prints every why line)
"""
import json, re, sys, os

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = json.load(open(os.path.join(HERE, 'likely_map_source.json')))
LEC = SRC['meta']['lecture']

# source key (question evidence) -> words for a target that has no quote
QSRC = {
    'lam-q': "her own practice questions", 'lam-q2': "her own cases and polls", 'lam-ex3': "she said it would be tested", 'lam-ex3b': "she said it would be tested",
    'sik-q-ooo': "his own practice questions", 'sik-ex3': "a point he stressed", 'smith-hint-ex3': "her Exam 3 study hints", 'smith-ex3': "her Exam 3 remarks",
    'smith-obj-eye': "her learning objectives", 'smith-eye-cue': "a point she stressed", 'smith-eye-room': "a question she put to the room",
    'patel-poll': "her in-class poll", 'patel-cue': "a point she stressed", 'patel-obj': "her learning objectives",
    'patel-room': "a question she put to the room", 'smith-hints': "her Exam 1 hints", 'smith-cue': "a point she stressed",
    'smith-poll': "her in-class poll", 'smith-recall': "a recalled exam question", 'smith-obj-pp': "her learning objectives",
    'smith-obj-pc': "her learning objectives", 'smith-obj-sun': "her learning objectives", 'smith-room': "a question she put to the room",
    'sik-poll': "his in-class poll", 'sik-cue': "a point he stressed", 'sik-room': "a question he put to the room",
}
WHO = {'lam': 'Dr. Lam', 'patel': 'Dr. Patel', 'smith': 'Dr. Smith', 'sik': 'Dr. Sikazwe'}

# cue words: (weight, pattern). A sentence is used only when it carries one.
CUES = [
    (5, r"on the (exam|test)|exam question|test you|be tested|will be tested|ask (you|about)|I will always tell you"),
    (4, r"\bhint\b|need to know|have to know|memorize|make sure|I want you|pay attention|big thing|you will need"),
    (3, r"focus on|don't forget|do not forget|remember|calculation"),
]
# Dr. Smith's eye lectures (Exam 3, 11/13 and 11/17; added 2026-11-18): her cue words are not the ones above, and the
# quotes of those two lectures are scored with these in addition. Other lectures are scored exactly as before.
EYE_LECS = ('M1113', 'M1117')
EYE_CUES = [
    (5, r"always like scary|picky|focus on pathophys|5 questions"),
    (4, r"be sure|I need you|pay special attention|carefully monitored|significant (side effect|problem)|important counseling|really important|most important|know that"),
    (3, r"importantly|a little scary|understand"),
]
# classroom logistics are never evidence
LOGI = re.compile(r"\b(Friday|Monday|Tuesday|Wednesday|Thursday|[ap]\.m\.|office hours|e-?mail|canvas|zoom|break|lunch|coffee|restroom|bathroom|attendance|grades?|sorry|microphone|review session|exam review)\b", re.I)
FILLER = re.compile(r"^(OK|Okay|So|Um|Uh|And|All right|Alright|Right|Yeah)[.,]?\s+", re.I)


def clean(s):
    s = s.strip()
    for _ in range(3):
        n = FILLER.sub('', s, count=1)
        if n == s:
            break
        s = n
    return s  # verbatim: the case as spoken


def parse_quote(q):
    m = re.match(r'^([A-Z0-9]+)@([^:]*):\s*"(.*)"\s*$', q, re.S)
    if not m:
        return None
    return m.group(1), m.group(2), m.group(3)


def sentences(text):
    """complete sentences of a quote; the first and last pieces are cut mid-word and are dropped
    unless they end or begin at a boundary"""
    parts = re.split(r'(?<=[.?!])\s+', text.strip())
    out = []
    for i, p in enumerate(parts):
        if i == 0 and not re.match(r'^[A-Z"\']', p):
            continue
        if i == len(parts) - 1 and not re.search(r'[.?!]["\']?$', p):
            continue
        out.append(p)
    return out


def score(sentence, lec=None):
    best = 0
    for w, pat in CUES + (EYE_CUES if lec in EYE_LECS else []):
        if re.search(pat, sentence, re.I):
            best = max(best, w)
    return best


def trim(s, limit=130):
    s = s.strip()
    if len(s) <= limit:
        return s
    cut = s[:limit]
    for sep in (', ', '; ', ' - '):
        i = cut.rfind(sep)
        if i > 50:
            return cut[:i] + '…'
    i = cut.rfind(' ')
    return cut[:i] + '…'


def stems(text):
    out = set()
    for w in re.findall(r"[A-Za-z0-9\u00C0-\u024F\u03B1-\u03C9]+", text):
        w = w.lower()
        out.add(w[:6] if len(w) >= 7 else w)
    return out


TEXT_KINDS = ('guide', 'guideBlock', 'reference', 'tell')


def best_snippet(quotes, kw, need, near=False):
    """the best cue sentence among the quote windows that share at least `need` of the target's keywords"""
    best = None
    for q in quotes:
        p = parse_quote(q)
        if not p:
            continue
        lec, loc, text = p
        if need and len(stems(text) & set(kw or [])) < need:
            continue
        raw = re.split(r'(?<=[.?!])\s+', text.strip())
        for s in sentences(text):
            c = clean(s)
            if len(c) < 25 or LOGI.search(c) or re.search(r'\d{6,}', c):
                continue
            if near:
                i = raw.index(s)
                ctx = ' '.join(raw[max(0, i - 1):i + 2])
                if not (stems(ctx) & set(kw or [])):
                    continue
            sc = score(c, lec)
            if sc == 0:
                continue
            key = (sc, -abs(len(c) - 80))
            if best is None or key > best[0]:
                best = (key, lec, c)
    return best


def why_for(e, tab):
    kw = e.get('kw')
    need = 0 if e.get('manual') else (2 if tab in TEXT_KINDS else 1)
    b = best_snippet(e.get('quotes') or [], kw, need, near=(tab not in TEXT_KINDS and not e.get('manual')))
    if b:
        _, lec, snip = b
        prof, date = LEC[lec]
        snip = trim(snip)
        return {'why': f'{prof} {date}: “{snip}”', 'kind': 'quote'}
    # no transcript quote: the practice questions that rest on it
    ev = e.get('ev') or []
    kinds = [x.split(':')[1] for x in ev if ':' in x]
    if kinds:
        k = kinds[0]
        who = WHO.get(k.split('-')[0], 'The professor')
        n = e.get('qStars') or len(ev)
        extra = f'; {n} starred practice question{"s use" if n != 1 else " uses"} it' if n else ''
        return {'why': f"{who} flagged it ({QSRC.get(k, 'in class')}){extra}.", 'kind': 'questions'}
    n = e.get('qStars') or 0
    if n:
        return {'why': f'Used in {n} starred practice question{"s" if n != 1 else ""} on points the professors stressed.', 'kind': 'questions'}
    return {'why': 'The professors stressed this in lecture.', 'kind': 'general'}


def main():
    out = {}
    rep = []
    for tab, items in SRC['tabs'].items():
        out[tab] = {}
        for id_, e in items.items():
            w = why_for(e, tab)
            out[tab][id_] = {'lv': e['lv'], 'why': w['why']}
            rep.append((tab, id_, e['lv'], w['kind'], w['why']))
    js = ("/* LIKELY_MAP: which reading-tab items the professors stressed (generated by likely_map.py from\n"
          "   likely_map_source.json; do not edit by hand). lv 1 likely, 2 solid, 3 strong; why = the evidence. */\n"
          "const LIKELY_MAP = " + json.dumps(out, ensure_ascii=False, separators=(',', ':')).replace('</', '<\\/') + ";\n")
    if '--report' in sys.argv:
        for r in rep:
            print(r[0], r[1], r[2], r[3], r[4], sep=' | ')
        return
    open(os.path.join(HERE, 'likely_map.js'), 'w', encoding='utf8').write(js)
    kinds = {}
    for r in rep:
        kinds[r[3]] = kinds.get(r[3], 0) + 1
    print('wrote likely_map.js', {t: len(v) for t, v in out.items()}, kinds)


if __name__ == '__main__':
    main()
