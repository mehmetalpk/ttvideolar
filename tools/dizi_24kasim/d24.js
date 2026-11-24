// 24 Kas — "Her Şey Yazılı Olacak" (A, ofis) + "Terlik Cezası" (B, apartman)
// ---- A: ofis ----
const MUH={skin:'#e8b48c',hair:'#2b1d16',shirt:'#1f2d5a'};
const SELAMI={skin:'#d9a07a',hair:'#3a3a40',hairStyle:'bald',browCol:'#2a2a2e',shirt:'#f2f2f2',skinShade:'#bf8660'};
const AYTEN={skin:'#eab896',hair:'#d4d4dc',messy:true,shirt:'#2a2a3a',skinShade:'#c99a74'};
const OGUZ={skin:'#f0c29e',hair:'#8a5a2a',shirt:'#c0506a'};
function muh(cx,cy,r,o={}){person(MUH,cx,cy,r,o);x.fillStyle='#fff';x.beginPath();x.moveTo(cx-r*0.25,cy+r*1.05);x.lineTo(cx,cy+r*1.35);x.lineTo(cx+r*0.25,cy+r*1.05);x.fill();specs(cx,cy,r,'#222');}
function selami(cx,cy,r,o={}){person(SELAMI,cx,cy,r,{brow:0.1,...o});
 // yan saç tutamları (kel), kalın kaşlar
 x.fillStyle='#4a4a50';[-1,1].forEach(s=>{x.beginPath();x.ellipse(cx+s*r*0.84,cy-r*0.28,r*0.12,r*0.26,s*0.2,0,7);x.fill();});
 x.fillStyle='rgba(255,255,255,0.25)';x.beginPath();x.ellipse(cx-r*0.3,cy-r*0.7,r*0.22,r*0.1,-0.4,0,7);x.fill();
 // gri yelek
 x.fillStyle='#6a6e78';x.beginPath();x.moveTo(cx-r*1.2,cy+r*1.35);x.lineTo(cx-r*0.3,cy+r*1.05);x.lineTo(cx-r*0.05,cy+r*2.4);x.lineTo(cx-r*0.05,cy+r*5);x.lineTo(cx-r*1.2,cy+r*5);x.closePath();x.fill();
 x.beginPath();x.moveTo(cx+r*1.2,cy+r*1.35);x.lineTo(cx+r*0.3,cy+r*1.05);x.lineTo(cx+r*0.05,cy+r*2.4);x.lineTo(cx+r*0.05,cy+r*5);x.lineTo(cx+r*1.2,cy+r*5);x.closePath();x.fill();
 x.fillStyle='#ddd';for(let i=0;i<3;i++){x.beginPath();x.arc(cx-r*0.15,cy+r*2.7+i*r*0.4,r*0.05,0,7);x.fill();}}
function ayten(cx,cy,r,o={}){person(AYTEN,cx,cy,r,o);specs(cx,cy,r,'#e0202a');x.fillStyle='#fff';x.beginPath();x.moveTo(cx-r*0.25,cy+r*1.05);x.lineTo(cx,cy+r*1.4);x.lineTo(cx+r*0.25,cy+r*1.05);x.fill();}
function oguz(cx,cy,r,o={}){person(OGUZ,cx,cy,r,o);}
function mug(cx,cy,s,T){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#fff';rr(-60,-70,120,140,16);x.fill();x.strokeStyle='#fff';x.lineWidth=16;x.beginPath();x.arc(65,0,32,-1.4,1.4);x.stroke();x.fillStyle='#5a3a20';x.beginPath();x.ellipse(0,-62,52,12,0,0,7);x.fill();
 if(T!=null){x.strokeStyle='rgba(255,255,255,0.6)';x.lineWidth=8;for(let i=0;i<2;i++){x.beginPath();const o=Math.sin(T*3+i)*10;x.moveTo(-15+i*30,-90);x.quadraticCurveTo(-30+i*30+o,-130,-10+i*30,-170);x.stroke();}}x.restore();}
