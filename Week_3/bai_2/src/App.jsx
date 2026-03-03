import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <h2>Digital Clock</h2>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  )
}

export default App
