import './App.css'
import Expenses from './components/Expenses/Expenses.jsx'

function App() {
  const expenses = [
  {
    date: new Date(2024, 10, 12),
    title: 'New book',
    price: 49.99,
    id: 1
  },
  {
    date: new Date(2024, 10, 12),
    title: 'new plushie',
    price: 39.99,
    id: 2
  }
]

  return (
      <div className="App">
        <Expenses dataMain={expenses} />
      </div>
    )
}

export default App;