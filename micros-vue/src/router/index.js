import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/hello-vue",
    component: () => import("../components/HelloWorld.vue"),
    name: "Layout",
  },
];

const router = new Router({
  routes,
});

export default router;
