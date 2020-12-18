<template>
  <div style="border: 1px solid red; padding: 1em">
    <img style="height: 150px" :src="getCharImage(personagem)" alt="">
    <full-emit
        :personagem.sync="personagem"
        :gear.sync="gear"
    ></full-emit>
    <img style="height: 150px" :src="getGearImage(gear)" alt="">
  </div>
</template>

<script>
import FullEmit from '../components/emits/FullEmit'

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
      let images = require.context('../assets/', false, /\.gif$/)
      return images(`./gear${gear}.gif`)
    },
    getCharImage(personagem) {
      let images = require.context('../assets/', false, /\.gif$/)
      return images(`./gear${personagem}.gif`)
    }
  }
}
</script>
