import React, { useRef, useState } from 'react'

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const [lapName, setLapName] = useState("");

  const intervalRef = useRef(null);
  const inputRef = useRef(null);

  const handleStart = () => {
    if (isRunning) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 10)
    }, 10);
  };
  const handlePause = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };
  const handleReset = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setTime(0);
    setLaps([]);
  }
  const handleAddLap = () => {
    if (!lapName.trim()) return;
    setLaps((prev) => [...prev, { name: lapName, time }]);
    setLapName("");
    intervalRef.current.focus();
  };
  return (
    <div>
      <h2>Stopwatch</h2>
      <h1>{time} ms</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
      <hr />
      <input ref={inputRef} value={lapName} onChange={(e)=> setLapName(e.target.value)} placeholder='Lap name'/>
      <button onClick={handleAddLap}>Add Lap</button>

      <ul>
        {laps.map((lap, index) => (
          <li key={index}>
            {lap.name} - {lap.time} ms
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
