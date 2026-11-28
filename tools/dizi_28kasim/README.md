# 28 Kas üretimi — Müdürün Çay Cezası P1–P3 (A hattı 10:30/11:30/15:30, Emrullah, özgün, saatli outro) + Yengemin Kına Jürisi P1–P3 (B hattı 17/19/21, İrem, özgün)
Kurulum: dizi_27kasim/README ile aynı (s2 paketi + p23/p4x/p56/p78/tuv/s3/hoca/amca/d19/kar/t20/d21/cop/d23–d27 .js'leri /home/claude/work'e) + bu klasördeki d28.js. hdr.txt = 27'ninki + d28.js. anim.html = hdr.txt + sahneler. Ses: tts2.py <dir> <voice> 1; outrolar o.txt → tts2.py ... o.txt outro → atempo 1.2 + silenceremove + −5 dB.
Emrullah saatli outrolar: ea1 "Devamı bir saat sonra, on bir buçukta. Kaçırmamak için takip et." (3,1 sn → tail 3.3), ea2 "Final bugün üç buçukta. Kaçırmamak için takip et." (2,3 sn → tail 2.6), eof (1,1 sn → 1.5). İrem: io2/io3 (2,3 sn → 2.6), iof.
build.sh <dir> <outrodir> <tail>. Kontak: node contact.js <anim> <pv> 0.7.
d28.js içeriği havuz.md 29 KASIM notunda.
