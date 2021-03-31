const countLetters = function(string) {
  const results = {}

  for (const letters of string) {
    if (letters !== ' '){
      if (!results[letters]) {
        results[letters] = 1;
      } else {
        results[letters] += 1;
      }
    }
  }
  
  console.log(results);
  return results;
}

countLetters("light house labs");

/*
h: 1
l: 2
o: 5
*/