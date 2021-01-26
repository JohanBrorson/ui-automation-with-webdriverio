class Login {
  get username() { return $("#username") };
  get password() { return $("#password") };
  get loginButton() { return $("button") };

  navigate() {
    browser.url("/login");
  }

  login(username, password) {
    // this.username.waitForDisplayed();
    $("#username").waitForDisplayed()
    this.username.setValue(username);
    this.password.waitForDisplayed();
    this.password.setValue(password);
    this.loginButton.click();
  }
}

module.exports = new Login();
