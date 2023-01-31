import "./TodoForm.css";

import { useContext } from "react";
import React from "react";
import { TodoContext } from "../../TodoContext/TodoContext";

function TodoForm() {
  const { setOpenModal, addTodo } = useContext(TodoContext);
  return (
    <form
      className="TodoForm"
      onSubmit={(event: React.SyntheticEvent) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
          text: { value: string };
        };
        addTodo(target.text.value);
        setOpenModal(false);
      }}
    >
      <div className="input-container">
        <h1>Añadir Todo</h1>
        <input type="text" name="text" placeholder="Escribe tu tarea" />
        <button type="button" onClick={() => setOpenModal(false)}>
          Cerrar
        </button>
        <button type="submit">Guardar</button>
      </div>
    </form>
  );
}

export { TodoForm };
