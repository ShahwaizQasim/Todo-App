import { useState } from "react";
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";
import "./App.css";

function App() {

  const [inputValue, setInputValue] = useState('')
  const [Todos, setTodos] = useState([
    {
      todo: "testing",
      id: Date.now,
      completed: false,
    }
  ]);

  return (
    <div className="container-fluid">
      <div className="container">
      <h2>Todo App</h2>
      <TodoInput value={inputValue}/>

      <TodoList todos={Todos} />

      </div>
    </div>
  );
}

export default App;
