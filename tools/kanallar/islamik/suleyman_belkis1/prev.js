
const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});const errs=[];
p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
await p.goto('file://'+process.argv[2]+'/anim.html');await p.evaluate(()=>document.fonts.ready);
const info=await p.evaluate(()=>({d:SCENES,g:G0,T:T,n:S.length}));fs.writeFileSync(process.argv[2]+'/scenes.json',JSON.stringify(info));
let shots=JSON.parse(process.argv[3]);if(!shots.length){shots=info.d.map((d,i)=>[i,Math.min(d*0.6,1.6)]);shots.unshift([0,0]);}
for(const [i,t] of shots){try{const d=await p.evaluate(([i,t])=>frame(i,t),[i,t]);fs.writeFileSync(`${process.argv[2]}/prev/p_${String(i).padStart(2,'0')}_${t}.jpg`,Buffer.from(d,'base64'));}catch(e){errs.push('scene '+i+': '+e.message)}}
// error sweep across all scenes
for(let i=0;i<info.n;i++){for(const f of [0,0.5,1]){try{await p.evaluate(([i,t])=>{draw(i,t)},[i,info.d[i]*f*0.999])}catch(e){errs.push('scene '+i+' t'+f+': '+e.message)}}}
console.log(JSON.stringify({errs,scenes:info.n,total:info.g[info.n-1]+info.d[info.n-1],T:info.T[info.T.length-1],g:info.g,d:info.d}));await b.close();})();
