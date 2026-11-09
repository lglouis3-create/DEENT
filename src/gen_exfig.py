#!/usr/bin/env python3
"""Build exfig.js (annotated structure figures for the explanations of Dr. Sikazwe's
structure and SAR questions) from exfig_data.json.

    python3 gen_exfig.py            # writes exfig.js
    python3 gen_exfig.py --png DIR  # also writes one PNG per panel (RDKit's Cairo drawer), to look at

exfig_data.json:

    {"templates": {"<name>": "<SMARTS with atom maps = the textbook numbering>"},
     "figs": [{"id", "qids": [...], "title", "caption", "slides": [<DPAW page>, ...],
               "rows"?: [[panel index, ...], ...],
               "panels": [{"key": "<Atlas key>", "name"?, "template"?, "numbers"?: [n, ...],
                           "rings"?: [{"label", "pos": [n, ...]}], "flip"?: "h"|"v", "rotate"?: deg,
                           "auto"?: "hydroxy-acid", "verdict"?: "<text>",
                           "marks": [{"label", "style": "key"|"acid"|"diff"|"pos",
                                      "pos"?: [n, ...], "subst"?: n, "el"?: "O",
                                      "smarts"?: "...", "match"?: k, "all"?: true,
                                      "dir"?: degrees (0 = right, 90 = up), "wedge"?: "beta"|"alpha"}]}]}]}

Every molecule is an Atlas structure (atlas_data.json), drawn from the same SMILES, so it
carries the Atlas's PubChem verification; no new SMILES enter here. Drawings are RDKit SVG
in the Atlas's colour scheme (bonds currentColor, heteroatoms --at-*), and the marks are
drawn from atom indices that the generator resolves from the data: template numbers
(steroid, retinoid numbering by a mapped SMARTS), a SMARTS, or a rule ("hydroxy-acid":
the COOH carbons, their alpha carbons, an OH on an alpha or beta carbon), so the label
sits on exactly the atoms its words name. For the hydroxy-acid rule the verdict printed
under the panel is computed from the same atoms that are marked. Wedge checks: a mark
with "wedge": "beta" must be drawn as a solid wedge (toward the viewer), "alpha" as a
hashed one, or the build stops. exfig_check.js checks the result against the bank.
"""
import json, math, os, re, sys, html
from rdkit import Chem, RDLogger
from rdkit.Chem import rdDepictor
from rdkit.Chem.Draw import rdMolDraw2D
from rdkit.Geometry import Point3D

RDLogger.DisableLog('rdApp.*')
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import gen_atlas as GA                       # colour sentinels and the SVG clean-up of the Atlas

DATA = os.path.join(HERE, 'exfig_data.json')
OUT = os.path.join(HERE, 'exfig.js')
VERIFIED = ('exact', 'exact-pubchem', 'stereo-unspecified', 'tautomer', 'teaching-structure')

_c = lambda r, g, b: (r / 255.0, g / 255.0, b / 255.0)
WASH = {'key': _c(17, 34, 51), 'acid': _c(51, 34, 17), 'diff': _c(34, 51, 17)}
WCSS = {GA.HEX(WASH['key']): 'var(--xf-key)', GA.HEX(WASH['acid']): 'var(--xf-acid)',
        GA.HEX(WASH['diff']): 'var(--xf-diff)'}
BL = 30                                      # bond length in px, a little larger than the Atlas's 24
MARGIN = 46                                  # room around a molecule for its labels
CW, LH = 7.0, 17                             # label character width and box height (11 px, weight 600)


def esc(t):
    return html.escape(str(t), quote=True)


def atlas_items():
    d = json.load(open(os.path.join(HERE, 'atlas_data.json')))
    return {it['key']: it for b in d['boards'] for s in b['sections'] for it in s['items']}


# ---------------------------------------------------------------- resolving marks
def template_map(mol, smarts, name):
    p = Chem.MolFromSmarts(smarts)
    ms = mol.GetSubstructMatches(p, useChirality=False)
    if len(ms) != 1:
        raise ValueError('template %s matches %d times (needs exactly 1)' % (name, len(ms)))
    return {p.GetAtomWithIdx(i).GetAtomMapNum(): a for i, a in enumerate(ms[0]) if p.GetAtomWithIdx(i).GetAtomMapNum()}


