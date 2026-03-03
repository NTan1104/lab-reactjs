import React, { useCallback, useState } from 'react'

type Todo = {
  id: number
  text: string
  completed: boolean
}

type TodoItemProps = {
  todo: Todo
  onDelete: (id: number) => void
  onToggle: (id: number) => void
}

const TodoItem = React.memo(({ todo, onDelete, onToggle }: TodoItemProps) => {
  console.log('render item', todo.id)
  return (
    <li>
      <span
        onClick={() => onToggle(todo.id)}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer',
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  )
})

function App() {
  const [text, setText] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>(() =>
    Array.from({ length: 1000 }, (_, i) => ({
      id: i,
      text: `Todo ${i}`,
      completed: false,
    })),
  )

  const handleDelete = useCallback((id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }, [])

  const handleToggle = useCallback((id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }, [])

  const handleAdd = () => {
    if (!text.trim()) return
    setTodos((prev) => [...prev, { id: Date.now(), text, completed: false }])
    setText('')
  }

  return (
    <div>
      <h2>Todo App</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDelete}
            onToggle={handleToggle}
          />
        ))}
      </ul>
    </div>
  )
}

export default App