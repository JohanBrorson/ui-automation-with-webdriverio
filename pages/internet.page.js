class Internet {
  get pageHeader() {
    return $("h1.heading");
  }
  get subHeading() {
    return $("h2");
  }
  get pageFooter() {
    return $("#page-footer");
  }
  get list() {
    return $("ul");
  }
  get listItems() {
    return this.list.$$("li");
  }
  get firstLink() {
    return $("ul li:nth-child(1) a");
  }

  listItemAtIndex(index) {
    return this.list.$(`li:nth-child(${index})`);
  }

  getListItemText() {
    this.listItems.filter(element => {
      console.log(element.getText());
    });
  }

  getListItemTextAtIndex(index) {
    console.log(this.listItemAtIndex(index).getText());
  }

  clickOnFirstLink() {
    if (this.firstLink.isDisplayed() === true) {
      this.firstLink.click();
    }

    // Pause 5 s to see what's happening
    browser.pause(5000);
  }
}

module.exports = new Internet();
