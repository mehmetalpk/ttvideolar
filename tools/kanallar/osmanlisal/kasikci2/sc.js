// 0 kanca
shot(0,0,t=>{x.fillStyle=grad(0,H,['#1a2448','#0a0e20']);x.fillRect(0,0,W,H);sil(300,1060,2.4,'#000');x.fillStyle='#000';x.beginPath();x.ellipse(300,590,85,40,0,0,7);x.fill();mapArrow(380,760,760,760,cl(t*1.5),'#ffd23f');armut(820,760,0.6,t);bigText('NAPOLYON\'UN ANNESİ',W/2,280,84,'#fff',1);bigText('ELMAS MI YOLLADI?',W/2,400,92,'#ffd23f',1);vignette(0.45);});
// 1 başka hikaye
shot(1,1,t=>{paper(true);x.save();x.translate(540,740);x.rotate(-0.04);x.fillStyle='#f3e6c4';rr(-300,-220,600,440,18);x.fill();x.restore();armut(540,740,0.9,t);bigText('2. HİKÂYE',W/2,300,140,'#ffd23f',1);});
// 2 1798 Preveze esir Fransız
shot(2,2,t=>{x.fillStyle=grad(0,H,['#6a8aa8','#c8d8e0']);x.fillRect(0,0,W,H);waves(980,t,'#2a4a6a',24);ship(760,940,0.7,Math.sin(t*2)*0.04);x.fillStyle='#5a5a4a';x.fillRect(0,1050,W,H);sil(320,1060,2,'#1a2448');zincir(320,1100,0.5,t);bigText('1798',W/2,280,170,'#1f2a44',1);bigText('PREVEZE',W/2,430,100,'#fff',eOut(cl((t-0.5)*3)));});
// 3 Letizia elmas yolladı
shot(3,3,t=>{x.fillStyle=grad(0,H,['#2a1a3a','#0a0614']);x.fillRect(0,0,W,H);const p=cl((t-0.8)/2.6);sil(220,1060,2,'#000');x.fillStyle='#000';x.beginPath();x.ellipse(220,640,80,38,0,0,7);x.fill();saray(1060,0.5,'#3a2a4a');armut(260+p*560,760-Math.sin(p*Math.PI)*200,0.45,t);bigText('LETİZİA',W/2,280,140,'#ffd23f',1);bigText('RİVAYET',W/2,400,80,'#fff',eOut(cl((t-1)*3)));});
// 4 belge yok
shot(4,4,t=>{paper(true);scroll(540,740,1.1,1,'');stampX(540,740,1.2,cl((t-0.4)*3));bigText('BELGE YOK',W/2,300,140,'#ff5a4a',1);});
// 5 Tepedelenli 1822
shot(5,5,t=>{if(t<3.2){x.fillStyle=grad(0,H,['#4a5a3a','#c8c0a0']);x.fillRect(0,0,W,H);kale(540,1050,0.9);for(let i=0;i<8;i++){x.fillStyle='rgba(255,210,63,0.9)';x.beginPath();x.arc(380+i*45,1020-Math.abs(Math.sin(t*3+i))*30,14,0,7);x.fill();}bigText('TEPEDELENLİ',W/2,280,120,'#fff',1);bigText('ALİ PAŞA',W/2,410,110,'#ffd23f',1);}else{x.fillStyle=grad(0,H,['#f2c48a','#ffe6bf']);x.fillRect(0,0,W,H);skylineIst(1050,'#5a4a6a',1);x.fillStyle='#3a3048';x.fillRect(0,1050,W,H);x.save();x.translate(540,780);x.fillStyle='#7a4a1e';rr(-170,-90,340,180,20);x.fill();x.fillStyle='#c9a24a';x.fillRect(-170,-20,340,20);x.restore();armut(540,640,0.4,t);bigText('1822',W/2,280,170,'#7a1d1d',1);bigText('HAZİNE İSTANBUL\'A',W/2,430,80,'#2b1d12',1);}});
// 6 kimse bilmiyor
shot(6,6,t=>{x.fillStyle=grad(0,H,['#151026','#05030c']);x.fillRect(0,0,W,H);armut(540,740,1.1,t);[['BALIKÇI?',260,500],['LETİZİA?',820,560],['ALİ PAŞA?',300,900],['…?',800,880]].forEach(([s,a,b],i)=>badge(a,b,s,i%2?PAL.red:'#3a4a6a',(t-i*0.4)*3));bigText('KİMSE BİLMİYOR',W/2,300,100,'#fff',1);});
// 7 outro
shot(7,7,t=>outro(t,3,'#151026','#05030c'));
