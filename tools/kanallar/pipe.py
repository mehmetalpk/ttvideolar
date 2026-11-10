#!/usr/bin/env python3
"""Video pipeline. usage: pipe.py <dir> <kanal> <step...>
steps: tts fast align build prev render mux all
<dir>/script.txt : one phrase per line; blank line = paragraph; optional 'spoken || caption'
<dir>/scenes.js.txt : shot(a,b,f) calls
<dir>/prev.json : optional [[scene,t],...] ; <dir>/dums.json optional
"""
import sys, os, json, re, subprocess, base64, time, urllib.request, urllib.error
D = os.path.abspath(sys.argv[1]); K = sys.argv[2]; STEPS = sys.argv[3:]
R = '/home/claude/ttvideolar/tools/kanallar'
WM = {'kriminal': '@kriminalhikayeler', 'hayatsal': '@hayatsalhikayeler', 'islamik': '@islamikhikayeler', 'osmanlisal': '@osmanlisalhikayeler',
      'psikolojik': '@psikolojikhikayeler', 'parasal': '@parasalhikayeler', 'sanatsal': '@sanatsal.hikayeler', 'sporsal': '@sporsalhikayeler',
      'motivasyonel': '@motivasyonelhikayeler', 'yemeksel': '@yemekselhikayeler'}
EMR, IREM, ISMET = 'QftNgZhlSOYKrYbk7WR7', 'R0D8QjgVyRju4HRoCrIC', 'dCYGxgtXZ2SWEwZrYmkc'
VOICE = {'psikolojik': IREM, 'motivasyonel': ISMET, 'parasal': ISMET}
# kanal başına ek js parçaları (ortak/ altında), plus.js her zaman eklenir
EXTRA = {'psikolojik': ['psi'], 'parasal': ['para', 'mot'], 'sanatsal': ['san', 'art2'], 'sporsal': ['spor'],
         'motivasyonel': ['mot'], 'yemeksel': ['yem', 'yem2'], 'kriminal': [], 'islamik': [], 'hayatsal': [], 'osmanlisal': []}
ATEMPO = 1.2  # URETIM.md (10 Kas 2026)
KEYS = ['/home/claude/work/.el_key', '/home/claude/.el_key']
TAG = re.compile(r'\[[^\]]*\]\s*')
def sh(c, **kw): return subprocess.run(c, shell=True, check=True, capture_output=True, text=True, **kw)
def rd(p): return open(p, encoding='utf-8').read()

def phrases():
    paras, cur = [], []
    for ln in rd(f'{D}/script.txt').splitlines():
        ln = ln.strip()
        if not ln:
            if cur: paras.append(cur); cur = []
            continue
        sp, _, cap = ln.partition('||')
        sp = sp.strip(); cap = cap.strip() or TAG.sub('', sp).strip()
        cur.append((sp, cap))
    if cur: paras.append(cur)
    return paras

def tts_text(): return '\n\n'.join(' '.join(s for s, _ in p) for p in phrases())

def tts():
    if os.path.exists(f'{D}/voice.mp3'): return
    key = open(next(k for k in KEYS if os.path.exists(k))).read().strip()
    text = tts_text()
    json.dump({'text': text, 'model_id': 'eleven_v4'}, open(f'{D}/req.json', 'w'), ensure_ascii=False)
    body = json.dumps({'text': text, 'model_id': 'eleven_v4'}).encode()
    quota_hits = 0
    for attempt in range(6):
        r = urllib.request.Request('https://api.elevenlabs.io/v1/text-to-speech/' + VOICE.get(K, EMR) + '/with-timestamps?output_format=mp3_44100_128', data=body, headers={'xi-api-key': key, 'Content-Type': 'application/json'})
        try:
            d = json.load(urllib.request.urlopen(r, timeout=300)); break
        except urllib.error.HTTPError as e:
            msg = e.read()[:400].decode('utf-8', 'ignore'); print('HTTP', e.code, msg)
            if e.code in (401, 402) or 'quota' in msg.lower() or 'credit' in msg.lower():
                quota_hits += 1
                if quota_hits >= 2: sys.exit(3)
            time.sleep(20)
        except Exception as e:
            print('ERR', e); time.sleep(20)
    else:
        sys.exit(3)
    open(f'{D}/voice.mp3', 'wb').write(base64.b64decode(d['audio_base64']))
    json.dump({'text': text, 'alignment': d['alignment']}, open(f'{D}/align.json', 'w'), ensure_ascii=False)

