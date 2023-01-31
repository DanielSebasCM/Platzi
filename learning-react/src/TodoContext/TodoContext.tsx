import { useState, createContext } from "react";
import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext: React.Context<TodoContextProps> = createContext(
  {} as TodoContextProps
);

interface Todo {
  text: string;
  completed: boolean;
}

interface TodoContextProps {
  filteredTodos: Todo[];
  todos: Todo[];
  saveTodos: (todos: Todo[]) => void;
  completed: number;
  total: number;
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  addTodo: (text: string) => void;
  toggleCompleteTodo: (text: string) => void;
  deleteTodo: (text: string) => void;
}

function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todos, saveTodos] = useLocalStorage<Todo[]>("todos", []);

  const [searchValue, setSearchValue] = useState("");

  const completed = todos.filter((todo) => todo.completed).length;
  const total = todos.length;

  const filteredTodos =
    searchValue.length === 0
      ? todos
      : todos.filter((todo) =>
          todo.text.toLowerCase().includes(searchValue.toLowerCase())
        );

  const [openModal, setOpenModal] = useState(false);

  function addTodo(text: string) {
    const newTodos = [...todos, { text, completed: false }];
    saveTodos(newTodos);
  }

  const toggleCompleteTodo = (text: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.text === text) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    saveTodos(newTodos);
  };

  const deleteTodo = (text: string) => {
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
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
