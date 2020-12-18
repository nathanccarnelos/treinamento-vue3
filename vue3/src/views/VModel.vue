<template>
  <div style="border: 1px solid red; padding: 1em">
    <img style="height: 150px" :src="getCharImage(personagem)" alt="">
    <full-emit
        v-model:personagem="personagem"
        v-model:gear="gear"
    ></full-emit>
    <img style="height: 150px" :src="getGearImage(gear)" alt="">
  </div>
</template>

<script>
import FullEmit from '../components/emits/FullEmit.vue'
import perosanagem1 from '../assets/personagem1.gif'
import perosanagem2 from '../assets/personagem2.gif'
import perosanagem3 from '../assets/personagem3.gif'
import perosanagem4 from '../assets/personagem4.gif'
import perosanagem5 from '../assets/personagem5.gif'
import gear1 from '../assets/gear1.gif'
import gear2 from '../assets/gear2.gif'
import gear3 from '../assets/gear3.gif'
import gear4 from '../assets/gear4.gif'

export default {
  name: 'VModel',
  components: {
    FullEmit
  },
  data() {
    return {
      vModelValue: 'valor pra dentro',
      gear: 1,
      personagem: 1,
    }
  },
  methods: {
    getGearImage(gear) {
      const imgs = [
        gear1,
        gear2,
        gear3,
        gear4,
      ]
      return imgs[gear-1]
    },
    getCharImage(personagem) {
      const imgs = [
        perosanagem1,
        perosanagem2,
        perosanagem3,
        perosanagem4,
        perosanagem5
      ]

      return imgs[personagem -1]
    }
  }
}
</script>
