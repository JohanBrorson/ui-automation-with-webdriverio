class Iframe {
  get iframeBody() {
    return $("#tinymce");
  }
  get iframe() {
    return $("#mce_0_ifr");
  }

  navigate() {
    browser.url("/iframe");
  }

  switchToIframe() {
    this.iframe.waitForDisplayed();
    browser.switchToFrame(this.iframe);
  }

  sendTextToBody(text) {
    this.iframeBody.waitForDisplayed();
    this.iframeBody.clearValue();
    this.iframeBody.click();
    this.iframeBody.keys(text);
  }

  getIframeBodyText() {
    return this.iframeBody.getText();
  }
}

module.exports = new Iframe();
