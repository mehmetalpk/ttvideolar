const W=1080,H=1920;
const c=document.getElementById('c'),x=c.getContext('2d');
const cl=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
const ease=t=>{t=cl(t);return t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2};
const eOut=t=>{t=cl(t);return 1-Math.pow(1-t,3)};
const back=t=>{t=cl(t);const c1=1.7,c3=c1+1;return 1+c3*Math.pow(t-1,3)+c1*Math.pow(t-1,2)};
const prog=(t,a,b)=>cl((t-a)/(b-a));
function rng(seed){let s=seed;return()=>{s=(s*16807)%2147483647;return (s-1)/2147483646}}
const F='Inter';
function rr(px,py,w,h,r){x.beginPath();x.moveTo(px+r,py);x.arcTo(px+w,py,px+w,py+h,r);x.arcTo(px+w,py+h,px,py+h,r);x.arcTo(px,py+h,px,py,r);x.arcTo(px,py,px+w,py,r);x.closePath();}
function grad(y0,y1,stops){const g=x.createLinearGradient(0,y0,0,y1);stops.forEach((s,i)=>g.addColorStop(i/(stops.length-1),s));return g}
function sky(top,bot){x.fillStyle=grad(0,H,[top,bot]);x.fillRect(-60,-60,W+120,H+120);}
function radial(cx,cy,r,c1,c2){const g=x.createRadialGradient(cx,cy,10,cx,cy,r);g.addColorStop(0,c1);g.addColorStop(1,c2);x.fillStyle=g;x.fillRect(-60,-60,W+120,H+120);}
function shake(t,a,b,amt){if(t>a&&t<b){const k=1-(t-a)/(b-a);x.translate(Math.sin(t*90)*amt*k,Math.cos(t*70)*amt*k);}}
function zoom(cx,cy,s){x.translate(cx,cy);x.scale(s,s);x.translate(-cx,-cy);}
function txt(tx,cx,cy,sz,col,opt={}){x.save();x.font=`${opt.w||900} ${sz}px ${F}`;x.textAlign=opt.align||'center';x.textBaseline='middle';let s=1;const mw=opt.maxW||980;const m=x.measureText(tx).width;if(m>mw)s=mw/m;x.translate(cx,cy);if(opt.rot)x.rotate(opt.rot);x.scale(s,s);x.lineJoin='round';if(opt.stroke!==false){x.lineWidth=opt.lw||sz*0.2;x.strokeStyle=opt.sc||'#000';x.strokeText(tx,0,0);}x.fillStyle=col;x.fillText(tx,0,0);x.restore();}
function bigText(tx,cx,cy,sz,col,p,rot=0,maxW){if(p<=0)return;const s=back(p);x.save();x.translate(cx,cy);x.rotate(rot);x.scale(s,s);txt(tx,0,0,sz,col,{maxW});x.restore();}

