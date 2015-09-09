describe('numberList', function() {
  it("creates an array of all numbers from 2 to the inputted number", function() {
    expect(numberList(5)).to.eql([2,3,4,5]);
  });
});

describe('primeSifter', function() {
  it("returns an array of all prime numbers up to inputted number", function() {
    expect(primeSifter(12)).to.eql([2,3,5,7,11]);
  });

  it("doesn't f$&# up when it ends on a prime number", function() {
    expect(primeSifter(7)).to.eql([2,3,5,7]);
  });
});
