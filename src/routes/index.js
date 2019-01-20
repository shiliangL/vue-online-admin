import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/layout'

const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)
const constantRouters = [
  {
    path: '/login',
    name: 'login',
    component: _import('login/index'),
    hidden: true
  },
  {
    path: '/register',
    name: 'register',
    component: _import('register/index'),
    hidden: true
  },
  {
    path: '/',
    component: Home,
    redirect: 'home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: _import('home/index')
      },
      {
        path: '/classType',
        name: 'classType',
        component: _import('classType/index')
      },
      {
        path: '/find',
        name: 'find',
        component: _import('find/index')
      },
      {
        path: '/wode',
        name: 'wode',
        component: _import('wode/index')
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: _import('error404/index'),
    hidden: true
  },
  {
    path: '*',
    component: _import('error404/index'),
    hidden: true
  }

]

export default new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouters
})
