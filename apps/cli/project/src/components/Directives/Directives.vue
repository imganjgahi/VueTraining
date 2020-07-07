<template>
    <div class="directive">
        <h1>Build-in Directives</h1>
        <p v-text="'Some Text'"></p>
        <p v-html="'<b><i> Some Text  </i></b>'"></p>
        <hr>
        <h1>Custom Directive</h1>
        <p v-highlight:background="'lightblue'"> Highlight Directive</p>
    </div>
</template>

<script>
export default {
    name: "Directives"
}
</script>

<style lang="css" scoped>
    .directive{
        width: 60%;
        margin: 25px auto;
    }
</style>
