import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm.jsx"

const NewExpense = (props) => {
    const saveExpenseDataHanlder = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    
    console.log(props)

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHanlder}/>
        </div>
    )
}

export default NewExpense