// docs/.vuepress/config.ts
import { searchPlugin } from "@vuepress/plugin-search";
import { defineUserConfig } from "vuepress";

// docs/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// docs/.vuepress/navbar.ts
import { navbar } from "vuepress-theme-hope";
var navbar_default = navbar([
  "/",
  { text: "Java", icon: "java", link: "/01java/" },
  { text: "\u6846\u67B6", icon: "leaf", link: "/20frame/" },
  { text: "\u7B97\u6CD5", icon: "dart", link: "/40algo/" },
  {
    text: "\u968F\u7B14",
    icon: "edit",
    prefix: "/posts/",
    children: [
      {
        text: "\u6280\u672F",
        icon: "edit",
        prefix: "tech/",
        children: [
          { text: "typora \u5FEB\u6377\u952E", icon: "edit", link: "typoramapkey" },
          { text: "\u6587\u7AE0 2", icon: "edit", link: "article2" },
          "article3",
          "article4"
        ]
      }
    ]
  }
]);

// docs/.vuepress/sidebar.ts
import { sidebar } from "vuepress-theme-hope";
var sidebar_default = sidebar({
  "/01java/": "structure",
  "/20frame/": "structure",
  "/40algo/": "structure"
});

// docs/.vuepress/theme.ts
var theme_default = hopeTheme({
  hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",
  author: {
    name: "Mr.He",
    url: "/"
  },
  iconAssets: "iconfont",
  logo: "/mrhe.png",
  repo: "vuepress-theme-hope/vuepress-theme-hope",
  repoDisplay: false,
  fullscreen: true,
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f"
  },
  navbarLayout: {
    left: ["Brand"],
    center: ["Links", "Search"],
    right: ["Language", "Repo", "Outlook"]
  },
  navbar: navbar_default,
  sidebar: sidebar_default,
  footer: "",
  displayFooter: true,
  pageInfo: ["Date", "ReadingTime"],
  encrypt: {
    config: {
      "/guide/encrypt.html": ["8080"]
    }
  },
  plugins: {
    comment: {
      provider: "Twikoo",
      envId: "https://twikoo-qsqz.vercel.app/"
    },
    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"]
      }
    }
  }
});

