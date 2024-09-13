import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function TodoList({ todos }) {
  return (
    <>
      {todos.map((todo) => {
        return (
          <div className="todoList" key={todo.id}>
            <h3>{todo.todo}</h3>
            <h3>
              <FontAwesomeIcon icon={faTrash} />{" "}
            </h3>
          </div>
        );
      })}
    </>
  );
}

export default TodoList;
