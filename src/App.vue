<template>

  <div id="app">
<menue></menue>
<router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable spaced-comment */
/* eslint-disable semi */
/* eslint-disable eol-last */
import menue from '/home/specialjcg/site web/monsite/src/components/menu.vue';
export default {

  /*name: 'App',*/
  components: {
    menue
  }
}
</script>

<style lang="scss" >



@import "/home/specialjcg/site web/monsite/src/components/font.css";

#app {
  font-family: 'Courgette', cursive;
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
