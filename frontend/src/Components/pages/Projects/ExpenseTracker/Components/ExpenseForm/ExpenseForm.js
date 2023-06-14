import React, {useState} from "react";

const ExpenseForm = (props) =>{
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleHandler = (event) =>{
        console.log()
        setTitle(event.target.value)
    }
    const amountHandler = (event) =>{
        setAmount(event.target.value)
    }
    const dateHandler = (event) =>{
        setDate(event.target.value)
        console.log(event.target.value)
    }

    const submitHandler = (event) =>{
        event.preventDefault()
        console.log(date)
        const newData = {
            'title': title,
            'amount': amount,
            'date': new Date(date.replace(/-/g, "/"))
        }
        props.onFormData(newData);
        setTitle('');
        setAmount('')
        setDate('');



    }

    return(
            <form onSubmit={submitHandler}>
                <div className={'expense-form-controls'}>
                    <div className={'expense-form-name'}>
                        <label>Name</label>
                        <input value={title} type={"text"} placeholder={'Ex: Apples'} onChange={titleHandler}/>
                    </div>
                    <div className={'expense-form-amount'}>
                        <label>Amount</label>
                        <input value={amount} onChange={amountHandler} placeholder={'Ex: 12.99'} type={"number"} min={0.01} step={0.01}/>
                    </div>
                    <div className={'expense-form-date'}>
                        <label>Date</label>
                        <input value={date} onChange={dateHandler} type={"date"}  />
                    </div>
                    <div className={'expense-form-actions'}>
                        <button type={"submit"}>Add Expense</button>
                    </div>
                </div>
            </form>
    )

}
export default ExpenseForm