/*
 * @Desc:
 * @Author: 安忠琪
 * @LastEditTime: 2021-07-21 18:37:39
 */
import Vue from "vue";
import Router from "vue-router";
// const baseUrl = window.__POWERED_BY_QIANKUN__ ? "micros-vue" : "";
Vue.use(Router);
const routes = [
  {
    path: "/graph",
    component: () => import("../components/HelloWorld.vue"),
    name: "graph",
    meta: { title: "Graph", icon: "el-icon-menu" },
  },
  {
    path: "/user",
    component: () => import("../components/user.vue"),
    name: "user",
    meta: { title: "User", icon: "el-icon-menu" },
  },
  {
    path: "/person",
    component: () => import("../components/person.vue"),
    name: "Person",
    meta: { title: "Person", icon: "el-icon-menu" },
  },
  {
    path: "/vue2",
    name: "Vue2微应用",
    redirect: "/vue2/welcome",
    meta: { title: "Vue2微应用", icon: "el-icon-s-help" },
    children: [
      {
        path: "welcome",
        name: "Vue欢迎你",
        meta: {
          title: "Vue欢迎你",
        },
      },
      {
        path: "user-manage",
        name: "用户信息管理",
        meta: {
          title: "用户信息管理",
        },
      },
    ],
  },
  {
    path: "/angular",
    name: "Angular微应用",
    redirect: "/angular/welcome",
    meta: { title: "Angular微应用", icon: "el-icon-s-help" },
    children: [
      {
        path: "welcome",
        name: "Angular欢迎你",
        meta: {
          title: "Angular欢迎你",
        },
      },
      {
        path: "user-manage",
        name: "用户信息管理",
        meta: {
          title: "用户信息管理",
        },
      },
    ],
  },
  {
    path: "/react",
    name: "React微应用",
    redirect: "/react/welcome",
    meta: { title: "React微应用", icon: "el-icon-s-help" },
    children: [
      {
        path: "welcome",
        name: "React欢迎你",
        meta: {
          title: "React欢迎你",
        },
      },
      {
        path: "user-manage",
        name: "用户信息管理",
        meta: {
          title: "用户信息管理",
        },
      },
    ],
  },
];

const router = new Router({
  routes,
  mode: "history",
});

export default router;
