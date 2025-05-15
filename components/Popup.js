export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
  }

  open() {
    this._popupSelector.classList.add("popup_visible");
  }

  close(element) {
    element.classList.remove("popup_visible");
  }

  _handleEscapeClose() {}

  setEventListeners() {}
}
