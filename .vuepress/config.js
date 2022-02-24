module.exports = {
  "title": "Hpt's Blog",
  "description": "记录一点点",
  "dest": "public",
  //"base": "/blog",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
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
    //"logo": "/logo.png",
	"logo": "/wxAvatar.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "上次更新",
    "author": "何鹏涛",
    "authorAvatar": "/wxAvatar.jpg",
    "startYear": "2018",
	//hpt add...start.
	"nextLinks": true,
	"prevLinks": true	
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
		  mid: "782656363",
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
		  volume: 0.1,
		  // 关闭歌词显示。可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）
		  lrcType: 0,//0,
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
	['flexsearch-pro'] // 全文搜索
  ]
}