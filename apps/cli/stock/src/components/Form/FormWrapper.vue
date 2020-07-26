<template>
    <form @submit.prevent="submitHandler" novalidate>
        <p> {{error}} </p>
        <slot
        :group="group"
        :fields="fields"
        :validation="validationBag"
        :error="error"
        :submit="submitHandler"
        ></slot>
    </form>
</template>


<script>
import { eventBus } from '../../main';
import Helper from '../../utils/Helper';
import Error from './Validator/Error';
import Validator from './Validator/Validator';
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
            validationBag: {},
            error: new Error,
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
        },
        requireValidation() {
            return !Helper.isEmpty(this.validationBag)
        },
        validate(){
            return new Promise((resolve, reject) => {
                if(!this.requireValidation()){
                    resolve();
                    return
                }

                this.error = new Error

                new Validator(this, resolve, reject)

            })
        },
        makeCall(){
            console.log("makeCall")
        },
        makeFailed(error){
            console.log("makeFail", error)
        },
        submitHandler() {
            this.validate().then(this.makeCall).catch(this.makeFailed)
        }
    }
}
</script>