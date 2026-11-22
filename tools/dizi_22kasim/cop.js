// 22 Kas — Çöp Kovası Savaşı (komşu) karakterleri + nesneler
const BABAC={skin:'#e8b48c',hair:'#3a2416',shirt:'#3a8a6a',beard:true};
const FERHAT={skin:'#dca47c',hair:'#9a9aa0',mustache:'#5a5a60',shirt:'#e9e4d8',skinShade:'#bf8660'};
const ESC={skin:'#efc09c',hair:'#4a2a18',hairStyle:'long',shirt:'#d0608a',blush:true};
function babac(cx,cy,r,o={}){person(BABAC,cx,cy,r,o);}
function ferhat(cx,cy,r,o={}){person(FERHAT,cx,cy,r,o);}
function copBadge(T,n,fin){x.save();x.translate(540,215);const s=0.85+0.04*Math.sin(T*8);x.scale(s,s);x.rotate(-0.04);const w=fin?560:400;x.fillStyle='#ff2d55';rr(-w/2,-58,w,116,26);x.fill();x.strokeStyle='#fff';x.lineWidth=7;x.stroke();x.font=`900 ${fin?58:62}px ${F}`;x.textAlign='center';x.textBaseline='middle';x.fillStyle='#fff';x.fillText('PART '+n+(fin?' · FİNAL':''),0,4);x.restore();}
// tekerlekli çöp kovası; fill 0..1.3 (taşma), lid 0..1 açık
function trashBag(cx,cy,s,col,rot){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(s,s);x.fillStyle=col||'#2a2a30';x.beginPath();x.ellipse(0,10,90,80,0,0,7);x.fill();x.beginPath();x.moveTo(-25,-60);x.lineTo(0,-95);x.lineTo(25,-60);x.fill();x.strokeStyle='rgba(255,255,255,0.18)';x.lineWidth=6;x.beginPath();x.arc(-25,0,45,3.6,4.6);x.stroke();x.restore();}
function binC(cx,cy,s,fill,lid,num,col){x.save();x.translate(cx,cy);x.scale(s,s);const c=col||'#2f6f4a';
 // gövde
 x.fillStyle=c;x.beginPath();x.moveTo(-150,-200);x.lineTo(150,-200);x.lineTo(125,230);x.lineTo(-125,230);x.closePath();x.fill();
 x.fillStyle='rgba(0,0,0,0.15)';for(let i=-1;i<=1;i++){rr(i*80-14,-150,28,330,12);x.fill();}
 x.fillStyle='#222';x.beginPath();x.arc(-95,245,34,0,7);x.arc(95,245,34,0,7);x.fill();
 // içerik
 const f=fill||0;if(f>0){const n=Math.round(f*6);for(let i=0;i<n;i++){trashBag(-80+(i%3)*80,-200-((i/3)|0)*70-(f>1?40:0),0.75,i%2?'#3a3a44':'#26262c',(i%3-1)*0.3);}}
 // kapak
 x.save();x.translate(-160,-205);x.rotate(-(lid||0)*1.9);x.fillStyle=c;rr(0,-30,320,40,12);x.fill();x.fillStyle='rgba(0,0,0,0.2)';rr(130,-48,60,22,8);x.fill();x.restore();
 if(num!=null){x.fillStyle='#fff';x.beginPath();x.arc(0,10,62,0,7);x.fill();x.font=`900 72px ${F}`;x.textAlign='center';x.textBaseline='middle';x.fillStyle='#111';x.fillText(num,0,14);}
 x.restore();}
function diaper(cx,cy,s,rot){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(s,s);x.fillStyle='#fff';x.beginPath();x.moveTo(-90,-50);x.lineTo(90,-50);x.quadraticCurveTo(70,60,0,70);x.quadraticCurveTo(-70,60,-90,-50);x.fill();x.strokeStyle='#bcd4ff';x.lineWidth=8;x.stroke();x.fillStyle='#8ab4ff';x.fillRect(-90,-50,24,24);x.fillRect(66,-50,24,24);x.restore();}
function babyB(cx,cy,r){x.save();x.fillStyle='#f7c6d9';x.beginPath();x.ellipse(cx,cy+r*1.3,r*1.1,r*0.9,0,0,7);x.fill();face(cx,cy,r,{skin:'#f6cfae',hair:'#6a4a2a',eyeOpen:0.15,smile:0.6,blush:true});x.fillStyle='#ff8ab0';x.beginPath();x.arc(cx+r*0.55,cy-r*0.85,r*0.22,0,7);x.fill();x.restore();}
function pizzaBox(cx,cy,s,rot,label){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(s,s);x.fillStyle='#d9b27a';rr(-220,-150,440,300,14);x.fill();x.strokeStyle='#b08850';x.lineWidth=8;rr(-200,-130,400,260,10);x.stroke();
 if(label){x.fillStyle='#fff';rr(-170,-40,340,140,10);x.fill();x.strokeStyle='#111';x.lineWidth=4;rr(-170,-40,340,140,10);x.stroke();x.textAlign='center';x.textBaseline='middle';x.fillStyle='#111';x.font=`900 46px ${F}`;x.fillText('FERHAT BEY',0,0);x.font=`800 38px ${F}`;x.fillStyle='#c0392b';x.fillText('NO: 7',0,60);}
 x.restore();}
function wallCam(cx,cy,s,T){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#ddd';rr(-30,-90,60,90,10);x.fill();x.fillStyle='#f4f4f4';rr(-120,-40,240,110,40);x.fill();x.fillStyle='#111';x.beginPath();x.arc(80,15,36,0,7);x.fill();x.fillStyle='#3a6aff';x.beginPath();x.arc(88,8,12,0,7);x.fill();x.fillStyle=Math.floor(T*3)%2?'#ff2d2d':'#700';x.beginPath();x.arc(-80,0,12,0,7);x.fill();x.restore();}
// gece kamera görüntüsü filtresi (çizimden SONRA çağır)
function cctv(T,label){x.save();x.globalCompositeOperation='saturation';x.fillStyle='#000';x.fillRect(0,0,W,H);x.globalCompositeOperation='multiply';x.fillStyle='#7aff9a';x.fillRect(0,0,W,H);x.restore();
 x.save();x.fillStyle='rgba(0,0,0,0.18)';for(let y=0;y<H;y+=8)x.fillRect(0,y,W,3);x.restore();
 x.save();x.font=`800 44px ${F}`;x.textAlign='left';x.textBaseline='middle';x.fillStyle=Math.floor(T*2)%2?'#ff3b3b':'rgba(255,59,59,0.3)';x.beginPath();x.arc(110,1340,16,0,7);x.fill();x.fillStyle='#fff';x.fillText('REC  '+(label||'03:00'),140,1342);x.restore();}
function frontYard(night){if(night){nightSky();moon(950,520,45);}else sky('#8ac4ff','#e8f4ff');
 x.fillStyle=night?'#4a4a68':'#e9d6b8';x.fillRect(0,560,W,800);x.fillStyle=night?'#2a2a40':'#7a4a2a';rr(130,700,260,520,10);x.fill();rr(690,700,260,520,10);x.fill();
 x.fillStyle=night?'#ffe9a0':'#ffd23f';x.beginPath();x.arc(350,960,14,0,7);x.arc(910,960,14,0,7);x.fill();
 x.font=`900 60px ${F}`;x.textAlign='center';x.fillStyle=night?'#ccc':'#333';x.fillText('5',260,650);x.fillText('7',820,650);
 x.fillStyle=night?'#3a3a50':'#b8b0a0';x.fillRect(0,1220,W,700);}
