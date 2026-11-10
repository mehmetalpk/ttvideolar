// Park Yeri Savaşı P3/P4 yeni karakterler + nesneler
const TARIK={skin:'#d8a47e',hair:'#0e0e12',shirt:'#1c1f2a',skinShade:'#bb8662'};
const DEDE={skin:'#e2b08c',hair:'#e8e8ec',mustache:'#d0d0d6',shirt:'#7a6a4a',skinShade:'#c4946f',browCol:'#bdbdc4'};
const KAZIM={skin:'#d9a37c',hair:'#3a2a1a',mustache:'#2a1a10',shirt:'#5a6a3a',skinShade:'#bb8662'};
const DEDE_GENC={skin:'#e2b08c',hair:'#2b1d16',mustache:'#2b1d16',shirt:'#8a5a3a',skinShade:'#c4946f'};
function partBadgeN(n,cx,cy,T){x.save();x.translate(cx,cy);const s=1+0.05*Math.sin(T*8);x.scale(s,s);x.rotate(-0.08);x.fillStyle='#ff2d55';rr(-170,-60,340,120,26);x.fill();x.strokeStyle='#fff';x.lineWidth=7;x.stroke();x.font=`900 66px ${F}`;x.textAlign='center';x.textBaseline='middle';x.fillStyle='#fff';x.fillText('PART '+n,0,4,310);x.restore();}
function tarik(cx,cy,r,o={}){person(TARIK,cx,cy,r,o);tie(cx,cy+r*1.05,r/150);x.save();x.fillStyle='#fff';x.beginPath();x.moveTo(cx-r*0.32,cy+r*1.05);x.lineTo(cx,cy+r*1.5);x.lineTo(cx+r*0.32,cy+r*1.05);x.fill();x.restore();tie(cx,cy+r*1.05,r/150);}
function dede(cx,cy,r,o={},drop){person(DEDE,cx,cy,r,o);if(!o.noSpecs)specs(cx,cy,r,drop||0);}
function oldPaper(cx,cy,s,rot,lines,sig){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(s,s);x.fillStyle='rgba(0,0,0,0.3)';x.fillRect(-312,-392,640,800);x.fillStyle='#e8d49a';x.fillRect(-320,-400,640,800);
 x.fillStyle='rgba(150,100,40,0.25)';x.beginPath();x.arc(-220,-300,60,0,7);x.arc(240,260,80,0,7);x.fill();
 (lines||[]).forEach(([t2,sz,col],i)=>{txt(t2,0,-300+i*(sz*1.35),sz,col||'#4a3010',{stroke:false,w:900,maxW:560});});
 if(sig>0){x.strokeStyle='#1b2a6a';x.lineWidth=7;x.beginPath();for(let i=0;i<=60*sig;i++){const xx=-200+i*6.5,yy=250+Math.sin(i*0.55)*28-i*0.8;i?x.lineTo(xx,yy):x.moveTo(xx,yy);}x.stroke();}
 x.restore();}
function tavla(cx,cy,s,T,open){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#5a3418';rr(-400,-260,800,520,24);x.fill();x.fillStyle='#d8b27a';rr(-370,-230,350,460,10);x.fill();rr(20,-230,350,460,10);x.fill();x.fillStyle='#5a3418';x.fillRect(-20,-260,40,520);
 [[-370],[20]].forEach(([ox])=>{for(let i=0;i<6;i++){x.fillStyle=i%2?'#7a1a1a':'#2a4a2a';x.beginPath();x.moveTo(ox+i*58,-230);x.lineTo(ox+i*58+58,-230);x.lineTo(ox+i*58+29,-40);x.fill();x.beginPath();x.moveTo(ox+i*58,230);x.lineTo(ox+i*58+58,230);x.lineTo(ox+i*58+29,40);x.fill();}});
 [[-340,-200,'#fff'],[-340,-150,'#fff'],[-110,190,'#222'],[-110,140,'#222'],[60,-200,'#222'],[280,190,'#fff'],[280,140,'#fff']].forEach(([a,b,c2])=>{x.fillStyle=c2;x.beginPath();x.arc(a,b,24,0,7);x.fill();x.strokeStyle='#888';x.lineWidth=3;x.stroke();});x.restore();}
function die(cx,cy,s,n,rot){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(s,s);x.fillStyle='#fff';x.shadowColor='rgba(0,0,0,0.4)';x.shadowBlur=20;rr(-60,-60,120,120,20);x.fill();x.shadowBlur=0;x.fillStyle='#c0263a';
 const P={1:[[0,0]],2:[[-30,-30],[30,30]],3:[[-30,-30],[0,0],[30,30]],4:[[-30,-30],[30,-30],[-30,30],[30,30]],5:[[-30,-30],[30,-30],[0,0],[-30,30],[30,30]],6:[[-30,-32],[30,-32],[-30,0],[30,0],[-30,32],[30,32]]}[n];P.forEach(([a,b])=>{x.beginPath();x.arc(a,b,12,0,7);x.fill();});x.restore();}
function seeds(cx,cy,T){x.save();for(let i=0;i<6;i++){const ph=(T*1.2+i/6)%1;x.fillStyle='#222';x.globalAlpha=1-ph;x.beginPath();x.ellipse(cx+Math.sin(i*2.1)*80*ph,cy+ph*300,10,6,i,0,7);x.fill();}x.restore();}
function sepia(a){x.fillStyle=`rgba(140,90,30,${a})`;x.fillRect(0,0,W,H);}
function coffeeHouse(){x.fillStyle='#e8cfa0';x.fillRect(-60,-60,W+120,H+120);x.fillStyle='#8a5a30';x.fillRect(-60,1300,W+120,700);x.fillStyle='#b88a50';for(let i=0;i<3;i++){rr(80+i*320,300,240,300,8);x.fill();}}
function speedL(T){x.strokeStyle='rgba(255,255,255,0.45)';x.lineWidth=9;const r=rng(4);for(let i=0;i<14;i++){const yy=300+r()*1300,len=200+r()*300,px=((r()*1400-T*2600)%1400+1400)%1400-200;x.beginPath();x.moveTo(px,yy);x.lineTo(px+len,yy);x.stroke();}}
