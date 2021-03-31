const letterPositions = function(sentence) {
  const results = {};
  // logic to update results
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [];
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]].push(i);
      }
    }
  }

  console.log(results);
  return results;
};

letterPositions("hello donny");

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

assertArraysEqual(letterPositions("hello donny").n, [8,9]);