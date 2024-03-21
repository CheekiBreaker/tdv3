<template>
  <div>
    <input v-model="newTodo" @keyup.enter="addTodo" />
    <button @click="addTodo">Добавить задачу</button>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <div class="tdd">
          <label class="todo__text">{{ todo.text }}</label>
          <button @click="removeTodo(todo.id)">Удалить</button>
          <button @click="editTodo(todo)">Изменить</button>
          <input v-model="todo.text" @keyup.enter="saveTodo(todo)" v-if="todo.editing" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const todos = reactive(store.state.todos);
    const newTodo = ref("");

    const addTodo = () => {
      if (newTodo.value.trim()) {
        const todo = {
          id: Date.now(),
          text: newTodo.value,
          completed: false,
        };
        todos.push(todo);
        store.commit("addTodo", todo);
        saveTodos();
        newTodo.value = "";
      }
    };

    const removeTodo = (id) => {
      const index = todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        todos.splice(index, 1);
        store.commit("removeTodo", id);
        saveTodos();
      }
    };

    const editTodo = (todo) => {
      todo.editing = true;
    };

    const saveTodo = (todo) => {
      todo.editing = false;
      store.commit("editTodo", todo);
      saveTodos();
    };

    const saveTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    };

    const loadTodos = () => {
      const todosJSON = localStorage.getItem("todos");
      if (todosJSON) {
        const todosData = JSON.parse(todosJSON);
        todos.splice(0, todos.length, ...todosData);
      }
    };

    loadTodos();

    return {
      todos,
      newTodo,
      addTodo,
      removeTodo,
      editTodo,
      saveTodo,
    };
  },
};
window.addEventListener("load", () => {
  if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
    window.location.href = "/tdv3";
  }
});
</script>
