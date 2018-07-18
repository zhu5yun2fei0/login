import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/Index'
import Login from '@/view/Login'
import Regist from '@/view/Regist'
import Home from '@/view/Home'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/regist',
      name: 'Regist',
      component: Regist
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]

})
