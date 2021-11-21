#!/usr/bin/env bash
npm run build:prod
git add .
git commit -m "release-commit"
git push heroku master