class Dropdown {
  get dropdownMenu() {
    return $("#dropdown");
  }
  get dropdownMenuOptionOne() {
    return $("#dropdown option:nth-child(2)");
  }

  navigate() {
    browser.url("/dropdown");
  }

  clickDropdownMenu() {
    this.dropdownMenu.waitForDisplayed();
    this.dropdownMenu.click();
  }

  clickDropdownMenuOptionOne() {
    this.dropdownMenuOptionOne.waitForDisplayed();
    this.dropdownMenuOptionOne.click();
  }

  isDropdownMenuOptionOneSelected() {
    return this.dropdownMenuOptionOne.isSelected();
  }
}

module.exports = new Dropdown();
