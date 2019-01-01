<template>
  <div>
    <x-button plain type="warn" @click.native.stop="navigationTo">注册</x-button>
  </div>
</template>

<script>
import { Logo } from '@/components'

export default {
  components: {
    Logo
  },
  name: 'code',
  data () {
    return {}
  },
  methods: {
    navigationTo () {
      this.$router.push({ path: '/register' })
    }
  }
}
</script>

<style scoped>
.text {
  /* css 超出2行 。。。 */
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
