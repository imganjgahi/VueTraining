<template>
    <div class="user">
        <h1>The User Detail</h1>
        <p>DETAILS</p>
        <p>
            <span>UserName: {{convertName()}}</span> <br>
            <span>age: {{userAge}}</span>
        </p>
        <div class="action">
            <button @click="resetName"> Reset </button>
            <button @click="resetFn()"> Reset on parrent </button>
        </div>
    </div>
</template>

<script>
import { eventBus } from "../../main"
export default {
    name: "UserDetail",
    props: {
        userName: {
            type: String,
            default: "no name"
        },
        resetFn: Function,
        userAge: Number
    },
    methods: {
        convertName() {
            return this.userName.toUpperCase()
        },
        resetName() {
            this.userName = "Mehran";
            this.$emit("nameWasReset", this.userName)
        }
    },
    created(){
        eventBus.$on("editAge", (age) => {
            this.userAge = age
        })
    }
}
</script>

<style scoped>

</style>