<template>
    
    <div class="quete">
        <div class="title">    
        <slot name="title">title</slot>
        <span style="color: #ccc">
            <slot name="subTitle" > subTitle Slot</slot>
        </span>
        </div>
       <slot name="content"></slot>
       <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Quote"
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
.title {
    color: red;
}
</style>