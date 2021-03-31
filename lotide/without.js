// Using array methods
const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
     if (!itemsToRemove.includes(source[i])) {
       newArray.push(source[i]);
     } 
    }
  return newArray;
}

// nothing using array methods
const without2 = function(source, itemsToRemove) {
  let newArray = source.slice(0);
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < newArray.length; j++) {
      if (newArray[j] === itemsToRemove[i]) {
        newArray.splice(j, 1);
      }
    }
  }

  return newArray;
}

// TEST CASES
console.log(without2([1, 2, 3], [1])) // => [2, 3]

console.log(without2(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]


// TESTING CODE USAGE
const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const words = ["hello", "world", "lighthouse"];
console.log(without2(words, ["lighthouse"])); 

assertArraysEqual(words, ["hello", "world", "lighthouse"]);