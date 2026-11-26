// 26 Kas — "Hocanın Tavuk Zil Sesi" (A, okul) + "Babamın Kombi Yasağı" (B, ev)
// ---- A: okul ----
const SB={skin:'#eab08a',hair:'#2a1a12',shirt:'#22305a',skinShade:'#c88e68'};
const NIHAT={skin:'#e0aa84',hair:'#3a3a40',shirt:'#f4f4f4',skinShade:'#c08e6a',mustache:'#2a2a2e',browCol:'#222'};
const BERK={skin:'#f0c29e',hair:'#6b4226',shirt:'#3a7a5a'};
const HULYA={skin:'#eab896',hair:'#4a2a1a',hairStyle:'long',shirt:'#2a3a5a',blush:true};
const SEVDA={skin:'#e8b48c',hair:'#3a2418',shirt:'#7a3a5a',blush:true};
const SANIYE={skin:'#e8b48c',hair:'#f2f2f2',shirt:'#6a8a4a',blush:true,skinShade:'#c8946c'};
function sb(cx,cy,r,o={}){person(SB,cx,cy,r,o);
 // kıvırcık bukleler (saçla aynı renk, tek parça üstüne)
 x.fillStyle=SB.hair;for(let i=0;i<7;i++){const a=-2.9+i*0.36;x.beginPath();x.arc(cx+Math.cos(a)*r*0.86,cy-r*0.45+Math.sin(a)*r*0.72,r*0.2,0,7);x.fill();}
 // ceket yakası + beyaz gömlek
 x.fillStyle='#fff';x.beginPath();x.moveTo(cx-r*0.3,cy+r*1.05);x.lineTo(cx,cy+r*1.5);x.lineTo(cx+r*0.3,cy+r*1.05);x.fill();
 x.fillStyle='#16203e';[-1,1].forEach(s=>{x.beginPath();x.moveTo(cx+s*r*0.3,cy+r*1.05);x.lineTo(cx+s*r*0.05,cy+r*1.9);x.lineTo(cx+s*r*0.55,cy+r*1.4);x.closePath();x.fill();});
 x.fillStyle='#ffd23f';rr(cx+r*0.5,cy+r*1.7,r*0.35,r*0.22,r*0.05);x.fill();}
function nihat(cx,cy,r,o={}){person(NIHAT,cx,cy,r,{brow:-0.1,...o});
 // önlük yakası
 x.fillStyle='#d8dde4';[-1,1].forEach(s=>{x.beginPath();x.moveTo(cx+s*r*0.28,cy+r*1.05);x.lineTo(cx+s*r*0.02,cy+r*2.2);x.lineTo(cx+s*r*0.6,cy+r*1.5);x.closePath();x.fill();});
 x.fillStyle='#5a6a8a';x.beginPath();x.moveTo(cx-r*0.22,cy+r*1.08);x.lineTo(cx,cy+r*1.35);x.lineTo(cx+r*0.22,cy+r*1.08);x.fill();
 x.fillStyle='#3b6fb6';x.fillRect(cx+r*0.5,cy+r*2.0,r*0.06,r*0.35);x.fillStyle='#e02030';x.fillRect(cx+r*0.62,cy+r*2.0,r*0.06,r*0.3);
 // gözlük burnun ucunda
 const gy=cy+r*0.1;x.strokeStyle='#222';x.lineWidth=r*0.045;[-1,1].forEach(s=>{x.beginPath();x.ellipse(cx+s*r*0.3,gy,r*0.17,r*0.11,0,0,7);x.stroke();});x.beginPath();x.moveTo(cx-r*0.07,gy);x.lineTo(cx+r*0.07,gy);x.stroke();
 // kalın bıyık
 x.fillStyle='#2a2a2e';x.beginPath();x.ellipse(cx-r*0.15,cy+r*0.37,r*0.22,r*0.09,0.15,0,7);x.ellipse(cx+r*0.15,cy+r*0.37,r*0.22,r*0.09,-0.15,0,7);x.fill();}
function berk(cx,cy,r,o={}){person(BERK,cx,cy,r,o);
 x.strokeStyle='#222';x.lineWidth=r*0.12;x.beginPath();x.arc(cx,cy+r*1.0,r*0.7,0.15,Math.PI-0.15);x.stroke();
 x.fillStyle='#e02030';[-1,1].forEach(s=>{x.beginPath();x.ellipse(cx+s*r*0.7,cy+r*1.15,r*0.18,r*0.24,0,0,7);x.fill();});}
