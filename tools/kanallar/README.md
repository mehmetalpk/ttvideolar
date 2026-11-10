# Kanal araçları (İslamik / Hayatsal / Kriminal / Osmanlısal)

> ALTYAZI KONUMU (kullanıcı isteği, 5 Kas 17:08 — TÜM kanallar, TÜM yeni videolar): Altyazı ALTTA OLMAYACAK; platform yazıları (açıklama, kullanıcı adı, butonlar) alt kısmı kapatıyor. Karaoke altyazı merkezi y=1150 (bant ≈ y 1060–1260, en fazla 2 satır); karaoke fonksiyonları y'yi en fazla 1250'ye izin verir — capY/y ile aşağı ÇEKME. Sahne tasarımı: (1) altyazı bandına (y 1060–1260) sahne yazısı/rakam/skor KOYMA, büyük başlıklar y≤1000'de, ikincil yazılar gerekiyorsa y 1300–1420 arasında; çizimler/karakterler bandın arkasında kalabilir. (2) y>1450 alanına önemli HİÇBİR şey koyma. (3) Sağ kenarda x>920'ye yazı koyma (beğen/yorum butonları).

> SES (4 Kas): bip/pop/tık sesi YOK, sadece seslendirme.
> SAÇ (6 Kas): karakter saçı tek parça şekil olarak kafanın tepesinin üstüne taşmalı (kel görünmesin), ayrı elips/silindir çizme.

Hepsi 1080x1920, 30 fps canvas animasyonu. Bir video = `anim.html` (render.js ile sahne sahne MP4) + ses + sfx.

## Birleştirme sırası (build)
`ortak/head.js.txt` + `ortak/helpers.txt` + `<video>/shots.js.txt` (const PH=[[t,"altyazı cümlesi"],...,[son,""]]) + `ortak/common.js.txt` (karaoke, watermark, star8→daire, girih→kemer, frameText, rays...) + `ortak/extra.js.txt` (shot(a,b,f): PH[a]..PH[b] arası tek sahne; cave, dog, whale, ant, ship...) + [`ortak/bio.js.txt` (S,T,zoomed, medal, yearStamp, stampT, people, dna, plane, garage, computer, phone, reel, filmstrip, trophy, newspaper...) ] + [`ortak/krim.js.txt` (noir, rain, parachute, poster, note, cash, vaultDoor, diamond, sandwich, bars, lasers, forest, beams, cta(t))] + `<video>/scenes.js.txt` + kuyruk:
```
window.SCENES=S.map(s=>s.d);
window.draw=function(i,t){x.setTransform(1,0,0,1,0,0);x.globalAlpha=1;x.setLineDash([]);x.lineCap='round';S[i].f(t);karaoke(S[i].g0+t);watermark();};
window.frame=function(i,t){draw(i,t);return c.toDataURL('image/jpeg',0.92).split(',')[1]};
</script></body></html>
```
- İslamik: bio.js/krim.js YOK; scenes.js dosyası kendi `const S=[];const T=PH.map(p=>p[0]);` ve zoomed tanımını içerir. common.js'te watermark '@islamikhikayeler'.
- Hayatsal: bio.js eklenir (S,T,zoomed bio.js'te), watermark '@hayatsalhikayeler' (common.js'te sed ile değiştir).
- Kriminal: bio.js + krim.js eklenir, watermark '@kriminalhikayeler'. Son sahne `shot(a,b,t=>cta(t))` (beğen/takip kapanışı) — diğer kanallarda da cta(t)'yi kullan (krim.js'i ekleyerek).
- Osmanlısal: osmanlisal/osm_common.js.txt (%PH% yerine PH yazılır; SPOKEN sözlüğünü her videoya göre ayarla) + osm_extra.js.txt (watermark '@osmanlisalhikayeler').
- `back(0)` ≈ 0 → arc yarıçapı negatif olabilir: back(cl(t*2)) ile ölçeklenen arc'larda Math.max(2,r) kullan.

## Ses
ElevenLabs eleven_v4, Emrullah Tuna QftNgZhlSOYKrYbk7WR7 (varsayılan erkek anlatıcı). `atempo=1.1` + baş sessizlik kırpma. Zamanlama: silencedetect noise=-35dB:d=0.18 → konuşma segmentleri; her segmentin hece tahmini = süre × (toplam hece / toplam konuşma süresi); cümleleri segmentlere elle eşleştir (otomatik DP güvenilmez). PH zamanı = segment başı − 0.06.

