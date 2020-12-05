import $request from './index'

// 登录接口
export const $login = ({ username, password }) => {
  console.log(username, password)
  return $request({
    url: '/login/userLogin',
    method: 'POST',
    data: {
      username,
      password
    }
  })
}
