<template>
  <div style="border: 1px solid blue">
    <button @click="onClickNextPersonagem">proximo personagem</button>
  </div>
  <div style="border: 1px solid yellow">
    <button @click="onClickNextGear">Mais força</button>
  </div>
</template>
<script>
export default {
  name: 'FullEmit',
  props: {
    personagem: {
      type: Number,
      default: 1
    },
    gear: {
      type: Number,
      default: 1
    }
  },
  emits: {
    'update:personagem': (val) => {
      if (typeof val !== 'number') {
        console.warn('Tipagem errada')
        return false
      } else return true
    },
    'update:gear': (val) => {
      if (typeof val !== 'number') {
        console.warn('Tipagem errada')
        return false
      } else return true
    }
  },
  methods: {
    onClickNextGear () {
      let val = this.gear + 1
      if (val > 4) val = 1
      this.$emit('update:gear', val)
    },
    onClickNextPersonagem () {
      let val = this.personagem + 1
      if (val > 5) val = 1
      this.$emit('update:personagem', val)
    }
  }
}
</script>
<style scoped>
  div {
    margin: 1em;
    padding: 1em;
  }

  button {
    padding: 1em
  }
</style>
