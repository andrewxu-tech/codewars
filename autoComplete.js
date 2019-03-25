function autocomplete(input, dictionary) {
  function validate(string) {
    return string.split('').filter(letter => letter.match(/^[a-zA-Z\s-]*$/)).join('');
  }

  let result = dictionary.map(word => {
    return validate(word);
  });
  const validatedInput = validate(input);

  for (let i = 0; i < validatedInput.length; i++) {
    result = result.filter(
      dictionaryEntry => dictionaryEntry.charAt(i).toLowerCase() === validatedInput.charAt(i)
    );
  }

  return result.slice(0, 5);
}

// TODO: Add your tests here
// Starting from Node 10.x, [Mocha](https://mochajs.org) is used instead of our custom test framework.
// [Codewars' assertion methods](https://github.com/Codewars/codewars.com/wiki/Codewars-JavaScript-Test-Framework)
// are still available for now.
//
// For new tests, using [Chai](https://chaijs.com/) is recommended.
// You can use it by requiring:
//     const assert = require("chai").assert;
// If the failure output for deep equality is truncated, `chai.config.truncateThreshold` can be adjusted.

describe("Solution", function() {
  it("should test for something", function() {
    Test.assertDeepEquals(autocomplete('ai', ['airp7676lane', 'airport', 'apple', 'ball']),
      ['airplane', 'airport']);
  });
});
