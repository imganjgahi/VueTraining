<template>
  <div id="app">
   <nav>
     <router-link to="/" class="app-link">Home</router-link>
     <router-link to="/user" class="app-link">User Page</router-link>
   </nav>
   <div class="container">
     <VuexApp></VuexApp>
   </div>
  </div>
      
</template>

<script>
import VuexApp from './components/VuexApp/VuexApp'
export default {
  name: "App",
  data: () => ({
    message: "Data Message",
    selectedComponent: "Quete"
  }),
  components: {VuexApp}
};
</script>

<style>

nav {
  background-color: #444;
  height: 40px;
  display: flex;
  align-items: center;
}
.app-link {
  color: white;
  display: inline-block;
  margin: 0 10px;
  text-decoration: none;
	padding: 5px;
}
.router-link-exact-active {
	background-color: white;
	color: black;
	border-radius: 5px;
}
.container{ 
  padding: 0 25px;
}
</style>
