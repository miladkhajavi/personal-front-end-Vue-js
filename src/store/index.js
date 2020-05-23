import Vue from 'vue'
import Vuex from 'vuex'
import Product from './modules/Product'
import User from './modules/User'
import Cart from './modules/Cart'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Product,
    User,
    Cart
  }
})
