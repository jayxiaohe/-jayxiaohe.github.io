module.exports = {
  "title": "HePengTao Blog",
  "description": "万物之中，希望至美。",
  "dest": "public",
  //"base": "/blog",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon1.ico",
		"type": "image/x-ico"
      }
    ],
	/** addbyhpt.加入icon
	[
      "link",
      {
        "rel": "stylesheet",
        "href": "/fontawesome/css/fontawesome.css"
      }
    ],
	[
      "link",
      {
        "rel": "stylesheet",
        "href": "/fontawesome/css/all.css"
      }
    ],*/
	//百度seo
    [
      "meta",
      {
        "name": "baidu-site-verification",
        "content": "code-SsWv2iVILz"
      }
    ],	
	[
      "meta",
      {
        "name": "keywords",
        "content": "何鹏涛,vuepress,leetcode,力扣,算法"
      }
    ],
	[
      "meta",
      {
        "name": "description",
        "content": "何鹏涛的博客。主要内容为力扣算法记录，java-web知识点。"
      }
    ],
	[
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "locales": {
    "/": {
      lang: 'zh-CN'
    }
  },
  "theme": "reco",
  "themeConfig": {
	// hpt add start...
	noFoundPageByTencent: false, // 关闭404	
    // 备案
	"record": "陕ICP备19013443号",
    "recordLink": "/",
	//    
	"sidebar": 'auto',
	"subSidebar": 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容	
	// hpt add end...
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "回顾",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      /*{
        "text": "Docs",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },*/
	  {
        "text": "留言",
		"link": "/m/messageboard",
        "icon": "reco-suggestion"
      },	  
	  {
        "text": "工具",		
        "icon": "reco-other",
		"items": [
		  {
            "text": "⌨️GitHub",
            "link": "https://github.com"
          },
		  {
            "text": "👨‍💻力扣",
            "link": "https://leetcode-cn.com/problemset/all"
          },
          {
            "text": "🦚语雀",
            "link": "https://www.yuque.com/dashboard"
          },
		  {
            "text": "📺B站",
            "link": "https://www.bilibili.com/"
          }
        ]
      },
	  {
        "text": "关于",
		"link": "/m/about",
        "icon": "reco-account"
      }
      /**{
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/recoluan",
            "icon": "reco-github"
          }
        ]
      }**/
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2, // 在导航栏菜单中所占的位置，默认2
        "text": "分类"  // 默认 “分类”
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    /**"friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],**/    
	//"logo": "/wxAvatar.jpg",
	"logo": "/favicon1.ico",	
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "上次更新",
    "author": "HePengTao",
    "authorAvatar": "/wxAvatar.jpg",
    "startYear": "2018",
	//hpt add...start.
	"nextLinks": true,
	"prevLinks": true,
	// 评论。切换评论插件
	vssueConfig: {
	  showComment: false,
	  locale: 'zh',
      platform: 'github-v4',
      owner: 'jayxiaohe',
      repo: 'blog_comments',      
	  clientId: '9663b810da543d1a1dc1',
	  clientSecret: '22d747bf02709b75bfdcc0a31faa37f87ce67548'
    }
  },
  "markdown": {
    "lineNumbers": true
  },
  
  "plugins": [
	// 音乐播放器
	[
	  "meting",
	  {
		meting: {
		  // 网易
		  server: "netease",
		  // 读取歌单列表
		  type: "playlist",
		  mid: "7311154894",
		  // 自动播放
		  autoplay: true,
		  preload: 'auto'
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
		  theme: "#3eaf7c",//"#f9bcdd",
		  // 播放顺序为随机
		  order: "random", //"list"
		  // 初始音量
		  volume: 0.2,
		  // 关闭歌词显示。可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）
		  lrcType: 0,//0,
		  preload: 'auto'
		},
		mobile: {
		  // 手机端去掉cover图
		  cover: false,
		},
	  },
	],
	["vuepress-plugin-nuggets-style-copy", {
	  copyText: "复制代码",
	  tip: {
		  content: "复制成功!"
	  }
	}],
	["@vuepress/nprogress"], // 加载进度条
    ["reading-progress"], // 阅读进度条
	["flexsearch-pro"], // 全文搜索
	// 参考：https://lq782655835.github.io/vuepress-plugin-element-ui/
	// element-ui插件失败问题：https://blog.csdn.net/qq_32855007/article/details/108726430
	["vuepress-plugin-element-ui"], // element-ui插件
    ["permalink-pinyin", {
      lowercase: true, // Converted into lowercase, default: true
      separator: '-' // Separator of the slug, default: '-'
    }]
	//,["sitemap", {hostname: "https://i.iyes.life"}]
  ]
}