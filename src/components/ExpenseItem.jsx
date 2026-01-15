import ExpenseDate from './Expensedate'
import './ExpenseItem.css'

const ExpenseItem = (props) => {

    return  (
        <div className="expense-item">
            <ExpenseDate date={props.data.date}/>   
            <div className= "expense-item__description">
                <h2>{props.data.title}</h2>
                <div className="expense-item__price">${props.data.price}</div>
            </div>
        </div>
    )

  return (
      <div className="App">
        <ExpenseItem data = {expenses[0]}/>
        <ExpenseItem data = {expenses[1]}/>
      </div>
    );
}

export default ExpenseItem