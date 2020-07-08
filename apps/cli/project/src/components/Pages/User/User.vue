<template>
  <div class="userPage">
    <h1>User Page</h1>
    <div class="action">
      <button @click="navigateToHome">Go Home</button>
      <button @click="counter++"> {{counter}} Times Clicked</button>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            counter: 0
        }
    },
  methods: {
    navigateToHome() {
      this.$router.push("/");
    }
  }
};
</script>