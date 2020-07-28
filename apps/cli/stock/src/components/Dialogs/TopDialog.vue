<template>
    <div id="topDialog" :class="wrapperClass">
        <div class="dialog alert" :class="visibleClass('alert')" v-html="message" @click="clear"></div>
        <div class="dialog warning" :class="visibleClass('warning')" v-html="message" @click="clear"></div>
        <div class="dialog confirm" :class="visibleClass('confirm')">
            <p> {{message}} </p>
            <nav class="confirmDialogNav">
                <span class="small button" v-if="!processing" @click="makeCall">YES</span>
                <span class="small btn-danger button" v-if="!processing" @click="clear">NO</span>
            </nav>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { eventBus } from '../../main';
interface DataType {
        id: string | null;
        type: string | null;
        message: string;
        timeout: null | number;
        processing: boolean;
        url: null | string;
        data: any;
        method: string;
    }
interface AlertDataType {
        id: string;
        message: string;
        url: string;
        data: any;
        method: string;
}
export default Vue.extend({
    props: {
        sessionDialog: {
            type: Object,
            default: (): Record<string, any> => {return {} }
        }
    },
    data(): DataType {

        return {
            id: null,
            type: null,
            url: null,
            data: {},
            method: "get",
            message: "",
            timeout: null,
            processing: false
        }
    },
    computed: {
        isVisible(): boolean {
            return this.message !== "";
        },
        wrapperClass(): {[key: string]: boolean} {
            return {
                'overlay': this.isVisible && this.typeIs('confirm')
            }
        }
    },
    created() {
        eventBus.listen('clear-top-dialog', this.clear)
        eventBus.listen('top-alert', this.alertEvent)
        eventBus.listen('top-warning', this.warningEvent)
        eventBus.listen('top-confirm', this.confirmEvent)
    },
    methods: {
        typeIs(type: string){
            return this.type === type
        },

        visibleClass(type: string) {
            return {
                'active' : this.isVisible && this.typeIs(type)
            }
        },

        clear(data: any = null){
            this.clearCountDown();
            this.type = null;
            this.message = "";
            this.url = null;
            this.data = {};
            this.method = "get";
            this.processing = false;
            eventBus.fire(this.id +'-cleared', data || [])
        },
        clearCountDown() {
            if(this.timeout === null){
                return;
            }
            clearTimeout(this.timeout);
            this.timeout = null
        },
        alert(data: AlertDataType, type: string) {
            this.clear();
            this.id = data.id;
            this.type = type
            this.message = data.message
            this.countDown()

        },
        alertEvent(data: AlertDataType) {
            this.alert(data, 'alert')
        },

        warningEvent(data: AlertDataType) {
            this.alert(data, 'warning')
        },
        confirmEvent(data: AlertDataType) {
            this.clear()
            this.id = data.id;
            this.message = data.message;
            this.type = 'confirm';
            if(data.url) {
                this.url = data.url
            }
            if(data.method) {
                this.method = data.method.toLowerCase()
            }
            if(data.data) {
                this.data = data.data
            }
        },
        makeCall() {
            if(this.url){
                console.log(this.url)
            } else {
                this.success(this.message)
            }
        },
        success(response: any) {
            eventBus.fire(this.id + '-called', {
                response: response,
                dialog: this
            })
        },

        countDown() {
            this.timeout = setTimeout(() => {
                this.clear()
            }, 7000);
        }
    }
})
</script>
