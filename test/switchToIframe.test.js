const iframePage = require("../pages/iframe.page");

describe("Switch to Iframe", function () {
  it("Should switch to iframe", () => {
    const text = "This is the text in the iframe body";
    iframePage.navigate();
    iframePage.switchToIframe();
    iframePage.sendTextToBody(text);
    expect(iframePage.getIframeBodyText()).equals(text);
  });
});
