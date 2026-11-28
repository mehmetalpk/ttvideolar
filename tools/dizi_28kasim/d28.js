// d28.js — 28 Kas: Müdürün Çay Cezası (A, Emrullah) + Yengemin Kına Jürisi (B, İrem)
// ---- A: iş yeri / çay ----
const ANL={skin:'#e8b48c',hair:'#2b1d16',shirt:'#5a8ac0'};
const CNG={skin:'#d9a07a',hair:'#5a5a60',shirt:'#f2f2f2',mustache:'#3a3a3e',skinShade:'#bf8660'};
const DNZ={skin:'#f0c29e',hair:'#7a4a26',hairStyle:'long',shirt:'#7ab89a',blush:true};
const HMD={skin:'#d4986e',hair:'#2a2a2a',hairStyle:'bald',mustache:'#1e1e1e',shirt:'#e8e0d0',skinShade:'#b47e58'};
const GMD={skin:'#e0aa84',hair:'#c4c4c8',shirt:'#23232e'};
function stubble(cx,cy,r){beard(cx,cy,r,'rgba(31,20,16,0.33)');}
function anl(cx,cy,r,o={}){person(ANL,cx,cy,r,o);stubble(cx,cy,r);x.fillStyle='#fff';x.beginPath();x.moveTo(cx-r*0.32,cy+r*1.05);x.lineTo(cx-r*0.05,cy+r*1.4);x.lineTo(cx-r*0.05,cy+r*1.05);x.moveTo(cx+r*0.32,cy+r*1.05);x.lineTo(cx+r*0.05,cy+r*1.4);x.lineTo(cx+r*0.05,cy+r*1.05);x.fill();}
function cng(cx,cy,r,o={}){
 // göbek
 x.fillStyle='#f2f2f2';x.beginPath();x.ellipse(cx,cy+r*3.0,r*1.55,r*1.6,0,0,7);x.fill();
 person(CNG,cx,cy,r,o);
 x.fillStyle='#f2f2f2';x.beginPath();x.ellipse(cx,cy+r*3.0,r*1.45,r*1.5,0,0,7);x.fill();
 // yelek
 x.fillStyle='#6a4a2e';x.beginPath();x.moveTo(cx-r*1.2,cy+r*1.15);x.lineTo(cx-r*0.25,cy+r*1.2);x.lineTo(cx-r*0.1,cy+r*4.5);x.lineTo(cx-r*1.55,cy+r*4.5);x.quadraticCurveTo(cx-r*1.75,cy+r*2.6,cx-r*1.2,cy+r*1.15);x.fill();
 x.beginPath();x.moveTo(cx+r*1.2,cy+r*1.15);x.lineTo(cx+r*0.25,cy+r*1.2);x.lineTo(cx+r*0.1,cy+r*4.5);x.lineTo(cx+r*1.55,cy+r*4.5);x.quadraticCurveTo(cx+r*1.75,cy+r*2.6,cx+r*1.2,cy+r*1.15);x.fill();
 x.fillStyle='#d4a838';[2.2,2.9,3.6].forEach(k=>{x.beginPath();x.arc(cx-r*0.2,cy+r*k,r*0.07,0,7);x.fill();});
 // kalın çerçeve gözlük
 const ey=cy-r*0.02;x.strokeStyle='#141414';x.lineWidth=r*0.1;[-1,1].forEach(s=>{rr(cx+s*r*0.34-r*0.22,ey-r*0.15,r*0.44,r*0.3,r*0.07);x.stroke();});x.beginPath();x.moveTo(cx-r*0.12,ey);x.lineTo(cx+r*0.12,ey);x.stroke();
}
function dnz(cx,cy,r,o={}){person(DNZ,cx,cy,r,o);x.fillStyle='#e8e8f0';rr(cx-r*0.25,cy+r*1.7,r*0.5,r*0.6,r*0.06);x.fill();x.strokeStyle='#3a6ad0';x.lineWidth=r*0.05;x.beginPath();x.moveTo(cx-r*0.2,cy+r*1.1);x.lineTo(cx,cy+r*1.7);x.lineTo(cx+r*0.2,cy+r*1.1);x.stroke();x.font=`900 ${r*0.16}px ${F}`;x.textAlign='center';x.fillStyle='#3a3a5a';x.fillText('STAJYER',cx,cy+r*2.0);}
function hmd(cx,cy,r,o={}){person(HMD,cx,cy,r,o);x.fillStyle='#fff';x.beginPath();x.moveTo(cx-r*0.9,cy+r*1.6);x.lineTo(cx+r*0.9,cy+r*1.6);x.lineTo(cx+r*1.0,cy+r*4.2);x.lineTo(cx-r*1.0,cy+r*4.2);x.fill();}
function gmd(cx,cy,r,o={}){person(GMD,cx,cy,r,o);x.fillStyle='#fff';x.beginPath();x.moveTo(cx-r*0.3,cy+r*1.05);x.lineTo(cx,cy+r*1.6);x.lineTo(cx+r*0.3,cy+r*1.05);x.fill();x.fillStyle='#b02030';x.beginPath();x.moveTo(cx-r*0.09,cy+r*1.12);x.lineTo(cx+r*0.09,cy+r*1.12);x.lineTo(cx+r*0.13,cy+r*2.3);x.lineTo(cx,cy+r*2.45);x.lineTo(cx-r*0.13,cy+r*2.3);x.fill();}
function stopwatch(cx,cy,s,T,run){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#9aa0a8';rr(-22,-150,44,40,8);x.fill();x.fillStyle='#c8ccd2';x.beginPath();x.arc(0,0,120,0,7);x.fill();x.fillStyle='#fff';x.beginPath();x.arc(0,0,98,0,7);x.fill();x.strokeStyle='#333';x.lineWidth=6;for(let i=0;i<12;i++){const a=i*Math.PI/6;x.beginPath();x.moveTo(Math.cos(a)*80,Math.sin(a)*80);x.lineTo(Math.cos(a)*92,Math.sin(a)*92);x.stroke();}
 const a=(run==null?1:run)*T*3-Math.PI/2;x.strokeStyle='#e02020';x.lineWidth=7;x.beginPath();x.moveTo(0,0);x.lineTo(Math.cos(a)*85,Math.sin(a)*85);x.stroke();x.fillStyle='#222';x.beginPath();x.arc(0,0,10,0,7);x.fill();x.restore();}
