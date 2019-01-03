<template>
  <div class="MainContainer">

<page1 ></page1>

<slide2></slide2>
<slide3></slide3>


<slide4></slide4>

    <div class="footer">

    </div>

  </div>
</template>

<script>
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable space-in-parens */
/* jshint esversion: 6 */
/* import page1 from "./page.vue";  import slide2 from "./page2.vue";  import slide3 from "./page3.vue";  import slide4 from "./page4.vue"; */
  export default {

  components: {

    page1: () => import('./page.vue'),
    slide2: () => import('./page2.vue'),
    slide3: () => import('./page3.vue'),

    slide4: () => import('./page4.vue')
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>




  .MainContainer {
    margin-top: 0;
    padding: 0;
    text-align: center;

    height: 100%;
    display: flex;

    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: transparent;
    overflow: hidden;
  }




  .footer {
    position: relative;
    bottom: 0;
    right: 0;
    height: 10vw;
    width: 100vw;
    margin: 0;
    padding: 0;
    background: #000000;
    z-index: 7;
  }

  body,
  html {
    margin: 0;
    padding: 0;
  }
</style>
