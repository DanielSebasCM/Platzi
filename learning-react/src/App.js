import React from "react";
import "./App.css";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoBtn } from "./components/CreateTodoBtn";
// import "./App.css";

const defaultTodos = [
  { text: "Learn JS Basics", completed: true },
  { text: "Learn React", completed: false },
  { text: "Learn Firebase", completed: false },
  { text: "Learn GraphQL", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completed = todos.filter((todo) => todo.completed).length;
  const total = todos.length;

  const filteredTodos =
    searchValue.length === 0
      ? todos
      : todos.filter((todo) =>
          todo.text.toLowerCase().includes(searchValue.toLowerCase())
        );

  const toggleComplete = (text) => {
    const newTodos = todos.map((todo) => {
      if (todo.text === text) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const onDelete = (text) => {
    const newTodos = todos.filter((todo) => todo.text !== text);
    setTodos(newTodos);
  };

  return (
    //react button component
    <main className="main-container">
      <TodoCounter completedItems={completed} totalItems={total} />
      <TodoSearch setSearchValue={setSearchValue} />

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

      <CreateTodoBtn
        todos={todos}
        setTodos={setTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </main>
  );
}

export default App;
