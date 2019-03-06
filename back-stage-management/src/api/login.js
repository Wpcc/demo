import request from '@/utils/request'
import {removeToken} from '@/utils/auth'

export function login (username, password) {
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo (token) {
  return request({
    url: 'user/info',
    method: 'get',
    params: {
      token
    }
  })
}

export function logout (token) {
  return request({
    url: 'user/logout',
    method: 'post',
    data: {
      token
    }
  })
}

export function fedLogout () {
  return new Promise(resolve => {
    removeToken()
    resolve()
  })
}
