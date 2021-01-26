const timeout = 4000;

class DynamicControls {
  get enableButton() {
    return $("#input-example button");
  }
  get inputField() {
    return $("#input-example input");
  }
  get pageButton() {
    return $("#checkbox-example button");
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

  clickPageButton() {
    this.pageButton.waitForDisplayed();
    this.pageButton.click();
  }

  waitUntilPageButtonTextEquals(text) {
    try {
      return browser.waitUntil(() => {
        return this.pageButton.getText() === text;
      });
    } catch (err) {
      return false;
    }
  }
}

module.exports = new DynamicControls();
