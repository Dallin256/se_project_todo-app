import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({
    popupSelector,
    handleFormSubmit,
    handleFormSubmitUpdate,
    getId,
  }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupEl.querySelector("form");
    this._handleFormSubmitUpdate = handleFormSubmitUpdate;
    this._id = getId;
  }

  _getInputValues() {
    const inputList = this._popupForm.querySelectorAll(
      "select, input, textarea"
    );
    const values = { id: this._id() };

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
