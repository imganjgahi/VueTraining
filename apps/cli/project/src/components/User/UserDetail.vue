<template>
    <div class="user">
        <h1>The User Detail</h1>
        <p>DETAILS</p>
        <p>
            <span>UserName: {{name}}</span>
        </p>
    </div>
</template>

<script>
export default {
    name: "UserDetail",
    props: [
        'name'
    ]
}
</script>

<style scoped>

</style>