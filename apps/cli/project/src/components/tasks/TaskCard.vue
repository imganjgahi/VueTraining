<template>
    <div class="card">
        <h3>Task #{{task.id}}</h3>
        <p> {{task.title}} </p>
    </div>
                
</template>

<script>
export default {
    name: "TaskList",
    props: ["task"],
    data: () => ({
        list: []
    })
}
</script>

<style scoped>

</style>