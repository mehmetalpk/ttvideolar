// Yarım kilo kanat — yardımcılar
const ASCI={skin:'#e8b48c',hair:'#2b1d16',shirt:'#f2f2f2',skinShade:'#cf9a73'};
const ASCI2={skin:'#d9a07a',hair:'#141414',shirt:'#f2f2f2',skinShade:'#bf8660',mustache:'#141414'};
const ASCI3={skin:'#f0caa8',hair:'#a0602a',shirt:'#f2f2f2',skinShade:'#d8aa88'};
const SELIN={skin:'#f0c8a8',hair:'#5a2e1a',hairStyle:'long',shirt:'#222228',skinShade:'#d6a888',blush:true};
const ADAM={skin:'#e0a882',hair:'#5a4a3a',shirt:'#3f7a5a',skinShade:'#c48e6a'};
const AR1={skin:'#eab896',hair:'#c08a3a',hairStyle:'long',shirt:'#c0506a'};
const AR2={skin:'#c98a62',hair:'#1a1a1a',shirt:'#3a5aa0',skinShade:'#a86e4a'};
const AR3={skin:'#f2cfb0',hair:'#3a2418',shirt:'#e09a30'};
const RED='#ff4d5e',YEL='#ffd23f',GRN='#5fd35f';
function wing(cx,cy,s,rot){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(s,s);
 x.fillStyle='#8a3a12';x.beginPath();x.ellipse(0,4,62,40,0,0,7);x.fill();
 x.fillStyle='#c8551c';x.beginPath();x.ellipse(-4,0,58,36,0,0,7);x.fill();
 x.fillStyle='#e07a2a';x.beginPath();x.ellipse(-14,-10,30,14,-0.2,0,7);x.fill();
 x.fillStyle='#f4e6cc';x.beginPath();x.ellipse(60,0,14,10,0,0,7);x.fill();x.restore();}
const WPOS=[[-120,-40,0.3],[-40,-60,-0.4],[50,-50,0.5],[125,-30,-0.2],[-130,40,-0.5],[-45,30,0.2],[45,40,-0.3],[130,45,0.4]];
function plate(cx,cy,s,n,o={}){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='rgba(0,0,0,0.25)';x.beginPath();x.ellipse(6,14,250,110,0,0,7);x.fill();
 x.fillStyle='#f6f6f2';x.beginPath();x.ellipse(0,0,250,110,0,0,7);x.fill();x.strokeStyle='#d8d8d0';x.lineWidth=8;x.beginPath();x.ellipse(0,0,190,80,0,0,7);x.stroke();
 for(let i=0;i<n;i++){const p=WPOS[i];wing(p[0],p[1],0.85,p[2]);}x.restore();}
function scaleObj(cx,cy,s,val,col){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='rgba(0,0,0,0.25)';rr(-262,-52,540,250,40);x.fill();
 x.fillStyle='#c9ced6';rr(-270,-60,540,250,40);x.fill();x.fillStyle='#e9edf2';rr(-250,-100,500,70,30);x.fill();
 x.fillStyle='#1a2a1a';rr(-180,40,360,110,16);x.fill();x.font=`900 86px monospace`;x.textAlign='center';x.textBaseline='middle';x.fillStyle=col||'#7dff6a';x.fillText(val,0,98);x.restore();}
function trash(cx,cy,s,lid){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#5a6270';x.beginPath();x.moveTo(-150,-160);x.lineTo(150,-160);x.lineTo(120,200);x.lineTo(-120,200);x.closePath();x.fill();
 x.fillStyle='rgba(0,0,0,0.18)';[-70,0,70].forEach(a=>x.fillRect(a-8,-120,16,290));x.save();x.translate(-170,-170);x.rotate(-(lid||0));x.fillStyle='#454c58';rr(0,-30,340,40,14);x.fill();x.restore();x.restore();}
function chefHat(cx,cy,r){x.save();x.fillStyle='#fff';x.strokeStyle='#d8d8d8';x.lineWidth=r*0.03;x.fillRect(cx-r*0.7,cy-r*0.15,r*1.4,r*0.4);x.strokeRect(cx-r*0.7,cy-r*0.15,r*1.4,r*0.4);
 x.beginPath();x.arc(cx-r*0.45,cy-r*0.35,r*0.38,0,7);x.arc(cx,cy-r*0.55,r*0.45,0,7);x.arc(cx+r*0.45,cy-r*0.35,r*0.38,0,7);x.fill();x.restore();}
