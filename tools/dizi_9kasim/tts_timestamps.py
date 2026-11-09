import sys,os,json,re,base64,time,urllib.request,urllib.error,subprocess
D=sys.argv[1];VOICE=sys.argv[2]
TAG=re.compile(r'\[[^\]]*\]\s*')
key=open('/home/claude/work/.el_key').read().strip()
def call(text,out):
    body=json.dumps({'text':text,'model_id':'eleven_v4'}).encode()
    for a in range(6):
        r=urllib.request.Request(f'https://api.elevenlabs.io/v1/text-to-speech/{VOICE}/with-timestamps?output_format=mp3_44100_128',data=body,headers={'xi-api-key':key,'Content-Type':'application/json'})
        try:
            d=json.load(urllib.request.urlopen(r,timeout=300));break
        except urllib.error.HTTPError as e:
            msg=e.read()[:300].decode('utf-8','ignore');print('HTTP',e.code,msg,flush=True)
            if e.code in(401,402) or 'quota' in msg.lower() or 'credit' in msg.lower(): sys.exit(3)
            time.sleep(20)
    else: sys.exit(4)
    open(out,'wb').write(base64.b64decode(d['audio_base64']));return d['alignment']
def dur(p): return float(subprocess.run(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',p],capture_output=True,text=True).stdout)
lines=[l.strip() for l in open(f'{D}/script.txt',encoding='utf-8') if l.strip()]
mode=sys.argv[3] if len(sys.argv)>3 else 'story'
if mode=='outro':
    call(sys.argv[4],f'{D}/outro_raw.mp3')
    subprocess.run(f'ffmpeg -loglevel error -y -i {D}/outro_raw.mp3 -af "silenceremove=start_periods=1:start_threshold=-40dB,areverse,silenceremove=start_periods=1:start_threshold=-40dB,areverse,atempo=1.1,volume=-5dB" -ar 44100 -ac 1 {D}/outro.wav',shell=True,check=True);print('outro',dur(f'{D}/outro.wav'));sys.exit()
half=len(lines)//2
parts=[lines[:half],lines[half:]]
chars=[];st=[];en=[];off=0;wavs=[]
for k,pl in enumerate(parts):
    al=call('\n'.join(pl),f'{D}/p{k}.mp3')
    subprocess.run(f'ffmpeg -loglevel error -y -i {D}/p{k}.mp3 -ar 44100 -ac 1 {D}/p{k}.wav',shell=True,check=True)
    chars+=al['characters']+['\n'];st+=[t+off for t in al['character_start_times_seconds']]+[off];en+=[t+off for t in al['character_end_times_seconds']]+[off]
    off+=dur(f'{D}/p{k}.wav');time.sleep(1)
open(f'{D}/list.txt','w').write('file p0.wav\nfile p1.wav\n')
subprocess.run(f'ffmpeg -loglevel error -y -f concat -safe 0 -i {D}/list.txt {D}/voice.wav',shell=True,check=True)
o=subprocess.run(f'ffmpeg -i {D}/voice.wav -af silencedetect=noise=-40dB:d=0.05 -f null -',shell=True,capture_output=True,text=True).stderr
m=re.findall(r'silence_start: ([\d.]+)',o);e=re.findall(r'silence_end: ([\d.]+)',o)
L=float(e[0]) if m and float(m[0])<0.02 and e else 0.0
subprocess.run(f'ffmpeg -loglevel error -y -i {D}/voice.wav -af "silenceremove=start_periods=1:start_threshold=-40dB,atempo=1.1" -ar 44100 {D}/voice_fast.wav',shell=True,check=True)
text=''.join(chars);pos=0;TIM=[]
for ln in lines:
    cap=TAG.sub('',ln).strip();ws=[]
    for w in cap.split():
        core=re.sub(r'^[^\wçğıöşüÇĞİÖŞÜ]+|[^\wçğıöşüÇĞİÖŞÜ]+$','',w) or w
        i=text.find(core,pos)
        if i<0 or i-pos>200: print('miss',w);i=pos
        j=i+len(core)-1;pos=j+1
        s=max(0,(st[i]-L)/1.1);ee=max(s+0.05,(en[j]-L)/1.1)
        ws.append([w,round(s,3),round(ee,3)])
    TIM.append({'s':ws[0][1],'e':ws[-1][2],'w':ws})
open(f'{D}/timing.js','w').write('const TIMDATA='+json.dumps(TIM,ensure_ascii=False)+';')
print('lead',L,'dur',dur(f'{D}/voice_fast.wav'))
for i,t in enumerate(TIM): print(i,t['s'],t['e'],' '.join(w[0] for w in t['w'])[:60])
