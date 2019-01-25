<template>
  <div id="app">
    <menue></menue>
    <router-view></router-view>
  </div>
</template>

<script>
import menue from "./views/menu.vue";
export default {
  components: {
    menue
  }
};
</script>

<style lang="scss">
@import "./components/font.css";

#app {
  font-family: "Courgette", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body,
html {
  margin: 0;
  padding: 0;
}
</style>
