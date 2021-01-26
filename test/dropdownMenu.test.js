const dropdownPage = require("../pages/dropdown.page");

describe("Dropdown menu", function () {
  it("should select option 1", () => {
    dropdownPage.navigate();
    dropdownPage.clickDropdownMenu();
    dropdownPage.clickDropdownMenuOptionOne();
    expect(dropdownPage.isDropdownMenuOptionOneSelected()).to.be.true;
  });
});
