<template>
  <div id="app">
    <MainPage></MainPage>
  </div>
      
</template>

<script>
import MainPage from './components/tasks/MainPage'
export default {
  name: "App",
  data: () => ({
    message: "Data Message",
    selectedComponent: "Quete"
  }),
  components: {
    MainPage
  }
};
</script>
