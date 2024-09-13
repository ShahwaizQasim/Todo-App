function TodoInput({ value, onChange, onClick }) {
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
          className="btn1"
          disabled={value === ""}
          style={{
            backgroundColor: value === "" ? "hsl(224, 87%, 76%)" : "#000",
          }}
          onClick={onClick}
        >
          Add Todo
        </button>
      </div>
    </>
  );
}

export default TodoInput;
