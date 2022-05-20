const chai = require("chai");
const expect = chai.expect;

describe("Assignment: Nesting Loops or ?", function() {
  const multiply = require("../src/multiply");
  const multiplyArray = multiply.multiplyArray;
  describe("multiplyArray", function() {
    it("empty array return 1", function() {
      expect(multiplyArray([])).to.equal(1);
    });
    it("does multiply an array", function() {
      expect(multiplyArray([3, 2])).to.equal(6);
    });
    it("supports float", function() {
      expect(multiplyArray([-3, 4, 2.5])).to.equal(-30);
    });
  });

  const multiplyAll = multiply.multiplyAll;
  describe("multiplyAll", function() {
    it("supports array of array", function() {
      expect(multiplyAll([[1], [2], [3]])).to.equal(6);
    });
    it("supports array of different lengths", function() {
      expect(multiplyAll([[1, 2], [3, 4], [5, 6, 7]])).to.equal(5040);
    });
    it("works with float", function() {
      expect(multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]])).to.equal(54);
    });
  });

  const multiplyAllMixed = multiply.multiplyAllMixed;
  describe("multiplyAllMixed", function() {
    it("supports any combinasion of array and any deepth", function() {
      expect(multiplyAllMixed([3, [2], [4, [5, [6], 7], 8]])).to.equal(40320);
    });
  });
});
