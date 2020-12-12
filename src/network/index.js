import axios from 'axios'

const $request = axios.create({
  baseURL: 'http://127.0.0.1:2003',
  timeout: 15000
})

// 请求拦截器
$request.interceptors.request.use(config => {
  // console.log(config)
  return config
})

// 响应拦截器
$request.interceptors.response.use(response => {
  // console.log(response)
  return response
})

export default $request
