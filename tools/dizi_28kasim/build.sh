#!/bin/bash
# build.sh dir outrodir tail
d=$1; o=$2; tl=$3
cd /home/claude/work/$d && rm -rf out && mkdir -p out && ANIM=file://$PWD/anim.html node /home/claude/ttvideolar/tools/render.js > render.log 2>&1 && cp ../$o/outro_fast.wav . && cd .. && python3 mix.py $d 0.1 $tl && ffprobe -v error -show_entries format=duration -of csv=p=0 $d/story.mp4 && echo BUILD_OK $d
