// test/capitalizeFirstLetters.test.js
const assert = require("assert");
const capitalizeFirstLetters = require("../capitalizeFirstLetters");

// give the test suite a label using describe
describe("capitalizeFirstLetters", () => {
  // give the test a label using it
  it("is a function accepting one argument", () => {
    assert.strictEqual(typeof capitalizeFirstLetters, "function");
    assert.strictEqual(capitalizeFirstLetters.length, 1);
  });

  it("works with several words", () => {
    assert.strictEqual(capitalizeFirstLetters("toto tata titi"), "Toto Tata Titi");
  });

  it("works with 1 word", () => {
    assert.strictEqual(capitalizeFirstLetters("toto"), "Toto");
  });

  it("works with more space", () => {
    assert.strictEqual(capitalizeFirstLetters("  toto "), "Toto");
  });

  it("works with an empty string", () => {
    assert.strictEqual(capitalizeFirstLetters(""), "");
  });
});
