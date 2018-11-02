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

  import page1 from "./page.vue";
  import slide2 from "./page2.vue";
  import slide3 from "./page3.vue";
  import slide4 from "./page4.vue";

  export default {
name: 'miss',
    components: {

     page1,
       slide2,
      slide3,
      slide4
  }

  };
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
    height: 127px;
    width: 100%;
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
