import "./App.css";

import { useContext } from "react";
import { TodoContext } from "./TodoContext";

import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoBtn } from "./components/CreateTodoBtn";
import { TodoForm } from "./components/TodoForm";

import { Modal } from "./components/Modal";

function AppUi() {
  const { toggleComplete, onDelete, filteredTodos, openModal, setOpenModal } =
    useContext(TodoContext);
  return (
    <main className="main-container">
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            toggleComplete={() => toggleComplete(todo.text)}
            onDelete={() => onDelete(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoBtn />
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </main>
  );
}

export { AppUi };
