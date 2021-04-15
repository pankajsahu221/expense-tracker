import React from 'react'
import './ExpenseCard.css';

function ExpenseCard({ transactions }) {

    const amountArr = transactions.map( item => { return item.amount });
    const income = amountArr.filter( item => { return item>0 ; }).reduce((amount, item) => (amount+=item), 0 ).toFixed(2);
    const expense = Math.abs(amountArr.filter( item => { return item<0 ; }).reduce((amount, item) => (amount+=item), 0 ).toFixed(2));

    return (
        <div className="expenseCard">
           <div className="btn__box">
                <h4>Income</h4>
                <h4 className="income">Rs.{income}</h4>
           </div>
           <div className="btn__box">
                <h4>Expense</h4>
                <h4 className="expense">Rs.{expense}</h4>
           </div>
        </div>
    )
}

export default ExpenseCard
