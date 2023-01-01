import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  // "/zh/",
  { text: "主页", icon: "home", link: "/" },
  { text: "Java", icon: "java1", link: "/01java/" },
  { text: "框架", icon: "framework", link: "/20frame/" },
  { text: "算法", icon: "algo", link: "/40algo/" },
  { text: "工具", icon: "ruanjian", link: "/50tools/" },
  { text: "随笔", icon: "essay", link: "/posts/" },
  { text: "关于", icon: "about", link: "/about/" },
  // {
  //   text: "随笔",
  //   icon: "essay",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "技术",
  //       icon: "edit",
	// 	prefix: "tech/",
  //       children: [
  //         { text: "typora 快捷键", icon: "edit", link: "typoramapkey" },
  //         { text: "文章 2", icon: "edit", link: "article2" },
  //         "article3",
  //         "article4",
  //       ],
  //     }
  //   ],
  // },

]);
