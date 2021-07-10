import React,{useEffect , useContext , useState} from 'react'
import {TransactionType} from '../Services/Interfaces'
import { GlobalContext } from '../Context/GlobalState';



const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const [balance, setBalance] = useState(0)

    useEffect(() => {
        let sum = 0;
        console.log(transactions.length);
        if (transactions.length > 0) {
            
            transactions.map((transaction: TransactionType) => {
                
                sum += transaction.amount
                return setBalance(sum)
            })
        }
        else{
            setBalance(0)
        }
    }, [transactions]);

    return (
        <div className="text-center">
            <h4>Your balance</h4>
            <h3 className="heading balance">
                ${balance}-/
            </h3>
        </div>
    )
}

export default Balance
