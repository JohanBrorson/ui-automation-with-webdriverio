class DragAndDrop {
  get columnA() {
    return $("#column-a");
  }
  get columnB() {
    return $("#column-b");
  }

  navigate() {
    browser.url("/drag_and_drop");
  }

  dragColumnAToColumnB() {
    this.columnA.waitForDisplayed();
    this.columnA.dragAndDrop(this.columnB);
  }

  getColumBheaderText() {
    return this.columnB.getText();
  }
}

module.exports = new DragAndDrop();
