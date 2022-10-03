import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",

  author: {
    name: "Mr.He",
    url: "/",
  },

  iconAssets: "iconfont",

  logo: "/mrhe.png",

  repo: "vuepress-theme-hope/vuepress-theme-hope",

  // 是否在导航栏内显示仓库链接，默认为 `true`
  repoDisplay: false,
  fullscreen: true,
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },

  // 导航栏的布局。
  navbarLayout: {
    left: ["Brand"],
    center: ["Links"],
    right: ["Language", "Repo", "Outlook", "Search"],
  },

  //docsDir: "demo/src",
  //你可以通过在主题选项中中设置如下项目，来自动为每个页面生成编辑此页链接:docsRepo: 文档仓库地址，默认同主题选项中的 repodocsDir: 文档在仓库中的目录，默认为根目录docsBranch: 文档存放的分值，默认为 "main"

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "",

  displayFooter: true,

  //pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
  pageInfo: ["Date", "ReadingTime"],

  /**blog: {
    description: "一个前端开发者",
    intro: "/intro.html",
    medias: {
      Baidu: "https://example.com",
      Bitbucket: "https://example.com",
      Dingding: "https://example.com",
      Discord: "https://example.com",
      Dribbble: "https://example.com",
      Email: "https://example.com",
      Evernote: "https://example.com",
      Facebook: "https://example.com",
      Flipboard: "https://example.com",
      Gitee: "https://example.com",
      GitHub: "https://example.com",
      Gitlab: "https://example.com",
      Gmail: "https://example.com",
      Instagram: "https://example.com",
      Lines: "https://example.com",
      Linkedin: "https://example.com",
      Pinterest: "https://example.com",
      Pocket: "https://example.com",
      QQ: "https://example.com",
      Qzone: "https://example.com",
      Reddit: "https://example.com",
      Rss: "https://example.com",
      Steam: "https://example.com",
      Twitter: "https://example.com",
      Wechat: "https://example.com",
      Weibo: "https://example.com",
      Whatsapp: "https://example.com",
      Youtube: "https://example.com",
      Zhihu: "https://example.com",
    },
  }, */

  encrypt: {
    config: {
      "/guide/encrypt.html": ["8080"],
    },
  },

  plugins: {
    /** blog: {
      autoExcerpt: true,
    }, */

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      // Using Giscus
      provider: "Giscus",
      repo: "jayxiaohe/jayxiaohe.github.io",
      repoId: "R_kgDOG7ZcUg",
      category: "Announcements",
      categoryId: "DIC_kwDOG7ZcUs4CRxJH",

      // Using Twikoo
      /**provider: "Twikoo",
      envId: "https://twikoo-qsqz.vercel.app/",*/

      // Using Waline
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