def resolve(mol, mk, tmap, where):
    atoms = []
    if 'pos' in mk:
        for n in mk['pos']:
            if n not in tmap:
                raise ValueError('%s: position %s not in the template' % (where, n))
            atoms.append(tmap[n])
    if 'subst' in mk:
        base = tmap[mk['subst']]
        tset = set(tmap.values())
        nb = [a.GetIdx() for a in mol.GetAtomWithIdx(base).GetNeighbors()
              if a.GetIdx() not in tset and (not mk.get('el') or a.GetSymbol() == mk['el'])]
        if len(nb) != 1:
            raise ValueError('%s: substituent on position %s: %d atoms (needs 1)' % (where, mk['subst'], len(nb)))
        atoms.append(nb[0])
        if mk.get('withpos', True):
            atoms.append(base)
    if mk.get('ringatoms'):
        for r in mol.GetRingInfo().AtomRings():
            atoms += list(r)
    if 'smarts' in mk:
        p = Chem.MolFromSmarts(mk['smarts'])
        if p is None:
            raise ValueError('%s: bad SMARTS %s' % (where, mk['smarts']))
        ms = mol.GetSubstructMatches(p)
        if not ms:
            raise ValueError('%s: SMARTS %s matches nothing' % (where, mk['smarts']))
        mapped = [i for i in range(p.GetNumAtoms()) if p.GetAtomWithIdx(i).GetAtomMapNum()]
        pick = lambda m: [m[i] for i in mapped] if mapped else list(m)
        if mk.get('all'):
            for m in ms:
                atoms += pick(m)
        else:
            k = mk.get('match')
            if k is None and len(ms) != 1:
                raise ValueError('%s: SMARTS %s matches %d times; give "match" or "all"' % (where, mk['smarts'], len(ms)))
            atoms += pick(ms[k or 0])
    if not atoms:
        raise ValueError('%s: mark has no atoms' % where)
    seen = []
    for a in atoms:
        if a not in seen:
            seen.append(a)
    return seen


def hydroxy_acid(mol):
    """The rule of slide 44, from the molecule itself: each COOH, the carbon next to its
    carbon (alpha), and an OH on an alpha (or else beta) carbon that is not part of a COOH."""
    acid = mol.GetSubstructMatches(Chem.MolFromSmarts('[CX3](=[OX1])[OX2H1]'))
    acid_atoms = {a for m in acid for a in m}
    oh = lambda c: [n.GetIdx() for n in mol.GetAtomWithIdx(c).GetNeighbors()
                    if n.GetSymbol() == 'O' and n.GetTotalNumHs() == 1 and n.GetIdx() not in acid_atoms]
    alpha, beta, a_oh, b_oh = [], [], [], []
    for m in acid:
        c = m[0]
        for n in mol.GetAtomWithIdx(c).GetNeighbors():
            if n.GetSymbol() == 'C' and n.GetIdx() not in acid_atoms:
                alpha.append(n.GetIdx())
    for c in alpha:
        for o in oh(c):
            a_oh.append((c, o))
    if not a_oh:
        for c in alpha:
            for n in mol.GetAtomWithIdx(c).GetNeighbors():
                if n.GetSymbol() == 'C' and n.GetIdx() not in acid_atoms and n.GetIdx() not in alpha:
                    for o in oh(n.GetIdx()):
                        beta.append(n.GetIdx()); b_oh.append((n.GetIdx(), o))
    any_oh = any(a.GetSymbol() == 'O' and a.GetTotalNumHs() == 1 and a.GetIdx() not in acid_atoms for a in mol.GetAtoms())
    if a_oh:
        verdict, yes = 'OH on an α carbon: alpha-hydroxy acid', True
    elif b_oh:
        verdict, yes = 'OH on the β carbon: beta-hydroxy acid', False
    elif not any_oh:
        verdict, yes = 'no OH: not a hydroxy acid', False
    else:
        verdict, yes = 'OH not on an α or β carbon', False
    marks = []
    for m in acid:
        marks.append({'label': 'COOH', 'style': 'acid', '_atoms': list(m)})
    for c in sorted(set(alpha)):
        marks.append({'label': 'α', 'style': 'pos', '_atoms': [c]})
    for c, o in a_oh:
        marks.append({'label': 'α-OH', 'style': 'key', '_atoms': [o]})
    for c in sorted(set(beta)):
        marks.append({'label': 'β', 'style': 'pos', '_atoms': [c]})
    for c, o in b_oh:
        marks.append({'label': 'β-OH', 'style': 'diff', '_atoms': [o]})
    return marks, verdict, yes, {'acid': [list(m) for m in acid], 'alpha': sorted(set(alpha)),
                                 'alphaOH': [o for c, o in a_oh], 'beta': sorted(set(beta)),
                                 'betaOH': [o for c, o in b_oh]}


