<template>
<div>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <div class="container" >
<h3 class="titre1">Crée son site web sur mesure</h3>
 <header class="buttercms"><a  href="https://buttercms.com" target="_blank">

    <img  class="img2" src="./butter-y.png" alt="création de site internet sur mesure butter cms" title="blog butter cms" />

  </a></header>
      <!-- Create `v-for` and apply a `key` for Vue. Here we are using a combination of the slug and index. -->
      <div class="blog-home"
        v-for="(post,index) in posts"
        :key="post.slug + '_' + index"
      >
        <router-link :to="'/blog/' + post.slug">
          <article @mouseenter="effaceTitre2(index)" @mouseleave="visibleTitre2(index)">
            <figure >
              <!-- Bind results using a `:` -->
              <!-- Use a `v-if`/`else` if their is a `featured_image` -->
              <img class="img1"  :id="imginfo(index)"
                v-if="post.featured_image"
                :src="post.featured_image"
                alt=""
              >
              <img class="img1"
                v-else
                src="/home/specialjcg/site web/monsite/src/components/IMG_20180927_190728_382.jpg"
                alt=""
              >

            </figure>
            <div :id="titre2(index)">
 <h4 >{{ post.title }}</h4>
            <hr/>
            <div class="commentaire">
            <h4 ><i class="fa fa-comment-o"></i>  <i class="fa fa-calendar"></i>  {{mydate(post.published)}}</h4></div></div>
<div class="card-info" :id="cardinfo(index)">
            <p >{{ post.summary }}</p>
            </div>
          </article>
        </router-link>
      </div>
  </div></div>
</template>
<script>
import Butter from 'buttercms';
 const butter = Butter('3f5c64aafe7b06d66ae87d3b39660c73d8c0afec');

export default {

    name: 'blog-home',
    data() {
      return {
datepost:'',
        page_title: 'Blog',
        posts: []
      }
    },

  mounted() {

 /*  butter.post.list({page: 1, page_size: 10}).then(function(response) {
  console.log(response)
})*/
  },
    methods: {
      titre2(index){
var essai='titre2'+index;

return essai

      }, cardinfo(index){
var essai='cardinfo'+index;

return essai

      }, imginfo(index){
var essai='imginfo'+index;

return essai

      },
 mydate(index){
var essai= new Date(index).toLocaleDateString();

return essai

      },
      effaceTitre2(index){

document.getElementById("titre2"+index).style.opacity =0;
document.getElementById("cardinfo"+index).style.opacity =1;
document.getElementById("cardinfo"+index).style.bottom ="0vh";
document.getElementById("imginfo"+index).style.opacity =0.2;

      },
      visibleTitre2(index){

        document.getElementById("titre2"+index).style.opacity=1;
document.getElementById("cardinfo"+index).style.opacity =0;
document.getElementById("cardinfo"+index).style.bottom ="50vh";
document.getElementById("imginfo"+index).style.opacity =1;
        },
      getPosts() {
        butter.post.list({
          page: 1,
          page_size: 10
        }).then(res => {
          this.posts = res.data.data

        })
      }
    },
    created() {
      this.getPosts()
    }
  }

</script>

<style lang="scss" scoped>
@import "./font.css";


$card-width:  250px;
$card-height: 46.97vh;
$h-color:    white;
$yellow:      #FBC831;
$txt-color:   white;





* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;


}
.commentaire{
top: 40vh;
    position:absolute;



}
.container{
display:flex;
    justify-content:flex-start;
  align-content:flex-start;
    align-items:flex-start;
    flex-direction: row;
flex-wrap:wrap;
background-repeat: no-repeat;
background-size: cover;
background-image: url('trianglify.svg');
position: absolute;


    left: 0;
    right: 0;
    height: 100vh;
    width: auto;
    margin: 0;
    padding: 0;
    top: 0;
    z-index: 0;



}

.titre1{
 position: absolute;
  top:8vh;
 z-index: 1;
 font-family: 'Courgette', cursive;
  font-size: 1.618em;
}
.card-info{
  width: 100%;
  position: absolute;
  bottom: 50vh;
  left: 0;
  margin: 0 auto;
  padding: 0 50px;
  color: $txt-color;
 font-family: 'Courgette', cursive;
  font-size: 1em;
  line-height: 1.2em;
  z-index: 2;

opacity: 0;
  transition: bottom .5s, opacity .3s cubic-bezier(.33,.66,.66,1);
}



.blog-home {
 width: $card-width;
  height: $card-height;
  position: relative;
  top: 20vh;
  left:2vw;

  overflow: hidden;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, .5);
  text-align: center;
 min-width: auto;
   align-self: flex-start;
flex: 0 1 auto;
background: black;
margin:1vw;
transition: 0.4s ease-out;
z-index:0;
}

.blog-home:hover {
transform: translateY(20px);
/*background: rgba(black, 0.1);*/

}

.img1{
width: 100%;
		height: 100%;
		background-image: cover;
		position: absolute;
		top: 0;
		left: 0;
transition: opacity .3s cubic-bezier(.33,.66,.66,1);
z-index:1;
}

hr{
  position: relative;
  width: 11.08vw;
  height: 0.2vw;
  margin: 20px auto;
  border: 0;
  background: $yellow;
z-index:1;
}

a:link
{
text-decoration:none;
}
h1,
h2,
h3,
h4,p {
  margin: 1em 0 0.5em;
  font-family: 'Courgette', cursive;
  font-weight: inherit;
  line-height: 1.2em;
}

h1 {
  margin-top: 0;
  font-size: 6.854em;
}

h2 {
  font-size: 4.236em;
}

h3 {
  font-size: 2.618em;

}

h4,p {
  font-size: 1em;
   font-weight: 800;
  letter-spacing: 2px;
  color: $h-color;

  margin-bottom: 0;
    text-align: center;
  margin: 1em 0 0 0;
  position: relative;
  z-index: 20;
  width: 100%;
  top: 0;
  left: 0;
}
.img2{
  	position: absolute;
	top: 11vh;
  left:23vw;
width: 5vw;
    height: 5vh;
    margin-top: 0;
   margin-left: 1vw;
  background-image:linear-gradient(to left,  #074270, #0E578F, #4482B2, #6DA2CA);
  border-radius: 5px;
 background-repeat: no-repeat;
    background-size: cover;
vertical-align:middle;
}
.buttercms{

transition: all 0.5s ease;

}
.buttercms:hover{
 transform-origin: 10% 5%;
  transform: scale(1.05);

}
@media only screen and (min-width: 340px) {
  .blog-home {
top:28vh;



  }
.titre1{

  top:15vh;

}
.img2{

	top: 23vh;
  left:20vw;
width: 18vw;
    height: 5vh;

}


}



@media only screen and (min-width: 640px) {
  .blog-home {
top:23vh;



  }
.titre1{

  top:11vh;

}
.img2{

	top: 18vh;
  left:25vw;
width: 18vw;
    height: 5vh;

}


}
@media only screen and (min-width: 900px) {
.titre1{

  top:11vh;

}
.img2{

	top: 13.5vh;
  left:35vw;
width: 15vw;
    height: 5vh;

}

}
@media only screen and (min-width: 1400px) {
.titre1{

  top:10vh;

}
.img2{

	top: 13.5vh;
  left:25vw;
width: 15vw;
    height: 5vh;

}



}

</style>
