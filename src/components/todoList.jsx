import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

function TodoList({ todos, onDelete }) {
  // useEffect(() => {
  //   console.log("Todos Change");
  // },[todos])

  return (
    <>
      {todos.map((todo,ind) => {
        return (
          <div className="todoList" key={todo.id}>
            <h3>{todo.todo}</h3>
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
