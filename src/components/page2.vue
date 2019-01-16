<template>
  <div id="imgdeux" class="blockparallaxgeneral2 " @scroll="handleScroll()">
    <div class="createur-de-site-internet disposition" :class="[!this.img1 ? 'essaiBordure':'']">
      <h1>Pourquoi un <em>site web </em>sur-mesure <span>?</span></h1>
      <ul>
        <li class="résumé">Il renforce votre crédibilité</li>
        <li class="résumé">Il est souple et adaptable</li>
        <li class="résumé">il est rapide et référencé</li>

      </ul>
      <router-link to="/contact" class="vers contact1"><button v-if=!this.img1 >Obtenir votre devis</button></router-link>
      <button v-if=this.img1 @click.prevent="big1()"> En Savoir plus</button>
    </div>

    <div class="createur-de-site-internet fond fondtext">

<transition  name="scale-down-right" mode="out-in" >

           <picture class="avant" v-show="img1" @click.prevent="big1()">
  <source srcset="./Photo-by-Jose-Ramirez-on-Unsplash.webp" type="image/webp" >
  <img src="./Photo-by-Jose-Ramirez-on-Unsplash.png" alt="createur-de-site-internet sur mesure beaujolais oingt" title="Photo by Jose Ramirez on Unsplash.png">
</picture>


        </transition>
<transition  name="slide-in-blurred-right" mode="out-in" key="!img1">
        <div v-show="!img1">
          <div class="titre-premiertexte  disposition-text ">

          <ul>
            <li v-if= "this.text1===1" ><span>Pour la maîtrise: </span><br> <em>Un site Web</em> programmé et créé avec des sources internes est facile à
              utiliser et à améliorer. Pas de briques de codes ou des structures tout-en-un grappillés sur différentes plateformes.</li>

            <li v-if= "this.text1===2"><span>Pour la Performance: </span><br> <em>Un site Web</em> léger, rapide à la navigation
              n’utilise pas de framework, il est facile à améliorer et à faire évoluer</li>
            <li v-if= "this.text1===3"><span>Pour la Pérennité: </span> <br><em>Un site Web</em> utilisant les standards assure une structure solide
              dans le temps. Un code fait maison garantit une mise à jour rapide. Nous portons attention à l’obsolescence de certaines technologies</li>

          <li v-if= "this.text1===4"><br>Je suis votre <em>développeur Web Freelance</em>, adepte des projets fait mains, basé en Rhone Alpes au
            coeur
            du Beaujolais, je suis disponible pour vos projets dans l’hexagone et au-delà.</li></ul>

</div>
<button class="petitbouton"  @click="bigtext()">{{this.suite}}</button>
        </div>


</transition>

    </div>

<div class="création-site-web fond fondtext">
      <transition  name="scale-down-left" >
        <div class="après" v-show="img2" @click.prevent="big2()">
           <picture>
  <source srcset="./aaron-kato-61462-unsplash.webp" type="image/webp" >
  <img src="./aaron-kato-61462-unsplash.png" alt="createur-de-site-internet sur mesure beaujolais oingt" title="Photo by Aaron Kato on Unsplash">
</picture>

        </div>
        </transition>
