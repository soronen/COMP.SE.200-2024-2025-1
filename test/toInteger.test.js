import { expect } from "chai";
import toInteger from "../src/toInteger.js";

describe("toInteger", () => {
  it("should return 3", () =>
    expect(toInteger(3.2)).to.eql(3)
  );

  it("should return 0", () =>
    expect(toInteger(Number.MIN_VALUE)).to.eql(0)
  );

  it("should return 1.7976931348623157e+308", () =>
    expect(toInteger(Infinity)).to.eql(1.7976931348623157e+308)
  );

  it("should return 3", () =>
    expect(toInteger("3.2")).to.eql
  );
});