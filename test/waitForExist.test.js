const { expect } = require("chai");
const addRemoveElementsPage = require("../pages/add-remove-elements.page");

describe("waitForExist", () => {
  it("should wait for button", () => {
    addRemoveElementsPage.navigate();
    addRemoveElementsPage.clickExampleButton();
    expect(addRemoveElementsPage.isDeleteButtonToExisting(1)).to.be.true;
    addRemoveElementsPage.clickDeleteButton(1);
    expect(addRemoveElementsPage.isDeleteButtonToNotExisting(1)).to.be.true;
  });
});
