import Vue from 'vue'
import Axios from 'axios'

const state = {
  UserCart: [],
  CartExist:false,
  totalPrice:0
}
const getters = {
  getUserCart(state) {
    return state.UserCart
  },
  getCartExist(state){
    return state.CartExist  
  },
  getTotalPrice(state) {
    return state.totalPrice
},
}
const mutations = {
  setUserCart(state, USERCART) {
    state.UserCart = USERCART
    state.totalPrice = 0
    for (let i = 0; i < USERCART.data.item.order.length; i++) {
        state.totalPrice += USERCART.data.item.order[i].product.price * USERCART.data.item.order[i].count  
    }
  },
  setCartExist(state,PAYLOAD){
      state.CartExist = PAYLOAD
  }
}
const actions = {

  // add product to cart
  async addProductToCart(context, PAYLOAD) {
    await Axios.get("api/user/cart", {
      params: {
        product: PAYLOAD.product,
        count: PAYLOAD.count
      }
    }).then(response => {
      console.log("cart", response);
      if (response.data.success === true) Vue.$swal(response.data.msg)
      if (response.data.success === false) Vue.$swal(response.data.msg)
    })
  },

  async userShopCart(context){
      await Axios.get("api/user/items").then(response=>{
          console.log("items",response);
          if(response.data.success === false){
              context.commit("setCartExist" , false)
          }
          if(response.data.success === true){
              context.commit("setUserCart" , response)
              if (response.data.item.order.length !== 0) {
                context.commit("setCartExist" , true)
            }else{
                context.commit("setCartExist" , false)
              }
          }
      })
  },

  async deleteItemFromCart(context, PAYLOAD){
    await Axios.get("api/user/deleteitem" , {
      params:{
        product:PAYLOAD
      }
    }).then(response=>{
      console.log(response);
      
      if(response.data.success){
        Vue.$swal(response.data.msg)
        context.commit("setUserCart",response)
        if(response.data.item.order.length != 0){
          context.commit("setCartExist" , true)
        }else{
          context.commit("setCartExist" , false)
        }
      }
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
