// 0 kanca: yatakta başka biri
shot(0,0,t=>{nightCamp(t);cadir(540,1080,1.5,t,0.6);x.save();x.globalAlpha=0.95;yatak(540,1000,1.05,t);x.restore();bigText('YATAKTAKİ',W/2,300,120,'#fff',1);bigText('PADİŞAH DEĞİL',W/2,440,110,'#ffd23f',1);if(t>0.8)bubble(800,640,'?',cl((t-0.8)*3));vignette(0.5);});
// 1 Sokullu susun
shot(1,1,t=>{inside();lantern(220,600,t);townsman(560,760,120,{robe:'#1f2a44',beard:'#2a1a0c',cap:'#f6f1e4',eyeOpen:0.7});for(let i=0;i<4;i++)sil(160+i*250,1060,0.9+0.1*(i%2),'#0c0604');bigText('SOKULLU',W/2,300,130,'#ffd23f',1);badge(540,1380,'KİMSE DUYMAYACAK',PAL.red,(t-0.8)*3);vignette(0.5);});
// 2 organlar, misk-amber
shot(2,2,t=>{inside('#2a1a10','#0a0604');x.save();x.translate(540,780);x.fillStyle='#f6f1e4';rr(-320,-60,640,120,40);x.fill();x.restore();for(let i=0;i<14;i++){const k=(t*0.4+i/14)%1;x.fillStyle=`rgba(255,220,150,${0.5*(1-k)})`;x.beginPath();x.arc(300+i*35,780-k*420,10+k*16,0,7);x.fill();}x.fillStyle='#5a3a1e';[[260,940],[820,940]].forEach(([a,b])=>{rr(a-60,b-90,120,90,14);x.fill();});bigText('MİSK',260,1000,60,'#ffd23f',eOut(cl((t-1)*3)));bigText('AMBER',820,1000,60,'#ffd23f',eOut(cl((t-1.4)*3)));bigText('BEDEN KORUNDU',W/2,320,96,'#fff',eOut(cl(t*3)));vignette(0.5);});
// 3 gece gizli namaz
shot(3,3,t=>{nightCamp(t);cadir(540,1080,1.2,t,0.35);for(let i=0;i<6;i++)sil(240+i*120,1080,0.75,'#000');x.fillStyle='#f6f1e4';rr(390,990,300,60,20);x.fill();bigText('GECE',W/2,300,150,'#fff',1);bigText('GİZLİCE',W/2,450,110,'#ffd23f',eOut(cl((t-0.5)*3)));});
// 4 hasta gibi adam
shot(4,4,t=>{nightCamp(t);cadir(540,1080,1.5,t,0.8);yatak(540,1010,1.05,t,'#3a5a3a');bigText('SAHTE HASTA',W/2,320,120,'#ffd23f',1);stampT('DUBLÖR',540,1380,(t-1)*3,'#c1121f',90);});
// 5 ordu sanıyor
shot(5,5,t=>{dayBg('#f2c48a','#ffe6bf');cadir(780,1050,0.9,t,0.2);for(let i=0;i<6;i++)janissary(110+i*110,1060,0.6,'#2b1d12');bubble(330,640,'PADİŞAH HASTA',cl(t*3));bigText('ORDU',W/2,300,150,'#8b1e1e',1);bigText('BİLMİYOR',W/2,440,100,'#2b1d12',1);});
// 6 mektup Kütahya
shot(6,6,t=>{paper(false);x.fillStyle='#d8c08a';x.beginPath();x.ellipse(540,760,460,320,0,0,7);x.fill();[[260,600,'ZİGETVAR'],[820,880,'KÜTAHYA']].forEach(([px,py,n])=>{x.fillStyle=PAL.ink;x.beginPath();x.arc(px,py,18,0,7);x.fill();bigText(n,px,py-55,52,PAL.ink,1);});mapArrow(260,600,820,880,cl(t/1.6),'#c1121f');if(t<1.8)mektup(540,330,0.7,t*2);else horseman(200+((t-1.8)*260),1000,0.9,t);bigText('ŞEHZADE SELİM',W/2,t<1.8?560:330,t<1.8?0:90,'#8b1e1e',t<1.8?0:1);});
// 7 bekledi -> belgrad
shot(7,7,t=>{if(t<2.6){dayBg('#c9a070','#e8d8b0');kale(540,1000,0.9);x.save();x.translate(220,700);x.fillStyle='#f3e6c4';rr(-130,-140,260,280,16);x.fill();x.fillStyle=PAL.red;x.fillRect(-130,-140,260,70);x.fillStyle='#fff';x.font=`900 40px ${F}`;x.textAlign='center';x.textBaseline='middle';x.fillText('EYLÜL',0,-104);x.fillStyle=PAL.ink;x.font=`900 110px ${F}`;x.fillText(String(7+Math.floor(t*8)),0,30);x.restore();bigText('BEKLEYİŞ',W/2,300,140,'#8b1e1e',1);}else{dayBg('#f2a65a','#ffd9a0','#6a5a3a',1050);march(1060,t,9,0.55);bigText('BELGRAD',W/2,300,150,'#8b1e1e',1);bigText('YÖNÜNE',W/2,440,90,'#2b1d12',1);}});
// 8 sır ne kadar
shot(8,8,t=>{nightCamp(t);cadir(540,1080,1.4,t,0.4+0.3*Math.sin(t*6)**2);bigText('SIR',W/2,320,200,'#ffd23f',back(cl(t*2)));bigText('NE KADAR SÜRER?',W/2,500,84,'#fff',eOut(cl((t-0.5)*3)));vignette(0.55);});
// 9 outro
shot(9,9,t=>outro(t,3,'#151026','#05030c'));
