<template>
    <div class="actionbtn">
        <button @click="asyncIncrement(300)">async UP</button>
        <button @click="decrement(2)">Down</button>
        <button @click="increment(2)">UP</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    methods: {
        ...mapActions([
            "increment",
            "decrement",
            // "asyncIncrement"
        ]),
        asyncIncrement(by) {
            this.$store.dispatch("asyncIncrement", {by, duration: 3000})
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
}
</script>