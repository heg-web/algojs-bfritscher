const chai = require("chai");
const expect = chai.expect;

describe("Assignment: Search and Replace", function() {
  const myReplace = require("../src/myReplace").myReplace;
  describe("myReplace", function() {
    it("replaces the word", function() {
      expect(myReplace("Let us go to the store", "store", "mall")).to.equal(
        "Let us go to the mall"
      );
      expect(
        myReplace("This has a spellngi error", "spellngi", "spelling")
      ).to.equal("This has a spelling error");
      expect(
        myReplace(
          "A quick brown fox jumped over the lazy dog",
          "jumped",
          "leaped"
        )
      ).to.equal("A quick brown fox leaped over the lazy dog");
    });

    it("respects the case", function() {
      expect(
        myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
      ).to.equal("He is Sitting on the couch");
      expect(myReplace("His name is Tom", "Tom", "john")).to.equal(
        "His name is John"
      );
      expect(
        myReplace("Let us get back to more Coding", "Coding", "algorithms")
      ).to.equal("Let us get back to more Algorithms");
    });
  });
});
