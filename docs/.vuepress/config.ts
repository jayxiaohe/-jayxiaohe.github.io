/**
 * 提示：如您想使用JS版本的配置文件可参考：https://github.com/xugaoyi/vuepress-theme-vdoing/tree/a2f03e993dd2f2a3afdc57cf72adfc6f1b6b0c32/docs/.vuepress
 */
import { resolve } from 'path'
import { defineConfig4CustomTheme } from 'vuepress/config'
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
import dayjs from 'dayjs'
import baiduCode from './config/baiduCode' // 百度统计hm码
import htmlModules from './config/htmlModules' // 自定义插入的html块
import { costomers } from 'vuepress/config'
import { UserPlugins } from 'vuepress/config' //addbyhpt. 引入twikoo评论

export default defineConfig4CustomTheme<VdoingThemeConfig>({
  //theme: 'vdoing', // 使用npm包主题
  theme: resolve(__dirname, '../../vdoing'), // 使用本地主题

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Mr.He',
      description:
        'web前端技术博客,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,React,python,css3,html5,Node,git,github等技术文章。',
    },
  },
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

  // 主题配置
  themeConfig: {
	  
	    indexImg: {
		  navColor: 2,    // 导航栏左侧名字、中间搜索框、右侧字体的颜色，1 是黑色，2 是白色。默认是 1
		  switchNavColor: true,    // 页面移出大图片的位置后，navColor 是否变换，如由白色变黑色，黑色变白色。默认是 false
		  // 因为本主题的默认背景色偏向白色，如果 navColor 是 2，建议需要开启(true)，否则白背景 + 白字体 = 看不见
		  bgTimeColor: true,     // 是否开启图片的背景色随一天的不同时间而变化，并且开启时间窗口提示，默认是 false。时间分为四种：白天（原图）、黄昏（偏黄）、晚上（偏黑）、深夜（偏深黑）
		  bgTimeColorArray: ['transparent', 'transparent', 'transparent', 'transparent'],   // 第一个是白天的颜色（默认原图），第二个是黄昏的颜色，第三个是晚上的颜色，第四个是深夜的颜色。bgTimeColor 为 true 生效。提示：如果不想要这个效果，但是又想要时间窗口提示效果，则改为 ['transparent', 'transparent', 'transparent', 'transparent']
		  descFade: true,   // 是否开启图片中间描述的淡入效果，默认为 false
		  desc: ["万物之中，希望至美。", "至美之物，永不凋零。", "朝圣的使徒，正在走向编程的至高殿堂！"],  // 多个描述，如果填写则覆盖 config.js 的 description，不填写默认读取 config.js 的 description，descFadeIn 为 true 生效
		  descFontSize: '1.4rem',   // desc 的字体大小，默认 1.4rem。提示：原主题是 1.1rem
		  descFadeInTime: 200,  // 描述的淡入效果持续时间，descFade 为 true 生效，默认 200 毫秒
		  descFadeOutTime: 100,  // 描述的淡出效果持续时间，descFade 为 true 生效，默认 100 毫秒
		  descNextTime: 800,  // 当存在多个 desc 时，一个 desc 展示完后或准备开始时，多少秒后出现下一个 desc，默认 800 毫秒
		  bubble: false,    // 是否开启图片的气泡效果，默认为 false
		  bubblePosition: 0,  // 气泡效果的位置，范围：0-100，不同数值代表不同的起始位置，0是整个图片，50是半张图（一半的下方）。bubble 为 true 生效。默认是 0
		  bubbleNum: 200,   // 气泡的个数，bubble 为 true 生效，默认 200 个
		},

	  
    // 导航配置
    nav: [
      { text: '首页', link: '/' },
      /**{
        text: '收藏夹',
        link: '/favo/',
        items: [
          { text: '网站', link: '/note/javascript/' },
		  { text: '资源', link: '/note/js/' },
        ],
      },*/
      {
        text: '基础',
        link: '/java/',
        items: [
          {
            text: 'Java基础',
            link: '/java/basic01/',
            //link: '/pages/java01/',
          },
          {
            text: 'Java容器',
            link: '/collection/rongqi01/',
          },
          {
            text: '多线程',
            link: '/thread/thread01/',
          },
          {
            text: 'Java8',
            link: '/java8/lambda/',
          },
        ],
      },
	  {
        text: '进阶',
        link: '/pro/',
        items: [
		  {
            text: '设计模式',
            link: '/design-pattern/thought/',
          },
		  {
            text: 'JVM',
            link: '/jvm/intro/',
          },
		  {
            text: 'Git',
            link: '/pages/8292d8/',
          },
		  {
            text: '数据库',
            link: '/pages/mysql01/',
          },
        ],
      },
      {
        text: '算法',
        link: '/algo/', // 和 /docs/00.目录页/02.算法.md 的permalink值 对应！
        items: [
          { text: '必知必会50', link: '/pages/15621a/' },
          {
            text: '数组',
            link: '/pages/9ce938/',
          },
          {
            text: '字符串',
            link: '/pages/864799/',
          },
          {
            text: '链表',
            link: '/pages/ac7674/',
          },
          {
            text: '二叉树',
            link: '/pages/afdaa1/',
          },
          {
            text: '其他',
            link: '/pages/f3c747/',
          },
        ],
      },
      {
        text: '框架',
        link: '/framework/',
        items: [
          {
            text: 'Spring系列',
            items: [
              { text: 'Spring', link: '/pages/spring01/' },
              { text: 'Spring MVC', link: '/pages/mvc01/' },              
              { text: 'Spring Boot', link: '/pages/boot01/' },
              { text: 'Spring Cloud', link: '/pages/cloud01/' },
			  { text: 'Spring Security', link: '/note/springsecurity/' },
            ],
          },
          {
            text: '分布式',
            items: [
			  { text: 'Dubbo', link: '/pages/dubbo01/' },
              { text: 'zookeeper', link: '/note/zk/' },              
              { text: 'netty', link: '/note/netty/' },
              { text: 'Redis',  link: '/pages/redis01/' },
            ],
          },
          {
            text: '其他',
            items: [
              { text: 'Shiro', link: '/note/shiro/' },
            ],
          },
        ],
      },
      { text: '随笔', link: '/essay/',
		items:[
			{text: '技术类', link: '/essay/typoramapkey/'},
			{text: '生活类', link: '/essay/life/001/'},
		]
	  },
      {
        text: '更多',
        //link: '/more/',
        items: [
		  { text: 'Leetcode', link: 'https://leetcode-cn.com/problemset/all/' },
		  { text: 'javaguide', link: 'https://javaguide.cn/' },
		  { text: '美团技术', link: 'https://tech.meituan.com/' },
		  { text: '淘系技术', link: 'https://tech.taobao.org/news' },
		  { text: '小米技术', link: 'https://xiaomi-info.github.io/tags/' },
		  { text: 'thoughtworks', link: 'https://insights.thoughtworks.cn/' },
		  { text: '微信读书', link: 'https://weread.qq.com/' },
		  { text: '百度站长', link: 'https://ziyuan.baidu.com/site/' },
		],
      },
      {
        text: '索引',
        link: '/archives/',
        items: [
          { text: '分类', link: '/categories/' },
          { text: '标签', link: '/tags/' },
          { text: '归档', link: '/archives/' },
		  { text: '关于', link: '/about/' },
        ],
      },
      /*{
        text: '更多',
        link: '/more/',
        items: [
          { text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },
          { text: '实用技巧', link: '/pages/baaa02/' },
		  {
            text: '收藏',
            items: [
              { text: '网站', link: '/note/javascript/' },
              { text: '资源', link: '/note/js/' },
            ],
          },
        ],
      },*/
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    //logo: '/img/logo.png', // 导航栏logo
	logo: '/img/mrhe.png',
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    //repo: 'xugaoyi/vuepress-theme-vdoing', // 导航栏右侧生成Github链接
    repo: 'jayxiaohe/jayxiaohe.github.io',
    docsDir: 'docs', // 编辑的文件夹
    editLinks: true, // 启用编辑
    editLinkText: '在线编辑',

    //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

    // category: false, // 是否打开分类功能，默认true
    // tag: false, // 是否打开标签功能，默认true
    // archive: false, // 是否打开归档功能，默认true
    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

    // bodyBgImg: [
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
    // ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时每隔15秒换一张。
    bodyBgImg: [
		//'/img/wind.jpg'
		//'/img/back.jpg'
		'/img/bg1.jpg',
		//'https://notes.youngkbt.cn/img/index/bg.jpg',
		//'https://picture.zwc365.com/getbing.jpg'
	], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时每隔15秒换一张。
    // bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0.1~ 1.0, 默认0.5
    bodyBgImgOpacity: 0.8, // body背景图透明度，选值 0.1~ 1.0, 默认0.5
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

    // updateBar: { // 最近更新栏
    //   showToArticle: false, // 显示到文章页底部，默认true
    //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    // },
    // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
    // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
    // pageButton: false, // 是否显示快捷翻页按钮，默认true

    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: 'structuring',

    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    author: {
      name: 'HePengTao', // 必需
      link: '/about', // 可选的
    },

    // 博主信息 (显示在首页侧边栏)
    blogger: {
      avatar: '/img/wxAvatar.jpg',
      name: 'HePengtao',
      slogan: '你灵魂的欲望，是你命运的先知。',
    },

    // 自定义hmtl(广告)模块
    htmlModules,
	
    // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
    social: {
      // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:pt.he@qq.com',
        },
        {
          iconClass: 'icon-weixin',
          title: '微信',
          link: '/about/',
        },
        /*{
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/xugaoyi',
        },
        {
          iconClass: 'icon-erji',
          title: '听音乐',
          link: 'https://music.163.com/#/playlist?id=755597173',
        },*/
      ],
    },

    // 页脚信息
    footer: {
      createYear: 2018, // 博客创建年份
      copyrightInfo: 'HePengTao', //| <a href="https://github.com/xugaoyi/vuepress-theme-vdoing/blob/master/LICENSE" target="_blank">MIT License</a>', // 博客版权信息，支持a标签或换行标签</br>
    },
  },

  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
	// addbyhpt.集成twikoo评论。
	['script', { src: 'https://cdn.bootcdn.net/ajax/libs/twikoo/1.5.10/twikoo.all.min.js' }],
    // addbyhpt.代码块隐藏需要的内容-start
    [
      'link',
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_3114978_qe0b39no76.css',
      },
    ],
    // addbyhpt.代码块隐藏需要的内容-end
    [
      'meta',
      {
        name: 'keywords',
        content:
          '力扣,何鹏涛,hepengtao,vuepress,个人技术博客,java,面试题,技术文档,学习,面试,git,github,markdown',
      },
    ],
    ['meta', { name: 'baidu-site-verification', content: 'code-SsWv2iVILz' }], // 百度统计的站长验证（你可以去掉）
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    ['meta', { name: 'description', content: '个人博客,面试经验,java' }],
    ['meta', { name: 'robots', content: 'index,follow' }],
    // [
    //   'script',
    //   {
    //     'data-ad-client': 'ca-pub-7828333725993554',
    //     async: 'async',
    //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    //   },
    // ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
  ],

  // 插件配置
  plugins: [
    //addbyhpt. 参考：https://notes.youngkbt.cn/about/website/code-block-hidden/#%E6%B7%BB%E5%8A%A0vue%E7%BB%84%E4%BB%B6
    [
      {
        name: 'custom-plugins',
        //globalUIComponents: ["GlobalTip", "BlockToggle"] // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
        globalUIComponents: ['GlobalTip','BlockToggle','LastReadingPopup', 'Twikoo'],
      },
    ],

    // 导入本地插件（供学习参考）
    // [resolve(__dirname, './plugins/love-me')]: { // 鼠标点击爱心特效
    //   color: '#11a8cd', // 爱心颜色，默认随机色
    //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
    // },
	[resolve(__dirname, './plugins/love-me'), { // 鼠标点击爱心特效
       //color: '#11a8cd', // 爱心颜色，默认随机色
       excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
    }],

    // 百度自动推送
    ['vuepress-plugin-baidu-autopush', {}],

    // 百度统计
    [
      'vuepress-plugin-baidu-tongji',
      {
        hm: baiduCode,
      },
    ],

    // 全文搜索
    ['fulltext-search', {}],

    // 可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
    // 'thirdparty-search': {
    //   thirdparty: [
    //     {
    //       title: '在MDN中搜索',
    //       frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
    //       behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
    //     },
    //     {
    //       title: '在Runoob中搜索',
    //       frontUrl: 'https://www.runoob.com/?s=',
    //     },
    //     {
    //       title: '在Vue API中搜索',
    //       frontUrl: 'https://cn.vuejs.org/v2/api/#',
    //     },
    //     {
    //       title: '在Bing中搜索',
    //       frontUrl: 'https://cn.bing.com/search?q=',
    //     },
    //     {
    //       title: '通过百度搜索本站的',
    //       frontUrl: 'https://www.baidu.com/s?wd=site%3Axugaoyi.com%20',
    //     },
    //   ],
    // },

    // 代码块复制按钮
    [
      'one-click-copy',
      {
        copySelector: [
          'div[class*="language-"] pre',
          'div[class*="aside-code"] aside',
        ], // String or Array
        copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: true, // whether to display on the mobile side, default: false.
      },
    ],

    // DEMO演示模块, API: https://github.com/xiguaxigua/vuepress-plugin-demo-block
    /**'demo-block': {
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false, // 是否展示为横向样式
      },
    },*/

    // 放大图片
    [
      'vuepress-plugin-zooming',
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)', // not排除class是no-zoom的图片
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],

    // 评论区
	/** 屏蔽掉。使用twikoo评论。
    [
     'vuepress-plugin-comment',
     {
       choosen: 'gitalk',
       options: {
         clientID: '9663b810da543d1a1dc1',
         clientSecret: '22d747bf02709b75bfdcc0a31faa37f87ce67548',
         repo: 'blog_comments', // GitHub 仓库
         owner: 'jayxiaohe', // GitHub仓库所有者
         admin: ['jayxiaohe'], // 对仓库有写权限的人
         // distractionFreeMode: true,
         pagerDirection: 'last', // 'first'正序 | 'last'倒序
         id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
         title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
         labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
         body: '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
       },
     },
    ],
	**/

    // "上次更新"的时间格式
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      },
    ],

    // 音乐播放器 https://github.com/metowolf/MetingJS
	// 因为暗黑模式下播放器仍显示白色，暂时屏蔽
	['meting'],
		[
		  'meting',
		  {
			meting: {
			  // 网易/ 腾讯
			  server: 'tencent',
			  // 读取歌单列表
			  type: 'playlist',
			  mid: '6474117513',
			  // 自动播放
			  autoplay: true,
			  preload: 'auto',
			},
			// 不配置该项的话不会出现全局播放器		
			aplayer: {
			  // 吸底模式
			  fixed: true,
			  mini: true,
			  // 自动播放
			  autoplay: true,
			  // 歌曲栏折叠
			  listFolded: true,
			  // 颜色
			  theme: '#3eaf7c', //"#f9bcdd",
			  // 播放顺序为随机
			  order: 'random', //"list"
			  // 初始音量
			  volume: 0.5,
			  // 关闭歌词显示。可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）
			  lrcType: 0, //0,
			  preload: 'auto',
			},
			mobile: {
			  // 手机端去掉cover图
			  cover: false,
			},
		  },
	],

	
	 [ 'tabs' ], //vuepress-plugin-tabs
	 ['reading-progress',
		{
			fixed: 'top',
		}
	 ], // 阅读进度
  ],

  markdown: {
    lineNumbers: true,
  },
})
