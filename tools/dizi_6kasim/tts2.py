import json,sys,base64,urllib.request,time,subprocess,os
# usage: tts2.py dir voice nparts [scriptfile] [outprefix]
d,voice,np_=sys.argv[1],sys.argv[2],int(sys.argv[3])
sf=sys.argv[4] if len(sys.argv)>4 else 'script.txt'
pre=sys.argv[5] if len(sys.argv)>5 else 'voice'
key=open('/home/claude/work/.el_key').read().strip()
lines=[l for l in open(f'{d}/{sf}').read().strip().split('\n') if l.strip()]
k=len(lines);parts=[lines[i*k//np_:(i+1)*k//np_] for i in range(np_)]
def call(text):
    body=json.dumps({"text":text,"model_id":"eleven_v4"}).encode()
    for attempt in range(7):
        req=urllib.request.Request(f"https://api.elevenlabs.io/v1/text-to-speech/{voice}/with-timestamps?output_format=mp3_44100_128",data=body,headers={"xi-api-key":key,"Content-Type":"application/json"})
        try:
            r=urllib.request.urlopen(req,timeout=300);return json.load(r)
        except urllib.error.HTTPError as e:
            msg=e.read()[:300];print('HTTP',e.code,msg,flush=True)
            if e.code==429: time.sleep(20);continue
            raise SystemExit('FATAL '+str(e.code))
    raise SystemExit('FATAL retries')
CH,ST,EN=[],[],[];off=0.0;wavs=[]
for i,p in enumerate(parts):
    j=call('\n'.join(p))
    mp=f'{d}/{pre}_p{i}.mp3';open(mp,'wb').write(base64.b64decode(j['audio_base64']))
    wv=f'{d}/{pre}_p{i}.wav';subprocess.run(['ffmpeg','-loglevel','error','-y','-i',mp,'-ar','44100','-ac','1',wv],check=True)
    dur=float(subprocess.run(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',wv],capture_output=True,text=True).stdout)
    a=j['alignment'];CH+=a['characters'];ST+=[s+off for s in a['character_start_times_seconds']];EN+=[e+off for e in a['character_end_times_seconds']]
    CH.append('\n');ST.append(off+dur);EN.append(off+dur)
    off+=dur;wavs.append(wv);print('part',i,dur,flush=True)
open(f'{d}/{pre}_list.txt','w').write('\n'.join(f"file '{os.path.basename(w)}'" for w in wavs))
subprocess.run(['ffmpeg','-loglevel','error','-y','-f','concat','-safe','0','-i',f'{d}/{pre}_list.txt','-c:a','libmp3lame','-b:a','192k',f'{d}/{pre}.mp3'],check=True)
json.dump({'characters':CH,'character_start_times_seconds':ST,'character_end_times_seconds':EN},open(f'{d}/{pre}_align.json','w'),ensure_ascii=False)
print('total',off)
