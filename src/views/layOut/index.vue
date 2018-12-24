
<template>
  <div class="layout">

    <div class="layout-header">
      <!-- <div class="layout-logo"></div> -->
      <Menu mode="horizontal" active-name="1">
        <div class="layout-assistant">
          <Menu-item name="1">运营中心</Menu-item>
          <Menu-item name="2">客户中心</Menu-item>
          <Menu-item name="3">供应链</Menu-item>
        </div>
      </Menu>
    </div>
    <div class="layout-content-main">
      <div class="layout-content">
        <Row class="content-row">
          <i-col class="content-span" span="4">
            <Menu class="content-menu" width="auto" accordion>
              <Submenu name="1">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>商品管理
                </template>
                <Menu-item name="1-1">添加商品</Menu-item>
                <Menu-item name="1-2">商品列表</Menu-item>
                <Menu-item name="1-3">商品分类</Menu-item>
              </Submenu>
              <Submenu name="2">
                <template slot="title">
                  <Icon type="ios-keypad"></Icon>订单管理
                </template>
                <Menu-item name="2-1">订单列表</Menu-item>
                <Menu-item name="2-2">订单设置</Menu-item>
              </Submenu>
              <Submenu name="3">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>营销管理
                </template>
                <Menu-item name="3-1">品牌推荐</Menu-item>
                <Menu-item name="3-2">新品推荐</Menu-item>
                <Menu-item name="3-3">人气推荐</Menu-item>
                <Menu-item name="3-4">广告设置</Menu-item>
              </Submenu>
            </Menu>
          </i-col>
          <i-col class="content-span" span="20">
            <div class="layout-content-main">内容区域
              <router-view/>
            </div>
          </i-col>
        </Row>
      </div>
      <!-- <div class="layout-copy">2011-2016 &copy; TalkingData</div> -->
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="less">
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
  z-index: 9999;
}

.layout-assistant {
  padding-left: 330px;
}
.layout-breadcrumb {
  padding: 10px 15px 0;
}
.layout-content {
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
}
.layout-content-main {
  padding: 10px;
}
.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}
</style>
