import React from "react";
import './ExpenseDate.css'
import Card from "../../../../../DesignComponents/Card/Card";

const ExpenseDate = (props) =>{
    console.log(props.date)
    const month = props.date.toLocaleString('en-US', {month: "long"});
    const day =  props.date.toLocaleString('en-US', {day: "2-digit"});
    const year = props.date.getFullYear();

    return(
        <Card className={'expense-date'}>
            <h3 className={'date'}>{month} {day}, {year}</h3>
        </Card>
    )
}

export default ExpenseDate