<transition  name="slide-in-blurred-right2" mode="out-in" key=!this.img2>
      <div v-show=!this.img2>

        <div class="titre-deuxiémetexte disposition-text ">
          <p v-if= "this.text1===1">Travaillons ensemble à la <em>création de votre site internet </em> et assurons sa place sur <em>Google</em>. Définissons vos besoins et améliorons vos objectifs, afin de vous
            présenter la solution la plus parfaite.</p>
          <p v-if= "this.text1===2">Un <em>site sur mesure </em>codé de A à Z «maison» adapté à vos besoins et fonctionnalités.
            Un <em>design</em> personnalisé offre toutes les
            innovations et attire de nouveaux clients,le sur mesure est efficace , maniable et rapide,
            pensé en amont
            pour un meilleur <em>référencement</em></p>
          <p v-if= "this.text1===3">Proposer des contenus pertinents, c’est bien, mais disposer d'un site sur mesure où il est <em>agréable de
              naviguer</em>, c’est indispensable.
            Il s’agit d'un des éléments déterminants pour que vos prospects poursuivent leur navigation
            sur votre <em>site Web </em>et pas sur un autre.</p>
          <p v-if= "this.text1===4"><em>Développeur Web Freelance</em>, basé en Rhone Alpes au Bois d'oingt ,au coeur des Pierres Dorées ,
             votre <em>site Web</em> convertira vos prospects</p>

        </div>
        <button  class="petitbouton2" @click="bigtext2()">{{this.suite}}</button>
      </div>

  </transition>
    </div>

    <div class="création-site-web disposition" :class="[!this.img2 ? 'essaiBordure2':'']">
      <h1>Vous Voulez <span class="special">+</span> de <em>prospect</em> <span>?</span></h1>

      <ul>
        <li>Faites passer vos clients à l'action</li>
        <li>Soigner votre proposition de valeur -> penser au design </li>
        <li>Améliorer l'expérience utilisateur de vos futurs clients</li>

      </ul>
       <router-link to="/contact" class="vers contact3"><button v-if=!this.img2 class="devis" >Obtenir votre devis</button></router-link>
      <button v-if=this.img2 class="devis" @click.prevent="big2()"> En Savoir plus</button>
    </div>

    <div class="créer-un-site-web  disposition1" :class="[!this.img3 ? 'essaiBordure':'']">
      <h1>Vous voulez que l'on s'occupe de tout <span>?</span></h1>
      <ul>
        <li class="résumé">Améliorer vos contenus</li>
        <li class="résumé">Proche de vous en toute sécurité</li>
        <li class="résumé">Fabriqué en France</li>

      </ul>
      <router-link to="/contact" class="vers contact4"><button v-if=!this.img3 >Obtenir votre devis</button></router-link>
      <button v-if=this.img3 @click.prevent="big3()"> En Savoir plus</button>
    </div>
    <div class="créer-un-site-web fond fondtext1">


         <transition  name="scale-down-right" >

           <picture class="pendant" v-show="img3" @click.prevent="big3()">
  <source srcset="./noproblem.webp" type="image/webp" >
  <img class="imgage1" src="./noproblem.png" alt="createur-de-site-internet sur mesure beaujolais oingt" title="noproblem.png">
</picture>


        </transition>
        <transition  name="slide-in-blurred-right" mode="out-in" key=!this.img3>
          <div v-show=!this.img3>
        <div class="titre-troisiemetexte  disposition-text slide-in-blurred-right ">

          <p v-if= "this.text1===1"><span>Proximité: </span><br>Je suis votre intervenant particulier pour la <em>création de votre site Web</em>,
            tout au long du processus
            jusqu’à
            la mise en ligne, et aussi pour son maintien. Local, proche de vous, joignable. </p>
          <p v-if= "this.text1===2"><span>Sécurité:</span> utiliser un certificat SSL est un bon moyen de se prémunir contre les attaques et
            de rassurer vos visiteurs sur la sécurité de votre site web.</p>

          <p v-if= "this.text1===3" ><span>Besoins:</span><i>"Qui réagit uniquement à ce que le client dit vouloir, risque fort de ne pas lui offrir ce qu'il attend
            vraiment."</i></p>

            <p v-if= "this.text1===4"><em>Développeur Web Freelance</em>, basé en Rhone Alpes au Bois d'oingt ,au coeur des Pierre Dorées ,<em> à
              l'écoute de vos besoins</em> </p>

        </div>
<button  class="petitbouton3" @click="bigtext3()">{{this.suite}}</button>
      </div>
 </transition>
    </div>

  </div>
</template>

