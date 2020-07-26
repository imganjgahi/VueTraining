<template>

<table>
    <thead>
        <tr>
            <th v-for="(column, index) in columns" :key="index"> {{column}} </th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(item, index) in dataList" :key="index">
            <td v-for="(column, i) in columns" :key="i" >
                <slot :col="item[column]" :name="column"> {{item[column]}} </slot>
            </td>
            <td> <slot :item="item" name="actions"></slot> </td>
        </tr>
    </tbody>
</table>
    
</template>

<script>
export default {
    props:[
        'dataProps',
        'loading',
        'columns'
    ],
    computed: {
        dataList(){
            console.log(this.dataProps);
            return this.dataProps
        }
    }
}
</script>