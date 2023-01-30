import "./TodoItem.css";

function TodoItem({ completed, text, toggleComplete, onDelete }) {
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