<script>
/* eslint-disable quotes */
/* eslint-disable padded-blocks */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable semi */
/* eslint-disable space-before-function-paren */
export default {
  data() {
    return {

      img1: true,
      img2: true,
      img3: true,
      text1: 1,

      suite:"->la performance",
      backgroundpercent: 1
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
      this.img2 = true;
      this.img3 = true;
this.suite="->La performance";
this.text1=1;
    },
     bigtext: function () {
       if (this.text1===4){ this.text1=1}else {      this.text1++;}
if (this.text1===1){this.suite="->La performance"}
if (this.text1===2){this.suite="->La Pérennité"}
if (this.text1===3){this.suite="->Mon développeur"}
if (this.text1===4){this.suite="->La maîtrise"}

    },
    bigtext2: function () {
       if (this.text1===4){ this.text1=1}else {      this.text1++;}
if (this.text1===1){this.suite="->Un site sur mesure"}
if (this.text1===2){this.suite="->Pertinents"}
if (this.text1===3){this.suite="->Mon développeur"}
if (this.text1===4){this.suite="->Travaillons ensemble"}

    },
     bigtext3: function () {
       if (this.text1===4){ this.text1=1}else {      this.text1++;}
if (this.text1===1){this.suite="->sécurité"}
if (this.text1===2){this.suite="->Besoins"}
if (this.text1===3){this.suite="->Mon développeur"}
if (this.text1===4){this.suite="->Proximité"}

    },
    big2: function () {
      this.img3 = true;
      this.img2 = !this.img2;
      this.img1 = true;
      this.suite="->Un site sur mesure"
      this.tex1===1;
    },
     big3: function () {
      this.img3 = !this.img3;
      this.img2 =true;
      this.img1 = true;
      this.suite="->sécurité"
      this.text1===1;
    },
    devis1: function () {
      this.img1 = !this.img1;

    },
    devis2: function () {
      this.img2 = !this.img2;

    },
    devis3: function () {
      this.img3 = !this.img3;

    },

    handleScroll() {
 var viewporthaut = (window.innerHeight/window.innerWidth)*250;
      var hauteurImage = document.getElementById("imgtrois").offsetHeight * 2  - viewporthaut;

      if ((window.scrollY < 200)) {
        this.img1 = true;
        this.img2 = true;
        this.img3 = true;
      }
      if ((window.scrollY > hauteurImage) && (window.scrollY < (hauteurImage + viewporthaut-viewporthaut/3))) {


        var inter = (hauteurImage - window.scrollY) / (hauteurImage + viewporthaut-viewporthaut/3);
        document.getElementById("imgdeux").style.filter = "blur(" + (1 - inter) * 10 + "px)";
        document.getElementById("imgdeux").style.opacity = inter + 0.5;
        document.getElementById("imgdeux").style.transition = "all 0.5s ease-in-out";
        this.img1 = true;
        this.img2 = true;
        this.img3 = true;

      } else {
        document.getElementById('imgtrois').style = '';
      }





    }

  }



}

</script>

 <style lang="scss" scoped>





  @import "./blocImage.css";
  @import "./font.css";


  .disposition {

    margin: 1vw;
max-width: 40vw;

    line-height: 1.45;
    flex: auto;
    height: 33vh;

  }
.disposition1 {

    margin: 1vw;
max-width: 40vw;

    line-height: 1.45;
    flex: auto;
    height: 33vh;

  }


  .essaiBordure{
border-right: 4px solid #FBC831;


  }
  .essaiBordure2{
border-left: 4px solid #FBC831;


  }
.résumé{
  text-align: right;

}


  .createur-de-site-internet {
    text-align: right;
color: #49788C;
    /* poussé de la moitié de hauteur du référent */

font-family: 'Courgette', cursive;
padding-right: 1vw;
  }

  .création-site-web {
margin-top: -1vh;
color: #51225C ;

    text-align: left;
font-family: 'Courgette', cursive;
padding-left: 1vw;
  }

  .créer-un-site-web {
    text-align: right;
font-family: 'Courgette', cursive;
color: #170F63;
padding-right: 1vw;
  }

  .disposition-text {
 margin: 1.414vw;
max-width: 47vw;

    line-height: 1.45;
    flex: auto;
    height: 33vh;


  }

  .titre-premiertexte {
max-width: 50vw;
 text-align: left;

  }


  .titre-deuxiémetexte {
max-width: 60vw;
 text-align: right;
  }
.titre-deuxiémetexte>p{

font-size: 1.618em;

}


