import { Todo } from "../models/todo.model";
import { createHTML } from "./create-todo-hrml";

/**
 *
 * @param {String} elementId
 * @param {Todo} todos
 */
export const renderTodos = (elementId, todos = []) => {
  const element = document.querySelector(elementId);
  todos.forEach((todo) => {
    element.append(createHTML(todo));
  });
};
