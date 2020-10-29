import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./AppProvider";

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];

ReactDOM.render(
  <BrowserRouter>
    <AppProvider>
      <App tasks={DATA} />
    </AppProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