span{
  color:indianred;
}
.special{
font-size: 1.618em;
font-weight: 800;
}
  em {


    font-weight: 800;
  }

  .titre-troisiemetexte {

max-width: 61vw;
 text-align: left;

  }
.titre-troisiemetexte>p{

font-size: 1.618em;

}
 ul {

font-family: 'Courgette', cursive;

list-style-type: none;
    margin: 0;
    padding: 0;

  }



  p,li {

    font-weight: inherit;
    font-family: 'Courgette', cursive;
     font-size: 1.2em;
line-height:1.5
  }
.titre-premiertexte>ul>li{

font-size: 1.618em;

}
  h1,
  h2,
  h3,
  h4 {
    margin: 1vw 0 0.5vw;
    font-family: 'Courgette', cursive;
    font-weight: inherit;
    line-height: 1.2;
  }


h3 {
  margin-top: 0;
  font-size: 6.854em;
}

h2 {
  font-size: 4.236em;
}

h1 {
  font-size: 2.218em;
}

h4 {
  font-size: 1.618em;
}

small,
.font_small {
  font-size: 0.618em;
}
img{
 width: 55vw;

    height: 33vh;
 border-radius: 5px;
 filter: drop-shadow(5px 5px 5px black);
}
.imgage1{
width: 54vw;

    height: 33vh;
}
  .avant {
position: absolute;



    height: 33vh;

    opacity: 1;
    z-index: 5;
  }

  .après {
    position: absolute;
max-width: 60vw;
    height: 33vh;

    opacity: 1;
    z-index: 3;
  }

  .pendant {
    position: absolute;
max-width: 60vw;
    height: 33vh;
margin: 1vw;
    opacity: 1;
    z-index: 3;
  }

  .fondtext {
    background:transparent;
width: 55vw;
    margin: auto;
    height: 33vh;
    opacity: 1;

  }
.fondtext1 {
    background:transparent;
width: 55vw;

    height: 33vh;
    opacity: 1;

  }
  .fond {
display: inherit;


top:0;
    z-index: 3;
  }

  .fond1 {


    z-index: 2;
  }

  .fond2 {

    z-index: 1;
  }

  .scale-down-right-enter-active {
    -webkit-animation: scale-down-right 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) reverse;
    animation: scale-down-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) reverse;
  }
.scale-down-right-leave-active {
    -webkit-animation: scale-down-right 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: scale-down-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }


  .slide-in-blurred-right-enter-active {
    -webkit-animation: slide-in-blurred-right 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
    animation: slide-in-blurred-right 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
  }
  .slide-in-blurred-right-leave-active {
    -webkit-animation: slide-in-blurred-right 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) reverse;
    animation: slide-in-blurred-right 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) reverse;
  }
 .slide-in-blurred-right2-enter-active {
    -webkit-animation: slide-in-blurred-right2 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
    animation: slide-in-blurred-right2 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
  }
  .slide-in-blurred-right2-leave-active {
    -webkit-animation: slide-in-blurred-right2 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) reverse;
    animation: slide-in-blurred-right2 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) reverse;
  }


.scale-down-left-enter-active {
    -webkit-animation: scale-down-left 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: scale-down-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) reverse;
  }
