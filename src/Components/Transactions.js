import React from 'react'
import './Transactions.css';
import Transaction from './Transaction';

function Transactions({ transactions, deleteTransaction }) {
    return (
        <div className="transactions">
            <h4>Transactions History</h4>

            {transactions.map( transaction => {
                return <Transaction key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction} />
            } )}

        </div>
    )
}

export default Transactions
