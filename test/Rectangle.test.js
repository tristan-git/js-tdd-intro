// test/capitalizeFirstLetters.test.js
const assert = require("assert");
const Rectangle = require("../rectangle");

// give the test suite a label using describe
describe("rectangle", () => {
  // give the test a label using it

  it("is a square", () => {
    const rectangle = new Rectangle(5, 5);
    assert.strictEqual(rectangle.isSquare(), true);
  });

  it("is not a square", () => {
    const rectangle = new Rectangle(10, 5);
    assert.strictEqual(rectangle.isSquare(), false);
  });

  it("calcul surface", () => {
    const rectangle = new Rectangle(13, 7);
    assert.strictEqual(rectangle.getArea(), 91);
  });

  it("calcul perimetre (rectangle)", () => {
    const rectangle = new Rectangle(13, 7);
    assert.strictEqual(rectangle.getPerimeter(), 40);
  });

  it("calcul perimetre (carre)", () => {
    const rectangle = new Rectangle(5, 5);
    assert.strictEqual(rectangle.getPerimeter(), 25);
  });
});
