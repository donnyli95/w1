function sumToOne(n) {
  if (n === 1) { // base case?
    return 1;
  }

  return n + sumToOne(n - 1);
}

console.log(sumToOne(4));