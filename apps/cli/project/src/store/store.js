import Vue from 'vue';
import Vuex from 'vuex'
import Counter from './modules/counter'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        userInput: ""
    },
    mutations: {
        updateUserInput: (state, payload) => {
            state.userInput = payload
        }
    },
    actions: {
        updateUserInput: ({ commit }, payload) => {
                commit('updateUserInput', payload)
        },
    },
    modules: {
        Counter
    }
})