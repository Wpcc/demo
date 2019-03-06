import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { // 将vuex分解成两个模块
    app,
    user
  },
  getters // vuex计算属性
})
