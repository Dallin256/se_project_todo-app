export default class Popup {
  constructor(popupSelector) {
    this._popupEl = popupSelector;
    this._popupCloseButton = this._popupEl.querySelector(".popup__close");
  }

  open() {
    this._popupEl.classList.add("popup_visible");
  }

  close() {
    this._popupEl.classList.remove("popup_visible");
  }

  _handleEscapeClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupCloseButton.addEventListener("click", () => {
      this.close();
    });

    const handleEscListener = () => {
      document.addEventListener("keydown", (evt) => {
        this._handleEscapeClose(evt);
      });
      document.removeEventListener("keydown", (evt) => {
        this._handleEscapeClose(evt);
      });
    };

    handleEscListener();

    this._popupEl.addEventListener("click", (evt) => {
      if (evt.target === this._popupEl) {
        this.close();
      }
    });
  }
}
