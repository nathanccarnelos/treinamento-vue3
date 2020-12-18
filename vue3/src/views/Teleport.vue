<template>
  <button @click="showBefore=!showBefore">show Luffy</button>
  <button @click="showAfter = !showAfter">show Ace</button>

  <teleport v-if="showBefore" to="#teleport-before">
    <div class="card before"><img style="height: 180px" src="../assets/luffy-sleep.gif" alt=""></div>
  </teleport>
  <teleport v-if="showAfter" to="#teleport-after">
    <div class="card after"><img style="height: 180px" src="../assets/ace-sleep.gif" alt=""></div>
  </teleport>
</template>
<script>
export default {
  name: 'Teleport',
  data() {
    return {
      showBefore: false,
      showAfter: false
    }
  }
}
</script>
<style scoped>
  .card {
    width: 100%; border: 1px solid; text-align: center
  }
  .card.after{
    border-color: yellow;
  }
  .card.before{
    border-color: red;
  }
</style>
