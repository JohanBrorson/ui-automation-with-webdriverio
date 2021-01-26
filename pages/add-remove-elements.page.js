class AddRemoveElements {
  get exampleButton() {
    return $(".example button");
  }

  deleteButton(index) {
    return $(`#elements button:nth-child(${index})`);
  }

  navigate() {
    browser.url("/add_remove_elements/");
  }

  clickExampleButton() {
    this.exampleButton.waitForDisplayed();
    this.exampleButton.click();
  }

  clickDeleteButton(index) {
    this.deleteButton(index).waitForDisplayed();
    this.deleteButton(index).click();
  }

  isDeleteButtonToExisting(index) {
    this.deleteButton(index).waitForExist();
    return this.deleteButton(index).isExisting();
  }

  isDeleteButtonToNotExisting(index) {
    this.deleteButton(index).waitForExist(500, true);
    return !this.deleteButton(index).isExisting();
  }
}

module.exports = new AddRemoveElements();
