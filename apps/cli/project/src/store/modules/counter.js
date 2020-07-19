const state= {
    counter: 0,
}
const getters= {
    doubleCounter:  state => {
        return state.counter * 2;
    },
    stringCounter:  state => {
        return state.counter;
    },
}
const mutations= {
    increment: (state, payload = 1) => {
        state.counter += payload;
    },
    decrement: (state, payload) => {
        state.counter -= payload;
    }
}
const actions= {
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
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}