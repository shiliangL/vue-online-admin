<template>
  <div class="AppAvatar">
    <div class="user">
      <div class="userImg">
        <img
          src="https://y.gtimg.cn/music/photo_new/T002R800x800M000000ceWgY3iJIeG.jpg?max_age=2592000"
          alt
        >
      </div>

      <div class="title">shiliangL</div>
      <div class="desc"></div>
    </div>
    <div
      class="bg"
      style="background-image: url(&quot;https://y.gtimg.cn/music/photo_new/T002R800x800M000000ceWgY3iJIeG.jpg?max_age=2592000&quot;);"
    ></div>
    <div class="filter" ref="filter"></div>
  </div>
</template>

<script>
export default {
  name: 'AppAvatar'
}
</script>

<style scoped lang="less">
.AppAvatar {
  position: relative;
  overflow: hidden;
  text-align: center;
  height: 9rem;
  // background: #f74c31;
  .user {
    position: relative;
    margin: 0 auto;
    margin-top: 0.625rem;
    overflow: hidden;
    z-index: 3;

    .userImg {
      display: inline-block;
      width: 5.625rem;
      height: 5.625rem;
      background: #ffffff;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .title {
      color: #ffffff;
      font-size: 1.375rem;
      font-weight: 400;
    }
    .desc {
    }
  }
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  filter: blur(0.625rem);
  opacity: 0.6;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.filter {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 2;
  background: rgba(7, 17, 27, 0.4);
  background-color: rgba(0, 0, 0, 0.35);
}
</style>
