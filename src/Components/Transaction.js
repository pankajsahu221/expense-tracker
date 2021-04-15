import React from 'react'
import { ListItem, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

function Transaction({ transaction, deleteTransaction }) {

    const bgCol = transaction.amount < 0 ? 'bg__red': 'bg__green' ;
    const sign = transaction.amount < 0 ? '-Rs.' : 'Rs.' ;
    const amount = sign + Math.abs(transaction.amount);

    return (
        <div>
            <ListItem className={`listitem ${bgCol}`}>
               <ListItemText primary={transaction.text} />
               <ListItemText primary={amount} />
               <DeleteIcon onClick={ () => deleteTransaction(transaction.id) }/>
            </ListItem>
        </div>
    )
}

export default Transaction