function hulya(cx,cy,r,o={}){person(HULYA,cx,cy,r,o);x.fillStyle='#fff';x.beginPath();x.moveTo(cx-r*0.25,cy+r*1.05);x.lineTo(cx,cy+r*1.4);x.lineTo(cx+r*0.25,cy+r*1.05);x.fill();
 x.fillStyle='#d4a838';x.beginPath();x.arc(cx,cy+r*1.12,r*0.06,0,7);x.fill();}
function sevda(cx,cy,r,o={}){x.fillStyle=SEVDA.hair;x.beginPath();x.arc(cx,cy-r*1.32,r*0.4,0,7);x.fill();person(SEVDA,cx,cy,r,o);
 x.fillStyle='#e0b040';x.beginPath();x.arc(cx-r*0.3,cy+r*1.3,r*0.06,0,7);x.arc(cx+r*0.3,cy+r*1.3,r*0.06,0,7);x.fill();}
function saniye(cx,cy,r,o={}){person(SANIYE,cx,cy,r,{smile:0.8,...o});
 // beyaz yazma: başı ve çeneyi saran
 x.fillStyle='#fbfbf4';x.beginPath();x.moveTo(cx-r*1.0,cy+r*0.5);x.bezierCurveTo(cx-r*1.25,cy-r*1.7,cx+r*1.25,cy-r*1.7,cx+r*1.0,cy+r*0.5);x.quadraticCurveTo(cx+r*0.95,cy+r*1.2,cx+r*0.5,cy+r*1.35);x.lineTo(cx+r*0.6,cy+r*0.4);
 x.quadraticCurveTo(cx+r*0.82,cy-r*0.75,cx,cy-r*0.78);x.quadraticCurveTo(cx-r*0.82,cy-r*0.75,cx-r*0.6,cy+r*0.4);x.lineTo(cx-r*0.5,cy+r*1.35);x.quadraticCurveTo(cx-r*0.95,cy+r*1.2,cx-r*1.0,cy+r*0.5);x.fill();
 x.strokeStyle='#d8d4c0';x.lineWidth=r*0.03;for(let i=0;i<5;i++){x.beginPath();x.arc(cx-r*0.6+i*r*0.3,cy-r*0.98,r*0.05,0,7);x.stroke();}}
// telefon (tavuk zil sesi)
function chickPhone(cx,cy,s,T,ring,rot){x.save();x.translate(cx,cy);x.rotate(rot||0);if(ring)x.rotate(Math.sin(T*40)*0.06);x.scale(s,s);x.fillStyle='#111';rr(-110,-210,220,420,30);x.fill();x.fillStyle=ring?'#ffb020':'#2b3a6a';rr(-96,-190,192,380,18);x.fill();
 if(ring){chicken(0,10,0.55,T,false);x.font=`900 34px ${F}`;x.textAlign='center';x.fillStyle='#111';x.fillText('ANNEM ☎',0,-140);}x.restore();if(ring)ringWaves(cx,cy-s*120,s*1.1,T);}
function phoneOn(cx,cy,s,T,name,rot){x.save();x.translate(cx,cy);x.rotate((rot||0)+Math.sin(T*40)*0.05);x.scale(s,s);x.fillStyle='#111';rr(-110,-210,220,420,30);x.fill();x.fillStyle='#1d5a3a';rr(-96,-190,192,380,18);x.fill();
 x.fillStyle='#fff';x.beginPath();x.arc(0,-60,55,0,7);x.fill();x.fillStyle='#1d5a3a';x.beginPath();x.arc(0,-75,22,0,7);x.fill();x.beginPath();x.ellipse(0,-25,36,22,0,Math.PI,0);x.fill();
 x.font=`900 36px ${F}`;x.textAlign='center';x.fillStyle='#fff';x.fillText(name,0,50,180);x.fillStyle='#39d353';x.beginPath();x.arc(0,130,36,0,7);x.fill();x.restore();ringWaves(cx,cy-s*120,s*1.1,T);}
