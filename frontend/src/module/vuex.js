import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    expetDate: null,
  },
  mutations: {
    increment(state, Payload) {
      state.expetDate = Payload.date;
    },
  },
});

export default store;