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
        <hr>
        <AppList></AppList>
    </div>
</template>

<script>
import AppList from './List'
import { FruitMixin } from "../../FruitMixin";
export default {
    name:"AppFilters",
    mixins:[FruitMixin],
    data() {
        return {
            text: "Mehran Ganjgahi",
            anotherText: "UPPER-CASE",
        }
    },
    components: {
        AppList
    },
    filters: {
        toUpper(value){
            return value.toUpperCase()
        }
    }
}
</script>