import React from 'react'
import { useState, useContext } from 'react'
import { GlobalContext } from "../Context/GlobalState";

const AddTransaction = () => {
    const idGenerator = () => Math.floor(Math.random() * 10000000)
    const [text, settext] = useState<string>("")
    const [amount, setamount] = useState<number>(0)

    const { addTransaction } = useContext(GlobalContext)



    const addExpense = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (amount === 0) {

            alert("please enter amount greater than zero");
        }
        else if (amount > 0) {
            const newTransaction = {
                id: idGenerator(),
                text: text,
                amount: +amount,
            };
            addTransaction(newTransaction);
        }
        else {
            const newTransaction = {
                id: idGenerator(),
                text: text,
                amount: amount,
            };
            addTransaction(newTransaction);
        }

        settext('')
        setamount(0);
    };


    return (
        <>
            <h3>Add new transaction</h3>
            <form >
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e: React.ChangeEvent<HTMLInputElement>) => settext(e.currentTarget.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                    </label>
                    <input type="number" value={amount} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setamount(+e.currentTarget.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn" onClick={addExpense}>Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction
