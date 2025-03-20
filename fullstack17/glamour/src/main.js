import './assets/styles/main.scss'
import 'vue3-toastify/dist/index.css'

// Import Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import store from './store/vuex.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(store)
// we can now use this store with the shortcut in the components
// RU: теперь мы можем использовать этот store с помощью сокращения в компонентах

// ex:
// get-info:       store.state.count
// call mutations: store.commit('increment')
// call actions:   store.dispatch('fetchProducts')

app.use(router)
app.mount('#app')
