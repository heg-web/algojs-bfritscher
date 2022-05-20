const chai = require("chai");
const expect = chai.expect;

describe("Assignment: Game of Golf", function() {
  const golfScore = require("../src/golfScore").golfScore;
  describe("golfScore", function() {
    it("provides the right name", function() {
      expect(golfScore(4, 1)).to.equal("Hole-in-one!");
      expect(golfScore(4, 2)).to.equal("Eagle");
      expect(golfScore(5, 2)).to.equal("Eagle");
      expect(golfScore(4, 3)).to.equal("Birdie");
      expect(golfScore(4, 4)).to.equal("Par");
      expect(golfScore(1, 1)).to.equal("Hole-in-one!");
      expect(golfScore(5, 5)).to.equal("Par");
      expect(golfScore(4, 5)).to.equal("Bogey");
      expect(golfScore(4, 6)).to.equal("Double Bogey");
      expect(golfScore(4, 7)).to.equal("Go Home!");
      expect(golfScore(5, 9)).to.equal("Go Home!");
    });
  });
});
