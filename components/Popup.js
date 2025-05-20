export default class Popup {
  constructor(popupSelector) {
    this._popupEl = popupSelector;
    this._popupCloseButton = this._popupEl.querySelector(".popup__close");
  }

  open() {
    this._popupEl.classList.add("popup_visible");
    document.addEventListener("keydown", () => {
      this._handleEscapeClose;
    });
  }

  close() {
    this._popupEl.classList.remove("popup_visible");
    document.removeEventListener("keydown", () => {
      this._handleEscapeClose;
    });
  }

  _handleEscapeClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  setEventListeners() {
    this._popupCloseButton.addEventListener("click", () => {
      this.close();
    });

    handleEscListener();

    this._popupEl.addEventListener("click", (evt) => {
      if (evt.target === this._popupEl) {
        this.close();
      }
    });
  }
}
