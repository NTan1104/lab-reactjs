import React from 'react'
import { useState } from 'react'

function TodoInput({ addTodo }) {
    const [input, setInput] = useState('');
    const handleClick = () => {
        if (input.trim() === '') return
        addTodo(input)
        setInput('')
    }
    return (
        <div>
            <input type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Nhập việc cần làm...' />
            <button onClick={handleClick}>Thêm</button>
        </div>
    )
}

export default TodoInput
