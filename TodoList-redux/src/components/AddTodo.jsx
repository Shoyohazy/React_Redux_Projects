import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
 
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Add todo..."
        className='"bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-non text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      /> 
        <button
          type="submit"
          onClick={(e) => addTodoHandler(e)}
          className="text-white bg-indigo-500 border-0 ml-2 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg "
        >
          Add todo
        </button>
    
    </>
  );
}

export default AddTodo;

