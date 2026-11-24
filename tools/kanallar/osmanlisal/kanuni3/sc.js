// 0 kanca
shot(0,0,t=>{dayBg('#f2a65a','#ffd9a0','#6a5a3a',1050);march(1060,t,9,0.55);bigText('ORDU',W/2,280,130,'#8b1e1e',1);bigText('HAFTALAR SONRA',W/2,410,96,'#2b1d12',1);bigText('ÖĞRENDİ',W/2,530,120+Math.sin(t*4)*6,'#c1121f',1);});
// 1 hafızlar
shot(1,1,t=>{dayBg('#e8c890','#fff0d0','#6a5a3a',1050);march(1060,t*0.3,7,0.5,'#3a2a1a',20);hafiz(380,1060,1.1,t);hafiz(700,1060,1.1,t+1);for(let i=0;i<5;i++){const k=(t*0.6+i/5)%1;x.fillStyle=`rgba(201,162,74,${1-k})`;x.font=`900 50px ${F}`;x.textAlign='center';x.fillText('۞',540+Math.sin(i*2)*200,700-k*300);}bigText('KUR\'AN SESİ',W/2,300,120,'#1f3a2a',1);});
// 2 siyah sarık
shot(2,2,t=>{dayBg('#9aa0a8','#d0d0d0','#4a4a4a',1050);for(let i=0;i<5;i++){const px=170+i*185;x.fillStyle='#1a1a1a';x.beginPath();x.moveTo(px-60,1060);x.lineTo(px-45,860);x.quadraticCurveTo(px,830,px+45,860);x.lineTo(px+60,1060);x.fill();x.fillStyle='#e3ab84';x.beginPath();x.arc(px,800,40,0,7);x.fill();const blk=cl((t*2-i*0.3));x.fillStyle=blk>0.5?'#111':'#f6f1e4';x.beginPath();x.ellipse(px,770,50,30,0,0,7);x.fill();}bigText('SİYAH SARIKLAR',W/2,300,104,'#111',1);if(t>2)badge(540,1380,'PADİŞAH ÖLMÜŞ',PAL.red,(t-2)*3);});
// 3 gözyaşı
shot(3,3,t=>{dayBg('#5a6070','#9aa0a8','#3a3a3a',1050);people(8,540,1060,0.9,'#1a1a1a',120);for(let i=0;i<10;i++){const k=(t*1.2+i/10)%1;x.fillStyle=`rgba(140,200,255,${1-k})`;x.beginPath();x.ellipse(120+i*95,820+k*200,8,14,0,0,7);x.fill();}bigText('BİNLERCE ASKER',W/2,300,100,'#fff',1);bigText('AĞLADI',W/2,430,130,'#cde8ff',eOut(cl((t-0.4)*3)));});
// 4 Selim karşıladı
shot(4,4,t=>{dayBg('#7a7a8a','#c8c0b0','#4a3a2a',1050);x.fillStyle='#3a2a1a';rr(560,900,360,120,20);x.fill();x.fillStyle='#7a1d1d';rr(580,860,320,60,20);x.fill();x.save();x.globalAlpha=0.95;sil(330,1060,2.2,'#0a0a0a');x.restore();x.fillStyle='#0a0a0a';x.beginPath();x.ellipse(330,700,70,40,0,0,7);x.fill();bigText('II. SELİM',W/2,300,140,'#ffd23f',1);badge(540,1380,'SİYAHLAR İÇİNDE',PAL.ink,(t-1)*3);});
// 5 İstanbul, Ebussuud
shot(5,5,t=>{x.fillStyle=grad(0,H,['#f2c48a','#ffe6bf']);x.fillRect(0,0,W,H);skylineIst(1000,'#5a4a6a',1);x.fillStyle='#3a3048';x.fillRect(0,1000,W,H);for(let i=0;i<7;i++)sil(220+i*110,1080,0.7,'#1a1426');bigText('İSTANBUL',W/2,300,140,'#7a1d1d',1);bigText('EBUSSUUD EFENDİ',W/2,1380,70,'#fff',eOut(cl((t-1)*3)));});
// 6 Süleymaniye
shot(6,6,t=>{x.fillStyle=grad(0,H,['#2a2040','#f2a65a']);x.fillRect(0,0,W,H);rays(540,700,t,'rgba(255,220,150,0.12)');silhouetteDome(1000,'#1a1426');x.fillStyle='#120e1c';x.fillRect(0,1000,W,H);bigText('SÜLEYMANİYE',W/2,300,120,'#ffd23f',eOut(cl(t*3)));});
// 7 türbe unutuldu
shot(7,7,t=>{dayBg('#8ab0c8','#e0e8e0','#4a6a3a',1050);const a=1-cl((t-2)/2);x.save();x.globalAlpha=Math.max(0.08,a);turbe(540,1050,1.1);x.restore();if(t>2){x.fillStyle=`rgba(74,106,58,${cl((t-2)/2)})`;for(let i=0;i<20;i++){x.beginPath();x.arc(80+i*50,1050-Math.abs(Math.sin(i))*60,50,0,7);x.fill();}}bigText('ZİGETVAR TÜRBESİ',W/2,300,96,'#1f2a44',1);bigText(t>2?'YERİ UNUTULDU':'ORGANLARI BURADA',W/2,430,74,t>2?'#c1121f':'#2b1d12',1);});
// 8 2015 bağda bulundu
shot(8,8,t=>{dayBg('#a8c8e0','#f0f0e0','#7a5a3a',1100);vine(t);shovel(700,980,1,t);x.fillStyle='rgba(120,90,60,0.9)';x.beginPath();x.ellipse(460,1090,220,50,0,0,7);x.fill();if(t>1.5){x.fillStyle='#c8b89a';for(let i=0;i<5;i++)x.fillRect(330+i*55,1060,40,30);}bigText('2015',W/2,300,200,'#c1121f',back(cl(t*2)));bigText('BİR BAĞDA',W/2,470,90,'#2b1d12',eOut(cl((t-0.5)*3)));if(t>2.4)badge(540,1380,'TÜRBENİN İZLERİ',PAL.red,(t-2.4)*3);});
// 9 outro
shot(9,9,t=>outro(t,0,'#151026','#05030c'));
