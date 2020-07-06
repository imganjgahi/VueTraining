<template>
    <div class="formPage">
<form class="formBlock">

        <div class="inputGroup">
            <label for="firstName" class="label">FirstName</label>
            <input type="text" id="firstName" class="txtInput" v-model.lazy="details.firstName">
            <small> {{details.firstName}} </small>
        </div>
        <div class="inputGroup">
            <label for="lastName" class="label">LastName</label>
            <input type="text" id="lastName" class="txtInput" v-model="details.lastName">
        </div>
        <div class="inputGroup">
            <label for="email" class="label">Email</label>
            <input type="text" id="email" class="txtInput" v-model="details.email">
        </div>
    </form>
        <div class="details">
            <p> Name:  {{details.firstName}} {{details.lastName}}</p>
            <p> email:  {{details.email}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "FormPage",
    data () {
        return {
            details: {
                firstName: "",
                lastName: "",
                email: ""
            }
        }
    }
}
</script>

<style>

.inputGroup {
    padding: 5px 0;
}
.label {
    display: block;
}
.txtInput {
    display: block;
    width: 100%;
}
.formPage {
    width: 60%;
    margin: 25px auto;
    padding: 15px;
    border: 1px solid;
}
</style>