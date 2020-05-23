import Vue from 'vue'
import Axios from 'axios'
import router from "../../router/index"

const state = {
  isAuthenticated: false,
  TOKEN_KEY: '',
  user: '',
  UserFullName: ''
}
const getters = {
  getUserFullName(state) {
    return state.userFullName
  },
  getIsAuthenticated(state) {
    return state.isAuthenticated
  }
}
const mutations = {
  setUserFullName(state, FULLNAME) {
    state.userFullName = FULLNAME
  },
  setIsAuthenticated(state, AUTH) {
    state.isAuthenticated = AUTH
  },
  AUTH_SUCCESS(state, payload) {
    localStorage.setItem("TOKEN_KEY", payload.data.token);
    // localStorage.setItem("USER_ROLE", payload.data.user.role);
    localStorage.setItem("NAME", payload.data.user.firstName);
    localStorage.setItem("FAMILY", payload.data.user.lastName);
    Axios.defaults.headers.common['Authorization'] = payload.data.token;
    state.user = payload.data.user;
    state.TOKEN_KEY = payload.data.token;
    state.isAuthenticated = true;
    Vue.cookie.set(
      "TOKEN_KEY",
      payload.data.token,
      7
    )
  },
}
const actions = {
  loginFromServer(context, payload) {
    Axios.post("api/login", payload).then(response => {
      if (response.data.success === true && response.data.user.role === 'user' && response.status === 200) {
        // console.log(response);
        Vue.$swal(response.data.msg)
        context.commit("AUTH_SUCCESS", response)
        context.commit('setIsAuthenticated', true)
        router.push('/')
      }
      if (response.data.user.role !== 'user') {

        Vue.$swal("شما مجاز به ورود نیستید")
      }
    }).catch((err) => {
      if (err.response.data.success === false) {
        Vue.$swal(err.response.data.msg)
      }
    })
  },
  checkLogin(context) {
    Axios.get('api/user/profile').then(response => {
      console.log(response);
      context.commit("setUserFullName", response.data.item.firstName + " " + response.data.item.lastName)
      context.commit("setIsAuthenticated", true)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
