<template>
    <form novalidate>
        <slot
        :group="group"
        :fields="fields"
        :validation="validationBag"
        ></slot>
    </form>
</template>


<script>
import { eventBus } from '../../main'
export default {
    props: {
        group: {
            type: String,
            required: false
        },
        behaviour: {
            type: String,
            required: false
        }
    },
    data() {
        return {
            fields: {},
            validationBag: {}
        }
    },
    created() {
        eventBus.listen("initialize-" + this.group, this.initialize)
    },
    methods: {
        initialize(data){
            if(!Object.prototype.hasOwnProperty.call(this.validationBag, data.field)){
                this.validationBag[data.field] = data.rules
            }
        }
    }
}
</script>