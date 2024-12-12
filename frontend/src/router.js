import { createRouter, createWebHistory } from "vue-router";
import Hello from "./views/Hello.vue";
import Shopping from "./views/Shopping.vue";

const routes = [
  { path: "", component: Hello },
  { path: "/shopping", component: Shopping },
];
const router = new createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
