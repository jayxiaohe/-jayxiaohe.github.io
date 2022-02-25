/* eslint-disable no-proto */
import postMixin from '@theme/mixins/posts'
import localMixin from '@theme/mixins/locales'
import { interceptRouterError, fixRouterError404 } from '@theme/helpers/other'
import { install } from 'vue-demi'

// 引入element-ui-步骤1
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

export default ({
  Vue,
  siteData,
  isServer,
  router
}) => {
  install(Vue)
  Vue.mixin(postMixin)
  Vue.mixin(localMixin)
  // if (!isServer) {
  //   addScriptToHead('//kit.fontawesome.com/51b01de608.js')
  //   registerCodeThemeCss(siteData.themeConfig.codeTheme)
  // }

  interceptRouterError(router)
  fixRouterError404(router)
  // 引入element-ui-步骤2
  Vue.use(Element)
}
