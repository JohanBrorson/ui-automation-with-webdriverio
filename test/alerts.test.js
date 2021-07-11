const alertsPage = require("../pages/alerts.page");

describe("Javascript Alerts", function () {
  it("should get text of alert", () => {
    alertsPage.navigate();
    alertsPage.clickJavascriptAlertButton(1);
    expect(alertsPage.getAlertText()).equals("I am a JS Alert");
    alertsPage.acceptAlert();
    expect(alertsPage.getResultText()).equals(
      "You successfully clicked an alert"
    );
  });

  it("should dismiss alert", () => {
    alertsPage.navigate();
    alertsPage.clickJavascriptAlertButton(2);
    alertsPage.dismissAlert();
    assert.equal("You clicked: Cancel", alertsPage.getResultText());
    expect(alertsPage.getResultText()).equals("You clicked: Cancel");
  });

  it("should send text to the alert", () => {
    const text = "This is some text";
    alertsPage.navigate();
    alertsPage.clickJavascriptAlertButton(3);
    alertsPage.sendAlertText(text);
    expect(alertsPage.getResultText()).equals(`You entered: ${text}`);
  });
});
