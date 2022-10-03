import { searchPlugin } from "@vuepress/plugin-search";
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import theme from "./theme";
import meting from "vuepress-plugin-meting";

export default defineUserConfig({
  lang: "zh-CN",
  title: "何鹏涛的数字花园",
  description: "HePengTao的博客",

  base: "/",
  head: [['link', { rel: 'icon', href: '/mrhe.png' }]],

  plugins: [
    mdEnhancePlugin({
      // 启用自定义容器
      container: true,
      // 开启标记
      mark: true,
      // 启用图片标记
      imageMark: true,
      // 启用图片大小
      imageSize: true,
    }),

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
