const findWaldo = function(names, found) {
  names.forEach(element => {
    if (element === 'Waldo') {
      found(names.indexOf(element));
    }
  });
  // for (let i = 0; i < names.length; i++) {
  //   let name = names[i];
  //   if (name === "Waldo") {
  //     found(i);  // execute call back
  //   }
  // }
};

const actionWhenFound = function(index) {
  console.log(`Found him! at index ${index}`);
};


findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);