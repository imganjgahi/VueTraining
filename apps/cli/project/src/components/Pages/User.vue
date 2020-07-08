<template>
    <div class="userPage">
        <h1>User Page</h1>
        <div class="action">
            <button @click="navigateToHome">Go Home</button>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        navigateToHome() {
            this.$router.push("/")
        }
    }
}
</script>