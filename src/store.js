import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [],
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    updateTodo(state, payload) {
      const index = state.todos.findIndex((todo) => todo.id === payload.id);
      state.todos[index] = payload;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodo(state, id) {
      const index = state.todos.findIndex((todo) => todo.id === id);
      state.todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
  actions: {
    addTodoAction({ commit }, todo) {
      commit("addTodo", todo);
    },
    updateTodoAction({ commit }, todo) {
      commit("updateTodo", todo);
    },
    deleteTodoAction({ commit }, id) {
      commit("deleteTodo", id);
    },
  },
  getters: {
    getTodos: (state) => {
      return state.todos;
    },
  },
});
