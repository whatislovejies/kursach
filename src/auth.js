export default {
  namespaced: true,
  state: {
    isAuthenticated: false,
    userRole: '',
    userId: null,
  },

  actions: {
    setUserRole({ commit }, { userRole, userId }) {
      commit('setUserRole', { userRole, userId });
    commit('setAuth', { isAuthenticated: true, userId });
    },
    logout({ commit }) {
      commit('setUserRole', '');
      commit('setAuth', false);
    }
  },
  mutations: {
    setUserRole(state, { userRole, userId }) {
      state.userRole = userRole;
      state.userId = userId;
    },
    setAuth(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    }
  }
};
