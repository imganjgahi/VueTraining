import { AUTH_STATE, IRegister } from './model'
import axios from "../../../AxiosConfig";
import router from "../../../router"
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
        state.loading = loader
    },
    setAuthStatus(state: AUTH_STATE, isAuth: boolean){
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
            localStorage.setItem("Stock", respons.data[0]._id)
            commit("setLoading", "")
            commit("setAuthStatus", true)
            router.push("/dashboard")
        }).catch(err => {
            console.log(err);
            commit("setLoading", "")
        })
        
    },
    loginUser({commit}: {commit: (commitName: string, value: string | boolean) => void}, email: string) {
        commit("setLoading", "login")
        axios.get("/users?q=email:" + email).then(respons => {
            localStorage.setItem("Stock", respons.data[0]._id)
            commit("setLoading", "")
            if(respons.data.length > 0){
                commit("setAuthStatus", true)
                router.push("/dashboard")
            }
        }).catch(err => {
            console.log(err);
            commit("setLoading", "")
        })
        
    },
    tryAutoLogin({commit}: {commit: (commitName: string, value: string | boolean) => void}) {
        const storage = localStorage.getItem("Stock")
        if(storage) {
            commit("setAuthStatus", true)
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}