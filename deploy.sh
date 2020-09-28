#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# deploying to a custom domain
echo 'www.nikkipetersen.dev' > CNAME

git init
git add -A
git commit -m 'deploy'

# deploying to https://piknikki.github.io
git push -f git@github.com:piknikki/piknikki.github.io.git master

cd -