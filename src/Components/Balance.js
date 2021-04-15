import React from 'react'
import './Balance.css';

function Balance({ transactions }) {

    const amountArr = transactions.map( item => { return item.amount });
    const total = amountArr.reduce((amount, item) => (amount+=item), 0 ).toFixed(2);

    return (
        <div className="balance">
            <h5>Balance is Rs.{total}</h5>
        </div>
    )
}

export default Balance
