const { expect } = require("chai");
const internetPage = require("../pages/internet.page");
const checkboxesPage = require("../pages/checkboxes.page");
const loginPage = require("../pages/login.page");
const secureAreaPage = require("../pages/secure-area.page");
const hoversPage = require("../pages/hovers.page");
const keyPressesPage = require("../pages/key-presses.page");

describe("Test element actions", () => {
  it("should click element", () => {
    browser.url("/");
    internetPage.clickOnFirstLink();
    expect(browser.getUrl()).equals("http://the-internet.herokuapp.com/abtest");
  });

  it("should get text", () => {
    browser.url("/");
    expect(internetPage.getListItemTextAtIndex(1)).equals('A/B Testing');
  });

  it("should click checkbox", () => {
    checkboxesPage.navigate();
    checkboxesPage.clickCheckbox(1);
    expect(checkboxesPage.checkbox(1).isSelected(1)).equals(true);
    checkboxesPage.clickCheckbox(1);
    expect(checkboxesPage.checkbox(1).isSelected(1)).equals(false);
  });

  it("should login", () => {
    loginPage.navigate();
    loginPage.login("tomsmith", "SuperSecretPassword!")
    expect(secureAreaPage.getHeaderText()).equals("Secure Area");
  });

  it("should hover on figure", () => {
    hoversPage.navigate();
    const figureIndex = 1;
    hoversPage.hoverFigure(figureIndex);
    expect(hoversPage.getFigureDetailsText(figureIndex)).equals(`name: user${figureIndex}`);
  });

  it("should send keyboard value", () => {
    keyPressesPage.navigate();
    keyPressesPage.sendKeysToTarget("Backspace")
    expect(keyPressesPage.getResultText()).equals('You entered: BACK_SPACE');
  });
});
