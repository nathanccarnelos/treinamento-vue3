<template>
  <div id="app">
    <p>
      <router-link to="/">Home</router-link> |
      <router-link to="/multi-root">multi-root</router-link> |
      <router-link to="/teleport">teleport</router-link> |
      <router-link to="/vmodel">v-model</router-link> |
      <router-link to="/composition-api">composition api</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
