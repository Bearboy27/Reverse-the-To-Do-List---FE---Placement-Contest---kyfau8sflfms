import React, { useState } from 'react'
import '../styles/App.css';

function ToDo() {
  return (<tr>
    <td>
      <p>id</p>
    </td>
    <td>
      <input />
    </td>
    <td>
      <p>createdAt</p>
    </td>
  </tr>)
}

function App() {
  const [todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '20:30',
  }, {
    id: 'todo2',
    createdAt: '18:00',
  }
  ]);

  return (
    <div id="main">
      <button>Reverse</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Input</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <ToDo key={todo.id} todoId={todo.id} input={todo.input} createdAt={todo.createdAt} />
          ))}
        </tbody>
      </table>
    </div>
  )
}


export default App;
