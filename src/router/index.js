import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/view/Login'
import welcome from '@/view/welcome'
import Home from '@/view/Home'

import oneFirst from '@/view/one/oneFirst'
import oneTwice from '@/view/one/oneTwice'
import oneThird from '@/view/one/oneThird'

import twoFirst from "@/view/two/twoFirst"
import twoTwice from "@/view/two/twoTwice"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      redirect:'/welcome',
      children:[
      	{
          path: '/welcome',
          name: 'welcome',
          component: welcome,
          meta: {
            keepAlive: true,
          }
        },
        {
          path: '/oneFirst',
          name: 'oneFirst',
          component: oneFirst,
          meta: {
            keepAlive: true,
          }
        },
        {
          path: '/oneTwice',
          name: 'oneTwice',
          component: oneTwice,
          meta: {
            keepAlive: true,
          }
        },
        {
          path: '/oneThird',
          name: 'oneThird',
          component: oneThird,
          meta: {
            keepAlive: true,
          }
        },
        {
          path: '/twoFirst',
          name: 'twoFirst',
          component: twoFirst,
          meta: {
            keepAlive: true,
          }
        },
        {
          path: '/twoTwice',
          name: 'twoTwice',
          component: twoTwice,
          meta: {
            keepAlive: true,
          }
        },
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path:'*',
      redirect:'/welcome'
    }
  ]
})
