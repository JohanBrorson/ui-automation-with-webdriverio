const internetPage = require("../pages/internet.page");

describe("Interacting with elements", () => {
  it("should get text for element", () => {
    browser.url("/");
    console.log(internetPage.pageHeader.getText());

    internetPage.getListItemText();
    internetPage.getListItemTextAtIndex(3);
  });

  it("should display a page footer", () => {
    console.log(
      `Footer is displayed: ${internetPage.pageFooter.isDisplayed()}`
    );
  });

  it("should have a heading", () => {
    console.log(`Header exists: ${internetPage.pageHeader.isExisting()}`);
  });

  it("should have a heading", () => {
    console.log(
      `Header is in viewport: ${internetPage.pageHeader.isDisplayedInViewport()}`
    );
  });

  it("should have subheader enabled", () => {
    console.log(`Subheader is enabled: ${internetPage.subHeading.isEnabled()}`);
  });

  it("should be possible to click on a link", () => {
    internetPage.clickOnFirstLink();
  });
});
