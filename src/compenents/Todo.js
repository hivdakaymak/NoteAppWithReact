import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Todo = ({todos,complateTodo}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  return todos.map((todo, index) => (
    <div
      className={todos.complate ? "todo-row complate" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => complateTodo(todo.id)}>
        {todo.text}
      </div>

      <div className="icons">
        <RiCloseCircleLine />
        <TiEdit />
      </div>
    </div>
  ));
};

export default Todo;
