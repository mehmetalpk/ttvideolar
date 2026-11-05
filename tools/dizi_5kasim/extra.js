// extra helpers (5 Kasım)
function kitchen(dark){const w=dark?'#1d2340':'#f6e7c8',cab=dark?'#2a3156':'#c98f5a',ct=dark?'#3a3f5e':'#e9eef3';
 x.fillStyle=w;x.fillRect(-60,-60,W+120,H+120);
 x.fillStyle=cab;for(let i=0;i<3;i++){rr(80+i*320,360,280,330,18);x.fill();}
 x.fillStyle=dark?'#151a33':'#a8764a';for(let i=0;i<3;i++){rr(200+i*320,600,40,12,6);x.fill();}
 x.fillStyle=dark?'#2a3156':'#c98f5a';x.fillRect(-60,1290,W+120,700);
 x.fillStyle=ct;x.fillRect(-60,1240,W+120,60);
 if(!dark){x.fillStyle='rgba(255,255,255,0.35)';for(let i=0;i<6;i++)x.fillRect(i*190,720,150,6);} }
function speaker(cx,cy,s,T,col,talk){x.save();x.translate(cx,cy);x.scale(s,s);
 if(talk){for(let k=0;k<3;k++){const ph=((T*1.6)+k/3)%1;x.strokeStyle=col;x.globalAlpha=(1-ph)*0.8;x.lineWidth=12;[-1,1].forEach(sd=>{x.beginPath();x.arc(0,-40,140+ph*170,sd>0?-0.6:Math.PI-0.6+0,sd>0?0.6:Math.PI+0.6);x.stroke();});}x.globalAlpha=1;}
 x.fillStyle='#2e3240';rr(-110,-150,220,300,60);x.fill();
 x.fillStyle='#3d4254';for(let r=0;r<7;r++)for(let c2=0;c2<5;c2++){x.beginPath();x.arc(-64+c2*32,-70+r*30,6,0,7);x.fill();}
 x.fillStyle='#1d2029';x.beginPath();x.ellipse(0,-150,110,28,0,0,7);x.fill();
 if(col){x.strokeStyle=col;x.lineWidth=12;x.shadowColor=col;x.shadowBlur=40;x.beginPath();x.ellipse(0,-150,92,20,0,0,7);x.stroke();x.shadowBlur=0;}
 x.restore();}
