import { createStore } from "vuex"
import axios from "axios"
import { BASE_URL } from './index.js'

// let x = {
//   name: '...',
//   surname: '---',
//   fullname: function() {
//     return this.name + ' ' + this.surname
//   }
// }
// x.fullname() // '... ---'


const store = createStore({
  state: {
    count: 0,
    products: [],
    // single source of truth over whole project
    // RU: единый источник правды по всему проекту
  },
  // ===================================================
  // ===================================================
  mutations: {
    // sync operations
    // RU: синхронные операции

    increment(state, payload) { // payload == {...}
      if (payload) {
        state.count += payload
      } else {
        state.count++
      }
    },
    decrement(state, payload) { // payload == {...}
      if (payload) {
        state.count -= payload
      } else {
        state.count--
      }
    },
    setProducts(state, payload) {
      state.products = payload
    }
  },
  // ===================================================
  // ===================================================
  getters: {
    getCounter(state) {
      return state.count + " items"
    }
  },
  // ===================================================
  // ===================================================
  actions: {
    // async operations
    // RU: асинхронные операции

    // async fetchProducts(context, payload)
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get(`${BASE_URL}/shopListItems`)
        const data = await response.data
        commit('setProducts', data)
        console.log(this.state.products)
      }
      catch (e) {
        console.log("Ooops! Something went wrong!")
        console.log(e)
      }
    }
  },
})

export default store

