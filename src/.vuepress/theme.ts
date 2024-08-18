import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import { MR_HOPE_AVATAR } from "./logo.js";

export default hopeTheme({
  hostname: "https://i.iyes.life",
  pageInfo: ["Date", "Author",  "Category", "Tag", "PageView"],
  author: {
    name: "Mr.He",
    url: "https://i.iyes.life",
  },

  iconPrefix: 'iconfont icon-',
  iconAssets: "//at.alicdn.com/t/c/font_3572690_wcsjj9dku5f.css",  

  logo: "/logo.png",
  repo: "jayxiaohe/jayxiaohe.github.io",
  // 是否在导航栏内显示仓库链接，默认为 `true`
  repoDisplay: false,

  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: "🍃 你灵魂的欲望，是你命运的先知。",
  displayFooter: true,

  // 博客相关
  blog: {
    description: "后端开发",
    intro: "/about",
    medias: {
      Wechat: "/about#微信",
      Email: "mailto:pt.he@qq.com",
      GitHub: "https://github.com/jayxiaohe",
    },
  },

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 在这里配置主题提供的插件
  plugins: {
    searchPro: {
		// 索引全部内容
        // indexContent: true,
		autoSuggestions: false,
		// 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
	},

	shiki: {
        // 你想要使用的主题
        themes: {
          light: "vitesse-light",
          dark: "github-dark",
        },
      },
	  
    blog: {
		"excerpt": false,
	},

    // 启用之前需安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },
	
	comment: {
      /**
       * Using Giscus
       */
      /****
	  provider: "Giscus",
      repo: "jayxiaohe/jayxiaohe.github.io",
      repoId: "R_kgDOG7ZcUg",
      category: "Announcements",
      categoryId: "DIC_kwDOG7ZcUs4CRxJH",
	  */
		
      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      provider: "Waline",
      serverURL: "https://comment.iyes.life/",
	  emoji: [
	    '//unpkg.com/@waline/emojis@1.1.0/qq',
		'//unpkg.com/@waline/emojis@1.1.0/weibo',
		'//unpkg.com/@waline/emojis@1.1.0/bilibili',
	  ],
	  search: true,
	  // reaction: true, // 开启反应
	  reaction: [
		'https://unpkg.com/@waline/emojis@1.1.0/bilibili/bb_heart_eyes.png',
		'https://unpkg.com/@waline/emojis@1.1.0/bilibili/bb_antic.png',
		'https://unpkg.com/@waline/emojis@1.1.0/bilibili/bb_confused.png',
		'https://unpkg.com/@waline/emojis@1.1.0/bilibili/bb_question_mask.png',
	  ],
	  locale: {
		reaction0: '很棒',
		reaction1: '不错',
		reaction2: '一般',
		reaction3: '？？？',
	  },
	  copyright: false,
	  wordLimit: 100,
	  dark: "auto",
	  login: "enable",
    },

    components: {
      components: ["Badge", "VPCard"],
    },

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,

      // 在启用之前安装 chart.js
      // chart: true,

      // insert component easily

      // 在启用之前安装 echarts
      // echarts: true,

      // 在启用之前安装 flowchart.ts
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // 在启用之前安装 katex
      // katex: true,

      // 在启用之前安装 mathjax-full
      // mathjax: true,

      // 在启用之前安装 mermaid
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 在启用之前安装 reveal.js
      revealJs: {
         plugins: ["highlight", "math", "search", "notes", "zoom"],
      },

      // 在启用之前安装 @vue/repl
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cacheImage: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Demo",
            short_name: "Demo",
            url: "/demo/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
