import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "", component: Hello },
  { path: "/shopping", component: Counter_V2 },
];
const router = new createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
