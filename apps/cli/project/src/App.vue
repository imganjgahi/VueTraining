<template>
  <div id="app">
    <Header></Header>
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <p> {{message}} </p>
    <HomePage></HomePage>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HomePage from './components/Home'
import Header from './components/Header'

export default {
  name: 'App',
  data: () => ({
    message: "Data Message"
  }),
  components: {
    // HelloWorld
    Header,
    HomePage,
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
