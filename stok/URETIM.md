# Küçük hesaplar — haftalık stok üretimi (10 Kas 2026'dan itibaren)

Redditsel BU DOSYANIN KAPSAMI DIŞINDA (o her gün ayrı görevle üretilir). Hayatsal İPTAL.
Brand ID'ler: ../metricool_brandlar.md. Araçlar: ../tools/kanallar/README.md (pipe.py, ortak/, kanal klasörleri).

## Rotasyon — her gün TEK hesabın 7 günlük içeriği
Gün X'te üretilen paket X+1 … X+7 günlerine planlanır (bir sonraki paket X+7'de üretilip X+8'den başlar).

| Üretim günü | Hesap | Paket | Grup |
|---|---|---|---|
| Çarşamba | İslamik | 7 video (seri) | 1 |
| Perşembe | Motivasyonel | 7 video (seri) | 1 |
| Cuma | Sporsal | 7 video | 2 |
| Cumartesi | Sanatsal | 7 video | 2 |
| Pazar | Psikolojik + Parasal + Kriminal | her biri 3 video (iki günde bir) | 3 |
| Pazartesi | Yemeksel | 7 video (sadece IG + YT) | 2 |
| Salı | Osmanlısal | 7 video (seri) | 1 |

Bir hesabın klasöründe (stok/<hesap>/) başkasının (ör. kullanıcının arkadaşının) bıraktığı, henüz planlanmamış MP4 + stok.md satırı varsa önce onları planla, eksik kalan günleri üret.

## Gruplar
- Grup 1 (İslamik, Osmanlısal, Motivasyonel): SERİ. Bir konu 3–5 parta bölünür, günde 1 part. Paket bir serinin ortasında bitebilir; sonraki paket kaldığı yerden devam eder (stok.md'ye "seri: <ad> Pn/N" yaz).
- Grup 2 (Sporsal, Sanatsal, Yemeksel): günde 1 video; tek video ya da 2–3 partlık mini seri serbest. TikTok'a da gönder (Yemeksel'de TikTok yok).
- Grup 3 (Psikolojik, Parasal, Kriminal): iki günde 1 video, KALİTE ÖNCELİKLİ: 2–3 partlık mini seri, daha güçlü kanca, daha zengin animasyon (her 1.5–2 sn görsel değişim, karakter/nesne hareketi), rakam ve tarih iki kaynaktan doğrulanır. Kriminal'de Instagram KAPALI.

## Video kuralları (hepsi)
- ≤40 sn (outro dahil), atempo 1.2, ~80–100 kelime.
- Kanca 4–7 kelime, tek somut cümle; ilk karede dev yazı; ses 0.0 sn'de başlar; t=0 tam görünür.
- Seride üstte "PART n" rozeti; outro ~2 sn: "Devamı <n+1>. partta, kaçırmamak için takip et." (seri değilse/finalde: "Kaçırmamak için takip et."). Beğen/yorum isteme. Redditsel'e yönlendirme YOK.
- Altyazı y≈1150 (altta değil), ses efekti yok, saç kuralı, filigran @<hesap>.
- Gerçek kişi yüzü çizilmez (siluet), logo/telifli görüntü yok, kaynak metni depoya kopyalanmaz. "Kullanılan konular" (README.md) tekrar edilmez; yeni konuyu oraya ekle.

## Saat testi (Redditsel hariç)
- A grubu 09:00: İslamik, Sporsal, Sanatsal, Psikolojik.
- B grubu 16:00: Osmanlısal, Motivasyonel, Yemeksel, Parasal, Kriminal.
- 23 Kasım'dan itibaren gruplar YER DEĞİŞTİRİR (A 16:00, B 09:00). 30 Kasım'da haftalık analiz sonucu kalıcı saati seçer.

## Planlama
Video depoya stok/<hesap>/ altına push edilir (commit_refs hatasında 20–30 sn bekle, pull --rebase, tekrar), ham URL commit SHA ile; tek createScheduledPost'ta hesabın bağlı tüm ağları (tiktokData isAigc:true; youtubeData type short, madeForKids:false, isAiGeneratedContent:true, kategori uygun; instagramData REEL, isAiGenerated:true). Metricool URL alınınca MP4 depodan silinir, stok.md satırına "planlandı: <tarih saat> (ağlar)" yazılır.
