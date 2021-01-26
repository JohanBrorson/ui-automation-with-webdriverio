const dragAndDropPage = require("../pages/drag-and-drop.page");
const crossbrowserDragAndDropPage = require("../pages/crossbrowser-drag-and-drop.page");

describe("Drag and Drop", function () {
  it.skip("should drag column A to column B", () => {
    dragAndDropPage.navigate();
    dragAndDropPage.dragColumnAToColumnB();
    browser.pause(3000);
    expect(dragAndDropPage.getColumBheaderText()).equals("A");
  });

  it("Should drag and drop", () => {
    crossbrowserDragAndDropPage.navigate();
    crossbrowserDragAndDropPage.dragDraggableToDroppable();
    expect(crossbrowserDragAndDropPage.getDroppableParagraphText()).equals(
      "Dropped!"
    );
  });
});
