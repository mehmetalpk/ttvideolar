// 0 kanca
shot(0,0,t=>{x.fillStyle=grad(0,H,['#0c1a2a','#1a3048']);x.fillRect(0,0,W,H);rays(540,720,t,'rgba(160,220,255,0.12)');armut(540,700,1,t);kasik(240,820,0.8,-0.4);kasik(840,820,0.8,0.4);kasik(540,1000,0.7,0);bigText('ELMASI',W/2,280,130,'#cde8ff',1);bigText('3 KAŞIĞA SATTI',W/2,410,104,'#ffd23f',1);vignette(0.45);});
// 1 Yenikapı balıkçı taş buldu
shot(1,1,t=>{x.fillStyle=grad(0,H,['#f2b46a','#ffe2b0']);x.fillRect(0,0,W,H);waves(950,t,'#3a6a9a');x.fillStyle='#d8c09a';x.fillRect(0,1050,W,H);balikci(320,1060,1,t);if(t>2){const p=cl((t-2)*2);x.save();x.globalAlpha=p;armut(700,1010,0.25,t*2);x.restore();for(let i=0;i<6;i++){const a=i*Math.PI/3+t;x.strokeStyle=`rgba(255,255,255,${p*0.8})`;x.lineWidth=4;x.beginPath();x.moveTo(700+Math.cos(a)*50,1010+Math.sin(a)*50);x.lineTo(700+Math.cos(a)*80,1010+Math.sin(a)*80);x.stroke();}}bigText('EFSANEYE GÖRE',W/2,280,80,'#2b1d12',1);bigText('YENİKAPI',W/2,400,140,'#1f2a44',1);});
// 2 cam sandı, kuyumcuya
shot(2,2,t=>{if(t<1.4){x.fillStyle=grad(0,H,['#2a3a4a','#0e1a24']);x.fillRect(0,0,W,H);x.save();x.translate(540,720);x.rotate(t);x.fillStyle='rgba(200,240,255,0.5)';x.beginPath();x.moveTo(0,-120);x.lineTo(100,40);x.lineTo(-80,90);x.fill();x.restore();bigText('CAM PARÇASI?',W/2,300,110,'#fff',1);}else{inside('#3a2a14','#100a04');kuyumcu(700,760,110,t);balikci(280,1060,0.9,t);bigText('KUYUMCU',W/2,300,140,'#ffd23f',1);}});
// 3 3 kaşık verdi
shot(3,3,t=>{inside('#3a2a14','#100a04');for(let i=0;i<3;i++){const p=eOut(cl((t-i*0.4)*3));kasik(300+i*240,760+(1-p)*400,1.1*p+0.01,(i-1)*0.25);}bigText('3 KAŞIK',W/2,300,170,'#ffd23f',back(cl(t*2)));});
// 4 elmas olduğunu anladı
shot(4,4,t=>{x.fillStyle=grad(0,H,['#0c1a2a','#04080e']);x.fillRect(0,0,W,H);spot(540,720,420,0.5,'190,230,255');armut(540,720,1.2+Math.sin(t*3)*0.03,t);bigText('ELMAS!',W/2,300,180,'#cde8ff',back(cl(t*2)));});
// 5 kuyumcular kavga
shot(5,5,t=>{inside('#3a1e14','#120806');for(let i=0;i<4;i++){const px=200+i*230+Math.sin(t*12+i)*12;sil(px,1060,1.5,'#0a0604');bubble(px,560+(i%2)*80,i%2?'BENİM!':'PAY!',cl((t-i*0.3)*3));}dust(540,1000,700,t);bigText('KAVGA',W/2,300,170,'#ff5a4a',1);});
// 6 vezir duydu
shot(6,6,t=>{inside('#4a1414','#140606');townsman(540,760,120,{robe:'#7a1d1d',beard:'#3a2a1c',cap:'#f6f1e4',eyeOpen:0.7});for(let i=0;i<3;i++){const k=(t*0.8+i/3)%1;x.strokeStyle=`rgba(255,210,63,${1-k})`;x.lineWidth=6;x.beginPath();x.arc(380,720,40+k*120,-0.6,0.6);x.stroke();}bigText('VEZİR',W/2,300,170,'#ffd23f',1);});
// 7 sıradan değil
shot(7,7,t=>{x.fillStyle=grad(0,H,['#151026','#05030c']);x.fillRect(0,0,W,H);rays(540,720,t,'rgba(160,220,255,0.12)');armut(540,720,1.3,t);saray(1200,0.6,'#3a2a4a');bigText('SIRADAN DEĞİL',W/2,300,110,'#cde8ff',1);});
// 8 outro
shot(8,8,t=>outro(t,2,'#151026','#05030c'));
