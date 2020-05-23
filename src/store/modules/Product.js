import Vue from 'vue'
import Axios from 'axios'

const state = {
  Products: [],
  Single: []
}
const getters = {
  // getAllProducts
  getProducts(state) {
    return state.Products
  },
  // single product
  getSingle(state) {
    return state.Single
  }
}
const mutations = {
  // get products
  setProducts(state, payload) {
    state.Products = payload
  },
  //  single product
  SET_SINGLE_PRODUCT(state, payload) {
    state.Single = payload
  }
}
const actions = {
  // get all product by filter
  async getAllProducts(context, filter) {
    Axios.get("http://localhost:3000/share/products", {
      params: {
        page: filter.page,
        search: filter.search
      }
    }).then(response => {

      context.commit("setProducts", response.data)
    })
  },
  // single product 
  async singleProductFromServer(context, PAYLOAD) {
    await Axios.get("share/product", {
      params: {
        id:PAYLOAD.id
      }
    }).then(response=>{
        console.log('single====================================');
        console.log(response);
        console.log('====================================');
        context.commit("SET_SINGLE_PRODUCT", response.data)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
