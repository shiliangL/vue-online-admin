<template>
  <div class="error404 flex-box">
    <div class="mc">
      <img :src="imgSrc" class="imgException"/>
      <h3 class="title" v-text="title"></h3>
      <p class="description">
        {{description}}
        <a href="/"> 返回首页 </a>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'error404',
    data () {
      return {
        title: '404找不到页面',
        description: '2019南方看雪,太冷了没有您访问的页面',
        imgSrc: 'https://img.alicdn.com/tfs/TB1WNNxjBHH8KJjy0FbXXcqlpXa-780-780.png'
      }
    }
  }
</script>

<style scoped lang="less">
.error404{
  background: #ffffff;
  height: 100%;
  width: 100%;
  .mc{
    margin-top: -4.25rem;
    text-align: center;
  }
 img{
   display: inline-block;
   width: 80%;
   overflow: hidden;
 }
}
</style>
