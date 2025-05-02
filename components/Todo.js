class Todo {
  constructor(data, selector) {
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

  _setEventListeners() {
    const todoDeleteBtn = this.todoConfig.deleteButton;
    this._todoCheckboxEl.addEventListener("click", () => {
      this._data.completed = !this._data.completed;
    });
    todoDeleteBtn.addEventListener("click", () => {
      this.todoElement.remove();
    });
  }
}

export default Todo;
