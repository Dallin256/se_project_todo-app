export default class Section {
  constructor({ items, renderer, containerHandler }) {
    this._items = items;
    this._renderer = renderer;
    this._containerHandler = containerHandler;
  }

  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._containerHandler.append(element);
  }
}
