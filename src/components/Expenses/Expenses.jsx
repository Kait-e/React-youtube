import ExpenseItem from './ExpenseItem.jsx'
import './Expense.css'
import Card from '../UI/card.jsx'
import ExpensesFilter from './ExpensesFilter.jsx'
import { useState } from 'react'

function Expenses(props){

    const [filteredYear, setfilteredYear] = useState("2024")

    const changeHandler = (selectedYear) => {
        setfilteredYear(selectedYear)
        console.log("Year data in expenes.js: " + selectedYear)
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={changeHandler}/>
            {props.dataMain.map((expense) => (
            <ExpenseItem key={expense.id} data={expense} />
            ))}
        </Card>
    )
}

export default Expenses