import "./CreateTodoBtn.css";

function CreateTodoBtn({ todos, setTodos, searchValue, setSearchValue }) {
  return (
    <button
      className="CreateTodoBtn"
      onClick={() => {
        console.log("CLICKK");
        if (todos.map((todo) => todo.text).includes(searchValue)) {
          alert("You already have this task");
        } else {
          setSearchValue("");
          setTodos([...todos, { text: searchValue, completed: false }]);
        }
      }}
    >
      +
    </button>
  );
}

export { CreateTodoBtn };
