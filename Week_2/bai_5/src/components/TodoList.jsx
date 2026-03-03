import TodoItem from "./TodoItem";
import React from 'react'

function TodoList({todos, deleteTodo}) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
            <TodoItem 
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            ></TodoItem>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
