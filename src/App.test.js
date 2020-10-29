import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];

it("renders without crashing", () => {
  const { container } = render(<App tasks={DATA} />);
  expect(container).toMatchSnapshot();
});
