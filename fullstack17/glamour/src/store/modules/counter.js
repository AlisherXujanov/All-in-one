// store/modules/counter.js
export default {
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    }
  }
};

