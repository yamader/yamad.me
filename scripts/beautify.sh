#!/usr/bin/env bash
set -e

BEAUTIFY_OPTS="-s 2 -E [] --no-preserve-newlines"

for f in build/*.html build/**/*.html; do
  t=`mktemp`
  echo "beautify $t -> $f"
  sed 's/<!--.*-->//g' $f > $t
  html-beautify $BEAUTIFY_OPTS $t > $f
  rm $t
done
