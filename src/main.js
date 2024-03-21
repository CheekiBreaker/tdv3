import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import store from "./store";

const routes = [
  { path: "/tdv3/", component: Home },
  { path: "/tdv3/about", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).use(store).mount("#app");
