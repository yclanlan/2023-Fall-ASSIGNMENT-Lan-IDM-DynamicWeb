import {useState,useEffect,useContext} from 'react'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'
import axios from 'axios'
import TodosContext from './context/todo'

export default function App() {

  const{fetchTodos} =useContext(TodosContext)

  useEffect(() => {
    fetchTodos()
  }, [])


  return (
    <div>
      {/* {todos.length} */}
      <TodoCreate />

      <TodoList  />
    </div>
  )
  
}
