<template>
  <div>
    <Swiper/>
    <!-- @click.native="onClick(i)" -->
    <!-- <group>
      <cell title="公告">
        <div class="flex-box tips">
          <marquee style="flex: 2;">
            <marquee-item v-for="i in 5" :key="i">{{ 'JavaScript is the best language' }} {{i}}</marquee-item>
          </marquee>
          <div>查看</div>
        </div>
      </cell>
    </group>-->
    <!-- <group-title>{{ '区块标题' }}</group-title> -->
    <grid :show-vertical-dividers="false">
      <grid-item v-for="i in 5" :key="i">
        <div class="flex-box icon-grid" style="flex-direction: column;">
          <div>
            <i class="iconfont icon-youhuiquan"></i>
          </div>
          <span class="title"> 优惠券 </span>
        </div>
      </grid-item>
    </grid>

    <div v-for="item in 10" :key="item">
      <AppRow/>
    </div>

    <panel header="标题描述" :footer="footer" :list="list" type="5"/>
  </div>
</template>

<script>
import { Swiper } from '@/components'
import { Cell, Marquee, MarqueeItem } from 'vux'
export default {
  name: 'home',
  components: {
    Swiper,
    Cell,
    Marquee,
    MarqueeItem
  },
  data () {
    return {
      list: [
        {
          src:
            'http://ww1.sinaimg.cn/large/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
          fallbackSrc: '',
          title: '标题一',
          desc:
            '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: {
            path: '/find',
            replace: false
          }
        },
        {
          src:
            'http://ww1.sinaimg.cn/large/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
          fallbackSrc: '',
          title: '标题一',
          desc:
            '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: {
            path: '/find',
            replace: false
          }
        },
        {
          src:
            'http://ww1.sinaimg.cn/large/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
          fallbackSrc: '',
          title: '标题一',
          desc:
            '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: {
            path: '/find',
            replace: false
          }
        },
        {
          src:
            'http://ww1.sinaimg.cn/large/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
          fallbackSrc: '',
          title: '标题二',
          desc:
            '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: {
            path: '/wode',
            replace: false
          },
          meta: {
            source: '来源信息',
            date: '时间',
            other: '其他信息'
          }
        }
      ],
      footer: {
        title: 'more',
        url: 'http://vux.li'
      }
    }
  }
}
</script>

<style scoped lang="less">
.icon-grid {
  color:#f05657;
  .iconfont {
    font-size: 1.125rem;
  }
  .title{
    font-size: .75rem;
  }
}
</style>
