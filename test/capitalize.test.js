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
  it('Works on a single word', () => {
    expect(capitalize('word')).to.equal('Word')
  })
  it('Works on two words', () => {
    expect(capitalize('word word')).to.equal('Word word')
  })
  it('Works on an uppercase Word', () => {
    expect(capitalize('Word')).to.equal('Word')
  })
  it('Works a non ascii character', () => {
    expect(capitalize('ålesund')).to.equal('Ålesund')
  })
  it('Does nothing for chinese characters', () => {
    expect(capitalize('裁判')).to.equal('裁判')
  })
  it('Does nothing for numbers', () => {
    expect(capitalize('42')).to.equal('42')
  })
});