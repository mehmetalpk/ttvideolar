// HK S2 P2/P3 ortak yardımcılar
const PINK2='#ff5fa2';
function s2Badge(T,n){x.save();x.translate(540,215);const s=0.82+0.04*Math.sin(T*8);x.scale(s,s);x.rotate(-0.04);x.fillStyle='#ff2d55';rr(-250,-58,500,116,26);x.fill();x.strokeStyle='#fff';x.lineWidth=7;x.stroke();x.font=`900 56px ${F}`;x.textAlign='center';x.textBaseline='middle';x.fillStyle='#fff';x.fillText('SEZON 2 · PART '+n,0,4,460);x.restore();}
function pwPanel(cx,cy,s,txt2,T,glow,title){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#20242e';rr(-300,-150,600,300,34);x.fill();x.strokeStyle=glow||'#39d353';x.lineWidth=8;x.shadowColor=glow||'#39d353';x.shadowBlur=30;rr(-300,-150,600,300,34);x.stroke();x.shadowBlur=0;
 x.fillStyle='#0b1a0f';rr(-260,-110,520,120,18);x.fill();x.font=`900 34px ${F}`;x.textAlign='center';x.textBaseline='middle';x.fillStyle='#9fb3a5';x.fillText(title||'AKILLI EV · ŞİFRE',0,-80);
 x.font=`900 70px monospace`;x.fillStyle=glow||'#39d353';x.fillText(txt2,0,-28,500);
 for(let i=0;i<4;i++){x.fillStyle=Math.floor(T*4+i)%2?(glow||'#39d353'):'#1d4a2a';x.beginPath();x.arc(-150+i*100,90,22,0,7);x.fill();}x.restore();}
function bigPanel(cx,cy,w,h,l1,l2,col,T){x.save();x.translate(cx,cy);x.fillStyle='#10131a';rr(-w/2,-h/2,w,h,36);x.fill();x.strokeStyle=col;x.lineWidth=10;x.shadowColor=col;x.shadowBlur=40*(0.6+0.4*Math.sin(T*8));rr(-w/2,-h/2,w,h,36);x.stroke();x.shadowBlur=0;
 txt(l1,0,-h*0.18,78,col,{stroke:false,maxW:w-60});txt(l2,0,h*0.2,78,'#fff',{stroke:false,maxW:w-60});x.restore();}
function curtainWin(cx,cy,s,open,lightOn){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle=lightOn?'#ffe9a8':'#bfe3ff';rr(-220,-260,440,520,10);x.fill();x.fillStyle='#ffd23f';x.beginPath();x.arc(90,-120,60,0,7);x.fill();
 x.fillStyle='#c0506a';const w=220*(1-open*0.8);rr(-230,-280,w,560,8);x.fill();rr(230-w,-280,w,560,8);x.fill();x.fillStyle='#7a4a2a';x.fillRect(-260,-300,520,24);x.restore();}
function bulbC(cx,cy,s,col){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle=col+'55';x.beginPath();x.arc(0,0,170,0,7);x.fill();x.fillStyle=col;x.beginPath();x.arc(0,0,80,0,7);x.fill();x.fillStyle='#555';x.fillRect(-36,-130,72,60);x.restore();}
function fridgeFace(cx,cy,s,T,talk,eyeCol){fridge(cx,cy,s);x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#1b2a3a';rr(-130,-430,260,150,20);x.fill();x.fillStyle=eyeCol||'#39d6ff';[-55,55].forEach(k=>{x.beginPath();x.arc(k,-375,20,0,7);x.fill();});
 const m=talk?14+12*Math.abs(Math.sin(T*14)):6;x.fillRect(-45,-325-m/2,90,m);x.restore();}
const DISCO=['#ff2d55','#3fa9ff','#39d353','#ffd23f','#b05cff'];
function disco(T,a){const k=Math.floor(T*6);x.fillStyle=DISCO[k%5];x.globalAlpha=a==null?0.55:a;x.fillRect(-60,-60,W+120,H+120);x.globalAlpha=1;
 for(let i=0;i<5;i++){const ang=Math.sin(T*2+i*1.3)*0.6;x.save();x.translate(540,80);x.rotate(ang);x.fillStyle=DISCO[(k+i)%5]+'66';x.beginPath();x.moveTo(-30,0);x.lineTo(30,0);x.lineTo(260,1900);x.lineTo(-260,1900);x.fill();x.restore();}}
function discoBall(cx,cy,r,T){x.save();x.translate(cx,cy);x.strokeStyle='#888';x.lineWidth=6;x.beginPath();x.moveTo(0,-r-200);x.lineTo(0,-r);x.stroke();x.beginPath();x.arc(0,0,r,0,7);x.clip();for(let i=-6;i<6;i++)for(let j=-6;j<6;j++){x.fillStyle=((i+j+Math.floor(T*8))%3===0)?'#fff':(i+j)%2?'#c7ccd6':'#8a93a3';x.fillRect(i*r/5+((T*60)%(r/5)),j*r/5,r/5-3,r/5-3);}x.restore();}
function bed(cx,cy,s,col){x.save();x.translate(cx,cy);x.scale(s,s);x.fillStyle='#6b4226';rr(-460,-260,60,520,10);x.fill();x.fillStyle='#fff';rr(-400,-40,860,120,30);x.fill();x.fillStyle=col||'#3b6fb6';rr(-380,30,880,260,40);x.fill();x.fillStyle='rgba(255,255,255,0.15)';for(let i=0;i<5;i++)x.fillRect(-340+i*170,30,20,260);x.fillStyle='#6b4226';x.fillRect(-460,260,980,40);x.restore();}
function notebook(cx,cy,s,rot){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(s,s);x.fillStyle='#3b6fb6';rr(-220,-160,440,320,14);x.fill();x.fillStyle='#fff';rr(-200,-140,400,280,8);x.fill();x.strokeStyle='#bcd';x.lineWidth=4;for(let y=-90;y<130;y+=46){x.beginPath();x.moveTo(-180,y);x.lineTo(180,y);x.stroke();}
 x.font=`800 44px ${F}`;x.textAlign='center';x.fillStyle='#1b2a6a';x.fillText('12 × 7 = 84',0,-30);x.restore();}
function zz(cx,cy,T){x.save();for(let i=0;i<3;i++){const ph=(T*0.8+i/3)%1;x.globalAlpha=1-ph;txt('Z',cx+ph*80,cy-ph*160,60+i*10,'#fff',{lw:8});}x.restore();}
