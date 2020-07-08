<template>
  <div id="app">
   <nav>
     <router-link to="/" class="app-link">Home</router-link>
     <router-link to="/user" class="app-link">User Page</router-link>
   </nav>
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
</style>
