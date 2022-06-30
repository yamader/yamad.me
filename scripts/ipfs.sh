#!/usr/bin/env bash
set -ex

RUNS=pnpm
if ! command -v -- $RUNS --version; then
  RUNS="npm run"
fi

DIST=build/
PATCH=scripts/ipfs.diff

$RUNS build-src
git apply $PATCH
$RUNS _build
git apply -R $PATCH

HASH=$(ipfs add -rQ $DIST)

set +x
echo
echo "  ADDED : ${HASH}"
echo
