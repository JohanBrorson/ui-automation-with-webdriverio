class Windows {
  get hereLink() {
    return $(".example a");
  }

  navigate() {
    browser.url("/windows");
  }

  clickHereLink() {
    this.hereLink.waitForClickable();
    this.hereLink.click();
  }
}

module.exports = new Windows();
