<!--
 * @Desc: 
 * @Author: 安忠琪
 * @LastEditTime: 2021-07-21 18:42:30
-->
<template>
  <div id="app">
    <el-container>
      <el-aside>
        <el-scrollbar wrap-class="scrollbar-wrapper">
          <el-menu
            :default-active="activeMenu"
            mode="vertical"
            @select="handleSelect"
            :unique-opened="false"
            :collapse-transition="false"
            :background-color="variables.menuBg"
            :text-color="variables.menuText"
            :active-text-color="variables.menuActiveText"
            ><sidebar-item
              v-for="route in permission_routes"
              :key="route.path"
              :item="route"
              :base-path="route.path"
            />
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-main id="subContainer">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { start } from "qiankun";
import SidebarItem from "./components/siderbar/sidebar-item";
import router from "./router";
import variables from "./styles/variables.scss";
export default {
  name: "App",
  components: {
    // HelloWorld,
    SidebarItem,
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1" /*  */,
      permission_routes: [],
    };
  },
  mounted() {
    console.log(router);
    this.permission_routes = router.options.routes;
    console.log("permission_routes", this.permission_routes);
    start({
      prefetch: true, // 开启预加载
      sandbox: {
        experimentalStyleIsolation: true, //   开启沙箱模式,实验性方案
      },
    });
  },
  computed: {
    // ...mapGetters(["permission_routes"]),
    activeMenu() {
      const route = this.$route;
      console.log(route);
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    variables() {
      return variables;
    },
  },
  methods: {
    jump(index) {
      if (index === 1) {
        this.$router.push({ path: "user" });
      } else if (index === 2) {
        this.$router.push({ path: "person" });
      } else if (index === 3) {
        this.$router.push({ path: "/micros-vue/luomao" });
      } else if (index === 5) {
        this.$router.push({ path: "/micros-vue/welcome" });
      } else {
        this.$router.push({ path: "graph" });
      }
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.el-aside {
  background: rgb(48, 65, 86);
  color: #333;
  text-align: center;
  height: calc(100vh - 120px);
  padding: 0;
}
.el-footer {
  bottom: 0px;
}

.el-main {
  height: calc(100vh - 120px);
  color: #333;
  text-align: center;
}
.el-menu {
  background: transparent;
}
.el-menu.el-menu--horizontal {
  border: 0;
}
body > .el-container {
  margin-bottom: 40px;
}
</style>
