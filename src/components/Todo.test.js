import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import Todo from "./Todo";

test("edit button works", () => {
  const { viewTemplate } = render(
    <Todo
      id="todo-1"
      name="Eat"
      completed={false}
      editTask={() => {}}
      deleteTask={() => {}}
      toggleTaskCompleted={() => {}}
    />
  );
  //   fireEvent.click(screen.getByTestId("edit-button"));
  expect(screen.getByText("Edit")).toBeTruthy();
});

test("Delete button works", () => {
  const { viewTemplate } = render(
    <Todo
      id="todo-1"
      name="Eat"
      completed={false}
      editTask={() => {}}
      deleteTask={() => {}}
      toggleTaskCompleted={() => {}}
    />
  );
  fireEvent.click(screen.getByText("Delete"));
  expect(screen.getByText("Delete")).toBeTruthy();
});
