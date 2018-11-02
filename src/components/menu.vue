<template>

  <div class="header">
     <div class="logo"></div>
     <div class="nom">jcgwebdeveloper</div>
     <a href="https://www.linkedin.com/in/gouleaujeancharles/" target="_blank" ><img src="./in.png" alt="création de site internet sur mesure linkedin"/></a>
     <img src="./insta.png" alt="création de site internet sur mesure instagram"/>
     <img src="./facebook.png" alt="création de site internet sur mesure facebook"/>
<button class="devis" @click.prevent="devis()">Obtenir votre devis</button>
      <ul v-if=this.visible>
        <li><router-link to="/">Acceuil</router-link></li>
        <li><a href="index.html">A propos</a></li>
        <li><router-link to="/blog">Article</router-link></li>
        <li><router-link to="/portfolio">portfolio</router-link></li>
        <li><router-link to="/contact">contact</router-link></li>
      </ul>


    </div>

</template>
<script>



export default {
 name: 'menu',
    data() {
      return {

        visible: true,

    }},

    mounted: {



    },
    computed: {

    },

    methods: {

      menu() {

        this.visible = !this.visible;


      }



  }}

</script>
<style scoped>
@import "./font.css";
 .header {
    position: fixed;
display: flex;
text-align: center;
    justify-content: center;
    align-items: center;
    left: 0;
    right: 0;
    height: 4.236vw;
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
    font-size: 1.618vw;
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
    font-size: 1vw;
    text-align: center;
    transition: 1s;
    font-family: 'Courgette', cursive;
    color: aliceblue;
  }


ul {
  margin-left: 3vw;
position: relative;
   /* padding: 25px 0;*/

    /* on centre les liens */
    text-align: left;
    list-style-type: none;
 }
  ul li a:hover {
    transform: translateX(20px);
    color: white;
    text-align: center;
    font-family: 'Courgette', cursive;
  }

img{
width: 2vw;
    height: 2vw;
    margin-top: 0;
   margin-left: 1vw;
 background-repeat: no-repeat;
    background-size: cover;

}
.logo {




    background-image: url('logo.png');
    width: 4vw;
    height: 4vw;
    margin-top: 0;
   margin-left: 1vw;
 background-repeat: no-repeat;
    background-size: contain;
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
    font-size: 2vw;
    font-weight: 800;
    text-align: center;
width: 22vw;
margin-left:5vw;
margin-right: 8vw;
z-index: 1;
transition: all 0.5s ease
  }
button:hover{
/*background:#4BA62A;*/
background-image: linear-gradient(to left, #007100, #1b7e0c, #2d8b17, #3c9821, #4ba62a);
 transform-origin: 0% 50%;
  transform: rotateY(4deg)  rotateZ(1deg);

}

</style>
