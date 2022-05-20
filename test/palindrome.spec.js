const chai = require("chai");
const expect = chai.expect;

describe("Assignment: Palindrome Checker", function() {
  const palindrome = require("../src/palindrome").palindrome;
  describe("palindrome", function() {
    it("returns true if is palindrome", function() {
      expect(palindrome("eye")).to.equal(true);
    });
    it("returns false otherwise", function() {
      expect(palindrome("nope")).to.equal(false);
      expect(palindrome("almostomla")).to.equal(false);
    });
    it("ignores everything which is not a alphanum", function() {
      expect(palindrome("_eye")).to.equal(true);
      expect(palindrome("race car")).to.equal(true);
      expect(palindrome("A man, a plan, a canal. Panama")).to.equal(true);
      expect(palindrome("never odd or even")).to.equal(true);
      expect(palindrome("0_0 (: /- :) 0-0")).to.equal(true);
      expect(palindrome("1 eye for of 1 eye.")).to.equal(false);
      expect(palindrome("five|_/|four")).to.equal(false);
      expect(palindrome("not a palindrome")).to.equal(false);
    });
    it("ignores Case", function() {
      expect(palindrome("My age is 0, 0 si ega ym.")).to.equal(true);
    });
  });
});
