import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupEl.querySelector("form");
  }

  _getInputValues() {
    const inputList = this._popupForm.querySelectorAll(
      "select, input, textarea"
    );
    const values = {};

    inputList.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  getForm() {
    return this._popupForm;
  }

  setEventListeners() {
    this.getForm().addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
    super.setEventListeners();
  }
}
