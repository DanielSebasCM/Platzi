import "./CreateTodoBtn.css";
import { useContext } from "react";
import { TodoContext } from "../../TodoContext";

function CreateTodoBtn() {
  const { todos, saveTodos, searchValue, setSearchValue, setOpenModal } =
    useContext(TodoContext);

  return (
    <button
      className="CreateTodoBtn"
      onClick={() => setOpenModal((prevState) => !prevState)}
    >
      +
    </button>
  );
}

export { CreateTodoBtn };
