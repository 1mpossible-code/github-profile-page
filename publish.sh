npm run build
cd build/ || exit
git init
git add .
git remote add origin git@github.com:1mpossible-code/1mpossible-code.github.io.git
git commit -m "Initial commit"
git push -u origin main