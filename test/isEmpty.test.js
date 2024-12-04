import { expect } from "chai";
import isEmpty from "../src/isEmpty.js";

describe("isEmpty", () => {

  it("should return true for an empty array", () => {
    expect(isEmpty([])).to.eql(true)
  });

  it("should return true for null", () => {
    expect(isEmpty(null)).to.eql(true)
  });

  it("should return true for 1", () => {
    expect(isEmpty(1)).to.eql(true)
  });

  it("should return true for an empty object", () => {
    expect(isEmpty({})).to.eql(true)
  });

  it("should return false for [1, 2, 3]", () => {
    expect(isEmpty([1, 2, 3])).to.eql(false)
  });

  it("should return false for 'abc'", () => {
    expect(isEmpty('abc')).to.eql(false)
  });

  it("should return false for {a: 1, b: 2, c: 3}", () => {
    expect(isEmpty({ a: 1, b: 2, c: 3 })).to.eql(false)
  });

  it("should return true if map or set is empty", () => {
    expect(isEmpty(new Map())).to.eql(true)
    expect(isEmpty(new Set())).to.eql(true)
  });

  it("should return true for an empty prototype", () => {
    function Foo() { }
    expect(isEmpty(Foo.prototype)).to.eql(true);
  });

  it("should return false for a prototype with properties", () => {
    function Foo() { }
    Foo.prototype.c = 3;
    expect(isEmpty(Foo.prototype)).to.eql(false);
  });
});