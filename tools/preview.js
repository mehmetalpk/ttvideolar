const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
p.on('console',m=>console.log('C',m.text()));p.on('pageerror',e=>console.log('ERR',e.message));
await p.goto(''+(process.env.ANIM||'file:///home/claude/work/anim.html')+'');await p.evaluate(()=>document.fonts.ready);
const shots=JSON.parse(process.argv[2]);
for(const [i,t] of shots){const d=await p.evaluate(([i,t])=>frame(i,t),[i,t]);fs.writeFileSync(`/home/claude/vid/prev_${i}_${t}.jpg`,Buffer.from(d,'base64'));}
await b.close();})();
