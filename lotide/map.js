const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};


// testing our function
const results1 = map(words, word => word[0]);
console.log(results1);

//tests
const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } else {
    return false;
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

// TEST ASSERTIONS
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results1, [1]);
