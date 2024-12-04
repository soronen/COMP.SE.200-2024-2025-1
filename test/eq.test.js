import { expect } from "chai";
import eq from "../src/eq.js";

describe("eq", () => {
  it("should return true for equal values", () => {
    expect(eq(1, 1)).to.equal(true);
    expect(eq('abc', 'abc')).to.equal(true);
    expect(eq(NaN, NaN)).to.equal(true);
    expect(eq(null, null)).to.equal(true);
    expect(eq(undefined, undefined)).to.equal(true);
  });

  it("should return false for non-equal values", () => {
    expect(eq(1, 2)).to.equal(false);
    expect(eq('abc', 'def')).to.equal(false);
    expect(eq(NaN, 1)).to.equal(false);
    expect(eq(null, undefined)).to.equal(false);
  });
  
  it("should return true for 1 and '1' in accordance with the ES standard", () => {
    expect(eq(1, '1')).to.equal(true);
  });
});
  