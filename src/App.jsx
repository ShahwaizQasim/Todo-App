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
      id: Date.now(),
      completed: false,
    },
  ]);
  // console.log("Todos", Todos);

  const handleOnAddButton = useCallback(() => {
    const TodosAdd = [
      ...Todos,
      {
        todo: inputValue,
        id: Math.random(),
        completed: false,
      },
    ];

    // console.log("TodosAdd", TodosAdd);

    setTodos([...TodosAdd]);
    setInputValue("");

    console.log("TodosAdd Click");
  }, [inputValue]);

  const handleOnDeleteButton = useCallback(
    (id) => {
      const filter = Todos.filter((data) => data.id !== id);
      console.log(filter);
      setTodos([...filter]);
      // console.log('id=>', id);
    },
    [Todos]
  );

  const handleOnToggle = (id) => {
    const todoArray = [...Todos];
    const todoIndx = todoArray.findIndex((data) => data.id == id);
    todoArray[todoIndx].completed = !todoArray[todoIndx].completed;
    setTodos([...todoArray]);

    console.log("todoArray", todoArray);
    console.log("todoIndx", todoIndx);
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <h2>Todo App</h2>
        <TodoInput
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onClick={handleOnAddButton}
          onDelete={handleOnDeleteButton}
        />

        <TodoList
          todos={Todos}
          onDelete={handleOnDeleteButton}
          toggleTodo={handleOnToggle}
        />
      </div>
    </div>
  );
}

export default App;
