# ttvideolar
@redditselhikayeler TikTok hesabı için günlük otomatik video hattı.

- `tools/ornek_anim.html` — örnek animasyon (canvas 1080x1920, karakter/altyazı yardımcıları). Yeni videolar bunu şablon alır.
- `tools/render.js` — sahneleri Playwright→ffmpeg ile render eder (`ANIM=file:///.../anim.html`, çıktı `out/`).
- `tools/preview.js` — önizleme kareleri.
- `stories.md` — kullanılmış hikâyeler (tekrarı önlemek için).
- `videos/` — Metricool'a verilen geçici video dosyaları; planlama sonrası silinir.

API anahtarı ASLA bu depoya yazılmaz (depo herkese açık).
