import CalendarBlocks from './components/CalendarBlocks'
import SelectionButtons from './components/SelectionButtons'
import './App.css'
import { useState } from 'react'

function App() {

  const days = [
    {
      name: "Sunday"
    },
    {
      name: "Monday"
    },
    {
      name: "Tuesday"
    },
    {
      name: "Wednesday"
    },
    {
      name: "Thursday"
    },
    {
      name: "Friday"
    },
    {
      name: "Saturday"
    },
  ]

  // The following creates an array of numbers from [1..28]
  const dates = Array.from({ length: 30 }, (x, i) => i + 1)

  const [color,setColor]=useState(null)

  return (
    <div className="App">
      <h1>React Calendar</h1>
      <SelectionButtons color={color} setColor={setColor} />
      <CalendarBlocks days={days} dates={dates} color={color} setColor={setColor} />
    </div>
  );
}

export default App
