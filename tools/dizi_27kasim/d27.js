// d27.js — 27 Kas: Teyzemin Karne Harçlığı (A, İrem) + Dayımın Rüzgâr Gülleri (B, Emrullah)
// ---- A: aile/bayram ----
const NRZ={skin:'#f0c4a0',hair:'#5a3420',hairStyle:'long',shirt:'#e8b830',blush:true};
const MUZ={skin:'#e8b490',hair:'#6a2a1a',bigHair:true,shirt:'#8a3a9a',skinShade:'#c8916c'};
const OZAN={skin:'#f0c29e',hair:'#2a1a12',shirt:'#3a9a6a'};
const FIK={skin:'#e6b896',hair:'#e4e4e4',shirt:'#5a6a8a',skinShade:'#c4916c'};
const LEYLA={skin:'#f0c4a0',hair:'#3a2a1a',bigHair:true,shirt:'#c05a5a'};
function nrz(cx,cy,r,o={}){person(NRZ,cx,cy,r,o);}
function muz(cx,cy,r,o={}){person(MUZ,cx,cy,r,o);
 x.strokeStyle='#e8b830';x.lineWidth=r*0.06;x.beginPath();x.arc(cx,cy+r*0.95,r*0.42,0.25,Math.PI-0.25);x.stroke();
 x.fillStyle='#f4cc40';x.beginPath();x.arc(cx,cy+r*1.37,r*0.09,0,7);x.fill();
 x.fillStyle='#e8b830';[-1,1].forEach(s=>{x.beginPath();x.arc(cx+s*r*0.88,cy+r*0.38,r*0.08,0,7);x.fill();});}
function ozan(cx,cy,r,o={}){person(OZAN,cx,cy,r,o);}
function leyla(cx,cy,r,o={}){person(LEYLA,cx,cy,r,o);}
function fik(cx,cy,r,o={}){x.fillStyle='#e4e4e4';x.beginPath();x.arc(cx,cy-r*1.0,r*0.32,0,7);x.fill();person(FIK,cx,cy,r,o);
 if(!o.noSpecs)specs(cx,cy+(o.specsDown?r*0.12:0),r,'#7a5a2a');
 x.strokeStyle='#d4a838';x.lineWidth=r*0.025;x.beginPath();x.moveTo(cx-r*0.5,cy);x.quadraticCurveTo(cx-r*0.7,cy+r*0.9,cx,cy+r*1.2);x.quadraticCurveTo(cx+r*0.7,cy+r*0.9,cx+r*0.5,cy);x.stroke();}
function knit(cx,cy,s,T){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#d04a6a';x.beginPath();x.arc(0,0,70,0,7);x.fill();x.strokeStyle='#a83050';x.lineWidth=6;for(let i=0;i<5;i++){x.beginPath();x.arc(0,0,70,i*0.7+T*0.3,i*0.7+T*0.3+1.6);x.stroke();}
 x.strokeStyle='#c8a060';x.lineWidth=10;x.lineCap='round';x.beginPath();x.moveTo(-120,-110);x.lineTo(60,40);x.moveTo(120,-110);x.lineTo(-60,40);x.stroke();x.restore();}
function zarfK(cx,cy,s,rot,label,col){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(s,s);x.shadowColor='rgba(0,0,0,0.35)';x.shadowBlur=20;x.fillStyle=col||'#fff6e0';rr(-150,-95,300,190,12);x.fill();x.shadowBlur=0;x.strokeStyle='#d8c090';x.lineWidth=5;x.beginPath();x.moveTo(-150,-95);x.lineTo(0,15);x.lineTo(150,-95);x.stroke();
 if(label){x.font=`900 54px ${F}`;x.textAlign='center';x.textBaseline='middle';x.fillStyle=label==='YARIM'?'#d03030':'#1a7a3a';x.fillText(label,0,58);}x.restore();}
