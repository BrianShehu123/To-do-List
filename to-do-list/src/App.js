import "./styles.css"
import { useState } from "react"

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
  
    setTodos(currentTodos => [
      ...currentTodos, 
      { id: crypto.randomUUID(), title: newItem, completed: false }
    ]);
  
    setNewItem(""); // Clear the input field after adding the item
  }
  

  return (
  <>
    <form onSubmit= {handleSubmit} className= "new-item-form">
      <div className= "form-row">
        <label>New Item</label>
        <input className= "item-form-description" value={newItem} onChange={e => setNewItem(e.target.value)} type= "text" id="item" />
      </div>
      <button className="btn">Add</button>
    </form>
    <h1 className= "header">Todo List</h1>
    <ul className= "list">
      {todos.map (todo => {
        return <li>
        <label>
          <input type="checkbox" checked= {todo.completed} />
            {todo.title}
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
      })}
    </ul>
  </>
  )
}