import React from "react";

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedTodos;

  if (!localStorageItem) {
    parsedTodos = [];
    localStorage.setItem(itemName, JSON.stringify(initialValue));
  } else {
    parsedTodos = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedTodos);
  const saveItem = (newItem) => {
    localStorage.setItem("todos", JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

export { useLocalStorage };
