describe ('findVowel', function () {
  it("adds 'ay' to the end of a word starting with a vowel", function () {
    expect(findVowel("island")).to.equal("islanday");
  });
});

describe ('findConsonant', function () {
  it("moves all consonants before the first vowel to end of word and adds 'ay'", function() {
    expect(findConsonant("coffee")).to.equal("offeecay");
  });
});
