<template>
    <div class="filters">
        <h1>Filters</h1>
        <p>Name: {{text}} </p>
        <p>Name: {{text | toUpper}} </p>
    </div>
</template>

<script>
export default {
    name:"AppFilters",
    data() {
        return {
            text: "mehran anjgahi"
        }
    },
    filters: {
        toUpper(value){
            return value.toUpperCase()
        }
    }
}
</script>