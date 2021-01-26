class KeyPresses {

  get target() {
    return $(`#target`);
  }

  get result() {
    return $(`#result`);
  }

  navigate() {
    browser.url("/key_presses");
  }

  sendKeysToTarget(text) {
    this.target.waitForDisplayed();
    this.target.keys(text);
  }

  getResultText() {
    this.result.waitForDisplayed();
    return this.result.getText();
  }

}

module.exports = new KeyPresses();
