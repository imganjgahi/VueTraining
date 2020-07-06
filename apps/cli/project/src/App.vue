<template>
  <div id="app">
    <Header></Header>
    <UserBlock></UserBlock>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header';
import UserBlock from "./components/User/UserBlock"

export default {
  name: 'App',
  data: () => ({
    message: "Data Message"
  }),
  components: {
    Header,
    UserBlock
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
