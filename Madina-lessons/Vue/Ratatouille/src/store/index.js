import { createStore } from "vuex"

const initialState = {
  state: {
    count: 0,
    posts: [],
  },
  mutations: {
    // Mutations are always synchronous
    // and are used to modify the state
    // --------------------------------
    // The main function that calls a mutation is the commit function
    // commit('mutationName', payload)
    // --------------------------------
    // The payload is optional and is used to pass data to the mutation
    // --------------------------------
    // The mutation function receives the state as the first argument
    // --------------------------------
    increment(state, payload) {
      return state.count += payload.amount
    },
    decrement(state, payload) {
      return state.count -= payload.amount
    },
    setPosts(state, payload) {
      return state.posts = payload
    }
  },
  actions: {
    // Actions are asynchronous
    // and are used to call mutations
    // --------------------------------
    // The main function that calls an action is the dispatch function
    // dispatch('actionName', payload)
    // --------------------------------
    // The payload is optional and is used to pass data to the action
    async fetchData({ commit }, payload) {
      const URL = "https://jsonplaceholder.typicode.com/posts"
      const response = await fetch(URL)
      const data = await response.json()
      console.log(data)
      commit('setPosts', data)
    }
  }
}

export default createStore(initialState)
