import json,sys,subprocess,re
d=sys.argv[1]
subprocess.run(['ffmpeg','-loglevel','error','-y','-i',f'{d}/voice.mp3','-af','atempo=1.1',f'{d}/fast0.wav'],check=True)
o=subprocess.run(['ffmpeg','-i',f'{d}/fast0.wav','-af','silencedetect=noise=-40dB:d=0.05','-f','null','-'],capture_output=True,text=True).stderr
m=re.findall(r'silence_start: ([\d.]+)',o); me=re.findall(r'silence_end: ([\d.]+)',o)
L=0.0
if m and float(m[0])<0.02 and me: L=max(0,float(me[0])-0.03)
subprocess.run(['ffmpeg','-loglevel','error','-y','-i',f'{d}/fast0.wav','-af',f'atrim=start={L},asetpts=PTS-STARTPTS','-c:a','libmp3lame','-b:a','192k',f'{d}/voice_fast.mp3'],check=True)
a=json.load(open(f'{d}/align.json'))
ch,st,en=a['characters'],a['character_start_times_seconds'],a['character_end_times_seconds']
f=lambda t:max(0,t/1.1-L)
sents=[];cur=[];word='';ws=we=None;intag=False
def flush_word():
    global word,ws,we
    if word.strip(): cur.append([word,round(f(ws),3),round(f(we),3)])
    word='';ws=we=None
for c,s,e in zip(ch,st,en):
    if c=='[': intag=True;continue
    if intag:
        if c==']': intag=False
        continue
    if c=='\n':
        flush_word()
        if cur: sents.append(cur);cur=[]
        continue
    if c.isspace(): flush_word();continue
    if ws is None: ws=s
    word+=c;we=e
flush_word()
if cur: sents.append(cur)
T=[{'s':s[0][1],'e':s[-1][2],'w':s} for s in sents]
open(f'{d}/timing.js','w').write('const TIMDATA='+json.dumps(T,ensure_ascii=False)+';')
dur=float(subprocess.run(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',f'{d}/voice_fast.mp3'],capture_output=True,text=True).stdout)
print('lead',L,'dur',dur)
for i,s in enumerate(T): print(i,s['s'],s['e'],' '.join(w[0] for w in s['w']))