// docs/.vuepress/config.ts
var config_default = defineUserConfig({
  lang: "zh-CN",
  title: "\u4F55\u9E4F\u6D9B\u7684\u6570\u5B57\u82B1\u56ED",
  description: "HePengTao\u7684\u535A\u5BA2",
  base: "/",
  head: [["link", { rel: "icon", href: "/mrhe.png" }]],
  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "\u641C\u7D22"
        }
      },
      maxSuggestions: 10
    })
  ],
  theme: theme_default
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIiwgImRvY3MvLnZ1ZXByZXNzL3RoZW1lLnRzIiwgImRvY3MvLnZ1ZXByZXNzL25hdmJhci50cyIsICJkb2NzLy52dWVwcmVzcy9zaWRlYmFyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzovdnVlcHJlc3MtYmxvZy9kb2NzLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcdnVlcHJlc3MtYmxvZ1xcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxjb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L3Z1ZXByZXNzLWJsb2cvZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IHsgc2VhcmNoUGx1Z2luIH0gZnJvbSBcIkB2dWVwcmVzcy9wbHVnaW4tc2VhcmNoXCI7XHJcbmltcG9ydCB7IGRlZmluZVVzZXJDb25maWcgfSBmcm9tIFwidnVlcHJlc3NcIjtcclxuaW1wb3J0IHsgaG9wZVRoZW1lIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcclxuaW1wb3J0IHRoZW1lIGZyb20gXCIuL3RoZW1lXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcclxuICBsYW5nOiBcInpoLUNOXCIsXHJcbiAgdGl0bGU6IFwiXHU0RjU1XHU5RTRGXHU2RDlCXHU3Njg0XHU2NTcwXHU1QjU3XHU4MkIxXHU1NkVEXCIsXHJcbiAgZGVzY3JpcHRpb246IFwiSGVQZW5nVGFvXHU3Njg0XHU1MzVBXHU1QkEyXCIsXHJcblxyXG4gIGJhc2U6IFwiL1wiLFxyXG4gIGhlYWQ6IFtbJ2xpbmsnLCB7IHJlbDogJ2ljb24nLCBocmVmOiAnL21yaGUucG5nJyB9XV0sXHJcbiAgXHJcbiAgcGx1Z2luczogW1xyXG4gICAgc2VhcmNoUGx1Z2luKHtcclxuICAgICAgbG9jYWxlczoge1xyXG4gICAgICAgICcvJzoge1xyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdcdTY0MUNcdTdEMjInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIG1heFN1Z2dlc3Rpb25zOiAxMCxcclxuICAgIH0pLFxyXG5cclxuICAgIC8qc2VhcmNoQ29uc29sZVBsdWdpbih7XHJcbiAgICAgIGJhaWR1SWQ6ICc1YWM0YzcxMGFhZGYyMDI5NjdhZWQ2Yjg2Y2ZhOGJiNycsXHJcbiAgICB9KSAqL1xyXG5cclxuICAgIC8qKiBDb21tZW50OiB7XHJcbiAgICAgIHR5cGU6IFwid2FsaW5lXCIsXHJcblxyXG4gICAgICAvLyB3YWxpbmUgXHU2QTIxXHU1RjBGXHU0RTBCXHJcbiAgICAgIHNlcnZlclVSTDogXCIuLi5cIiwgLy8geW91ciBzZXJ2ZXJVUkxcclxuICAgIH0sICovXHJcbiAgXSxcclxuXHJcbiAgdGhlbWUsXHJcbn0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6L3Z1ZXByZXNzLWJsb2cvZG9jcy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXHZ1ZXByZXNzLWJsb2dcXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcdGhlbWUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L3Z1ZXByZXNzLWJsb2cvZG9jcy8udnVlcHJlc3MvdGhlbWUudHNcIjtpbXBvcnQgeyBob3BlVGhlbWUgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xyXG5pbXBvcnQgbmF2YmFyIGZyb20gXCIuL25hdmJhclwiO1xyXG5pbXBvcnQgc2lkZWJhciBmcm9tIFwiLi9zaWRlYmFyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob3BlVGhlbWUoe1xyXG4gIGhvc3RuYW1lOiBcImh0dHBzOi8vdnVlcHJlc3MtdGhlbWUtaG9wZS12Mi1kZW1vLm1yaG9wZS5zaXRlXCIsXHJcblxyXG4gIGF1dGhvcjoge1xyXG4gICAgbmFtZTogXCJNci5IZVwiLFxyXG4gICAgdXJsOiBcIi9cIixcclxuICB9LFxyXG5cclxuICBpY29uQXNzZXRzOiBcImljb25mb250XCIsXHJcblxyXG4gIGxvZ286IFwiL21yaGUucG5nXCIsXHJcblxyXG4gIHJlcG86IFwidnVlcHJlc3MtdGhlbWUtaG9wZS92dWVwcmVzcy10aGVtZS1ob3BlXCIsXHJcblxyXG4gIC8vIFx1NjYyRlx1NTQyNlx1NTcyOFx1NUJGQ1x1ODIyQVx1NjgwRlx1NTE4NVx1NjYzRVx1NzkzQVx1NEVEM1x1NUU5M1x1OTRGRVx1NjNBNVx1RkYwQ1x1OUVEOFx1OEJBNFx1NEUzQSBgdHJ1ZWBcclxuICByZXBvRGlzcGxheTogZmFsc2UsXHJcbiAgZnVsbHNjcmVlbjogdHJ1ZSxcclxuICB0aGVtZUNvbG9yOiB7XHJcbiAgICBibHVlOiBcIiMyMTk2ZjNcIixcclxuICAgIHJlZDogXCIjZjI2ZDZkXCIsXHJcbiAgICBncmVlbjogXCIjM2VhZjdjXCIsXHJcbiAgICBvcmFuZ2U6IFwiI2ZiOWI1ZlwiLFxyXG4gIH0sXHJcblxyXG4gIC8vIFx1NUJGQ1x1ODIyQVx1NjgwRlx1NzY4NFx1NUUwM1x1NUM0MFx1MzAwMlxyXG4gIG5hdmJhckxheW91dDoge1xyXG4gICAgbGVmdDogW1wiQnJhbmRcIl0sXHJcbiAgICBjZW50ZXI6IFtcIkxpbmtzXCIsIFwiU2VhcmNoXCJdLFxyXG4gICAgcmlnaHQ6IFtcIkxhbmd1YWdlXCIsIFwiUmVwb1wiLCBcIk91dGxvb2tcIl0sXHJcbiAgfSxcclxuXHJcbiAgLy9kb2NzRGlyOiBcImRlbW8vc3JjXCIsXHJcbiAgLy9cdTRGNjBcdTUzRUZcdTRFRTVcdTkwMUFcdThGQzdcdTU3MjhcdTRFM0JcdTk4OThcdTkwMDlcdTk4NzlcdTRFMkRcdTRFMkRcdThCQkVcdTdGNkVcdTU5ODJcdTRFMEJcdTk4NzlcdTc2RUVcdUZGMENcdTY3NjVcdTgxRUFcdTUyQThcdTRFM0FcdTZCQ0ZcdTRFMkFcdTk4NzVcdTk3NjJcdTc1MUZcdTYyMTBcdTdGMTZcdThGOTFcdTZCNjRcdTk4NzVcdTk0RkVcdTYzQTU6ZG9jc1JlcG86IFx1NjU4N1x1Njg2M1x1NEVEM1x1NUU5M1x1NTczMFx1NTc0MFx1RkYwQ1x1OUVEOFx1OEJBNFx1NTQwQ1x1NEUzQlx1OTg5OFx1OTAwOVx1OTg3OVx1NEUyRFx1NzY4NCByZXBvZG9jc0RpcjogXHU2NTg3XHU2ODYzXHU1NzI4XHU0RUQzXHU1RTkzXHU0RTJEXHU3Njg0XHU3NkVFXHU1RjU1XHVGRjBDXHU5RUQ4XHU4QkE0XHU0RTNBXHU2ODM5XHU3NkVFXHU1RjU1ZG9jc0JyYW5jaDogXHU2NTg3XHU2ODYzXHU1QjU4XHU2NTNFXHU3Njg0XHU1MjA2XHU1MDNDXHVGRjBDXHU5RUQ4XHU4QkE0XHU0RTNBIFwibWFpblwiXHJcblxyXG4gIC8vIG5hdmJhclxyXG4gIG5hdmJhcjogbmF2YmFyLFxyXG5cclxuICAvLyBzaWRlYmFyXHJcbiAgc2lkZWJhcjogc2lkZWJhcixcclxuXHJcbiAgZm9vdGVyOiBcIlwiLFxyXG5cclxuICBkaXNwbGF5Rm9vdGVyOiB0cnVlLFxyXG5cclxuICAvL3BhZ2VJbmZvOiBbXCJBdXRob3JcIiwgXCJPcmlnaW5hbFwiLCBcIkRhdGVcIiwgXCJDYXRlZ29yeVwiLCBcIlRhZ1wiLCBcIlJlYWRpbmdUaW1lXCJdLFxyXG4gIHBhZ2VJbmZvOiBbXCJEYXRlXCIsIFwiUmVhZGluZ1RpbWVcIl0sXHJcblxyXG4gIC8qKmJsb2c6IHtcclxuICAgIGRlc2NyaXB0aW9uOiBcIlx1NEUwMFx1NEUyQVx1NTI0RFx1N0FFRlx1NUYwMFx1NTNEMVx1ODAwNVwiLFxyXG4gICAgaW50cm86IFwiL2ludHJvLmh0bWxcIixcclxuICAgIG1lZGlhczoge1xyXG4gICAgICBCYWlkdTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICAgIEJpdGJ1Y2tldDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICAgIERpbmdkaW5nOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgRGlzY29yZDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICAgIERyaWJiYmxlOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgRW1haWw6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgICBFdmVybm90ZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICAgIEZhY2Vib29rOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgRmxpcGJvYXJkOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgR2l0ZWU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgICBHaXRIdWI6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgICBHaXRsYWI6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgICBHbWFpbDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICAgIEluc3RhZ3JhbTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICAgIExpbmVzOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgTGlua2VkaW46IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgICBQaW50ZXJlc3Q6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgICBQb2NrZXQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgICBRUTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICAgIFF6b25lOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgUmVkZGl0OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgUnNzOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgU3RlYW06IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgICBUd2l0dGVyOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgV2VjaGF0OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgV2VpYm86IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgICBXaGF0c2FwcDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICAgIFlvdXR1YmU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgICBaaGlodTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICB9LFxyXG4gIH0sICovXHJcblxyXG4gIGVuY3J5cHQ6IHtcclxuICAgIGNvbmZpZzoge1xyXG4gICAgICBcIi9ndWlkZS9lbmNyeXB0Lmh0bWxcIjogW1wiODA4MFwiXSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgcGx1Z2luczoge1xyXG4gICAgLyoqIGJsb2c6IHtcclxuICAgICAgYXV0b0V4Y2VycHQ6IHRydWUsXHJcbiAgICB9LCAqL1xyXG5cclxuICAgIC8vIFx1NTk4Mlx1Njc5Q1x1NEY2MFx1NEUwRFx1OTcwMFx1ODk4MVx1OEJDNFx1OEJCQVx1RkYwQ1x1NTNFRlx1NEVFNVx1NzZGNFx1NjNBNVx1NTIyMFx1OTY2NCBjb21tZW50IFx1OTE0RFx1N0Y2RVx1RkYwQ1xyXG4gICAgLy8gXHU0RUU1XHU0RTBCXHU5MTREXHU3RjZFXHU0RUM1XHU0RjlCXHU0RjUzXHU5QThDXHVGRjBDXHU1OTgyXHU2NzlDXHU0RjYwXHU5NzAwXHU4OTgxXHU4QkM0XHU4QkJBXHVGRjBDXHU4QkY3XHU4MUVBXHU4ODRDXHU5MTREXHU3RjZFXHU1RTc2XHU0RjdGXHU3NTI4XHU4MUVBXHU1REYxXHU3Njg0XHU3M0FGXHU1ODgzXHVGRjBDXHU4QkU2XHU4OUMxXHU2NTg3XHU2ODYzXHUzMDAyXHJcbiAgICAvLyBcdTRFM0FcdTRFODZcdTkwN0ZcdTUxNERcdTYyNTNcdTYyNzBcdTRFM0JcdTk4OThcdTVGMDBcdTUzRDFcdTgwMDVcdTRFRTVcdTUzQ0FcdTZEODhcdTgwMTdcdTRFRDZcdTc2ODRcdThENDRcdTZFOTBcdUZGMENcdThCRjdcdTRFMERcdTg5ODFcdTU3MjhcdTRGNjBcdTc2ODRcdTZCNjNcdTVGMEZcdTczQUZcdTU4ODNcdTRFMkRcdTc2RjRcdTYzQTVcdTRGN0ZcdTc1MjhcdTRFMEJcdTUyMTdcdTkxNERcdTdGNkUhISEhIVxyXG4gICAgY29tbWVudDoge1xyXG4gICAgICAvLyBVc2luZyBHaXNjdXNcclxuICAgICAgLyoqXHJcbiAgICAgIHByb3ZpZGVyOiBcIkdpc2N1c1wiLFxyXG4gICAgICByZXBvOiBcInZ1ZXByZXNzLXRoZW1lLWhvcGUvZ2lzY3VzLWRpc2N1c3Npb25zXCIsXHJcbiAgICAgIHJlcG9JZDogXCJSX2tnRE9HX1B0MkFcIixcclxuICAgICAgY2F0ZWdvcnk6IFwiQW5ub3VuY2VtZW50c1wiLFxyXG4gICAgICBjYXRlZ29yeUlkOiBcIkRJQ19rd0RPR19QdDJNNENPRDY5XCIsXHJcbiAgICAgICovXHJcblxyXG4gICAgICAvLyBVc2luZyBUd2lrb29cclxuICAgICAgcHJvdmlkZXI6IFwiVHdpa29vXCIsXHJcbiAgICAgIGVudklkOiBcImh0dHBzOi8vdHdpa29vLXFzcXoudmVyY2VsLmFwcC9cIixcclxuXHJcbiAgICAgIC8vIFVzaW5nIFdhbGluZVxyXG4gICAgICAvLyBwcm92aWRlcjogXCJXYWxpbmVcIixcclxuICAgICAgLy8gc2VydmVyVVJMOiBcImh0dHBzOi8vdnVlcHJlc3MtdGhlbWUtaG9wZS1jb21tZW50LnZlcmNlbC5hcHBcIixcclxuICAgIH0sXHJcblxyXG4gICAgbWRFbmhhbmNlOiB7XHJcbiAgICAgIGVuYWJsZUFsbDogdHJ1ZSxcclxuICAgICAgcHJlc2VudGF0aW9uOiB7XHJcbiAgICAgICAgcGx1Z2luczogW1wiaGlnaGxpZ2h0XCIsIFwibWF0aFwiLCBcInNlYXJjaFwiLCBcIm5vdGVzXCIsIFwiem9vbVwiXSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzovdnVlcHJlc3MtYmxvZy9kb2NzLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcdnVlcHJlc3MtYmxvZ1xcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxuYXZiYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L3Z1ZXByZXNzLWJsb2cvZG9jcy8udnVlcHJlc3MvbmF2YmFyLnRzXCI7aW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5hdmJhcihbXHJcbiAgXCIvXCIsXHJcbiAgLy9cIi9ob21lXCIsXHJcbiAgLy97IHRleHQ6IFwiXHU0RjdGXHU3NTI4XHU2MzA3XHU1MzU3XCIsIGljb246IFwiY3JlYXRpdmVcIiwgbGluazogXCIvZ3VpZGUvXCIgfSxcclxuICB7IHRleHQ6IFwiSmF2YVwiLCBpY29uOiBcImphdmFcIiwgbGluazogXCIvMDFqYXZhL1wiIH0sXHJcbiAgeyB0ZXh0OiBcIlx1Njg0Nlx1NjdCNlwiLCBpY29uOiBcImxlYWZcIiwgbGluazogXCIvMjBmcmFtZS9cIiB9LFxyXG4gIHsgdGV4dDogXCJcdTdCOTdcdTZDRDVcIiwgaWNvbjogXCJkYXJ0XCIsIGxpbms6IFwiLzQwYWxnby9cIiB9LFxyXG4gIHtcclxuICAgIHRleHQ6IFwiXHU5NjhGXHU3QjE0XCIsXHJcbiAgICBpY29uOiBcImVkaXRcIixcclxuICAgIHByZWZpeDogXCIvcG9zdHMvXCIsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogXCJcdTYyODBcdTY3MkZcIixcclxuICAgICAgICBpY29uOiBcImVkaXRcIixcclxuXHRcdHByZWZpeDogXCJ0ZWNoL1wiLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICB7IHRleHQ6IFwidHlwb3JhIFx1NUZFQlx1NjM3N1x1OTUyRVwiLCBpY29uOiBcImVkaXRcIiwgbGluazogXCJ0eXBvcmFtYXBrZXlcIiB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NjU4N1x1N0FFMCAyXCIsIGljb246IFwiZWRpdFwiLCBsaW5rOiBcImFydGljbGUyXCIgfSxcclxuICAgICAgICAgIFwiYXJ0aWNsZTNcIixcclxuICAgICAgICAgIFwiYXJ0aWNsZTRcIixcclxuICAgICAgICBdLFxyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gIH0sXHJcbiAgXHJcbiAgLyoqe1xyXG4gICAgdGV4dDogXCJcdTUzNUFcdTY1ODdcIixcclxuICAgIGljb246IFwiZWRpdFwiLFxyXG4gICAgcHJlZml4OiBcIi9wb3N0cy9cIixcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlx1NjU4N1x1N0FFMCAxLTRcIixcclxuICAgICAgICBpY29uOiBcImVkaXRcIixcclxuICAgICAgICBwcmVmaXg6IFwiYXJ0aWNsZS9cIixcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NjU4N1x1N0FFMCAxXCIsIGljb246IFwiZWRpdFwiLCBsaW5rOiBcImFydGljbGUxXCIgfSxcclxuICAgICAgICAgIHsgdGV4dDogXCJcdTY1ODdcdTdBRTAgMlwiLCBpY29uOiBcImVkaXRcIiwgbGluazogXCJhcnRpY2xlMlwiIH0sXHJcbiAgICAgICAgICBcImFydGljbGUzXCIsXHJcbiAgICAgICAgICBcImFydGljbGU0XCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6IFwiXHU2NTg3XHU3QUUwIDUtMTJcIixcclxuICAgICAgICBpY29uOiBcImVkaXRcIixcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIlx1NjU4N1x1N0FFMCA1XCIsXHJcbiAgICAgICAgICAgIGljb246IFwiZWRpdFwiLFxyXG4gICAgICAgICAgICBsaW5rOiBcImFydGljbGUvYXJ0aWNsZTVcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiXHU2NTg3XHU3QUUwIDZcIixcclxuICAgICAgICAgICAgaWNvbjogXCJlZGl0XCIsXHJcbiAgICAgICAgICAgIGxpbms6IFwiYXJ0aWNsZS9hcnRpY2xlNlwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwiYXJ0aWNsZS9hcnRpY2xlN1wiLFxyXG4gICAgICAgICAgXCJhcnRpY2xlL2FydGljbGU4XCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgeyB0ZXh0OiBcIlx1NjU4N1x1N0FFMCA5XCIsIGljb246IFwiZWRpdFwiLCBsaW5rOiBcImFydGljbGU5XCIgfSxcclxuICAgICAgeyB0ZXh0OiBcIlx1NjU4N1x1N0FFMCAxMFwiLCBpY29uOiBcImVkaXRcIiwgbGluazogXCJhcnRpY2xlMTBcIiB9LFxyXG4gICAgICBcImFydGljbGUxMVwiLFxyXG4gICAgICBcImFydGljbGUxMlwiLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6IFwiXHU0RTNCXHU5ODk4XHU2NTg3XHU2ODYzXCIsXHJcbiAgICBpY29uOiBcIm5vdGVcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly92dWVwcmVzcy10aGVtZS1ob3BlLmdpdGh1Yi5pby92Mi96aC9cIixcclxuICB9LCovXHJcbl0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6L3Z1ZXByZXNzLWJsb2cvZG9jcy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXHZ1ZXByZXNzLWJsb2dcXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcc2lkZWJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovdnVlcHJlc3MtYmxvZy9kb2NzLy52dWVwcmVzcy9zaWRlYmFyLnRzXCI7aW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaWRlYmFyKHtcclxuICBcIi8wMWphdmEvXCI6IFwic3RydWN0dXJlXCIsXHJcbiAgXCIvMjBmcmFtZS9cIjogXCJzdHJ1Y3R1cmVcIixcclxuICBcIi80MGFsZ28vXCI6IFwic3RydWN0dXJlXCIsXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBRLFNBQVMsb0JBQW9CO0FBQ3ZTLFNBQVMsd0JBQXdCOzs7QUNEdU8sU0FBUyxpQkFBaUI7OztBQ0F4QixTQUFTLGNBQWM7QUFFalMsSUFBTyxpQkFBUSxPQUFPO0FBQUEsRUFDcEI7QUFBQSxFQUdBLEVBQUUsTUFBTSxRQUFRLE1BQU0sUUFBUSxNQUFNLFdBQVc7QUFBQSxFQUMvQyxFQUFFLE1BQU0sZ0JBQU0sTUFBTSxRQUFRLE1BQU0sWUFBWTtBQUFBLEVBQzlDLEVBQUUsTUFBTSxnQkFBTSxNQUFNLFFBQVEsTUFBTSxXQUFXO0FBQUEsRUFDN0M7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxNQUNSO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDWixRQUFRO0FBQUEsUUFDRixVQUFVO0FBQUEsVUFDUixFQUFFLE1BQU0sNkJBQWMsTUFBTSxRQUFRLE1BQU0sZUFBZTtBQUFBLFVBQ3pELEVBQUUsTUFBTSxrQkFBUSxNQUFNLFFBQVEsTUFBTSxXQUFXO0FBQUEsVUFDL0M7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQStDRixDQUFDOzs7QUN6RTJRLFNBQVMsZUFBZTtBQUVwUyxJQUFPLGtCQUFRLFFBQVE7QUFBQSxFQUNyQixZQUFZO0FBQUEsRUFDWixhQUFhO0FBQUEsRUFDYixZQUFZO0FBQ2QsQ0FBQzs7O0FGRkQsSUFBTyxnQkFBUSxVQUFVO0FBQUEsRUFDdkIsVUFBVTtBQUFBLEVBRVYsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLEVBQ1A7QUFBQSxFQUVBLFlBQVk7QUFBQSxFQUVaLE1BQU07QUFBQSxFQUVOLE1BQU07QUFBQSxFQUdOLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLFlBQVk7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxJQUNMLE9BQU87QUFBQSxJQUNQLFFBQVE7QUFBQSxFQUNWO0FBQUEsRUFHQSxjQUFjO0FBQUEsSUFDWixNQUFNLENBQUMsT0FBTztBQUFBLElBQ2QsUUFBUSxDQUFDLFNBQVMsUUFBUTtBQUFBLElBQzFCLE9BQU8sQ0FBQyxZQUFZLFFBQVEsU0FBUztBQUFBLEVBQ3ZDO0FBQUEsRUFNQSxRQUFRO0FBQUEsRUFHUixTQUFTO0FBQUEsRUFFVCxRQUFRO0FBQUEsRUFFUixlQUFlO0FBQUEsRUFHZixVQUFVLENBQUMsUUFBUSxhQUFhO0FBQUEsRUFzQ2hDLFNBQVM7QUFBQSxJQUNQLFFBQVE7QUFBQSxNQUNOLHVCQUF1QixDQUFDLE1BQU07QUFBQSxJQUNoQztBQUFBLEVBQ0Y7QUFBQSxFQUVBLFNBQVM7QUFBQSxJQVFQLFNBQVM7QUFBQSxNQVdQLFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxJQUtUO0FBQUEsSUFFQSxXQUFXO0FBQUEsTUFDVCxXQUFXO0FBQUEsTUFDWCxjQUFjO0FBQUEsUUFDWixTQUFTLENBQUMsYUFBYSxRQUFRLFVBQVUsU0FBUyxNQUFNO0FBQUEsTUFDMUQ7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7OztBRDFIRCxJQUFPLGlCQUFRLGlCQUFpQjtBQUFBLEVBQzlCLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUViLE1BQU07QUFBQSxFQUNOLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLFFBQVEsTUFBTSxZQUFZLENBQUMsQ0FBQztBQUFBLEVBRW5ELFNBQVM7QUFBQSxJQUNQLGFBQWE7QUFBQSxNQUNYLFNBQVM7QUFBQSxRQUNQLEtBQUs7QUFBQSxVQUNILGFBQWE7QUFBQSxRQUNmO0FBQUEsTUFDRjtBQUFBLE1BQ0EsZ0JBQWdCO0FBQUEsSUFDbEIsQ0FBQztBQUFBLEVBWUg7QUFBQSxFQUVBO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
