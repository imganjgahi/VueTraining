import { IState, IDeposite } from "./model"

const state: IState = {
    list: [],
    loading: "",

}

const getters= {
    depositeList: (state: IState) => {
        return state.list
    }
}

const mutations = {
    loadData(state: IState, data: IDeposite[]){
        state.list = data
    },

    addNewItem(state: IState, item: IDeposite){
        state.list = [
            item,
            ...state.list
        ]
    },

    editItem(state: IState, payload: {itemId: number; newData: IDeposite}){
        const targetItem = state.list.findIndex(x => x.id === payload.itemId)
        if(targetItem < 0){
            return;
        }
        const udatedList = state.list;
        udatedList[targetItem] = payload.newData
        state.list = udatedList
    },

    deleteItem(state: IState, itemId: number){
        state.list = state.list.filter(x => x.id !== itemId)
    }
}

export default {
    state,
    getters,
    mutations,
}
