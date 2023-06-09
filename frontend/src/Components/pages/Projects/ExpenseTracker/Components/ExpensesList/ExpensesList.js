import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './ExpensesList.css'
const ExpensesList = (props) =>{

    let expenseContent =  <h2 className={'no-expenses'}>No expenses found!</h2>

    if(props.expenses.length > 0){
       expenseContent = props.expenses.map(expense => <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}/>)
    }

    return(
        <ul className={'expenses-list'}>
            {expenseContent}
        </ul>
    )
}
export default ExpensesList