def dur(p): return float(sh(f'ffprobe -v error -show_entries format=duration -of csv=p=0 "{p}"').stdout)

def fast():
    out = sh(f'ffmpeg -i "{D}/voice.mp3" -af silencedetect=noise=-40dB:d=0.05 -f null - ').stderr
    m = re.findall(r'silence_start: ([\d.]+)', out); e = re.findall(r'silence_end: ([\d.]+)', out)
    L = float(e[0]) if m and float(m[0]) < 0.02 and e else 0.0
    sh(f'ffmpeg -y -i "{D}/voice.mp3" -af "silenceremove=start_periods=1:start_threshold=-40dB,atempo={ATEMPO}" -b:a 192k "{D}/voice_fast.mp3"')
    json.dump({'lead': L}, open(f'{D}/lead.json', 'w'))

def align():
    a = json.load(open(f'{D}/align.json')); L = json.load(open(f'{D}/lead.json'))['lead']
    chars = a['alignment']['characters']; st = a['alignment']['character_start_times_seconds']
    text = ''.join(chars)
    out = sh(f'ffmpeg -i "{D}/voice_fast.mp3" -af silencedetect=noise=-35dB:d=0.18 -f null - ').stderr
    seg_starts = [0.0] + [float(v) for v in re.findall(r'silence_end: ([\d.]+)', out)]
    PH = []; pos = 0
    for p in phrases():
        for sp, cap in p:
            body = TAG.sub('', sp).strip()
            i = text.find(body[:12], pos)
            if i < 0: raise SystemExit(f'not found: {body}')
            pos = i + max(12, int(len(body) * 0.8))
            t = max(0.0, (st[i] - L) / ATEMPO)
            near = [s for s in seg_starts if abs(s - t) < 0.3]
            if near: t = min(near, key=lambda s: abs(s - t))
            t = max(0.0, t - 0.06)
            PH.append([round(t, 2), cap])
    PH[0][0] = 0
    end = dur(f'{D}/voice_fast.mp3') + 0.5
    PH.append([round(end, 2), ''])
    for i in range(1, len(PH)):
        if PH[i][0] <= PH[i-1][0] + 0.3: PH[i][0] = round(PH[i-1][0] + 0.3, 2)
    open(f'{D}/shots.js.txt', 'w').write('const PH=' + json.dumps(PH, ensure_ascii=False) + ';\n')
    for i, (t, c) in enumerate(PH): print(i, t, c)

def build():
    wm = WM[K]
    common = rd(f'{R}/ortak/common.js.txt').replace('@islamikhikayeler', wm).replace('@KANAL', wm)
    parts = [rd(f'{R}/ortak/head.js.txt'), rd(f'{R}/ortak/helpers.txt'), rd(f'{D}/shots.js.txt')]
    if K == 'osmanlisal':
        common = '\n'.join(l for l in common.splitlines() if not l.startswith('const VOW') and not l.startswith('const CAP'))
        osm = rd(f'{R}/osmanlisal/osm_common.js.txt').replace('%PH%', '')
        osm = re.sub(r'const SPOKEN=\{[^}]*\};', 'const SPOKEN=' + (rd(f'{D}/spoken.json').strip() if os.path.exists(f'{D}/spoken.json') else '{}') + ';', osm)
        parts += [common, osm, rd(f'{R}/osmanlisal/osm_extra.js.txt')]
    else:
        parts += [common]
    parts += [rd(f'{R}/ortak/extra.js.txt'), rd(f'{R}/ortak/bio.js.txt'), rd(f'{R}/ortak/krim.js.txt'), rd(f'{R}/ortak/plus.js.txt')] + [rd(f'{R}/ortak/{e}.js.txt') for e in EXTRA.get(K, [])] + [rd(f'{R}/ortak/outro.js.txt'), (f'const PART={rd(D+"/part.txt").strip()};' if os.path.exists(f'{D}/part.txt') else 'const PART=0;'), rd(f'{D}/scenes.js.txt')]
    tail = """
window.SCENES=S.map(s=>s.d);window.G0=S.map(s=>s.g0);
window.draw=function(i,t){x.setTransform(1,0,0,1,0,0);x.globalAlpha=1;x.setLineDash([]);x.lineCap='round';S[i].f(t);karaoke(S[i].g0+t);watermark();if(PART)partBadge(PART);};
window.frame=function(i,t){draw(i,t);return c.toDataURL('image/jpeg',0.92).split(',')[1]};
</script></body></html>
"""
    open(f'{D}/anim.html', 'w').write('\n'.join(parts) + tail)

