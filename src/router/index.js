import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/views/layOut'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LayOut',
      redirect: 'dashboard',
      component: Layout,
      children: [{
        path: 'dashboard',
        name: 'dashboard',
        meta: { title: 'dashboard', noCache: true },
        component: _import('dashboard/index')
      }]
    },
    {
      path: '/goods',
      component: Layout,
      children: [
        {
          path: 'addgoods',
          name: 'addgoods',
          meta: { title: 'addgoods', noCache: true },
          component: _import('goods/addgoods/index')
        },
        {
          path: 'goodsList',
          name: 'goodsList',
          meta: { title: 'goodsList', noCache: true },
          component: _import('goods/goodsList/index')
        },
        {
          path: 'goodsClass',
          name: 'goodsClass',
          meta: { title: 'goodsClass', noCache: true },
          component: _import('goods/goodsClass/index')
        }
      ]
    },
    {
      path: '/app',
      component: Layout,
      children: [
        {
          path: 'imageUp',
          name: 'imageUp',
          meta: { title: 'imageUp', noCache: true },
          component: _import('appComponents/ImageUp/index')
        },
        {
          path: 'searchBar',
          name: 'searchBar',
          meta: { title: 'searchBar', noCache: true },
          component: _import('appComponents/SearchBar/index')
        },
        {
          path: 'textEditor',
          name: 'textEditor',
          meta: { title: 'textEditor', noCache: true },
          component: _import('appComponents/TextEditor/index')
        },
        {
          path: 'textMarkdown',
          name: 'textMarkdown',
          meta: { title: 'textMarkdown', noCache: true },
          component: _import('appComponents/TextMarkdown/index')
        }
      ]
    },
    { path: '/401', component: _import('errorPage/index'), hidden: true },
    { path: '/500', component: _import('errorPage/index'), hidden: true },
    { path: '*', component: _import('errorPage/index'), hidden: true }
  ]
})
