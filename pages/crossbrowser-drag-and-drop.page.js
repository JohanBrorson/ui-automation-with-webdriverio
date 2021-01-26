class CrossBrowserDragAndDrop {
  get draggable() {
    return $("#draggable");
  }
  get droppable() {
    return $("#droppable");
  }
  get droppableParagraph() { return $('#droppable p') }

  navigate() {
    browser.url("https://crossbrowsertesting.github.io/drag-and-drop.html");
  }

  dragDraggableToDroppable() {
    this.draggable.waitForDisplayed();
    this.draggable.dragAndDrop(this.droppable);
  }

  getDroppableParagraphText() {
    return this.droppableParagraph.getText();
  }
}

module.exports = new CrossBrowserDragAndDrop();
