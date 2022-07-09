import { useState } from 'react';
import Todo from './todo';
import Form from './form';

function App() {
  const [todos, setTodos] = useState([

  ]);
  const [complete, setComplete] = useState([])

  const addTodo = (value) => {
    if (!value) return;
    setTodos([...todos, { text: value, completed: false }]);
  }

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1)
    setTodos(updatedTodos);
  }

  const completeTodo = (index) => {
    const item = todos[index];
    item.complete = true;
    setComplete([...complete, item]);
    removeTodo(index);
  }

  return (
    <div className="list-container">
      <h2>To Do List</h2>
      {todos.length < 1 && <div className="empty-list">The list is empty. <br /> Add some to-do's below!</div>}
      {todos.map((todo, index) => <Todo key={index} todo={todo} index={index} completeTodo={completeTodo} removeTodo={removeTodo} />)}
      <div className="form-container">
        <Form addTodo={addTodo} />
      </div>

      <div className="completed-container">
        {complete.length > 0 && <>
          <h3>Completed Items</h3>
          {complete.map((todo, index) => <Todo key={index} todo={todo} index={index} removeTodo={removeTodo} />)}
        </>
        }
      </div>
    </div >
  )
}

export default App