<template>
    <nav>
        <h1>STOCK</h1>

        <div class="navLinks">
            <router-link to="/">Home</router-link>
            <router-link to="/dashboard">Dashboard</router-link>
            <router-link to="/about">About</router-link>
        </div>
        <div>
            <router-link v-if="!auth" to="/auth">Register/Login</router-link>
            <router-link v-if="auth" to="/logout">Logout</router-link>
        </div>
    </nav>
</template>


<script>
export default {
    computed: {
        auth() {
            return this.$store.getters.isUserAuth
        }
    }
}
</script>

<style scoped>

nav {
	background-color: #444;
	color: #fff;
	display: flex;
	align-items: center;
	padding: 0 15px;
    display: flex;
    justify-content: space-between;
}

.navLinks {
	padding: 0 20px;
}

 a {
	display: inline-block;
	color: white;
	margin: 0 10px;
    text-decoration: none;
}
a.router-link-exact-active {
    color: #42b983;
    font-weight: bold;
}
a:hover {
    text-decoration: underline;
}

</style>