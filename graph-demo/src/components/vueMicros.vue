<!--
 * @Desc: 
 * @Author: 安忠琪
 * @LastEditTime: 2021-07-13 17:26:21
-->
<template>
  <div>
    <h2>你好</h2>
    <router-view></router-view>
  </div>
</template>

<script>
import { start } from "qiankun";
export default {
  mounted() {
    console.log(window.qiankunStarted);
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start();
    }
  },
};
</script>
