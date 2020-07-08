<template>
  <div id="app">
    <AnimationPage></AnimationPage>
  </div>
      
</template>

<script>
import AnimationPage from './components/Animation/MainPage'
export default {
  name: "App",
  data: () => ({
    message: "Data Message",
    selectedComponent: "Quete"
  }),
  components: {
    AnimationPage
  }
};
</script>
