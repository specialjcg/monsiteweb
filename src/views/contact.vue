<template>
  <div class="fongradient blockparallaxgeneral2">
    <div class="clientContact">
      <img
        class="kenburns-top"
        src="../components/contact.png"
        alt="createur-de-site-internet sur mesure beaujolais oingt"
        title=""
      />
    </div>
    <div>
      <div class="pageContact">
        <boutongoogle @done="onUserLoggedIn"></boutongoogle>
        <div class="name">
          <input
            v-model="name"
            id="idname"
            type="text"
            placeholder="Nom"
            required
          />
        </div>
        <div class="email">
          <input v-model="email" type="text" placeholder="email" required />
        </div>
        <div class="bouton">
          <button @click.prevent="updateExistingPage()">
            Oui, je veux un devis
          </button>
        </div>
        <div class="message">
          <textarea
            class="large"
            v-model="message"
            type="text"
            placeholder="message"
            required
          />
        </div>
        <div v-if="loading" class="bouton2">
          <button @click.prevent="unload()">{{ this.jokes }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

import boutongoogle from "/home/specialjcg/site web/monsite/src/components/boutongoogle.vue";

export default {
  data() {
    return {
      auth2: null,
      name: "",
      email: "",
      password: "essai24",
      message: "",
      jokes: [],
      loading: false,
      db: ""
    };
  },
  components: {
    boutongoogle
  },
  methods: {
    validateEmail(email) {
      var re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    getJokes: function() {
      var data = JSON.stringify({
        email: this.email,
        attributes: { FNAME: this.name }
      });
      let config = {
        headers: {
          "api-key":
            "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",
          "Content-type": "application/json"
        }
      };

      this.loading = false;
      this.loading = true;
      axios
        .post(
          "https://api.sendinblue.com/v3/contacts",

          data,
          config
        )
        .then(response => {
          this.jokes =
            "Vous êtes enregistré, Merci de vérifier votre validation par mail";
        })
        .catch(error => {
          this.jokes = "Problême d'enregistrement " + error.request.response;
        });
    },
    unload() {
      this.loading = false;
    },

    updateExistingPage() {
      if (this.validateEmail(this.email)) {
        this.db
          .firestore()
          .collection("adresse")
          .add({
            adressmail: this.email,
            nom: this.name,
            message: this.message
          });
      } else {
        alert("probleme with mail");
      }
      this.getJokes();
      this.email = "";
      this.name = "";
      this.message = "";
    },

    onUserLoggedIn(user) {
      const profile = user.getBasicProfile();
      /* console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead. */
      this.name = profile.getName();

      this.email = profile.getEmail(); // This is null if the 'email' scope is not present.} // This is null if the 'email' scope is not present.
      this.updateExistingPage();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../components/font.css";
* {
  margin: 0;
  padding: 0;
}
.fongradient {
  position: absolute;
  background-image: linear-gradient(135deg, #fdd819 10%, #e80505 100%);

  overflow: hidden;
  left: 0;
  right: 0;
  height: 100vh;
  width: auto;
  margin: 0;
  padding: 0;
  top: 0;
  z-index: 0;
}

.name {
  margin-bottom: 2vh;

  border-radius: 4px;
  min-width: 42vw;
  align-self: auto;
  flex: 0 1 auto;
  height: 8vh;

  border: 0;

  background-color: #d6f49d;

  border-radius: 4px;
  text-align: left;
}

.message {
  border-radius: 4px;
  min-width: 41vw;
  align-self: auto;
  flex: 0 1 auto;
  height: 25vh;
  border: 0;

  background-color: #d6f49d;
}

.email {
  margin-bottom: 2vh;

  height: 8vh;
  border: 0;
  min-width: 13vw;

  background-color: #d6f49d;

  border-radius: 4px;

  align-self: flex-start;
  flex: 0 1 auto;
}

.pageContact {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  top: 15vh;
  left: 28vw;
  width: 42vw;
}

.clientContact {
  position: absolute;
  top: 20vh;
  left: 16vw;

  background-repeat: no-repeat;
  background-size: cover;
  height: 40vh;
  width: 68vw;
  z-index: 0;
  clip-path: inset(0vw 0vw);
}

button {
  position: relative;
  color: #fbc831;
  font-family: "Bitter", serif;
  text-shadow: 3px 3px 3px #d17b0f;
  background: #007100;
  background-repeat: no-repeat;
  border: 0;
  cursor: pointer;

  outline: none;
  border-radius: 4px;
  text-decoration: none;
  min-height: 8vh;
  font-size: 1.618em;
  font-weight: 800;
  text-align: center;
  width: 29vw;
  margin-bottom: 2vh;

  align-self: auto;
  flex: 1 0 auto;
  z-index: 1;
  transition: all 0.5s ease;
}

button:hover {
  /*background:#4BA62A;*/
  background-image: linear-gradient(
    to left,
    #007100,
    #1b7e0c,
    #2d8b17,
    #3c9821,
    #4ba62a
  );
  transform-origin: 0% 50%;
  transform: rotateY(4deg) rotateZ(1deg);
}

input {
  width: 11vw;
  height: 4.236vh;

  color: #007100;

  padding-left: 1vw;
  font-size: 1em;
  font-family: "Courgette", cursive;
  font-weight: 400;
  line-height: 1.45;
  background: transparent;
  border: 0;
  text-align: left;
  outline: none;
}

textarea {
  width: 41vw;
  color: #007100;
  outline: none;
  padding-left: 1vw;
  font-size: 1em;
  font-family: "Courgette", cursive;
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
@media screen and (min-width: 200px) and (max-width: 640px) {
  .fongradient {
    top: 16vh;
    margin: 0;
  }
  button {
    font-size: 1em;
  }
}
@media screen and (min-width: 640px) and (max-width: 980px) {
  .fongradient {
    top: 16vh;
    margin: 0;
  }
  button {
    font-size: 1em;
  }
}
</style>
