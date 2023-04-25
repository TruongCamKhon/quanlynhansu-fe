import { createRouter, createWebHistory } from "vue-router";
import EmployeeView from "../views/EmployeeView.vue";
import PositionView from "../views/PositionView.vue";

const routes = [
  {
    path: "/",
    redirect: "/employees",
  },
  {
    path: "/employees",
    name: "EmployeeView",
    component: EmployeeView,
  },
  {
    path: "/positions",
    name: "PositionView",
    component: PositionView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
