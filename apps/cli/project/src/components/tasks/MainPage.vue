<template>
  <div class="mainPage">
    <h1>Tasks</h1>
    <div class="inbox">
        <input type="text" v-model="taskContent"> 
        <button @click="addNewTask">add task</button>
    </div>
    <TaskList :tasks="tasks" @taskWasDeleted="taskDeleted"></TaskList>
  </div>
</template>

<script>
import TaskList from "./TaskList";
export default {
  name: "MainPage",
  data: function() {
      return {
          taskContent: "",
          tasks: []
      }
  },
  components: {
    TaskList
  },
  methods: {
      addNewTask(){
          this.tasks.push(this.taskContent)
          this.taskContent = ""
      },
        taskDeleted(index){
            this.tasks = this.tasks.filter((x,i) => i !== index)
        }
  }
};
</script>