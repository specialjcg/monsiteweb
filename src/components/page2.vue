<template>
  <div id="imgdeux" class="blockparallaxgeneral2 " @scroll="handleScroll()">
    <div class="createur-de-site-internet disposition" >
      <h3>Pourquoi un <em>site web </em>sur-mesure</h3>
      <ul>
      <li>Renforcer votre crédibilité</li>
      <li>Souplesse et adaptabilité</li>
      <li>Rapide et référencer</li>
</ul>
    </div>
     <div class="createur-de-site-internet fond fondtext" >
       <div v-if=!this.img1>
         <div class="avant scale-down-right"  > 
           <img src="./Photo by Jose Ramirez on Unsplash.png" alt="createur-de-site-internet sur mesure Photo by Jose Ramirez on Unsplash" title=""/> 
           </div>
          <div class="titre-premiertexte  disposition-text slide-in-blurred-right " >

        <ul>
        <li><span>La maîtrise:</span> je programme mes sources , aisées à utiliser et à améliorer,
        au contraire des briques de code ou des structures tout-en-un grappillés sur différentes plateformes.</li><br>
        <li><span>La Performance:</span><em>Un site Web</em> plus léger et rapide à la navigation et au chargement parce qu’il n’utilise pas de framework, ajuster pour être facile à améliorer et à faire évoluer</li><br>
        <li><span>La Pérennité:</span><em>Un site Web</em> utilisant les standards assure une structure solide dans le temps, contrairement à l’obsolescence de certaines technologies, et un code fait maison garantit une mise à jour rapide.</li>
      </ul>
      <p>Je suis votre <em>développeur Web Freelance</em>,adepte des projets fait mains, basé en Rhone Alpes au coeur
        du Beaujolais ,je suis disponible pour vos projets dans l’hexagone et au-delà.</p>
      </div>
      </div>
      <div v-else >
         <div class="avant scale-up-right2" @mouseover="big1()">
           <img src="./Photo by Jose Ramirez on Unsplash.png" alt="createur-de-site-internet sur mesure Photo by Jose Ramirez on Unsplash" title="" /></div>
    
</div>
   </div>

    <div class="création-site-web fond fondtext">
      <div v-if=!this.img2>
        <div class="après scale-down-right" @mouseover.self="big2()">

      </div>
         <div class="titre-deuxiémetexte disposition-text slide-in-blurred-right ">
        <h4>un site sur mesure </h4>
        <p>fait main,fidèle à vos besoins </p>
      </div>
      </div>
      <div v-else >
        <div class="après scale-up-right2" @mouseover.self="big2()"></div>
        <div class="titre-deuxiémetexte disposition-text slide-out-blurred-right ">
        <h4>un site sur mesure </h4>
        <p>fait main,fidèle à vos besoins </p>
      </div>

</div>


    </div>
    <div class="création-site-web disposition">
      <h4>Travaillons ensemble à la <em>création de votre site internet </em> et assurons son <em>référencement</em>
        afin qu’il
        se trouve en bonne place sur google, définissons vos besoins et améliorons vos objectifs, afin de vous
        présenter la solution la plus parfaite.</h4>
    </div>

    <div class="créer-un-site-web disposition">
      <h4>Je suis votre intervenant particulier pour la <em>création de votre site Web</em>, tout au long du processus
        jusqu’à
        la mise en ligne, et aussi pour son maintien. Local, proche de vous, joignable. </h4>
    </div>


    <div class="fond2 fondtext">
      <div v-if=!this.img3 class="titre-troisiemetexte disposition-text slide-in-blurred-right ">
        <h4>un site sur mesure </h4>
        <p>fait main,fidèle à vos besoins </p>
      </div>
      <div v-else class="titre-troisiemetexte disposition-text slide-out-blurred-right ">
        <h4>un site sur mesure </h4>
        <p>fait main,fidèle à vos besoins </p>
      </div>
      <div v-if=this.img3 class="pendant scale-up-right2" @mouseover.self="big3()"></div>

      <div v-else class="pendant scale-down-right" @mouseover.self="big3()">

      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

        img1: true,
        img2: true,
        img3: true,
        backgroundpercent:1
      }
    },
    created: function () {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed: function () {
      window.removeEventListener('scroll', this.handleScroll);
    },
    mounted: {



    },
    computed: {

    },

    methods: {

      big1: function () {
        this.img1 = !this.img1;

      },
      big2: function () {
        this.img2 = !this.img2;
      },
      big3: function () {
        this.img3 = !this.img3;

      },
      handleScroll() {

var hauteurImage=document.getElementById("imgtrois").offsetHeight*2-180;

 if ((window.scrollY <200)){
   this.img1=true;
 }
        if ((window.scrollY > hauteurImage) && (window.scrollY < hauteurImage + 150)) {


          var inter = (hauteurImage - window.scrollY) / 150;
          document.getElementById("imgdeux").style.filter = "blur(" + (1 - inter) * 10 + "px)";
          document.getElementById("imgdeux").style.opacity = inter + 0.5;
          document.getElementById("imgdeux").style.transition = "all 0.5s ease-in-out";
this.img1=true;
        } else {
          document.getElementById("imgdeux").style.filter = "blur(0)";
          document.getElementById("imgdeux").style.opacity = 1;
          document.getElementById("imgdeux").style.transition = "all 0.5s ease-in-out";
        }





      }

    }



  }