function monitor(cx,cy,s,inner){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#2a2d34';rr(-40,180,80,120,8);x.fill();rr(-140,290,280,30,10);x.fill();rr(-330,-210,660,410,22);x.fill();x.fillStyle='#f4f7fb';rr(-305,-185,610,360,8);x.fill();x.beginPath();x.rect(-305,-185,610,360);x.clip();inner&&inner();x.restore();}
// gelen kutusu ekranı (monitor iç koordinat: -305..305, -185..175)
function inboxScr(n,subs,red){x.fillStyle='#3b6fb6';x.fillRect(-305,-185,610,70);x.font=`900 38px ${F}`;x.textAlign='left';x.textBaseline='middle';x.fillStyle='#fff';x.fillText('GELEN KUTUSU',-280,-150);
 x.fillStyle=red?'#e0202a':'#ff8a00';rr(110,-175,180,50,25);x.fill();x.fillStyle='#fff';x.textAlign='center';x.font=`900 36px ${F}`;x.fillText(String(n),200,-150);
 (subs||[]).forEach((s,i)=>{const y=-80+i*62;x.fillStyle=i%2?'#eef2f8':'#fff';x.fillRect(-305,y-30,610,60);x.fillStyle='#3b6fb6';x.beginPath();x.arc(-270,y,10,0,7);x.fill();x.textAlign='left';x.font=`800 28px ${F}`;x.fillStyle='#222';x.fillText(s,-245,y,520);});}
// e-posta bildirim kartı
function emailCard(cx,cy,w,subj,p,from,rot){if(p<=0)return;x.save();x.translate(cx,cy);x.rotate(rot||0);const k=back(p);x.scale(k,k);x.shadowColor='rgba(0,0,0,0.35)';x.shadowBlur=30;x.fillStyle='#fff';rr(-w/2,-110,w,220,30);x.fill();x.shadowBlur=0;
 x.fillStyle='#3b6fb6';rr(-w/2+30,-70,110,80,10);x.fill();x.strokeStyle='#fff';x.lineWidth=7;x.beginPath();x.moveTo(-w/2+34,-66);x.lineTo(-w/2+85,-20);x.lineTo(-w/2+136,-66);x.stroke();
 x.textAlign='left';x.textBaseline='middle';x.font=`700 30px ${F}`;x.fillStyle='#888';x.fillText(from||'Kime: Selami Bey',-w/2+170,-55,w-200);x.font=`900 40px ${F}`;x.fillStyle='#111';x.fillText('Konu:',-w/2+170,0);
 x.font=`800 40px ${F}`;x.fillStyle='#1f4a8a';x.fillText(subj,-w/2+40,62,w-80);x.restore();}
function meetingRoom(){x.fillStyle='#e6ebf1';x.fillRect(-60,-60,W+120,H+120);x.fillStyle='#fff';rr(160,330,760,380,12);x.fill();x.strokeStyle='#9aa8b8';x.lineWidth=12;rr(160,330,760,380,12);x.stroke();x.fillStyle='#9aa8b8';x.fillRect(-60,1350,W+120,700);}
function confTable(y){x.fillStyle='#6a4e34';rr(40,y,1000,70,20);x.fill();x.fillStyle='#4e3826';x.fillRect(90,y+70,40,400);x.fillRect(950,y+70,40,400);}
function printout(cx,cy,s,rot,title){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(s,s);for(let i=3;i>=0;i--){x.fillStyle=i?'#e8e8e8':'#fff';x.shadowColor='rgba(0,0,0,0.25)';x.shadowBlur=10;x.fillRect(-150+i*10,-200+i*10,300,400);}x.shadowBlur=0;
 x.fillStyle='#3b6fb6';x.fillRect(-130,-180,260,30);x.fillStyle='#999';for(let i=0;i<7;i++)x.fillRect(-130,-120+i*40,i%3==2?160:260,12);if(title){x.font=`900 30px ${F}`;x.textAlign='center';x.fillStyle='#c0392b';x.fillText(title,0,170,260);}x.restore();}
function payslip(cx,cy,s,rot,cut){paper(cx,cy,620*s,480*s,rot||0,[['MAAŞ BORDROSU',48*s,'#222',900],[cut?'- YARIM GÜN':'YARIM GÜN İZİN',70*s,cut?'#e0202a':'#2a9a4a',900]],{y0:-110*s,lh:130*s});}
// ---- B: apartman ----
const KIR={skin:'#eab896',hair:'#2b1d16',messy:true,shirt:'#3a8a5a'};
const CEVDET={skin:'#d9a07a',hair:'#9a9aa2',mustache:'#5a5a60',browCol:'#6a6a70',shirt:'#e8e0d0',skinShade:'#bf8660'};
const FATMA={skin:'#eab896',hair:'#7a3a8a',hairStyle:'bald',shirt:'#5a6a9a',blush:true};
function kir(cx,cy,r,o={}){person(KIR,cx,cy,r,o);}
function cevdet(cx,cy,r,o={}){person(CEVDET,cx,cy,r,o);
 x.fillStyle='#7a6a4a';[-1,1].forEach(s=>{x.beginPath();x.moveTo(cx+s*r*1.2,cy+r*1.35);x.lineTo(cx+s*r*0.3,cy+r*1.05);x.lineTo(cx+s*r*0.05,cy+r*2.3);x.lineTo(cx+s*r*0.05,cy+r*5);x.lineTo(cx+s*r*1.2,cy+r*5);x.closePath();x.fill();});
 x.fillStyle='#5e5038';[-1,1].forEach(s=>{rr(cx+s*r*0.62-r*0.22,cy+r*2.2,r*0.44,r*0.36,r*0.05);x.fill();rr(cx+s*r*0.62-r*0.22,cy+r*2.9,r*0.44,r*0.36,r*0.05);x.fill();});
 x.fillStyle='#e0202a';rr(cx+r*0.5,cy+r*2.05,r*0.06,r*0.3,r*0.02);x.fill();}
function fatma(cx,cy,r,o={}){const sc='#7a3a8a';x.fillStyle=sc;x.beginPath();x.ellipse(cx,cy+r*0.25,r*1.12,r*1.32,0,0,7);x.fill();
 person(FATMA,cx,cy,r,o);
 x.fillStyle=sc;x.beginPath();x.moveTo(cx-r*0.98,cy+r*0.1);x.bezierCurveTo(cx-r*1.06,cy-r*1.6,cx+r*1.06,cy-r*1.6,cx+r*0.98,cy+r*0.1);x.quadraticCurveTo(cx+r*0.85,cy-r*0.55,cx,cy-r*0.6);x.quadraticCurveTo(cx-r*0.85,cy-r*0.55,cx-r*0.98,cy+r*0.1);x.fill();
 x.fillStyle='rgba(255,255,255,0.35)';for(let i=0;i<6;i++){x.beginPath();x.arc(cx-r*0.6+i*r*0.24,cy-r*0.95+Math.abs(i-2.5)*r*0.12,r*0.05,0,7);x.fill();}
 x.fillStyle=sc;x.beginPath();x.moveTo(cx-r*0.9,cy+r*0.6);x.quadraticCurveTo(cx,cy+r*1.45,cx+r*0.9,cy+r*0.6);x.lineTo(cx+r*0.7,cy+r*1.2);x.quadraticCurveTo(cx,cy+r*1.6,cx-r*0.7,cy+r*1.2);x.closePath();x.fill();}
function slipper(cx,cy,s,rot,col){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(s,s);x.fillStyle='#3a2a20';x.beginPath();x.ellipse(0,0,70,150,0,0,7);x.fill();x.fillStyle=col||'#3b6fb6';x.beginPath();x.ellipse(0,-30,74,80,0,Math.PI,0);x.fill();x.fillRect(-74,-32,148,40);x.restore();}
function slippers(cx,cy,s,col){slipper(cx-70*s,cy,s,-0.12,col);slipper(cx+70*s,cy+15*s,s,0.12,col);}
function tutanak(cx,cy,s,rot,l2,l3,p){if(p!=null&&p<=0)return;const k=p==null?1:back(p);paper(cx,cy,520*s*k,420*s*k,rot||0,[['TUTANAK',60*s*k,'#e0202a',900],[l2||'',40*s*k,'#222',800],[l3||'',46*s*k,'#e0202a',900]],{y0:-120*s*k,lh:110*s*k,bg:'#fff4f2'});}
function redSlip(cx,cy,s,rot){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(s,s);x.fillStyle='#ff4a4a';x.shadowColor='rgba(0,0,0,0.3)';x.shadowBlur=8;rr(-60,-80,120,160,8);x.fill();x.shadowBlur=0;x.fillStyle='#fff';x.font=`900 26px ${F}`;x.textAlign='center';x.textBaseline='middle';x.fillText('CEZA',0,-40);x.fillRect(-40,0,80,8);x.fillRect(-40,25,60,8);x.restore();}
function pot(cx,cy,s,label){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#2a8a4a';for(let i=0;i<7;i++){x.save();x.rotate(-1.2+i*0.4);x.beginPath();x.ellipse(0,-200,40,150,0,0,7);x.fill();x.restore();}x.fillStyle='#c0663a';x.beginPath();x.moveTo(-130,-60);x.lineTo(130,-60);x.lineTo(100,160);x.lineTo(-100,160);x.closePath();x.fill();x.fillStyle='#a85430';x.fillRect(-140,-80,280,40);
 if(label){x.fillStyle='#fff';rr(-90,10,180,70,10);x.fill();x.font=`900 34px ${F}`;x.textAlign='center';x.textBaseline='middle';x.fillStyle='#222';x.fillText(label,0,46,170);}x.restore();}
function bike(cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.strokeStyle='#222';x.lineWidth=14;[-150,150].forEach(a=>{x.beginPath();x.arc(a,0,100,0,7);x.stroke();});x.strokeStyle='#c0392b';x.lineWidth=16;x.beginPath();x.moveTo(-150,0);x.lineTo(-40,-130);x.lineTo(100,-130);x.lineTo(150,0);x.moveTo(-40,-130);x.lineTo(0,0);x.lineTo(100,-130);x.moveTo(-150,0);x.lineTo(0,0);x.stroke();x.strokeStyle='#222';x.lineWidth=12;x.beginPath();x.moveTo(100,-130);x.lineTo(110,-190);x.lineTo(160,-200);x.moveTo(-40,-130);x.lineTo(-50,-170);x.stroke();x.fillStyle='#222';rr(-90,-185,80,24,10);x.fill();x.restore();}
function matPile(cx,cy,s,n){x.save();x.translate(cx,cy);x.scale(s,s);const cols=['#8a5a3a','#3b6fb6','#c0506a','#6a8a3a','#d08a30','#6b4a8a'];for(let i=0;i<n;i++){x.fillStyle=cols[i%6];rr(-170+(i%2)*14,-i*34,340,34,8);x.fill();}x.restore();}
function umbStand(cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.strokeStyle='#2a6ab0';x.lineWidth=14;x.beginPath();x.moveTo(-20,-60);x.lineTo(-50,-260);x.stroke();x.strokeStyle='#c0392b';x.beginPath();x.moveTo(20,-60);x.lineTo(40,-240);x.stroke();x.fillStyle='#555';rr(-60,-80,120,160,12);x.fill();x.restore();}
function catBowl(cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#e05a8a';x.beginPath();x.ellipse(0,0,90,40,0,0,7);x.fill();x.fillStyle='#8a5a2a';x.beginPath();x.ellipse(0,-14,70,20,0,0,7);x.fill();x.restore();}
function agenda(cx,cy,s,rot){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(s,s);x.fillStyle='#5a2a1a';rr(-130,-170,260,340,14);x.fill();x.fillStyle='#d4a838';rr(-100,-120,200,40,6);x.fill();x.fillStyle='#e0202a';rr(110,-190,22,260,8);x.fill();x.restore();}
function rulebook(cx,cy,s,rot,open,hl){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(s,s);x.textAlign='center';x.textBaseline='middle';
 if(!open){x.fillStyle='#2a4a7a';rr(-200,-270,400,540,14);x.fill();x.font=`900 44px ${F}`;x.fillStyle='#fff';x.fillText('YÖNETMELİK',0,-60,360);x.font=`700 30px ${F}`;x.fillText('Apartman',0,0);x.restore();return;}
 x.fillStyle='#2a4a7a';rr(-420,-300,840,600,16);x.fill();x.fillStyle='#fffaf0';rr(-400,-280,390,560,8);x.fill();rr(10,-280,390,560,8);x.fill();x.fillStyle='#bbb';for(let i=0;i<9;i++){x.fillRect(-370,-240+i*55,330,12);if(i<2||i>6)x.fillRect(40,-240+i*55,330,12);}
 x.fillStyle='#ffe14a';x.globalAlpha=hl==null?1:hl;rr(30,-140,350,260,10);x.fill();x.globalAlpha=1;x.font=`900 40px ${F}`;x.fillStyle='#222';x.fillText('MADDE 12',205,-90);x.font=`800 30px ${F}`;x.fillText('Ortak alana konan',205,-20);x.fillText('HER EŞYAYA',205,30);x.fillText('ceza yazılır.',205,80);x.restore();}
function hallway(){x.fillStyle='#e2d6bc';x.fillRect(-60,-60,W+120,H+120);x.fillStyle='#c9b994';x.fillRect(-60,700,W+120,20);x.fillStyle='#b8a88a';x.fillRect(-60,1380,W+120,700);x.strokeStyle='rgba(0,0,0,0.12)';x.lineWidth=4;for(let i=0;i<9;i++){x.beginPath();x.moveTo(-60+i*150,1380);x.lineTo(-200+i*190,1980);x.stroke();}}
function aptDoorN(cx,cy,s,num){apartDoor(cx,cy,s);x.save();x.fillStyle='#d4a838';rr(cx-50*s,cy-420*s,100*s,70*s,10*s);x.fill();x.font=`900 ${50*s}px ${F}`;x.textAlign='center';x.textBaseline='middle';x.fillStyle='#3a2a10';x.fillText(String(num),cx,cy-384*s);x.restore();}
function raisedHand(cx,cy,s,col){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle=col||'#3b6fb6';rr(-35,0,70,260,30);x.fill();x.fillStyle='#e8b48c';x.beginPath();x.ellipse(0,-20,48,56,0,0,7);x.fill();for(let i=0;i<4;i++){rr(-44+i*24,-110,20,80,10);x.fill();}rr(36,-50,20,60,10);x.fill();x.restore();}
function gavelRoom(){x.fillStyle='#d8cfe0';x.fillRect(-60,-60,W+120,H+120);x.fillStyle='#2a4a7a';rr(140,300,800,120,16);x.fill();x.font=`900 56px ${F}`;x.textAlign='center';x.textBaseline='middle';x.fillStyle='#fff';x.fillText('GENEL KURUL',540,362);x.fillStyle='#8a7a6a';x.fillRect(-60,1380,W+120,700);}
