const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function (array) {
  if (array.length > 0) {
    return array[0]
  } else {
    return undefined
  }

};

// TEST CASES
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Lighthouse");assertEqual(head([]), "Lighthouse");