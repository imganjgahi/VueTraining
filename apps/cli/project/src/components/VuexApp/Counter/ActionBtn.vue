<template>
  <div class="actionbtn">
    <button @click="asyncIncrement(300)">async UP</button>
    <button @click="decrement(2)">Down</button>
    <button @click="increment(2)">UP</button>
    <hr />
    <h3>NAME:</h3>
    <!-- <input type="text" :value="userInput" @input="updateUserInput($event.target.value)"> OR Down Way -->
    <input type="text" v-model="userInput">
    <p> {{userInput}} </p>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
    // props= ["userInput"],
    computed: {
        userInput: {
            get() {
                return this.$store.state.userInput
            },
            set(value) {
                this.$store.commit("updateUserInput", value)
            }
        }
    },
  methods: {
    ...mapMutations([
        "updateUserInput"
    ]),
    ...mapActions([
      "increment",
      "decrement"
      // "asyncIncrement"
    ]),
    asyncIncrement(by) {
      this.$store.dispatch("asyncIncrement", { by, duration: 3000 });
    }
    //before MapMutations
    // countEvent(amount){
    //     if(amount > 0){
    //         this.$store.commit('increment')
    //     } else {
    //         this.$store.commit("decrement")
    //     }
    // }
  }
};
</script>