<template>
  <div class="footer">
    <div class="icons" v-if="social && social.icons">
      <a
        :href="item.link"
        :title="item.title"
        :class="['iconfont', item.iconClass]"
        v-for="(item, index) in social.icons"
        :key="index"
        target="_blank"
      ></a>
    </div>

    <!--Vdoing主题遵循MIT协议，完全开源且免费。如果您对主题的修改并不大，希望您保留主题的链接。-->

    <template v-if="footer">
      Copyright © {{ footer.createYear }} - {{ new Date().getFullYear() }}
      <span v-html="footer.copyrightInfo"></span>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    social() {
      return this.$themeConfig.social
    },
    footer() {
	  	/*var span = document.createElement("span");
		// 这几个字母和符号宽度比较容易变化
		span.innerHTML = "gW@i#Q!T";
		// 设置为不可见，但可以测量宽度
		span.style.visibility = "hidden";
		// 字体大小为 500px，如果宽度变化比较容易区分
		span.style.fontSize = "500px";
		// 设置字体
		span.style.fontFamily = "HarmonyOS Sans SC";
		// 添加到页面
		document.body.appendChild(span);
		// 获取宽度
		var width_now = span.offsetWidth;
		// 每 0.05 秒检查一次是否加载
		
		var interval_check = setInterval(function() {
			// 宽度变化，说明字体被加载
			if(span.offsetWidth != width_now) {
				console.log("字体切换为 HarmonyOS Sans SC!");
				clearInterval(interval_check);
				// 设置字体为
				document.getElementsByTagName("html").style.fontFamily = "HarmonyOS Sans SC";
				// 移除 span
				document.body.removeChild(span);
				span = null;
			}
		}, 50);*/
	  //this.loadFont
	  return this.$themeConfig.footer
	}
  },

  methods: {
	loadFont() {
		alert("In.......");
		console.log("111111111111111111111111111111111");
		console.log("111111111111111111111111111111111");
		console.log("111111111111111111111111111111111");
		console.log("111111111111111111111111111111111");
		var span = document.createElement("span");
		// 这几个字母和符号宽度比较容易变化
		span.innerHTML = "gW@i#Q!T";
		// 设置为不可见，但可以测量宽度
		span.style.visibility = "hidden";
		// 字体大小为 500px，如果宽度变化比较容易区分
		span.style.fontSize = "500px";
		// 设置字体
		span.style.fontFamily = "HarmonyOS Sans SC";
		// 添加到页面
		document.body.appendChild(span);
		// 获取宽度
		var width_now = span.offsetWidth;
		// 每 0.05 秒检查一次是否加载
		
		var interval_check = setInterval(function() {
			// 宽度变化，说明字体被加载
			if(span.offsetWidth != width_now) {
				alert("字体切换！");
				clearInterval(interval_check);
				// 设置字体为
				document.getElementsByTagName("html").style.fontFamily = "HarmonyOS Sans SC";
				// 移除 span
				document.body.removeChild(span);
				span = null;
			}
		}, 50);
    }
  }  
}
</script>

<style lang='stylus'>
// $mobileSidebarWidth = $sidebarWidth * 0.82
.footer
  padding 5rem 1.5rem 2.5rem
  text-align center
  color #666
  box-sizing border-box
  font-size 0.85rem
  transition all 0.2s ease
  > span
    line-height 1.5rem
  .icons
    margin-bottom 12px
    .iconfont
      padding 0 10px
      font-size 1.3rem
  a
    color inherit
    &:hover
      color $accentColor
@media (min-width ($MQMobile + 1px))
  .sidebar-open .footer
    width auto
    padding-left: ($sidebarWidth + 1.5rem)
@media (min-width 1520px)
  .have-rightmenu .footer
    padding-right: ($rightMenuWidth + 1.5rem)
.no-sidebar .footer
  width auto
  padding-left 1.5rem  
</style>
