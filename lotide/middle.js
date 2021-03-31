// TEST/ASSERTION FUNCTIONS
const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

// ACTUAL FUNCTION
const middle = function(array) {
  //...
  let newArray = [];
  if (array.length < 3) {
    return newArray;
  } else if (array.length % 2 !== 0) {
    newArray.push(array[Math.floor(array.length / 2)]);
  } else if (array.length % 2 === 0) {
    newArray.push(array[array.length / 2 - 1],array[array.length / 2]);
  }
  return newArray;
};

// TEST CODE
// ...
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

// TEST CASES
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);





