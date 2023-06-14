import React, {useState} from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../../../../../DesignComponents/Card/Card";
import './Expenses.css'
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "../ExpensesList/ExpensesList";
const Expenses = (props) =>{
    const [year, filteredYear] = useState('2023');
    const getFilteredSelection = (data) =>{
        console.log(data);
        filteredYear(data);
    }
    const filteredExpenses = props.expenses.filter(expense =>{
        return expense.date.getFullYear().toString() === year;
        })


    ;
    return(
        <div>
            <Card className={'expenses'}>
                <ExpenseFilter yearFiltered={year} getFilteredYear={getFilteredSelection}/>
                <ExpensesList expenses={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses