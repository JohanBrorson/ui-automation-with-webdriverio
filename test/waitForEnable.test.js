const dynamicControlsPage = require("../pages/dynamic-controls.page");

describe("", () => {
  it("should wait for the input field to be enabled/disabled", () => {
    dynamicControlsPage.navigate();
    dynamicControlsPage.toggleEnableDisableButton();
    expect(dynamicControlsPage.isInputFieldEnabled()).to.be.true;
    dynamicControlsPage.toggleEnableDisableButton();
    expect(dynamicControlsPage.isInputFieldDisabled()).to.be.true;
  });
});
