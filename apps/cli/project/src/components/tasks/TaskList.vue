<template>
    
    <div class="taskList">
        <h3>List: </h3>
        <div class="list">
            <template v-for="(task, i) in tasks">
                <TaskCard :key="i" 
                :task="{id: i, title: task}"
                @click.native="taskDeleted(i)"
                 />
            </template>
        </div>
    </div>
</template>

<script>
import TaskCard from './TaskCard'
export default {
    name: "TaskList",
    props: ["tasks"],
    data: () => ({
        list: []
    }),
    components: {
        TaskCard
    },
    methods: {
        taskDeleted(index){
            this.$emit("taskWasDeleted", index)
        }
    }

}
</script>

<style scoped>

</style>