// Park yeri savaşı — yardımcılar (SERİ SABİT KARAKTERLER)
const BURAK={skin:'#e8b48c',hair:'#2b1d16',shirt:'#3a6aa0',skinShade:'#cf9a73'};
const BURAK_T={...BURAK,shirt:'#2a3242'}; // takım elbise
const YILMAZ={skin:'#d39a74',hair:'#141414',mustache:'#141414',shirt:'#7a2a2a',skinShade:'#b8805e',bigHair:true};
const YONETICI={skin:'#e6b896',hair:'#8a8a90',shirt:'#7a7a4a',skinShade:'#c99a78'};
const GOREVLI={skin:'#f0caa8',hair:'#a0602a',hairStyle:'long',shirt:'#ececf2',blush:true};
const RED='#ff4d5e',YEL='#ffd23f',GRN='#9be36a',BLUECAR='#3d7be0',SUV='#16161c';
function lot(){x.fillStyle='#5a5f6a';x.fillRect(-60,-60,W+120,H+120);x.strokeStyle='#f2f2f2';x.lineWidth=10;
 for(let i=0;i<6;i++){x.beginPath();x.moveTo(60+i*190,560);x.lineTo(60+i*190,1000);x.stroke();}
 x.fillStyle='#e8e8e8';x.font=`900 64px ${F}`;x.textAlign='center';x.textBaseline='middle';[9,10,11,12,13].forEach((n,i)=>{x.fillStyle=n===12?YEL:'rgba(255,255,255,0.7)';x.fillText(n,155+i*190,620);});
 x.fillStyle='rgba(255,255,255,0.25)';for(let i=0;i<8;i++)x.fillRect(i*160,1300,90,14);}
function carTop(cx,cy,s,col,rot){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(s,s);x.fillStyle='rgba(0,0,0,0.3)';rr(-82,-162,174,334,40);x.fill();x.fillStyle=col;rr(-85,-170,170,340,44);x.fill();
 x.fillStyle='rgba(150,200,240,0.85)';rr(-65,-100,130,60,14);x.fill();rr(-65,60,130,50,14);x.fill();x.fillStyle='rgba(255,255,255,0.15)';rr(-60,-30,120,80,12);x.fill();
 x.fillStyle='#ffe9a0';x.fillRect(-70,-172,40,10);x.fillRect(30,-172,40,10);x.fillStyle='#ff3b3b';x.fillRect(-70,162,40,10);x.fillRect(30,162,40,10);x.restore();}
function carSide(cx,cy,s,col,o={}){x.save();x.translate(cx,cy);x.scale(s,s);
 const big=o.suv;x.fillStyle=col;if(big){rr(-330,-200,660,200,40);x.fill();rr(-270,-330,470,160,40);x.fill();}else{rr(-300,-120,600,140,50);x.fill();x.beginPath();x.moveTo(-180,-110);x.quadraticCurveTo(-120,-230,40,-230);x.quadraticCurveTo(150,-230,200,-110);x.fill();}
 x.fillStyle='rgba(140,190,230,0.85)';if(big){rr(-240,-305,190,110,16);x.fill();rr(-30,-305,200,110,16);x.fill();}else{x.beginPath();x.moveTo(-150,-115);x.quadraticCurveTo(-100,-205,-20,-205);x.lineTo(-20,-115);x.fill();x.beginPath();x.moveTo(10,-115);x.lineTo(10,-205);x.quadraticCurveTo(120,-205,165,-115);x.fill();}
 x.fillStyle='#111';const wy=big?0:20,wr=big?82:66;[-1,1].forEach(k=>{x.beginPath();x.arc(k*(big?210:180),wy,wr,0,7);x.fill();x.fillStyle='#9aa';x.beginPath();x.arc(k*(big?210:180),wy,wr*0.45,0,7);x.fill();x.fillStyle='#111';});
 x.fillStyle='#ffe9a0';rr(big?290:262,big?-170:-90,36,40,8);x.fill();
 if(o.note){x.save();x.translate(big?-150:-90,big?-250:-160);x.rotate(-0.1);x.fillStyle='#fff7b0';x.fillRect(-45,-35,90,70);x.restore();}
 x.restore();}
function note(cx,cy,s,lines,rot,col){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(s,s);x.fillStyle='rgba(0,0,0,0.25)';x.fillRect(-372,-232,760,480);x.fillStyle=col||'#fff7b0';x.fillRect(-380,-240,760,480);x.fillStyle='rgba(0,0,0,0.08)';for(let i=0;i<6;i++)x.fillRect(-380,-160+i*70,760,4);
 x.fillStyle='#e04040';x.beginPath();x.arc(0,-215,18,0,7);x.fill();
 lines.forEach(([t,sz,c],i)=>{x.font=`900 ${sz}px ${F}`;x.textAlign='center';x.textBaseline='middle';x.fillStyle=c||'#222';const m=x.measureText(t).width;const k=Math.min(1,680/m);x.save();x.translate(0,-120+i*(480/(lines.length+0.6))+ (lines.length<3?60:0));x.scale(k,k);x.fillText(t,0,0);x.restore();});x.restore();}
function building(){sky('#9fd0ff','#e6f3ff');x.fillStyle='#e9d7bd';x.fillRect(120,200,840,1250);x.fillStyle='#d4bf9f';x.fillRect(120,200,840,30);
 for(let r=0;r<4;r++)for(let c=0;c<3;c++){x.fillStyle='#7fb6e0';rr(190+c*270,280+r*290,180,190,8);x.fill();}
 x.fillStyle='#5a5f6a';x.fillRect(-60,1450,W+120,700);}
