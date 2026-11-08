// Mayonez babası — yardımcılar
const BEN={skin:'#f0c29e',hair:'#4a3020',shirt:'#3b6fb6',skinShade:'#d8a882'};
const BEN_B={...BEN,shirt:'#2f4f7a'};
const ELA={skin:'#f3cfb0',hair:'#7a3e1c',hairStyle:'long',shirt:'#e86a9a',skinShade:'#dcae8e',blush:true};
const BABA_M={skin:'#d9a07a',hair:'#2f2620',mustache:'#2a1f1a',shirt:'#4a6a5a',skinShade:'#bf8660'};
const BABA_Y={...BABA_M,hair:'#9a9aa2',mustache:'#77777f'};
const ANNE_M={skin:'#eab896',hair:'#3a2418',hairStyle:'long',shirt:'#c0506a',blush:true,skinShade:'#cf9a73'};
const ANNE_Y={...ANNE_M,hair:'#6a5a55'};
const RED='#ff4d5e',YEL='#ffd23f',GRN='#9be36a',CREAM='#f7f0cf';
function salon(){sky('#ffe9c6','#f0c48a');x.fillStyle='#fff4dc';rr(700,260,300,380,14);x.fill();x.fillStyle='#bfe3ff';rr(720,280,260,340,8);x.fill();x.fillStyle='#fff4dc';x.fillRect(845,280,10,340);
 x.fillStyle='#b5764a';x.fillRect(-60,1360,W+120,700);x.fillStyle='#c0503a';rr(80,1420,920,300,40);x.fill();x.fillStyle='#e8a050';rr(130,1460,820,220,30);x.fill();
 x.fillStyle='rgba(0,0,0,0.1)';x.fillRect(-60,1350,W+120,14);
 // bayram süsü
 x.strokeStyle='#d33';x.lineWidth=4;x.beginPath();x.moveTo(0,200);x.quadraticCurveTo(540,300,1080,200);x.stroke();
 ['#ff4d5e','#ffd23f','#4aa3ff','#9be36a'].forEach((c,i)=>{for(let k=0;k<3;k++){const px=90+(i+k*4)*80;const py=200+Math.sin(px/1080*Math.PI)*100*0.98;x.fillStyle=c;x.beginPath();x.moveTo(px-26,py);x.lineTo(px+26,py);x.lineTo(px,py+50);x.fill();}});}
function sofa(cx,cy,s,col){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle=col||'#7a4a8a';rr(-360,-260,720,300,50);x.fill();x.fillStyle='#8f5aa0';rr(-420,-80,140,260,40);x.fill();rr(280,-80,140,260,40);x.fill();x.fillStyle='#6a3a7a';rr(-300,20,600,150,30);x.fill();x.restore();}
function jar(cx,cy,s,o={}){x.save();x.translate(cx,cy);x.scale(s,s);
 const lvl=o.level==null?1:o.level;
 x.fillStyle='rgba(220,235,245,0.55)';rr(-150,-170,300,360,50);x.fill();
 x.save();rr(-150,-170,300,360,50);x.clip();x.fillStyle=o.fill||CREAM;x.fillRect(-160,190-360*lvl*0.95,320,400);x.fillStyle='rgba(255,255,255,0.35)';x.fillRect(-120,-150,40,320);x.restore();
 x.strokeStyle='rgba(255,255,255,0.8)';x.lineWidth=8;rr(-150,-170,300,360,50);x.stroke();
 if(!o.open){x.fillStyle=o.lid||'#ffcf33';rr(-130,-230-(o.lidUp||0),260,80,16);x.fill();x.fillStyle='rgba(0,0,0,0.15)';for(let i=0;i<6;i++)x.fillRect(-115+i*45,-220-(o.lidUp||0),14,60);}
 else{x.fillStyle='rgba(200,220,235,0.8)';rr(-120,-200,240,40,14);x.fill();}
 if(o.label!==false){x.fillStyle=o.labelCol||'#fff';rr(-150,-40,300,130,10);x.fill();x.fillStyle=o.labelBand||'#2f7a3a';x.fillRect(-150,-40,300,24);x.fillRect(-150,66,300,24);
  x.font=`900 ${o.labelSize||52}px ${F}`;x.textAlign='center';x.textBaseline='middle';x.fillStyle=o.labelTxtCol||'#c0302a';x.fillText(o.label||'MAYONEZ',0,26,280);}
 if(o.bow){x.fillStyle='#ff4d5e';x.fillRect(-12,-235,24,430);x.beginPath();x.ellipse(-60,-250,60,30,0.4,0,7);x.ellipse(60,-250,60,30,-0.4,0,7);x.fill();}
 x.restore();}
