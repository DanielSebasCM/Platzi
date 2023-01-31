import React from "react";

function useLocalStorage<T>(
  itemName: string,
  initialValue: T
): [T, (newItem: T) => void] {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItems: T;

  if (!localStorageItem) {
    parsedItems = initialValue;
    localStorage.setItem(itemName, JSON.stringify(initialValue));
  } else {
    parsedItems = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItems);

  const saveItem = (newItem: T) => {
    localStorage.setItem("todos", JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

export { useLocalStorage };
