<template>
    <div class="list">
        filter: <input type="text" v-model="filterText">
        <ul>
            <li v-for="(fruit, i) in filterFruits" :key="i"> {{fruit}} </li>
        </ul>
    </div>
</template>

<script>
import { FruitMixin } from "../../FruitMixin";
export default {
    name:"AppList",
    mixins:[FruitMixin]
}
</script>