# ttvideolar
@redditselhikayeler TikTok hesabı için günlük otomatik video hattı.

- `tools/ornek_anim.html` — örnek 1 (taksi/aile): canvas 1080x1920, face()/body()/caption() yardımcıları.
- `tools/ornek2_kuslar_anim.html` — örnek 2 (komşu/kuşlar): ev, kuş, hoparlör, saat, araba, yemlik, bigText, shake yardımcıları; 11 sahne, sese senkron.
- `tools/render.js` — sahneleri Playwright→ffmpeg ile render eder (`ANIM=file:///.../anim.html`, çıktı `out/`).
- `tools/preview.js` — önizleme kareleri.
- `stories.md` — kullanılmış hikâyeler (tekrarı önlemek için).
- `videos/` — Metricool'a verilen geçici video dosyaları; planlama sonrası silinir.

API anahtarı ASLA bu depoya yazılmaz (depo herkese açık).
