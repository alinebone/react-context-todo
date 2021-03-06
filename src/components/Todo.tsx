/** @format */

import * as React from "react";

const Todo: React.FC<any> = ({ todo, updateTodo }) => {
  const checkTodo: string = todo.status ? "line-through" : "";
  return (
    <div className="todo-card">
      <h3 className={checkTodo}>{todo.title}</h3>
      <p className={checkTodo}>{todo.description}</p>
      <button
        onClick={() => updateTodo(todo.id)}
        className={todo.status ? "hide-button" : "show-button"}
      >
        Done!
      </button>
    </div>
  );
};

export default Todo;
