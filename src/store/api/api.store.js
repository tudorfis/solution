const API_URL = `https://jsonplaceholder.typicode.com/`;

const ROUTES = {
  TODOS: "todos"
};

export default {
  namespaced: true,
  state: {
    todos: []
  },
  getters: {
    todos: ({ todos }) => todos
  },
  mutations: {
    changeTodos(state, data) {
      state.todos = data;
    }
  },
  actions: {
    async fetchTodos({ commit }) {
      const todos = await (await fetch(`${API_URL}${ROUTES.TODOS}`)).json();
      commit("changeTodos", todos);
    }
  }
};
