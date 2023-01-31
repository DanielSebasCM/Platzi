import "./App.css";

import { useContext } from "react";
import React from "react";
import { TodoContext } from "./TodoContext/TodoContext";

import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { CreateTodoBtn } from "./components/CreateTodoBtn/CreateBTodoBtn";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { Modal } from "./components/Modal/Modal";

function AppUi() {
  const { toggleCompleteTodo, deleteTodo, filteredTodos, openModal } =
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
            toggleComplete={() => toggleCompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
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
