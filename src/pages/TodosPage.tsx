import React, { useState, useEffect } from 'react'
import { TodoForm } from '../components/TodoForm'
import { TodoList } from '../components/TodoList'
import { ITodo } from '../interfaces'

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>(
    JSON.parse(localStorage.getItem('todos') || '[]')
  )

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    }
    setTodos((prev) => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) => {
    const newTodosState: ITodo[] = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(
      newTodosState
      // (prev) =>
      // prev.map((todo) => {
      //   if (todo.id === id) {
      //     console.log(todo.completed, !todo.completed)
      //     console.log(todos)
      //     todo.completed = !todo.completed
      //   }
      //   return todo
      // })
    )
  }

  const removeHandler = (id: number) => {
    const shouldRemove = window.confirm('Are you sure you want to remove?')
    if (shouldRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id))
    }
  }
  return (
    <>
      <TodoForm onAdd={addHandler} />
      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </>
  )
}
