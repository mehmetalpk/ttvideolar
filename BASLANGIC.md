# Bu depoya yeni gelen Claude için başlangıç
Bu depo "…sal Hikayeler" faceless video hesaplarının (TikTok + Instagram + YouTube Shorts) üretim hafızasıdır. Depo HERKESE AÇIK: API anahtarı, kişisel bilgi, kaynak hikâyelerin tam metni YAZILMAZ.

## Önce oku (sırayla)
1. gorevler.md — hangi otomatik görev ne zaman ne yapıyor.
2. metricool_brandlar.md — hesaplar, brand ID'ler, kapalı ağlar (Kriminal IG kapalı, Yemeksel TikTok yok, Hayatsal iptal).
3. Redditsel için: havuz.md (EN ÜSTTEKİ "> " notları kullanıcı kararlarıdır, en yeni olan geçerli), strateji.md, stories.md.
4. Küçük hesaplar için: stok/URETIM.md, stok/README.md ("Kullanılan konular" — tekrar etme), stok/<hesap>/stok.md, tools/kanallar/README.md.

## Ortak kurallar (özet)
- Video ≤40 sn, dikey 1080x1920, canvas animasyonu + ElevenLabs (eleven_v4) seslendirme, atempo 1.2.
- Kanca 4–7 kelime, ilk karede dev yazı; altyazı y≈1150 (altta değil); ses efekti yok; saç tek parça; filigran @hesap.
- Sonda kısa "Devamı X. partta, kaçırmamak için takip et" (beğeni/yorum isteme, başka hesaba yönlendirme yok).
- #gerçekhikaye ve "gerçek/yaşanmış" yasak; gerçek kişi yüzü/logo/telifli görüntü yok; yapay zekâ etiketi her platformda açık.

## Araçlar
- tools/lib_karaoke.js (Redditsel karakterleri, karaoke altyazı, face/hair), tools/render.js (Playwright → MP4), tools/hacker_dizi/s2/ (Hacker Kerem Sezon 2 hazır paket + README), tools/dizi_10kasim/ (Park Yeri), tools/parkur/ (alt yarı parkur oyunu, bölünmüş ekran), tools/kanallar/ (küçük hesapların hattı: pipe.py).
- Sesler: Emrullah QftNgZhlSOYKrYbk7WR7, İrem R0D8QjgVyRju4HRoCrIC, İsmet dCYGxgtXZ2SWEwZrYmkc. Anahtar kullanıcıdan özel olarak alınır → /home/claude/work/.el_key (chmod 600).
- Push "commit_refs" hatası verirse 20–30 sn bekle, `git pull --rebase`, tekrar push.

## Yardımcı olarak çalışıyorsan
Metricool'a planlama YAPMA (gece görevleri yapar). Ürettiğin MP4'ü ve stok.md satırını (konu, part, TikTok/YouTube başlığı, açıklama, hedef tarih) stok/<hesap>/ altına push et; havuz.md'de Redditsel partlarını bitirdiysen satıra "✅ <tarih>" ekle.
