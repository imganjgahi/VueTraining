<template>
  <div id="app">
    <Quete>
      <h2>Quote</h2>
       <p>A simple Quete </p>
    </Quete>
  </div>
</template>

<script>

import Quete from "./components/Quete/Quete"
export default {
  name: 'App',
  data: () => ({
    message: "Data Message"
  }),
  components: {
    Quete,
  }
}
</script>

<style>
body {
  margin: 0;
}

</style>
