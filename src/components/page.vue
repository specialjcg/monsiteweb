<template>
<div>
  <div >

 <div id="cercle"  @mouseover.self="handleScroll()"></div>
<div class="img1" >
  <picture>
  <source srcset="../assets/oingt2.webp" type="image/webp" >
  <img src="../assets/oingt.png" alt="createur-de-site-internet sur mesure beaujolais oingt">
</picture>

</div>
  <div id="imgune" class="blockparallaxgeneral" @scroll.self="handleScroll()"  >
<transition  name="slideinblurredleft" >

<div id="titre1" class="titre color-primary-1" v-show="img1" >
      <div v-if="img2"  class="text-focus-in"  >
      <h3>Créons votre site internet <em>sur-mesure</em></h3>

    </div>
    <div v-else class="text-focus-in2" >
      <h3>Donnons de la valeur à <em>votre site Web</em></h3>
</div>
    <div class="découvrir_avantage_site_web" >
     <p class="color-primary-2"> Je vous propose des solutions sur mesure pour répondre au mieux à vos besoins ! </p>
       <button  @click.prevent="manscrolly()">Découvrir</button>
</div>
</div></transition>
<div id="line" class="line1" v-show="img1"></div>
<transition name="slideinblurredleft">
    <div  class="color-primary-1 argumentaire" v-if="img3">
      <ul>
        <h3><em>Un site sur mesure :</em></h3>
        <li>retient l’attention de vos <em>futurs clients et prospects</em></li>
        <li> <em>développe votre notoriété</em> et votre marque</li>
        <li>autorise l’optimisation par <em>référencement naturel</em></li>
        <li>répond à tous <em>vos besoins</em> </li>
        <li>est <em>totalement personnalisable, et évolutifs</em></li>
        <li>apporte des <em>fonctionnalités</em> innovantes à vos clients</li>
      </ul>
    </div></transition>

  </div>

  </div></div>
</template>

<script>
/* eslint-disable padded-blocks */
/* eslint-disable space-before-function-paren */
/* eslint-disable spaced-comment */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable space-in-parens */
/* jshint esversion: 6 */
export default {
 data() {
   return {
     intervalid1: '',
     intervalid2: '',
     img1: false,
     img2: true,
     img3: false,
     test: true,
     essai: false,
     classA: 'slide2',
     classB: 'slide1',
     postitre1: '',
     poscircle: ''
   }
 },
 created: function () {
   window.addEventListener('scroll', this.handleScroll);
   this.todo2();
 },
 destroyed: function () {
   window.removeEventListener('scroll', this.handleScroll);
 },
 mounted() {
   this.img1 = true;
   this.todo();
   this.todo2();
 },
 beforeDestroy() {
   clearInterval(this.intervalid1);
   clearInterval(this.intervalid2);
 },
 methods: {
   todo() {
     this.intervalid1 = setInterval(() => {
       this.img2 = !this.img2;
     }, 4000);
   },
   manscrolly(){
this.img3 = !this.img3;
if (this.img3){window.scrollBy({left:0,top:200,behavior: 'smooth'})}else{window.scrollBy({left:0,top:-200,behavior: 'smooth'})}
   },
   todo2() {
     this.intervalid2 = setInterval(() => {
       this.handleScroll();
     }, 10);
   },
   big1: function () {
     this.img1 = !this.img1;
   },
   big3: function () {
     this.img3 = !this.img3;
   },
   handleScroll() {
     if (document.getElementById('imgune') != null) {
       var hauteurImage = document.getElementById('imgune').offsetHeight - 200;
       if ((window.scrollY > hauteurImage) && (window.scrollY < (hauteurImage + 150))) {
         document.getElementById('cercle').style.opacity = 0;
         document.getElementById('line').style.opacity = 0;
         var inter = ((hauteurImage + 150) - window.scrollY) / 150;
         document.getElementById('imgune').style.filter = 'blur(' + (1 - inter) * 10 + 'px)';
         document.getElementById('imgune').style.transition = 'all 1s ease-in-out';
       } else if ((window.scrollY > (hauteurImage - 150))) {
         document.getElementById('cercle').style.opacity = 0;
         document.getElementById('line').style.opacity = 0;
         this.img1 = false;
         if (this.test) {
           clearInterval(this.intervalid1);
           clearInterval(this.intervalid2);
           this.test = false;
         }
       } else if ((window.scrollY < (hauteurImage + 250))) {
         this.img1 = true;
         document.getElementById('imgune').style = '';
         document.getElementById('cercle').style.opacity = 1;
         this.postitre1 = document.getElementById('titre1').getBoundingClientRect();
         this.poscircle = document.getElementById('cercle').getBoundingClientRect();
         var angle = Math.atan2(this.poscircle.bottom - this.postitre1.top - this.poscircle.height / 2, (this.poscircle.left - this.postitre1.right)) * 180 / Math.PI;
         var long = Math.abs(this.poscircle.bottom - this.postitre1.top - this.poscircle.height / 2) / Math.sin(Math.atan2(this.poscircle.bottom - this.postitre1.top - this.poscircle.height / 2, (this.poscircle.left - this.postitre1.right)))
         document.getElementById('line').style.left = this.postitre1.right + 'px';
         document.getElementById('line').style.top = this.postitre1.top + 'px';
         document.getElementById('line').style.right = this.poscircle.left + 'px';
         document.getElementById('line').style.width = Math.abs(long) + 'px';
         document.getElementById('line').style.transform = 'rotateZ(' + (angle) + 'deg)';
         if (!this.test) {
           this.todo2();
           this.todo();
           this.test = true;
         }
         document.getElementById('line').style.opacity = 1;
       }
     }
     }
 }
}

