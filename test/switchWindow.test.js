const newWindowsPage = require("../pages/new-windows.page");
const windowsPage = require("../pages/windows.page");

describe("Switch Window", function () {
  it("Should switch to the next window", () => {
    windowsPage.navigate();
    windowsPage.clickHereLink();
    newWindowsPage.switchTo();
    expect(newWindowsPage.getHeadingText()).equals("New Window");
  });
});
