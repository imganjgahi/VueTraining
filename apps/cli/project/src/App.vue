<template>
  <div id="app">
    <HomePage></HomePage>
  </div>
      
</template>

<script>
import HomePage from './components/Pages/Home'
export default {
  name: "App",
  data: () => ({
    message: "Data Message",
    selectedComponent: "Quete"
  }),
  components: {
    HomePage
  }
};
</script>
