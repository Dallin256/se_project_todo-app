class Todo {
  constructor(data, selector) {
    console.log(data, selector);
  }
  getView() {
    console.log("get View Fired");
  }
  _setEventListeners() {}
}

export default Todo;
