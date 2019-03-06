export default {
  state: {
    sidebar: {
      opened: 1,
      withoutAnimation: false
    },
    device: 'desktop'
  },
  mutations: {
    toggleSidebar: state => {
      state.sidebar.opend = !state.sidebar.opend
      state.sidebar.withoutAnimation = false
    },
    toggleDevice: (state, device) => {
      state.device = device
    }
  },
  actions: {
    toggleSidebar: ({ commit }) => {
      commit('toggleSidebar')
    },
    toggleDevice: ({ commit }) => {
      commit('toggleDevice')
    }
  }
}
