class NewWindows {
  get heading() {
    return $("h3");
  }

  getHeadingText() {
    this.heading.waitForDisplayed();
    return this.heading.getText();
  }

  switchTo() {
    browser.switchWindow("/windows/new");
  }
}

module.exports = new NewWindows();
