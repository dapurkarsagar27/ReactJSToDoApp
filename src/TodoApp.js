import react, { useState } from "react";
import AddInputList from "./AddInputList";

const TodoApp = () => {
  const [listInput, setListInput] = useState("");
  const [inputArray, addInput] = useState([]);

  const setInput = (event) => {
    setListInput(event.target.value);
  };

  const submitList = () => {
    addInput((prevalue) => {
      return [...prevalue, listInput];
    });
    setListInput("");
  };

  const deleteItem = (id) => {
    console.log("Deleted");
    addInput((oldVal) => {
      return oldVal.filter((arrItem, index) => {
        return index !== id;
      });
    });
    alert("Are you sure?")
  };

  return (
    <>
      <div className="main_app">
        <div className="todo_app">
          <h1>To-Do List</h1>
          <input
            type="text"
            placeholder="Add to the list"
            onChange={setInput}
            value={listInput}
          ></input>
          <button onClick={submitList}> + </button>

          <ul>
            {inputArray.map((inputList, index) => {
              //   return <li>{inputList}</li>;
              return (
                <AddInputList
                  text={inputList}
                  onSelect={deleteItem}
                  id={index}
                  key={index} 
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