</script>

<style scoped>
@import "/home/specialjcg/site web/mission-vision2/src/components/blocImage.css";

@import "./font.css";

.color-primary-2 {
  color: whitesmoke;
}

.découvrir_avantage_site_web {
  display: flex;
justify-content:space-between;
align-content: flex-start;
  z-index: 0;
}

.color-primary-1 {

  color: #FBC831;
  background: rgba(103, 229, 252, 0.3);
  -webkit-backdrop-filter: contrast(2) blur(5px);
  backdrop-filter: contrast(2) blur(20px);
  z-index: 3;
}

#cercle {
  position: fixed;
  top: 18vw;
  left: 60vw;
  width: 6px;
  height: 6px;
  border-radius: 50%;

  box-shadow: inset 0 0 2px 2px rgba(245, 245, 245, 0.5);
  padding: 2px;
  background: rgba(245, 245, 245, 0.5);
  z-index: 1;
}
#titre1{
  position:absolute;
  top:18vw;

}
.line1 {

  position: fixed;
  /*top:20.1vw;*/
  /*left:44.9vw;*/

  height: 0px;

  border-top: 0.5px solid whitesmoke;

  transform-origin: top left;

  /*transform:rotateZ(-10deg);*/

  z-index: 1;
}

.titre {

  max-width: 33vw;
  position: absolute;
  height: auto;
width: 29.3vw;
  left: 6.8vw;
  justify-content: left;
  align-items: left;
  text-align: left;
  margin: 0;
  padding: 1vw;
  z-index: 3;
  opacity: 1;
}


button {
  color: #FBC831;
  font-family: 'Bitter', serif;
  text-shadow: 3px 3px 3px #D17B0F;
  background: #007100;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  height: 2.618vw;
  font-size: 1.618vw;
  font-weight: 800;
  text-align: center;
align-self: flex-end;
  flex: 0 1 auto;


  margin-top: 4.2vw;
  width: auto;

  z-index: 2;
  transition: all 0.5s ease
}

button:hover {
  /*background:#4BA62A;*/
  background-image: linear-gradient(to left, #007100, #1b7e0c, #2d8b17, #3c9821, #4ba62a);
  transform-origin: 0% 50%;
  transform: rotateY(4deg) rotateZ(1deg);

}

.argumentaire {
  max-width: 42vw;
  position: absolute;
  height: 26vw;
  top:35vw;
  left: 52vw;
  justify-content: left;
  align-items: left;
  text-align: left;
  margin: 0;
  padding: 0;
  z-index: 2;
  width: 42vw;


}

#imgune {

  background: rgb(164, 225, 214, 0.8);
  z-index: 0;
}

img {
  height: 50vw;
  width: 100vw;


  position: fixed;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 0;
  opacity: 1;
}

li>em {

  color: #FBC831;
  font-weight: 800;
}

li {
  margin-bottom: 1.3vw;
  font-size: 1.618vw;
  font-family: 'Courgette', cursive;
  font-weight: 400;
  line-height: 1.45;
color: whitesmoke;
}

p {
  margin-bottom: 1.3vw;
  max-width: 60%;
  font-size: 1.618vw;
  font-family: 'Courgette', cursive;
  font-weight: 400;
  line-height: 1.45;
align-self: auto;
  flex: 0 1 auto;
}

p::first-letter {
  color: #FBC831;
  font-size: 130%;
}


h1,
h2,
h3,
h4 {
  margin: 1.414vw 0 0.5vw;
  font-family: 'Courgette', cursive;
  font-weight: inherit;
  line-height: 1.2;
}

h1 {
  margin-top: 0;
  font-size: 6.854vw;
}

h2 {
  font-size: 4.236vw;
}

h3 {
  font-size: 2.618vw;
}

h4 {
  font-size: 1.618vw;
}

small,
.font_small {
  font-size: 0.618vw;
}

.text-focus-in {
  -webkit-animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}

.text-focus-in2 {
  -webkit-animation: text-focus-in2 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  animation: text-focus-in2 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}

.slideinblurredleft-enter-active {
  -webkit-animation: slide-in-blurred-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: slide-in-blurred-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}


.slideinblurredleft-leave-active {
  -webkit-animation: slide-in-blurred-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: slide-in-blurred-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) reverse;
}




.slideinblurredleft2-enter-active {
  -webkit-animation: slide-in-blurred-left2 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: slide-in-blurred-left2 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}


.slideinblurredleft2-leave-active {
  -webkit-animation: slide-in-blurred-left2 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: slide-in-blurred-left2 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}


/* ----------------------------------------------
     * Generated by Animista on 2018-10-10 20:54:33
     * w: http://animista.net, t: @cssanimista
     * ---------------------------------------------- */


/**
     * ----------------------------------------
     * animation scale-down-right
     * ----------------------------------------
     */

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

/* ----------------------------------------------
 * Generated by Animista on 2018-10-28 21:27:39
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation text-focus-in
 * ----------------------------------------
 */
@-webkit-keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
    filter: blur(12px);
    transform: scale(0.5);
    opacity: 0;
  }

  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
    filter: blur(12px);
    transform: scale(0.5);
    opacity: 0;
  }

  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    transform: scale(1);
    opacity: 1;
  }
}

@-webkit-keyframes text-focus-in2 {
  0% {
    -webkit-filter: blur(12px);
    filter: blur(12px);
    transform: scale(0.5);
    opacity: 0;
  }

  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes text-focus-in2 {
  0% {
    -webkit-filter: blur(12px);
    filter: blur(12px);
    transform: scale(0.5);
    opacity: 0;
  }

  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    transform: scale(1);
    opacity: 1;
  }
}


</style>
