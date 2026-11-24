// 0 kanca: adına sultan
shot(0,0,t=>{inside('#4a1414','#140606');x.save();x.translate(540,720);x.fillStyle='#f3e6c4';rr(-400,-150,800,300,20);x.fill();x.fillStyle=PAL.ink;x.font=`900 74px ${F}`;x.textAlign='center';x.textBaseline='middle';x.fillText('İBRAHİM PAŞA',0,-50);x.fillStyle='#c1121f';x.font=`900 92px ${F}`;x.fillText('SULTAN',0,60);x.restore();bigText('ADINA',W/2,290,120,'#fff',1);bigText('"SULTAN" EKLEDİ',W/2,420,96,'#ffd23f',1);vignette(0.45);});
// 1 Mısır düzen
shot(1,1,t=>{x.fillStyle=grad(0,H,['#f2b45a','#ffe2a8']);x.fillRect(0,0,W,H);x.fillStyle='#c89a4a';x.beginPath();x.moveTo(140,1050);x.lineTo(360,700);x.lineTo(580,1050);x.fill();x.beginPath();x.moveTo(520,1050);x.lineTo(700,780);x.lineTo(880,1050);x.fill();x.fillStyle='#a87a3a';x.fillRect(0,1050,W,H);scroll(540,1380,0.9,cl((t-1)*2),'KANUNNAME');bigText('MISIR',W/2,300,160,'#7a1d1d',1);bigText('DÜZEN KURULDU',W/2,450,80,'#2b1d12',eOut(cl((t-0.5)*3)));});
// 2 Mohaç
shot(2,2,t=>{dayBg('#c9a070','#e8d8b0','#5a4a2a',1050);dust(540,1000,900,t);for(let i=0;i<4;i++)horseman(120+i*230+((t*120)%120),1060,0.7,t+i);bigText('MOHAÇ',W/2,300,160,'#8b1e1e',1);bigText('1526',W/2,450,100,'#2b1d12',1);});
// 3 1533 serasker sultan
shot(3,3,t=>{dayBg('#e0a060','#ffe0b0','#6a5a3a',1050);march(1060,t,9,0.55);banners(1060,3,1,t,'#7a1d1d');bigText('1533',W/2,280,150,'#8b1e1e',1);if(t>1.8){x.save();x.translate(540,520);const s=back(cl((t-1.8)*2));x.scale(s,s);x.fillStyle='#7a1d1d';rr(-420,-80,840,160,30);x.fill();x.fillStyle='#ffd23f';x.font=`900 80px ${F}`;x.textAlign='center';x.textBaseline='middle';x.fillText('SERASKER SULTAN',0,6);x.restore();}});
// 4 meydan okuma
shot(4,4,t=>{inside('#3a1414','#100404');x.save();x.globalAlpha=0.95;sil(300,1060,2.3,'#000');sil(780,1060,2.3,'#000');x.restore();x.fillStyle='#000';x.beginPath();x.ellipse(780,610,90,50,0,0,7);x.fill();const z=Math.sin(t*20)*cl(t-0.6)*6;bigText('⚡',W/2+z,800,160,'#ffd23f',cl((t-0.6)*3));bigText('MEYDAN OKUMA?',W/2,300,104,'#fff',1);});
// 5 İskender Çelebi idam
shot(5,5,t=>{if(t<2.3){inside('#2a2a14','#0a0a04');sil(320,1060,2.2,'#000');sil(760,1060,2.2,'#1a1a1a');bubble(320,560,'!!',cl(t*3));bubble(760,560,'!!',cl((t-0.4)*3));bigText('DEFTERDAR',W/2,280,110,'#ffd23f',1);bigText('İSKENDER ÇELEBİ',W/2,400,84,'#fff',1);}else{x.fillStyle=grad(0,H,['#5a1a1a','#1a0606']);x.fillRect(0,0,W,H);skylineIst(1050,'#2a0a0a',1);bigText('BAĞDAT',W/2,290,150,'#ffd23f',1);stampT('İDAM',540,800,(t-2.4)*3,'#c1121f',150);}});
// 6 düşman çok
shot(6,6,t=>{x.fillStyle=grad(0,H,['#0c0a18','#1f1830']);x.fillRect(0,0,W,H);for(let i=0;i<9;i++){const px=80+i*115;x.save();x.globalAlpha=0.9;sil(px,1060+(i%2)*20,1.2,'#000');x.restore();x.fillStyle='#ff3b3b';x.beginPath();x.arc(px-10,880+(i%2)*20,6,0,7);x.arc(px+10,880+(i%2)*20,6,0,7);x.fill();}bigText('DÜŞMANLAR',W/2,300,130,'#c1121f',1);});
// 7 ramazan iftar daveti
shot(7,7,t=>{x.fillStyle=grad(0,H,['#1a1030','#4a2a4a']);x.fillRect(0,0,W,H);crescent(820,320,90,'#ffd23f');silhouetteDome(1050,'#0a0614');x.fillStyle='#0a0614';x.fillRect(0,1050,W,H);mektup(540,700,0.8,t*2,'☾');bigText('İFTAR DAVETİ',W/2,500,100,'#fff',eOut(cl((t-0.8)*3)));});
// 8 outro
shot(8,8,t=>outro(t,3,'#151026','#05030c'));
