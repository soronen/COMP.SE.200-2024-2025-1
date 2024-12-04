import { expect } from 'chai';
import capitalize from '../src/capitalize.js'


describe("capitalize", () => {
  it("should return 'Word' from word", () => {
    const result = capitalize("word");
    expect(result).to.equal("Word");
  });
  it("should return 'Fred' from FRED", () => {
    const result = capitalize("FRED");
    expect(result).to.equal("Fred");
  });
});