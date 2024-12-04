import { expect } from "chai";
import compact from "../src/compact.js";

describe("compact", () => {
  it("should remove falsey values", () =>
    expect(compact([0, 1, false, 2, '', 3])).to.equal([1, 2, 3])
  );  
  it("should return empty array when given an array filled with falsey values", () =>
    expect(compact([0, false, '', null, undefined, NaN])).to.deep.equal([])
  );

  it("should return empty array when given an empty array", () =>
    expect(compact([])).to.deep.equal([])
  );
});