function tDesk(cx,cy,s,open,T,wig){x.save();x.translate(cx,cy);if(wig)x.translate(Math.sin(T*60)*6,0);x.scale(s,s);x.fillStyle='#7a5434';rr(-380,-40,760,60,12);x.fill();x.fillStyle='#8f6844';rr(-360,20,720,300,10);x.fill();
 x.fillStyle='#6a4a2e';rr(-320,60,300,100,8);x.fill();x.fillStyle='#d4a838';rr(-200,100,60,18,8);x.fill();
 if(open){x.fillStyle='#5a3e26';rr(-340,150,340,70,8);x.fill();}x.restore();}
function sheetX(cx,cy,s,rot,title,lines,opt={}){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(s,s);x.fillStyle=opt.bg||'#fffdf4';x.shadowColor='rgba(0,0,0,0.35)';x.shadowBlur=24;rr(-240,-320,480,640,12);x.fill();x.shadowBlur=0;
 x.textAlign='center';x.textBaseline='middle';x.font=`900 46px ${F}`;x.fillStyle=opt.tc||'#c0392b';x.fillText(title,0,-250,430);x.font=`800 34px ${F}`;x.fillStyle='#222';(lines||[]).forEach((l,i)=>x.fillText(l,0,-160+i*58,430));
 if(opt.sig){x.strokeStyle='#1f4a8a';x.lineWidth=6;x.beginPath();x.moveTo(-120,230);for(let i=0;i<=20;i++){x.lineTo(-120+i*12,230+Math.sin(i*1.4)*22*Math.min(1,opt.sig*1.2));if(i/20>opt.sig)break;}x.stroke();x.font=`700 26px ${F}`;x.fillStyle='#888';x.fillText('İmza',0,290);}x.restore();}
function stuRow(y,r,T,o={}){for(let i=0;i<4;i++){const sx=150+i*260;person(STU[i%STU.length],sx,y+(i%2)*20,r,{eyeBig:o.eyeBig,mouthOpen:o.mouthOpen,smile:o.smile,look:o.look});}}
function desksRow(y){x.fillStyle='#b88a5a';for(let i=0;i<4;i++){rr(60+i*260,y,200,40,8);x.fill();}}
function phoneBox(cx,cy,s,T,cl){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#c8955a';rr(-260,-120,520,300,14);x.fill();x.fillStyle='#b07e46';rr(-280,-150,560,60,10);x.fill();
 x.fillStyle='#fff';rr(-200,-40,400,110,12);x.fill();x.font=`900 50px ${F}`;x.textAlign='center';x.textBaseline='middle';x.fillStyle='#c0392b';x.fillText('📵 TELEFONLAR',0,15,370);x.restore();}
function cluck(cx,cy,sz,T,p){if(p<=0)return;x.save();x.translate(cx,cy);x.rotate(Math.sin(T*30)*0.05);bigText('GIDAK!',0,0,sz,YEL,p,-0.06);x.restore();}
// ---- B: ev / kombi ----
const OGUL={skin:'#e2a87e',hair:'#1f1410',shirt:'#555c6a',skinShade:'#c48e66'};
const BABAK={skin:'#d9a07a',hair:'#4a4a50',shirt:'#c8d4e0',skinShade:'#bf8660',browCol:'#2a2a2e'};
const GULAY={skin:'#eab896',hair:'#6a3a2a',shirt:'#e8d8c0',blush:true};
const ELIF={skin:'#f0c29e',hair:'#3a2418',hairStyle:'long',shirt:'#c0506a',blush:true};
function ogul(cx,cy,r,o={}){x.fillStyle='#4a505c';x.beginPath();x.ellipse(cx,cy+r*1.05,r*1.05,r*0.35,0,0,7);x.fill();person(OGUL,cx,cy,r,o);
 x.fillStyle='rgba(31,20,16,0.85)';x.beginPath();x.moveTo(cx-r*0.86,cy+r*0.05);x.quadraticCurveTo(cx-r*0.8,cy+r*1.05,cx,cy+r*1.1);x.quadraticCurveTo(cx+r*0.8,cy+r*1.05,cx+r*0.86,cy+r*0.05);x.quadraticCurveTo(cx+r*0.6,cy+r*0.62,cx+r*0.25,cy+r*0.68);x.quadraticCurveTo(cx,cy+r*0.35,cx-r*0.25,cy+r*0.68);x.quadraticCurveTo(cx-r*0.6,cy+r*0.62,cx-r*0.86,cy+r*0.05);x.fill();
 const my=cy+r*0.52;if(o.mouthOpen>0){x.fillStyle='#5a1f25';x.beginPath();x.ellipse(cx,my,r*0.17,r*0.04+r*0.13*o.mouthOpen,0,0,7);x.fill();}else{x.strokeStyle='#d88';x.lineWidth=r*0.05;x.beginPath();x.moveTo(cx-r*0.16,my);x.quadraticCurveTo(cx,my+(o.smile||0)*r*0.2,cx+r*0.16,my);x.stroke();}
 x.strokeStyle='#ddd';x.lineWidth=r*0.05;x.beginPath();x.moveTo(cx-r*0.25,cy+r*1.2);x.lineTo(cx-r*0.3,cy+r*1.8);x.moveTo(cx+r*0.25,cy+r*1.2);x.lineTo(cx+r*0.3,cy+r*1.8);x.stroke();}
