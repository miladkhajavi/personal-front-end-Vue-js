import Vue from 'vue'
import VueRouter from 'vue-router'
import {
  store
} from '../store/index'
import FirstPage from '../views/firstPage.vue'
import Register from '../views/auth/register.vue'
import Login from '../views/auth/login.vue'
import Ax from '../views/ax.vue'
import SingleProduct from '../views/singleProduct.vue'
import Cart from '../views/cart.vue'
import error from '../views/404.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: FirstPage,
    name: 'firstPage',
    meta: {
      requiresVisitor: true
    }

  }, {
    path: '/Register',
    component: Register,
    name: 'register',
    meta: {
      requiresAuth: true
    }
  }, {
    path: '/login',
    component: Login,
    name: 'Login',
    meta: {
      requiresVisitor: true
    }
  }, {
    path: '/ax',
    component: Ax,
    name: 'ax'
  }, {
    path: '/single/:id',
    component: SingleProduct,
    name: 'single'
  }, {
    path: '/cart',
    component: Cart,
    name: 'cart',
    meta: {
      requiresAuth: true
    }
  }, {
    path: '/404',
    component: error,
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
// router.beforeEach((to, from, next) => {
//    if(to.matched.some(record => record.meta.auth)) {
//       if(localStorage.getItem("TOKEN_KEY")) {
//         next();
//       } else next({path: "/login"});
//     }else{
//       next()
//     }
// })




export default router
