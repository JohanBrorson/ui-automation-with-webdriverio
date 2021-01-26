internetPage = require("../pages/internet.page");

describe("Scroll to element", function () {
  it("should scroll to the footer", () => {
    browser.url("/");
    internetPage.pageHeader.waitForDisplayed();
    internetPage.scrollToPageFooter();
    expect(internetPage.pageFooter.isDisplayedInViewport()).to.be.true;
  });
});
