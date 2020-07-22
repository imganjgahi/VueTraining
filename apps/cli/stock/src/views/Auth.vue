<template>
    <div class="auth">
        <Register v-if="panel === 'register'" />
        <Login v-if="panel === 'login'" />
    </div>
</template>

<script>
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
export default {
    data() {
        return {
            modalType: ""
        }
    },
    computed: {
        panel(){
            return this.$store.getters.panel
        }
    },
    components: {
        Register,
        Login
    }
}
</script>