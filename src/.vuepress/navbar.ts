import { navbar } from "vuepress-theme-hope";

export default navbar([
  // "/",
  // "/demo/",
   { text: "主页", icon: "home", link: "/" },
  { text: "Java", icon: "java1", link: "/01java/" },
  { text: "框架", icon: "framework", link: "/20frame/" },
  { text: "算法", icon: "algo", link: "/40algo/" },
  { text: "其他", icon: "others", link: "/45others/" },
  { text: "工具", icon: "ruanjian", link: "/50tools/" },
  { text: "随笔", icon: "essay", link: "/posts/" },
  { text: "关于", icon: "about", link: "/about" },
]);