function babak(cx,cy,r,o={}){person(BABAK,cx,cy,r,{brow:-0.1,...o});
 x.fillStyle='#2a2a2e';x.beginPath();x.ellipse(cx-r*0.16,cy+r*0.37,r*0.24,r*0.1,0.12,0,7);x.ellipse(cx+r*0.16,cy+r*0.37,r*0.24,r*0.1,-0.12,0,7);x.fill();
 // gömlek cebi + termometre
 x.strokeStyle='#9aa8b8';x.lineWidth=r*0.04;x.strokeRect(cx+r*0.35,cy+r*1.7,r*0.5,r*0.45);x.fillStyle='#fff';rr(cx+r*0.5,cy+r*1.35,r*0.12,r*0.6,r*0.06);x.fill();x.fillStyle='#e02030';x.fillRect(cx+r*0.535,cy+r*1.55,r*0.05,r*0.35);x.beginPath();x.arc(cx+r*0.56,cy+r*1.92,r*0.07,0,7);x.fill();}
function gulay(cx,cy,r,o={}){person(GULAY,cx,cy,r,o);x.fillStyle=GULAY.hair;[-1,1].forEach(s=>{x.beginPath();x.ellipse(cx+s*r*0.88,cy-r*0.05,r*0.2,r*0.4,0,0,7);x.fill();});
 x.fillStyle=o.coat?'#3a4a6a':'#b05a3a';[-1,1].forEach(s=>{x.beginPath();x.moveTo(cx+s*r*1.2,cy+r*1.35);x.lineTo(cx+s*r*0.28,cy+r*1.05);x.lineTo(cx+s*r*0.1,cy+r*2.6);x.lineTo(cx+s*r*0.1,cy+r*5);x.lineTo(cx+s*r*1.2,cy+r*5);x.closePath();x.fill();});
 if(o.coat){x.fillStyle='#2a3a5a';x.beginPath();x.ellipse(cx,cy+r*1.1,r*0.9,r*0.3,0,0,7);x.fill();}}
function elif(cx,cy,r,o={}){person(ELIF,cx,cy,r,o);if(o.blanket){x.fillStyle='#4a6ab0';x.beginPath();x.moveTo(cx-r*1.4,cy+r*5);x.lineTo(cx-r*1.3,cy+r*0.2);x.quadraticCurveTo(cx,cy-r*1.75,cx+r*1.3,cy+r*0.2);x.lineTo(cx+r*1.4,cy+r*5);x.closePath();
 x.moveTo(cx,cy-r*1.0);x.ellipse(cx,cy+r*0.05,r*0.84,r*1.0,0,0,7);x.fill('evenodd');x.strokeStyle='#ffd23f';x.lineWidth=r*0.06;for(let i=0;i<3;i++){x.beginPath();x.moveTo(cx-r*1.3,cy+r*1.6+i*r*0.7);x.lineTo(cx+r*1.3,cy+r*1.6+i*r*0.7);x.stroke();}}}