## sfx / mux
> KULLANICI İSTEĞİ (4 Kas): bip/pop sesi YOK. sfx.py'nin sahne başı pop/whoosh'larını KULLANMA; videoda sadece seslendirme. En fazla gerilim anında çok kısık (volume=0.15) 1–2 düşük "dum". Emin değilsen sfx hiç ekleme (mux sırasında sadece ses dosyasını kullan).
`python3 sfx.py '<sahne başlangıçları + bitiş JSON>' '<dum zamanları JSON>' audio/sfx.wav 0.8`
`ffmpeg -f concat -safe 0 -i out/list.txt -i audio/voice_fast.mp3 -i audio/sfx.wav -filter_complex "[1:a]apad[v];[2:a]volume=0.6[s];[v][s]amix=inputs=2:normalize=0:duration=first[a]" -map 0:v -map "[a]" -c:v copy -c:a aac -b:a 192k -shortest out.mp4`

## Otomatik hat: pipe.py (Kasım 2026)
`python3 tools/kanallar/pipe.py <dir> <kanal> audio` → `build prev` → `build render mux`. `<dir>/script.txt`: satır başına bir ifade (`konuşma || altyazı`), boş satır = paragraf. Ses ElevenLabs `/with-timestamps` ile alınır, PH zamanları karakter hizalamasından otomatik çıkar (silencedetect ile ince ayar). Anahtar `/home/claude/.el_key` dosyasından okunur (depoya asla girmez). Ek yardımcılar: `ortak/plus.js.txt` (badge, coins, stampX, fire, mapArrow, counter). Örnekler: kriminal/eyfel, islamik/ibrahim, hayatsal/ronaldo, osmanlisal/hezarfen.

## Psikolojik / Sporsal / Sanatsal / Motivasyonel / Parasal (2026-11-04 eklendi)
Her kanal klasöründe build.sh.example (hangi ortak/ parçaların hangi sırayla birleştiği), watermark.txt ve örnek videolar (shots.js.txt, scenes.js.txt, req.json) var. ortak/common.js.txt'deki '@KANAL' yerine kanalın filigranını sed ile yaz (watermark.txt). Ortak parçalar: head.js, helpers.txt, common.js, extra.js, bio.js, krim.js (cta), psi.js, spor.js, san.js, art2.js (müze/heykel/mona), para.js (para, btc, lale, tablolar), mot.js (motivasyon parçaları), yem.js. sfx.py ve mux.py (mux.py: `python3 mux.py <klasör> '[dum PH indeksleri]'`, çıktı adını düzenle).
- Sesler: Psikolojik İrem R0D8QjgVyRju4HRoCrIC · Sporsal/Sanatsal Emrullah QftNgZhlSOYKrYbk7WR7 · Motivasyonel/Parasal İsmet dCYGxgtXZ2SWEwZrYmkc. ElevenLabs isteklerini PARALEL gönderme (429).
- Psikolojik formatı: "Böyle mi hissediyorsun?" → tanıdık durum → psikolojik etkinin adı ve açıklaması (bilimsel kaynaklı) → izleyiciye soru.
- Motivasyonel formatı: hikâye şart değil; gaza getiren, disiplin/başarı/zengin olma inancı; kısa sert cümleler, büyük yazı slam'leri.
- Parasal: para tarihi / büyük kayıp-büyük fırsat hikâyeleri, rakamlar doğrulanır, "yatırım tavsiyesi değildir" tonu.
- Sanatsal: sanat/müzik/heykel eserlerinin arkasındaki hikâyeler; gerçek kişilerin yüzü çizilmez (siluet), telifli eser kopyalanmaz.
- Sporsal: unutulmaz maçlar/sporcular; skor ve tarihler doğrulanır; gerçek kişi yüzü yok, takım logosu yok.

## pipe.py güncellemesi (10 Kas 2026, URETIM.md'ye uyum)
- Tüm kanallar: WM/VOICE/EXTRA sözlükleri (Psikolojik İrem, Motivasyonel/Parasal İsmet, diğerleri Emrullah); kanal ek parçaları otomatik eklenir (psi, para+mot, san+art2, spor, mot+psi, yem+yem2).
- atempo 1.2; mux SADECE seslendirme (sfx yok). Anahtar /home/claude/work/.el_key veya /home/claude/.el_key.
- `ortak/outro.js.txt`: `outro(t,nxt)` (nxt>0 → "DEVAMI PART nxt" + TAKİP ET; 0 → "Kaçırmamak için takip et") ve `partBadge(n)`. Videonun klasörüne `part.txt` (ör. `2`) koyulursa sol üstte PART rozeti çıkar.
- Sahne arka planı HER ZAMAN tüm kanvası boyamalı (yoksa önceki kare görünür). `sil()` küçük (~190 birim): şapka/taç için kafa üstü −190.
- .gitignore: video klasörlerinde sadece script/scenes/shots/req/part/spoken kalır.
