import React from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import Card from "../../../../../DesignComponents/Card/Card";

const NewExpense = (props) =>{

    const formDataHandler = (formData) =>{
        const newFormData = {
            ...formData,
            "id": Math.random().toString()
        }
        props.onGetNewExpense(newFormData)
    }

    return(
        <Card className={'new-expense'}>
            <ExpenseForm onFormData={formDataHandler} />
        </Card>
    )

}
export default NewExpense