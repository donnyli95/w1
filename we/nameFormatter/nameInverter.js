const nameInverter = function(name) {
  if (name === '') {
    return '';
  }

  if (name === undefined) throw new Error('Error');


  let nameArr = name.split(" ");
  let counter = 0;
  let newNameArr = [];
  for (let val of nameArr) {
    if (val !== '') {
      counter += 1;
      newNameArr.push(val);
    }
  }

  if (counter === 1) {
    for (let letter of newNameArr[0]) {
      if (letter === '.') {
        return '';
      }
    }
    return newNameArr;
  } else if (counter === 2) {
    for (let words of name) {
      for (let letters of words) {
        if (letters === '.') {
          return `${newNameArr[0]} ${newNameArr[1]}`;
        }
      }
    }
    return `${newNameArr[1]}, ${newNameArr[0]}`;
  } else if (counter === 3) {
    return `${newNameArr[0]} ${newNameArr[2]}, ${newNameArr[1]}`;
  }



  return name;
};

module.exports = nameInverter;
