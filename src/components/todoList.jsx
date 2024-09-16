import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

function TodoList({ todos, onDelete, toggleTodo }) {
  useEffect(() => {
    console.log("onDelete function Change");
  }, [onDelete]);

  return (
    <>
      {todos.map((todo) => {
        return (
          <div className="todoList" key={todo.id}>
            <h3
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed === true ? "line-through" : "",
              }}
            >
              {todo.todo}
            </h3>
            <h3>
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => onDelete(todo.id)}
                className="icon"
              />
            </h3>
          </div>
        );
      })}
    </>
  );
}

export default TodoList;
