import './App.css'
import Expenses from './components/Expenses/Expenses.jsx'
import NewExpense from "./components/NewExpense/NewExpense.jsx"

function App() {
  const expenses = 
  [
    {
      date : new Date(2026, 0, 10),
      title : 'New Book',
      price : 25.99
    },
    {
      date : new Date(2025, 0, 5),
      title : 'New Plush',
      price : 29.99
    }
  ]
  const addExpenseHanlder = (expense) => {
    console.log('app.jsx data')
    console.log(expense)
  }

  return (
    <div className='app'>
      <NewExpense onAddExpense={addExpenseHanlder}/>
      <Expenses dataMain={expenses}/>
    </div>
  )
}

export default App