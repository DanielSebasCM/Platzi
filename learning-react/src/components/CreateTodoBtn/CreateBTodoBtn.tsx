import "./CreateTodoBtn.css";
import { useContext } from "react";
import React from "react";
import { TodoContext } from "../../TodoContext/TodoContext";

function CreateTodoBtn(): JSX.Element {
  const { setOpenModal } = useContext(TodoContext);

  return (
    <button
      className="CreateTodoBtn"
      onClick={() => setOpenModal((prevState: boolean) => !prevState)}
    >
      +
    </button>
  );
}

export { CreateTodoBtn };
