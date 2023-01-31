import React from "react";

import { AppUi } from "./AppUi";
import { TodoProvider } from "./TodoContext/TodoContext";

function App() {
  return (
    //react button component
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
