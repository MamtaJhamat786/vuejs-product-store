import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    setProduct( state, payload){
      state.products.push(payload)
    },
    getProducts(state, payload){
      state.products = payload 
    }

  },
  actions: {
     async saveProductPlan(context, payload){
      await Vue.axios.post("http://192.168.1.153:9000/product/new-product", payload)
      .then (response=> {
        console.log(response)
        context.commit('setProduct', response.data.response)
      })
      .catch(error=>{
        console.log(error.e)
      })
    },
    async getAllProducts(context, payload){
      await Vue.axios.get("http://192.168.1.153:9000/product/get-all")
      .then (response=> {
        console.log(response)
        context.commit('getProducts', response.data.products)
      })
      .catch(error=>{
        console.log(error.e)
      })
    }
   
  },
  getters: {
    loadedProducts(state){
      return state.products

    }
  }
  
})