function vestK(cx,cy,r){x.fillStyle='#c0603a';[-1,1].forEach(s=>{x.beginPath();x.moveTo(cx+s*r*1.2,cy+r*1.35);x.lineTo(cx+s*r*0.28,cy+r*1.05);x.lineTo(cx+s*r*0.1,cy+r*2.6);x.lineTo(cx+s*r*0.1,cy+r*5);x.lineTo(cx+s*r*1.2,cy+r*5);x.closePath();x.fill();});
 x.strokeStyle='#e8a070';x.lineWidth=r*0.05;for(let i=0;i<6;i++){[-1,1].forEach(s=>{x.beginPath();x.moveTo(cx+s*r*0.4,cy+r*1.8+i*r*0.5);x.lineTo(cx+s*r*0.7,cy+r*2.0+i*r*0.5);x.lineTo(cx+s*r*1.0,cy+r*1.8+i*r*0.5);x.stroke();});}}
function thermo(cx,cy,s,temp,locked,T,col){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#f4f4f4';x.shadowColor='rgba(0,0,0,0.3)';x.shadowBlur=20;rr(-200,-200,400,400,40);x.fill();x.shadowBlur=0;
 x.fillStyle='#1a2a3a';x.beginPath();x.arc(0,-20,140,0,7);x.fill();x.font=`900 120px ${F}`;x.textAlign='center';x.textBaseline='middle';x.fillStyle=col||'#5ac8fa';x.fillText(temp+'°',10,-20);
 x.font=`800 30px ${F}`;x.fillStyle='#888';x.fillText('KOMBİ',0,160);x.restore();if(locked)lock(cx+s*170,cy-s*170,s*0.55,'#e02030');}
function meterK(cx,cy,s,val,T,spin,col){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#d8dde4';rr(-230,-300,460,600,30);x.fill();x.strokeStyle='#8a96a8';x.lineWidth=10;rr(-230,-300,460,600,30);x.stroke();
 x.fillStyle='#111';rr(-180,-220,360,130,14);x.fill();x.font=`900 84px monospace`;x.textAlign='center';x.textBaseline='middle';x.fillStyle=col||'#39d353';x.fillText(val,0,-152);
 x.fillStyle='#fff';x.beginPath();x.arc(0,80,120,0,7);x.fill();x.strokeStyle='#333';x.lineWidth=8;x.stroke();x.save();x.translate(0,80);x.rotate(T*(spin||1)*6);x.fillStyle='#e02030';x.fillRect(-8,-110,16,110);x.restore();
 x.font=`800 30px ${F}`;x.fillStyle='#555';x.fillText('kWh',0,240);x.restore();}
function ledger(cx,cy,s,rot,title,rows,opt={}){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(s,s);x.fillStyle='#2a4a8a';rr(-290,-380,580,760,20);x.fill();x.fillStyle='#fffdf2';rr(-265,-355,530,710,10);x.fill();
 x.textAlign='left';x.textBaseline='middle';x.font=`900 44px ${F}`;x.fillStyle='#c0392b';x.fillText(title,-235,-300,470);x.strokeStyle='rgba(80,130,200,0.35)';x.lineWidth=3;for(let i=0;i<9;i++){x.beginPath();x.moveTo(-245,-240+i*68);x.lineTo(245,-240+i*68);x.stroke();}
 x.font=`800 36px ${F}`;(rows||[]).forEach((r,i)=>{const t=typeof r==='string'?r:r[0];x.fillStyle=(r[1]||'#222');x.fillText(t,-235,-205+i*68,470);});x.restore();}
function heater(cx,cy,s,T,glow){x.save();x.translate(cx,cy);x.scale(s,s);if(glow){const g=x.createRadialGradient(0,0,40,0,0,420);g.addColorStop(0,'rgba(255,140,30,0.55)');g.addColorStop(1,'rgba(255,140,30,0)');x.fillStyle=g;x.fillRect(-450,-450,900,900);}
 x.fillStyle='#e8e8ec';rr(-230,-200,460,360,30);x.fill();x.fillStyle='#333';rr(-190,-160,380,250,16);x.fill();
 for(let i=0;i<6;i++){x.fillStyle=glow?`rgb(255,${110+Math.sin(T*6+i)*30},30)`:'#555';rr(-170,-145+i*40,340,20,8);x.fill();}
 x.fillStyle='#888';rr(-200,160,80,40,10);x.fill();rr(120,160,80,40,10);x.fill();x.fillStyle='#e02030';x.beginPath();x.arc(150,120,18,0,7);x.fill();x.restore();}
