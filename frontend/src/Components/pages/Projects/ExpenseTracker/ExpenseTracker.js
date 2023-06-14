import React, {useState} from "react";
import ExpenseItem from "./Components/ExpenseItem/ExpenseItem";
import './ExpenseTracker.css'
import Expenses from "./Components/Expenses/Expenses";
import Card from "../../../DesignComponents/Card/Card";
import ExpenseForm from "./Components/ExpenseForm/ExpenseForm";
import NewExpense from "./Components/NewExpense/NewExpense";
const dummyExpenses = [
    {id: '1',
        title: 'Car Note',
        amount: 458.34 ,
        date: new Date(2021,1,21)
    }
]
const ExpenseTracker = () =>{
    const [expenses, newExpenses] = useState(dummyExpenses);
    const addExpense = (expenseData) =>{
        const newExpense = {
            ...expenseData
        }
        console.log(newExpense)
        newExpenses((prevExpenses) =>{
        return[...prevExpenses, newExpense]})
    }


return(
    <div className={'expense-tracker'}>
        <NewExpense onGetNewExpense={addExpense}/>
        <Expenses expenses={expenses}/>
    </div>

)
}
export default ExpenseTracker