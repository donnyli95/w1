const flatten = (arr) => {
  let newArray = [];
  for (let elem of arr) {
    if (Array.isArray(elem)) {
      for (let arrElem of elem) {
        newArray.push(arrElem);
      }
    } else {
      newArray.push(elem);
    }
  }
  return newArray;
};

// test stuff
flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]

// test assertions
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
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]) , [1, 2, 3, 4, 5, 6]);
