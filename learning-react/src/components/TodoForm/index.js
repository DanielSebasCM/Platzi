import { useContext } from "react";
import { TodoContext } from "../../TodoContext";

function TodoForm() {
  const { setOpenModal, addTodo } = useContext(TodoContext);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        addTodo(event.target[0].value);
        setOpenModal(false);
      }}
    >
      <h1>Añadir Todo</h1>
      <input type="text" placeholder="Escribe tu tarea" />
      <button type="button" onClick={() => setOpenModal(false)}>
        Cerrar
      </button>
      <button type="submit">Guardar</button>
    </form>
  );
}

export { TodoForm };
