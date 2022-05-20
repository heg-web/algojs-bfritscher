const chai = require("chai");
const expect = chai.expect;

describe("Assignment: Chunky Monkey", function() {
  const chunkArrayInGroups = require("../src/chunkArrayInGroups")
    .chunkArrayInGroups;
  describe("chunkArrayInGroups", function() {
    it("works with strings", function() {
      expect(chunkArrayInGroups(["a", "b", "c", "d"], 2)).to.eql([
        ["a", "b"],
        ["c", "d"]
      ]);
    });
    it("works with numbers and differnt sizes", function() {
      expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)).to.eql([
        [0, 1, 2],
        [3, 4, 5]
      ]);
      expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)).to.eql([
        [0, 1],
        [2, 3],
        [4, 5]
      ]);
    });
    it("works with remainder of division", function() {
      expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)).to.eql([
        [0, 1, 2, 3],
        [4, 5]
      ]);
      expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)).to.eql([
        [0, 1, 2],
        [3, 4, 5],
        [6]
      ]);
      expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)).to.eql([
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8]
      ]);
      expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)).to.eql([
        [0, 1],
        [2, 3],
        [4, 5],
        [6, 7],
        [8]
      ]);
    });
  });
});
