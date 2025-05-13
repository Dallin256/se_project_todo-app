export default class Section {
  constructor({ items, renderer, containerSelector }) {
    this.items = items;
    this.renderer = renderer;
    this.containerSelector = containerSelector;
  }

  renderItems() {
    this.items.array.forEach(() => {
      this.renderer();
    });
  }

  addItem() {}
}
