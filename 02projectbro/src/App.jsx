import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  let [warning, setWarning] = useState('')

  const addValue = () => {
    setCounter(counter + 1)
    setWarning('') // clear warning if any
  }

  const removeValue = () => {
    if (counter <= 0) {
      setWarning("Counter value can't go below zero, babe")
    } else {
      setCounter(counter - 1)
      setWarning('')
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
      {warning && (
        <p style={{ color: 'red', marginTop: '10px' }}>{warning}</p>
      )}
    </>
  )
}

export default App
