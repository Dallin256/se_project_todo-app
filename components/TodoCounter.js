export default class TodoCounter {
  constructor(todos, selector) {
    this._element = document.querySelector(selector);
    this._completed = todos.filter((todoItem) => todoItem.completed).length;
    this._total = todos.length;
    this._updateText();
  }

  updateCompleted = (increment) => {
    if (increment === true) {
      this._completed++;
    } else {
      this._completed--;
    }
    this._updateText();
  };

  updateTotal = (increment) => {
    if (increment === true) {
      this._total--;
    } else if (increment === false) {
      this._total++;
    } else {
      console.log("Error, Incorrect value passed.");
    }
    this._updateText();
  };

  _updateText() {
    this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;
  }
}
