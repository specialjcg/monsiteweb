<template>
<div class="heade">
   <img src="./logo.png" class="logo">

  <div class="nom">Valorisetonweb</div>
  <a class="expanderSocial" href="https://www.linkedin.com/in/gouleaujeancharles/" target="_blank">

    <img src="./in.png" alt="création de site internet sur mesure linkedin" title="mon site linkedin" />

  </a>
  <a class="expanderSocial" href="https://www.linkedin.com/in/gouleaujeancharles/" target="_blank">
    <img src="./insta.png" alt="création de site internet sur mesure instagram" />
  </a>
  <a class="expanderSocial" href="https://www.linkedin.com/in/gouleaujeancharles/" target="_blank">

    <img src="./facebook.png" alt="création de site internet sur mesure facebook" />
  </a>
  <button class="devis" @click.prevent="devis()">Obtenir votre devis</button>
  <ul v-if=this.visible>
    <li>
      <router-link to="/">Accueil</router-link>
    </li>
    <li><a href="index.html">A propos</a></li>
    <li>
      <router-link to="/blog/">blog</router-link>
    </li>
    <li>
      <router-link to="/portfolio">portfolio</router-link>
    </li>
    <li>
      <router-link to="/contact">contact</router-link>
    </li>
  </ul>
</div>
</template>
<script>
/* eslint-disable padded-blocks */
/* eslint-disable comma-dangle */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable space-in-parens */
/* jshint esversion: 6 */


export default {
  name: 'menue',
  data() {
    return {

      visible: true,

    }
  },




  methods: {

    menu1() {

      this.visible = !this.visible;


    }



  }
}

</script>
<style scoped>
@import "./font.css";

 .heade {
    position: fixed;
display: flex;
text-align: center;
    justify-content: center;
    align-items: center;
    left: 0;
    right: 0;
    height: 6.85vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    top: 0;
    z-index: 7;
    background: #000000;

  }
  .nom{

color: aliceblue;
 font-family: 'Courgette', cursive;
top: 0;

    list-style-type: none;
 text-decoration: none;
margin-left: 1vw;
    font-size: 2.618em;
    text-align: left;

  }
  li {
    float: left;
    /*pour IE*/
    margin-left: 1vw;
    padding-right: 1vw;
    padding-left: 1vw;

  }

  ul li a {

    text-decoration: none;
    display: inline-block;
    font-size: 1em;
    text-align: center;
    transition: 0.5s;
    font-family: 'Courgette', cursive;
    color: aliceblue;
  }


ul {
padding-right: 1vw;
position: relative;
   /* padding: 25px 0;*/

    /* on centre les liens */
    text-align: left;
    list-style-type: none;
    margin-top: 2.5vh;
 }
  ul li a:hover {
    transform: translate3d(20px,0,0);
    color: red;
    text-align: center;
    font-family: 'Courgette', cursive;
  }

img{
width: 3vw;
    height: 5vh;
    margin-top: 0;
   margin-left: 1vw;
 background-repeat: no-repeat;
    background-size: cover;
vertical-align:middle;
}
.logo {





  width: 2vw;
    height: 6vh;

 background-repeat: no-repeat;
    background-size: cover;
vertical-align:middle;
  }
  button {
   color:#FBC831;
font-family: 'Bitter', serif;
 text-shadow: 3px 3px 3px #D17B0F;
   background:rgba(0, 113, 0,1.2);
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
height: auto;
    font-size: 2em;
    font-weight: 800;
    text-align: center;
width: 22vw;
margin-left:7vw;
margin-right: 5vw;
z-index: 1;

  }
