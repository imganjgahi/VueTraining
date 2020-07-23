<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/Navbar'
export default {
  components: {
    NavBar
  },
  created() {
    this.$store.dispatch("tryAutoLogin");
  }
}
</script>
<style>
@import url('./assets/styles/main.css');

</style>
