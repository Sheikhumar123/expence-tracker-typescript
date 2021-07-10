export interface TransactionType  {
    id: number,
    text: String,
    amount: number
}

export interface InitialStateType {
    transactions : TransactionType[]
}