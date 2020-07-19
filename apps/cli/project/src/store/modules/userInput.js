const state= {
        userInput: ""
}
const mutations= {
    updateUserInput: (state, payload) => {
        state.userInput = payload
    }
}
const actions= {
    updateUserInput: ({ commit }, payload) => {
            commit('updateUserInput', payload)
    },
}

export default {
    state,
    mutations,
    actions
}