function balcony(cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#cdb8a0';x.fillRect(-300,0,600,40);x.strokeStyle='#444';x.lineWidth=10;for(let i=0;i<=10;i++){x.beginPath();x.moveTo(-290+i*58,40);x.lineTo(-290+i*58,220);x.stroke();}x.fillStyle='#444';x.fillRect(-300,210,600,16);x.restore();}
function teaGl(cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='rgba(255,255,255,0.4)';x.beginPath();x.moveTo(-40,-70);x.quadraticCurveTo(-20,0,-38,30);x.quadraticCurveTo(-40,70,0,70);x.quadraticCurveTo(40,70,38,30);x.quadraticCurveTo(20,0,40,-70);x.fill();x.fillStyle='#b5401e';x.beginPath();x.moveTo(-34,-40);x.quadraticCurveTo(-16,0,-33,30);x.quadraticCurveTo(-36,64,0,64);x.quadraticCurveTo(36,64,33,30);x.quadraticCurveTo(16,0,34,-40);x.fill();x.restore();}
function alarm(cx,cy,s,txt2,T){x.save();x.translate(cx,cy);x.scale(s,s);x.rotate(Math.sin(T*40)*0.05);x.fillStyle='#e04040';[-1,1].forEach(k=>{x.beginPath();x.arc(k*130,-170,60,0,7);x.fill();});x.fillStyle='#f4f4f4';x.beginPath();x.arc(0,0,220,0,7);x.fill();x.strokeStyle='#e04040';x.lineWidth=26;x.stroke();
 x.font=`900 110px ${F}`;x.textAlign='center';x.textBaseline='middle';x.fillStyle='#222';x.fillText(txt2,0,10);x.restore();}
function office(){x.fillStyle='#dfe6ec';x.fillRect(-60,-60,W+120,H+120);x.fillStyle='#b8c4cf';x.fillRect(-60,1200,W+120,800);x.fillStyle='#8a6a4a';rr(80,1150,920,70,10);x.fill();x.fillStyle='#6a4e34';x.fillRect(140,1220,50,400);x.fillRect(890,1220,50,400);}
function monitor(cx,cy,s,fn){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#222';rr(-240,-170,480,320,20);x.fill();x.fillStyle='#e8f0ff';rr(-220,-150,440,280,10);x.fill();if(fn){x.save();x.translate(-220,-150);fn();x.restore();}x.fillStyle='#333';x.fillRect(-30,150,60,60);rr(-110,205,220,24,10);x.fill();x.restore();}
function calendar(cx,cy,s,top,big){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#fff';rr(-220,-240,440,480,30);x.fill();x.fillStyle='#e04040';rr(-220,-240,440,140,30);x.fill();x.fillRect(-220,-140,440,40);txt(top,0,-170,80,'#fff',{stroke:false,maxW:400});txt(big,0,70,210,'#222',{stroke:false});x.restore();}
function stamp2(cx,cy,s,tx,rot){x.save();x.translate(cx,cy);x.rotate(rot||-0.15);x.scale(s,s);x.strokeStyle='#e0203a';x.lineWidth=16;rr(-380,-100,760,200,24);x.stroke();txt(tx,0,6,110,'#e0203a',{stroke:false});x.restore();}
function tie(cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#fff';x.beginPath();x.moveTo(-70,0);x.lineTo(0,70);x.lineTo(70,0);x.fill();x.fillStyle='#c0303a';x.beginPath();x.moveTo(-18,10);x.lineTo(18,10);x.lineTo(30,200);x.lineTo(0,240);x.lineTo(-30,200);x.fill();x.restore();}
function suitPerson(cx,cy,r,o={}){person(BURAK_T,cx,cy,r,o);tie(cx,cy+r*1.05,r/150);}
function traffic(T){sky('#ffcf9a','#ff9a6a');x.fillStyle='#4a4f5a';x.fillRect(-60,900,W+120,1100);x.fillStyle='#fff';for(let i=0;i<6;i++)x.fillRect(i*200-((T*20)%200),1300,110,14);
 ['#e04040','#3d7be0','#2a9a5a','#888'].forEach((c,i)=>carSide(130+i*300,1050,0.45,c));['#888','#e0a030','#3d7be0','#d0d0d0'].forEach((c,i)=>carSide(60+i*300,1500,0.45,c));}
function taxiSide(cx,cy,s){carSide(cx,cy,s,'#f4c430');x.save();x.translate(cx,cy-245*s);x.fillStyle='#222';rr(-70*s,-30*s,140*s,50*s,10*s);x.fill();txt('TAKSİ',cx-cx,0,34*s,YEL,{stroke:false});x.restore();}
function hornWaves(cx,cy,T){x.strokeStyle='rgba(255,255,255,0.8)';x.lineWidth=12;for(let k=0;k<3;k++){const ph=(T*2+k/3)%1;x.globalAlpha=1-ph;x.beginPath();x.arc(cx,cy,60+ph*260,-0.6,0.6);x.stroke();}x.globalAlpha=1;}
function qmark(cx,cy,s,T){txt('?',cx,cy+Math.sin(T*4)*10,200*s,YEL,{lw:24});}
