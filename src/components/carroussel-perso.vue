<template>

  <div class="fondfroid">
   <div class="parametre">
<input type="number" name="position en y" id="posy" step="10" @click="changey()" v-model="choixy">
<label for="number">position en y</label>
   </div>
    <div class="maMission" v-for="(task,num) in tasks" :key="num" @mouseenter.prevent="rotationCarroussel()" :style="computed2_class(num)">
      <div class="maMission2">
        <div class="transition-maison">
          <h1><span>{{task.mission}}</span></h1>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  data () {
    return {
      index: 0,

      mission: 'nos missions',
      positionCarroussel: {
        x: [0, 0, 0, 0, 0, 0],
        y: [300, 150, 25, 25, 150, 300],
        z: [0, 100, 50, 100, 50, 0],
        expand: [20, 20, 20, 20, 20, 20],
        opa: [0.9, 0.7, 0.7, 0.5, 0.5, 0.3],
        sc: [1, 0.8, 0.7, 0.6, 0.5, 0.4],
        zindex: [6, 5, 4, 3, 2, 1]
      },

      tasks: [{
        mission: 'On a deux vies. La deuxième commence quand on réalise qu’on n’en a qu’une. Confucius'
      },
      {
        mission: '« Si vous pouvez le rêver, vous pouvez le faire. » Walt Disney'
      },
      {
        mission: 'Si vous pensez que l’aventure est dangereuse, essayez la routine, elle est mortelle. » Paulo Coelho'
      },
      {
        mission: '« Un voyage de mille lieues commence toujours par un premier pas. » Lao Tseu'
      },
      {
        mission: '« J’ai des questions à toutes vos réponses »  Woody Allen -'
      },
      {
        mission: '« Les autres parlent, moi je travaille »picasso'
      }
      ]
    }
  },

  mounted() {
this.init();
  },
  computed() {

  },

  methods: {
init(){
this.choixy=0;


},
changey(){
  for (var i=0;i<5;i++){
this.positionCarroussel.y[i]=this.positionCarroussel.y[i]+Number(this.choixy);}
for (var i = 0; i < this.positionCarroussel.x.length - 1; i++) {
        this.computed2_class(i)
      }
},
    computed2_class (num) {
      this.index = Number(num)
      var tran = ''
this.init();
      tran =
        'translate3d(' +
        this.positionCarroussel.x[this.index] +
        'px, ' +
        this.positionCarroussel.y[this.index] +
        'px,' +
        (this.positionCarroussel.z[this.index] + this.index * this.positionCarroussel.expand[this.index]) +
        'px) scale(' + this.positionCarroussel.sc[this.index] + ')'

      return {
        transition: '3s ease',
        transform: tran,
        'z-index': this.positionCarroussel.zindex[this.index],
        opacity: this.positionCarroussel.opa[this.index]
      }
    },

    rotationLignecarroussel (positionCarrousselinter) {
      var interCarroussel = 0
      interCarroussel = positionCarrousselinter[0]
      for (var i = 0; i < positionCarrousselinter.length - 1; i++) {
        positionCarrousselinter[i] = positionCarrousselinter[i + 1]
      }
      positionCarrousselinter[positionCarrousselinter.length - 1] = interCarroussel
      return (positionCarrousselinter)
    },
    rotationCarroussel () {
      this.positionCarroussel.x = this.rotationLignecarroussel(this.positionCarroussel.x)
      this.positionCarroussel.y = this.rotationLignecarroussel(this.positionCarroussel.y)
      this.positionCarroussel.z = this.rotationLignecarroussel(this.positionCarroussel.z)
      this.positionCarroussel.expand = this.rotationLignecarroussel(this.positionCarroussel.expand)
      this.positionCarroussel.sc = this.rotationLignecarroussel(this.positionCarroussel.sc)
      this.positionCarroussel.opa = this.rotationLignecarroussel(this.positionCarroussel.opa)
      this.positionCarroussel.zindex = this.rotationLignecarroussel(this.positionCarroussel.zindex)
      for (var i = 0; i < this.positionCarroussel.x.length - 1; i++) {
        this.computed2_class(i)
      }
    }
  }

}

</script>

<style scoped>
.parametre{
display:flex;
  position: absolute;
top:15vw;

}
.fondfroid{
position: fixed;


    left: 0;
    right: 0;
    height: 100vw;
    width: auto;
    margin: 0;
    padding: 0;
    top: 0;
    z-index: 0;



  padding: 0;
  margin:0;
background: #e8f6a4;

}
  .maMission {
    height: 10vw;
    position: absolute;
    top:5vw;
    left: 20vw;
    bottom: 0;
    right: 0;
    overflow-x: hidden;
    overflow-y: auto;
    /*perspective: 2px;*/
    transform-style: preserve-3d;
    /*top: 50%;

        bottom: 0;
        left: 50%;*/
    width: 50vw;
    background-color: #445200;
  }



  .maMission2 {
    position: absolute;
    top: 0;
    left: 0;
    height: auto;
    width: 50vw;
    color: #e8f6a4;
    text-align: center;

    top: 50%;
    /* poussé de la moitié de hauteur du référent */
    transform: translateY(-50%);
    /* tiré de la moitié de sa propre hauteur */
  }

  h1 {
    letter-spacing: 0vw;
    font-family: Open Sans;
      font-size: 1.618em;
    font-weight: 800;
     line-height: 1.2;
    margin: 1.414em 0 0.5em;
  }

</style>