# ---------------------------------------------------------------- drawing one panel
_REF = {}


def steroid_ref(templates):
    """Ring-atom coordinates (positions 1-19) of hydrocortisone as coordgen lays it out:
    the textbook orientation, used for every steroid panel."""
    if not _REF:
        m = Chem.MolFromSmiles('C[C@]12CCC(=O)C=C1CC[C@@H]1[C@@H]2[C@@H](O)C[C@@]2(C)[C@H]1CC[C@]2(O)C(=O)CO')
        rdDepictor.SetPreferCoordGen(True)
        rdDepictor.Compute2DCoords(m)
        tm = template_map(m, templates['steroid'], 'steroid')
        c = m.GetConformer()
        for n, a in tm.items():
            q = c.GetAtomPosition(a)
            _REF[n] = (q.x, q.y)
    return _REF


LINE = re.compile(r"<path d='M ([\d.]+),([\d.]+) L ([\d.]+),([\d.]+)' fill='none' stroke='([^']+)' stroke-width='([\d.]+)' />\s*")


def merge_lines(inner):
    """RDKit writes each bond segment as its own path; one path per stroke colour and
    width carries the same lines in a third of the bytes (all bond lines sit above the
    highlights, so their order among themselves does not matter)."""
    runs, order, first = {}, [], None
    for m in LINE.finditer(inner):
        k = (m.group(5), m.group(6))
        if k not in runs:
            runs[k] = []; order.append(k)
        runs[k].append('M%s %sL%s %s' % m.group(1, 2, 3, 4))
        if first is None:
            first = m.start()
    if first is None:
        return inner
    rest = LINE.sub('', inner)
    merged = ''.join("<path d='%s' fill='none' stroke='%s' stroke-width='%s'/>" % (''.join(runs[k]), k[0], k[1]) for k in order)
    pos = len(LINE.sub('', inner[:first]))
    return rest[:pos] + merged + rest[pos:]


def orient(mol, p):
    c = mol.GetConformer()
    n = mol.GetNumAtoms()
    if p.get('level'):
        pts = [c.GetAtomPosition(i) for i in range(n)]
        mx = sum(q.x for q in pts) / n; my = sum(q.y for q in pts) / n
        sxx = sum((q.x - mx) ** 2 for q in pts); syy = sum((q.y - my) ** 2 for q in pts)
        sxy = sum((q.x - mx) * (q.y - my) for q in pts)
        a = -0.5 * math.atan2(2 * sxy, sxx - syy)
        for i, q in enumerate(pts):
            x, y = q.x - mx, q.y - my
            c.SetAtomPosition(i, Point3D(x * math.cos(a) - y * math.sin(a), x * math.sin(a) + y * math.cos(a), 0))
    r = math.radians(p.get('rotate', 0))
    fx = -1 if p.get('flip') == 'h' else 1
    fy = -1 if p.get('flip') == 'v' else 1
    for i in range(n):
        q = c.GetAtomPosition(i)
        x, y = q.x * fx, q.y * fy
        c.SetAtomPosition(i, Point3D(x * math.cos(r) - y * math.sin(r), x * math.sin(r) + y * math.cos(r), 0))


