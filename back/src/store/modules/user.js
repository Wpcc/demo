import { getInfo } from '@/api/login'
import { getToken } from '@/utils/auth'

export default {
  state: {
    roles: {}
  },
  mutations: {
    setRoles: (state, roles) => {
      state.roles = roles
    }
  },
  actions: {
    GetInfo ({commit}) {
      return new Promise((resolve, reject) => {
        getInfo(getToken()).then(response => {
          const data = response.data.roles
          commit('setRoles', data)
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
