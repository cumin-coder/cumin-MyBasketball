// import OSS from 'ali-oss'
// // import Vue from 'vue'
//
// // 配置信息
// const region = 'oss-cn-shenzhen'
// const accessKeyId = 'LTAI4G3ZKdsRrPFs1VDJs52T'
// const accessKeySecret = 'ZIa3rapzhxJFk3ZQlhuqRpkWrVlmGI'
// const bucket = 'picwei'
//
// let client = new OSS({
//   region: region,
//   accessKeyId: accessKeyId,
//   accessKeySecret: accessKeySecret,
//   bucket: bucket
// })
//
// const CooOss = function (file) {
//   console.log(file)
//   let objectKey = file.lastModified + '_' + file.name
//   client.put(objectKey, file)
// }
//
// // @param {上传是设置文件key , 一般为文件名称} objectKey ; @param {文件file} file
//
// //  上传
// // const CooOss = function (file) {
// //   if (this instanceof CooOss) {
// //     let objectKey = file.lastModified + '_' + file.name
// //     return new Promise((resolve, reject) => {
// //       client.put(objectKey, file).then(result => {
// //         resolve({
// //           code: 0,
// //           objectKey: objectKey,
// //           url: this.getOssFileUrl(objectKey),
// //           msg: 'ok'
// //         })
// //       }).catch(err => {
// //         console.error(err)
// //         console.error('上传出错了')
// //         // eslint-disable-next-line prefer-promise-reject-errors
// //         reject({code: -1, url: '', objectKey: '', msg: '上传出错了'})
// //       })
// //     })
// //   } else {
// //     return new CooOss(file)
// //   }
// // }
//
// // 下载
// // const downloadFile = function (key) {
// //   console.log(key)
// //   let url = client.signatureUrl(key)
// //   let Img = new Image(), dataURL = ''
// //   let fileName = key.substring(key.indexOf('_') + 1)
// //   Img.src = url
// //   Img.setAttribute('crossOrigin', 'Anonymous')
// //   Img.onload = function () {
// //     let canvas = document.createElement('canvas'),
// //       width = Img.width,
// //       height = Img.height
// //     canvas.width = width
// //     canvas.height = height
// //     canvas.getContext('2d').drawImage(Img, 0, 0, width, height)
// //     dataURL = canvas.toDataURL('image/png')
// //     let eleLink = document.createElement('a')
// //     eleLink.download = fileName
// //     eleLink.style.display = 'none'
// //     eleLink.href = dataURL
// //     document.body.appendChild(eleLink)
// //     eleLink.click()
// //     document.body.removeChild(eleLink)
// //   }
// // }
//
// // @param {上传是设置文件key 一般是文件名} obecjtKey
// // CooOss.prototype.getOssFileUrl = obecjtKey => {
// //   if (!obecjtKey) return new Error('object key 必须传')
// //   return 'https://' + bucket + '.' + region + '.aliyuncs.com/' + obecjtKey
// // }
//
// // Vue.prototype.Oss = {
// //   uploadFile: CooOss
// //   // downloadFile: downloadFile
// // }
//
// export default CooOss
