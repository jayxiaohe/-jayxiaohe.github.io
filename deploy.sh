# deploy.sh文件
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build
# 进入生成的文件夹
cd ./public

if [ -z "$GITHUB_TOKEN" ]; then
  msg='来自github action的自动部署-1'
else
  msg='来自github action的自动部署-2'
  git config --global user.name "jayxiaohe"
  git config --global user.email "495302067@qq.com"
fi


git init
git add -A
git commit -m "${msg}"
git push -f git@github.com:jayxiaohe/jayxiaohe.github.io.git master:gh-pages

cd -
rm -rf public/