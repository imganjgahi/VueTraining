<template>
  <div id="app">
    <TopDialog />
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/Navbar'
import TopDialog from './components/Dialogs/TopDialog'
export default {
  components: {
    NavBar,
    TopDialog
  },
  created() {
    this.$store.dispatch("tryAutoLogin");
  }
}
</script>
<style>
@import url('./assets/styles/main.css');

</style>
