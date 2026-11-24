// 0 kanca
shot(0,0,t=>{x.fillStyle=grad(0,H,['#1a1030','#4a2a4a']);x.fillRect(0,0,W,H);crescent(840,560,70,'#ffd23f');sofra(540,950,1.1,t);bigText('İFTARA ÇAĞRILDI',W/2,290,100,'#fff',1);bigText('SABAHI GÖREMEDİ',W/2,420,100,'#ff5a4a',1);vignette(0.45);});
// 1 Mart 1536 Ramazan
shot(1,1,t=>{x.fillStyle=grad(0,H,['#0c0a18','#2a1a3a']);x.fillRect(0,0,W,H);crescent(540,760,150,'#ffd23f');bigText('MART 1536',W/2,300,130,'#fff',1);bigText('RAMAZAN',W/2,1380,90,'#ffd23f',eOut(cl((t-0.6)*3)));});
// 2 Topkapı'da iftar
shot(2,2,t=>{inside('#4a2a14','#140a04');sofra(540,960,1.2,t);sil(240,1060,1.8,'#0a0604');sil(840,1060,1.8,'#0a0604');x.fillStyle='#0a0604';x.beginPath();x.ellipse(840,770,70,40,0,0,7);x.fill();bigText('TOPKAPI SARAYI',W/2,290,100,'#ffd23f',1);});
// 3 gece sarayda kaldı
shot(3,3,t=>{x.fillStyle=grad(0,H,['#05070f','#141a2e']);x.fillRect(0,0,W,H);crescent(820,300,70,'#e8e0c0');saray(1050,1,'#2a2a3a');x.fillStyle='#ffd27a';x.fillRect(480,880,40,60);x.fillStyle='#0a0c14';x.fillRect(0,1050,W,H);bigText('O GECE',W/2,520,110,'#fff',1);});
// 4 odasında boğduruldu
shot(4,4,t=>{x.fillStyle=grad(0,H,['#1a0606','#050202']);x.fillRect(0,0,W,H);kapi(540,1060,1.4,cl(t/1.2));for(let i=0;i<3;i++){x.save();x.globalAlpha=cl((t-0.8)*2);sil(380+i*140,1060,1.6,'#000');x.restore();}x.fillStyle=`rgba(193,18,31,${0.3*cl((t-1.2)*2)})`;x.fillRect(0,0,W,H);bigText('O GECE',W/2,290,120,'#fff',1);bigText('ODASINDA',W/2,420,100,'#c1121f',eOut(cl((t-0.5)*3)));});
// 5 gerekçe yok
shot(5,5,t=>{paper(true);x.save();x.translate(540,760);x.fillStyle='#f3e6c4';rr(-260,-200,520,400,14);x.fill();x.restore();bigText('?',W/2,760,260,'#7a1d1d',back(cl(t*2)));bigText('GEREKÇE YOK',W/2,300,120,'#ffd23f',1);});
// 6 tarihçiler tartışıyor
shot(6,6,t=>{paper(true);const k=Math.min(2,Math.floor(t/1.75));const L=['AŞIRI GÜÇ?','"SERASKER SULTAN"?','SARAY ENTRİKASI?'];for(let i=0;i<=k;i++)badge(540,520+i*150,L[i],i===k?PAL.red:'#5a4a3a',(t-i*1.75)*3);bigText('NEDEN?',W/2,300,150,'#7a1d1d',1);});
// 7 naaş Galata Tersane
shot(7,7,t=>{x.fillStyle=grad(0,H,['#3a4a6a','#9aa8b8']);x.fillRect(0,0,W,H);waves(1000,t,'#2a4a6a',20);ship(300,930,0.6,0);ship(800,940,0.5,0);x.fillStyle='#5a5a5a';x.fillRect(0,1050,W,H);for(let i=0;i<4;i++)sil(360+i*110,1060,0.8,'#111');x.fillStyle='#e8e0d0';rr(380,980,320,40,14);x.fill();bigText('GALATA',W/2,290,140,'#fff',1);bigText('TERSANE ARKASI',W/2,420,80,'#ffd23f',eOut(cl((t-0.6)*3)));});
// 8 makbul -> maktul
shot(8,8,t=>{x.fillStyle=grad(0,H,['#151026','#05030c']);x.fillRect(0,0,W,H);bigText('MAKBUL',W/2,380,150,'#ffd23f',1);if(t>1.6){x.strokeStyle='#c1121f';x.lineWidth=16;const p=cl((t-1.6)*3);x.beginPath();x.moveTo(250,380);x.lineTo(250+p*580,380);x.stroke();}bigText('MAKTUL',W/2,620,170,'#c1121f',back(cl((t-2.1)*2.5)));bigText('İBRAHİM',W/2,1380,90,'#fff',1);});
// 9 outro
shot(9,9,t=>outro(t,0,'#151026','#05030c'));
