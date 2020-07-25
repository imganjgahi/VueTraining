import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/Auth/Auth';
import Deposites from './modules/TransActions/Deposites';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Auth,
    Deposites
  }
})

