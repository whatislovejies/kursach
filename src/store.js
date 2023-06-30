import { createStore } from 'vuex';
import auth from './auth.js';

const store = createStore({
  state: {
    isAuthenticated: false,
    userRole: 'guest'
  },
  mutations: {
    setAuth(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    setUserRole(state, userRole) {
      state.userRole = userRole;
    }
  },
  actions: {
    login({ commit }, { userRole, userId }) {
      commit('setUserRole', { userRole, userId });
      commit('setAuth', { isAuthenticated: true, userId });
    },
    logout({ commit }) {
      commit('setUserRole', 'guest');
      commit('setAuth', false);
    }
  },
  modules: {
    auth
  }
});

export default store;
