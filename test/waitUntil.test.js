const { expect } = require("chai");
const dynamicControlsPage = require("../pages/dynamic-controls.page");

describe("waitUntil", () => {
  it("should wait until the button text changes", () => {
    dynamicControlsPage.navigate();
    dynamicControlsPage.clickPageButton();
    expect(dynamicControlsPage.waitUntilPageButtonTextEquals("Add")).to.be.true;
    dynamicControlsPage.clickPageButton();
    expect(dynamicControlsPage.waitUntilPageButtonTextEquals("Remove")).to.be
      .true;
  });
});
