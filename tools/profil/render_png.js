// Kullanım: node tools/profil/render_png.js <html> <çıktı_klasörü> <ön_ek> [onizleme.png]
// Her DRAW[i] için 1080x1080 PNG yazar; dördüncü argüman verilirse yuvarlak kırpılmış önizleme sayfası da yazar.
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
(async()=>{
  const [html,outDir,prefix,sheet]=process.argv.slice(2);
  fs.mkdirSync(outDir,{recursive:true});
  const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1080}});
  p.on('pageerror',e=>console.log('ERR',e.message));
  await p.goto('file://'+path.resolve(html));await p.evaluate(()=>document.fonts.ready);
  const n=await p.evaluate(()=>DRAW.length);const urls=[];
  for(let i=0;i<n;i++){const d=await p.evaluate(i=>render(i),i);urls.push(d);
    fs.writeFileSync(path.join(outDir,`${prefix}${i+1}.png`),Buffer.from(d.split(',')[1],'base64'));console.log('png',i+1);}
  if(sheet){
    const q=await b.newPage({viewport:{width:1500,height:700}});
    const cells=urls.map((u,i)=>`<div class=k><img class=big src="${u}"><img class=sm src="${u}"><b>${i+1}</b></div>`).join('');
    await q.setContent(`<style>body{margin:0;background:#fff;font:700 28px sans-serif;display:flex;gap:20px;padding:30px}.k{display:flex;flex-direction:column;align-items:center;gap:16px}.big{width:270px;height:270px;border-radius:50%}.sm{width:64px;height:64px;border-radius:50%}</style>${cells}`);
    await q.waitForTimeout(300);await q.screenshot({path:sheet});console.log('sheet');
  }
  await b.close();
})();
