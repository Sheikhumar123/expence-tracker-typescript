import  { createContext, useReducer } from 'react';
import { TransactionType, InitialStateType } from '../Services/Interfaces'
import AppReducer from './AppReducer'

//initial state

const initialState = {
    transactions: [],
}


export const GlobalContext = createContext<InitialStateType | any>(initialState)

export const GlobalProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function addTransaction(transaction: TransactionType) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    function deleteTransaction(id: number) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }


    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            addTransaction,
            deleteTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}