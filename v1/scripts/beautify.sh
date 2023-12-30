#!/usr/bin/env bash
set -e
shopt -s globstar

BEAUTIFY_OPTS="-s 2 -E [] --no-preserve-newlines"

for f in build/**/*.html; do
  t=`mktemp`
  echo "beautify $t -> $f"
  perl -pe 's/<!--.*?-->//g' $f > $t
  html-beautify $BEAUTIFY_OPTS $t > $f
  rm $t
done
