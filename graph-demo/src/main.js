/*
 * @Desc:
 * @Author: 安忠琪
 * @LastEditTime: 2021-07-21 17:10:07
 */
import "zone.js";
import "zone.js/dist/zone";
import Vue from "vue";
import App from "./App.vue";
import moment from "moment";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/styles/index.scss"; // global css
import {
  registerMicroApps,
  setDefaultMountApp,
  initGlobalState,
  addGlobalUncaughtErrorHandler,
} from "qiankun";
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$moment = moment; //赋值使用
const loader = (loading) => {
  // 此处可以获取微应用是否加载成功,可以用来触发全局的 loading
  console.log("loading", loading);
};

const initialState = {
  propData: "全局传值，无差别微应用",
};
const actions = initGlobalState(initialState);
actions.onGlobalStateChange((state, prev) => {
  console.log("主应用: 变更前");
  console.log(prev);
  console.log("主应用: 变更后");
  console.log(state);
});
setDefaultMountApp("/angular");
registerMicroApps(
  [
    //name: 微应用的名称,
    //entry: 微应用的入口,
    //container: 微应用的容器节点的选择器或者 Element 实例,
    //activeRule: 激活微应用的规则(可以匹配到微应用的路由),
    //loader: 加载微应用的状态 true | false
    {
      name: "vue2",
      entry: "//localhost:8081/",
      container: "#subContainer",
      activeRule: "/vue2",
      props: {
        data: "props指定微应用传值vue2",
      },
    },
    {
      name: "react",
      entry: "http://localhost:8003/",
      container: "#subContainer",
      activeRule: "/react",
      loader,
      props: {
        data: "props指定微应用传值react",
      },
    },
    {
      name: "angular",
      entry: "http://localhost:4200",
      container: "#subContainer",
      activeRule: "/angular",
      loader,
      props: {
        data: "props指定微应用传值angular",
      },
    },
  ],
  {
    // qiankun 生命周期钩子 - 微应用加载前
    beforeLoad: (app) => {
      console.log("before load", app.name);
      return Promise.resolve();
    },
    // qiankun 生命周期钩子 - 微应用挂载后
    afterMount: (app) => {
      console.log("after mount", app.name);
      return Promise.resolve();
    },
  }
);
// 添加全局异常捕获
addGlobalUncaughtErrorHandler((handler) => {
  console.log("异常捕获", handler);
});
// router.beforeEach((to, from, next) => {
//   if (to && to.path.slice(1, 4) === "vue") {
//     /* 如果是路由时VUE的 ，则给子系统发送一个消息，是他实现路由的跳转 */
//     const realRoute = vueBase + "/" + to.path.slice(5);
//     next(realRoute);
//   }
//   next();
// });
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
