<template>
    
    <div class="quete">
       <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Quete"
}
</script>

<style scoped>

.quete {
    border: 1px solid #ccc;
    text-align: center;
    padding: 15px;
    margin: 30px auto;
    box-shadow: 2px 2px 8px 3px #aaa;
    width: 60%;
}
</style>