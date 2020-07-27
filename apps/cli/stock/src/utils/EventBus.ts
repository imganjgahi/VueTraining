import Vue from 'vue';

export default class EventBus {
    bus: Vue;
    
    constructor(){
        this.bus = new Vue()
    }

    fire(events: string | string[], ...data: any){
        this.wrapper(events, 
            () => {  this.bus.$emit((events as string), ...data) } , 
            (index: number) => { this.bus.$emit(events[index], ...data) })
    }

    listen(events: string | string[], callback: Function){
        this.wrapper(events, 
            () => {  this.bus.$on(events, callback) } , 
            (index: number) => { this.bus.$on(events[index], callback) })
    }


    wrapper(events: string | string[], isNotArray: () => void, otherWise: (index: number) => void){
        if(!Array.isArray(events)){
            isNotArray();
            return
        }

        for (const index in events) {
            otherWise(+index)
        }

    }
}