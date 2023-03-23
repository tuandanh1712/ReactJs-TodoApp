import React, { useState } from "react";
const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const onInputChange = (e) => {
    setTitle(e.target.value);
  };
  const addTodo1 = (e) => {
    e.preventDefault();
    addTodo(title);
    setTitle("");
  };
  return (
    <form className="form-container" onSubmit={addTodo1}>
      <input
        type="text"
        placeholder="Add Todo..."
        className="input-text"
        value={title}
        onChange={onInputChange}
      />
      <input type="submit" value="Submit" className="input-submit" />
    </form>
  );
};
export default AddTodo;
