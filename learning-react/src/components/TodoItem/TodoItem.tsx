import "./TodoItem.css";
import React from "react";

function TodoItem({
  completed,
  text,
  toggleComplete,
  onDelete,
}: {
  completed: boolean;
  text: string;
  toggleComplete: () => void;
  onDelete: () => void;
}) {
  return (
    <li className="TodoItem">
      <label>
        <input type="checkbox" checked={completed} onChange={toggleComplete} />
        {text}
      </label>
      <button className="delete" onClick={onDelete}>
        x
      </button>
    </li>
  );
}

export { TodoItem };
