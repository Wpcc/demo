import { getInfo } from '@/api/login.js'
import { getToken } from '@/utils/auth'

const user = {
  state: {
    roles: {}
  },

  mutations: {
    setRoles: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    //获取用户信息
    GetInfo ({ commit, state}) {
      return new Promise((resolve, reject) => {
        getInfo(getToken()).then(response => {
          const data = response.data.roles
          commit('setRoles', data) //将数据存储到vuex中，让vue使用
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
 export default user