function darkHall(T,glow){x.fillStyle='#0b0e1a';x.fillRect(-60,-60,W+120,H+120);x.fillStyle='#161b2e';x.fillRect(-60,1350,W+120,700);
 x.fillStyle='#232a44';rr(300,380,480,980,10);x.fill();x.fillStyle='#2e3656';rr(330,410,420,950,8);x.fill();x.fillStyle='#c8a040';x.beginPath();x.arc(700,900,18,0,7);x.fill();
 if(glow){const k=0.75+0.25*Math.sin(T*7);const g=x.createLinearGradient(0,1360,0,1700);g.addColorStop(0,`rgba(255,140,30,${0.9*k})`);g.addColorStop(1,'rgba(255,140,30,0)');x.fillStyle=g;x.beginPath();x.moveTo(300,1360);x.lineTo(780,1360);x.lineTo(980,1750);x.lineTo(100,1750);x.closePath();x.fill();x.fillStyle=`rgba(255,170,60,${k})`;x.fillRect(300,1350,480,14);}}
function homeK(cold){room(cold?'#c9d8e6':'#f1e2c6',cold?'#6a7a8a':'#9a6a40');if(cold){x.fillStyle='rgba(255,255,255,0.5)';for(let i=0;i<14;i++){const sx=(i*173)%1080,sy=(i*97)%1300;x.font=`900 50px ${F}`;x.fillText('❄',sx,sy+60);}}}
function frost(a){x.fillStyle=`rgba(180,220,255,${a})`;x.fillRect(-60,-60,W+120,H+120);}
function glove(cx,cy,s,col){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle=col||'#c0392b';x.beginPath();x.ellipse(0,0,60,70,0,0,7);x.fill();for(let i=0;i<4;i++){rr(-52+i*28,-120,24,80,12);x.fill();}rr(45,-35,24,60,12);x.fill();x.fillStyle='#fff';x.fillRect(-60,50,120,30);x.restore();}
function kbd(cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#2a2d34';rr(-300,-80,600,160,16);x.fill();x.fillStyle='#4a4e58';for(let r=0;r<3;r++)for(let c=0;c<10;c++){rr(-275+c*55,-60+r*45,45,35,6);x.fill();}x.restore();}
function coatMom(cx,cy,r){x.fillStyle='#3a4a6a';x.fillRect(cx-r*1.3,cy+r*1.2,r*2.6,r*4);x.fillStyle='#e0e0e0';x.beginPath();x.ellipse(cx,cy+r*1.15,r*1.0,r*0.32,0,0,7);x.fill();}
function pike(cx,cy,s,lift){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#d88aa8';x.beginPath();x.moveTo(-380,60);x.quadraticCurveTo(-300,-200-lift*200,0,-180-lift*260);x.quadraticCurveTo(300,-200-lift*200,380,60);x.closePath();x.fill();
 x.strokeStyle='#fff';x.lineWidth=6;for(let i=-3;i<=3;i++){x.beginPath();x.arc(i*100,-40-lift*120,20,0,7);x.stroke();}x.restore();}
function plaidSlip(cx,cy,s,rot){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(s,s);x.fillStyle='#8a2a2a';x.beginPath();x.ellipse(0,0,150,60,0,0,7);x.fill();x.save();x.beginPath();x.ellipse(0,0,150,60,0,0,7);x.clip();x.strokeStyle='#e8c060';x.lineWidth=8;for(let i=-150;i<150;i+=40){x.beginPath();x.moveTo(i,-60);x.lineTo(i,60);x.stroke();}for(let j=-60;j<60;j+=30){x.beginPath();x.moveTo(-150,j);x.lineTo(150,j);x.stroke();}x.restore();x.restore();}
function kTable(y){x.fillStyle='#8a5e38';rr(40,y,1000,60,16);x.fill();x.fillStyle='#6a4a2e';x.fillRect(100,y+60,40,400);x.fillRect(940,y+60,40,400);}
function bigCalc(cx,cy,s,lines){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#2a2d34';rr(-260,-340,520,680,30);x.fill();x.fillStyle='#c8e6c0';rr(-220,-300,440,300,14);x.fill();x.font=`900 50px ${F}`;x.textAlign='right';x.textBaseline='middle';x.fillStyle='#123';(lines||[]).forEach((l,i)=>x.fillText(l,200,-250+i*70,400));
 x.fillStyle='#4a4e58';for(let r=0;r<3;r++)for(let c=0;c<4;c++){rr(-210+c*108,40+r*95,90,75,12);x.fill();}x.restore();}
