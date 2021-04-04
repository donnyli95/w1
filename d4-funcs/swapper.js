const swapper = function(key1, object1, key2, object2) {
  console.log('Swap!');
  let val1;
  let val2;
  
  // loop through the obj1
  // find key1 and value1
  // store key1:value1 to a temp variable
  // find key2 and value2
  // store key2:value2 to temp2 variable
  for (let elem in object1) {
    if (elem === key1) {
      val1 = object1[elem];
    }
  }

  for (let elem in object2) {
    if (elem === key2) {
      val2 = object2[elem];
    }
  }

  object1[key1] = val2;
  object2[key2] = val1;
    
  console.log('object1: ', object1);
  console.log('object2: ', object2);

  
};

swapper('a', { a: 1 , b: 2, c: 3 }, 'c', { a: 4, b: 3, c: 5 });
swapper('b', { a: 8 , b: 7, c: 6 }, 'd', { a: 5, b: 1, c: 2, d: 12});
swapper('c', { a: 1 , b: 3, c: 3, d: 7 }, 'c', { a: 4, b: 0, c: 5 });