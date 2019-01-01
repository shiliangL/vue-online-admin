<template>
  <div class="Swiper">
    <!-- swiper -->
    <swiper :options="swiperOption" class="h230">
      <swiper-slide>
        <img src="https://haitao.nosdn1.127.net/7e177ba4-8c43-45f9-a3fe-2824e7a0af0bT1812281816_960_480.jpg?imageView&amp;thumbnail=750x0&amp;quality=95&amp;type=webp">
      </swiper-slide>
      <swiper-slide>
        <img src="https://haitao.nos.netease.com/0c97f740-8133-42b7-8db5-2ea2ad0a8286T1812291728_960_480.jpg?imageView&amp;thumbnail=750x0&amp;quality=95&amp;type=webp">
      </swiper-slide>
      <swiper-slide>
        <img src="https://haitao.nosdn2.127.net/bcb12290-adbd-4937-b3d6-892159688bb2T1812281442_960_480.jpg?imageView&amp;thumbnail=750x0&amp;quality=95&amp;type=webp">
      </swiper-slide>
      <swiper-slide>
        <img src="https://haitao.nosdn2.127.net/bcb12290-adbd-4937-b3d6-892159688bb2T1812281442_960_480.jpg?imageView&amp;thumbnail=750x0&amp;quality=95&amp;type=webp">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Swiper',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        effect: 'coverflow',
        // spaceBetween: 50,
        autoHeight: true, // enable auto height
        grabCursor: true,
        loop: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        centeredSlides: true,
        autoplay: {
          delay: 4500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.swiper-wrapper{
  .swiper-slide{
    margin: .375rem;
    img{
      width: 100%;
      overflow: hidden;
    }
  }
}
</style>
