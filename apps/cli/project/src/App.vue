<template>
  <div id="app">
    <Directives></Directives>
  </div>
      
</template>

<script>
import Directives from './components/Directives/Directives'
export default {
  name: "App",
  data: () => ({
    message: "Data Message",
    selectedComponent: "Quete"
  }),
  components: {
    Directives
  }
};
</script>
