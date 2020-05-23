import Vue from "vue";
import axios from "axios";
import store from "../store/index";

Vue.prototype.$axios = axios;
axios.defaults.headers.common['Authorization'] = localStorage.getItem('TOKEN_KEY');

axios.defaults.baseURL = "http://localhost:3000/";

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error (error.response)
  if (error.response.status == 401) {
    // store.commit("auth/LOG_OUT");
    // } else if (error.response.status == 403) {
    //   store.dispatch("auth/forbidden");
  }
  return Promise.reject(error);
});