button:hover{
  transition: all 0.5s ease;
/*background:#4BA62A;*/
background-image: linear-gradient(to left, #007100, #1b7e0c, #2d8b17, #3c9821, #4ba62a);
 transform-origin: 0% 50%;
  transform: rotateY(4deg)  rotateZ(1deg);

}
button:active{
/*background:#4BA62A;*/
transition: all 0.1s ease;
background: black;


}
@media only screen and (max-width: 600px) {
.heade {

   height: 11.08vh;
flex-flow: row wrap;

  }
  img{
margin:1vw;
padding: 0;
flex: 1 0 auto;

  }
 .nom{
flex: 1 0 auto;

margin-left: 4vw;
    font-size: 1.2em;
    text-align: left;
vertical-align:top;
  }
  .logo{

margin:0;
padding: 0;
flex: 1 0 auto;

  }
button{
  margin:1vw;
  margin-right: 5vw;
padding: 1vw;
 font-size: 1.418em;
flex: 1 0 auto;
width:40vw;

 }


ul {
padding-right: 1vw;
position: relative;
   /* padding: 25px 0;*/
flex: 1 0 auto;
    /* on centre les liens */
    text-align: left;
    list-style-type: none;
    margin-top: 0vh;
    margin-left: 7vw;
 }


}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
.heade {

   height: 11.08vh;
flex-flow: row wrap;

  }
  img{
margin:1vw;
padding: 0;
flex: 1 0 auto;

  }
 .nom{
flex: 1 0 auto;

margin-left: 4vw;
    font-size: 1.2em;
    text-align: left;
vertical-align:top;
  }
  .logo{

margin:0;
padding: 0;
flex: 1 0 auto;

  }
button{
  margin:1vw;
  margin-right: 5vw;
padding: 1vw;
 font-size: 1.618em;
flex: 1 0 auto;
width:40vw;
 }


ul {
padding-right: 1vw;
position: relative;
   /* padding: 25px 0;*/
flex: 1 0 auto;
    /* on centre les liens */
    text-align: left;
    list-style-type: none;
    margin-top: 0vh;
   margin-left: 15vw;
 }


}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

.heade{

  height: 11.08vh;
}
 img{
margin:1vw;
padding: 0;
flex: 1 0 auto;

  }
 .nom{
flex: 1 0 auto;

margin-left: 5vw;
    font-size: 1.2em;
    text-align: left;
vertical-align:top;
  }
  .logo{

margin:0;
padding: 0;
flex: 1 0 auto;

  }
button{

  margin-right: 5vw;

 font-size: 1.618em;
flex: 1 0 auto;
width:40vw;
 }
ul {
padding-right: 1vw;
position: relative;
   /* padding: 25px 0;*/
flex: 0 1 auto;
    /* on centre les liens */
    text-align: left;
    list-style-type: none;

    margin-left: -5vw;
 }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {

.heade{

  height: 6.85vh;
}
 img{
margin:1vw;
padding: 0;
flex: 1 0 auto;

  }
 .nom{
flex: 1 0 auto;
margin:0;
padding: 0;
margin-left: 4vw;
    font-size: 1.2em;
    text-align: left;
vertical-align:top;
  }
  .logo{

margin:0;
padding: 0;
flex: 1 0 auto;

  }
button{
margin:0;
padding: 0;


 font-size: 1.618em;
flex: 1 0 auto;
width:20vw;
 }
ul {

position: relative;
   /* padding: 25px 0;*/
flex: 0 1 auto;
    /* on centre les liens */
    text-align: left;
    list-style-type: none;

    margin-left: -5vw;
 }
}

@media only screen and (min-width: 1100px) {



 button{
 font-size: 1.618em;

width: 24vw;
flex: 0 1 auto;

 }
.heade{

  height: 6.85vh;
}
img{

flex: 0 1 auto;

}
.logo{
  flex: 0 1 auto;
  margin-left: 2vw;
}
ul {
padding-right: 1vw;
position: relative;
   /* padding: 25px 0;*/
flex: 0 1 auto;
    /* on centre les liens */
    text-align: left;
    list-style-type: none;
    margin-top: 2.5vh;
    margin-left: -5vw;
 }

 .nom{
flex: 1 0 auto;
margin:0;
padding: 0;
margin-left: 3vw;
    font-size: 1.618em;
    text-align: left;
vertical-align:top;
  }

}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
 button{
 font-size: 1.818em;

width: 23vw;
margin-left: 3vw;
margin-right: 1vw;

 }






}
@media only screen and (min-width: 1400px) {
 button{
 font-size: 2em;

width: 22vw;
margin-left: 2vw;
margin-right: 5vw;

 }

.nom{
flex: 1 0 auto;
margin:0;
padding: 0;
margin-left: 5vw;
    font-size: 1.618em;
    text-align: left;
vertical-align:top;
  }
.logo{
  flex: 0 1 auto;
  margin:0;
padding: 0;
margin-left: 2vw;
}



}




.expanderSocial{
transition: all 0.5s ease;

}
.expanderSocial:hover{
 transform-origin: 10% 50%;
  transform: scale(1.2);
}

</style>
