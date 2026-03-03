import React, { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
function App() {
  const [todos, setTodos] = useState([])
  const addTodo = (text) => {
    setTodos([...todos, {id: Date.now(), text}])
  }
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  return (
    <div>
      <h1> Todo List</h1>
      <TodoInput addTodo={addTodo}></TodoInput>
      <TodoList todos={todos} deleteTodo={deleteTodo}></TodoList>
    </div>
  )
}

export default App
