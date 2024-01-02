#!/usr/bin/env bash
set -e
shopt -s globstar

DIR=dist

BEAUTIFY_OPTS='-s 2 -T pre -T textarea -T script -T style -E [] --no-preserve-newlines'

for f in $DIR/**/*.html; do
  t=`mktemp`
  echo "beautifying $t -> $f"
  perl -pe '
    s/<!--.*?-->\s*//g;
    s|/\* \@vite-ignore \*/\s*||g;
    s|\(\n|\(|g;
  ' $f > $t
  html-beautify $BEAUTIFY_OPTS $t > $f
  rm $t
done
