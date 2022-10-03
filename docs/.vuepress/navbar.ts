import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  //"/home",
  //{ text: "使用指南", icon: "creative", link: "/guide/" },
  { text: "Java", icon: "java", link: "/01java/" },
  { text: "框架", icon: "leaf", link: "/20frame/" },
  { text: "算法", icon: "dart", link: "/40algo/" },
  { text: "工具", icon: "module", link: "/50tools/" },
  {
    text: "随笔",
    icon: "edit",
    prefix: "/posts/",
    children: [
      {
        text: "技术",
        icon: "edit",
		prefix: "tech/",
        children: [
          { text: "typora 快捷键", icon: "edit", link: "typoramapkey" },
          { text: "文章 2", icon: "edit", link: "article2" },
          "article3",
          "article4",
        ],
      }
    ],
  },
  
  /**{
    text: "博文",
    icon: "edit",
    prefix: "/posts/",
    children: [
      {
        text: "文章 1-4",
        icon: "edit",
        prefix: "article/",
        children: [
          { text: "文章 1", icon: "edit", link: "article1" },
          { text: "文章 2", icon: "edit", link: "article2" },
          "article3",
          "article4",
        ],
      },
      {
        text: "文章 5-12",
        icon: "edit",
        children: [
          {
            text: "文章 5",
            icon: "edit",
            link: "article/article5",
          },
          {
            text: "文章 6",
            icon: "edit",
            link: "article/article6",
          },
          "article/article7",
          "article/article8",
        ],
      },
      { text: "文章 9", icon: "edit", link: "article9" },
      { text: "文章 10", icon: "edit", link: "article10" },
      "article11",
      "article12",
    ],
  },
  {
    text: "主题文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },*/
]);