function cayG(cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#f4f4f4';x.beginPath();x.ellipse(0,62,70,16,0,0,7);x.fill();x.fillStyle='rgba(255,255,255,0.8)';x.beginPath();x.moveTo(-34,-70);x.quadraticCurveTo(-16,-10,-28,20);x.quadraticCurveTo(-38,50,-24,58);x.lineTo(24,58);x.quadraticCurveTo(38,50,28,20);x.quadraticCurveTo(16,-10,34,-70);x.closePath();x.fill();
 x.fillStyle='#b5301a';x.beginPath();x.moveTo(-30,-50);x.quadraticCurveTo(-15,-10,-25,20);x.quadraticCurveTo(-34,48,-21,54);x.lineTo(21,54);x.quadraticCurveTo(34,48,25,20);x.quadraticCurveTo(15,-10,30,-50);x.closePath();x.fill();x.restore();}
function steam(cx,cy,T,s){x.save();x.strokeStyle='rgba(255,255,255,0.55)';x.lineWidth=7*(s||1);x.lineCap='round';for(let i=0;i<3;i++){const ph=(T*0.7+i*0.33)%1;x.globalAlpha=1-ph;const bx=cx-30*(s||1)+i*30*(s||1),by=cy-ph*120*(s||1);x.beginPath();x.moveTo(bx,by);x.bezierCurveTo(bx+20,by-20,bx-20,by-40,bx,by-60*(s||1));x.stroke();}x.restore();}
function trayT(cx,cy,s,n,T){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#b8bcc4';x.beginPath();x.ellipse(0,40,260,60,0,0,7);x.fill();x.fillStyle='#d8dce2';x.beginPath();x.ellipse(0,30,240,52,0,0,7);x.fill();const k=Math.min(n||8,10);for(let i=0;i<k;i++){const row=i<5?0:1;const col=row?i-5:i;cayG(-180+col*90+row*45,-20+row*30-(row?0:20),0.6);}x.restore();if(T!=null)steam(cx,cy-80*s,T,s);}
function caydanlik(cx,cy,s,T){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#c8ccd2';x.beginPath();x.ellipse(0,60,150,110,0,0,7);x.fill();x.fillStyle='#e0e4ea';x.beginPath();x.ellipse(0,-90,95,70,0,0,7);x.fill();x.fillStyle='#9aa0a8';rr(-20,-175,40,30,8);x.fill();x.strokeStyle='#9aa0a8';x.lineWidth=14;x.beginPath();x.moveTo(140,20);x.quadraticCurveTo(230,-20,240,-70);x.stroke();x.beginPath();x.arc(0,-110,80,Math.PI*1.1,Math.PI*1.9);x.stroke();x.restore();steam(cx,cy-180*s,T,s);}
function officeBg(dark){const g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,dark?'#2a3340':'#dfe7ee');g.addColorStop(1,dark?'#141a22':'#c4d0dc');x.fillStyle=g;x.fillRect(-60,-60,W+120,H+120);
 x.fillStyle=dark?'#3a4a5c':'#a8c8e4';rr(700,420,300,380,10);x.fill();x.strokeStyle=dark?'#55667a':'#fff';x.lineWidth=12;x.beginPath();x.moveTo(850,420);x.lineTo(850,800);x.moveTo(700,610);x.lineTo(1000,610);x.stroke();
 x.fillStyle='#4a8a4a';x.beginPath();x.ellipse(110,1180,70,120,0,0,7);x.fill();x.fillStyle='#8a5a3a';rr(60,1250,100,110,10);x.fill();
 x.fillStyle=dark?'#1c222a':'#8f9cab';x.fillRect(-60,1450,W+120,600);}
function wallClock(cx,cy,s,hh,mm){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#222';x.beginPath();x.arc(0,0,110,0,7);x.fill();x.fillStyle='#fff';x.beginPath();x.arc(0,0,95,0,7);x.fill();x.strokeStyle='#222';x.lineWidth=5;for(let i=0;i<12;i++){const a=i*Math.PI/6;x.beginPath();x.moveTo(Math.cos(a)*78,Math.sin(a)*78);x.lineTo(Math.cos(a)*90,Math.sin(a)*90);x.stroke();}
 const ha=((hh%12)+mm/60)*Math.PI/6-Math.PI/2,ma=mm*Math.PI/30-Math.PI/2;x.lineWidth=10;x.beginPath();x.moveTo(0,0);x.lineTo(Math.cos(ha)*50,Math.sin(ha)*50);x.stroke();x.lineWidth=6;x.strokeStyle='#d02020';x.beginPath();x.moveTo(0,0);x.lineTo(Math.cos(ma)*80,Math.sin(ma)*80);x.stroke();x.restore();}
function bossChair(cx,cy,s,empty){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#2a1a12';rr(-170,-330,340,420,60);x.fill();x.fillStyle='#3a2418';rr(-140,-300,280,360,50);x.fill();x.fillStyle='#2a1a12';rr(-200,60,400,90,30);x.fill();x.fillStyle='#555';x.fillRect(-14,150,28,140);x.fillRect(-140,280,280,20);x.restore();}
// tally tahta: cols=[[ad,sayı,renk]], fill 0..1 animasyon
function tallyMarks(px,py,n,col,sz){x.strokeStyle=col;x.lineWidth=sz*0.12;x.lineCap='round';let g=0;for(let i=0;i<n;i++){const grp=Math.floor(i/5),k=i%5;const gx=px+(grp%2)*sz*1.25,gy=py+Math.floor(grp/2)*sz*1.05;if(k<4){x.beginPath();x.moveTo(gx+k*sz*0.22,gy);x.lineTo(gx+k*sz*0.22,gy+sz*0.8);x.stroke();}else{x.beginPath();x.moveTo(gx-sz*0.1,gy+sz*0.7);x.lineTo(gx+sz*0.8,gy+sz*0.1);x.stroke();}}}
function tallyBoard(cx,cy,s,cols,opt={}){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#8a8f99';rr(-470,-560,940,1120,18);x.fill();x.fillStyle='#fbfbf7';rr(-445,-535,890,1070,10);x.fill();
 x.textAlign='center';x.textBaseline='middle';x.font=`900 78px ${F}`;x.fillStyle='#c0392b';x.fillText(opt.title||'ÇAY BORCU',0,-460);x.strokeStyle='#c0392b';x.lineWidth=6;x.beginPath();x.moveTo(-300,-410);x.lineTo(300,-410);x.stroke();
 const n=cols.length,cw=860/n;cols.forEach(([nm,cnt,col],i)=>{const ccx=-430+cw*(i+0.5);x.font=`900 ${nm.length>8?40:48}px ${F}`;x.fillStyle=col||'#1b2a4a';x.fillText(nm,ccx,-350,cw-20);x.strokeStyle='#ccc';x.lineWidth=4;if(i>0){x.beginPath();x.moveTo(-430+cw*i,-380);x.lineTo(-430+cw*i,510);x.stroke();}
  if(opt.nums){x.font=`900 120px ${F}`;x.fillStyle=col||'#1b2a4a';x.fillText(String(cnt),ccx,430);}
  tallyMarks(ccx-cw*0.36,-290,cnt,col||'#1b2a4a',Math.min(70,cw*0.28));});x.restore();}
function notice(cx,cy,s,rot,hl){sheetX(cx,cy,s,rot,'DUYURU',['Bir dakika geç kalan','bütün ekibe','ÇAY ISMARLAR.','','Kural herkes için.','',' İmza: CENGİZ'],{tc:'#1b2a4a'});if(hl){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(s,s);x.strokeStyle='rgba(255,210,0,0.6)';x.lineWidth=46;x.beginPath();x.moveTo(-150,72);x.lineTo(150,72);x.stroke();x.restore();}}
function deftH(cx,cy,s,rot,rows){ledger(cx,cy,s,rot,'ÇAY DEFTERİ',rows);}
function tallyOne(px,py,sz,col,p){x.save();x.strokeStyle=col||'#c0392b';x.lineWidth=sz*0.14;x.lineCap='round';x.beginPath();x.moveTo(px,py);x.lineTo(px,py+sz*p);x.stroke();x.restore();}
function marker(cx,cy,s,rot){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(s,s);x.fillStyle='#c0392b';rr(-20,-120,40,180,10);x.fill();x.fillStyle='#fff';rr(-20,-40,40,30,4);x.fill();x.fillStyle='#222';x.beginPath();x.moveTo(-14,60);x.lineTo(14,60);x.lineTo(0,100);x.fill();x.restore();}
function excuse(cx,cy,tm,tx,p){if(p<=0)return;const s=back(p);x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#fff';rr(-420,-110,840,220,30);x.fill();x.font=`900 92px ${F}`;x.textAlign='center';x.textBaseline='middle';x.fillStyle='#d02020';x.fillText(tm,-210,0);x.font=`800 54px ${F}`;x.fillStyle='#222';x.fillText(tx,190,0,400);x.restore();}
// ---- B: kına ----
const ABL={skin:'#f0c4a0',hair:'#7a4a2a',hairStyle:'long',shirt:'#8a4ac0',blush:true};
const ECE={skin:'#f2c8a4',hair:'#3a2418',hairStyle:'long',shirt:'#b8142a',blush:true};
const SKR={skin:'#e8b490',hair:'#9a6a30',shirt:'#1f8a8a',skinShade:'#c8916c'};
const NRM={skin:'#e0a880',hair:'#2a1a12',bigHair:true,shirt:'#e07a3a'};
const SMR={skin:'#f0c8a8',hair:'#c8c8cc',shirt:'#34467a'};
function abl(cx,cy,r,o={}){person(ABL,cx,cy,r,o);x.strokeStyle='#6a3e22';x.lineWidth=r*0.06;[-1,1].forEach(s=>{x.beginPath();x.moveTo(cx+s*r*1.0,cy+r*0.3);x.quadraticCurveTo(cx+s*r*1.2,cy+r*0.7,cx+s*r*1.0,cy+r*1.1);x.stroke();});}
function kinaVeil(cx,cy,r){x.save();x.fillStyle='rgba(200,20,40,0.55)';x.beginPath();x.moveTo(cx-r*0.7,cy-r*1.0);x.quadraticCurveTo(cx-r*1.8,cy+r*1.4,cx-r*1.5,cy+r*3);x.lineTo(cx+r*1.5,cy+r*3);x.quadraticCurveTo(cx+r*1.8,cy+r*1.4,cx+r*0.7,cy-r*1.0);x.closePath();x.fill();x.fillStyle='#d4a838';x.beginPath();x.ellipse(cx,cy-r*1.0,r*0.75,r*0.14,0,0,7);x.fill();x.restore();}
function ece(cx,cy,r,o={}){if(o.veil!==false)kinaVeil(cx,cy,r);person(ECE,cx,cy,r,o);x.strokeStyle='#e8c040';x.lineWidth=r*0.06;x.beginPath();x.moveTo(cx-r*0.6,cy+r*1.3);x.quadraticCurveTo(cx,cy+r*1.9,cx+r*0.6,cy+r*1.3);x.stroke();for(let i=0;i<5;i++){x.fillStyle='#e8c040';x.beginPath();x.arc(cx-r*0.5+i*r*0.25,cy+r*2.1+Math.abs(i-2)*r*-0.05,r*0.07,0,7);x.fill();}
 if(o.tear){x.fillStyle='#8ad0ff';[-1,1].forEach(s=>{x.beginPath();x.ellipse(cx+s*r*0.36,cy+r*0.2+(o.tear*r*0.15),r*0.06,r*0.1,0,0,7);x.fill();});}}
function skr(cx,cy,r,o={}){bun(cx,cy,r,'#9a6a30');x.strokeStyle='#e8c878';x.lineWidth=r*0.07;[-0.2,0.1,0.35].forEach(k=>{x.beginPath();x.arc(cx,cy-r*1.22,r*0.32,k*Math.PI*2-0.8,k*Math.PI*2+0.2);x.stroke();});
 person(SKR,cx,cy,r,o);x.strokeStyle='#e8c878';x.lineWidth=r*0.08;[[-0.45,-0.75],[0.1,-0.85],[0.55,-0.6]].forEach(([a,b])=>{x.beginPath();x.moveTo(cx+a*r,cy+b*r);x.quadraticCurveTo(cx+a*r+r*0.15,cy+(b-0.25)*r,cx+a*r+r*0.3,cy+b*r-r*0.05);x.stroke();});
 // pullar
 for(let i=0;i<14;i++){const px=cx+(((i*37)%23)/23-0.5)*r*2.0,py=cy+r*1.4+((i*53)%19)/19*r*2.4;x.fillStyle=i%2?'#f4f0c0':'#9ef0f0';x.beginPath();x.arc(px,py,r*0.06,0,7);x.fill();}
 x.fillStyle='#e8c040';[-1,1].forEach(s=>{x.beginPath();x.arc(cx+s*r*0.88,cy+r*0.4,r*0.09,0,7);x.fill();});}
function nrm(cx,cy,r,o={}){person(NRM,cx,cy,r,o);}
function smr(cx,cy,r,o={}){person(SMR,cx,cy,r,o);pearls(cx,cy,r);bun(cx,cy+r*0.15,r*0.8,'#c8c8cc');}
const CARDC={1:'#d02020',2:'#d02020',3:'#d02020',4:'#e07a20',5:'#e07a20',6:'#c8a020',10:'#1a9a4a'};
function scoreCard(cx,cy,s,num,rot,o={}){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(s,s);x.fillStyle='#8a6a40';x.fillRect(-10,90,20,200);x.shadowColor='rgba(0,0,0,0.35)';x.shadowBlur=18;x.fillStyle='#fff';rr(-110,-130,220,240,18);x.fill();x.shadowBlur=0;
 x.font=`900 ${String(num).length>2?64:170}px ${F}`;x.textAlign='center';x.textBaseline='middle';x.fillStyle=o.col||CARDC[num]||'#1b2a4a';x.fillText(String(num),0,-5,200);
 if(o.torn){x.strokeStyle='#222';x.lineWidth=6;x.beginPath();x.moveTo(0,-130);for(let i=0;i<8;i++)x.lineTo((i%2?14:-14),-130+i*30+30);x.stroke();}x.restore();}
function cardDeck(cx,cy,s,rot){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(s,s);for(let i=4;i>=0;i--){x.save();x.rotate((i-2)*0.16);x.fillStyle='#fff';x.shadowColor='rgba(0,0,0,0.3)';x.shadowBlur=10;rr(-80,-170,160,190,12);x.fill();x.shadowBlur=0;x.font=`900 80px ${F}`;x.textAlign='center';x.textBaseline='middle';x.fillStyle=['#1a9a4a','#c8a020','#e07a20','#d02020','#3a6ad0'][i];x.fillText(String([10,7,5,3,1][i]),0,-80);x.restore();}x.restore();}
function kinaBg(T,dim){const g=x.createRadialGradient(540,800,100,540,800,1400);g.addColorStop(0,dim?'#3a1430':'#7a2050');g.addColorStop(1,dim?'#0a0208':'#24061a');x.fillStyle=g;x.fillRect(-60,-60,W+120,H+120);
 for(let k=0;k<2;k++){x.strokeStyle='rgba(255,220,150,0.5)';x.lineWidth=3;x.beginPath();x.moveTo(-40,330+k*120);x.quadraticCurveTo(540,470+k*120,1120,330+k*120);x.stroke();for(let i=0;i<14;i++){const px=-40+i*(1160/13),pt=i/13,py=(1-pt)*(1-pt)*(330+k*120)+2*(1-pt)*pt*(470+k*120)+pt*pt*(330+k*120);x.fillStyle=`rgba(255,${200+((i+k)%3)*20},120,${0.6+0.4*Math.sin(T*4+i+k)})`;x.beginPath();x.arc(px,py+8,9,0,7);x.fill();}}
 x.fillStyle=dim?'#1a0a14':'#3a1030';x.fillRect(-60,1450,W+120,600);x.fillStyle='rgba(255,210,120,0.08)';for(let i=0;i<6;i++){x.beginPath();x.ellipse(540,1600,500-i*60,90-i*10,0,0,7);x.fill();}}
function kinaTable(y,T){x.fillStyle='#f4ece0';rr(-40,y,W+80,60,10);x.fill();x.fillStyle='#e8d8c0';x.fillRect(-40,y+60,W+80,400);[200,540,880].forEach((cx,i)=>{x.fillStyle='#d4a838';x.beginPath();x.ellipse(cx,y+5,70,16,0,0,7);x.fill();x.fillStyle='#fff6e0';rr(cx-10,y-60,20,60,4);x.fill();const fl=0.8+0.2*Math.sin(T*14+i);x.fillStyle='#ffb030';x.beginPath();x.ellipse(cx,y-75,10*fl,20*fl,0,0,7);x.fill();});}
function djBooth(cx,cy,s,T){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#1a1a24';rr(-260,-60,520,260,20);x.fill();x.fillStyle='#2a2a3a';rr(-240,-90,480,50,10);x.fill();[-130,130].forEach(d=>{x.fillStyle='#111';x.beginPath();x.arc(d,-65,60,0.0,Math.PI,true);x.fill();});x.font=`900 64px ${F}`;x.textAlign='center';x.textBaseline='middle';x.fillStyle=`hsl(${(T*120)%360},90%,60%)`;x.fillText('DJ',0,70);x.restore();}
function spotOn(cx,T,p){if(p<=0)return;x.save();x.globalAlpha=0.55*Math.min(1,p);const g=x.createLinearGradient(0,0,0,1700);g.addColorStop(0,'rgba(255,250,210,0.9)');g.addColorStop(1,'rgba(255,250,210,0.15)');x.fillStyle=g;x.beginPath();x.moveTo(cx-60,-20);x.lineTo(cx+60,-20);x.lineTo(cx+330,1700);x.lineTo(cx-330,1700);x.fill();x.globalAlpha=0.35*Math.min(1,p);x.fillStyle='#fffbe0';x.beginPath();x.ellipse(cx,1650,340,70,0,0,7);x.fill();x.restore();}
function crowdCards(y,T,nums,p,o={}){const n=nums.length;for(let i=0;i<n;i++){const cx=90+i*(900/(n-1)),b=Math.abs(Math.sin(T*6+i))*8;x.fillStyle='#14161c';x.beginPath();x.ellipse(cx,y+170,62,110,0,0,7);x.fill();x.beginPath();x.arc(cx,y,54,0,7);x.fill();const k=prog(p,i*0.05,i*0.05+0.4);if(k>0)scoreCard(cx+20,y-170-b,0.55*back(k),nums[i],(i%2?0.08:-0.08),o);}}
function confetti(T,n){for(let i=0;i<(n||40);i++){const px=(i*97+T*60*(1+i%3))%W,py=((i*173)+T*260*(1+(i%4)*0.3))%H;x.fillStyle=['#ffd23f','#ff5a8a','#5ad0ff','#7ad07a'][i%4];x.save();x.translate(px,py);x.rotate(T*3+i);x.fillRect(-8,-14,16,28);x.restore();}}
