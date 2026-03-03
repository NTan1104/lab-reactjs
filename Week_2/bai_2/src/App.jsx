import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2 style={{color: count===10 ? 'red' : 'black'}}>{count}</h2 >
      <button className='btnadd' onClick={()=> setCount(count+1)}>+</button>
      <button className='btnminus' onClick={()=> count>0 && setCount(count-1)}>-</button>
      <button className='btnrest' onClick={()=> setCount(0)}>Reset</button>
    </>
  )
}

export default App
