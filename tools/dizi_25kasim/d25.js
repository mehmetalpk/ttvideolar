// 25 Kas — "Dedemin Mirası" (A, köy) + "Yengemin Uydurduğu Nişanlı" (B, bayram sofrası)
// ---- A: köy / miras ----
const TORUN={skin:'#efc09c',hair:'#6b3a1a',hairStyle:'long',shirt:'#e07a30',blush:true};
const HUSNU={skin:'#d9a07a',hair:'#e6e6e6',mustache:'#f4f4f4',browCol:'#d8d8d8',shirt:'#6a5a3a',skinShade:'#bf8660'};
const TOLGA={skin:'#f0c29e',hair:'#1a1a1a',shirt:'#22283a'};
const SINEM={skin:'#f2c6a4',hair:'#c8a060',hairStyle:'long',shirt:'#e0408a',blush:true};
const NEVIN={skin:'#e2b08a',hair:'#5a2a1a',bigHair:true,shirt:'#8a3a6a',skinShade:'#c4916c'};
const YUSUF={skin:'#c98e66',hair:'#3a2a1a',mustache:'#3a2a1a',shirt:'#5a7a3a',skinShade:'#a8724e'};
function torun(cx,cy,r,o={}){person(TORUN,cx,cy,r,o);}
function kasket(cx,cy,r){x.fillStyle='#5a5048';x.beginPath();x.ellipse(cx,cy-r*0.72,r*0.98,r*0.42,0,Math.PI,0);x.fill();x.beginPath();x.ellipse(cx+r*0.15,cy-r*0.68,r*1.02,r*0.16,0.05,0,7);x.fill();x.fillStyle='#4a4038';x.beginPath();x.ellipse(cx+r*0.55,cy-r*0.6,r*0.55,r*0.12,0.1,0,7);x.fill();}
function husnu(cx,cy,r,o={}){person(HUSNU,cx,cy,r,o);kasket(cx,cy,r);
 // yelek düğmeleri + beyaz gömlek yakası
 x.fillStyle='#fff';x.beginPath();x.moveTo(cx-r*0.28,cy+r*1.05);x.lineTo(cx,cy+r*1.4);x.lineTo(cx+r*0.28,cy+r*1.05);x.fill();}
function cane(cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.strokeStyle='#6a4022';x.lineWidth=22;x.lineCap='round';x.beginPath();x.moveTo(0,300);x.lineTo(0,-200);x.arc(-50,-200,50,0,Math.PI,true);x.stroke();x.restore();}
function tolga(cx,cy,r,o={}){person(TOLGA,cx,cy,r,o);x.fillStyle='#fff';x.beginPath();x.moveTo(cx-r*0.3,cy+r*1.05);x.lineTo(cx,cy+r*1.6);x.lineTo(cx+r*0.3,cy+r*1.05);x.fill();x.fillStyle='#c0392b';x.beginPath();x.moveTo(cx-r*0.08,cy+r*1.15);x.lineTo(cx+r*0.08,cy+r*1.15);x.lineTo(cx+r*0.12,cy+r*2.2);x.lineTo(cx,cy+r*2.4);x.lineTo(cx-r*0.12,cy+r*2.2);x.fill();}
function sinem(cx,cy,r,o={}){person(SINEM,cx,cy,r,o);const ey=cy-r*0.02;
 // abartılı makyaj: kirpik + kırmızı ruj + far
 x.fillStyle='rgba(150,60,200,0.35)';[-1,1].forEach(s=>{x.beginPath();x.ellipse(cx+s*r*0.33,ey-r*0.1,r*0.17,r*0.09,0,0,7);x.fill();});
 x.strokeStyle='#111';x.lineWidth=r*0.03;[-1,1].forEach(s=>{for(let k=0;k<3;k++){x.beginPath();x.moveTo(cx+s*(r*0.25+k*r*0.08),ey-r*0.08);x.lineTo(cx+s*(r*0.27+k*r*0.1),ey-r*0.2);x.stroke();}});
 if(!o.mouthOpen){x.fillStyle='#d01040';x.beginPath();x.ellipse(cx,cy+r*0.5+(o.smile||0)*r*0.05,r*0.17,r*0.07,0,0,7);x.fill();}
 if(o.mascara){x.strokeStyle='#111';x.lineWidth=r*0.04;[-1,1].forEach(s=>{x.beginPath();x.moveTo(cx+s*r*0.33,ey+r*0.1);x.quadraticCurveTo(cx+s*r*0.36,ey+r*0.3*o.mascara,cx+s*r*0.31,ey+r*0.55*o.mascara);x.stroke();});}}
