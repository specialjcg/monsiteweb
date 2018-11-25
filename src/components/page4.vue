<template>

<div>
<div class="img3" >
  <picture  @mouseover="big1()" >
  <source srcset="./maison.webp" type="image/webp" @mouseover="big1()">
  <img src="./maison.jpg" alt="createur-de-site-internet sur mesure beaujolais oingt">
</picture>
</div>
    <div id="imgquatre" class="blockparallaxgeneral" >
      <div v-if=this.img1 class="titre rgba-complement-2 slide-in-blurred-left">
        <h1>nous vous promettons des designs inspirés et des services créatifs ayant du style</h1>



      </div>
      <div v-else class="titre rgba-complement-2 slide-in-blurred-left2">
        <h1>nous vous promettons des designs inspirés et des services créatifs ayant du style</h1>

      </div>


 </div>
  </div>
</template>

<script>


  export default {


    data() {
      return {


        img1: true,

      };
    },



    methods: {

      big1: function() {
        this.img1 = !this.img1;

      }}






  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import "/home/specialjcg/site web/mission-vision2/src/components/blocImage.css";

  .rgba-complement-2 {
    color: rgba( 80, 105, 131, 1);
    backdrop-filter: contrast(2) blur(20px);
    background-color: rgba(255, 239, 216, 0.3);
     z-index: 3;
  }


  .titre {
    max-width: 500px;
    position: relative;
    height: auto;
    right: 60%;
    justify-content: left;
    align-items: left;
    z-index: 3;
  }




  .img3 {
     position: relative;
 height:50vw;
    width:100vw;


    z-index: 0;
    opacity: 1;
  }

  h1 {
    letter-spacing: 0vw;
    font-family: Open Sans;
    font-size: 2vw;
    font-weight: 800;
    line-height: 2vw;
  }

  p {
    letter-spacing: 0vw;
    font-family: Open Sans;
    font-size: 1vw;
    font-weight: 600;
    line-height: 1vw;
    /* margin: 75px 0;*/
  }

  .slide-in-blurred-left {
    -webkit-animation: slide-in-blurred-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-in-blurred-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }

  .slide-in-blurred-left2 {
    -webkit-animation: slide-in-blurred-left2 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-in-blurred-left2 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }



  @keyframes slide-in-blurred-left {
    0% {
      -webkit-transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
      transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
      -webkit-transform-origin: 100% 50%;
      transform-origin: 100% 50%;
      -webkit-filter: blur(40px);
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0) scaleY(1) scaleX(1);
      transform: translateX(0) scaleY(1) scaleX(1);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }

  @keyframes slide-in-blurred-left2 {
    0% {
      -webkit-transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
      transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
      -webkit-transform-origin: 100% 50%;
      transform-origin: 100% 50%;
      -webkit-filter: blur(40px);
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0) scaleY(1) scaleX(1);
      transform: translateX(0) scaleY(1) scaleX(1);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }


</style>
