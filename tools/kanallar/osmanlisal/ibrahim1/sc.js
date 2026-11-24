// 0 kanca köle -> sadrazam
shot(0,0,t=>{inside('#3a1e14','#120806');zincir(540,1000,1,t,t>0.9?1:0);muhur(540,700,1,1,'SADRAZAM');bigText('KÖLEYDİ',W/2,290,140,'#fff',1);bigText('SADRAZAM OLDU',W/2,430,100,'#ffd23f',1);vignette(0.45);});
// 1 Parga, balıkçı, esir
shot(1,1,t=>{if(t<2.2){x.fillStyle=grad(0,H,['#8ac0e0','#e0f0f8']);x.fillRect(0,0,W,H);waves(900,t,'#2a6a9a');ship(560,880,0.8,Math.sin(t*2)*0.05);balikci(300,1040,1,t);bigText('PARGA',W/2,300,150,'#1f2a44',1);}else{dayBg('#5a4a5a','#a09080','#3a2a2a',1050);sil(540,1060,2.2,'#111');zincir(540,880,0.7,t);bigText('6 YAŞINDA',W/2,290,120,'#fff',1);bigText('ESİR',W/2,440,140,'#c1121f',back(cl((t-2.2)*2.5)));}});
// 2 şehzade Süleyman
shot(2,2,t=>{x.fillStyle=grad(0,H,['#2a4a3a','#0e1a14']);x.fillRect(0,0,W,H);rays(540,760,t,'rgba(255,220,150,0.10)');x.save();x.globalAlpha=0.95;sil(360,1060,2.4,'#000');sil(720,1060,2.6,'#000');x.restore();x.fillStyle='#000';x.beginPath();x.ellipse(720,610,90,50,0,0,7);x.fill();bigText('ŞEHZADE',W/2,290,110,'#fff',1);bigText('SÜLEYMAN',W/2,420,130,'#ffd23f',eOut(cl((t-0.6)*3)));});
// 3 ayrılmaz dost
shot(3,3,t=>{x.fillStyle=grad(0,H,['#f2c48a','#ffe6bf']);x.fillRect(0,0,W,H);x.fillStyle='#6a5a3a';x.fillRect(0,1050,W,H);sil(440,1060,2.3,'#2b1d12');sil(640,1060,2.3,'#2b1d12');const p=eOut(cl(t*2));x.fillStyle='#c1121f';x.save();x.translate(540,700-p*40);x.scale(p,p);x.beginPath();x.moveTo(0,30);x.bezierCurveTo(-90,-40,-40,-110,0,-60);x.bezierCurveTo(40,-110,90,-40,0,30);x.fill();x.restore();bigText('AYRILMAZ DOST',W/2,300,110,'#7a1d1d',1);});
// 4 1520 padişah
shot(4,4,t=>{inside('#4a1414','#140606');rays(540,760,t,'rgba(255,210,63,0.12)');x.save();x.translate(540,980);x.fillStyle='#7a1d1d';rr(-150,-420,300,300,30);x.fill();x.fillStyle=PAL.gold;rr(-190,-140,380,60,12);x.fill();x.restore();x.save();x.globalAlpha=0.95;sil(540,900,1.8,'#000');x.restore();bigText('1520',W/2,300,200,'#ffd23f',back(cl(t*2)));bigText('PADİŞAH',W/2,470,100,'#fff',eOut(cl((t-0.4)*3)));});
// 5 3 yıl sonra sadrazam
shot(5,5,t=>{paper(true);muhur(540,760,1.2,(t-0.6)*2,'SADRAZAM');bigText('1523',W/2,300,180,'#ffd23f',1);badge(540,1380,'VEZİRLİK YAPMADAN',PAL.red,(t-1.6)*3);});
// 6 saray şaşkın
shot(6,6,t=>{inside('#3a2a14','#100a04');for(let i=0;i<6;i++){const px=130+i*165;sil(px,1060,1.4,'#0a0604');if(t>0.4+i*0.15)bubble(px,600+(i%2)*90,'!',cl((t-0.4-i*0.15)*3));}bigText('SARAY ŞAŞKIN',W/2,300,120,'#fff',1);stampT('GELENEĞE AYKIRI',540,1380,(t-1)*3,'#c1121f',70);});
// 7 en güçlü ikinci adam
shot(7,7,t=>{x.fillStyle=grad(0,H,['#1f1830','#0a0812']);x.fillRect(0,0,W,H);const steps=5;for(let i=0;i<steps;i++){x.fillStyle=`rgba(201,162,74,${0.35+i*0.12})`;x.fillRect(140+i*160,1050-i*120,160,i*120+20);}const k=cl(t/2.4);const si=Math.min(steps-1,Math.floor(k*steps));sil(220+si*160,1050-si*120,1.3,'#ffd23f');x.save();x.globalAlpha=0.9;sil(860,450,1.2,'#fff');x.restore();bigText('NO. 2',W/2,280,160,'#ffd23f',1);bigText('PADİŞAHTAN SONRA',W/2,1380,64,'#fff',eOut(cl((t-1)*3)));});
// 8 düşürebilirdi
shot(8,8,t=>{x.fillStyle=grad(0,H,['#120a0a','#2a0a0a']);x.fillRect(0,0,W,H);x.save();x.translate(540,760);x.rotate(Math.sin(t*3)*0.12*cl(t));muhur(0,0,1.1,1,'SADRAZAM');x.restore();x.strokeStyle='#c1121f';x.lineWidth=10;const p=cl((t-1)/1.5);x.beginPath();x.moveTo(400,620);x.lineTo(400+p*120,620+p*140);x.lineTo(470+p*40,760+p*120);x.stroke();bigText('AMA…',W/2,320,150,'#c1121f',1);});
// 9 outro
shot(9,9,t=>outro(t,2,'#151026','#05030c'));
