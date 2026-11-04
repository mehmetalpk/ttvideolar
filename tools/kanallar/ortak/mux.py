import json,re,sys,subprocess
k=sys.argv[1];dk=json.loads(sys.argv[2])
ph=json.loads(open(f'{k}/shots.js.txt').read().split('=',1)[1].rstrip().rstrip(';'))
sh=[(int(a),int(b)) for a,b in re.findall(r'^shot\((\d+),(\d+)',open(f'{k}/scenes.js.txt').read(),re.M)]
T=[ph[a][0] for a,b in sh]+[ph[-1][0]]
subprocess.run(['python3','../osm2/sfx.py',json.dumps(T),json.dumps([ph[i][0] for i in dk]),f'{k}/audio/sfx.wav','0.8'],check=True)
subprocess.run(f'cd {k} && ffmpeg -loglevel error -y -f concat -safe 0 -i out/list.txt -i audio/voice_fast.mp3 -i audio/sfx.wav -filter_complex "[1:a]apad[v];[2:a]volume=0.6[s];[v][s]amix=inputs=2:normalize=0:duration=first[a]" -map 0:v -map "[a]" -c:v copy -c:a aac -b:a 192k -shortest parasal_{k}.mp4',shell=True,check=True)