.scale-down-left-leave-active {
    -webkit-animation: scale-down-left 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: scale-down-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }


  .scale-up-right2 {
    -webkit-animation: scale-up-right2 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: scale-up-right2 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
.devis{
margin-left: 0vw;
}
.petitbouton{

position: relative;
float: left;
top:-13vh;
left: -5vw;
}
.petitbouton2{

position: relative;
top:-17vh;
left: 0vw;
float:right;
}
.petitbouton3{

position: relative;
float: left;
top:-15vh;
left: -5vw;

}
 button {
    color:#FBC831;
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
height:auto;
    font-size: 1.618em;
    font-weight: 800;
    text-align: center;

    margin-left: 5vw;
    margin-top:2.618vw;
width:auto;

z-index: 2;
transition: all 0.5s ease
  }
button:hover{
/*background:#4BA62A;*/
background-image: linear-gradient(to left, #007100, #1b7e0c, #2d8b17, #3c9821, #4ba62a);
 transform-origin: 0% 50%;
  transform: rotateY(4deg)  rotateZ(1deg);

}
 #imgdeux {
    height:112vh;
    width:100vw;
    position:relative;




   background-repeat: no-repeat;
    background-size: cover;
    z-index: 0;
    opacity: 1;
  }
  @-webkit-keyframes scale-down-right {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
      /*  -webkit-transform-origin: 100% 50%;
                  transform-origin: 100% 50%;*/
    }

    100% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      /*  -webkit-transform-origin: 100% 50%;
                  transform-origin: 100% 50%;*/
    }
  }

  @keyframes scale-down-right {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 100% 50%;
      transform-origin: 100% 50%;
    }

    100% {
      -webkit-transform: scale(0.7);
      transform: scale(0);
      -webkit-transform-origin: 130% 50%;
      transform-origin: 130% 50%;
      z-index: 0;
    }
  }

@-webkit-keyframes scale-down-left {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
      /*  -webkit-transform-origin: 100% 50%;
                  transform-origin: 100% 50%;*/
    }

    100% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      /*  -webkit-transform-origin: 100% 50%;
                  transform-origin: 100% 50%;*/
    }
  }

  @keyframes scale-down-left {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 100% 50%;
      transform-origin: 100% 50%;
    }

    100% {
      -webkit-transform: scale(0.7);
      transform: scale(0);
      -webkit-transform-origin: -130% 50%;
      transform-origin: -130% 50%;
      z-index: 0;
    }
  }






  /* ----------------------------------------------
       * Generated by Animista on 2018-10-10 23:55:28
       * w: http://animista.net, t: @cssanimista
       * ---------------------------------------------- */


  /**
       * ----------------------------------------
       * animation slide-in-blurred-right
       * ----------------------------------------
       */

  @-webkit-keyframes slide-in-blurred-right {
    0% {
      -webkit-transform: translateX(200px) scaleX(2.5) scaleY(0.2);
      transform: translateX(200px) scaleX(2.5) scaleY(0.2);
      -webkit-transform-origin: 0% 50%;
      transform-origin: 0% 50%;
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

  @keyframes slide-in-blurred-right {
    0% {
      -webkit-transform: translateX(200px) scaleX(2.5) scaleY(0.2);
      transform: translateX(200px) scaleX(2.5) scaleY(0.2);
      -webkit-transform-origin: 0% 50%;
      transform-origin: 0% 50%;
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
@-webkit-keyframes slide-in-blurred-right2 {
    0% {
      -webkit-transform: translateX(-200px) scaleX(2.5) scaleY(0.2);
      transform: translateX(-200px) scaleX(2.5) scaleY(0.2);
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

  @keyframes slide-in-blurred-right2 {
    0% {
      -webkit-transform: translateX(-200px) scaleX(2.5) scaleY(0.2);
      transform: translateX(-200px) scaleX(2.5) scaleY(0.2);
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
@media screen and (min-width: 200px) and (max-width: 640px) {
  .titre-troisiemetexte>p{

font-size: 0.8em;

}
.titre-deuxiémetexte>p{

font-size: 0.8em;

}
li {

  font-size:  0.618em;


}

.titre-premiertexte>ul>li{

font-size: 0.818em;

}


h1 {
  font-size: 1em;

}
button{
   font-size:  1em;

}
.disposition {

    margin: 1vw;
max-width: 38vw;

    line-height: 1.45;
    flex: auto;
    height: 33vh;

  }
  .disposition1 {

    margin: 1vw;
max-width: 38vw;
  }
}


@media screen and (min-width: 640px) and (max-width: 1100px) {
li,p {

  font-size:  1em;

}
 .titre-troisiemetexte>p{

font-size: 1em;

}
.titre-deuxiémetexte>p{

font-size: 1em;

}
.titre-premiertexte>ul>li{

font-size: 0.818em;

}
h1 {
  font-size: 1.618em;
}
button{
   font-size:  1.2em;

}

}


</style>
