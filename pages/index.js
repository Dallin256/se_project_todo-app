import {
  initialTodos,
  validationConfig,
  todoTemplate,
} from "../utils/constants.js";
import Todo from "../components/Todo.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = document.forms["add-todo-form"];
const todosList = document.querySelector(".todos__list");

addTodoButton.addEventListener("click", () => {
  popupForm.open();
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

section.renderItems();

const validateTodoForm = new FormValidator(validationConfig, addTodoForm);
validateTodoForm.enableValidation();

const popupForm = new PopupWithForm({
  popupSelector: addTodoPopup,
  handleFormSubmit: (values) => {
    renderTodo(values);
    validateTodoForm.resetValidation();
    popupForm.close();
  },
});

popupForm.setEventListeners();
