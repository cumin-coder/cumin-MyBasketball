import $request from './index'

// 注册接口
export const $register = ({ username, password, email, code }) => {
  return $request({
    url: '/login/userRegisterIfRepetition',
    method: 'POST',
    data: {
      username,
      password,
      email,
      code
    }
  })
}

// 获取邮箱验证码接口
export const $getCode = (email) => {
  console.log(email)
  return $request({
    url: '/login/getcode',
    method: 'POST',
    data: {
      email
    }
  })
}

// 用户名是否存在接口
export const $userIsExist = (username) => {
  return $request({
    url: '/login/userIsExist',
    method: 'POST',
    data: {
      username
    }
  })
}

// 邮箱号是否存在接口
export const $emailIsExist = (email) => {
  return $request({
    url: '/login/emailIsExist',
    method: 'POST',
    data: {
      email
    }
  })
}
