<template>
    <div class="actionbtn">
        <button @click="countEvent(1)">UP</button>
        <button @click="countEvent(-1)">Down</button>
    </div>
</template>

<script>
export default {
    methods: {
        countEvent(amount){
            // this.$emit('updated', amount)
            this.$store.state.counter += amount
        }
    }
}
</script>