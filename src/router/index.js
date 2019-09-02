import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index/Index'
import Info from '@/pages/Info/Info'
import Api from '@/pages/Api/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index,
    },
    {
      path: '/info',
      name: 'info',
      component: Info,
    },
    {
      path: '/api',
      component: Api,
    },
  ],
})
