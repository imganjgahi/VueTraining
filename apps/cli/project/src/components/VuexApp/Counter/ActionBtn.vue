<template>
    <div class="actionbtn">
        <button @click="increment">UP</button>
        <button @click="decrement">Down</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    methods: {
        ...mapMutations([
            "increment",
            "decrement",
        ]),
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