// ---------- people ----------
function body(cx,cy,w,h,col){x.fillStyle=col;x.beginPath();x.moveTo(cx-w/2,cy+h);x.lineTo(cx-w/2,cy+w*0.28);x.quadraticCurveTo(cx-w/2,cy,cx-w*0.22,cy);x.lineTo(cx+w*0.22,cy);x.quadraticCurveTo(cx+w/2,cy,cx+w/2,cy+w*0.28);x.lineTo(cx+w/2,cy+h);x.closePath();x.fill();}
function face(cx,cy,r,o={}){
  const skin=o.skin||'#e8b48c', hair=o.hair||'#2b1d16';
  x.save();
  if(o.hairStyle==='long'){x.fillStyle=hair;x.beginPath();x.ellipse(cx,cy+r*0.35,r*1.12,r*1.3,0,0,7);x.fill();}
  x.fillStyle=o.skinShade||'#cf9a73';x.fillRect(cx-r*0.32,cy+r*0.6,r*0.64,r*0.6);
  x.fillStyle=skin;
  x.beginPath();x.ellipse(cx-r*0.88,cy+r*0.1,r*0.15,r*0.22,0,0,7);x.ellipse(cx+r*0.88,cy+r*0.1,r*0.15,r*0.22,0,0,7);x.fill();
  x.beginPath();x.ellipse(cx,cy,r*0.88,r,0,0,7);x.fill();
  if(o.blush){x.fillStyle='rgba(230,110,110,0.28)';x.beginPath();x.ellipse(cx-r*0.5,cy+r*0.25,r*0.16,r*0.1,0,0,7);x.ellipse(cx+r*0.5,cy+r*0.25,r*0.16,r*0.1,0,0,7);x.fill();}
  if(o.red){x.fillStyle=`rgba(230,40,40,${o.red*0.35})`;x.beginPath();x.ellipse(cx,cy,r*0.88,r,0,0,7);x.fill();}
  x.fillStyle=hair;
  if(o.hairStyle!=='bald'){
    // saç: tek parça, kafa tepesinin ÜSTÜNE taşar (kel görünmez), alın çizgisi yukarıda
    x.beginPath();x.moveTo(cx-r*0.93,cy-r*0.2);
    x.bezierCurveTo(cx-r*1.02,cy-r*1.62,cx+r*1.02,cy-r*1.62,cx+r*0.93,cy-r*0.2);
    x.quadraticCurveTo(cx+r*0.82,cy-r*0.62,cx+r*0.2,cy-r*0.66);
    x.quadraticCurveTo(cx-r*0.55,cy-r*0.6,cx-r*0.93,cy-r*0.2);x.fill();
    if(o.messy){for(let k=0;k<5;k++){x.beginPath();const a=-2.6+k*0.5;x.moveTo(cx+Math.cos(a)*r*0.7,cy-r*0.5+Math.sin(a)*r*0.3);x.lineTo(cx+Math.cos(a)*r*1.12,cy-r*0.55+Math.sin(a)*r*0.75);x.lineTo(cx+Math.cos(a+0.25)*r*0.8,cy-r*0.5+Math.sin(a+0.25)*r*0.4);x.fill();}}
  }
  if(o.bigHair){x.beginPath();x.ellipse(cx,cy-r*0.75,r*0.75,r*0.32,0,0,7);x.fill();}
  const lk=(o.look||0)*r*0.08, eo=o.eyeOpen==null?1:o.eyeOpen, ey=cy-r*0.02;
  x.fillStyle='#1d1a22';
  const es=o.eyeBig||1;
  [-1,1].forEach(s=>{x.beginPath();x.ellipse(cx+s*r*0.33+lk,ey+(o.lookDown||0)*r*0.06,r*0.085*es,Math.max(r*0.012,r*0.11*eo*es),0,0,7);x.fill();});
  if(eo>0.5){x.fillStyle='#fff';[-1,1].forEach(s=>{x.beginPath();x.arc(cx+s*r*0.33+lk+r*0.03,ey-r*0.035,r*0.025*es,0,7);x.fill()});}
  const br=o.brow||0, sad=o.sad||0;
  x.strokeStyle=o.browCol||hair;x.lineWidth=r*0.07;x.lineCap='round';
  const ang=o.angry||0;[-1,1].forEach(s=>{x.beginPath();x.moveTo(cx+s*r*0.18,cy-r*0.27-br*r*0.12-sad*r*0.08+ang*r*0.1);x.lineTo(cx+s*r*0.48,cy-r*0.25-br*r*0.12+sad*r*0.04-ang*r*0.08);x.stroke();});
  x.strokeStyle=o.skinShade||'#c48f69';x.lineWidth=r*0.045;x.beginPath();x.moveTo(cx,cy+r*0.05);x.quadraticCurveTo(cx+r*0.08,cy+r*0.22,cx-r*0.02,cy+r*0.25);x.stroke();
  if(o.mustache){x.fillStyle=o.mustache;x.beginPath();x.ellipse(cx-r*0.13,cy+r*0.36,r*0.17,r*0.07,0.15,0,7);x.ellipse(cx+r*0.13,cy+r*0.36,r*0.17,r*0.07,-0.15,0,7);x.fill();}
  const my=cy+r*0.5, sm=o.smile||0;
  if(o.mouthOpen>0){x.fillStyle='#5a1f25';x.beginPath();x.ellipse(cx,my+r*0.04,r*0.2*(o.mouthW||1),r*0.04+r*0.16*o.mouthOpen,0,0,7);x.fill();if(o.mouthOpen>0.5){x.fillStyle='#fff';x.fillRect(cx-r*0.13,my-r*0.08*o.mouthOpen,r*0.26,r*0.05);}}
  else{x.strokeStyle='#6a2c2c';x.lineWidth=r*0.05;x.beginPath();x.moveTo(cx-r*0.2,my);x.quadraticCurveTo(cx,my+sm*r*0.22,cx+r*0.2,my);x.stroke();}
  if(o.glasses!=null){const gy=ey+o.glasses*r*0.35;x.fillStyle='#0c0c10';[-1,1].forEach(s=>{rr(cx+s*r*0.33-r*0.2+lk*0,gy-r*0.12,r*0.4,r*0.24,r*0.08);x.fill();});x.strokeStyle='#0c0c10';x.lineWidth=r*0.05;x.beginPath();x.moveTo(cx-r*0.13,gy-r*0.04);x.lineTo(cx+r*0.13,gy-r*0.04);x.moveTo(cx-r*0.53,gy-r*0.06);x.lineTo(cx-r*0.86,gy-r*0.1);x.moveTo(cx+r*0.53,gy-r*0.06);x.lineTo(cx+r*0.86,gy-r*0.1);x.stroke();x.fillStyle='rgba(255,255,255,0.35)';[-1,1].forEach(s=>{x.beginPath();x.moveTo(cx+s*r*0.33-r*0.12,gy-r*0.08);x.lineTo(cx+s*r*0.33-r*0.02,gy-r*0.08);x.lineTo(cx+s*r*0.33-r*0.1,gy+r*0.08);x.lineTo(cx+s*r*0.33-r*0.18,gy+r*0.08);x.fill();});}
  x.restore();
}
// Characters (series-constant)
const EMRE={skin:'#e8b48c',hair:'#2b1d16',shirt:'#3b6fb6'};
const KEREM={skin:'#f0c29e',hair:'#6b4226',messy:true,shirt:'#1f1f24'};
const BABA={skin:'#d9a07a',hair:'#5c5c63',mustache:'#3d3d42',shirt:'#8a5a3a',skinShade:'#bf8660'};
const ANNE={skin:'#eab896',hair:'#3a2418',hairStyle:'long',shirt:'#c0506a',blush:true};
function person(P,cx,cy,r,o={}){body(cx,cy+r*1.05,r*2.4,r*4,o.shirt||P.shirt);if(P===KEREM&&!o.noHood&&!(cy+r*1.75>1020&&cy+r*1.75<1290)){x.fillStyle='#39d353';x.font=`900 ${r*0.38}px ${F}`;x.textAlign='center';x.textBaseline='middle';x.fillText('</>',cx,cy+r*1.75);}face(cx,cy,r,{...P,...o});}
function arm(x0,y0,x1,y1,w,col,skin){x.strokeStyle=col;x.lineWidth=w;x.lineCap='round';x.beginPath();x.moveTo(x0,y0);x.lineTo(x1,y1);x.stroke();x.fillStyle=skin;x.beginPath();x.arc(x1,y1,w*0.55,0,7);x.fill();}

