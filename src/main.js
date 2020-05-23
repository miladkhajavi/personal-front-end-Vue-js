import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import VueCookie from 'vue-cookie'
import Vuelidate from 'vuelidate'
import VueSwal from 'vue-swal'
import "./plugins/axios";

import('@/assets/css/style.css')
import('@/assets/css/animate.css')


Vue.use(Vuelidate)
Vue.use(VueCookie);
Vue.use(VueSwal)
 Vue.cookie.get("TOKEN_KEY")
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