def draw_panel(p, A, templates, where, png_dir=None, bl=None):
    it = A.get(p['key'])
    if not it:
        raise ValueError('%s: %s is not an Atlas key' % (where, p['key']))
    if it.get('verification') not in VERIFIED or not it.get('pubchem_checked'):
        raise ValueError('%s: Atlas item %s carries no PubChem verification' % (where, p['key']))
    if it.get('priority', 'core') != 'core':
        raise ValueError('%s: only core Atlas structures may be used (%s is %s)' % (where, p['key'], it.get('priority')))
    smi = it['smiles']
    mol = Chem.MolFromSmiles(smi)
    if p.get('analysis_smiles'):
        if Chem.MolToSmiles(Chem.MolFromSmiles(p['analysis_smiles'])) != Chem.MolToSmiles(mol):
            raise ValueError('%s: %s differs from the analysis SMILES %s' % (where, p['key'], p['analysis_smiles']))
    rdDepictor.SetPreferCoordGen(True)
    tmap = template_map(mol, templates[p['template']], p['template']) if p.get('template') else {}
    ref = steroid_ref(templates) if p.get('template', '').startswith(('steroid', 'gonane')) else None
    if ref:
        # every steroid ring system drawn in one place and shape (A lower left, D upper right)
        from rdkit.Geometry import Point2D
        cmap = {tmap[n]: Point2D(*ref[n]) for n in tmap if n in ref}
        rdDepictor.SetPreferCoordGen(not p.get('rdkit_layout'))
        rdDepictor.Compute2DCoords(mol, coordMap=cmap)
        rdDepictor.SetPreferCoordGen(True)
    else:
        rdDepictor.Compute2DCoords(mol)
    orient(mol, p)
    marks, verdict, auto = [], p.get('verdict', ''), None
    if p.get('auto') == 'hydroxy-acid':
        am, verdict, yes, info = hydroxy_acid(mol)
        auto = {'yes': yes, **info}
        marks += am
    for k, mk in enumerate(p.get('marks', [])):
        m = dict(mk)
        m['_atoms'] = resolve(mol, mk, tmap, '%s mark %d (%s)' % (where, k, mk.get('label')))
        if 'subst' in mk:                          # the label points at the substituent itself
            m['_anchor'] = [m['_atoms'][0]]
        marks.append(m)
    hl_a, hl_b, ac, bc = [], [], {}, {}
    for m in marks:
        if m['style'] not in WASH:
            continue
        col = WASH[m['style']]
        aset = set(m['_atoms'])
        for a in aset:
            ac[a] = col
            if a not in hl_a:
                hl_a.append(a)
        for b in mol.GetBonds():
            if b.GetBeginAtomIdx() in aset and b.GetEndAtomIdx() in aset:
                bc[b.GetIdx()] = col
                if b.GetIdx() not in hl_b:
                    hl_b.append(b.GetIdx())
    d = rdMolDraw2D.MolDraw2DSVG(-1, -1, -1, -1, True)
    o = d.drawOptions()
    o.fixedBondLength = bl or BL
    o.scalingFactor = bl or BL                     # the flexible canvas scales by this
    o.maxFontSize = 15
    o.clearBackground = False
    o.bondLineWidth = 1.6
    o.minFontSize = 12
    o.padding = 0.02
    o.flagCloseContactsDist = -1
    o.addStereoAnnotation = False
    o.highlightRadius = 0.32
    o.prepareMolsBeforeDrawing = False             # draw the prepared copy below, whose wedges are checked
    o.fillHighlights = True
    o.continuousHighlight = True
    pal = {-1: GA.SENT['bond'], 6: GA.SENT['bond'], 1: GA.SENT['bond']}
    for z, kk in GA.ELEM.items():
        pal[z] = GA.SENT[kk]
    o.updateAtomPalette(pal)
    # wedges are worked out on the drawn coordinates; read them back to check alpha/beta marks
    pm = rdMolDraw2D.PrepareMolForDrawing(mol, addChiralHs=False)   # no H labels in the rings, where the ring letters go
    for m in marks:
        if m.get('wedge'):
            a1, a2 = (tmap[m['subst']], [x for x in m['_atoms'] if x != tmap[m['subst']]][0])
            b = pm.GetBondBetweenAtoms(a1, a2)
            want = Chem.BondDir.BEGINWEDGE if m['wedge'] == 'beta' else Chem.BondDir.BEGINDASH
            if b is None or b.GetBondDir() != want or b.GetBeginAtomIdx() != a1:
                raise ValueError('%s: %s should be drawn as a %s bond from the ring carbon; RDKit drew %s' % (
                    where, m['label'], 'wedged' if m['wedge'] == 'beta' else 'hashed', b and b.GetBondDir()))
    d.DrawMolecule(pm, highlightAtoms=hl_a, highlightBonds=hl_b, highlightAtomColors=ac, highlightBondColors=bc)
    d.FinishDrawing()
    xy = {i: (d.GetDrawCoords(i).x, d.GetDrawCoords(i).y) for i in range(mol.GetNumAtoms())}
    svg = d.GetDrawingText()
    m0 = re.search(r"width='(\d+)px' height='(\d+)px'", svg)
    w, h = int(m0.group(1)), int(m0.group(2))
    inner = svg[svg.index('>', svg.index('<svg')) + 1: svg.rindex('</svg>')]
    inner = re.sub(r'<\?xml[^>]*\?>|<!--.*?-->', '', inner, flags=re.S)
    inner = re.sub(r"<rect[^>]*style='opacity:1.0;fill:#FFFFFF[^>]*>\s*</rect>\s*", '', inner)
    for hexc, css in list(GA.CSS.items()) + list(WCSS.items()):
        inner = inner.replace(hexc, css).replace(hexc.lower(), css)
    left = re.findall(r'#[0-9A-Fa-f]{6}', inner)
    if left:
        raise ValueError('%s: unmapped colour(s) %s' % (where, sorted(set(left))))
    inner = re.sub(r'(\d+\.\d)\d+', r'\1', inner)
    inner = re.sub(r"\s+class='[^']*'", '', inner)
    inner = re.sub(r"style='([^']*)'", GA._short_style, inner)
    inner = re.sub(r'\s*\n\s*', ' ', inner).strip()
    inner = merge_lines(inner)
    if png_dir:
        dc = rdMolDraw2D.MolDraw2DCairo(500, 380)
        dc.DrawMolecule(pm, highlightAtoms=hl_a, highlightBonds=hl_b)
        dc.FinishDrawing()
        open(os.path.join(png_dir, where.replace(' ', '_').replace('/', '_') + '.png'), 'wb').write(dc.GetDrawingText())
    return {'mol': mol, 'svg': inner, 'w': w, 'h': h, 'xy': xy, 'marks': marks, 'tmap': tmap,
            'verdict': verdict, 'auto': auto, 'name': p.get('name') or it['name'], 'smiles': smi}


