import { AUTH_STATE, IRegister } from './model'
import axios from "../../../AxiosConfig"
const state: AUTH_STATE = {
    isAuth: false,
    loading: "",
    panelName: "login"
}

const getters = {
    isUserAuth: (state: AUTH_STATE) => {
        return state.isAuth
    },
    panel: (state: AUTH_STATE) => {
        return state.panelName
    }
}

const mutations = {
    setLoading(state: AUTH_STATE, loader: string) {
        console.log("Loadind", loader)
        state.loading = loader
    },
    setAuthStatus(state: AUTH_STATE ,isAuth: boolean){
        state.isAuth = isAuth
    },
    goto(state: AUTH_STATE, panelName: string) {
        state.panelName = panelName
    }

}

const actions = {

    userRegister({commit}: {commit: (commitName: string, value: string | boolean) => void}, userData: IRegister) {
        commit("setLoading", "register")
        axios.post("/users", userData).then(respons => {
            console.log("RES: ", respons.data);
            commit("setLoading", "")
            commit("setAuthStatus", true)
        }).catch(err => {
            console.log(err);
            commit("setLoading", "")
        })
        
    },
    loginUser({commit}: {commit: (commitName: string, value: string | boolean) => void}, email: string) {
        commit("setLoading", "login")
        axios.get("/users?q=email:" + email).then(respons => {
            console.log("RES: ", respons.data);
            commit("setLoading", "")
            if(respons.data.length > 0){
                commit("setAuthStatus", true)
            }
        }).catch(err => {
            console.log(err);
            commit("setLoading", "")
        })
        
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}