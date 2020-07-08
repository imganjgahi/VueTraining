<template>
  <div id="app">
   <h1>App Layout</h1>
   <hr>
   <router-view></router-view>
  </div>
      
</template>

<script>
export default {
  name: "App",
  data: () => ({
    message: "Data Message",
    selectedComponent: "Quete"
  })
};
</script>
