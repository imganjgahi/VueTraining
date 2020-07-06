<template>
  <div id="app">
    <Quete>
      <h2 slot="title">{{message}}</h2>
       <p slot="content">A simple Quete </p>
       <p>other paragraph</p>
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
