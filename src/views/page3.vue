<template>
  <div class="blockparallaxgeneral2">
    <div class="fond fondtext">
      <picture @mouseover="big1()">
        <source srcset="../components/fondvelo.webp" type="image/webp" />
        <img
          src="../components/fondvelo.png"
          alt="createur-de-site-internet sur mesure beaujolais oingt"
        />
      </picture>
    </div>

    <div id="imgtrois" @scroll.prevent="handleScroll()">
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
      img5: true
    };
  },
  created: function() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
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
</style>
