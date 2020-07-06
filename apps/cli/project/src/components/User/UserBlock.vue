<template>
    <div class="user">
        <h1>The User Component</h1>
        <p>awsome component</p>
        <button @click="changeName">Change My Name</button>
        <p>
            Name: {{name}} , Age: {{age}}
        </p>
        <div class="action">
            <UserDetail 
            :userName="name"
            :userAge="age"
            :resetFn="resetTheName"
            @nameWasReset="name = $event" />
            <UserEdit
            :userAge="age"
            @editAge ="age = $event"
             />
        </div>
    </div>
</template>

<script>
import UserDetail from "./UserDetail";
import UserEdit from "./UserEdit";
export default {
    name: "UserBlock",
    data: function () {
        return {
            age: 36,
            name: "Mehran"
        }
    },
    methods: {
        changeName() {
            this.name = "Mehran Ganjgahi"
        },
        resetTheName() {
            this.name = "Mehran"
        }
    },
    components: {
        UserDetail,
        UserEdit,
    }
}
</script>

<style scoped>

.action {
	display: flex;
	justify-content: space-between;
	padding: 0 25px;
}
.action div {
	flex: 1;
	border: 1px solid;
}
</style>