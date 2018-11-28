<template >
<div class="fongradient blockparallaxgeneral2">
  <div class="clientContact">
    <img class="kenburns-top" src="./contact.png" alt="createur-de-site-internet sur mesure beaujolais oingt" title="" /></div>
  <div>
    <div class="pageContact">
      <boutongoogle class="Name" @done="onUserLoggedIn"></boutongoogle>
      <div class="Name">
        <input v-model="name" id="idname" type="text" placeholder="Nom" required />
      </div>
      <div class="email">
        <input v-model="email" type="text" placeholder="email" required />
      </div>
      <div class="bouton">
        <button @click.prevent="updateExistingPage ()">Oui, je veux un devis</button>
      </div>
      <div class="message">
        <textarea class="large" v-model="message" type="text" placeholder="message" required />
        </div>
</div>
  </div></div>
</template>

<script>

import firebase from 'firebase/app'

import 'firebase/firestore'

/* import emailExistence from 'email-existence'; */
import boutongoogle from './boutongoogle.vue'
const settings = {
  timestampsInSnapshots: true
}

/* eslint-disable eol-last */
/* eslint-disable spaced-comment */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable handle-callback-err */
/* eslint-disable padded-blocks */
/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable semi */
/* eslint-disable space-before-function-paren */
export default {
  data() {
    return {

      auth2: null,
      name: '',
      email: '',
      password: 'essai24',
      message: '',
      db: ''
    };
  },
  components: {

    boutongoogle
  },
  mounted() {
    var config = {
      apiKey: "AIzaSyBigm08IvDSf4ocKa01HlUIytMHv5YQyVY",
      authDomain: "jcgwebdeveloper.firebaseapp.com",
      databaseURL: "https://jcgwebdeveloper.firebaseio.com",
      projectId: "jcgwebdeveloper",
      storageBucket: "jcgwebdeveloper.appspot.com",
      messagingSenderId: '769951896037'
    };
    this.db = firebase.initializeApp(config);

  },
  methods: {
    updateExistingPage() {
      emailExistence.check(this.email, function (error, response) {
        if (response === 250) {

          this.db.firestore().collection('adresse').add({
            adressmail: this.email,
            nom: this.name,
            message: this.message

          })
        } else {
          alerts('probleme with mail');
        }
      });
      this.email = '';
      this.name = '';
      this.message = '';
    },



    onUserLoggedIn(user) {

      const profile = user.getBasicProfile()
      /* console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.*/
      this.name = profile.getName();

      this.email = profile.getEmail(); // This is null if the 'email' scope is not present.} // This is null if the 'email' scope is not present.
    }





  }
}
</script>

<style scoped>
@import "./font.css";

.fongradient {
  position: absolute;
  background-image: linear-gradient(135deg, #FDD819 10%, #E80505 100%);
  width: 100vw;
  height: 60vw;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;

}

.Name {

  margin-bottom: 2vw;

  border-radius: 4px;
  min-width: 42vw;
  align-self: auto;
  flex: 0 1 auto;
  height: 4.236vw;

  border: 0;

  background-color: #D6F49D;

  border-radius: 4px;


}

.message {





  border-radius: 4px;
  min-width: 41vw;
  align-self: auto;
  flex: 0 1 auto;
  height: 17vw;
  border: 0;


  background-color: #D6F49D;




}

.bouton {


  margin-bottom: 2vw;

  border-radius: 4px;

  align-self: auto;
  flex: 1 1 auto;

}

.email {
  margin-bottom: 2vw;

  height: 4.236vw;
  border: 0;
  min-width: 14vw;

  background-color: #D6F49D;

  border-radius: 4px;

  align-self: flex-start;
  flex: 0 1 auto;

}

#idname {
  position: relative;
  align-self: flex-start;
  flex: 0 1 auto;
  width: 42vw;
}

.large {

  height: 17vw;

}

.pageContact {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  top: 9vw;
  left: 28vw;
  width: 42vw;
}

.clientContact {
  position: absolute;
  top: 11vw;
  left: 16vw;

  background-repeat: no-repeat;
  background-size: cover;
  height: 26vw;
  width: 68vw;
  z-index: 0;
  clip-path: inset(0vw 0vw);
}


button {

  position: relative;
  color: #FBC831;
  font-family: 'Bitter', serif;
  text-shadow: 3px 3px 3px #D17B0F;
  background: #007100;
  background-repeat: no-repeat;
  border: 0;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  border-radius: 4px;
  text-decoration: none;
  height: 4.236vw;
  font-size: 2vw;
  font-weight: 800;
  text-align: center;
  width: 28vw;

  z-index: 1;
  transition: all 0.5s ease
}

button:hover {
  /*background:#4BA62A;*/
  background-image: linear-gradient(to left, #007100, #1b7e0c, #2d8b17, #3c9821, #4ba62a);
  transform-origin: 0% 50%;
  transform: rotateY(4deg) rotateZ(1deg);

}

input {
  width: 13vw;
  height: 4.236vw;

  color: #007100;

  padding-left: 1vw;
  font-size: 1vw;
  font-family: 'Courgette', cursive;
  font-weight: 400;
  line-height: 1.45;
  background: transparent;
  border: 0;
  text-align: left;
  outline: none;
}

textarea {
  width: 41vw;
  color: white;
  outline: none;
  padding-left: 1vw;
  font-size: 1vw;
  font-family: 'Courgette', cursive;
  font-weight: 400;
  line-height: 1.45;
  background: transparent;
  border: 0;
  text-align: left;
}

.kenburns-top {
  -webkit-animation: kenburns-top 5s ease-out both;
  animation: kenburns-top 10s infinite both;
}

/* ----------------------------------------------
 * Generated by Animista on 2018-11-1 14:44:31
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation kenburns-top
 * ----------------------------------------
 */
@-webkit-keyframes kenburns-top {
  0% {
    -webkit-transform: scale(1) translateY(0);
    transform: scale(1) translateY(0);
    -webkit-transform-origin: 50% 16%;
    transform-origin: 50% 16%;
  }

  50% {
    -webkit-transform: scale(1.25) translateY(-15px);
    transform: scale(1.25) translateY(-15px);
    -webkit-transform-origin: top;
    transform-origin: top;
    filter: blur(3px);
  }

  100% {
    -webkit-transform: scale(1) translateY(0);
    transform: scale(1) translateY(0);
    -webkit-transform-origin: 50% 16%;
    transform-origin: 50% 16%;
    filter: blur(1px);
  }
}

@keyframes kenburns-top {
  0% {
    -webkit-transform: scale(1) translateY(0);
    transform: scale(1) translateY(0);
    -webkit-transform-origin: 50% 16%;
    transform-origin: 50% 16%;
    filter: blur(1px);
  }

  50% {
    -webkit-transform: scale(1.25) translateY(-15px);
    transform: scale(1.25) translateY(-15px);
    -webkit-transform-origin: top;
    transform-origin: top;
    filter: blur(3px);
  }

  100% {
    -webkit-transform: scale(1) translateY(0);
    transform: scale(1) translateY(0);
    -webkit-transform-origin: 50% 16%;
    transform-origin: 50% 16%;
    filter: blur(1px);
  }
}

</style>
