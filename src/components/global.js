// 全局组件 服务 对象等
import Vue from 'vue'
import {
  AppRow
} from '@/components'

import {
  XInput,
  Group,
  Cell,
  Card,
  Panel,
  Flexbox,
  ViewBox,
  FlexboxItem,
  Divider,
  XButton, Grid, GridItem
 } from 'vux'

const components = [
  AppRow,
  XInput,
  Group,
  Cell,
  Card,
  Panel,
  Flexbox,
  ViewBox,
  FlexboxItem,
  Divider,
  XButton, Grid, GridItem
]
const install = (Vue, opts) => {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

Vue.use(install)
