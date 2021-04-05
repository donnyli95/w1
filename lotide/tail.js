const tail = function(array) {
  let newArray = [];

  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }

  return newArray;
};

// console.log(tail([1, 2, 3, 4]));
// console.log(tail([1]));
// console.log(tail([]));

module.exports = tail;