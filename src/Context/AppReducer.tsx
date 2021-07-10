import {TransactionType} from '../Services/Interfaces'

export default (state: any, action: any) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions : state.transactions.filter((transaction: TransactionType)=>transaction.id !== action.payload)
      }
    default:
      return state;
  }
};