PREV_JS = r"""
const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});const errs=[];
p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
await p.goto('file://'+process.argv[2]+'/anim.html');await p.evaluate(()=>document.fonts.ready);
const info=await p.evaluate(()=>({d:SCENES,g:G0,T:T,n:S.length}));fs.writeFileSync(process.argv[2]+'/scenes.json',JSON.stringify(info));
let shots=JSON.parse(process.argv[3]);if(!shots.length){shots=info.d.map((d,i)=>[i,Math.min(d*0.6,1.6)]);shots.unshift([0,0]);}
for(const [i,t] of shots){try{const d=await p.evaluate(([i,t])=>frame(i,t),[i,t]);fs.writeFileSync(`${process.argv[2]}/prev/p_${String(i).padStart(2,'0')}_${t}.jpg`,Buffer.from(d,'base64'));}catch(e){errs.push('scene '+i+': '+e.message)}}
// error sweep across all scenes
for(let i=0;i<info.n;i++){for(const f of [0,0.5,1]){try{await p.evaluate(([i,t])=>{draw(i,t)},[i,info.d[i]*f*0.999])}catch(e){errs.push('scene '+i+' t'+f+': '+e.message)}}}
console.log(JSON.stringify({errs,scenes:info.n,total:info.g[info.n-1]+info.d[info.n-1],T:info.T[info.T.length-1],g:info.g,d:info.d}));await b.close();})();
"""

def prev():
    os.makedirs(f'{D}/prev', exist_ok=True); sh(f'rm -f {D}/prev/*.jpg')
    open(f'{D}/prev.js', 'w').write(PREV_JS)
    shots = rd(f'{D}/prev.json') if os.path.exists(f'{D}/prev.json') else '[]'
    r = sh(f"cd {D} && node prev.js {D} '{shots}'")
    info = json.loads(r.stdout.strip().splitlines()[-1])
    g, d = info['g'], info['d']
    gaps = [i for i in range(1, len(g)) if abs(g[i] - (g[i-1] + d[i-1])) > 0.01]
    print('errors:', [e.split(chr(10))[0] for e in info['errs']][:12]); print('scenes', info['scenes'], 'total', round(info['total'], 2), 'T', info['T'], 'gaps', gaps, 'start', g[0])
    from PIL import Image
    fs = sorted(os.listdir(f'{D}/prev')); n = len(fs); cols = 6; rows = (n + cols - 1) // cols
    sheet = Image.new('RGB', (cols * 270, rows * 480), 'gray')
    for k, f in enumerate(fs):
        im = Image.open(f'{D}/prev/{f}').resize((270, 480)); sheet.paste(im, ((k % cols) * 270, (k // cols) * 480))
    sheet.save(f'{D}/contact.jpg', quality=80)

def render():
    os.makedirs(f'{D}/out', exist_ok=True); sh(f'rm -f {D}/out/*')
    subprocess.run(f'cd {D} && ANIM=file://{D}/anim.html node /home/claude/ttvideolar/tools/render.js > render.log 2>&1', shell=True, check=True)
    if 'ERR' in rd(f'{D}/render.log'): print(rd(f'{D}/render.log')[:500])

def mux(name='final.mp4'):
    sh(f'cd {D} && ffmpeg -y -f concat -safe 0 -i out/list.txt -i voice_fast.mp3 -map 0:v -map 1:a -c:v copy -c:a aac -b:a 192k -shortest {name}')
    print('final', round(dur(f'{D}/{name}'), 2), 's', os.path.getsize(f'{D}/{name}') // 1024 // 1024, 'MB')

steps = {'tts': tts, 'fast': fast, 'align': align, 'build': build, 'prev': prev, 'render': render, 'mux': mux}
for s in (['tts', 'fast', 'align'] if STEPS == ['audio'] else STEPS):
    steps[s]()
