class Checkboxes {

  navigate() {
    browser.url("/checkboxes");
  }

  checkbox(index) {
    return $(`#checkboxes input:nth-child(${index})`);
  }

  clickCheckbox(index) {
    this.checkbox(index).waitForDisplayed();
    this.checkbox(index).click();
  }

}

module.exports = new Checkboxes();
