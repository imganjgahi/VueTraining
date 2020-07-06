<template>
    <div class="user">
        <h1>Edit The User</h1>
        <p>maybe you want edit data</p>
        <div class="action">
            <button @click="editUserAge">Edit age</button>
            <button @click="editUserAgeFromEventBus">Edit age from eventBus</button>
        </div>
    </div>
</template>

<script>
import { eventBus } from "../../main"
export default {
    name: "UserEdit",
    props:['userAge'],
    methods: {
        editUserAge() {
            this.userAge = 30
            this.$emit("editAge", this.userAge)
        },
        editUserAgeFromEventBus() {
            this.userAge = 30
            // this.$emit("editAge", this.userAge)
            eventBus.$emit("editAge", this.userAge)
        }
    }
}
</script>

<style scoped>

</style>