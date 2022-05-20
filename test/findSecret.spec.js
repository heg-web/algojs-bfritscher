const chai = require("chai");
const expect = chai.expect;

describe("Assignment: Magic Object", function() {
  const findSecret = require("../src/findSecret").findSecret;
  describe("findSecret", function() {
    it("find the right door", function() {
      expect(
        findSecret({
          start: {
            name: "abc",
            params: [2, 6]
          },
          abc(a, b) {
            return a / b;
          },
          names: ["a", "b", "c", "d"]
        })
      ).to.equal("d");

      expect(
        findSecret({
          start: {
            name: "bac",
            params: [1, 2]
          },
          bac(a, b) {
            return a;
          },
          names: ["a", "b", "c", "d"]
        })
      ).to.equal("c");
    });
  });
});
