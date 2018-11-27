<template>

  <div id="app">
<menue></menue>
    <router-view/>
  </div>
</template>

<script>
import menue from "/home/specialjcg/site web/monsite/src/components/menu.vue";
export default {

  name: 'App',
   components: {
      menue}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
