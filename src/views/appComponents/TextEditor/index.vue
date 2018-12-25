<template>
  <div>

    <text-editor
      ref="editor"
      class="text-editor"
      :on-success='upScuccess'
      :before-upload='beforeUpload'
      :content="value"
      :options = "editorOption"
      @change="onEditorChange($event)"/>

  </div>
</template>

<script>

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'

export default {
  name: 'TextEditorPage',
  props: {
    value: String,
    isDisables: {
      type: Boolean,
      default: false
    }
  },
  components: {
    TextEditor: quillEditor
  },
  data () {
    return {
      qnLocation: 'http://up-z2.qiniu.com',
      el_uploadData: {
        token: null
      },
      uploadType: null,
      content: '',
      editorOption: {
        placeholder: '...',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'], // toggled buttons
            [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
            [{ direction: 'rtl' }], // text direction

            [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
            [{ header: [1, 2, 3, 4, 5, 6, false] }],

            [{ color: [] }, { background: [] }], // dropdown with defaults from theme
            [{ font: [] }],
            [{ align: [] }],
            ['image']
          ]
        }
      }
    }
  },
  mounted () {
    // 为图片ICON绑定事件  getModule 为编辑器的内部属性
    setTimeout(() => {
      if (this.$refs.editor) {
        this.$refs.editor.quill.getModule('toolbar').addHandler('image', this.imgHandler)
      }
    }, 20)
  },
  methods: {
    Disables () {
      if (this.$refs.editor) this.$refs.editor.quill.enable(false)
    },
    onEditorChange (item) {
      this.$emit('input', item.html)
    },
    imgHandler (state) {
      console.log('自定义上传图片')
      // if (state) {
      //   this.uploadType = 'image'
      //   const fileInput = document.getElementById('btnUp')
      //   fileInput.click()
      // }
    },
    beforeUpload (file) {
      console.log(file)
    },
    upScuccess (e, file, fileList) {
      console.log(e, file, fileList)
    },
    el_beforeUpload () {},
    el_upScuccess (e, file, fileList) {
      console.log(e, file, fileList)
      if (e.code === '0') {
        const url = e.data.key
        if (url) {
          this.addRange = this.$refs.upload.quill.getSelection()
          this.$refs.upload.quill.insertEmbed(
            this.addRange !== null ? this.addRange.index : 0,
            this.uploadType,
            `http://p8cktaes1.bkt.clouddn.com/${url}`
          )
        }
      }
      // API: https://segmentfault.com/q/1010000008951906
      // this.$refs.myTextEditor.quillEditor.getSelection();
      // 获取光标位置对象，里面有两个属性，一个是index 还有 一个length，这里要用range.index，即当前光标之前的内容长度，然后再利用 insertEmbed(length, 'image', imageUrl)，插入图片即可。

      // if (this.uploadType === 'image') { // 获得文件上传后的URL地址
      //   url = STATICDOMAIN + e.key
      // }
      // if (url != null && url.length > 0) { // 将文件上传后的URL地址插入到编辑器文本中
      //   let value = url
      //   vm.addRange = vm.$refs.myQuillEditor.quill.getSelection()
      //   value = value.indexOf('http') !== -1 ? value : 'http:' + value
      //   vm.$refs.myQuillEditor.quill.insertEmbed(vm.addRange !== null ? vm.addRange.index : 0, vm.uploadType, value, Quill.sources.USER) // 调用编辑器的 insertEmbed 方法，插入URL
      // } else {
      //   vm.$message.error(`${vm.uploadType}插入失败`)
      // }
      this.$refs['el_upload'].clearFiles() // 插入成功后清除input的内容
    }
  }
}

</script>

<style lang="less">

.text-editor{

  .quill-editor {
    .ql-container {
      min-height: 460px;
    }
  }

  // .ql-snow .ql-editor img {
  //   max-width: 480px;
  // }

  .ql-editor{
    min-height: 460px;
    overflow-y: auto;
  }
}
</style>
