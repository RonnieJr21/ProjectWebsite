import React, {useState} from "react";

const ExpenseFilter = (props) =>{
    // const [date, setFilteredDate] = useState()
    const filterChangeHandler = (event) =>{

        // setFilteredDate(event.target.value)
        props.getFilteredYear(event.target.value)

    }
    return(
        <div className={'expense-filter'}>
            <div className={'expense-filter-content'}>
                <label>Filter year</label>
                <select value={props.yearFiltered} onChange={filterChangeHandler}>
                    <option value={'2020'}>2020</option>
                    <option value={'2021'}>2021</option>
                    <option value={'2022'}>2022</option>
                    <option value={'2023'}>2023</option>
                </select>
            </div>
        </div>
    )
}
export default ExpenseFilter