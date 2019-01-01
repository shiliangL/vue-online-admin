<template>
  <div style="height:100%;">
    <view-box ref="viewBox">
      <AppHeader slot="header" :leftOptions="leftOptions" title="用户注册"/>
      <!-- <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;"></x-header> -->
      <form>
        <group class="input-group">
          <x-input
            required
            @on-click-clear-icon="clickToClear($event)"
            label-width="3.925rem"
            title="邮箱"
            :is-type="beType"
            placeholder="请输入"
          />
          <x-input
            required
            @on-click-clear-icon="clickToClear($event)"
            label-width="3.925rem"
            title="登录密码"
            :is-type="beType"
            placeholder="请输入"
          />
          <x-input
            required
            @on-click-clear-icon="clickToClear($event)"
            label-width="3.925rem"
            title="确认密码"
            :is-type="beType"
            placeholder="请输入"
          />
          <x-input
            required
            @on-click-clear-icon="clickToClear($event)"
            label-width="3.925rem"
            title=" 手机号"
            :is-type="validPhone"
            placeholder="请输入"
          />
          <x-input
            required
            @on-click-clear-icon="clickToClear($event)"
            label-width="3.925rem"
            title="验证码"
            class="weui-vcode"
          >
            <x-button slot="right" type="primary" @click.native.stop="getCode" mini>获取验证码</x-button>
          </x-input>
        </group>

        <div slot="bottom">
          <div class="p10">
            <flexbox>
              <flexbox-item>
                <x-button plain action-type="submit" type="primary">注册</x-button>
              </flexbox-item>
              <!-- <flexbox-item>
            <x-button plain type="warn" @click.native.stop="navigationTo">重置</x-button>
              </flexbox-item>-->
            </flexbox>
          </div>
        </div>
      </form>
    </view-box>
  </div>
</template>

<script>
import { AppHeader } from '@/components'
import rules from '@/public/rules/index.js'

export default {
  name: 'register',
  mixins: [rules],
  components: {
    AppHeader
  },
  data () {
    return {
      iconType: '',
      leftOptions: {
        showBack: true
      },
      beType: value => {
        console.log(value, 'xx')
        return true
      },
      ischeck: null
    }
  },
  mounted () {},
  methods: {
    navigationTo () {},
    getCode () {
      console.log('xx')
    },
    clickToClear (e) {
      console.log(e, 'x')
      this.iconType = ''
    }
  }
}
</script>

<style scoped>
.x-check {
  margin: 0.625rem;
}
</style>
