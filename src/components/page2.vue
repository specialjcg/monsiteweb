<template>
  <div id="imgdeux" class="blockparallaxgeneral2 " @scroll="handleScroll()">
    <div class="createur-de-site-internet disposition" :class="[!this.img1 ? 'essaiBordure':'']">
      <h3>Pourquoi un <em>site web </em>sur-mesure <span>?</span></h3>
      <ul >
      <li class="résumé">Il renforce votre crédibilité</li>
      <li class="résumé">Il est souple et adaptable</li>
      <li class="résumé">il est rapide et référencé</li>

</ul>
 <button v-if=!this.img1 @click.prevent="devis()">Obtenir votre devis</button>
<button v-if=this.img1 @click.prevent="big1()">En Savoir plus</button>
    </div>
     <div class="createur-de-site-internet fond fondtext" >
       <div v-if=!this.img1>
         <div class="avant scale-down-right"  >
           <img src="./Photo by Jose Ramirez on Unsplash.png" alt="createur-de-site-internet sur mesure Photo by Jose Ramirez on Unsplash" title="Photo by Jose Ramirez on Unsplash.png"/>
           </div>
          <div class="titre-premiertexte  disposition-text slide-in-blurred-right " >

        <ul>
        <li><span>La maîtrise: </span> <em>Un site Web</em> programmé  et créé avec des sources internes, facile à utiliser et à améliorer,
        au contraire des briques de code ou des structures tout-en-un grappillés sur différentes plateformes.</li><br>
        <li><span>La Performance: </span><em>Un site Web</em> plus léger et rapide à la navigation et au chargement parce qu’il n’utilise pas de framework, ajusté pour être facile à améliorer et à faire évoluer</li><br>
        <li><span>La Pérennité: </span><em>Un site Web</em> utilisant les standards assure une structure solide dans le temps, contrairement à l’obsolescence de certaines technologies, de plus un code fait maison garantit une mise à jour rapide.</li>
      </ul>
      <p>Je suis votre <em>développeur Web Freelance</em>,adepte des projets fait mains, basé en Rhone Alpes au coeur
        du Beaujolais ,je suis disponible pour vos projets dans l’hexagone et au-delà.</p>

      </div>

      </div>
      <div v-else >
         <div class="avant scale-up-right2" >
           <img src="./Photo by Jose Ramirez on Unsplash.png" alt="createur-de-site-internet sur mesure Photo by Jose Ramirez on Unsplash" title="Photo by Jose Ramirez on Unsplash.png" /></div>

</div>
   </div>

    <div class="création-site-web fond fondtext">
      <div v-if=!this.img2>
        <div class="après scale-down-right" >

      </div>
         <div class="titre-deuxiémetexte disposition-text slide-in-blurred-right ">
         <p>Travaillons ensemble à la <em>création de votre site internet </em> et assurons son <em>référencement</em>
        afin qu’il
        se trouve en bonne place sur google, définissons vos besoins et améliorons vos objectifs, afin de vous
        présenter la solution la plus parfaite.</p>
        <p>Un <em>site sur mesure </em>sera codé de A à Z (« fait maison ») adapter à vos besoins et fonctionnalités, un <em>design</em> personnalisé peut offrir toutes les
          innovations pour attirer de nouveau client,le sur mesure est plus efficace ,plus maniable et plus rapide, car il est pensé en amont
          pour un meilleur <em>référencement</em></p>
        <p>Proposer des contenus pertinents, c’est bien, mais disposer d'un site sur mesure où il est <em>agréable de naviguer</em>, c’est indispensable.
        Il s’agit de l’un des éléments déterminants  montrant  pourquoi vos prospects poursuivront leur navigation sur votre <em>site Web </em>et pas sur un autre.</p>
<p><em>Développeur Web Freelance</em>, basé en Rhone Alpes au Bois d'oingt ,au coeur des Pierre Dorées , installons vos prospects au centre de votre <em>site Web </em></p>

      </div>
      </div>
      <div v-else >
        <div class="après scale-up-right2"></div>
        <div class="titre-deuxiémetexte disposition-text slide-out-blurred-right ">

      </div>

</div>


    </div>
    <div class="création-site-web disposition" :class="[!this.img2 ? 'essaiBordure2':'']">
      <h3>Vous Voulez <span class="special">+</span> de <em>prospect</em> <span>?</span></h3>

      <ul >
      <li >Faites passer vos clients à l'action</li>
      <li >Soigner votre proposition de valeur, Penser au design </li>
            <li >Améliorer l'expérience utilisateur de vos futurs clients</li>

