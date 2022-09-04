#!/usr/bin/env bash
set -ex

RUNS=pnpm
if ! command -v -- $RUNS --version; then
  RUNS="npm run"
fi

DIST=build/
PATCH=scripts/ipfs.diff

$RUNS build:arch
git apply $PATCH
$RUNS build:static
git apply -R $PATCH

HASH=$(ipfs add -rQ $DIST)

set +x
echo
echo "  ADDED : ${HASH}"
echo
