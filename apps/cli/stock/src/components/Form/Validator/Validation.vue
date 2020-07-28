<template>
    <label :for="id" v-if="showLabel"> 
        <span  v-text="label" v-if="label"></span>
        <span  class="validation" v-if="show">
            <span
            :class="cssClass"
            v-for="(message, rule) in validation"
            :key="rule"
            v-show="showError(rule)"
            v-text="message"
            ></span>
        </span>
     </label>
</template>

<script lang="ts">
import Vue from 'vue';
import Error from './Error';

export default Vue.extend({
    props: {
        label: {
            type: String,
            required: false,
        },
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        show: {
            type: Boolean,
            default: false
        },
        cssClass: {
            type: [Array, Object, String],
            required: false
        },
        validation: {
            type: [Array, Object],
            default: (): {[key: string]: string}[] => []
        },
        error: {
            type: Object,
            default: new Error
        }
    },
    computed: {
        showLabel() {
            return this.label || this.show
        }
    },
    methods: {
        showError(rule: string){
            return this.error.has(this.name, rule.split(":")[0])
        }
    }

})
</script>