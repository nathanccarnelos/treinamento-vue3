<template>
  <div>
    {{counter}}
    <button @click="counterIncrease">aumenta</button>
    <div style="padding: 1em; margin: 1em">
      <input type="text" style="padding: 1em" v-model="boneco">
      <button style="margin-left: 1em;" @click="addToPersonagens(boneco)">add</button>
      <div>
        <ul style="width: 4em; margin: auto;">
          <li v-for="personagem in personagens">{{personagem}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import personagemUtils from '../utils/personagemUtils'

export default {
  name: 'CompositionApi',
  mixins: [personagemUtils],
  data() {
    return {
      boneco: '',
      counter: 1
    }
  },
  methods: {
    counterIncrease () {
      this.counter = this.counter + 1
    }
  }
}
</script>
<style scoped>
  button {
    padding: 0.5em
  }
</style>
