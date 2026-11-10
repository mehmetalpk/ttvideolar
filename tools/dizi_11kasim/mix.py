import sys,json,subprocess
d,off,tail=sys.argv[1],float(sys.argv[2]),float(sys.argv[3])  # off: added after last sentence end for outro start
T=json.loads(open(f'{d}/timing.js').read()[len('const TIMDATA='):-1])
oa=T[-1]['e']+off
od=float(subprocess.run(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',f'{d}/outro_fast.wav'],capture_output=True,text=True).stdout)
end=oa+tail
subprocess.run(['ffmpeg','-loglevel','error','-y','-i',f'{d}/voice_fast.mp3','-i',f'{d}/outro_fast.wav','-filter_complex',f'[1:a]adelay={int((oa+0.05)*1000)}|{int((oa+0.05)*1000)}[o];[0:a][o]amix=inputs=2:normalize=0,apad,atrim=0:{end}[a]','-map','[a]','-c:a','libmp3lame','-b:a','192k',f'{d}/final_audio.mp3'],check=True)
subprocess.run(['ffmpeg','-loglevel','error','-y','-f','concat','-safe','0','-i',f'{d}/out/list.txt','-i',f'{d}/final_audio.mp3','-map','0:v','-map','1:a','-c:v','copy','-c:a','aac','-b:a','192k','-shortest',f'{d}/story.mp4'],check=True)
print('outro at',oa,'outro dur',od,'end',end)
