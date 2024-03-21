<template>
  <div>
    <h2>Todo List</h2>
    <input v-model="newTodoName" placeholder="Enter todo name" />
    <input v-model="newTodoDescription" placeholder="Enter todo description" />
    <button @click="addTodo">Add Todo</button>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.name }} - {{ todo.description }}
        <button @click="deleteTodo(todo.id)">Delete</button>
        <!-- <button @click="editTodoForm(todo.id)">Edit</button> -->
      </li>
    </ul>
    <div v-if="editFormVisible">
      <input v-model="editedTodoName" type="text" placeholder="Edit Todo Name" />
      <input
        v-model="editedTodoDescription"
        type="text"
        placeholder="Edit Todo Description"
      />
      <button @click="editTodo">Save</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "TodoList",
  data() {
    return { newTodoName: "", newTodoDescription: "" };
  },
  computed: {
    todos() {
      return this.$store.getters.getTodos;
    },
  },
  methods: {
    addTodo() {
      const newTodo = {
        id: Date.now(),
        name: this.newTodoName,
        description: this.newTodoDescription,
      };
      this.$store.commit("addTodo", newTodo);
      this.newTodoName = "";
      this.newTodoDescription = "";
    },
    deleteTodo(id) {
      // implementation to delete todo from store
    },
    editTodoForm(id) {
      this.editedTodoId = id;
      this.editFormVisible = true;
      // assuming fetchTodoById is a method to fetch todo details from store using id
      const todo = this.fetchTodoById(id);
      this.editedTodoName = todo.name;
      this.editedTodoDescription = todo.description;
    },
    editTodo() {
      const updatedTodo = {
        id: this.editedTodoId,
        name: this.editedTodoName,
        description: this.editedTodoDescription,
      };
      // implementation to update todo in store
      this.editFormVisible = false;
    },
  },
};
</script>
