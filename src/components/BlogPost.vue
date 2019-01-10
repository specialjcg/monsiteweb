<template>

  <div v-if="post" id="blog-post">
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <div class="texto">
    <h3>{{ post.data.title }}</h3><br>

    <h4>{{ post.data.author.first_name }} {{ post.data.author.last_name }} <i class="fa fa-comment-o"></i>  <i class="fa fa-calendar">  </i>{{mydatepost(post.data.published)}}</h4>

    <div class="blogtext" v-html="post.data.body"></div></div>

    <router-link
      v-if="post.meta.previous_post"
      :to="'/blog/' + post.meta.previous_post.slug"
      class="button"
    >
      {{ post.meta.previous_post.title }}
    </router-link>
    <router-link
      v-if="post.meta.next_post"
      :to="'/blog/' + post.meta.next_post.slug"
      class="button"
    >
      {{ post.meta.next_post.title }}
    </router-link>
  </div>
</template>

<script>
import Butter from 'buttercms';
const butter = Butter('3f5c64aafe7b06d66ae87d3b39660c73d8c0afec');
 export default {
    name: 'blog-post',
    data() {
      return {
        post:null
      }
    },
    methods: {
       mydatepost(index){
var essai= new Date(index).toLocaleDateString();

return essai

      },
      getPost() {
        butter.post.retrieve(this.$route.params.slug)
          .then(res => {
            this.post = res.data
          }).catch(res => {
            console.log(res)
          })
      }
    },
    watch: {
      $route(to, from) {
        this.getPost()
      }
    },
    created() {
      this.getPost()
    }
  }
</script>

<style lang="scss" scoped>

@import "./font.css";


$card-width:  17.94vw;
$card-height: 46.97vh;
$h-color:    white;
$yellow:      #FBC831;
$txt-color:   rgb(95, 95, 95);

* { margin: 0; padding: 0; }

#blog-post {
position:absolute;
  width:95vw;
  text-align: left;
  display: block;
  clear: both;
  margin-top: 10vw;
  margin-bottom: 5vw;
  min-height: 500px;




}

h1,
h2,

h4 ,p,.texto{
max-width:  600px;

  font-family: 'Courgette', cursive;
  font-weight: inherit;

  margin-left: auto;
  margin-right: auto;

}

h1{
  margin-top: 0;
  font-size: 6.854em;
}

h2 {
  font-size: 4.236em;
}

.blogtext /deep/ h3 {
   line-height: 1em;
  font-size: 1.618em;
  color: $yellow;
}

h4,p,.texto{

line-height: 2em;
  font-size: 1em;
color:$txt-color;




}
h3 {


margin-top: -1vh;
font-size: 2.618em;
 color: $yellow;
 }
@media only screen and (max-width:600px){

#blog-post{ width:95vw;}

}
</style>
