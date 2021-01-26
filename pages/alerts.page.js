class Alerts {
  javascriptAlertButton(index) {
    return $(`.example li:nth-child(${index}) button`);
  }

  get result() {
    return $("#result");
  }

  navigate() {
    browser.url("/javascript_alerts");
  }

  acceptAlert() {
    browser.acceptAlert();
  }

  dismissAlert() {
    browser.dismissAlert();
  }

  getAlertText() {
    return browser.getAlertText();
  }

  sendAlertText(text) {
    browser.sendAlertText(text);
    this.acceptAlert();
  }

  clickJavascriptAlertButton(index) {
    this.javascriptAlertButton(index).waitForDisplayed();
    this.javascriptAlertButton(index).click();
  }

  getResultText() {
    this.result.waitForDisplayed();
    return this.result.getText();
  }
}

module.exports = new Alerts();
