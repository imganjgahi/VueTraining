<template>
    <div class="userPage">
        <h1>User Edit</h1>
        <div class="queries">
            <p>Lang: {{$route.query.lang}} </p>
            <p>Q: {{$route.query.q}} </p>
            <p>name: {{$route.query.name}} </p>
        </div>
        <div class="action">
        </div>
    </div>
</template>
<script>
export default {
}
</script>