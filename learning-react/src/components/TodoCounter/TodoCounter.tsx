import "./TodoCounter.css";

import { useContext } from "react";
import React from "react";
import { TodoContext } from "../../TodoContext/TodoContext";

function TodoCounter() {
  // return <h2>{`You have completed ${completedItems} out of ${totalItems}`}</h2>;
  // its rendering object object intead of number, fix it
  const { completed, total } = useContext(TodoContext);
  return (
    <h2 className="TodoCounter">
      You have completed {completed} ot of {total} objectives
    </h2>
  );
}

export { TodoCounter };
