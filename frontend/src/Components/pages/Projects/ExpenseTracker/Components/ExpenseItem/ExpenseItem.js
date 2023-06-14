import React from "react";
import './ExpenseItem.css'
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../../../../DesignComponents/Card/Card";
import {useState} from "react";

const ExpenseItem = (props) =>{
    console.log(props.date)


    return(
        <Card className={'expense-item'}>
            <ExpenseDate date={props.date}/>
            <div className={'expense-item__description'}>
                <h2>{props.title}</h2>
            </div>
            <div className={'expense-item__price'}>${props.amount}</div>
        </Card>
    )
}
export default ExpenseItem