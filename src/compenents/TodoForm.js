import React, { useState } from "react";

const TodoForm = (props) => {
  //    en başta bir input tanımladık ve bunu useState kullanarak
  //    yaptık çünkü bu güncellenecek bir değer
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.value.target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // props.onSubmit({
    //   id: Math.floor(Math.random() * 1000),
    //   text: input,
    // });

    // setInput("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {/* HandleSubmit fonksiyonunu formda çalıştırdık ki
         formun gönderme işleminde sayfa yenileme olayının önüne geçelim */}
      <input
        type="text"
        placeholder="Add a to do"
        // value="input"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
      />
      <button className="todo-button">Add</button>
    </form>
  );
};

export default TodoForm;
