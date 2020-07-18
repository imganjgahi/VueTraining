import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        counter: 0,
    },
    getters: {
        doubleCounter:  state => {
            return state.counter * 2;
        },
        stringCounter:  state => {
            return state.counter;
        }
    },
    mutations: {
        increment: (state, payload = 1) => {
            state.counter += payload;
        },
        decrement: (state, payload) => {
            state.counter -= payload;
        },
    },
    actions: {
        asyncIncrement: ({ commit }, payload) => {
            // clearTimeout()
            setTimeout(() => {
                console.log("setTimeout")
                commit('increment', payload.by)
            }, payload.duration);
        },
        increment: ({ commit }, payload) => {
                commit('increment', payload)
        },
        decrement: ({ commit }, payload) => {
                commit('decrement', payload)
        },
    }
})