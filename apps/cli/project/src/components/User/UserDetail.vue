<template>
    <div class="user">
        <h1>The User Detail</h1>
        <p>DETAILS</p>
        <p>
            <span>UserName: {{convertName()}}</span>
        </p>
        <div class="action">
            <button @click="resetName"> Reset </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserDetail",
    props: {
        myName: {
            type: String,
            default: "no name"
        }
    },
    methods: {
        convertName() {
            return this.myName.toUpperCase()
        },
        resetName() {
            this.myName = "Mehran";
            this.$emit("nameWasReset", this.myName)
        }
    }
}
</script>

<style scoped>

</style>