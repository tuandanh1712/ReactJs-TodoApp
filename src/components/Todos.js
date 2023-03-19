import React from "react";
import TodoItem from "./TodoItem";
const Todos = ({ todos, handleChange, deleteTodo }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              handleChange={handleChange}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default Todos;
