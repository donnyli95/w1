const chai = require('chai'); // import chai so we can use it 
const assert = chai.assert;   // to assert our test

const shouldBuyCar = require('../shouldBuyCar') // import shouldBuyCar function to test

describe("#shouldBuyCar()", function() { //add describe for shouldBuyCar function that we are testing

  it("should return false if it's a hatchback", function() {
 // Add an expectation that the function should return false if it's a hatchback
    const car = {
      type: "hatchback"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return true when the car is pink", function() {
    const car = {
      color: "pink"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

  it("should return false when there are no details about the car", function() {
    const car = {};
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);

  });

  it("should return false when the car is a hatchback", function() {
    const car = {
      type: "hatchback"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return false when the car is a hatchback and pink", function() {
    const car = {
      type: "hatchback",
      color: "pink"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return true when the car has 6 litres/100km and is under or equal to $5,000", function() {
    const car = {
      litresPer100km: 6,
      price: 4000
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);

  });

  it("should return true when the car has 11 litres/100km and is under or equal to $5,000", function() {
    const car = {
      litresPer100km: 11,
      price: 4000
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

  it("should return false when the car has 6 litres/100km and is over $5,000", function() {
    const car = {
      litresPer100km: 6,
      price: 6000
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return false when the car has 11 litres/100km and is over $5,000", function() {
    const car = {
      litresPer100km: 11,
      price: 6000
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return false when the car has 5 litres/100km and is under or equal to $5,000", function() {
    const car = {
      litresPer100km: 5,
      price: 4000
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return false when the car has 12 litres/100km and is under or equal to $5,000", function() {
    const car = {
      litresPer100km: 12,
      price: 4000
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return undefined when there is no car", function() {
    const shouldBuy = shouldBuyCar(undefined);
    assert.isUndefined(shouldBuy);
  });
  
});

