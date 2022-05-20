const chai = require("chai");
const expect = chai.expect;

describe("Assignment: Diff Two Arrays", function() {
  const diffArray = require("../src/diffArray").diffArray;
  describe("diffArray", function() {
    it("find the diff", function() {
      expect(
        diffArray(
          ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
          ["diorite", "andesite", "grass", "dirt", "dead shrub"]
        )
      ).to.eql(["pink wool"]);
      expect(
        diffArray(
          ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
          ["diorite", "andesite", "grass", "dirt", "dead shrub"]
        ).sort()
      ).to.eql(["diorite", "pink wool"]);
      expect(
        diffArray(
          ["andesite", "grass", "dirt", "dead shrub"],
          ["andesite", "grass", "dirt", "dead shrub"]
        )
      ).to.eql([]);
      expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])).to.eql([4]);
      expect(
        diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]).sort()
      ).to.eql(["piglet", 4].sort());
      expect(
        diffArray([], ["snuffleupagus", "cookie monster", "elmo"]).sort()
      ).to.eql(["snuffleupagus", "cookie monster", "elmo"].sort());
      expect(diffArray([1, "calf", 3, "piglet"], [7, "filly"]).sort()).to.eql(
        [1, "calf", 3, "piglet", 7, "filly"].sort()
      );
    });
  });
});
