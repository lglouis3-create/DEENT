#!/usr/bin/env python3
"""Render the slide images the walkthrough player shows (PHAR 4346 DEENT).

    python3 render_slides.py                     every slide WALK_SECTIONS names
    python3 render_slides.py --inventory F.tsv   also every page F marks NARRATE or BRIEF
    python3 render_slides.py --only mc-20 ...    just these

Writes slides/<deck>-<NN>.jpg at the repository root (NN = the PDF page, two
digits), 1280 px wide, JPEG quality 70, from Louis's annotated copies in
src/decks/ (Louis, 2026-11-08: "just upload the slides with the annotations").
The root page and /preview/ both load them from there (walk_ui.js).

REDACT whites out handwritten text that is not slide content or a study note
(a classmate's name and a joke on DPAW p. 20), so a re-render cannot bring it
back. Every rendered image is looked at before it is committed (plan 7.3).
"""
import json, os, subprocess, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
DECKS = {'pp': 'Skin-Pathophys-Students-2026.pdf', 'pc': 'Skin-PCol-Students-2026.pdf',
         'sun': 'DEENT_Sun_Exposure_2026.pdf', 'mc': 'f26-DEENT-DPAW-mc.pdf'}
# boxes in pixels of the 1280-wide image: (left, top, right, bottom)
REDACT = {'mc-20': [(20, 258, 258, 415), (258, 385, 286, 404)]}


def walk_slides():
    js = ("const fs=require('fs'),vm=require('vm'),p=require('path');const sb={};vm.createContext(sb);"
          "for(const f of fs.readdirSync('.').filter(f=>/^walk_[a-z0-9]+\\.js$/.test(f)&&!/^walk_(ui|check|test)\\.js$/.test(f)))"
          "vm.runInContext(fs.readFileSync(f,'utf8'),sb);"
          "const W=vm.runInContext('typeof WALK_SECTIONS!==\"undefined\"?WALK_SECTIONS:[]',sb);"
          "process.stdout.write(JSON.stringify([...new Set(W.flatMap(w=>(w.parts||[]).map(x=>x.slide).filter(Boolean)))]))")
    r = subprocess.run(['node', '-e', js], cwd=HERE, capture_output=True, text=True)
    if r.returncode:
        sys.exit('could not read the walkthrough files:\n' + r.stderr)
    return json.loads(r.stdout)


def main():
    a = sys.argv[1:]
    if '--only' in a:
        want = a[a.index('--only') + 1:]
    else:
        want = walk_slides()
        if '--inventory' in a:
            for line in open(a[a.index('--inventory') + 1], encoding='utf-8').read().splitlines()[1:]:
                c = line.split('\t')
                if len(c) > 4 and c[4] in ('NARRATE', 'BRIEF'):
                    want.append(f'{c[0]}-{int(c[1]):02d}')
    want = sorted(set(want))
    out = os.path.join(ROOT, 'slides')
    os.makedirs(out, exist_ok=True)
    for s in want:
        d, n = s.split('-')
        pdf = os.path.join(HERE, 'decks', DECKS[d])
        dest = os.path.join(out, s)
        subprocess.run(['pdftoppm', '-jpeg', '-jpegopt', 'quality=70', '-scale-to-x', '1280', '-scale-to-y', '-1',
                        '-f', str(int(n)), '-l', str(int(n)), '-singlefile', pdf, dest],
                       check=True, stderr=subprocess.DEVNULL)
        if s in REDACT:
            from PIL import Image, ImageDraw
            im = Image.open(dest + '.jpg')
            dr = ImageDraw.Draw(im)
            for box in REDACT[s]:
                dr.rectangle(box, fill='white')
            im.save(dest + '.jpg', quality=70)
    print(f'{len(want)} slides in slides/')


if __name__ == '__main__':
    main()
