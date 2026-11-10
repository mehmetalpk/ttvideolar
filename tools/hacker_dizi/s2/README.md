# Hacker Kerem Sezon 2 — çalışan paket (Part 1 ile test edildi, 10 Kas)
Klasörü çalışma yerine kopyala: `cp -r tools/hacker_dizi/s2 /home/claude/hks2` ve her part için alt klasör aç (`/home/claude/hks2/p2/`).
- p<n>/anim.html → `<script src="../lib.js">`, `../common.js`, `../extra.js`, `../helpers_final.js`, `timing.js` yükler (örnek: p1_anim.html).
- Ses: `p<n>/script.txt` (satır başına cümle, İngilizce ses etiketi) → `python3 tts2.py p<n> QftNgZhlSOYKrYbk7WR7 1` ; outro: `python3 tts2.py p<n> QftNgZhlSOYKrYbk7WR7 1 outro.txt outro`. Anahtar /home/claude/work/.el_key (depoda YOK).
- Zamanlama: `cp p<n>/voice_align.json p<n>/align.json && python3 timing.py p<n>` (atempo 1.2) → timing.js. "Kerem yüz yirmi üç" gibi sayıları altyazıda birleştirmek için timing.js'i sonradan düzelt (p1'de Kerem123).
- Outro: `ffmpeg -i outro.mp3 -af "atempo=1.2,silenceremove=start_periods=1:start_threshold=-40dB,areverse,silenceremove=start_periods=1:start_threshold=-40dB,areverse,volume=-5dB" -ar 44100 -ac 1 outro_fast.wav`
- Önizleme: `node contact.js /home/claude/hks2/p<n>/anim.html /home/claude/hks2/p<n>/pv 0.65` → pv/contact.jpg'ye BAK.
- Render: `cd p<n> && mkdir -p out && ANIM=file://$PWD/anim.html node ../../ttvideolar/tools/render.js` → out/s*.mp4 + out/list.txt.
- Miks: ses = voice_fast.mp3 + (outro başlangıcında) outro_fast.wav, toplam süre = setup() END; sonra `ffmpeg -f concat -safe 0 -i out/list.txt -i final_audio.mp3 -map 0:v -map 1:a -c:v copy -c:a aac -shortest`.
P1 sonucu: 30,7 sn, 13 sahne.
