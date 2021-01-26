const timeout = 4000;

class DynamicControls {
  get enableButton() {
    return $("#input-example button");
  }
  get inputField() {
    return $("#input-example input");
  }

  navigate() {
    browser.url("/dynamic_controls");
  }

  toggleEnableDisableButton() {
    this.enableButton.waitForDisplayed();
    this.enableButton.click();
  }

  isInputFieldEnabled() {
    this.inputField.waitForEnabled(timeout);
    return this.inputField.isEnabled();
  }

  isInputFieldDisabled() {
    this.inputField.waitForEnabled(timeout, true);
    return !this.inputField.isEnabled();
  }
}

module.exports = new DynamicControls();
