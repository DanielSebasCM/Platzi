import "./TodoSearch.css";
import React from "react";

import { useContext } from "react";
import { TodoContext } from "../../TodoContext/TodoContext";

function TodoSearch() {
  const { setSearchValue } = useContext(TodoContext);
  return (
    <input
      className="TodoSearch"
      placeholder="Search"
      type="text"
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
