import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 引入首页
import Home from '@/components/home/Home'
// 引入闪送超市页
import Supermarket from '@/components/supermarket/Supermarket'
// 引入购物车页
import ShoppingCart from '@/components/shoppingCart/ShoppingCart'
// 引入登录页面
import Login from '@/components/login/Login'
// 引入地址的页面
import Site from '@/components/site/Site'
// 引入添加地址的页面
import AddSite from '@/components/addSite/AddSite'
// 引入选择地址页面
import SelectSite from '@/components/selectSite/SelectSite'
// 引入我的页
import Mine from '@/components/mine/Mine'
// 引入详情页
import Particulars from '@/components/particulars/Particulars'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/supermarket',
      name: 'supermarket',
      component: Supermarket
    },
    {
      path: '/shoppingcart',
      name: 'shoppingcart',
      component: ShoppingCart
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/site',
      name: 'site',
      component: Site
    },
    {
      path: '/add-site',
      name: 'add-site',
      component: AddSite
    },
    {
      path: '/select-site',
      name: 'select-site',
      component: SelectSite
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/particulars',
      name: 'particulars',
      component: Particulars
    }
  ]
})
