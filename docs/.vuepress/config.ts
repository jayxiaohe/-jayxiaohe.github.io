import { searchPlugin } from "@vuepress/plugin-search";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Mr.He",
      description: "何鹏涛的数字花园111",
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
