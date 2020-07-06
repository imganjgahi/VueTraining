<template>
  <div id="app">
    <!-- <Quete>
      <h2 slot="title">{{message}}</h2>
       <p slot="content">A simple Quete </p>
       <p>other paragraph</p>
    </Quete>-->
    <div class="action">
      <button @click="selectedComponent = 'Quete'">Quote</button>
      <button @click="selectedComponent = 'Author'">Author</button>
      <button @click="selectedComponent = 'newQuote'">New</button>
    </div>
    <keep-alive>
      <component :is="selectedComponent">
        <h1>default</h1>
      </component>
    </keep-alive>
  </div>
</template>

<script>
import Quete from "./components/Quete/Quete";
import NewQuote from "./components/Quete/NewQuote";
import Author from "./components/Quete/Author";
export default {
  name: "App",
  data: () => ({
    message: "Data Message",
    selectedComponent: "Quete"
  }),
  components: {
    Quete,
    NewQuote,
    Author
  }
};
</script>
