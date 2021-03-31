const args = process.argv;

const sum = function(args) {
  return Number(args[2]) + Number(args[3]);
};

console.log(sum(args));

