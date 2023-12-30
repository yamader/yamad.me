#!/usr/bin/env bash
set -ex

SRC=public/assets
DST=public/assets

for f in $SRC/*; do
  if [ ${f##*.} = woff2 ]; then
    cp $f $DST/ &
  else
    woff2_compress $f && \
      mv ${f%.*}.woff2 $DST/ &
  fi
done

wait
