#!/usr/bin/env bash
set -ex

SRC=assets
DST=static/assets/font

rm -f $SRC/*.woff2

for f in "$SRC"/*; do
  woff2_compress "$f" && \
  mv "${f%.*}.woff2" $DST/ &
done

wait
