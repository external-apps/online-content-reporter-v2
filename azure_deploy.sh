#!/bin/sh
. env.sh
NODE_ENV=production npm i
NODE_ENV=production npm run start
