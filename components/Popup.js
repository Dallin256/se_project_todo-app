export default class Popup {
  constructor(popupSelector) {
    this._popupEl = popupSelector;
  }

  open() {
    this._popupEl.classList.add("popup_visible");
  }

  close() {
    this._popupEl.classList.remove("popup_visible");
  }

  _handleEscapeClose() {}

  setEventListeners() {}
}
