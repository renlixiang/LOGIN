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
  addUser ({commit}) {
    commit('ADD_USER')
  }
}

const mutations = {
  ADD_USER (state) {
    // 判断是否已经存在
    // const isExist = state.users.some(item => item.name === data.name)
    // 不存在，添加到数组内
    // if (!isExist) {
    //   this.state.users.push(data)
    // }
    if (!this.state.users.hasOwnProperty(this.state.account)) {
      console.log(this.state.account)
      this.state.users[this.state.account.phone] = this.state.phone
      this.state.users[this.state.account.password] = this.state.password
    }
    alert('1111')
  },
  userIsExist (state) {
    if (this.state.users.hasOwnProperty(this.state.account)) {
      // 判断密码
      if (this.state.users[this.state.account].password !== this.state.password) {
        alert('密码错误！')
      } else {
        alert('欢迎进入')
      }
    } else {
      alert('用户名错误！')
    }
  }
}

const store = new Vuex.Store({
  namespaced: true,
  state,
  actions,
  mutations

})
export default store
