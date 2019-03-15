<template>
  <div class="blockparallaxgeneral2">
    <div class="fond fondtext">
      <picture>
        <source srcset="../components/fondvelo.webp" type="image/webp" />
        <img
          src="../components/fondvelo.png"
          alt="createur-de-site-internet sur mesure beaujolais oingt"
        />
      </picture>

      <transition-group name="cell" tag="div" class="container_carte">
        <div
          v-for="cell in cells"
          :key="cell.id"
          :id="cardinfo(cell.id)"
          class="blog-home"
          @click="animecard(cell.id)"
          @mouseenter="animecard2(cell.id)"
          @mouseleave="animecard3(cell.id)"
        >
          <div class="card__face card__face--front">
            <img
              src="../assets/card.png"
              class="doscard"
              :key="cell.id"
              :id="imginfo(cell.id)"
            />
          </div>
          <div class="card__face card__face--back">
            <p>
              Définissez précisément votre cible<br />
              {{ trouvernombre(cell.number) }}
            </p>
          </div>
        </div>
      </transition-group>
    </div>

    <div id="imgtrois" @scroll.prevent="handleScroll()" @mouseover="big1()">
      <transition name="slideinblurredleft">
        <div class="titre rgba-complement-0  backdrop-blur " :key="img5">
          <h1>
            Nous veillons à ce que la première impression soit la bonne : soyez
            visible
          </h1>
        </div></transition
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      animbefore: "",
      testanime: true,
      cells: Array.apply(null, { length: 14 }).map(function(_, index) {
        return {
          id: index,
          number: index + 1
        };
      }),
      tableaurandommemory: [],
      imgessai: false,
      img5: true
    };
  },
  created: function() {
    window.addEventListener("scroll", this.handleScroll);
    this.MonTirage();
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    trouvernombre(cherchehzard) {
      if (this.tableaurandommemory[cherchehzard] === undefined) {
        return "";
      } else {
        return this.tableaurandommemory[cherchehzard];
      }
    },
    MonTirage() {
      var nb_a_tirer = 7;
      while (nb_a_tirer != 0) {
        var tirage = Math.trunc(Math.random() * 7 + 1);
        if (!this.tableaurandommemory.includes(tirage)) {
          var i = Math.trunc(Math.random() * 14);
          while (this.tableaurandommemory[i] != undefined) {
            i = Math.trunc(Math.random() * 14);
          }
          this.tableaurandommemory[i] = tirage;
          nb_a_tirer--;
        }
      }
    },
    animecard(index) {
      if (
        document.getElementById("cardinfo" + index).className ===
          "blog-home is-flipped2" ||
        document.getElementById("cardinfo" + index).className ===
          "blog-home is-flipped"
      ) {
        document.getElementById("cardinfo" + index).className = "blog-home";
      } else {
        document.getElementById("cardinfo" + index).className =
          "blog-home is-flipped";
      }
    },
    animecard2(index) {
      if (
        document.getElementById("cardinfo" + index).className ===
        "blog-home is-flipped"
      ) {
        document.getElementById("cardinfo" + index).className =
          "blog-home is-flipped2";
      } else {
        document.getElementById("cardinfo" + index).className =
          "blog-home blog-homehover";
      }
    },
    animecard3(index) {
      if (
        document.getElementById("cardinfo" + index).className ===
          "blog-home is-flipped2" ||
        document.getElementById("cardinfo" + index).className ===
          "blog-home is-flipped"
      ) {
        document.getElementById("cardinfo" + index).className =
          "blog-home is-flipped";
      } else {
        document.getElementById("cardinfo" + index).className = "blog-home";
      }
    },
    cardinfo(index) {
      var essai = "cardinfo" + index;

      return essai;
    },
    imginfo(index) {
      var essai = "imginfo" + index;

      return essai;
    },
    big1: function() {
      this.img5 = !this.img5;
    },

    handleScroll() {
      var hauteurImage =
        document.getElementById("imgtrois").offsetHeight * 3 - 180;
      if (
        window.scrollY > hauteurImage &&
        window.scrollY < hauteurImage + 150
      ) {
        var inter = (hauteurImage - window.scrollY) / 150;
        document.getElementById("imgtrois").style.filter =
          "blur(" + (1 - inter) * 5 + "px)";
        document.getElementById("imgtrois").style.opacity = inter + 0.7;
        document.getElementById("imgtrois").style.transition =
          "all 0.5s ease-in-out";
      } else {
        document.getElementById("imgtrois").style = "";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../components/blocImage.css";
$card-width: 5vw;
$card-height: 15vh;
$h-color: white;
$yellow: #fbc831;
$txt-color: white;

.container_carte {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  width: 50vw;
  top: 28vh;
  left: 2vw;
  perspective: 600px;
}

.blog-home {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: $card-width;
  height: $card-height;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
  text-align: center;
  align-self: flex-start;
  flex: 0 1 auto;
  background: $h-color;
  margin: 1vw;
  transition: transform 1s;
  transform-style: preserve-3d;
  z-index: 2;
}
.card__face {
  border-radius: 10px;
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
}
.card__face--front {
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
}

.card__face--back {
  border-radius: 10px;
  background: $h-color;
  transform: rotateY(180deg);
}
.blog-home.is-flipped {
  transform: rotateY(180deg);
}
.blog-home.is-flipped2 {
  transform: rotateY(180deg) translateY(20px);
}
.doscard {
  width: $card-width;
  height: $card-height;
  background-image: cover;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
  transition: opacity 0.3s cubic-bezier(0.33, 0.66, 0.66, 1);
  transform: rotateY(180deg);
  z-index: 0;
}
.doscard2 {
  display: none;
  width: $card-width;
  height: $card-height;
  background-image: cover;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.3s cubic-bezier(0.33, 0.66, 0.66, 1);

  z-index: 0;
}
.blog-home:nth-child(3n) {
  margin-right: 0;
}
.blog-home:nth-child(27n) {
  margin-bottom: 0;
}
.blog-home-move {
  transition: transform 1s;
}

.blog-homehover {
  transform: translateY(20px);
}

.fondtext {
  background: transparent;

  margin: 0;

  opacity: 1;
}
img {
  width: 100vw;

  height: 100vh;
  border-radius: 5px;
  filter: drop-shadow(5px 5px 5px black);
}

.fond {
  display: inherit;

  top: 0;
  z-index: 3;
}
.rgba-complement-0 {
  color: #fbc831;

  backdrop-filter: contrast(2) blur(20px);
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 3;
}
.backdrop-blur {
  background: rgba(0, 0, 0, 0.8);
}
@supports (
  (-webkit-backdrop-filter: blur(2em)) or (backdrop-filter: blur(2em))
) {
  .backdrop-blur {
    background: rgba(0, 0, 0, 0.8);
    -webkit-backdrop-filter: contrast(2) blur(20px);
    backdrop-filter: contrast(2) blur(20px);
  }
}
.titre {
  max-width: 25vw;
  position: absolute;
  height: auto;
  top: 10vh;
  right: 60vw;
  justify-content: left;
  align-items: left;
  z-index: 3;
}

.img2 {
  display: inherit;
  position: absolute;
  top: 0;
  left: 0;

  width: auto;

  height: auto;
  background-repeat: no-repeat;
  background-size: contain;

  z-index: 0;
  opacity: 1;
}

h1 {
  letter-spacing: 0vw;
  font-family: Open Sans;
  font-size: 2vw;
  font-weight: 800;
  line-height: 2vw;
}

p {
  letter-spacing: 0vw;
  font-family: Open Sans;
  font-size: 1vw;
  font-weight: 600;
  line-height: 1vw;
  /* margin: 75px 0;*/
}

.slideinblurredleft-enter-active {
  -webkit-animation: slide-in-blurred-left 1s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-blurred-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slideinblurredleft-leave-active {
  -webkit-animation: slide-in-blurred-left 1s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-blurred-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    reverse;
}

.slide-in-blurred-left {
  -webkit-animation: slide-in-blurred-left 1s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-blurred-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes slide-in-blurred-left {
  0% {
    -webkit-transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
    transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
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
    background: rgba(0, 0, 0, 0.8);
    -webkit-backdrop-filter: contrast(2) blur(20px);
    backdrop-filter: contrast(2) blur(20px);
  }
}
.flip-vertical-left {
  -webkit-animation: flip-vertical-left 0.4s
    cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  animation: flip-vertical-left 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955)
    both;
}
@-webkit-keyframes flip-vertical-left {
  0% {
    -webkit-transform: rotateY(0);
    transform: rotateY(0);
  }
  100% {
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
  }
}
@keyframes flip-vertical-left {
  0% {
    -webkit-transform: rotateY(0);
    transform: rotateY(0);
  }
  100% {
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
  }
}
.flip-vertical-right {
  -webkit-animation: flip-vertical-right 0.4s
    cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  animation: flip-vertical-right 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955)
    both;
}

@-webkit-keyframes flip-vertical-right {
  100% {
    -webkit-transform: rotateY(0);
    transform: rotateY(0);
  }
  0% {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes flip-vertical-right {
  100% {
    -webkit-transform: rotateY(0);
    transform: rotateY(0);
  }
  0% {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
</style>
