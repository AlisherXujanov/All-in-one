import { createStore } from "vuex"
import axios from "axios"
import { BASE_URL } from './index.js'
import counter from './modules/counter'
import logger from './plugins/logger'


// let x = {
//   name: '...',
//   surname: '---',
//   fullname: function() {
//     return this.name + ' ' + this.surname
//   }
// }
// x.fullname() // '... ---'


const store = createStore({
    modules: {
        counter,
    },
    plugins: [logger],
    state: {
        count: 0,
        products: [],
        productsLoading: false,
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
        },
        setProductsLoading(state, payload) {
            state.productsLoading = payload
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
                commit('setProductsLoading', true)
                const response = await axios.get(`${BASE_URL}/shop-list-items`)
                const data = await response.data
                commit('setProducts', data)
                console.log(this.state.products)
            }
            catch (e) {
                console.log("Ooops! Something went wrong!")
                console.log(e)
            } finally {
                commit('setProductsLoading', false)
            }
        }
    },
})

// HMR  ->  Hot Module Reload
if (import.meta.hot) {
    import.meta.hot.accept([
        './modules/counter',
        './plugins/logger'
    ], () => {
        console.log('Hot module reload')
    });
}
export default store

