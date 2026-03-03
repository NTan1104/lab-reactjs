import React from 'react'
import { useState } from 'react'

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  }
  return (
    <form action="#" className='userForm' onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" name='name' value={user.name} onChange={handleChange} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name='email' value={user.email} onChange={handleChange}/>
      </div>
      <div>
        <label>Age</label>
        <input type="text" name='age' value={user.age} onChange={handleChange}/>
      </div>
      <div>
        <button type='submit'>Submit</button>
      </div>

    </form>
  )
}

export default App
