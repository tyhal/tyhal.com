#!/bin/sh
set -e
set -x

npm install
npm run build-css
npm start