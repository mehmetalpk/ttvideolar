# ORTAK HAFIZA PROTOKOLÜ (her Claude oturumu için ZORUNLU)
Bu depo iki kişinin (mehmetalp + arkadaşı) ayrı Claude sohbetlerinin ORTAK HAFIZASIDIR.

1. OTURUM BAŞINDA: `git pull --rebase` → HAFIZA.md'yi baştan sona oku, sonra BASLANGIC.md. Kullanıcıya cevap vermeden önce oradaki güncel kararları bil.
2. HER MESAJDAN SONRA (video, strateji, tartışma, stok, hesap, karar — üretimle ilgili herhangi bir şey konuşulduysa):
   - `git pull --rebase`
   - HAFIZA.md'yi güncelle: "Güncel durum" bölümünü gerçeğe uydur; "Karar günlüğü"nün EN ÜSTÜNE tek satır ekle: `- AAAA-AA-GG SS:DD | <kim: mehmetalp/arkadaş> | <ne konuşuldu/karar>`; açık soruları "Açık konular"a yaz, kapananı sil.
   - Kalıcı üretim kuralı değiştiyse ilgili kural dosyasını da güncelle (havuz.md üst notu, stok/URETIM.md, strateji.md).
   - commit + push (commit_refs hatasında 20–30 sn bekle, pull --rebase, tekrar). Çakışmada iki tarafın satırlarını da koru.
3. Sadece sohbet/selamlaşma gibi üretimle ilgisi olmayan mesajlarda yazma.
4. DEPO HERKESE AÇIK: API anahtarı, şifre, e-posta, vergi/SGK/kişisel bilgi, kazanç rakamları, kaynak hikâyelerin tam metni ASLA yazılmaz. Bunlar konuşulduysa günlüğe sadece "kişisel konu konuşuldu (depoya yazılmadı)" yaz.
5. Çelişki olursa: kullanıcının o anki sözü > HAFIZA.md'deki en yeni satır > eski kurallar.