</script>

 <style lang="scss" scoped>





  @import "./blocImage.css";
  @import "./font.css";


  .disposition {
    width: 33vw;
    margin: 1vw;


    line-height: 1.45;
    flex: auto;
    height: 19vw;
border:1px solid;
  }



  .createur-de-site-internet {
    text-align: right;
color:black;
    /* poussé de la moitié de hauteur du référent */

font-family: 'Courgette', cursive;
  }

  .création-site-web {
color:black;
    text-align: left;
font-family: 'Courgette', cursive;

  }

  .créer-un-site-web {
    text-align: right;
font-family: 'Courgette', cursive;
color:black;

  }

  .disposition-text {

    color:#5373A5 ;
    z-index: 0;
    width: 61vw;
  }

  .titre-premiertexte {
max-width: 60vw;
 text-align: left;


  }

  .titre-deuxiémetexte {}
span{
  color:indianred;
}
  em {


    font-weight: 800;
  }

  .titre-troisiemetexte {}

 ul {

font-family: 'Courgette', cursive;
font-size: 1em;
list-style-type: none;
    margin: 0;
    padding: 0;

  }



  p,li {
text-align: left;
    font-weight: inherit;
    font-family: 'Courgette', cursive;
     font-size: 1em;
line-height:1.5
  }

  h1,
  h2,
  h3,
  h4 {
    margin: 1.414em 0 0.5em;
    font-family: 'Courgette', cursive;
    font-weight: inherit;
    line-height: 1.2;
  }

  h1 {
    margin-top: 0;
    font-size: 3.998em;
  }

  h2 {
    font-size: 2.827em;
  }

  h3 {
    font-size: 1.999em;
  }

  h4 {

    font-size: 1.414em;
  }

  small,
  .font_small {
    font-size: 0.707em;
  }
img{
 width: 61vw;

    height: 19vw;


}
  .avant {
position: absolute;

    width: 61vw;

    height: 19vw;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 1;
    z-index: 5;
  }

  .après {
    position: absolute;
 width: 61vw;
    background-image: url("country-house-540796_1920.jpg");
    height: 19vw;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 1;
    z-index: 3;
  }

  .pendant {
    display: inline-block;
    width: 100%;
    background-image: url("IMG_20180927_191002_535.jpg");
    height: 19vw;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 1;
    z-index: 3;
  }

  .fondtext {
    background:transparent;
    width: 61vw;
    margin: auto;
    height: 19vw;
    opacity: 1;

  }

  .fond {
display: inherit;

  float: left;
top:0;
    z-index: 3;
  }

  .fond1 {


    z-index: 2;
  }

  .fond2 {

    z-index: 1;
  }

  .scale-down-right {
    -webkit-animation: scale-down-right 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: scale-down-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }

  .scale-up-right2 {
    -webkit-animation: scale-up-right2 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: scale-up-right2 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
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


  /* ----------------------------------------------
       * Generated by Animista on 2018-10-10 20:55:59
       * w: http://animista.net, t: @cssanimista
       * ---------------------------------------------- */


  /**
       * ----------------------------------------
       * animation scale-up-right
       * ----------------------------------------
       */

  @-webkit-keyframes scale-up-right2 {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: 100% 50%;
      transform-origin: 100% 50%;
    }

    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 100% 50%;
      transform-origin: 100% 50%;
    }
  }

  @keyframes scale-up-right2 {
    0% {
      -webkit-transform: scale(0.7);
      transform: scale(0);
      -webkit-transform-origin: 130% 50%;
      transform-origin: 130% 50%;
    }

    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 100% 50%;
      transform-origin: 100% 50%;
    }
  }




  .slide-in-blurred-right {
    -webkit-animation: slide-in-blurred-right 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
    animation: slide-in-blurred-right 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
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
      -webkit-transform: translateX(1000px) scaleX(2.5) scaleY(0.2);
      transform: translateX(1000px) scaleX(2.5) scaleY(0.2);
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

  .slide-out-blurred-right {
    -webkit-animation: slide-out-blurred-right 0.45s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
    animation: slide-out-blurred-right 0.45s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
  }


  /* ----------------------------------------------
       * Generated by Animista on 2018-10-11 0:3:49
       * w: http://animista.net, t: @cssanimista
       * ---------------------------------------------- */


  /**
       * ----------------------------------------
       * animation slide-out-blurred-right
       * ----------------------------------------
       */

  @-webkit-keyframes slide-out-blurred-right {
    0% {
      -webkit-transform: translateX(0) scaleY(1) scaleX(1);
      transform: translateX(0) scaleY(1) scaleX(1);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }

    100% {
      -webkit-transform: translateX(1000px) scaleX(2) scaleY(0.2);
      transform: translateX(1000px) scaleX(2) scaleY(0.2);
      -webkit-transform-origin: 0% 50%;
      transform-origin: 0% 50%;
      -webkit-filter: blur(40px);
      filter: blur(40px);
      opacity: 0;
    }
  }

  @keyframes slide-out-blurred-right {
    0% {
      -webkit-transform: translateX(0) scaleY(1) scaleX(1);
      transform: translateX(0) scaleY(1) scaleX(1);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }

    100% {
      -webkit-transform: translateX(200px) scaleX(2) scaleY(0.2);
      transform: translateX(200px) scaleX(2) scaleY(0.2);
      -webkit-transform-origin: 0% 50%;
      transform-origin: 0% 50%;
      -webkit-filter: blur(40px);
      filter: blur(40px);
      opacity: 0;
    }
  }
</style>
