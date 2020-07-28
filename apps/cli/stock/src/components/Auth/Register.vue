<template>
  <div class="loginModal">
    <form @submit="registerUser($event)">
      <div class="formgroup">
        <label for="">firstName</label>
        <input type="text" v-model="firstName" />
      </div>
      <div class="formgroup">
        <label for="">lastName</label>
        <input type="text" v-model="lastName" />
      </div>
      <div class="formgroup">
        <label for="">email</label>
        <input type="text" v-model="email" />
      </div>
      <div class="formgroup">
        <label for="">password</label>
        <input type="password" v-model="password" />
      </div>
      <div class="action">
          <button>Register</button>
          <small class="switchPanel" @click="goto('login')">Switch to Login Page</small>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapMutations([
      'goto'
    ]),
      registerUser(e) {
          e.preventDefault()
          this.$store.dispatch("userRegister", {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password
          })
      }
  }
};
</script>