function spoon(cx,cy,s,rot,load){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(s,s);x.fillStyle='#c9d1db';rr(-14,0,28,300,14);x.fill();x.beginPath();x.ellipse(0,-40,60,80,0,0,7);x.fill();x.fillStyle='#e8eef5';x.beginPath();x.ellipse(-12,-50,30,50,0,0,7);x.fill();
 if(load){x.fillStyle=load===true?CREAM:load;x.beginPath();x.ellipse(0,-60,70,46,0,0,7);x.fill();x.beginPath();x.arc(10,-100,36,0,7);x.fill();x.beginPath();x.arc(-6,-128,18,0,7);x.fill();}x.restore();}
function env(cx,cy,s,rot,money){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(s,s);if(money){x.fillStyle='#6fbf73';rr(-120,-150,240,130,10);x.fill();x.fillStyle='#4a9a52';x.beginPath();x.arc(0,-85,30,0,7);x.fill();}
 x.fillStyle='#fff';rr(-150,-90,300,190,12);x.fill();x.strokeStyle='#d33';x.lineWidth=8;x.beginPath();x.moveTo(-150,-90);x.lineTo(0,10);x.lineTo(150,-90);x.stroke();x.fillStyle='#d33';x.beginPath();x.arc(0,10,18,0,7);x.fill();x.restore();}
function tears(cx,cy,r,T){x.fillStyle='#6cc6ff';[-1,1].forEach(k=>{for(let i=0;i<3;i++){const ph=(T*1.6+i/3)%1;x.globalAlpha=1-ph;x.beginPath();x.ellipse(cx+k*r*0.38,cy+r*0.15+ph*r*1.2,r*0.07,r*0.11,0,0,7);x.fill();}});x.globalAlpha=1;}
function teaGlass(cx,cy,s,T){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#e9e2d0';x.beginPath();x.ellipse(0,110,130,26,0,0,7);x.fill();x.fillStyle='rgba(255,255,255,0.35)';x.beginPath();x.moveTo(-60,-100);x.quadraticCurveTo(-30,0,-55,40);x.quadraticCurveTo(-60,100,0,100);x.quadraticCurveTo(60,100,55,40);x.quadraticCurveTo(30,0,60,-100);x.fill();x.fillStyle='#b5401e';x.beginPath();x.moveTo(-52,-60);x.quadraticCurveTo(-26,0,-50,40);x.quadraticCurveTo(-54,92,0,92);x.quadraticCurveTo(54,92,50,40);x.quadraticCurveTo(26,0,52,-60);x.fill();x.restore();}
function teapot(cx,cy,s,tilt){x.save();x.translate(cx,cy);x.rotate(tilt||0);x.scale(s,s);x.fillStyle='#e8e8ee';x.beginPath();x.ellipse(0,0,140,120,0,0,7);x.fill();x.beginPath();x.moveTo(120,-20);x.lineTo(240,-90);x.lineTo(250,-70);x.lineTo(130,30);x.fill();x.strokeStyle='#e8e8ee';x.lineWidth=22;x.beginPath();x.arc(-150,0,60,1.6,4.7);x.stroke();x.fillStyle='#c9302a';x.beginPath();x.ellipse(0,-120,60,20,0,0,7);x.fill();x.restore();}
function nightKitchen(){kitchen(true);x.fillStyle='rgba(10,20,60,0.25)';x.fillRect(0,0,W,H);}
function clockS(cx,cy,s,txt2,T){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#0b0b12';rr(-230,-90,460,180,24);x.fill();x.font=`900 120px monospace`;x.textAlign='center';x.textBaseline='middle';x.fillStyle='#ff3b4e';x.fillText(Math.floor(T*2)%2?txt2:txt2.replace(':',' '),0,8);x.restore();}
function pot(cx,cy,s,tilt){x.save();x.translate(cx,cy);x.rotate(tilt||0);x.scale(s,s);x.fillStyle='#9aa4b5';rr(-170,-110,340,220,30);x.fill();x.fillStyle='#fff3c0';x.beginPath();x.ellipse(0,-110,170,30,0,0,7);x.fill();x.fillStyle='#555';rr(160,-60,150,30,14);x.fill();x.restore();}
function gift(cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#4aa3ff';rr(-170,-150,340,300,20);x.fill();x.fillStyle='#ffd23f';x.fillRect(-25,-150,50,300);x.fillRect(-170,-25,340,50);x.beginPath();x.ellipse(-60,-170,60,30,0.4,0,7);x.ellipse(60,-170,60,30,-0.4,0,7);x.fill();x.restore();}
function sparkle(cx,cy,r,T){x.fillStyle='#fff';for(let i=0;i<5;i++){const a=i*1.25+T*2,d=r*(0.8+0.2*Math.sin(T*5+i));x.save();x.translate(cx+Math.cos(a)*d,cy+Math.sin(a)*d);x.rotate(T*3);x.beginPath();for(let k=0;k<8;k++){const aa=k*Math.PI/4,rr2=k%2?6:20;x.lineTo(Math.cos(aa)*rr2,Math.sin(aa)*rr2);}x.fill();x.restore();}}
