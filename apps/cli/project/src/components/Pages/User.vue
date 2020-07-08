<template>
    <div class="userPage">
        <h1>User Page</h1>
        <div class="action">
            ID: {{userId}} <br><br>
            <button @click="navigateToHome">Go Home</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            userId: this.$route.params.id
        }
    },
    methods: {
        navigateToHome() {
            this.$router.push("/")
        }
    }
}
</script>