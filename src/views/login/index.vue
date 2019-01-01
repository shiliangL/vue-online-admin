<template>
  <div class="login flex-box">
    <!-- 登录页面 -->
    <div class="content">
      <flexbox>
        <flexbox-item>
          <Logo/>
        </flexbox-item>
      </flexbox>
      <group class="input-group">
        <x-input label-width="3em" title="用户" :is-type="beType" placeholder="请输入用户名称"/>
        <x-input label-width="3em" title="密码" :is-type="beType" placeholder="请输入用户名称"/>
      </group>
      <div class="p10">
        <flexbox>
          <flexbox-item>
            <x-button plain type="primary" @click.native.stop="navigationTo(1)">登录</x-button>
          </flexbox-item>
          <flexbox-item>
            <x-button plain type="warn" @click.native.stop="navigationTo(0)">注册</x-button>
          </flexbox-item>
        </flexbox>
      </div>
    </div>
  </div>
</template>


<script>
import { Logo } from '@/components'
import { TabItem } from 'vux'

export default {
  name: 'login',
  components: {
    Logo,
    TabItem
  },
  data () {
    return {}
  },
  methods: {
    beType () {
      return true
    },
    navigationTo (e) {
      // // js阻止冒泡事件
      // if (e && e.stopPropagation) {
      //   // 因此它支持W3C的stopPropagation()方法
      //   e.stopPropagation()
      // } else {
      //   // 否则，我们需要使用IE的方式来取消事件冒泡
      //   window.event.cancelBubble = true
      //   return false
      // }

      // // js阻止默认事件
      // // 如果提供了事件对象，则这是一个非IE浏览器
      // if (e && e.preventDefault) {
      //   // 阻止默认浏览器动作(W3C)
      //   e.preventDefault()
      // } else {
      //   // IE中阻止函数器默认动作的方式
      //   window.event.returnValue = false
      //   return false
      // }
      this.$router.push({ path: e ? '/' : '/register' })
    }
  }
}
</script>

<style scoped lang="less">
.login {
  height: 100%;
  background: #ffffff;
  .content {
    margin-top: -14.25rem;
    width: 100%;
    // padding: 0.625rem;
  }
}
.input-group {
  font-size: 0.625rem;
}
</style>
