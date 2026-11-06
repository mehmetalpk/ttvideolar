# mix.sh dir OA OE
d=$1;OA=$2;OE=$3
ffmpeg -loglevel error -y -i $d/voice_fast.mp3 -i /home/claude/work/outro_fast.wav -filter_complex "[0:a]aresample=44100,pan=mono|c0=c0,apad=whole_dur=$OA[a];[1:a]adelay=0[b];[a][b]concat=n=2:v=0:a=1,apad=whole_dur=$OE[o]" -map "[o]" -c:a libmp3lame -b:a 192k $d/final_audio.mp3
ffprobe -v error -show_entries format=duration -of csv=p=0 $d/final_audio.mp3
