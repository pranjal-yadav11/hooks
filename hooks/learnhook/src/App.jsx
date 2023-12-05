import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
      const[counter, sethiteshCounter] = useState(15)

  let [count, setCount] = useState(0)
  //let counter = 15
  const addValue = ()=> {
    console.log("clicked", counter)
      
      //counter += 1;
      sethiteshCounter(counter+1);
    }

      const removeValue =()=>{
        sethiteshCounter(counter-1)
      }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value : {counter} </h2>
      <button
      onClick={addValue}> add value</button>
      <br />

      <button
      onClick={removeValue}
      >remove value{counter}</button>
    
    
    
    </>
  )
}

export default App
