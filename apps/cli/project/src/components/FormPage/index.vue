<template>
    <div class="formPage">
<form class="formBlock">

        <div class="inputGroup">
            <label for="firstName" class="label">FirstName</label>
            <input type="text" id="firstName" class="txtInput" v-model.lazy="details.firstName" />
            <small> {{details.firstName}} </small>
        </div>
        <div class="inputGroup">
            <label for="lastName" class="label">LastName</label>
            <input type="text" id="lastName" class="txtInput" v-model="details.lastName" />
        </div>
        <div class="inputGroup">
            <label for="email" class="label">Email</label>
            <input type="text" id="email" class="txtInput" v-model="details.email" />
        </div>
        <div class="inputGroup">
            <label class="label">send Email ? </label>
            <label for="sendEmail">  send Email</label> <input 
            type="checkbox" 
            id="sendEmail"
            value="sendMail" v-model="details.sendData" /> <br>
            <label for="sendMobile">send Mobile</label> <input 
            type="checkbox" 
            id="sendMobile"
            value="sendMobile" v-model="details.sendData" />
        </div>
        <div class="inputGroup">
            <label class="label">Gender </label>
            <label for="male">  Male <input 
            type="radio" 
            id="male"
            value="Male" v-model="details.gender" /></label>

            <label for="female"> Female<input 
            type="radio" 
            id="female"
            value="Female" v-model="details.gender" /></label> 
        </div>
        <div class="inputGroup">
            <label class="label" for="status">Stuff </label>
            <AppSwitch v-model="details.stuff" />
        </div>
        <div class="inputGroup">
            <label class="label" for="status">Gender </label>
            <select id="status" v-model="details.currentStatus">
                <option v-for="(item, i) in details.status" :value="item" :key="i"> {{item}}</option>
                
            </select>
        </div>
    </form>
        <div class="details">
            <p> Name:  {{details.firstName}} {{details.lastName}}</p>
            <p> email:  {{details.email}}</p>
            <span>send Data To</span>
            <ul>
                <li v-for="(item, i) in details.sendData" :key="i"> {{item}} </li>
            </ul>
            <p>Gender: {{details.gender}} </p>
            <p>currentStatus: {{details.currentStatus}} </p>
            <p>Stuf: {{details.stuff ? "YES" : "NO"}} </p>
        </div>
    </div>
</template>

<script>
import Switch from './Switch'
export default {
    name: "FormPage",
    components: {
        AppSwitch: Switch
    },
    data () {
        return {
            details: {
                firstName: "",
                lastName: "",
                email: "",
                sendData: [],
                gender: "Male",
                status: [
                    'Todo',
                    'Doing',
                    'Done',
                ],
                currentStatus: "Doing",
                stuff: true
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