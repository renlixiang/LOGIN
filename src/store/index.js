import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  account: '',
  password: '',
  phone: '',
  users: {
    123: {phone: '13512345678', password: '123'}
  }
}

const actions = {
}

const mutations = {
}

const store = new Vuex.Store({
  namespaced: true,
  state,
  actions,
  mutations

})
export default store
