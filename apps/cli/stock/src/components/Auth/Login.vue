<template>
  <div class="loginModal">
    <form @submit="loginUser($event)">
      <div class="formgroup">
        <label for="">email</label>
        <input type="text" v-model="email" />
      </div>
      <div class="action">
          <button>Login</button>
          <small class="switchPanel" @click="goto('register')">Switch to Register Page</small>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    ...mapMutations([
      'goto'
    ]),
      loginUser(e) {
          e.preventDefault()
          this.$store.dispatch("loginUser", this.email)
      }
  }
};
</script>

<style>
  .formgroup label {
    display: block;
  }
</style>