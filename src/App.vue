<template>
  <div id="app">
      <transition>
        <router-view/>
      </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
body {
  background-color: #fbf9fe;
}
</style>
