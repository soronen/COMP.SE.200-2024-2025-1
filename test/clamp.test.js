import { expect } from "chai";
import clamp from "../src/clamp.js";

describe("clamp", () => {
  it("should clamp a number out of bounds", () => {
    expect(clamp(10, -5, 5)).to.equal(5);
    expect(clamp(-10, -5, 5)).to.equal(-5);
    expect(clamp(0, -5, 5)).to.equal(0);
  });

  it("should return the number if it is within the bounds", () => {
    expect(clamp(3, 1, 5)).to.equal(3);
    expect(clamp(-3, -5, 0)).to.equal(-3);
  });

  it("should handle cases where lower and upper bounds are the same", () => {
    expect(clamp(10, 5, 5)).to.equal(5);
    expect(clamp(-10, -5, -5)).to.equal(-5);
  });

  it("should handle cases where the number is NaN", () => {
    expect(clamp(NaN, -5, 5)).to.be.NaN;
  });
});