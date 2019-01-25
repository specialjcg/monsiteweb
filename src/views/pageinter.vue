<template>

<div class="blockparallaxgeneral3">

  <div class="fondtarbre emoji" v-for="h in 14" :key="h" :style="computed2_class(h)">
    <picture >
      <source srcset="./arbre.webp" type="image/webp" >
      <img  class="img1" src="./arbre.png" alt="createur-de-site-internet sur mesure beaujolais oingt">
    </picture>
</div>
</div>

</template>
<script>
/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable space-before-function-paren */
export default {
  data() {
    return {
      img1: true,
      index: 0
    }
  },
  created: function () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    big1: function () {
      this.img1 = !this.img1;
    },
    computed2_class(num) {
      var index1 = Number(num);

      var tran = '';
      var profondeur = (14 - index1) / 14;
      tran =
        'translate3d(' + (Math.random() * 900 - 450) + 'px,' + (Math.random() * 200 - 100) + 'px,' + (-profondeur * 500 + 250)         +
        'px) scale(0.12) '

      return {
        'z-index': index1,

        transform: tran
      }
    },
    handleScroll() {
      var hauteurImage = document.getElementById('imgtrois').offsetHeight * 3 - 180;
      if ((window.scrollY > hauteurImage) && (window.scrollY < hauteurImage + 150)) {
        var inter = (hauteurImage - window.scrollY) / 150;
        document.getElementById('imgtrois').style.filter = 'blur(' + (1 - inter) * 5 + 'px)';
        document.getElementById('imgtrois').style.opacity = inter + 0.7;
        document.getElementById('imgtrois').style.transition = 'all 0.5s ease-in-out';
      } else {
        document.getElementById('imgtrois').style = '';
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "./blocImage.css";
.fondarbre{
    background:transparent;

    margin: 0;

    opacity: 1;
 z-index:10;
  }
  .img1{
      transform-style: preserve-3d;
 width: 100%;
position:absolute;
    height: 100vh;
top:1500px;
left:0vw;
z-index:10;
}
.emoji{

  z-index:10;
  filter: drop-shadow(-100px -50px 4px  rgba(128, 128, 128,0.3));
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
