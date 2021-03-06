import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from './Components/Todos/Todo'
import Loader from './Components/Loader/Loader'

const AddTodo = React.lazy(() => import('./Components/AddTodo/AddTodo'))

function App() {

  let [todos, setTodo] = useState([])
  const [load, setLoad] = useState(true)

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTodo(todos)
        setLoad(false)
      })
  }, [])

  const onToggle = (id) => {
    setTodo(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  const deleteTodo = (id) => {
    setTodo(todos.filter(todo => todo.id !== id))
  }

  const deleteAllTodos = () => {
    setTodo(todos = [])
  }

  const onAddTodo = (title) => {
    setTodo(todos.concat([
      {
        title,
        id: Date.now(),
        completed: false
      }
    ]))
  }

  const updateTodo = (title, id) => {
    setTodo(todos.map(todo => {
      if (todo.id === id) {
        todo.title = title
      }
      return todo
    }))
  }

  return (
    <div className="App">
      <React.Suspense fallback={<Loader />}>
        <AddTodo onAddTodo={onAddTodo} />
      </React.Suspense>
      {load && <Loader />}
      {todos.length ? (
        <Todo className="Todo" todos={todos} onToggle={onToggle} deleteTodo={deleteTodo} deleteAllTodos={deleteAllTodos} updateTodo={updateTodo} />)
        : (load ? null
          : <h1>No todos</h1>
        )}
    </div>
  );
}

export default App;
