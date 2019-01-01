<template>
  <div style="height: 100%;">
    <view-box ref="viewBox">
      <AppAvatar/>
      <card :header="{title: ''}">
        <div slot="content" class="card-demo-flex">
          <div class="vux-1px-r">
            <span>1130</span>
            <br>
            {{ '积分' }}
          </div>
          <div class="vux-1px-r">
            <span>15</span>
            <br>
            {{ '优惠券' }}
          </div>
          <div class="vux-1px-r">
            <span>0</span>
            <br>
            {{ '余额' }}
          </div>
          <div>
            <span>88</span>
            <br>
            {{ '抵扣' }}
          </div>
        </div>
      </card>

      <group title>
        <cell title="我的足迹" is-link></cell>
        <cell title="我的订单" is-link></cell>
        <cell title="我的地址" is-link></cell>
      </group>

      <group title>
        <cell title="我的订单" is-link></cell>
        <cell title="我的收藏" is-link></cell>
      </group>

      <group title>
        <cell title="我的会员" is-link></cell>
        <cell title="服务中心" is-link></cell>
        <cell title="在线客服" is-link></cell>
      </group>

    </view-box>
  </div>
</template>

<script>
import { AppAvatar } from '@/components'
export default {
  name: 'wode',
  components: {
    AppAvatar
  }
}
</script>

<style scoped lang="less">
.card-demo-flex {
  display: flex;
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.card-demo-flex span {
  color: #f74c31;
}
</style>