function nevin(cx,cy,r,o={}){person(NEVIN,cx,cy,r,o);}
function yusuf(cx,cy,r,o={}){person(YUSUF,cx,cy,r,o);x.fillStyle='#4a6a2e';x.fillRect(cx-r*1.2,cy+r*2.6,r*2.4,r*0.15);}
function boots(cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);[-1,1].forEach(k=>{x.fillStyle='#2a3a2a';rr(k*90-55,-220,110,240,20);x.fill();rr(k*90-55,-10,k>0?170:150,70,30);x.fill();x.fillStyle='#6a4a2a';for(let i=0;i<5;i++){x.beginPath();x.arc(k*90-40+i*28,30-((i*37)%40),14+((i*13)%10),0,7);x.fill();}x.beginPath();x.ellipse(k*90,-60,40,26,0.3,0,7);x.fill();});x.fillStyle='#6a4a2a';x.globalAlpha=0.6;for(let i=0;i<8;i++){x.beginPath();x.ellipse(-200+i*60,85,30,10,0,0,7);x.fill();}x.restore();}
function chicken(cx,cy,s,T,peck){x.save();x.translate(cx,cy);x.scale(s,s);const p=peck?Math.max(0,Math.sin(T*8))*0.5:0;
 x.fillStyle='#e0a030';x.fillRect(-25,60,10,60);x.fillRect(15,60,10,60);
 x.fillStyle='#fff';x.beginPath();x.ellipse(0,0,100,80,0,0,7);x.fill();x.beginPath();x.moveTo(-90,-20);x.lineTo(-150,-70);x.lineTo(-110,10);x.fill();
 x.fillStyle='#eee';x.beginPath();x.ellipse(-10,10,55,35,0.2,0,7);x.fill();
 x.save();x.translate(70,-50);x.rotate(p);x.fillStyle='#fff';x.beginPath();x.arc(0,0,48,0,7);x.fill();x.fillStyle='#e0202a';x.beginPath();x.arc(-10,-48,14,0,7);x.arc(8,-50,14,0,7);x.arc(24,-42,12,0,7);x.fill();x.beginPath();x.ellipse(34,30,10,16,0,0,7);x.fill();x.fillStyle='#f0a020';x.beginPath();x.moveTo(42,-6);x.lineTo(78,6);x.lineTo(42,16);x.fill();x.fillStyle='#111';x.beginPath();x.arc(18,-10,7,0,7);x.fill();x.restore();x.restore();}
