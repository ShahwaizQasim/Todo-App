import { useCallback, useMemo, useState } from "react";
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";
import './index.css'
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [Filter, setFilter] = useState("All");
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
      setTodos([...filter]);
      // console.log(filter);
      // console.log('id=>', id);
    },
    [Todos]
  );

  const handleOnToggle = (id) => {
    const todoArray = [...Todos];
    const todoIndx = todoArray.findIndex((data) => data.id == id);
    todoArray[todoIndx].completed = !todoArray[todoIndx].completed;
    setTodos([...todoArray]);

    // console.log("todoArray", todoArray);
    // console.log("todoIndx", todoIndx);
  };

  const filterTodos = useMemo(
    () =>
      Todos.filter((data) => {
        console.log("Filter Function Change");

        if (Filter == "All") {
          return true;
        }
        if (Filter == "Completed" && data.completed) {
          return true;
        }
        if (Filter == "UnCompleted" && !data.completed) {
          return true;
        }
      }),
    [Filter, Todos]
  );

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

        <div className="FilterButtons">
          <button
            onClick={() => setFilter("All")}
            className={` ${Filter == "All" ? "btn2-Dup" : "btn2"}`}
            style={{
              fontSize: "1.1rem",
            }}
          >
            All
          </button>
          <button
            onClick={() => setFilter("Completed")}
            className={`${Filter == "Completed" ? "btn2-Dup" : "btn2"}`}
          >
            Complete
          </button>
          <button
            onClick={() => setFilter("UnCompleted")}
            className={`${Filter == "UnCompleted" ? "btn2-Dup" : "btn2"}`}
          >
            UnComplete
          </button>
        </div>

        <TodoList
          todos={filterTodos}
          onDelete={handleOnDeleteButton}
          toggleTodo={handleOnToggle}
        />
      </div>
    </div>
  );
}

export default App;
