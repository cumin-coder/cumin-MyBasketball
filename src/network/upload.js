import $request from './index'
// uploaded
const UPLOADED = '/uploaded'
/**
 * 上传图片到服务器
 * @param form
 * @param config
 * @returns {Promise<AxiosResponse<T>>}
 */
export const $upload = function (form) {
  console.log(form)
  return $request.post(`${UPLOADED}/addimg`, form, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
