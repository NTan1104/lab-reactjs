import React from 'react'

function TodoItem({todo, deleteTodo}) {
  return (
    <div>
      <li>
        {todo.text}
        <button onClick={()=> deleteTodo(todo.id)}>Xóa</button>
      </li>
    </div>
  )
}

export default TodoItem
