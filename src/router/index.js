import Vue from 'vue'
import Router from 'vue-router'
import goods from '../components/goods/goods.vue'
import home from '../components/home/home.vue'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    }
  ]
})
