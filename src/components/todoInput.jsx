function TodoInput({value}) {
  return(
     <>
     <div>
        <input type="text" placeholder="Add" className="myInput" value={value}/>
        <button className="btn1">Add Todo</button>
      </div>
     </>
   );
}

export default TodoInput; 