function feed(cx,cy,T){x.fillStyle='#e8c040';for(let i=0;i<14;i++){const k=((T*1.2+i/14)%1);x.beginPath();x.arc(cx+(i%5-2)*40+k*30,cy+k*160,7,0,7);x.fill();}}
function yard(){sky('#9fd3f5','#e6f4ff');x.fillStyle='#7ab648';x.fillRect(-60,1150,W+120,900);x.fillStyle='#8a6a40';for(let i=0;i<9;i++){x.fillRect(-20+i*140,1020,22,200);}x.fillRect(-60,1060,W+120,16);x.fillRect(-60,1140,W+120,16);}
function villageHouse(cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#f2e2c4';x.fillRect(-300,-200,600,400);x.fillStyle='#b5482a';x.beginPath();x.moveTo(-350,-190);x.lineTo(0,-420);x.lineTo(350,-190);x.fill();x.fillStyle='#6a4022';rr(-60,30,120,170,8);x.fill();x.fillStyle='#8fc8ee';rr(-240,-120,130,110,6);x.fill();rr(110,-120,130,110,6);x.fill();x.strokeStyle='#6a4022';x.lineWidth=8;x.strokeRect(-240,-120,130,110);x.strokeRect(110,-120,130,110);x.restore();}
function carS(cx,cy,s,col){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle=col||'#3b6fb6';rr(-220,-60,440,110,30);x.fill();x.beginPath();x.moveTo(-140,-60);x.lineTo(-90,-140);x.lineTo(100,-140);x.lineTo(150,-60);x.fill();x.fillStyle='#bfe3ff';x.beginPath();x.moveTo(-115,-65);x.lineTo(-80,-122);x.lineTo(0,-122);x.lineTo(0,-65);x.fill();x.beginPath();x.moveTo(15,-65);x.lineTo(15,-122);x.lineTo(92,-122);x.lineTo(128,-65);x.fill();x.fillStyle='#222';[-130,130].forEach(a=>{x.beginPath();x.arc(a,50,48,0,7);x.fill();});x.fillStyle='#aaa';[-130,130].forEach(a=>{x.beginPath();x.arc(a,50,20,0,7);x.fill();});x.restore();}
function tabletG(cx,cy,s,rot){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(s,s);x.fillStyle='#222';rr(-170,-120,340,240,24);x.fill();x.fillStyle='#5aa0e8';rr(-150,-100,300,200,10);x.fill();x.fillStyle='#ff2d55';x.beginPath();x.moveTo(-60,-140);x.lineTo(0,-110);x.lineTo(60,-140);x.lineTo(60,-90);x.lineTo(0,-110);x.lineTo(-60,-90);x.fill();x.restore();}
function scarf(cx,cy,s,T){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#d050a0';x.beginPath();x.moveTo(-200,-80);for(let i=0;i<=8;i++)x.lineTo(-200+i*50,-80+Math.sin(T*4+i)*14);x.lineTo(200,80);for(let i=8;i>=0;i--)x.lineTo(-200+i*50,80+Math.sin(T*4+i+1)*14);x.fill();x.fillStyle='rgba(255,255,255,0.35)';for(let i=0;i<6;i++){x.beginPath();x.arc(-150+i*60,Math.sin(i)*20,14,0,7);x.fill();}x.restore();}
function borekTray(cx,cy,s,n){x.save();x.translate(cx,cy);x.scale(s,s);for(let k=0;k<(n||1);k++){const y=-k*60;x.fillStyle='#9a9aa2';x.beginPath();x.ellipse(0,y+20,210,50,0,0,7);x.fill();x.fillStyle='#e0a850';x.beginPath();x.ellipse(0,y,180,40,0,0,7);x.fill();x.strokeStyle='#b8782a';x.lineWidth=5;for(let i=-2;i<=2;i++){x.beginPath();x.moveTo(i*60-40,y-25);x.lineTo(i*60+40,y+25);x.stroke();}}x.restore();}
function blackBook(cx,cy,s,rot,open,title,lines,p){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(s,s);
 if(!open){x.fillStyle='#1a1a1e';rr(-150,-210,300,420,14);x.fill();x.fillStyle='#333';x.fillRect(-150,-210,30,420);x.strokeStyle='#e0202a';x.lineWidth=8;x.beginPath();x.moveTo(110,-210);x.lineTo(110,240);x.stroke();x.restore();return;}
 x.fillStyle='#1a1a1e';rr(-440,-300,880,600,16);x.fill();x.fillStyle='#fffaf0';rr(-420,-280,410,560,8);x.fill();rr(10,-280,410,560,8);x.fill();
 x.strokeStyle='rgba(80,130,200,0.3)';x.lineWidth=3;for(let i=0;i<8;i++){x.beginPath();x.moveTo(-400,-180+i*60);x.lineTo(-30,-180+i*60);x.stroke();x.beginPath();x.moveTo(30,-180+i*60);x.lineTo(400,-180+i*60);x.stroke();}
 x.textAlign='center';x.textBaseline='middle';if(title){x.font=`900 64px ${F}`;x.fillStyle='#c0392b';x.fillText(title[0],-215,-200,380);if(title[1]){x.font=`900 64px ${F}`;x.fillText(title[1],-215,-120,380);}}
 (lines||[]).forEach((l,i)=>{if(p!=null&&p<(i+1)/(lines.length))return;x.font=`800 ${l[1]||40}px ${F}`;x.fillStyle=l[2]||'#222';x.fillText(l[0],l[3]==null?215:l[3],-170+i*90,380);});x.restore();}
function will(cx,cy,s,rot,lines){paper(cx,cy,620*s,760*s,rot||0,[['VASİYET',70*s,'#8a5a1a',900],...lines],{y0:-280*s,lh:120*s,bg:'#f6ecd0'});}
function villageTable(y){x.fillStyle='#8a5a30';rr(30,y,1020,70,14);x.fill();x.fillStyle='#e8dcc0';rr(60,y-6,960,30,8);x.fill();x.fillStyle='#6a4020';x.fillRect(90,y+70,36,500);x.fillRect(950,y+70,36,500);}
function villageRoom(){x.fillStyle='#efe0c2';x.fillRect(-60,-60,W+120,H+120);x.fillStyle='#8a5a30';x.fillRect(-60,600,W+120,22);x.fillStyle='#c8a878';x.fillRect(-60,1380,W+120,700);x.fillStyle='#b5482a';for(let i=0;i<6;i++){rr(80+i*160,1450,120,60,10);x.fill();}
}
function knockDoor(cx,cy,s,open){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#4a2e18';rr(-230,-450,460,900,16);x.fill();x.fillStyle='#1a1410';rr(-200,-420,400,870,10);x.fill();if(open<1){x.save();x.translate(-200,0);x.scale(1-open*0.8,1);x.fillStyle='#7a4a28';rr(0,-420,400,870,10);x.fill();x.fillStyle='#d4a838';x.beginPath();x.arc(340,30,22,0,7);x.fill();x.restore();}x.restore();}
function maBadge(T,n,fin){copBadge(T,n,fin);}
// ---- B: bayram sofrası / yenge ----
const KIZY={skin:'#f0c4a0',hair:'#2a1a12',hairStyle:'long',shirt:'#3a7ad0',blush:true};
const SEVIM={skin:'#e8b490',hair:'#e8c048',bigHair:true,shirt:'#d04a3a',skinShade:'#c8916c'};
const KEVSER={skin:'#f0c29e',hair:'#7a4a2a',hairStyle:'long',shirt:'#f08ab8',blush:true};
const HAYRIYE={skin:'#e2b090',hair:'#ccc',hairStyle:'bald',shirt:'#4a4a6a',skinShade:'#c4916c'};
const NURTEN={skin:'#f0c4a0',hair:'#6a3a2a',bigHair:true,shirt:'#2a8a6a'};
const CEMIL={skin:'#d9a07a',hair:'#3a3a3a',hairStyle:'bald',mustache:'#2a2a2a',shirt:'#f2f2f2',skinShade:'#bf8660'};
function kizy(cx,cy,r,o={}){person(KIZY,cx,cy,r,o);}
function bracelets(cx,cy,s){x.save();x.strokeStyle='#e8b830';x.lineWidth=10*s;for(let i=0;i<4;i++){x.beginPath();x.ellipse(cx,cy+i*16*s,46*s,16*s,0,0,7);x.stroke();}x.restore();}
function sevim(cx,cy,r,o={}){person(SEVIM,cx,cy,r,o);
 // röfle çizgileri
 x.strokeStyle='#f6dc80';x.lineWidth=r*0.035;for(let i=0;i<4;i++){x.beginPath();x.moveTo(cx-r*0.6+i*r*0.35,cy-r*0.95);x.quadraticCurveTo(cx-r*0.5+i*r*0.35,cy-r*0.75,cx-r*0.65+i*r*0.4,cy-r*0.55);x.stroke();}
 x.fillStyle='#e8b830';[-1,1].forEach(s=>{x.beginPath();x.arc(cx+s*r*0.88,cy+r*0.38,r*0.08,0,7);x.fill();});
 if(o.sweat){x.fillStyle='rgba(120,190,255,0.9)';[[0.7,-0.5],[-0.75,-0.3],[0.8,0.05]].forEach(([a,b],i)=>{const k=((o.sweat*1.5+i*0.3)%1);x.beginPath();x.ellipse(cx+a*r,cy+b*r+k*r*0.4,r*0.06,r*0.1,0,0,7);x.fill();});}
}
function kevser(cx,cy,r,o={}){person(KEVSER,cx,cy,r,o);x.fillStyle=KEVSER.hair;x.beginPath();x.ellipse(cx-r*0.2,cy-r*0.7,r*0.55,r*0.22,-0.2,0,7);x.fill();}
function yazma(cx,cy,r,col){const sc=col||'#f4f4f4';x.fillStyle=sc;x.beginPath();x.moveTo(cx-r*0.98,cy+r*0.1);x.bezierCurveTo(cx-r*1.06,cy-r*1.6,cx+r*1.06,cy-r*1.6,cx+r*0.98,cy+r*0.1);x.quadraticCurveTo(cx+r*0.85,cy-r*0.55,cx,cy-r*0.6);x.quadraticCurveTo(cx-r*0.85,cy-r*0.55,cx-r*0.98,cy+r*0.1);x.fill();
 x.strokeStyle='rgba(0,0,0,0.12)';x.lineWidth=r*0.03;x.beginPath();x.moveTo(cx-r*0.95,cy+r*0.05);x.bezierCurveTo(cx-r*1.0,cy-r*1.5,cx+r*1.0,cy-r*1.5,cx+r*0.95,cy+r*0.05);x.stroke();
 x.fillStyle=sc;x.beginPath();x.moveTo(cx-r*0.9,cy+r*0.6);x.quadraticCurveTo(cx,cy+r*1.45,cx+r*0.9,cy+r*0.6);x.lineTo(cx+r*0.7,cy+r*1.2);x.quadraticCurveTo(cx,cy+r*1.6,cx-r*0.7,cy+r*1.2);x.closePath();x.fill();}
function hayriye(cx,cy,r,o={}){x.fillStyle='#f4f4f4';x.beginPath();x.ellipse(cx,cy+r*0.25,r*1.12,r*1.32,0,0,7);x.fill();person(HAYRIYE,cx,cy,r,o);yazma(cx,cy,r);specs(cx,cy,r,'#7a5a2a');
 x.strokeStyle='#d4a838';x.lineWidth=r*0.025;x.beginPath();x.moveTo(cx-r*0.5,cy);x.quadraticCurveTo(cx-r*0.7,cy+r*0.9,cx,cy+r*1.2);x.quadraticCurveTo(cx+r*0.7,cy+r*0.9,cx+r*0.5,cy);x.stroke();}
function nurten(cx,cy,r,o={}){person(NURTEN,cx,cy,r,o);}
function cemil(cx,cy,r,o={}){person(CEMIL,cx,cy,r,o);x.fillStyle='#3a3a3a';[-1,1].forEach(s=>{x.beginPath();x.ellipse(cx+s*r*0.84,cy-r*0.28,r*0.12,r*0.26,s*0.2,0,7);x.fill();});x.fillStyle='#3a6ab0';x.beginPath();x.moveTo(cx-r*0.8,cy+r*1.6);x.lineTo(cx+r*0.8,cy+r*1.6);x.lineTo(cx+r*0.9,cy+r*4.5);x.lineTo(cx-r*0.9,cy+r*4.5);x.fill();x.fillStyle='#fff';rr(cx-r*0.4,cy+r*2.0,r*0.8,r*0.3,r*0.05);x.fill();x.font=`900 ${r*0.2}px ${F}`;x.textAlign='center';x.textBaseline='middle';x.fillStyle='#3a6ab0';x.fillText('BAKKAL',cx,cy+r*2.15);}
function muska(cx,cy,s,rot){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(s,s);x.strokeStyle='#8a5a2a';x.lineWidth=6;x.beginPath();x.moveTo(0,-90);x.quadraticCurveTo(-60,-220,0,-260);x.quadraticCurveTo(60,-220,0,-90);x.stroke();x.fillStyle='#2a6a4a';x.beginPath();x.moveTo(-90,-80);x.lineTo(90,-80);x.lineTo(0,90);x.closePath();x.fill();x.strokeStyle='#d4a838';x.lineWidth=6;x.stroke();x.restore();}
function cat(cx,cy,s,T){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#f0a040';x.beginPath();x.ellipse(0,80,140,110,0,0,7);x.fill();x.strokeStyle='#f0a040';x.lineWidth=30;x.lineCap='round';x.beginPath();x.moveTo(120,120);x.quadraticCurveTo(240,60+Math.sin(T*3)*30,200,-40);x.stroke();
 x.beginPath();x.arc(0,-60,100,0,7);x.fill();x.beginPath();x.moveTo(-90,-100);x.lineTo(-70,-200);x.lineTo(-20,-140);x.fill();x.beginPath();x.moveTo(90,-100);x.lineTo(70,-200);x.lineTo(20,-140);x.fill();
 x.strokeStyle='#d07a20';x.lineWidth=10;for(let i=0;i<3;i++){x.beginPath();x.moveTo(-30+i*30,-150);x.lineTo(-25+i*25,-120);x.stroke();}
 x.fillStyle='#2a6a2a';[-1,1].forEach(k=>{x.beginPath();x.ellipse(k*38,-65,16,22,0,0,7);x.fill();});x.fillStyle='#111';[-1,1].forEach(k=>{x.beginPath();x.ellipse(k*38,-65,5,18,0,0,7);x.fill();});
 x.fillStyle='#e05a7a';x.beginPath();x.moveTo(-12,-30);x.lineTo(12,-30);x.lineTo(0,-16);x.fill();x.strokeStyle='#fff';x.lineWidth=4;[-1,1].forEach(k=>{x.beginPath();x.moveTo(k*30,-20);x.lineTo(k*110,-35);x.moveTo(k*30,-12);x.lineTo(k*110,-5);x.stroke();});
 x.fillStyle='#e0202a';rr(-70,15,140,26,10);x.fill();x.fillStyle='#ffd23f';x.beginPath();x.arc(0,50,16,0,7);x.fill();x.restore();}
function ring(cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.strokeStyle='#e8b830';x.lineWidth=20;x.beginPath();x.arc(0,40,70,0,7);x.stroke();x.fillStyle='#bfe8ff';x.beginPath();x.moveTo(-40,-30);x.lineTo(40,-30);x.lineTo(0,-90);x.closePath();x.fill();x.fillRect(-40,-50,80,20);x.restore();}
// konuşan telefon (hoparlör): ekranda ad + ses dalgaları
function spkPhone(cx,cy,s,T,name,on,rot){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(s,s);x.fillStyle='#111';rr(-150,-280,300,560,40);x.fill();x.fillStyle=on?'#1d5a3a':'#2b3a6a';rr(-132,-258,264,516,26);x.fill();
 x.fillStyle='#ddd';x.beginPath();x.arc(0,-130,60,0,7);x.fill();x.fillStyle='#888';x.beginPath();x.arc(0,-150,24,0,7);x.fill();x.beginPath();x.ellipse(0,-100,40,24,0,Math.PI,0);x.fill();
 x.font=`900 40px ${F}`;x.textAlign='center';x.textBaseline='middle';x.fillStyle='#fff';x.fillText(name||'',0,-20,240);x.font=`700 28px ${F}`;x.fillStyle='#bbb';x.fillText(on?'🔊 Hoparlör':'Aranıyor...',0,30,240);
 x.fillStyle='#e0202a';x.beginPath();x.arc(0,180,44,0,7);x.fill();x.restore();
 if(on){x.save();x.strokeStyle='rgba(255,255,255,0.85)';x.lineWidth=12*s;x.lineCap='round';for(let i=0;i<3;i++){const k=((T*1.5+i/3)%1);x.globalAlpha=1-k;[-1,1].forEach(d=>{x.beginPath();x.arc(cx,cy-60*s,(180+k*200)*s,d>0?-0.5:Math.PI-0.5,d>0?0.5:Math.PI+0.5);x.stroke();});}x.restore();}}
function ringWaves(cx,cy,s,T){x.save();x.strokeStyle='#ffd23f';x.lineWidth=12*s;x.lineCap='round';for(let i=0;i<3;i++){const k=((T*2+i/3)%1);x.globalAlpha=1-k;x.beginPath();x.arc(cx,cy,(120+k*160)*s,-2.4,-0.7);x.stroke();}x.restore();}
function voiceMsg(cx,cy,w,p,T,label){if(p<=0)return;x.save();x.translate(cx,cy);const k=back(p);x.scale(k,k);x.fillStyle='#dcf8c6';rr(-w/2,-60,w,120,40);x.fill();x.fillStyle='#2a9a4a';x.beginPath();x.arc(-w/2+60,0,34,0,7);x.fill();x.fillStyle='#fff';x.beginPath();x.moveTo(-w/2+50,-16);x.lineTo(-w/2+50,16);x.lineTo(-w/2+76,0);x.fill();x.fillStyle='#5a7a5a';for(let i=0;i<16;i++){const h=10+Math.abs(Math.sin(i*1.7+T*6))*36;rr(-w/2+120+i*((w-230)/16),-h/2,8,h,4);x.fill();}if(label){x.font=`800 26px ${F}`;x.textAlign='right';x.textBaseline='middle';x.fillStyle='#666';x.fillText(label,w/2-20,38);}x.restore();}
function feastTable(y){bayramTable(y);x.fillStyle='#e8a040';x.beginPath();x.ellipse(260,y-10,110,30,0,0,7);x.fill();x.fillStyle='#8a3a1a';x.beginPath();x.ellipse(540,y-14,90,28,0,0,7);x.fill();x.fillStyle='#d4a838';for(let i=0;i<5;i++){x.beginPath();x.arc(780+i*28,y-16-(i%2)*10,16,0,7);x.fill();}}
function homeBay(){x.fillStyle='#f4e2d0';x.fillRect(-60,-60,W+120,H+120);x.fillStyle='#e8c8a8';for(let i=0;i<8;i++)x.fillRect(-60+i*150,-60,60,H+120);x.fillStyle='#a8784a';x.fillRect(-60,1380,W+120,700);
}
function chatScr(cx,cy,s,title,msgs,T){phoneUI(cx,cy,s,title,msgs,T);}
function plates(y){x.fillStyle='#fff';for(let i=0;i<4;i++){x.beginPath();x.ellipse(170+i*250,y,90,26,0,0,7);x.fill();}}
function fork(cx,cy,s,rot){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(s,s);x.fillStyle='#c8c8d0';rr(-12,-20,24,220,10);x.fill();rr(-40,-120,80,110,14);x.fill();x.fillStyle='rgba(0,0,0,0)';x.clearRect;x.fillStyle='#1a1a1a';for(let i=0;i<3;i++)x.fillRect(-26+i*20,-125,8,70);x.restore();}
function sinkPile(cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#b8c0c8';rr(-320,-40,640,240,20);x.fill();x.fillStyle='#8a929a';rr(-290,-20,580,200,14);x.fill();for(let i=0;i<9;i++){x.fillStyle=['#fff','#f0e0c0','#d8e8f8'][i%3];x.beginPath();x.ellipse(-200+(i%5)*100,20-Math.floor(i/5)*60-(i%2)*20,80,24,((i*3)%5-2)*0.15,0,7);x.fill();x.strokeStyle='#aaa';x.lineWidth=3;x.stroke();}x.fillStyle='rgba(255,255,255,0.8)';for(let i=0;i<10;i++){x.beginPath();x.arc(-260+i*55,-40-((i*17)%40),16+(i%3)*6,0,7);x.fill();}x.restore();}
function crown(cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#ffd23f';x.beginPath();x.moveTo(-90,40);x.lineTo(-90,-40);x.lineTo(-45,0);x.lineTo(0,-60);x.lineTo(45,0);x.lineTo(90,-40);x.lineTo(90,40);x.closePath();x.fill();x.fillStyle='#e0202a';x.beginPath();x.arc(0,10,12,0,7);x.fill();x.restore();}
