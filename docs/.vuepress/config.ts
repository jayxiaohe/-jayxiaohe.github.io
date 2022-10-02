import { searchPlugin } from "@vuepress/plugin-search";
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "何鹏涛的数字花园",
  description: "HePengTao的博客",

  base: "/",
  head: [['link', { rel: 'icon', href: '/mrhe.png' }]],
  
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
      },
      maxSuggestions: 10,
    }),

    /*searchConsolePlugin({
      baiduId: '5ac4c710aadf202967aed6b86cfa8bb7',
    }) */

    /** Comment: {
      type: "waline",

      // waline 模式下
      serverURL: "...", // your serverURL
    }, */
  ],

  theme,
});
