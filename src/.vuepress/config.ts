import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  
  lang: "zh-CN",
  title: "Mr.He",
  description: "vuepress博客，主要记录Java相关笔记",

  theme,

  // 和 PWA 一起启用
  shouldPrefetch: false,
  
  head: [
	['script', {type: 'text/javascript', src: '/js/linkcard.js'}]
  ],
});
