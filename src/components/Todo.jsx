import React, { useState } from 'react'

const Todo = ({item, setTodos, todos}) => {

  const [isEdit, setIsEdit] = useState(false);
  const [inputEdit, setInputEdit] = useState(item.title)

  const onHandleEdit = () => {
    setIsEdit(true);
  }
  const onSubmitEdit = (e) => {
    e.preventDefault()
    if(inputEdit.length <= 0) return; 
    item.title = inputEdit;
    setIsEdit(false)
  }
  const onEditChange = (e) => {
    setInputEdit(e.target.value)
  }
  const onDelete = () => {
    const newTodos = todos.filter( ( todoItem ) => todoItem.id !== item.id )
    setTodos(newTodos)
  }

  const onCancel = (e) => {
    e.preventDefault()
    setIsEdit(false)
  }

  return (
    <div className="todo"> 
      {isEdit === false ? (
        <div className="todoInfo"> 
          <span className="todoTitle">{item.title}</span>
          <button className="button" onClick={onHandleEdit}>Edit</button>
          <button className="buttonDelete" onClick={onDelete}>Delete</button>
        </div>
      ) :
      (
        <form onSubmit={onSubmitEdit} className="todoUpdateForm">
          <input className="todoInput" type="text" onChange={onEditChange} value={inputEdit}/>
          <button className="button" onClick={onSubmitEdit}>Save</button>
          <button className="buttonDelete" onClick={onCancel}>Cancel</button>
        </form>
      )
      }

    </div>
  )
}

export default Todo