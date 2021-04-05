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

module.exports = middle;





