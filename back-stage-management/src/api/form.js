import request from '@/utils/request'

export function getForm (token) {
  return request({
    url:'form/list',
    method:'get',
    params:{
      token
    }
  })
}
