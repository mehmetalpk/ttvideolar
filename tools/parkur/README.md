# Parkur (bölünmüş ekran alt yarısı)

Özgün, telifsiz 2D çöp adam parkuru. Her video için farklı `seed` ver → parkur hiç tekrar etmez.
Biyomlar (tepe/şehir/çöl/gece) ~10 sn'de bir değişir. 60 fps, 1080x904.

## Üret
```
cd /home/claude/work/<video>
NODE_PATH=$(npm root -g) node /home/claude/ttvideolar/tools/parkur/render_parkur.js <süre_sn> parkur <seed>
# → parkur.mp4 (60 fps)
```

## Birleştir (üst 9 : alt 8 → 1016 + 904 px)
Hikâye videosu `story.mp4` (1080x1920, tam ekran çizilmiş) için:
```
F=/usr/share/fonts/opentype/inter/Inter-Bold.otf
ffmpeg -y -i story.mp4 -i parkur.mp4 -filter_complex "[0:v]fps=60,crop=1080:1150:0:150,split[a][b];[b]scale=1080:1016,boxblur=30:3,eq=brightness=-0.15[bg];[a]scale=954:1016[fg];[bg][fg]overlay=63:0,drawtext=fontfile='$F':text='@redditselhikayeler':fontsize=36:fontcolor=white@0.65:borderw=3:bordercolor=black@0.6:x=(w-tw)/2:y=968[top];[1:v]scale=1080:904[bot];[top][bot]vstack,format=yuv420p[v]" -map "[v]" -map 0:a -r 60 -c:v libx264 -preset veryfast -crf 20 -c:a aac -b:a 192k -shortest story_split.mp4
```
Not: hikâye sahnesinin önemli kısmı (başlıklar, karakter, altyazı) y=150–1300 arasında olmalı; crop bu bandı alır.
