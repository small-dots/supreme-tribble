<!--
 * @Desc: 
 * @Author: 安忠琪
 * @LastEditTime: 2021-07-13 17:40:07
-->
<template>
  <div class="contanier">
    <div class="neumorphism"></div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.contanier {
  width: 200px;
  height: 200px;
  background: #a86161;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
.contanier .neumorphism {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #a86161;
  box-shadow: inset 20px 20px 60px #8f5252, inset -20px -20px 60px #c17070;
}
</style>
