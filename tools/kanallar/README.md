# Kanal araçları (İslamik / Hayatsal / Kriminal / Osmanlısal)

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
`python3 sfx.py '<sahne başlangıçları + bitiş JSON>' '<dum zamanları JSON>' audio/sfx.wav 0.8`
`ffmpeg -f concat -safe 0 -i out/list.txt -i audio/voice_fast.mp3 -i audio/sfx.wav -filter_complex "[1:a]apad[v];[2:a]volume=0.6[s];[v][s]amix=inputs=2:normalize=0:duration=first[a]" -map 0:v -map "[a]" -c:v copy -c:a aac -b:a 192k -shortest out.mp4`
