import TodoItem from './TodoItem'
import { useContext } from 'react'
import TodosContext from '../context/todo'

export default function TodoList(props) {
  const {todos, onDelete, onEdit} = props
  // const num = useContext(TodosContext);
  const {count,incrementCount} =useContext(TodosContext);


  const renderedTodos = todos.map((todo) => {
    return (
      <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit} />
    )
  })

  return <div>
    {renderedTodos}
    {/* {num} */}
    {count}
    <button onClick={incrementCount}>Add</button>
    </div>


}
