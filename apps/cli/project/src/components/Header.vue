<template>
    <div class="nav">
        <h1> {{title}} </h1>
        <p>vue components cli</p>
    </div>
</template>

<script>
export default {
    name: "Header",
    data: function () {
        return {
            title: "VUE Training"
        }
    }
}
</script>

<style scoped>

.nav {
	background-color: #444;
	text-align: left;
	padding: 5px 15px;
}
.nav h1 {
	font-size: 14px;
	color: white;
	margin: 0;
}
.nav p {
	color: white;
}
</style>