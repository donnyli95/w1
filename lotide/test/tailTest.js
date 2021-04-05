const assert = require("chai").assert;
const tail = require('../tail');

// Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

describe("#tail", () => {

  it("returns 2 for result.length", () => {
    assert.strictEqual(result.length, 2)
  });

  it("returns 'Lighthouse' for result[0]", () => {
    assert.strictEqual(result[0], 'Lighthouse')
  });

  it("returns 'Labs' for result[1]", () => {
    assert.strictEqual(result[1], 'Labs')
  });
});