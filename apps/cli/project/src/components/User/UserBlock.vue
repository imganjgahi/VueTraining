<template>
    <div class="user">
        <h1>The User Component</h1>
        <p>awsome component</p>
        <button @click="changeName">Change My Name</button>
        <div class="action">
            <UserDetail :myName="name" @nameWasReset="name = $event" />
            <UserEdit />
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
            name: "Mehran"
        }
    },
    methods: {
        changeName() {
            this.name = "Mehran Ganjgahi"
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