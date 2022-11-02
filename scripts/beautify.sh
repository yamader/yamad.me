#!/usr/bin/env bash
set -ex

html-beautify -r -s 2 -E [] --no-preserve-newlines "build/**/*.html"
