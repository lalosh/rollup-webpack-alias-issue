#!/bin/bash

rm -rf dist
mkdir dist
npx tsc

mv dist/src dist/types
npx rollup -c