function halfZarf(cx,cy,s,rot){x.save();x.translate(cx,cy);x.rotate(rot||0);x.beginPath();x.rect(-200*s,-150*s,200*s,300*s);x.clip();zarfK(0,0,s,0,'');x.restore();x.save();x.translate(cx,cy);x.rotate(rot||0);x.strokeStyle='#d03030';x.lineWidth=8;x.setLineDash([18,12]);x.beginPath();x.moveTo(0,-110*s);x.lineTo(0,110*s);x.stroke();x.restore();}
function zarfRow(y,n,T){for(let i=0;i<n;i++)zarfK(170+i*185,y+Math.sin(T*2+i)*4,0.55,(i-2)*0.06,'');}
function karne(cx,cy,s,rot,rows,note,p){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(s,s);x.shadowColor='rgba(0,0,0,0.4)';x.shadowBlur=28;x.fillStyle='#efe2b8';rr(-260,-340,520,680,14);x.fill();x.shadowBlur=0;
 x.fillStyle='#c8a870';x.fillRect(-260,-340,520,110);x.font=`900 72px ${F}`;x.textAlign='center';x.textBaseline='middle';x.fillStyle='#3a2a10';x.fillText('KARNE',0,-285);
 x.textAlign='left';(rows||[]).forEach((r,i)=>{x.font=`800 44px ${F}`;x.fillStyle='#3a2a10';x.fillText(r[0],-220,-170+i*80);x.textAlign='right';x.fillStyle=r[2]||'#3a2a10';x.font=`900 56px ${F}`;x.fillText(r[1],220,-170+i*80);x.textAlign='left';x.strokeStyle='rgba(60,40,10,0.25)';x.lineWidth=3;x.beginPath();x.moveTo(-220,-130+i*80);x.lineTo(220,-130+i*80);x.stroke();});
 if(note&&(p==null||p>0)){x.save();x.translate(30,250);x.rotate(-0.12);x.globalAlpha=p==null?1:Math.min(1,p);x.strokeStyle='#d02020';x.lineWidth=7;rr(-230,-55,460,110,10);x.stroke();x.font=`900 44px ${F}`;x.textAlign='center';x.fillStyle='#d02020';x.fillText(note,0,4);x.restore();}
 x.restore();}
function sandik(cx,cy,s,open,T){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#7a4a22';rr(-300,-120,600,280,18);x.fill();x.fillStyle='#5a3416';[-200,0,200].forEach(a=>x.fillRect(a-14,-120,28,280));x.fillStyle='#d4a838';rr(-40,-60,80,90,10);x.fill();x.fillStyle='#3a2a10';x.beginPath();x.arc(0,-25,12,0,7);x.fill();
 if(open){x.fillStyle='#8a5a2a';x.beginPath();x.moveTo(-300,-120);x.lineTo(300,-120);x.lineTo(280,-330);x.lineTo(-280,-330);x.fill();x.fillStyle='#f4ecd8';rr(-270,-150,200,50,10);x.fill();x.fillStyle='#e8a0b0';rr(-60,-160,180,60,10);x.fill();x.fillStyle='#a0c8e8';rr(130,-150,140,50,10);x.fill();}
 else{x.fillStyle='#8a5a2a';rr(-310,-170,620,70,20);x.fill();}
 x.restore();}
