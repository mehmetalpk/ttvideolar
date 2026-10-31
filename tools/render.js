const {chromium}=require('playwright');const {spawn}=require('child_process');const fs=require('fs');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
p.on('pageerror',e=>console.log('ERR',e.message));
await p.goto((process.env.ANIM||'file:///home/claude/work/anim.html'));await p.evaluate(()=>document.fonts.ready);
const durs=await p.evaluate(()=>SCENES);const list=[];
for(let i=0;i<durs.length;i++){const n=Math.round(durs[i]*30),tmp=`out/s${i}.tmp.mp4`,fin=`out/s${i}.mp4`;
 const ff=spawn('ffmpeg',['-loglevel','error','-y','-f','image2pipe','-c:v','mjpeg','-framerate','30','-i','-','-c:v','libx264','-preset','veryfast','-crf','20','-pix_fmt','yuv420p','-r','30',tmp]);
 const done=new Promise((res,rej)=>ff.on('exit',c=>c===0?res():rej(c)));
 for(let f=0;f<n;f++){const d=await p.evaluate(([i,t])=>frame(i,t),[i,f/30]);if(!ff.stdin.write(Buffer.from(d,'base64')))await new Promise(r=>ff.stdin.once('drain',r));}
 ff.stdin.end();await done;fs.renameSync(tmp,fin);list.push(`file 's${i}.mp4'`);console.log('scene',i,'done');}
fs.writeFileSync('out/list.txt',list.join('\n'));await b.close();})();
