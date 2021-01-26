class Hovers {

  figure(index) {
    return $(`//*[@class='figure'][${index}]/img`);
  }

  figureDetails(index) {
    return $(`(//*[@class="figcaption"])[${index}]/h5`);
  }

  navigate() {
    browser.url("/hovers");
  }

  hoverFigure(index) {
    this.figure(index).waitForDisplayed();
    this.figure(index).moveTo(1, 1);
  }

  getFigureDetailsText(index) {
    this.figureDetails(index).waitForDisplayed();
    return this.figureDetails(index).getText();
  }

}

module.exports = new Hovers();