# ---------------------------------------------------------------- labels
def overlap(a, b):
    return max(0, min(a[2], b[2]) - max(a[0], b[0])) * max(0, min(a[3], b[3]) - max(a[1], b[1]))


def place_labels(P, rings_txt):
    """Each label box goes where it covers the fewest atoms and other labels, near its
    atoms and as close to the preferred side (away from the molecule) as it can."""
    xy = P['xy']
    cx = sum(x for x, y in xy.values()) / len(xy); cy = sum(y for x, y in xy.values()) / len(xy)
    mol = P['mol']
    obstacles = []
    for a in mol.GetAtoms():
        x, y = xy[a.GetIdx()]
        if a.GetSymbol() == 'C':
            obstacles.append((x - 7, y - 7, x + 7, y + 7))
        else:                                      # its letters (O, OH, NH2, ...) take room
            hw = 7 + 6 * (a.GetTotalNumHs() > 0) + 4 * (a.GetTotalNumHs() > 1)
            obstacles.append((x - hw, y - 9, x + hw, y + 9))
    for b in mol.GetBonds():                       # bond midpoints and quarter points
        (x1, y1), (x2, y2) = xy[b.GetBeginAtomIdx()], xy[b.GetEndAtomIdx()]
        for t in (0.25, 0.5, 0.75):
            x, y = x1 + (x2 - x1) * t, y1 + (y2 - y1) * t
            obstacles.append((x - 4, y - 4, x + 4, y + 4))
    placed = list(rings_txt)
    out = []
    for m in P['marks']:
        pts = [xy[a] for a in (m.get('_anchor') or m['_atoms'])]
        ax = sum(p[0] for p in pts) / len(pts); ay = sum(p[1] for p in pts) / len(pts)
        tw = len(m['label']) * CW + (10 if m['style'] != 'pos' else 4)
        th = LH if m['style'] != 'pos' else 14
        if 'dir' in m:
            pref = math.radians(m['dir'])
        else:
            pref = math.atan2(-(ay - cy), ax - cx) if (abs(ax - cx) + abs(ay - cy)) > 1 else math.pi / 2
        best = None
        rad = max(math.hypot(p[0] - ax, p[1] - ay) for p in pts)
        dists = (13, 18, 24) if m['style'] == 'pos' else (rad + 18, rad + 26, rad + 36, rad + 48)
        for dist in dists:
            for k in range(24):
                ang = pref + math.radians(15 * ((k + 1) // 2) * (1 if k % 2 else -1))
                lx = ax + math.cos(ang) * dist; ly = ay - math.sin(ang) * dist
                box = (lx - tw / 2, ly - th / 2, lx + tw / 2, ly + th / 2)
                own = [o for o in obstacles]
                score = sum(overlap(box, o) for o in own) * 3 + sum(overlap(box, q) for q in placed) * 8
                score += abs(((ang - pref + math.pi) % (2 * math.pi)) - math.pi) * 6 + dist * 0.6
                if best is None or score < best[0]:
                    best = (score, lx, ly, box)
        _, lx, ly, box = best
        placed.append(box)
        out.append({'m': m, 'x': lx, 'y': ly, 'box': box, 'ax': ax, 'ay': ay, 'tw': tw, 'th': th})
    return out


def ring_labels(P, rings, auto=None):
    xy, tm = P['xy'], P['tmap']
    out = []
    if auto:                                       # every ring, labelled left to right as drawn
        rs = sorted(P['mol'].GetRingInfo().AtomRings(), key=lambda r: sum(xy[a][0] for a in r) / len(r))
        if len(rs) != len(auto):
            raise ValueError('ring_auto gives %d labels for %d rings' % (len(auto), len(rs)))
        rings = [{'label': t, '_atoms': list(r)} for t, r in zip(auto, rs)]
    for r in rings or []:
        pts = [xy[a] for a in r['_atoms']] if '_atoms' in r else [xy[tm[n]] for n in r['pos']]
        x = sum(p[0] for p in pts) / len(pts); y = sum(p[1] for p in pts) / len(pts)
        out.append({'t': r['label'], 'x': x, 'y': y, 'box': (x - 7, y - 9, x + 7, y + 9)})
    return out


def number_labels(P, nums):
    """Each number beside its atom, on the free side: of 16 directions the one whose
    small box covers the fewest atoms, bonds and numbers already placed."""
    xy, tm, mol = P['xy'], P['tmap'], P['mol']
    obs = []
    for a in mol.GetAtoms():
        x, y = xy[a.GetIdx()]
        obs.append((x - 5, y - 5, x + 5, y + 5) if a.GetSymbol() == 'C' else (x - 10, y - 9, x + 10, y + 9))
    for b in mol.GetBonds():
        (x1, y1), (x2, y2) = xy[b.GetBeginAtomIdx()], xy[b.GetEndAtomIdx()]
        for t in (0.2, 0.35, 0.5, 0.65, 0.8):
            x, y = x1 + (x2 - x1) * t, y1 + (y2 - y1) * t
            obs.append((x - 3, y - 3, x + 3, y + 3))
    out = []
    for n in nums or []:
        a = tm[n]
        x, y = xy[a]
        nb = [xy[x2.GetIdx()] for x2 in mol.GetAtomWithIdx(a).GetNeighbors()]
        vx = sum(x - p[0] for p in nb); vy = sum(y - p[1] for p in nb)
        pref = math.atan2(vy, vx) if math.hypot(vx, vy) > 0.5 else -math.pi / 2
        hw = 3 + 2.6 * len(str(n))
        best = None
        for k in range(16):
            ang = pref + math.radians(22.5 * ((k + 1) // 2) * (1 if k % 2 else -1))
            for dist in (11, 14):
                cx, cy = x + math.cos(ang) * dist, y + math.sin(ang) * dist
                box = (cx - hw, cy - 5, cx + hw, cy + 5)
                sc = sum(overlap(box, o) for o in obs) * 3 + sum(overlap(box, q['box']) for q in out) * 6 + k * 0.4 + dist * 0.2
                if best is None or sc < best[0]:
                    best = (sc, cx, cy, box)
        out.append({'t': str(n), 'x': best[1], 'y': best[2] + 3, 'box': best[3]})
    return out


def panel_svg(P, p):
    rings = ring_labels(P, p.get('rings'), p.get('ring_auto'))
    labs = place_labels(P, [r['box'] for r in rings])
    nums = number_labels(P, p.get('numbers'))
    xs = [0, P['w']] + [l['box'][0] for l in labs] + [l['box'][2] for l in labs] + [n['x'] - 6 for n in nums] + [n['x'] + 6 for n in nums]
    ys = [0, P['h']] + [l['box'][1] for l in labs] + [l['box'][3] for l in labs] + [n['y'] - 10 for n in nums] + [n['y'] + 3 for n in nums]
    x0, x1, y0, y1 = min(xs) - 4, max(xs) + 4, min(ys) - 4, max(ys) + 4
    g = []
    g.append(P['svg'])
    for r in rings:
        g.append('<text class="xr" x="%.1f" y="%.1f" text-anchor="middle">%s</text>' % (r['x'], r['y'] + 5, esc(r['t'])))
    for n in nums:
        g.append('<text class="xn" x="%.1f" y="%.1f" text-anchor="middle">%s</text>' % (n['x'], n['y'], esc(n['t'])))
    for l in labs:
        m = l['m']
        if m['style'] == 'pos':
            for a in m['_atoms']:
                x, y = P['xy'][a]
                g.append('<circle class="xc" cx="%.1f" cy="%.1f" r="9"/>' % (x, y))
        bx = l['box']
        # leader: from the edge of the atoms' area to the nearest point of the box
        nx = min(max(l['ax'], bx[0]), bx[2]); ny = min(max(l['ay'], bx[1]), bx[3])
        dd = math.hypot(nx - l['ax'], ny - l['ay'])
        if m['style'] != 'pos' and dd > 12:
            sx = l['ax'] + (nx - l['ax']) * 9 / dd; sy = l['ay'] + (ny - l['ay']) * 9 / dd
            g.append('<path class="xld" d="M%.1f %.1fL%.1f %.1f"/>' % (sx, sy, nx, ny))
        if m['style'] != 'pos':
            g.append('<rect class="xb %s" x="%.1f" y="%.1f" width="%.1f" height="%.1f" rx="3"/>' % (
                m['style'], bx[0], bx[1], bx[2] - bx[0], bx[3] - bx[1]))
        g.append('<text class="xl%s" x="%.1f" y="%.1f" text-anchor="middle">%s</text>' % (
            ' xp' if m['style'] == 'pos' else '', l['x'], l['y'] + 4, esc(m['label'])))
    return ''.join(g), (x0, y0, x1, y1), labs


def wrap(t, n):
    words, lines, cur = t.split(), [], ''
    for w in words:
        if cur and len(cur) + 1 + len(w) > n:
            lines.append(cur); cur = w
        else:
            cur = (cur + ' ' + w).strip()
    if cur:
        lines.append(cur)
    return lines


def figure(F, A, templates, png_dir=None):
    built = []
    for i, p in enumerate(F['panels']):
        P = draw_panel(p, A, templates, '%s panel %d' % (F['id'], i + 1), png_dir, p.get('bl') or F.get('bl'))
        if F.get('yesno') and P['auto']:
            P['verdict'] = ('Yes: ' if P['auto']['yes'] else 'No: ') + P['verdict']
        body, bb, labs = panel_svg(P, p)
        bw, bh = bb[2] - bb[0], bb[3] - bb[1]
        cw = max(bw, len(P['name']) * 6.4 + 8, 90)
        vlines = wrap(P['verdict'], max(18, int(cw / 6.2))) if P['verdict'] else []
        built.append({'P': P, 'p': p, 'body': body, 'bb': bb, 'w': cw, 'h': 18 + bh + 4 + 15 * len(vlines), 'v': vlines, 'labs': labs})
    rows = F.get('rows') or [list(range(len(built)))]
    if sorted(i for r in rows for i in r) != list(range(len(built))):
        raise ValueError('%s: rows must list every panel once' % F['id'])
    GAP, PAD = 22, 6
    rw = [sum(built[i]['w'] for i in r) + GAP * (len(r) - 1) for r in rows]
    W = max(rw) + 2 * PAD
    out, y = [], PAD
    for r, wr in zip(rows, rw):
        x = PAD + (W - 2 * PAD - wr) / 2
        rh = max(built[i]['h'] for i in r)
        for i in r:
            b = built[i]
            bx0, by0, bx1, by1 = b['bb']
            ox = x + (b['w'] - (bx1 - bx0)) / 2 - bx0
            out.append('<g class="xpanel" data-panel="%d">' % i)
            out.append('<text class="xt" x="%.1f" y="%.1f" text-anchor="middle">%s</text>' % (x + b['w'] / 2, y + 12, esc(b['P']['name'])))
            out.append('<g transform="translate(%.1f,%.1f)">%s</g>' % (ox, y + 18 - by0, b['body']))
            vy = y + 18 + (by1 - by0) + 4
            for k, line in enumerate(b['v']):
                out.append('<text class="xv%s" x="%.1f" y="%.1f" text-anchor="middle">%s</text>' % (
                    ' yes' if (b['P']['auto'] or {}).get('yes') else '', x + b['w'] / 2, vy + 11 + 15 * k, esc(line)))
            out.append('</g>')
            x += b['w'] + GAP
        y += rh + GAP
    H = y - GAP + PAD
    W, H = int(math.ceil(W)), int(math.ceil(H))
    alt = F['title'] + '. ' + '; '.join(
        '%s: %s%s' % (b['P']['name'], ', '.join(l['m']['label'] for l in b['labs']) or 'no marks',
                      (' (' + b['P']['verdict'] + ')') if b['P']['verdict'] else '') for b in built)
    svg = ('<svg class="xf" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %d %d" width="%d" height="%d" role="img" aria-label="%s">%s</svg>'
           % (W, H, W, H, esc(alt), ''.join(out)))
    panels = []
    for b in built:
        P = b['P']
        panels.append({'key': b['p']['key'], 'name': P['name'], 'smiles': P['smiles'], 'verdict': P['verdict'],
                       'n': P['mol'].GetNumAtoms(),
                       'marks': [{'label': m['label'], 'style': m['style'], 'atoms': m['_atoms'], 'src': m.get('src', '')} for m in P['marks']],
                       'numbers': b['p'].get('numbers', []), 'rings': [r['label'] for r in b['p'].get('rings', [])] + list(b['p'].get('ring_auto', [])),
                       'el': [a.GetSymbol() for a in P['mol'].GetAtoms()]})
        if P['auto']:
            mol = P['mol']
            panels[-1]['auto'] = P['auto']
            panels[-1]['graph'] = {'el': [a.GetSymbol() for a in mol.GetAtoms()],
                                   'h': [a.GetTotalNumHs() for a in mol.GetAtoms()],
                                   'bonds': [[b2.GetBeginAtomIdx(), b2.GetEndAtomIdx(), b2.GetBondTypeAsDouble()] for b2 in mol.GetBonds()]}
    return {'qids': F['qids'], 'title': F['title'], 'caption': F['caption'], 'slides': F['slides'],
            'w': W, 'h': H, 'svg': svg, 'panels': panels}


def main():
    data = json.load(open(DATA))
    A = atlas_items()
    png_dir = sys.argv[sys.argv.index('--png') + 1] if '--png' in sys.argv else None
    if png_dir:
        os.makedirs(png_dir, exist_ok=True)
    figs, byq, errs = {}, {}, []
    for F in data['figs']:
        if F['id'] in figs:
            raise ValueError('duplicate figure id ' + F['id'])
        try:
            figs[F['id']] = figure(F, A, data.get('templates', {}), png_dir)
        except ValueError as e:
            errs.append(str(e)); continue
        for q in F['qids']:
            if q in byq:
                raise ValueError('%s has two figures (%s, %s)' % (q, byq[q], F['id']))
            byq[q] = F['id']
    if errs:
        sys.exit('gen_exfig.py: nothing written:\n  ' + '\n  '.join(errs))
    js = ('/* Annotated structure figures for the explanations of Dr. Sikazwe\'s structure and SAR\n'
          '   questions (PHAR 4346 DEENT). GENERATED by gen_exfig.py from exfig_data.json and the\n'
          '   Atlas SMILES (atlas_data.json): edit those and rerun; do not edit this file by hand.\n'
          '   exfig_ui.js shows them after an answer; exfig_check.js checks them. */\n'
          'const EXFIG_DATA = %s;\n') % json.dumps({'figs': figs, 'byQ': byq}, ensure_ascii=False, separators=(',', ':'))
    open(OUT, 'w').write(js)
    print('wrote exfig.js: %d figures for %d questions (%d KB)' % (len(figs), len(byq), len(js) // 1024))


if __name__ == '__main__':
    main()
