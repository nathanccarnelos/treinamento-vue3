<template>
  <div>
    <div style="border: 1px solid blue">
      <button @click="onClickNextPersonagem">proximo personagem</button>
    </div>
    <div style="border: 1px solid yellow">
      <button @click="onClickNextGear">Mais força</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FullEmit',
  props: ['personagem', 'gear'],
  methods: {
    onClickNextGear() {
      let val = this.gear+1
      if(val > 4) val = 1
      this.$emit('update:gear', val)
    },
    onClickNextPersonagem() {
      let val = this.personagem+1
      if(val > 5) val = 1
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
