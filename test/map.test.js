import { expect } from "chai";
import map from "../src/map.js";

describe("map", () => {
  it("should square the numbers in the array", () => {
    const result = map([4, 8], (n) => n * n);
    expect(result).to.deep.equal([16, 64]);
  });
  it("should return an empty array when given an empty array", () => {
    const result = map([], (n) => n * n);
    expect(result).to.deep.equal([]);
  });
  it("should return an empty array when given null", () => {
    const result = map(null, (n) => n * n);
    expect(result).to.deep.equal([]);
  });
});