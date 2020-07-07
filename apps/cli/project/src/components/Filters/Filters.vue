<template>
    <div class="filters">
        <h1>Filters</h1>
        <p>Name: {{text}} </p>
        <p>Name: {{text | toUpper}} </p>
        <p>Name: {{text | toUpper | to-lowercase}} </p>
        <p>Name: {{anotherText }} </p>
        <p>Name: {{anotherText | to-lowercase}} </p>
        <hr>
        filter: <input type="text" v-model="filterText">
        <ul>
            <li v-for="(fruit, i) in filterFruits" :key="i"> {{fruit}} </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"AppFilters",
    data() {
        return {
            text: "Mehran Ganjgahi",
            anotherText: "UPPER-CASE",
            fruits: ["Apple", "Orang", "Benana", "Melon"],
            filterText: ""
        }
    },
    filters: {
        toUpper(value){
            return value.toUpperCase()
        }
    },
    computed: {
        filterFruits() {
            return this.fruits.filter(item => item.toLowerCase().match(this.filterText.toLowerCase()))
        }
    }
}
</script>