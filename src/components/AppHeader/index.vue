<template>
  <x-header :left-options="initOptions">{{ title }}</x-header>
</template>

<script>

import { XHeader } from 'vux'
export default {
  name: 'AppHeader',
  props: {
    leftOptions: {
      type: Object,
      default: () => {
        return {

        }
      }
    },
    title: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  data () {
    return {
      initOptions: {
        showBack: false,
        backText: ''
      }
    }
  },
  components: {
    XHeader
  },
  mounted () {
    const {leftOptions} = this
    this.initOptions = Object.assign(this.initOptions, leftOptions)
  }
}
</script>



<style scoped>

</style>
