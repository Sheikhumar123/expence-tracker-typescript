import { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
// import Transaction from './Transaction'
import { TransactionType } from "../Services/Interfaces";

const TransactionList = () => {




    const { transactions, deleteTransaction } = useContext(GlobalContext);

    return (
        <div>
            <div>
                <p> Transaction History</p>
            </div>
            <div>
                <ul className="historylist">
                    {transactions.map((transaction: TransactionType) => (
                        <li
                            className={
                                transaction.amount < 0
                                    ? "historylist-item minus"
                                    : "historylist-item plus"
                            }
                        >
                            <div className="trans-des">
                                <span className="transaction-title">
                                    {transaction.text}
                                </span>
                                <span className="transaction-amount">
                                    {transaction.amount < 0 ? "-" : ""}$
                                    {Math.abs(transaction.amount).toFixed(2)}
                                </span>
                            </div>
                            <button
                                className="del-btn"
                                onClick={(e) => {
                                    e.preventDefault();
                                    console.log("delete");
                                    deleteTransaction(transaction.id);
                                }}
                            >
                                X
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

// return (
//         <>
//             <h3>History</h3>
//             <ul className="list">
//                {transactions.map((transaction:TransactionType) => {

//                 //    <Transaction transaction={transaction} key={transaction.id}/>
//                })}
//             </ul>
//         </>
//     )
// }

export default TransactionList
