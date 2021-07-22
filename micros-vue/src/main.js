/*
 * @Desc:
 * @Author: 安忠琪
 * @LastEditTime: 2021-07-21 15:29:25
 */
import Vue from "vue";
import App from "./App.vue";
import "./public-path";
import VueRouter from "vue-router";
Vue.config.productionTip = false;
let router = null;
let instance = null;
const routes = [
  {
    path: "/",
    redirect: "/luomao",
  },
  {
    path: "/luomao",
    component: () => import("./components/luomao.vue"),
    name: "luomao",
  },
  {
    path: "/welcome",
    component: () => import("./components/HelloWorld.vue"),
    name: "welcome",
  },
];
/* ------------------------------- */
function render(props = {}) {
  console.log("123", props);
  const { container } = props;
  router = new VueRouter({
    // 注意这里的name,最好不要写死，直接使用主应用传过来的name
    base: window.__POWERED_BY_QIANKUN__ ? `${props.name}` : "/",
    mode: "history",
    routes,
  });
  Vue.use(VueRouter);
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  console.log("开始渲染 - misroc-vue");
  render();
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}
export async function mount(props) {
  storeTest(props);
  console.log("[vue] props from main framework", props);
  console.log("绑定");
  render(props);
}
export async function unmount() {
  console.log("解绑");
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}
function storeTest(props) {
  props.onGlobalStateChange &&
    props.onGlobalStateChange(
      (value, prev) =>
        console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
      true
    );
  // 为了演示效果明显增加定时器
  setTimeout(() => {
    props.setGlobalState &&
      props.setGlobalState({
        id: `${props.name}_子应用`,
      });
  }, 3000);
}
