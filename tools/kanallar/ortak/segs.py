import re,sys,subprocess,json
k=sys.argv[1];V='aeıioöuüâîûAEIİOÖUÜ'
out=subprocess.run(['ffmpeg','-i',f'{k}/audio/voice_fast.mp3','-af','silencedetect=noise=-35dB:d=0.18','-f','null','-'],capture_output=True,text=True).stderr
st=[float(v) for v in re.findall(r'silence_start: ([\d.]+)',out)];en=[float(v) for v in re.findall(r'silence_end: ([\d.]+)',out)]
dur=float(subprocess.run(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',f'{k}/audio/voice_fast.mp3'],capture_output=True,text=True).stdout)
txt=json.load(open(f'{k}/req.json'))['text'];txt=re.sub(r'\[[a-z ]+\]','',txt).replace('"','')
tot=sum(c in V for c in txt);speech=dur-sum(e-s for s,e in zip(st,en));r=tot/speech
segs=[];a=0
for s,e in zip(st,en):segs.append((a,s));a=e
if a<dur-0.1:segs.append((a,dur))
print('rate',round(r,2));acc=0
for a,b in segs:acc+=(b-a)*r;print(f'{a:.2f}-{b:.2f} ~{(b-a)*r:.0f} cum{acc:.0f}')
words=re.sub(r'\s+',' ',txt).split(' ');c=0;line=''
for w in words:
    c+=sum(ch in V for ch in w);line+=w+' '
    if re.search(r'[.,:?!]$',w):print(f'  [{c}] {line}');line=''