function naftalin(cx,cy,T){x.save();x.strokeStyle='rgba(220,240,200,0.5)';x.lineWidth=10;x.lineCap='round';for(let i=0;i<4;i++){const ph=(T*0.6+i*0.25)%1;x.globalAlpha=1-ph;x.beginPath();const bx=cx-120+i*80,by=cy-ph*300;x.moveTo(bx,by);x.bezierCurveTo(bx+40,by-40,bx-40,by-80,bx,by-120);x.stroke();}x.restore();}
function balconyBg(){radial(540,700,1400,'#bfe0f4','#7ab0d8');x.fillStyle='#e8dcc8';x.fillRect(-60,1200,W+120,900);x.fillStyle='#c8b8a0';x.fillRect(-60,1180,W+120,30);x.strokeStyle='#8a8a8a';x.lineWidth=10;for(let i=0;i<14;i++){x.beginPath();x.moveTo(i*85,1210);x.lineTo(i*85,1420);x.stroke();}x.fillStyle='#8a8a8a';x.fillRect(-60,1410,W+120,16);}
function frameK(cx,cy,s,T){bigFrame(cx,cy,420*s,560*s,()=>{karne(cx,cy+10*s,0.75*s,0,[['MATEMATİK','2','#d02020'],['FEN','2','#d02020']],'AİLE MÜZESİ');});}
function moneyBurst(cx,cy,T,n){for(let i=0;i<(n||6);i++){const a=i*1.05+T*0.8;zarfK(cx+Math.cos(a)*300,cy+Math.sin(a)*200,0.45,Math.sin(T+i)*0.3,'TAM');}}
// ---- B: komşu/site ----
const YEG={skin:'#e0a47c',hair:'#2a1a12',shirt:'#4a6a8a',skinShade:'#c08a64'};
const RIF={skin:'#e2a880',hair:'#eeeeee',hairStyle:'bald',mustache:'#f4f4f4',shirt:'#7a5a3a',skinShade:'#c08a64'};
const NAL={skin:'#f0c4a0',hair:'#c8783a',bigHair:true,shirt:'#e86a8a'};
const JURY=[{skin:'#e8b490',hair:'#3a3a3a',shirt:'#3a4a6a'},{skin:'#f0c4a0',hair:'#8a5a2a',bigHair:true,shirt:'#6a8a3a'},{skin:'#d9a07a',hair:'#ccc',hairStyle:'bald',mustache:'#999',shirt:'#5a3a5a'}];
function beard(cx,cy,r,col){x.fillStyle=col||'rgba(31,20,16,0.85)';x.beginPath();x.moveTo(cx-r*0.86,cy+r*0.05);x.quadraticCurveTo(cx-r*0.8,cy+r*1.05,cx,cy+r*1.1);x.quadraticCurveTo(cx+r*0.8,cy+r*1.05,cx+r*0.86,cy+r*0.05);x.quadraticCurveTo(cx+r*0.6,cy+r*0.62,cx+r*0.25,cy+r*0.68);x.quadraticCurveTo(cx,cy+r*0.35,cx-r*0.25,cy+r*0.68);x.quadraticCurveTo(cx-r*0.6,cy+r*0.62,cx-r*0.86,cy+r*0.05);x.fill();}
function yeg(cx,cy,r,o={}){person(YEG,cx,cy,r,o);beard(cx,cy,r);const my=cy+r*0.52;if(o.mouthOpen>0){x.fillStyle='#5a1f25';x.beginPath();x.ellipse(cx,my,r*0.17,r*0.04+r*0.13*o.mouthOpen,0,0,7);x.fill();}else{x.strokeStyle='#d88';x.lineWidth=r*0.05;x.beginPath();x.moveTo(cx-r*0.16,my);x.quadraticCurveTo(cx,my+(o.smile||0)*r*0.2,cx+r*0.16,my);x.stroke();}}
function gloveK(cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#e8a030';x.beginPath();x.ellipse(0,0,60,70,0,0,7);x.fill();for(let i=0;i<4;i++){rr(-52+i*30,-120,24,80,12);x.fill();}rr(45,-30,26,64,12);x.fill();x.restore();}
function rif(cx,cy,r,o={}){person(RIF,cx,cy,r,o);kasket(cx,cy,r);
 if(o.apron!==false){x.fillStyle='#3a5a8a';x.beginPath();x.moveTo(cx-r*0.7,cy+r*1.5);x.lineTo(cx+r*0.7,cy+r*1.5);x.lineTo(cx+r*0.85,cy+r*4);x.lineTo(cx-r*0.85,cy+r*4);x.fill();x.fillStyle='#2a4a7a';rr(cx-r*0.35,cy+r*2.2,r*0.7,r*0.45,r*0.06);x.fill();}
 if(o.specs)specs(cx,cy,r,'#3a2a1a');}
function sunHat(cx,cy,r){x.fillStyle='#f0dca0';x.beginPath();x.ellipse(cx,cy-r*0.62,r*1.55,r*0.32,0,0,7);x.fill();x.beginPath();x.ellipse(cx,cy-r*0.8,r*0.8,r*0.5,0,Math.PI,0);x.fill();x.fillStyle='#e86a8a';x.fillRect(cx-r*0.8,cy-r*0.86,r*1.6,r*0.16);}
function nal(cx,cy,r,o={}){person(NAL,cx,cy,r,o);if(o.hat!==false)sunHat(cx,cy,r);if(o.dress){x.fillStyle='#d4a838';x.beginPath();x.arc(cx-r*0.5,cy+r*1.8,r*0.18,0,7);x.fill();}}
function shears(cx,cy,s,rot){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(s,s);x.fillStyle='#b8c0c8';x.beginPath();x.moveTo(-10,0);x.lineTo(-30,-220);x.lineTo(10,-10);x.fill();x.beginPath();x.moveTo(10,0);x.lineTo(40,-210);x.lineTo(-5,-10);x.fill();x.fillStyle='#d04040';rr(-40,0,30,140,12);x.fill();rr(10,0,30,140,12);x.fill();x.restore();}
function juror(i,cx,cy,r,o={}){person(JURY[i],cx,cy,r,o);x.fillStyle='#e8b830';x.beginPath();x.arc(cx-r*0.55,cy+r*1.7,r*0.2,0,7);x.fill();x.fillStyle='#d03030';x.beginPath();x.moveTo(cx-r*0.65,cy+r*1.85);x.lineTo(cx-r*0.75,cy+r*2.3);x.lineTo(cx-r*0.55,cy+r*2.2);x.lineTo(cx-r*0.45,cy+r*2.3);x.lineTo(cx-r*0.45,cy+r*1.85);x.fill();if(i===0){x.fillStyle='#fff';rr(cx+r*0.3,cy+r*1.6,r*0.6,r*0.8,r*0.05);x.fill();}}
const PWC=['#e04040','#f0c030','#30c0c0','#e07ad0','#50c050','#f08030'];
function pinwheel(cx,cy,s,T,col,spin){x.save();x.translate(cx,cy);x.scale(s,s);x.strokeStyle='#8a6a40';x.lineWidth=10;x.beginPath();x.moveTo(0,0);x.lineTo(0,170);x.stroke();x.rotate((spin||0)*T*6);for(let k=0;k<4;k++){x.rotate(Math.PI/2);x.fillStyle=k%2?col:shade(col);x.beginPath();x.moveTo(0,0);x.lineTo(0,-80);x.lineTo(55,-45);x.closePath();x.fill();}x.fillStyle='#fff';x.beginPath();x.arc(0,0,10,0,7);x.fill();x.restore();}
function shade(c){return c+'bb';}
function plainProp(cx,cy,s,rot){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(s,s);x.fillStyle='#c8a068';for(let k=0;k<4;k++){x.rotate(Math.PI/2);rr(-14,-90,28,80,8);x.fill();}x.fillStyle='#8a6a40';x.beginPath();x.arc(0,0,12,0,7);x.fill();x.restore();}
function fenceK(y,opt={}){const T=opt.T||0;const sp=opt.spin==null?1:opt.spin;x.fillStyle='#b08850';x.fillRect(-60,y-30,W+120,24);x.fillRect(-60,y+90,W+120,24);for(let i=0;i<13;i++){const fx=i*90+10;x.fillStyle=i%2?'#a87e48':'#b8905a';x.beginPath();x.moveTo(fx,y+260);x.lineTo(fx,y-120);x.lineTo(fx+35,y-160);x.lineTo(fx+70,y-120);x.lineTo(fx+70,y+260);x.fill();}
 const n=opt.pins||0;for(let i=0;i<n;i++){const row=Math.floor(i/12),col=i%12;pinwheel(45+col*90,y-200-row*140+(row%2)*20,0.55,T+i*0.13,PWC[i%PWC.length],sp*(1+((i*7)%5)*0.15));}
 if(opt.sign){x.fillStyle='#fff6e0';rr(340,y+20,400,70,8);x.fill();x.font=`900 34px ${F}`;x.textAlign='center';x.textBaseline='middle';x.fillStyle='#5a3a1a';x.fillText('SİTEYE ÖRNEK OLSUN',540,y+56);}}
function siteBg(sky){radial(540,600,1400,sky||'#cfe8f8','#8ec0e8');x.fillStyle='#e8e0d0';[[60,520,300,500],[420,460,260,560],[740,540,320,480]].forEach(([a,b,c,d])=>{x.fillRect(a,b,c,d);x.fillStyle='#9ab8d8';for(let i=0;i<3;i++)for(let j=0;j<3;j++)x.fillRect(a+30+i*(c-60)/3,b+40+j*140,(c-60)/3-30,90);x.fillStyle='#e8e0d0';});x.fillStyle='#6ab04a';x.fillRect(-60,1050,W+120,1000);x.fillStyle='#5a9a3a';x.fillRect(-60,1050,W+120,30);}
function nightBg(){radial(540,600,1400,'#1a2a4a','#05080f');x.fillStyle='#fff';for(let i=0;i<30;i++){x.globalAlpha=0.6;x.fillRect((i*137)%W,(i*71)%800,4,4);}x.globalAlpha=1;}
function workshop(cx,cy,s,glow,T){x.save();x.translate(cx,cy);x.scale(s,s);if(glow){const g=x.createRadialGradient(0,0,40,0,0,520);g.addColorStop(0,'rgba(255,210,120,0.55)');g.addColorStop(1,'rgba(255,210,120,0)');x.fillStyle=g;x.fillRect(-600,-600,1200,1200);}x.fillStyle='#6a4a2a';x.beginPath();x.moveTo(-330,-140);x.lineTo(0,-330);x.lineTo(330,-140);x.fill();x.fillStyle='#8a6a40';x.fillRect(-290,-140,580,420);x.fillStyle=glow?'#ffd27a':'#3a3a4a';rr(-200,-60,170,150,8);x.fill();rr(40,-60,170,150,8);x.fill();x.fillStyle='#4a3420';x.fillRect(-60,110,120,170);
 x.font=`900 40px ${F}`;x.textAlign='center';x.fillStyle='#fff6e0';x.fillText('ATÖLYE',0,-180);x.restore();}
function ribbon(cx,cy,s,T,label){x.save();x.translate(cx,cy);x.rotate(Math.sin(T*3)*0.06);x.scale(s,s);x.fillStyle='#2a6ad0';x.beginPath();x.moveTo(-50,60);x.lineTo(-90,260);x.lineTo(-40,230);x.lineTo(-10,280);x.lineTo(10,70);x.fill();x.beginPath();x.moveTo(50,60);x.lineTo(90,260);x.lineTo(40,230);x.lineTo(10,280);x.lineTo(-10,70);x.fill();
 x.fillStyle='#f0c030';for(let k=0;k<16;k++){x.save();x.rotate(k*Math.PI/8);x.beginPath();x.ellipse(0,-100,26,40,0,0,7);x.fill();x.restore();}x.fillStyle='#2a6ad0';x.beginPath();x.arc(0,0,95,0,7);x.fill();x.fillStyle='#fff';x.beginPath();x.arc(0,0,70,0,7);x.fill();x.font=`900 64px ${F}`;x.textAlign='center';x.textBaseline='middle';x.fillStyle='#2a6ad0';x.fillText(label||'1.',0,4);x.restore();}
function kids(y,n,T){const cols=['#e04040','#30a0e0','#f0c030','#50c050','#a060e0'];for(let i=0;i<n;i++){const bx=150+i*190,by=y+Math.abs(Math.sin(T*5+i))*-14;person({skin:i%2?'#f0c4a0':'#d9a07a',hair:['#2a1a12','#6a3a1a','#1a1a1a'][i%3],hairStyle:i%2?'long':undefined,shirt:cols[i%5]},bx,by,62,{smile:0.9,mouthOpen:0.4});}}
function camPhone(cx,cy,s,rot){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(s,s);x.fillStyle='#222';rr(-70,-120,140,240,20);x.fill();x.fillStyle='#8ec0e8';rr(-58,-100,116,200,10);x.fill();x.fillStyle='#fff';x.beginPath();x.arc(0,85,10,0,7);x.fill();x.restore();}
function flash(T,a){const p=prog(T,a,a+0.25);if(p>0&&p<1){x.fillStyle=`rgba(255,255,255,${0.6*(1-p)})`;x.fillRect(0,0,W,H);}}
function balconyNal(cx,cy,s){x.save();x.fillStyle='#e8e0d0';x.fillRect(cx-260*s,cy-300*s,520*s,700*s);x.fillStyle='#9ab8d8';x.fillRect(cx-200*s,cy-260*s,400*s,330*s);x.restore();}
function sitePano(cx,cy,s,T,inner){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#6a4a2a';x.fillRect(-20,200,40,300);x.fillStyle='#c89a60';rr(-300,-220,600,440,16);x.fill();x.fillStyle='#e8c890';rr(-270,-190,540,380,10);x.fill();x.font=`900 40px ${F}`;x.textAlign='center';x.fillStyle='#5a3a1a';x.fillText('SİTE PANOSU',0,-150);inner&&inner();x.restore();}
function devamiSaat(t,T,l1,l2,bg){bg();bigText(l1,540,540,150,YEL,prog(t,0,0.25),-0.04);bigText(l2,540,720,150,'#fff',prog(t,0.1,0.35),-0.03);eyesIcon(540,900,1.0,T);followBtn(540,1080,T,1.3*back(prog(t,0.2,0.5)));}
