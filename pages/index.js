import {
  initialTodos,
  validationConfig,
  todoTemplate,
} from "../utils/constants.js";
import Todo from "../components/Todo.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import PopupWithForm from "../components/PopupWithForm.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = document.forms["add-todo-form"];
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

const newPopupForm = new PopupWithForm({
  popupSelector: addTodoPopup,
  handleFormSubmit: () => {},
});

addTodoButton.addEventListener("click", () => {
  newPopupForm.open();
});

const generateTodo = (data) => {
  const todo = new Todo(data, todoTemplate);
  const todoElement = todo.getView();
  return todoElement;
};

const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    const element = generateTodo(item);
    section.addItem(element);
  },
  containerSelector: todosList,
});

const renderTodo = (values) => {
  const todo = generateTodo(values);
  section.addItem(todo);
};

addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const name = evt.target.name.value;
  const dateInput = evt.target.date.value;
  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const id = uuidv4();
  const values = { name, date, id };
  renderTodo(values);
  popup.close(addTodoPopup);
  validateTodoForm.resetValidation();
});

section.renderItems();

const validateTodoForm = new FormValidator(validationConfig, addTodoForm);
validateTodoForm.enableValidation();
