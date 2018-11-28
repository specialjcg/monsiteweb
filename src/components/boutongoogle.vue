<template>
<div>
  <div id="gSignInWrapper">

    <div id="customBtn" class="customGPlusSignIn">
      <span class="icon"></span>
      <span class="buttonText">Sign in with Google</span>
    </div>
  </div>
  <div id="name"></div>
</div>
</template>

<script>
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable space-in-parens */
/* jshint esversion: 6 */
/* eslint-disable spaced-comment */
/* eslint-disable padded-blocks */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable semi */
/* eslint-disable space-before-function-paren */
export default {
  data() {
    return {
      user: null,
      googleUser: {},
      auth4: [],
      name: '',
      email: '',
      message: ''
    };
  },

  mounted() {
    window.gapi.load('auth2', () => {
      const auth2 = window.gapi.auth2.init({
        client_id: '851397391825-cn5ns9qd64qmq0brh675gg794f244hcc.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin'
      })

      auth2.attachClickHandler(document.getElementById('customBtn'), {}, googleUser => {
        this.$emit('done', googleUser)
      }, error => console.log(error))


    })




  },
  methods: {






    onSignIn(googleUser) {

      // do stuff, for example
      const profile = googleUser.getBasicProfile()
      /* console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.*/
      this.$parent.name = profile.getName();

      this.$parent.email = profile.getEmail(); // This is null if the 'email' scope is not present.
    }


  }
}
</script>

<style type="text/css">
    #customBtn {
      display: inline-block;
      background: white;
      color: #444;
      width: 42vw;
      height: 4.236vw;
      border-radius: 5px;
      border: thin solid #888;
      box-shadow: 1px 1px 1px grey;
      white-space: nowrap;
    }
    #customBtn:hover {
      cursor: pointer;
    }
    span.label {
      font-family: serif;
      font-weight: normal;
    }
    span.icon {
      background: url('./googlebuton.png') transparent 5px 50% no-repeat;
      display: inline-block;
      vertical-align:middle;

      width: 4.236vw;
      height: 4.236vw;
    }
    span.buttonText {

      display: inline-block;
      vertical-align: middle;
      padding-left: 1vw;
      padding-right: 1vw;
      font-size: 1vw;
      font-weight: bold;
      /* Use the Roboto font that is loaded in the <head> */
      font-family: 'Roboto', sans-serif;
    }
  </style>
