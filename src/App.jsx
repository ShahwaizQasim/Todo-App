import { useCallback, useState } from "react";
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  // console.log("inputValue=>", inputValue);

  const [Todos, setTodos] = useState([
    {
      todo: "testing",
      id: Date.now,
      completed: false,
    },
  ]);
  console.log("Todos", Todos);

  const handleOnAddButton = useCallback(() => {
    const todosAdd = setTodos([
      ...Todos,
      {
        todo: inputValue,
        id: Date.now,
        completed: false,
      },
    ]);
    setTodos([...todosAdd]);
    setInputValue("");

    console.log("todosAdd Click");
  },[]);

  return (
    <div className="container-fluid">
      <div className="container">
        <h2>Todo App</h2>
        <TodoInput
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onClick={handleOnAddButton}
        />

        <TodoList todos={Todos} />
      </div>
      v
    </div>
  );
}

export default App;
