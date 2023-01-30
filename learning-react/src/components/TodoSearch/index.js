import "./TodoSearch.css";
function TodoSearch({ setSearchValue }) {
  return (
    <input
      className="TodoSearch"
      placeholder="Search"
      type="text"
      onChange={(event) => {
        setSearchValue(event.target.value);
        console.log(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
