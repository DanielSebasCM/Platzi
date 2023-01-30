import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const [todos, saveTodos] = useLocalStorage("todos", []);

  const [searchValue, setSearchValue] = React.useState("");

  const completed = todos.filter((todo) => todo.completed).length;
  const total = todos.length;

  const filteredTodos =
    searchValue.length === 0
      ? todos
      : todos.filter((todo) =>
          todo.text.toLowerCase().includes(searchValue.toLowerCase())
        );

  const [openModal, setOpenModal] = React.useState(false);

  function addTodo(text) {
    const newTodos = [...todos, { text, completed: false }];
    saveTodos(newTodos);
  }

  const toggleCompleteTodo = (text) => {
    const newTodos = todos.map((todo) => {
      if (todo.text === text) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => todo.text !== text);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        filteredTodos,
        todos,
        saveTodos,
        completed,
        total,
        searchValue,
        setSearchValue,
        openModal,
        setOpenModal,
        addTodo,
        toggleCompleteTodo,
        deleteTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
