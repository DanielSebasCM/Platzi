import "./TodoList.css";
import React from "react";

function TodoList({ children }: { children: React.ReactNode }) {
  return <ul className="TodoList">{children}</ul>;
}

export { TodoList };