function chef(P,cx,cy,r,o={}){person(P,cx,cy,r,o);chefHat(cx,cy-r*1.08,r);}
function specs(cx,cy,r,drop){const gy=cy-r*0.02+(drop||0)*r;x.save();x.strokeStyle='#222';x.lineWidth=r*0.05;[-1,1].forEach(s=>{x.beginPath();x.arc(cx+s*r*0.33,gy,r*0.19,0,7);x.stroke();});x.beginPath();x.moveTo(cx-r*0.14,gy);x.lineTo(cx+r*0.14,gy);x.stroke();x.restore();}
function adam(cx,cy,r,o={},drop){person(ADAM,cx,cy,r,o);specs(cx,cy,r,drop);}
function adamFace(cx,cy,r,o={},drop){face(cx,cy,r,{...ADAM,...o});specs(cx,cy,r,drop);}
function resto(){x.fillStyle='#f2dcb8';x.fillRect(-60,-60,W+120,H+120);x.fillStyle='#c98f5a';x.fillRect(-60,-60,W+120,120);
 x.fillStyle='rgba(160,80,30,0.12)';for(let i=0;i<8;i++)x.fillRect(i*150,0,70,1300);x.fillStyle='#8a5a3a';x.fillRect(-60,1300,W+120,700);
 x.fillStyle='#ffe9a0';[200,540,880].forEach(a=>{x.beginPath();x.arc(a,90,26,0,7);x.fill();});}
function kTable(y){x.fillStyle='#7a4a2a';rr(40,y,1000,60,16);x.fill();x.fillStyle='#5e3820';x.fillRect(100,y+60,40,500);x.fillRect(940,y+60,40,500);}
function kitch(){x.fillStyle='#dfe8ee';x.fillRect(-60,-60,W+120,H+120);x.fillStyle='#c4d0da';for(let r=0;r<12;r++)for(let c2=0;c2<8;c2++){x.fillRect(c2*140+(r%2)*70,r*110,134,104);}
 x.fillStyle='#9aa6b2';x.fillRect(-60,1250,W+120,800);x.fillStyle='#b8c2cc';x.fillRect(-60,1230,W+120,40);}
function signBoard(cx,cy,s,l1,l2){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#2a2a2a';rr(-380,-230,760,460,30);x.fill();x.strokeStyle='#c98f5a';x.lineWidth=22;x.stroke();
 txt(l1,0,-90,80,'#fff',{stroke:false,maxW:680});txt(l2,0,70,110,YEL,{stroke:false,maxW:680});x.restore();}
function clock(cx,cy,s,T){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#fff';x.beginPath();x.arc(0,0,220,0,7);x.fill();x.strokeStyle='#333';x.lineWidth=20;x.stroke();
 x.lineCap='round';x.lineWidth=16;x.beginPath();x.moveTo(0,0);x.lineTo(0,-130);x.stroke();x.save();x.rotate(T*4);x.lineWidth=10;x.beginPath();x.moveTo(0,0);x.lineTo(0,-180);x.stroke();x.restore();x.restore();}
function calc(cx,cy,s){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#333a44';rr(-130,-190,260,380,26);x.fill();x.fillStyle='#b8d8a8';rr(-105,-165,210,80,10);x.fill();
 x.font=`900 50px monospace`;x.textAlign='right';x.textBaseline='middle';x.fillStyle='#223';x.fillText('8×8=?',95,-125);
 for(let r=0;r<4;r++)for(let c2=0;c2<4;c2++){x.fillStyle=c2===3?'#e09030':'#5a6470';rr(-105+c2*54,-60+r*60,44,48,8);x.fill();}x.restore();}
function bubbleT(cx,cy,w,h,lines,tailX,col){x.save();x.fillStyle='#fff';x.shadowColor='rgba(0,0,0,0.35)';x.shadowBlur=24;rr(cx-w/2,cy-h/2,w,h,40);x.fill();x.beginPath();x.moveTo((tailX||cx)-26,cy+h/2-4);x.lineTo((tailX||cx)+8,cy+h/2+60);x.lineTo((tailX||cx)+36,cy+h/2-4);x.fill();x.shadowBlur=0;x.restore();
 const n=lines.length;lines.forEach(([t,sz,c],i)=>txt(t,cx,cy+(i-(n-1)/2)*sz*1.15,sz,c||'#111',{stroke:false,maxW:w-60}));}
function fly(t,a,b,x0,y0,x1,y1,h){const p=prog(t,a,b);return [x0+(x1-x0)*p,y0+(y1-y0)*p-Math.sin(p*Math.PI)*h,p];}
function zipMouth(cx,cy,r){x.save();x.strokeStyle='#555';x.lineWidth=r*0.05;x.beginPath();x.moveTo(cx-r*0.28,cy+r*0.5);x.lineTo(cx+r*0.28,cy+r*0.5);x.stroke();for(let i=-3;i<=3;i++){x.beginPath();x.moveTo(cx+i*r*0.08,cy+r*0.45);x.lineTo(cx+i*r*0.08,cy+r*0.55);x.stroke();}x.restore();}
function sweat(cx,cy,s,T){x.save();x.translate(cx,cy+((T*80)%60));x.scale(s,s);x.fillStyle='#8fd0ff';x.beginPath();x.moveTo(0,-30);x.quadraticCurveTo(24,10,0,22);x.quadraticCurveTo(-24,10,0,-30);x.fill();x.restore();}
