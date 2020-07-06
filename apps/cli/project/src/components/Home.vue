<template>
    <div class="HomePage">
        <h1 class="title">{{title}}</h1>
        <button class="btn" @click="changeTitle">Change Title</button>
    </div>
</template>

<script>
export default {
    name: "HomePage",
    data: function() {
        return{
            title: "Home"
        }
    },
    methods: {
        changeTitle() {
            this.title = "Home Page"
        }
    }
}
</script>

<style scoped>

.HomePage {
    background-color: #444;
}


.title {
    color: lightcoral;
}
.title:hover {
    color: lightcyan;
}
</style>

<style lang="css">

.btn {
    background-color: gold;
    height: 45px;
    width: 120px;
}
</style>