---
title: '留言板'
isShowComments: true,
publish: false
---
::: tip
 :tada: 欢迎留言~
:::


<div id="container"></div>
<link rel="stylesheet" href="https://imsun.github.io/gitment/style/default.css">
<script src="https://imsun.github.io/gitment/dist/gitment.browser.js"></script>
<script>
var gitment = new Gitment({
  owner: 'jayxiaohe',
  repo: 'blog_comments',
  oauth: {
    client_id: 'd987083397f3017cd1c0',
    client_secret: '5668ff799fca28547abe3d26115fd19a683d90cd',
  },
})
gitment.render('container')
</script>