function heart(cx,cy,s,col){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle=col||'#ff2d55';x.beginPath();x.moveTo(0,40);x.bezierCurveTo(-110,-30,-60,-120,0,-60);x.bezierCurveTo(60,-120,110,-30,0,40);x.fill();x.restore();}
function check(cx,cy,s,col){x.save();x.translate(cx,cy);x.scale(s,s);x.strokeStyle=col||'#39d353';x.lineWidth=26;x.lineCap='round';x.lineJoin='round';x.beginPath();x.moveTo(-50,0);x.lineTo(-12,40);x.lineTo(60,-50);x.stroke();x.restore();}
function door(cx,cy,s,open,col){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#3a2a1a';rr(-230,-560,460,1120,10);x.fill();x.fillStyle=col||'#8a5a3a';x.save();x.transform(1-open*0.6,0,0,1,-230*open*0.6,0);rr(-210,-540,420,1100,8);x.fill();x.fillStyle='rgba(0,0,0,0.15)';rr(-160,-480,320,420,8);x.fill();rr(-160,20,320,420,8);x.fill();x.fillStyle='#e0c070';x.beginPath();x.arc(150,30,22,0,7);x.fill();x.restore();x.restore();}
function suitcase(cx,cy,s,col){x.save();x.translate(cx,cy);x.scale(s,s);x.strokeStyle='#333';x.lineWidth=16;x.beginPath();x.moveTo(-50,-200);x.lineTo(-50,-260);x.lineTo(50,-260);x.lineTo(50,-200);x.stroke();x.fillStyle=col||'#6b4a8a';rr(-150,-200,300,400,30);x.fill();x.fillStyle='rgba(0,0,0,0.2)';[-80,0,80].forEach(a=>x.fillRect(a-6,-180,12,360));x.fillStyle='#222';x.beginPath();x.arc(-100,210,20,0,7);x.arc(100,210,20,0,7);x.fill();x.restore();}
function phone(cx,cy,s,rot,cracked,scr){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(s,s);x.fillStyle='#111';rr(-110,-210,220,420,30);x.fill();x.fillStyle=scr||'#2b3a6a';rr(-96,-190,192,380,18);x.fill();if(cracked){x.strokeStyle='#fff';x.lineWidth=5;x.beginPath();x.moveTo(-20,-60);x.lineTo(-90,-150);x.moveTo(-20,-60);x.lineTo(80,-120);x.moveTo(-20,-60);x.lineTo(10,80);x.lineTo(-60,170);x.moveTo(10,80);x.lineTo(90,140);x.moveTo(-20,-60);x.lineTo(-95,20);x.stroke();}x.restore();}
function sun(cx,cy,s,T){x.save();x.translate(cx,cy);x.scale(s,s);x.rotate(T*0.5);x.fillStyle='#ffc93c';for(let i=0;i<10;i++){x.rotate(Math.PI/5);x.fillRect(-8,-150,16,50);}x.beginPath();x.arc(0,0,85,0,7);x.fill();x.restore();}
function cloud(cx,cy,s,col){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle=col||'#fff';x.beginPath();x.arc(-70,0,60,0,7);x.arc(0,-30,80,0,7);x.arc(80,0,60,0,7);x.rect(-70,0,150,60);x.fill();x.restore();}
function lampObj(cx,cy,s,on){x.save();x.translate(cx,cy);x.scale(s,s);if(on){x.fillStyle='rgba(255,230,140,0.35)';x.beginPath();x.moveTo(-90,60);x.lineTo(90,60);x.lineTo(260,700);x.lineTo(-260,700);x.fill();}x.strokeStyle='#333';x.lineWidth=8;x.beginPath();x.moveTo(0,-400);x.lineTo(0,-60);x.stroke();x.fillStyle='#e9a23b';x.beginPath();x.moveTo(-60,-60);x.lineTo(60,-60);x.lineTo(110,60);x.lineTo(-110,60);x.fill();x.fillStyle=on?'#fff6c0':'#777';x.beginPath();x.arc(0,70,28,0,7);x.fill();x.restore();}
function recCircle(cx,cy,s,T){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle=Math.floor(T*3)%2?'#ff2d2d':'#a00';x.shadowColor='#ff2d2d';x.shadowBlur=60;x.beginPath();x.arc(0,0,60,0,7);x.fill();x.shadowBlur=0;txt('REC',150,0,70,'#fff',{align:'left',lw:10});x.restore();}
function vignette(a){const g=x.createRadialGradient(540,960,300,540,960,1200);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,`rgba(0,0,0,${a})`);x.fillStyle=g;x.fillRect(0,0,W,H);}
function bubble2(cx,cy,w,h,l1,l2,sz,T){x.save();const k=1+0.03*Math.sin(T*5);x.translate(cx,cy);x.scale(k,k);x.fillStyle='#fff';x.shadowColor='rgba(0,0,0,0.4)';x.shadowBlur=30;rr(-w/2,-h/2,w,h,50);x.fill();x.beginPath();x.moveTo(-60,h/2-4);x.lineTo(-100,h/2+70);x.lineTo(10,h/2-4);x.fill();x.shadowBlur=0;x.restore();
 x.save();x.translate(cx,cy);x.scale(k,k);txt(l1,0,-sz*0.62,sz,'#111',{stroke:false,maxW:w-60});txt(l2,0,sz*0.62,sz,'#ff2d55',{stroke:false,maxW:w-60});x.restore();}
const ANNEANNE={skin:'#e6b590',hair:'#d4d4da',bigHair:true,shirt:'#6b4a8a',skinShade:'#c99a74'};
