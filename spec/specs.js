describe ('pigLatin', function () {
  it("adds 'ay' to the end of a word starting with a vowel", function () {
    expect(pigLatin("island")).to.equal("islanday");
  });

  it("moves first letter to end of word if it starts with one consonant and adds 'ay'", function() {
    expect(pigLatin("carousel")).to.equal("arouselcay");
  });

  it("moves first two letters to end of word if it starts with two consonant and adds 'ay'", function() {
    expect(pigLatin("pretty")).to.equal("ettypray");
  });
});
