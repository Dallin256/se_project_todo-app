export default class Todo {
  constructor(data, selector, handleCheckStatus, handleDeleteStatus) {
    this._data = data;
    this._templateElement = selector;
    this.todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);
    this.todoConfig = {
      name: this.todoElement.querySelector(".todo__name"),
      label: this.todoElement.querySelector(".todo__label"),
      date: this.todoElement.querySelector(".todo__date"),
      completeStatus: this.todoElement.querySelector(".todo__completed"),
      deleteButton: this.todoElement.querySelector(".todo__delete-btn"),
    };
    this._handleCheckStatus = handleCheckStatus;
    this._handleDeleteStatus = handleDeleteStatus;
  }

  _genCheckboxEl() {
    this._todoCheckboxEl = this.todoConfig.completeStatus;
    const todoLabel = this.todoConfig.label;
    this._todoCheckboxEl.checked = this._data.completed;
    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  _dateSetEl() {
    const todoDate = this.todoConfig.date;
    const dueDate = new Date(this._data.date);
    if (!isNaN(dueDate)) {
      todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }
  }

  getView() {
    const todoNameEl = this.todoConfig.name;
    todoNameEl.textContent = this._data.name;

    this._dateSetEl();
    this._genCheckboxEl();
    this._setEventListeners();

    return this.todoElement;
  }
  _toggleCheck() {
    this._data.completed = !this._data.completed;
  }

  _setEventListeners() {
    const todoDeleteBtn = this.todoConfig.deleteButton;
    this._todoCheckboxEl.addEventListener("change", () => {
      this._toggleCheck();
      this._handleCheckStatus(this._data.completed);
    });
    todoDeleteBtn.addEventListener("click", () => {
      this.todoElement.remove();
      this._handleDeleteStatus(this._data.completed);
    });
  }
}
