<template>
  <div class="layout" style="height:100%;">
    <view-box ref="viewBox">
      <AppHeader
        slot="header"
        title="EA-mall"
        style="width:100%;position:absolute;left:0;top:0;z-index:100;"
      />

      <div class="router">
        <transition name="slide-fade">
          <router-view/>
        </transition>
      </div>

      <AppTabBar slot="bottom"/>
    </view-box>
  </div>
</template>

<script>
import { AppHeader, AppTabBar } from '@/components'
export default {
  name: 'layout',
  components: {
    AppHeader,
    AppTabBar
  }
}
</script>

<style scoped>
</style>
