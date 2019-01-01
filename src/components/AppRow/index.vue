<template>
  <div class="AppRow">
    <div class="row-media">
      <!-- <img src="" alt=""> -->
      <div class="tag">特惠</div>
    </div>
    <div class="row-content">
      <div class="title">OMEGA 欧米茄奇迹 Seamaster海马系列 Aqua Terra 220.10.41.21.02.001 男士机械腕表</div>
      <div class="price">$3658.75（需用码，约￥25200）</div>
      <div class="actions">
        <div class="actions-left"> 京东 | 2018年12月31日</div>
        <div class="actions-right">
          <span class="tips-tag plain">自营</span>
          <span>特价</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppRow'
}
</script>

<style scoped lang="less">
.AppRow {
  font-family: "微软雅黑";
  color: #333;
  display: flex;
  margin: 0 0 0.625rem;
  padding: 15px 0.625rem;
  background-color: #fff;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.3);

  .row-media {
    position: relative;
    background: #432323;
    min-width: 105px;
    width: 105px;
    height: 105px;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    overflow: hidden;
    margin-right: 10px;
    .tag {
      position: absolute;
      top: 0;
      left: 0;
      padding-left: 8px;
      padding-right: 8px;
      line-height: 15px;
      border-radius: 2px;
      height: 15px;
      max-width: 84px;
      font-size: 11px;
      color: #fff;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: left;
      background-color: rgba(240, 72, 72, 0.8);
    }
  }

  .row-content {
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex: 1;
    flex-flow: row wrap;
    align-content: space-between;
    min-height: 4.25rem;
    .title {
      width: 100%;
      font-size: 0.875rem;
      line-height: 1.5rem;
      height: 3rem;
      overflow: hidden;
      margin-bottom: 0.0625rem;
      font-weight: 600;

      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .price {
      color: #f04848;
      font-size: 0.9375rem;
      white-space: nowrap;
      overflow: hidden;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
    }

    .actions {
      color: #888;
      font-size: .75rem;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      width: 100%;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }
  }

}
</style>
