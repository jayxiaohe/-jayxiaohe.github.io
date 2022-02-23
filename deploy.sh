# deploy.sh文件
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build
# 进入生成的文件夹
cd ./public

if [ -z "$GITHUB_TOKEN" ]; then
  msg='来自github action的自动部署-1'
  githubUrl=git@github.com:jayxiaohe/jayxiaohe.github.io.git
else
  msg='来自github action的自动部署-2'
  githubUrl=https://jayxiaohe:${GITHUB_TOKEN}@github.com/jayxiaohe/jayxiaohe.github.io.git
  git config --global user.name "jayxiaohe"
  git config --global user.email "495302067@qq.com"
fi


git init
git add -A
git commit -m "${msg}"
# git push -f git@github.com:jayxiaohe/jayxiaohe.github.io.git master:gh-pages
# 这种模式下只能用https提交！
git push -f $githubUrl master:gh-pages # 推送到github
#git push -f https://github.com/jayxiaohe/jayxiaohe.github.io.git master:gh-pages

cd -
rm -rf public/