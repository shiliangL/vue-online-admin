<template>
  <div class="cropper-wrapper">
    <div class="img-box">
      <img class="cropper-image" :id="imgId" alt>
    </div>
    <div class="right-con">
      <div v-if="preview" class="preview-box" :id="previewId"></div>
      <div class="button-box">
        <slot>
          <Upload
            :data="upData"
            :on-success="upScuccess"
            action="http://up-z2.qiniu.com"
            :before-upload="beforeUpload"
          >
            <Button style="width: 150px;" type="primary">上传图片</Button>
          </Upload>
        </slot>
        <div v-show="insideSrc">
          <Button type="primary" @click="rotate">
            <Icon type="md-refresh" :size="18"/>
          </Button>
          <Button type="primary" @click="shrink">
            <Icon type="md-remove" :size="18"/>
          </Button>
          <Button type="primary" @click="magnify">
            <Icon type="md-add" :size="18"/>
          </Button>
          <Button type="primary" @click="scale('X')">
            <Icon custom="iconfont icon-shuipingfanzhuan" :size="18"/>
          </Button>
          <Button type="primary" @click="scale('Y')">
            <Icon custom="iconfont icon-chuizhifanzhuan" :size="18"/>
          </Button>
          <Button type="primary" @click="move(0, -moveStep)">
            <Icon type="md-arrow-round-up" :size="18"/>
          </Button>
          <Button type="primary" @click="move(-moveStep, 0)">
            <Icon type="md-arrow-round-back" :size="18"/>
          </Button>
          <Button type="primary" @click="move(0, moveStep)">
            <Icon type="md-arrow-round-down" :size="18"/>
          </Button>
          <Button type="primary" @click="move(moveStep, 0)">
            <Icon type="md-arrow-round-forward" :size="18"/>
          </Button>
          <Button
            style="width: 150px;margin-top: 10px;"
            type="primary"
            @click="crop"
          >{{ cropButtonText }}</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'cropperjs/dist/cropper.min.css'
import Cropper from 'cropperjs'
export default {
  name: 'CropperImgs',
  props: {
    src: {
      type: String,
      default: ''
    },
    preview: {
      type: Boolean,
      default: true
    },
    moveStep: {
      type: Number,
      default: 4
    },
    cropButtonText: {
      type: String,
      default: '裁剪'
    }
  },
  data () {
    return {
      upData: {
        token:
          'VT-UD9gtywfdUN01x9PVKjk5nasF6J-8a409Wjbd:gufWG_BtArIZhbXk8aQ0btMvorg=:eyJzY29wZSI6ImNtbWJ1Y2tldCIsImNhbGxiYWNrVXJsIjoiaHR0cDovLzM5LjEwOC4yMzUuNi9jbW0vY2FsbGJhY2svcWluaXVfb3NzX3VwbG9hZCIsImRlYWRsaW5lIjoxNTQ1NzQxNjkzLCJjYWxsYmFja0JvZHkiOiJuYW1lXHUwMDNkJChmbmFtZSlcdTAwMjZidWNrZXRcdTAwM2QkKGJ1Y2tldClcdTAwMjZrZXlcdTAwM2QkKGtleSlcdTAwMjZoYXNoXHUwMDNkJChldGFnKVx1MDAyNmV4dFx1MDAzZCQoeDpleHQpIn0='
      },
      cropper: null,
      insideSrc: ''
    }
  },
  computed: {
    imgId () {
      return `cropper${this._uid}`
    },
    previewId () {
      return `cropper_preview${this._uid}`
    }
  },
  watch: {
    src (src) {
      this.replace(src)
    },
    insideSrc (src) {
      this.replace(src)
    }
  },
  methods: {
    beforeUpload (file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = event => {
        this.insideSrc = event.srcElement.result
      }
      return false
    },
    upScuccess () {},
    replace (src) {
      this.cropper.replace(src)
      this.insideSrc = src
    },
    rotate () {
      this.cropper.rotate(90)
    },
    shrink () {
      this.cropper.zoom(-0.1)
    },
    magnify () {
      this.cropper.zoom(0.1)
    },
    scale (d) {
      this.cropper[`scale${d}`](-this.cropper.getData()[`scale${d}`])
    },
    move (...argu) {
      this.cropper.move(...argu)
    },
    crop () {
      this.cropper
        .getCroppedCanvas({
          width: 90,
          height: 90,
          minWidth: 90,
          minHeight: 90,
          maxWidth: 90,
          maxHeight: 90
        })
        .toBlob(blob => {
          // 测试
          let filedata = new FormData()
          filedata.append('file', blob)
          filedata.append('token', this.upData.token)
          let request = new Request('http://up-z2.qiniu.com', {
            method: 'POST',
            body: filedata
          })
          fetch(request)
            .then(response => response.json())
            .then(result => {
              console.error(result)
            })

          this.$emit('on-crop', blob)
        })
    }
  },
  mounted () {
    this.$nextTick().then(() => {
      let dom = document.getElementById(this.imgId)
      this.cropper = new Cropper(dom, {
        preview: `#${this.previewId}`,
        checkCrossOrigin: true
      })
    })
    // this.$nextTick(() => {
    //   let dom = document.getElementById(this.imgId)
    //   this.cropper = new Cropper(dom, {
    //     preview: `#${this.previewId}`,
    //     width: 160,
    //     height: 90,
    //     minWidth: 256,
    //     minHeight: 256,
    //     maxWidth: 4096,
    //     maxHeight: 4096,
    //     fillColor: '#fff',
    //     imageSmoothingEnabled: false,
    //     imageSmoothingQuality: 'high',
    //     checkCrossOrigin: true
    //   })
    // })
  }
}
</script>

<style lang="less" scope>
.bg {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC");
}
.cropper-wrapper {
  // width: 600px;
  height: 340px;
  .img-box {
    height: 340px;
    width: 430px;
    border: 1px solid #ebebeb;
    display: inline-block;
    .bg;
    img {
      max-width: 100%;
      display: block;
    }
  }
  .right-con {
    display: inline-block;
    width: 170px;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 10px;
    .preview-box {
      height: 150px !important;
      width: 100% !important;
      overflow: hidden;
      border: 1px solid #ebebeb;
      .bg;
    }
    .button-box {
      padding: 10px 0 0;
    }
  }
}
</style>
