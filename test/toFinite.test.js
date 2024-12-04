import { expect } from "chai";
import toFinite from "../src/toFinite.js";

describe("toFinite", () => {
  it("should return 3.2", () =>
    expect(toFinite(3.2)).to.eql(3.2)
  );

  it("should return 5e-324", () =>
    expect(toFinite(Number.MIN_VALUE)).to.eql(5e-324)
  );

  it("should return 1.7976931348623157e+308", () =>
    expect(toFinite(Infinity)).to.eql(1.7976931348623157e+308)
  );

  it("should return 3.2", () =>
    expect(toFinite("3.2")).to.eql(3.2)
  );

  it("should return the max finite value for Infinity", () => {
    expect(toFinite(Infinity)).to.eql(1.7976931348623157e+308);
    expect(toFinite(-Infinity)).to.eql(-1.7976931348623157e+308);
  });


  it("should return 0 for falsy values other than 0", () => {
    expect(toFinite(null)).to.eql(0);
    expect(toFinite(undefined)).to.eql(0);
    expect(toFinite(false)).to.eql(0);
    expect(toFinite(NaN)).to.eql(0);
    expect(toFinite("")).to.eql(0);
  });

});