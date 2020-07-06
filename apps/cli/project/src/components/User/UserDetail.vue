<template>
    <div class="user">
        <h1>The User Detail</h1>
        <p>DETAILS</p>
        <p>
            <span>UserName: {{convertName()}}</span>
        </p>
    </div>
</template>

<script>
export default {
    name: "UserDetail",
    props: [
        'myName'
    ],
    methods: {
        convertName() {
            return this.myName.toUpperCase()
        }
    }
}
</script>

<style scoped>

</style>