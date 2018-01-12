// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 支持不同手机
import 'common/reset.js'
// 引入通用样式
import 'common/styles/reset.less'
Vue.config.productionTip = false
// 引入axios
import axios from 'axios'
Vue.prototype.$http = axios
// 引入addCart 自定义插件
import AddCart from './components/plugins/addCart/addCart'
Vue.use(AddCart)
// 引入组件里
// 引入mint ui
import {Lazyload, MessageBox} from 'mint-ui'
import 'mint-ui/lib/style.css'
// 图片懒加载
Vue.use(Lazyload)
// 提示框
Vue.prototype.$msg = MessageBox
// 监听全局路由变化 只要是点击进入这几个地址的 都显示tabBar组件
router.beforeEach((to, from, next) => {
  if (to.path === '/' || to.path === '/shoppingcart' || to.path === '/supermarket' || to.path === '/mine') {
    store.state.tabBarShow = true
  } else {
    store.state.tabBarShow = false
  }
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
