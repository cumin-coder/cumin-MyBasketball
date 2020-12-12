<template>
  <div class="upload-container">
    <vButton icon="weapp-nav" type="primary" color="#6495ED" @click="onClickSend"></vButton>
    <Popup
      v-model="popupShow"
      position="right"
      :style="{ width: '100%', height: '100%' }"
      get-container="body"
      duration="0.2"
    >
      <NavBar
        title="发布内容"
        right-text="发表"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRightSend"
      />
      <Field
        v-model="fieldValue"
        left-icon="smile-o"
        placeholder="请为此图片配上合适的段子"
        maxlength="26"
        show-word-limit
        ref="input"
      />
      <vUploader :after-read="afterRead" v-model="fileList" max-count="1"/>
    </Popup>
  </div>
</template>

<script>
import {Uploader, Button, Popup, NavBar, Field} from 'vant'
import {$upload} from '@/network/upload'

export default {
  name: 'Upload',
  components: {
    vUploader: Uploader,
    vButton: Button,
    Popup,
    NavBar,
    Field
  },
  data () {
    return {
      popupShow: false, // 是否显示上传组件
      fieldValue: '', // 文本框的值
      fileList: [], // 存储图片的数据
      imageUrl: ''
    }
  },
  mounted () {
  },
  methods: {
    onClickSend () {
      this.popupShow = true
      // 进入就此页面就立即获取到焦点
      this.$nextTick(() => {
        this.$refs.input.focus()
      })
    },
    onClickLeft () {
      this.popupShow = false
    },
    onClickRightSend () {
      // 获取用户输入的文本
      // eslint-disable-next-line no-unused-vars
      const userInputText = this.fieldValue
      // 获取用户上传的图片
      // 发起请求
      console.log('send request')
    },
    async afterRead (file) {
      file.status = 'uploading'
      file.message = '上传中...'
      const {content} = file
      const {lastModified, name, size} = file.file
      let key = new Date().getTime()

      // 此时可以自行将文件上传至服务器
      let fd = new FormData()
      fd.append('singleload', file.file, `lzl_${lastModified}${key}${size}${name}`)
      this.fileList['url'] = content
      const result = await $upload(fd)
      console.log(result.data.url)
      file.message = '完成'
      file.status = 'done '
    }
  }
}
</script>

<style scoped>
  .upload-container {
    position: fixed;
    bottom: 60px;
    right: 10px;
    z-index: 1;
  }

  /deep/ .van-button {
    border-radius: 50%;
    box-shadow: 0px 2px 8px 0px #3b3b3b;
  }

  /deep/ .van-uploader {
    margin: 20px 0 0 20px;
  }
</style>
