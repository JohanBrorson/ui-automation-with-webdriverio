class Login {
  get username() {
    return $("#username");
  }
  get password() {
    return $("#password");
  }
  get loginButton() {
    return $("button");
  }
  get errorFlash() {
    return $("#flash.error");
  }

  navigate() {
    browser.url("/login");
  }

  login(username, password) {
    this.username.waitForDisplayed();
    this.username.setValue(username);
    this.password.waitForDisplayed();
    this.password.setValue(password);
    this.loginButton.click();
  }

  hasLoginFailed() {
    try {
      this.errorFlash.waitForDisplayed();
      return this.errorFlash.isDisplayed();
    } catch (err) {
      return false;
    }
  }
}

module.exports = new Login();
