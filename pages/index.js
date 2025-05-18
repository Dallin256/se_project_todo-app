import {
  initialTodos,
  validationConfig,
  todoTemplate,
} from "../utils/constants.js";
import Todo from "../components/Todo.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = document.forms["add-todo-form"];
const todosList = document.querySelector(".todos__list");

const todoCounter = new TodoCounter(initialTodos, ".counter__text");

addTodoButton.addEventListener("click", () => {
  todoPopup.open();
});

function handleCheckStatus(status) {
  todoCounter.updateCompleted(status);
}

function handleDeleteStatus(status) {
  if (status === true) {
    todoCounter.updateCompleted(false);
  }
  todoCounter.updateTotal(true);
}

const generateTodo = (data) => {
  const todo = new Todo(
    data,
    todoTemplate,
    handleCheckStatus,
    handleDeleteStatus
  );
  const todoElement = todo.getView();
  return todoElement;
};

const renderTodo = (values) => {
  const todo = generateTodo(values);
  section.addItem(todo);
};

const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    renderTodo(item);
  },
  containerSelector: todosList,
});

section.renderItems();

const validateTodoForm = new FormValidator(validationConfig, addTodoForm);
validateTodoForm.enableValidation();

function handleFormSubmitUpdate() {
  todoCounter.updateTotal(false);
}

const todoPopup = new PopupWithForm({
  popupSelector: addTodoPopup,
  handleFormSubmit: (values) => {
    renderTodo(values);
    validateTodoForm.resetValidation();
    todoPopup._handleFormSubmitUpdate();
    todoPopup.close();
  },
  handleFormSubmitUpdate,
  getId: () => uuidv4(),
});

todoPopup.setEventListeners();
