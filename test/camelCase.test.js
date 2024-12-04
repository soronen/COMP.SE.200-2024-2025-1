import { expect } from 'chai';
import camelCase from '../src/camelCase.js'

describe("camelCase", () => {
  it("should return 'fooBar' from 'Foo Bar'", () => {
    const result = camelCase("Foo Bar");
    expect(result).to.equal("fooBar");
  });
  it("should return 'fooBar' from '--foo-bar--'", () => {
    const result = camelCase("--foo-bar--");
    expect(result).to.equal("fooBar");
  });
  it("should return 'fooBar' from '__FOO_BAR__'", () => {
    const result = camelCase("__FOO_BAR__");
    expect(result).to.equal("fooBar");
  });
});