import React, { useState } from 'react';
import './App.css';
// import { makeStyles } from '@material-ui/core';
import Balance from './Components/Balance';
import ExpenseCard from './Components/ExpenseCard';
import NewTransactions from './Components/NewTransactions';
import Transactions from './Components/Transactions';
import { v4 as uuidv4 } from 'uuid';


function App(){
   
   const [ transactions, setTransactions ] = useState([
      { id: uuidv4(), text: "momos", amount: -20 },
      { id: uuidv4(), text: "salary", amount: 3000 },
      { id: uuidv4(), text: "book", amount: -100 },
      { id: uuidv4(), text: "bonus", amount: 1500 },
   ]);

   const deleteTransaction = (id) => {
     
      const tempTransaction = transactions.filter(item => {
         return item.id!==id;
      })
      setTransactions(tempTransaction);
   }

   const addTransactions = (transaction) => {
              
      setTransactions( transactions => {
         return [ transaction, ...transactions ];
      });
   }

    return (
      <div className="App">
          <h2 className="header">Expense Tracker</h2>
          <div className="box">
             <span className="row__one">
                <Balance transactions={transactions}/>
                <ExpenseCard transactions={transactions}/>
                <NewTransactions addTransactions={addTransactions}/>
             </span>
             <span className="row__two">
                <Transactions transactions={transactions} deleteTransaction={deleteTransaction}/>
             </span>
          </div>
      </div>
    );
}

export default App;