<template>
    <div
        v-if="show"
        :class="computedWrapperCssClass"
        :style="computedWrapperCssStyle"
    >
    <slot>
        <Validation
        :label="label"
        :id="identity"
        :name="name"
        :show="showValidation"
        :cssClass="computedValidationCssClass"
        :validation="validation"
        :error="error"
        ></Validation>
    </slot>
        <input 
            type="text" 
            :name="name" 
            :id="identity"
            :value="value"
            :placeholder="placeholder"
            :maxlength="maxlength"
            :autocomplete="autocomplete"
            :class="computedValidationCssClass"
            v-focus="focus"
            v-on="inputListeners">
    </div>
</template>


<script>
import Helper from '../../../../utils/Helper';
import { eventBus } from '../../../../main';
import Error from '../../Validator/Error';
import Validation from '../../Validator/Validation';

export default {

    components: {
        Validation
    },
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
        },
        inputCssClass: {
            type: String,
            required: false
        },
        validationCssClass: {
            type: String,
            default: "invalid"
        },
        wrapperCssClass: {
            type: String,
            required: false
        },
        wrapperErrorCssClass: {
            type: String,
            required: false
        },
        wrapperCssStyle: {
            type: String,
            required: false
        },
        wrapperErrorCssStyle: {
            type: String,
            required: false
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
        },
        computedValidationCssClass() {
            return {
                [this.validationCssClass]: this.isInvalid
            }
        },
        computedWrapperCssClass() {
            return [
                {
                [this.wrapperErrorCssClass]: this.isInvalid
                },
                this.wrapperCssClass
            ]
        },
        computedWrapperCssStyle() {
            return [
                {
                [this.wrapperErrorCssStyle]: this.isInvalid
            },
            this.wrapperCssStyle
            ]
        },
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

<style scoped>
input {
	width: 100%;
	padding: 5px;
	margin: 5px 0;
	box-sizing: border-box;
	min-height: 30px;
	border-radius: 5px;
	border: 1px solid #888;
}
</style>