export interface IDeposite {
    id: number;
    title: string;
    amount: number;
}

export interface IState {
    list: IDeposite[];
    loading: string;
}


