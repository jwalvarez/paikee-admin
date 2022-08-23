import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      isAuthenticated: false,
      token: '',
      name: '',
      email: '',
    },
    settings: {
      lineGraphic: false,
      leftPanel: true,
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
