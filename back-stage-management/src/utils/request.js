import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import { getToken } from '@/utils/auth'

//创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_URL, //api 的 base_url
  timeout: 5000 //请求超时时间
})

//request拦截器：当数据所在服务器和页面服务器不同时使用
service.interceptors.request.use(
  config => {
    if (store.getters.token) {//store中的token值从cookie中获取，保证刷新不丢失
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  err => {
    console.log(err) // for debug
    Promise.reject(err)
  }
)

//response 拦截器
service.interceptors.response.use(
  response => {
    /*
    code不为20000抛错
    40001：非法的token; 400002:单点登录中其它客户端登录了; 400003:Token 过期了
    */
    const res = response.data
    if (res.code !== 20000) {
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      })
      if (res.code === 40001 || res.code === 40002 || res.code === 40003) {
        MessageBox.confirm(
          '你已被登出，可以取消继续留在该页面，或者重新登录',
          '确定登出',
          {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'waring'
          }.then(() => {
            store.dispatch('FedLogout').then(() => {
              location.reload() //重新实例化vue-router对象，以免出现bug
            })
          })
        )
      }
      return Promise.reject('error')
    }
    else {
      return res
    }
  },
  error => {
    console.log(error)
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
