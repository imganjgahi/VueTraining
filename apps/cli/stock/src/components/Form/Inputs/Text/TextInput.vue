<template>
    <div
        v-if="show"
    >
        <input 
            type="text" 
            :name="name" 
            :id="identity"
            :value="value"
            :placeholder="placeholder"
            :maxlength="maxlength"
            :autocomplete="autocomplete"
            v-on="inputListeners">
    </div>
</template>


<script>
import Helper from '../../../../utils/Helper';
import { eventBus } from '../../../../main';
import Error from '../../Validator/Error';

export default {

    props: {
        group: {
            type: String,
            required: false
        },
        label: {
            type: String,
            required: false
        },
        name: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: false
        },
        value: {
            default: ''
        },
        currentValue: {
            default: ''
        },
        placeholder: {
            type: String,
            required: false
        },
        focus: {
            type: Boolean,
            required: false
        },
        maxlength: {
            type: String,
            required: false
        },
        autocomplete: {
            type: String,
            required: false
        },
        validation: {
            type: [Array, Object],
            default: () => []
        },
        error: {
            type: Object,
            default: () => new Error
        },
        visible: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            identity: this.id ? this.id : this.name,
            displayValidation: false,
            show: this.visible
        }
    },
    computed: {
        inputListeners() {
            return Object.assign({}, this.$listeners, {
                input: (event) => {
                    this.emit(event.target.value)
                }
            })
        },
        isInvalid() {
            return this.error.has(this.name)
        },
        showValidation() {
            return this.isInvalid && this.displayValidation
        }
    },
    mounted(){
        this.emit(this.currentValue);
        this.initialize()
    },
    methods: {
        emit(value){
            this.$emit("input", value)
        },
        initialize(){
            if(Helper.isEmpty(this.validation)){
                return;
            }
                let rules = this.validation
            if(!Array.isArray(this.validation)){
                this.displayValidation = true;
                rules = Object.keys(this.validation)
            }

            eventBus.fire("initialize-"+ this.group, {
                field: this.name,
                rules
            })
        }
    }
}
</script>