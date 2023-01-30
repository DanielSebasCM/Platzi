import "./TodoCounter.css";

function TodoCounter({ completedItems, totalItems }) {
  // return <h2>{`You have completed ${completedItems} out of ${totalItems}`}</h2>;
  // its rendering object object intead of number, fix it

  return (
    <h2 className="TodoCounter">{`You have completed ${completedItems} out of ${totalItems}`}</h2>
  );
}

export { TodoCounter };
