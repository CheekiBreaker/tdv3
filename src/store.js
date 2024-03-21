import { createStore } from "vuex";

const store = createStore({
  state: {
    todos: [],
  },
  mutations: {
    addTodo(state, todo) {
      // Проверяем, существует ли уже задача с таким же текстом
      const existingTodo = state.todos.find((t) => t.text === todo.text);

      // Если такой задачи нет, добавляем новую
      if (!existingTodo) {
        state.todos.push(todo);
      }
    },
    removeTodo(state, id) {
      const index = state.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        state.todos.splice(index, 1);
      }
    },
    editTodo(state, todo) {
      const index = state.todos.findIndex((t) => t.id === todo.id);
      if (index !== -1) {
        state.todos[index] = todo;
      }
    },
  },
});

export default store;
