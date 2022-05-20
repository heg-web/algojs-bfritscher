const chai = require("chai");
const expect = chai.expect;

describe("Assignment: Slice and Splice", function() {
  const frankenSplice = require("../src/frankenSplice").frankenSplice;
  describe("frankenSplice", function() {
    it("works on numbers", function() {
      expect(frankenSplice([1, 2, 3], [4, 5, 6], 1)).to.eql([4, 1, 2, 3, 5, 6]);
      expect(frankenSplice([1, 2, 3], [4, 5], 1)).to.eql([4, 1, 2, 3, 5]);
    });
    it("works on strings", function() {
      expect(
        frankenSplice(
          ["claw", "tentacle"],
          ["head", "shoulders", "knees", "toes"],
          2
        )
      ).to.eql(["head", "shoulders", "claw", "tentacle", "knees", "toes"]);
    });

    it("works on mixed content", function() {
      expect(frankenSplice([1, 2], ["a", "b"], 1)).to.eql(["a", 1, 2, "b"]);
    });
  });
});
