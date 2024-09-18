import { useEffect } from "react";

function TodoInput({ value, onChange, onClick }) {
  // useEffect(() => {
  //  console.log('Input Change');
  // },[onClick])

  return (
    <>
      <div className="todosBox">
        <input
          type="text"
          placeholder="Add"
          className="myInput"
          value={value}
          onChange={onChange}
        />
        <button
          className={`${value === '' ? 'btn1' : 'btn1-Dup'}`}
          disabled={value === ""}
          // style={{
          //   backgroundColor: value === "" ? "#ccc" : "#000 text-white",
          // }}
          onClick={onClick}
        >
          Add Todo
        </button>
      </div>
    </>
  );
}

export default TodoInput;
