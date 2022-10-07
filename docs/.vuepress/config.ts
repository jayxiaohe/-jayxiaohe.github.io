import { searchPlugin } from "@vuepress/plugin-search";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Mr.He",
      description: "vuepress博客，主要记录Java相关笔记",
    },
  },

  plugins: [
    searchPlugin({
      // 你的选项
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
    }),
  ],

  theme,

  shouldPrefetch: false,
});
