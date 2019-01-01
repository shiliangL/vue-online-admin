// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import 'vux/src/styles/reset.less'
import 'vux/src/styles/1px.less'

import 'swiper/dist/css/swiper.css'
import '@/styles/index.less'
import App from './App'
import router from './routes'
import './components/global' // 全局公共组件

// if ('addEventListener' in document) {
//   document.addEventListener('DOMContentLoaded', () => {
//     FastClick.attach(document.body)
//   }, false)
// }

document.addEventListener('touch', (event) => {
  // 判断默认行为是否可以被禁用
  if (event.cancelable) {
    // 判断默认行为是否已经被禁用
    if (!event.defaultPrevented) {
      event.preventDefault()
      FastClick.attach(document.body)
    }
  }
}, false)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
