import { expect } from "chai";
import compact from "../src/compact.js";

describe("compact", () => {
  it("should return [1, 2, 3]", () =>
    expect(compact([0, 1, false, 2, '', 3])).to.eql([1, 2, 3])
  );  
  it("should return empty array", () =>
    expect(compact([0, false, '', null, undefined, NaN])).to.eql([])
  );
});