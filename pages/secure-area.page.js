class SecureArea {
  get header() {
    return $('h2');
  }

  getHeaderText() {
    this.header.waitForDisplayed();
    return this.header.getText();
  }
}

module.exports = new SecureArea();
