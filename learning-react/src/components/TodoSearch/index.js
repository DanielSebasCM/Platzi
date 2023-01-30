import "./TodoSearch.css";

import { useContext } from "react";
import { TodoContext } from "../../TodoContext";

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
