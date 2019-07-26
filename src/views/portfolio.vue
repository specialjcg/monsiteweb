<template>
  <div>
    <picture class="fondecran">
      <source
        srcset="../assets/trianglify.svg"
        type="image/svg+xml"
        alt="createur-de-site-internet sur mesure beaujolais oingt"/>
      <img
        class="img1"
        src="../assets/trianglify.png"
        alt="createur-de-site-internet sur mesure beaujolais oingt"
    /></picture>
    <div class="container2">
      <h1 class="titre12">
        Dernieres réalisations Développement de site internet
      </h1>
      <!-- Create `v-for` and apply a `key` for Vue. Here we are using a combination of the slug and index. -->
      <div class="blog-home">
        <a
          href="https://valorisetonweb.fr/tourdehanoi"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <article @mouseenter="effaceTitre2(0)" @mouseleave="visibleTitre2(0)">
            <img
              class="img3"
              :id="imginfo(0)"
              src="https://valorisetonweb.fr/tourdehanoi/tourdehanoi.png"
              alt="createur-de-site-internet sur mesure beaujolais oingt"
            />

            <div :id="titre2(0)">
              <h4>{{ this.title1 }}</h4>
              <hr />
            </div>
            <div class="card-info" :id="cardinfo(0)">
              <p>{{ this.Summary1 }}</p>
            </div>
          </article>
        </a>
        
      </div>
      <div class="blog-home">
        <a
          href="https://valorisetonweb.fr/carvuecli3"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <article @mouseenter="effaceTitre2(1)" @mouseleave="visibleTitre2(1)">
            <img
              class="img3"
              :id="imginfo(1)"
              src="https://valorisetonweb.fr/carvuecli3/Carroussel.png"
              alt="createur-de-site-internet sur mesure beaujolais oingt"
            />

            <div :id="titre2(1)">
              <h4>{{ this.title2 }}</h4>
              <hr />
            </div>
            <div class="card-info" :id="cardinfo(1)">
              <p>{{ this.Summary2 }}</p>
            </div>
          </article>
        </a>
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datepost: "",
      page_title: "Réalisation",
      posts: [],
      title1: "Tour de Hanoi",
      Summary1:
        "étude  de drag and drop via vuejs avec mousedown, mouseup,mousemove plutôt que dragstart,dragover,dragend du html5 dans l'idée de modifier l'aspect ,du gohst durant le drag sans utiliser      setdragimage mais de pouvoir agir sur la forme du drag à loisir",
      title2: "carroussel3d",
      Summary2:
        "étude de carroussel 3d et citation"
  

    };
  },
  methods: {
    titre2(index) {
      var essai = "titre2" + index;

      return essai;
    },
    cardinfo(index) {
      var essai = "cardinfo" + index;

      return essai;
    },
    imginfo(index) {
      var essai = "imginfo" + index;

      return essai;
    },
    mydate(index) {
      var essai = new Date(index).toLocaleDateString();

      return essai;
    },
    effaceTitre2(index) {
      document.getElementById("titre2" + index).style.opacity = 0;
      document.getElementById("cardinfo" + index).style.opacity = 1;
      document.getElementById("cardinfo" + index).style.bottom = "0vh";
      document.getElementById("imginfo" + index).style.opacity = 0.2;
    },
    visibleTitre2(index) {
      document.getElementById("titre2" + index).style.opacity = 1;
      document.getElementById("cardinfo" + index).style.opacity = 0;
      document.getElementById("cardinfo" + index).style.bottom = "50vh";
      document.getElementById("imginfo" + index).style.opacity = 1;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../components/font.css";

$card-width: 250px;
$card-height: 46.97vh;
$h-color: white;
$yellow: #fbc831;
$txt-color: white;
.commentaire {
  top: 40vh;
  position: absolute;
  color: $txt-color;
}

.fondecran {
  position: fixed;

  left: 0;
  right: 0;
  height: 100vh;
  width: 100vw;

  margin: 0;
  padding: 0;
  top: 0;
  z-index: 0;
}

.container2 {
  display: flex;
  justify-content: center;
  align-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  max-width: 60vw;
  max-height: auto;
  z-index: 0;
}

.titre12 {
  position: absolute;
  top: 8vh;
  z-index: 1;
  font-family: "Courgette", cursive;
  font-size: 2.618em;
}

.card-info {
  width: 100%;
  position: absolute;
  bottom: 25vh;
  /*left: 0;
  margin: 0 auto;
  padding: 0 50px;*/
  color: $txt-color;
  font-family: "Courgette", cursive;
  font-size: 0.8em;
  line-height: 1.2em;
  z-index: 2;

  opacity: 0;
  transition: bottom 0.5s, opacity 0.3s cubic-bezier(0.33, 0.66, 0.66, 1);
}

.blog-home {
  width: $card-width;
  height: $card-height;
  position: relative;
  top: 20vh;
  left: 2vw;

  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
  text-align: center;
  min-width: 20vw;
  align-self: flex-start;
  flex: 0 1 auto;
  background: black;
  margin: 1vw;
  transition: 0.4s ease-out;
  z-index: 2;
}

.blog-home:hover {
  transform: translateY(20px);
  /*background: rgba(black, 0.1);*/
}

.img1 {
  width: 100%;
  height: 100%;
  background-image: cover;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.3s cubic-bezier(0.33, 0.66, 0.66, 1);
  z-index: 0;
}
.img3 {
  width: 100%;
  height: 25vh;
  background-image: cover;
  position: relative;
  top: 0;
  left: 0;
  transition: opacity 0.3s cubic-bezier(0.33, 0.66, 0.66, 1);
  z-index: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
hr {
  position: relative;
  width: 11.08vw;
  height: 0.2vw;
  margin: 20px auto;
  border: 0;
  background: $yellow;
  z-index: 1;
}

a:link {
  text-decoration: none;
}

h1,
h2,
h3,
h4,
p {
  margin: 1em 0 0.5em;
  font-family: "Courgette", cursive;
  font-weight: inherit;
  line-height: 1.2em;
}

h1 {
  font-size: 6.854em;
}

h2 {
  font-size: 4.236em;
}

h3 {
  font-size: 2.618em;
}

h4,
p {
  font-size: 1em;
  font-weight: 800;
  letter-spacing: 2px;
  color: $h-color;

  text-align: center;
  margin: 1em 0 0 0;
  position: relative;
  z-index: 2;
  width: 100%;
  top: 0;
  left: 0;
}
p {
  color: $h-color;
}
h4 {
  color: $txt-color;
}
.img2 {
  position: absolute;
  top: 11vh;
  left: 23vw;
  width: 5vw;
  height: 5vh;
  margin-top: 0;
  margin-left: 1vw;
  background-image: linear-gradient(
    to left,
    #074270,
    #0e578f,
    #4482b2,
    #6da2ca
  );
  border-radius: 5px;
  background-repeat: no-repeat;
  background-size: cover;
  vertical-align: middle;
}

.buttercms {
  transition: all 0.5s ease;
}

.buttercms:hover {
  transform-origin: 10% 5%;
  transform: scale(1.05);
}

@media only screen and (min-width: 340px) {
  .blog-home {
    top: 28vh;
  }

  .titre1 {
    top: 15vh;
  }

  .img2 {
    top: 23vh;
    left: 20vw;
    width: 18vw;
    height: 5vh;
  }
}

@media only screen and (min-width: 640px) {
  .blog-home {
    top: 23vh;
  }

  .titre1 {
    top: 11vh;
  }

  .img2 {
    top: 18vh;
    left: 25vw;
    width: 18vw;
    height: 5vh;
  }
}

@media only screen and (min-width: 900px) {
  .titre1 {
    top: 11vh;
  }

  .img2 {
    top: 13.5vh;
    left: 35vw;
    width: 15vw;
    height: 5vh;
  }
}

@media only screen and (min-width: 1400px) {
  .titre1 {
    top: 10vh;
  }

  .img2 {
    top: 13.5vh;
    left: 25vw;
    width: 15vw;
    height: 5vh;
  }
}
</style>
