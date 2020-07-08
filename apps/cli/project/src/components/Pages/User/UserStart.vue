<template>
    <div class="userPage">
        <h1>User Start</h1>
        <div class="userRecord" v-for="(user, i) in userList" :key="i">
            <p class="userInfo">
              <small> {{user.id}}: </small>  {{user.name}} {{user.family}}
            </p>
            <div class="userAction">
                <router-link :to="'/user/'+user.id" >Detail</router-link>
                <router-link :to="{name: 'userEdit', params:{id: user.id}}" >Edit</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            userList: [
                {id: 1, name: "user", family: "Family"},
                {id: 2, name: "user", family: "Family"},
                {id: 3, name: "user", family: "Family"},
                {id: 4, name: "user", family: "Family"},
                {id: 5, name: "user", family: "Family"},
            ]
        }
    }
}
</script>

<style scoped>
.userRecord {
	border: 1px solid #aaa;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 25px;
	margin: 10px auto;
	width: 300px;
	border-radius: 5px;
}

.userAction {
	flex: 1;
	display: flex;
	justify-content: flex-end;
}

.userAction a{
    margin: 0 5px;
	color: orangered;
	text-decoration: none;
	border: 1px solid;
	padding: 3px 5px;
	border-radius: 5px;
	display: inline-block;
	width: 44px;
	text-align: center;
}

</style>