<template>
  <div id="app">
    <AppFilters></AppFilters>
  </div>
      
</template>

<script>
import AppFilters from './components/Filters/Filters'
export default {
  name: "App",
  data: () => ({
    message: "Data Message",
    selectedComponent: "Quete"
  }),
  components: {
    AppFilters
  }
};
</script>
