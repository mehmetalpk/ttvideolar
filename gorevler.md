# Otomatik görevler (Claude zamanlanmış görevleri — mehmetalp hesabında)
Görevler bu depoyu okuyarak çalışır; kurallar dosyalarda, görev metni sadece akışı tarif eder. API anahtarları burada YOK.

| Saat (İstanbul) | Görev | Ne yapar | Kurallar |
|---|---|---|---|
| Her gece 03:55 | Redditsel günlük | FORMAT 5: 6 video = 2 tam 3'lük seri (A 10:30/11:30/15:30 (27.11'den bekleme testi), B 17:00/19:00/21:00), havuzda seri yoksa tools/hikaye_uretici ile yazar; Metricool brand 8012068 | havuz.md üst notları, HIKAYE_URETICI.md, strateji.md |
| Her gece 03:55 | Küçük hesaplar | İŞ 1: yarını boş hesaplara 1 video; İŞ 2: rotasyondaki hesabın 7 günlük stoğu | stok/URETIM.md |
| Pazar 21:37 | Haftalık analiz | FORMAT 5 testini ölçer, strateji.md + HIKAYE_URETICI.md örnek defterini günceller, havuzda ≥4 seri tutar | strateji.md, HIKAYE_URETICI.md |

Başka biri (ör. arkadaşın Claude'u) üretim yapacaksa: görevlerin işini ÇİFT yapmamak için Metricool'a PLANLAMA yapmasın; MP4 + stok.md satırını stok/<hesap>/ altına push etsin, gece görevi planlar.
