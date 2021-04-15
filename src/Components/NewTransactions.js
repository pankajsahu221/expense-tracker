import React, { useState } from 'react'
import './NewTransactions.css';
import { TextField, Button } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

function NewTransactions({ addTransactions }) {

    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");
    
    const handleClick = (e)=>{
        e.preventDefault();

        const transaction = {
             id:uuidv4(), text: text, amount: +amount 
        }
        addTransactions(transaction);
    }

    return (
        <div className="newTransactions">
            <h4>New Transaction</h4>
            <TextField label="Enter Expense" onChange={e => setText(e.target.value)}/>
            <TextField label="Enter Amount" onChange={e => setAmount(e.target.value)}/>
            <Button variant="contained" color="primary" onClick={ handleClick }>Add Transaction</Button>
        </div>
    )
}

export default NewTransactions
