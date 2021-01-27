const loginPage = require("../pages/login.page");
const secureAreaPage = require("../pages/secure-area.page");
const user = require("../testdata/user");

describe("Login", () => {
  it("should login", () => {
    loginPage.navigate();
    loginPage.login(user.name, user.password);
    expect(secureAreaPage.getHeaderText()).equals("Secure Area");
  });

  it("should fail to login", () => {
    loginPage.navigate();
    loginPage.login(user.name, `${user.password}x`);
    expect(loginPage.hasLoginFailed()).to.be.true;
  });
});
