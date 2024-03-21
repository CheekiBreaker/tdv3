import { createRouter, createWebHistory } from "vue-router";
import Home from "../src/components/HelloWorld.vue";
import TodoList from "../src/components/Todo.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/todos",
    name: "TodoList",
    component: TodoList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
