import json,sys,base64,urllib.request,time
d,voice=sys.argv[1],sys.argv[2]
key=open('/home/claude/work/.el_key').read().strip()
text=open(f'{d}/script.txt').read().strip()
body=json.dumps({"text":text,"model_id":"eleven_v4"}).encode()
for attempt in range(2):
    req=urllib.request.Request(f"https://api.elevenlabs.io/v1/text-to-speech/{voice}/with-timestamps?output_format=mp3_44100_128",data=body,headers={"xi-api-key":key,"Content-Type":"application/json"})
    try:
        r=urllib.request.urlopen(req,timeout=300);j=json.load(r)
        open(f'{d}/voice.mp3','wb').write(base64.b64decode(j['audio_base64']))
        json.dump(j.get('alignment'),open(f'{d}/align.json','w'),ensure_ascii=False)
        print('ok',len(j['audio_base64']));break
    except urllib.error.HTTPError as e:
        print('HTTP',e.code,e.read()[:300]);time.sleep(5)