</ul>
<button v-if=!this.img2 class="devis" @click.prevent="devis()">Obtenir votre devis</button>
<button v-if=this.img2 class="devis" @click.prevent="big2()">En Savoir plus</button>
    </div>
  <div class="créer-un-site-web  disposition" :class="[!this.img3 ? 'essaiBordure':'']">
     <h3>Vous voulez que l'on s'occupe de tout <span>?</span></h3>
      <ul >
      <li class="résumé">Améliorer vos contenus</li>
      <li class="résumé">Proche de vous en toute sécurité</li>
      <li class="résumé">Fabriqué en France</li>

</ul>
 <button v-if=!this.img3 @click.prevent="devis()">Obtenir votre devis</button>
<button v-if=this.img3 @click.prevent="big3()">En Savoir plus</button>
    </div>
     <div class="créer-un-site-web fond fondtext" >
       <div v-if=!this.img3>
         <div class="avant scale-down-right"  >
           <img src="./IMG_20180927_191002_535.jpg" alt="createur-de-site-internet sur mesure " title=""/>
           </div>
           <div class="titre-troisiemetexte  disposition-text slide-in-blurred-right " >

      <p><span>Proximité: </span>Je suis votre intervenant particulier pour la <em>création de votre site Web</em>, tout au long du processus
        jusqu’à
        la mise en ligne, et aussi pour son maintien. Local, proche de vous, joignable. </p>
<p><span>Sécurité :</span> utiliser un certificat SSL est un bon moyen de se prémunir contre les attaques et de rassurer vos visiteurs sur la sécurité de votre site web.</p>

        <p><span>Besoins:</span><i>"Votre site web n'est pas le centre de votre univers. Votre page Facebook n'est pas le centre de votre univers.
          Votre application mobile n'est pas le centre de votre univers. Le client est le centre de votre univers"</i>. "Bruce Ernst, LeadID " </p>
<p>"Qui réagit uniquement à ce que le client dit vouloir, risque fort de ne pas lui offrir ce qu'il attend vraiment."<br>
<em>Développeur Web Freelance</em>, basé en Rhone Alpes au Bois d'oingt ,au coeur des Pierre Dorées ,<em> à l'écoute de vos besoins</em> </p>

      </div>

      </div>
      <div v-else >
         <div class="avant scale-up-right2" >
           <img src="./IMG_20180927_191002_535.jpg" alt="createur-de-site-internet sur mesure" title="" /></div>

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
this.img2 = true;
this.img3 = true;

      },
      big2: function () {
        this.img3 = true;
        this.img2 = !this.img2;
        this.img1 = true;
      },
      big3: function () {
        this.img3 = !this.img3;
this.img2 = true;
this.img1 = true;
      },
      handleScroll() {

var hauteurImage=document.getElementById("imgtrois").offsetHeight*2-180;

 if ((window.scrollY <200)){
  this.img1=true;
this.img2=true;
this.img3=true;
 }
        if ((window.scrollY > hauteurImage) && (window.scrollY < hauteurImage + 150)) {


          var inter = (hauteurImage - window.scrollY) / 150;
          document.getElementById("imgdeux").style.filter = "blur(" + (1 - inter) * 10 + "px)";
          document.getElementById("imgdeux").style.opacity = inter + 0.5;
          document.getElementById("imgdeux").style.transition = "all 0.5s ease-in-out";
this.img1=true;
this.img2=true;
this.img3=true;

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
    height: 18vw;

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


    z-index: 0;
    width: 61vw;


  }

  .titre-premiertexte {
max-width: 60vw;
 text-align: left;


  }

  .titre-deuxiémetexte {

 text-align: right;

    font-weight: inherit;
    font-family: 'Courgette', cursive;
     font-size: 1vw;
line-height:1.5



  }
span{
  color:indianred;
}
.special{
font-size: 1.414vw;
font-weight: 800;
}
  em {


    font-weight: 800;
  }

  .titre-troisiemetexte {

max-width: 60vw;
 text-align: left;

  }

 ul {

font-family: 'Courgette', cursive;
font-size: 1vw;
list-style-type: none;
    margin: 0;
    padding: 0;

  }



  p,li {

    font-weight: inherit;
    font-family: 'Courgette', cursive;
     font-size: 1vw;
line-height:1.5
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
    font-size: 3.998vw;
  }

  h2 {
    font-size: 2.827vw;
  }

  h3 {
    font-size: 1.999vw;
  }

  h4 {

    font-size: 1.414vw;
  }

  small,
  .font_small {
    font-size: 0.707vw;
  }
img{
 width: 61vw;

    height: 19vw;


}

  .avant {
position: absolute;
border-right:1px solid;
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
    width: 61vw;
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
.devis{
margin-left: 0vw;
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
height:2.618vw;
    font-size: 1.618vw;
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
    height:60vw;
    width:100vw;




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
