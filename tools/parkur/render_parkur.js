const {chromium}=require('playwright');const {spawn}=require('child_process');const D=+process.argv[2];
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:904}});p.on('pageerror',e=>console.log('ERR',e.message));
await p.goto('file://'+require('path').resolve(__dirname,'parkur.html')+'?d='+D+'&seed='+(process.argv[4]||Date.now()%1000));const n=Math.round(D*60);
const ff=spawn('ffmpeg',['-loglevel','error','-y','-f','image2pipe','-c:v','mjpeg','-framerate','60','-i','-','-c:v','libx264','-preset','veryfast','-crf','20','-pix_fmt','yuv420p',(process.argv[3]||'parkur')+'.tmp.mp4']);
const done=new Promise(r=>ff.on('exit',r));
for(let f=0;f<n;f++){const d=await p.evaluate(t=>frame(t),f/60);if(!ff.stdin.write(Buffer.from(d,'base64')))await new Promise(r=>ff.stdin.once('drain',r));}
ff.stdin.end();await done;require('fs').renameSync((process.argv[3]||'parkur')+'.tmp.mp4',(process.argv[3]||'parkur')+'.mp4');await b.close();console.log('ok',n);})();
