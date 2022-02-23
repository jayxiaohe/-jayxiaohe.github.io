# deploy.sh文件
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd ./public

git init
git add -A
git commit -m '来自deploy.sh的commit'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:jayxiaohe/jayxiaohe.github.io.git master:gh-pages

cd -