import json,sys,subprocess
d=sys.argv[1]
ev=json.loads(sys.argv[2])  # [[time,type],...]
defs={'whoosh':"anoisesrc=d=0.25:c=pink,bandpass=f=1500:w=1200,afade=t=in:d=0.08,afade=t=out:st=0.1:d=0.15,volume=0.25",
'pop':"sine=f=880:d=0.07,afade=t=out:d=0.07,volume=0.3",'dum':"sine=f=55:d=0.5,afade=t=out:d=0.5,volume=0.5"}
inputs=['-i',f'{d}/voice_fast.mp3'];fl=[]
for k,(t,ty) in enumerate(ev):
    fl.append(f"{defs[ty]},aformat=sample_rates=44100:channel_layouts=stereo,adelay={int(t*1000)}|{int(t*1000)}[e{k}]")
fl.append("[0:a]aformat=sample_rates=44100:channel_layouts=stereo[v]")
fl.append("[v]"+''.join(f'[e{k}]' for k in range(len(ev)))+f"amix=inputs={len(ev)+1}:normalize=0:duration=first[out]")
subprocess.run(['ffmpeg','-loglevel','error','-y',*inputs,'-filter_complex',';'.join(fl),'-map','[out]','-c:a','aac','-b:a','192k',f'{d}/mix.m4a'],check=True)
print('mixed',len(ev))
