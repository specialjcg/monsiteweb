<template>

<div class="blockparallaxgeneral2 ">
<div class="img2" >
  <picture  @mouseover="big1()" >
  <source srcset="./fondvelo.webp" type="image/webp" @mouseover="big1()">
  <img src="./fondvelo.png" alt="createur-de-site-internet sur mesure beaujolais oingt">
</picture>
</div>
    <div id="imgtrois"   @scroll.prevent="handleScroll()">

 <div v-if=this.img1 class="titre rgba-complement-0 slide-in-blurred-left">
        <h1>Nous veillons a ce que la première impression soit la bonne soyez visible</h1>

      </div>
      <div v-else class="titre rgba-complement-0 slide-in-blurred-left2">
        <h1>Nous veillons a ce que la première impression soit la bonne soyez visible</h1>

      </div>


    </div>

</div>
</template>

<script>

  export default {


    data() {
      return {


        img1: true,

}},
 created: function () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed: function () {
        window.removeEventListener('scroll', this.handleScroll);
    },

    methods: {

      big1: function() {
        this.img1 = !this.img1;

      },

      handleScroll() {






var hauteurImage=document.getElementById("imgtrois").offsetHeight*3-180;



        if ((window.scrollY > hauteurImage) && (window.scrollY < hauteurImage+150)) {


          var inter = (hauteurImage - window.scrollY) / 150;
          document.getElementById("imgtrois").style.filter = "blur(" + (1 - inter) * 5 + "px)";
          document.getElementById("imgtrois").style.opacity = inter + 0.7;
          document.getElementById("imgtrois").style.transition = "all 0.5s ease-in-out";

        } else {
          document.getElementById("imgtrois").style="";
        }


      }}



  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
 @import "/home/specialjcg/site web/mission-vision2/src/components/blocImage.css";

  .rgba-complement-0 {
    color: rgba( 87, 24, 165, 1);
    backdrop-filter: contrast(2) blur(20px);
    background-color: rgba(103, 229, 252, 0.3);
    z-index: 3;
  }



  .titre {
    max-width: 25vw;
    position: absolute;
    height: auto;
    top:10vw;
    right:60vw;
    justify-content: left;
    align-items: left;
    z-index: 3;
  }


  .img2 {
 position: absolute;
 height:60vw;
    width:100vw;
 background-repeat: no-repeat;
    background-size: cover;




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
 background: rgba(103, 229, 252, 0.3);
   -webkit-backdrop-filter: contrast(2) blur(5px);
    backdrop-filter: contrast(2) blur(20px);
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
 background: rgba(103, 229, 252, 0.3);
   -webkit-backdrop-filter: contrast(2) blur(5px);
    backdrop-filter: contrast(2) blur(20px);
    }
  }



</style>
