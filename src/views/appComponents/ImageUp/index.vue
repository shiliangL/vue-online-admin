<template>
  <div>
    图片上传组件页面
    <Row>
      <i-col span="12">
        <Card>
          <div class="cropper-example cropper-first">
            <CropperImgs
              :src="exampleImageSrc"
              crop-button-text="确认提交"
              @on-crop="handleCroped"
            />
          </div>
        </Card>
      </i-col>
    </Row>
  </div>
</template>

<script>
import { CropperImgs } from '@/components'
export default {
  name: 'ImageUpPage',
  components: {
    CropperImgs
  },
  data () {
    return {
      exampleImageSrc: ''
    }
  },
  methods: {
    handleCroped (blob) {
      console.log(blob, 'sb')
      // const formData = new FormData()
      // formData.append('croppedImg', blob)
      // uploadImg(formData).then(() => {
      //   this.$Message.success('Upload success~')
      // })
    }
  }
}
</script>
