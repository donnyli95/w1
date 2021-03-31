const number = process.argv[2];

const rollDice = function(number) {
  let output = [];
  for (let i = 0; i < number; i++) {
    output.push(Math.ceil(Math.random() * 6));
  }
  return output.join(", ");
};

const diceRolls = rollDice(number);
console.log(`Rolled ${number} dice: ${diceRolls}`);