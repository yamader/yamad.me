#!/usr/bin/env bash
set -e
shopt -s globstar

DIR=dist
BEAUTIFY_OPTS="-s 2 -T pre -T ruby -T script -T style -E [] --no-preserve-newlines"

for f in $DIR/**/*.html; do
  t=`mktemp`
  echo "beautifying $t -> $f"
  perl -pe '
    s|<!--(?![\$/])(?!astro).*?-->\s*||g;
  ' $f > $t
  html-beautify $BEAUTIFY_OPTS $t > $f
  rm $t
done
