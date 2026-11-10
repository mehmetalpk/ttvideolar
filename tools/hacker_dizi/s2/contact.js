// node contact.js <anim.html> <outdir> [frac]
const {chromium}=require('playwright');const fs=require('fs');const {execSync}=require('child_process');
(async()=>{const [,,anim,out,fr]=process.argv;const frac=+(fr||0.6);fs.mkdirSync(out,{recursive:true});
const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
p.on('pageerror',e=>console.log('ERR',e.message));
await p.goto('file://'+anim);await p.evaluate(()=>document.fonts.ready);
const durs=await p.evaluate(()=>SCENES);console.log('scenes',durs.length,'total',durs.reduce((a,b)=>a+b,0).toFixed(2));
const files=[];
const shots=[[0,0]].concat(durs.map((d,i)=>[i,Math.max(0.05,d*frac)]));
for(const [i,t] of shots){const d=await p.evaluate(([i,t])=>frame(i,t),[i,t]);const f=`${out}/c_${String(files.length).padStart(2,'0')}.jpg`;fs.writeFileSync(f,Buffer.from(d,'base64'));files.push(f);}
await b.close();
const cols=8;execSync(`ffmpeg -loglevel error -y -pattern_type glob -i '${out}/c_*.jpg' -vf "scale=270:480,tile=${cols}x${Math.ceil(files.length/cols)}:padding=4" -frames:v 1 ${out}/contact.jpg`);
console.log('ok',files.length,durs.map(d=>d.toFixed(1)).join(' '));})();