// ---------- objects ----------
function laptop(cx,cy,s,screenFn){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#2a2d34';rr(-260,-330,520,340,22);x.fill();x.fillStyle='#0d1117';rr(-240,-310,480,300,10);x.fill();if(screenFn){x.save();rr(-240,-310,480,300,10);x.clip();x.translate(-240,-310);screenFn();x.restore();}x.fillStyle='#a7adb8';x.beginPath();x.moveTo(-300,10);x.lineTo(300,10);x.lineTo(330,50);x.lineTo(-330,50);x.fill();x.restore();}
function modem(cx,cy,s,t,lights){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#e9ecf1';rr(-200,-60,400,120,26);x.fill();x.fillStyle='#c9ced8';rr(-200,30,400,30,14);x.fill();x.strokeStyle='#e9ecf1';x.lineWidth=16;x.lineCap='round';[-140,140].forEach(a=>{x.beginPath();x.moveTo(a,-50);x.lineTo(a*1.25,-220);x.stroke();});for(let i=0;i<5;i++){const on=lights==='off'?false:lights==='blink'?Math.floor(t*6+i)%2===0:true;x.fillStyle=on?(lights==='blink'?'#ff9f1a':'#39d353'):'#555';x.beginPath();x.arc(-120+i*60,-5,12,0,7);x.fill();}x.restore();}
function wifi(cx,cy,s,col,crossed){x.save();x.translate(cx,cy);x.scale(s,s);x.strokeStyle=col;x.lineWidth=22;x.lineCap='round';[60,110,160].forEach(r=>{x.beginPath();x.arc(0,0,r,-Math.PI*0.75,-Math.PI*0.25);x.stroke();});x.fillStyle=col;x.beginPath();x.arc(0,0,18,0,7);x.fill();if(crossed){x.strokeStyle='#ff2d2d';x.lineWidth=26;x.beginPath();x.moveTo(-150,-190);x.lineTo(150,50);x.stroke();}x.restore();}
function lock(cx,cy,s,col,open){x.save();x.translate(cx,cy);x.scale(s,s);x.strokeStyle=col;x.lineWidth=22;x.beginPath();x.arc(0,-60-(open?30:0),55,Math.PI,0);x.lineTo(55,-60-(open?30:0)+ (open?0:0));x.stroke();x.beginPath();x.moveTo(-55,-60-(open?30:0));x.lineTo(-55,-30);x.stroke();x.fillStyle=col;rr(-90,-40,180,140,22);x.fill();x.fillStyle='#000';x.beginPath();x.arc(0,15,18,0,7);x.fill();x.fillRect(-7,15,14,40);x.restore();}
function folder(cx,cy,s,col){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle=col||'#f2b632';rr(-120,-90,100,40,12);x.fill();rr(-120,-70,240,170,16);x.fill();x.fillStyle='rgba(255,255,255,0.25)';rr(-120,-30,240,130,16);x.fill();x.restore();}
function fileIcon(cx,cy,s,label){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#fff';x.beginPath();x.moveTo(-80,-110);x.lineTo(40,-110);x.lineTo(80,-70);x.lineTo(80,110);x.lineTo(-80,110);x.closePath();x.fill();x.fillStyle='#cfd6e2';x.beginPath();x.moveTo(40,-110);x.lineTo(80,-70);x.lineTo(40,-70);x.fill();x.fillStyle='#9aa4b5';for(let i=0;i<5;i++)x.fillRect(-55,-50+i*30,110-(i%2)*30,10);x.restore();if(label)txt(label,cx,cy+s*150,40*s,'#fff',{w:800,lw:8});}
function cursor(px,py,s){x.save();x.translate(px,py);x.scale(s,s);x.fillStyle='#fff';x.strokeStyle='#000';x.lineWidth=4;x.beginPath();x.moveTo(0,0);x.lineTo(0,62);x.lineTo(16,48);x.lineTo(28,74);x.lineTo(38,70);x.lineTo(26,44);x.lineTo(46,44);x.closePath();x.fill();x.stroke();x.restore();}
function room(wall,floor){x.fillStyle=wall;x.fillRect(-60,-60,W+120,H+120);x.fillStyle=floor;x.fillRect(-60,1350,W+120,700);x.fillStyle='rgba(0,0,0,0.12)';x.fillRect(-60,1340,W+120,14);}
function matrix(t,col,seed=3){const r=rng(seed);x.font=`700 34px monospace`;x.textAlign='center';for(let i=0;i<26;i++){const cx=20+i*42,sp=200+r()*300,off=r()*2000;for(let k=0;k<14;k++){const y=((t*sp+off+k*44)%2200)-200;x.fillStyle=col;x.globalAlpha=0.15+0.5*(k/14);x.fillText(r()<0.5?'1':'0',cx,y);}}x.globalAlpha=1;}
function bubble(cx,cy,w,h,tx,sz,col,tailX){x.save();x.fillStyle=col||'#fff';rr(cx-w/2,cy-h/2,w,h,36);x.fill();x.beginPath();x.moveTo((tailX||cx)-24,cy+h/2-4);x.lineTo((tailX||cx)+10,cy+h/2+60);x.lineTo((tailX||cx)+34,cy+h/2-4);x.fill();x.restore();txt(tx,cx,cy,sz,'#111',{stroke:false,w:900,maxW:w-50});}
function burst(cx,cy,r,col,t){x.save();x.translate(cx,cy);x.rotate(t*0.6);x.fillStyle=col;x.beginPath();for(let i=0;i<24;i++){const a=i*Math.PI/12,rr2=i%2?r*0.62:r;x.lineTo(Math.cos(a)*rr2,Math.sin(a)*rr2);}x.fill();x.restore();}
function stairs(px,base){x.fillStyle='#a8774f';for(let i=0;i<8;i++){x.fillRect(px+i*70,base-i*70,W,70);}x.fillStyle='#8a5e3b';for(let i=0;i<8;i++){x.fillRect(px+i*70,base-i*70,W,10);}}

// ---------- karaoke captions ----------
function syl(w){return Math.max(1,(w.match(/[aeıioöuüâîûAEIİOÖUÜ]/g)||[]).length)}
let CHUNKS=[];
function buildChunks(TIM,size){x.font=`800 ${size}px ${F}`;const sp=x.measureText(' ').width+size*0.2;CHUNKS=[];
  TIM.forEach((s,si)=>{let cur=[],lines=1,lw=0;const push=()=>{if(cur.length)CHUNKS.push({si,w:cur});cur=[];lines=1;lw=0;};
    s.w.forEach((w,wi)=>{const ww=x.measureText(w[0]).width;if(lw>0&&lw+sp+ww>880){if(lines>=2)push();else{lines++;lw=0;}}lw+=(lw>0?sp:0)+ww;cur.push(w);});push();});
  CHUNKS.forEach(ch=>ch.s=ch.w[0][1]);CHUNKS.forEach((ch,i)=>{const nx=CHUNKS[i+1];ch.e=nx?nx.s:ch.w[ch.w.length-1][2]+1.0;});
}
function karaoke(T,opt={}){const size=opt.size||64,y=Math.min(opt.y||1150,1250);const ch=CHUNKS.find(c=>T>=c.s-0.05&&T<c.e);if(!ch)return;
  x.save();x.font=`800 ${size}px ${F}`;x.textBaseline='middle';x.textAlign='left';x.lineJoin='round';const sp=x.measureText(' ').width+size*0.2;
  const lines=[[]];let lw=0;ch.w.forEach(w=>{const ww=x.measureText(w[0]).width;if(lw>0&&lw+sp+ww>880){lines.push([]);lw=0;}lines[lines.length-1].push([w,ww]);lw+=(lw>0?sp:0)+ww;});
  const lh=size*1.25,y0=y-(lines.length-1)*lh/2;const a=ch.s<0.05?1:cl((T-ch.s+0.05)/0.1);x.globalAlpha=a;
  lines.forEach((ln,li)=>{const tot=ln.reduce((s,[w,ww],i)=>s+ww+(i?sp:0),0);let px=W/2-tot/2;const yy=y0+li*lh;
    ln.forEach(([w,ww])=>{const cur=T>=w[1]-0.02&&T<(w[2]+0.08);const past=T>=w[1];const sc=cur?1.08:1;x.save();x.translate(px+ww/2,yy);x.scale(sc,sc);x.lineWidth=size*0.2;x.strokeStyle='#000';x.textAlign='center';x.strokeText(w[0],0,0);x.fillStyle=cur?'#ffd23f':'#fff';x.fillText(w[0],0,0);x.restore();px+=ww+sp;});});
  x.restore();}

// ---------- overlays ----------
function watermark(){x.save();x.globalAlpha=0.6;x.font=`700 40px ${F}`;x.textAlign='center';x.textBaseline='middle';x.lineJoin='round';x.lineWidth=6;x.strokeStyle='#000';x.strokeText('@redditselhikayeler',W/2,120);x.fillStyle='#fff';x.fillText('@redditselhikayeler',W/2,120);x.restore();}
function partBadge(n,N,cx=150,cy=240,pulse=0){x.save();x.translate(cx,cy);const s=1+0.05*Math.sin(pulse*8);x.scale(s,s);x.rotate(-0.08);x.fillStyle='#ff2d55';rr(-125,-55,250,110,24);x.fill();x.strokeStyle='#fff';x.lineWidth=7;x.stroke();x.font=`900 60px ${F}`;x.textAlign='center';x.textBaseline='middle';x.fillStyle='#fff';x.fillText(`PART ${n}/${N}`,0,4,220);x.restore();}
function hook(lines,top=360){// lines: [[text,size,color],...]  t=0 full size, no fade
  let y=top;lines.forEach(([t,s,col])=>{y+=s*0.6;txt(t,W/2,y,s,col,{lw:s*0.22,maxW:1000});y+=s*0.6;});}
function devami(T0,T,n){const p=prog(T,T0,T0+0.3);if(p<=0)return;x.save();x.fillStyle=`rgba(0,0,0,${0.45*p})`;x.fillRect(0,0,W,H);x.restore();const s=1+0.04*Math.sin(T*9);x.save();x.translate(W/2,820);x.scale(s,s);bigText('DEVAMI',0,-110,130,'#fff',p,-0.05);bigText(`PART ${n}'${n==2?'DE':'TE'}`,0,60,170,'#ffd23f',prog(T,T0+0.15,T0+0.45),-0.05);x.restore();}

// ---------- engine ----------
function wt(si,w,end){const s=TIM[si];const k=s.w.find(q=>q[0].toLowerCase().includes(w.toLowerCase()));if(!k)throw new Error('word '+w);return end?k[2]:k[1];}
let S=[],TIM=[],END=0,CAPOFF=false;
function setup(scenes,tim,end){S=scenes;TIM=tim;END=end;buildChunks(TIM,64);
  S.forEach((s,i)=>{s.d=(i<S.length-1?S[i+1].a:END)-s.a;});
  window.SCENES=S.map(s=>s.d);
  window.SFX=[];S.forEach((s,i)=>{if(i>0)SFX.push([s.a,s.sfx||'whoosh']);(s.pops||[]).forEach(p=>SFX.push([s.a+p[0],p[1]||'pop']));});
}
window.draw=function(i,t){x.setTransform(1,0,0,1,0,0);x.globalAlpha=1;x.setLineDash([]);x.lineCap='round';x.textAlign='center';
  const sc=S[i],T=sc.a+t;x.save();sc.f(t,T);x.restore();x.setTransform(1,0,0,1,0,0);x.globalAlpha=1;
  if(!sc.noCap)karaoke(T,{y:sc.capY||1150});
  if(sc.after){x.save();sc.after(t,T);x.restore();}
  const d=sc.d;const a=Math.max(i===0?0:1-t/0.1,i===S.length-1?0:1-(d-t)/0.1);if(a>0){x.fillStyle=`rgba(0,0,0,${cl(a)})`;x.fillRect(0,0,W,H)}
  watermark();};
window.frame=function(i,t){draw(i,t);return c.toDataURL('image/jpeg',0.92).split(',')[1]};
