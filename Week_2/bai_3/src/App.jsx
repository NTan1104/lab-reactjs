import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState('');
  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  return (
    <>
      <form action="#">
        <label htmlFor="name">Name: </label>
        <input type="text" className='name' value={name} onChange={handleNameChange} />
        <label htmlFor="email">Email: </label>
        <input type="email" className='email' value={email} onChange={handleEmailChange} />
        <br />
        <h2>Thông tin</h2>
        <p>{name}</p>
        <p>{email}</p>
      </form>
    </>
  )
}

export default App
