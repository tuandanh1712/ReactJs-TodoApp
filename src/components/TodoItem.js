import React from "react";
const TodoItem = ({ todo, handleChange, deleteTodo }) => {
  const { completed, id, title } = todo;
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleChange(id)}
      />
      <span className={todo.completed ? "completed" : null}>{title}</span>
      <button className="btn-style" onClick={() => deleteTodo(id)}>
        X
      </button>
    </li>
  );
};
export default TodoItem;
