import { expect } from "chai";
import chunk from "../src/chunk.js";

describe("chunk", () => {
  it("should chunk an array without leftovers", () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).to.eql([['a', 'b'], ['c', 'd']]);
  });
  it("should chunk an array with leftovers", () => {
    expect(chunk(['a', 'b', 'c', 'd'], 3)).to.eql([['a', 'b', 'c'], ['d']]);
  });
  it("should chunk an empty array", () => {
    expect(chunk([], 2)).to.eql([]);
  });
});