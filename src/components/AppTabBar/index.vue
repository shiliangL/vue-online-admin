<template>
  <tabbar>
    <tabbar-item
      v-for="(item,index) in TabBarOption"
      :key="index"
      :link="item.link"
      @on-item-click="clickTabbar"
      :selected="$route.path===item.link"
    >
      <i slot="icon" :class="item.class"/>
      <span slot="label">{{ item.title }}</span>
    </tabbar-item>
  </tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  name: 'AppTabBar',
  components: {
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      curIndex: 0,
      TabBarOption: [
        {
          title: '首页',
          badge: '',
          class: 'iconfont icon-shouye',
          link: '/home'
        },
        {
          title: '分类',
          badge: '',
          class: 'iconfont icon-fenlei',
          link: '/classType'
        },
        {
          title: '发现',
          badge: '',
          class: 'iconfont icon-faxian',
          link: '/find'
        },
        { title: '我的', badge: '', class: 'iconfont icon-wode', link: '/wode' }
      ]
    }
  },
  mounted () {
  },
  methods: {
    clickTabbar (e) {
      this.curIndex = e
    }
  }
}
</script>

<style scoped>
</style>
