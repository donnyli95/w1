const findWaldo = function(names, found) {
  names.forEach(element => {
    if (element === 'Waldo') {
      found(names.indexOf(element));
    }
  });
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log(`Waldo is located at: ${index}`);
});

