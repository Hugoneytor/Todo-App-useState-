import { useState } from "react";
import Todo from "./Todo";
import "./todoApp.css"

const TodoApp = () => {

  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState([])

  const onHandleChange = (e) => {
    setTitle(e.target.value)
  }

  const onHandleSubmit = (e) => {
    e.preventDefault()
    if(title.length <= 0) return; 
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false

    }
    setTodos([ newTodo, ...todos ])
    setTitle('')
  }


  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={onHandleSubmit}>
        <input className="todoInput" type="text" value={title
        } onChange={onHandleChange} maxLength={20}/>
        <input className="buttonCreate" type="submit" value="Create todo"/>
      </form>

      <div className="todosContainer">
        {todos.map((item)=>{
          return <Todo key={item.id} item={item} setTodos={setTodos} todos={todos} />
        })}
      </div>
    </div>
  )  
}

export default TodoApp;