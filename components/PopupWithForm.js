import Popup from "./Popup.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit, handleFormSubmitUpdate }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._todoForms = this._popupEl.querySelector("form");
    this._handleFormSubmitUpdate = handleFormSubmitUpdate;
  }

  _getInputValues() {
    const dateInput = this._todoForms.date.value;
    const setDate = new Date(dateInput);
    setDate.setMinutes(setDate.getMinutes() + setDate.getTimezoneOffset());
    const values = {
      name: this._todoForms.name.value,
      date: setDate,
      id: uuidv4(),
    };

    return values;
  }

  setEventListeners() {
    this._popupEl.addEventListener("submit", () => {
      this._handleFormSubmit(this._getInputValues());
      this._handleFormSubmitUpdate();
    });
    super.setEventListeners();
  }
}
